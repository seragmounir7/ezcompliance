!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{QX5w:function(n,i,a){"use strict";a.r(i),a.d(i,"SavedFormsModule",function(){return F});var o=a("SVse"),r=a("LUZP"),c=a("OaSA"),s=a("8Y7J"),l=a("KFfU"),m=a("7g+E"),d=a("zXlT"),f=a("iInd"),u=a("5QHs"),p=a("ZFy/");function b(t,e){1&t&&(s.Ub(0,"th",15),s.Oc(1," Form Id "),s.Tb())}function h(t,e){if(1&t&&(s.Ub(0,"td",16),s.Oc(1),s.Tb()),2&t){var n=e.$implicit;s.Bb(1),s.Pc(n.formId)}}function g(t,e){1&t&&(s.Ub(0,"th",15),s.Oc(1,"Form Name "),s.Tb())}function v(t,e){1&t&&(s.Ub(0,"td",16),s.Oc(1,"Form Name"),s.Tb())}function w(t,e){1&t&&(s.Ub(0,"th",17),s.Oc(1,"Form Type"),s.Tb())}function y(t,e){if(1&t&&(s.Ub(0,"td",16),s.Oc(1),s.Tb()),2&t){var n=e.$implicit;s.Bb(1),s.Pc(n.fileType)}}function T(t,e){1&t&&(s.Ub(0,"th",15),s.Oc(1,"Created Date"),s.Tb())}function S(t,e){if(1&t&&(s.Ub(0,"td",16),s.Oc(1),s.jc(2,"date"),s.Tb()),2&t){var n=e.$implicit;s.Bb(1),s.Qc(" ",s.lc(2,1,n.createdAt,"mediumDate")," ")}}function C(t,e){1&t&&(s.Ub(0,"th",15),s.Oc(1,"Updated Date"),s.Tb())}function O(t,e){if(1&t&&(s.Ub(0,"td",16),s.Oc(1),s.jc(2,"date"),s.Tb()),2&t){var n=e.$implicit;s.Bb(1),s.Qc(" ",s.lc(2,1,n.updatedAt,"mediumDate")," ")}}function k(t,e){1&t&&(s.Ub(0,"th",17),s.Oc(1," Action "),s.Tb())}function M(t,e){if(1&t){var n=s.Vb();s.Ub(0,"td",16),s.Ub(1,"div",18),s.Ub(2,"span",19),s.ec("click",function(){s.Cc(n);var t=e.$implicit;return s.ic().edit(t._id,t.fileType)}),s.Oc(3," edit "),s.Tb(),s.Ub(4,"span",20),s.ec("click",function(){s.Cc(n);var t=e.$implicit;return s.ic().printPage(t._id,t.fileType)}),s.Oc(5," print "),s.Tb(),s.Tb(),s.Tb()}}function D(t,e){1&t&&s.Pb(0,"tr",21)}function U(t,e){1&t&&s.Pb(0,"tr",22)}var P,R,I,A=function(){return[5,10,20,30]},B=[{path:"",component:(P=function(){function n(e,i,a,o){t(this,n),this.forms=e,this.spinner=i,this.shared=a,this.router=o,this.displayedColumns=["formId","Phone","Email","Site","Action"]}var i,a,o;return i=n,(a=[{key:"ngOnInit",value:function(){this.getSavedforms()}},{key:"getSavedforms",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;this.forms.getAllSavedForms(e,n).subscribe(function(e){t.showDatas=e.data,t.totalCount=e.totalCount,t.showDatas.forEach(function(e,n){return t.showDatas[n].index=n}),t.tempArray=new c.l(t.showDatas),t.tempArray.sort=t.sort,console.log("get res",t.showDatas)})}},{key:"edit",value:function(t,e){var n={queryParams:{formType:e.toString()}};"Hazard"==e?this.router.navigate(["/admin/forms/hazardRep/"+t],n):"Incident"==e?this.router.navigate(["/admin/forms/incidentRep/"+t],n):"Site Inspection"==e?this.router.navigate(["/admin/forms/siteInspect/"+t],n):"Tool Box"==e?this.router.navigate(["/admin/forms/toolboxTalk/"+t],n):"Risk Assessment"==e&&this.router.navigate(["/admin/forms/riskAssessSWMS/"+t],n)}},{key:"printPage",value:function(t,e){this.shared.printNext(!0),console.log("check"),localStorage.setItem("key","print"),this.spinner.show("printLoader");var n={queryParams:{formType:e.toString()}};"Hazard"==e?this.router.navigate(["/",{outlets:{print:["print","hazardRep",t]}}],n):"Incident"==e?this.router.navigate(["/",{outlets:{print:["print","incidentRep",t]}}],n):"Site Inspection"==e?this.router.navigate(["/",{outlets:{print:["print","siteInspect",t]}}],n):"Tool Box"==e?this.router.navigate(["/",{outlets:{print:["print","toolboxTalk",t]}}],n):"Risk Assessment"==e&&this.router.navigate(["/",{outlets:{print:["print","riskAssessSWMS",t]}}],n)}},{key:"paginator",value:function(t){this.getSavedforms(t.pageIndex+1,t.pageSize)}}])&&e(i.prototype,a),o&&e(i,o),n}(),P.\u0275fac=function(t){return new(t||P)(s.Ob(l.a),s.Ob(m.c),s.Ob(d.a),s.Ob(f.f))},P.\u0275cmp=s.Ib({type:P,selectors:[["app-saved-forms"]],viewQuery:function(t,e){var n;1&t&&s.Sc(r.a,!0),2&t&&s.xc(n=s.fc())&&(e.sort=n.first)},decls:26,vars:6,consts:[[1,"col","ml-2","pt-3"],[1,""],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","formId"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Name"],["matColumnDef","Phone"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","Email"],["matColumnDef","Site"],["matColumnDef","Action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions","length","page"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[2,"display","flex","justify-content","space-around"],["matTooltip","Edit",1,"material-icons",3,"click"],["matTooltip","print",1,"material-icons",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(s.Ub(0,"div",0),s.Ub(1,"h1"),s.Oc(2," All Saved Forms Table"),s.Tb(),s.Tb(),s.Ub(3,"div",1),s.Ub(4,"table",2),s.Sb(5,3),s.Mc(6,b,2,0,"th",4),s.Mc(7,h,2,1,"td",5),s.Rb(),s.Sb(8,6),s.Mc(9,g,2,0,"th",4),s.Mc(10,v,2,0,"td",5),s.Rb(),s.Sb(11,7),s.Mc(12,w,2,0,"th",8),s.Mc(13,y,2,1,"td",5),s.Rb(),s.Sb(14,9),s.Mc(15,T,2,0,"th",4),s.Mc(16,S,3,4,"td",5),s.Rb(),s.Sb(17,10),s.Mc(18,C,2,0,"th",4),s.Mc(19,O,3,4,"td",5),s.Rb(),s.Sb(20,11),s.Mc(21,k,2,0,"th",8),s.Mc(22,M,6,0,"td",5),s.Rb(),s.Mc(23,D,1,0,"tr",12),s.Mc(24,U,1,0,"tr",13),s.Tb(),s.Ub(25,"mat-paginator",14),s.ec("page",function(t){return e.paginator(t)}),s.Tb(),s.Tb()),2&t&&(s.Bb(4),s.qc("dataSource",e.tempArray),s.Bb(19),s.qc("matHeaderRowDef",e.displayedColumns),s.Bb(1),s.qc("matRowDefColumns",e.displayedColumns),s.Bb(1),s.qc("pageSizeOptions",s.tc(5,A))("length",e.totalCount))},directives:[c.k,r.a,c.c,c.e,c.b,c.g,c.j,u.a,c.d,r.b,c.a,p.a,c.f,c.i],pipes:[o.e],styles:[".viewBtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#007bff;font-size:21px!important}  .mat-sort-header-container{margin-left:47%!important}table[_ngcontent-%COMP%]{width:100%}.select[_ngcontent-%COMP%]{width:100%!important}.pt-3[_ngcontent-%COMP%]{display:inline-block;font-size:32px;font-weight:700;word-break:break-word;font-family:Inter,sans-serif}"]}),P)}],x=((R=function e(){t(this,e)}).\u0275mod=s.Mb({type:R}),R.\u0275inj=s.Lb({factory:function(t){return new(t||R)},imports:[[f.j.forChild(B)],f.j]}),R),z=a("PCNd"),F=((I=function e(){t(this,e)}).\u0275mod=s.Mb({type:I}),I.\u0275inj=s.Lb({factory:function(t){return new(t||I)},imports:[[o.c,z.a,x]]}),I)}}])}();