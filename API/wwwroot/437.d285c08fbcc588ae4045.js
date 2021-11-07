"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[437],{8437:(Q,c,a)=>{a.r(c),a.d(c,{AccountModule:()=>R});var u=a(8583),s=a(3318),i=a(665),t=a(3018),g=a(4878),m=a(4015);function Z(e,o){1&e&&(t.ynx(0),t.TgZ(1,"a",24),t._uU(2,"Create an account"),t.qZA(),t.BQk())}let f=(()=>{class e{constructor(n,r,l){this.accountService=n,this.router=r,this.activatedRoute=l}ngOnInit(){this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop",this.createLoginForm()}createLoginForm(){this.loginForm=new i.cw({email:new i.NI("",[i.kI.required,i.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),password:new i.NI("",i.kI.required)})}onSubmit(){this.accountService.login(this.loginForm.value).subscribe(()=>{this.router.navigateByUrl(this.returnUrl)},n=>{console.log(n)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.B),t.Y36(s.F0),t.Y36(s.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:56,vars:8,consts:[[2,"display","flex","left","20%","margin-top","120px","padding-left","200px","margin-bottom","80px"],[1,"col-3",2,"display","inline-block","padding-right","50px","border-right","0.5px solid #999999","margin-left","100px"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"],[2,"margin-left","50px","display","inline-block"],[1,"h3","mb-3","font-weight-normal",2,"padding-bottom","15px"],[2,"list-style-type","none","padding","0"],[2,"margin-bottom","8px"],[1,"fa","fa-check"],[2,"margin-bottom","25px"],[4,"ngIf"],[2,"width","100%","margin-top","50px","display","flex","justify-content","center"],[2,"background-color","#EAE8E7","padding","30px","position","relative","float","left"],[2,"display","inline","float","left","text-align","center","margin-left","43px","margin-right","43px"],[1,"d-flex","justify-content-center"],["aria-hidden","true",1,"fa","fa-eur",2,"text-align","center"],[2,"text-align","center","margin-top","10px"],["aria-hidden","true",1,"fa","fa-plane",2,"text-align","center"],["aria-hidden","true",1,"fa","fa-globe",2,"text-align","center"],["aria-hidden","true",1,"fa","fa-check-circle-o",2,"text-align","center"],["href","#","role","button","routerLink","/account/register",1,"btn","btn-primary"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"form",2),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(3,"div",3),t.TgZ(4,"h1",4),t._uU(5,"Login"),t.qZA(),t.qZA(),t._UZ(6,"app-text-input",5),t._UZ(7,"app-text-input",6),t.TgZ(8,"button",7),t._uU(9,"Sign in"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",8),t.TgZ(11,"h1",9),t._uU(12,"Do not have an HazaPlus account yet?"),t._UZ(13,"br"),t.qZA(),t.TgZ(14,"ul",10),t.TgZ(15,"li",11),t.TgZ(16,"i",12),t._uU(17," Track your order from order placement to delivery"),t.qZA(),t.qZA(),t.TgZ(18,"li",11),t.TgZ(19,"i",12),t._uU(20," Review your order history"),t.qZA(),t.qZA(),t.TgZ(21,"li",13),t.TgZ(22,"i",12),t._uU(23," Remember your details for your future orders"),t.qZA(),t.qZA(),t.qZA(),t.YNc(24,Z,3,0,"ng-container",14),t.ALo(25,"async"),t.qZA(),t.qZA(),t.TgZ(26,"div",15),t.TgZ(27,"ul",16),t.TgZ(28,"li",17),t.TgZ(29,"div",18),t._UZ(30,"i",19),t.qZA(),t.TgZ(31,"h5",20),t._uU(32,"Reasonable Price"),t.qZA(),t.TgZ(33,"h6"),t._uU(34,"Shop with reasonable price"),t.qZA(),t.qZA(),t.TgZ(35,"li",17),t.TgZ(36,"div",18),t._UZ(37,"i",21),t.qZA(),t.TgZ(38,"h5",20),t._uU(39,"Fast Delivery"),t.qZA(),t.TgZ(40,"h6"),t._uU(41,"Choose your preference"),t.qZA(),t.qZA(),t.TgZ(42,"li",17),t.TgZ(43,"div",18),t._UZ(44,"i",22),t.qZA(),t.TgZ(45,"h5",20),t._uU(46,"Explore the world"),t.qZA(),t.TgZ(47,"h6"),t._uU(48,"Meet our global brand furniture"),t.qZA(),t.qZA(),t.TgZ(49,"li",17),t.TgZ(50,"div",18),t._UZ(51,"i",23),t.qZA(),t.TgZ(52,"h5",20),t._uU(53,"Customer Satisfaction"),t.qZA(),t.TgZ(54,"h6"),t._uU(55,"Quality assured deliveries"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.Q6J("formGroup",r.loginForm),t.xp6(4),t.Q6J("label","Email address"),t.xp6(1),t.Q6J("label","Password")("type","password"),t.xp6(1),t.Q6J("disabled",r.loginForm.invalid),t.xp6(16),t.Q6J("ngIf",null===t.lcZ(25,6,r.currentUser$)))},directives:[i._Y,i.JL,i.sg,m.t,i.JJ,i.u,u.O5,s.yS],pipes:[u.Ov],styles:[""]}),e})();var h=a(7574),b=a(6465);const A=new(a(6102).v)(b.o);var v=a(9796);function p(e){return!(0,v.k)(e)&&e-parseFloat(e)+1>=0}var d=a(4869);function T(e){const{index:o,period:n,subscriber:r}=e;if(r.next(o),!r.closed){if(-1===n)return r.complete();e.index=o+1,this.schedule(e,n)}}var U=a(5917),q=a(3190),C=a(8002);function F(e,o){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n," ")}}function J(e,o){if(1&e&&(t.TgZ(0,"ul",10),t.YNc(1,F,2,1,"li",11),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.errors)}}const w=[{path:"login",component:f},{path:"register",component:(()=>{class e{constructor(n,r,l){this.fb=n,this.accountService=r,this.router=l}ngOnInit(){this.createRegisterForm()}createRegisterForm(){this.registerForm=this.fb.group({displayName:[null,[i.kI.required]],email:[null,[i.kI.required,i.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],[this.validateEmailNotTaken()]],password:[null,i.kI.required]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe(n=>{this.router.navigateByUrl("/shop")},n=>{console.log(n),this.errors=n.errors})}validateEmailNotTaken(){return n=>function(e=0,o,n){let r=-1;return p(o)?r=Number(o)<1?1:Number(o):(0,d.K)(o)&&(n=o),(0,d.K)(n)||(n=A),new h.y(l=>{const I=p(e)?e:+e-n.now();return n.schedule(T,I,{index:0,period:r,subscriber:l})})}(500).pipe((0,q.w)(()=>n.value?this.accountService.checkEmailExists(n.value).pipe((0,C.U)(r=>r?{emailExists:!0}:null)):(0,U.of)(null)))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i.qu),t.Y36(g.B),t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:12,vars:7,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","displayName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["class","text-danger list-unstyled",4,"ngIf"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"],[1,"text-danger","list-unstyled"],[4,"ngFor","ngForOf"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"form",2),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(3,"div",3),t.TgZ(4,"h1",4),t._uU(5,"Register"),t.qZA(),t.qZA(),t._UZ(6,"app-text-input",5),t._UZ(7,"app-text-input",6),t._UZ(8,"app-text-input",7),t.YNc(9,J,2,1,"ul",8),t.TgZ(10,"button",9),t._uU(11,"Register"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.Q6J("formGroup",r.registerForm),t.xp6(4),t.Q6J("label","Display Name"),t.xp6(1),t.Q6J("label","Email address"),t.xp6(1),t.Q6J("label","Password")("type","password"),t.xp6(1),t.Q6J("ngIf",r.errors),t.xp6(1),t.Q6J("disabled",r.registerForm.invalid))},directives:[i._Y,i.JL,i.sg,m.t,i.JJ,i.u,u.O5,u.sg],styles:[""]}),e})()}];let S=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.Bz.forChild(w)],s.Bz]}),e})();var N=a(4466);let R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.ez,S,N.m]]}),e})()}}]);