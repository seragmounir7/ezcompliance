(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8df9":function(e,t,n){"use strict";n.r(t),n.d(t,"AdminSetupModule",function(){return F});var i=n("ofXK"),s=n("tyNb"),r=n("3Pt+"),a=n("fXoL"),o=n("bH0Y"),l=n("xHqg"),d=n("YfJ4"),p=n("bTqV"),c=n("Qu3c"),u=n("9NQz"),m=n("pYHN"),g=n("45le");const f=["stepper"];function h(e,t){1&e&&a["\u0275\u0275text"](0,"Enter Company Details")}function S(e,t){1&e&&a["\u0275\u0275text"](0,"Add Roles")}function v(e,t){1&e&&a["\u0275\u0275text"](0,"Employee Details")}function b(e,t){1&e&&a["\u0275\u0275text"](0,"Add Sub Contractor")}function x(e,t){1&e&&a["\u0275\u0275text"](0,"Done")}const E=[{path:"",component:(()=>{class e{constructor(e,t,n,i){this._formBuilder=e,this.router=t,this.authService=n,this.changeDetectorRef=i,this.isEditable=!1}ngAfterViewInit(){this.authService.loginData$.subscribe(e=>{this.changeDetectorRef.detectChanges(),console.log(this.stepper.selectedIndex),!1===e.FirstLogin.step1&&(this.stepper.selected.completed=!0,this.stepper.next()),!1===e.FirstLogin.step2&&(this.stepper.selected.completed=!0,this.stepper.next()),!1===e.FirstLogin.step3&&(this.stepper.selected.completed=!0,this.stepper.next()),!1===e.FirstLogin.step4&&(this.stepper.selected.completed=!0,this.stepper.next()),console.log(this.stepper.selectedIndex)}),console.log(this.stepper)}ngOnInit(){this.authService.loginData$.subscribe(e=>{console.log("admin setup",e),this.userData=e}),this.firstFormGroup=this._formBuilder.group({firstCtrl:["",r.C.required]}),this.secondFormGroup=this._formBuilder.group({secondCtrl:["",r.C.required]})}updateFirstLogin(e){this.userData.FirstLogin[e]=!1,this.authService.updateFirstLogin(this.userData.FirstLogin).subscribe(e=>{console.log(e),this.authService.nextLoginData(this.userData),sessionStorage.setItem("userData",JSON.stringify(this.userData)),sessionStorage.setItem("firstLogin",JSON.stringify(this.userData.FirstLogin))})}setupComplete(){this.userData.FirstLogin.firstLogin=!1,this.authService.updateFirstLogin(this.userData.FirstLogin).subscribe(e=>{console.log(e),sessionStorage.setItem("firstLogin",JSON.stringify(this.userData.FirstLogin)),sessionStorage.setItem("userData",JSON.stringify(this.userData)),this.authService.nextLoginData(this.userData)}),this.router.navigate(["/admin"])}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](r.f),a["\u0275\u0275directiveInject"](s.f),a["\u0275\u0275directiveInject"](o.a),a["\u0275\u0275directiveInject"](a.ChangeDetectorRef))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-admin-setup"]],viewQuery:function(e,t){if(1&e&&a["\u0275\u0275viewQuery"](f,!0),2&e){let e;a["\u0275\u0275queryRefresh"](e=a["\u0275\u0275loadQuery"]())&&(t.stepper=e.first)}},decls:47,vars:4,consts:[[1,"d-flex","justify-content-end"],[1,"col-4","card","p-3","mr-4",2,"font-size","24px","text-align","center"],["stepper",""],["matStepLabel",""],[3,"isInvalid","updatedSuccessFull"],["matTooltip","Please Update Company Details","mat-button","","matStepperNext","",3,"disabled","click"],[3,"isRoleInvaid"],["mat-button","","matStepperNext","",3,"disabled","click"],[1,"shadow"],[3,"isEmpRegInvalid"],["mat-button","","matStepperPrevious",""],["mat-button","","matStepperNext","",3,"click"],["mat-button","",3,"click"]],template:function(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"mat-horizontal-stepper",null,2),a["\u0275\u0275elementStart"](5,"mat-step"),a["\u0275\u0275template"](6,h,1,0,"ng-template",3),a["\u0275\u0275elementStart"](7,"div"),a["\u0275\u0275elementStart"](8,"app-add-and-edit-company-info",4),a["\u0275\u0275listener"]("isInvalid",function(e){return t.companyInfoValid=e})("updatedSuccessFull",function(e){return t.updatedSuccessFull=e}),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"div"),a["\u0275\u0275elementStart"](10,"button",5),a["\u0275\u0275listener"]("click",function(){return t.updateFirstLogin("step1")}),a["\u0275\u0275text"](11," Next "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](12,"mat-step"),a["\u0275\u0275template"](13,S,1,0,"ng-template",3),a["\u0275\u0275elementStart"](14,"div"),a["\u0275\u0275elementStart"](15,"app-role-management",6),a["\u0275\u0275listener"]("isRoleInvaid",function(e){return t.isRoleInvaid=e}),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](16,"div"),a["\u0275\u0275elementStart"](17,"button",7),a["\u0275\u0275listener"]("click",function(){return t.updateFirstLogin("step2")}),a["\u0275\u0275text"](18," Next "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](19,"mat-step"),a["\u0275\u0275template"](20,v,1,0,"ng-template",3),a["\u0275\u0275elementStart"](21,"div",8),a["\u0275\u0275elementStart"](22,"app-employee-registration",9),a["\u0275\u0275listener"]("isEmpRegInvalid",function(e){return t.isEmpRegInvalid=e}),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](23,"div"),a["\u0275\u0275elementStart"](24,"button",10),a["\u0275\u0275text"](25,"Back"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](26,"button",7),a["\u0275\u0275listener"]("click",function(){return t.updateFirstLogin("step3")}),a["\u0275\u0275text"](27," Next "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](28,"mat-step"),a["\u0275\u0275template"](29,b,1,0,"ng-template",3),a["\u0275\u0275elementStart"](30,"div",8),a["\u0275\u0275element"](31,"app-subcontract"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](32,"div"),a["\u0275\u0275elementStart"](33,"button",10),a["\u0275\u0275text"](34,"Back"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](35,"button",11),a["\u0275\u0275listener"]("click",function(){return t.updateFirstLogin("step4")}),a["\u0275\u0275text"](36," Next "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](37,"mat-step"),a["\u0275\u0275template"](38,x,1,0,"ng-template",3),a["\u0275\u0275element"](39,"div"),a["\u0275\u0275elementStart"](40,"div"),a["\u0275\u0275elementStart"](41,"button",12),a["\u0275\u0275listener"]("click",function(){return t.setupComplete()}),a["\u0275\u0275text"](42,"Goto Dashboard"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](43,"button",10),a["\u0275\u0275text"](44,"Back"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](45,"button",12),a["\u0275\u0275listener"]("click",function(){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275reference"](4).reset()}),a["\u0275\u0275text"](46,"Reset"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}2&e&&(a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"](" Subscription Purchased For ",t.userData.employeePurchased||0," Employees "),a["\u0275\u0275advance"](8),a["\u0275\u0275property"]("disabled",!t.updatedSuccessFull),a["\u0275\u0275advance"](7),a["\u0275\u0275property"]("disabled",t.isRoleInvaid),a["\u0275\u0275advance"](9),a["\u0275\u0275property"]("disabled",t.isEmpRegInvalid))},directives:[l.a,l.b,l.c,d.a,p.a,l.e,c.a,u.a,m.a,l.f,g.a],styles:[".shadow[_ngcontent-%COMP%]{box-shadow:0 6px 7px hsla(0,0%,50.2%,.25882352941176473)}  .mat-horizontal-stepper-header{pointer-events:none!important}"]}),e})()}];let y=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.j.forChild(E)],s.j]}),e})();var D=n("DNuw"),I=n("xd2E");let F=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,y,l.d,D.RegistrationModule,I.RoleManagementModule]]}),e})()}}]);