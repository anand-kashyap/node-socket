(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{VhVc:function(l,n,u){"use strict";u.r(n);var i=u("8Y7J"),o=u("s7LF"),e=u("BOF4"),t=u.n(e);class s{constructor(l,n,u){this.chatService=l,this.apiService=n,this.router=u,this.error=!1,this.errMsg="",this.loader=!1,this.errTimeout=4e3,this.loginForm=new o.g({email:new o.e("",[o.p.required,o.p.email]),password:new o.e("",[o.p.required])}),this.loginValidations={email:[{type:"required",message:"Email is required"},{type:"email",message:"Invalid Email"}],password:[{type:"required",message:"Password is required"}]}}ngOnInit(){this.errMsg=this.chatService.getRouteErrorMsg(),this.errMsg&&(this.error=!0);const l=this.chatService.isLoggedIn();console.log(l)}getErrors(l){return this.chatService.getErrors(l,this.loginForm,this.loginValidations)}getInvalidCondition(l){return this.loginForm.get(l).invalid&&this.loginForm.get(l).dirty}login(){this.loginForm.valid?(this.loader=!0,this.loginForm.disable(),this.apiService.login(this.loginForm.value).subscribe(l=>{this.loader=!1,this.loginForm.enable();const n=t()(l.token);n.active?(this.chatService.setUserInfo(n),this.chatService.setInLocal("token",l.token),console.log(n),this.router.navigateByUrl("/user")):this.errorMessage="Your account is not active. Please contact admin."},l=>{this.loader=!1,this.loginForm.enable(),this.errorMessage=this.chatService.showResponseError(l)})):this.chatService.markFieldsAsDirty(this.loginForm)}}class r{}var a=u("fNgX"),b=u("pMnS"),c=u("MdoF"),d=u("CNMR"),g=u("SVse"),p=u("iInd"),m=u("ZSeD"),h=u("yTNM"),v=i.nb({encapsulation:0,styles:[[""]],data:{}});function f(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,1,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),i.Ib(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.component.getErrors("email"))}))}function y(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,1,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),i.Ib(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.component.getErrors("password"))}))}function k(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,2,"span",[["class","spinner-border spinner-border-sm"],["role","status"]],null,null,null,null,null)),(l()(),i.pb(1,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),i.Ib(-1,null,["Loading..."]))],null,null)}function A(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,1,"div",[["class","invalid-feedback mt-3 d-block"]],null,null,null,null,null)),(l()(),i.Ib(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.errorMessage)}))}function C(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,3,"alert",[["type","danger"]],null,null,null,c.c,c.b)),i.ob(1,114688,null,0,d.a,[d.b,i.h],{type:[0,"type"],dismissOnTimeout:[1,"dismissOnTimeout"],isOpen:[2,"isOpen"]},null),(l()(),i.pb(2,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),i.Ib(3,null,["",""])),(l()(),i.pb(4,0,null,null,55,"div",[["class","container-fluid view-area"]],null,null,null,null,null)),(l()(),i.pb(5,0,null,null,54,"div",[["class","row mt-4"]],null,null,null,null,null)),(l()(),i.pb(6,0,null,null,53,"div",[["class","col-md-6 m-auto"]],null,null,null,null,null)),(l()(),i.pb(7,0,null,null,52,"div",[["class","card"]],null,null,null,null,null)),(l()(),i.pb(8,0,null,null,1,"div",[["class","card-header bg-primary text-light"]],null,null,null,null,null)),(l()(),i.Ib(-1,null,[" Login "])),(l()(),i.pb(10,0,null,null,49,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),i.pb(11,0,null,null,48,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,e=l.component;return"submit"===n&&(o=!1!==i.Ab(l,13).onSubmit(u)&&o),"reset"===n&&(o=!1!==i.Ab(l,13).onReset()&&o),"ngSubmit"===n&&(o=!1!==e.login()&&o),o}),null,null)),i.ob(12,16384,null,0,o.t,[],null,null),i.ob(13,540672,null,0,o.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),i.Fb(2048,null,o.b,null,[o.h]),i.ob(15,16384,null,0,o.m,[[4,o.b]],null,null),(l()(),i.pb(16,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),i.pb(17,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),i.Ib(-1,null,["Email"])),(l()(),i.pb(19,0,null,null,8,"input",[["autocomplete","email"],["class","form-control"],["formControlName","email"],["placeholder","Your Login Email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==i.Ab(l,23)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==i.Ab(l,23).onTouched()&&o),"compositionstart"===n&&(o=!1!==i.Ab(l,23)._compositionStart()&&o),"compositionend"===n&&(o=!1!==i.Ab(l,23)._compositionEnd(u.target.value)&&o),o}),null,null)),i.Fb(512,null,g.w,g.x,[i.q,i.r,i.k,i.B]),i.ob(21,278528,null,0,g.j,[g.w],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i.Db(22,{"is-invalid":0}),i.ob(23,16384,null,0,o.c,[i.B,i.k,[2,o.a]],null,null),i.Fb(1024,null,o.j,(function(l){return[l]}),[o.c]),i.ob(25,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.j],[2,o.s]],{name:[0,"name"]},null),i.Fb(2048,null,o.k,null,[o.f]),i.ob(27,16384,null,0,o.l,[[4,o.k]],null,null),(l()(),i.eb(16777216,null,null,1,null,f)),i.ob(29,16384,null,0,g.l,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.pb(30,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),i.pb(31,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),i.Ib(-1,null,["Password"])),(l()(),i.pb(33,0,null,null,8,"input",[["autocomplete","password"],["class","form-control"],["formControlName","password"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==i.Ab(l,37)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==i.Ab(l,37).onTouched()&&o),"compositionstart"===n&&(o=!1!==i.Ab(l,37)._compositionStart()&&o),"compositionend"===n&&(o=!1!==i.Ab(l,37)._compositionEnd(u.target.value)&&o),o}),null,null)),i.Fb(512,null,g.w,g.x,[i.q,i.r,i.k,i.B]),i.ob(35,278528,null,0,g.j,[g.w],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i.Db(36,{"is-invalid":0}),i.ob(37,16384,null,0,o.c,[i.B,i.k,[2,o.a]],null,null),i.Fb(1024,null,o.j,(function(l){return[l]}),[o.c]),i.ob(39,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.j],[2,o.s]],{name:[0,"name"]},null),i.Fb(2048,null,o.k,null,[o.f]),i.ob(41,16384,null,0,o.l,[[4,o.k]],null,null),(l()(),i.eb(16777216,null,null,1,null,y)),i.ob(43,16384,null,0,g.l,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.pb(44,0,null,null,13,"div",[],null,null,null,null,null)),(l()(),i.pb(45,0,null,null,8,"div",[["aria-label","Login Register"],["class","btn-group"],["role","login"]],null,null,null,null,null)),(l()(),i.pb(46,0,null,null,3,"button",[["class","btn btn-primary d-inline-block"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),i.eb(16777216,null,null,1,null,k)),i.ob(48,16384,null,0,g.l,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.Ib(-1,null,[" Login"])),(l()(),i.pb(50,0,null,null,3,"button",[["class","btn btn-outline-primary d-inline-block ml-1"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==i.Ab(l,51).onClick()&&o),o}),null,null)),i.ob(51,16384,null,0,p.l,[p.k,p.a,[8,null],i.B,i.k],{routerLink:[0,"routerLink"]},null),i.Bb(52,1),(l()(),i.Ib(-1,null,["Sign Up"])),(l()(),i.pb(54,0,null,null,3,"a",[["class","float-right"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==i.Ab(l,55).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o}),null,null)),i.ob(55,671744,null,0,p.m,[p.k,p.a,g.i],{routerLink:[0,"routerLink"]},null),i.Bb(56,1),(l()(),i.Ib(-1,null,["Forgot Password?"])),(l()(),i.eb(16777216,null,null,1,null,A)),i.ob(59,16384,null,0,g.l,[i.M,i.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,"danger",u.errTimeout,u.error),l(n,13,0,u.loginForm);var i=l(n,22,0,u.getInvalidCondition("email"));l(n,21,0,"form-control",i),l(n,25,0,"email"),l(n,29,0,u.getInvalidCondition("email"));var o=l(n,36,0,u.getInvalidCondition("password"));l(n,35,0,"form-control",o),l(n,39,0,"password"),l(n,43,0,u.getInvalidCondition("password")),l(n,48,0,u.loader);var e=l(n,52,0,"/register");l(n,51,0,e);var t=l(n,56,0,"/forgot-password");l(n,55,0,t),l(n,59,0,u.errorMessage)}),(function(l,n){var u=n.component;l(n,3,0,u.errMsg),l(n,11,0,i.Ab(n,15).ngClassUntouched,i.Ab(n,15).ngClassTouched,i.Ab(n,15).ngClassPristine,i.Ab(n,15).ngClassDirty,i.Ab(n,15).ngClassValid,i.Ab(n,15).ngClassInvalid,i.Ab(n,15).ngClassPending),l(n,19,0,i.Ab(n,27).ngClassUntouched,i.Ab(n,27).ngClassTouched,i.Ab(n,27).ngClassPristine,i.Ab(n,27).ngClassDirty,i.Ab(n,27).ngClassValid,i.Ab(n,27).ngClassInvalid,i.Ab(n,27).ngClassPending),l(n,33,0,i.Ab(n,41).ngClassUntouched,i.Ab(n,41).ngClassTouched,i.Ab(n,41).ngClassPristine,i.Ab(n,41).ngClassDirty,i.Ab(n,41).ngClassValid,i.Ab(n,41).ngClassInvalid,i.Ab(n,41).ngClassPending),l(n,46,0,u.loader),l(n,50,0,u.loader),l(n,54,0,i.Ab(n,55).target,i.Ab(n,55).href)}))}function I(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,1,"app-login",[],null,null,null,C,v)),i.ob(1,114688,null,0,s,[m.a,h.a,p.k],null,null)],(function(l,n){l(n,1,0)}),null)}var w=i.lb("app-login",s,I,{},{},[]),F=u("aHM3"),S=u("Nv++"),M=u("qn1f"),L=u("C1gq");u.d(n,"LoginModuleNgFactory",(function(){return q}));var q=i.mb(r,[],(function(l){return i.xb([i.yb(512,i.j,i.X,[[8,[a.b,a.a,b.a,c.a,w]],[3,i.j],i.v]),i.yb(4608,g.n,g.m,[i.s,[2,g.z]]),i.yb(4608,o.r,o.r,[]),i.yb(4608,o.d,o.d,[]),i.yb(4608,d.b,d.b,[]),i.yb(1073742336,g.c,g.c,[]),i.yb(1073742336,o.q,o.q,[]),i.yb(1073742336,o.i,o.i,[]),i.yb(1073742336,o.o,o.o,[]),i.yb(1073742336,F.a,F.a,[]),i.yb(1073742336,S.j,S.j,[]),i.yb(1073742336,M.a,M.a,[]),i.yb(1073742336,L.a,L.a,[]),i.yb(1073742336,p.n,p.n,[[2,p.s],[2,p.k]]),i.yb(1073742336,d.c,d.c,[]),i.yb(1073742336,r,r,[]),i.yb(1024,p.i,(function(){return[[{path:"",pathMatch:"full",component:s}]]}),[])])}))}}]);