(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51852,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(60630);let n="⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⠁⠂⠄⠈⠐⠠⡀⢀⠃⠅⠘⠨⠊⠋⠌⠍⠎⠏⠑⠒⠓⠔⠕⠖⠗⠙⠚⠛⠜⠝⠞⠟⠡⠢⠣⠤⠥⠦⠧⠩⠪⠫⠬⠭⠮⠯⠱⠲⠳⠴⠵⠶⠷⠹⠺⠻⠼⠽⠾⠿⡁⡂⡃⡄⡅⡆⡇⡉⡊⡋⡌⡍⡎⡏⡑⡒⡓⡔⡕⡖⡗⡙⡚⡛⡜⡝⡞⡟⡡⡢⡣⡤⡥⡦⡧⡩⡪⡫⡬⡭⡮⡯⡱⡲⡳⡴⡵⡶⡷⡹⡺⡻⡼⡽⡾⡿⢁⢂⢃⢄⢅⢆⢇⢉⢊⢋⢌⢍⢎⢏⢑⢒⢓⢔⢕⢖⢗⢙⢚⢛⢜⢝⢞⢟⢡⢢⢣⢤⢥⢦ស់⢩⢪⢫⢬⢭⢮⢯⢱⢲⢳⢴⢵⢶⢷⢹⢺⢻⢼⢽⢾⢿⣀⣁⣂⣃⣄⣅⣆⣇⣉⣊⣋⣌⣍⣎⣏⣑⣒⣓⣔⣕⣖⣗⣙⣚⣛⣜⣝⣞⣟⣡⣢⣣⣤⣥⣦⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿",o=({backgroundColor:e="#0A0A0A",textColor:o="70, 70, 70",gridSize:a=72,removeWaveLine:l=!0,animationSpeed:u=.75})=>{let s=(0,r.useRef)(null),c=(0,r.useRef)(null),d=(0,r.useRef)(null),m=(0,r.useRef)({x:-9999,y:-9999,isDown:!1}),f=(0,r.useRef)([]),v=(0,r.useRef)(0),h=(0,r.useRef)(null),x=(0,r.useRef)([]),p=(0,r.useRef)({width:0,height:0}),g=(0,i.useReducedMotion)(),E=(0,r.useCallback)(()=>{let e=s.current,t=c.current;if(!e||!t)return;let{width:r,height:i}=t.getBoundingClientRect();p.current={width:r,height:i};let n=Math.min(window.devicePixelRatio||1,1.5);e.width=Math.round(r*n),e.height=Math.round(i*n),e.style.width=`${r}px`,e.style.height=`${i}px`;let o=e.getContext("2d");o&&(o.setTransform(n,0,0,n,0,0),d.current=o)},[]),T=(0,r.useCallback)(e=>{let t=s.current;if(!t)return;let r=t.getBoundingClientRect();m.current={x:e.clientX-r.left,y:e.clientY-r.top,isDown:m.current.isDown}},[]),R=(0,r.useCallback)(e=>{m.current.isDown=!0;let t=s.current;if(!t)return;let r=t.getBoundingClientRect(),i=e.clientX-r.left,n=e.clientY-r.top,{width:o,height:l}=p.current;if(0===o||0===l)return;x.current.push({x:i/(o/a),y:n/(l/a),time:Date.now(),intensity:2});let u=Date.now();x.current=x.current.filter(e=>u-e.time<4e3)},[a]),y=(0,r.useCallback)(()=>{m.current.isDown=!1},[]),w=(0,r.useCallback)(()=>{let t=s.current,r=d.current;if(!t||!r)return;let i=Date.now();v.current+=.016*u;let{width:c,height:h}=p.current;if(0===c||0===h)return;let g=(e,t)=>{let r=0;for(let n of x.current){let o=i-n.time;if(o>=4e3)continue;let l=e-n.x,u=t-n.y,s=Math.sqrt(l*l+u*u),c=o/4e3*a*.8,d=.15*a;Math.abs(s-c)<d&&(r+=(1-o/4e3)*n.intensity*(1-Math.abs(s-c)/d)*Math.sin((s-c)*.5))}return r};r.fillStyle=e,r.fillRect(0,0,c,h);let E=Array.from({length:a},()=>Array.from({length:a},()=>null)),T=c/a,R=h/a,y=m.current.x/T,w=m.current.y/R,b=m.current.x>-9e3?{x:y,y:w,frequency:.3,amplitude:1,phase:2*v.current,speed:1}:null;for(let e=0;e<a;e++){let t=E[e];if(t)for(let r=0;r<a;r++){let i=0;for(let t of f.current){let n=r-t.x,o=e-t.y,a=Math.sqrt(n*n+o*o),l=1/(1+.1*a);i+=Math.sin(a*t.frequency-v.current*t.speed+t.phase)*t.amplitude*l}if(b){let t=r-b.x,n=e-b.y,o=Math.sqrt(t*t+n*n),l=1/(1+.1*o);i+=Math.sin(o*b.frequency-v.current*b.speed+b.phase)*b.amplitude*l,o<.3*a&&(i+=(1-o/(.3*a))*.8*Math.sin(3*v.current))}let o=((i+=g(r,e))+2)/4;if(Math.abs(i)>.2){let e=Math.min(n.length-1,Math.max(0,Math.floor(o*(n.length-1))));t[r]={char:n[e]??"⣿",opacity:Math.min(.75,Math.max(.28,.28+.45*o))}}}}let S=.8*Math.min(T,R);r.font=`${S}px monospace`,r.textAlign="center",r.textBaseline="middle";for(let e=0;e<a;e++)for(let t=0;t<a;t++){let i=E[e]?.[t];i&&(r.fillStyle=`rgba(${o}, ${i.opacity})`,r.fillText(i.char,t*T+T/2,e*R+R/2))}if(!l)for(let e of x.current){let t=i-e.time;if(t>=4e3)continue;let n=t/4e3,a=n*Math.min(c,h)*.5,l=(1-n)*.3*e.intensity;r.beginPath(),r.strokeStyle=`rgba(${o}, ${l})`,r.lineWidth=1,r.arc(e.x*T,e.y*R,a,0,2*Math.PI),r.stroke()}},[e,o,a,u,l]);return(0,r.useEffect)(()=>{let e=[];for(let t=0;t<4;t++)e.push({x:a*(.25+.5*Math.random()),y:a*(.25+.5*Math.random()),frequency:.2+.3*Math.random(),amplitude:.5+.5*Math.random(),phase:Math.random()*Math.PI*2,speed:.5+.5*Math.random()});f.current=e;let t=s.current;if(!t)return;if(E(),g)return w(),window.addEventListener("resize",E),()=>{window.removeEventListener("resize",E),f.current=[]};let r=!0,i="visible"===document.visibilityState,n=!1,o=()=>{w(),h.current=requestAnimationFrame(o)},l=()=>{let e=r&&i;e&&!n?(n=!0,h.current=requestAnimationFrame(o)):!e&&n&&(n=!1,h.current&&cancelAnimationFrame(h.current))},u=new IntersectionObserver(([e])=>{r=e?.isIntersecting??!1,l()});u.observe(t);let c=()=>{i="visible"===document.visibilityState,l()};return document.addEventListener("visibilitychange",c),window.addEventListener("resize",E),window.addEventListener("mousemove",T),window.addEventListener("mousedown",R),window.addEventListener("mouseup",y),l(),()=>{window.removeEventListener("resize",E),window.removeEventListener("mousemove",T),window.removeEventListener("mousedown",R),window.removeEventListener("mouseup",y),u.disconnect(),document.removeEventListener("visibilitychange",c),n=!1,h.current&&(cancelAnimationFrame(h.current),h.current=null),v.current=0,x.current=[],f.current=[],d.current=null}},[w,E,T,R,y,a,g]),(0,t.jsx)("div",{ref:c,"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-0 overflow-hidden",style:{backgroundColor:e},children:(0,t.jsx)("canvas",{ref:s,className:"block h-full w-full"})})};function a(){let e=(0,r.useRef)(null),n=(0,i.useReducedMotion)();return((0,r.useEffect)(()=>{let t;if(!e.current||n)return;let r=!1,i=window.setTimeout(()=>{if(!r&&e.current)try{t=(e=>{let t,r,i,n,o,a;$();let l={SIM_RESOLUTION:128,DYE_RESOLUTION:1440,DENSITY_DISSIPATION:3.5,VELOCITY_DISSIPATION:2,PRESSURE:.1,PRESSURE_ITERATIONS:20,CURL:3,SPLAT_RADIUS:.2,SPLAT_FORCE:6e3,SHADING:!0,COLOR_UPDATE_SPEED:10},u=[];u.push(new function(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]});let{gl:s,ext:c}=function(e){let t,r,i,n,o,a={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},l=e.getContext("webgl2",a),u=!!l;if(u||(l=e.getContext("webgl",a)||e.getContext("experimental-webgl",a)),!l)throw Error("WebGL context unavailable");u?(l.getExtension("EXT_color_buffer_float"),r=l.getExtension("OES_texture_float_linear")):(t=l.getExtension("OES_texture_half_float"),r=l.getExtension("OES_texture_half_float_linear")),l.clearColor(0,0,0,1);let s=u?l.HALF_FLOAT:t?.HALF_FLOAT_OES;if(null==s)throw Error("WebGL half-float textures unavailable");if(u?(i=d(l,l.RGBA16F,l.RGBA,s),n=d(l,l.RG16F,l.RG,s),o=d(l,l.R16F,l.RED,s)):(i=d(l,l.RGBA,l.RGBA,s),n=d(l,l.RGBA,l.RGBA,s),o=d(l,l.RGBA,l.RGBA,s)),!i||!n||!o)throw Error("WebGL render texture formats unavailable");return{gl:l,ext:{formatRGBA:i,formatRG:n,formatR:o,halfFloatTexType:s,supportLinearFiltering:r}}}(e);function d(e,t,r,i){var n,o,a,l;let u,s;if(n=e,o=t,a=r,l=i,u=n.createTexture(),n.bindTexture(n.TEXTURE_2D,u),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_2D,0,o,4,4,0,a,l,null),s=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,s),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,u,0),n.checkFramebufferStatus(n.FRAMEBUFFER)!=n.FRAMEBUFFER_COMPLETE)switch(t){case e.R16F:return d(e,e.RG16F,e.RG,i);case e.RG16F:return d(e,e.RGBA16F,e.RGBA,i);default:return null}return{internalFormat:t,format:r}}c.supportLinearFiltering||(l.DYE_RESOLUTION=256,l.SHADING=!1);class m{constructor(e,t){this.uniforms={},this.program=f(e,t),this.uniforms=v(this.program)}bind(){s.useProgram(this.program)}}function f(e,t){let r=s.createProgram();return s.attachShader(r,e),s.attachShader(r,t),s.linkProgram(r),s.getProgramParameter(r,s.LINK_STATUS)||console.trace(s.getProgramInfoLog(r)),r}function v(e){let t=[],r=s.getProgramParameter(e,s.ACTIVE_UNIFORMS);for(let i=0;i<r;i++){let r=s.getActiveUniform(e,i).name;t[r]=s.getUniformLocation(e,r)}return t}function h(e,t,r){t=function(e,t){if(null==t)return e;let r="";return t.forEach(e=>{r+="#define "+e+"\n"}),r+e}(t,r);let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),s.getShaderParameter(i,s.COMPILE_STATUS)||console.trace(s.getShaderInfoLog(i)),i}let x=h(s.VERTEX_SHADER,`
       precision highp float;
   
       attribute vec2 aPosition;
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       varying vec2 vT;
       varying vec2 vB;
       uniform vec2 texelSize;
   
       void main () {
           vUv = aPosition * 0.5 + 0.5;
           vL = vUv - vec2(texelSize.x, 0.0);
           vR = vUv + vec2(texelSize.x, 0.0);
           vT = vUv + vec2(0.0, texelSize.y);
           vB = vUv - vec2(0.0, texelSize.y);
           gl_Position = vec4(aPosition, 0.0, 1.0);
       }
   `),p=h(s.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       uniform sampler2D uTexture;
   
       void main () {
           gl_FragColor = texture2D(uTexture, vUv);
       }
   `),g=h(s.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       uniform sampler2D uTexture;
       uniform float value;
   
       void main () {
           gl_FragColor = value * texture2D(uTexture, vUv);
       }
   `),E=`
       precision highp float;
       precision highp sampler2D;
   
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       varying vec2 vT;
       varying vec2 vB;
       uniform sampler2D uTexture;
       uniform sampler2D uDithering;
       uniform vec2 ditherScale;
       uniform vec2 texelSize;
   
       vec3 linearToGamma (vec3 color) {
           color = max(color, vec3(0));
           return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
       }
   
       void main () {
           vec3 c = texture2D(uTexture, vUv).rgb;
   
       #ifdef SHADING
           vec3 lc = texture2D(uTexture, vL).rgb;
           vec3 rc = texture2D(uTexture, vR).rgb;
           vec3 tc = texture2D(uTexture, vT).rgb;
           vec3 bc = texture2D(uTexture, vB).rgb;
   
           float dx = length(rc) - length(lc);
           float dy = length(tc) - length(bc);
   
           vec3 n = normalize(vec3(dx, dy, length(texelSize)));
           vec3 l = vec3(0.0, 0.0, 1.0);
   
           float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
           c *= diffuse;
       #endif
   
           float a = max(c.r, max(c.g, c.b));
           gl_FragColor = vec4(c, a);
       }
   `,T=h(s.FRAGMENT_SHADER,`
       precision highp float;
       precision highp sampler2D;
   
       varying vec2 vUv;
       uniform sampler2D uTarget;
       uniform float aspectRatio;
       uniform vec3 color;
       uniform vec2 point;
       uniform float radius;
   
       void main () {
           vec2 p = vUv - point.xy;
           p.x *= aspectRatio;
           vec3 splat = exp(-dot(p, p) / radius) * color;
           vec3 base = texture2D(uTarget, vUv).xyz;
           gl_FragColor = vec4(base + splat, 1.0);
       }
   `),R=h(s.FRAGMENT_SHADER,`
       precision highp float;
       precision highp sampler2D;
   
       varying vec2 vUv;
       uniform sampler2D uVelocity;
       uniform sampler2D uSource;
       uniform vec2 texelSize;
       uniform vec2 dyeTexelSize;
       uniform float dt;
       uniform float dissipation;
   
       vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
           vec2 st = uv / tsize - 0.5;
   
           vec2 iuv = floor(st);
           vec2 fuv = fract(st);
   
           vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
           vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
           vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
           vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
   
           return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
       }
   
       void main () {
       #ifdef MANUAL_FILTERING
           vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
           vec4 result = bilerp(uSource, coord, dyeTexelSize);
       #else
           vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
           vec4 result = texture2D(uSource, coord);
       #endif
           float decay = 1.0 + dissipation * dt;
           gl_FragColor = result / decay;
       }`,c.supportLinearFiltering?null:["MANUAL_FILTERING"]),y=h(s.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       varying highp vec2 vL;
       varying highp vec2 vR;
       varying highp vec2 vT;
       varying highp vec2 vB;
       uniform sampler2D uVelocity;
   
       void main () {
           float L = texture2D(uVelocity, vL).x;
           float R = texture2D(uVelocity, vR).x;
           float T = texture2D(uVelocity, vT).y;
           float B = texture2D(uVelocity, vB).y;
   
           vec2 C = texture2D(uVelocity, vUv).xy;
           if (vL.x < 0.0) { L = -C.x; }
           if (vR.x > 1.0) { R = -C.x; }
           if (vT.y > 1.0) { T = -C.y; }
           if (vB.y < 0.0) { B = -C.y; }
   
           float div = 0.5 * (R - L + T - B);
           gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
       }
   `),w=h(s.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       varying highp vec2 vL;
       varying highp vec2 vR;
       varying highp vec2 vT;
       varying highp vec2 vB;
       uniform sampler2D uVelocity;
   
       void main () {
           float L = texture2D(uVelocity, vL).y;
           float R = texture2D(uVelocity, vR).y;
           float T = texture2D(uVelocity, vT).x;
           float B = texture2D(uVelocity, vB).x;
           float vorticity = R - L - T + B;
           gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
       }
   `),b=h(s.FRAGMENT_SHADER,`
       precision highp float;
       precision highp sampler2D;
   
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       varying vec2 vT;
       varying vec2 vB;
       uniform sampler2D uVelocity;
       uniform sampler2D uCurl;
       uniform float curl;
       uniform float dt;
   
       void main () {
           float L = texture2D(uCurl, vL).x;
           float R = texture2D(uCurl, vR).x;
           float T = texture2D(uCurl, vT).x;
           float B = texture2D(uCurl, vB).x;
           float C = texture2D(uCurl, vUv).x;
   
           vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
           force /= length(force) + 0.0001;
           force *= curl * C;
           force.y *= -1.0;
   
           vec2 velocity = texture2D(uVelocity, vUv).xy;
           velocity += force * dt;
           velocity = min(max(velocity, -1000.0), 1000.0);
           gl_FragColor = vec4(velocity, 0.0, 1.0);
       }
   `),S=h(s.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       varying highp vec2 vL;
       varying highp vec2 vR;
       varying highp vec2 vT;
       varying highp vec2 vB;
       uniform sampler2D uPressure;
       uniform sampler2D uDivergence;
   
       void main () {
           float L = texture2D(uPressure, vL).x;
           float R = texture2D(uPressure, vR).x;
           float T = texture2D(uPressure, vT).x;
           float B = texture2D(uPressure, vB).x;
           float C = texture2D(uPressure, vUv).x;
           float divergence = texture2D(uDivergence, vUv).x;
           float pressure = (L + R + B + T - divergence) * 0.25;
           gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
       }
   `),D=h(s.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       varying highp vec2 vL;
       varying highp vec2 vR;
       varying highp vec2 vT;
       varying highp vec2 vB;
       uniform sampler2D uPressure;
       uniform sampler2D uVelocity;
   
       void main () {
           float L = texture2D(uPressure, vL).x;
           float R = texture2D(uPressure, vR).x;
           float T = texture2D(uPressure, vT).x;
           float B = texture2D(uPressure, vB).x;
           vec2 velocity = texture2D(uVelocity, vUv).xy;
           velocity.xy -= vec2(R - L, T - B);
           gl_FragColor = vec4(velocity, 0.0, 1.0);
       }
   `),A=(s.bindBuffer(s.ARRAY_BUFFER,s.createBuffer()),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),s.STATIC_DRAW),s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,s.createBuffer()),s.bufferData(s.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),s.STATIC_DRAW),s.vertexAttribPointer(0,2,s.FLOAT,!1,0,0),s.enableVertexAttribArray(0),(e,t=!1)=>{null==e?(s.viewport(0,0,s.drawingBufferWidth,s.drawingBufferHeight),s.bindFramebuffer(s.FRAMEBUFFER,null)):(s.viewport(0,0,e.width,e.height),s.bindFramebuffer(s.FRAMEBUFFER,e.fbo)),t&&(s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT)),s.drawElements(s.TRIANGLES,6,s.UNSIGNED_SHORT,0)}),_=new m(x,p),L=new m(x,g),F=new m(x,T),U=new m(x,R),N=new m(x,y),C=new m(x,w),B=new m(x,b),M=new m(x,S),P=new m(x,D),I=new class{constructor(e,t){this.vertexShader=e,this.fragmentShaderSource=t,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(e){let t=0;for(let r=0;r<e.length;r++)t+=function(e){if(0==e.length)return 0;let t=0;for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r)|0;return t}(e[r]);let r=this.programs[t];if(null==r){let i=h(s.FRAGMENT_SHADER,this.fragmentShaderSource,e);r=f(this.vertexShader,i),this.programs[t]=r}r!=this.activeProgram&&(this.uniforms=v(r),this.activeProgram=r)}bind(){s.useProgram(this.activeProgram)}}(x,E);function X(){let e=el(l.SIM_RESOLUTION),a=el(l.DYE_RESOLUTION),u=c.halfFloatTexType,d=c.formatRGBA,m=c.formatRG,f=c.formatR,v=c.supportLinearFiltering?s.LINEAR:s.NEAREST;s.disable(s.BLEND),t=null==t?k(a.width,a.height,d.internalFormat,d.format,u,v):O(t,a.width,a.height,d.internalFormat,d.format,u,v),r=null==r?k(e.width,e.height,m.internalFormat,m.format,u,v):O(r,e.width,e.height,m.internalFormat,m.format,u,v),i=z(e.width,e.height,f.internalFormat,f.format,u,s.NEAREST),n=z(e.width,e.height,f.internalFormat,f.format,u,s.NEAREST),o=k(e.width,e.height,f.internalFormat,f.format,u,s.NEAREST)}function z(e,t,r,i,n,o){s.activeTexture(s.TEXTURE0);let a=s.createTexture();s.bindTexture(s.TEXTURE_2D,a),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,o),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,o),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_2D,0,r,e,t,0,i,n,null);let l=s.createFramebuffer();s.bindFramebuffer(s.FRAMEBUFFER,l),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,a,0),s.viewport(0,0,e,t),s.clear(s.COLOR_BUFFER_BIT);let u=1/e,c=1/t;return{texture:a,fbo:l,width:e,height:t,texelSizeX:u,texelSizeY:c,attach:e=>(s.activeTexture(s.TEXTURE0+e),s.bindTexture(s.TEXTURE_2D,a),e)}}function k(e,t,r,i,n,o){let a=z(e,t,r,i,n,o),l=z(e,t,r,i,n,o);return{width:e,height:t,texelSizeX:a.texelSizeX,texelSizeY:a.texelSizeY,get read(){return a},set read(value){a=value},get write(){return l},set write(value){l=value},swap(){let e=a;a=l,l=e}}}function O(e,t,r,i,n,o,a){var l;let u;return e.width==t&&e.height==r?e:(l=e.read,u=z(t,r,i,n,o,a),_.bind(),s.uniform1i(_.uniforms.uTexture,l.attach(0)),A(u),e.read=u,e.write=z(t,r,i,n,o,a),e.width=t,e.height=r,e.texelSizeX=1/t,e.texelSizeY=1/r,e)}a=[],l.SHADING&&a.push("SHADING"),I.setKeywords(a),X();let j=Date.now(),G=0,Y=!1,V=!1,H=0;function W(){V||Y||(V=!0,function e(){var a,d,m;let f,v,h,x,p;if(Y)return;let g=(v=((f=Date.now())-j)/1e3,v=Math.min(v,.016666),j=f,v);$()&&X(),a=g,(G+=a*l.COLOR_UPDATE_SPEED)>=1&&(d=G,h=1,G=0==h?0:(d-0)%h+0,u.forEach(e=>{e.color=ea()})),u.forEach(e=>{var t;let r,i;e.moved&&(e.moved=!1,r=(t=e).deltaX*l.SPLAT_FORCE,i=t.deltaY*l.SPLAT_FORCE,q(t.texcoordX,t.texcoordY,r,i,t.color))}),function(e){s.disable(s.BLEND),C.bind(),s.uniform2f(C.uniforms.texelSize,r.texelSizeX,r.texelSizeY),s.uniform1i(C.uniforms.uVelocity,r.read.attach(0)),A(n),B.bind(),s.uniform2f(B.uniforms.texelSize,r.texelSizeX,r.texelSizeY),s.uniform1i(B.uniforms.uVelocity,r.read.attach(0)),s.uniform1i(B.uniforms.uCurl,n.attach(1)),s.uniform1f(B.uniforms.curl,l.CURL),s.uniform1f(B.uniforms.dt,e),A(r.write),r.swap(),N.bind(),s.uniform2f(N.uniforms.texelSize,r.texelSizeX,r.texelSizeY),s.uniform1i(N.uniforms.uVelocity,r.read.attach(0)),A(i),L.bind(),s.uniform1i(L.uniforms.uTexture,o.read.attach(0)),s.uniform1f(L.uniforms.value,l.PRESSURE),A(o.write),o.swap(),M.bind(),s.uniform2f(M.uniforms.texelSize,r.texelSizeX,r.texelSizeY),s.uniform1i(M.uniforms.uDivergence,i.attach(0));for(let e=0;e<l.PRESSURE_ITERATIONS;e++)s.uniform1i(M.uniforms.uPressure,o.read.attach(1)),A(o.write),o.swap();P.bind(),s.uniform2f(P.uniforms.texelSize,r.texelSizeX,r.texelSizeY),s.uniform1i(P.uniforms.uPressure,o.read.attach(0)),s.uniform1i(P.uniforms.uVelocity,r.read.attach(1)),A(r.write),r.swap(),U.bind(),s.uniform2f(U.uniforms.texelSize,r.texelSizeX,r.texelSizeY),c.supportLinearFiltering||s.uniform2f(U.uniforms.dyeTexelSize,r.texelSizeX,r.texelSizeY);let a=r.read.attach(0);s.uniform1i(U.uniforms.uVelocity,a),s.uniform1i(U.uniforms.uSource,a),s.uniform1f(U.uniforms.dt,e),s.uniform1f(U.uniforms.dissipation,l.VELOCITY_DISSIPATION),A(r.write),r.swap(),c.supportLinearFiltering||s.uniform2f(U.uniforms.dyeTexelSize,t.texelSizeX,t.texelSizeY),s.uniform1i(U.uniforms.uVelocity,r.read.attach(0)),s.uniform1i(U.uniforms.uSource,t.read.attach(1)),s.uniform1f(U.uniforms.dissipation,l.DENSITY_DISSIPATION),A(t.write),t.swap()}(g),s.blendFunc(s.ONE,s.ONE_MINUS_SRC_ALPHA),s.enable(s.BLEND),m=null,x=null==m?s.drawingBufferWidth:m.width,p=null==m?s.drawingBufferHeight:m.height,I.bind(),l.SHADING&&s.uniform2f(I.uniforms.texelSize,1/x,1/p),s.uniform1i(I.uniforms.uTexture,t.read.attach(0)),A(m),H=requestAnimationFrame(e)}())}function $(){let t=eu(e.clientWidth),r=eu(e.clientHeight);return(e.width!=t||e.height!=r)&&(e.width=t,e.height=r,!0)}function q(i,n,o,a,u){var c;let d;F.bind(),s.uniform1i(F.uniforms.uTarget,r.read.attach(0)),s.uniform1f(F.uniforms.aspectRatio,e.width/e.height),s.uniform2f(F.uniforms.point,i,n),s.uniform3f(F.uniforms.color,o,a,0),s.uniform1f(F.uniforms.radius,(c=l.SPLAT_RADIUS/100,(d=e.width/e.height)>1&&(c*=d),c)),A(r.write),r.swap(),s.uniform1i(F.uniforms.uTarget,t.read.attach(0)),s.uniform3f(F.uniforms.color,u.r,u.g,u.b),A(t.write),t.swap()}function K(t,r){let i=e.getBoundingClientRect();return{x:eu(t-i.left),y:eu(r-i.top)}}let J=e=>{let t,r,i,n=u[0],o=K(e.clientX,e.clientY);en(n,-1,o.x,o.y),t=ea(),t.r*=10,t.g*=10,t.b*=10,r=10*(Math.random()-.5),i=30*(Math.random()-.5),q(n.texcoordX,n.texcoordY,r,i,t)},Q=e=>{let t=u[0],r=K(e.clientX,e.clientY),i=ea();W(),eo(t,r.x,r.y,i),document.body.removeEventListener("mousemove",Q)},Z=e=>{let t=u[0],r=K(e.clientX,e.clientY),i=t.color;eo(t,r.x,r.y,i)},ee=e=>{let t=e.targetTouches,r=u[0];for(let e=0;e<t.length;e++){let i=K(t[e].clientX,t[e].clientY);W(),en(r,t[e].identifier,i.x,i.y)}document.body.removeEventListener("touchstart",ee)},et=e=>{let t=e.targetTouches,r=u[0];for(let e=0;e<t.length;e++){let i=K(t[e].clientX,t[e].clientY);en(r,t[e].identifier,i.x,i.y)}},er=e=>{let t=e.targetTouches,r=u[0];for(let e=0;e<t.length;e++){let i=K(t[e].clientX,t[e].clientY);eo(r,i.x,i.y,r.color)}},ei=e=>{let t=e.changedTouches,r=u[0];for(let e=0;e<t.length;e++)r.down=!1};function en(t,r,i,n){t.id=r,t.down=!0,t.moved=!1,t.texcoordX=i/e.width,t.texcoordY=1-n/e.height,t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.deltaX=0,t.deltaY=0,t.color=ea()}function eo(t,r,i,n){var o,a;let l,u;t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.texcoordX=r/e.width,t.texcoordY=1-i/e.height,o=t.texcoordX-t.prevTexcoordX,(l=e.width/e.height)<1&&(o*=l),t.deltaX=o,a=t.texcoordY-t.prevTexcoordY,(u=e.width/e.height)>1&&(a/=u),t.deltaY=a,t.moved=Math.abs(t.deltaX)>0||Math.abs(t.deltaY)>0,t.color=n}function ea(){let e=function(e,t){let r,i,n,o,a,l,u,s;switch(o=Math.floor(6*e),a=6*e-o,l=+(1-t),u=+(1-a*t),s=+(1-(1-a)*t),o%6){case 0:r=1,i=s,n=l;break;case 1:r=u,i=1,n=l;break;case 2:r=l,i=1,n=s;break;case 3:r=l,i=u,n=1;break;case 4:r=s,i=l,n=1;break;case 5:r=1,i=l,n=u}return{r,g:i,b:n}}(.022+.045*Math.random(),.85+.15*Math.random());return e.r*=.3,e.g*=.3,e.b*=.3,e}function el(e){let t=s.drawingBufferWidth/s.drawingBufferHeight;t<1&&(t=1/t);let r=Math.round(e),i=Math.round(e*t);return s.drawingBufferWidth>s.drawingBufferHeight?{width:i,height:r}:{width:r,height:i}}function eu(e){return Math.floor(e*(window.devicePixelRatio||1))}return window.addEventListener("mousedown",J),document.body.addEventListener("mousemove",Q),window.addEventListener("mousemove",Z),document.body.addEventListener("touchstart",ee),window.addEventListener("touchstart",et),window.addEventListener("touchmove",er,!1),window.addEventListener("touchend",ei),()=>{Y=!0,cancelAnimationFrame(H),window.removeEventListener("mousedown",J),document.body.removeEventListener("mousemove",Q),window.removeEventListener("mousemove",Z),document.body.removeEventListener("touchstart",ee),window.removeEventListener("touchstart",et),window.removeEventListener("touchmove",er),window.removeEventListener("touchend",ei),s.getExtension("WEBGL_lose_context")?.loseContext()}})(e.current)}catch(e){console.warn("[HeroFluidCursor] skipped —",e)}},50);return()=>{r=!0,window.clearTimeout(i),t?.()}},[n]),n)?null:(0,t.jsx)("canvas",{ref:e,"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-20 h-full w-full"})}e.s(["HeroAtmosphere",0,function({fluid:e=!1,deferUntilVisible:i=!1}){let n=(0,r.useRef)(null),[l,u]=(0,r.useState)(!i);return(0,r.useEffect)(()=>{if(!i||l)return;let e=n.current;if(!e)return;let t=new IntersectionObserver(([e])=>{e?.isIntersecting&&(u(!0),t.disconnect())},{rootMargin:"200px 0px"});return t.observe(e),()=>t.disconnect()},[i,l]),(0,t.jsx)("div",{ref:n,className:"absolute inset-0",children:l?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{}),e?(0,t.jsx)(a,{}):null]}):null})}],51852)},14219,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let i=["Brand Strategy","Visual Identity","Product & Web","Go-to-Market","Not sure yet"],n=["< $25k","$25k — $75k","$75k — $150k","$150k+"],o=["ASAP","1–3 months","3–6 months","Exploring"];function a(){return(0,t.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M7 17L17 7M9 7h8v8"})})}function l({children:e,required:r}){return(0,t.jsxs)("label",{className:"font-mono text-[10px] tracking-[0.16em] text-ink-200 uppercase",children:[e,r?(0,t.jsx)("span",{className:"text-vermilion",children:" *"}):null]})}function u({label:e,selected:r,onClick:i}){return(0,t.jsx)("button",{type:"button",onClick:i,"aria-pressed":r,className:`rounded-md border px-3.5 py-2 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors ${r?"border-paper bg-paper text-ink":"border-white/20 bg-transparent text-ink-200 hover:border-white/40 hover:text-paper"}`,children:e})}e.s(["ContactForm",0,function(){let[e,s]=(0,r.useState)(""),[c,d]=(0,r.useState)(""),[m,f]=(0,r.useState)(""),[v,h]=(0,r.useState)(""),[x,p]=(0,r.useState)("Brand Strategy"),[g,E]=(0,r.useState)("$25k — $75k"),[T,R]=(0,r.useState)("1–3 months"),[y,w]=(0,r.useState)(""),[b,S]=(0,r.useState)("idle");return(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),S("sent")},className:"w-full",noValidate:!0,children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsx)(l,{required:!0,children:"Your name"}),(0,t.jsx)("input",{required:!0,name:"name",value:e,onChange:e=>s(e.target.value),autoComplete:"name",className:"border-0 border-b border-white/25 bg-transparent py-2 text-[0.95rem] text-paper outline-none transition-colors placeholder:text-ink-400 focus:border-vermilion"})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsx)(l,{required:!0,children:"Email"}),(0,t.jsx)("input",{required:!0,type:"email",name:"email",value:c,onChange:e=>d(e.target.value),autoComplete:"email",className:"border-0 border-b border-white/25 bg-transparent py-2 text-[0.95rem] text-paper outline-none transition-colors placeholder:text-ink-400 focus:border-vermilion"})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsx)(l,{required:!0,children:"Company"}),(0,t.jsx)("input",{required:!0,name:"company",value:m,onChange:e=>f(e.target.value),autoComplete:"organization",className:"border-0 border-b border-white/25 bg-transparent py-2 text-[0.95rem] text-paper outline-none transition-colors placeholder:text-ink-400 focus:border-vermilion"})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsx)(l,{children:"Website (optional)"}),(0,t.jsx)("input",{type:"url",name:"website",value:v,onChange:e=>h(e.target.value),placeholder:"https://",className:"border-0 border-b border-white/25 bg-transparent py-2 text-[0.95rem] text-paper outline-none transition-colors placeholder:text-ink-400 focus:border-vermilion"})]})]}),(0,t.jsxs)("fieldset",{className:"mt-12 border-0 p-0",children:[(0,t.jsx)("legend",{className:"font-mono text-[10px] tracking-[0.16em] text-ink-200 uppercase",children:"What do you need?"}),(0,t.jsx)("div",{className:"mt-4 flex flex-wrap gap-2.5",children:i.map(e=>(0,t.jsx)(u,{label:e,selected:x===e,onClick:()=>p(e)},e))})]}),(0,t.jsxs)("fieldset",{className:"mt-10 border-0 p-0",children:[(0,t.jsx)("legend",{className:"font-mono text-[10px] tracking-[0.16em] text-ink-200 uppercase",children:"Budget"}),(0,t.jsx)("div",{className:"mt-4 flex flex-wrap gap-2.5",children:n.map(e=>(0,t.jsx)(u,{label:e,selected:g===e,onClick:()=>E(e)},e))})]}),(0,t.jsxs)("fieldset",{className:"mt-10 border-0 p-0",children:[(0,t.jsx)("legend",{className:"font-mono text-[10px] tracking-[0.16em] text-ink-200 uppercase",children:"Timeline"}),(0,t.jsx)("div",{className:"mt-4 flex flex-wrap gap-2.5",children:o.map(e=>(0,t.jsx)(u,{label:e,selected:T===e,onClick:()=>R(e)},e))})]}),(0,t.jsxs)("div",{className:"mt-12 flex flex-col gap-3",children:[(0,t.jsx)(l,{children:"Tell us about the project (optional)"}),(0,t.jsx)("textarea",{name:"message",value:y,onChange:e=>w(e.target.value),rows:5,placeholder:"The problem you're trying to solve, the ambition, and what success looks like.",className:"resize-y rounded-md border border-white/20 bg-transparent px-4 py-3 text-[0.95rem] leading-relaxed text-paper outline-none transition-colors placeholder:text-ink-400 focus:border-vermilion"})]}),(0,t.jsxs)("div",{className:"mt-10 flex flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between",children:[(0,t.jsx)("p",{className:"font-mono text-[10px] tracking-[0.16em] text-ink-200 uppercase",children:"sent"===b?"Thanks — we'll be in touch.":"We respond within 48 hours"}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-3",children:[(0,t.jsx)("button",{type:"button",onClick:()=>{s(""),d(""),f(""),h(""),p("Brand Strategy"),E("$25k — $75k"),R("1–3 months"),w(""),S("idle")},className:"rounded-md border border-white/25 px-5 py-2.5 font-mono text-[10px] tracking-[0.14em] text-ink-200 uppercase transition-colors hover:border-white/45 hover:text-paper",children:"Cancel"}),(0,t.jsxs)("button",{type:"submit",className:"inline-flex items-center gap-2 rounded-md bg-[#E8B4A2] px-5 py-2.5 font-mono text-[10px] tracking-[0.14em] text-ink uppercase transition-opacity hover:opacity-90",children:["Send inquiry",(0,t.jsx)(a,{})]})]})]})]})}])}]);