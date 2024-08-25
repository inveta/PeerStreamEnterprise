import{_ as Fe,a as Re,w as we,c as Ye,B as je}from"./index-5fa0cce1.js";import{F as We,_ as $e}from"./index-11d0786a.js";import{u as Ke,o as Je,U as Ce,I as Qe,a as Ze}from"./user-1b04fff0.js";import{i as et,D as tt,_ as nt,S as at}from"./index-0d3a9212.js";import{_ as rt}from"./index-91129706.js";import"./index-85da8ab9.js";import{e as s,A as it,l as y,i as be,r as k,v as Oe,x as U,m as _,F as ut,G as lt,k as le,H as ot,s as J,I as Ae,z as st,u as ct,P as fe,_ as dt,J as ft,o as ve,b as Ee,d as me,w as C,K as vt,L as mt,f as Pe,E as pt}from"./index-8c58eb58.js";import{K as oe}from"./Overflow-6df7512e.js";var gt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};const ht=gt;function De(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),l.forEach(function(i){yt(t,i,n[i])})}return t}function yt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Se=function(e,n){var l=De({},e,n.attrs);return s(it,De({},l,{icon:ht}),null)};Se.displayName="UpOutlined";Se.inheritAttrs=!1;const bt=Se;function he(){return typeof BigInt=="function"}function Q(t){var e=t.trim(),n=e.startsWith("-");n&&(e=e.slice(1)),e=e.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),e.startsWith(".")&&(e="0".concat(e));var l=e||"0",i=l.split("."),c=i[0]||"0",p=i[1]||"0";c==="0"&&p==="0"&&(n=!1);var d=n?"-":"";return{negative:n,negativeStr:d,trimStr:l,integerStr:c,decimalStr:p,fullStr:"".concat(d).concat(l)}}function Ne(t){var e=String(t);return!Number.isNaN(Number(e))&&e.includes("e")}function Z(t){var e=String(t);if(Ne(t)){var n=Number(e.slice(e.indexOf("e-")+2)),l=e.match(/\.(\d+)/);return l!=null&&l[1]&&(n+=l[1].length),n}return e.includes(".")&&Ie(e)?e.length-e.indexOf(".")-1:0}function _e(t){var e=String(t);if(Ne(t)){if(t>Number.MAX_SAFE_INTEGER)return String(he()?BigInt(t).toString():Number.MAX_SAFE_INTEGER);if(t<Number.MIN_SAFE_INTEGER)return String(he()?BigInt(t).toString():Number.MIN_SAFE_INTEGER);e=t.toFixed(Z(e))}return Q(e).fullStr}function Ie(t){return typeof t=="number"?!Number.isNaN(t):t?/^\s*-?\d+(\.\d+)?\s*$/.test(t)||/^\s*-?\d+\.\s*$/.test(t)||/^\s*-?\.\d+\s*$/.test(t):!1}function Ve(t){return!t&&t!==0&&!Number.isNaN(t)||!String(t).trim()}var St=function(){function t(e){if(Re(this,t),y(this,"origin",""),Ve(e)){this.empty=!0;return}this.origin=String(e),this.number=Number(e)}return Fe(t,[{key:"negate",value:function(){return new t(-this.toNumber())}},{key:"add",value:function(n){if(this.isInvalidate())return new t(n);var l=Number(n);if(Number.isNaN(l))return this;var i=this.number+l;if(i>Number.MAX_SAFE_INTEGER)return new t(Number.MAX_SAFE_INTEGER);if(i<Number.MIN_SAFE_INTEGER)return new t(Number.MIN_SAFE_INTEGER);var c=Math.max(Z(this.number),Z(l));return new t(i.toFixed(c))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toNumber()===(n==null?void 0:n.toNumber())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":_e(this.number):this.origin}}]),t}(),Nt=function(){function t(e){if(Re(this,t),y(this,"origin",""),Ve(e)){this.empty=!0;return}if(this.origin=String(e),e==="-"||Number.isNaN(e)){this.nan=!0;return}var n=e;if(Ne(n)&&(n=Number(n)),n=typeof n=="string"?n:_e(n),Ie(n)){var l=Q(n);this.negative=l.negative;var i=l.trimStr.split(".");this.integer=BigInt(i[0]);var c=i[1]||"0";this.decimal=BigInt(c),this.decimalLen=c.length}else this.nan=!0}return Fe(t,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(n){var l="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(n,"0"));return BigInt(l)}},{key:"negate",value:function(){var n=new t(this.toString());return n.negative=!n.negative,n}},{key:"add",value:function(n){if(this.isInvalidate())return new t(n);var l=new t(n);if(l.isInvalidate())return this;var i=Math.max(this.getDecimalStr().length,l.getDecimalStr().length),c=this.alignDecimal(i),p=l.alignDecimal(i),d=(c+p).toString(),m=Q(d),g=m.negativeStr,h=m.trimStr,u="".concat(g).concat(h.padStart(i+1,"0"));return new t("".concat(u.slice(0,-i),".").concat(u.slice(-i)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toString()===(n==null?void 0:n.toString())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":Q("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),t}();function F(t){return he()?new Nt(t):new St(t)}function ye(t,e,n){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(t==="")return"";var i=Q(t),c=i.negativeStr,p=i.integerStr,d=i.decimalStr,m="".concat(e).concat(d),g="".concat(c).concat(p);if(n>=0){var h=Number(d[n]);if(h>=5&&!l){var u=F(t).add("".concat(c,"0.").concat("0".repeat(n)).concat(10-h));return ye(u.toString(),e,n,l)}return n===0?g:"".concat(g).concat(e).concat(d.padEnd(n,"0").slice(0,n))}return m===".0"?g:"".concat(g).concat(m)}var _t=200,It=600;const xt=be({compatConfig:{MODE:3},name:"StepHandler",inheritAttrs:!1,props:{prefixCls:String,upDisabled:Boolean,downDisabled:Boolean,onStep:{type:Function}},slots:["upNode","downNode"],setup:function(e,n){var l=n.slots,i=n.emit,c=k(),p=function(g,h){g.preventDefault(),i("step",h);function u(){i("step",h),c.value=setTimeout(u,_t)}c.value=setTimeout(u,It)},d=function(){clearTimeout(c.value)};return Oe(function(){d()}),function(){if(et())return null;var m=e.prefixCls,g=e.upDisabled,h=e.downDisabled,u="".concat(m,"-handler"),E=U(u,"".concat(u,"-up"),y({},"".concat(u,"-up-disabled"),g)),P=U(u,"".concat(u,"-down"),y({},"".concat(u,"-down-disabled"),h)),x={unselectable:"on",role:"button",onMouseup:d,onMouseleave:d},f=l.upNode,O=l.downNode;return s("div",{class:"".concat(u,"-wrap")},[s("span",_(_({},x),{},{onMousedown:function(B){p(B,!0)},"aria-label":"Increase Value","aria-disabled":g,class:E}),[(f==null?void 0:f())||s("span",{unselectable:"on",class:"".concat(m,"-handler-up-inner")},null)]),s("span",_(_({},x),{},{onMousedown:function(B){p(B,!1)},"aria-label":"Decrease Value","aria-disabled":h,class:P}),[(O==null?void 0:O())||s("span",{unselectable:"on",class:"".concat(m,"-handler-down-inner")},null)])])}}});function wt(t,e){var n=k(null);function l(){try{var c=t.value,p=c.selectionStart,d=c.selectionEnd,m=c.value,g=m.substring(0,p),h=m.substring(d);n.value={start:p,end:d,value:m,beforeTxt:g,afterTxt:h}}catch(u){}}function i(){if(t.value&&n.value&&e.value)try{var c=t.value.value,p=n.value,d=p.beforeTxt,m=p.afterTxt,g=p.start,h=c.length;if(c.endsWith(m))h=c.length-n.value.afterTxt.length;else if(c.startsWith(d))h=d.length;else{var u=d[g-1],E=c.indexOf(u,g-1);E!==-1&&(h=E+1)}t.value.setSelectionRange(h,h)}catch(P){ut(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(P.message))}}return[l,i]}const Ct=function(){var t=k(0),e=function(){we.cancel(t.value)};return Oe(function(){e()}),function(n){e(),t.value=we(function(){n()})}};var Et=["prefixCls","min","max","step","defaultValue","value","disabled","readonly","keyboard","controls","autofocus","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","lazy","class","style"],ke=function(e,n){return e||n.isEmpty()?n.toString():n.toNumber()},Be=function(e){var n=F(e);return n.isInvalidate()?null:n},Ue=function(){return{stringMode:{type:Boolean},defaultValue:{type:[String,Number]},value:{type:[String,Number]},prefixCls:{type:String},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number],default:1},tabindex:{type:Number},controls:{type:Boolean,default:!0},readonly:{type:Boolean},disabled:{type:Boolean},autofocus:{type:Boolean},keyboard:{type:Boolean,default:!0},parser:{type:Function},formatter:{type:Function},precision:{type:Number},decimalSeparator:{type:String},onInput:{type:Function},onChange:{type:Function},onPressEnter:{type:Function},onStep:{type:Function},onBlur:{type:Function},onFocus:{type:Function}}};const Pt=be({compatConfig:{MODE:3},name:"InnerInputNumber",inheritAttrs:!1,props:_(_({},Ue()),{},{lazy:Boolean}),slots:["upHandler","downHandler"],setup:function(e,n){var l=n.attrs,i=n.slots,c=n.emit,p=n.expose,d=k(),m=k(!1),g=k(!1),h=k(!1),u=k(F(e.value));function E(o){e.value===void 0&&(u.value=o)}var P=function(a,v){if(!v)return e.precision>=0?e.precision:Math.max(Z(a),Z(e.step))},x=function(a){var v=String(a);if(e.parser)return e.parser(v);var r=v;return e.decimalSeparator&&(r=r.replace(e.decimalSeparator,".")),r.replace(/[^\w.-]+/g,"")},f=k(""),O=function(a,v){if(e.formatter)return e.formatter(a,{userTyping:v,input:String(f.value)});var r=typeof a=="number"?_e(a):a;if(!v){var I=P(r,v);if(Ie(r)&&(e.decimalSeparator||I>=0)){var N=e.decimalSeparator||".";r=ye(r,N,I)}}return r},L=function(){var o=e.value;return u.value.isInvalidate()&&["string","number"].includes(lt(o))?Number.isNaN(o)?"":o:O(u.value.toString(),!1)}();f.value=L;function B(o,a){f.value=O(o.isInvalidate()?o.toString(!1):o.toString(!a),a)}var V=le(function(){return Be(e.max)}),w=le(function(){return Be(e.min)}),S=le(function(){return!V.value||!u.value||u.value.isInvalidate()?!1:V.value.lessEquals(u.value)}),T=le(function(){return!w.value||!u.value||u.value.isInvalidate()?!1:u.value.lessEquals(w.value)}),R=wt(d,m),D=ot(R,2),H=D[0],ee=D[1],X=function(a){return V.value&&!a.lessEquals(V.value)?V.value:w.value&&!w.value.lessEquals(a)?w.value:null},q=function(a){return!X(a)},G=function(a,v){var r=a,I=q(r)||r.isEmpty();if(!r.isEmpty()&&!v&&(r=X(r)||r,I=!0),!e.readonly&&!e.disabled&&I){var N=r.toString(),M=P(N,v);if(M>=0&&(r=F(ye(N,".",M))),!r.equals(u.value)){var A;E(r),(A=e.onChange)===null||A===void 0||A.call(e,r.isEmpty()?null:ke(e.stringMode,r)),e.value===void 0&&B(r,v)}return r}return u.value},Y=Ct(),j=function o(a){var v;if(H(),f.value=a,!h.value){var r=x(a),I=F(r);I.isNaN()||G(I,!0)}(v=e.onInput)===null||v===void 0||v.call(e,a),Y(function(){var N=a;e.parser||(N=a.replace(/。/g,".")),N!==a&&o(N)})},W=function(){h.value=!0},te=function(){h.value=!1,j(d.value.value)},$=function(a){j(a.target.value)},K=function(a){var v,r;if(!(a&&S.value||!a&&T.value)){g.value=!1;var I=F(e.step);a||(I=I.negate());var N=(u.value||F(0)).add(I.toString()),M=G(N,!1);(v=e.onStep)===null||v===void 0||v.call(e,ke(e.stringMode,M),{offset:e.step,type:a?"up":"down"}),(r=d.value)===null||r===void 0||r.focus()}},ne=function(a){var v=F(x(f.value)),r=v;v.isNaN()?r=u.value:r=G(v,a),e.value!==void 0?B(u.value,!1):r.isNaN()||B(r,!1)},se=function(a){var v=a.which;if(g.value=!0,v===oe.ENTER){var r;h.value||(g.value=!1),ne(!1),(r=e.onPressEnter)===null||r===void 0||r.call(e,a)}e.keyboard!==!1&&!h.value&&[oe.UP,oe.DOWN].includes(v)&&(K(oe.UP===v),a.preventDefault())},b=function(){g.value=!1},z=function(a){ne(!1),m.value=!1,g.value=!1,c("blur",a)};return J(function(){return e.precision},function(){u.value.isInvalidate()||B(u.value,!1)},{flush:"post"}),J(function(){return e.value},function(){var o=F(e.value);u.value=o;var a=F(x(f.value));(!o.equals(a)||!g.value||e.formatter)&&B(o,g.value)},{flush:"post"}),J(f,function(){e.formatter&&ee()},{flush:"post"}),J(function(){return e.disabled},function(o){o&&(m.value=!1)}),p({focus:function(){var a;(a=d.value)===null||a===void 0||a.focus()},blur:function(){var a;(a=d.value)===null||a===void 0||a.blur()}}),function(){var o,a=_(_({},l),e),v=a.prefixCls,r=v===void 0?"rc-input-number":v,I=a.min,N=a.max,M=a.step,A=M===void 0?1:M;a.defaultValue,a.value;var ae=a.disabled,re=a.readonly;a.keyboard;var ie=a.controls,ce=ie===void 0?!0:ie,ue=a.autofocus;a.stringMode,a.parser,a.formatter,a.precision,a.decimalSeparator,a.onChange,a.onInput,a.onPressEnter,a.onStep;var Te=a.lazy,He=a.class,Xe=a.style,qe=Ae(a,Et),Ge=i.upHandler,ze=i.downHandler,xe="".concat(r,"-input"),de={};return Te?de.onChange=$:de.onInput=$,s("div",{class:U(r,He,(o={},y(o,"".concat(r,"-focused"),m.value),y(o,"".concat(r,"-disabled"),ae),y(o,"".concat(r,"-readonly"),re),y(o,"".concat(r,"-not-a-number"),u.value.isNaN()),y(o,"".concat(r,"-out-of-range"),!u.value.isInvalidate()&&!q(u.value)),o)),style:Xe,onKeydown:se,onKeyup:b},[ce&&s(xt,{prefixCls:r,upDisabled:S.value,downDisabled:T.value,onStep:K},{upNode:Ge,downNode:ze}),s("div",{class:"".concat(xe,"-wrap")},[s("input",_(_(_({autofocus:ue,autocomplete:"off",role:"spinbutton","aria-valuemin":I,"aria-valuemax":N,"aria-valuenow":u.value.isInvalidate()?null:u.value.toString(),step:A},qe),{},{ref:d,class:xe,value:f.value,disabled:ae,readonly:re,onFocus:function(Le){m.value=!0,c("focus",Le)}},de),{},{onBlur:z,onCompositionstart:W,onCompositionend:te}),null)])])}}});function pe(t){return t!=null}var Dt=["class","bordered","readonly","style","addonBefore","addonAfter","prefix","valueModifiers"],Me=Ue(),kt=function(){return _(_({},Me),{},{size:{type:String},bordered:{type:Boolean,default:!0},placeholder:String,name:String,id:String,type:String,addonBefore:fe.any,addonAfter:fe.any,prefix:fe.any,"onUpdate:value":Me.onChange,valueModifiers:Object})},ge=be({compatConfig:{MODE:3},name:"AInputNumber",inheritAttrs:!1,props:kt(),slots:["addonBefore","addonAfter","prefix"],setup:function(e,n){var l=n.emit,i=n.expose,c=n.attrs,p=n.slots,d=Ke(),m=ct("input-number",e),g=m.prefixCls,h=m.size,u=m.direction,E=k(e.value===void 0?e.defaultValue:e.value),P=k(!1);J(function(){return e.value},function(){E.value=e.value});var x=k(null),f=function(){var S;(S=x.value)===null||S===void 0||S.focus()},O=function(){var S;(S=x.value)===null||S===void 0||S.blur()};i({focus:f,blur:O});var L=function(S){e.value===void 0&&(E.value=S),l("update:value",S),l("change",S),d.onFieldChange()},B=function(S){P.value=!1,l("blur",S),d.onFieldBlur()},V=function(S){P.value=!0,l("focus",S)};return function(){var w,S,T,R,D=_(_({},c),e),H=D.class,ee=D.bordered,X=D.readonly,q=D.style,G=D.addonBefore,Y=G===void 0?(w=p.addonBefore)===null||w===void 0?void 0:w.call(p):G,j=D.addonAfter,W=j===void 0?(S=p.addonAfter)===null||S===void 0?void 0:S.call(p):j,te=D.prefix,$=te===void 0?(T=p.prefix)===null||T===void 0?void 0:T.call(p):te,K=D.valueModifiers,ne=K===void 0?{}:K,se=Ae(D,Dt),b=g.value,z=h.value,o=U((R={},y(R,"".concat(b,"-lg"),z==="large"),y(R,"".concat(b,"-sm"),z==="small"),y(R,"".concat(b,"-rtl"),u.value==="rtl"),y(R,"".concat(b,"-readonly"),X),y(R,"".concat(b,"-borderless"),!ee),R),H),a=s(Pt,_(_({},Je(se,["size","defaultValue"])),{},{ref:x,lazy:!!ne.lazy,value:E.value,class:o,prefixCls:b,readonly:X,onChange:L,onBlur:B,onFocus:V}),{upHandler:function(){return s(bt,{class:"".concat(b,"-handler-up-inner")},null)},downHandler:function(){return s(tt,{class:"".concat(b,"-handler-down-inner")},null)}}),v=pe(Y)||pe(W);if(pe($)){var r,I=U("".concat(b,"-affix-wrapper"),(r={},y(r,"".concat(b,"-affix-wrapper-focused"),P.value),y(r,"".concat(b,"-affix-wrapper-disabled"),e.disabled),y(r,"".concat(b,"-affix-wrapper-rtl"),u.value==="rtl"),y(r,"".concat(b,"-affix-wrapper-readonly"),X),y(r,"".concat(b,"-affix-wrapper-borderless"),!ee),y(r,"".concat(H),!v&&H),r));a=s("div",{class:I,style:q,onMouseup:function(){return x.value.focus()}},[s("span",{class:"".concat(b,"-prefix")},[$]),a])}if(v){var N,M="".concat(b,"-group"),A="".concat(M,"-addon"),ae=Y?s("div",{class:A},[Y]):null,re=W?s("div",{class:A},[W]):null,ie=U("".concat(b,"-wrapper"),M,y({},"".concat(M,"-rtl"),u.value==="rtl")),ce=U("".concat(b,"-group-wrapper"),(N={},y(N,"".concat(b,"-group-wrapper-sm"),z==="small"),y(N,"".concat(b,"-group-wrapper-lg"),z==="large"),y(N,"".concat(b,"-group-wrapper-rtl"),u.value==="rtl"),N),H);a=s("div",{class:ce,style:q},[s("div",{class:ie},[ae,a,re])])}return Ye(a,{style:q})}}});const Bt=st(ge,{install:function(e){return e.component(ge.name,ge),e}});const Mt={components:{},data(){return{resXY:"",systemParam:{AudioMixer:!1,PORT:"",RenderOffScreen:!1,ResX:"",ResY:"",Unattended:!1,SignalIp:"",WebRTCFps:"",auth:!1,exeUeCoolTime:"",iceServers:"",idleReleaseTime:"",preloadReleaseTime:""},searchInput:"",options:[{value:"1920*1080",label:"1920*1080"},{value:"1280*960",label:"1280*960"}]}},computed:{filteredOptions(){return this.options.filter(t=>t.value.toLowerCase().includes(this.searchInput.toLowerCase()))}},methods:{authChange(t){},btnReset(){this.GetSystemParam()},btnSave(){this.systemParam.ResX=this.resXY.split("*")[0],this.systemParam.ResY=this.resXY.split("*")[1];var t=JSON.parse(this.systemParam.iceServers);this.systemParam.iceServers=t,Ce.UpdateSystemParam(this.systemParam).then(e=>{e.data.status=="0"&&(ft.success(e.data.message),this.GetSystemParam())})},GetSystemParam(){Ce.GetSystemParam().then(t=>{t.data.status=="0"&&(this.systemParam=t.data,this.systemParam.iceServers=JSON.stringify(t.data.iceServers,null,2),this.resXY=t.data.ResX+"*"+t.data.ResY)})},handleChange(t){t&&(this.resXY=t)},handleSearch(t){t&&(this.resXY=t)},handleBlur(){}},mounted(){this.GetSystemParam()}},Ft={class:"container",style:{height:"100%"}},Rt={class:"maincontainer",style:{}},Ot={style:{width:"60%"}},At={style:{float:"right"}};function Vt(t,e,n,l,i,c){const p=Qe,d=$e,m=rt,g=Bt,h=at,u=nt,E=Ze,P=We,x=je;return ve(),Ee("div",Ft,[me("div",Rt,[me("div",Ot,[s(P,{model:i.systemParam,"label-col":{span:6},"wrapper-col":{span:24}},{default:C(()=>[s(d,{"label-style":"color: black;",label:"端口"},{default:C(()=>[s(p,{value:i.systemParam.PORT,"onUpdate:value":e[0]||(e[0]=f=>i.systemParam.PORT=f)},null,8,["value"])]),_:1}),s(d,{label:"用户认证"},{default:C(()=>[s(m,{checked:i.systemParam.auth,"onUpdate:checked":e[1]||(e[1]=f=>i.systemParam.auth=f),onChange:c.authChange},null,8,["checked","onChange"])]),_:1}),s(d,{label:"服务IP地址"},{default:C(()=>[s(p,{value:i.systemParam.SignalIp,"onUpdate:value":e[2]||(e[2]=f=>i.systemParam.SignalIp=f)},null,8,["value"])]),_:1}),s(d,{label:"发送帧率"},{default:C(()=>[s(g,{value:i.systemParam.WebRTCFps,"onUpdate:value":e[3]||(e[3]=f=>i.systemParam.WebRTCFps=f)},null,8,["value"])]),_:1}),s(d,{label:"分辨率"},{default:C(()=>[s(u,{value:i.resXY,"onUpdate:value":e[4]||(e[4]=f=>i.resXY=f),"show-search":"",class:"custom-select",onChange:c.handleChange,onBlur:c.handleBlur,onSearch:c.handleSearch,defaultActiveFirstOption:!1,defaultOpen:!1,filterOption:!1},{default:C(()=>[(ve(!0),Ee(vt,null,mt(c.filteredOptions,f=>(ve(),pt(h,{key:f.value,value:f.value},null,8,["value"]))),128))]),_:1},8,["value","onChange","onBlur","onSearch"])]),_:1}),s(d,{label:"异常忽略"},{default:C(()=>[s(m,{checked:i.systemParam.Unattended,"onUpdate:checked":e[5]||(e[5]=f=>i.systemParam.Unattended=f)},null,8,["checked"])]),_:1}),s(d,{label:"渲染程序后台运行"},{default:C(()=>[s(m,{checked:i.systemParam.RenderOffScreen,"onUpdate:checked":e[6]||(e[6]=f=>i.systemParam.RenderOffScreen=f)},null,8,["checked"])]),_:1}),s(d,{label:"音频发送"},{default:C(()=>[s(m,{checked:i.systemParam.AudioMixer,"onUpdate:checked":e[7]||(e[7]=f=>i.systemParam.AudioMixer=f)},null,8,["checked"])]),_:1}),s(d,{label:"iceServers"},{default:C(()=>[s(E,{value:i.systemParam.iceServers,"onUpdate:value":e[8]||(e[8]=f=>i.systemParam.iceServers=f),style:{minHeight:"250px"}},null,8,["value"])]),_:1})]),_:1},8,["model"]),me("div",At,[s(x,{type:"primary",ghost:"",onClick:c.btnReset},{default:C(()=>[Pe("重置")]),_:1},8,["onClick"]),s(x,{type:"primary",style:{"margin-left":"10px"},onClick:c.btnSave},{default:C(()=>[Pe("保存")]),_:1},8,["onClick"])])])])])}const jt=dt(Mt,[["render",Vt],["__scopeId","data-v-e3e4fdb9"]]);export{jt as default};