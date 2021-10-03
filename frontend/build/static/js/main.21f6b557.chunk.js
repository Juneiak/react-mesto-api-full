(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{31:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(21),r=n.n(c),s=(n(31),n(2)),i=n(25),u=n(8),l=n.n(u),p=n(11),d=o.a.createContext(),j=n(0);var h=function(e){var t=e.onCardClick,n=e.card,a=e.onCardLike,c=e.onCardDeleteClick,r=o.a.useContext(d),s=n.owner._id===r._id,i=n.likes.some((function(e){return e._id===r._id}));return Object(j.jsxs)("li",{className:"element",children:[Object(j.jsx)("button",{onClick:function(){c(n)},className:"element__delete-button ".concat(!s&&"element__delete-button_hidden"," button-animation"),type:"button",id:"delete-card"}),Object(j.jsx)("img",{className:"element__image",src:n.link,alt:"\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f ".concat(n.name),onClick:function(){t(n)}}),Object(j.jsxs)("div",{className:"element__about",children:[Object(j.jsx)("h2",{className:"element__place-name",children:n.name}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){a(n)},className:"element__like-button ".concat(i&&"element__like-button_active"," button-animation button-animation_blackout-level_medium "),type:"button"}),Object(j.jsx)("p",{className:"element__like-amount",children:n.likes.length})]})]})]})};var b=function(e){var t=o.a.useContext(d);return Object(j.jsxs)("main",{className:"main",children:[Object(j.jsxs)("section",{className:"profile",children:[Object(j.jsx)("button",{className:"profile__avatar-button",onClick:e.onEditAvatar,type:"button",children:Object(j.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440"})}),Object(j.jsxs)("div",{className:"profile__info",children:[Object(j.jsx)("h1",{className:"profile__name",children:t.name}),Object(j.jsx)("p",{className:"profile__about",children:t.about}),Object(j.jsx)("button",{className:"profile__edit-button button-animation",onClick:e.onEditProfile,type:"button"})]}),Object(j.jsx)("button",{className:"profile__add-button button-animation",onClick:e.onAddPlace,type:"button"})]}),Object(j.jsx)("section",{className:"elements",children:Object(j.jsx)("ul",{className:"elements__table",children:e.cards.length>0?e.cards.map((function(t){return Object(j.jsx)(h,{onCardDeleteClick:e.onCardDeleteClick,onCardLike:e.onCardLike,card:t,onCardClick:e.onCardClick},t._id)})):Object(j.jsx)("div",{children:"nothing to render"})})})]})};var m=function(){var e=(new Date).getFullYear();return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",e," Mesto Russia"]})})};var f=function(e){return o.a.useEffect((function(){function t(t){"Escape"===t.key&&e.onClose()}return e.card&&document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}),[e.card]),Object(j.jsx)("div",{className:"pop-up ".concat(e.card&&"pop-up_opened"),id:"photo",onClick:function(t){t.target.classList.contains("pop-up_opened")&&e.onClose()},children:Object(j.jsxs)("figure",{className:"pop-up__figure",children:[Object(j.jsx)("button",{className:"pop-up__close-button button-animation",onClick:e.onClose,type:"button",id:"photo-close"}),Object(j.jsx)("img",{className:"pop-up__image",src:e.card&&e.card.link,alt:"\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f ".concat(e.card&&e.card.name)}),Object(j.jsx)("figcaption",{className:"pop-up__caption",children:e.card&&e.card.name})]})})},O=n(22),_=n(23),v={baseUrl:"http://api.projectmesto21.nomoredomains.club"},x=new(function(){function e(t){Object(O.a)(this,e),this._options=t}return Object(_.a)(e,[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getUserProfileData",value:function(){var e=localStorage.getItem("jwt");return fetch("".concat(this._options.baseUrl,"/users/me"),{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}}).then(this._checkStatus)}},{key:"getInitialCards",value:function(){var e=localStorage.getItem("jwt");return fetch("".concat(this._options.baseUrl,"/cards"),{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}}).then(this._checkStatus)}},{key:"editPrifile",value:function(e){var t=localStorage.getItem("jwt");return fetch("".concat(this._options.baseUrl,"/users/me"),{method:"PATCH",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkStatus)}},{key:"addCard",value:function(e){var t=localStorage.getItem("jwt");return fetch("".concat(this._options.baseUrl,"/cards"),{method:"POST",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkStatus)}},{key:"deleteCard",value:function(e){var t=localStorage.getItem("jwt");return fetch("".concat(this._options.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}}).then(this._checkStatus)}},{key:"likeStatus",value:function(e,t){var n=localStorage.getItem("jwt"),a=t?"PUT":"DELETE";return fetch("".concat(this._options.baseUrl,"/cards/").concat(e,"/likes"),{method:a,headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"}}).then(this._checkStatus)}},{key:"changeAvatar",value:function(e){var t=localStorage.getItem("jwt");return fetch("".concat(this._options.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._checkStatus)}}]),e}())(v);var g=function(e){var t=e.onClose,n=e.isOpen,a=e.name,c=e.onSubmit,r=e.children,s=e.title,i=e.isLoading,u=e.loading,l=e.buttonPlaceholder;return o.a.useEffect((function(){function e(e){"Escape"===e.key&&t()}return n&&document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[n]),Object(j.jsx)("div",{className:"pop-up ".concat(n&&"pop-up_opened"),id:a,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(j.jsxs)("form",{onSubmit:c,className:"pop-up__form",method:"POST",noValidate:!0,name:a,id:"".concat(a,"-form"),children:[Object(j.jsxs)("fieldset",{className:"pop-up__form-container",children:[Object(j.jsx)("h2",{className:"pop-up__title",children:s}),r,Object(j.jsx)("button",{className:"pop-up__form-button button-animation button-animation_blackout-level_light",type:"submit",children:i?u:l})]}),Object(j.jsx)("button",{className:"pop-up__close-button button-animation",type:"button",onClick:t})]})})};var C=function(e){var t=o.a.useContext(d),n=o.a.useState(""),a=Object(s.a)(n,2),c=a[0],r=a[1],i=o.a.useState(""),u=Object(s.a)(i,2),l=u[0],p=u[1];return o.a.useEffect((function(){r(t.name),p(t.about)}),[t,e.isOpen]),Object(j.jsxs)(g,{onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:l})},name:"profileEdit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonPlaceholder:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:e.onClose,isOpen:e.isOpen,children:[Object(j.jsx)("input",{className:"pop-up__form-text-input",type:"text",minLength:"2",onChange:function(e){r(e.target.value)},maxLength:"40",id:"name",name:"name",value:c,required:!0,placeholder:"\u0418\u043c\u044f"}),Object(j.jsx)("span",{className:"pop-up__error name-error"}),Object(j.jsx)("input",{className:"pop-up__form-text-input",type:"text",minLength:"2",onChange:function(e){p(e.target.value)},maxLength:"200",id:"about",name:"about",value:l,required:!0,placeholder:"\u041e \u0441\u0435\u0431\u0435"}),Object(j.jsx)("span",{className:"pop-up__error about-error"})]})};var k=function(e){var t=o.a.useRef();return Object(j.jsxs)(g,{onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar(t.current.value)},name:"editAvatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonPlaceholder:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:e.onClose,isOpen:e.isOpen,children:[Object(j.jsx)("input",{ref:t,className:"pop-up__form-text-input",type:"url",id:"changeAvatarUrl",name:"newAvatarUrl",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),Object(j.jsx)("span",{className:"pop-up__error changeAvatarUrl-error"})]})};var N=function(e){var t=e.onClose,n=e.onAddPlace,a=e.isOpen,c=o.a.useState(),r=Object(s.a)(c,2),i=r[0],u=r[1],l=o.a.useState(),p=Object(s.a)(l,2),d=p[0],h=p[1];function b(){u(""),h("")}return Object(j.jsxs)(g,{onSubmit:function(e){e.preventDefault(),n({name:i,link:d},b)},name:"addPhoto",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonPlaceholder:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onClose:t,isOpen:a,children:[Object(j.jsx)("input",{onChange:function(e){u(e.target.value)},className:"pop-up__form-text-input",type:"text",minLength:"2",maxLength:"30",id:"card-name",name:"name",value:i,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0}),Object(j.jsx)("span",{className:"pop-up__error card-name-error"}),Object(j.jsx)("input",{onChange:function(e){h(e.target.value)},className:"pop-up__form-text-input",type:"url",id:"card-link",name:"link",value:d,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(j.jsx)("span",{className:"pop-up__error card-link-error"})]})};var S=function(e){var t=o.a.useState(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(j.jsx)(g,{isLoading:a,loading:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...",onSubmit:function(t){t.preventDefault(),c(!0),e.onCardDelete(e.cardToDelete).then((function(){return c(!1)}))},isOpen:e.cardToDelete,onClose:e.onClose,name:"deleteConfirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonPlaceholder:"\u0414\u0430"})};var y=function(){var e=o.a.useState(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],c=o.a.useState(!1),r=Object(s.a)(c,2),u=r[0],h=r[1],O=o.a.useState(!1),_=Object(s.a)(O,2),v=_[0],g=_[1],y=o.a.useState(null),P=Object(s.a)(y,2),w=P[0],E=P[1],T=o.a.useState(null),A=Object(s.a)(T,2),I=A[0],L=A[1],U=o.a.useState({}),D=Object(s.a)(U,2),B=D[0],q=D[1],z=o.a.useState([]),F=Object(s.a)(z,2),J=F[0],G=F[1];function H(){a(!1),h(!1),g(!1),L(null),E(null)}return o.a.useEffect((function(){function e(){return(e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.getUserProfileData();case 3:t=e.sent,q(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("error: ".concat(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function t(){return(t=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.getInitialCards();case 3:t=e.sent,G(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(d.Provider,{value:B,children:[Object(j.jsx)(b,{onCardDeleteClick:function(e){E(e)},cards:J,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===B._id}));function n(){return(n=Object(p.a)(l.a.mark((function n(){var a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,x.likeStatus(e._id,!t);case 3:a=n.sent,G((function(e){return e.map((function(e){return e._id===a._id?a:e}))})),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()},onEditProfile:function(){a(!0)},onAddPlace:function(){h(!0)},onEditAvatar:function(){g(!0)},onCardClick:function(e){L(e)}}),Object(j.jsx)(m,{}),Object(j.jsx)(C,{onUpdateUser:function(e){function t(){return(t=Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.editPrifile(e);case 3:n=t.sent,q(n),H(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},isOpen:n,onClose:H}),Object(j.jsx)(N,{onClose:H,isOpen:u,onAddPlace:function(e,t){x.addCard(e).then((function(e){G([e].concat(Object(i.a)(J))),t(),H()})).then((function(e){console.error(e)}))}}),Object(j.jsx)(k,{onUpdateAvatar:function(e){function t(){return(t=Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.changeAvatar(e);case 3:n=t.sent,q(n),H(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},isOpen:v,onClose:H}),Object(j.jsx)(S,{onCardDelete:function(e){return x.deleteCard(e._id).then((function(){G(J.filter((function(t){return t._id!==e._id}))),E(null)})).catch((function(e){return console.error(e)}))},cardToDelete:w,onClose:H}),Object(j.jsx)(f,{card:I,onClose:H})]})})},P=n(3),w=n.p+"static/media/ok.e1ae4ba1.svg",E=n.p+"static/media/error.13b51faa.svg";var T=function(e){return o.a.useEffect((function(){function t(t){"Escape"===t.key&&e.onClose()}return e.isOpen&&document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}),[e.isOpen]),Object(j.jsx)("div",{className:"pop-up ".concat(e.isOpen&&"pop-up_opened"),onClick:function(t){t.target===t.currentTarget&&e.onClose()},children:Object(j.jsxs)("div",{className:"pop-up__info",children:[Object(j.jsx)("img",{className:"pop-up__info-icon",src:e.status?w:E,alt:"icon"}),Object(j.jsx)("p",{className:"pop-up__status",children:e.status?e.okStatus:e.error?e.error:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),Object(j.jsx)("button",{className:"pop-up__close-button button-animation",type:"button",onClick:e.onClose})]})})};var A=function(e){var t=o.a.useState(""),n=Object(s.a)(t,2),a=n[0],c=n[1],r=o.a.useState(""),i=Object(s.a)(r,2),u=i[0],l=i[1],p=Object(P.g)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("section",{className:"auth",children:[Object(j.jsx)("h2",{className:"auth__title",children:"\u0412\u0445\u043e\u0434"}),Object(j.jsxs)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault(),e.onSubmit(a,c,u,l)},children:[Object(j.jsxs)("div",{className:"auth__input-set",children:[Object(j.jsx)("input",{onChange:function(e){c(e.target.value)},className:"auth__input",type:"email",placeholder:"Email",required:!0,value:a}),Object(j.jsx)("input",{onChange:function(e){l(e.target.value)},className:"auth__input",type:"password",placeholder:"\u041f\u043e\u0440\u043e\u043b\u044c",required:!0,value:u})]}),Object(j.jsx)("button",{className:"auth__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]}),Object(j.jsx)(T,{status:e.status,okStatus:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",isOpen:e.isPopupOpen,onClose:e.status?function(){e.onPopupClose(),p.push("/")}:e.onPopupClose})]})},I=n(9);var L=function(e){var t=o.a.useState(""),n=Object(s.a)(t,2),a=n[0],c=n[1],r=o.a.useState(""),i=Object(s.a)(r,2),u=i[0],l=i[1],p=Object(P.g)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("section",{className:"auth",children:[Object(j.jsx)("h2",{className:"auth__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsxs)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault(),e.onSubmit(a,c,u,l)},children:[Object(j.jsxs)("div",{className:"auth__input-set",children:[Object(j.jsx)("input",{onChange:function(e){c(e.target.value)},className:"auth__input",type:"email",placeholder:"Email",required:!0,value:a}),Object(j.jsx)("input",{onChange:function(e){l(e.target.value)},className:"auth__input",type:"password",placeholder:"\u041f\u043e\u0440\u043e\u043b\u044c",required:!0,value:u})]}),Object(j.jsx)("button",{className:"auth__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(j.jsx)(I.b,{className:"auth__link",to:"/signin",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]}),Object(j.jsx)(T,{status:e.status,okStatus:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",isOpen:e.isPopupOpen,onClose:e.status?function(){e.onPopupClose(),p.push("/signin")}:e.onPopupClose})]})},U=n(15),D=n.p+"static/media/Vector-2.6418ec00.svg",B=n.p+"static/media/closeIcon.a45d5ac5.svg",q=n.p+"static/media/burger.93c9e804.svg",z=["loggedIn"];var F=function(e){var t=e.loggedIn,n=Object(U.a)(e,z),a=o.a.useState(!1),c=Object(s.a)(a,2),r=c[0],i=c[1],u=Object(P.g)(),l=Object(P.h)();return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("img",{className:"header__image",src:D,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f 'mesto'"}),Object(j.jsxs)("div",{className:"header__profile ".concat(r&&"header__profile_open"),children:[t&&Object(j.jsx)("p",{className:"header__email",children:n.data.email}),!t&&"/signup"!==l.pathname&&Object(j.jsx)(I.b,{className:"header__link",to:"/signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),t?Object(j.jsx)("p",{onClick:function(){n.onSignOut(!1),localStorage.removeItem("jwt"),u.push("signin")},className:"header__quit",children:"\u0412\u044b\u0439\u0442\u0438"}):"/signin"!==l.pathname&&Object(j.jsx)(I.b,{className:"header__link",to:"/signin",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(j.jsx)("button",{onClick:function(){i(!r)},style:{backgroundImage:"url("+(r?B:q)+")"},className:"header__dropdownButton button-animation button-animation_blackout-level_medium"})]})},J=n(26),G=["component","path","loggedIn"];var H=function(e){var t=e.component,n=e.path,a=e.loggedIn,o=Object(U.a)(e,G);return Object(j.jsx)(P.b,{path:n,children:function(){return a?Object(j.jsx)(t,Object(J.a)({},o)):Object(j.jsx)(P.a,{to:"/signin"})}})},M=function(e){try{return e.ok?e.json():Promise.reject(e.status)}catch(t){return Promise.reject(t)}};var R=function(){var e=o.a.useState(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],c=o.a.useState(!1),r=Object(s.a)(c,2),i=r[0],u=r[1],l=o.a.useState(!1),p=Object(s.a)(l,2),d=p[0],h=p[1],b=o.a.useState({}),m=Object(s.a)(b,2),f=m[0],O=m[1],_=Object(P.g)();function x(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];u(!0),h(e)}function g(){u(!1)}return o.a.useEffect((function(){var e;localStorage.getItem("jwt")&&(e=localStorage.getItem("jwt"),fetch("".concat(v.baseUrl,"/users/me"),{method:"GET",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return M(e)}))).then((function(e){a(!0),_.push("/"),O(e.data)})).catch((function(e){console.error(e),_.push("/signin")}))}),[n]),Object(j.jsx)("div",{className:"common",children:Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)(F,{loggedIn:n,onSignOut:a,data:f}),Object(j.jsxs)(P.d,{children:[Object(j.jsx)(P.b,{path:"/signin",children:Object(j.jsx)(A,{onSubmit:function(e,t,n,o){(function(e,t){return fetch("".concat(v.baseUrl,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return M(e)}))})(e,n).then((function(e){a(!0),x(!0),t(""),o(""),localStorage.setItem("jwt",e.token),console.log(e.token)})).catch((function(e){console.error(e),x(!1),o("")}))},status:d,isPopupOpen:i,onPopupClose:g})}),Object(j.jsx)(P.b,{path:"/signup",children:Object(j.jsx)(L,{onSubmit:function(e,t,n,a){(function(e,t){return fetch("".concat(v.baseUrl,"/signup"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return M(e)}))})(e,n).then((function(e){x(!0),t(""),a("")})).catch((function(e){console.error(e),x(!1),a("")}))},status:d,isPopupOpen:i,onPopupClose:g})}),Object(j.jsx)(H,{component:y,path:"/",loggedIn:n}),Object(j.jsx)(P.b,{path:"/",children:n?Object(j.jsx)(P.a,{to:"/"}):Object(j.jsx)(P.a,{to:"/signin"})})]})]})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(I.a,{children:Object(j.jsx)(R,{})})}),document.getElementById("root")),V()}},[[39,1,2]]]);
//# sourceMappingURL=main.21f6b557.chunk.js.map