(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{425:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(38);function n(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];$nuxt.$store.state.sse.addEventListener("state",(function(r){1==Number(r.data)&&(e(t),0!=t&&t.$axios.put("/v1/chats/sse/accept.php"))})),console.log("SSE: launched."),$nuxt.$store.state.sse.error=function(e){console.log("SSE: Error occured NETWORK ",e)}}},479:function(e,t,r){var content=r(558);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("8c36c560",content,!0,{sourceMap:!1})},557:function(e,t,r){"use strict";r(479)},558:function(e,t,r){var n=r(22)(!1);n.push([e.i,".shadowed[data-v-176d44e6]{box-shadow:1px 1px 25px #d3d3d3}.sheet-shadowed[data-v-176d44e6]{box-shadow:1px 1px 20px -7px #d3d3d3}.gradian-tap[data-v-176d44e6]{background:linear-gradient(10deg,rgba(0,0,0,.926),transparent 95%)}",""]),e.exports=n},589:function(e,t,r){"use strict";r.r(t);var n=r(20),o=(r(73),r(13),r(38),r(52),r(72),r(392),r(425)),l={middleware:["auth"],data:function(){return{arc:!0,page:"profile",browser:{index:0,datas:[],current:{ID:0,name:"Chargement ...",age:"",address:"en cours",location:"../..",profesion:"en cours",avatar:{normal:"avatars/large/lindsay.png",thumbnail:"avatars/small/lindsay.png"},images:[],description:"Chargement ...",what_i_like:"",likes:[],unlikes:[],invitations:[]},is:{liked:!0,unliked:!0,loaded:"pink"},disableNext:!0},profile:{previewed:{ID:0,name:"",age:0,address:"...",location:"../..",profesion:"",avatar:{normal:this.$store.state.app.host+"avatars/large/lindsay.png",thumbnail:this.$store.state.app.host+"avatars/small/lindsay.png"},images:[],what_i_like:"",description:"",likes:[],unlikes:[],invitations:[]}},mailBox:{badget:!1,invited:!1,disableInvited:!0},misc:{snackbar:!0,snackbar_text:"25 suggesstions par jour"}}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/v1/browser/");case 3:200==(r=t.sent).status&&(n=[],r.data.forEach((function(e){n.push({ID:Number(e.ID)})})),e.browser.datas=n,e.get_(e.browser.datas[e.browser.index].ID)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},mounted:function(){this.page="browser";var e=this;Object(o.a)((function(){e.mailBox.badget=!0}))},methods:{get_:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.browser.is.unliked=!0,t.browser.disableNext=!0,t.mailBox.disableInvited=!0,t.browser.is.liked=!0,t.browser.is.loaded="pink",r.prev=5,r.next=8,t.$axios.get("/v1/browser/get.php",{params:{ID:e}});case 8:200==(n=r.sent).status?(t.browser.is.unliked=n.data.unlikes.includes(Number(t.$store.state.account.ID)),t.browser.disableNext=!1,t.mailBox.disableInvited=!1,t.mailBox.invited=n.data.invitations.includes(Number(t.$store.state.account.ID)),t.browser.is.liked=n.data.likes.includes(Number(t.$store.state.account.ID)),null==(o=n.data).avatar||"null"==o.avatar?o.avatar={normal:"avatars/large/"+("m"==o.geder?"chris.jpg":"lindsay.png"),thumbnail:"avatars/small/"+("m"==o.geder?"chris.jpg":"lindsay.png")}:o.avatar={normal:t.$store.state.app.host+o.avatar.normal,thumbnail:t.$store.state.app.host+o.avatar.thumbnail},l=[],o.images.forEach((function(e){l.push({normal:t.$store.state.app.host+e.normal,thumbnail:t.$store.state.app.host+e.thumbnail})})),l.push(o.avatar),o.images=l,t.browser.current=o):console.log("An other error was riched."),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(5),console.log(r.t0.toJSON());case 15:case"end":return r.stop()}}),r,null,[[5,12]])})))()},like:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.put("/v1/browser/like.php",{},{params:{ID:e.browser.current.ID}});case 2:200==(r=t.sent).status&&("liked"==r.data.status?(e.browser.is.liked=!0,e.browser.is.unliked=!1):(e.browser.is.liked=!0,e.browser.is.unliked=!1,console.log("user arealy liked")));case 4:case"end":return t.stop()}}),t)})))()},unlike:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.put("/v1/browser/unlike.php",{},{params:{ID:e.browser.current.ID}});case 2:200==(r=t.sent).status&&("unliked"==r.data.status?(e.browser.is.unliked=!0,e.browser.is.liked=!1):(e.browser.is.unliked=!0,e.browser.is.liked=!1,console.log("user arealy unliked")));case 4:case"end":return t.stop()}}),t)})))()},next:function(){this.browser.index++,this.browser.datas.length-1>=this.browser.index?this.get_(this.browser.datas[this.browser.index].ID):this.browser.index>this.browser.datas.length-1&&(this.browser.index=0,this.get_(this.browser.datas[this.browser.index].ID))},prev:function(){this.browser.index-1<0?this.browser.index=this.browser.datas.length-1:this.browser.index--,this.browser.datas.length-1>=this.browser.index?this.get_(this.browser.datas[this.browser.index].ID):this.browser.index>this.browser.datas.length-1&&(this.browser.index=0,this.get_(this.browser.datas[this.browser.index].ID))},invit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.post("/v1/chats/invitation/send.php",{},{params:{ID:e.browser.current.ID}});case 3:200==(r=t.sent).status&&("sent"==r.data.status?e.mailBox.invited=!0:"canceled"==r.data.status&&(e.mailBox.invited=!1)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},viewProfile:function(){this.browser.datas.length&&(this.profile.previewed=this.browser.current,this.page="profile")},openInbox:function(){}}},c=(r(557),r(64)),d=r(100),v=r.n(d),h=r(356),m=r(361),w=r(359),x=r(351),f=r(468),_=r(165),k=r(386),C=r(364),y=r(573),I=r(574),$=r(362),B=r(434),V=r(135),D=r(233),N=r(358),j=r(156),R=r(420),E=r(80),O=r(435),S=r(360),A=r(422),T=r(421),J=r(559),M=r.n(J),P=r(367),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{staticClass:"white rounded-b-lg",attrs:{app:"","elevate-on-scroll":""}},[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:"profile"==e.page,expression:"page == 'profile'"}],attrs:{icon:""},on:{click:function(t){e.page="browser"}}},[r("v-icon",[e._v("mdi-arrow-left")])],1),e._v(" "),r("v-app-bar-title",[r("v-img",{attrs:{src:"icon.png",height:"25px",width:"25px"}})],1),e._v(" "),r("v-app-bar-title",[r("span",{staticClass:"grey--text text-darken-2 ml-2"},[r("span",{staticClass:"pink--text"},[e._v("E")]),e._v("DEN\n      ")])]),e._v(" "),r("v-spacer"),e._v(" "),r("nuxt-link",{attrs:{to:"profile"}},[r("v-avatar",{staticClass:"elevation-1",attrs:{size:"36"}},[r("v-img",{attrs:{src:""+e.$store.state.account.avatar.thumbnail,alt:"avatar"}})],1)],1)],1),e._v(" "),r("v-main",{},[r("v-container",{attrs:{fluid:""}},[r("v-window",{attrs:{touchless:""},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}},[r("v-window-item",{attrs:{value:"browser"}},[r("v-sheet",{staticClass:"rounded-xl",attrs:{touch:"",width:"100%"}},[r("v-card",{directives:[{name:"touch",rawName:"v-touch",value:{left:e.next,right:e.prev},expression:"{ left: next, right: prev }"}],staticClass:"mx-auto",attrs:{"max-width":"400",rounded:"lg",loading:e.browser.is.loaded},on:{click:e.viewProfile}},[r("v-img",{staticClass:"white--text align-end",attrs:{"lazy-src":""+e.$store.state.account.avatar.thumbnail,height:e.$vuetify.breakpoint.height-140+"px",width:"100%",src:e.browser.current.avatar.normal},on:{load:function(t){e.browser.is.loaded=!1}},scopedSlots:e._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])},[e._v(" "),r("div",{staticClass:"gradian-tap"},[r("v-card-text",{staticClass:"grey--text text--lighten-3"},[r("div",{staticClass:"text-h5"},[e._v("\n                      "+e._s(e.browser.current.name)+" "+e._s(e.browser.current.age)+"\n                    ")]),e._v(" "),r("div",[r("v-icon",{attrs:{"x-small":"",color:"white"}},[e._v(" mdi-map-marker ")]),e._v("\n                      "+e._s(e.browser.current.address)+"\n                    ")],1),e._v(" "),r("div",[r("v-icon",{attrs:{"x-small":"",color:"white"}},[e._v("\n                        mdi-school-outline\n                      ")]),e._v("\n                      "+e._s(e.browser.current.profesion)+"\n                    ")],1)])],1)])],1)],1),e._v(" "),r("div",{staticClass:"d-flex justify-space-around mt-4"},[r("v-btn",{attrs:{icon:"",disabled:e.browser.is.unliked},on:{click:e.unlike}},[r("v-icon",{attrs:{color:"red lighten-2"}},[e._v("mdi-thumb-down-outline")])],1),e._v(" "),r("v-badge",{attrs:{value:e.mailBox.badget,color:"green lighten-1",overlap:"",left:""}},[r("v-btn",{staticClass:"shadowed",attrs:{nuxt:"",to:"inBox",icon:"",large:""}},[r("v-icon",{attrs:{color:"grey"}},[e._v("mdi-email-outline")])],1)],1),e._v(" "),r("v-btn",{staticClass:"shadowed",attrs:{icon:"",large:"",disabled:e.browser.disableNext},on:{click:e.next}},[r("v-icon",{attrs:{large:"",color:"yellow darken-3"}},[e._v("\n                mdi-debug-step-over\n              ")])],1),e._v(" "),r("v-btn",{staticClass:"shadowed",attrs:{icon:"",large:"",disabled:e.mailBox.disableInvited},on:{click:e.invit}},[r("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.mailBox.invited,expression:"mailBox.invited"}],attrs:{color:"red"}},[e._v("\n                mdi-account-remove\n              ")]),e._v(" "),r("v-icon",{directives:[{name:"show",rawName:"v-show",value:0==e.mailBox.invited,expression:"mailBox.invited == false"}],attrs:{color:"grey lighten-1"}},[e._v("\n                mdi-account-plus\n              ")])],1),e._v(" "),r("v-btn",{attrs:{icon:"",disabled:e.browser.is.liked},on:{click:e.like}},[r("v-icon",{attrs:{color:"green lighten-2"}},[e._v("mdi-thumb-up-outline")])],1)],1)],1),e._v(" "),r("v-window-item",{attrs:{value:"profile"}},[r("v-card",{staticClass:"shadowed"},[r("v-carousel",{attrs:{"show-arrows-on-hover":"",continuous:"",height:e.$vuetify.breakpoint.height-250+"px","hide-delimiters":"",interval:"12000",cycle:""}},e._l(e.profile.previewed.images,(function(img,e){return r("v-carousel-item",{key:e,attrs:{src:img.normal}})})),1)],1),e._v(" "),r("v-sheet",{staticClass:"pt-3 pa-2 mt-4",attrs:{rounded:"lg"}},[r("div",{staticClass:"text-h5 cyan--text"},[e._v("\n              "+e._s(e.profile.previewed.name)+"\n            ")]),e._v(" "),r("div",{staticClass:"text-subtitle font-weight-black"},[e._v("\n              "+e._s(e.profile.previewed.age)+" ans\n            ")]),e._v(" "),r("div",{staticClass:"text--secondary"},[r("v-icon",{attrs:{small:""}},[e._v("mdi-map-marker")]),e._v("\n              "+e._s(e.profile.previewed.address)+"\n            ")],1),e._v(" "),r("div",{staticClass:"text--secondary text-body-1"},[r("v-icon",{attrs:{small:""}},[e._v("mdi-school-outline")]),e._v("\n              "+e._s(e.profile.previewed.profesion)+"\n            ")],1),e._v(" "),r("v-divider",{staticClass:"my-2",attrs:{inset:""}}),e._v(" "),r("div",{staticClass:"grey--text text--darken-3"},[e._v("\n              "+e._s(e.profile.previewed.description)+"\n            ")]),e._v(" "),r("v-divider",{staticClass:"my-2",attrs:{inset:""}}),e._v(" "),r("div",{staticClass:"grey--text text--darken-3"},[e._v("\n              "+e._s(e.profile.previewed.what_i_like)+"\n            ")])],1),e._v(" "),r("div",{staticClass:"d-flex justify-space-around mt-4"},[r("v-btn",{attrs:{icon:"",disabled:e.browser.is.unliked},on:{click:e.unlike}},[r("v-icon",{attrs:{color:"red"}},[e._v("mdi-thumb-down-outline")])],1),e._v(" "),r("v-btn",{staticClass:"shadowed",attrs:{icon:"",large:"",disabled:e.mailBox.disableInvited},on:{click:e.invit}},[r("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.mailBox.invited,expression:"mailBox.invited"}],attrs:{color:"red"}},[e._v("\n                mdi-account-remove\n              ")]),e._v(" "),r("v-icon",{directives:[{name:"show",rawName:"v-show",value:0==e.mailBox.invited,expression:"mailBox.invited == false"}],attrs:{color:"grey lighten-1"}},[e._v("\n                mdi-account-plus\n              ")])],1),e._v(" "),r("v-btn",{attrs:{icon:"",disabled:e.browser.is.liked},on:{click:e.like}},[r("v-icon",{attrs:{color:"yellow darken-3"}},[e._v("mdi-thumb-up-outline")])],1)],1)],1)],1),e._v(" "),r("v-snackbar",{attrs:{top:"",timeout:2e3,color:"primary",text:""},model:{value:e.misc.snackbar,callback:function(t){e.$set(e.misc,"snackbar",t)},expression:"misc.snackbar"}},[r("div",{staticClass:"mx-3"},[r("span",{staticClass:"text-h6"},[e._v(e._s(e.misc.snackbar_text))])])])],1)],1)],1)}),[],!1,null,"176d44e6",null);t.default=component.exports;v()(component,{VApp:h.a,VAppBar:m.a,VAppBarTitle:w.a,VAvatar:x.a,VBadge:f.a,VBtn:_.a,VCard:k.a,VCardText:C.c,VCarousel:y.a,VCarouselItem:I.a,VContainer:$.a,VDivider:B.a,VIcon:V.a,VImg:D.a,VMain:N.a,VProgressCircular:j.a,VRow:R.a,VSheet:E.a,VSnackbar:O.a,VSpacer:S.a,VWindow:A.a,VWindowItem:T.a}),M()(component,{Touch:P.a})}}]);