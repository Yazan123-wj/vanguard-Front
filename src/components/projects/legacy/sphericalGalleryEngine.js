import * as THREE from 'three';
import { gsap } from 'gsap';
import { projects as fallbackProjects } from './data';

export function initSphericalGallery(root, galleryProjects) {
const projects =
  Array.isArray(galleryProjects) && galleryProjects.length > 0
    ? galleryProjects
    : fallbackProjects;
// Elements (scoped to gallery root)
const container = root.querySelector('#canvas-container');
const soundToggle = root.querySelector('#sound-toggle');
const soundState = root.querySelector('#sound-state');
const clockLondon = root.querySelector('#clock-london');
const clockAuckland = root.querySelector('#clock-auckland');
const detailOverlay = root.querySelector('#detail-overlay');
const detailCloseBtn = root.querySelector('#detail-close-btn');

// Detail Overlay Fields
const detailClient = root.querySelector('#detail-client');
const detailTitle = root.querySelector('#detail-title');
const detailYear = root.querySelector('#detail-year');
const detailTags = root.querySelector('#detail-tags');
const detailGallery = root.querySelector('#detail-gallery');
const detailLead = root.querySelector('#detail-lead');
const detailDesc = root.querySelector('#detail-desc');
const detailVisit = root.querySelector('#detail-visit');

let rafId = 0;
let clockTimer = 0;
const cleanups = [];

// App Variables
let scene, camera, renderer;
let galleryGroup;
let cards = [];
let isDragging = false;
let pointerX = 0, pointerY = 0;
let previousPointerX = 0, previousPointerY = 0;
let targetRotationX = 0, targetRotationY = 0;
let currentRotationX = 0, currentRotationY = 0;
const dragSensitivity = 0.0015;
const wheelSensitivity = 0.00135;
const easeFactor = 0.08; // Lerp factor for drag momentum
const sphereRadius = 1000;
let raycaster, mouse;
let hoveredCard = null;
let clickedCard = null;
let isAnimating = false; // Block inputs during transitions
let idleTime = 0;
let isMuted = true;

// Grid layout variables
let currentLayout = 'sphere'; // 'sphere' or 'grid'
let targetGroupPositionX = 0, targetGroupPositionY = 0;
let currentGroupPositionX = 0, currentGroupPositionY = 0;
const gridPanSensitivity = 1.2;

// Grid layout parameters
const columns = 8;
const rows = 4;

// Audio context (optional - for premium feel)
let audioCtx = null;
function playSynthBeep(freq = 440, type = 'sine', duration = 0.05, vol = 0.05) {
  if (isMuted) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.warn('Audio not allowed yet', e);
  }
}

// 1. Clocks Implementation
function updateClocks() {
  const formatTime = (timeZone) => {
    return new Date().toLocaleTimeString('en-US', {
      timeZone: timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };
  
  try {
    clockLondon.textContent = `${formatTime('Europe/London')} GMT+1`;
    clockAuckland.textContent = `${formatTime('Pacific/Auckland')} GMT+12`;
  } catch (e) {
    // Fallback if timezone formatting fails
    const now = new Date();
    clockLondon.textContent = now.toLocaleTimeString();
    clockAuckland.textContent = now.toLocaleTimeString();
  }
}
if (clockLondon && clockAuckland) {
  updateClocks();
  clockTimer = window.setInterval(updateClocks, 1000);
}

// Sound Toggle click
if (soundToggle && soundState) {
  const onSound = () => {
    isMuted = !isMuted;
    soundState.textContent = isMuted ? 'OFF' : 'ON';
    if (!isMuted) {
      playSynthBeep(523.25, 'sine', 0.1, 0.15); // C5 note
    }
  };
  soundToggle.addEventListener('click', onSound);
  cleanups.push(() => soundToggle.removeEventListener('click', onSound));
}

// 2. Initialize Three.js Scene
function init() {
  // Scene
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x050505, 0.0004);

  // Camera (Center of sphere)
  camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 10, 3000);
  camera.position.set(0, 0, 0);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  container.appendChild(renderer.domElement);

  // Parent Group for all spherical objects
  galleryGroup = new THREE.Group();
  scene.add(galleryGroup);

  // Raycasting Setup
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  // Create grid
  createSphericalGallery();

  // Listeners
  window.addEventListener('resize', onWindowResize);
  cleanups.push(() => window.removeEventListener('resize', onWindowResize));
  setupEvents();

  // Animation Loop
  animate();
}

