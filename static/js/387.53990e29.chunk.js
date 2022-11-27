"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,t,r){r.r(t),r.d(t,{default:function(){return Z}});var e,a,c,u,i=r(861),o=r(885),p=r(757),s=r.n(p),f=r(689),d=r(791),l=r(65),x=r(168),g=r(444),h=g.ZP.ul(e||(e=(0,x.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  margin-left: auto;\n  margin-right: auto;\n"]))),v=g.ZP.li(a||(a=(0,x.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  max-width: 200px;\n  border: 1px solid #95b1b0;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),m=g.ZP.img(c||(c=(0,x.Z)(["\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  object-fit: cover;\n"]))),b=g.ZP.p(u||(u=(0,x.Z)(["\n  font-weight: 600;\n  text-align: center;\n"]))),w=r(184),Z=function(){var n=(0,d.useState)(null),t=(0,o.Z)(n,2),r=t[0],e=t[1],a=(0,f.UO)().movieId;return(0,d.useEffect)((function(){function n(){return(n=(0,i.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.uV)(a);case 3:t=n.sent,e(t.cast),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("error");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[a]),r?(0,w.jsx)(h,{children:r.map((function(n){var t=n.character,r=n.name,e=n.profile_path,a=null!==e?"https://image.tmdb.org/t/p/w200".concat(e):"https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj";return(0,w.jsxs)(v,{children:[(0,w.jsx)(m,{src:a,alt:r}),(0,w.jsx)(b,{children:r}),(0,w.jsx)("p",{children:"Character: "}),(0,w.jsx)("p",{children:t})]},r)}))}):null}},65:function(n,t,r){r.d(t,{E3:function(){return s},Hx:function(){return d},Mc:function(){return p},Tg:function(){return o},uV:function(){return f}});var e=r(861),a=r(757),c=r.n(a),u=r(388),i="c40ae92f6b073ed52dd8d039ab6b6211";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/all/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.53990e29.chunk.js.map