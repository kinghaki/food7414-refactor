(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{261:function(t,e,r){"use strict";e.a={mounted:function(){var t=this.$store.state.header.usereditimg;console.log(2),t||this.$router.push("/")}}},278:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return v})),r.d(e,"e",(function(){return m})),r.d(e,"f",(function(){return y})),r.d(e,"g",(function(){return x}));r(41),r(154),r(43),r(50),r(42),r(15),r(152),r(16),r(4),r(29);var n={en:/^[0-9A-Z]*$/i,cs:/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[0-9A-ZÆØÅ]$/i,de:/^[0-9A-ZÄÖÜß]*$/i,es:/^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,fa:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,fr:/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,it:/^[0-9A-Z\xC0-\xFF]*$/i,lt:/^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,hu:/^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,nl:/^[0-9A-ZÉËÏÓÖÜ]*$/i,pl:/^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ro:/^[0-9A-ZĂÂÎŞŢ]*$/i,ru:/^[0-9А-ЯЁ]*$/i,sk:/^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[0-9A-ZČĆŽŠĐ]*$/i,sv:/^[0-9A-ZÅÄÖ]*$/i,tr:/^[0-9A-ZÇĞİıÖŞÜ]*$/i,uk:/^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,az:/^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,el:/^[0-9Α-ώ]*$/i},o={validate:function t(e,r){var o=(void 0===r?{}:r).locale,c=void 0===o?"":o;return Array.isArray(e)?e.every((function(e){return t(e,{locale:c})})):c?(n[c]||n.en).test(e):Object.keys(n).some((function(t){return n[t].test(e)}))},params:[{name:"locale"}]},c={validate:function(t,e){var r=e.target;return String(t)===String(r)},params:[{name:"target",isTarget:!0}]},l={validate:function(t,e){var r=(void 0===e?{}:e).multiple,n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return r&&!Array.isArray(t)&&(t=String(t).split(",").map((function(t){return t.trim()}))),Array.isArray(t)?t.every((function(t){return n.test(String(t))})):n.test(String(t))},params:[{name:"multiple",default:!1}]};function d(t){return null==t}function f(t){return Array.isArray(t)&&0===t.length}var v={validate:function t(e,r){var n=r.length;return d(e)?n>=0:Array.isArray(e)?e.every((function(e){return t(e,{length:n})})):String(e).length<=n},params:[{name:"length",cast:function(t){return Number(t)}}]},m={validate:function t(e,r){var n=r.length;return!d(e)&&(Array.isArray(e)?e.every((function(e){return t(e,{length:n})})):String(e).length>=n)},params:[{name:"length",cast:function(t){return Number(t)}}]},y={validate:function t(e,r){var n=r.regex;return Array.isArray(e)?e.every((function(e){return t(e,{regex:n})})):n.test(String(e))},params:[{name:"regex",cast:function(t){return"string"==typeof t?new RegExp(t):t}}]},x={validate:function(t,e){var r=(void 0===e?{allowFalse:!0}:e).allowFalse,n={valid:!1,required:!0};return d(t)||f(t)?n:!1!==t||r?(n.valid=!!String(t).trim().length,n):n},params:[{name:"allowFalse",default:!0}],computesRequired:!0}},280:function(t,e,r){var content=r(333);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("5c7a9372",content,!0,{sourceMap:!1})},332:function(t,e,r){"use strict";var n=r(280);r.n(n).a},333:function(t,e,r){(e=r(39)(!1)).push([t.i,".loginform[data-v-289567e1]{width:80%;height:600px;background-color:#fff;border-radius:30px;overflow:hidden;margin:70px auto}.loginform .headertitle[data-v-289567e1]{font-size:25px;padding:40px;text-align:center;background-color:#008b8b;margin-bottom:50px}.png[data-v-289567e1]{position:absolute;width:150px;top:-75px;left:175px;border:1px solid #000;border-radius:50%;background-color:#607d8b;box-shadow:15px 20px solid #daa520}input[data-v-289567e1]{border:1px solid grey}",""]),t.exports=e},374:function(t,e,r){"use strict";r.r(e);r(48),r(22),r(16),r(4),r(29);var n=r(14),o=r(106),c=r(278),l=r(261),d=r(65);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}Object(o.c)("confirmeds",v(v({},c.b),{},{message:"確認密碼 與 密碼 輸入的不一致"})),Object(o.c)("required1",v(v({},c.g),{},{message:"信箱不能為空白"})),Object(o.c)("email1",v(v({},c.c),{},{message:"信箱格式錯誤"})),Object(o.c)("required2",v(v({},c.g),{},{message:"密碼不能為空白"})),Object(o.c)("min2",v(v({},c.e),{},{message:"長度需包含8-12字，須包含英文和數字"})),Object(o.c)("max2",v(v({},c.d),{},{message:"長度需包含8-12字，須包含英文和數字"})),Object(o.c)("alpha_num2",v(v({},c.a),{},{message:"長度需包含8-12字，須包含英文和數字"})),Object(o.c)("requ",v(v({},c.g),{},{message:"長度需包含8-12字，須包含英文和數字"})),Object(o.c)("regex",v(v({},c.f),{},{message:"必須包含英文和數字"}));var m={layout:"front",mixins:[l.a],data:function(){return{value:{acc:"",pass:""},confirmation:""}},methods:{register:function(){var t=this;d.b.auth().createUserWithEmailAndPassword(this.value.acc,this.value.pass).then((function(e){t.$router.push("/login"),window.setTimeout((function(){alert("註冊成功")}),700)})).catch((function(){alert("此帳號註冊過")}))}}},y=(r(332),r(24)),x=r(258),h=r.n(x),A=r(379),$=r(380),O=r(367),_=r(369),component=Object(y.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"loginform"},[r("div",{staticClass:"loginbody "},[r("div",{staticClass:"headertitle"},[t._v("\n        REGISTER\n      ")]),t._v(" "),r("ValidationObserver",{ref:"loginss",scopedSlots:t._u([{key:"default",fn:function(e){var n=e.invalid;return[r("form",[r("ValidationProvider",{attrs:{rules:"required1|email1"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("div",{staticClass:"justify-center mt-3"},[r("v-text-field",{staticStyle:{padding:"0 20px","margin-top":"40px"},attrs:{label:"信箱",placeholder:"請輸入註冊信箱"},model:{value:t.value.acc,callback:function(e){t.$set(t.value,"acc",e)},expression:"value.acc"}},[t._v("\n                123\n              ")]),t._v(" "),r("div",{staticClass:"mt-n5 text-center",staticStyle:{padding:"0 20px",color:"red","margin-top":"-10px"}},[t._v("\n                "+t._s(n[0])+"\n              ")])],1)]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{rules:{regex:/(?:[0-9]+[a-zA-Z]|[a-zA-z]+[0-9])/,alpha_num2:!0,min2:8,max2:12,required2:!0,confirmeds:"confirmation"}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("div",{staticClass:"justify-center mt-4"},[r("v-text-field",{staticStyle:{padding:"0 20px","margin-top":"40px"},attrs:{type:"password",placeholder:"請輸入註冊密碼",label:"密碼"},model:{value:t.value.pass,callback:function(e){t.$set(t.value,"pass",e)},expression:"value.pass"}},[t._v("\n                123\n              ")]),t._v(" "),r("div",{staticClass:"mt-n5 text-center",staticStyle:{padding:"0 20px",color:"red","margin-top":"-10px"}},[t._v("\n                "+t._s(n[0])+"\n              ")])],1)]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{vid:"confirmation"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("div",{staticClass:"\n            justify-center\n            mt-4"},[r("v-text-field",{staticStyle:{padding:"0 20px","margin-top":"40px"},attrs:{type:"password",placeholder:"再次輸入註冊密碼",label:"確認密碼"},model:{value:t.confirmation,callback:function(e){t.confirmation=e},expression:"confirmation"}},[t._v("\n                123\n              ")]),t._v(" "),r("div",{staticClass:"mt-n5 text-center",staticStyle:{padding:"0 20px",color:"red","margin-top":"-10px"}},[t._v("\n                "+t._s(n[0])+"\n              ")])],1)]}}],null,!0)}),t._v(" "),r("div",{staticClass:"mt-n5 text-center"},[r("v-container",[r("v-row",{staticStyle:{"justify-content":"center","margin-top":"20px"},attrs:{"no-gutters":""}},[r("v-btn",{staticClass:"mr-4",staticStyle:{"margin-right":"20px"},attrs:{disabled:n},on:{click:t.register}},[t._v("\n                  提交\n                ")]),t._v(" "),r("v-btn",{staticClass:"mr-4",staticStyle:{background:"#DBA1A0"},on:{click:function(e){return t.$router.push("/login")}}},[t._v("\n                  回到登入頁面\n                ")])],1)],1)],1)],1)]}}])})],1)])])}),[],!1,null,"289567e1",null);e.default=component.exports;h()(component,{VBtn:A.a,VContainer:$.a,VRow:O.a,VTextField:_.a})}}]);