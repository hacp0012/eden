(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{425:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(38);function o(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];$nuxt.$store.state.sse.addEventListener("state",(function(n){1==Number(n.data)&&(t(e),0!=e&&e.$axios.put("/v1/chats/sse/accept.php"))})),console.log("SSE: launched."),$nuxt.$store.state.sse.error=function(t){console.log("SSE: Error occured NETWORK ",t)}}},458:function(t,e,n){var content=n(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("5fc7db77",content,!0,{sourceMap:!1})},485:function(t,e,n){"use strict";n(458)},486:function(t,e,n){var o=n(22)(!1);o.push([t.i,".in-box-shadow[data-v-8ef30a78]{box-shadow:1px 1px 6px 1px rgba(91,172,247,.852)}.send-box-shadow[data-v-8ef30a78]{box-shadow:1px 1px 6px 1px rgba(209,207,207,.852)}.shadowed[data-v-8ef30a78]{box-shadow:1px 1px 15px 7px #fff}",""]),t.exports=o},579:function(t,e,n){"use strict";n.r(e);var o=n(20),r=(n(63),n(27),n(26),n(73),n(425)),c={middleware:["auth"],data:function(){return{contact:{avatar:"avatars/small/chris.jpg",name:"",ID:0},chats:[],input:{text:""},dialog:{text:"",title:"",open:!1,action:function(t){}}}},fetch:function(){this.getChats()},mounted:function(){Object(r.a)((function(t){t.getChats()}),this)},methods:{getChats:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t.$route.query.ID){e.next=12;break}return n=t.$route.query.ID,e.prev=2,e.next=5,t.$axios.get("/v1/chats/chatbox/index.php",{params:{ID:n}});case 5:200==(o=e.sent).status&&(null==(r=o.data.contact).avatar||"null"==r.avatar?r.avatar={normal:"avatars/large/lindsay.png",thumbnail:"avatars/small/lindsay.png"}:r.avatar={normal:t.$store.state.app.host+r.avatar.normal,thumbnail:t.$store.state.app.host+r.avatar.thumbnail},t.contact=r,t.chats=o.data.chats,t.$vuetify.goTo(99999,{duration:300,offset:0,easing:"easeInOutCubic"})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))()},sendText:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==t.input.text.trim()){e.next=11;break}return e.prev=1,e.next=4,t.$axios.post("/v1/chats/chatbox/send_text.php",{},{params:{ID:t.contact.ID,text:t.input.text.trim()}});case 4:200==(n=e.sent).status&&"sent"==n.data.status&&(o={text:t.input.text.trim(),formated_time:"maintenent !",sender_id:t.$store.state.account.ID,receiver_id:null,read_time:0},t.chats.push(o),t.input.text="",t.$vuetify.goTo(99999,{duration:300,offset:0,easing:"easeInOutCubic"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},openProfile:function(){this.$router.push("view_profile?ID="+this.contact.ID)},killContact:function(t){var e=arguments,n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.length>1&&void 0!==e[1]&&e[1]){t.next=10;break}return n.dialog.open=!0,n.dialog.title="Attention",o=n,n.dialog.text="Vous etes sur le point de couper contacte avec cette perssone ! vous etes sur de vouloir continue ?",n.dialog.action=function(){o.killContact(null,!0)},t.abrupt("return",null);case 10:n.dialog.open=!1,n.dialog.title="...",n.dialog.text="... message ...",n.dialog.action=function(){};case 14:return t.prev=14,t.next=17,n.$axios.post("/v1/chats/remove.php",{},{params:{ID:n.contact.ID}});case 17:r=t.sent,console.log(r.data),200==r.status&&"removed"==r.data.status&&n.$router.back(),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(14),console.log(t.t0);case 25:case"end":return t.stop()}}),t,null,[[14,22]])})))()},giveInfos:function(){var t="IDENTIFIANTS\n".concat(this.$store.state.account.name," vous donne ces contacts, cela prouve quelle|qu'il vous fait confiance.\nN'abuser pas!\ntelephone: ").concat(this.$store.state.account.phone,"\nregion: ").concat(this.$store.state.account.location,"\nadresse: ").concat(this.$store.state.account.address);this.input.text=t}}},l=(n(485),n(64)),v=n(100),d=n.n(v),x=n(356),m=n(361),h=n(357),f=n(359),_=n(351),w=n(165),C=n(386),k=n(364),y=n(426),$=n(362),I=n(397),V=n(135),D=n(233),N=n(459),T=n(445),j=n(460),A=n(366),E=n(358),S=n(482),O=n(420),R=n(80),B=n(360),L=n(497),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{staticClass:"white rounded-b-circle",attrs:{app:"",color:"white","elevate-on-scroll":""},scopedSlots:t._u([{key:"extension",fn:function(){return[n("v-spacer"),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.contact.online,expression:"contact.online"}],staticClass:"green--text"},[t._v("Enligne")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.contact.online,expression:"!contact.online"}],staticClass:"grey--text"},[t._v("Hors ligne")]),t._v(" "),n("v-spacer")]},proxy:!0}])},[n("v-app-bar-nav-icon",{on:{click:function(e){return t.$router.back()}}},[n("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-app-bar-title",[n("span",{staticClass:"grey--text text-darken-2"},[n("span",{staticClass:"pink--text"},[t._v("E")]),t._v("DEN\n      ")])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-avatar",{staticClass:"elevation-7",on:{click:t.openProfile}},[n("v-img",{attrs:{src:""+t.contact.avatar.thumbnail}})],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-app-bar-title",{staticClass:"grey--text"},[t._v("Tchat")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),o),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),n("v-list",[n("v-list-item-group",[n("v-list-item",[n("v-list-item-title",{on:{click:t.killContact}},[t._v("\n              Bocker & supprimer\n            ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-title",{on:{click:t.giveInfos}},[t._v("\n              donner mes identifians\n            ")])],1)],1)],1)],1)],1),t._v(" "),n("v-main",{staticClass:"grey lighten-4"},[n("v-container",{attrs:{fluid:""}},[n("div",{staticClass:"my-3"},[n("div",{staticClass:"d-flex justify-center"},[n("div",[n("v-img",{attrs:{src:"/icon.png",height:"60px",width:"60px"}})],1)]),t._v(" "),n("div",{staticClass:"text-center"},[t._v("trouver votre amour, votre ame soeur")]),t._v(" "),n("div",{staticClass:"text-center text-caption"},[t._v("\n          Coseil:\n          "),n("span",{staticClass:"text-italic text--secondary"},[n("br"),t._v("ne donne pas facilement votre numero en fin "),n("br"),t._v("d'eviter\n            des arselements!\n          ")])])]),t._v(" "),t._l(t.chats,(function(e,o){return n("v-row",{key:o},[n("v-col",[n("div",{staticClass:"d-flex justify-end"},[n("v-sheet",{directives:[{name:"show",rawName:"v-show",value:e.sender_id==t.$store.state.account.ID,expression:"message.sender_id == $store.state.account.ID"}],staticClass:"\n                grey\n                lighten-3\n                send-box-shadow\n                pa-2\n                rounded-bl-lg rounded-tl-lg rounded-tr-lg\n                mt-3\n              ",attrs:{"max-width":"75%"}},[n("div",[t._v(t._s(e.text))]),t._v(" "),n("div",{staticClass:"d-flex justify-end text-caption"},[n("div",{staticClass:"cyan--text"},[t._v("\n                  "+t._s(e.formated_time.split(" ")[1])+"\n                ")]),t._v("\n                |\n                "),n("div",[t._v("\n                  "+t._s(e.formated_time.split(" ")[0])+"\n                ")]),t._v(" "),n("div",[n("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.read_time>0,expression:"message.read_time > 0"}],attrs:{color:"green"}},[t._v("\n                    mdi-account-check-outline\n                  ")]),t._v(" "),n("v-icon",{directives:[{name:"show",rawName:"v-show",value:0==e.read_time,expression:"message.read_time == 0"}],attrs:{color:"grey"}},[t._v("\n                    mdi-email-send\n                  ")])],1)])])],1),t._v(" "),n("div",{staticClass:"d-flex justify-start"},[n("v-sheet",{directives:[{name:"show",rawName:"v-show",value:e.receiver_id==t.$store.state.account.ID,expression:"message.receiver_id == $store.state.account.ID"}],staticClass:"\n                pa-2\n                blue\n                in-box-shadow\n                lighten-3\n                rounded-bl-lg rounded-br-lg rounded-tr-lg\n                pt-3\n              ",attrs:{"max-width":"75%"}},[n("div",{staticClass:"d-flex justify-start text-caption"},[n("div",[t._v(t._s(e.formated_time.split(" ")[0]))]),t._v("\n                |\n                "),n("div",[t._v(t._s(e.formated_time.split(" ")[1]))])]),t._v(" "),n("div",[t._v(t._s(e.text))])])],1)])],1)})),t._v(" "),n("div",{staticClass:"my-14"})],2),t._v(" "),n("div",{staticClass:"elevation-8 white",staticStyle:{position:"fixed",bottom:"0",left:"0",right:"0"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"9"}},[n("v-textarea",{attrs:{rounded:"","auto-grow":"",rows:"1",dense:"",counter:"255",placeholder:"salut !"},model:{value:t.input.text,callback:function(e){t.$set(t.input,"text",e)},expression:"input.text"}})],1),t._v(" "),n("v-col",{staticClass:"text-center d-flex align-end",attrs:{cols:"1"}},[n("v-btn",{staticClass:"mb-2",attrs:{width:"100%",elevation:"0",color:"white"},on:{click:t.sendText}},[t._v("\n            envoye\n          ")])],1)],1)],1),t._v(" "),n("v-dialog",{model:{value:t.dialog.open,callback:function(e){t.$set(t.dialog,"open",e)},expression:"dialog.open"}},[n("v-card",[n("v-card-title",[t._v(t._s(t.dialog.title))]),t._v(" "),n("v-card-text",[n("p",[t._v(t._s(t.dialog.text))])]),t._v(" "),n("v-card-actions",{staticClass:"d-flex justify-space-around"},[n("v-btn",{attrs:{rounded:"",elevation:"0",color:"green--text green lighten-5"},on:{click:t.dialog.action}},[t._v("\n            Accepter\n          ")]),t._v(" "),n("v-btn",{attrs:{rounded:"",elevation:"0",text:"",color:"grey"},on:{click:function(e){t.dialog.open=!1}}},[t._v("\n            Annuler\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,"8ef30a78",null);e.default=component.exports;d()(component,{VApp:x.a,VAppBar:m.a,VAppBarNavIcon:h.a,VAppBarTitle:f.a,VAvatar:_.a,VBtn:w.a,VCard:C.a,VCardActions:k.a,VCardText:k.c,VCardTitle:k.d,VCol:y.a,VContainer:$.a,VDialog:I.a,VIcon:V.a,VImg:D.a,VList:N.a,VListItem:T.a,VListItemGroup:j.a,VListItemTitle:A.d,VMain:E.a,VMenu:S.a,VRow:O.a,VSheet:R.a,VSpacer:B.a,VTextarea:L.a})}}]);