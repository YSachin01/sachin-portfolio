"use strict";(self.webpackChunkthe_sachin_perspective=self.webpackChunkthe_sachin_perspective||[]).push([[411],{792:(V,c,l)=>{l.r(c),l.d(c,{PortfolioModule:()=>O});var r=l(177),g=l(810),t=l(540);let f=(()=>{class e{constructor(){this.themeToggle=new t.bkB,this.toggleState=!1}toggleTheme(){this.toggleState=!this.toggleState,this.themeToggle.emit(this.toggleState)}scrollToSection(o){const n=document.getElementById(o);n&&n.scrollIntoView({behavior:"smooth",block:"start"})}navigateAndClose(o){this.scrollToSection(o);const n=document.querySelector(".navbar-collapse");n.classList.contains("show")&&n.classList.remove("show")}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-header"]],outputs:{themeToggle:"themeToggle"},decls:30,vars:6,consts:[[3,"ngClass"],[1,"navbar","navbar-expand-lg","navbar-dark","px-4"],[1,"navbar-brand",3,"ngClass","click"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse","text-center"],[1,"navbar-nav","ms-auto"],[1,"nav-item"],[1,"nav-link",3,"click"],[1,"form-check","form-switch","ms-lg-3","mt-3","mt-lg-0","float-sm-none"],["type","checkbox","id","themeSwitch",1,"form-check-input",3,"checked","change"],["for","themeSwitch",1,"form-check-label"]],template:function(n,a){1&n&&(t.j41(0,"div",0)(1,"nav",1)(2,"a",2),t.fuf(),t.bIt("click",function(){return a.scrollToSection("home")}),t.EFF(3," {{ Sachin Yadav }} "),t.cSN(),t.k0s(),t.j41(4,"button",3),t.nrm(5,"span",4),t.k0s(),t.j41(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),t.bIt("click",function(){return a.navigateAndClose("home")}),t.EFF(10,"Home"),t.k0s()(),t.j41(11,"li",7)(12,"a",8),t.bIt("click",function(){return a.navigateAndClose("about")}),t.EFF(13,"About Me"),t.k0s()(),t.j41(14,"li",7)(15,"a",8),t.bIt("click",function(){return a.navigateAndClose("experience")}),t.EFF(16,"Experience"),t.k0s()(),t.j41(17,"li",7)(18,"a",8),t.bIt("click",function(){return a.navigateAndClose("skills")}),t.EFF(19,"Skills"),t.k0s()(),t.j41(20,"li",7)(21,"a",8),t.bIt("click",function(){return a.navigateAndClose("education")}),t.EFF(22,"Education"),t.k0s()(),t.j41(23,"li",7)(24,"a",8),t.bIt("click",function(){return a.navigateAndClose("contact")}),t.EFF(25,"Contact"),t.k0s()()(),t.j41(26,"div",9)(27,"input",10),t.bIt("change",function(){return a.toggleTheme()}),t.k0s(),t.j41(28,"label",11),t.EFF(29),t.k0s()()()()()),2&n&&(t.xc7("background","rgb(36, 43, 46)"),t.Y8G("ngClass","text-white"),t.R7$(2),t.Y8G("ngClass",a.toggleState?"text-primary":"text-warning"),t.R7$(25),t.Y8G("checked",a.toggleState),t.R7$(2),t.SpI(" ",a.toggleState?"\u{1f31e}":"\u{1f319}"," "))},dependencies:[r.YU]})}}return e})();const _=function(e){return{borderColor:e,borderWidth:"5px",borderStyle:"solid"}};let p=(()=>{class e{constructor(){this.toggleState=!1}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-home"]],inputs:{toggleState:"toggleState"},decls:16,vars:5,consts:[["id","home",1,"py-5"],[1,"container"],[1,"row","align-items-center"],[1,"col-lg-6","text-lg-start","text-center"],[1,"display-4","fw-bold"],[1,"lead"],[3,"ngClass"],[1,"btn","btn-sm","btn-lg","btn-block","mt-3",2,"width","50%",3,"ngClass"],[1,"col-lg-6","text-center","mt-4","mt-lg-0"],["src","assets/sachin_new_img.jpg","alt","Profile picture of Sachin Yadav",1,"rounded-circle",2,"width","250px","height","300px","object-fit","cover",3,"ngStyle"]],template:function(n,a){1&n&&(t.j41(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),t.EFF(5,"Hi, I am"),t.k0s(),t.j41(6,"h2",4),t.EFF(7,"Sachin Yadav"),t.k0s(),t.j41(8,"h5",5),t.EFF(9,"Software Developer"),t.k0s(),t.j41(10,"h6",6),t.EFF(11,"JavaScript | Angular | Php "),t.k0s(),t.j41(12,"button",7),t.EFF(13," My Projects "),t.k0s()(),t.j41(14,"div",8),t.nrm(15,"img",9),t.k0s()()()()),2&n&&(t.R7$(10),t.Y8G("ngClass",a.toggleState?"text-primary":"text-warning"),t.R7$(2),t.Y8G("ngClass",a.toggleState?"btn-primary":"btn-warning"),t.R7$(3),t.Y8G("ngStyle",t.eq3(3,_,a.toggleState?"#0d6efd":"#ffc107")))},dependencies:[r.YU,r.B3]})}}return e})();const b=function(e,i){return{"btn-outline-warning":e,"btn-outline-primary":i}};let d=(()=>{class e{constructor(){this.toggleState=!1}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-about"]],inputs:{toggleState:"toggleState"},decls:21,vars:5,consts:[["id","about",1,"py-5"],[1,"container"],[1,"text-center","mb-5",3,"ngClass"],[1,"fas","fa-user","me-2"],[1,"row","align-items-center","justify-content-center"],[1,"col-md-4","text-center","mb-4","mb-md-0"],[1,"fas","fa-laptop-code","text-secondary","mb-4","display-1-custom"],[1,"col-md-6"],["href","CV.pdf","target","_blank","download","",1,"btn","mt-3",3,"ngClass"],[1,"fas","fa-download","me-2"],[1,"row","mt-5",2,"display","flex","justify-content","flex-end"],["href","https://github.com/YSachin01","target","_blank","rel","noreferrer",2,"width","65px","height","70px","border-radius","50%","overflow","hidden","display","inline-block"],["src","assets/github-icon.svg","alt","GitHub",2,"width","100%","height","100%"],["href","https://www.linkedin.com/in/test/","target","_blank","rel","noreferrer",2,"width","70px","height","70px","border-radius","50%","overflow","hidden","display","inline-block"],["src","assets/linkedin-icon.svg","alt","LinkedIn",2,"width","100%","height","100%"]],template:function(n,a){1&n&&(t.j41(0,"section",0)(1,"div",1)(2,"h2",2),t.nrm(3,"i",3),t.EFF(4," About Me "),t.k0s(),t.j41(5,"div",4)(6,"div",5),t.nrm(7,"i",6),t.k0s(),t.j41(8,"div",7)(9,"p"),t.EFF(10," I am a Software Developer with over 1+ year of experience specializing in Full Stack Development. I have a strong focus on building high-quality websites and user-friendly web applications using cutting-edge technologies."),t.k0s(),t.j41(11,"p"),t.EFF(12," Currently, I work at Ebrandz LLP as a Full Stack Developer, where I specialize in Angular and Laravel. My expertise includes integrating APIs, developing efficient front-end interfaces, and crafting robust back-end systems. I am passionate about delivering seamless user experiences and clean, maintainable code."),t.k0s(),t.j41(13,"a",8),t.nrm(14,"i",9),t.EFF(15,"Download CV "),t.k0s()()(),t.j41(16,"div",10)(17,"a",11),t.nrm(18,"img",12),t.k0s(),t.j41(19,"a",13),t.nrm(20,"img",14),t.k0s()()()()),2&n&&(t.R7$(2),t.Y8G("ngClass",a.toggleState?"text-primary":"text-warning"),t.R7$(11),t.Y8G("ngClass",t.l_i(2,b,!a.toggleState,a.toggleState)))},dependencies:[r.YU],styles:[".display-1-custom[_ngcontent-%COMP%]{font-size:12rem!important}"]})}}return e})();const k=function(e,i){return{"border-primary":e,"border-warning":i}};function C(e,i){if(1&e&&(t.j41(0,"div",6)(1,"div",7)(2,"div",8)(3,"h3",9),t.EFF(4),t.j41(5,"span",10),t.EFF(6),t.k0s()(),t.j41(7,"h4",11),t.EFF(8),t.k0s(),t.j41(9,"p",12),t.EFF(10),t.k0s(),t.j41(11,"p",12),t.EFF(12),t.k0s()()()()),2&e){const o=i.$implicit,n=t.XpG();t.R7$(1),t.Y8G("ngClass",t.l_i(11,k,n.toggleState,!n.toggleState)),t.R7$(2),t.Y8G("ngClass",n.toggleState?"text-dark":"text-white"),t.R7$(1),t.SpI("",o.company," "),t.R7$(1),t.Y8G("ngClass",n.toggleState?"text-primary":"text-warning"),t.R7$(1),t.JRh(o.position),t.R7$(1),t.Y8G("ngClass",n.toggleState?"text-dark":"text-white"),t.R7$(1),t.JRh(o.duration),t.R7$(1),t.Y8G("ngClass",n.toggleState?"text-dark":"text-white"),t.R7$(1),t.JRh(o.details1),t.R7$(1),t.Y8G("ngClass",n.toggleState?"text-dark":"text-white"),t.R7$(1),t.JRh(o.details2)}}let x=(()=>{class e{constructor(){this.toggleState=!1,this.workExperience=[{company:"Ebrandz LLP",position:"Software Developer",duration:"May 2024 - Present",details1:"Specialized in Full Stack Development using Angular and Laravel.",details2:"Currently involved in creating scalable web applications and APIs."},{company:"E&A Technology Services LLP (Enats)",position:"Software Developer",duration:"Oct 2022 - April 2024 (1.6 years)",details1:"Worked as a PHP Developer on various projects.",details2:"Contributed to enterprise-level applications and collaborated with cross-functional teams."}]}ngOnInit(){AOS.init()}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-experience"]],inputs:{toggleState:"toggleState"},decls:7,vars:2,consts:[["id","experience",1,"py-5"],[1,"container"],[1,"text-center","mb-5",3,"ngClass"],[1,"fas","fa-briefcase","me-2"],[1,"row","justify-content-center"],["class","col-md-6 col-lg-4 mb-4","data-aos","zoom-in-up","data-aos-duration","2000",4,"ngFor","ngForOf"],["data-aos","zoom-in-up","data-aos-duration","2000",1,"col-md-6","col-lg-4","mb-4"],[1,"card","text-white","skill-card","h-100",3,"ngClass"],[1,"card-body"],[1,"h5",3,"ngClass"],[1,"d-block","h6",3,"ngClass"],[1,"h6",3,"ngClass"],[3,"ngClass"]],template:function(n,a){1&n&&(t.j41(0,"section",0)(1,"div",1)(2,"h2",2),t.nrm(3,"i",3),t.EFF(4," Work Experience "),t.k0s(),t.j41(5,"div",4),t.DNE(6,C,13,14,"div",5),t.k0s()()()),2&n&&(t.R7$(2),t.Y8G("ngClass",a.toggleState?"text-primary":"text-warning"),t.R7$(4),t.Y8G("ngForOf",a.workExperience))},dependencies:[r.YU,r.Sq],styles:[".work-experience[_ngcontent-%COMP%]{color:#fff;border:0;box-shadow:0 4px 8px #0003;position:relative;overflow:hidden;padding:40px 0;background-color:transparent;transition:border-color .3s ease,transform .3s ease}.card[_ngcontent-%COMP%]{background:transparent;border-radius:.5rem;box-shadow:0 4px 8px #0000001a;transition:transform .3s ease-in-out,background-color .3s ease-in-out}.card[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:1rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}@media (max-width: 767px){.card[_ngcontent-%COMP%]{padding:15px}}"]})}}return e})();function v(e,i){if(1&e&&(t.j41(0,"div")(1,"p",10),t.EFF(2),t.k0s()()),2&e){const o=i.$implicit;t.R7$(2),t.JRh(o)}}const S=function(e,i){return{"border-primary":e,"border-warning":i}};function w(e,i){if(1&e&&(t.j41(0,"div",6)(1,"div",7)(2,"h5",8),t.EFF(3),t.k0s(),t.DNE(4,v,3,1,"div",9),t.k0s()()),2&e){const o=i.$implicit,n=t.XpG();t.Y8G("ngClass",n.toggleState?"bg-light text-dark":"bg-dark text-white"),t.R7$(1),t.Y8G("ngClass",t.l_i(5,S,n.toggleState,!n.toggleState)),t.R7$(1),t.Y8G("ngClass",n.toggleState?"text-primary":"text-warning"),t.R7$(1),t.SpI(" ",o.title," "),t.R7$(1),t.Y8G("ngForOf",o.details)}}let m=(()=>{class e{constructor(){this.toggleState=!1,this.skills=[{title:"Web Technologies",details:["HTML, CSS & PHP","Frameworks & Libraries : Angular, Laravel, Opencart, Bootstrap"]},{title:"Scripting Languages",details:["JavaScript & jQuery"]},{title:"Tools & Databases",details:["MantisBT, Trello, Redis","Git, BitBucket, GitHub","MySQL, MongoDB"]}]}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-skills"]],inputs:{toggleState:"toggleState"},decls:7,vars:2,consts:[["id","skills",1,"py-5"],[1,"container"],[1,"text-center","mb-5",3,"ngClass"],[1,"fas","fa-code","me-2"],[1,"d-flex","flex-wrap","justify-content-center"],["class","card text-center skill-card h-100","data-aos","flip-left","data-aos-easing","ease-out-cubic","data-aos-duration","2000",3,"ngClass",4,"ngFor","ngForOf"],["data-aos","flip-left","data-aos-easing","ease-out-cubic","data-aos-duration","2000",1,"card","text-center","skill-card","h-100",3,"ngClass"],[1,"card-body",2,"border","2px solid","padding","20px",3,"ngClass"],[1,"card-title",3,"ngClass"],[4,"ngFor","ngForOf"],[1,"card-text"]],template:function(n,a){1&n&&(t.j41(0,"section",0)(1,"div",1)(2,"h2",2),t.nrm(3,"i",3),t.EFF(4," Skills "),t.k0s(),t.j41(5,"div",4),t.DNE(6,w,5,8,"div",5),t.k0s()()()),2&n&&(t.R7$(2),t.Y8G("ngClass",a.toggleState?"text-primary":"text-warning"),t.R7$(4),t.Y8G("ngForOf",a.skills))},dependencies:[r.YU,r.Sq],styles:[".skill-card[_ngcontent-%COMP%]{width:30%;height:150px!important;margin-bottom:20px;flex-grow:1;border:2px solid transparent;transition:border-color .3s ease,transform .3s ease}.skill-card[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.d-flex[_ngcontent-%COMP%]{gap:2%;justify-content:space-between}.d-flex.center-last-row[_ngcontent-%COMP%]{justify-content:center}@media (max-width: 768px){.skill-card[_ngcontent-%COMP%]{width:100%;height:auto}}"]})}}return e})();const F=function(e,i){return{"border-primary":e,"border-warning":i}};function y(e,i){if(1&e&&(t.j41(0,"div",6)(1,"div",7)(2,"div",8)(3,"h2",9),t.EFF(4),t.k0s(),t.j41(5,"h3",10),t.EFF(6),t.k0s(),t.j41(7,"p",11),t.EFF(8),t.k0s()()()()),2&e){const o=i.$implicit,n=t.XpG();t.R7$(1),t.Y8G("ngClass",t.l_i(7,F,n.toggleState,!n.toggleState)),t.R7$(2),t.Y8G("ngClass",n.toggleState?"text-dark":"text-white"),t.R7$(1),t.JRh(o.year),t.R7$(1),t.Y8G("ngClass",n.toggleState?"text-primary":"text-warning"),t.R7$(1),t.JRh(o.degree),t.R7$(1),t.Y8G("ngClass",n.toggleState?"text-dark":"text-white"),t.R7$(1),t.JRh(o.institution)}}let u=(()=>{class e{constructor(){this.toggleState=!1,this.education=[{year:"2022",degree:"B.Sc.IT",institution:"University of Mumbai"},{year:"2019",degree:"HSC",institution:"Lokmanya Junior College, NSP"},{year:"2017",degree:"SSC",institution:"Lokmanya High School, NSP"}]}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-education"]],inputs:{toggleState:"toggleState"},decls:7,vars:2,consts:[["id","education",1,"py-5"],[1,"container"],[1,"heading","text-center","mb-5",3,"ngClass"],[1,"fas","fa-graduation-cap"],[1,"row","justify-content-center"],["class","col-md-6 col-12 mb-4","data-aos","zoom-in-up","data-aos-duration","2000",4,"ngFor","ngForOf"],["data-aos","zoom-in-up","data-aos-duration","2000",1,"col-md-6","col-12","mb-4"],[1,"card","h-auto",3,"ngClass"],[1,"card-body"],[1,"card-title",3,"ngClass"],[1,"card-subtitle","mb-2",3,"ngClass"],[1,"card-text",3,"ngClass"]],template:function(n,a){1&n&&(t.j41(0,"section",0)(1,"div",1)(2,"h1",2),t.nrm(3,"i",3),t.EFF(4," Education "),t.k0s(),t.j41(5,"div",4),t.DNE(6,y,9,10,"div",5),t.k0s()()()),2&n&&(t.R7$(2),t.Y8G("ngClass",a.toggleState?"text-primary":"text-warning"),t.R7$(4),t.Y8G("ngForOf",a.education))},dependencies:[r.YU,r.Sq],styles:[".card[_ngcontent-%COMP%]{background:#1a1a1a;color:#fff;box-shadow:0 4px 8px #0003;margin-bottom:20px;flex-grow:1;border:2px solid transparent;position:relative;overflow:hidden;background-color:transparent;transition:border-color .3s ease,transform .3s ease}"]})}}return e})(),h=(()=>{class e{constructor(){this.toggleState=!1}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-contact"]],inputs:{toggleState:"toggleState"},decls:29,vars:6,consts:[["id","contact",1,"py-5"],[1,"container"],[1,"heading","text-center","mb-5",3,"ngClass"],[1,"far","fa-address-card"],[1,"row","text-center"],[1,"col-md-4","contactDetails","mb-4"],[1,"contactIcon","mb-2"],[1,"fas","fa-map-marker-alt","fa-2x",3,"ngClass"],[1,"fa","fa-phone","fa-2x",3,"ngClass"],["href","tel:+917741092166",1,"text-decoration-none",3,"ngClass"],[1,"far","fa-envelope","fa-2x",3,"ngClass"],["href","mailto:sachinyad884@gmail.com",1,"text-decoration-none",3,"ngClass"]],template:function(n,a){1&n&&(t.j41(0,"section",0)(1,"div",1)(2,"h1",2),t.nrm(3,"i",3),t.EFF(4," Contact "),t.k0s(),t.j41(5,"div",4)(6,"div",5)(7,"div",6),t.nrm(8,"i",7),t.k0s(),t.j41(9,"h4"),t.EFF(10,"Address"),t.k0s(),t.j41(11,"p"),t.EFF(12,"Mumbai, Maharashtra 401203"),t.k0s()(),t.j41(13,"div",5)(14,"div",6),t.nrm(15,"i",8),t.k0s(),t.j41(16,"h4"),t.EFF(17,"Phone"),t.k0s(),t.j41(18,"p")(19,"a",9),t.EFF(20,"+91 7741092166"),t.k0s()()(),t.j41(21,"div",5)(22,"div",6),t.nrm(23,"i",10),t.k0s(),t.j41(24,"h4"),t.EFF(25,"Email"),t.k0s(),t.j41(26,"p")(27,"a",11),t.EFF(28,"sachinyad884@gmail.com"),t.k0s()()()()()()),2&n&&(t.R7$(2),t.Y8G("ngClass",a.toggleState?"text-primary":"text-warning"),t.R7$(6),t.Y8G("ngClass",a.toggleState?"text-primary":"text-warning"),t.R7$(7),t.Y8G("ngClass",a.toggleState?"text-primary":"text-warning"),t.R7$(4),t.Y8G("ngClass",a.toggleState?"text-black":"text-white"),t.R7$(4),t.Y8G("ngClass",a.toggleState?"text-primary":"text-warning"),t.R7$(4),t.Y8G("ngClass",a.toggleState?"text-black":"text-white"))},dependencies:[r.YU],styles:[".contactIcon[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;background-color:#242b2e;border:2px solid #ffc107;display:flex;align-items:center;justify-content:center;margin:0 auto 15px;transition:transform .3s}.contactIcon[_ngcontent-%COMP%]:hover{transform:scale(1.1)}"]})}}return e})();function T(e,i){if(1&e){const o=t.RV6();t.j41(0,"app-home",6),t.bIt("themeToggle",function(a){t.eBV(o);const s=t.XpG(2);return t.Njj(s.onToggleTheme(a))}),t.k0s()}if(2&e){const o=t.XpG(2);t.Y8G("toggleState",o.toggleState)}}function j(e,i){if(1&e){const o=t.RV6();t.j41(0,"app-about",6),t.bIt("themeToggle",function(a){t.eBV(o);const s=t.XpG(2);return t.Njj(s.onToggleTheme(a))}),t.k0s()}if(2&e){const o=t.XpG(2);t.Y8G("toggleState",o.toggleState)}}function G(e,i){if(1&e){const o=t.RV6();t.j41(0,"app-experience",6),t.bIt("themeToggle",function(a){t.eBV(o);const s=t.XpG(2);return t.Njj(s.onToggleTheme(a))}),t.k0s()}if(2&e){const o=t.XpG(2);t.Y8G("toggleState",o.toggleState)}}function E(e,i){if(1&e){const o=t.RV6();t.j41(0,"app-skills",6),t.bIt("themeToggle",function(a){t.eBV(o);const s=t.XpG(2);return t.Njj(s.onToggleTheme(a))}),t.k0s()}if(2&e){const o=t.XpG(2);t.Y8G("toggleState",o.toggleState)}}function R(e,i){if(1&e){const o=t.RV6();t.j41(0,"app-education",6),t.bIt("themeToggle",function(a){t.eBV(o);const s=t.XpG(2);return t.Njj(s.onToggleTheme(a))}),t.k0s()}if(2&e){const o=t.XpG(2);t.Y8G("toggleState",o.toggleState)}}function Y(e,i){if(1&e){const o=t.RV6();t.j41(0,"app-contact",6),t.bIt("themeToggle",function(a){t.eBV(o);const s=t.XpG(2);return t.Njj(s.onToggleTheme(a))}),t.k0s()}if(2&e){const o=t.XpG(2);t.Y8G("toggleState",o.toggleState)}}const $=function(e,i,o){return{"bg-dark text-white":e,"text-white":i,"text-black":o}};function P(e,i){if(1&e&&(t.j41(0,"div",3),t.qex(1,4),t.DNE(2,T,1,1,"app-home",5),t.DNE(3,j,1,1,"app-about",5),t.DNE(4,G,1,1,"app-experience",5),t.DNE(5,E,1,1,"app-skills",5),t.DNE(6,R,1,1,"app-education",5),t.DNE(7,Y,1,1,"app-contact",5),t.bVm(),t.k0s()),2&e){const o=i.$implicit,n=i.index,a=t.XpG();t.xc7("background",a.toggleState&&n%2==0?"#e2e2e2":a.toggleState&&n%2!=0?"white":a.toggleState||n%2!=0?"":"rgb(36, 43, 46)"),t.Y8G("ngClass",t.sMw(10,$,!a.toggleState&&n%2!=0,!a.toggleState,a.toggleState)),t.R7$(1),t.Y8G("ngSwitch",o),t.R7$(1),t.Y8G("ngSwitchCase","home"),t.R7$(1),t.Y8G("ngSwitchCase","about"),t.R7$(1),t.Y8G("ngSwitchCase","experience"),t.R7$(1),t.Y8G("ngSwitchCase","skills"),t.R7$(1),t.Y8G("ngSwitchCase","education"),t.R7$(1),t.Y8G("ngSwitchCase","contact")}}const M=[{path:"",component:(()=>{class e{constructor(){this.components=["header","home","about","experience","skills","education","contact"],this.toggleState=!1}onToggleTheme(o){this.toggleState=o}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-portfolio"]],decls:3,vars:1,consts:[[1,"sticky-header"],[3,"themeToggle"],[3,"ngClass","background",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"ngSwitch"],[3,"toggleState","themeToggle",4,"ngSwitchCase"],[3,"toggleState","themeToggle"]],template:function(n,a){1&n&&(t.j41(0,"div",0)(1,"app-header",1),t.bIt("themeToggle",function(D){return a.onToggleTheme(D)}),t.k0s()(),t.DNE(2,P,8,14,"div",2)),2&n&&(t.R7$(2),t.Y8G("ngForOf",a.components))},dependencies:[r.YU,r.Sq,r.ux,r.e1,f,p,d,x,m,u,h],styles:[".sticky-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:9999;background-color:#fff;padding:0;width:100%;box-shadow:0 2px 5px #0000001a}"]})}}return e})()},{path:"home",component:p},{path:"about",component:d},{path:"skills",component:m},{path:"education",component:u},{path:"contact",component:h},{path:"**",redirectTo:"home"}];let I=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[g.iI.forChild(M),g.iI]})}}return e})(),O=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[r.MD,I]})}}return e})()}}]);