// 3. Curved Mesh Helper
// Distorts PlaneGeometry vertices to lie on a sphere of radius R
function createCurvedGeometry(width, height, radius) {
  const geom = new THREE.PlaneGeometry(width, height, 16, 16);
  const posAttr = geom.attributes.position;
  
  for (let i = 0; i < posAttr.count; i++) {
    const x = posAttr.getX(i);
    const y = posAttr.getY(i);
    
    // Convert planar coordinate offsets to angles on the sphere
    const theta = x / radius;
    const phi = y / radius;
    
    // Project planar points onto sphere surface in local space
    // We bend the corners towards the camera (which will be looking from origin)
    const newX = radius * Math.cos(phi) * Math.sin(theta);
    const newY = radius * Math.sin(phi);
    const newZ = radius - radius * Math.cos(phi) * Math.cos(theta); // positive direction bends toward +Z (facing camera)
    
    posAttr.setXYZ(i, newX, newY, newZ);
  }
  geom.computeVertexNormals();
  return geom;
}

// Shared Vanguard card chrome (every card matches)
const CARD_BG = '#0d0d0d';
const CARD_TITLE = '#FB4616';
const CARD_MUTED = 'rgba(255, 255, 255, 0.55)';
const CARD_BORDER = 'rgba(255, 255, 255, 0.15)';

// 4. Create Offscreen Canvas Texture for Metadata
function createOverlayTexture(project) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext('2d');
  
  // Clear transparent
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Outer Border Line
  ctx.strokeStyle = CARD_BORDER;
  ctx.lineWidth = 2;
  ctx.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);
  
  // Title (Top Left) — Vanguard vermilion
  ctx.font = 'bold 38px "JetBrains Mono", monospace';
  ctx.fillStyle = CARD_TITLE;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(project.title.toUpperCase(), 35, 35);
  
  // Subtitle/Client (Top Right)
  ctx.font = '22px "JetBrains Mono", monospace';
  ctx.fillStyle = CARD_MUTED;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'top';
  ctx.fillText(project.subtitle.toUpperCase(), canvas.width - 35, 38);
  
  // Tags (Bottom Left)
  ctx.font = '20px "JetBrains Mono", monospace';
  ctx.fillStyle = CARD_MUTED;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'bottom';
  
  // Draw tags with space
  const tagsStr = project.tags.join('   ');
  ctx.fillText(tagsStr, 35, canvas.height - 35);
  
  // Year (Bottom Right)
  ctx.font = '24px "JetBrains Mono", monospace';
  ctx.fillStyle = CARD_MUTED;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'bottom';
  ctx.fillText(project.year, canvas.width - 35, canvas.height - 35);
  
  // Create Texture
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

// 5. GLSL Card Shader Definition
const cardVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const cardFragmentShader = `
  uniform vec3 uBgColor;
  uniform sampler2D uImage;
  uniform sampler2D uOverlay;
  uniform float uHover;
  uniform float uOpacity;
  uniform vec4 uImgBounds; // xMin, xMax, yMin, yMax
  varying vec2 vUv;

  void main() {
    // Base card color background
    vec4 finalColor = vec4(uBgColor, 1.0);
    
    // Bounds for centering image
    float xMin = uImgBounds.x;
    float xMax = uImgBounds.y;
    float yMin = uImgBounds.z;
    float yMax = uImgBounds.w;
    
    // Render inside bounding box for the main project image
    if (vUv.x >= xMin && vUv.x <= xMax && vUv.y >= yMin && vUv.y <= yMax) {
      // Map global card UV to image-local UV (0 to 1)
      vec2 uvImg = vec2(
        (vUv.x - xMin) / (xMax - xMin),
        (vUv.y - yMin) / (yMax - yMin)
      );
      
      // Zoom on hover (scale around center)
      uvImg = (uvImg - 0.5) * (1.0 - uHover * 0.08) + 0.5;
      
      // Sample product image
      vec4 imgColor = texture2D(uImage, uvImg);
      
      // Blend image over card background
      finalColor = mix(finalColor, imgColor, imgColor.a);
    }
    
    // Sample canvas overlay (text, borders)
    vec4 overlayColor = texture2D(uOverlay, vUv);
    
    // Composite overlay on top of background & image
    finalColor = mix(finalColor, overlayColor, overlayColor.a);
    
    // Apply hover brightening highlight
    finalColor.rgb += uHover * vec3(0.04);
    
    // Fade out mesh completely during detail zoom
    gl_FragColor = finalColor * uOpacity;
  }
`;

