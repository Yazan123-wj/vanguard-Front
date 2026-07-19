(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51852,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(60630);let a="⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⠁⠂⠄⠈⠐⠠⡀⢀⠃⠅⠘⠨⠊⠋⠌⠍⠎⠏⠑⠒⠓⠔⠕⠖⠗⠙⠚⠛⠜⠝⠞⠟⠡⠢⠣⠤⠥⠦⠧⠩⠪⠫⠬⠭⠮⠯⠱⠲⠳⠴⠵⠶⠷⠹⠺⠻⠼⠽⠾⠿⡁⡂⡃⡄⡅⡆⡇⡉⡊⡋⡌⡍⡎⡏⡑⡒⡓⡔⡕⡖⡗⡙⡚⡛⡜⡝⡞⡟⡡⡢⡣⡤⡥⡦⡧⡩⡪⡫⡬⡭⡮⡯⡱⡲⡳⡴⡵⡶⡷⡹⡺⡻⡼⡽⡾⡿⢁⢂⢃⢄⢅⢆⢇⢉⢊⢋⢌⢍⢎⢏⢑⢒⢓⢔⢕⢖⢗⢙⢚⢛⢜⢝⢞⢟⢡⢢⢣⢤⢥⢦ស់⢩⢪⢫⢬⢭⢮⢯⢱⢲⢳⢴⢵⢶⢷⢹⢺⢻⢼⢽⢾⢿⣀⣁⣂⣃⣄⣅⣆⣇⣉⣊⣋⣌⣍⣎⣏⣑⣒⣓⣔⣕⣖⣗⣙⣚⣛⣜⣝⣞⣟⣡⣢⣣⣤⣥⣦⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿",o=({backgroundColor:e="#0A0A0A",textColor:o="70, 70, 70",gridSize:n=72,removeWaveLine:s=!0,animationSpeed:l=.75})=>{let u=(0,r.useRef)(null),c=(0,r.useRef)(null),d=(0,r.useRef)(null),m=(0,r.useRef)({x:-9999,y:-9999,isDown:!1}),f=(0,r.useRef)([]),h=(0,r.useRef)(0),p=(0,r.useRef)(null),g=(0,r.useRef)([]),v=(0,r.useRef)({width:0,height:0}),E=(0,i.useReducedMotion)(),x=(0,r.useCallback)(()=>{let e=u.current,t=c.current;if(!e||!t)return;let{width:r,height:i}=t.getBoundingClientRect();v.current={width:r,height:i};let a=Math.min(window.devicePixelRatio||1,1.5);e.width=Math.round(r*a),e.height=Math.round(i*a),e.style.width=`${r}px`,e.style.height=`${i}px`;let o=e.getContext("2d");o&&(o.setTransform(a,0,0,a,0,0),d.current=o)},[]),b=(0,r.useCallback)(e=>{let t=u.current;if(!t)return;let r=t.getBoundingClientRect();m.current={x:e.clientX-r.left,y:e.clientY-r.top,isDown:m.current.isDown}},[]),T=(0,r.useCallback)(e=>{m.current.isDown=!0;let t=u.current;if(!t)return;let r=t.getBoundingClientRect(),i=e.clientX-r.left,a=e.clientY-r.top,{width:o,height:s}=v.current;if(0===o||0===s)return;g.current.push({x:i/(o/n),y:a/(s/n),time:Date.now(),intensity:2});let l=Date.now();g.current=g.current.filter(e=>l-e.time<4e3)},[n]),R=(0,r.useCallback)(()=>{m.current.isDown=!1},[]),y=(0,r.useCallback)(()=>{let t=u.current,r=d.current;if(!t||!r)return;let i=Date.now();h.current+=.016*l;let{width:c,height:p}=v.current;if(0===c||0===p)return;let E=(e,t)=>{let r=0;for(let a of g.current){let o=i-a.time;if(o>=4e3)continue;let s=e-a.x,l=t-a.y,u=Math.sqrt(s*s+l*l),c=o/4e3*n*.8,d=.15*n;Math.abs(u-c)<d&&(r+=(1-o/4e3)*a.intensity*(1-Math.abs(u-c)/d)*Math.sin((u-c)*.5))}return r};r.fillStyle=e,r.fillRect(0,0,c,p);let x=Array.from({length:n},()=>Array.from({length:n},()=>null)),b=c/n,T=p/n,R=m.current.x/b,y=m.current.y/T,w=m.current.x>-9e3?{x:R,y:y,frequency:.3,amplitude:1,phase:2*h.current,speed:1}:null;for(let e=0;e<n;e++){let t=x[e];if(t)for(let r=0;r<n;r++){let i=0;for(let t of f.current){let a=r-t.x,o=e-t.y,n=Math.sqrt(a*a+o*o),s=1/(1+.1*n);i+=Math.sin(n*t.frequency-h.current*t.speed+t.phase)*t.amplitude*s}if(w){let t=r-w.x,a=e-w.y,o=Math.sqrt(t*t+a*a),s=1/(1+.1*o);i+=Math.sin(o*w.frequency-h.current*w.speed+w.phase)*w.amplitude*s,o<.3*n&&(i+=(1-o/(.3*n))*.8*Math.sin(3*h.current))}let o=((i+=E(r,e))+2)/4;if(Math.abs(i)>.2){let e=Math.min(a.length-1,Math.max(0,Math.floor(o*(a.length-1))));t[r]={char:a[e]??"⣿",opacity:Math.min(.75,Math.max(.28,.28+.45*o))}}}}let A=.8*Math.min(b,T);r.font=`${A}px monospace`,r.textAlign="center",r.textBaseline="middle";for(let e=0;e<n;e++)for(let t=0;t<n;t++){let i=x[e]?.[t];i&&(r.fillStyle=`rgba(${o}, ${i.opacity})`,r.fillText(i.char,t*b+b/2,e*T+T/2))}if(!s)for(let e of g.current){let t=i-e.time;if(t>=4e3)continue;let a=t/4e3,n=a*Math.min(c,p)*.5,s=(1-a)*.3*e.intensity;r.beginPath(),r.strokeStyle=`rgba(${o}, ${s})`,r.lineWidth=1,r.arc(e.x*b,e.y*T,n,0,2*Math.PI),r.stroke()}},[e,o,n,l,s]);return(0,r.useEffect)(()=>{let e=[];for(let t=0;t<4;t++)e.push({x:n*(.25+.5*Math.random()),y:n*(.25+.5*Math.random()),frequency:.2+.3*Math.random(),amplitude:.5+.5*Math.random(),phase:Math.random()*Math.PI*2,speed:.5+.5*Math.random()});f.current=e;let t=u.current;if(!t)return;if(x(),E)return y(),window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x),f.current=[]};let r=!0,i="visible"===document.visibilityState,a=!1,o=()=>{y(),p.current=requestAnimationFrame(o)},s=()=>{let e=r&&i;e&&!a?(a=!0,p.current=requestAnimationFrame(o)):!e&&a&&(a=!1,p.current&&cancelAnimationFrame(p.current))},l=new IntersectionObserver(([e])=>{r=e?.isIntersecting??!1,s()});l.observe(t);let c=()=>{i="visible"===document.visibilityState,s()};return document.addEventListener("visibilitychange",c),window.addEventListener("resize",x),window.addEventListener("mousemove",b),window.addEventListener("mousedown",T),window.addEventListener("mouseup",R),s(),()=>{window.removeEventListener("resize",x),window.removeEventListener("mousemove",b),window.removeEventListener("mousedown",T),window.removeEventListener("mouseup",R),l.disconnect(),document.removeEventListener("visibilitychange",c),a=!1,p.current&&(cancelAnimationFrame(p.current),p.current=null),h.current=0,g.current=[],f.current=[],d.current=null}},[y,x,b,T,R,n,E]),(0,t.jsx)("div",{ref:c,"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-0 overflow-hidden",style:{backgroundColor:e},children:(0,t.jsx)("canvas",{ref:u,className:"block h-full w-full"})})};function n(){let e=(0,r.useRef)(null),a=(0,i.useReducedMotion)();return((0,r.useEffect)(()=>{let t;if(!e.current||a)return;let r=!1,i=window.setTimeout(()=>{if(!r&&e.current)try{t=(e=>{let t,r,i,a,o,n;W();let s={SIM_RESOLUTION:128,DYE_RESOLUTION:1440,DENSITY_DISSIPATION:3.5,VELOCITY_DISSIPATION:2,PRESSURE:.1,PRESSURE_ITERATIONS:20,CURL:3,SPLAT_RADIUS:.2,SPLAT_FORCE:6e3,SHADING:!0,COLOR_UPDATE_SPEED:10},l=[];l.push(new function(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]});let{gl:u,ext:c}=function(e){let t,r,i,a,o,n={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},s=e.getContext("webgl2",n),l=!!s;if(l||(s=e.getContext("webgl",n)||e.getContext("experimental-webgl",n)),!s)throw Error("WebGL context unavailable");l?(s.getExtension("EXT_color_buffer_float"),r=s.getExtension("OES_texture_float_linear")):(t=s.getExtension("OES_texture_half_float"),r=s.getExtension("OES_texture_half_float_linear")),s.clearColor(0,0,0,1);let u=l?s.HALF_FLOAT:t?.HALF_FLOAT_OES;if(null==u)throw Error("WebGL half-float textures unavailable");if(l?(i=d(s,s.RGBA16F,s.RGBA,u),a=d(s,s.RG16F,s.RG,u),o=d(s,s.R16F,s.RED,u)):(i=d(s,s.RGBA,s.RGBA,u),a=d(s,s.RGBA,s.RGBA,u),o=d(s,s.RGBA,s.RGBA,u)),!i||!a||!o)throw Error("WebGL render texture formats unavailable");return{gl:s,ext:{formatRGBA:i,formatRG:a,formatR:o,halfFloatTexType:u,supportLinearFiltering:r}}}(e);function d(e,t,r,i){var a,o,n,s;let l,u;if(a=e,o=t,n=r,s=i,l=a.createTexture(),a.bindTexture(a.TEXTURE_2D,l),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.NEAREST),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texImage2D(a.TEXTURE_2D,0,o,4,4,0,n,s,null),u=a.createFramebuffer(),a.bindFramebuffer(a.FRAMEBUFFER,u),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,l,0),a.checkFramebufferStatus(a.FRAMEBUFFER)!=a.FRAMEBUFFER_COMPLETE)switch(t){case e.R16F:return d(e,e.RG16F,e.RG,i);case e.RG16F:return d(e,e.RGBA16F,e.RGBA,i);default:return null}return{internalFormat:t,format:r}}c.supportLinearFiltering||(s.DYE_RESOLUTION=256,s.SHADING=!1);class m{constructor(e,t){this.uniforms={},this.program=f(e,t),this.uniforms=h(this.program)}bind(){u.useProgram(this.program)}}function f(e,t){let r=u.createProgram();return u.attachShader(r,e),u.attachShader(r,t),u.linkProgram(r),u.getProgramParameter(r,u.LINK_STATUS)||console.trace(u.getProgramInfoLog(r)),r}function h(e){let t=[],r=u.getProgramParameter(e,u.ACTIVE_UNIFORMS);for(let i=0;i<r;i++){let r=u.getActiveUniform(e,i).name;t[r]=u.getUniformLocation(e,r)}return t}function p(e,t,r){t=function(e,t){if(null==t)return e;let r="";return t.forEach(e=>{r+="#define "+e+"\n"}),r+e}(t,r);let i=u.createShader(e);return u.shaderSource(i,t),u.compileShader(i),u.getShaderParameter(i,u.COMPILE_STATUS)||console.trace(u.getShaderInfoLog(i)),i}let g=p(u.VERTEX_SHADER,`
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
   `),v=p(u.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       uniform sampler2D uTexture;
   
       void main () {
           gl_FragColor = texture2D(uTexture, vUv);
       }
   `),E=p(u.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       uniform sampler2D uTexture;
       uniform float value;
   
       void main () {
           gl_FragColor = value * texture2D(uTexture, vUv);
       }
   `),x=`
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
   `,b=p(u.FRAGMENT_SHADER,`
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
   `),T=p(u.FRAGMENT_SHADER,`
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
       }`,c.supportLinearFiltering?null:["MANUAL_FILTERING"]),R=p(u.FRAGMENT_SHADER,`
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
   `),y=p(u.FRAGMENT_SHADER,`
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
   `),w=p(u.FRAGMENT_SHADER,`
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
   `),A=p(u.FRAGMENT_SHADER,`
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
   `),S=p(u.FRAGMENT_SHADER,`
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
   `),I=(u.bindBuffer(u.ARRAY_BUFFER,u.createBuffer()),u.bufferData(u.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),u.STATIC_DRAW),u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,u.createBuffer()),u.bufferData(u.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),u.STATIC_DRAW),u.vertexAttribPointer(0,2,u.FLOAT,!1,0,0),u.enableVertexAttribArray(0),(e,t=!1)=>{null==e?(u.viewport(0,0,u.drawingBufferWidth,u.drawingBufferHeight),u.bindFramebuffer(u.FRAMEBUFFER,null)):(u.viewport(0,0,e.width,e.height),u.bindFramebuffer(u.FRAMEBUFFER,e.fbo)),t&&(u.clearColor(0,0,0,1),u.clear(u.COLOR_BUFFER_BIT)),u.drawElements(u.TRIANGLES,6,u.UNSIGNED_SHORT,0)}),D=new m(g,v),L=new m(g,E),N=new m(g,b),C=new m(g,T),F=new m(g,R),P=new m(g,y),B=new m(g,w),U=new m(g,A),M=new m(g,S),O=new class{constructor(e,t){this.vertexShader=e,this.fragmentShaderSource=t,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(e){let t=0;for(let r=0;r<e.length;r++)t+=function(e){if(0==e.length)return 0;let t=0;for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r)|0;return t}(e[r]);let r=this.programs[t];if(null==r){let i=p(u.FRAGMENT_SHADER,this.fragmentShaderSource,e);r=f(this.vertexShader,i),this.programs[t]=r}r!=this.activeProgram&&(this.uniforms=h(r),this.activeProgram=r)}bind(){u.useProgram(this.activeProgram)}}(g,x);function _(){let e=es(s.SIM_RESOLUTION),n=es(s.DYE_RESOLUTION),l=c.halfFloatTexType,d=c.formatRGBA,m=c.formatRG,f=c.formatR,h=c.supportLinearFiltering?u.LINEAR:u.NEAREST;u.disable(u.BLEND),t=null==t?G(n.width,n.height,d.internalFormat,d.format,l,h):k(t,n.width,n.height,d.internalFormat,d.format,l,h),r=null==r?G(e.width,e.height,m.internalFormat,m.format,l,h):k(r,e.width,e.height,m.internalFormat,m.format,l,h),i=X(e.width,e.height,f.internalFormat,f.format,l,u.NEAREST),a=X(e.width,e.height,f.internalFormat,f.format,l,u.NEAREST),o=G(e.width,e.height,f.internalFormat,f.format,l,u.NEAREST)}function X(e,t,r,i,a,o){u.activeTexture(u.TEXTURE0);let n=u.createTexture();u.bindTexture(u.TEXTURE_2D,n),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,o),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,o),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),u.texImage2D(u.TEXTURE_2D,0,r,e,t,0,i,a,null);let s=u.createFramebuffer();u.bindFramebuffer(u.FRAMEBUFFER,s),u.framebufferTexture2D(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.TEXTURE_2D,n,0),u.viewport(0,0,e,t),u.clear(u.COLOR_BUFFER_BIT);let l=1/e,c=1/t;return{texture:n,fbo:s,width:e,height:t,texelSizeX:l,texelSizeY:c,attach:e=>(u.activeTexture(u.TEXTURE0+e),u.bindTexture(u.TEXTURE_2D,n),e)}}function G(e,t,r,i,a,o){let n=X(e,t,r,i,a,o),s=X(e,t,r,i,a,o);return{width:e,height:t,texelSizeX:n.texelSizeX,texelSizeY:n.texelSizeY,get read(){return n},set read(value){n=value},get write(){return s},set write(value){s=value},swap(){let e=n;n=s,s=e}}}function k(e,t,r,i,a,o,n){var s;let l;return e.width==t&&e.height==r?e:(s=e.read,l=X(t,r,i,a,o,n),D.bind(),u.uniform1i(D.uniforms.uTexture,s.attach(0)),I(l),e.read=l,e.write=X(t,r,i,a,o,n),e.width=t,e.height=r,e.texelSizeX=1/t,e.texelSizeY=1/r,e)}n=[],s.SHADING&&n.push("SHADING"),O.setKeywords(n),_();let z=Date.now(),Y=0,j=!1,H=!1,q=0;function V(){H||j||(H=!0,function e(){var n,d,m;let f,h,p,g,v;if(j)return;let E=(h=((f=Date.now())-z)/1e3,h=Math.min(h,.016666),z=f,h);W()&&_(),n=E,(Y+=n*s.COLOR_UPDATE_SPEED)>=1&&(d=Y,p=1,Y=0==p?0:(d-0)%p+0,l.forEach(e=>{e.color=en()})),l.forEach(e=>{var t;let r,i;e.moved&&(e.moved=!1,r=(t=e).deltaX*s.SPLAT_FORCE,i=t.deltaY*s.SPLAT_FORCE,K(t.texcoordX,t.texcoordY,r,i,t.color))}),function(e){u.disable(u.BLEND),P.bind(),u.uniform2f(P.uniforms.texelSize,r.texelSizeX,r.texelSizeY),u.uniform1i(P.uniforms.uVelocity,r.read.attach(0)),I(a),B.bind(),u.uniform2f(B.uniforms.texelSize,r.texelSizeX,r.texelSizeY),u.uniform1i(B.uniforms.uVelocity,r.read.attach(0)),u.uniform1i(B.uniforms.uCurl,a.attach(1)),u.uniform1f(B.uniforms.curl,s.CURL),u.uniform1f(B.uniforms.dt,e),I(r.write),r.swap(),F.bind(),u.uniform2f(F.uniforms.texelSize,r.texelSizeX,r.texelSizeY),u.uniform1i(F.uniforms.uVelocity,r.read.attach(0)),I(i),L.bind(),u.uniform1i(L.uniforms.uTexture,o.read.attach(0)),u.uniform1f(L.uniforms.value,s.PRESSURE),I(o.write),o.swap(),U.bind(),u.uniform2f(U.uniforms.texelSize,r.texelSizeX,r.texelSizeY),u.uniform1i(U.uniforms.uDivergence,i.attach(0));for(let e=0;e<s.PRESSURE_ITERATIONS;e++)u.uniform1i(U.uniforms.uPressure,o.read.attach(1)),I(o.write),o.swap();M.bind(),u.uniform2f(M.uniforms.texelSize,r.texelSizeX,r.texelSizeY),u.uniform1i(M.uniforms.uPressure,o.read.attach(0)),u.uniform1i(M.uniforms.uVelocity,r.read.attach(1)),I(r.write),r.swap(),C.bind(),u.uniform2f(C.uniforms.texelSize,r.texelSizeX,r.texelSizeY),c.supportLinearFiltering||u.uniform2f(C.uniforms.dyeTexelSize,r.texelSizeX,r.texelSizeY);let n=r.read.attach(0);u.uniform1i(C.uniforms.uVelocity,n),u.uniform1i(C.uniforms.uSource,n),u.uniform1f(C.uniforms.dt,e),u.uniform1f(C.uniforms.dissipation,s.VELOCITY_DISSIPATION),I(r.write),r.swap(),c.supportLinearFiltering||u.uniform2f(C.uniforms.dyeTexelSize,t.texelSizeX,t.texelSizeY),u.uniform1i(C.uniforms.uVelocity,r.read.attach(0)),u.uniform1i(C.uniforms.uSource,t.read.attach(1)),u.uniform1f(C.uniforms.dissipation,s.DENSITY_DISSIPATION),I(t.write),t.swap()}(E),u.blendFunc(u.ONE,u.ONE_MINUS_SRC_ALPHA),u.enable(u.BLEND),m=null,g=null==m?u.drawingBufferWidth:m.width,v=null==m?u.drawingBufferHeight:m.height,O.bind(),s.SHADING&&u.uniform2f(O.uniforms.texelSize,1/g,1/v),u.uniform1i(O.uniforms.uTexture,t.read.attach(0)),I(m),q=requestAnimationFrame(e)}())}function W(){let t=el(e.clientWidth),r=el(e.clientHeight);return(e.width!=t||e.height!=r)&&(e.width=t,e.height=r,!0)}function K(i,a,o,n,l){var c;let d;N.bind(),u.uniform1i(N.uniforms.uTarget,r.read.attach(0)),u.uniform1f(N.uniforms.aspectRatio,e.width/e.height),u.uniform2f(N.uniforms.point,i,a),u.uniform3f(N.uniforms.color,o,n,0),u.uniform1f(N.uniforms.radius,(c=s.SPLAT_RADIUS/100,(d=e.width/e.height)>1&&(c*=d),c)),I(r.write),r.swap(),u.uniform1i(N.uniforms.uTarget,t.read.attach(0)),u.uniform3f(N.uniforms.color,l.r,l.g,l.b),I(t.write),t.swap()}function $(t,r){let i=e.getBoundingClientRect();return{x:el(t-i.left),y:el(r-i.top)}}let J=e=>{let t,r,i,a=l[0],o=$(e.clientX,e.clientY);ea(a,-1,o.x,o.y),t=en(),t.r*=10,t.g*=10,t.b*=10,r=10*(Math.random()-.5),i=30*(Math.random()-.5),K(a.texcoordX,a.texcoordY,r,i,t)},Q=e=>{let t=l[0],r=$(e.clientX,e.clientY),i=en();V(),eo(t,r.x,r.y,i),document.body.removeEventListener("mousemove",Q)},Z=e=>{let t=l[0],r=$(e.clientX,e.clientY),i=t.color;eo(t,r.x,r.y,i)},ee=e=>{let t=e.targetTouches,r=l[0];for(let e=0;e<t.length;e++){let i=$(t[e].clientX,t[e].clientY);V(),ea(r,t[e].identifier,i.x,i.y)}document.body.removeEventListener("touchstart",ee)},et=e=>{let t=e.targetTouches,r=l[0];for(let e=0;e<t.length;e++){let i=$(t[e].clientX,t[e].clientY);ea(r,t[e].identifier,i.x,i.y)}},er=e=>{let t=e.targetTouches,r=l[0];for(let e=0;e<t.length;e++){let i=$(t[e].clientX,t[e].clientY);eo(r,i.x,i.y,r.color)}},ei=e=>{let t=e.changedTouches,r=l[0];for(let e=0;e<t.length;e++)r.down=!1};function ea(t,r,i,a){t.id=r,t.down=!0,t.moved=!1,t.texcoordX=i/e.width,t.texcoordY=1-a/e.height,t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.deltaX=0,t.deltaY=0,t.color=en()}function eo(t,r,i,a){var o,n;let s,l;t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.texcoordX=r/e.width,t.texcoordY=1-i/e.height,o=t.texcoordX-t.prevTexcoordX,(s=e.width/e.height)<1&&(o*=s),t.deltaX=o,n=t.texcoordY-t.prevTexcoordY,(l=e.width/e.height)>1&&(n/=l),t.deltaY=n,t.moved=Math.abs(t.deltaX)>0||Math.abs(t.deltaY)>0,t.color=a}function en(){let e=function(e,t){let r,i,a,o,n,s,l,u;switch(o=Math.floor(6*e),n=6*e-o,s=+(1-t),l=+(1-n*t),u=+(1-(1-n)*t),o%6){case 0:r=1,i=u,a=s;break;case 1:r=l,i=1,a=s;break;case 2:r=s,i=1,a=u;break;case 3:r=s,i=l,a=1;break;case 4:r=u,i=s,a=1;break;case 5:r=1,i=s,a=l}return{r,g:i,b:a}}(.022+.045*Math.random(),.85+.15*Math.random());return e.r*=.3,e.g*=.3,e.b*=.3,e}function es(e){let t=u.drawingBufferWidth/u.drawingBufferHeight;t<1&&(t=1/t);let r=Math.round(e),i=Math.round(e*t);return u.drawingBufferWidth>u.drawingBufferHeight?{width:i,height:r}:{width:r,height:i}}function el(e){return Math.floor(e*(window.devicePixelRatio||1))}return window.addEventListener("mousedown",J),document.body.addEventListener("mousemove",Q),window.addEventListener("mousemove",Z),document.body.addEventListener("touchstart",ee),window.addEventListener("touchstart",et),window.addEventListener("touchmove",er,!1),window.addEventListener("touchend",ei),()=>{j=!0,cancelAnimationFrame(q),window.removeEventListener("mousedown",J),document.body.removeEventListener("mousemove",Q),window.removeEventListener("mousemove",Z),document.body.removeEventListener("touchstart",ee),window.removeEventListener("touchstart",et),window.removeEventListener("touchmove",er),window.removeEventListener("touchend",ei),u.getExtension("WEBGL_lose_context")?.loseContext()}})(e.current)}catch(e){console.warn("[HeroFluidCursor] skipped —",e)}},50);return()=>{r=!0,window.clearTimeout(i),t?.()}},[a]),a)?null:(0,t.jsx)("canvas",{ref:e,"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-20 h-full w-full"})}e.s(["HeroAtmosphere",0,function({fluid:e=!1,deferUntilVisible:i=!1}){let a=(0,r.useRef)(null),[s,l]=(0,r.useState)(!i);return(0,r.useEffect)(()=>{if(!i||s)return;let e=a.current;if(!e)return;let t=new IntersectionObserver(([e])=>{e?.isIntersecting&&(l(!0),t.disconnect())},{rootMargin:"200px 0px"});return t.observe(e),()=>t.disconnect()},[i,s]),(0,t.jsx)("div",{ref:a,className:"absolute inset-0",children:s?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{}),e?(0,t.jsx)(n,{}):null]}):null})}],51852)},92250,e=>{"use strict";e.s(["projects",0,[{id:"netflix-experience",title:"NETFLIX",subtitle:"STANGER THINGS EXPERIENCE",tags:["EXPERIENCE","GAME","PHYSICAL"],year:"2025",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"google-cloud",title:"Google",subtitle:"GOOGLE CLOUD BIGQUERY",tags:["COMMUNICATION","SOCIAL","CAMPAIGN"],year:"2025",image:"https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=800&auto=format&fit=crop",images:["https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"],theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"zendesk-15",title:"zendesk",subtitle:"15 YEARS CAMPAIGN",tags:["EXPERIENCE","WEBSITE","CAMPAIGN"],year:"2024",image:"https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"diageo-artistry",title:"DIAGEO",subtitle:"A BLEND OF ARTISTRY",tags:["EXPERIENCE","3D","AI"],year:"2024",image:"https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"doja-cat",title:"DOJA CAT",subtitle:"JUICY FRUIT CAMPAIGN",tags:["PRODUCT","WEBSITE","PLATFORM"],year:"2024",image:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"nike-run",title:"NIKE",subtitle:"AIR MAX FUTURE BEAT",tags:["EXPERIENCE","PHYSICAL","3D"],year:"2025",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"spotify-wrapped",title:"Spotify",subtitle:"WRAPPED INTERACTIVE",tags:["WEBSITE","SOCIAL","EXPERIENCE"],year:"2024",image:"https://images.unsplash.com/photo-1614680376593-902f74fa0d41?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"apple-vision",title:"Apple",subtitle:"VISION PRO SHOWCASE",tags:["EXPERIENCE","3D","PRODUCT"],year:"2026",image:"https://images.unsplash.com/photo-1608248597481-496100c8c836?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"judas-priest",title:"JUDAS PRIEST",subtitle:"SHIELD OF INDUSTRIAL MUSIC",tags:["EXPERIENCE","WEBSITE","SOCIAL"],year:"2018",image:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"google-voice",title:"Google",subtitle:"VOICE ASSISTANT IMMERSION",tags:["EXPERIENCE","AI","VOICE"],year:"2025",image:"https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"netflix-games",title:"NETFLIX",subtitle:"ARCADE RETRO PARLOR",tags:["EXPERIENCE","3D","CONTENT"],year:"2023",image:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"diageo-whisky",title:"DIAGEO",subtitle:"SINGLE MALT JOURNEY",tags:["PRODUCT","WEBSITE","MOTION"],year:"2024",image:"https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"audi-rse",title:"AUDI",subtitle:"DRIVING EMOTION AR",tags:["3D","EXPERIENCE","GAME"],year:"2025",image:"https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"sony-playstation",title:"SONY",subtitle:"PLAYSTATION 30TH ANNIVERSARY",tags:["WEBSITE","CAMPAIGN","SOCIAL"],year:"2024",image:"https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"balenciaga-cyber",title:"BALENCIAGA",subtitle:"CYBERPUNK METAVERSE RETAIL",tags:["EXPERIENCE","PHYSICAL","AI"],year:"2026",image:"https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"redbull-stratos",title:"RED BULL",subtitle:"STRATOS INTERACTIVE MUSEUM",tags:["EXPERIENCE","MOTION","WEBSITE"],year:"2023",image:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"lego-build",title:"LEGO",subtitle:"CREATIVE BRICK BUILDER 3D",tags:["PRODUCT","WEBSITE","3D"],year:"2025",image:"https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"spotify-dj",title:"Spotify",subtitle:"AI DJ IMMERSIVE LAUNCH",tags:["AI","CAMPAIGN","EXPERIENCE"],year:"2025",image:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"prada-mode",title:"PRADA",subtitle:"PRADA MODE ARCHIVE",tags:["EXPERIENCE","PHYSICAL","EVENT"],year:"2024",image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"tesla-optimus",title:"TESLA",subtitle:"OPTIMUS INTERFACE SUITE",tags:["PRODUCT","AI","WEBSITE"],year:"2026",image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"gucci-vault",title:"GUCCI",subtitle:"GUCCI VAULT METAVERSE",tags:["EXPERIENCE","3D","WEBSITE"],year:"2024",image:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"louis-vuitton-voyage",title:"LOUIS VUITTON",subtitle:"TRAVEL TRUNK EXPLORER",tags:["EXPERIENCE","MOTION","PRODUCT"],year:"2025",image:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"ikea-place",title:"IKEA",subtitle:"PLACE AR SPATIAL RETAIL",tags:["PRODUCT","WEBSITE","3D"],year:"2024",image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"space-x-starship",title:"SPACEX",subtitle:"STARSHIP FLIGHT SIMULATOR",tags:["EXPERIENCE","3D","PLATFORM"],year:"2026",image:"https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"hermes-dreams",title:"HERMÈS",subtitle:"KINETIC SCARF WINDOW",tags:["EXPERIENCE","PHYSICAL","MOTION"],year:"2025",image:"https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"ibm-quantum",title:"IBM",subtitle:"IBM QUANTUM COMPOSER",tags:["PLATFORM","WEBSITE","AI"],year:"2025",image:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"samsung-flip",title:"SAMSUNG",subtitle:"GALAXY FLEX EXPERIENCE",tags:["PRODUCT","WEBSITE","MOTION"],year:"2025",image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"porsche-taycan",title:"PORSCHE",subtitle:"TAYCAN ELECTRIC PULSE",tags:["EXPERIENCE","3D","CAMPAIGN"],year:"2024",image:"https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"netflix-onepiece",title:"NETFLIX",subtitle:"ONE PIECE AR CRUISE",tags:["WEBSITE","SOCIAL","3D"],year:"2023",image:"https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"rtfkt-nike",title:"RTFKT",subtitle:"CLONEX CRYPTOKICKS",tags:["3D","PRODUCT","AI"],year:"2024",image:"https://images.unsplash.com/photo-1608248597481-496100c8c836?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"dior-ball",title:"DIOR",subtitle:"CHRISTIAN DIOR BALLROOM",tags:["EXPERIENCE","PHYSICAL","EVENT"],year:"2025",image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}},{id:"netflix-wednesday",title:"NETFLIX",subtitle:"WEDNESDAY SHADOW RUN",tags:["GAME","WEBSITE","CONTENT"],year:"2023",image:"https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800&auto=format&fit=crop",theme:{bg:"#0d0d0d",text:"#FB4616",border:"rgba(255, 255, 255, 0.15)"}}]])},26253,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(88223);let a=["CHANEL","Nespresso","Hermès","Tissot"];function o(){return(0,t.jsxs)("div",{className:"mt-16 flex w-full flex-col items-center md:mt-20",children:[(0,t.jsx)("p",{className:"font-mono text-[10px] tracking-[0.18em] text-ink-400 uppercase md:text-[11px]",children:"Trusted by teams behind projects for"}),(0,t.jsx)("ul",{className:"mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:mt-8 md:gap-x-14",children:a.map(e=>(0,t.jsx)("li",{className:"font-display text-[15px] tracking-[0.12em] text-ink-200 uppercase md:text-[17px]",children:e},e))})]})}var n=e.i(60630);e.i(34606);var s=e.i(89970),l=e.i(75324),u=e.i(65747),c=e.i(30056);e.s(["HeroHeadline",0,function({eyebrow:e,headline:a,body:d}){let m=(0,r.useRef)(null),f=(0,r.useRef)(null),h=(0,r.useRef)(null),p=(0,r.useRef)(null),g=(0,r.useRef)(null),v=(0,n.useReducedMotion)(),{registerOnComplete:E,isLoading:x}=(0,c.useLoader)();return(0,u.useGSAP)(()=>{let e=f.current,t=h.current,r=p.current,a=g.current;if(!e||!t||!r||!a)return;if(v)return void s.gsap.set([e,t,r,a],{opacity:1});let o=null,n=!1,u=!1,c=!1,d=null;s.gsap.set(e,{opacity:0,letterSpacing:"0.4em"}),s.gsap.set([r,a],{opacity:0,y:16});let m=()=>{if(c||n||!o){u=!0;return}n=!0,(d=s.gsap.timeline()).to(e,{opacity:1,letterSpacing:"0.14em",duration:.5,ease:"vanguard.out"}),d.to(o.lines,{yPercent:0,duration:1.1,stagger:i.HEADLINE_STAGGER,ease:"vanguard.expo"},"-=0.2"),d.to(r,{opacity:1,y:0,duration:.7,ease:"vanguard.out"},"-=0.45"),d.to(a,{opacity:1,y:0,duration:.7,ease:"vanguard.out"},"-=0.45")},b=()=>{o?.revert(),o=l.SplitText.create(t,{type:"lines",mask:"lines",linesClass:"hero-line"}),s.gsap.set(t,{opacity:1}),s.gsap.set(o.lines,{yPercent:110*!n})};document.fonts.ready.then(()=>{!c&&(b(),u&&m())});let T=x?E(m):null;x||(u=!0);let R=0,y=()=>{window.clearTimeout(R),R=window.setTimeout(()=>{!c&&o&&b()},200)};return window.addEventListener("resize",y),()=>{c=!0,window.clearTimeout(R),window.removeEventListener("resize",y),T?.(),d?.kill(),o?.revert()}},{scope:m,dependencies:[v,x]}),(0,t.jsxs)("div",{ref:m,className:"relative z-10 flex w-full flex-col items-center px-gutter text-center",children:[(0,t.jsx)("p",{ref:f,className:"mb-6 whitespace-nowrap font-mono text-[11px] tracking-[0.16em] text-ink-200 opacity-0 md:mb-8 md:text-[12px]",children:e}),(0,t.jsx)("h1",{ref:h,className:"hero-headline font-display w-full max-w-[14ch] text-display font-semibold leading-[1.05] tracking-[-0.03em] text-paper opacity-0",children:a}),(0,t.jsx)("p",{ref:p,className:"mt-8 max-w-[34ch] text-body-lg text-ink-200 opacity-0 md:mt-10",children:d}),(0,t.jsx)("div",{ref:g,className:"w-full opacity-0",children:(0,t.jsx)(o,{})})]})}],26253)},69349,e=>{"use strict";var t=e.i(43476),r=e.i(18566),i=e.i(71645),a=e.i(92250),o=e.i(60630);e.i(34606);var n=e.i(89970);let s=a.projects.slice(0,10).map(e=>e.image);function l({active:e}){let r=(0,i.useRef)(null),a=(0,o.useReducedMotion)();return((0,i.useEffect)(()=>{let t=r.current;if(!t||a||!e)return;let i=Array.from(t.querySelectorAll("[data-trail-card]"));if(0===i.length)return;n.gsap.set(i,{xPercent:-50,yPercent:-50,scale:0,opacity:0,rotate:0});let o=0,s=0,l=0,u=!1,c=(e,r)=>{let a=t.getBoundingClientRect(),s=e-a.left,l=r-a.top,u=i[o%i.length];if(!u)return;o+=1;let c=(Math.random()-.5)*70,d=(Math.random()-.5)*70,m=(Math.random()-.5)*28;n.gsap.killTweensOf(u),n.gsap.set(u,{x:s+c,y:l+d,rotate:m,scale:.55,opacity:0,zIndex:o}),n.gsap.timeline().to(u,{scale:1,opacity:1,duration:.35,ease:"power3.out"}).to(u,{x:s+c+(Math.random()-.5)*24,y:l+d-18,duration:.7,ease:"power2.out"},0).to(u,{opacity:0,scale:.7,duration:.45,ease:"power2.in"},.55)},d=e=>{let{clientX:t,clientY:r}=e;if(!u){u=!0,s=t,l=r,c(t,r);return}let i=t-s,a=r-l;i*i+a*a<3136||(s=t,l=r,c(t,r))},m=()=>{u=!1,n.gsap.to(i,{opacity:0,scale:.6,duration:.3,ease:"power2.in",stagger:.02,overwrite:!0})},f=t.parentElement;return f?.addEventListener("pointermove",d),f?.addEventListener("pointerleave",m),()=>{f?.removeEventListener("pointermove",d),f?.removeEventListener("pointerleave",m),n.gsap.killTweensOf(i)}},[e,a]),a)?null:(0,t.jsx)("div",{ref:r,"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-30 overflow-hidden",children:s.map((e,r)=>(0,t.jsx)("div",{"data-trail-card":!0,className:"absolute top-0 left-0 h-[5.75rem] w-[5.75rem] overflow-hidden rounded-md bg-paper shadow-[0_10px_28px_rgba(10,10,10,0.16)] md:h-[6.75rem] md:w-[6.75rem]",children:(0,t.jsx)("img",{src:e,alt:"",className:"h-full w-full object-cover",draggable:!1})},`${e}-${r}`))})}var u=e.i(43820),c=e.i(85149);e.s(["ProjectsCTA",0,function(){let e=(0,r.useRouter)(),a=(0,u.useLenis)(),s=(0,o.useReducedMotion)(),d=(0,i.useRef)(null),m=(0,i.useRef)(null),[f,h]=(0,i.useState)(!1),[p,g]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{e.prefetch("/projects")},[e]),(0,i.useEffect)(()=>{let e=d.current;if(!e)return;let t=new IntersectionObserver(([e])=>g(!!e?.isIntersecting),{threshold:.35});return t.observe(e),()=>t.disconnect()},[]),(0,t.jsxs)("section",{ref:d,"data-projects-cta":!0,className:"relative z-10 -mt-[100dvh] flex h-dvh min-h-dvh flex-col items-center justify-center overflow-clip rounded-b-[2.5rem] px-gutter py-24 text-center text-ink md:rounded-b-[3.5rem]",style:{backgroundColor:"#F1F1F1"},children:[(0,t.jsxs)("div",{className:"relative z-10 flex flex-col items-center",children:[(0,t.jsx)("h2",{className:"font-display max-w-[16ch] text-[clamp(2.25rem,6vw,5rem)] font-normal leading-[1.05] tracking-[-0.035em]",children:"Wanna have a nice experience looking at our projects?"}),(0,t.jsxs)("a",{ref:m,href:"/projects",onClick:t=>{if(t.preventDefault(),f)return;h(!0);let r=()=>{try{sessionStorage.setItem(c.PROJECTS_TRANSITION_KEY,"1")}catch{}e.push("/projects")};if(s)return void r();let i=d.current;if(!i)return void r();a?.stop();let o=document.createElement("div");o.setAttribute("aria-hidden","true"),o.className="projects-cta-transition",o.innerHTML='<div class="projects-cta-transition__ink"></div>',document.body.appendChild(o);let l=o.querySelector(".projects-cta-transition__ink"),u=i.querySelector("h2"),p=m.current;n.gsap.set(o,{pointerEvents:"all"}),n.gsap.set(l,{opacity:0}),n.gsap.timeline({onComplete:()=>{r(),window.setTimeout(()=>o.remove(),200)}}).to([u,p].filter(Boolean),{opacity:0,duration:.25,ease:"power2.out"}).to(l,{opacity:1,duration:.3,ease:"power2.inOut"},.05)},"aria-disabled":f||void 0,className:"group relative z-20 mt-10 inline-flex items-center gap-3 font-display text-[clamp(1.25rem,2.5vw,1.75rem)] tracking-[-0.02em] text-ink transition-colors duration-300 hover:text-vermilion",children:[(0,t.jsx)("span",{className:"border-b border-ink/30 pb-0.5 transition-colors duration-300 group-hover:border-vermilion",children:"Press here"}),(0,t.jsx)("span",{"aria-hidden":"true",className:"translate-y-px transition-transform duration-300 group-hover:translate-x-1",children:"→"})]})]}),(0,t.jsx)(l,{active:p&&!f})]})}],69349)},43336,e=>{"use strict";var t=e.i(43476),r=e.i(71645);function i(){return(0,t.jsx)("div",{"aria-hidden":"true",className:"relative aspect-[5/3.4] w-full overflow-hidden rounded-2xl bg-[#E8E8E8]",style:{backgroundImage:"radial-gradient(rgb(10 10 10 / 0.12) 1px, transparent 1px)",backgroundSize:"8px 8px"},children:(0,t.jsx)("div",{className:"absolute top-[10%] left-[6%] h-[80%] w-[62%]",children:Array.from({length:6}).map((e,r)=>(0,t.jsx)("div",{className:"absolute rounded-[4px] bg-vermilion",style:{width:"56%",aspectRatio:"1",top:`${8*r}%`,left:`${7*r}%`,opacity:.28+.1*r}},r))})})}let a=[{id:"01",title:"Brand Strategy",body:"Positioning, narrative, and identity architecture that gives your company a defensible point of view.",tags:["Research","Positioning","Naming"]},{id:"02",title:"Visual Identity",body:"Logo systems, typography, and motion built to scale across every surface your brand touches.",tags:["Logo","Type","Motion"]},{id:"03",title:"Product & Web",body:"Marketing sites and product interfaces engineered with craft, clarity, and conversion at the core.",tags:["Design","Build","Launch"]},{id:"04",title:"Go-to-Market",body:"Launch strategy, messaging frameworks, and campaigns that compound attention into revenue.",tags:["GTM","Campaigns","Content"]}];var o=e.i(60630);e.i(34606);var n=e.i(89970),s=e.i(65747);let l=["#ffffff","#e6e6e6","#dbdbdb","#d0d0d0"];e.s(["StackCards",0,function(){let e=(0,r.useRef)(null),u=(0,r.useRef)(null),c=(0,r.useRef)(null),d=(0,o.useReducedMotion)();(0,s.useGSAP)(()=>{let t=e.current,r=u.current,i=c.current;if(!t||!r||!i)return;let a=n.gsap.utils.toArray(i.querySelectorAll("[data-stack-card]"));if(0===a.length)return;if(d){n.gsap.set(a,{clearProps:"transform",position:"relative",inset:"auto"}),n.gsap.set(r,{height:"auto",display:"flex",flexDirection:"column",gap:"1.5rem"});return}n.gsap.set(r,{perspective:1100,perspectiveOrigin:"50% 90%"}),n.gsap.set(i,{transformStyle:"preserve-3d"});let o=()=>1.05*window.innerHeight,s=document.querySelector("[data-partner-motion]"),m=document.querySelector("[data-partner]");n.gsap.set(a,{transformPerspective:1100,transformOrigin:"50% 0%",force3D:!0,y:o,rotateX:48,scaleX:2.75,scaleY:1.85,autoAlpha:1,backgroundColor:l[0]}),n.gsap.set(i,{y:0,force3D:!0}),s&&n.gsap.set(s,{y:0,force3D:!0});let f=n.gsap.timeline({scrollTrigger:{trigger:t,start:"top top",end:()=>`+=${(1.45*a.length+1)*window.innerHeight*1.15}`,pin:!0,scrub:1.1,anticipatePin:1,invalidateOnRefresh:!0}});a.forEach((e,t)=>{let r=1.45*t;f.fromTo(e,{y:o,rotateX:48,scaleX:2.75,scaleY:1.85,backgroundColor:l[0]},{y:0,rotateX:0,scaleX:1,scaleY:1,scale:1,backgroundColor:l[0],duration:1,ease:"none",force3D:!0},r);for(let e=0;e<t;e++){let i=a[e];if(!i)continue;let o=t-e;f.to(i,{y:-18*o,scale:1-.055*o,backgroundColor:l[Math.min(o,l.length-1)],duration:1,ease:"none",force3D:!0},r)}f.to({},{duration:.45},r+1)});let h=1.45*a.length,p=()=>-(1.2*window.innerHeight);f.to(i,{y:p,duration:1,ease:"none",force3D:!0},h),s&&f.to(s,{y:p,duration:1,ease:"none",force3D:!0},h),m&&f.to(m,{autoAlpha:0,duration:.85,ease:"none"},h)},{scope:e,dependencies:[d]});let m=(a.length-1)*18;return(0,t.jsx)("section",{ref:e,"data-stack-cards":!0,className:"relative z-10",children:(0,t.jsx)("div",{ref:u,className:"relative flex h-dvh items-center justify-center overflow-x-hidden overflow-y-visible px-gutter",children:(0,t.jsx)("div",{ref:c,"data-stack-deck":!0,className:"relative w-full max-w-[min(86vw,340px)] will-change-transform",style:{height:"min(58dvh, 460px)",paddingTop:m+8},children:a.map((e,r)=>(0,t.jsxs)("article",{"data-stack-card":!0,className:"absolute inset-x-0 bottom-0 flex flex-col overflow-hidden rounded-[1.5rem] bg-paper p-4 md:p-5",style:{top:m,zIndex:r+1,transformStyle:"preserve-3d",backfaceVisibility:"hidden",boxShadow:"0 18px 40px rgb(10 10 10 / 0.08)"},children:[(0,t.jsx)(i,{}),(0,t.jsxs)("div",{className:"flex flex-1 flex-col pt-4",children:[(0,t.jsxs)("div",{className:"mb-3 flex items-center justify-between",children:[(0,t.jsx)("span",{className:"font-mono text-[12px] tracking-[0.22em] text-ink-600",children:e.id.split("").join(" ")}),(0,t.jsx)("span",{"aria-hidden":"true",className:"text-ink-600",children:(0,t.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:(0,t.jsx)("path",{d:"M7 17L17 7M9 7h8v8"})})})]}),(0,t.jsx)("h3",{className:"font-display text-[1.35rem] font-semibold tracking-[-0.025em] text-ink md:text-[1.5rem]",children:e.title}),(0,t.jsx)("p",{className:"mt-2 text-[0.85rem] leading-relaxed text-ink-600",children:e.body}),(0,t.jsx)("ul",{className:"mt-auto flex flex-wrap gap-1.5 pt-4",children:e.tags.map(e=>(0,t.jsx)("li",{className:"rounded-md border border-ink/20 px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-ink-600 uppercase",children:e},e))})]})]},e.id))})})})}],43336)}]);