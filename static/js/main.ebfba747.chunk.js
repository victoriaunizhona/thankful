(this.webpackJsonpthankful=this.webpackJsonpthankful||[]).push([[0],{121:function(e,t,n){e.exports={Footer:"Footer_Footer__1pLsX",Icon:"Footer_Icon__2nbeq",Links:"Footer_Links__2GqEQ"}},153:function(e,t,n){e.exports={Header:"Header_Header__1-XXX",Toolbar:"Header_Toolbar__Zb0zd"}},185:function(e,t,n){"use strict";var o=n(282),a=n.n(o).a.create({baseURL:"https://thankful-17ff4-default-rtdb.firebaseio.com/"});t.a=a},188:function(e,t,n){e.exports={Card:"WellDone_Card__1UsrI",SVG:"WellDone_SVG__TFMZL"}},193:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/logo_thankful.857979e9.svg"},198:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/logo-small.008a7097.svg"},199:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Target.33661b56.svg"},301:function(e,t,n){},302:function(e,t,n){},560:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(21),r=n.n(c),i=(n(301),n(97)),s=n(53),l=(n(302),n(621)),u=n(277),d=n.n(u),j=n(278),b=n.n(j),h=n(38),f=n(121),O=n.n(f),x=n(4);var p=function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)},v=function(){var e=Object(h.a)();return Object(x.jsxs)("div",{className:O.a.Footer,style:{background:e.palette.primary.dark},children:[Object(x.jsxs)("div",{className:O.a.Links,children:[Object(x.jsx)(d.a,{onClick:function(){return p(" https://github.com/victoriaunizhona/thankful")},className:O.a.Icon,color:"action",zize:"small",children:"GitHub"}),Object(x.jsx)(b.a,{onClick:function(){return p("https://www.linkedin.com/in/victoria-unizhona/")},className:O.a.Icon,color:"action",zize:"small",children:"Linkedin"})]}),Object(x.jsxs)("div",{children:["\xa9 ",(new Date).getFullYear()," Victoria Unizhona"]})]})},m=n(614),g=n(615),k=n(611),y=n(198),w=n(153),_=n.n(w),C=n(30),L=n(75),S=n(623),I=n(613),T=n(71),E="/logout",F=[{id:1,path:"/home",text:"Home"},{id:2,path:"/history",text:"History"},{id:3,path:"/info",text:"Info"},{id:4,path:"/logout",text:"Logout"}],z=function(){var e=Object(o.useState)({width:void 0,height:void 0}),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(o.useEffect)((function(){function e(){a({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n},N=n(118),D=n(5),H=n(605),P=n(624),A=n(606),B=n(609),U=n(607),W=n(610),G=n(608),X=n(279),V=n.n(X),R=Object(H.a)({list:{width:250},fullList:{width:"auto"}}),Y=function(){var e,t="menu",n=R(),a=Object(o.useState)({menuName:!1}),c=Object(s.a)(a,2),r=c[0],l=c[1],u=Object(C.g)(),d=function(e){u.push(e)},j=function(e,t){return function(n){(!n||"keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&l(Object(i.a)(Object(i.a)({},r),{},Object(N.a)({},e,t)))}};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k.a,{color:"secondary",variant:"outlined",onClick:j(t,!0),children:t}),Object(x.jsx)(P.a,{anchor:"right",open:r.menu,onClose:j(t,!1),onOpen:j(t,!0),children:(e=t,Object(x.jsxs)("div",{className:Object(D.a)(n.list,Object(N.a)({},n.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:j(e,!1),onKeyDown:j(e,!1),children:[Object(x.jsx)(A.a,{children:F.slice(0,-1).map((function(e){return Object(x.jsx)(U.a,{onClick:function(){return d(e.path)},button:!0,children:Object(x.jsx)(G.a,{primary:e.text})},e.id)}))}),Object(x.jsx)(B.a,{}),Object(x.jsx)(A.a,{children:Object(x.jsxs)(U.a,{onClick:function(){return d(E)},button:!0,children:[Object(x.jsx)(W.a,{children:Object(x.jsx)(V.a,{})}),Object(x.jsx)(G.a,{primary:"Logout"})]})})]}))})]})},q=function(){var e=z(),t=Object(C.h)().pathname,n=F.find((function(e){return!!Object(C.f)(t,{path:e.path})}));return Object(x.jsx)(x.Fragment,{children:(null===e||void 0===e?void 0:e.width)>900?Object(x.jsx)(S.a,{value:null===n||void 0===n?void 0:n.id,children:null===F||void 0===F?void 0:F.map((function(e){return Object(x.jsx)(I.a,{value:e.id,label:e.text,component:T.b,to:e.path},e.id)}))}):Object(x.jsx)(Y,{})})},J=function(){var e=Object(o.useContext)(L.a),t=Object(h.a)(),n=Object(C.h)().pathname,a=Object(C.g)(),c=function(e){a.push(e)};return Object(x.jsx)("div",{className:_.a.Header,children:Object(x.jsx)(m.a,{style:{height:"70px",background:t.palette.primary.dark},color:"primary",position:"static",children:Object(x.jsxs)(g.a,{className:_.a.Toolbar,children:[Object(x.jsx)("img",{style:{cursor:"pointer"},onClick:function(){return c("/home")},src:y.default,alt:"logo"}),e.user?Object(x.jsx)(q,{}):!Object(C.f)(n,"/login")&&Object(x.jsx)(k.a,{onClick:function(){return c("/login")},variant:"outlined",color:"secondary",children:"Login"})]})})})},K=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)(J,{}),Object(x.jsx)("div",{children:e.children}),Object(x.jsx)(v,{})]})},M=n(620),Z=n(280),Q=n(100),$=(n(308),{apiKey:"AIzaSyBXODy7x-k6FxvpREaGlVXm7_R78528Yg8",authDomain:"thankful-17ff4.firebaseapp.com",projectId:"thankful-17ff4",storageBucket:"thankful-17ff4.appspot.com",messagingSenderId:"838339281651",appId:"1:838339281651:web:e9564062a3200cfcd8ed86"}),ee=n(286),te=Object(ee.a)({palette:{primary:{light:"#ffffff",main:"#cfd8dc",dark:"#9ea7aa",contrastText:"#000000"},secondary:{light:"#fff350",main:"#ffc107",dark:"#c79100",contrastText:"#000000"}}}),ne=n(285),oe=n(189),ae=n(199),ce=n(188),re=n.n(ce),ie=function(){var e=Object(C.g)();return Object(x.jsxs)("section",{className:re.a.Card,children:[Object(x.jsx)("img",{className:re.a.SVG,src:ae.default,alt:"logo"}),Object(x.jsx)("h1",{children:"Well done!"}),Object(x.jsxs)("p",{children:["You have filled in the data for today. If you want to view it - go to ",Object(x.jsx)(k.a,{onClick:function(){return t="/history",void e.push(t);var t},variant:"contained",color:"secondary",children:"History"})]})]})},se=n(193),le=n(619),ue=n(622),de=n(284),je=n.n(de),be=n(617),he=n(283),fe=n.n(he),Oe=n(618),xe=n(616),pe=n(78),ve=n.n(pe),me=n(185),ge=function(){var e,t,n=Object(o.useState)([]),a=Object(s.a)(n,2),c=a[0],r=a[1],i=Object(o.useState)(!0),l=Object(s.a)(i,2),u=l[0],d=l[1],j=Object(o.useState)(!1),b=Object(s.a)(j,2),h=b[0],f=b[1],O=Object(o.useState)(""),p=Object(s.a)(O,2),v=p[0],m=p[1],g=Object(o.useContext)(L.a),y=function(e){e&&r((function(t){return m(""),[].concat(Object(oe.a)(t),[e])}))};Object(o.useEffect)((function(){var e,t,n="?auth="+(null===g||void 0===g||null===(e=g.user)||void 0===e?void 0:e.idToken)+'&orderBy="userId"&equalTo="'+(null===g||void 0===g||null===(t=g.user)||void 0===t?void 0:t.uid)+'"';me.a.get("thank-list.json"+n).then((function(e){for(var t in null===e||void 0===e?void 0:e.data)if(null===e||void 0===e?void 0:e.data.hasOwnProperty(t)){var n=null===e||void 0===e?void 0:e.data[t];o=null===n||void 0===n?void 0:n.date,a=new Date,new Date(o).toDateString()===new Date(a).toDateString()&&f(!0)}var o,a;d(!1)}))}),[null===g||void 0===g||null===(e=g.user)||void 0===e?void 0:e.idToken,null===g||void 0===g||null===(t=g.user)||void 0===t?void 0:t.uid]);var w=h?Object(x.jsx)(ie,{}):Object(x.jsxs)(xe.a,{className:ve.a.Container,maxWidth:"sm",children:[Object(x.jsx)("img",{style:{height:"150px"},src:se.default,alt:"logo"}),Object(x.jsx)("h1",{children:"Today I am thankful for:"}),Object(x.jsx)(A.a,{dense:!1,children:c.map((function(e,t){return Object(x.jsxs)(U.a,{children:[Object(x.jsx)(G.a,{primary:e}),Object(x.jsx)(be.a,{onClick:function(){return t=e,void r((function(e){return m(""),e.filter((function(e){return e!==t}))}));var t},children:Object(x.jsx)(Oe.a,{edge:"end","aria-label":"delete",children:Object(x.jsx)(fe.a,{})})})]},e+t)}))}),Object(x.jsxs)(le.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(x.jsx)(le.a,{item:!0,children:Object(x.jsx)(je.a,{style:{cursor:"pointer"},onClick:function(){return y(v)},color:"secondary"})}),Object(x.jsx)(le.a,{item:!0,children:Object(x.jsx)(ue.a,{onChange:function(e){m(e.target.value)},value:v,label:"Add item",onKeyPress:function(e){return n=y,"Enter"===(t=e).key&&n(t.target.value);var t,n}})})]}),Object(x.jsxs)("div",{className:ve.a.Buttons,children:[Object(x.jsx)(k.a,{onClick:function(){r([])},variant:"contained",color:"primary",children:"Clear List"}),Object(x.jsx)(k.a,{disabled:!(null===c||void 0===c?void 0:c.length),onClick:function(){return function(){var e,t;d(!0),me.a.post("thank-list.json?auth="+(null===g||void 0===g||null===(e=g.user)||void 0===e?void 0:e.idToken),{data:Object(oe.a)(c),date:new Date,userId:null===g||void 0===g||null===(t=g.user)||void 0===t?void 0:t.uid}).then((function(e){m(""),r([]),f(!0),d(!1)})).catch((function(e){return console.log(e)}))}()},variant:"contained",color:"secondary",children:"Save"})]})]});return Object(x.jsx)(x.Fragment,{children:u?Object(x.jsx)(M.a,{className:ve.a.Loader,color:"secondary"}):w})},ke=Q.a.apps.length?Q.a.app():Q.a.initializeApp($),ye=a.a.lazy((function(){return n.e(4).then(n.bind(null,690))})),we=a.a.lazy((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,691))})),_e=a.a.lazy((function(){return n.e(6).then(n.bind(null,686))})),Ce=a.a.lazy((function(){return n.e(7).then(n.bind(null,687))})),Le=ke.auth(),Se={googleProvider:new Q.a.auth.GoogleAuthProvider},Ie=te;var Te=Object(Z.a)({providers:Se,firebaseAppAuth:Le})((function(e){var t,n=Object(o.useState)(!0),a=Object(s.a)(n,2),c=a[0],r=a[1],u=Object(C.g)(),d=Object(o.useContext)(L.a),j=e.user,b=e.error,h=e.signOut,f=e.signInWithGoogle,O=e.createUserWithEmailAndPassword,p=e.signInWithEmailAndPassword,v=e.setError,m=function(e){u.push(e)};return Object(o.useEffect)((function(){var e,t;(console.log(j),void 0!==j)&&(r(!1),d.setUser(j),null===(e=Q.a.auth())||void 0===e||null===(t=e.currentUser)||void 0===t||t.getIdToken(!0).then((function(e){d.setUser(Object(i.a)(Object(i.a)({},j),{},{idToken:e}))})).catch((function(e){console.log(e)})))}),[j]),t=Object(x.jsx)(o.Suspense,{fallback:Object(x.jsx)(M.a,{className:ve.a.Loader,color:"secondary"}),children:Object(x.jsxs)(C.d,{children:[Object(x.jsx)(C.b,{path:"/not-found",component:Ce}),Object(x.jsx)(C.b,{path:"/info",component:ye}),Object(x.jsx)(C.b,{path:"/history",component:we}),Object(x.jsx)(C.b,{path:"/home",exact:!0,component:ye}),Object(x.jsx)(C.b,{path:"/logout",component:Ce}),Object(x.jsx)(C.b,{path:"/login",exact:!0,component:function(){return Object(x.jsx)(_e,{setError:v,signInWithEmailAndPassword:p,error:b,createUserWithEmailAndPassword:O,onGoogleLogin:f})}}),Object(x.jsx)(C.a,{from:"/",exact:!0,to:"/home"}),Object(x.jsx)(C.a,{from:"*",to:"/not-found"})]})}),j&&(t=Object(x.jsx)(o.Suspense,{fallback:Object(x.jsx)(M.a,{className:ve.a.Loader,color:"secondary"}),children:Object(x.jsxs)(C.d,{children:[Object(x.jsx)(C.b,{path:"/not-found",component:Ce}),Object(x.jsx)(C.b,{path:"/info",component:ye}),Object(x.jsx)(C.b,{path:"/history",component:we}),Object(x.jsx)(C.b,{path:"/home",exact:!0,component:ge}),Object(x.jsx)(C.b,{path:"/logout",exact:!0,render:function(){return console.log("log out"),h(),void m("/home")}}),Object(x.jsx)(C.a,{from:"/login",to:"/home"}),Object(x.jsx)(C.a,{from:"/",exact:!0,to:"/home"}),Object(x.jsx)(C.a,{from:"*",to:"/not-found"})]})})),Object(x.jsx)(ne.ErrorBoundary,{onError:function(e,t){console.log(e,t)},FallbackComponent:function(e){var t=e.error,n=e.resetErrorBoundary;return Object(x.jsxs)("div",{role:"alert",children:[Object(x.jsx)("p",{children:"Something went wrong:"}),Object(x.jsx)("pre",{children:t.message}),Object(x.jsx)("button",{onClick:n,children:"Try again"})]})},onReset:function(){},children:Object(x.jsx)(l.a,{theme:Ie,children:c?Object(x.jsx)(M.a,{className:ve.a.Loader,color:"secondary"}):Object(x.jsx)(K,{children:t})})})})),Ee=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,688)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),c(e),r(e)}))};n(327),n(377);r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(L.b,{children:Object(x.jsx)(T.a,{basename:"/thankful/",children:Object(x.jsx)(Te,{})})})}),document.getElementById("root")),Ee()},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(53),a=n(0),c=n.n(a),r=n(4),i=c.a.createContext({user:null,setUser:function(){}});t.b=function(e){var t=Object(a.useState)(null),n=Object(o.a)(t,2),c=n[0],s=n[1],l=function(e){s(e)};return Object(r.jsx)(i.Provider,{value:{setUser:function(e){return l(e)},user:c},children:e.children})}},78:function(e,t,n){e.exports={Container:"Home_Container__30TFM",Buttons:"Home_Buttons__3peY_",Loader:"Home_Loader__3njJa"}}},[[560,1,2]]]);
//# sourceMappingURL=main.ebfba747.chunk.js.map