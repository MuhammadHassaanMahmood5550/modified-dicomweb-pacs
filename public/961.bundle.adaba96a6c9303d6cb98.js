"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[961],{61342:(e,n,a)=>{a.r(n),a.d(n,{default:()=>d});var s=a(41766);const t=JSON.parse('{"UU":"@ohif/extension-dicom-video"}').UU,r=`${t}.sopClassHandlerModule.dicom-video`;var i=a(55411);const _={VIDEO_MICROSCOPIC_IMAGE_STORAGE:"1.2.840.10008.5.1.4.1.1.77.1.2.1",VIDEO_PHOTOGRAPHIC_IMAGE_STORAGE:"1.2.840.10008.5.1.4.1.1.77.1.4.1",VIDEO_ENDOSCOPIC_IMAGE_STORAGE:"1.2.840.10008.5.1.4.1.1.77.1.1.1",SECONDARY_CAPTURE_IMAGE_STORAGE:"1.2.840.10008.5.1.4.1.1.7",MULTIFRAME_TRUE_COLOR_SECONDARY_CAPTURE_IMAGE_STORAGE:"1.2.840.10008.5.1.4.1.1.7.4"},I=Object.values(_),l=[_.SECONDARY_CAPTURE_IMAGE_STORAGE,_.MULTIFRAME_TRUE_COLOR_SECONDARY_CAPTURE_IMAGE_STORAGE],E=Object.values({MPEG4_AVC_264_HIGH_PROFILE:"1.2.840.10008.1.2.4.102",MPEG4_AVC_264_BD_COMPATIBLE_HIGH_PROFILE:"1.2.840.10008.1.2.4.103",MPEG4_AVC_264_HIGH_PROFILE_FOR_2D_VIDEO:"1.2.840.10008.1.2.4.104",MPEG4_AVC_264_HIGH_PROFILE_FOR_3D_VIDEO:"1.2.840.10008.1.2.4.105",MPEG4_AVC_264_STEREO_HIGH_PROFILE:"1.2.840.10008.1.2.4.106",HEVC_265_MAIN_PROFILE:"1.2.840.10008.1.2.4.107",HEVC_265_MAIN_10_PROFILE:"1.2.840.10008.1.2.4.108"});function O(){return O=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},O.apply(this,arguments)}const c=s.lazy((()=>a.e(939).then(a.bind(a,86939)))),o=e=>s.createElement(s.Suspense,{fallback:s.createElement("div",null,"Loading...")},s.createElement(c,e));const d={id:t,getViewportModule:({servicesManager:e,extensionManager:n})=>[{name:"dicom-video",component:a=>s.createElement(o,O({servicesManager:e,extensionManager:n},a))}],getSopClassHandlerModule:function({servicesManager:e,extensionManager:n}){return[{name:"dicom-video",sopClassUids:I,getDisplaySetsFromSeries:e=>((e,n,a)=>{const s=a.getActiveDataSource()[0];return e.filter((e=>{const n=e.AvailableTransferSyntaxUID||e.TransferSyntaxUID||e["00083002"];return!!E.includes(n)||e.SOPClassUID===_.VIDEO_PHOTOGRAPHIC_IMAGE_STORAGE||l.includes(e.SOPClassUID)&&e.NumberOfFrames>=90})).map((e=>{const{Modality:n,SOPInstanceUID:a,SeriesDescription:t="VIDEO"}=e,{SeriesNumber:_,SeriesDate:l,SeriesInstanceUID:E,StudyInstanceUID:O,NumberOfFrames:c,url:o}=e;return{Modality:n,displaySetInstanceUID:i.utils.guid(),SeriesDescription:t,SeriesNumber:_,SeriesDate:l,SOPInstanceUID:a,SeriesInstanceUID:E,StudyInstanceUID:O,SOPClassHandlerId:r,referencedImages:null,measurements:null,videoUrl:s.retrieve.directURL({instance:e,singlepart:"video",tag:"PixelData",url:o}),instances:[e],thumbnailSrc:s.retrieve.directURL({instance:e,defaultPath:"/thumbnail",defaultType:"image/jpeg",tag:"Absent"}),isDerivedDisplaySet:!0,isLoaded:!1,sopClassUids:I,numImageFrames:c,instance:e}}))})(e,0,n)}]}}}}]);
//# sourceMappingURL=961.bundle.adaba96a6c9303d6cb98.js.map