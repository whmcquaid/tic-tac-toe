(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(6),i=n.n(r),l=(n(13),n(14),n(7)),j=n(2);function u(e){var t=e.value,n=e.onClick;return Object(c.jsx)("button",{className:"square",onClick:n,children:t})}function o(e){var t=e.squares,n=e.onClick,a=function(e){return Object(c.jsx)(u,{value:t[e],onClick:function(){return n(e)}})};return Object(c.jsxs)("div",{className:"board-container",children:[Object(c.jsxs)("div",{className:"row",children:[a(0),a(1),a(2)]}),Object(c.jsxs)("div",{className:"row",children:[a(3),a(4),a(5)]}),Object(c.jsxs)("div",{className:"row",children:[a(6),a(7),a(8)]})]})}function b(e){var t=e.name,n=e.handleChange,a=e.name2,s=e.handleChange2;return Object(c.jsxs)("div",{className:"form-div",children:[Object(c.jsxs)("form",{className:"form1",children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(c.jsx)("input",{value:t,onChange:n,id:"name"})]}),t?Object(c.jsxs)("strong",{children:["X : ",t]}):"Please type your name",Object(c.jsxs)("div",{children:[Object(c.jsxs)("form",{className:"form2",children:[Object(c.jsx)("label",{htmlFor:"name2",children:"Name: "}),Object(c.jsx)("input",{value:a,onChange:s,id:"name2"})]}),a?Object(c.jsxs)("strong",{children:["O : ",a]}):"Please type your name"]})]})}var d=function(){var e=Object(a.useState)("X"),t=Object(j.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)("O"),i=Object(j.a)(r,2),u=i[0],d=i[1],h=Array(9).fill(null),O=Object(a.useState)(h),m=Object(j.a)(O,2),f=m[0],x=m[1],v=Object(a.useState)(!0),g=Object(j.a)(v,2),N=g[0],C=g[1],p=Object(a.useState)(null),y=Object(j.a)(p,2),S=y[0],k=y[1],q=Object(a.useState)([{squares:f}]),F=Object(j.a)(q,2),w=F[0],P=F[1],T=function(e){var t=Object(l.a)(f);if(!t[e]){t[e]=N?"X":"O",x(t);var n=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var c=Object(j.a)(t[n],3),a=c[0],s=c[1],r=c[2];if(e[a]===e[s]&&e[s]===e[r])return e[a]}return null}(t);n&&k(n),P(w.concat({squares:t})),C(!N)}},X=w.map((function(e,t){return Object(c.jsx)("li",{className:"history-list",children:Object(c.jsx)("button",{className:"history-button",onClick:function(){!function(e){C(e%2===0),x(w[e].squares),P(w.slice(0,e+1)),S&&k(null)}(t)},children:t?"Go to #"+t:w.length>1?"Restart":"Start the Game"})},t)}));return Object(c.jsxs)("div",{className:"game",children:[Object(c.jsx)("div",{className:"game-board",children:Object(c.jsx)(o,{onClick:function(e){return T(e)},squares:f})}),Object(c.jsxs)("div",{className:"game-info",children:[Object(c.jsx)("div",{children:S?"Winner is "+("X"===S?n:u):"Next Player is "+(N?n:u)}),Object(c.jsx)("ul",{children:X}),Object(c.jsx)(b,{name:n,handleChange:function(e){return s(e.target.value)},name2:u,handleChange2:function(e){return d(e.target.value)}})]})]})};var h=function(){return Object(c.jsxs)("div",{className:"app-container",children:[Object(c.jsx)("h1",{className:"title-h1",children:"Will's Tic-Tac-Toe Game"}),Object(c.jsx)(d,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.aaac46cb.chunk.js.map