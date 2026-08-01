'use client';

import { useCallback, useEffect, useRef } from 'react';

import { useReducedMotion } from '@/hooks/useReducedMotion';

interface DelicateAsciiDotsProps {
  backgroundColor?: string;
  textColor?: string;
  gridSize?: number;
  removeWaveLine?: boolean;
  animationSpeed?: number;
}

interface Wave {
  x: number;
  y: number;
  frequency: number;
  amplitude: number;
  phase: number;
  speed: number;
}

interface GridCell {
  char: string;
  opacity: number;
}

const CHARS =
  '⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⠁⠂⠄⠈⠐⠠⡀⢀⠃⠅⠘⠨⠊⠋⠌⠍⠎⠏⠑⠒⠓⠔⠕⠖⠗⠙⠚⠛⠜⠝⠞⠟⠡⠢⠣⠤⠥⠦⠧⠩⠪⠫⠬⠭⠮⠯⠱⠲⠳⠴⠵⠶⠷⠹⠺⠻⠼⠽⠾⠿⡁⡂⡃⡄⡅⡆⡇⡉⡊⡋⡌⡍⡎⡏⡑⡒⡓⡔⡕⡖⡗⡙⡚⡛⡜⡝⡞⡟⡡⡢⡣⡤⡥⡦⡧⡩⡪⡫⡬⡭⡮⡯⡱⡲⡳⡴⡵⡶⡷⡹⡺⡻⡼⡽⡾⡿⢁⢂⢃⢄⢅⢆⢇⢉⢊⢋⢌⢍⢎⢏⢑⢒⢓⢔⢕⢖⢗⢙⢚⢛⢜⢝⢞⢟⢡⢢⢣⢤⢥⢦ស់⢩⢪⢫⢬⢭⢮⢯⢱⢲⢳⢴⢵⢶⢷⢹⢺⢻⢼⢽⢾⢿⣀⣁⣂⣃⣄⣅⣆⣇⣉⣊⣋⣌⣍⣎⣏⣑⣒⣓⣔⣕⣖⣗⣙⣚⣛⣜⣝⣞⣟⣡⣢⣣⣤⣥⣦⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿';
const FALLBACK_CHAR = '⣿';
const MAX_DPR = 1.5;

/**
 * Full-bleed ASCII wave field for the hero background.
 * Mouse tracking listens on window so the fluid layer above can stay
 * pointer-events-none without killing the interference pattern.
 */
