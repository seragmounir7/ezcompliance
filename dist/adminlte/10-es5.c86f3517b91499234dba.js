!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8df9":function(n,i,r){"use strict";r.r(i),r.d(i,"AdminSetupModule",function(){return C});var a=r("ofXK"),s=r("tyNb"),o=r("3Pt+"),l=r("fXoL"),u=r("bH0Y"),c=r("xHqg"),d=r("YfJ4"),p=r("bTqV"),m=r("Qu3c"),f=r("9NQz"),g=r("pYHN"),v=r("45le"),S=["stepper"];function h(e,t){1&e&&l["\u0275\u0275text"](0,"Enter Company Details")}function b(e,t){1&e&&l["\u0275\u0275text"](0,"Add Roles")}function x(e,t){1&e&&l["\u0275\u0275text"](0,"Employee Details")}function E(e,t){1&e&&l["\u0275\u0275text"](0,"Add Sub Contractor")}function y(e,t){1&e&&l["\u0275\u0275text"](0,"Done")}var D,I,F,L=[{path:"",component:(D=function(){function n(t,i,r,a){e(this,n),this._formBuilder=t,this.router=i,this.authService=r,this.changeDetectorRef=a,this.isEditable=!1}var i,r,a;return i=n,(r=[{key:"ngAfterViewInit",value:function(){var e=this;this.authService.loginData$.subscribe(function(t){e.changeDetectorRef.detectChanges(),console.log(e.stepper.selectedIndex),!1===t.FirstLogin.step1&&(e.stepper.selected.completed=!0,e.stepper.next()),!1===t.FirstLogin.step2&&(e.stepper.selected.completed=!0,e.stepper.next()),!1===t.FirstLogin.step3&&(e.stepper.selected.completed=!0,e.stepper.next()),!1===t.FirstLogin.step4&&(e.stepper.selected.completed=!0,e.stepper.next()),console.log(e.stepper.selectedIndex)}),console.log(this.stepper)}},{key:"ngOnInit",value:function(){var e=this;this.authService.loginData$.subscribe(function(t){console.log("admin setup",t),e.userData=t}),this.firstFormGroup=this._formBuilder.group({firstCtrl:["",o.C.required]}),this.secondFormGroup=this._formBuilder.group({secondCtrl:["",o.C.required]})}},{key:"updateFirstLogin",value:function(e){var t=this;this.userData.FirstLogin[e]=!1,this.authService.updateFirstLogin(this.userData.FirstLogin).subscribe(function(e){console.log(e),t.authService.nextLoginData(t.userData),sessionStorage.setItem("userData",JSON.stringify(t.userData)),sessionStorage.setItem("firstLogin",JSON.stringify(t.userData.FirstLogin))})}},{key:"setupComplete",value:function(){var e=this;this.userData.FirstLogin.firstLogin=!1,this.authService.updateFirstLogin(this.userData.FirstLogin).subscribe(function(t){console.log(t),sessionStorage.setItem("firstLogin",JSON.stringify(e.userData.FirstLogin)),sessionStorage.setItem("userData",JSON.stringify(e.userData)),e.authService.nextLoginData(e.userData)}),this.router.navigate(["/admin"])}}])&&t(i.prototype,r),a&&t(i,a),n}(),D.\u0275fac=function(e){return new(e||D)(l["\u0275\u0275directiveInject"](o.f),l["\u0275\u0275directiveInject"](s.f),l["\u0275\u0275directiveInject"](u.a),l["\u0275\u0275directiveInject"](l.ChangeDetectorRef))},D.\u0275cmp=l["\u0275\u0275defineComponent"]({type:D,selectors:[["app-admin-setup"]],viewQuery:function(e,t){var n;1&e&&l["\u0275\u0275viewQuery"](S,!0),2&e&&l["\u0275\u0275queryRefresh"](n=l["\u0275\u0275loadQuery"]())&&(t.stepper=n.first)},decls:47,vars:4,consts:[[1,"d-flex","justify-content-end"],[1,"col-4","card","p-3","mr-4",2,"font-size","24px","text-align","center"],["stepper",""],["matStepLabel",""],[3,"isInvalid","updatedSuccessFull"],["matTooltip","Please Update Company Details","mat-button","","matStepperNext","",3,"disabled","click"],[3,"isRoleInvaid"],["mat-button","","matStepperNext","",3,"disabled","click"],[1,"shadow"],[3,"isEmpRegInvalid"],["mat-button","","matStepperPrevious",""],["mat-button","","matStepperNext","",3,"click"],["mat-button","",3,"click"]],template:function(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"mat-horizontal-stepper",null,2),l["\u0275\u0275elementStart"](5,"mat-step"),l["\u0275\u0275template"](6,h,1,0,"ng-template",3),l["\u0275\u0275elementStart"](7,"div"),l["\u0275\u0275elementStart"](8,"app-add-and-edit-company-info",4),l["\u0275\u0275listener"]("isInvalid",function(e){return t.companyInfoValid=e})("updatedSuccessFull",function(e){return t.updatedSuccessFull=e}),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"div"),l["\u0275\u0275elementStart"](10,"button",5),l["\u0275\u0275listener"]("click",function(){return t.updateFirstLogin("step1")}),l["\u0275\u0275text"](11," Next "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](12,"mat-step"),l["\u0275\u0275template"](13,b,1,0,"ng-template",3),l["\u0275\u0275elementStart"](14,"div"),l["\u0275\u0275elementStart"](15,"app-role-management",6),l["\u0275\u0275listener"]("isRoleInvaid",function(e){return t.isRoleInvaid=e}),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](16,"div"),l["\u0275\u0275elementStart"](17,"button",7),l["\u0275\u0275listener"]("click",function(){return t.updateFirstLogin("step2")}),l["\u0275\u0275text"](18," Next "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](19,"mat-step"),l["\u0275\u0275template"](20,x,1,0,"ng-template",3),l["\u0275\u0275elementStart"](21,"div",8),l["\u0275\u0275elementStart"](22,"app-employee-registration",9),l["\u0275\u0275listener"]("isEmpRegInvalid",function(e){return t.isEmpRegInvalid=e}),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](23,"div"),l["\u0275\u0275elementStart"](24,"button",10),l["\u0275\u0275text"](25,"Back"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](26,"button",7),l["\u0275\u0275listener"]("click",function(){return t.updateFirstLogin("step3")}),l["\u0275\u0275text"](27," Next "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](28,"mat-step"),l["\u0275\u0275template"](29,E,1,0,"ng-template",3),l["\u0275\u0275elementStart"](30,"div",8),l["\u0275\u0275element"](31,"app-subcontract"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](32,"div"),l["\u0275\u0275elementStart"](33,"button",10),l["\u0275\u0275text"](34,"Back"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](35,"button",11),l["\u0275\u0275listener"]("click",function(){return t.updateFirstLogin("step4")}),l["\u0275\u0275text"](36," Next "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](37,"mat-step"),l["\u0275\u0275template"](38,y,1,0,"ng-template",3),l["\u0275\u0275element"](39,"div"),l["\u0275\u0275elementStart"](40,"div"),l["\u0275\u0275elementStart"](41,"button",12),l["\u0275\u0275listener"]("click",function(){return t.setupComplete()}),l["\u0275\u0275text"](42,"Goto Dashboard"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](43,"button",10),l["\u0275\u0275text"](44,"Back"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](45,"button",12),l["\u0275\u0275listener"]("click",function(){return l["\u0275\u0275restoreView"](n),l["\u0275\u0275reference"](4).reset()}),l["\u0275\u0275text"](46,"Reset"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}2&e&&(l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" Subscription Purchased For ",t.userData.employeePurchased||0," Employees "),l["\u0275\u0275advance"](8),l["\u0275\u0275property"]("disabled",!t.updatedSuccessFull),l["\u0275\u0275advance"](7),l["\u0275\u0275property"]("disabled",t.isRoleInvaid),l["\u0275\u0275advance"](9),l["\u0275\u0275property"]("disabled",t.isEmpRegInvalid))},directives:[c.a,c.b,c.c,d.a,p.a,c.e,m.a,f.a,g.a,c.f,v.a],styles:[".shadow[_ngcontent-%COMP%]{box-shadow:0 6px 7px hsla(0,0%,50.2%,.25882352941176473)}  .mat-horizontal-stepper-header{pointer-events:none!important}"]}),D)}],w=((I=function t(){e(this,t)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:I}),I.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||I)},imports:[[s.j.forChild(L)],s.j]}),I),k=r("DNuw"),N=r("xd2E"),C=((F=function t(){e(this,t)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:F}),F.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||F)},imports:[[a.c,w,c.d,k.RegistrationModule,N.RoleManagementModule]]}),F)}}])}();