// 6. Assemble Spherical Cards
function createSphericalGallery() {
  const cardWidth = 440;
  const cardHeight = 285;
  const textureLoader = new THREE.TextureLoader();

  // Distort Plane to Spherical surface geometry
  const curvedGeom = createCurvedGeometry(cardWidth, cardHeight, sphereRadius);

  // Fill the full sphere grid; repeat projects when there are fewer than slots
  // so drag always reveals work instead of empty arcs.
  const capacity = columns * rows;
  const totalCards = projects.length === 0 ? 0 : capacity;

  for (let i = 0; i < totalCards; i++) {
    const project = projects[i % projects.length];
    
    // Grid coordinates
    const colIndex = i % columns;
    const rowIndex = Math.floor(i / columns);
    
    // Theta: Longitude (0 to 360 deg)
    // Add a slight stagger offset depending on the row to create a organic mosaic layout
    const stagger = (rowIndex % 2) * 0.05;
    const theta = (colIndex / columns) * Math.PI * 2 + stagger;
    
    // Phi: Latitude. Space them around the equator (e.g. from polar angle 65deg to 115deg)
    // polar angle is measured from top Y axis (0 to PI). Equator is PI/2 (90deg).
    const phiMin = Math.PI * 0.35; // ~63 deg
    const phiMax = Math.PI * 0.65; // ~117 deg
    const phi = phiMin + (rowIndex / (rows - 1)) * (phiMax - phiMin);
    
    // Positioning Spherical Vector
    const spherical = new THREE.Spherical(sphereRadius, phi, theta);
    const position = new THREE.Vector3().setFromSpherical(spherical);
    
    // Create card textures
    const overlayTex = createOverlayTexture(project);
    
    // Load project image
    const imgTex = textureLoader.load(project.image);
    imgTex.generateMipmaps = true;
    imgTex.minFilter = THREE.LinearMipmapLinearFilter;
    
    // Card uniforms
    const uniforms = {
      uBgColor: { value: new THREE.Color(CARD_BG) },
      uImage: { value: imgTex },
      uOverlay: { value: overlayTex },
      uHover: { value: 0 },
      uOpacity: { value: 0 },
      // Inner image bounding box padding
      uImgBounds: { value: new THREE.Vector4(0.06, 0.94, 0.16, 0.84) }
    };
    
    // Create shader material
    const mat = new THREE.ShaderMaterial({
      vertexShader: cardVertexShader,
      fragmentShader: cardFragmentShader,
      uniforms: uniforms,
      transparent: true,
      depthWrite: true,
      side: THREE.DoubleSide
    });
    
    // Create mesh
    const mesh = new THREE.Mesh(curvedGeom, mat);
    mesh.position.copy(position);
    
    // Point cards to face the origin (camera is at 0,0,0)
    // lookAt points Z-normal towards the camera center, which is perfect
    mesh.lookAt(0, 0, 0);
    
    // Save metadata
    mesh.userData = {
      project: project,
      originalPosition: position.clone(),
      originalRotation: mesh.rotation.clone(),
      phi: phi,
      theta: theta,
      gridX: (colIndex - (columns - 1) / 2) * 540,
      gridY: ((rows - 1) / 2 - rowIndex) * 340,
      gridZ: 0
    };
    
    galleryGroup.add(mesh);
    cards.push(mesh);
  }

  // Simple staggered pop-in
  cards.forEach((card, i) => {
    gsap.to(card.material.uniforms.uOpacity, {
      value: 1,
      duration: 0.4,
      delay: 0.05 + i * 0.03,
      ease: 'power2.out',
    });
  });
}

function isDetailOpen() {
  return Boolean(detailOverlay?.classList.contains('active'));
}

