(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1058:function(e,t,n){"use strict";var i=n(63),a=n(0),r=n.n(a),o=n(1),s=n.n(o),u=n(19),c=n.n(u),l=n(16),p=n(260),d=n(635),f=n(14),m=n(6),v=n.n(m),h=n(1069),y=n(38),g=(n(1080),n(272)),S=n(7),b=n.n(S),I=n(48),w=n.n(I),D=(0,b.a.import)("util/scrollToIndex"),E=l.a.redux.actions.setViewportSpecificData,O=Object(i.b)((function(e){var t=e.viewports,n=(t.viewportSpecificData[t.activeViewportIndex]||{}).cine;return{activeEnabledElement:g.a.runCommand("getActiveViewportEnabledElement"),activeViewportCineData:n||{isPlaying:!1,cineFrameRate:24},activeViewportIndex:e.viewports.activeViewportIndex}}),(function(e){return{dispatchSetViewportSpecificData:function(t,n){e(E(t,n))}}}),(function(e,t,n){var i=e.activeEnabledElement,a=e.activeViewportCineData,r=e.activeViewportIndex;return{cineFrameRate:a.cineFrameRate,isPlaying:a.isPlaying,onPlayPauseChanged:function(e){var n=w()(a);n.isPlaying=!n.isPlaying,t.dispatchSetViewportSpecificData(r,{cine:n})},onFrameRateChanged:function(e){var n=w()(a);n.cineFrameRate=e,t.dispatchSetViewportSpecificData(r,{cine:n})},onClickNextButton:function(){var e=b.a.getToolState(i,"stack");if(e&&e.data&&e.data.length){var t=e.data[0],n=t.currentImageIdIndex;n>=t.imageIds.length-1||D(i,n+1)}},onClickBackButton:function(){var e=b.a.getToolState(i,"stack");if(e&&e.data&&e.data.length){var t=e.data[0].currentImageIdIndex;0!==t&&D(i,t-1)}},onClickSkipToStart:function(){var e=b.a.getToolState(i,"stack");e&&e.data&&e.data.length&&D(i,0)},onClickSkipToEnd:function(){var e=b.a.getToolState(i,"stack");if(e&&e.data&&e.data.length){var t=e.data[0].imageIds.length-1;D(i,t)}}}}))(f.c),C=l.a.redux.actions,P=C.setLayout,T=C.setViewportActive,R=Object(i.b)((function(e){return{currentLayout:e.viewports.layout,activeViewportIndex:e.viewports.activeViewportIndex}}),(function(e){return{onChange:function(t,n,i){for(var a=[],r=t.row+1,o=t.col+1,s=r*o,u=0;u<s;u++){var c=n.viewports[u],l=c&&c.plugin;c&&c.vtk&&(l="cornerstone"),a.push({plugin:l})}var p={numRows:r,numColumns:o,viewports:a};i>s-1&&e(T(0)),e(P(p))}}}),(function(e,t){var n=t.onChange,i=e.currentLayout,a=e.activeViewportIndex;return{onChange:function(e){return n(e,i,a)}}}))(f.m),x=n(83);function U(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(e){function t(e){var n,i,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,a=k(t).call(this,e),n=!a||"object"!==V(a)&&"function"!=typeof a?A(i):a,j(A(n),"closeCineDialogIfNotApplicable",(function(){var e=n.props.dialog,t=n.state,i=t.dialogId,a=t.activeButtons,r=t.toolbarButtons;i&&(r.find((function(e){return e.options&&"CINE"===e.options.behavior}))||(e.dismiss({id:i}),a=a.filter((function(e){return e.options&&"CINE"!==e.options.behavior})),n.setState({dialogId:null,activeButtons:a})))}));var r=W.call(A(n));return n.state={toolbarButtons:r,activeButtons:[]},n.seriesPerStudyCount=[],n._handleBuiltIn=Y.bind(A(n)),n._onDerivedDisplaySetsLoadedAndCached=n._onDerivedDisplaySetsLoadedAndCached.bind(A(n)),n.updateButtonGroups(),n}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,e),n=t,(i=[{key:"updateButtonGroups",value:function(){var e=this,t=g.c.modules[d.a.PANEL];this.buttonGroups={left:[],right:[]},t.forEach((function(t){var n=t.module,i=Array.from(n.defaultContext);n.menuOptions.forEach((function(t){var n=Array.from(t.context||i),a=e.props.activeContexts.some((function(e){return n.includes(e)})),r="function"==typeof t.isDisabled&&t.isDisabled(e.props.studies,e.props.activeViewport);if(a&&!r){var o={value:t.target,icon:t.icon,bottomLabel:t.label,badgeNumber:t.badgeNumber,stateEvent:t.stateEvent},s=t.from||"right";e.buttonGroups[s].push(o)}}))})),this.buttonGroups.left.unshift({value:"studies",icon:"th-large",bottomLabel:this.props.t("Series")})}},{key:"componentDidMount",value:function(){document.addEventListener("deriveddisplaysetsloadedandcached",this._onDerivedDisplaySetsLoadedAndCached)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("deriveddisplaysetsloadedandcached",this._onDerivedDisplaySetsLoadedAndCached)}},{key:"_onDerivedDisplaySetsLoadedAndCached",value:function(){this.updateButtonGroups(),this.setState({toolbarButtons:W.call(this)})}},{key:"componentDidUpdate",value:function(e){var t=e.activeContexts!==this.props.activeContexts,n=e.studies,i=e.activeViewport,a=this.props.activeViewport,r=this.props.studies,o=this.seriesPerStudyCount,s=!1;if(n.length!==r.length||i!==a)s=!0;else for(var u=0;u<r.length;u++)if(r[u].series.length!==o[u]){o[u]=r[u].series.length,s=!0;break}s&&this.updateButtonGroups(),t&&this.setState({toolbarButtons:W.call(this)},this.closeCineDialogIfNotApplicable)}},{key:"render",value:function(){var e=this,t=G.call(this,this.state.toolbarButtons,this.state.activeButtons),n=function(t,n){e.props.handleSidePanelChange(t,n)},i=n.bind(this,"left"),a=n.bind(this,"right");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ToolbarRow"},r.a.createElement("div",{className:"pull-left m-t-1 p-y-1",style:{padding:"10px"}},r.a.createElement(f.v,{options:this.buttonGroups.left,value:this.props.selectedLeftSidePanel||"",onValueChanged:i})),t,r.a.createElement(R,null),r.a.createElement("div",{className:"pull-right m-t-1 rm-x-1",style:{marginLeft:"auto"}},this.buttonGroups.right.length&&r.a.createElement(f.v,{options:this.buttonGroups.right,value:this.props.selectedRightSidePanel||"",onValueChanged:a}))))}}])&&M(n.prototype,i),a&&M(n,a),t}(a.Component);function _(e,t){var n=e.CustomComponent;if("function"==typeof n){var i=t.map((function(e){return e.id})),a=i.includes(e.id);return r.a.createElement(n,{parentContext:this,toolbarClickCallback:F.bind(this),button:e,key:e.id,activeButtons:i,isActive:a})}}function q(e,t){var n,i=this,a=e.buttons.map((function(e){return e.onClick=F.bind(i,e),t.map((function(e){return e.id})).indexOf(e.id)>-1&&(n=e.id),e}));return r.a.createElement(f.i,{key:e.id,label:e.label,icon:e.icon,buttons:a,activeCommand:n})}function B(e,t){return r.a.createElement(f.I,{key:e.id,label:e.label,icon:e.icon,onClick:F.bind(this,e),isActive:t.map((function(e){return e.id})).includes(e.id)})}function G(e,t){var n=this;return e.map((function(e){var i=e.CustomComponent,a=e.buttons&&e.buttons.length;return i?_.call(n,e,t):a?q.call(n,e,t):B.call(n,e,t)}))}function F(e,t,n){var i=this.state.activeButtons;if(e.commandName){var a=Object.assign({evt:t},e.commandOptions);g.a.runCommand(e.commandName,a)}if("setToolActive"===e.type){var r=i.filter((function(e){var t=e.options;return t&&!t.togglable}));this.setState({activeButtons:[].concat(U(r),[e])})}else"builtIn"===e.type&&this._handleBuiltIn(e)}function W(){var e=this,t=g.c.modules[d.a.TOOLBAR],n=[];return t.forEach((function(t){var i=t.module,a=i.definitions,r=i.defaultContext;a.forEach((function(t){var i=t.context||r;e.props.activeContexts.includes(i)&&n.push(t)}))})),n}function Y(e){var t=this.props,n=t.dialog,i=t.t,a=this.state.dialogId,r=e.id,o=e.options;if("CINE"===o.behavior)if(a)n.dismiss({id:a}),this.setState((function(e){return{dialogId:null,activeButtons:U(e.activeButtons.filter((function(e){return e.id!==r})))}}));else{var s=document.querySelector(".ViewerMain").getBoundingClientRect(),u=s.x,c=s.y,l=n.create({content:O,defaultPosition:{x:u+20||0,y:c+20||0}});this.setState((function(t){return{dialogId:l,activeButtons:[].concat(U(t.activeButtons),[e])}}))}"DOWNLOAD_SCREEN_SHOT"===o.behavior&&g.a.runCommand("showDownloadViewportModal",{title:i("Download High Quality Image")})}j(N,"propTypes",{isLeftSidePanelOpen:s.a.bool.isRequired,isRightSidePanelOpen:s.a.bool.isRequired,selectedLeftSidePanel:s.a.string.isRequired,selectedRightSidePanel:s.a.string.isRequired,handleSidePanelChange:s.a.func.isRequired,activeContexts:s.a.arrayOf(s.a.string).isRequired,studies:s.a.array,t:s.a.func.isRequired,dialog:s.a.any,modal:s.a.any}),j(N,"defaultProps",{studies:[]});var J=Object(y.d)(["Common","ViewportDownloadForm"])(Object(f.T)(Object(f.S)(Object(x.e)(N))));var H=n(275),z=l.a.redux.actions.setActiveViewportSpecificData,Q=Object(i.b)(null,(function(e,t){return{onThumbnailClick:function(n){var i=function(e,t){return Array.isArray(e)&&e.reduce((function(e,t){var n=[];return t&&Array.isArray(t.displaySets)&&(n=t.displaySets),e.concat(n)}),[]).find((function(e){return e.displaySetInstanceUID===t}))||null}(t.studyMetadata,n),a=g.e.services,r=a.LoggerService,o=a.UINotificationService;if(i.isDerived){var s=i.Modality;if("SEG"===s&&g.e){var u=i.getSourceDisplaySet(t.studyMetadata,!0,(function(e){var t=e.message.includes("orthogonal")||e.message.includes("oblique")?"The segmentation has been detected as non coplanar,                If you really think it is coplanar,                please adjust the tolerance in the segmentation panel settings (at your own peril!)":e.message;r.error({error:e,message:t}),o.show({title:"DICOM Segmentation Loader",message:t,type:"error",autoClose:!1})}));i=u.referencedDisplaySet,u.activatedLabelmapPromise.then((function(e){var t=new CustomEvent("extensiondicomsegmentationsegselected",{detail:{activatedLabelmapIndex:e}}),n=new CustomEvent("segseriesselected");document.dispatchEvent(t),document.dispatchEvent(n)}))}else"SR"!==s&&(i=i.getSourceDisplaySet(t.studyMetadata));if(!i){var c=new Error("Referenced series for ".concat(s," dataset not present.")),l="Referenced series for ".concat(s," dataset not present.");r.error({error:c,message:l}),o.show({autoClose:!1,title:"Fail to load series",message:l,type:"error"})}}if(!i){var p=new Error("Source data not present");r.error({error:p,message:"Source data not present"}),o.show({autoClose:!1,title:"Fail to load series",message:"Source data not present",type:"error"})}if(!1===i.isSOPClassUIDSupported){var d=new Error("Modality not supported");r.error({error:d,message:"Modality not supported"}),o.show({autoClose:!1,title:"Fail to load series",message:"Modality not supported",type:"error"})}e(z(i))}}}))(H.a),K=(n(1081),n(1082),n(147)),X=n(209);n(1083);function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],i=!0,a=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){a=!0,r=e}finally{try{i||null==s.return||s.return()}finally{if(a)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var $=function(e){var t=e.children,n=e.onDrop,i=e.viewportIndex,a=e.className,o=Z(Object(X.d)({accept:"thumbnail",drop:function(e,t){var a=t.canDrop(),r=t.isOver();if(a&&r&&n){var o=e.StudyInstanceUID,s=e.displaySetInstanceUID;n({viewportIndex:i,StudyInstanceUID:o,displaySetInstanceUID:s})}},collect:function(e){return{highlighted:e.canDrop(),hovered:e.isOver()}}}),2),s=o[0],u=s.hovered,l=s.highlighted,p=o[1];return r.a.createElement("div",{className:c()("viewport-drop-target",{hovered:u},{highlighted:l},a),ref:p,"data-cy":"viewport-container-".concat(i)},t)};$.propTypes={children:s.a.node.isRequired,viewportIndex:s.a.number.isRequired,onDrop:s.a.func.isRequired,className:s.a.string};var ee=$;var te=n(1084),ne=n.n(te),ie=K.a.loadAndCacheDerivedDisplaySets,ae=function(e){var t=e.activeViewportIndex,n=e.availablePlugins,i=e.defaultPlugin,o=e.layout,s=e.numRows,u=e.numColumns,l=e.setViewportData,p=e.studies,d=e.viewportData,m=e.children,v=e.isStudyLoaded,h=100/s,y=100/u;if(!d||!d.length)return null;var g=Object(f.R)(),S=Object(f.P)();Object(a.useEffect)((function(){v&&d.forEach((function(e){ie(e,p,S,g)}))}),[p,d,v,g]);var b=r.a.useMemo((function(){return o.viewports.map((function(e,a){var o=d[a];if(!o)return null;var s={displaySet:o,studies:p},u=!e.plugin&&o&&o.plugin?o.plugin:e.plugin,f=function(e,t,n,i,a,o){if(e.displaySet){var s=i[a=a||o];if(!s)throw new Error("No Viewport Component available for name ".concat(a,".\n         Available plugins: ").concat(JSON.stringify(i)));return r.a.createElement(s,{viewportData:e,viewportIndex:t,children:[n]})}return r.a.createElement(ne.a,null)}(s,a,m,n,u,i);return r.a.createElement(ee,{onDrop:l,viewportIndex:a,className:c()("viewport-container",{active:t===a}),key:a},f)}))}),[o,d,p,m,n,i,l,t]);return r.a.createElement("div",{"data-cy":"viewprt-grid",style:{display:"grid",gridTemplateRows:"repeat(".concat(s,", ").concat(h,"%)"),gridTemplateColumns:"repeat(".concat(u,", ").concat(y,"%)"),height:"100%",width:"100%"}},b)};ae.propTypes={viewportData:s.a.array.isRequired,supportsDrop:s.a.bool.isRequired,activeViewportIndex:s.a.number.isRequired,layout:s.a.object.isRequired,availablePlugins:s.a.object.isRequired,setViewportData:s.a.func.isRequired,studies:s.a.array,children:s.a.node,defaultPlugin:s.a.string,numRows:s.a.number.isRequired,numColumns:s.a.number.isRequired},ae.defaultProps={viewportData:[],numRows:1,numColumns:1,layout:{viewports:[{}]},activeViewportIndex:0,supportsDrop:!0,availablePlugins:{DefaultViewport:function(e){return React.createElement("div",null,JSON.stringify(e))}},defaultPlugin:"defaultViewportPlugin"};var re=ae,oe=n(667),se=n.n(oe),ue=se()((function(e){var t={};return e.forEach((function(e){t[e.extensionId]=e.module})),t})),ce=Object(i.b)((function(e){var t,n=g.c.modules[d.a.VIEWPORT],i=ue(n);n.length&&(t=n[0].extensionId);var a=e.viewports;return{numRows:a.numRows,numColumns:a.numColumns,layout:a.layout,activeViewportIndex:a.activeViewportIndex,availablePlugins:i,defaultPlugin:t}}),null)(re),le=n(1060),pe=n.n(le);function de(e){return(de="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fe(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function me(e){return(me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ve(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(e,t){return(he=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ge=se()(pe.a),Se=function(e){function t(e){var n,i,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,a=me(t).call(this,e),n=!a||"object"!==de(a)&&"function"!=typeof a?ve(i):a,ye(ve(n),"fillEmptyViewportPanes",(function(){var e=[],t=n.props,i=t.layout,a=t.viewportSpecificData,r=n.state.displaySets;if(r&&r.length){for(var o=0;o<i.viewports.length;o++){var s=a[o];if(s&&s.StudyInstanceUID&&s.displaySetInstanceUID)e.push({StudyInstanceUID:s.StudyInstanceUID,displaySetInstanceUID:s.displaySetInstanceUID});else{var u=r.find((function(t){return!e.some((function(e){return e.displaySetInstanceUID===t.displaySetInstanceUID}))}))||r[r.length-1];e.push(u)}}e.forEach((function(e,t){e&&e.StudyInstanceUID&&n.setViewportData({viewportIndex:t,StudyInstanceUID:e.StudyInstanceUID,displaySetInstanceUID:e.displaySetInstanceUID})}))}})),ye(ve(n),"setViewportData",(function(e){var t=e.viewportIndex,i=e.StudyInstanceUID,a=e.displaySetInstanceUID,r=n.findDisplaySet(n.props.studies,i,a),o=g.e.services,s=o.LoggerService,u=o.UINotificationService;if(r.isDerived){var c=r.Modality;if("SEG"===c&&g.e){var l=r.getSourceDisplaySet(n.props.studies,!0,(function(e){var t=e.message.includes("orthogonal")||e.message.includes("oblique")?"The segmentation has been detected as non coplanar,              If you really think it is coplanar,              please adjust the tolerance in the segmentation panel settings (at your own peril!)":e.message;s.error({error:e,message:t}),u.show({title:"DICOM Segmentation Loader",message:t,type:"error",autoClose:!1})}));r=l.referencedDisplaySet,l.activatedLabelmapPromise.then((function(e){var t=new CustomEvent("extensiondicomsegmentationsegselected",{detail:{activatedLabelmapIndex:e}});document.dispatchEvent(t)}))}else"SR"!==c&&(r=r.getSourceDisplaySet(n.props.studies));if(!r){var p=new Error("Source data not present"),d="Source data not present";s.error({error:p,message:d}),u.show({autoClose:!1,title:"Fail to load series",message:d,type:"error"})}}if(!1===r.isSOPClassUIDSupported){var f=new Error("Modality not supported");s.error({error:f,message:"Modality not supported"}),u.show({autoClose:!1,title:"Fail to load series",message:"Modality not supported",type:"error"})}n.props.setViewportSpecificData(t,r)})),n.state={displaySets:[]},n}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&he(e,t)}(t,e),n=t,(i=[{key:"getDisplaySets",value:function(e){var t=[];return e.forEach((function(e){e.displaySets.forEach((function(e){e.plugin||(e.plugin="cornerstone"),t.push(e)}))})),t}},{key:"findDisplaySet",value:function(e,t,n){var i=e.find((function(e){return e.StudyInstanceUID===t}));if(i)return i.displaySets.find((function(e){return e.displaySetInstanceUID===n}))}},{key:"componentDidMount",value:function(){if(this.props.studies){var e=this.getDisplaySets(this.props.studies);this.setState({displaySets:e},this.fillEmptyViewportPanes)}}},{key:"componentDidUpdate",value:function(e){var t=e.layout.viewports.length,n=this.props.layout.viewports.length,i=this.props.layout.viewports.some((function(e){return!!e.vtk}));if(this.props.studies!==e.studies||n!==t&&!i){var a=this.getDisplaySets(this.props.studies);this.setState({displaySets:a},this.fillEmptyViewportPanes)}}},{key:"render",value:function(){var e=this.props.viewportSpecificData,t=ge(e);return r.a.createElement("div",{className:"ViewerMain"},this.state.displaySets.length&&r.a.createElement(ce,{isStudyLoaded:this.props.isStudyLoaded,studies:this.props.studies,viewportData:t,setViewportData:this.setViewportData}))}},{key:"componentWillUnmount",value:function(){var e=this,t=this.props.viewportSpecificData;Object.keys(t).forEach((function(t){e.props.clearViewportSpecificData(t)}))}}])&&fe(n.prototype,i),a&&fe(n,a),t}(a.Component);ye(Se,"propTypes",{activeViewportIndex:s.a.number.isRequired,studies:s.a.array,viewportSpecificData:s.a.object.isRequired,layout:s.a.object.isRequired,setViewportSpecificData:s.a.func.isRequired,clearViewportSpecificData:s.a.func.isRequired});var be=Se,Ie=l.a.redux.actions,we=Ie.setViewportSpecificData,De=Ie.clearViewportSpecificData,Ee=Object(i.b)((function(e){var t=e.viewports;return{activeViewportIndex:t.activeViewportIndex,layout:t.layout,viewportSpecificData:t.viewportSpecificData,viewports:e.viewports}}),(function(e){return{setViewportSpecificData:function(t,n){e(we(t,n))},clearViewportSpecificData:function(){e(De())}}}))(be),Oe=(n(1085),function(e){var t=e.from,n=e.isOpen,i=e.children,a=e.width,o="right"===t?"from-right":"from-left",s=a?{maxWidth:a,marginRight:n?"0":-1*Number.parseInt(a)}:{};return r.a.createElement("section",{style:s,className:c()("sidepanel",o,{"is-open":n})},i)});Oe.propTypes={from:s.a.string.isRequired,isOpen:s.a.bool.isRequired,children:s.a.node,width:s.a.string};var Ce=Oe;n(1086);function Pe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],i=!0,a=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){a=!0,r=e}finally{try{i||null==s.return||s.return()}finally{if(a)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Te=g.e.services.UIModalService,Re=function(e){var t=e.context,n=e.children;return r.a.createElement(f.g,{fallbackComponent:function(){return r.a.createElement("div",{className:"ErrorFallback",role:"alert"},r.a.createElement("p",null,"Error rendering ",t,". ",r.a.createElement("br",null)," Check the browser console for more details."))},context:t,onError:function(e,n){Te.show({content:function(){var i=Pe(Object(a.useState)(!1),2),o=i[0],s=i[1];return r.a.createElement("div",{className:"ErrorFallback",role:"alert"},r.a.createElement("div",{className:"ErrorBoundaryDialog"},r.a.createElement("h3",{className:"ErrorBoundaryDialogTitle"},t,": ",r.a.createElement("span",null,e.message))),r.a.createElement("button",{className:"btn btn-primary btn-sm ErrorBoundaryDialogButton",onClick:function(){return s((function(e){return!e}))}},r.a.createElement(f.k,{name:"chevron-down",className:c()("ErrorBoundaryDialogIcon",{opened:o})}),"Stack Trace"),o&&r.a.createElement("pre",null,n))},title:"Something went wrong in ".concat(t)})}},n)};Re.propTypes={context:s.a.string.isRequired,children:s.a.node.isRequired};var xe=Re,Ue=n(91),Ve=n(255),Me=n(277),ke=(n(1087),n(148)),Ae=n(8),Le=n.n(Ae),je=(n(1088),function(e){var t=e.studies,n=e.options;return Object(a.useEffect)((function(){var e=ke.a.StudyPrefetcher.getInstance(t,n),i=t.map((function(e){return K.a.studyMetadataManager.get(e.StudyInstanceUID)}));e.setStudies(i);var a=function(n){var i=n.detail,a=t.map((function(e){var t=K.a.studyMetadataManager.get(e.StudyInstanceUID),n=t.getDisplaySets();return(!n||n.length<1)&&e.displaySets.forEach((function(e){return t.addDisplaySet(e)})),t}));e.setStudies(a);var r=e.getStudy(i.image),o=e.getSeries(r,i.image),s=e.getInstance(o,i.image);if(r.displaySets&&r.displaySets.length>0){var u=e.getDisplaySetBySOPInstanceUID(r.displaySets,s).displaySetInstanceUID;e.prefetch(i.element,u)}},r=function(e){e.detail.element.addEventListener(Le.a.EVENTS.NEW_IMAGE,a)};return Le.a.events.addEventListener(Le.a.EVENTS.ELEMENT_ENABLED,r),function(){Le.a.events.removeEventListener(Le.a.EVENTS.ELEMENT_ENABLED,r),e.destroy()}}),[n,t]),null});je.propTypes={studies:s.a.array.isRequired,options:s.a.shape({enabled:s.a.bool,order:s.a.string,displaySetCount:s.a.number,preventCache:s.a.bool,prefetchDisplaySetsTimeout:s.a.number,includeActiveDisplaySet:s.a.bool})},je.defaultProps={options:{order:"closest",displaySetCount:1,preventCache:!1,prefetchDisplaySetsTimeout:300,includeActiveDisplaySet:!1}};var Ne=je,_e=l.a.classes.StudyLoadingListener,qe=function(e){var t=e.studies;return Object(a.useEffect)((function(){var e=_e.getInstance();return t&&t.length>0&&(e.clear(),e.addStudies(t)),function(){e.clear()}}),[t]),null};function Be(e,t,n,i,a,r,o){try{var s=e[r](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(i,a)}function Ge(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var r=e.apply(t,n);function o(e){Be(r,i,a,o,s,"next",e)}function s(e){Be(r,i,a,o,s,"throw",e)}o(void 0)}))}}function Fe(e){return(Fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function We(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Ye(e){return(Ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Je(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function He(e,t){return(He=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ze(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Qe=l.a.utils.studyMetadataManager,Ke=function(e){function t(e){var n,i,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,a=Ye(t).call(this,e),n=!a||"object"!==Fe(a)&&"function"!=typeof a?Je(i):a,ze(Je(n),"state",{isLeftSidePanelOpen:!0,isRightSidePanelOpen:!1,selectedRightSidePanel:"",selectedLeftSidePanel:"studies",thumbnails:[]}),ze(Je(n),"retrieveTimepoints",(function(e){l.a.log.info("retrieveTimepoints");var t=(new Date).toISOString(),i=(new Date).toISOString();return n.props.studies&&(i=new Date("1000-01-01").toISOString(),n.props.studies.forEach((function(e){var n=v()(e.StudyDate,"YYYYMMDD").toISOString();n<t&&(t=n),n>i&&(i=n)}))),Promise.resolve([{timepointType:"baseline",timepointId:"TimepointId",studyInstanceUIDs:n.props.studyInstanceUIDs,PatientID:e.PatientID,earliestDate:t,latestDate:i,isLocked:!1}])})),ze(Je(n),"storeTimepoints",(function(e){return l.a.log.info("storeTimepoints"),Promise.resolve()})),ze(Je(n),"updateTimepoint",(function(e,t){return l.a.log.info("updateTimepoint"),Promise.resolve()})),ze(Je(n),"removeTimepoint",(function(e){return l.a.log.info("removeTimepoint"),Promise.resolve()})),ze(Je(n),"disassociateStudy",(function(e,t){return l.a.log.info("disassociateStudy"),Promise.resolve()})),ze(Je(n),"onTimepointsUpdated",(function(e){n.props.onTimepointsUpdated&&n.props.onTimepointsUpdated(e)})),ze(Je(n),"onMeasurementsUpdated",(function(e){n.props.onMeasurementsUpdated&&n.props.onMeasurementsUpdated(e)}));var r=n.props.activeServer,o=Object.assign({},r),s={servicesManager:g.e};return l.a.measurements.MeasurementApi.setConfiguration({dataExchange:{retrieve:function(e){return p.a.retrieveMeasurements(e,s)},store:p.a.storeMeasurements},server:o}),l.a.measurements.TimepointApi.setConfiguration({dataExchange:{retrieve:n.retrieveTimepoints,store:n.storeTimepoints,remove:n.removeTimepoint,update:n.updateTimepoint,disassociate:n.disassociateStudy}}),n._getActiveViewport=n._getActiveViewport.bind(Je(n)),n}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&He(e,t)}(t,e),n=t,(i=[{key:"componentWillUnmount",value:function(){this.props.dialog&&this.props.dialog.dismissAll(),document.removeEventListener("segmentationLoadingError",this._updateThumbnails)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.studies,n=e.isStudyLoaded,i=l.a.measurements,a=i.TimepointApi,r=i.MeasurementApi,o=new a("TimepointId",{onTimepointsUpdated:this.onTimepointsUpdated}),s=new r(o,{onMeasurementsUpdated:this.onMeasurementsUpdated});if(this.currentTimepointId="TimepointId",this.timepointApi=o,this.measurementApi=s,t){var u=t[0]&&t[0].PatientID;o.retrieveTimepoints({PatientID:u}),n&&this.measurementApi.retrieveMeasurements(u,["TimepointId"]);var c=this.props.viewports[this.props.activeViewportIndex],p=c?c.displaySetInstanceUID:void 0;this.setState({thumbnails:tt(t,p)})}document.addEventListener("segmentationLoadingError",this._updateThumbnails.bind(this),!1)}},{key:"componentDidUpdate",value:function(e){var t=this,n=this.props,i=n.studies,a=n.isStudyLoaded,r=n.activeViewportIndex,o=n.viewports[r],s=o?o.displaySetInstanceUID:void 0,u=e.viewports[e.activeViewportIndex],c=u?u.displaySetInstanceUID:void 0;if(i===e.studies&&r===e.activeViewportIndex&&s===c||this.setState({thumbnails:tt(i,s),activeDisplaySetInstanceUID:s}),a&&a!==e.isStudyLoaded){var l=i[0]&&i[0].PatientID,p=this.currentTimepointId;this.timepointApi.retrieveTimepoints({PatientID:l}),this.measurementApi.retrieveMeasurements(l,[p]).then((function(){t._updateThumbnails()}))}}},{key:"_updateThumbnails",value:function(){var e=this.props,t=e.studies,n=e.activeViewportIndex,i=e.viewports[n],a=i?i.displaySetInstanceUID:void 0;this.setState({thumbnails:tt(t,a),activeDisplaySetInstanceUID:a})}},{key:"_getActiveViewport",value:function(){return this.props.viewports[this.props.activeViewportIndex]}},{key:"render",value:function(){var e,t,n=this;return g.c.modules[d.a.PANEL].forEach((function(i){i.module.components.forEach((function(i){i.id===n.state.selectedRightSidePanel?t=i.component:i.id===n.state.selectedLeftSidePanel&&(e=i.component)}))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ve.a.Consumer,null,(function(e){return r.a.createElement(Me.a.Consumer,null,(function(t){return r.a.createElement(x.c.Consumer,null,(function(n){return r.a.createElement(h.a,{linkText:n.appConfig.showStudyList?"Study List":void 0,linkPath:n.appConfig.showStudyList?"/":void 0,userManager:t},e&&e.createLogoComponentFn&&e.createLogoComponentFn(r.a))}))}))})),r.a.createElement(xe,{context:"ToolbarRow"},r.a.createElement(J,{activeViewport:this.props.viewports[this.props.activeViewportIndex],isLeftSidePanelOpen:this.state.isLeftSidePanelOpen,isRightSidePanelOpen:this.state.isRightSidePanelOpen,selectedLeftSidePanel:this.state.isLeftSidePanelOpen?this.state.selectedLeftSidePanel:"",selectedRightSidePanel:this.state.isRightSidePanelOpen?this.state.selectedRightSidePanel:"",handleSidePanelChange:function(e,t){var i=e&&e[0].toUpperCase()+e.slice(1),a="is".concat(i,"SidePanelOpen"),r="selected".concat(i,"SidePanel"),o=Object.assign({},n.state),s=o[a],u=o[r],c=u===t||null===t;o[r]=t||u,(!s||c)&&(o[a]=!o[a]),n.setState(o)},studies:this.props.studies})),r.a.createElement(x.c.Consumer,null,(function(e){return r.a.createElement(qe,{studies:n.props.studies})})),r.a.createElement("div",{className:"FlexboxLayout"},r.a.createElement(xe,{context:"LeftSidePanel"},r.a.createElement(Ce,{from:"left",isOpen:this.state.isLeftSidePanelOpen},e?r.a.createElement(e,{viewports:this.props.viewports,studies:this.props.studies,activeIndex:this.props.activeViewportIndex}):r.a.createElement(x.c.Consumer,null,(function(e){var t=e.appConfig.studyPrefetcher,i=n.state.thumbnails;return r.a.createElement(Q,{studies:i,studyMetadata:n.props.studies,showThumbnailProgressBar:t&&t.enabled&&t.displayProgress})})))),r.a.createElement("div",{className:c()("main-content")},r.a.createElement(xe,{context:"ViewerMain"},r.a.createElement(x.c.Consumer,null,(function(e){var t=e.appConfig.studyPrefetcher,i=n.props.studies;return t&&t.enabled&&r.a.createElement(Ne,{studies:i,options:t})})),r.a.createElement(Ee,{studies:this.props.studies,isStudyLoaded:this.props.isStudyLoaded}))),r.a.createElement(xe,{context:"RightSidePanel"},r.a.createElement(Ce,{from:"right",isOpen:this.state.isRightSidePanelOpen},t&&r.a.createElement(t,{isOpen:this.state.isRightSidePanelOpen,viewports:this.props.viewports,studies:this.props.studies,activeIndex:this.props.activeViewportIndex,activeViewport:this.props.viewports[this.props.activeViewportIndex],getActiveViewport:this._getActiveViewport})))))}}])&&We(n.prototype,i),a&&We(n,a),t}(a.Component);ze(Ke,"propTypes",{studies:s.a.arrayOf(s.a.shape({StudyInstanceUID:s.a.string.isRequired,StudyDate:s.a.string,PatientID:s.a.string,displaySets:s.a.arrayOf(s.a.shape({displaySetInstanceUID:s.a.string.isRequired,SeriesDescription:s.a.string,SeriesNumber:s.a.number,InstanceNumber:s.a.number,numImageFrames:s.a.number,Modality:s.a.string.isRequired,images:s.a.arrayOf(s.a.shape({getImageId:s.a.func.isRequired}))}))})),studyInstanceUIDs:s.a.array,activeServer:s.a.shape({type:s.a.string,wadoRoot:s.a.string}),onTimepointsUpdated:s.a.func,onMeasurementsUpdated:s.a.func,viewports:s.a.object.isRequired,activeViewportIndex:s.a.number.isRequired,isStudyLoaded:s.a.bool,dialog:s.a.object});var Xe=Object(f.S)(Ke),Ze=function(){var e=Ge(regeneratorRuntime.mark((function e(t,n){var i,a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=0,t.Modality&&!["SEG","SR","RTSTRUCT"].includes(t.Modality)&&(a=Qe.get(n.StudyInstanceUID),r=a.getDerivedDatasets({referencedSeriesInstanceUID:t.SeriesInstanceUID}),i=r.length),e.abrupt("return",i>0);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),$e=function(){var e=Ge(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],"SEG"===t.Modality){e.next=10;break}if(!t.inconsistencyWarnings){e.next=4;break}return e.abrupt("return",t.inconsistencyWarnings);case 4:t.reconstructionIssues&&0!==t.reconstructionIssues.length&&(t.reconstructionIssues.forEach((function(e){switch(e){case Ue.a.DATASET_4D:n.push("The dataset is 4D.");break;case Ue.a.VARYING_IMAGESDIMENSIONS:n.push("The dataset frames have different dimensions (rows, columns).");break;case Ue.a.VARYING_IMAGESCOMPONENTS:n.push("The dataset frames have different components (Sample per pixel).");break;case Ue.a.VARYING_IMAGESORIENTATION:n.push("The dataset frames have different orientation.");break;case Ue.a.IRREGULAR_SPACING:n.push("The dataset frames have different pixel spacing.");break;case Ue.a.MULTIFFRAMES:n.push("The dataset is a multiframes.")}})),n.push("The datasets is not a reconstructable 3D volume. MPR mode is not available.")),t.missingFrames&&(!t.reconstructionIssues||t.reconstructionIssues&&!t.reconstructionIssues.find((function(e){return e===Ue.a.DATASET_4D})))&&n.push("The datasets is missing frames: "+t.missingFrames+"."),!1===t.isSOPClassUIDSupported&&n.push("The datasets is not supported."),t.inconsistencyWarnings=n,e.next=11;break;case 10:t.loadError&&(n.push(t.segLoadErrorMessagge),t.inconsistencyWarnings=n);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),et=function(e,t,n){var i=!1,a=e.displaySetInstanceUID;if("SEG"!==e.Modality&&"RTSTRUCT"!==e.Modality&&"SR"!==e.Modality)i=n===a;else if("SR"===e.Modality){if(!(i=n===a)&&e.getSourceDisplaySet){var r=e.getSourceDisplaySet(t,!1);if(r&&0!==r.length)for(var o=0;o<r.length;o++)if(r[o].displaySetInstanceUID===n){i=!0;break}}}else if(e.getSourceDisplaySet)if("SEG"===e.Modality){var s=e.getSourceDisplaySet(t,!1).referencedDisplaySet;i=!!s&&n===s.displaySetInstanceUID}else{var u=e.getSourceDisplaySet(t,!1);i=!!u&&n===u.displaySetInstanceUID}return i},tt=function(e,t){return e.map((function(n){return{StudyInstanceUID:n.StudyInstanceUID,thumbnails:n.displaySets.map((function(i){var a,r,o=i.displaySetInstanceUID,s=i.SeriesDescription,u=i.numImageFrames,c=i.SeriesNumber;if(i.Modality&&"SEG"===i.Modality)r="SEG";else if(i.Modality&&"SR"===i.Modality)r="SR";else if(i.images&&i.images.length){var l=Math.floor(i.images.length/2);a=i.images[l].getImageId()}else r=!1===i.isSOPClassUIDSupported?i.SOPClassUIDNaturalized:i.Modality?i.Modality:"UN";var p=$e(i),d=Ze(i,n);return{active:et(i,e,t),imageId:a,altImageText:r,displaySetInstanceUID:o,SeriesDescription:s,numImageFrames:u,SeriesNumber:c,hasWarnings:p,hasDerivedDisplaySets:d}}))}}))},nt=l.a.redux.actions,it=nt.setTimepoints,at=nt.setMeasurements,rt=function(e){return e.servers.find((function(e){return!0===e.active}))},ot=Object(i.b)((function(e){var t=e.viewports,n=e.servers;return{viewports:t.viewportSpecificData,activeViewportIndex:t.activeViewportIndex,activeServer:rt(n)}}),(function(e){return{onTimepointsUpdated:function(t){e(it(t))},onMeasurementsUpdated:function(t){e(at(t))}}}))(Xe);t.a=ot},1080:function(e,t,n){},1081:function(e,t,n){},1082:function(e,t,n){},1083:function(e,t,n){},1084:function(e,t){},1085:function(e,t,n){},1086:function(e,t,n){},1087:function(e,t,n){},1088:function(e,t,n){}}]);
//# sourceMappingURL=ConnectedStandaloneRouting~IHEInvokeImageDisplay~ViewerLocalFileData~ViewerRouting.bundle.93737985e234f27edd4a.js.map