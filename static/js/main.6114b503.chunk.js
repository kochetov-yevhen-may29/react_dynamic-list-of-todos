(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var s=c(9),a=c.n(s),n=c(10),l=c(8),i=c(2),r=c(4),d=c.n(r),o=c(1),j=c.n(o),u=(c(16),c(17),c(5)),b=c.n(u),h=c(0),m=j.a.memo((function(e){var t=e.todos,c=e.todoId,s=e.setSelectedTodo;return Object(h.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsxs)("tbody",{children:[t.map((function(e){return e.completed?Object(h.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(h.jsx)("td",{className:"is-vcentered",children:e.id}),Object(h.jsx)("td",{className:"is-vcentered",children:Object(h.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("td",{className:"is-vcentered is-expanded",children:Object(h.jsx)("p",{className:b()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(e)},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:b()({"far fa-eye-slash":e.id===c,"far fa-eye":e.id!==c})})})})})]},e.id):Object(h.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(h.jsx)("td",{className:"is-vcentered",children:e.id}),Object(h.jsx)("td",{className:"is-vcentered"}),Object(h.jsx)("td",{className:"is-vcentered is-expanded",children:Object(h.jsx)("p",{className:b()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(e)},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:b()({"far fa-eye-slash":e.id===c,"far fa-eye":e.id!==c})})})})})]},e.id)})),";"]})]})})),x=j.a.memo((function(e){var t=e.filter,c=e.onFilter,s=e.select,a=e.onSelect;return Object(h.jsxs)("form",{className:"field has-addons",children:[Object(h.jsx)("p",{className:"control",children:Object(h.jsx)("span",{className:"select",children:Object(h.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){return a(e.target.value)},children:[Object(h.jsx)("option",{value:"all",children:"All"}),Object(h.jsx)("option",{value:"active",children:"Active"}),Object(h.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(h.jsx)("input",{value:t,onChange:function(e){return c(e.target.value)},"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search..."}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(h.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(h.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c("")}})})]})]})})),O=(c(19),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),f=j.a.memo((function(e){var t=e.todo,c=e.user,s=e.setUser,a=e.setSelectedTodo;return Object(h.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(h.jsx)("div",{className:"modal-background"}),!c&&Object(h.jsx)(O,{}),c&&Object(h.jsxs)("div",{className:"modal-card",children:[Object(h.jsxs)("header",{className:"modal-card-head",children:[Object(h.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(h.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){a(null),s(null)}})]}),Object(h.jsxs)("div",{className:"modal-card-body",children:[Object(h.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(h.jsxs)("p",{className:"block","data-cy":"modal-user",children:[(null===t||void 0===t?void 0:t.completed)&&Object(h.jsx)("strong",{className:"has-text-success",children:"Done"}),!(null!==t&&void 0!==t&&t.completed)&&Object(h.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(h.jsx)("a",{href:"mailto:".concat(null===c||void 0===c?void 0:c.email),children:null===c||void 0===c?void 0:c.name})]})]})]})]})}));function v(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var p,N=function(){return v("/todos")},y=function(e){return v("/users/".concat(e))};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(p||(p={}));var g=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!1),r=Object(i.a)(a,2),j=r[0],u=r[1],b=Object(o.useState)(""),v=Object(i.a)(b,2),g=v[0],k=v[1],w=Object(o.useState)(p.All),S=Object(i.a)(w,2),C=S[0],T=S[1],A=Object(o.useState)(null),E=Object(i.a)(A,2),I=E[0],_=E[1],B=Object(o.useState)(null),L=Object(i.a)(B,2),F=L[0],J=L[1];function P(){return(P=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,N();case 4:t=e.sent,s(t),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:return e.prev=11,u(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}function U(){return(U=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==I){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,y(null===I||void 0===I?void 0:I.userId);case 5:t=e.sent,J(t),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(2),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function D(){var e=Object(n.a)(c);if(g&&(e=e.filter((function(e){var t=e.title.toLowerCase(),c=g.trim().toLowerCase();return t.includes(c)}))),C)switch(C){case p.All:return e;case p.Active:return e.filter((function(e){return!1===e.completed}));case p.Completed:return e.filter((function(e){return!0===e.completed}));default:return e}return e}Object(o.useEffect)((function(){!function(){P.apply(this,arguments)}()}),[]),Object(o.useEffect)((function(){!function(){U.apply(this,arguments)}()}),[null===I||void 0===I?void 0:I.id,null===F||void 0===F?void 0:F.id]);var M=Object(o.useMemo)((function(){return D()}),[D,g,p]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("h1",{className:"title",children:"Todos:"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(x,{filter:g,onFilter:k,select:C,onSelect:T})}),Object(h.jsxs)("div",{className:"block",children:[!j&&Object(h.jsx)(m,{todos:M,todoId:(null===I||void 0===I?void 0:I.id)||0,setSelectedTodo:_}),j&&Object(h.jsx)(O,{})]})]})})}),I&&Object(h.jsx)(f,{todo:I,user:F,setUser:J,setSelectedTodo:_})]})};a.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.6114b503.chunk.js.map