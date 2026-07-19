module.exports=[93300,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(5502);let e="⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⠁⠂⠄⠈⠐⠠⡀⢀⠃⠅⠘⠨⠊⠋⠌⠍⠎⠏⠑⠒⠓⠔⠕⠖⠗⠙⠚⠛⠜⠝⠞⠟⠡⠢⠣⠤⠥⠦⠧⠩⠪⠫⠬⠭⠮⠯⠱⠲⠳⠴⠵⠶⠷⠹⠺⠻⠼⠽⠾⠿⡁⡂⡃⡄⡅⡆⡇⡉⡊⡋⡌⡍⡎⡏⡑⡒⡓⡔⡕⡖⡗⡙⡚⡛⡜⡝⡞⡟⡡⡢⡣⡤⡥⡦⡧⡩⡪⡫⡬⡭⡮⡯⡱⡲⡳⡴⡵⡶⡷⡹⡺⡻⡼⡽⡾⡿⢁⢂⢃⢄⢅⢆⢇⢉⢊⢋⢌⢍⢎⢏⢑⢒⢓⢔⢕⢖⢗⢙⢚⢛⢜⢝⢞⢟⢡⢢⢣⢤⢥⢦ស់⢩⢪⢫⢬⢭⢮⢯⢱⢲⢳⢴⢵⢶⢷⢹⢺⢻⢼⢽⢾⢿⣀⣁⣂⣃⣄⣅⣆⣇⣉⣊⣋⣌⣍⣎⣏⣑⣒⣓⣔⣕⣖⣗⣙⣚⣛⣜⣝⣞⣟⣡⣢⣣⣤⣥⣦⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿",f=({backgroundColor:a="#0A0A0A",textColor:f="70, 70, 70",gridSize:g=72,removeWaveLine:h=!0,animationSpeed:i=.75})=>{let j=(0,c.useRef)(null),k=(0,c.useRef)(null),l=(0,c.useRef)(null),m=(0,c.useRef)({x:-9999,y:-9999,isDown:!1}),n=(0,c.useRef)([]),o=(0,c.useRef)(0),p=(0,c.useRef)(null),q=(0,c.useRef)([]),r=(0,c.useRef)({width:0,height:0}),s=(0,d.useReducedMotion)(),t=(0,c.useCallback)(()=>{let a=j.current,b=k.current;if(!a||!b)return;let{width:c,height:d}=b.getBoundingClientRect();r.current={width:c,height:d};let e=Math.min(window.devicePixelRatio||1,1.5);a.width=Math.round(c*e),a.height=Math.round(d*e),a.style.width=`${c}px`,a.style.height=`${d}px`;let f=a.getContext("2d");f&&(f.setTransform(e,0,0,e,0,0),l.current=f)},[]),u=(0,c.useCallback)(a=>{let b=j.current;if(!b)return;let c=b.getBoundingClientRect();m.current={x:a.clientX-c.left,y:a.clientY-c.top,isDown:m.current.isDown}},[]),v=(0,c.useCallback)(a=>{m.current.isDown=!0;let b=j.current;if(!b)return;let c=b.getBoundingClientRect(),d=a.clientX-c.left,e=a.clientY-c.top,{width:f,height:h}=r.current;if(0===f||0===h)return;q.current.push({x:d/(f/g),y:e/(h/g),time:Date.now(),intensity:2});let i=Date.now();q.current=q.current.filter(a=>i-a.time<4e3)},[g]),w=(0,c.useCallback)(()=>{m.current.isDown=!1},[]),x=(0,c.useCallback)(()=>{let b=j.current,c=l.current;if(!b||!c)return;let d=Date.now();o.current+=.016*i;let{width:k,height:p}=r.current;if(0===k||0===p)return;let s=(a,b)=>{let c=0;for(let e of q.current){let f=d-e.time;if(f>=4e3)continue;let h=a-e.x,i=b-e.y,j=Math.sqrt(h*h+i*i),k=f/4e3*g*.8,l=.15*g;Math.abs(j-k)<l&&(c+=(1-f/4e3)*e.intensity*(1-Math.abs(j-k)/l)*Math.sin((j-k)*.5))}return c};c.fillStyle=a,c.fillRect(0,0,k,p);let t=Array.from({length:g},()=>Array.from({length:g},()=>null)),u=k/g,v=p/g,w=m.current.x/u,x=m.current.y/v,y=m.current.x>-9e3?{x:w,y:x,frequency:.3,amplitude:1,phase:2*o.current,speed:1}:null;for(let a=0;a<g;a++){let b=t[a];if(b)for(let c=0;c<g;c++){let d=0;for(let b of n.current){let e=c-b.x,f=a-b.y,g=Math.sqrt(e*e+f*f),h=1/(1+.1*g);d+=Math.sin(g*b.frequency-o.current*b.speed+b.phase)*b.amplitude*h}if(y){let b=c-y.x,e=a-y.y,f=Math.sqrt(b*b+e*e),h=1/(1+.1*f);d+=Math.sin(f*y.frequency-o.current*y.speed+y.phase)*y.amplitude*h,f<.3*g&&(d+=(1-f/(.3*g))*.8*Math.sin(3*o.current))}let f=((d+=s(c,a))+2)/4;if(Math.abs(d)>.2){let a=Math.min(e.length-1,Math.max(0,Math.floor(f*(e.length-1))));b[c]={char:e[a]??"⣿",opacity:Math.min(.75,Math.max(.28,.28+.45*f))}}}}let z=.8*Math.min(u,v);c.font=`${z}px monospace`,c.textAlign="center",c.textBaseline="middle";for(let a=0;a<g;a++)for(let b=0;b<g;b++){let d=t[a]?.[b];d&&(c.fillStyle=`rgba(${f}, ${d.opacity})`,c.fillText(d.char,b*u+u/2,a*v+v/2))}if(!h)for(let a of q.current){let b=d-a.time;if(b>=4e3)continue;let e=b/4e3,g=e*Math.min(k,p)*.5,h=(1-e)*.3*a.intensity;c.beginPath(),c.strokeStyle=`rgba(${f}, ${h})`,c.lineWidth=1,c.arc(a.x*u,a.y*v,g,0,2*Math.PI),c.stroke()}},[a,f,g,i,h]);return(0,c.useEffect)(()=>{let a=[];for(let b=0;b<4;b++)a.push({x:g*(.25+.5*Math.random()),y:g*(.25+.5*Math.random()),frequency:.2+.3*Math.random(),amplitude:.5+.5*Math.random(),phase:Math.random()*Math.PI*2,speed:.5+.5*Math.random()});n.current=a;let b=j.current;if(!b)return;if(t(),s)return x(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t),n.current=[]};let c=!0,d="visible"===document.visibilityState,e=!1,f=()=>{x(),p.current=requestAnimationFrame(f)},h=()=>{let a=c&&d;a&&!e?(e=!0,p.current=requestAnimationFrame(f)):!a&&e&&(e=!1,p.current&&cancelAnimationFrame(p.current))},i=new IntersectionObserver(([a])=>{c=a?.isIntersecting??!1,h()});i.observe(b);let k=()=>{d="visible"===document.visibilityState,h()};return document.addEventListener("visibilitychange",k),window.addEventListener("resize",t),window.addEventListener("mousemove",u),window.addEventListener("mousedown",v),window.addEventListener("mouseup",w),h(),()=>{window.removeEventListener("resize",t),window.removeEventListener("mousemove",u),window.removeEventListener("mousedown",v),window.removeEventListener("mouseup",w),i.disconnect(),document.removeEventListener("visibilitychange",k),e=!1,p.current&&(cancelAnimationFrame(p.current),p.current=null),o.current=0,q.current=[],n.current=[],l.current=null}},[x,t,u,v,w,g,s]),(0,b.jsx)("div",{ref:k,"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-0 overflow-hidden",style:{backgroundColor:a},children:(0,b.jsx)("canvas",{ref:j,className:"block h-full w-full"})})};function g(){let a=(0,c.useRef)(null),e=(0,d.useReducedMotion)();return((0,c.useEffect)(()=>{let b;if(!a.current||e)return;let c=!1,d=window.setTimeout(()=>{if(!c&&a.current)try{b=(a=>{let b,c,d,e,f,g;W();let h={SIM_RESOLUTION:128,DYE_RESOLUTION:1440,DENSITY_DISSIPATION:3.5,VELOCITY_DISSIPATION:2,PRESSURE:.1,PRESSURE_ITERATIONS:20,CURL:3,SPLAT_RADIUS:.2,SPLAT_FORCE:6e3,SHADING:!0,COLOR_UPDATE_SPEED:10},i=[];i.push(new function(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]});let{gl:j,ext:k}=function(a){let b,c,d,e,f,g={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},h=a.getContext("webgl2",g),i=!!h;if(i||(h=a.getContext("webgl",g)||a.getContext("experimental-webgl",g)),!h)throw Error("WebGL context unavailable");i?(h.getExtension("EXT_color_buffer_float"),c=h.getExtension("OES_texture_float_linear")):(b=h.getExtension("OES_texture_half_float"),c=h.getExtension("OES_texture_half_float_linear")),h.clearColor(0,0,0,1);let j=i?h.HALF_FLOAT:b?.HALF_FLOAT_OES;if(null==j)throw Error("WebGL half-float textures unavailable");if(i?(d=l(h,h.RGBA16F,h.RGBA,j),e=l(h,h.RG16F,h.RG,j),f=l(h,h.R16F,h.RED,j)):(d=l(h,h.RGBA,h.RGBA,j),e=l(h,h.RGBA,h.RGBA,j),f=l(h,h.RGBA,h.RGBA,j)),!d||!e||!f)throw Error("WebGL render texture formats unavailable");return{gl:h,ext:{formatRGBA:d,formatRG:e,formatR:f,halfFloatTexType:j,supportLinearFiltering:c}}}(a);function l(a,b,c,d){var e,f,g,h;let i,j;if(e=a,f=b,g=c,h=d,i=e.createTexture(),e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,f,4,4,0,g,h,null),j=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,j),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!=e.FRAMEBUFFER_COMPLETE)switch(b){case a.R16F:return l(a,a.RG16F,a.RG,d);case a.RG16F:return l(a,a.RGBA16F,a.RGBA,d);default:return null}return{internalFormat:b,format:c}}k.supportLinearFiltering||(h.DYE_RESOLUTION=256,h.SHADING=!1);class m{constructor(a,b){this.uniforms={},this.program=n(a,b),this.uniforms=o(this.program)}bind(){j.useProgram(this.program)}}function n(a,b){let c=j.createProgram();return j.attachShader(c,a),j.attachShader(c,b),j.linkProgram(c),j.getProgramParameter(c,j.LINK_STATUS)||console.trace(j.getProgramInfoLog(c)),c}function o(a){let b=[],c=j.getProgramParameter(a,j.ACTIVE_UNIFORMS);for(let d=0;d<c;d++){let c=j.getActiveUniform(a,d).name;b[c]=j.getUniformLocation(a,c)}return b}function p(a,b,c){b=function(a,b){if(null==b)return a;let c="";return b.forEach(a=>{c+="#define "+a+"\n"}),c+a}(b,c);let d=j.createShader(a);return j.shaderSource(d,b),j.compileShader(d),j.getShaderParameter(d,j.COMPILE_STATUS)||console.trace(j.getShaderInfoLog(d)),d}let q=p(j.VERTEX_SHADER,`
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
   `),r=p(j.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       uniform sampler2D uTexture;
   
       void main () {
           gl_FragColor = texture2D(uTexture, vUv);
       }
   `),s=p(j.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       uniform sampler2D uTexture;
       uniform float value;
   
       void main () {
           gl_FragColor = value * texture2D(uTexture, vUv);
       }
   `),t=`
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
   `,u=p(j.FRAGMENT_SHADER,`
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
   `),v=p(j.FRAGMENT_SHADER,`
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
       }`,k.supportLinearFiltering?null:["MANUAL_FILTERING"]),w=p(j.FRAGMENT_SHADER,`
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
   `),x=p(j.FRAGMENT_SHADER,`
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
   `),y=p(j.FRAGMENT_SHADER,`
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
   `),z=p(j.FRAGMENT_SHADER,`
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
   `),A=p(j.FRAGMENT_SHADER,`
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
   `),B=(j.bindBuffer(j.ARRAY_BUFFER,j.createBuffer()),j.bufferData(j.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),j.STATIC_DRAW),j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,j.createBuffer()),j.bufferData(j.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),j.STATIC_DRAW),j.vertexAttribPointer(0,2,j.FLOAT,!1,0,0),j.enableVertexAttribArray(0),(a,b=!1)=>{null==a?(j.viewport(0,0,j.drawingBufferWidth,j.drawingBufferHeight),j.bindFramebuffer(j.FRAMEBUFFER,null)):(j.viewport(0,0,a.width,a.height),j.bindFramebuffer(j.FRAMEBUFFER,a.fbo)),b&&(j.clearColor(0,0,0,1),j.clear(j.COLOR_BUFFER_BIT)),j.drawElements(j.TRIANGLES,6,j.UNSIGNED_SHORT,0)}),C=new m(q,r),D=new m(q,s),E=new m(q,u),F=new m(q,v),G=new m(q,w),H=new m(q,x),I=new m(q,y),J=new m(q,z),K=new m(q,A),L=new class{constructor(a,b){this.vertexShader=a,this.fragmentShaderSource=b,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(a){let b=0;for(let c=0;c<a.length;c++)b+=function(a){if(0==a.length)return 0;let b=0;for(let c=0;c<a.length;c++)b=(b<<5)-b+a.charCodeAt(c)|0;return b}(a[c]);let c=this.programs[b];if(null==c){let d=p(j.FRAGMENT_SHADER,this.fragmentShaderSource,a);c=n(this.vertexShader,d),this.programs[b]=c}c!=this.activeProgram&&(this.uniforms=o(c),this.activeProgram=c)}bind(){j.useProgram(this.activeProgram)}}(q,t);function M(){let a=ah(h.SIM_RESOLUTION),g=ah(h.DYE_RESOLUTION),i=k.halfFloatTexType,l=k.formatRGBA,m=k.formatRG,n=k.formatR,o=k.supportLinearFiltering?j.LINEAR:j.NEAREST;j.disable(j.BLEND),b=null==b?O(g.width,g.height,l.internalFormat,l.format,i,o):P(b,g.width,g.height,l.internalFormat,l.format,i,o),c=null==c?O(a.width,a.height,m.internalFormat,m.format,i,o):P(c,a.width,a.height,m.internalFormat,m.format,i,o),d=N(a.width,a.height,n.internalFormat,n.format,i,j.NEAREST),e=N(a.width,a.height,n.internalFormat,n.format,i,j.NEAREST),f=O(a.width,a.height,n.internalFormat,n.format,i,j.NEAREST)}function N(a,b,c,d,e,f){j.activeTexture(j.TEXTURE0);let g=j.createTexture();j.bindTexture(j.TEXTURE_2D,g),j.texParameteri(j.TEXTURE_2D,j.TEXTURE_MIN_FILTER,f),j.texParameteri(j.TEXTURE_2D,j.TEXTURE_MAG_FILTER,f),j.texParameteri(j.TEXTURE_2D,j.TEXTURE_WRAP_S,j.CLAMP_TO_EDGE),j.texParameteri(j.TEXTURE_2D,j.TEXTURE_WRAP_T,j.CLAMP_TO_EDGE),j.texImage2D(j.TEXTURE_2D,0,c,a,b,0,d,e,null);let h=j.createFramebuffer();j.bindFramebuffer(j.FRAMEBUFFER,h),j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,g,0),j.viewport(0,0,a,b),j.clear(j.COLOR_BUFFER_BIT);let i=1/a,k=1/b;return{texture:g,fbo:h,width:a,height:b,texelSizeX:i,texelSizeY:k,attach:a=>(j.activeTexture(j.TEXTURE0+a),j.bindTexture(j.TEXTURE_2D,g),a)}}function O(a,b,c,d,e,f){let g=N(a,b,c,d,e,f),h=N(a,b,c,d,e,f);return{width:a,height:b,texelSizeX:g.texelSizeX,texelSizeY:g.texelSizeY,get read(){return g},set read(value){g=value},get write(){return h},set write(value){h=value},swap(){let a=g;g=h,h=a}}}function P(a,b,c,d,e,f,g){var h;let i;return a.width==b&&a.height==c?a:(h=a.read,i=N(b,c,d,e,f,g),C.bind(),j.uniform1i(C.uniforms.uTexture,h.attach(0)),B(i),a.read=i,a.write=N(b,c,d,e,f,g),a.width=b,a.height=c,a.texelSizeX=1/b,a.texelSizeY=1/c,a)}g=[],h.SHADING&&g.push("SHADING"),L.setKeywords(g),M();let Q=Date.now(),R=0,S=!1,T=!1,U=0;function V(){T||S||(T=!0,function a(){var g,l,m;let n,o,p,q,r;if(S)return;let s=(o=((n=Date.now())-Q)/1e3,o=Math.min(o,.016666),Q=n,o);W()&&M(),g=s,(R+=g*h.COLOR_UPDATE_SPEED)>=1&&(l=R,p=1,R=0==p?0:(l-0)%p+0,i.forEach(a=>{a.color=ag()})),i.forEach(a=>{var b;let c,d;a.moved&&(a.moved=!1,c=(b=a).deltaX*h.SPLAT_FORCE,d=b.deltaY*h.SPLAT_FORCE,X(b.texcoordX,b.texcoordY,c,d,b.color))}),function(a){j.disable(j.BLEND),H.bind(),j.uniform2f(H.uniforms.texelSize,c.texelSizeX,c.texelSizeY),j.uniform1i(H.uniforms.uVelocity,c.read.attach(0)),B(e),I.bind(),j.uniform2f(I.uniforms.texelSize,c.texelSizeX,c.texelSizeY),j.uniform1i(I.uniforms.uVelocity,c.read.attach(0)),j.uniform1i(I.uniforms.uCurl,e.attach(1)),j.uniform1f(I.uniforms.curl,h.CURL),j.uniform1f(I.uniforms.dt,a),B(c.write),c.swap(),G.bind(),j.uniform2f(G.uniforms.texelSize,c.texelSizeX,c.texelSizeY),j.uniform1i(G.uniforms.uVelocity,c.read.attach(0)),B(d),D.bind(),j.uniform1i(D.uniforms.uTexture,f.read.attach(0)),j.uniform1f(D.uniforms.value,h.PRESSURE),B(f.write),f.swap(),J.bind(),j.uniform2f(J.uniforms.texelSize,c.texelSizeX,c.texelSizeY),j.uniform1i(J.uniforms.uDivergence,d.attach(0));for(let a=0;a<h.PRESSURE_ITERATIONS;a++)j.uniform1i(J.uniforms.uPressure,f.read.attach(1)),B(f.write),f.swap();K.bind(),j.uniform2f(K.uniforms.texelSize,c.texelSizeX,c.texelSizeY),j.uniform1i(K.uniforms.uPressure,f.read.attach(0)),j.uniform1i(K.uniforms.uVelocity,c.read.attach(1)),B(c.write),c.swap(),F.bind(),j.uniform2f(F.uniforms.texelSize,c.texelSizeX,c.texelSizeY),k.supportLinearFiltering||j.uniform2f(F.uniforms.dyeTexelSize,c.texelSizeX,c.texelSizeY);let g=c.read.attach(0);j.uniform1i(F.uniforms.uVelocity,g),j.uniform1i(F.uniforms.uSource,g),j.uniform1f(F.uniforms.dt,a),j.uniform1f(F.uniforms.dissipation,h.VELOCITY_DISSIPATION),B(c.write),c.swap(),k.supportLinearFiltering||j.uniform2f(F.uniforms.dyeTexelSize,b.texelSizeX,b.texelSizeY),j.uniform1i(F.uniforms.uVelocity,c.read.attach(0)),j.uniform1i(F.uniforms.uSource,b.read.attach(1)),j.uniform1f(F.uniforms.dissipation,h.DENSITY_DISSIPATION),B(b.write),b.swap()}(s),j.blendFunc(j.ONE,j.ONE_MINUS_SRC_ALPHA),j.enable(j.BLEND),m=null,q=null==m?j.drawingBufferWidth:m.width,r=null==m?j.drawingBufferHeight:m.height,L.bind(),h.SHADING&&j.uniform2f(L.uniforms.texelSize,1/q,1/r),j.uniform1i(L.uniforms.uTexture,b.read.attach(0)),B(m),U=requestAnimationFrame(a)}())}function W(){let b=ai(a.clientWidth),c=ai(a.clientHeight);return(a.width!=b||a.height!=c)&&(a.width=b,a.height=c,!0)}function X(d,e,f,g,i){var k;let l;E.bind(),j.uniform1i(E.uniforms.uTarget,c.read.attach(0)),j.uniform1f(E.uniforms.aspectRatio,a.width/a.height),j.uniform2f(E.uniforms.point,d,e),j.uniform3f(E.uniforms.color,f,g,0),j.uniform1f(E.uniforms.radius,(k=h.SPLAT_RADIUS/100,(l=a.width/a.height)>1&&(k*=l),k)),B(c.write),c.swap(),j.uniform1i(E.uniforms.uTarget,b.read.attach(0)),j.uniform3f(E.uniforms.color,i.r,i.g,i.b),B(b.write),b.swap()}function Y(b,c){let d=a.getBoundingClientRect();return{x:ai(b-d.left),y:ai(c-d.top)}}let Z=a=>{let b,c,d,e=i[0],f=Y(a.clientX,a.clientY);ae(e,-1,f.x,f.y),b=ag(),b.r*=10,b.g*=10,b.b*=10,c=10*(Math.random()-.5),d=30*(Math.random()-.5),X(e.texcoordX,e.texcoordY,c,d,b)},$=a=>{let b=i[0],c=Y(a.clientX,a.clientY),d=ag();V(),af(b,c.x,c.y,d),document.body.removeEventListener("mousemove",$)},_=a=>{let b=i[0],c=Y(a.clientX,a.clientY),d=b.color;af(b,c.x,c.y,d)},aa=a=>{let b=a.targetTouches,c=i[0];for(let a=0;a<b.length;a++){let d=Y(b[a].clientX,b[a].clientY);V(),ae(c,b[a].identifier,d.x,d.y)}document.body.removeEventListener("touchstart",aa)},ab=a=>{let b=a.targetTouches,c=i[0];for(let a=0;a<b.length;a++){let d=Y(b[a].clientX,b[a].clientY);ae(c,b[a].identifier,d.x,d.y)}},ac=a=>{let b=a.targetTouches,c=i[0];for(let a=0;a<b.length;a++){let d=Y(b[a].clientX,b[a].clientY);af(c,d.x,d.y,c.color)}},ad=a=>{let b=a.changedTouches,c=i[0];for(let a=0;a<b.length;a++)c.down=!1};function ae(b,c,d,e){b.id=c,b.down=!0,b.moved=!1,b.texcoordX=d/a.width,b.texcoordY=1-e/a.height,b.prevTexcoordX=b.texcoordX,b.prevTexcoordY=b.texcoordY,b.deltaX=0,b.deltaY=0,b.color=ag()}function af(b,c,d,e){var f,g;let h,i;b.prevTexcoordX=b.texcoordX,b.prevTexcoordY=b.texcoordY,b.texcoordX=c/a.width,b.texcoordY=1-d/a.height,f=b.texcoordX-b.prevTexcoordX,(h=a.width/a.height)<1&&(f*=h),b.deltaX=f,g=b.texcoordY-b.prevTexcoordY,(i=a.width/a.height)>1&&(g/=i),b.deltaY=g,b.moved=Math.abs(b.deltaX)>0||Math.abs(b.deltaY)>0,b.color=e}function ag(){let a=function(a,b){let c,d,e,f,g,h,i,j;switch(f=Math.floor(6*a),g=6*a-f,h=+(1-b),i=+(1-g*b),j=+(1-(1-g)*b),f%6){case 0:c=1,d=j,e=h;break;case 1:c=i,d=1,e=h;break;case 2:c=h,d=1,e=j;break;case 3:c=h,d=i,e=1;break;case 4:c=j,d=h,e=1;break;case 5:c=1,d=h,e=i}return{r:c,g:d,b:e}}(.022+.045*Math.random(),.85+.15*Math.random());return a.r*=.3,a.g*=.3,a.b*=.3,a}function ah(a){let b=j.drawingBufferWidth/j.drawingBufferHeight;b<1&&(b=1/b);let c=Math.round(a),d=Math.round(a*b);return j.drawingBufferWidth>j.drawingBufferHeight?{width:d,height:c}:{width:c,height:d}}function ai(a){return Math.floor(a*(window.devicePixelRatio||1))}return window.addEventListener("mousedown",Z),document.body.addEventListener("mousemove",$),window.addEventListener("mousemove",_),document.body.addEventListener("touchstart",aa),window.addEventListener("touchstart",ab),window.addEventListener("touchmove",ac,!1),window.addEventListener("touchend",ad),()=>{S=!0,cancelAnimationFrame(U),window.removeEventListener("mousedown",Z),document.body.removeEventListener("mousemove",$),window.removeEventListener("mousemove",_),document.body.removeEventListener("touchstart",aa),window.removeEventListener("touchstart",ab),window.removeEventListener("touchmove",ac),window.removeEventListener("touchend",ad),j.getExtension("WEBGL_lose_context")?.loseContext()}})(a.current)}catch(a){console.warn("[HeroFluidCursor] skipped —",a)}},50);return()=>{c=!0,window.clearTimeout(d),b?.()}},[e]),e)?null:(0,b.jsx)("canvas",{ref:a,"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-20 h-full w-full"})}a.s(["HeroAtmosphere",0,function({fluid:a=!1,deferUntilVisible:d=!1}){let e=(0,c.useRef)(null),[h,i]=(0,c.useState)(!d);return(0,c.useEffect)(()=>{if(!d||h)return;let a=e.current;if(!a)return;let b=new IntersectionObserver(([a])=>{a?.isIntersecting&&(i(!0),b.disconnect())},{rootMargin:"200px 0px"});return b.observe(a),()=>b.disconnect()},[d,h]),(0,b.jsx)("div",{ref:e,className:"absolute inset-0",children:h?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f,{}),a?(0,b.jsx)(g,{}):null]}):null})}],93300)}];

//# sourceMappingURL=src_components_hero_HeroAtmosphere_tsx_0z52z2_._.js.map