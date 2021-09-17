(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,t,n){e.exports={auth:"Auth_auth__2Zr-a"}},11:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(95),r=n.n(a).a.create({baseURL:"https://mern-student-management.herokuapp.com/",withCredentials:!0}),c=function(e){r.interceptors.response.use(null,(function(t){t.response?e.dispatch({type:"ERROR",payload:t.response.data.message}):e.dispatch({type:"ERROR",payload:"Something went wrong"})}))};t.a=r},129:function(e,t,n){},130:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),s=n.n(c),o=(n(129),n(130),n(19)),u=n(6),i=n.n(u),l=n(12),p=n(107),d=n.n(p),f=n(5),b=n(40),v=n(47),h=n.n(v),j=n(193),g=n(203),m=n(197),O=n(198),y=n(199),x=n(31),_=n(37),w=n(58),k=n(106),E=n(8),S=function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<6&&(t.password="Must be greater than 6 digits or letters"):t.password="Required",t};var T=function(){var e=Object(_.c)(),t=Object(_.d)((function(e){return e.user})),n=Object(o.f)(),r=Object(a.useState)(0),c=Object(b.a)(r,2),s=c[0],u=c[1],i=Object(a.useState)(!1),l=Object(b.a)(i,2),p=l[0],d=l[1],v=Object(k.a)({initialValues:{email:"",password:""},validate:S,onSubmit:function(e){T()}}),T=function(){var t;t=0===s?"student":1===s?"teacher":"admin",e(Object(w.u)({email:v.values.email,password:v.values.password,role:t},d,n))};return Object(E.jsxs)(j.a,{className:h.a.login,children:[Object(E.jsxs)(g.a,{value:s,onChange:function(e,t){u(t)},style:{fontSize:"1.6rem"},children:[Object(E.jsx)(m.a,{label:"Login as student",className:h.a.login__tab}),Object(E.jsx)(m.a,{label:"Login as teacher",className:h.a.login__tab}),Object(E.jsx)(m.a,{label:"Login as admin",className:h.a.login__tab})]}),Object(E.jsxs)("form",{onSubmit:v.handleSubmit,className:h.a.login__form,children:[Object(E.jsx)(O.a,Object(f.a)(Object(f.a)({error:v.errors.email&&v.touched.email,className:h.a.login__form__inp,label:"Email",name:"email",type:"email",variant:"outlined"},v.getFieldProps("email")),{},{helperText:v.touched.email&&v.errors.email})),Object(E.jsx)(O.a,Object(f.a)(Object(f.a)({error:v.errors.password&&v.touched.password,className:h.a.login__form__inp,label:"Password",type:"password",variant:"outlined",name:"password"},v.getFieldProps("password")),{},{helperText:v.touched.password&&v.errors.password})),Object(E.jsx)(y.a,{variant:"contained",className:h.a.login__form__btn,color:"primary",type:"submit",disabled:p,children:p?"Please wait...":"Submit"})]}),Object(E.jsx)(x.b,{to:"/auth/forgotPassword",children:"forgot password?"}),t.user&&Object(E.jsx)("div",{children:Object(E.jsx)(x.b,{to:"/".concat(t.user.role),children:Object(E.jsx)(y.a,{style:{fontSize:"1.4rem"},variant:"contained",color:"secondary",children:"Go to dashboard"})})})]})},A=n(11),R=n(4),P=n(86),L=n.n(P),D=n(200),N=Object(D.a)((function(){return{inp:{width:"100%","& > *":{fontSize:"1.4rem"}},btn:{width:"100%",fontSize:"1.4rem"}}}));var I=function(){var e=Object(_.c)(),t=N(),n=Object(a.useState)(""),r=Object(b.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(!1),u=Object(b.a)(o,2),i=u[0],l=u[1];return Object(E.jsxs)(j.a,{className:L.a.forgot,children:[Object(E.jsx)("h2",{children:"Forgot password?"}),Object(E.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==c&&e(Object(w.k)(c,l))},className:L.a.forgot__form,children:[Object(E.jsx)(O.a,{classes:{root:t.inp},label:"Your email address",variant:"outlined",value:c,onChange:function(e){return s(e.target.value)}}),Object(E.jsx)(y.a,{classes:{root:t.btn},variant:"contained",color:"primary",disabled:i,type:"submit",children:i?"Please wait...":"Submit"})]}),Object(E.jsx)(x.b,{to:"/",style:{textAlign:"left",display:"block",marginTop:"2rem"},children:"Login"})]})},U=n(87),G=n.n(U),C=Object(D.a)((function(){return{inp:{width:"100%","& > *":{fontSize:"1.4rem"}},btn:{width:"100%",fontSize:"1.4rem"}}}));var F=function(){var e=C(),t=Object(_.c)(),n=Object(a.useState)(""),r=Object(b.a)(n,2),c=r[0],s=r[1],u=Object(a.useState)(""),i=Object(b.a)(u,2),l=i[0],p=i[1],d=Object(a.useState)(!1),f=Object(b.a)(d,2),v=f[0],h=f[1],g=Object(o.h)();return Object(E.jsxs)(j.a,{className:G.a.reset,children:[Object(E.jsx)("h2",{children:"Reset password"}),Object(E.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c===l&&""!==c&&""!==l&&t(Object(w.x)({token:g.resetToken,password:c,confirmPassword:l},h))},className:G.a.reset__form,children:[Object(E.jsx)(O.a,{classes:{root:e.inp},label:"Password",variant:"outlined",value:c,onChange:function(e){return s(e.target.value)}}),Object(E.jsx)(O.a,{classes:{root:e.inp},label:"Confirm password",variant:"outlined",value:l,onChange:function(e){return p(e.target.value)}}),Object(E.jsx)(y.a,{classes:{root:e.btn},variant:"contained",color:"primary",disabled:v,type:"submit",children:v?"Please wait...":"Submit"})]}),Object(E.jsx)(x.b,{to:"/",style:{textAlign:"left",display:"block",marginTop:"2rem"},children:"Login"})]})},M=n(202),z={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.5,ease:"linear"}}};var q=function(){var e=Object(_.c)();return Object(a.useEffect)((function(){Object(l.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.a.get("/api/v1/users/auto-login");case 3:n=t.sent,a=n.data.user,e({type:R.o,payload:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}),[]),Object(E.jsx)(M.a.div,{className:d.a.auth,variants:z,initial:"hidden",animate:"visible",exit:"hidden",children:Object(E.jsxs)(o.c,{children:[Object(E.jsx)(o.a,{path:"/auth/resetPassword/:resetToken",component:F}),Object(E.jsx)(o.a,{path:"/auth/forgotPassword",component:I}),Object(E.jsx)(o.a,{path:"/",exact:!0,component:T})]})})},B=n(115),Z=n(201),Y=n(205),H=r.a.lazy((function(){return Promise.all([n.e(4),n.e(3)]).then(n.bind(null,262))})),J=r.a.lazy((function(){return n.e(5).then(n.bind(null,259))})),Q=r.a.lazy((function(){return n.e(6).then(n.bind(null,260))})),V=Object(B.a)({typography:{htmlFontSize:10}});var W=function(){var e=Object(o.g)();return Object(E.jsx)("div",{className:"App",children:Object(E.jsxs)(Z.a,{theme:V,children:[Object(E.jsx)(a.Suspense,{fallback:"loading...",children:Object(E.jsx)(Y.a,{exitBeforeEnter:!0,children:Object(E.jsxs)(o.c,{location:e,children:[Object(E.jsx)(o.a,{path:"/student",component:J}),Object(E.jsx)(o.a,{path:"/teacher",component:Q}),Object(E.jsx)(o.a,{path:"/admin",component:H})]},e.key)})}),Object(E.jsx)(o.a,{path:"/auth",component:q}),Object(E.jsx)(o.a,{path:"/",exact:!0,component:q})]})})},X=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,261)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},$=n(71),K=n(114),ee=n(29),te=n(46),ne={students:null},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.m:return Object(f.a)(Object(f.a)({},e),{},{students:Object(ee.a)(t.payload)});case R.w:var n=Object(te.a)(e.students,(function(e){if(e){var n=e.findIndex((function(e){return e._id===t.payload._id}));e.splice(n,1),e.unshift(Object(f.a)({},t.payload))}}));return Object(f.a)(Object(f.a)({},e),{},{students:Object(ee.a)(n)});case R.b:var a=Object(te.a)(e.students,(function(e){e.unshift(Object(f.a)({},t.payload))}));return Object(f.a)(Object(f.a)({},e),{},{students:a});default:return e}},re={teachers:null},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.j:return Object(f.a)(Object(f.a)({},e),{},{teachers:Object(ee.a)(t.payload)});case R.y:var n=Object(te.a)(e.teachers,(function(e){var n=e.findIndex((function(e){return e._id===t.payload._id}));e.splice(n,1),e.unshift(Object(f.a)({},t.payload))}));return Object(f.a)(Object(f.a)({},e),{},{teachers:Object(ee.a)(n)});case R.c:var a=Object(te.a)(e.teachers,(function(e){e.unshift(Object(f.a)({},t.payload))}));return Object(f.a)(Object(f.a)({},e),{},{teachers:a});default:return e}},se={user:null,selectedUser:null},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.s:case R.v:return Object(f.a)(Object(f.a)({},e),{},{selectedUser:t.payload});case R.o:case R.t:return Object(f.a)(Object(f.a)({},e),{},{user:t.payload});case R.p:return Object(f.a)(Object(f.a)({},e),{},{user:null,selectedUser:null});default:return e}},ue={images:null},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.d:return e;case R.k:return Object(f.a)(Object(f.a)({},e),{},{images:Object(ee.a)(t.payload)});case R.u:var n=Object(te.a)(e.images,(function(e){e.push(t.payload)}));return Object(f.a)(Object(f.a)({},e),{},{images:n});case R.g:var a=Object(te.a)(e.images,(function(e){var n=e.findIndex((function(e){return e._id===t.payload._id}));e.splice(n,1)}));return Object(f.a)(Object(f.a)({},e),{},{images:a});default:return e}},le={allGrades:null,selectedGrade:null,selectedStudent:null},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.i:return Object(f.a)(Object(f.a)({},e),{},{allGrades:Object(ee.a)(t.payload)});case R.q:return Object(f.a)(Object(f.a)({},e),{},{selectedGrade:t.payload});case R.r:return Object(f.a)(Object(f.a)({},e),{},{selectedStudent:t.payload});case R.x:return Object(f.a)(Object(f.a)({},e),{},{selectedStudent:Object(f.a)(Object(f.a)({},e.selectedStudent),{},{rollNumber:t.payload.rollNumber})});default:return e}},de={results:null},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.l:return Object(f.a)(Object(f.a)({},e),{},{results:Object(ee.a)(t.payload)});case R.f:return Object(f.a)({},e);case R.a:return Object(f.a)(Object(f.a)({},e),{},{results:[t.payload].concat(Object(ee.a)(e.results))});case R.h:return Object(f.a)(Object(f.a)({},e),{},{results:e.results.filter((function(e){return e._id!==t.payload.id}))});default:return e}},be={studentPayments:[]},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.e:case R.n:return Object(f.a)(Object(f.a)({},e),{},{studentPayments:t.payload});default:return e}},he={errorMessage:null,open:!1},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERROR":return Object(f.a)(Object(f.a)({},e),{},{errorMessage:t.payload,open:!0});case"RESET_ERROR":return{errorMessage:null,open:!1};default:return e}},ge=Object($.b)({teachers:ce,students:ae,user:oe,image:ie,grade:pe,result:fe,payment:ve,error:je}),me=Object($.c)(ge,Object($.a)(K.a));Object(A.b)(me);var Oe=function(e){var t=e.children;return Object(E.jsx)(_.a,{store:me,children:t})},ye=Object(E.jsx)(Oe,{children:Object(E.jsx)(x.a,{children:Object(E.jsx)(W,{})})});s.a.render(Object(E.jsx)(r.a.StrictMode,{children:ye}),document.getElementById("root")),X()},4:function(e,t,n){"use strict";n.d(t,"w",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"j",(function(){return c})),n.d(t,"y",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"s",(function(){return u})),n.d(t,"m",(function(){return i})),n.d(t,"v",(function(){return l})),n.d(t,"o",(function(){return p})),n.d(t,"t",(function(){return d})),n.d(t,"p",(function(){return f})),n.d(t,"d",(function(){return b})),n.d(t,"k",(function(){return v})),n.d(t,"u",(function(){return h})),n.d(t,"g",(function(){return j})),n.d(t,"i",(function(){return g})),n.d(t,"q",(function(){return m})),n.d(t,"r",(function(){return O})),n.d(t,"x",(function(){return y})),n.d(t,"l",(function(){return x})),n.d(t,"f",(function(){return _})),n.d(t,"a",(function(){return w})),n.d(t,"h",(function(){return k})),n.d(t,"e",(function(){return E})),n.d(t,"n",(function(){return S}));var a="UPDATE_STUDENT",r="ADD_STUDENT",c="GET_ALL_TEACHERS",s="UPDATE_TEACHER",o="ADD_TEACHER",u="SELECT_USER",i="GET_STUDENTS",l="UPDATE_SELECTED_USER",p="LOGIN",d="UPDATE_ADMIN",f="LOGOUT",b="CREATE_IMAGE",v="GET_IMAGES",h="UPDATE_IMAGES_LIST",j="DELETE_IMAGE",g="GET_ALL_GRADES",m="SELECT_GRADE",O="SELECT_STUDENT",y="UPDATE_STUDENT_ROLL_NUMBER",x="GET_RESULTS",_="CREATE_RESULT",w="ADD_RESULT",k="DELETE_RESULT",E="CREATE_PAYMENT",S="GET_STUDENT_PAYMENTS"},47:function(e,t,n){e.exports={login:"Login_login__36PBA",login__tab:"Login_login__tab__1BT-9",login__form:"Login_login__form__2hbFq",login__form__inp:"Login_login__form__inp__3jDeY",login__form__btn:"Login_login__form__btn__3bjtF"}},58:function(e,t,n){"use strict";n.d(t,"m",(function(){return u})),n.d(t,"s",(function(){return i})),n.d(t,"y",(function(){return l})),n.d(t,"u",(function(){return p})),n.d(t,"v",(function(){return d})),n.d(t,"t",(function(){return f})),n.d(t,"B",(function(){return b})),n.d(t,"g",(function(){return v})),n.d(t,"z",(function(){return h})),n.d(t,"k",(function(){return j})),n.d(t,"x",(function(){return g})),n.d(t,"d",(function(){return m})),n.d(t,"n",(function(){return O})),n.d(t,"h",(function(){return y})),n.d(t,"c",(function(){return _})),n.d(t,"l",(function(){return w})),n.d(t,"q",(function(){return k})),n.d(t,"A",(function(){return E})),n.d(t,"p",(function(){return S})),n.d(t,"a",(function(){return T})),n.d(t,"j",(function(){return A})),n.d(t,"b",(function(){return R})),n.d(t,"w",(function(){return P})),n.d(t,"f",(function(){return L})),n.d(t,"o",(function(){return D})),n.d(t,"i",(function(){return N})),n.d(t,"e",(function(){return I})),n.d(t,"r",(function(){return U}));var a=n(6),r=n.n(a),c=n(12),s=n(11),o=n(4),u=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(!0),t.prev=1,t.next=4,s.a.get("/api/v1/users?limit=20&role=teacher");case 4:a=t.sent,n({type:o.j,payload:a.data.users}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0.message);case 11:e(!1);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},i=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(!0),t.prev=1,t.next=4,s.a.get("/api/v1/users?role=student&limit=20");case 4:a=t.sent,n({type:o.m,payload:a.data.users}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0.message);case 11:e(!1);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return{type:o.s,payload:e}},p=function(e,t,n){return function(){var a=Object(c.a)(r.a.mark((function a(c){var u;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(!0),a.prev=1,a.next=4,s.a.post("/api/v1/users/login",e);case 4:u=a.sent,c({type:o.o,payload:u.data.user}),t(!1),n.push("/".concat(u.data.user.role)),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),console.log(a.t0.message),t(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}()},d=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(!0),n.prev=1,n.next=4,s.a.get("/api/v1/users/logout");case 4:return a({type:o.o,payload:null}),t.push("/"),e(!1),n.abrupt("return");case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0.message);case 13:e(!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()},f=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(!0),n.prev=1,a({type:o.s,payload:null}),n.next=5,s.a.get("/api/v1/users?_id=".concat(e));case 5:c=n.sent,a({type:o.s,payload:c.data.users[0]}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:t(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},b=function(e,t,n){return function(){var a=Object(c.a)(r.a.mark((function a(c){var u,i;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(!0),a.prev=1,a.next=4,s.a.patch("/api/v1/users/update-user/".concat(t),e);case 4:(u=a.sent)&&(("student"===(i=u.data.user).role||"teacher"===i.role)&&c({type:o.v,payload:i}),c({type:o.s,payload:i})),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),console.log(a.t0.message);case 11:n(!1);case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()},v=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(!0),n.prev=1,n.next=4,s.a.post("/api/v1/users/signup",e);case 4:"student"===(c=n.sent).data.user.role?a({type:o.b,payload:c.data.user}):"teacher"===c.data.user.role&&a({type:o.c,payload:c.data.user}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.message);case 11:t(!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},h=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(!0),n.prev=1,n.next=4,s.a.patch("api/v1/users/update-user/".concat(e.id),e);case 4:c=n.sent,a({type:o.t,payload:c.data.user}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.message);case 11:t(!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},j=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(!0),n.prev=1,n.next=4,s.a.post("/api/v1/users/forgotPassword",{email:e});case 4:c=n.sent,console.log(c),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.message);case 11:t(!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},g=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(!0),n.prev=1,n.next=4,s.a.patch("/api/v1/users/resetPassword/".concat(e.token),{password:e.password,confirmPassword:e.confirmPassword});case 4:c=n.sent,console.log(c),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.message);case 11:t(!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()};var m=function(e,t,n,a){return function(){var u=Object(c.a)(r.a.mark((function c(u){var i,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a(!0),r.prev=1,!e){r.next=12;break}return(i=new FormData).append("image",e),i.append("name",t),i.append("createdAt",Date.now()),r.next=9,s.a.post("/api/v1/images",i);case 9:l=r.sent,u({type:o.u,payload:l.data.image}),n.forEach((function(e){e("")}));case 12:a(!1),r.next=19;break;case 15:r.prev=15,r.t0=r.catch(1),console.log(r.t0.message),a(!1);case 19:case"end":return r.stop()}}),c,null,[[1,15]])})));return function(e){return u.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(!0),t.prev=1,t.next=4,s.a.get("/api/v1/images");case 4:a=t.sent,n({type:o.k,payload:a.data.images}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0.message);case 11:e(!1);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},y=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(!0),n.prev=1,n.next=4,s.a.delete("/api/v1/images/".concat(e));case 4:c=n.sent,a({type:o.g,payload:c.data.image}),t(!1),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.message),t(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},x=n(5),_=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(!0),n.prev=1,e.allStudents=e.allStudents.map((function(e){return{rollNumber:0,student:e._id}})),e.allSubjects=e.allSubjects.map((function(e){return{name:e.name,teacher:e.teacher._id}})),n.next=6,s.a.post("/api/v1/grade",e);case 6:c=n.sent,console.log(c),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0.message);case 13:t(!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()},w=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("/api/v1/grade?populate=classTeacher");case 3:n=e.sent,t({type:o.i,payload:n.data.grades}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},k=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c,u;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(!0),n.prev=1,n.next=4,s.a.get("/api/v1/grade/".concat(e.gradeId,"/").concat(e.studentId));case 4:c=n.sent,u=c.data.student,a({type:o.r,payload:Object(x.a)(Object(x.a)({},u.selectedStudent),{},{grade:u.grade,batch:u.batch})}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.message);case 12:t(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},E=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(!0),n.prev=1,n.next=4,s.a.patch("/api/v1/grade/".concat(e.gradeId,"/").concat(e.studentId),e);case 4:a({type:o.x,payload:e}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),console.log(n.t0.message);case 10:t(!1);case 11:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(e){return n.apply(this,arguments)}}()},S=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(!0),n.prev=1,n.next=4,s.a.get("/api/v1/grade?_id=".concat(e,"&fields=totalGradeFee,batch,name,allStudents,allSubjects&populate=allStudents.student,allSubjects.teacher"));case 4:c=n.sent,a({type:o.q,payload:c.data.grades[0]}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.message);case 11:t(!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},T=function(e,t,n){return function(){var a=Object(c.a)(r.a.mark((function a(c){var u,i;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(!0),a.prev=1,u={rollNumber:0,student:t},a.next=5,s.a.patch("/api/v1/grade/addStudent/".concat(e),u);case 5:i=a.sent,c({type:o.q,payload:i.data.grade}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),console.log(a.t0.message);case 12:n(!1);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()},A=function(e,t,n,a){return function(){var o=Object(c.a)(r.a.mark((function c(o){return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n(!0),r.prev=1,r.next=4,s.a.patch("/api/v1/grade/removeStudent/".concat(e),{studentId:t});case 4:n(!1),a.goBack(),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(1),console.log(r.t0.message),n(!1);case 12:case"end":return r.stop()}}),c,null,[[1,8]])})));return function(e){return o.apply(this,arguments)}}()},R=function(e,t,n){return function(){var a=Object(c.a)(r.a.mark((function a(c){var u;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(!0),a.prev=1,a.next=4,s.a.patch("/api/v1/grade/addSubject/".concat(t),e);case 4:u=a.sent,c({type:o.q,payload:u.data.grade}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),console.log(a.t0.message);case 11:n(!1);case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()},P=function(e,t,n){return function(){var a=Object(c.a)(r.a.mark((function a(c){var u;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(!0),a.prev=1,a.next=4,s.a.patch("/api/v1/grade/removeSubject/".concat(t),{subjectId:e});case 4:u=a.sent,c({type:o.q,payload:u.data.grade}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),console.log(a.t0.message);case 11:n(!1);case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()},L=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(!0),n.prev=1,n.next=4,s.a.post("/api/v1/users/addResult/".concat(e.userId),e);case 4:c=n.sent,a({type:o.a,payload:c.data.result}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.message);case 11:t(!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},D=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(!0),n.prev=1,n.next=4,s.a.get("/api/v1/users/results/".concat(e.batch,"/").concat(e.grade,"/").concat(e.id));case 4:c=n.sent,a({type:o.l,payload:c.data.result.allResults}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.message);case 11:t(!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.patch("/api/v1/users/results/".concat(e.userId,"/").concat(e.resultId));case 3:n({type:o.h,payload:{id:e.resultId}}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()},I=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(!0),n.prev=1,n.next=4,s.a.patch("/api/v1/users/payment",e);case 4:c=n.sent,delete e.userId,a({type:o.e,payload:c.data.user.allPayments}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.message);case 12:t(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/api/v1/users/payment/".concat(e.id,"/").concat(e.batch,"/").concat(e.grade));case 3:if((a=t.sent).data.payments){t.next=6;break}return t.abrupt("return",n({type:o.n,payload:[]}));case 6:n({type:o.n,payload:a.data.payments}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}},86:function(e,t,n){e.exports={forgot:"ForgotPassword_forgot__goEV2",forgot__form:"ForgotPassword_forgot__form__2WGoN"}},87:function(e,t,n){e.exports={reset:"ResetPassword_reset__3DAQ0",reset__form:"ResetPassword_reset__form__3QZXu"}}},[[155,1,2]]]);
//# sourceMappingURL=main.12a59bc0.chunk.js.map