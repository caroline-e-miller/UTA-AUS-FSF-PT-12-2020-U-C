(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{12:function(e,t,n){e.exports=n(37)},17:function(e,t,n){},18:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),c=n.n(l),o=n(11);var i=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)};n(17);var u=function(e){return r.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};function s(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function m(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function d(e){var t=e.size,n=e.children;return r.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},n)}n(18);function E(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function f(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}function h(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function v(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function b(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var p=n(2),g=n.n(p),N=function(){return g.a.get("/api/books")};var y=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){N().then((function(e){l(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(s,{fluid:!0},r.a.createElement(m,null,r.a.createElement(d,{size:"md-6"},r.a.createElement(i,null,r.a.createElement("h1",null,"What Books Should I Read?")),r.a.createElement("form",null,r.a.createElement(h,{name:"title",placeholder:"Title (required)"}),r.a.createElement(h,{name:"author",placeholder:"Author (required)"}),r.a.createElement(v,{name:"synopsis",placeholder:"Synopsis (Optional)"}),r.a.createElement(b,null,"Submit Book"))),r.a.createElement(d,{size:"md-6 sm-12"},r.a.createElement(i,null,r.a.createElement("h1",null,"Books On My List")),n.length?r.a.createElement(E,null,n.map((function(e){return r.a.createElement(f,{key:e._id},r.a.createElement("a",{href:"/books/"+e._id},r.a.createElement("strong",null,e.title," by ",e.author)),r.a.createElement(u,null))}))):r.a.createElement("h3",null,"No Results to Display"))))};var j=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))};var k=function(){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(y,null))};c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.d4095b26.chunk.js.map