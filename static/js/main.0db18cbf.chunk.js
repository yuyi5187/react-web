(this["webpackJsonpreact-for-beginners"]=this["webpackJsonpreact-for-beginners"]||[]).push([[0],{11:function(e,t,n){e.exports={containter:"Home_containter__2Khlm",loader:"Home_loader__27KVz",movies:"Home_movies__UUnOh"}},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),s=n(13),c=n.n(s),a=n(8),o=n(1),m=n(6),j=n.n(m),u=n(9),v=n(4),l=n(5),d=n.n(l),_=n(7),b=n.n(_),h=n(2);function O(e){var t=e.id,n=e.year,r=e.coverImg,i=e.title,s=e.summary,c=e.genres;return Object(h.jsxs)("div",{className:b.a.movie,children:[Object(h.jsx)("img",{src:r,alt:i,className:b.a.movie_img}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:b.a.movie_title,children:Object(h.jsx)(a.b,{to:"/movie/".concat(t),children:i})}),Object(h.jsx)("h3",{className:b.a.movie_year,children:n}),Object(h.jsx)("p",{children:s.length>235?"".concat(s.slice(0,235),"..."):s}),Object(h.jsx)("ul",{className:b.a.movie_genres,children:c.map((function(e){return Object(h.jsx)("li",{children:e},e)}))})]})]})}O.prototype={id:d.a.number.isRequired,coverImg:d.a.string.isRequired,title:d.a.string.isRequired,summary:d.a.string.isRequired,genres:d.a.arrayOf(d.a.string).isRequired};var x=O,f=n(11),p=n.n(f);var g=function(){var e=Object(r.useState)(!0),t=Object(v.a)(e,2),n=t[0],i=t[1],s=Object(r.useState)([]),c=Object(v.a)(s,2),a=c[0],o=c[1],m=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,o(t.data.movies),i(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){m()}),[]),Object(h.jsx)("div",{className:p.a.container,children:n?Object(h.jsx)("div",{className:p.a.loader,children:Object(h.jsx)("span",{children:"Loading..."})}):Object(h.jsx)("div",{className:p.a.movies,children:a.map((function(e){return Object(h.jsx)(x,{id:e.id,year:e.year,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var y=function(){var e=Object(o.g)().id,t=function(){var t=Object(u.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:n=t.sent,console.log(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){t()}),[]),Object(h.jsx)("h1",{children:"Detail"})};var N=function(){return Object(h.jsx)(a.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/react-for-beginners",element:Object(h.jsx)(g,{})}),Object(h.jsx)(o.a,{path:"/movie/:id",element:Object(h.jsx)(y,{})})]})})};n(22);c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={movie:"Movie_movie__15q92",movie_img:"Movie_movie_img__j2GVi",movie_title:"Movie_movie_title__2iEDl",movie_year:"Movie_movie_year__1nwN7",movie_genres:"Movie_movie_genres__3Y2Fr"}}},[[23,1,2]]]);
//# sourceMappingURL=main.0db18cbf.chunk.js.map