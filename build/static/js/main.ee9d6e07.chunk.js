(this["webpackJsonpon-care-frontend-app"]=this["webpackJsonpon-care-frontend-app"]||[]).push([[0],{131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(16),c=a.n(s),r=a(14),i=a(9),l=(a(37),a(75),a(11)),o=a.n(l),d=a(19),j=a(10),b=a(20),u=a.n(b),m="currentUser",O=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL||"http://localhost:8000/",p=function(e,t){return localStorage.setItem(e,t)},h=function(e){return localStorage.getItem(e)},v=function(e){return localStorage.removeItem(e)},x=function(){try{var e=h(m);return e?JSON.parse(e):null}catch(t){return null}},g=function(e){p(m,e)},N=function(){v(m)},w=a(21),f=function(){return{position:w.b.POSITION.TOP_RIGHT,autoClose:2e3,closeOnClick:!0,hideProgressBar:!1}},A=function(e,t){return t||(t=f()),w.b.success(e,t)},L=function(e,t){return t||(t=f()),w.b.error(e,t)},V=a(62),W=a.n(V),Y=a(5),Z=function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)([]),r=Object(j.a)(c,2),i=r[0],l=r[1],b=x(),m=function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,u.a.get(O+"users?secret_token="+b.token);case 4:return t=e.sent,a=t.data,s(!1),a&&a.users?l(a.users):L(a.message),e.abrupt("return",[]);case 11:e.prev=11,e.t0=e.catch(1),s(!1),L("Something went wrong");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){m()}),[]);var p=[{title:"#",data:"id"},{title:"First name",data:"first_name"},{title:"Last Name",format:function(e){return Object(Y.jsx)("strong",{children:e.last_name})}},{title:"Email",format:function(e){return Object(Y.jsx)("em",{children:e.email})}}];return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsxs)("div",{className:"wrap-login-full wrap-content",children:[a&&Object(Y.jsx)("div",{className:"logonFormLoader",children:"\xa0"}),!a&&Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("div",{className:"row",children:Object(Y.jsx)("div",{className:"col-md-12",children:Object(Y.jsx)("h1",{children:"User Profile"})})}),Object(Y.jsx)("hr",{}),Object(Y.jsx)("div",{className:"row",children:Object(Y.jsx)(W.a,{data:i,columns:p,striped:!0,hover:!0,responsive:!0})})]})]})})},P=function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)([]),r=Object(j.a)(c,2),i=r[0],l=r[1],b=x(),m=function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,u.a.get(O+"profile?secret_token="+b.token);case 4:return t=e.sent,a=t.data,s(!1),a&&a.user?l(a.user):L(a.message),e.abrupt("return",[]);case 11:e.prev=11,e.t0=e.catch(1),s(!1),L("Something went wrong");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){m()}),[]),Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsxs)("div",{className:"wrap-login-full wrap-content",children:[a&&Object(Y.jsx)("div",{className:"logonFormLoader",children:"\xa0"}),!a&&Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("div",{className:"row",children:Object(Y.jsx)("div",{className:"col-md-12",children:Object(Y.jsx)("h1",{children:"User Profile"})})}),Object(Y.jsx)("hr",{}),Object(Y.jsx)("div",{className:"row",children:Object(Y.jsxs)("table",{width:"80%",border:"0",cellPadding:"20",cellSpacing:"10",children:[Object(Y.jsxs)("tr",{children:[Object(Y.jsx)("td",{children:"Firstname:"}),Object(Y.jsx)("td",{children:i.first_name})]}),Object(Y.jsxs)("tr",{children:[Object(Y.jsx)("td",{children:"Lastname:"}),Object(Y.jsx)("td",{children:i.last_name})]}),Object(Y.jsxs)("tr",{children:[Object(Y.jsx)("td",{children:"Email:"}),Object(Y.jsx)("td",{children:i.email})]})]})})]})]})})},D=a(12),U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAAEhCAYAAADiTRxDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEQ1NDlGNDlFMjZEMTFFNzhFRUVCREQ3RUYyNzE1RTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEQ1NDlGNEFFMjZEMTFFNzhFRUVCREQ3RUYyNzE1RTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RDU0OUY0N0UyNkQxMUU3OEVFRUJERDdFRjI3MTVFOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RDU0OUY0OEUyNkQxMUU3OEVFRUJERDdFRjI3MTVFOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtrRntcAAB4LSURBVHja7J0HlJXV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",S=function(e){var t=e.history,a=Object(n.useState)(""),s=Object(j.a)(a,2),c=s[0],i=s[1],l=Object(n.useState)(""),b=Object(j.a)(l,2),m=b[0],p=b[1],h=Object(n.useState)(""),v=Object(j.a)(h,2),x=v[0],g=v[1],N=Object(n.useState)(""),w=Object(j.a)(N,2),f=w[0],V=w[1],W=Object(n.useState)(!1),Z=Object(j.a)(W,2),P=Z[0],S=Z[1],G=Object(n.useState)({email:"",password:"",firstname:"",lastname:""}),F=Object(j.a)(G,2),B=F[0],T=F[1],M=function(){var e=Object(d.a)(o.a.mark((function e(a){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),S(!0),e.prev=2,!J(B)){e.next=16;break}return e.next=6,u.a.post(O+"register",{email:x,password:f,first_name:c,last_name:m});case 6:n=e.sent,s=n.data,i(""),p(""),g(""),V(""),S(!1),s&&s.user&&s.user._id?(A("User successfully registered."),t.push("/login")):s.error&&L(s.message),e.next=18;break;case 16:L("Invalid Form, Please enter proper values"),S(!1);case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(2),L("Something went wrong!"),S(!1);case 24:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(t){return e.apply(this,arguments)}}(),J=function(e){var t=!0;return x||(t=!1,B.email="Please enter email"),f||(t=!1,B.password="Please enter password"),T(Object(D.a)(Object(D.a)({},B),{},{errors:B})),Object.values(e).forEach((function(e){return e.length>0&&(t=!1)})),t},z=function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value,s=RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);switch(a){case"email":B.email=n&&s.test(n)?"":"Email is not valid!",g(n);break;case"password":B.password=n.length<6?"Password must be 6 characters long!":"",V(n)}T(Object(D.a)(Object(D.a)({},B),{},{errors:B}))};return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsxs)("div",{className:"wrap-login100 wrap-content",children:[P&&Object(Y.jsx)("div",{className:"logonFormLoader",children:"\xa0"}),Object(Y.jsx)("div",{className:"login100-pic js-tilt","data-tilt":!0,children:Object(Y.jsx)("img",{src:U,alt:"IMG"})}),Object(Y.jsxs)("form",{onSubmit:M,noValidate:!0,id:"login-form",action:"",method:"post",className:"login100-form validate-form",children:[Object(Y.jsxs)("div",{className:"wrap-input100 validate-input",children:[Object(Y.jsx)("input",{value:first_name,onChange:z,autoComplete:"off",name:"first_name",type:"text",placeholder:"First Name",className:"input100"}),Object(Y.jsx)("span",{className:"symbol-input100",children:Object(Y.jsx)("i",{className:"fa fa-envelope","aria-hidden":"true"})})]}),Object(Y.jsx)("div",{className:"text-danger",children:B.first_name.length>0&&Object(Y.jsx)("span",{className:"error",children:B.first_name})}),Object(Y.jsxs)("div",{className:"wrap-input100 validate-input",children:[Object(Y.jsx)("input",{value:last_name,onChange:z,autoComplete:"off",name:"last_name",type:"text",placeholder:"Lastname",className:"input100"}),Object(Y.jsx)("span",{className:"symbol-input100",children:Object(Y.jsx)("i",{className:"fa fa-envelope","aria-hidden":"true"})})]}),Object(Y.jsx)("div",{className:"text-danger",children:B.last_name.length>0&&Object(Y.jsx)("span",{className:"error",children:B.last_name})}),Object(Y.jsxs)("div",{className:"wrap-input100 validate-input",children:[Object(Y.jsx)("input",{value:x,onChange:z,autoComplete:"off",name:"email",type:"text",placeholder:"Name",className:"input100"}),Object(Y.jsx)("span",{className:"symbol-input100",children:Object(Y.jsx)("i",{className:"fa fa-envelope","aria-hidden":"true"})})]}),Object(Y.jsx)("div",{className:"text-danger",children:B.email.length>0&&Object(Y.jsx)("span",{className:"error",children:B.email})}),Object(Y.jsxs)("div",{className:"wrap-input100 validate-input",children:[Object(Y.jsx)("input",{onChange:z,autoComplete:"off",className:"input100",type:"password",name:"password",placeholder:"Password"}),Object(Y.jsx)("span",{className:"focus-input100"}),Object(Y.jsx)("span",{className:"symbol-input100",children:Object(Y.jsx)("i",{className:"fa fa-lock","aria-hidden":"true"})})]}),Object(Y.jsx)("div",{className:"text-danger",children:B.password.length>0&&Object(Y.jsx)("span",{className:"error",children:B.password})}),Object(Y.jsx)("div",{className:"text-center p-t-50",children:Object(Y.jsxs)(r.b,{className:"txt2",to:"/login",children:["Login to your Account",Object(Y.jsx)("i",{className:"fa fa-long-arrow-right m-l-5","aria-hidden":"true"})]})})]})]})})},G=function(e){var t=e.history,a=Object(n.useState)(""),s=Object(j.a)(a,2),c=s[0],i=s[1],l=Object(n.useState)(""),b=Object(j.a)(l,2),m=b[0],p=b[1],h=Object(n.useState)(!1),v=Object(j.a)(h,2),x=v[0],N=v[1],w=Object(n.useState)({email:"",password:""}),f=Object(j.a)(w,2),V=f[0],W=f[1],Z=function(){var e=Object(d.a)(o.a.mark((function e(a){var n,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),N(!0),e.prev=2,!P(V)){e.next=14;break}return e.next=6,u.a.post(O+"login",{email:c,password:m});case 6:n=e.sent,s=n.data,i(""),p(""),N(!1),s&&s.token?(r={token:s.token,email:c},g(JSON.stringify(r)),A("Login successfully"),t.push("/dashboard")):L(s.message),e.next=16;break;case 14:L("Invalid Form, Please enter proper values"),N(!1);case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(2),L("Something went wrong!"),N(!1);case 22:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t){return e.apply(this,arguments)}}(),P=function(e){var t=!0;return c||(t=!1,V.email="Please enter email"),m||(t=!1,V.password="Please enter password"),W(Object(D.a)(Object(D.a)({},V),{},{errors:V})),Object.values(e).forEach((function(e){return e.length>0&&(t=!1)})),t},S=function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value,s=RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);switch(a){case"email":V.email=n&&s.test(n)?"":"Email is not valid!",i(n);break;case"password":V.password=n.length<6?"Password must be 6 characters long!":"",p(n)}W(Object(D.a)(Object(D.a)({},V),{},{errors:V}))};return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsxs)("div",{className:"wrap-login100 wrap-content",children:[x&&Object(Y.jsx)("div",{className:"logonFormLoader",children:"\xa0"}),Object(Y.jsx)("div",{className:"login100-pic js-tilt","data-tilt":!0,children:Object(Y.jsx)("img",{src:U,alt:"IMG"})}),Object(Y.jsxs)("form",{onSubmit:Z,noValidate:!0,id:"login-form",className:"login100-form validate-form",children:[Object(Y.jsxs)("div",{className:"wrap-input100 validate-input",children:[Object(Y.jsx)("input",{className:"input100",value:c,onChange:S,autoComplete:"off",id:"email-input",name:"email",type:"text",placeholder:"email"}),Object(Y.jsx)("span",{className:"focus-input100"}),Object(Y.jsx)("span",{className:"symbol-input100",children:Object(Y.jsx)("i",{className:"fa fa-envelope","aria-hidden":"true"})})]}),Object(Y.jsx)("div",{className:"text-danger",children:V.email.length>0&&Object(Y.jsx)("span",{className:"error",children:V.email})}),Object(Y.jsxs)("div",{className:"wrap-input100 validate-input",children:[Object(Y.jsx)("input",{className:"input100",autoComplete:"off",id:"password-input",name:"password",type:"password",onChange:S,placeholder:"password"}),Object(Y.jsx)("span",{className:"focus-input100"}),Object(Y.jsx)("span",{className:"symbol-input100",children:Object(Y.jsx)("i",{className:"fa fa-lock","aria-hidden":"true"})})]}),Object(Y.jsx)("div",{className:"text-danger",children:V.password.length>0&&Object(Y.jsx)("span",{className:"error",children:V.password})}),Object(Y.jsx)("div",{className:"container-login100-form-btn",children:Object(Y.jsx)("button",{className:"login100-form-btn",children:"Login"})}),Object(Y.jsx)("div",{className:"text-center p-t-50",children:Object(Y.jsxs)(r.b,{className:"txt2",to:"/register",children:["Create your Account",Object(Y.jsx)("i",{className:"fa fa-long-arrow-right m-l-5","aria-hidden":"true"})]})})]})]})})},F=a(66),B=a(67),T=a(69),M=a(68),J=function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(){var e;Object(F.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).handleLogOut=Object(d.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x(),e.prev=1,e.next=4,u.a.get(O+"logout?secret_token="+t.token);case 4:a=e.sent,(n=a.data)&&n.success&&N(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),L("Something went wrong!");case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),e}return Object(B.a)(a,[{key:"componentDidMount",value:function(){this.handleLogOut()}},{key:"render",value:function(){return Object(Y.jsx)(i.a,{to:"/login"})}}]),a}(n.Component),z=a(70),E=function(){var e=x();return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)("div",{className:"menu row",children:[Object(Y.jsx)("div",{className:"col-md-6",children:Object(Y.jsx)("div",{className:"header-link",children:Object(Y.jsx)(r.b,{to:{pathname:"/"},children:"Menu"})})}),Object(Y.jsxs)("div",{className:"col-md-6 top-menu",children:[Object(Y.jsx)(r.b,{to:"/logout",children:"Logout"}),Object(Y.jsx)(r.b,{to:"/",children:"Home"}),Object(Y.jsx)(r.b,{to:"/users",children:"Users"})]})]}),Object(Y.jsxs)("div",{className:"menu welcome align-right",children:["Welcome ",Object(Y.jsxs)("span",{children:[" ",e.email]})]})]})},X=function(e){var t=e.component,a=Object(z.a)(e,["component"]);return Object(Y.jsx)(i.b,Object(D.a)(Object(D.a)({},a),{},{render:function(e){var a=x();return a&&a.token?Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(E,Object(D.a)({},e)),Object(Y.jsx)("main",{className:"main container-fluid",children:Object(Y.jsx)(t,Object(D.a)({},e))})]}):Object(Y.jsx)(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},q=(a(130),a(131),a(132),a(133),function(){return Object(Y.jsxs)(r.a,{children:[Object(Y.jsx)(w.a,{}),Object(Y.jsx)("div",{className:"App",children:Object(Y.jsx)("div",{className:"limiter",children:Object(Y.jsx)("div",{className:"container-login100",children:Object(Y.jsxs)(i.d,{children:[Object(Y.jsx)(X,{exact:!0,path:"/dashboard",component:P}),Object(Y.jsx)(X,{exact:!0,path:"/",component:P}),Object(Y.jsx)(X,{exact:!0,path:"/users",component:Z}),Object(Y.jsx)(i.b,{exact:!0,path:"/register",component:S}),Object(Y.jsx)(i.b,{exact:!0,path:"/login",component:G}),Object(Y.jsx)(i.b,{exact:!0,path:"/logout",component:J})]})})})})]})});c.a.render(Object(Y.jsx)(q,{}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.ee9d6e07.chunk.js.map