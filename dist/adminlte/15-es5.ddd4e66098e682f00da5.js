!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{QX5w:function(e,i,n){"use strict";n.r(i),n.d(i,"SavedFormsModule",function(){return G});var r,o=n("3Pt+"),c=n("ofXK"),s=n("M9IT"),l=n("Dh3D"),u=n("+0xr"),f=n("VRyK"),d=n("fXoL"),m=n("KFfU"),p=((r=function(){function e(){t(this,e)}return a(e,[{key:"inputDateToIso",value:function(t){return new Date(Date.parse(t)).toISOString()}}]),e}()).\u0275fac=function(t){return new(t||r)},r.\u0275prov=d.Kb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),b=n("JqCM"),h=n("zXlT"),v=n("tyNb"),g=n("kmnG"),T=n("qFsG"),S=n("d3UM"),y=n("FKr1"),w=n("bTqV"),U=n("Qu3c");function k(t,e){if(1&t&&(d.Ub(0,"mat-option",24),d.Oc(1),d.Tb()),2&t){var a=e.$implicit;d.qc("value",a.value),d.Bb(1),d.Pc(a.title)}}function C(t,e){1&t&&(d.Ub(0,"mat-error"),d.Oc(1,"You must make a selection"),d.Tb())}function O(t,e){1&t&&(d.Ub(0,"th",25),d.Oc(1," Form Id "),d.Tb())}function D(t,e){if(1&t&&(d.Ub(0,"td",26),d.Oc(1),d.Tb()),2&t){var a=e.$implicit;d.Bb(1),d.Pc(a.formName)}}function I(t,e){1&t&&(d.Ub(0,"th",25),d.Oc(1,"Form Name "),d.Tb())}function M(t,e){1&t&&(d.Ub(0,"td",26),d.Oc(1,"Form Name"),d.Tb())}function A(t,e){1&t&&(d.Ub(0,"th",27),d.Oc(1,"Form Type"),d.Tb())}function F(t,e){if(1&t&&(d.Ub(0,"td",26),d.Oc(1),d.Tb()),2&t){var a=e.$implicit;d.Bb(1),d.Pc(a.fileType)}}function R(t,e){1&t&&(d.Ub(0,"th",25),d.Oc(1,"Created Date"),d.Tb())}function B(t,e){if(1&t&&(d.Ub(0,"td",26),d.Oc(1),d.jc(2,"date"),d.Tb()),2&t){var a=e.$implicit;d.Bb(1),d.Qc(" ",d.lc(2,1,a.createdAt,"mediumDate")," ")}}function P(t,e){1&t&&(d.Ub(0,"th",25),d.Oc(1,"Updated Date"),d.Tb())}function q(t,e){if(1&t&&(d.Ub(0,"td",26),d.Oc(1),d.jc(2,"date"),d.Tb()),2&t){var a=e.$implicit;d.Bb(1),d.Qc(" ",d.lc(2,1,a.updatedAt,"mediumDate")," ")}}function x(t,e){1&t&&(d.Ub(0,"th",27),d.Oc(1," Action "),d.Tb())}function N(t,e){if(1&t){var a=d.Vb();d.Ub(0,"td",26),d.Ub(1,"div",28),d.Ub(2,"span",29),d.ec("click",function(){d.Cc(a);var t=e.$implicit;return d.ic().edit(t._id,t.fileType)}),d.Oc(3," edit "),d.Tb(),d.Ub(4,"span",30),d.ec("click",function(){d.Cc(a);var t=e.$implicit;return d.ic().printPage(t._id,t.fileType)}),d.Oc(5," print "),d.Tb(),d.Tb(),d.Tb()}}function z(t,e){1&t&&d.Pb(0,"tr",31)}function j(t,e){1&t&&d.Pb(0,"tr",32)}function $(t,e){1&t&&(d.Ub(0,"tr",33),d.Ub(1,"td",34),d.Oc(2,"Data Not Found "),d.Tb(),d.Tb())}var _,H,V,K=function(){return[5,10,20,30]},L=[{path:"",component:(_=function(){function e(a,i,n,r,o,c){t(this,e),this.forms=a,this.convertService=i,this.spinner=n,this.shared=r,this.router=o,this.fb=c,this.displayedColumns=["formName","formType","createdAt","updatedAt","Action"],this.selectArr=[{title:"Form Id",value:"formId"},{title:"Form Type",value:"fileType"},{title:"Created Date",value:"createdAt"},{title:"Updated Date",value:"updatedAt"}],this.page=1,this.limit=5,this.searchString=""}return a(e,[{key:"ngAfterViewInit",value:function(){var t=this;this.sort.sortChange.subscribe(function(){return t.paginator1.pageIndex=0}),Object(f.a)(this.sort.sortChange,this.paginator1.page).subscribe(function(){t.changeState={field:t.sort.active||"",value:t.sort.direction||"",page:t.paginator1.pageIndex+1,limit:t.paginator1.pageSize},t.getSavedforms(),console.log(t.changeState)})}},{key:"ngOnInit",value:function(){this.searchControl=this.fb.group({searchSelect:["",o.C.required],searchInput:[""]}),this.getSavedforms()}},{key:"getSavedforms",value:function(t,e,a,i,n,r){var o,c,s,l,f=this;void 0===t&&(t=null===(o=this.changeState)||void 0===o?void 0:o.field),void 0===e&&(e=null===(c=this.changeState)||void 0===c?void 0:c.value),void 0===a&&(a=null===(s=this.changeState)||void 0===s?void 0:s.page),void 0===i&&(i=null===(l=this.changeState)||void 0===l?void 0:l.limit),void 0===n&&(n=this.f.searchSelect.value),void 0===r&&(r=this.f.searchInput.value),"createdAt"!==n&&"updatedAt"!==n||(r=this.convertService.inputDateToIso(r)),this.forms.getAllSavedForms(a,i,t,e,n,r).subscribe(function(t){f.showDatas=t.data,console.log("get res",f.showDatas),f.totalCount=t.totalCount,f.showDatas.forEach(function(t,e){return f.showDatas[e].index=e}),f.tempArray=new u.l(f.showDatas),f.tempArray.sort=f.sort})}},{key:"edit",value:function(t,e){var a={queryParams:{formType:e.toString()}};"Hazard"==e?this.router.navigate(["/admin/forms/hazardRep/"+t],a):"Incident"==e?this.router.navigate(["/admin/forms/incidentRep/"+t],a):"Site Inspection"==e?this.router.navigate(["/admin/forms/siteInspect/"+t],a):"Tool Box"==e?this.router.navigate(["/admin/forms/toolboxTalk/"+t],a):"Risk Assessment"==e&&this.router.navigate(["/admin/forms/riskAssessSWMS/"+t],a)}},{key:"printPage",value:function(t,e){this.shared.printNext(!0),console.log("check"),localStorage.setItem("key","print"),this.spinner.show("printLoader");var a={queryParams:{formType:e.toString()}};"Hazard"==e?this.router.navigate(["/",{outlets:{print:["print","hazardRep",t]}}],a):"Incident"==e?this.router.navigate(["/",{outlets:{print:["print","incidentRep",t]}}],a):"Site Inspection"==e?this.router.navigate(["/",{outlets:{print:["print","siteInspect",t]}}],a):"Tool Box"==e?this.router.navigate(["/",{outlets:{print:["print","toolboxTalk",t]}}],a):"Risk Assessment"==e&&this.router.navigate(["/",{outlets:{print:["print","riskAssessSWMS",t]}}],a)}},{key:"paginator",value:function(t){this.page=t.pageIndex,this.limit=t.pageSize}},{key:"applyFilter",value:function(t){this.searchString=t.target.value}},{key:"f",get:function(){return this.searchControl.controls}},{key:"reset",value:function(){this.f.searchSelect.setValue(""),this.f.searchInput.setValue(""),this.getSavedforms()}},{key:"search",value:function(){this.searchString=this.f.searchInput.value,this.searchString=this.f.searchInput.value,this.getSavedforms()}}]),e}(),_.\u0275fac=function(t){return new(t||_)(d.Ob(m.a),d.Ob(p),d.Ob(b.c),d.Ob(h.a),d.Ob(v.f),d.Ob(o.f))},_.\u0275cmp=d.Ib({type:_,selectors:[["app-saved-forms"]],viewQuery:function(t,e){var a;1&t&&(d.Sc(s.a,!0),d.Sc(l.a,!0)),2&t&&(d.xc(a=d.fc())&&(e.paginator1=a.first),d.xc(a=d.fc())&&(e.sort=a.first))},decls:45,vars:10,consts:[[1,"col","ml-2","pt-3"],[1,"row",3,"formGroup"],[1,"col-3"],["matInput","","placeholder","Search","formControlName","searchInput",3,"type","keyup"],["input",""],["formControlName","searchSelect"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["mat-raised-button","",3,"click"],[1,""],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","formName"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Name"],["matColumnDef","formType"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","createdAt"],["matColumnDef","updatedAt"],["matColumnDef","Action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions","length","page"],[3,"value"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[2,"display","flex","justify-content","space-around"],["matTooltip","Edit",1,"material-icons",3,"click"],["matTooltip","print",1,"material-icons",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(t,e){1&t&&(d.Ub(0,"div",0),d.Ub(1,"h1"),d.Oc(2," All Saved Forms Table"),d.Tb(),d.Tb(),d.Ub(3,"div",1),d.Ub(4,"div",2),d.Ub(5,"mat-form-field"),d.Ub(6,"input",3,4),d.ec("keyup",function(t){return e.applyFilter(t)}),d.Tb(),d.Tb(),d.Tb(),d.Ub(8,"div",2),d.Ub(9,"mat-form-field"),d.Ub(10,"mat-select",5),d.Ub(11,"mat-option"),d.Oc(12,"Clear"),d.Tb(),d.Mc(13,k,2,2,"mat-option",6),d.Tb(),d.Mc(14,C,2,0,"mat-error",7),d.Tb(),d.Tb(),d.Ub(15,"div",2),d.Ub(16,"button",8),d.ec("click",function(){return e.search()}),d.Oc(17," Search "),d.Tb(),d.Tb(),d.Ub(18,"div",2),d.Ub(19,"button",8),d.ec("click",function(){return e.reset()}),d.Oc(20," Reset Filter "),d.Tb(),d.Tb(),d.Tb(),d.Ub(21,"div",9),d.Ub(22,"table",10),d.Sb(23,11),d.Mc(24,O,2,0,"th",12),d.Mc(25,D,2,1,"td",13),d.Rb(),d.Sb(26,14),d.Mc(27,I,2,0,"th",12),d.Mc(28,M,2,0,"td",13),d.Rb(),d.Sb(29,15),d.Mc(30,A,2,0,"th",16),d.Mc(31,F,2,1,"td",13),d.Rb(),d.Sb(32,17),d.Mc(33,R,2,0,"th",12),d.Mc(34,B,3,4,"td",13),d.Rb(),d.Sb(35,18),d.Mc(36,P,2,0,"th",12),d.Mc(37,q,3,4,"td",13),d.Rb(),d.Sb(38,19),d.Mc(39,x,2,0,"th",16),d.Mc(40,N,6,0,"td",13),d.Rb(),d.Mc(41,z,1,0,"tr",20),d.Mc(42,j,1,0,"tr",21),d.Mc(43,$,3,0,"tr",22),d.Tb(),d.Ub(44,"mat-paginator",23),d.ec("page",function(t){return e.paginator(t)}),d.Tb(),d.Tb()),2&t&&(d.Bb(3),d.qc("formGroup",e.searchControl),d.Bb(3),d.qc("type",e.f.searchSelect.value===e.selectArr[2].value||e.f.searchSelect.value===e.selectArr[3].value?"date":"text"),d.Bb(7),d.qc("ngForOf",e.selectArr),d.Bb(1),d.qc("ngIf",e.f.searchSelect.hasError("required")),d.Bb(8),d.qc("dataSource",e.tempArray),d.Bb(19),d.qc("matHeaderRowDef",e.displayedColumns),d.Bb(1),d.qc("matRowDefColumns",e.displayedColumns),d.Bb(2),d.qc("pageSizeOptions",d.tc(9,K))("length",e.totalCount))},directives:[o.s,o.k,g.c,T.b,o.d,o.r,o.i,S.a,y.n,c.m,c.n,w.a,u.k,l.a,u.c,u.e,u.b,u.g,u.j,u.h,s.a,g.b,u.d,l.b,u.a,U.a,u.f,u.i],pipes:[c.e],styles:[".viewBtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#007bff;font-size:21px!important}  .mat-sort-header-container{margin-left:47%!important}table[_ngcontent-%COMP%]{width:100%}.select[_ngcontent-%COMP%]{width:100%!important}.pt-3[_ngcontent-%COMP%]{display:inline-block;font-size:32px;font-weight:700;word-break:break-word;font-family:Inter,sans-serif}"]}),_)}],Q=((H=function e(){t(this,e)}).\u0275mod=d.Mb({type:H}),H.\u0275inj=d.Lb({factory:function(t){return new(t||H)},imports:[[v.j.forChild(L)],v.j]}),H),E=n("PCNd"),G=((V=function e(){t(this,e)}).\u0275mod=d.Mb({type:V}),V.\u0275inj=d.Lb({factory:function(t){return new(t||V)},imports:[[c.c,o.y,E.a,Q]]}),V)}}])}();