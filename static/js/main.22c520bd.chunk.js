(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={colors:"'../../colors.css'",bgcPrimary:"#e0e8e5",text:"#252b31",lightened:"#f6fafb",red:"#ff0000",ContactList:"ContactList_ContactList__2Tdav",ContactList__title:"ContactList_ContactList__title__3Jzd8",ContactList__item:"ContactList_ContactList__item__9s3gc",ContactList__name:"ContactList_ContactList__name__1bCdY",ContactList__phone:"ContactList_ContactList__phone__3P_zF",ContactList__icon:"ContactList_ContactList__icon__3Szeo"}},17:function(t,e,n){t.exports={colors:"'../../colors.css'",bgcPrimary:"#e0e8e5",darkened:"#597387",text:"#252b31",Form__wrap:"InputBox_Form__wrap__275N5",Form__label:"InputBox_Form__label__2ZQOE",Form__input:"InputBox_Form__input__1bAbu"}},19:function(t,e,n){t.exports={colors:"'../../colors.css'",bgcPrimary:"#e0e8e5",darkened:"#597387",text:"#252b31",white:"#ffffff",Form:"Form_Form__1PpjY",Form__btn:"Form_Form__btn__1JVAC"}},20:function(t,e,n){t.exports={Filter__wrap:"Filter_Filter__wrap__2YlAB",Filter__title:"Filter_Filter__title__3J8AP"}},40:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(13),o=n.n(c),i=n(5),l=n(16),s=n(25),u=n(8),_=localStorage.getItem("al-phonebook"),b=JSON.parse(_),m=(null===b||void 0===b?void 0:b.length)>=1?b:[],d=Object(l.b)({name:"contacts",initialState:{items:m,filter:""},reducers:{addContact:function(t,e){return Object(u.a)(Object(u.a)({},t),{},{items:[].concat(Object(s.a)(t.items),[e.payload])})},deleteContact:function(t,e){return Object(u.a)(Object(u.a)({},t),{},{items:t.items.filter((function(t){return t.id!==e.payload}))})},setFilter:function(t,e){return Object(u.a)(Object(u.a)({},t),{},{filter:e.payload})}}}),j=d.actions,h=j.addContact,f=j.deleteContact,p=j.setFilter,O=d.reducer,x=Object(l.a)({reducer:{contacts:O}}),C=n(24),F=n(2),v=Object(C.a)({PageTitle:{marginBottom:20,padding:10,textAlign:"center",color:"#252b31"}}),L=function(t){var e=t.title,n=v();return Object(F.jsx)("h1",{className:n.PageTitle,children:e})},g=n(15),N=n(26),w=n(17),y=n.n(w),P=function(t){var e=t.htmlFor,n=t.type,a=t.id,r=t.name,c=t.title,o=t.pattern,i=t.placeholder,l=t.required,s=t.value,u=t.labelText,_=t.onChange;return Object(F.jsxs)("div",{className:y.a.Form__wrap,children:[Object(F.jsx)("label",{htmlFor:e,className:y.a.Form__label,children:Object(F.jsx)("span",{children:u})}),Object(F.jsx)("input",{className:y.a.Form__input,type:n,id:a,name:r,title:c,pattern:"".concat("text"===o?"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$":"^[+]{0,1}[ .()0-9-]{3,8}[0-9. -]{3,11}$"),placeholder:i,required:l,onChange:_,value:s})]})};P.defaultProps={title:"Please enter some text",required:!0,labelText:"Label for --\x3e"};var k=P,S=n(19),A=n.n(S),T=function(){var t=Object(a.useState)({name:"",number:""}),e=Object(N.a)(t,2),n=e[0],r=e[1],c=Object(i.c)((function(t){return t.contacts})).items,o=Object(i.b)(),l=function(t){var e=t.target,n=e.name,a=e.value;return r((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(g.a)({},n,a))}))};return Object(F.jsxs)("form",{className:A.a.Form,onSubmit:function(t){t.preventDefault();var e=n.name,a=n.number,i={id:"id-".concat(Math.ceil(1e5*Math.random())),name:e,number:a};!function(t){return null===c||void 0===c?void 0:c.find((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(e)?o(h(i)):alert("".concat(e," is already in contacts")),r({name:"",number:""})},children:[Object(F.jsx)(k,{labelText:"Name",htmlFor:"name",type:"text",id:"name",name:"name",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",pattern:"text",placeholder:"Name",required:!0,value:n.name,onChange:l}),Object(F.jsx)(k,{labelText:"Phone number",htmlFor:"tel",type:"tel",id:"tel",name:"number",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u0442\u043e\u0447\u043a\u0438, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",pattern:"phone",placeholder:"Phone Number",required:!0,value:n.number,onChange:l}),Object(F.jsx)("button",{className:A.a.Form__btn,type:"submit",children:"Submit"})]})},z=n(0),J=n(23),B=n(10),q=n.n(B),I=function(){var t=Object(i.c)((function(t){return t.contacts})),e=t.items,n=t.filter,a=Object(i.b)(),r=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(e,n);return Object(F.jsxs)("div",{className:q.a.ContactList,children:[Object(F.jsx)("h3",{className:q.a.ContactList__title,children:"Contact List"}),Object(F.jsx)("ul",{children:r.map((function(t){return Object(F.jsxs)("li",{className:q.a.ContactList__item,children:[Object(F.jsx)("p",{className:q.a.ContactList__name,children:t.name}),Object(F.jsx)("p",{className:q.a.ContactList__phone,children:t.number}),Object(F.jsx)(z.b.Provider,{value:{color:"inherit",size:"1.2rem",className:"global-class-name",title:"delete"},children:Object(F.jsx)("div",{onClick:function(){return a(f(t.id))},children:Object(F.jsx)(J.a,{className:q.a.ContactList__icon})})})]},t.id)}))})]})},M=n(20),Z=n.n(M),E=function(){var t=Object(i.c)((function(t){return t.contacts})).filter,e=Object(i.b)();return Object(F.jsxs)("div",{className:Z.a.Filter__wrap,children:[Object(F.jsx)("h3",{className:Z.a.Filter__title,children:"Search"}),Object(F.jsx)(k,{labelText:"Find Name",htmlFor:"filter",type:"text",id:"filter",name:"filter",pattern:"text",placeholder:"Name",required:!1,value:t,onChange:function(t){return e(p(t.currentTarget.value))}})]})},Y=function(){var t=Object(i.c)((function(t){return t.contacts})).items;return Object(a.useEffect)((function(){return localStorage.setItem("al-phonebook",JSON.stringify(t))}),[t]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(L,{title:"HomeWork #6 (Phonebook) of React"}),Object(F.jsx)(T,{}),Object(F.jsx)(E,{}),Object(F.jsx)(I,{})]})};n(40),n(41);o.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(i.a,{store:x,children:Object(F.jsx)(Y,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.22c520bd.chunk.js.map