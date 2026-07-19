(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51852,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(60630);let n="⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⠁⠂⠄⠈⠐⠠⡀⢀⠃⠅⠘⠨⠊⠋⠌⠍⠎⠏⠑⠒⠓⠔⠕⠖⠗⠙⠚⠛⠜⠝⠞⠟⠡⠢⠣⠤⠥⠦⠧⠩⠪⠫⠬⠭⠮⠯⠱⠲⠳⠴⠵⠶⠷⠹⠺⠻⠼⠽⠾⠿⡁⡂⡃⡄⡅⡆⡇⡉⡊⡋⡌⡍⡎⡏⡑⡒⡓⡔⡕⡖⡗⡙⡚⡛⡜⡝⡞⡟⡡⡢⡣⡤⡥⡦⡧⡩⡪⡫⡬⡭⡮⡯⡱⡲⡳⡴⡵⡶⡷⡹⡺⡻⡼⡽⡾⡿⢁⢂⢃⢄⢅⢆⢇⢉⢊⢋⢌⢍⢎⢏⢑⢒⢓⢔⢕⢖⢗⢙⢚⢛⢜⢝⢞⢟⢡⢢⢣⢤⢥⢦ស់⢩⢪⢫⢬⢭⢮⢯⢱⢲⢳⢴⢵⢶⢷⢹⢺⢻⢼⢽⢾⢿⣀⣁⣂⣃⣄⣅⣆⣇⣉⣊⣋⣌⣍⣎⣏⣑⣒⣓⣔⣕⣖⣗⣙⣚⣛⣜⣝⣞⣟⣡⣢⣣⣤⣥⣦⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿",o=({backgroundColor:e="#0A0A0A",textColor:o="70, 70, 70",gridSize:a=72,removeWaveLine:u=!0,animationSpeed:l=.75})=>{let c=(0,r.useRef)(null),s=(0,r.useRef)(null),v=(0,r.useRef)(null),f=(0,r.useRef)({x:-9999,y:-9999,isDown:!1}),m=(0,r.useRef)([]),d=(0,r.useRef)(0),h=(0,r.useRef)(null),x=(0,r.useRef)([]),g=(0,r.useRef)({width:0,height:0}),E=(0,i.useReducedMotion)(),T=(0,r.useCallback)(()=>{let e=c.current,t=s.current;if(!e||!t)return;let{width:r,height:i}=t.getBoundingClientRect();g.current={width:r,height:i};let n=Math.min(window.devicePixelRatio||1,1.5);e.width=Math.round(r*n),e.height=Math.round(i*n),e.style.width=`${r}px`,e.style.height=`${i}px`;let o=e.getContext("2d");o&&(o.setTransform(n,0,0,n,0,0),v.current=o)},[]),R=(0,r.useCallback)(e=>{let t=c.current;if(!t)return;let r=t.getBoundingClientRect();f.current={x:e.clientX-r.left,y:e.clientY-r.top,isDown:f.current.isDown}},[]),p=(0,r.useCallback)(e=>{f.current.isDown=!0;let t=c.current;if(!t)return;let r=t.getBoundingClientRect(),i=e.clientX-r.left,n=e.clientY-r.top,{width:o,height:u}=g.current;if(0===o||0===u)return;x.current.push({x:i/(o/a),y:n/(u/a),time:Date.now(),intensity:2});let l=Date.now();x.current=x.current.filter(e=>l-e.time<4e3)},[a]),w=(0,r.useCallback)(()=>{f.current.isDown=!1},[]),y=(0,r.useCallback)(()=>{let t=c.current,r=v.current;if(!t||!r)return;let i=Date.now();d.current+=.016*l;let{width:s,height:h}=g.current;if(0===s||0===h)return;let E=(e,t)=>{let r=0;for(let n of x.current){let o=i-n.time;if(o>=4e3)continue;let u=e-n.x,l=t-n.y,c=Math.sqrt(u*u+l*l),s=o/4e3*a*.8,v=.15*a;Math.abs(c-s)<v&&(r+=(1-o/4e3)*n.intensity*(1-Math.abs(c-s)/v)*Math.sin((c-s)*.5))}return r};r.fillStyle=e,r.fillRect(0,0,s,h);let T=Array.from({length:a},()=>Array.from({length:a},()=>null)),R=s/a,p=h/a,w=f.current.x/R,y=f.current.y/p,S=f.current.x>-9e3?{x:w,y:y,frequency:.3,amplitude:1,phase:2*d.current,speed:1}:null;for(let e=0;e<a;e++){let t=T[e];if(t)for(let r=0;r<a;r++){let i=0;for(let t of m.current){let n=r-t.x,o=e-t.y,a=Math.sqrt(n*n+o*o),u=1/(1+.1*a);i+=Math.sin(a*t.frequency-d.current*t.speed+t.phase)*t.amplitude*u}if(S){let t=r-S.x,n=e-S.y,o=Math.sqrt(t*t+n*n),u=1/(1+.1*o);i+=Math.sin(o*S.frequency-d.current*S.speed+S.phase)*S.amplitude*u,o<.3*a&&(i+=(1-o/(.3*a))*.8*Math.sin(3*d.current))}let o=((i+=E(r,e))+2)/4;if(Math.abs(i)>.2){let e=Math.min(n.length-1,Math.max(0,Math.floor(o*(n.length-1))));t[r]={char:n[e]??"⣿",opacity:Math.min(.75,Math.max(.28,.28+.45*o))}}}}let D=.8*Math.min(R,p);r.font=`${D}px monospace`,r.textAlign="center",r.textBaseline="middle";for(let e=0;e<a;e++)for(let t=0;t<a;t++){let i=T[e]?.[t];i&&(r.fillStyle=`rgba(${o}, ${i.opacity})`,r.fillText(i.char,t*R+R/2,e*p+p/2))}if(!u)for(let e of x.current){let t=i-e.time;if(t>=4e3)continue;let n=t/4e3,a=n*Math.min(s,h)*.5,u=(1-n)*.3*e.intensity;r.beginPath(),r.strokeStyle=`rgba(${o}, ${u})`,r.lineWidth=1,r.arc(e.x*R,e.y*p,a,0,2*Math.PI),r.stroke()}},[e,o,a,l,u]);return(0,r.useEffect)(()=>{let e=[];for(let t=0;t<4;t++)e.push({x:a*(.25+.5*Math.random()),y:a*(.25+.5*Math.random()),frequency:.2+.3*Math.random(),amplitude:.5+.5*Math.random(),phase:Math.random()*Math.PI*2,speed:.5+.5*Math.random()});m.current=e;let t=c.current;if(!t)return;if(T(),E)return y(),window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T),m.current=[]};let r=!0,i="visible"===document.visibilityState,n=!1,o=()=>{y(),h.current=requestAnimationFrame(o)},u=()=>{let e=r&&i;e&&!n?(n=!0,h.current=requestAnimationFrame(o)):!e&&n&&(n=!1,h.current&&cancelAnimationFrame(h.current))},l=new IntersectionObserver(([e])=>{r=e?.isIntersecting??!1,u()});l.observe(t);let s=()=>{i="visible"===document.visibilityState,u()};return document.addEventListener("visibilitychange",s),window.addEventListener("resize",T),window.addEventListener("mousemove",R),window.addEventListener("mousedown",p),window.addEventListener("mouseup",w),u(),()=>{window.removeEventListener("resize",T),window.removeEventListener("mousemove",R),window.removeEventListener("mousedown",p),window.removeEventListener("mouseup",w),l.disconnect(),document.removeEventListener("visibilitychange",s),n=!1,h.current&&(cancelAnimationFrame(h.current),h.current=null),d.current=0,x.current=[],m.current=[],v.current=null}},[y,T,R,p,w,a,E]),(0,t.jsx)("div",{ref:s,"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-0 overflow-hidden",style:{backgroundColor:e},children:(0,t.jsx)("canvas",{ref:c,className:"block h-full w-full"})})};function a(){let e=(0,r.useRef)(null),n=(0,i.useReducedMotion)();return((0,r.useEffect)(()=>{let t;if(!e.current||n)return;let r=!1,i=window.setTimeout(()=>{if(!r&&e.current)try{t=(e=>{let t,r,i,n,o,a;j();let u={SIM_RESOLUTION:128,DYE_RESOLUTION:1440,DENSITY_DISSIPATION:3.5,VELOCITY_DISSIPATION:2,PRESSURE:.1,PRESSURE_ITERATIONS:20,CURL:3,SPLAT_RADIUS:.2,SPLAT_FORCE:6e3,SHADING:!0,COLOR_UPDATE_SPEED:10},l=[];l.push(new function(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]});let{gl:c,ext:s}=function(e){let t,r,i,n,o,a={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},u=e.getContext("webgl2",a),l=!!u;if(l||(u=e.getContext("webgl",a)||e.getContext("experimental-webgl",a)),!u)throw Error("WebGL context unavailable");l?(u.getExtension("EXT_color_buffer_float"),r=u.getExtension("OES_texture_float_linear")):(t=u.getExtension("OES_texture_half_float"),r=u.getExtension("OES_texture_half_float_linear")),u.clearColor(0,0,0,1);let c=l?u.HALF_FLOAT:t?.HALF_FLOAT_OES;if(null==c)throw Error("WebGL half-float textures unavailable");if(l?(i=v(u,u.RGBA16F,u.RGBA,c),n=v(u,u.RG16F,u.RG,c),o=v(u,u.R16F,u.RED,c)):(i=v(u,u.RGBA,u.RGBA,c),n=v(u,u.RGBA,u.RGBA,c),o=v(u,u.RGBA,u.RGBA,c)),!i||!n||!o)throw Error("WebGL render texture formats unavailable");return{gl:u,ext:{formatRGBA:i,formatRG:n,formatR:o,halfFloatTexType:c,supportLinearFiltering:r}}}(e);function v(e,t,r,i){var n,o,a,u;let l,c;if(n=e,o=t,a=r,u=i,l=n.createTexture(),n.bindTexture(n.TEXTURE_2D,l),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_2D,0,o,4,4,0,a,u,null),c=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,c),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,l,0),n.checkFramebufferStatus(n.FRAMEBUFFER)!=n.FRAMEBUFFER_COMPLETE)switch(t){case e.R16F:return v(e,e.RG16F,e.RG,i);case e.RG16F:return v(e,e.RGBA16F,e.RGBA,i);default:return null}return{internalFormat:t,format:r}}s.supportLinearFiltering||(u.DYE_RESOLUTION=256,u.SHADING=!1);class f{constructor(e,t){this.uniforms={},this.program=m(e,t),this.uniforms=d(this.program)}bind(){c.useProgram(this.program)}}function m(e,t){let r=c.createProgram();return c.attachShader(r,e),c.attachShader(r,t),c.linkProgram(r),c.getProgramParameter(r,c.LINK_STATUS)||console.trace(c.getProgramInfoLog(r)),r}function d(e){let t=[],r=c.getProgramParameter(e,c.ACTIVE_UNIFORMS);for(let i=0;i<r;i++){let r=c.getActiveUniform(e,i).name;t[r]=c.getUniformLocation(e,r)}return t}function h(e,t,r){t=function(e,t){if(null==t)return e;let r="";return t.forEach(e=>{r+="#define "+e+"\n"}),r+e}(t,r);let i=c.createShader(e);return c.shaderSource(i,t),c.compileShader(i),c.getShaderParameter(i,c.COMPILE_STATUS)||console.trace(c.getShaderInfoLog(i)),i}let x=h(c.VERTEX_SHADER,`
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
   `),g=h(c.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       uniform sampler2D uTexture;
   
       void main () {
           gl_FragColor = texture2D(uTexture, vUv);
       }
   `),E=h(c.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       uniform sampler2D uTexture;
       uniform float value;
   
       void main () {
           gl_FragColor = value * texture2D(uTexture, vUv);
       }
   `),T=`
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
   `,R=h(c.FRAGMENT_SHADER,`
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
   `),p=h(c.FRAGMENT_SHADER,`
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
       }`,s.supportLinearFiltering?null:["MANUAL_FILTERING"]),w=h(c.FRAGMENT_SHADER,`
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
   `),y=h(c.FRAGMENT_SHADER,`
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
   `),S=h(c.FRAGMENT_SHADER,`
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
   `),D=h(c.FRAGMENT_SHADER,`
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
   `),A=h(c.FRAGMENT_SHADER,`
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
   `),_=(c.bindBuffer(c.ARRAY_BUFFER,c.createBuffer()),c.bufferData(c.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),c.STATIC_DRAW),c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,c.createBuffer()),c.bufferData(c.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),c.STATIC_DRAW),c.vertexAttribPointer(0,2,c.FLOAT,!1,0,0),c.enableVertexAttribArray(0),(e,t=!1)=>{null==e?(c.viewport(0,0,c.drawingBufferWidth,c.drawingBufferHeight),c.bindFramebuffer(c.FRAMEBUFFER,null)):(c.viewport(0,0,e.width,e.height),c.bindFramebuffer(c.FRAMEBUFFER,e.fbo)),t&&(c.clearColor(0,0,0,1),c.clear(c.COLOR_BUFFER_BIT)),c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0)}),b=new f(x,g),L=new f(x,E),F=new f(x,R),U=new f(x,p),M=new f(x,w),B=new f(x,y),P=new f(x,S),C=new f(x,D),I=new f(x,A),X=new class{constructor(e,t){this.vertexShader=e,this.fragmentShaderSource=t,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(e){let t=0;for(let r=0;r<e.length;r++)t+=function(e){if(0==e.length)return 0;let t=0;for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r)|0;return t}(e[r]);let r=this.programs[t];if(null==r){let i=h(c.FRAGMENT_SHADER,this.fragmentShaderSource,e);r=m(this.vertexShader,i),this.programs[t]=r}r!=this.activeProgram&&(this.uniforms=d(r),this.activeProgram=r)}bind(){c.useProgram(this.activeProgram)}}(x,T);function N(){let e=eu(u.SIM_RESOLUTION),a=eu(u.DYE_RESOLUTION),l=s.halfFloatTexType,v=s.formatRGBA,f=s.formatRG,m=s.formatR,d=s.supportLinearFiltering?c.LINEAR:c.NEAREST;c.disable(c.BLEND),t=null==t?O(a.width,a.height,v.internalFormat,v.format,l,d):G(t,a.width,a.height,v.internalFormat,v.format,l,d),r=null==r?O(e.width,e.height,f.internalFormat,f.format,l,d):G(r,e.width,e.height,f.internalFormat,f.format,l,d),i=z(e.width,e.height,m.internalFormat,m.format,l,c.NEAREST),n=z(e.width,e.height,m.internalFormat,m.format,l,c.NEAREST),o=O(e.width,e.height,m.internalFormat,m.format,l,c.NEAREST)}function z(e,t,r,i,n,o){c.activeTexture(c.TEXTURE0);let a=c.createTexture();c.bindTexture(c.TEXTURE_2D,a),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,o),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,o),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE),c.texImage2D(c.TEXTURE_2D,0,r,e,t,0,i,n,null);let u=c.createFramebuffer();c.bindFramebuffer(c.FRAMEBUFFER,u),c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,a,0),c.viewport(0,0,e,t),c.clear(c.COLOR_BUFFER_BIT);let l=1/e,s=1/t;return{texture:a,fbo:u,width:e,height:t,texelSizeX:l,texelSizeY:s,attach:e=>(c.activeTexture(c.TEXTURE0+e),c.bindTexture(c.TEXTURE_2D,a),e)}}function O(e,t,r,i,n,o){let a=z(e,t,r,i,n,o),u=z(e,t,r,i,n,o);return{width:e,height:t,texelSizeX:a.texelSizeX,texelSizeY:a.texelSizeY,get read(){return a},set read(value){a=value},get write(){return u},set write(value){u=value},swap(){let e=a;a=u,u=e}}}function G(e,t,r,i,n,o,a){var u;let l;return e.width==t&&e.height==r?e:(u=e.read,l=z(t,r,i,n,o,a),b.bind(),c.uniform1i(b.uniforms.uTexture,u.attach(0)),_(l),e.read=l,e.write=z(t,r,i,n,o,a),e.width=t,e.height=r,e.texelSizeX=1/t,e.texelSizeY=1/r,e)}a=[],u.SHADING&&a.push("SHADING"),X.setKeywords(a),N();let Y=Date.now(),H=0,V=!1,k=!1,W=0;function q(){k||V||(k=!0,function e(){var a,v,f;let m,d,h,x,g;if(V)return;let E=(d=((m=Date.now())-Y)/1e3,d=Math.min(d,.016666),Y=m,d);j()&&N(),a=E,(H+=a*u.COLOR_UPDATE_SPEED)>=1&&(v=H,h=1,H=0==h?0:(v-0)%h+0,l.forEach(e=>{e.color=ea()})),l.forEach(e=>{var t;let r,i;e.moved&&(e.moved=!1,r=(t=e).deltaX*u.SPLAT_FORCE,i=t.deltaY*u.SPLAT_FORCE,$(t.texcoordX,t.texcoordY,r,i,t.color))}),function(e){c.disable(c.BLEND),B.bind(),c.uniform2f(B.uniforms.texelSize,r.texelSizeX,r.texelSizeY),c.uniform1i(B.uniforms.uVelocity,r.read.attach(0)),_(n),P.bind(),c.uniform2f(P.uniforms.texelSize,r.texelSizeX,r.texelSizeY),c.uniform1i(P.uniforms.uVelocity,r.read.attach(0)),c.uniform1i(P.uniforms.uCurl,n.attach(1)),c.uniform1f(P.uniforms.curl,u.CURL),c.uniform1f(P.uniforms.dt,e),_(r.write),r.swap(),M.bind(),c.uniform2f(M.uniforms.texelSize,r.texelSizeX,r.texelSizeY),c.uniform1i(M.uniforms.uVelocity,r.read.attach(0)),_(i),L.bind(),c.uniform1i(L.uniforms.uTexture,o.read.attach(0)),c.uniform1f(L.uniforms.value,u.PRESSURE),_(o.write),o.swap(),C.bind(),c.uniform2f(C.uniforms.texelSize,r.texelSizeX,r.texelSizeY),c.uniform1i(C.uniforms.uDivergence,i.attach(0));for(let e=0;e<u.PRESSURE_ITERATIONS;e++)c.uniform1i(C.uniforms.uPressure,o.read.attach(1)),_(o.write),o.swap();I.bind(),c.uniform2f(I.uniforms.texelSize,r.texelSizeX,r.texelSizeY),c.uniform1i(I.uniforms.uPressure,o.read.attach(0)),c.uniform1i(I.uniforms.uVelocity,r.read.attach(1)),_(r.write),r.swap(),U.bind(),c.uniform2f(U.uniforms.texelSize,r.texelSizeX,r.texelSizeY),s.supportLinearFiltering||c.uniform2f(U.uniforms.dyeTexelSize,r.texelSizeX,r.texelSizeY);let a=r.read.attach(0);c.uniform1i(U.uniforms.uVelocity,a),c.uniform1i(U.uniforms.uSource,a),c.uniform1f(U.uniforms.dt,e),c.uniform1f(U.uniforms.dissipation,u.VELOCITY_DISSIPATION),_(r.write),r.swap(),s.supportLinearFiltering||c.uniform2f(U.uniforms.dyeTexelSize,t.texelSizeX,t.texelSizeY),c.uniform1i(U.uniforms.uVelocity,r.read.attach(0)),c.uniform1i(U.uniforms.uSource,t.read.attach(1)),c.uniform1f(U.uniforms.dissipation,u.DENSITY_DISSIPATION),_(t.write),t.swap()}(E),c.blendFunc(c.ONE,c.ONE_MINUS_SRC_ALPHA),c.enable(c.BLEND),f=null,x=null==f?c.drawingBufferWidth:f.width,g=null==f?c.drawingBufferHeight:f.height,X.bind(),u.SHADING&&c.uniform2f(X.uniforms.texelSize,1/x,1/g),c.uniform1i(X.uniforms.uTexture,t.read.attach(0)),_(f),W=requestAnimationFrame(e)}())}function j(){let t=el(e.clientWidth),r=el(e.clientHeight);return(e.width!=t||e.height!=r)&&(e.width=t,e.height=r,!0)}function $(i,n,o,a,l){var s;let v;F.bind(),c.uniform1i(F.uniforms.uTarget,r.read.attach(0)),c.uniform1f(F.uniforms.aspectRatio,e.width/e.height),c.uniform2f(F.uniforms.point,i,n),c.uniform3f(F.uniforms.color,o,a,0),c.uniform1f(F.uniforms.radius,(s=u.SPLAT_RADIUS/100,(v=e.width/e.height)>1&&(s*=v),s)),_(r.write),r.swap(),c.uniform1i(F.uniforms.uTarget,t.read.attach(0)),c.uniform3f(F.uniforms.color,l.r,l.g,l.b),_(t.write),t.swap()}function K(t,r){let i=e.getBoundingClientRect();return{x:el(t-i.left),y:el(r-i.top)}}let J=e=>{let t,r,i,n=l[0],o=K(e.clientX,e.clientY);en(n,-1,o.x,o.y),t=ea(),t.r*=10,t.g*=10,t.b*=10,r=10*(Math.random()-.5),i=30*(Math.random()-.5),$(n.texcoordX,n.texcoordY,r,i,t)},Q=e=>{let t=l[0],r=K(e.clientX,e.clientY),i=ea();q(),eo(t,r.x,r.y,i),document.body.removeEventListener("mousemove",Q)},Z=e=>{let t=l[0],r=K(e.clientX,e.clientY),i=t.color;eo(t,r.x,r.y,i)},ee=e=>{let t=e.targetTouches,r=l[0];for(let e=0;e<t.length;e++){let i=K(t[e].clientX,t[e].clientY);q(),en(r,t[e].identifier,i.x,i.y)}document.body.removeEventListener("touchstart",ee)},et=e=>{let t=e.targetTouches,r=l[0];for(let e=0;e<t.length;e++){let i=K(t[e].clientX,t[e].clientY);en(r,t[e].identifier,i.x,i.y)}},er=e=>{let t=e.targetTouches,r=l[0];for(let e=0;e<t.length;e++){let i=K(t[e].clientX,t[e].clientY);eo(r,i.x,i.y,r.color)}},ei=e=>{let t=e.changedTouches,r=l[0];for(let e=0;e<t.length;e++)r.down=!1};function en(t,r,i,n){t.id=r,t.down=!0,t.moved=!1,t.texcoordX=i/e.width,t.texcoordY=1-n/e.height,t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.deltaX=0,t.deltaY=0,t.color=ea()}function eo(t,r,i,n){var o,a;let u,l;t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.texcoordX=r/e.width,t.texcoordY=1-i/e.height,o=t.texcoordX-t.prevTexcoordX,(u=e.width/e.height)<1&&(o*=u),t.deltaX=o,a=t.texcoordY-t.prevTexcoordY,(l=e.width/e.height)>1&&(a/=l),t.deltaY=a,t.moved=Math.abs(t.deltaX)>0||Math.abs(t.deltaY)>0,t.color=n}function ea(){let e=function(e,t){let r,i,n,o,a,u,l,c;switch(o=Math.floor(6*e),a=6*e-o,u=+(1-t),l=+(1-a*t),c=+(1-(1-a)*t),o%6){case 0:r=1,i=c,n=u;break;case 1:r=l,i=1,n=u;break;case 2:r=u,i=1,n=c;break;case 3:r=u,i=l,n=1;break;case 4:r=c,i=u,n=1;break;case 5:r=1,i=u,n=l}return{r,g:i,b:n}}(.022+.045*Math.random(),.85+.15*Math.random());return e.r*=.3,e.g*=.3,e.b*=.3,e}function eu(e){let t=c.drawingBufferWidth/c.drawingBufferHeight;t<1&&(t=1/t);let r=Math.round(e),i=Math.round(e*t);return c.drawingBufferWidth>c.drawingBufferHeight?{width:i,height:r}:{width:r,height:i}}function el(e){return Math.floor(e*(window.devicePixelRatio||1))}return window.addEventListener("mousedown",J),document.body.addEventListener("mousemove",Q),window.addEventListener("mousemove",Z),document.body.addEventListener("touchstart",ee),window.addEventListener("touchstart",et),window.addEventListener("touchmove",er,!1),window.addEventListener("touchend",ei),()=>{V=!0,cancelAnimationFrame(W),window.removeEventListener("mousedown",J),document.body.removeEventListener("mousemove",Q),window.removeEventListener("mousemove",Z),document.body.removeEventListener("touchstart",ee),window.removeEventListener("touchstart",et),window.removeEventListener("touchmove",er),window.removeEventListener("touchend",ei),c.getExtension("WEBGL_lose_context")?.loseContext()}})(e.current)}catch(e){console.warn("[HeroFluidCursor] skipped —",e)}},50);return()=>{r=!0,window.clearTimeout(i),t?.()}},[n]),n)?null:(0,t.jsx)("canvas",{ref:e,"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-20 h-full w-full"})}e.s(["HeroAtmosphere",0,function({fluid:e=!1,deferUntilVisible:i=!1}){let n=(0,r.useRef)(null),[u,l]=(0,r.useState)(!i);return(0,r.useEffect)(()=>{if(!i||u)return;let e=n.current;if(!e)return;let t=new IntersectionObserver(([e])=>{e?.isIntersecting&&(l(!0),t.disconnect())},{rootMargin:"200px 0px"});return t.observe(e),()=>t.disconnect()},[i,u]),(0,t.jsx)("div",{ref:n,className:"absolute inset-0",children:u?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{}),e?(0,t.jsx)(a,{}):null]}):null})}],51852)}]);