function applyOrbitDelta(dx, dy, sensitivity) {
  if (currentLayout === 'sphere') {
    targetRotationY += dx * sensitivity;
    targetRotationX += dy * sensitivity;

    // Clamp vertical rotation to avoid flipping the sphere upside down
    const xLimit = Math.PI * 0.22; // ~40 degrees limit up and down
    targetRotationX = Math.max(-xLimit, Math.min(xLimit, targetRotationX));
    return;
  }

  // Grid panning
  targetGroupPositionX += dx * gridPanSensitivity;
  targetGroupPositionY -= dy * gridPanSensitivity;

  const xMaxPan = 1500;
  const yMaxPan = 800;
  targetGroupPositionX = Math.max(-xMaxPan, Math.min(xMaxPan, targetGroupPositionX));
  targetGroupPositionY = Math.max(-yMaxPan, Math.min(yMaxPan, targetGroupPositionY));
}

// 7. Interaction Event Listeners
function setupEvents() {
  const dragTarget = root;

  // Unified pointer events (mouse + touch + pen)
  dragTarget.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove, { passive: false });
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);

  // Touchpad / mouse wheel orbit (and grid pan)
  dragTarget.addEventListener('wheel', onWheel, { passive: false });

  // Click Event
  window.addEventListener('click', onClick);

  // Layout Grid Toggle Button
  const gridToggleBtn = root.querySelector('#grid-toggle-btn');
  gridToggleBtn.addEventListener('click', toggleLayout);

  cleanups.push(() => {
    dragTarget.removeEventListener('pointerdown', onPointerDown);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerUp);
    dragTarget.removeEventListener('wheel', onWheel);
    window.removeEventListener('click', onClick);
    gridToggleBtn?.removeEventListener('click', toggleLayout);
  });
}

function onPointerDown(e) {
  if (isAnimating || isDetailOpen()) return;
  // Ignore UI chrome clicks (sound, grid toggle, links)
  if (e.target?.closest?.('button, a, input, textarea, .detail-overlay')) return;

  isDragging = true;
  idleTime = 0;

  pointerX = e.clientX;
  pointerY = e.clientY;
  previousPointerX = e.clientX;
  previousPointerY = e.clientY;

  try {
    e.currentTarget?.setPointerCapture?.(e.pointerId);
  } catch {
    // ignore
  }
}