const DelicateAsciiDots = ({
  backgroundColor = '#0A0A0A',
  textColor = '70, 70, 70',
  gridSize = 72,
  removeWaveLine = true,
  animationSpeed = 0.75,
}: DelicateAsciiDotsProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, isDown: false });
  const wavesRef = useRef<Wave[]>([]);
  const timeRef = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const clickWaves = useRef<
    Array<{ x: number; y: number; time: number; intensity: number }>
  >([]);
  const dimensionsRef = useRef({ width: 0, height: 0 });

  const prefersReducedMotion = useReducedMotion();

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const { width, height } = container.getBoundingClientRect();
    dimensionsRef.current = { width, height };

    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Reset then scale — never compound with repeated ctx.scale()
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctxRef.current = ctx;
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isDown: mouseRef.current.isDown,
    };
  }, []);

  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      mouseRef.current.isDown = true;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const { width, height } = dimensionsRef.current;
      if (width === 0 || height === 0) return;

      clickWaves.current.push({
        x: x / (width / gridSize),
        y: y / (height / gridSize),
        time: Date.now(),
        intensity: 2,
      });

      const now = Date.now();
      clickWaves.current = clickWaves.current.filter(
        (wave) => now - wave.time < 4000,
      );
    },
    [gridSize],
  );

  const handleMouseUp = useCallback(() => {
    mouseRef.current.isDown = false;
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    const currentTime = Date.now();
    timeRef.current += animationSpeed * 0.016;

    const { width, height } = dimensionsRef.current;
    if (width === 0 || height === 0) return;

    const getClickWaveInfluence = (x: number, y: number): number => {
      let totalInfluence = 0;

      for (const wave of clickWaves.current) {
        const age = currentTime - wave.time;
        const maxAge = 4000;
        if (age >= maxAge) continue;

        const dx = x - wave.x;
        const dy = y - wave.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const waveRadius = (age / maxAge) * gridSize * 0.8;
        const waveWidth = gridSize * 0.15;

        if (Math.abs(distance - waveRadius) < waveWidth) {
          const waveStrength = (1 - age / maxAge) * wave.intensity;
          const proximityToWave =
            1 - Math.abs(distance - waveRadius) / waveWidth;
          totalInfluence +=
            waveStrength *
            proximityToWave *
            Math.sin((distance - waveRadius) * 0.5);
        }
      }

      return totalInfluence;
    };

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    const newGrid: (GridCell | null)[][] = Array.from({ length: gridSize }, () =>
      Array.from({ length: gridSize }, () => null),
    );

    const cellWidth = width / gridSize;
    const cellHeight = height / gridSize;

    const mouseGridX = mouseRef.current.x / cellWidth;
    const mouseGridY = mouseRef.current.y / cellHeight;
    const hasPointer = mouseRef.current.x > -9000;

    const mouseWave: Wave | null = hasPointer
      ? {
          x: mouseGridX,
          y: mouseGridY,
          frequency: 0.3,
          amplitude: 1,
          phase: timeRef.current * 2,
          speed: 1,
        }
      : null;

    for (let y = 0; y < gridSize; y++) {
      const row = newGrid[y];
      if (!row) continue;

      for (let x = 0; x < gridSize; x++) {
        let totalWave = 0;

        for (const wave of wavesRef.current) {
          const dx = x - wave.x;
          const dy = y - wave.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const falloff = 1 / (1 + dist * 0.1);
          totalWave +=
            Math.sin(
              dist * wave.frequency - timeRef.current * wave.speed + wave.phase,
            ) *
            wave.amplitude *
            falloff;
        }

        if (mouseWave) {
          const dx = x - mouseWave.x;
          const dy = y - mouseWave.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const falloff = 1 / (1 + dist * 0.1);
          totalWave +=
            Math.sin(
              dist * mouseWave.frequency -
                timeRef.current * mouseWave.speed +
                mouseWave.phase,
            ) *
            mouseWave.amplitude *
            falloff;

          if (dist < gridSize * 0.3) {
            totalWave +=
              (1 - dist / (gridSize * 0.3)) *
              0.8 *
              Math.sin(timeRef.current * 3);
          }
        }

        totalWave += getClickWaveInfluence(x, y);

        const normalizedWave = (totalWave + 2) / 4;
        if (Math.abs(totalWave) > 0.2) {
          const charIndex = Math.min(
            CHARS.length - 1,
            Math.max(0, Math.floor(normalizedWave * (CHARS.length - 1))),
          );
          row[x] = {
            char: CHARS[charIndex] ?? FALLBACK_CHAR,
            opacity: Math.min(0.75, Math.max(0.28, 0.28 + normalizedWave * 0.45)),
          };
        }
      }
    }

    const fontSize = Math.min(cellWidth, cellHeight) * 0.8;
    ctx.font = `${fontSize}px monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const cell = newGrid[y]?.[x];
        if (!cell) continue;
        ctx.fillStyle = `rgba(${textColor}, ${cell.opacity})`;
        ctx.fillText(
          cell.char,
          x * cellWidth + cellWidth / 2,
          y * cellHeight + cellHeight / 2,
        );
      }
    }

    if (!removeWaveLine) {
      for (const wave of clickWaves.current) {
        const age = currentTime - wave.time;
        const maxAge = 4000;
        if (age >= maxAge) continue;

        const progress = age / maxAge;
        const radius = progress * Math.min(width, height) * 0.5;
        const alpha = (1 - progress) * 0.3 * wave.intensity;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${textColor}, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.arc(
          wave.x * cellWidth,
          wave.y * cellHeight,
          radius,
          0,
          2 * Math.PI,
        );
        ctx.stroke();
      }
    }
  }, [backgroundColor, textColor, gridSize, animationSpeed, removeWaveLine]);

  useEffect(() => {
    const waves: Wave[] = [];
    for (let i = 0; i < 4; i++) {
      waves.push({
        x: gridSize * (0.25 + Math.random() * 0.5),
        y: gridSize * (0.25 + Math.random() * 0.5),
        frequency: 0.2 + Math.random() * 0.3,
        amplitude: 0.5 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 0.5,
      });
    }
    wavesRef.current = waves;

    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();

    if (prefersReducedMotion) {
      animate();
      window.addEventListener('resize', resizeCanvas);
      return () => {
        window.removeEventListener('resize', resizeCanvas);
        wavesRef.current = [];
      };
    }

    let inView = true;
    let pageVisible = document.visibilityState === 'visible';
    let running = false;

    const loop = () => {
      animate();
      animationFrameId.current = requestAnimationFrame(loop);
    };

    const syncLoop = () => {
      const shouldRun = inView && pageVisible;
      if (shouldRun && !running) {
        running = true;
        animationFrameId.current = requestAnimationFrame(loop);
      } else if (!shouldRun && running) {
        running = false;
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry?.isIntersecting ?? false;
      syncLoop();
    });
    observer.observe(canvas);

    const onVisibility = () => {
      pageVisible = document.visibilityState === 'visible';
      syncLoop();
    };
    document.addEventListener('visibilitychange', onVisibility);

    window.addEventListener('resize', resizeCanvas);

    const canHover = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches;
    if (canHover) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
    }

    syncLoop();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canHover) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
      }
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);

      running = false;
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
      timeRef.current = 0;
      clickWaves.current = [];
      wavesRef.current = [];
      ctxRef.current = null;
    };
  }, [
    animate,
    resizeCanvas,
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    gridSize,
    prefersReducedMotion,
  ]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{ backgroundColor }}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
};

export default DelicateAsciiDots;
