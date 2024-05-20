"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[530],{58530:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var s=n(11374),a=n.n(s),r=n(41766),i=n(80619),l=n(55411),o=n(74334),c=n(5085),u=n(77089),d=n(15575),p=n(92643);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},m.apply(this,arguments)}function S(e){const{children:t,dataSource:n,displaySets:s,viewportOptions:a,servicesManager:l,extensionManager:S}=e,[y]=(0,d.r)(),{displaySetService:g,cornerstoneViewportService:f,measurementService:v,viewportActionCornersService:h}=l.services,w=a.viewportId;if(s.length>1)throw new Error("SR viewport should only have a single display set");const E=s[0],[b,D]=(0,c.ih)(),[k,x]=(0,r.useState)(0),[M,C]=(0,r.useState)(1),[U,T]=(0,r.useState)(null),[O,P]=(0,r.useState)(null),[N,A]=(0,r.useState)(null),{viewports:R,activeViewportId:L}=b,{t:j}=(0,i.Bd)("Common");let V,q;if(S.registeredExtensionIds.includes("@ohif/extension-measurement-tracking")){const e=S.getModuleEntry("@ohif/extension-measurement-tracking.contextModule.TrackedMeasurementsContext"),t=(0,r.useContext)(e.context);V=t?.[0],q=t?.[1]}q||(V=null,q=(e,{displaySetInstanceUID:t})=>{v.clearMeasurements();const{SeriesInstanceUIDs:n}=(0,u.A)({servicesManager:l,extensionManager:S,appConfig:y},t),s=g.getDisplaySetsForSeries(n[0]);s.length&&D.setDisplaySetsForViewports([{viewportId:L,displaySetInstanceUIDs:[s[0].displaySetInstanceUID]}])});const F=(0,r.useCallback)((e=>{const{measurements:t}=E;(0,o.m1)(N,t.map((e=>e.TrackingUniqueIdentifier)),e)}),[N,k,E]),B=(0,r.useCallback)((e=>{const{StudyInstanceUID:t,displaySetInstanceUID:n,sopClassUids:s}=E;t&&n&&(s&&s.length>1&&console.warn("More than one SOPClassUID in the same series is not yet supported."),async function(e,t,n){const{measurements:s}=e,a=s[t],{displaySetInstanceUID:r}=a;e.keyImageDisplaySet||(e.keyImageDisplaySet=(0,p.A)(n,e));const i=n.getDisplaySetByUID(r),l=i.images[0],o={PatientID:l.PatientID,PatientName:l.PatientName,PatientSex:l.PatientSex,PatientAge:l.PatientAge,SliceThickness:l.SliceThickness,StudyDate:l.StudyDate,SeriesDescription:l.SeriesDescription,SeriesInstanceUID:l.SeriesInstanceUID,SeriesNumber:l.SeriesNumber,ManufacturerModelName:l.ManufacturerModelName,SpacingBetweenSlices:l.SpacingBetweenSlices};return{referencedDisplaySetMetadata:o,referencedDisplaySet:i}}(E,e,g).then((({referencedDisplaySet:t,referencedDisplaySetMetadata:n})=>{if(x(e),T(t),P(n),t.displaySetInstanceUID===U?.displaySetInstanceUID){const{measurements:t}=E,n=f.getCornerstoneViewport(w),s=n.getImageIds().indexOf(t[e].imageId);-1!==s&&n.setImageIdIndex(s)}})))}),[n,E,U,w]),_=(0,r.useCallback)((()=>{if(!U)return null;const{component:t}=S.getModuleEntry("@ohif/extension-cornerstone.viewportModule.cornerstone"),{measurements:n}=E,s=n[k];if(!s)return null;const i=U.images.findIndex((e=>e.imageId===s.imageId));return r.createElement(t,m({},e,{displaySets:[U],viewportOptions:{...a,toolGroupId:"SRToolGroup",viewportType:"stack",positionIds:null},onElementEnabled:t=>{e.onElementEnabled?.(t),(e=>{A(e.detail.element)})(t)},initialImageIndex:i,isJumpToMeasurementDisabled:!0}))}),[U,w,k]),G=(0,r.useCallback)((e=>{let t=k;t+=e,t>=M?t=0:t<0&&(t=M-1),F(t),B(t)}),[k,M,B,F]);(0,r.useEffect)((()=>{const e=g.subscribe(g.EVENTS.DISPLAY_SETS_REMOVED,(({displaySetInstanceUIDs:e})=>{const t=R.get(L);e.includes(t.displaySetInstanceUID)&&D.setDisplaySetsForViewport({viewportId:L,displaySetInstanceUIDs:[]})}));return()=>{e.unsubscribe()}}),[]),(0,r.useEffect)((()=>{(async()=>{E.isLoaded||await E.load();const e=E.measurements.length;C(e),B(k)})()}),[n,E]),(0,r.useEffect)((()=>{N&&E.isLoaded&&F(k)}),[k,N,F,E]);const[H,Y]=(0,r.useState)(V?.context?.trackedSeries?.length>0);(0,r.useEffect)((()=>{Y(V?.context?.trackedSeries?.length>0)}),[V]),(0,r.useEffect)((()=>{h.setComponents([{viewportId:w,id:"viewportStatusComponent",component:I({srDisplaySet:E,viewportId:w,isRehydratable:E.isRehydratable,isLocked:H,sendTrackedMeasurementsEvent:q,t:j}),indexPriority:-100,location:h.LOCATIONS.topLeft},{viewportId:w,id:"viewportActionArrowsComponent",index:0,component:r.createElement(c.$I,{key:"actionArrows",onArrowsClick:G}),indexPriority:0,location:h.LOCATIONS.topRight}])}),[H,G,q,E,j,h,w]);let $=null;return U&&O?(t&&t.length&&($=t.map(((e,t)=>e&&r.cloneElement(e,{viewportId:w,key:t})))),r.createElement(r.Fragment,null,r.createElement("div",{className:"relative flex h-full w-full flex-row overflow-hidden"},_(),$))):null}function I({srDisplaySet:e,viewportId:t,isRehydratable:n,isLocked:s,sendTrackedMeasurementsEvent:a,t:i}){const l=()=>{a("HYDRATE_SR",{displaySetInstanceUID:e.displaySetInstanceUID,viewportId:t})},o=i("LOAD"),u=n&&!s?3:n&&s?2:1;let d=null,p=null;switch(u){case 1:p=()=>r.createElement(c.In,{name:"status-alert"}),d=()=>r.createElement("div",null,"This structured report is not compatible",r.createElement("br",null),"with this application.");break;case 2:p=()=>r.createElement(c.In,{name:"status-locked"}),d=()=>r.createElement("div",null,"This structured report is currently read-only",r.createElement("br",null),"because you are tracking measurements in",r.createElement("br",null),"another viewport.");break;case 3:p=()=>r.createElement(c.In,{className:"text-aqua-pale",name:"status-untracked"}),d=()=>r.createElement("div",null,`Click ${o} to restore measurements.`)}const m=()=>r.createElement("div",{className:"flex h-6 cursor-default text-sm leading-6 text-white"},r.createElement("div",{className:"bg-customgray-100 flex min-w-[45px] items-center rounded-l-xl rounded-r p-1"},r.createElement(p,null),r.createElement("span",{className:"ml-1"},"SR")),3===u&&r.createElement("div",{className:"bg-primary-main hover:bg-primary-light ml-1 cursor-pointer rounded px-1.5 hover:text-black",onMouseUp:l},o));return r.createElement(r.Fragment,null,d&&r.createElement(c.m_,{content:r.createElement(d,null),position:"bottom-left"},r.createElement(m,null)),!d&&r.createElement(m,null))}S.propTypes={displaySets:a().arrayOf(a().object),viewportId:a().string.isRequired,dataSource:a().object,children:a().node,viewportLabel:a().string,customProps:a().object,viewportOptions:a().object,servicesManager:a().instanceOf(l.CS).isRequired,extensionManager:a().instanceOf(l.nH).isRequired},S.defaultProps={customProps:{}};const y=S}}]);
//# sourceMappingURL=530.bundle.566957f52c75587b3622.js.map