function onPointerMove(e) {
  const clientX = e.clientX;
  const clientY = e.clientY;

  // 1. Handle dragging rotation or grid panning
  if (isDragging && !isAnimating && !isDetailOpen()) {
    const dx = clientX - pointerX;
    const dy = clientY - pointerY;
    applyOrbitDelta(dx, dy, dragSensitivity);
    pointerX = clientX;
    pointerY = clientY;

    // Stop browser scroll/bounce while fingering the sphere
    if (e.cancelable && e.pointerType === 'touch') {
      e.preventDefault();
    }
  }

  // 2. Setup mouse coordinates for raycasting hover
  mouse.x = (clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(clientY / window.innerHeight) * 2 + 1;

  previousPointerX = clientX;
  previousPointerY = clientY;
}

function onPointerUp() {
  isDragging = false;
}

function onWheel(e) {
  if (isAnimating || isDetailOpen()) return;

  e.preventDefault();
  idleTime = 0;

  // Normalize line/page deltas to pixel-ish units
  let { deltaX, deltaY } = e;
  if (e.deltaMode === 1) {
    deltaX *= 16;
    deltaY *= 16;
  } else if (e.deltaMode === 2) {
    deltaX *= window.innerWidth;
    deltaY *= window.innerHeight;
  }

  // Match drag feel: trackpad swipe / wheel moves the sphere
  applyOrbitDelta(-deltaX, -deltaY, wheelSensitivity);
}

// Raycaster check for card click
function onClick() {
  if (isAnimating || isDragging) return;
  
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(cards);
  
  if (intersects.length > 0) {
    const clickedMesh = intersects[0].object;
    playSynthBeep(440, 'sine', 0.08, 0.1); // A4 note beep on select
    zoomIntoCard(clickedMesh);
  }
}

// Layout Transition Logic
function toggleLayout() {
  if (isAnimating) return;
  isAnimating = true;
  
  currentLayout = currentLayout === 'sphere' ? 'grid' : 'sphere';
  playSynthBeep(currentLayout === 'grid' ? 587.33 : 493.88, 'sine', 0.1, 0.08); // D5 or B4 note beep
  
  // Update button visual state
  const gridToggleBtn = root.querySelector('#grid-toggle-btn');
  if (gridToggleBtn) {
    if (currentLayout === 'grid') {
      gridToggleBtn.style.color = '#ffffff';
      gridToggleBtn.style.borderColor = 'rgba(255, 255, 255, 0.5)';
      gridToggleBtn.style.background = 'rgba(255, 255, 255, 0.1)';
    } else {
      gridToggleBtn.style.color = '';
      gridToggleBtn.style.borderColor = '';
      gridToggleBtn.style.background = '';
    }
  }

  const tl = gsap.timeline({
    onComplete: () => {
      isAnimating = false;
    }
  });

  if (currentLayout === 'grid') {
    // Reset rotation & position target
    targetRotationX = 0;
    targetRotationY = 0;
    currentRotationX = 0;
    currentRotationY = 0;
    
    tl.to(galleryGroup.rotation, { x: 0, y: 0, z: 0, duration: 1.0, ease: 'power3.inOut' }, 0);
    tl.to(galleryGroup.position, { x: 0, y: 0, z: 0, duration: 1.0, ease: 'power3.inOut' }, 0);
    
    // Pull camera back
    tl.to(camera.position, { x: 0, y: 0, z: 1600, duration: 1.2, ease: 'power3.inOut' }, 0);
    
    // Position cards to grid
    cards.forEach(card => {
      tl.to(card.position, {
        x: card.userData.gridX,
        y: card.userData.gridY,
        z: card.userData.gridZ,
        duration: 1.2,
        ease: 'power3.inOut'
      }, 0);
      
      tl.to(card.rotation, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1.2,
        ease: 'power3.inOut'
      }, 0);
    });
  } else {
    // Move camera to center
    tl.to(camera.position, { x: 0, y: 0, z: 0, duration: 1.2, ease: 'power3.inOut' }, 0);
    
    // Reset pan position
    targetGroupPositionX = 0;
    targetGroupPositionY = 0;
    currentGroupPositionX = 0;
    currentGroupPositionY = 0;
    tl.to(galleryGroup.position, { x: 0, y: 0, z: 0, duration: 1.0, ease: 'power3.inOut' }, 0);
    
    // Return cards to spherical surface
    cards.forEach(card => {
      tl.to(card.position, {
        x: card.userData.originalPosition.x,
        y: card.userData.originalPosition.y,
        z: card.userData.originalPosition.z,
        duration: 1.2,
        ease: 'power3.inOut'
      }, 0);
      
      tl.to(card.rotation, {
        x: card.userData.originalRotation.x,
        y: card.userData.originalRotation.y,
        z: card.userData.originalRotation.z,
        duration: 1.2,
        ease: 'power3.inOut'
      }, 0);
    });
  }
}

// 8. Dynamic Fullscreen Detail Zoom Animation
function zoomIntoCard(mesh) {
  isAnimating = true;
  clickedCard = mesh;
  
  // Create transition timeline
  const tl = gsap.timeline({
    onComplete: () => {
      // Show detail HTML overlay content
      showDetailOverlay(mesh.userData.project);
    }
  });

  if (currentLayout === 'sphere') {
    // Block any drag input resetting target
    targetRotationX = currentRotationX;
    targetRotationY = currentRotationY;

    const targetY = -mesh.userData.theta;
    const targetX = -(mesh.userData.phi - Math.PI / 2);
    
    // Ease rotation to align clicked card in front of camera
    tl.to(galleryGroup.rotation, {
      y: targetY,
      x: targetX,
      duration: 1.2,
      ease: 'power3.inOut'
    }, 0);

    // Pull clicked card closer to camera along its local center radius vector
    // Normal sphere radius is 1000. Let's pull it to 450 so it covers screen
    const zoomRadius = 450;
    const sphericalZoom = new THREE.Spherical(zoomRadius, mesh.userData.phi, mesh.userData.theta);
    const zoomPosition = new THREE.Vector3().setFromSpherical(sphericalZoom);

    tl.to(mesh.position, {
      x: zoomPosition.x,
      y: zoomPosition.y,
      z: zoomPosition.z,
      duration: 1.2,
      ease: 'power3.inOut'
    }, 0);
  } else {
    // Grid layout center zoom
    targetGroupPositionX = -mesh.userData.gridX;
    targetGroupPositionY = -mesh.userData.gridY;
    
    // Position group to center card
    tl.to(galleryGroup.position, {
      x: targetGroupPositionX,
      y: targetGroupPositionY,
      z: 0,
      duration: 1.2,
      ease: 'power3.inOut'
    }, 0);
    
    // Pull card closer (camera is at Z = 1600, card goes to Z = 1100, which is 500 units away)
    tl.to(mesh.position, {
      z: 1100,
      duration: 1.2,
      ease: 'power3.inOut'
    }, 0);
  }

  // Fade out other cards in scene
  cards.forEach(card => {
    if (card !== mesh) {
      tl.to(card.material.uniforms.uOpacity, {
        value: 0.0,
        duration: 0.6,
        ease: 'power2.out'
      }, 0);
    }
  });
}

