(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],_=0,d=[];_<c.length;_++)a=c[_],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={index:0},o={index:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0b1d3344":"f03fea76","chunk-2efdd084":"f55b74a3","chunk-4b407e34":"d7da6da1","chunk-55c68b75":"49a201c5","chunk-7573d198":"01ab2352","chunk-9460a344":"2a575d3e"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0b1d3344":1,"chunk-2efdd084":1,"chunk-4b407e34":1,"chunk-55c68b75":1,"chunk-7573d198":1,"chunk-9460a344":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0b1d3344":"62513ddb","chunk-2efdd084":"fc6960b4","chunk-4b407e34":"803e876a","chunk-55c68b75":"f1ad4287","chunk-7573d198":"fc0be350","chunk-9460a344":"845e2094"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],_=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(_===r||_===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],_=u.getAttribute("data-href");if(_===r||_===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],l.parentNode.removeChild(l),n(i)},l.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,_=document.createElement("script");_.charset="utf-8",_.timeout=120,s.nc&&_.setAttribute("nonce",s.nc),_.src=c(e);var d=new Error;u=function(t){_.onerror=_.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:_})}),12e4);_.onerror=_.onload=u,document.head.appendChild(_)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],_=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var l=_;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"036e":function(e,t){var n=0;function r(e){return o(a(i(e)))}function a(e){return s(u(c(e),8*e.length))}function o(e){for(var t,r=n?"0123456789ABCDEF":"0123456789abcdef",a="",o=0;o<e.length;o++)t=e.charCodeAt(o),a+=r.charAt(t>>>4&15)+r.charAt(15&t);return a}function i(e){var t,n,r="",a=-1;while(++a<e.length)t=e.charCodeAt(a),n=a+1<e.length?e.charCodeAt(a+1):0,t>=55296&&t<=56319&&n>=56320&&n<=57343&&(t=65536+((1023&t)<<10)+(1023&n),a++),t<=127?r+=String.fromCharCode(t):t<=2047?r+=String.fromCharCode(192|t>>>6&31,128|63&t):t<=65535?r+=String.fromCharCode(224|t>>>12&15,128|t>>>6&63,128|63&t):t<=2097151&&(r+=String.fromCharCode(240|t>>>18&7,128|t>>>12&63,128|t>>>6&63,128|63&t));return r}function c(e){var t,n=Array(e.length>>2);for(t=0;t<n.length;t++)n[t]=0;for(t=0;t<8*e.length;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<24-t%32;return n}function s(e){for(var t="",n=0;n<32*e.length;n+=8)t+=String.fromCharCode(e[n>>5]>>>24-n%32&255);return t}function u(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var n=Array(80),r=1732584193,a=-271733879,o=-1732584194,i=271733878,c=-1009589776,s=0;s<e.length;s+=16){for(var u=r,m=a,p=o,b=i,h=c,g=0;g<80;g++){n[g]=g<16?e[s+g]:f(n[g-3]^n[g-8]^n[g-14]^n[g-16],1);var E=l(l(f(r,5),_(g,a,o,i)),l(l(c,n[g]),d(g)));c=i,i=o,o=f(a,30),a=r,r=E}r=l(r,u),a=l(a,m),o=l(o,p),i=l(i,b),c=l(c,h)}return[r,a,o,i,c]}function _(e,t,n,r){return e<20?t&n|~t&r:e<40?t^n^r:e<60?t&n|t&r|n&r:t^n^r}function d(e){return e<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514}function l(e,t){var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16);return r<<16|65535&n}function f(e,t){return e<<t|e>>>32-t}var m={digest:function(e){if(null==e||""===e)return e;var t=r(e);return t.toUpperCase()}};t.MessageDigest=m},"0613":function(e,t,n){"use strict";n("13d5"),n("d3b7"),n("ddb0"),n("ac1f"),n("5319");var r=n("5502"),a={user:function(e){return e.user.user},appId:function(e){return e.auth.appId},jsTicketId:function(e){return e.auth.jsTicketId},cachedViews:function(e){return e.cache.cachedViews},plant:function(e){return e.plant.plant},isChecked:function(e){return e.auth.isChecked},userType:function(e){var t,n;return(null===(t=e.user)||void 0===t||null===(n=t.user)||void 0===n?void 0:n.userType)||"1"}},o=a,i=n("706b"),c=i.keys().reduce((function(e,t){var n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=i(t);return n&&(e[n]=r["default"]),e}),{});t["a"]=Object(r["a"])({modules:c,getters:o})},1035:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return _})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return l}));n("5530"),n("e9c4"),n("0d03");var r=n("e293"),a=n("bc3a"),o=n.n(a),i=n("d70b"),c=n("0613"),s=function(e){return o.a.post(i["k"],null,{params:{code:e,wxAppId:i["m"],ownerId:i["m"],appKey:i["a"]}})},u=function(e,t,n){return r["a"].get("",{_method:"bf.mobile.region.baoj.frm.login",wxUserId:c["a"].state.user.wxUserId,phone:e,verifyCode:t})},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c["a"].getters.user.farmer.farmer.stationUniqueCd;return r["a"].get("",{_method:"bf.mobile.region.yy.as.rop.proxy.send.ms",methodName:"cm.pi.param.years.get",orgUniqueCd:e,regionCd:i["l"]})},d=function(e){return r["a"].get("",{_method:"frm.region.user.info",userId:e})},l=function(e,t,n,a){return r["a"].get("",{_method:i["f"],methodName:"msg/user/list",pageNum:e,pageSize:t,typeId:n,bfUserinfoId:a})}},4341:function(e,t,n){"use strict";n.r(t);n("caad"),n("2532"),n("c975"),n("a434"),n("4de4"),n("d3b7");var r={cachedViews:[]},a=["Login","Start","Identity","ArticleDetail","BarnDetail","MessageDetail","OrderDetail","EmployDetail","TransPortDetail","SchoolDetail","InformationDetail","DiseasesDetail","SpecialtyDetail","AddQuestion","QuestionDetail","Contract","ContractConfirm","TechnicalAdd","TodoDetail","TodoAdd","TodoHistory","TodoEdit","CoopEmpOrderDetail","LandRegister","LandRegisterDetail"],o={ADD_CACHED_VIEW:function(e,t){e.cachedViews.includes(t)||a.includes(t)||"Login"!==t&&e.cachedViews.push(t)},DEL_CACHED_VIEW:function(e,t){var n=e.cachedViews.indexOf(t);n>-1&&e.cachedViews.splice(n,1)},DEL_CACHED_VIEWS:function(e,t){e.cachedViews.filter((function(e){return-1===t.indexOf(e)}))},DEL_ALL_CACHED_VIEW:function(e){e.cachedViews=[]}},i={};t["default"]={namespaced:!0,state:r,mutations:o,actions:i}},"4ee2":function(e,t,n){},5402:function(e,t,n){"use strict";n.r(t);var r={plant:{sign:"",sign_base30:[],sign_image:[]}},a={SET_SIGN:function(e,t){e.plant.sign=t},SET_SIGN_BASE30:function(e,t){e.plant.sign_base30=t},SET_SIGN_IMAGE:function(e,t){e.plant.sign_image=t},REMOVE_SIGN:function(e){e.plant.sign="",e.plant.sign_base30=[],e.plant.sign_image=[]}},o={};t["default"]={namespaced:!0,state:r,mutations:a,actions:o}},"700b":function(e,t,n){},"706b":function(e,t,n){var r={"./auth.ts":"cdd0","./cache.ts":"4341","./plant.ts":"5402","./user.ts":"9dba"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="706b"},"8fd3":function(e,t,n){"use strict";n("c279")},"9dba":function(e,t,n){"use strict";n.r(t);var r=n("5530"),a=(n("e7e5"),n("d399")),o=n("b85c"),i=n("1da1"),c=(n("96cf"),n("d3b7"),n("e9c4"),n("277d"),n("1035")),s={user:null,userId:null,wxUserId:""},u={SET_USER:function(e,t){e.user=t},SET_OPRID:function(e,t){e.oprId=t},SET_WX_USER_ID:function(e,t){e.wxUserId=t}},_={login:function(e,t){var n=e.commit,r=t.phone,a=t.code,o=t.userType;return new Promise((function(e,t){Object(c["b"])(r,a,o).then((function(t){var r,a,o;"2"==(null===t||void 0===t||null===(r=t.user)||void 0===r?void 0:r.userType)?a=(null===t||void 0===t?void 0:t.user)||{}:a=(null===t||void 0===t||null===(o=t.user)||void 0===o?void 0:o.customInfo)||{};n("SET_USER",a),window.sessionStorage.setItem("user",JSON.stringify(a)),n("SET_OPRID",t.user.id),window.sessionStorage.setItem("oprId",t.user.id),e(t)}))["catch"]((function(e){t(e)}))}))},getUserInfosById:function(e,t){var n=e.commit,s=(e.state,t.userId);return new Promise((function(e,t){Object(c["e"])(s).then(function(){var s=Object(i["a"])(regeneratorRuntime.mark((function i(s){var u,_,d,l,f,m;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!(Array.isArray(s)&&s.length>0)){i.next=31;break}u={},_=Object(o["a"])(s),i.prev=3,_.s();case 5:if((d=_.n()).done){i.next=19;break}if(l=d.value,"1"!==l.usertype){i.next=16;break}return a["a"].loading("获取业务年度"),i.next=11,Object(c["d"])(null===(f=l.farmer)||void 0===f?void 0:f.stationUniqueCd);case 11:m=i.sent,l.farmer=Object(r["a"])(Object(r["a"])({},l.farmer),m),u.farmer=l,i.next=17;break;case 16:"2"===l.usertype?u.admin=l:"3"===l.usertype&&(u.employee=l);case 17:i.next=5;break;case 19:i.next=24;break;case 21:i.prev=21,i.t0=i["catch"](3),_.e(i.t0);case 24:return i.prev=24,_.f(),i.finish(24);case 27:n("SET_USER",u),e(u),i.next=32;break;case 31:t(new Error("查无用户信息"));case 32:case"end":return i.stop()}}),i,null,[[3,21,24,27]])})));return function(e){return s.apply(this,arguments)}}())["catch"]((function(e){t(e)}))}))}};t["default"]={namespaced:!0,state:s,mutations:u,actions:_}},a348:function(module,__webpack_exports__,__webpack_require__){"use strict";var vant_es_dialog_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("e17f"),vant_es_dialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("2241"),F_hs_hs_workproject_bf_baoji_yn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("1da1"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("96cf"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("d81d"),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("b0c0"),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("caad"),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("2532"),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__),vue__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("7a23"),vue_router__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("6c02"),vuex__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("5502"),_tencentcloud_call_uikit_vue__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("f4d1"),_config__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("d70b");__webpack_exports__["a"]=Object(vue__WEBPACK_IMPORTED_MODULE_8__["n"])({name:"App",components:{TUICallKit:_tencentcloud_call_uikit_vue__WEBPACK_IMPORTED_MODULE_11__["a"]},setup:function setup(){var route=Object(vue_router__WEBPACK_IMPORTED_MODULE_9__["c"])(),store=Object(vuex__WEBPACK_IMPORTED_MODULE_10__["b"])(),user=Object(vue__WEBPACK_IMPORTED_MODULE_8__["e"])((function(){return store.getters.user})),tabList=Object(vue__WEBPACK_IMPORTED_MODULE_8__["e"])((function(){return"1"==userType.value?[{text:"首页",icon:"wap-home-o",name:"home"},{text:"消息",icon:"chat-o",name:"message"},{text:"我的",icon:"manager-o",name:"me"}]:[{text:"首页",icon:"wap-home-o",name:"home"},{text:"我的",icon:"manager-o",name:"me"}]})),sessionUser=window.sessionStorage.getItem("user"),appId=window.sessionStorage.getItem("appId"),jsTicketId=window.sessionStorage.getItem("jsTicketId"),wxUserId=window.sessionStorage.getItem("wxUserId"),isChecked=window.sessionStorage.getItem("isChecked");sessionUser&&store.commit("user/SET_USER",JSON.parse(sessionUser)),appId&&store.commit("auth/SET_APP_ID",appId),jsTicketId&&store.commit("auth/SET_JS_TICKET_ID",jsTicketId),wxUserId&&store.commit("user/SET_WX_USER_ID",wxUserId),isChecked&&store.commit("user/SET_IS_CHECKED",eval(isChecked));var cachedViews=Object(vue__WEBPACK_IMPORTED_MODULE_8__["e"])((function(){return store.getters.cachedViews.map((function(e){return e}))})),activityNum=Object(vue__WEBPACK_IMPORTED_MODULE_8__["K"])("home"),showTab=Object(vue__WEBPACK_IMPORTED_MODULE_8__["K"])(!1);Object(vue__WEBPACK_IMPORTED_MODULE_8__["Y"])((function(){activityNum.value=(route.name||"home").toLowerCase(),showTab.value=route.meta.showTab||!1}));var isShowTUICallKit=Object(vue__WEBPACK_IMPORTED_MODULE_8__["K"])(!1),userType=Object(vue__WEBPACK_IMPORTED_MODULE_8__["e"])((function(){return store.getters.userType})),userID=Object(vue__WEBPACK_IMPORTED_MODULE_8__["e"])((function(){var e,t;return"1"==userType.value?null===(e=user.value)||void 0===e?void 0:e.frmCd:"2"==userType.value?null===(t=user.value)||void 0===t?void 0:t.staffId:""})),userSig=Object(vue__WEBPACK_IMPORTED_MODULE_8__["K"])(""),callUserID=Object(vue__WEBPACK_IMPORTED_MODULE_8__["K"])(""),VideoDisplayMode={CONTAIN:"contain",COVER:"cover",FILL:"fill"},VideoResolution={RESOLUTION_480P:"480p",RESOLUTION_720P:"720p",RESOLUTION_1080P:"1080p"},init=function(){var e=Object(F_hs_hs_workproject_bf_baoji_yn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_tencentcloud_call_uikit_vue__WEBPACK_IMPORTED_MODULE_11__["b"].init({SDKAppID:_config__WEBPACK_IMPORTED_MODULE_12__["c"],userID:userID.value,userSig:userSig.value});case 3:console.log("初始化完成"),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),alert("初始化失败，原因：".concat(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),call=function(){var e=Object(F_hs_hs_workproject_bf_baoji_yn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return isShowTUICallKit.value=!0,callUserID.value=t,e.prev=2,e.next=5,_tencentcloud_call_uikit_vue__WEBPACK_IMPORTED_MODULE_11__["b"].call({userID:callUserID.value,type:1===n?n:_tencentcloud_call_uikit_vue__WEBPACK_IMPORTED_MODULE_11__["c"].VIDEO_CALL});case 5:e.next=12;break;case 7:e.prev=7,e.t0=e["catch"](2),console.log("error",e.t0),r="".concat(e.t0).includes("消息发送方或接收方 UserID 无效或不存在")?"拨打失败，原因：对方暂不在线, 请稍后重拨":"拨打失败，原因：".concat(e.t0),vant_es_dialog__WEBPACK_IMPORTED_MODULE_1__["a"].alert({message:r}).then((function(){}));case 12:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t,n){return e.apply(this,arguments)}}(),beforeCalling=function(e,t){console.log("通话即将开始",e,t),isShowTUICallKit.value=!0},afterCalling=function(){console.log("通话已结束"),isShowTUICallKit.value=!1},onMinimized=function(e,t){console.log("最小化状态变更: "+e+" -> "+t)},videoCall=function(e,t){call(e,t)};return Object(vue__WEBPACK_IMPORTED_MODULE_8__["H"])("videoCall",videoCall),{cachedViews:cachedViews,activityNum:activityNum,showTab:showTab,userType:userType,tabList:tabList,isShowTUICallKit:isShowTUICallKit,userID:userID,VideoDisplayMode:VideoDisplayMode,VideoResolution:VideoResolution,init:init,call:call,beforeCalling:beforeCalling,afterCalling:afterCalling,onMinimized:onMinimized}}})},adf6:function(e,t,n){},b927:function(e,t,n){"use strict";n("700b")},c279:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"app-container"};function o(e,t,n,o,i,c){var s=Object(r["N"])("router-view");return Object(r["F"])(),Object(r["i"])("div",a,[Object(r["j"])("div",{class:"tui-wrap",style:Object(r["w"])([{width:"100%",height:"100vh"},{"z-index":e.isShowTUICallKit?"9999":"-9999"}])},null,4),Object(r["m"])(s,null,{default:Object(r["Z"])((function(t){var n=t.Component;return[(Object(r["F"])(),Object(r["g"])(r["b"],{include:e.cachedViews},[(Object(r["F"])(),Object(r["g"])(Object(r["P"])(n)))],1032,["include"]))]})),_:1})])}var i=n("a348"),c=(n("b927"),n("8fd3"),n("6b0d")),s=n.n(c);const u=s()(i["a"],[["render",o],["__scopeId","data-v-3b276546"]]);var _=u,d=(n("e7e5"),n("d399")),l=n("1da1"),f=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("4795"),n("e9c4"),n("c975"),n("b0c0"),n("4de4"),n("ac1f"),n("1276"),n("498a"),n("6c02")),m=n("0613"),p=n("1035"),b=Object(f["a"])({history:Object(f["b"])(),routes:[{path:"/",redirect:"/testLogin"},{path:"/home",name:"Home",component:function(){return n.e("chunk-7573d198").then(n.bind(null,"b3d7"))},meta:{title:"首页",showTab:!0}},{path:"/testLogin",name:"testLogin",component:function(){return n.e("chunk-55c68b75").then(n.bind(null,"9b67"))},meta:{title:"新疆农业大学校园统一支付平台",showTab:!0}},{path:"/testIndex",name:"testIndex",component:function(){return n.e("chunk-2efdd084").then(n.bind(null,"d4b0"))},meta:{title:"新疆农业大学校园统一支付平台",showTab:!0}},{path:"/testPay",name:"testPay",component:function(){return n.e("chunk-4b407e34").then(n.bind(null,"e590"))},meta:{title:"统一支付平台",showTab:!0}},{path:"/testPayDetail",name:"testPayDetail",component:function(){return n.e("chunk-0b1d3344").then(n.bind(null,"d351"))},meta:{title:"统一支付平台",showTab:!0}},{path:"/paySuccess",name:"paySuccess",component:function(){return n.e("chunk-9460a344").then(n.bind(null,"a536"))},meta:{title:"统一支付平台",showTab:!0}},{path:"/:catchAll(.*)",redirect:"/testLogin",hidden:!0}],scrollBehavior:function(e,t,n){return new Promise((function(e,t){n?e(n):setTimeout((function(){e({left:0,top:0})}),0)}))}});b.beforeEach(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,o,i,c,s,u,_,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.query.code,o=m["a"].getters,i=o.appId,c=o.jsTicketId,s=o.isChecked,!a){e.next=10;break}if(i&&c){e.next=10;break}if(s){e.next=10;break}return d["a"].loading({message:"加载中...",forbidClick:!0}),e.next=8,Object(p["a"])(a).then((function(e){console.log("getUserByWxCode",e),d["a"].clear();var t=e.data;if(t.userSession){var n,r=t.userSession.user;n=(null===r||void 0===r?void 0:r.customInfo)||{},m["a"].commit("user/SET_USER",n),window.sessionStorage.setItem("user",JSON.stringify(n)),m["a"].commit("user/SET_OPRID",t.userSession.user.customInfo.id),window.sessionStorage.setItem("oprId",t.userSession.user.customInfo.id)}m["a"].commit("user/SET_WX_USER_ID",t.wxUserId),window.sessionStorage.setItem("wxUserId",t.wxUserId),m["a"].commit("auth/SET_APP_ID",t.appId),window.sessionStorage.setItem("appId",t.appId),m["a"].commit("auth/SET_JS_TICKET_ID",t.jsTicketId),window.sessionStorage.setItem("jsTicketId",t.jsTicketId)}))["catch"]((function(e){console.log(e)}));case 8:m["a"].commit("auth/SET_IS_CHECKED",!0),window.sessionStorage.setItem("isChecked","true");case 10:u=["Home","Message","Me","testLogin","testIndex","testPay","testPayDetail","paySuccess"],-1!==u.indexOf(t.name)||m["a"].getters.user||r({name:"testLogin"}),t.meta.title?document.title=t.meta.title:document.title="新疆农业大学校园统一支付平台",n.name&&(_=n.path.split("/").filter((function(e){return e&&e.trim()})),l=t.path.split("/").filter((function(e){return e&&e.trim()})),"Login"===t.name?m["a"].commit("cache/DEL_ALL_CACHED_VIEW"):l.length>=_.length?m["a"].commit("cache/ADD_CACHED_VIEW",n.name):m["a"].commit("cache/DEL_CACHED_VIEW",n.name),"ServiceDetail"===n.name&&"ServiceAddressSelect"!==t.name&&m["a"].commit("service/REMOVE_SERVICE")),r();case 15:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var h=b,g=n("9483");Object(g["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var E=n("1157"),v=n.n(E);window.$=v.a,window.jQuery=v.a;v.a;var O=n("b85c"),D=(n("1f87"),n("510b")),I=(n("77f8"),n("dc0f")),w=(n("e17f"),n("2241")),C=(n("414a"),n("7a823")),T=(n("4467"),n("c36e")),P=(n("1075"),n("f600")),j=(n("4582"),n("0a7d")),y=(n("be39"),n("efa0")),M=(n("2b28"),n("9ed2")),k=(n("f1dc"),n("6e47")),S=(n("ac1e"),n("543e")),A=(n("480b"),n("a37c")),U=(n("91d5"),n("f0ca")),L=(n("4142"),n("39d1")),R=(n("5f1a"),n("a3e2")),K=(n("5f5f"),n("f253")),x=(n("6d73"),n("473d")),B=(n("e930"),n("8f80")),W=(n("0ec5"),n("21ab")),N=(n("3df5"),n("2830")),V=(n("46de"),n("a822")),Y=(n("d1cf"),n("ee83")),q=(n("afd4"),n("ca19")),H=(n("3c32"),n("417e")),F=(n("a909"),n("3acc")),J=(n("4ddd"),n("9f14")),$=(n("a44c"),n("e27c")),G=(n("8a58"),n("e41f")),z=(n("61ae"),n("d314")),Q=(n("09d3"),n("2d6d")),X=(n("0cc8"),n("3104")),Z=(n("c3a6"),n("ad06")),ee=(n("ab71"),n("58e6")),te=(n("8fec"),n("7bd9")),ne=(n("5246"),n("6b41")),re=(n("5852"),n("d961")),ae=(n("2994"),n("2bdd")),oe=(n("c194"),n("7744")),ie=(n("0653"),n("34e9")),ce=(n("4056"),n("44bf")),se=(n("be7f"),n("565f")),ue=(n("38d5"),n("772a")),_e=(n("4d48"),n("d1e1")),de=(n("81e6"),n("9ffb")),le=(n("4b0a"),n("2bb1")),fe=(n("7844"),n("5596")),me=(n("66b9"),n("b650")),pe=(n("da3c"),n("0b33")),be=(n("bda7"),n("5e46")),he=(n("a52c"),n("2ed4")),ge=(n("537a"),n("ac28")),Ee=(n("9cb7"),n("66fd")),ve=[Ee["a"],ge["a"],he["a"],be["b"],pe["b"],me["b"],fe["b"],le["b"],de["a"],_e["a"],ue["a"],se["b"],ce["b"],ie["a"],oe["b"],ae["a"],re["a"],ne["a"],te["a"],ee["a"],Z["b"],X["b"],Q["a"],z["a"],G["b"],$["a"],J["a"],F["a"],H["a"],q["a"],Y["a"],V["a"],N["a"],W["a"],B["a"],x["a"],K["b"],R["b"],L["a"],U["a"],A["a"],S["b"],k["b"],M["a"],y["a"],j["a"],P["a"],T["a"],C["a"],w["a"],I["a"],D["a"]];function Oe(e){var t,n=Object(O["a"])(ve);try{for(n.s();!(t=n.n()).done;){var r=t.value;e.use(r)}}catch(a){n.e(a)}finally{n.f()}}n("99af"),n("e323"),n("0d03");var De=n("5a0c"),Ie=n.n(De);function we(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY年MM月DD日 HH:mm";return Ie()(e).format(t)}var Ce=n("d70b");function Te(e){e.config.globalProperties.$formatDate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return we(e,t)},e.config.globalProperties.$filters={pictureUrl2:function(e){return"".concat(Ce["j"],"/").concat(e,"_0x0")},formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;switch(t){case 0:return Ie()(e).format("MM月DD日");case 1:return Ie()(e).format("YYYY-MM-DD");case 2:return Ie()(e).format("YYYY年MM月DD日");case 3:return Ie()(e).format("YYYYMMDD");default:return Ie()(e).format("YYYY-MM-DD HH:mm:ss")}}}}function Pe(e){e.config.globalProperties.$goTo=function(e,t){h.push({name:e,query:t||{}})},e.config.globalProperties.$goBack=function(){h.back()}}function je(e){e.use(Oe),e.use(Te),e.use(Pe)}n("4ee2"),n("adf6");var ye=Object(r["f"])(_);ye.use(h),ye.use(m["a"]),ye.use(je),ye.mount("#app")},cdd0:function(e,t,n){"use strict";n.r(t);var r={appId:"",jsTicketId:"",isChecked:!1},a={SET_APP_ID:function(e,t){e.appId=t},SET_JS_TICKET_ID:function(e,t){e.jsTicketId=t},SET_IS_CHECKED:function(e,t){e.isChecked=t}};t["default"]={namespaced:!0,state:r,mutations:a}},d70b:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"g",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"m",(function(){return c})),n.d(t,"k",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return _})),n.d(t,"l",(function(){return d})),n.d(t,"f",(function(){return l})),n.d(t,"j",(function(){return f})),n.d(t,"h",(function(){return m})),n.d(t,"i",(function(){return p})),n.d(t,"c",(function(){return b}));var r="https://bf.chinayanye.com",a="https://bf.chinayanye.com/bf-mobile/router",o="/router",i="".concat(r,"/baojas/router"),c=("".concat(r,"/bf-mobile/file/img"),"wxc96311baf896e5d9"),s="".concat(r,"/frmMiniBJController/getOauthUser"),u=20,_="000001",d="6103",l="baojDatas",f=r+"/baojas/file/img",m="".concat(r,"/bf-mobile/mobile/shanx/"),p="".concat(r,"/baojas/"),b=1400803148},e293:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return D}));var r=n("53ca"),a=n("1da1"),o=(n("e7e5"),n("d399")),i=n("d4ec"),c=n("bee2"),s=(n("96cf"),n("d3b7"),n("a9e3"),n("4160"),n("159b"),n("b64b"),n("5530")),u=(n("ac1f"),n("00b4"),n("0d03"),n("bc3a")),_=n.n(u),d=(n("13d5"),n("4e82"),n("036e")),l="SEPU!PWO@LVE&045#67$",f=function(e){var t=Object.keys(e).sort().reduce((function(t,n){return t+(n+e[n])}),l);return t+=l,d["MessageDigest"].digest(t)},m=n("5a0c"),p=n.n(m),b=n("4328"),h=n.n(b),g=n("d70b"),E=function(){function e(t){Object(i["a"])(this,e),this.instance=_.a.create({baseURL:t||"",timeout:1e5}),this.init()}return Object(c["a"])(e,[{key:"getInterceptors",value:function(){return this.instance}},{key:"init",value:function(){this.instance.interceptors.request.use((function(e){if(!/^\/upload.*$/.test(e.url)){var t,n="000001",r="post"===e.method?e.data:e.params;if(!r.oprId&&sessionStorage.getItem("oprId"))r.oprId=null!==(t=sessionStorage.getItem("oprId"))&&void 0!==t?t:"";r.regionCd||(r.regionCd=g["l"]);var a=Object(s["a"])(Object(s["a"])({_appKey:n,responseFormat:"json"},r),{},{_timestamp:p()(new Date).format("YYYYMMDDHHmmss")});"post"===e.method?e.data=h.a.stringify(Object(s["a"])(Object(s["a"])({},a),{},{_sign:f(a)})):e.params=Object(s["a"])(Object(s["a"])({},a),{},{_sign:f(a)})}return e}),(function(e){console.error(e)})),this.instance.interceptors.response.use((function(e){return 200===e.status?(o["a"].clear(),Promise.resolve(e.data)):Promise.reject(e)}),(function(e){var t=e.response;if(t)return o["a"].fail("错误：".concat(t.status)),Promise.reject(e);o["a"].fail("网络连接异常,请稍后再试!")}))}}]),e}(),v=function(){function e(t){Object(i["a"])(this,e),this.myAxios=new E(t).getInterceptors()}return Object(c["a"])(e,[{key:"get",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(r,a){t.myAxios.get(e,{params:n}).then((function(e){Object.prototype.hasOwnProperty.call(e,"success")?(e.code=Number(e.code),e.success&&e.code&&200===e.code?r(e.info):(o["a"].fail(e.message),a(e))):Object.prototype.hasOwnProperty.call(e,"successful")?e.successful?r(e.successResponse):(o["a"].fail(e.errorMsg),a(e.errorMsg)):e?r(e):(o["a"].fail("没有数据"),a(new Error("没有数据")))}))["catch"]((function(e){"Cannot convert undefined or null to object"!=e.message?(o["a"].fail(e.message),a(e.message||"请求失败")):r(null)}))}))}},{key:"getList",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,i=this,c=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=!(c.length>2&&void 0!==c[2])||c[2],a=c.length>3&&void 0!==c[3]?c[3]:{refreshing:!0,loading:!1,finished:!0},r?a.refreshing=!0:a.loading=!0,e.abrupt("return",new Promise((function(e,c){try{i.get(t,n).then((function(t){if(!t)return o["a"].fail("请求失败"),a.refreshing=!1,a.loading=!1,a.finished=!0,c(new Error("请求失败"));if(0===t.totalRows&&(t.rows=[]),!t.rows)return a.refreshing=!1,a.loading=!1,a.finished=!0,c(new Error("数据缺失"));var i=t.rows;i.length>0?(r?a.refreshing=!1:a.loading=!1,a.finished=n.pageNo*n.pageSize>=t.totalRows):(a.refreshing=!1,a.loading=!1,a.finished=!0),e(i)}))["catch"]((function(e){a.refreshing=!1,a.loading=!1,a.finished=!0,c(e)}))}catch(s){a.refreshing=!1,a.loading=!1,a.finished=!0,c(s)}})));case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"post",value:function(e,t){var n=this;return new Promise((function(a,i){n.myAxios.post(e,t).then((function(e){Object.prototype.hasOwnProperty.call(e,"success")?(e.code=Number(e.code),e.success&&e.code&&200===e.code?a(e.info):(o["a"].fail(e.message),i(e.message))):"string"===typeof e?(o["a"].fail(e),i(e)):"object"!==Object(r["a"])(e)||e.errorToken?(o["a"].fail("请求失败"),i(e)):a(e)}))["catch"]((function(e){i(e.message)}))}))}},{key:"upload",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=new FormData,i={headers:{"Content-Type":"multipart/form-data"}};return a.append("file",t),Object.keys(r).forEach((function(e){a.append(e,r[e])})),new Promise((function(t,r){n.myAxios.post(e,a,i).then((function(e){e.success?t(e.info):(o["a"].fail("上传文件失败"),r(new Error("上传文件失败")))}))["catch"]((function(e){o["a"].fail(e.message),r(e.message)}))}))}}]),e}(),O=new v(g["d"]),D=(new v(g["g"]),new v(g["k"]),new v(g["e"]))}});