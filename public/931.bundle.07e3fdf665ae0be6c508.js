"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[931],{79717:(e,t,i)=>{i.d(t,{C:()=>u});class r{constructor(e){this.fullDate=e}getTimeInSec(){const e=this.fullDate.substring(0,10),t=this.fullDate.substring(11,28),i=parseInt(e.substring(0,4),10),r=e.length>=7?parseInt(e.substring(5,7),10):void 0,n=e.length>=10?parseInt(e.substring(8,10),10):void 0;if(isNaN(i)||void 0!==r&&isNaN(r)||void 0!==n&&isNaN(n)||i>3e3||r&&(r<1||r>12)||n&&(n<1||n>31))throw new Error(`invalid date '${e}'`);const o=new Date(`${e}T00:00:00.000000Z`),a=parseInt(t.substring(0,2),10),s=t.length>=5?parseInt(t.substring(3,5),10):void 0,l=t.length>=8?parseInt(t.substring(6,8),10):void 0,c=t.substring(9,15),u=c?parseInt(c,10)*Math.pow(10,-c.length):void 0;if(isNaN(a)||void 0!==s&&isNaN(s)||void 0!==l&&isNaN(l)||void 0!==u&&isNaN(u)||a<0||a>23||s&&(s<0||s>59)||l&&(l<0||l>59)||u&&(u<0||u>999999))throw new Error(`invalid time '${t}'`);let d=o.getTime()/1e3;return d+=3600*a,void 0!==s&&(d+=60*s),void 0!==l&&(d+=l),void 0!==u&&(d+=u),d}getTimeInMicroSec(){return 1e6*this.getTimeInSec()}}function n(e,t){const i=`${t.hours||"00"}`.padStart(2,"0"),n=`${t.minutes||"00"}`.padStart(2,"0"),o=`${t.seconds||"00"}`.padStart(2,"0"),a=`${e.month}`.padStart(2,"0"),s=`${e.day}`.padStart(2,"0"),l=`${t.fractionalSeconds||"000000"}`.padEnd(6,"0"),c=`${e.year}-${a}-${s}`;return new r(`${c}${`T${i}:${n}:${o}.${l}Z`}`)}function o(e){if(null==e||8!==e.length||"string"!=typeof e)throw new Error(`invalid DA '${e}'`);const t=parseInt(e.substring(0,4),10),i=parseInt(e.substring(4,6),10),r=parseInt(e.substring(6,8),10);if(!0!=(n=r,o=i,a=t,!isNaN(a)&&o>0&&o<=12&&n>0&&n<=function(e,t){switch(e){case 2:return t%4==0&&t%100||t%400==0?29:28;case 9:case 4:case 6:case 11:return 30;default:return 31}}(o,a)))throw new Error(`invalid DA '${e}'`);var n,o,a;return{year:t,month:i,day:r}}function a(e){if(null==e||e.length<2||"string"!=typeof e)throw new Error(`invalid TM '${e}'`);const t=parseInt(e.substring(0,2),10),i=e.length>=4?parseInt(e.substring(2,4),10):void 0,r=e.length>=6?parseInt(e.substring(4,6),10):void 0,n=e.length>=8?e.substring(7,13):void 0,o=n?parseInt(n,10)*Math.pow(10,6-n.length):void 0;if(isNaN(t)||void 0!==i&&isNaN(i)||void 0!==r&&isNaN(r)||void 0!==o&&isNaN(o)||t<0||t>23||i&&(i<0||i>59)||r&&(r<0||r>59)||o&&(o<0||o>999999))throw new Error(`invalid TM '${e}'`);return{hours:t,minutes:i,seconds:r,fractionalSeconds:o}}function s(e){if(null==e)throw new Error("dateTimeToFullDateInterface : dateTime not defined.");return n(o(e.substring(0,8)),a(e.substring(8)))}function l(e){const{RadionuclideTotalDose:t,RadionuclideHalfLife:i,RadiopharmaceuticalStartDateTime:l,RadiopharmaceuticalStartTime:c,SeriesDate:u}=e[0];if(null==t)throw new Error("calculateDecayCorrection : RadionuclideTotalDose value not found.");if(null==i)throw new Error("calculateDecayCorrection : RadionuclideHalfLife value not found.");const d=function(e){const{SeriesDate:t,SeriesTime:i,GEPrivatePostInjectionDateTime:l}=e[0],c=new Array(e.length),u=n(o(t),a(i));let d=new r("3000-01-01T00:00:00.000000Z"),f=d.getTimeInSec();if(e.forEach((e=>{const{AcquisitionDate:t,AcquisitionTime:i}=e,r=n(o(t),a(i));d=d.getTimeInSec()>=f||r.getTimeInSec()<d.getTimeInSec()?r:d})),d.getTimeInSec()>=f)throw new Error("Earliest acquisition time or date could not be parsed.");return u.getTimeInSec()<=d.getTimeInSec()?c.fill(u):l?c.fill(s(l)):c.fill(d)}(e),f=function(e){const{RadiopharmaceuticalStartDateTime:t,RadiopharmaceuticalStartTime:i,SeriesDate:r}=e;let l,c;if(t)return s(t);if(i&&r)return l=a(i),c=o(r),n(c,l);throw new Error(`Invalid input: ${e}`)}({RadiopharmaceuticalStartDateTime:l,RadiopharmaceuticalStartTime:c,SeriesDate:u});return e.map(((e,r)=>{const n=d[r].getTimeInSec()-f.getTimeInSec();if(n<0)throw new Error("Decay time cannot be less than zero");return 1/(t*Math.pow(2,-n/i))}))}const c=(e,t)=>e===t||Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every(((e,i)=>e===t[i]));function u(e){const{CorrectedImage:t,Units:i,PhilipsPETPrivateGroup:r,PatientWeight:n,PatientSex:o,PatientSize:a}=e[0];if(!t.includes("ATTN")||!t.includes("DECY"))throw new Error(`CorrectedImage must contain "ATTN" and "DECY": ${t}`);if(!e.every((r=>r.Units===i&&c(r.CorrectedImage,t)&&r.PatientWeight===n&&r.PatientSex===o&&r.PatientSize===a&&r.RadionuclideHalfLife===e[0].RadionuclideHalfLife&&r.RadionuclideTotalDose===e[0].RadionuclideTotalDose&&r.DecayCorrection===e[0].DecayCorrection&&r.SeriesDate===e[0].SeriesDate&&r.SeriesTime===e[0].SeriesTime)))throw new Error("The set of instances does not appear to come from one Series. Every instance must have identical values for series-level metadata properties");if(!n)throw new Error("PatientWeight value is missing. It is not possible to calculate the SUV factors");let s=new Array(e.length);s=l(e);let u=new Array(e.length);const d=1e3*n;if("BQML"===i)u=s.map((function(e){return e*d}));else if("CNTS"===i){const t=e.every((e=>{var t,i,r;return e.PhilipsPETPrivateGroup&&null!==(null===(t=e.PhilipsPETPrivateGroup)||void 0===t?void 0:t.SUVScaleFactor)&&void 0!==(null===(i=e.PhilipsPETPrivateGroup)||void 0===i?void 0:i.SUVScaleFactor)&&0!==(null===(r=e.PhilipsPETPrivateGroup)||void 0===r?void 0:r.SUVScaleFactor)})),i=e.every((e=>{var t,i,r;return e.PhilipsPETPrivateGroup&&!(null!==(t=e.PhilipsPETPrivateGroup)&&void 0!==t&&t.SUVScaleFactor)&&void 0!==(null===(i=e.PhilipsPETPrivateGroup)||void 0===i?void 0:i.ActivityConcentrationScaleFactor)&&0!==(null===(r=e.PhilipsPETPrivateGroup)||void 0===r?void 0:r.ActivityConcentrationScaleFactor)}));if(t)u=e.map((e=>e.PhilipsPETPrivateGroup.SUVScaleFactor));else{if(!i)throw new Error(`Units are in CNTS, but PhilipsPETPrivateGroup has invalid values: ${JSON.stringify(r)}`);u=e.map(((e,t)=>e.PhilipsPETPrivateGroup.ActivityConcentrationScaleFactor*s[t]*d))}}else{if("GML"!==i)throw new Error(`Units has an invalid value: ${i}`);u.fill(1)}let f,h,p;if(null==a)console.warn("PatientSize value is missing. It is not possible to calculate the SUV bsa factors");else{f=function(e){const{PatientWeight:t,PatientSize:i}=e;return Math.pow(t,.425)*Math.pow(100*i,.725)*71.84}({PatientWeight:n,PatientSize:a})}if(null==a)console.warn("PatientSize value is missing. It is not possible to calculate the SUV lbm factors");else if(null==o)console.warn("PatientSex value is missing. It is not possible to calculate the SUV lbm factors");else{const e={PatientWeight:n,PatientSex:o,PatientSize:a};h=function(e){const{PatientSex:t,PatientWeight:i,PatientSize:r}=e;let n;const o=Math.pow(i/(100*r),2);if("F"===t)n=1.07*i-148*o;else{if("M"!==t)throw new Error(`PatientSex is an invalid value: ${t}`);n=1.1*i-120*o}return 1e3*n}(e),p=function(e){const{PatientSex:t,PatientWeight:i,PatientSize:r}=e;let n;const o=i/Math.pow(r,2);if("F"===t)n=9270*i/(8780+244*o);else{if("M"!==t)throw new Error(`PatientSex is an invalid value: ${t}`);n=9270*i/(6680+216*o)}return 1e3*n}(e)}return u.map((function(e,t){const i={suvbw:e};return f&&(i.suvbsa=s[t]*f),h&&(i.suvlbm=s[t]*h),p&&(i.suvlbmJanma=s[t]*p),i}))}},6943:(e,t,i)=>{i.d(t,{_m:()=>P});var r=i(69276),n=i(70485),o=i(66927),a=i(50093),s=i(41766),l=(i(94719),"object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()});function c(e){cancelAnimationFrame(e.id)}function u(e,t){var i=l();var r={id:requestAnimationFrame((function n(){l()-i>=t?e.call(null):r.id=requestAnimationFrame(n)}))};return r}var d=-1;function f(e){if(void 0===e&&(e=!1),-1===d||e){var t=document.createElement("div"),i=t.style;i.width="50px",i.height="50px",i.overflow="scroll",document.body.appendChild(t),d=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return d}var h=null;function p(e){if(void 0===e&&(e=!1),null===h||e){var t=document.createElement("div"),i=t.style;i.width="50px",i.height="50px",i.overflow="scroll",i.direction="rtl";var r=document.createElement("div"),n=r.style;return n.width="100px",n.height="100px",t.appendChild(r),document.body.appendChild(t),t.scrollLeft>0?h="positive-descending":(t.scrollLeft=1,h=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),h}return h}var v=function(e,t){return e};function m(e){var t,i=e.getItemOffset,l=e.getEstimatedTotalSize,d=e.getItemSize,h=e.getOffsetForIndexAndAlignment,m=e.getStartIndexForOffset,S=e.getStopIndexForStartIndex,I=e.initInstanceProps,w=e.shouldResetStyleCacheOnItemSizeChange,T=e.validateProps;return t=function(e){function t(t){var r;return(r=e.call(this,t)||this)._instanceProps=I(r.props,(0,n.A)(r)),r._outerRef=void 0,r._resetIsScrollingTimeoutId=null,r.state={instance:(0,n.A)(r),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof r.props.initialScrollOffset?r.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},r._callOnItemsRendered=void 0,r._callOnItemsRendered=(0,a.A)((function(e,t,i,n){return r.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:i,visibleStopIndex:n})})),r._callOnScroll=void 0,r._callOnScroll=(0,a.A)((function(e,t,i){return r.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:i})})),r._getItemStyle=void 0,r._getItemStyle=function(e){var t,n=r.props,o=n.direction,a=n.itemSize,s=n.layout,l=r._getItemStyleCache(w&&a,w&&s,w&&o);if(l.hasOwnProperty(e))t=l[e];else{var c=i(r.props,e,r._instanceProps),u=d(r.props,e,r._instanceProps),f="horizontal"===o||"horizontal"===s,h="rtl"===o,p=f?c:0;l[e]=t={position:"absolute",left:h?void 0:p,right:h?p:void 0,top:f?0:c,height:f?"100%":u,width:f?u:"100%"}}return t},r._getItemStyleCache=void 0,r._getItemStyleCache=(0,a.A)((function(e,t,i){return{}})),r._onScrollHorizontal=function(e){var t=e.currentTarget,i=t.clientWidth,n=t.scrollLeft,o=t.scrollWidth;r.setState((function(e){if(e.scrollOffset===n)return null;var t=r.props.direction,a=n;if("rtl"===t)switch(p()){case"negative":a=-n;break;case"positive-descending":a=o-i-n}return a=Math.max(0,Math.min(a,o-i)),{isScrolling:!0,scrollDirection:e.scrollOffset<a?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._onScrollVertical=function(e){var t=e.currentTarget,i=t.clientHeight,n=t.scrollHeight,o=t.scrollTop;r.setState((function(e){if(e.scrollOffset===o)return null;var t=Math.max(0,Math.min(o,n-i));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._outerRefSetter=function(e){var t=r.props.outerRef;r._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},r._resetIsScrollingDebounced=function(){null!==r._resetIsScrollingTimeoutId&&c(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=u(r._resetIsScrolling,150)},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},(function(){r._getItemStyleCache(-1,null)}))},r}(0,o.A)(t,e),t.getDerivedStateFromProps=function(e,t){return g(e,t),T(e),null};var P=t.prototype;return P.scrollTo=function(e){e=Math.max(0,e),this.setState((function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},P.scrollToItem=function(e,t){void 0===t&&(t="auto");var i=this.props,r=i.itemCount,n=i.layout,o=this.state.scrollOffset;e=Math.max(0,Math.min(e,r-1));var a=0;if(this._outerRef){var s=this._outerRef;a="vertical"===n?s.scrollWidth>s.clientWidth?f():0:s.scrollHeight>s.clientHeight?f():0}this.scrollTo(h(this.props,e,t,o,this._instanceProps,a))},P.componentDidMount=function(){var e=this.props,t=e.direction,i=e.initialScrollOffset,r=e.layout;if("number"==typeof i&&null!=this._outerRef){var n=this._outerRef;"horizontal"===t||"horizontal"===r?n.scrollLeft=i:n.scrollTop=i}this._callPropsCallbacks()},P.componentDidUpdate=function(){var e=this.props,t=e.direction,i=e.layout,r=this.state,n=r.scrollOffset;if(r.scrollUpdateWasRequested&&null!=this._outerRef){var o=this._outerRef;if("horizontal"===t||"horizontal"===i)if("rtl"===t)switch(p()){case"negative":o.scrollLeft=-n;break;case"positive-ascending":o.scrollLeft=n;break;default:var a=o.clientWidth,s=o.scrollWidth;o.scrollLeft=s-a-n}else o.scrollLeft=n;else o.scrollTop=n}this._callPropsCallbacks()},P.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&c(this._resetIsScrollingTimeoutId)},P.render=function(){var e=this.props,t=e.children,i=e.className,n=e.direction,o=e.height,a=e.innerRef,c=e.innerElementType,u=e.innerTagName,d=e.itemCount,f=e.itemData,h=e.itemKey,p=void 0===h?v:h,m=e.layout,g=e.outerElementType,S=e.outerTagName,I=e.style,w=e.useIsScrolling,T=e.width,P=this.state.isScrolling,y="horizontal"===n||"horizontal"===m,b=y?this._onScrollHorizontal:this._onScrollVertical,_=this._getRangeToRender(),M=_[0],E=_[1],x=[];if(d>0)for(var D=M;D<=E;D++)x.push((0,s.createElement)(t,{data:f,key:p(D,f),index:D,isScrolling:w?P:void 0,style:this._getItemStyle(D)}));var R=l(this.props,this._instanceProps);return(0,s.createElement)(g||S||"div",{className:i,onScroll:b,ref:this._outerRefSetter,style:(0,r.A)({position:"relative",height:o,width:T,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:n},I)},(0,s.createElement)(c||u||"div",{children:x,ref:a,style:{height:y?"100%":R,pointerEvents:P?"none":void 0,width:y?R:"100%"}}))},P._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],i=e[1],r=e[2],n=e[3];this._callOnItemsRendered(t,i,r,n)}if("function"==typeof this.props.onScroll){var o=this.state,a=o.scrollDirection,s=o.scrollOffset,l=o.scrollUpdateWasRequested;this._callOnScroll(a,s,l)}},P._getRangeToRender=function(){var e=this.props,t=e.itemCount,i=e.overscanCount,r=this.state,n=r.isScrolling,o=r.scrollDirection,a=r.scrollOffset;if(0===t)return[0,0,0,0];var s=m(this.props,a,this._instanceProps),l=S(this.props,s,a,this._instanceProps),c=n&&"backward"!==o?1:Math.max(1,i),u=n&&"forward"!==o?1:Math.max(1,i);return[Math.max(0,s-c),Math.max(0,Math.min(t-1,l+u)),s,l]},t}(s.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var g=function(e,t){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},S=function(e,t,i){var r=e.itemSize,n=i.itemMetadataMap,o=i.lastMeasuredIndex;if(t>o){var a=0;if(o>=0){var s=n[o];a=s.offset+s.size}for(var l=o+1;l<=t;l++){var c=r(l);n[l]={offset:a,size:c},a+=c}i.lastMeasuredIndex=t}return n[t]},I=function(e,t,i,r,n){for(;r<=i;){var o=r+Math.floor((i-r)/2),a=S(e,o,t).offset;if(a===n)return o;a<n?r=o+1:a>n&&(i=o-1)}return r>0?r-1:0},w=function(e,t,i,r){for(var n=e.itemCount,o=1;i<n&&S(e,i,t).offset<r;)i+=o,o*=2;return I(e,t,Math.min(i,n-1),Math.floor(i/2),r)},T=function(e,t){var i=e.itemCount,r=t.itemMetadataMap,n=t.estimatedItemSize,o=t.lastMeasuredIndex,a=0;if(o>=i&&(o=i-1),o>=0){var s=r[o];a=s.offset+s.size}return a+(i-o-1)*n},P=m({getItemOffset:function(e,t,i){return S(e,t,i).offset},getItemSize:function(e,t,i){return i.itemMetadataMap[t].size},getEstimatedTotalSize:T,getOffsetForIndexAndAlignment:function(e,t,i,r,n,o){var a=e.direction,s=e.height,l=e.layout,c=e.width,u="horizontal"===a||"horizontal"===l?c:s,d=S(e,t,n),f=T(e,n),h=Math.max(0,Math.min(f-u,d.offset)),p=Math.max(0,d.offset-u+d.size+o);switch("smart"===i&&(i=r>=p-u&&r<=h+u?"auto":"center"),i){case"start":return h;case"end":return p;case"center":return Math.round(p+(h-p)/2);default:return r>=p&&r<=h?r:r<p?p:h}},getStartIndexForOffset:function(e,t,i){return function(e,t,i){var r=t.itemMetadataMap,n=t.lastMeasuredIndex;return(n>0?r[n].offset:0)>=i?I(e,t,n,0,i):w(e,t,Math.max(0,n),i)}(e,i,t)},getStopIndexForStartIndex:function(e,t,i,r){for(var n=e.direction,o=e.height,a=e.itemCount,s=e.layout,l=e.width,c="horizontal"===n||"horizontal"===s?l:o,u=S(e,t,r),d=i+c,f=u.offset+u.size,h=t;h<a-1&&f<d;)h++,f+=S(e,h,r).size;return h},initInstanceProps:function(e,t){var i={itemMetadataMap:{},estimatedItemSize:e.estimatedItemSize||50,lastMeasuredIndex:-1};return t.resetAfterIndex=function(e,r){void 0===r&&(r=!0),i.lastMeasuredIndex=Math.min(i.lastMeasuredIndex,e-1),t._getItemStyleCache(-1),r&&t.forceUpdate()},i},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){e.itemSize}})}}]);
//# sourceMappingURL=931.bundle.07e3fdf665ae0be6c508.js.map