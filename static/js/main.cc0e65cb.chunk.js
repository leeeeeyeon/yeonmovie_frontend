(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{56:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(30),r=n.n(i),a=n(8),o=n(2),j=n(11),l=n.n(j),d=n(18),u=n(12),h=n(13),b=n(15),p=n(14),m=n(31),O=n.n(m),x=(n(56),n(0));var v=function(e){var t=e.id,n=e.year,s=e.title,c=e.summary,i=e.poster,r=e.genres;return Object(x.jsx)(a.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:s,summary:c,poster:i,genres:r}},children:Object(x.jsxs)("div",{className:"movie",children:[Object(x.jsx)("img",{src:i,alt:s,title:s}),Object(x.jsxs)("div",{className:"movie_data",children:[Object(x.jsx)("h3",{className:"movie_title",children:s}),Object(x.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(x.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(x.jsx)("h5",{className:"movie_year",children:n}),Object(x.jsxs)("p",{className:"summary",children:[c.slice(0,180)," ..."]})]})]})})},f=(n(63),function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(l.a.mark((function t(){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getMovies();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(x.jsx)("section",{className:"container",children:t?Object(x.jsx)("div",{className:"loader",children:Object(x.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(x.jsx)("div",{className:"movies",children:n.map((function(e){return Object(x.jsx)(v,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(c.a.Component));n(64);var g=function(){return Object(x.jsxs)("div",{className:"about__container",children:[Object(x.jsx)("span",{children:"YeonMovie, Update ~ing"}),Object(x.jsxs)("span",{children:["To-Do",Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"CSS \ud070 \ud14c\ub450\ub9ac\ub294 \ubc14\uafb8\uc9c0 \ub9d0\uae30, \ub098 CSS \uc798 \ubab0\ub791"}),Object(x.jsx)("li",{children:"Node.js API\ub85c \ucf54\ub4dc \uc218\uc815"}),Object(x.jsx)("li",{children:"Themovie DB\ub85c API \ubc14\uafd4\ubcf4\uae30"}),Object(x.jsx)("li",{children:"\ud68c\uc6d0\uac00\uc785, \ub85c\uadf8\uc778, \ub85c\uadf8\uc544\uc6c3, \ud68c\uc6d0\uc815\ubcf4 \uc218\uc815, \ud68c\uc6d0\ud0c8\ud1f4"}),Object(x.jsx)("li",{children:"\uac8c\uc2dc\ud310"}),Object(x.jsx)("li",{children:"\uac80\uc0c9"}),Object(x.jsx)("li",{children:"\ub610 \ubb50\uac00 \uc788\uc744\uae4c"})]})]})]})};n(65);var y=function(){return Object(x.jsxs)("div",{className:"login__container",children:[Object(x.jsx)("h4",{children:"Login"}),Object(x.jsxs)("form",{action:"/auth/login_process",method:"post",children:[Object(x.jsx)("p",{children:Object(x.jsx)("input",{type:"text",name:"id",placeholder:"id"})}),Object(x.jsx)("p",{children:Object(x.jsx)("input",{type:"password",name:"pwd",placeholder:"password"})}),Object(x.jsx)("p",{children:Object(x.jsx)("input",{type:"submit",value:"login"})})]})]})};n(66);var _=function(){return Object(x.jsxs)("div",{className:"login__container",children:[Object(x.jsx)("h4",{children:"Register"}),Object(x.jsxs)("form",{action:"/auth/register_process",method:"post",children:[Object(x.jsx)("p",{children:Object(x.jsx)("input",{type:"text",name:"id",placeholder:"id"})}),Object(x.jsx)("p",{children:Object(x.jsx)("input",{type:"password",name:"pwd",placeholder:"password"})}),Object(x.jsx)("p",{children:Object(x.jsx)("input",{type:"password",name:"pwd2",placeholder:"password again"})}),Object(x.jsx)("p",{children:Object(x.jsx)("input",{type:"submit",value:"register"})})]})]})};n(67);var N=function(){return Object(x.jsx)("div",{className:"community__container",children:Object(x.jsx)("span",{children:"\uac8c\uc2dc\ud310 \uac1c\uc124 \uc911 ..."})})},w=(n(68),function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;console.log(t.state),void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(x.jsxs)("div",{className:"detail__container",children:[Object(x.jsx)("img",{src:e.state.poster,alt:e.state.title,title:e.state.title}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:["title: ",e.state.title]}),Object(x.jsxs)("li",{children:["year: ",e.state.year]}),Object(x.jsx)("li",{children:"genres"}),Object(x.jsx)("ul",{children:e.state.genres.map((function(e,t){return Object(x.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(x.jsxs)("li",{children:["summary: ",e.state.summary]})]})]}):null}}]),n}(c.a.Component));n(69);var k=function(){return Object(x.jsxs)("div",{className:"nav",children:[Object(x.jsx)(a.b,{to:"/",children:"Home"}),Object(x.jsx)(a.b,{to:"/about",children:"About"}),Object(x.jsx)(a.b,{to:"/community",children:"Community"}),Object(x.jsx)(a.b,{to:"/auth/login",children:"Login"}),Object(x.jsx)(a.b,{to:"/auth/register",children:"Register"})]})};n(70);var L=function(){return Object(x.jsxs)(a.a,{basename:"/yeonmovie_frontend",children:[Object(x.jsx)(k,{}),Object(x.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(x.jsx)(o.a,{path:"/about",component:g}),Object(x.jsx)(o.a,{path:"/auth/login",component:y}),Object(x.jsx)(o.a,{path:"/auth/register",component:_}),Object(x.jsx)(o.a,{path:"/community",component:N}),Object(x.jsx)(o.a,{path:"/movie/:id",component:w})]})};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(L,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.cc0e65cb.chunk.js.map