(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{268:function(t,e,r){var content=r(298);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("59e03ae6",content,!0,{sourceMap:!1})},269:function(t,e,r){"use strict";r(48),r(22),r(16),r(4),r(29);var n=r(14),o=(r(152),r(270),r(273)),c=r(285),l=r(262),d=r(253);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},270:function(t,e,r){var content=r(271);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("81b1dc02",content,!0,{sourceMap:!1})},271:function(t,e,r){(e=r(39)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=e},297:function(t,e,r){"use strict";var n=r(268);r.n(n).a},298:function(t,e,r){(e=r(39)(!1)).push([t.i,"@media only screen and (max-width:959px){.v-stepper:not(.v-stepper--vertical) .v-stepper__label{display:flex!important}}.stepperheader{background-image:linear-gradient(60deg,rgba(230,100,101,.3),rgba(230,100,101,.3),rgba(145,152,229,.3),rgba(145,152,229,.3),rgba(230,100,101,.3),rgba(230,100,101,.3),rgba(145,152,229,.3),rgba(145,152,229,.3),rgba(230,100,101,.3),rgba(230,100,101,.3),rgba(145,152,229,.3),rgba(145,152,229,.3),rgba(230,100,101,.3),rgba(230,100,101,.3),rgba(145,152,229,.3),rgba(145,152,229,.3),rgba(230,100,101,.3),rgba(230,100,101,.3),rgba(145,152,229,.3),rgba(145,152,229,.3),rgba(230,100,101,.3),rgba(230,100,101,.3),rgba(145,152,229,.3),rgba(145,152,229,.3));height:150px}@media screen and (min-width:980px){table{border:1px solid #000;border-collapse:collapse;width:70%;font-size:20px}td,th{border:1px solid #000;padding:20px;vertical-align:middle}th{background-color:grey}td{width:150px;height:200px;vertical-align:middle;text-align:center}.moneyform>.noproduct{margin-left:22%;line-height:500px}.moneyform tr{max-height:200px}.moneyform tr td:first-child{min-width:150px}.moneyform tr td img{width:100%;height:160px}.moneyform tr td>.inputtotal{display:flex;justify-content:space-around;font-size:20px}.moneyform tr td>.inputtotal button{width:60px;height:40px;border:2px solid grey;font-size:25px;color:#000;border-radius:4px}.moneyform tr td>.inputtotal button:hover{background-color:rgba(0,128,0,.5)}.moneyform tr td>.inputtotal>.output input{width:100px;text-align:center;height:40px;border:1px solid grey}.moneyform>.countabsolute{position:absolute;width:23%;top:0;right:30px}.moneyform>.countabsolute>.countfixed{position:absolute;width:100%;top:0;left:0;background-color:#dcdcdc;display:flex;flex-direction:column;margin-left:40px;padding:20px}.moneyform>.countabsolute>.countfixed>.totalcount{display:flex;align-items:center;margin:100px 0}.moneyform>.countabsolute>.countfixed>.totalcount>.totalcountheader{font-size:30px;font-weight:700;background-color:#008b8b}.moneyform>.countabsolute>.countfixed>.totalcount>.totalcountmain{padding-left:50px;font-size:30px;color:red;white-space:nowrap}.moneyform>.countabsolute>.countfixed>.nextstop{background-color:#1ea071;height:70px;border-radius:10px;font-weight:700;font-size:20px;color:#fff}.moneyform>.countabsolute>.countfixed>.nextstop:hover{transition:color .5s ease-in;color:#d7e994}.moneyform>.countabsolute>.countfixed>.goshop{margin-top:50px;height:70px;background-color:#9b9b9b;border-radius:10px;font-weight:700;font-size:20px;color:#fff}.moneyform>.countabsolute>.countfixed>.goshop:hover{transition:color .5s ease-in;color:#d7e994}}.cheapcode{width:100%;height:100%;display:flex;justify-content:flex-start;flex-wrap:wrap;align-content:flex-start;font-size:25px;padding:50px 0;text-align:center}.cheapcode>.usecode{width:100%;height:50px}.cheapcode>.inputcode{width:100%;height:100px}@media screen and (max-width:649px){.cheapcode>.inputcode{height:200px!important}}.cheapcode>.inputcode>.inputbuttoncode{width:100%;height:50px}@media screen and (max-width:649px){.cheapcode>.inputcode>.inputbuttoncode{display:flex;flex-wrap:wrap;justify-content:center;height:150px!important}}.cheapcode>.inputcode>.inputbuttoncode>input{border:2px ridge #ced4da;border-radius:10px;height:40px;text-indent:10px}@media screen and (max-width:649px){.cheapcode>.inputcode>.inputbuttoncode>input{width:50%}}.cheapcode>.inputcode>.inputbuttoncode>button{border:1px solid #00796b;border-radius:5px;color:#00796b;height:40px;margin-left:2px}.cheapcode>.inputcode>.inputbuttoncode>button:hover{background-color:#00796b;color:#fff}@media screen and (max-width:649px){.cheapcode>.inputcode>.inputbuttoncode>button{width:50%}}.cheapcode .buttonstop{width:100%}.cheapcode .buttonstop>.nextstop{background-color:#1ea071;height:70px;border-radius:10px;font-weight:700;font-size:20px;color:#fff;width:100px}.cheapcode .buttonstop>.nextstop:hover{transition:color .5s ease-in;color:#d7e994}.cheapcode .buttonstop>.beforestop{background-color:#1ea071;height:70px;border-radius:10px;font-weight:700;font-size:20px;color:#fff;width:100px;background-color:#bc8f8f}.cheapcode .buttonstop>.beforestop:hover{transition:color .5s ease-in;color:#d7e994}",""]),t.exports=e},305:function(t,e,r){var content=r(306);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("54d46bc4",content,!0,{sourceMap:!1})},306:function(t,e,r){(e=r(39)(!1)).push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=e},307:function(t,e,r){var content=r(308);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("435414d6",content,!0,{sourceMap:!1})},308:function(t,e,r){(e=r(39)(!1)).push([t.i,".theme--light.v-stepper{background:#fff}.theme--light.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:rgba(0,0,0,.38)}.theme--light.v-stepper .v-stepper__step__step,.theme--light.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--light.v-stepper .v-stepper__header .v-divider{border-color:rgba(0,0,0,.12)}.theme--light.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--editable:hover{background:rgba(0,0,0,.06)}.theme--light.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--complete .v-stepper__label{color:rgba(0,0,0,.87)}.theme--light.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:rgba(0,0,0,.54)}.theme--light.v-stepper .v-stepper__label{color:rgba(0,0,0,.38)}.theme--light.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--light.v-stepper .v-stepper__label small{color:rgba(0,0,0,.6)}.v-application--is-ltr .theme--light.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid rgba(0,0,0,.12)}.v-application--is-rtl .theme--light.v-stepper--vertical .v-stepper__content:not(:last-child){border-right:1px solid rgba(0,0,0,.12)}.theme--dark.v-stepper{background:#303030}.theme--dark.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:hsla(0,0%,100%,.5)}.theme--dark.v-stepper .v-stepper__step__step,.theme--dark.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--dark.v-stepper .v-stepper__header .v-divider{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--editable:hover{background:hsla(0,0%,100%,.06)}.theme--dark.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--complete .v-stepper__label{color:hsla(0,0%,100%,.87)}.theme--dark.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:hsla(0,0%,100%,.75)}.theme--dark.v-stepper .v-stepper__label{color:hsla(0,0%,100%,.5)}.theme--dark.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--dark.v-stepper .v-stepper__label small{color:hsla(0,0%,100%,.7)}.v-application--is-ltr .theme--dark.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid hsla(0,0%,100%,.12)}.v-application--is-rtl .theme--dark.v-stepper--vertical .v-stepper__content:not(:last-child){border-right:1px solid hsla(0,0%,100%,.12)}.v-stepper{border-radius:4px;overflow:hidden;position:relative}.v-stepper,.v-stepper__header{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-stepper__header{height:72px;align-items:stretch;display:flex;flex-wrap:wrap;justify-content:space-between}.v-stepper__header .v-divider{align-self:center;margin:0 -16px}.v-stepper__items{position:relative;overflow:hidden}.v-stepper__step__step{align-items:center;border-radius:50%;display:inline-flex;font-size:.75rem;justify-content:center;height:24px;min-width:24px;width:24px;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-application--is-ltr .v-stepper__step__step{margin-right:8px}.v-application--is-rtl .v-stepper__step__step{margin-left:8px}.v-stepper__step__step .v-icon.v-icon{font-size:1.25rem}.v-stepper__step__step .v-icon.v-icon.v-icon--svg{height:1.25rem;width:1.25rem}.v-stepper__step{align-items:center;display:flex;flex-direction:row;padding:24px;position:relative}.v-stepper__step--active .v-stepper__label{transition:.3s cubic-bezier(.4,0,.6,1)}.v-stepper__step--editable{cursor:pointer}.v-stepper__step.v-stepper__step--error .v-stepper__step__step{background:transparent;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__step__step .v-icon{font-size:1.5rem;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__label{color:inherit;text-shadow:none;font-weight:500}.v-stepper__step.v-stepper__step--error .v-stepper__label small{color:inherit}.v-stepper__label{align-items:flex-start;display:flex;flex-direction:column;line-height:1}.v-application--is-ltr .v-stepper__label{text-align:left}.v-application--is-rtl .v-stepper__label{text-align:right}.v-stepper__label small{font-size:.75rem;font-weight:300;text-shadow:none}.v-stepper__wrapper{overflow:hidden;transition:none}.v-stepper__content{top:0;padding:24px 24px 16px;flex:1 0 auto;width:100%}.v-stepper__content>.v-btn{margin:24px 8px 8px 0}.v-stepper--is-booted .v-stepper__content,.v-stepper--is-booted .v-stepper__wrapper{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-stepper--vertical{padding-bottom:36px}.v-stepper--vertical .v-stepper__content{padding:16px 60px 16px 23px;width:auto}.v-application--is-ltr .v-stepper--vertical .v-stepper__content{margin:-8px -36px -16px 36px}.v-application--is-rtl .v-stepper--vertical .v-stepper__content{margin:-8px 36px -16px -36px}.v-stepper--vertical .v-stepper__step{padding:24px 24px 16px}.v-application--is-ltr .v-stepper--vertical .v-stepper__step__step{margin-right:12px}.v-application--is-rtl .v-stepper--vertical .v-stepper__step__step{margin-left:12px}.v-stepper--alt-labels .v-stepper__header{height:auto}.v-stepper--alt-labels .v-stepper__header .v-divider{margin:35px -67px 0;align-self:flex-start}.v-stepper--alt-labels .v-stepper__step{flex-direction:column;justify-content:flex-start;align-items:center;flex-basis:175px}.v-stepper--alt-labels .v-stepper__step small{align-self:center}.v-stepper--alt-labels .v-stepper__step__step{margin-bottom:11px;margin-left:0;margin-right:0}@media only screen and (max-width:959px){.v-stepper:not(.v-stepper--vertical) .v-stepper__label{display:none}.v-stepper:not(.v-stepper--vertical) .v-stepper__step__step{margin-left:0;margin-right:0}}",""]),t.exports=e},370:function(t,e,r){"use strict";r.r(e);r(41),r(26);var n=r(2),o={layout:"front",data:function(){return{e1:1,mrLight:""}},computed:{cart:function(){return this.$store.state.cart.cart},count:function(){return this.$store.state.cart.count},countsfixed:function(){return this.$store.state.cart.height+"px"}},created:function(){},mounted:function(){window.addEventListener("scroll",this.countfixed)},destroyed:function(){window.removeEventListener("scroll",this.countfixed)},methods:{countfixed:function(){(window.pageYOffset>=500||document.documentElement.scrollTop>=500||document.body.scrollTop>=500)&&(console.log(this.$refs.countfixed.style.top),this.$refs.countfixed.style.top=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-500+"px")},deletecart:function(t){this.$store.commit("header/updatefrontwaitfixed");var e=this;window.setTimeout(Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.$store.commit("header/deletefrontwaitfixed"),r.next=3,e.$store.dispatch("cart/deleteUSERCart",t);case 3:case"end":return r.stop()}}),r)}))),800)},pluscountcart:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$store.dispatch("cart/addUSERCart",t);case 2:case"end":return r.stop()}}),r)})))()},subcountcart:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$store.dispatch("cart/subUSERCart",t);case 2:case"end":return r.stop()}}),r)})))()},onlynumber:function(t){t.target.value=t.target.value.replace(/[^\d]/g,"")},changecountcart:function(t,e){""===e.target.value||0==e.target.value?(e.target.value=1,t.value=e.target.value,this.$store.dispatch("cart/handInputUSERCart",t)):(t.value=e.target.value,this.$store.dispatch("cart/handInputUSERCart",t))},ecpay:function(){this.$store.commit("header/updatefrontwaitfixed");var t=this;window.setTimeout(Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("header/deletefrontwaitfixed"),e.next=3,t.$axios.get("/api/USER/ecpay/Credit");case 3:r=e.sent,data=r.data,t.$refs.ecpay.innerHTML=data,document.querySelector("#_form_aiochk").submit();case 7:case"end":return e.stop()}}),e)}))),800)},checkCode:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("MrLight"!==t.mrLight){e.next=8;break}return e.next=3,t.$axios.post("/api/USER/ecpay/checkCode");case 3:r=e.sent,!0===r.data?alert("優惠碼套用成功"):alert("優惠碼已經套用過了"),e.next=9;break;case 8:alert("優惠碼套用失敗");case 9:case"end":return e.stop()}}),e)})))()},takeCode:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post("/api/USER/ecpay/takeCode");case 2:alert("返回後，套用優惠碼重置"),t.e1=1;case 4:case"end":return e.stop()}}),e)})))()},checklogin:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post("/api/USER/checkLogin");case 2:r=e.sent,r.data&&t.$store.state.cart.cart.length>0?t.e1=2:0===t.$store.state.cart.cart.length?(alert("購物車無商品，請至商品專區購買"),t.$router.push("/product/all")):alert("請先登入會員才能購買");case 5:case"end":return e.stop()}}),e)})))()}}},c=(r(297),r(24)),l=r(258),d=r.n(l),v=r(269),h=(r(48),r(22),r(16),r(4),r(29),r(14)),_=(r(305),r(254));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=_.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:m({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:m({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),w=(r(15),r(152),r(307),r(257)),y=r(272),k=r(253),O=r(23);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var C=Object(k.a)(Object(w.b)("stepper"),y.a,_.a).extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,vertical:Boolean},data:function(){var data={isBooted:!1,steps:[],content:[],isReverse:!1};return data.internalLazyValue=null!=this.value?this.value:(data[0]||{}).step||1,data},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},this.themeClasses)}},watch:{internalValue:function(t,e){this.isReverse=Number(t)<Number(e),e&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object(O.a)("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(t){"v-stepper-step"===t.$options.name?this.steps.push(t):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content.push(t))},unregister:function(t){"v-stepper-step"===t.$options.name?this.steps=this.steps.filter((function(i){return i!==t})):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content=this.content.filter((function(i){return i!==t})))},stepClick:function(t){var e=this;this.$nextTick((function(){return e.internalValue=t}))},updateView:function(){for(var t=this.steps.length;--t>=0;)this.steps[t].toggle(this.internalValue);for(var e=this.content.length;--e>=0;)this.content[e].toggle(this.internalValue,this.isReverse)}},render:function(t){return t("div",{staticClass:"v-stepper",class:this.classes},this.$slots.default)}}),$=(r(9),r(10),r(286)),S=r(7),P=Object(k.a)(Object(w.a)("stepper","v-stepper-content","v-stepper")).extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){return(this.$vuetify.rtl?!this.isReverse:this.isReverse)?$.d:$.e},styles:function(){return this.isVertical?{height:Object(S.d)(this.height)}:{}}},watch:{isActive:function(t,e){t&&null==e?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(t){this.isActive&&"height"===t.propertyName&&(this.height="auto")},enter:function(){var t=this,e=0;requestAnimationFrame((function(){e=t.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return t.isActive&&(t.height=e||"auto")}),450)},leave:function(){var t=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return t.height=0}),10)},toggle:function(t,e){this.isActive=t.toString()===this.step.toString(),this.isReverse=e}},render:function(t){var e={staticClass:"v-stepper__content"},r={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(e.directives=[{name:"show",value:this.isActive}]);var n=t("div",r,[this.$slots.default]),content=t("div",e,[n]);return t(this.computedTransition,{on:this.$listeners},[content])}}),R=r(264),E=r(255),V=r(260),z=Object(k.a)(E.a,Object(w.a)("stepper","v-stepper-step","v-stepper")).extend().extend({name:"v-stepper-step",directives:{ripple:V.a},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some((function(t){return!0!==t()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(t){t.stopPropagation(),this.$emit("click",t),this.editable&&this.stepClick(this.step)},genIcon:function(t){return this.$createElement(R.a,t)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var t=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(t,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var t=[];return this.hasError?t.push(this.genIcon(this.errorIcon)):this.complete?this.editable?t.push(this.genIcon(this.editIcon)):t.push(this.genIcon(this.completeIcon)):t.push(String(this.step)),t},toggle:function(t){this.isActive=t.toString()===this.step.toString(),this.isInactive=Number(t)<Number(this.step)}},render:function(t){return t("div",{staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click}},[this.genStep(),this.genLabel()])}}),L=Object(S.e)("v-stepper__header"),B=Object(S.e)("v-stepper__items"),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-stepper",{staticStyle:{margin:"50px 0"},model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[r("v-stepper-header",{staticClass:"stepperheader"},[r("v-stepper-step",{attrs:{complete:t.e1>1,step:"1",color:"#033","alt-labels":!0}},[t._v("\n        購物車\n      ")]),t._v(" "),r("v-divider"),t._v(" "),r("v-stepper-step",{attrs:{complete:t.e1>2,step:"2",color:"#033"}},[t._v("\n        使用折扣碼\n      ")]),t._v(" "),r("v-divider"),t._v(" "),r("v-stepper-step",{attrs:{step:"3",color:"#033"}},[t._v("\n        訂單完成\n      ")])],1),t._v(" "),r("v-stepper-items",[r("v-stepper-content",{attrs:{step:"1"}},[r("v-card",{staticClass:"mb-5",attrs:{color:"grey lighten-1",height:t.countsfixed}},[r("client-only",[r("div",{staticClass:"moneyform"},[0===t.cart.length?r("h2",{staticClass:"noproduct"},[t._v("\n                購物車內無商品，請返回產品列表選購 !\n              ")]):r("table",[r("thead",[r("tr",[r("th",{staticStyle:{width:"300px"}},[t._v("\n                      商品圖片\n                    ")]),t._v(" "),r("th",[t._v("商品名稱")]),t._v(" "),r("th",[t._v("價格")]),t._v(" "),r("th",[t._v("數量")]),t._v(" "),r("th",[t._v("小計")]),t._v(" "),r("th",[t._v("刪除")])])]),t._v(" "),r("tbody",t._l(t.cart,(function(e,n){return r("tr",{key:n},[r("td",[r("img",{attrs:{src:e.img,alt:""}})]),t._v(" "),r("td",[t._v(t._s(e.name))]),t._v(" "),r("td",[t._v(t._s(e.afterprice))]),t._v(" "),r("td",[r("div",{staticClass:"inputtotal"},[r("button",{on:{click:function(r){return r.stopPropagation(),t.subcountcart(e)}}},[t._v("\n                          -\n                        ")]),t._v(" "),r("div",{staticClass:"output"},[r("input",{attrs:{type:"text"},domProps:{value:e.count},on:{change:function(r){return t.changecountcart(e,r)},input:t.onlynumber}})]),t._v(" "),r("button",{on:{click:function(r){return r.stopPropagation(),t.pluscountcart(e)}}},[t._v("\n                          +\n                        ")])])]),t._v(" "),r("td",[r("div",{staticClass:"totalcount"},[t._v("\n                        "+t._s(e.count*e.afterprice)+"\n                      ")])]),t._v(" "),r("td",[r("button",{on:{click:function(r){return r.stopPropagation(),t.deletecart(e)}}},[t._v("\n                        刪除\n                      ")])])])})),0)]),t._v(" "),r("div",{staticClass:"countabsolute"},[r("div",{ref:"countfixed",staticClass:"countfixed"},[r("div",{staticClass:"totalcount"},[r("div",{staticClass:"totalcountheader"},[t._v("\n                      金額總計\n                    ")]),t._v(" "),0==t.count?r("div",{staticClass:"totalcountmain"},[t._v("\n                      0\n                    ")]):r("div",{staticClass:"totalcountmain"},[t._v("\n                      $ "+t._s(t.count)+"\n                    ")])]),t._v(" "),r("button",{staticClass:"nextstop",on:{click:function(e){return e.stopPropagation(),t.checklogin(e)}}},[t._v("\n                    下一步\n                  ")]),t._v(" "),r("button",{staticClass:"goshop",on:{click:function(e){return e.stopPropagation(),t.$router.push("/product/all")}}},[t._v("\n                    繼續購物\n                  ")])])])])])],1)],1),t._v(" "),r("v-stepper-content",{attrs:{step:"2"}},[r("v-card",{staticClass:"mb-5",attrs:{color:"grey lighten-1",height:"500px"}},[r("div",{staticClass:"cheapcode"},[r("div",{staticClass:"usecode"},[t._v("\n              使用折扣碼:\n            ")]),t._v(" "),r("div",{staticClass:"inputcode"},[r("div",{staticClass:"inputbuttoncode"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.mrLight,expression:"mrLight"}],attrs:{type:"text"},domProps:{value:t.mrLight},on:{input:function(e){e.target.composing||(t.mrLight=e.target.value)}}}),r("button",{on:{click:t.checkCode}},[t._v("\n                  套用折扣碼\n                ")])]),t._v(" "),r("i",[t._v("請輸入"),r("b",[t._v("MrLight")]),t._v("即享30元優惠")])]),t._v(" "),r("div",{staticClass:"buttonstop"},[r("button",{staticClass:"beforestop",on:{click:t.takeCode}},[t._v("\n                上一步\n              ")]),t._v(" "),r("button",{staticClass:"nextstop",on:{click:t.ecpay}},[t._v("\n                下一步\n              ")])]),t._v(" "),r("div",{ref:"ecpay"})])])],1),t._v(" "),r("v-stepper-content",{attrs:{step:"3"}},[r("v-card",{staticClass:"mb-5",attrs:{color:"grey lighten-1",height:"200px",dark:""}}),t._v(" "),r("div",{staticClass:"buttonstop"},[r("button",{staticClass:"beforestop",on:{click:function(e){t.e1=2}}},[t._v("\n            上一步\n          ")]),t._v(" "),r("button",{staticClass:"nextstop"},[t._v("\n            送出\n          ")])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VDivider:x,VStepper:C,VStepperContent:P,VStepperHeader:L,VStepperItems:B,VStepperStep:z})}}]);