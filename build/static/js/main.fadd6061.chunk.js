(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),o=(n(11),n(2)),u=n.n(o),s=n(5),i=n(1),m=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("h1",null,"loading..."))},f=function(e){var t=e.id,n=e.image,c=e.info,l=e.name,o=e.price,u=e.removeTour,s=Object(a.useState)(!0),m=Object(i.a)(s,2),f=m[0],E=m[1];return r.a.createElement("article",{className:"single-tour"},r.a.createElement("img",{src:n,alt:l}),r.a.createElement("footer",null,r.a.createElement("div",{className:"tour-info"},r.a.createElement("h4",null,l),r.a.createElement("h4",{className:"tour-price"},"$",o)),r.a.createElement("p",null,f?"".concat(c.substring(0,200),"..."):c,r.a.createElement("button",{onClick:function(){return E(!f)}},f?"read more":"show less")),r.a.createElement("button",{className:"delete-btn",onClick:function(){return u(t)}},"not interested")))},E=function(e){var t=e.tours,n=e.removeTour;return r.a.createElement("main",null,t.map((function(e){return r.a.createElement(f,Object.assign({key:e.id},e,{removeTour:n}))})))};var b=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),o=Object(i.a)(l,2),f=o[0],b=o[1],p=Object(a.useState)(!0),d=Object(i.a)(p,2),v=d[0],h=d[1],g=function(){var e=Object(s.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,fetch("https://course-api.com/react-tours-project");case 4:if(!((t=e.sent).status>=200&&t.status<=299)){e.next=13;break}return e.next=8,t.json();case 8:n=e.sent,h(!1),c(n),e.next=16;break;case 13:h(!1),b(!0),console.log(t.statusText);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){g()}),[]),v?r.a.createElement(m,null):f?r.a.createElement("h1",{className:"loading"},"Error loading page..."):0===n.length?r.a.createElement("main",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"no tours left"),r.a.createElement("button",{className:"btn",onClick:function(){return g()}},"refresh"))):r.a.createElement(E,{tours:n,removeTour:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}})};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.fadd6061.chunk.js.map