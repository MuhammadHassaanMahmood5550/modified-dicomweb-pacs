/*! For license information please see 584.ohif-extension-tmtv.umd.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@cornerstonejs/tools"),require("@kitware/vtk.js/Common/Core/DataArray"),require("@kitware/vtk.js/Common/DataModel/ImageData"),require("gl-matrix")):"function"==typeof define&&define.amd?define(["@cornerstonejs/tools","@kitware/vtk.js/Common/Core/DataArray","@kitware/vtk.js/Common/DataModel/ImageData","gl-matrix"],t):"object"==typeof exports?exports["ohif-extension-tmtv"]=t(require("@cornerstonejs/tools"),require("@kitware/vtk.js/Common/Core/DataArray"),require("@kitware/vtk.js/Common/DataModel/ImageData"),require("gl-matrix")):e["ohif-extension-tmtv"]=t(e["@cornerstonejs/tools"],e["@kitware/vtk.js/Common/Core/DataArray"],e["@kitware/vtk.js/Common/DataModel/ImageData"],e["gl-matrix"])}(globalThis,((e,t,n,a)=>(()=>{"use strict";var r={713:t=>{t.exports=e},670:e=>{e.exports=t},322:e=>{e.exports=n},155:e=>{e.exports=a}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,s),n.exports}return s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=s(713),t=s(155),n=s(322),a=s.n(n),r=s(670),o=s.n(r);const i=Symbol("Comlink.proxy"),c=Symbol("Comlink.endpoint"),l=Symbol("Comlink.releaseProxy"),u=Symbol("Comlink.finalizer"),m=Symbol("Comlink.thrown"),p=e=>"object"==typeof e&&null!==e||"function"==typeof e,d={canHandle:e=>p(e)&&e[i],serialize(e){const{port1:t,port2:n}=new MessageChannel;return g(e,t),[n,[n]]},deserialize:e=>(e.start(),x(e,[],undefined))},f=new Map([["proxy",d],["throw",{canHandle:e=>p(e)&&m in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function g(e,t=globalThis,n=["*"]){t.addEventListener("message",(function a(r){if(!r||!r.data)return;if(!function(e,t){for(const n of e){if(t===n||"*"===n)return!0;if(n instanceof RegExp&&n.test(t))return!0}return!1}(n,r.origin))return void console.warn(`Invalid origin '${r.origin}' for comlink proxy`);const{id:o,type:s,path:c}=Object.assign({path:[]},r.data),l=(r.data.argumentList||[]).map(j);let p;try{const t=c.slice(0,-1).reduce(((e,t)=>e[t]),e),n=c.reduce(((e,t)=>e[t]),e);switch(s){case"GET":p=n;break;case"SET":t[c.slice(-1)[0]]=j(r.data.value),p=!0;break;case"APPLY":p=n.apply(t,l);break;case"CONSTRUCT":p=function(e){return Object.assign(e,{[i]:!0})}(new n(...l));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;g(e,n),p=function(e,t){return E.set(e,t),e}(t,[t])}break;case"RELEASE":p=void 0;break;default:return}}catch(e){p={value:e,[m]:0}}Promise.resolve(p).catch((e=>({value:e,[m]:0}))).then((n=>{const[r,i]=S(n);t.postMessage(Object.assign(Object.assign({},r),{id:o}),i),"RELEASE"===s&&(t.removeEventListener("message",a),v(t),u in e&&"function"==typeof e[u]&&e[u]())})).catch((e=>{const[n,a]=S({value:new TypeError("Unserializable return value"),[m]:0});t.postMessage(Object.assign(Object.assign({},n),{id:o}),a)}))})),t.start&&t.start()}function v(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function h(e){if(e)throw new Error("Proxy has been released and is not useable")}function y(e){return D(e,{type:"RELEASE"}).then((()=>{v(e)}))}const b=new WeakMap,w="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const t=(b.get(e)||0)-1;b.set(e,t),0===t&&y(e)}));function x(e,t=[],n=function(){}){let a=!1;const r=new Proxy(n,{get(n,o){if(h(a),o===l)return()=>{!function(e){w&&w.unregister(e)}(r),y(e),a=!0};if("then"===o){if(0===t.length)return{then:()=>r};const n=D(e,{type:"GET",path:t.map((e=>e.toString()))}).then(j);return n.then.bind(n)}return x(e,[...t,o])},set(n,r,o){h(a);const[s,i]=S(o);return D(e,{type:"SET",path:[...t,r].map((e=>e.toString())),value:s},i).then(j)},apply(n,r,o){h(a);const s=t[t.length-1];if(s===c)return D(e,{type:"ENDPOINT"}).then(j);if("bind"===s)return x(e,t.slice(0,-1));const[i,l]=k(o);return D(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:i},l).then(j)},construct(n,r){h(a);const[o,s]=k(r);return D(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:o},s).then(j)}});return function(e,t){const n=(b.get(t)||0)+1;b.set(t,n),w&&w.register(e,t,e)}(r,e),r}function k(e){const t=e.map(S);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const E=new WeakMap;function S(e){for(const[t,n]of f)if(n.canHandle(e)){const[a,r]=n.serialize(e);return[{type:"HANDLER",name:t,value:a},r]}return[{type:"RAW",value:e},E.get(e)||[]]}function j(e){switch(e.type){case"HANDLER":return f.get(e.name).deserialize(e.value);case"RAW":return e.value}}function D(e,t,n){return new Promise((a=>{const r=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===r&&(e.removeEventListener("message",t),a(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:r},t),n)}))}const C=({dimensions:e,origin:t,direction:n,spacing:r,scalarData:s,metadata:i})=>{const c=a().newInstance();c.setDimensions(e),c.setOrigin(t),c.setDirection(n),c.setSpacing(r);const l=o().newInstance({name:"Pixels",numberOfComponents:1,values:s});return c.getPointData().setScalars(l),c.modified(),{imageData:c,metadata:i,getScalarData:()=>s}};g({calculateSuvPeak:function({labelmapProps:n,referenceVolumeProps:a,annotations:r,segmentIndex:o=1}){const s=C(n),i=C(a);if("PT"!==i.metadata.Modality)return;const c=s.getScalarData(),l=i.getScalarData();if(c.length!==l.length)throw new Error("labelmap and referenceVolume must have the same number of pixels");const{dimensions:u,imageData:m}=s,{imageData:p}=i;let d;if(r?.length&&r[0].data?.cachedStats){const{projectionPoints:n}=r[0].data.cachedStats,a=[].concat(...n).map((e=>{const n=t.vec3.fromValues(0,0,0);return p.worldToIndex(e,n),n}));d=e.utilities.boundingBox.getBoundingBoxAroundShape(a,u)}let f=0,g=[0,0,0],v=[0,0,0];e.utilities.pointInShapeCallback(m,(()=>!0),(({pointIJK:e,pointLPS:t})=>{const n=p.computeOffsetIndex(e);if(c[n]!==o)return;const a=l[n];a>f&&(f=a,g=e,v=t)}),d);const h=m.getDirection().slice(0,3),y=10*Math.pow(1/(4/3*Math.PI),1/3)*2,b=t.vec3.create(),w=t.vec3.create(),x=t.vec3.create();p.indexToWorld(g,b),t.vec3.scaleAndAdd(w,b,h,-y/2),t.vec3.scaleAndAdd(x,b,h,y/2);const k=[w,x];let E=0,S=0;return e.utilities.pointInSurroundingSphereCallback(p,k,(({value:e})=>{S+=e,E+=1})),{max:f,maxIJK:g,maxLPS:v,mean:S/E}}})})(),{}})()));