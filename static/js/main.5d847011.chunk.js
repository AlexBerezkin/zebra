(this.webpackJsonpzebra=this.webpackJsonpzebra||[]).push([[0],{39:function(e,t,a){e.exports=a(69)},48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(26),c=a.n(i),s=a(15),l=a(22),o=(a(48),a(4)),m=a.n(o),p=a(20),u=a(8),b=a(9),d=a(11),h=a(10),g=a(12),f=a(17),v=(a(50),a(13)),E=(a(51),Object(f.g)((function(e){var t=e.title,a=e.imageUrl,n=e.size,i=e.history,c=e.linkUrl,s=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return i.push("".concat(s.url).concat(c))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),w=(a(53),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).state={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},e}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"directory-menu"},this.state.sections.map((function(e){var t=e.id,a=Object(v.a)(e,["id"]);return r.a.createElement(E,Object.assign({key:t},a))})))}}]),t}(r.a.Component)),k=(a(54),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(w,null))}),y=(a(55),function(e){e.id;var t=e.name,a=e.imageUrl,n=e.price;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},t),r.a.createElement("span",{className:"price"},n)))}),U=(a(56),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){var t=e.id,a=Object(v.a)(e,["id"]);return r.a.createElement(y,Object.assign({key:t},a))}))))}),j=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:1,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:2,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:3,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:4,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:5,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:6,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:7,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:8,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:1,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:2,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:3,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:4,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:5,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:1,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:2,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:3,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:4,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:5,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:6,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:7,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:1,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:2,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:3,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:4,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:5,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:6,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={collections:j},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.state.collections;return r.a.createElement("div",{className:"shop-page"},e.map((function(e){var t=e.id,a=Object(v.a)(e,["id"]);return r.a.createElement(U,Object.assign({key:t},a))})))}}]),t}(r.a.Component),O=a(21),C=(a(57),function(e){var t=e.handleChange,a=e.label,n=Object(v.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),S=(a(58),function(e){var t=e.children,a=e.isGoogleSignIn,n=Object(v.a)(e,["children","isGoogleSignIn"]);return r.a.createElement("button",Object.assign({className:"".concat(a?"google-sign-in":""," custom-button")},n),t)}),B=a(23),x=a.n(B),z=(a(59),a(63),function(e,t){var a,n,r,i;return m.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(e){c.next=2;break}return c.abrupt("return");case 2:return a=M.doc("users/".concat(e.uid)),c.next=5,m.a.awrap(a.get());case 5:if(c.sent.exists){c.next=17;break}return n=e.displayName,r=e.email,i=new Date,c.prev=9,c.next=12,m.a.awrap(a.set(Object(p.a)({displayName:n,email:r,createdAt:i},t)));case 12:c.next=17;break;case 14:c.prev=14,c.t0=c.catch(9),console.log("error creating user",c.t0.message);case 17:return c.abrupt("return",a);case 18:case"end":return c.stop()}}),null,null,[[9,14]])});x.a.initializeApp({apiKey:"AIzaSyAX6T_CRp19CF8q4VcfIRLrgJA3YUplC0g",authDomain:"zebra-shop.firebaseapp.com",databaseURL:"https://zebra-shop.firebaseio.com",projectId:"zebra-shop",storageBucket:"zebra-shop.appspot.com",messagingSenderId:"1082968991867",appId:"1:1082968991867:web:1abd06c9c9c38091039ade",measurementId:"G-F2TFVVV7D1"});var P=x.a.auth(),M=x.a.firestore(),T=new x.a.auth.GoogleAuthProvider;T.setCustomParameters({prompt:"select_account"});var I=function(){return P.signInWithPopup(T)},A=(x.a,a(65),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleSubmit=function(e){var t,n,r;return m.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e.preventDefault(),t=a.state,n=t.email,r=t.password,i.prev=2,i.next=5,m.a.awrap(P.signInWithEmailAndPassword(n,r));case 5:a.setState({email:"",password:""}),i.next=11;break;case 8:i.prev=8,i.t0=i.catch(2),console.log(i.t0);case 11:case"end":return i.stop()}}),null,null,[[2,8]])},a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(O.a)({},r,n))},a.state={email:"",password:""},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(C,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),r.a.createElement(C,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(S,{type:"submit"}," Sign in "),r.a.createElement(S,{onClick:I,isGoogleSignIn:!0},"Sign in with Google"))))}}]),t}(r.a.Component)),J=(a(66),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).handleSubmit=function(t){var a,n,r,i,c,s,l;return m.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(t.preventDefault(),a=e.state,n=a.displayName,r=a.email,i=a.password,c=a.confirmPassword,i===c){o.next=5;break}return alert("passwords don't match"),o.abrupt("return");case 5:return o.prev=5,o.next=8,m.a.awrap(P.createUserWithEmailAndPassword(r,i));case 8:return s=o.sent,l=s.user,o.next=12,m.a.awrap(z(l,{displayName:n}));case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),o.next=18;break;case 15:o.prev=15,o.t0=o.catch(5),console.error(o.t0);case 18:case"end":return o.stop()}}),null,null,[[5,15]])},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(O.a)({},n,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,i=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(C,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(C,{type:"email",name:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(C,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(C,{type:"password",name:"confirmPassword",value:i,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(S,{type:"submit"},"SIGN UP")))}}]),t}(r.a.Component)),R=(a(67),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(A,null),r.a.createElement(J,null))});function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var D=r.a.createElement("g",{transform:"translate(0.000000,370.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},r.a.createElement("path",{d:"M3023 3004 c-10 -4 -13 -114 -12 -502 l0 -497 49 254 c27 139 63 320 80 402 l33 148 50 3 51 3 28 73 c15 41 26 77 23 82 -11 18 -272 48 -302 34z"}),r.a.createElement("path",{d:"M2800 2969 c-68 -19 -151 -52 -148 -60 2 -4 30 -60 63 -124 l60 -116 -27 -22 c-16 -13 -28 -26 -28 -30 0 -5 29 -88 64 -185 35 -97 92 -270 127 -384 35 -114 64 -206 65 -205 10 10 -62 605 -97 797 l-18 104 21 23 c20 21 20 25 8 118 -15 105 -14 104 -90 84z"}),r.a.createElement("path",{d:"M2474 2808 c-69 -52 -134 -112 -134 -124 0 -7 34 -52 76 -101 114 -132 112 -128 79 -163 l-27 -29 95 -143 c130 -196 241 -388 354 -613 76 -151 94 -181 88 -145 -30 180 -174 558 -341 891 -62 125 -63 127 -44 144 11 10 20 23 20 29 0 12 -127 276 -133 276 -2 0 -17 -10 -33 -22z"}),r.a.createElement("path",{d:"M3281 2599 c-81 -171 -221 -547 -221 -592 0 -6 42 57 93 141 50 83 130 206 177 272 131 186 125 160 58 227 l-57 57 -50 -105z"}),r.a.createElement("path",{d:"M2218 2543 c-20 -23 -98 -151 -98 -161 0 -4 24 -26 53 -50 29 -23 66 -56 83 -73 l29 -31 -33 -27 -32 -28 101 -109 c223 -240 464 -566 619 -834 59 -104 70 -118 64 -85 -12 69 -73 234 -125 337 -97 194 -243 424 -425 669 -52 70 -94 131 -94 135 0 5 9 15 20 22 11 7 20 16 20 21 0 8 -158 231 -164 231 -2 0 -10 -8 -18 -17z"}),r.a.createElement("path",{d:"M3458 2333 c-103 -101 -278 -291 -330 -358 -21 -28 -22 -29 -2 -15 12 8 143 97 292 196 l270 182 -52 51 c-28 28 -56 51 -60 51 -5 0 -58 -48 -118 -107z"}),r.a.createElement("path",{d:"M2012 2138 c-17 -51 -38 -118 -45 -149 l-14 -57 97 -81 c125 -104 346 -325 467 -465 164 -191 355 -454 442 -608 18 -32 35 -58 38 -58 7 0 -7 58 -34 140 -95 284 -376 686 -742 1063 l-124 127 27 29 c33 34 29 45 -36 109 l-44 43 -32 -93z"}),r.a.createElement("path",{d:"M3705 2161 c-194 -73 -523 -226 -512 -237 2 -2 52 10 111 27 179 49 587 139 635 139 3 0 -19 25 -49 55 -30 30 -61 55 -70 55 -8 0 -60 -18 -115 -39z"}),r.a.createElement("path",{d:"M3725 1938 c-49 -5 -171 -19 -270 -31 l-180 -23 102 -12 c55 -6 135 -19 176 -28 73 -16 77 -18 105 -64 71 -114 232 -119 311 -10 31 44 48 112 37 155 -6 25 -8 25 -99 24 -50 -1 -132 -6 -182 -11z"})),F=function(e){var t=e.svgRef,a=e.title,n=G(e,["svgRef","title"]);return r.a.createElement("svg",W({width:"50.000000pt",height:"100.000000pt",viewBox:"200 0 100.000000 1000.000000",preserveAspectRatio:"xMidYMid meet",ref:t},n),a?r.a.createElement("title",null,a):null,D)},V=r.a.forwardRef((function(e,t){return r.a.createElement(F,W({svgRef:t},e))})),L=(a.p,a(68),Object(l.b)((function(e){return{currentUser:e.user.currentUser}}))((function(e){var t=e.currentUser;return r.a.createElement("div",{className:"header"},r.a.createElement(s.b,{className:"logo-container",to:"/"},r.a.createElement(V,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(s.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(s.b,{className:"option",to:"/contact"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return P.signOut()}},"SIGN OUT"):r.a.createElement(s.b,{className:"option",to:"/signin"},"SIGN IN")))}))),q="SET_CURRENT_USER",H=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromAuth=null,a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=P.onAuthStateChanged((function(t){return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t){a.next=7;break}return a.next=3,m.a.awrap(z(t));case 3:a.sent.onSnapshot((function(t){e(Object(p.a)({id:t.id},t.data()))})),a.next=8;break;case 7:e(t);case 8:case"end":return a.stop()}}))}))}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",component:k}),r.a.createElement(f.b,{path:"/shop",component:N}),r.a.createElement(f.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(f.a,{to:"/"}):r.a.createElement(R,null)}})))}}]),t}(r.a.Component),Y=Object(l.b)((function(e){return{currentUser:e.user.currentUser}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:q,payload:e}}(t))}}}))(H),K=a(18),Q=a(38),X=a.n(Q),_={currentUser:null},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(p.a)({},e,{currentUser:t.payload});default:return e}},$=Object(K.c)({user:Z}),ee=[X.a],te=Object(K.d)($,K.a.apply(void 0,ee));c.a.render(r.a.createElement(l.a,{store:te},r.a.createElement(s.a,null,r.a.createElement(Y,null))),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.5d847011.chunk.js.map