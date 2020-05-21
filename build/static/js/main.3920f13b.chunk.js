(this["webpackJsonphigh-space-client"]=this["webpackJsonphigh-space-client"]||[]).push([[0],{51:function(e,t,a){e.exports=a(65)},56:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),s=(a(56),a(57),a(44)),d=a(6),o=a(47),u=a(8),i=l.a.createContext();function m(e,t){switch(t.type){case"setCustList":return Object(u.a)(Object(u.a)({},e),{},{custList:t.payload});case"setSelectedCust":return Object(u.a)(Object(u.a)({},e),{},{selectedCust:t.payload});case"setAddressList":return Object(u.a)(Object(u.a)({},e),{},{addressList:t.payload});case"setAddCustModal":return Object(u.a)(Object(u.a)({},e),{},{addCustModal:t.payload});case"setAddAddressModal":return Object(u.a)(Object(u.a)({},e),{},{addAddressModal:t.payload});case"setCustomer":return Object(u.a)(Object(u.a)({},e),{},{customer:Object(u.a)(Object(u.a)({},e.customer),t.payload)});case"setAddress":return Object(u.a)(Object(u.a)({},e),{},{address:Object(u.a)(Object(u.a)({},e.address),t.payload)});default:return e}}var p={custList:[],selectedCust:"",addressList:[],customer:{f_name:"",l_name:"",age:Number,sex:""},address:{cust_id:"",h_no:"",s_no:Number,city:"",state:""},addCustModal:!1,addAddressModal:!1};function E(e){var t=e.children,a=Object(n.useReducer)(m,p),r=Object(o.a)(a,2),c=r[0],s=r[1];return l.a.createElement(i.Provider,{value:Object(u.a)(Object(u.a)({},c),{},{dispatch:s})},t)}i.Consumer;var y=i,h=a(19),f=a.n(h),b=a(25),g=a(18),C=a(70),v=a(67),A=a(71),j=a(68),O=a(43),L=a(69);var w=function(e){var t=Object(n.useContext)(y);return l.a.createElement(C.a,Object.assign({show:t.addCustModal,onHide:function(){t.dispatch({type:"setAddCustModal",payload:!1})}},e,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(C.a.Header,null,l.a.createElement(C.a.Title,null,"Add Customer")),l.a.createElement(C.a.Body,null,l.a.createElement(v.a,{variant:"danger",style:{display:"none"},id:"add-alert"}),l.a.createElement(A.a,{onChange:function(e){var a=e.target.name,n=e.target.value;t.dispatch({type:"setCustomer",payload:Object(g.a)({},a,n)})},onSubmit:function(a){a.preventDefault();var n=new Headers;n.append("content-type","application/json"),fetch("/api/add_cust",{method:"post",body:JSON.stringify(t.customer),headers:n}).then(function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=2;break}throw new Error(t.statusText);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){e.fetchCustList(e.cust_id),t.dispatch({type:"setAddCustModal",payload:!1})})).catch((function(e){var t=document.getElementById("add-alert");t.style.display="block",t.innerHTML=e}))}},l.a.createElement(j.a,null,l.a.createElement(O.a,null,l.a.createElement(A.a.Group,{controlId:"formBasicFirstName"},l.a.createElement(A.a.Label,null,"First Name"),l.a.createElement(A.a.Control,{type:"text",placeholder:"Enter First Name",name:"f_name",required:!0}))),l.a.createElement(O.a,null,l.a.createElement(A.a.Group,{controlId:"formBasicLastName"},l.a.createElement(A.a.Label,null,"Last Name"),l.a.createElement(A.a.Control,{type:"text",placeholder:"Enter Last Name",name:"l_name",required:!0})))),l.a.createElement(j.a,null,l.a.createElement(O.a,null,l.a.createElement(A.a.Group,{controlId:"formBasicSex"},l.a.createElement(A.a.Label,null,"Sex"),l.a.createElement(A.a.Control,{type:"text",placeholder:"Enter Sex (M/F/O)",name:"sex",required:!0}))),l.a.createElement(O.a,null,l.a.createElement(A.a.Group,{controlId:"formBasicAge"},l.a.createElement(A.a.Label,null,"Age"),l.a.createElement(A.a.Control,{type:"number",placeholder:"Add Your Age",name:"age",required:!0})))),l.a.createElement(L.a,{variant:"primary",type:"submit"},"Add"))))},_=a(48);var k=function(e){var t=Object(n.useContext)(y);return l.a.createElement(C.a,Object.assign({show:t.addAddressModal,onHide:function(){t.dispatch({type:"setAddAddressModal",payload:!1})}},e,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(C.a.Header,null,l.a.createElement(C.a.Title,null,"Add Address")),l.a.createElement(C.a.Body,null,l.a.createElement(v.a,{variant:"danger",style:{display:"none"},id:"add-alert"}),l.a.createElement(A.a,{onChange:function(e){var a=e.target.name,n=e.target.value;console.log(a,n),t.dispatch({type:"setAddress",payload:Object(g.a)({},a,n)})},onSubmit:function(e){e.preventDefault();var a=new Headers;a.append("content-type","application/json"),fetch("/api/add_address",{method:"post",body:JSON.stringify(t.address),headers:a}).then(function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=2;break}throw new Error(t.statusText);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){t.dispatch({type:"setAddressList",payload:[].concat(Object(_.a)(t.addressList),[t.address])}),t.dispatch({type:"setAddAddressModal",payload:!1})})).catch((function(e){var t=document.getElementById("add-alert");t.style.display="block",t.innerHTML=e}))}},l.a.createElement(j.a,null,l.a.createElement(O.a,null,l.a.createElement(A.a.Group,{controlId:"formBasicH_no"},l.a.createElement(A.a.Label,null,"House No."),l.a.createElement(A.a.Control,{type:"text",placeholder:"Enter House No.",name:"h_no",required:!0}))),l.a.createElement(O.a,null,l.a.createElement(A.a.Group,{controlId:"formBasicS_no"},l.a.createElement(A.a.Label,null,"Street No."),l.a.createElement(A.a.Control,{type:"number",placeholder:"Enter Street No.",name:"s_no",required:!0})))),l.a.createElement(j.a,null,l.a.createElement(O.a,null,l.a.createElement(A.a.Group,{controlId:"formBasicCity"},l.a.createElement(A.a.Label,null,"City"),l.a.createElement(A.a.Control,{type:"text",placeholder:"Enter City",name:"city",required:!0}))),l.a.createElement(O.a,null,l.a.createElement(A.a.Group,{controlId:"formBasicState"},l.a.createElement(A.a.Label,null,"State"),l.a.createElement(A.a.Control,{type:"text",placeholder:"Add Your State",name:"state",required:!0})))),l.a.createElement(L.a,{variant:"primary",type:"submit"},"Add"))))};var x=function(){var e=Object(n.useContext)(y),t=function(){fetch("/api/cust_list").then((function(e){if(!e.ok)throw new Error;return e.json()})).then((function(t){document.getElementById("no-cust").style.display="none",e.dispatch({type:"setCustList",payload:t.list})})).catch((function(e){return document.getElementById("no-cust").style.display="block"}))};return Object(n.useEffect)((function(){t()}),[]),l.a.createElement("div",{id:"main"},l.a.createElement("div",{id:"header"},l.a.createElement("h1",null,"High Space task")),l.a.createElement("div",{id:"cust_list"},l.a.createElement("div",{id:"head"},l.a.createElement("h2",null,"Customer List"),l.a.createElement("button",{onClick:function(){return e.dispatch({type:"setAddCustModal",payload:!0})}},"Add Customer")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,l.a.createElement("strong",null,"Sr.No.")," "),l.a.createElement("span",null,l.a.createElement("strong",null,"Cust Id")," "),l.a.createElement("span",null,l.a.createElement("strong",null,"Name")," "),l.a.createElement("span",null,l.a.createElement("strong",null,"Age")," "),l.a.createElement("span",null,l.a.createElement("strong",null,"Sex")," ")),l.a.createElement("h3",{style:{display:"none"},id:"no-cust"},"No Customers, Please add some"),e.custList.map((function(t,a){return l.a.createElement("li",{key:a,onClick:function(a){return function(t,a){t.preventDefault(),""!==e.selectedCust&&(document.getElementById(e.selectedCust).style.backgroundColor="inherit",document.getElementById(e.selectedCust).style.color="black"),e.dispatch({type:"setAddress",payload:{cust_id:a}}),e.dispatch({type:"setSelectedCust",payload:t.target.parentNode.id}),document.getElementById(t.target.parentNode.id).style.backgroundColor="#222222",document.getElementById(t.target.parentNode.id).style.color="white",fetch("/api/"+a+"/addresses").then((function(e){if(!e.ok)throw new Error;return e.json()})).then((function(t){document.getElementById("no-add").style.display="none",e.dispatch({type:"setAddressList",payload:t.list})})).catch((function(t){e.dispatch({type:"setAddressList",payload:[]}),document.getElementById("no-add").style.display="block"}))}(a,t._id)},id:a},l.a.createElement("span",null,a+1),l.a.createElement("span",null,t.cust_id),l.a.createElement("span",null,t.f_name+" "+t.l_name),l.a.createElement("span",null,t.age),l.a.createElement("span",null,t.sex))})))),l.a.createElement("div",{id:"address_list"},l.a.createElement("div",{id:"head"},l.a.createElement("h2",null,"Address List of Customer"),l.a.createElement("button",{onClick:function(){return e.dispatch({type:"setAddAddressModal",payload:!0})},disabled:""===e.address.cust_id},"Add Address For ",Number(e.selectedCust)+1)),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,l.a.createElement("strong",null,"Sr. No.")," "),l.a.createElement("span",null,l.a.createElement("strong",null,"House No.")," "),l.a.createElement("span",null,l.a.createElement("strong",null,"Street No.")," "),l.a.createElement("span",null,l.a.createElement("strong",null,"City")," "),l.a.createElement("span",null,l.a.createElement("strong",null,"State")," ")),""===e.selectedCust&&l.a.createElement("h3",null,"Please select customer..."),l.a.createElement("h3",{style:{display:"none"},id:"no-add"},"No Addresses for this customer, Please add some"),e.addressList.map((function(e,t){return l.a.createElement("li",{key:e._id},l.a.createElement("span",null,t+1),l.a.createElement("span",null,e.h_no),l.a.createElement("span",null,e.s_no),l.a.createElement("span",null,e.city),l.a.createElement("span",null,e.state))})))),l.a.createElement(w,{fetchCustList:t}),l.a.createElement(k,null))};var N=function(){return l.a.createElement(s.a,null,l.a.createElement(E,null,l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",exact:!0,component:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.3920f13b.chunk.js.map