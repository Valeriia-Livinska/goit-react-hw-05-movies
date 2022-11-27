"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[395],{792:function(n,t,e){e.d(t,{s:function(){return h}});var r,a,i,o,u=e(731),c=e(689),p=e(168),s=e(444),f=s.ZP.ul(r||(r=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  margin-left: auto;\n  margin-right: auto;\n"]))),d=s.ZP.li(a||(a=(0,p.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  max-width: 300px;\n  border: 1px solid #95b1b0;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),l=s.ZP.img(i||(i=(0,p.Z)(["\n  width: 100%;\n  height: 417px;\n  border-radius: 5px;\n  overflow: hidden;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: pointer;\n  }\n"]))),x=s.ZP.p(o||(o=(0,p.Z)(["\n  font-weight: 600;\n"]))),g=e(184),h=function(n){var t=n.movies,e=(0,c.TH)();return(0,g.jsx)("main",{children:(0,g.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.poster_path,a=n.title,i=n.name,o=null!==r?"https://image.tmdb.org/t/p/w300".concat(r):"https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj";return(0,g.jsx)(d,{children:(0,g.jsxs)(u.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,g.jsx)(l,{src:o,alt:a||i}),(0,g.jsx)(x,{children:a||i})]})},t)}))})})}},65:function(n,t,e){e.d(t,{E3:function(){return s},Hx:function(){return d},Mc:function(){return p},Tg:function(){return c},uV:function(){return f}});var r=e(861),a=e(757),i=e.n(a),o=e(388),u="c40ae92f6b073ed52dd8d039ab6b6211";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/all/day?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},395:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,i,o=e(861),u=e(885),c=e(757),p=e.n(c),s=e(791),f=e(731),d=e(65),l=e(792),x=e(168),g=e(444),h=g.ZP.form(r||(r=(0,x.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);\n       0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),m=g.ZP.button(a||(a=(0,x.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),b=g.ZP.input(i||(i=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  background-color: #ffffff;\n"]))),v=e(185),w=e(184),Z=function(){var n=(0,s.useState)(""),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,s.useState)([]),i=(0,u.Z)(a,2),c=i[0],x=i[1],g=(0,f.lr)(),Z=(0,u.Z)(g,2),k=Z[0],y=Z[1];(0,s.useEffect)((function(){var n,t=null!==(n=k.get("query"))&&void 0!==n?n:"";function e(){return(e=(0,o.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.E3)(t);case 3:e=n.sent,x(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("error");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}t&&function(){e.apply(this,arguments)}()}),[k]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(h,{onSubmit:function(n){n.preventDefault(),y(""!==e?{query:e}:{})},children:[(0,w.jsx)(m,{type:"submit",children:(0,w.jsx)(v.dVI,{size:"2em"})}),(0,w.jsx)(b,{type:"text",name:"input",autocomplete:"off",autoFocus:!0,placeholder:"Search movie by name",value:e,onChange:function(n){return r(n.target.value)}})]}),c.length>0&&(0,w.jsx)(l.s,{movies:c})]})}}}]);
//# sourceMappingURL=395.2b35837b.chunk.js.map