// Populate and show HTML details template
function showDetailOverlay(project) {
  detailClient.textContent = project.title.toUpperCase();
  detailTitle.textContent = project.subtitle;
  detailYear.textContent = project.year;
  
  // Render tags
  detailTags.innerHTML = '';
  project.tags.forEach(tag => {
    const span = document.createElement('span');
    span.textContent = tag;
    detailTags.appendChild(span);
  });

  // Left = overview (lead). Right = description. Never duplicate one into the other.
  if (detailLead) {
    detailLead.textContent = (project.overview || '').trim();
  }
  if (detailDesc) {
    detailDesc.textContent = (project.description || '').trim();
  }

  // Visit live site button — hidden unless the project has an external link.
  if (detailVisit) {
    if (project.externalUrl) {
      detailVisit.href = project.externalUrl;
      detailVisit.style.display = '';
    } else {
      detailVisit.style.display = 'none';
    }
  }
  
  // Build detail image stack (image + optional images[])
  if (detailGallery) {
    const galleryImages = Array.from(
      new Set([project.image, ...(project.images || [])].filter(Boolean)),
    );
    detailGallery.innerHTML = '';
    galleryImages.forEach((src, index) => {
      const figure = document.createElement('figure');
      figure.className = 'detail-showcase';
      const img = document.createElement('img');
      img.src = src;
      img.alt = `${project.title} — ${project.subtitle} ${index + 1}`;
      img.loading = index === 0 ? 'eager' : 'lazy';
      figure.appendChild(img);
      detailGallery.appendChild(figure);
    });
  }
  
  // Light detail page + Vanguard orange client title
  detailOverlay.style.backgroundColor = '#ffffff';
  detailOverlay.style.color = '#0a0a0a';
  if (detailCloseBtn) detailCloseBtn.style.color = '#666666';
  if (detailClient) detailClient.style.color = CARD_TITLE;
  
  // Activate CSS class for visibility fade in
  detailOverlay.classList.add('active');
  
  // Set window title to project
  document.title = `${project.title} — ${project.subtitle} | Vanguard`;
}

