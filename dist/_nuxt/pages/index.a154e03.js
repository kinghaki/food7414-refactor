(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{284:function(t,e,o){var content=o(363);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("57faf8c7",content,!0,{sourceMap:!1})},357:function(t,e,o){t.exports=o.p+"img/日式胡麻雞.c990b10.jpg"},358:function(t,e,o){t.exports=o.p+"img/法式地榮珠.4bfdb8b.jpg"},359:function(t,e,o){t.exports=o.p+"img/置燒牛小排.93b2970.jpg"},360:function(t,e,o){t.exports=o.p+"img/態勢輕靈機.02c9c55.jpg"},361:function(t,e,o){t.exports=o.p+"img/韓式辣醬雞.757d347.jpg"},362:function(t,e,o){"use strict";var n=o(284);o.n(n).a},363:function(t,e,o){(e=o(39)(!1)).push([t.i,"#index[data-v-9c6f4eae]{padding:20px 0 0}#index>.wholeproduct[data-v-9c6f4eae]{text-align:center;margin-top:70px}#index>.wholeproduct>h2[data-v-9c6f4eae]{background-color:#f0f1e5;display:inline-block;padding:0;margin:0}#index>.wholeproduct>.producttext[data-v-9c6f4eae]{border:3px ridge pink;margin-top:-15px;padding:40px 0;font-weight:550;color:#3f5d45;font-size:18px;letter-spacing:2px;line-height:50px}#index>.productintro[data-v-9c6f4eae]{text-align:center;margin-top:100px}#index>.productintro>.productmain[data-v-9c6f4eae]{padding:0 10%;height:1970px}@media screen and (max-width:979px){#index>.productintro>.productmain[data-v-9c6f4eae]{padding:0;height:1970px}}@media screen and (max-width:649px){#index>.productintro>.productmain[data-v-9c6f4eae]{padding:0;height:1100px}}#index>.productintro>.productmain li[data-v-9c6f4eae]{display:flex;align-items:center;margin-top:70px}#index>.productintro>.productmain li>[class^=productimgback][data-v-9c6f4eae]{position:relative}@media screen and (max-width:649px){#index>.productintro>.productmain li>[class^=productimgback]>img[data-v-9c6f4eae]{width:150px;height:150px}}#index>.productintro>.productmain li>[class^=productimgback]>div[data-v-9c6f4eae]{display:none;position:absolute;top:0;background-color:#a7a7a7;width:100%;height:100%}#index>.productintro>.productmain li>[class^=productimgback]>p[data-v-9c6f4eae]{display:none;position:absolute;line-height:335px;height:100%;top:0;bottom:0;left:0;right:0;margin:auto;font-size:25px;color:#fff}@media screen and (max-width:649px){#index>.productintro>.productmain li>[class^=productimgback]>p[data-v-9c6f4eae]{line-height:150px}}#index>.productintro>.productmain li>div:hover>div[data-v-9c6f4eae]{display:block;opacity:.5}#index>.productintro>.productmain li>div:hover>p[data-v-9c6f4eae]{display:block}#index>.productintro>.productmain li>p[data-v-9c6f4eae]{width:500px;padding:0 20px;letter-spacing:2px;line-height:1.8}@media screen and (min-width:650px) and (max-width:979px){#index>.productintro>.productmain li>p[data-v-9c6f4eae]{width:300px;padding:0 10px}}@media screen and (max-width:649px){#index>.productintro>.productmain li>p[data-v-9c6f4eae]{width:170px;padding:0 10px;font-size:14px}}#index>.productintro>.productmain li[data-v-9c6f4eae]:nth-child(2n){flex-direction:row-reverse}.gotop[data-v-9c6f4eae]{position:fixed;right:35px;bottom:20px;background-color:green;border-radius:50%;z-index:1;cursor:pointer}.gotop>.svg_box[data-v-9c6f4eae]{position:relative;width:60px;height:60px;box-sizing:border-box;padding:5px;border-radius:50%}.gotop>.svg_box>.tran[data-v-9c6f4eae]{border:20px solid transparent;border-bottom-color:#fff;position:absolute;top:0;left:10px}",""]),t.exports=e},377:function(t,e,o){"use strict";o.r(e);o(26);var n=o(2),r={name:"Index",layout:"front",fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.store,n=t.$axios,e.next=3,n.post("/api/USER/checkLogin");case 3:if(r=e.sent,!r.data){e.next=8;break}return e.next=8,o.dispatch("cart/createUSERCart");case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{productimg1:!0,productimg2:!0,productimg3:!0,productimg4:!0,productimg5:!0}},created:function(){},mounted:function(){},destroyed:function(){},methods:{display:function(){window.removeEventListener("scroll",this.display);var t=this;[{ref:"productimg1",show:"productimg1"},{ref:"productimg2",show:"productimg2"},{ref:"productimg3",show:"productimg3"},{ref:"productimg4",show:"productimg4"},{ref:"productimg5",show:"productimg5"}].forEach((function(e,i){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)+(document.documentElement.clientHeight||document.body.clientHeight)>=t.$refs[e.ref].offsetTop?t[e.show]=!0:t[e.show]=!1})),window.addEventListener("scroll",this.display)},scrollby:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}},c=(o(362),o(24)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"index"}},[t._m(0),t._v(" "),n("div",{staticClass:"productintro"},[n("h2",[t._v("主餐介紹")]),t._v(" "),n("ul",{staticClass:"productmain"},[n("transition",{attrs:{"enter-active-class":"animated bounceInLeft",name:"1"}},[n("li",{directives:[{name:"show",rawName:"v-show",value:t.productimg1,expression:"productimg1"}],ref:"productimg1"},[n("div",{staticClass:"productimgback1"},[n("img",{attrs:{src:o(357),alt:""}}),t._v(" "),n("div"),t._v(" "),n("p",[t._v("日式胡麻雞")])]),t._v(" "),n("p",[t._v("\n            低溫烹調的黑豬腰內肉\n            拌上綿密而風味濃郁的法式第戎芥末醬\n            甜鹹酸三味調和，肉甜而香氣四溢\n            讓人不禁想喊一句：Ahhh, Dijon~~\n          ")])])]),t._v(" "),n("transition",{attrs:{"enter-active-class":"animated bounceInRight","leave-active-class":"animated backInLeft",name:"2"}},[n("li",{directives:[{name:"show",rawName:"v-show",value:t.productimg2,expression:"productimg2"}],ref:"productimg2"},[n("div",{staticClass:"productimgback2"},[n("img",{attrs:{src:o(358),alt:""}}),t._v(" "),n("div"),t._v(" "),n("p",[t._v("法式第戎豬")])]),t._v(" "),n("p",[t._v("\n            味甘性溫，清爽開胃且濃香下飯\n            胡色玉漿，焙煎淋肉令食指大動\n          ")])])]),t._v(" "),n("transition",{attrs:{"enter-active-class":"animated bounceInLeft","leave-active-class":"animated bounceOutRight",name:"3"}},[n("li",{directives:[{name:"show",rawName:"v-show",value:t.productimg3,expression:"productimg3"}],ref:"productimg3"},[n("div",{staticClass:"productimgback3"},[n("img",{attrs:{src:o(359),alt:""}}),t._v(" "),n("div"),t._v(" "),n("p",[t._v("炙燒牛小排")])]),t._v(" "),n("p",[t._v("\n            肋脊部位的牛小排，舒肥後再經過炙燒\n            口感軟嫩飽含肉汁，一口咬下肉甜四溢\n            餘香繞喉三刻不絕，是幸福的滋味🥺\n          ")])])]),t._v(" "),n("transition",{attrs:{"enter-active-class":"animated bounceInRight","leave-active-class":"animated bounceOutRight",name:"4"}},[n("li",{directives:[{name:"show",rawName:"v-show",value:t.productimg4,expression:"productimg4"}],ref:"productimg4"},[n("div",{staticClass:"productimgback4"},[n("img",{attrs:{src:o(360),alt:""}}),t._v(" "),n("div"),t._v(" "),n("p",[t._v("泰式輕檸雞")])]),t._v(" "),n("p",[t._v("\n            清新自然的檸香，拂動著味蕾\n            當泰式酸辣遇上鮮嫩雞胸，涼爽解暑又開胃\n            是，夏日的滋味😆\n          ")])])]),t._v(" "),n("transition",{attrs:{"enter-active-class":"animated bounceInLeft","leave-active-class":"animated bounceOutRight",name:"5"}},[n("li",{directives:[{name:"show",rawName:"v-show",value:t.productimg5,expression:"productimg5"}],ref:"productimg5"},[n("div",{staticClass:"productimgback5"},[n("img",{attrs:{src:o(361),alt:""}}),t._v(" "),n("div"),t._v(" "),n("p",[t._v("韓式辣醬雞")])]),t._v(" "),n("p",[t._v("\n            鮮嫩的舒肥雞胸裹上橘紅醬汁\n            灑上綴香的白芝麻，拌炒洋蔥的香氣\n            入口甜鹹後韻微辛，讓人上癮的小辣\n          ")])])])],1)]),t._v(" "),n("iframe",{staticStyle:{border:"1px solid black","margin-top":"100px"},attrs:{width:"100%",height:"450",frameborder:"0",src:"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ8UZ1jEKrQjQRWwqL7cRA9LQ&key=AIzaSyCfmUunVfGooiCaS2Etvd7e7dB50TTUCSQ",allowfullscreen:""}}),t._v(" "),n("div",{staticClass:"gotop",on:{click:t.scrollby}},[t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wholeproduct"},[e("h2",[this._v("\n      創店宗旨\n    ")]),this._v(" "),e("div",{staticClass:"producttext"},[this._v("\n      由於現代人工作相當忙碌，進而導致飲食都相當不正常，然而很多人都常常說要減肥，而採用節食法，雖然短期之內會看到效果，但之後容易復胖。\n      然而正確的方法應該是要運動搭配正確飲食，所以大家來吃我們的高蛋白低卡餐就對了，我們每項食物都是經過最嚴格的把關做出來的，歡迎大家來嘗鮮看看唷!\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"svg_box"},[e("div",{staticClass:"tran"})])}],!1,null,"9c6f4eae",null);e.default=component.exports}}]);