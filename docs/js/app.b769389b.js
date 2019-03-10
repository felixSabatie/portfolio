(function(t){function e(e){for(var o,i,r=e[0],l=e[1],c=e[2],p=0,d=[];p<r.length;p++)i=r[p],s[i]&&d.push(s[i][0]),s[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(o=!1)}o&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},s={app:0},n=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/portfolio/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0240":function(t,e,a){"use strict";var o=a("1a85"),s=a.n(o);s.a},"0596":function(t,e,a){},"0950":function(t,e,a){},"0e66":function(t){t.exports={title:"Développeur Web Full Stack",text:"Je suis <b>Félix Sabatié</b>, bienvenue sur mon portfolio ! Laissez moi vous montrer ce sur quoi j'ai travaillé..."}},"1a85":function(t,e,a){},"23eb":function(t,e,a){"use strict";var o=a("0950"),s=a.n(o);s.a},3576:function(t,e,a){t.exports=a.p+"img/polyenco.36886b11.png"},3864:function(t,e,a){},"3a98":function(t,e,a){t.exports=a.p+"img/scrum-battle.abfa63cd.png"},"42ba":function(t){t.exports={dark:"Dark theme"}},"50c4":function(t,e,a){"use strict";var o=a("d05b"),s=a.n(o);s.a},"53d7":function(t,e,a){"use strict";var o=a("730d"),s=a.n(o);s.a},5452:function(t,e,a){"use strict";var o=a("0596"),s=a.n(o);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var o=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Portfolio")],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"portfolio",class:t.darkTheme?"dark":""},[a("Header",{attrs:{"dark-theme":t.darkTheme},on:{"toggle-dark-theme":t.toggleDarkTheme}}),a("WelcomeText"),a("About"),a("Projects"),a("Footer")],1)},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header container"},[a("div",{staticClass:"header-wrapper"},[t._m(0),a("div",{staticClass:"buttons"},[a("div",{staticClass:"button",on:{click:function(e){t.changeLang(t.lang.value)}}},[t._v(t._s(t.lang.text))]),a("div",{staticClass:"button",class:t.darkTheme?"selected":"",on:{click:t.toggleDarkTheme}},[t._v(t._s(t.$t("header.dark")))])])])])},c=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{staticClass:"brand",attrs:{href:"#"}},[o("div",{staticClass:"logo"},[o("img",{attrs:{src:a("9b19"),alt:"Félix Sabatié"}})]),o("div",{staticClass:"title"},[t._v("Félix Sabatié")])])}],u={props:["darkTheme"],computed:{lang:function(){return function(t){switch(t){case"fr":return{text:"English",value:"en"};default:return{text:"Français",value:"fr"}}}(this.$i18n.locale)}},methods:{changeLang:function(t){this.$i18n.locale=t},toggleDarkTheme:function(){this.$emit("toggle-dark-theme")}}},p=u,d=(a("5452"),a("2877")),f=Object(d["a"])(p,l,c,!1,null,null,null);f.options.__file="Header.vue";var m=f.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"welcome-text container"},[a("h1",{staticClass:"title"},[t._v(t._s(t.$t("welcomeText.title")))]),a("div",{staticClass:"text",domProps:{innerHTML:t._s(t.$t("welcomeText.text"))}})])},h=[],v={},g=v,_=(a("7eed"),Object(d["a"])(g,b,h,!1,null,null,null));_.options.__file="WelcomeText.vue";var x=_.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about container"},[a("div",{staticClass:"about-wrapper"},[a("div",{staticClass:"about-card"},[t._m(0),a("h2",{staticClass:"title"},[t._v(t._s(t.$t("about.title")))]),a("div",{staticClass:"content"},[t._v(t._s(t.$t("about.text")))]),a("div",{staticClass:"links"},[a("a",{staticClass:"icon",attrs:{href:"https://www.linkedin.com/in/felix-sabatie/",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1),a("a",{staticClass:"icon",attrs:{href:"https://github.com/felixSabatie",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),a("a",{staticClass:"icon",attrs:{href:"mailto:felix.sabatie@gmail.com"}},[a("font-awesome-icon",{attrs:{icon:"envelope"}})],1)])])])])},k=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"image"},[o("img",{attrs:{src:a("adb8"),alt:"Portrait"}})])}],C={},w=C,y=(a("50c4"),Object(d["a"])(w,j,k,!1,null,null,null));y.options.__file="About.vue";var $=y.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"projects container"},[o("div",{staticClass:"projects-wrapper"},[o("div",{staticClass:"projects-title"},[o("div",{staticClass:"icon"},[o("font-awesome-icon",{attrs:{icon:"code"}})],1),o("h2",{staticClass:"text"},[t._v(t._s(t.$t("projects.title")))])]),o("div",{staticClass:"projects-container"},[o("Project",{attrs:{value:"projects.grocery",icons:t.groceryIcons}},[o("img",{attrs:{slot:"image",src:a("abf9"),alt:t.$t("projects.grocery.title")},slot:"image"}),o("div",{staticClass:"links",attrs:{slot:"links"},slot:"links"},[o("a",{staticClass:"link",attrs:{href:"https://drive.google.com/open?id=1bXP0EIlNSe9XKHCu8Av8T_mzNaY3dsht",target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","youtube"]}}),o("span",{staticClass:"text"},[t._v(t._s(t.$t("projects.demo")))])],1)])]),o("Project",{attrs:{value:"projects.scrumBattle",icons:t.scrumBattleIcons}},[o("img",{attrs:{slot:"image",src:a("3a98"),alt:t.$t("projects.polyenco.title")},slot:"image"}),o("div",{staticClass:"links",attrs:{slot:"links"},slot:"links"},[o("a",{staticClass:"link",attrs:{href:"https://www.youtube.com/watch?v=73hjQVx-ZKc/",target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","youtube"]}}),o("span",{staticClass:"text"},[t._v(t._s(t.$t("projects.demo")))])],1),o("a",{staticClass:"link",attrs:{href:"https://www.linkedin.com/feed/update/activity:6466682120529154048/",target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}}),o("span",{staticClass:"text"},[t._v(t._s(t.$t("projects.post")))])],1),o("a",{staticClass:"link",attrs:{href:"https://github.com/felixSabatie/ScrumBattle/",target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","github"]}}),o("span",{staticClass:"text"},[t._v(t._s(t.$t("projects.repository")))])],1)])]),o("Project",{attrs:{value:"projects.polyenco",icons:t.polyencoIcons}},[o("img",{attrs:{slot:"image",src:a("3576"),alt:t.$t("projects.polyenco.title")},slot:"image"}),o("div",{staticClass:"links",attrs:{slot:"links"},slot:"links"},[o("a",{staticClass:"link",attrs:{href:"https://junior-polyenco.fr/",target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:"link"}}),o("span",{staticClass:"text"},[t._v(t._s(t.$t("projects.link")))])],1)])]),o("Project",{attrs:{value:"projects.jsExecutor",icons:t.jsExecutorIcons}},[o("img",{attrs:{slot:"image",src:a("e8bd"),alt:t.$t("projects.polyenco.title")},slot:"image"}),o("div",{staticClass:"links",attrs:{slot:"links"},slot:"links"},[o("a",{staticClass:"link",attrs:{href:"https://github.com/felixSabatie/js-executor/",target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","github"]}}),o("span",{staticClass:"text"},[t._v(t._s(t.$t("projects.repository")))])],1)])]),o("Project",{attrs:{value:"projects.simpleChat",icons:t.simpleChatIcons}},[o("img",{attrs:{slot:"image",src:a("88a3"),alt:t.$t("projects.polyenco.title")},slot:"image"}),o("div",{staticClass:"links",attrs:{slot:"links"},slot:"links"},[o("a",{staticClass:"link",attrs:{href:"https://github.com/felixSabatie/SimpleChatApp/",target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","github"]}}),o("span",{staticClass:"text"},[t._v(t._s(t.$t("projects.repository")))])],1)])])],1)])])},S=[],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project"},[a("div",{staticClass:"header"},[t._t("image")],2),a("div",{staticClass:"content"},[a("h3",{staticClass:"title"},[t._v(t._s(t.$t(t.value+".title")))]),a("div",{staticClass:"description",domProps:{innerHTML:t._s(t.$t(t.value+".content"))}}),a("div",{staticClass:"icons"},t._l(t.icons,function(t){return a("div",{key:t[1],staticClass:"icon",attrs:{title:t[1]}},[a("font-awesome-icon",{attrs:{icon:t}})],1)}),0)]),a("div",{staticClass:"footer"},[t._t("links")],2)])},I=[],E={props:["imageLink","value","icons"]},O=E,F=(a("6648"),Object(d["a"])(O,T,I,!1,null,null,null));F.options.__file="Project.vue";var A=F.exports,M={components:{Project:A},data:function(){return{groceryIcons:[["fab","react"],["fab","node"],["fab","android"],["fab","apple"]],polyencoIcons:[["fab","angular"],["fab","laravel"],["fab","docker"]],jsExecutorIcons:[["fab","node"],["fab","vuejs"]],simpleChatIcons:[["fab","node"],["fab","vuejs"]],scrumBattleIcons:[["fab","laravel"],["fab","vuejs"]]}}},q=M,L=(a("23eb"),Object(d["a"])(q,P,S,!1,null,null,null));L.options.__file="Projects.vue";var B=L.exports,D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer container"},[o("img",{staticClass:"logo",attrs:{src:a("9b19"),alt:"Félix Sabatié"}}),o("p",{staticClass:"copyright"},[t._v("Copyright © 2019 Félix Sabatié")]),o("p",{staticClass:"repository"},[t._v(t._s(t.$t("footer.footer")))]),o("p",[o("a",{staticClass:"icon",attrs:{href:"https://github.com/felixSabatie/portfolio",target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)])])},J=[],U={},H=U,W=(a("53d7"),Object(d["a"])(H,D,J,!1,null,null,null));W.options.__file="Footer.vue";var G=W.exports,K={components:{Header:m,WelcomeText:x,About:$,Projects:B,Footer:G},data:function(){return{darkTheme:!1}},methods:{toggleDarkTheme:function(){this.darkTheme=!this.darkTheme}}},z=K,Q=(a("0240"),Object(d["a"])(z,i,r,!1,null,null,null));Q.options.__file="Portfolio.vue";var N=Q.exports,R={name:"app",components:{Portfolio:N}},X=R,V=(a("5c0b"),Object(d["a"])(X,s,n,!1,null,null,null));V.options.__file="App.vue";var Y=V.exports,Z=a("ecee"),tt=a("c074"),et=a("f2d1"),at=a("ad3d"),ot=a("a925"),st=a("c2ff"),nt=a("a246"),it=a("c7ba"),rt=a("ebd61"),lt=a("42ba"),ct={welcomeText:st,about:nt,projects:it,footer:rt,header:lt},ut=a("0e66"),pt=a("e214"),dt=a("88eb"),ft=a("9486"),mt=a("59c1"),bt={welcomeText:ut,about:pt,projects:dt,footer:ft,header:mt},ht={en:ct,fr:bt};Z["c"].add(tt["b"],et["g"],et["e"],tt["a"],et["b"],et["j"],et["h"],et["f"],et["d"],tt["c"],et["k"],et["i"],et["a"],et["c"]),o["a"].component("font-awesome-icon",at["a"]),o["a"].use(ot["a"]);var vt=new ot["a"]({locale:"en",fallbackLocale:"en",messages:ht});o["a"].config.productionTip=!1,new o["a"]({i18n:vt,render:function(t){return t(Y)}}).$mount("#app")},"59c1":function(t){t.exports={dark:"Thème sombre"}},"5c0b":function(t,e,a){"use strict";var o=a("5e27"),s=a.n(o);s.a},"5e27":function(t,e,a){},6648:function(t,e,a){"use strict";var o=a("8f62"),s=a.n(o);s.a},"730d":function(t,e,a){},"7eed":function(t,e,a){"use strict";var o=a("3864"),s=a.n(o);s.a},"88a3":function(t,e,a){t.exports=a.p+"img/simple-chat.22655a55.png"},"88eb":function(t){t.exports={title:"Mes projets",link:"lien",repository:"répertoire",demo:"démo",post:"post",polyenco:{title:"Site web de Polyenco",content:"Site de présentation pour la junior-industrie Polyenco de mon école d'ingénieur Polytech, entièrement conçu et développé par moi-même"},jsExecutor:{title:"JS Executor",content:"Une application web qui permet aux utilisateurs de collaborer sur un fichier javacsript et d'exécuter le code à distance. Fait pour un de mes cours à l'UQAC"},simpleChat:{title:"Simple Chat",content:"Une simple application de chat que j'ai faite pour apprendre à utiliser socket.io, avec de multiples salons de discussion et un design sombre inspiré par messenger de Facebook."},scrumBattle:{title:"Scrum Battle",content:"Une application web basée sur les principes du Kanban, permettant aux utilisateurs de créer et de déplacer des tâches sur un tableau. Lorsqu'une carte est déplacée, des animations montrent à l'utilisateur le nouvel avancement du projet.<br><br>Réalisé au sein d'une équipe de 4 personnes en 48 heures, et gagnant de la code jam CGI 2018. Le thème : <i>'Mettre en œuvre les principes de la gamification au sein d'une équipe de projet'</i>."},grocery:{title:"Grocery",content:"Une application multi plateforme faite avec react-native. Faite pour un client dans une équipe de 3, cette application permet aux utilisateurs de commander de la nourriture en livraison. <br><br>Malheureusement notre client a fait faillite et l'application n'est plus disponible"}}},"8f62":function(t,e,a){},9486:function(t){t.exports={footer:"Retrouvez le code source de ce site web à l'url suivante :"}},"9b19":function(t,e,a){t.exports=a.p+"img/logo.1ed5e7be.svg"},a246:function(t){t.exports={title:"About me",text:"I'm passionate about technology and programming. I love how web development combines technical skills and design, and I'm always learning something new. Though I'm not a designer, I try and do my best to deliver the best user experience possible."}},abf9:function(t,e,a){t.exports=a.p+"img/grocery.5e06c084.png"},adb8:function(t,e,a){t.exports=a.p+"img/portrait.d5a3d376.jpeg"},c2ff:function(t){t.exports={title:"Full Stack Web Developer",text:"I'm <b>Félix Sabatié</b>, welcome to my portfolio ! Let me show you what I've been working on..."}},c7ba:function(t){t.exports={title:"My projects",link:"link",repository:"repository",demo:"demo",post:"post",polyenco:{title:"Polyenco's website",content:"Presentation website for the junior industry Polyenco from my engineering school Polytech, design and developed entirely by me"},jsExecutor:{title:"JS Executor",content:"A web application that lets users collaborate on a javacsript file and execute the code remotely. Made for one of my courses at UQAC"},simpleChat:{title:"Simple Chat",content:"A simple chat app that I made to learn how to use socket.io, featuring multiple chat rooms and a dark themed messenger-like design"},scrumBattle:{title:"Scrum Battle",content:"A web application based on the Kanban principles, allowing the users to create and move tasks on a board. When a card is moved, animations show the user the new advancement of the project.<br><br>Made within a team of 4 in 48 hours, and winner of the 2018 CGI's code jam. The theme : <i>'Implement the principles of gamification into a project team'</i>."},grocery:{title:"Grocery",content:"A multi platform mobile application made with react-native. Made for a client in a team of 3, this app allows the users to order food for delivery. <br><br>Unfortunately our client went bankrupt and the app is no longer available"}}},d05b:function(t,e,a){},e214:function(t){t.exports={title:"À propos de moi",text:"Je suis passionné par la technologie et la programmation. J'adore la façon dont le développement web combine les compétences techniques et le design, et je suis toujours entrain d'apprendre quelque chose de nouveau. Bien que je ne sois pas designer, je fais de mon mieux pour délivrer la meilleure expérience utilisateur possible."}},e8bd:function(t,e,a){t.exports=a.p+"img/js-executor.28a0a278.png"},ebd61:function(t){t.exports={footer:"Find the source code for this website at the following url :"}}});
//# sourceMappingURL=app.b769389b.js.map