// Close detail view overlay handler
detailCloseBtn.addEventListener('click', () => {
  if (!clickedCard) return;
  playSynthBeep(330, 'sine', 0.08, 0.08); // E4 note beep
  
  // Fade out HTML overlay
  detailOverlay.classList.remove('active');
  document.title = "PHANTOM — Technology-Led Creative Experiences";

  // Re-synchronize internal tracking
  if (currentLayout === 'sphere') {
    currentRotationX = galleryGroup.rotation.x;
    currentRotationY = galleryGroup.rotation.y;
    targetRotationX = currentRotationX;
    targetRotationY = currentRotationY;
  } else {
    currentGroupPositionX = galleryGroup.position.x;
    currentGroupPositionY = galleryGroup.position.y;
    targetGroupPositionX = currentGroupPositionX;
    targetGroupPositionY = currentGroupPositionY;
  }

  // Zoom back mesh coordinates
  const tl = gsap.timeline({
    delay: 0.2, // wait for HTML overlay transition to fade
    onComplete: () => {
      isAnimating = false;
      clickedCard = null;
    }
  });

  if (currentLayout === 'sphere') {
    tl.to(clickedCard.position, {
      x: clickedCard.userData.originalPosition.x,
      y: clickedCard.userData.originalPosition.y,
      z: clickedCard.userData.originalPosition.z,
      duration: 1.0,
      ease: 'power3.out'
    }, 0);
  } else {
    tl.to(clickedCard.position, {
      x: clickedCard.userData.gridX,
      y: clickedCard.userData.gridY,
      z: clickedCard.userData.gridZ,
      duration: 1.0,
      ease: 'power3.out'
    }, 0);
  }

  // Fade other cards back in
  cards.forEach(card => {
    tl.to(card.material.uniforms.uOpacity, {
      value: 1.0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0);
  });
});

// 9. Resize Handling
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// 10. Frame Render & Update Loop
function animate() {
  rafId = requestAnimationFrame(animate);
  
  idleTime += 1;

  // 1. Raycaster check for card hover
  if (!isAnimating && !isDragging) {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(cards);
    
    if (intersects.length > 0) {
      const card = intersects[0].object;
      
      if (hoveredCard !== card) {
        if (hoveredCard) {
          // Hover out old card
          gsap.to(hoveredCard.material.uniforms.uHover, { value: 0, duration: 0.35, ease: 'power2.out' });
        }
        
        // Hover in new card
        hoveredCard = card;
        document.body.style.cursor = 'pointer';
        playSynthBeep(659.25, 'triangle', 0.04, 0.03); // E5 high synth click
        gsap.to(card.material.uniforms.uHover, { value: 1, duration: 0.45, ease: 'power2.out' });
      }
    } else {
      if (hoveredCard) {
        // Hover out
        gsap.to(hoveredCard.material.uniforms.uHover, { value: 0, duration: 0.35, ease: 'power2.out' });
        hoveredCard = null;
        document.body.style.cursor = 'default';
      }
    }
  }

  // 2. Momentum movement interpolation
  if (!isAnimating) {
    if (currentLayout === 'sphere') {
      // Slow auto-rotate rotation when idle (no drag)
      if (!isDragging && idleTime > 300) { // ~5 seconds idle time at 60fps
        targetRotationY += 0.0006; // very slow drift rotation
      }
      
      // Lerp rotation transition for momentum physics
      currentRotationY += (targetRotationY - currentRotationY) * easeFactor;
      currentRotationX += (targetRotationX - currentRotationX) * easeFactor;
      
      galleryGroup.rotation.y = currentRotationY;
      galleryGroup.rotation.x = currentRotationX;
    } else {
      // Grid lerp panning
      currentGroupPositionX += (targetGroupPositionX - currentGroupPositionX) * easeFactor;
      currentGroupPositionY += (targetGroupPositionY - currentGroupPositionY) * easeFactor;
      
      galleryGroup.position.x = currentGroupPositionX;
      galleryGroup.position.y = currentGroupPositionY;
    }
  }

  renderer.render(scene, camera);
}

init();

return function dispose() {
  cancelAnimationFrame(rafId);
  if (clockTimer) clearInterval(clockTimer);
  cleanups.forEach((fn) => fn());
  document.body.style.cursor = 'default';
  if (camera) gsap.killTweensOf(camera.position);
  cards.forEach((card) => {
    gsap.killTweensOf(card.position);
    gsap.killTweensOf(card.rotation);
    if (card.material?.uniforms?.uOpacity) gsap.killTweensOf(card.material.uniforms.uOpacity);
    if (card.material?.uniforms?.uHover) gsap.killTweensOf(card.material.uniforms.uHover);
  });
  if (renderer) {
    try {
      renderer.forceContextLoss?.();
    } catch {
      // ignore
    }
    renderer.dispose();
    if (renderer.domElement && renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  }
  cards.forEach((card) => {
    card.geometry?.dispose?.();
    if (card.material) {
      if (card.material.uniforms?.uTexture?.value) card.material.uniforms.uTexture.value.dispose?.();
      if (card.material.uniforms?.uOverlayTexture?.value) card.material.uniforms.uOverlayTexture.value.dispose?.();
      card.material.dispose?.();
    }
  });
  cards = [];
  scene = null;
  camera = null;
  renderer = null;
  galleryGroup = null;
};
}
