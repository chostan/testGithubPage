(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b1d3344"],{"7aab":function(t,e,c){"use strict";c("fb8d")},"91db":function(t,e,c){t.exports=c.p+"img/appLogo.6f9e8710.png"},d351:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),a=c("91db"),i=c.n(a),l=function(t){return Object(n["I"])("data-v-3a85f0cf"),t=t(),Object(n["G"])(),t},d={class:"test-pay"},s={class:"title-box"},o=l((function(){return Object(n["j"])("div",{class:"left"},[Object(n["j"])("img",{class:"img",src:i.a,alt:""})],-1)})),r=l((function(){return Object(n["j"])("div",{class:"center"},"支付平台",-1)})),u={class:"page-content"},f=Object(n["k"])('<div class="top-box" data-v-3a85f0cf><div class="head" data-v-3a85f0cf>付款人刘浩然</div><div class="content" data-v-3a85f0cf><div class="content-item" data-v-3a85f0cf><div class="label" data-v-3a85f0cf>手续费</div><div class="value" data-v-3a85f0cf>0.00元</div></div><div class="content-item" data-v-3a85f0cf><div class="label" data-v-3a85f0cf>交易金额</div><div class="value" data-v-3a85f0cf>18800.00元</div></div></div></div>',1),v={class:"pay-info"},b={key:0,style:{width:"70px"}},j={key:1,style:{width:"70px","text-align":"right"}},p=l((function(){return Object(n["j"])("div",{class:"text",style:{"margin-right":"4px"}},"确认支付",-1)})),O=[p];function m(t,e,c,a,i,l){var p=Object(n["N"])("van-field"),m=Object(n["N"])("van-button"),h=Object(n["N"])("van-cell-group");return Object(n["F"])(),Object(n["i"])("div",d,[Object(n["j"])("div",s,[o,r,Object(n["j"])("div",{class:"right",onClick:e[0]||(e[0]=function(){return l.rightClick&&l.rightClick.apply(l,arguments)})},"取消")]),Object(n["j"])("div",u,[f,Object(n["j"])("div",v,[Object(n["m"])(h,{inset:""},{default:Object(n["Z"])((function(){return[Object(n["m"])(p,{modelValue:t.tel,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.tel=e}),center:"",type:"tel",label:"手机号",placeholder:"请输入手机号"},null,8,["modelValue"]),Object(n["m"])(p,{modelValue:i.sms,"onUpdate:modelValue":e[2]||(e[2]=function(t){return i.sms=t}),center:"",clearable:"",label:"短信验证码",placeholder:"请输入短信验证码",onClick:l.sendCode},{button:Object(n["Z"])((function(){return[Object(n["m"])(m,{size:"small",type:"primary",color:"#3385d1"},{default:Object(n["Z"])((function(){return[i.canSend?(Object(n["F"])(),Object(n["i"])("div",b,"发送验证码")):(Object(n["F"])(),Object(n["i"])("div",j,Object(n["R"])(i.countDown)+"s",1))]})),_:1})]})),_:1},8,["modelValue","onClick"])]})),_:1})]),Object(n["j"])("div",{class:"pay-btn",onClick:e[3]||(e[3]=function(){return l.testClick&&l.testClick.apply(l,arguments)})},O)])])}c("4795");var h={name:"test-index",data:function(){return{checked:"1",sms:"",canSend:!0,countDown:60,timer:null}},methods:{rightClick:function(){this.$router.back()},testClick:function(){this.$router.push({name:"paySuccess"})},sendCode:function(){this.canSend=!1,this.interval()},interval:function(){var t=this;this.timer=setInterval((function(){t.countDown--,0===t.countDown&&(clearInterval(t.timer),setTimeout((function(){t.canSend=!0,t.countDown=60}),500))}),1e3)}}},k=(c("7aab"),c("6b0d")),g=c.n(k);const y=g()(h,[["render",m],["__scopeId","data-v-3a85f0cf"]]);e["default"]=y},fb8d:function(t,e,c){}}]);