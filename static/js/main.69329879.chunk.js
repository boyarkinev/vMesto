(this.webpackJsonpvmesto=this.webpackJsonpvmesto||[]).push([[0],{15:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a(16),s=a.n(r),o=(a(29),a(4)),i=a(11),u=(a(30),a(7)),p=a(23),l="FORMS/CHANGE_PLACE_LINK_INPUT_ACTION",j="FORMS/CHANGE_PLACE_NAME_INPUT_ACTION",b="CARD/FETCH_DATA_ACTION",d="CARD/LOAD_DATA_ACTION",O="FORMS/CHANGE_USER_NAME_INPUT_ACTION",m="FORMS/CHANGE_USER_JOB_INPUT_ACTION",h="USER/FETCH_STORAGE_DATA_ACTION",f="USER/LOAD_STORAGE_DATA_ACTION",_={placeName:"",placePhotoLink:""},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(o.a)(Object(o.a)({},e),{},{placeName:t.payload});case l:return Object(o.a)(Object(o.a)({},e),{},{placePhotoLink:t.payload});default:return e}},v={places:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(o.a)(Object(o.a)({},e),{},{places:t.payload});default:return e}},g={userName:"",userJob:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(o.a)(Object(o.a)({},e),{},{userName:t.payload});case m:return Object(o.a)(Object(o.a)({},e),{},{userJob:t.payload});default:return e}},k={user:{name:"",job:""}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(o.a)(Object(o.a)({},e),{},{user:t.payload});default:return e}},y=Object(u.c)({cardData:x,placesServerData:N,userData:P,userStorageData:w}),C=a(6),S=a.n(C),A=a(14),T=a(9),D="https://vmesto-project-default-rtdb.firebaseio.com",E=function(){var e=Object(T.a)(S.a.mark((function e(t,a){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,a);case 2:if((n=e.sent).ok){e.next=5;break}return e.abrupt("return",Promise.reject("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441. \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(n.status)));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),L=function(){var e=Object(T.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("".concat(D,"/places.json"),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(T.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("".concat(D,"/places.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(T.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("".concat(D,"/places/").concat(t,".json"),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(T.a)(S.a.mark((function e(t,a){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("".concat(D,"/places/").concat(t,".json"),{method:"PATCH",body:JSON.stringify({likesCount:a}),headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),F=function(){var e=Object(T.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:if(null===(t=e.sent)){e.next=7;break}return e.abrupt("return",Object.keys(t).map((function(e){var a=t[e];return a.id=e,a})));case 7:return e.abrupt("return",[]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(e){return{type:j,payload:e}},U=function(e){return{type:l,payload:e}},B=function(e){return{type:b,payload:e}},G=function(){return{type:d}},H=function(e){return{type:O,payload:e}},M=function(e){return{type:m,payload:e}},z=function(){return{type:f}},K=function(){var e=localStorage.getItem("user");return null!==e?JSON.parse(e):{name:"",job:""}},Z=S.a.mark(W),$=S.a.mark(X),q=S.a.mark(Y),Q=S.a.mark(ee);function W(){var e;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(A.a)(F);case 2:return e=t.sent,t.next=5,Object(A.b)(B(e));case 5:case"end":return t.stop()}}),Z)}function X(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.c)(d,W);case 2:case"end":return e.stop()}}),$)}function Y(){var e;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(A.a)(K);case 2:return e=t.sent,t.next=5,Object(A.b)({type:h,payload:e});case 5:case"end":return t.stop()}}),q)}function ee(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.c)(f,Y);case 2:case"end":return e.stop()}}),Q)}var te=Object(p.a)(),ae=Object(u.e)(y,Object(u.d)(Object(u.a)(te)));te.run(X),te.run(ee);var ne=ae,ce=(a(34),a.p+"static/media/logo3.d9949e2d.svg"),re=function(){return Object(n.jsx)("header",{className:"header root__section",children:Object(n.jsx)("img",{src:ce,alt:"Logo",className:"logo"})})},se=(a(35),a.p+"static/media/avatar.6a14390a.jpg"),oe=a(10),ie=Object(oe.b)((function(e){return{user:e.userStorageData.user}}))((function(e){var t=e.user,a=t.name,c=t.job,r=e.cardPopupVisible,s=e.userPopupVisible;return Object(n.jsx)("div",{className:"profile root__section",children:Object(n.jsxs)("div",{className:"user-info",children:[Object(n.jsx)("img",{src:se,alt:"Avatar",className:"user-info__photo"}),Object(n.jsxs)("div",{className:"user-info__data",children:[Object(n.jsx)("h1",{className:"user-info__name",children:""!==a?a:"\u0418\u0432\u0430\u043d \u0421\u0443\u0441\u0430\u043d\u0438\u043d"}),Object(n.jsx)("p",{className:"user-info__job",children:""!==c?c:"\u0412\u043e\u043b\u043e\u043d\u0442\u0451\u0440, \u043f\u0440\u043e\u0432\u043e\u0434\u043d\u0438\u043a"}),Object(n.jsx)("button",{onClick:function(){s()},className:"button button__edit-profile",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(n.jsx)("button",{onClick:function(){r()},className:"button button__add-card",children:Object(n.jsx)("i",{className:"material-icons",children:"add"})})]})})})),ue=(a(42),a(43),a(12)),pe=a.n(ue),le=a.p+"static/media/preloader-red.208e6506.svg",je=(a(15),function(e){var t=e.link,a=e.name,c=e.onShow,r=e.changeImagePopupVisible,s=pe()("popup",{"popup_is-shown":c.imagePopup});return Object(n.jsx)("div",{className:s,children:Object(n.jsxs)("div",{className:"popup-card",children:[Object(n.jsx)("img",{src:t,alt:a,className:"popup-card__image"}),Object(n.jsx)("i",{onClick:function(){r()},className:"material-icons popup__close",children:"clear"})]})})}),be=a.p+"static/media/preloader-black.f35913f9.svg",de=function(e){var t=e.onShow,a=e.alertPopupVisible,r=Object(c.useState)(!1),s=Object(i.a)(r,2),o=s[0],u=s[1],p=function(){var e=Object(T.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,J(t.target.closest(".place-card").id);case 3:n=G(),ne.dispatch(n),a(),u(!1);case 6:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),l=pe()("popup",{"popup_is-shown":t.alertPopup});return Object(n.jsx)("div",{className:l,children:Object(n.jsxs)("div",{className:"popup__content",children:[Object(n.jsx)("p",{className:"popup__text",children:"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u0430"}),Object(n.jsx)("div",{className:"popup__preloader-wrapper",children:o&&Object(n.jsx)("img",{src:be,alt:"Preloader"})}),Object(n.jsxs)("div",{className:"popup__button-wrapper",children:[Object(n.jsx)("button",{onClick:p,className:"button popup__button",children:"OK"}),Object(n.jsx)("button",{onClick:function(){a()},className:"button popup__button",children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})})},Oe=function(e){var t=e.data,a=t.placeName,r=t.placePhotoLink,s=t.id,u=t.likesCount,p=Object(c.useState)({imagePopup:!1,alertPopup:!1}),l=Object(i.a)(p,2),j=l[0],b=l[1],d=Object(c.useState)(!1),O=Object(i.a)(d,2),m=O[0],h=O[1],f=function(){j.imagePopup?b(Object(o.a)(Object(o.a)({},j),{},{imagePopup:!1})):b(Object(o.a)(Object(o.a)({},j),{},{imagePopup:!0}))},_=function(){j.alertPopup?b(Object(o.a)(Object(o.a)({},j),{},{alertPopup:!1})):b(Object(o.a)(Object(o.a)({},j),{},{alertPopup:!0}))},x=function(){var e=Object(T.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 1,a=u+1,h(!0),e.next=5,V(t.target.closest(".place-card").id,a);case 5:n=G(),ne.dispatch(n),h(!1);case 7:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),v=pe()("place-card__like-count",{"place-card__like-count_show":0!==u}),N=pe()("material-icons",{"place-card__like-icon_is-liked":0!==u});return Object(n.jsxs)("div",{className:"place-card",id:s,children:[Object(n.jsxs)("div",{className:"place-card__image-container",children:[Object(n.jsx)("img",{onClick:function(){f()},className:"place-card__image",src:r,alt:a}),Object(n.jsx)("button",{onClick:function(){_()},className:"place-card__delete-icon",children:Object(n.jsx)("i",{className:"material-icons",children:"delete"})})]}),Object(n.jsxs)("div",{className:"place-card__description",children:[Object(n.jsx)("h3",{className:"place-card__name",children:a}),Object(n.jsxs)("div",{className:"place-card__likes-wrapper",children:[Object(n.jsx)("button",{onClick:x,className:"place-card__like-icon",children:m?Object(n.jsx)("img",{src:le,alt:"Preloader"}):Object(n.jsx)("i",{className:N,children:0===u?"favorite_border":"favorite"})}),Object(n.jsx)("p",{className:v,children:u})]})]}),Object(n.jsx)(je,{link:r,name:a,onShow:j,changeImagePopupVisible:f}),Object(n.jsx)(de,{onShow:j,alertPopupVisible:_})]})},me=Object(oe.b)((function(e){return{places:e.placesServerData.places}}))((function(e){var t=e.places;return Object(n.jsx)("div",{className:"places-list root__section",children:t.map((function(e){return Object(n.jsx)(Oe,{data:e},e.id)}))})})),he=a.p+"static/media/preloader-white.02b4291a.svg",fe=function(e){var t=e.data,a=t.placeName,r=t.placePhotoLink,s=t.changePlaceName,u=t.changePlacePhotoLink,p=t.cardPopupVisible,l=Object(c.useState)({name:!1,link:!1}),j=Object(i.a)(l,2),b=j[0],d=j[1],O=Object(c.useState)({name:"\u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0441\u043b\u043e\u0432\u043e",link:"\u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443"}),m=Object(i.a)(O,2),h=m[0],f=m[1],_=Object(c.useState)(!1),x=Object(i.a)(_,2),v=x[0],N=x[1];Object(c.useEffect)((function(){h.name||h.link?N(!1):N(!0)}),[h.name,h.link]);var g=function(e){switch(e.target.name){case"placeName":d(Object(o.a)(Object(o.a)({},b),{},{name:!0}));break;case"placePhotoLink":d(Object(o.a)(Object(o.a)({},b),{},{link:!0}))}},P=Object(c.useState)(!1),k=Object(i.a)(P,2),w=k[0],y=k[1],C=function(e){switch(e.target.name){case"placeName":s(e.target.value);/([A-Za-z]|[\u0410-\u042f\u0401\u0430-\u044f\u0451])/gi.test(e.target.value)?f(Object(o.a)(Object(o.a)({},h),{},{name:""})):f(Object(o.a)(Object(o.a)({},h),{},{name:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}));break;case"placePhotoLink":u(e.target.value);/(^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$)/.test(e.target.value)?f(Object(o.a)(Object(o.a)({},h),{},{link:""})):f(Object(o.a)(Object(o.a)({},h),{},{link:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0441\u0441\u044b\u043b\u043a\u0443"}))}},A=function(){var e=Object(T.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),y(!0),e.next=4,I({placeName:a,placePhotoLink:r,date:(new Date).toLocaleDateString(),likesCount:0});case 4:s(""),u(""),p(),n=G(),ne.dispatch(n),y(!1);case 9:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{className:"popup__title",children:"\u041d\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430"}),Object(n.jsxs)("form",{id:"add-image-form",className:"popup__form",onSubmit:A,noValidate:!0,children:[Object(n.jsxs)("div",{className:"popup__input-container",children:[Object(n.jsx)("div",{className:"alert-message",children:b.name&&h.name&&Object(n.jsx)("span",{children:h.name})}),Object(n.jsx)("input",{name:"placeName",onChange:function(e){return C(e)},onBlur:function(e){return g(e)},value:a,type:"text",className:"popup__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})]}),Object(n.jsxs)("div",{className:"popup__input-container",children:[Object(n.jsx)("div",{className:"alert-message",children:b.link&&h.link&&Object(n.jsx)("span",{children:h.link})}),Object(n.jsx)("input",{name:"placePhotoLink",onChange:function(e){return C(e)},onBlur:function(e){return g(e)},value:r,type:"url",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"})]}),Object(n.jsx)("button",{id:"submit-add-image-form",type:"submit",name:"popupButton",className:"button popup__button",disabled:!v,children:w?Object(n.jsx)("img",{src:he,alt:"Preloader",className:"preloader"}):Object(n.jsx)("i",{className:"material-icons",children:"add"})})]})]})},_e=Object(oe.b)((function(e){return{placeName:e.cardData.placeName,placePhotoLink:e.cardData.placePhotoLink}}),(function(e){return{changePlaceName:Object(u.b)(R,e),changePlacePhotoLink:Object(u.b)(U,e)}}))((function(e){var t=e.cardPopupVisible,a=e.changePlaceName,c=e.changePlacePhotoLink,r=e.onShow,s=pe()("popup",{"popup_is-shown":r.cardPopup});return Object(n.jsx)("div",{className:s,children:Object(n.jsxs)("div",{className:"popup__content",children:[Object(n.jsx)("i",{onClick:function(){a(""),c(""),t()},className:"material-icons popup__close",children:"clear"}),Object(n.jsx)(fe,{data:e})]})})})),xe=Object(oe.b)((function(e){return{user:e.userStorageData.user}}))((function(e){var t=e.data,a=t.userName,c=t.userJob,r=t.changeUserName,s=t.changeUserJob,o=t.userPopupVisible,i=e.user,u=(i.name,i.job,function(e){switch(e.target.name){case"userName":return r(e.target.value);case"userJob":return s(e.target.value)}});return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{className:"popup__title",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(n.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),function(e,t){localStorage.setItem("user",JSON.stringify({name:e,job:t}))}(a,c),t=z(),ne.dispatch(t),o()},id:"edit-user-form",className:"popup__form",children:[Object(n.jsxs)("div",{className:"popup__input-container",children:[Object(n.jsx)("div",{className:"alert-message",children:Object(n.jsx)("span",{})}),Object(n.jsx)("input",{onChange:u,value:a,type:"text",name:"userName",className:"popup__input",placeholder:"\u0418\u043c\u044f, \u0444\u0430\u043c\u0438\u043b\u0438\u044f"})]}),Object(n.jsxs)("div",{className:"popup__input-container",children:[Object(n.jsx)("div",{className:"alert-message",children:Object(n.jsx)("span",{})}),Object(n.jsx)("input",{onChange:u,value:c,type:"text",name:"userJob",className:"popup__input",placeholder:"\u0420\u043e\u0434 \u0437\u0430\u043d\u044f\u0442\u0438\u0439 \u0438\u043b\u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f"})]}),Object(n.jsx)("button",{id:"submit-edit-user-form",type:"submit",name:"popupButton",className:"button popup__button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})),ve=Object(oe.b)((function(e){return{userName:e.userData.userName,userJob:e.userData.userJob}}),(function(e){return{changeUserName:Object(u.b)(H,e),changeUserJob:Object(u.b)(M,e)}}))((function(e){var t=e.userPopupVisible,a=e.onShow,c=pe()("popup",{"popup_is-shown":a.userPopup});return Object(n.jsx)("div",{id:"addImagePopup",className:c,children:Object(n.jsxs)("div",{className:"popup__content",children:[Object(n.jsx)("i",{onClick:function(){t()},className:"material-icons popup__close",children:"clear"}),Object(n.jsx)(xe,{data:e})]})})})),Ne=function(e){return ne.dispatch(e)},ge=function(){Object(c.useEffect)((function(){Ne(G())}),[]),Object(c.useEffect)((function(){Ne(z())}),[]);var e=Object(c.useState)({cardPopup:!1,userPopup:!1}),t=Object(i.a)(e,2),a=t[0],r=t[1],s=function(){return a.cardPopup?r(Object(o.a)(Object(o.a)({},a),{},{cardPopup:!1})):r(Object(o.a)(Object(o.a)({},a),{},{cardPopup:!0}))},u=function(){return a.userPopup?r(Object(o.a)(Object(o.a)({},a),{},{userPopup:!1})):r(Object(o.a)(Object(o.a)({},a),{},{userPopup:!0}))};return Object(n.jsxs)("div",{className:"root",children:[Object(n.jsx)(re,{}),Object(n.jsx)(ie,{cardPopupVisible:s,userPopupVisible:u}),Object(n.jsx)(me,{}),Object(n.jsx)(_e,{onShow:a,cardPopupVisible:s}),Object(n.jsx)(ve,{onShow:a,userPopupVisible:u})]})},Pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(n.jsx)(oe.a,{store:ne,children:Object(n.jsx)(ge,{})}),document.getElementById("root")),Pe()}},[[44,1,2]]]);
//# sourceMappingURL=main.69329879.chunk.js.map