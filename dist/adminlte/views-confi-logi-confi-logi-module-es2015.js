(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-confi-logi-confi-logi-module"],{

/***/ "3qhI":
/*!*******************************************************!*\
  !*** ./src/app/views/confi-logi/confi-logi.module.ts ***!
  \*******************************************************/
/*! exports provided: ConfiLogiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiLogiModule", function() { return ConfiLogiModule; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _confi_logi_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confi-logi-routing.module */ "il7X");
/* harmony import */ var _confi_logi_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confi-logi.component */ "ao8m");
/* harmony import */ var _set_logic_set_logic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./set-logic/set-logic.component */ "bu9C");
/* harmony import */ var _job_number_job_number_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./job-number/job-number.component */ "zQXG");
/* harmony import */ var _job_number_create_job_no_create_job_no_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./job-number/create-job-no/create-job-no.component */ "bXbX");
/* harmony import */ var _set_logic_set_relation_set_relation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./set-logic/set-relation/set-relation.component */ "6ZYc");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-autosize */ "5eqV");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ "hzfI");
/* harmony import */ var _set_logic_set_relation_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./set-logic/set-relation/add-item/add-item.component */ "wKjp");
/* harmony import */ var _set_logic_test_logic_test_logic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./set-logic/test-logic/test-logic.component */ "THzD");
/* harmony import */ var _set_logic_add_job_task_add_job_task_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./set-logic/add-job-task/add-job-task.component */ "M3dG");
/* harmony import */ var _hazard_treatment_hazard_treatment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hazard-treatment/hazard-treatment.component */ "aVfA");
/* harmony import */ var _hazard_treatment_add_hazard_relation_add_hazard_relation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./hazard-treatment/add-hazard-relation/add-hazard-relation.component */ "L2b9");





















class ConfiLogiModule {
}
ConfiLogiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ConfiLogiModule });
ConfiLogiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ConfiLogiModule_Factory(t) { return new (t || ConfiLogiModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _confi_logi_routing_module__WEBPACK_IMPORTED_MODULE_6__["ConfiLogiRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
            ngx_autosize__WEBPACK_IMPORTED_MODULE_12__["AutosizeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ConfiLogiModule, { declarations: [_confi_logi_component__WEBPACK_IMPORTED_MODULE_7__["ConfiLogiComponent"], _set_logic_set_logic_component__WEBPACK_IMPORTED_MODULE_8__["SetLogicComponent"], _job_number_job_number_component__WEBPACK_IMPORTED_MODULE_9__["JobNumberComponent"], _job_number_create_job_no_create_job_no_component__WEBPACK_IMPORTED_MODULE_10__["CreateJobNoComponent"], _set_logic_set_relation_set_relation_component__WEBPACK_IMPORTED_MODULE_11__["SetRelationComponent"], _set_logic_set_relation_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_14__["AddItemComponent"], _set_logic_test_logic_test_logic_component__WEBPACK_IMPORTED_MODULE_15__["TestLogicComponent"], _set_logic_add_job_task_add_job_task_component__WEBPACK_IMPORTED_MODULE_16__["AddJobTaskComponent"], _hazard_treatment_hazard_treatment_component__WEBPACK_IMPORTED_MODULE_17__["HazardTreatmentComponent"], _hazard_treatment_add_hazard_relation_add_hazard_relation_component__WEBPACK_IMPORTED_MODULE_18__["AddHazardRelationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _confi_logi_routing_module__WEBPACK_IMPORTED_MODULE_6__["ConfiLogiRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        ngx_autosize__WEBPACK_IMPORTED_MODULE_12__["AutosizeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ConfiLogiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_confi_logi_component__WEBPACK_IMPORTED_MODULE_7__["ConfiLogiComponent"], _set_logic_set_logic_component__WEBPACK_IMPORTED_MODULE_8__["SetLogicComponent"], _job_number_job_number_component__WEBPACK_IMPORTED_MODULE_9__["JobNumberComponent"], _job_number_create_job_no_create_job_no_component__WEBPACK_IMPORTED_MODULE_10__["CreateJobNoComponent"], _set_logic_set_relation_set_relation_component__WEBPACK_IMPORTED_MODULE_11__["SetRelationComponent"], _set_logic_set_relation_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_14__["AddItemComponent"], _set_logic_test_logic_test_logic_component__WEBPACK_IMPORTED_MODULE_15__["TestLogicComponent"], _set_logic_add_job_task_add_job_task_component__WEBPACK_IMPORTED_MODULE_16__["AddJobTaskComponent"], _hazard_treatment_hazard_treatment_component__WEBPACK_IMPORTED_MODULE_17__["HazardTreatmentComponent"], _hazard_treatment_add_hazard_relation_add_hazard_relation_component__WEBPACK_IMPORTED_MODULE_18__["AddHazardRelationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _confi_logi_routing_module__WEBPACK_IMPORTED_MODULE_6__["ConfiLogiRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                    ngx_autosize__WEBPACK_IMPORTED_MODULE_12__["AutosizeModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "6ZYc":
/*!***********************************************************************************!*\
  !*** ./src/app/views/confi-logi/set-logic/set-relation/set-relation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SetRelationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRelationComponent", function() { return SetRelationComponent; });
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-item/add-item.component */ "wKjp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "UhP/");













function SetRelationComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_p_10_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.handleClick(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.stepperList[i_r5].i);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.name);
} }
function SetRelationComponent_div_13_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_div_13_span_3_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.addItem(item_r8.code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetRelationComponent_div_13_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { name: a0 }; };
function SetRelationComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SetRelationComponent_div_13_span_3_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SetRelationComponent_div_13_ng_container_5_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.stepperList[i_r9].i)("show", ctx_r1.stepperList[i_r9].i);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r8.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, item_r8.name));
} }
function SetRelationComponent_ng_template_14_ng_container_0_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 34);
} }
function SetRelationComponent_ng_template_14_ng_container_0_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetRelationComponent_ng_template_14_ng_container_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetRelationComponent_ng_template_14_ng_container_0_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r30._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", parameter_r30.title, "");
} }
function SetRelationComponent_ng_template_14_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "HighRiskConstruction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SetRelationComponent_ng_template_14_ng_container_0_span_8_Template, 1, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SetRelationComponent_ng_template_14_ng_container_0_span_9_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SetRelationComponent_ng_template_14_ng_container_0_span_10_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SetRelationComponent_ng_template_14_ng_container_0_mat_option_11_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r16.JobTaskDetail.get("highRiskConstr").value == null ? null : ctx_r16.JobTaskDetail.get("highRiskConstr").value.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r16.JobTaskDetail.get("highRiskConstr").value == null ? null : ctx_r16.JobTaskDetail.get("highRiskConstr").value.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r16.JobTaskDetail.get("highRiskConstr").value == null ? null : ctx_r16.JobTaskDetail.get("highRiskConstr").value.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r16.highRiskConstructionData);
} }
function SetRelationComponent_ng_template_14_ng_container_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 34);
} }
function SetRelationComponent_ng_template_14_ng_container_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetRelationComponent_ng_template_14_ng_container_1_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetRelationComponent_ng_template_14_ng_container_1_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r35._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", parameter_r35.title, " ");
} }
function SetRelationComponent_ng_template_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "PPE selection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SetRelationComponent_ng_template_14_ng_container_1_span_8_Template, 1, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SetRelationComponent_ng_template_14_ng_container_1_span_9_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SetRelationComponent_ng_template_14_ng_container_1_span_10_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SetRelationComponent_ng_template_14_ng_container_1_mat_option_11_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r17.JobTaskDetail.get("PPE").value == null ? null : ctx_r17.JobTaskDetail.get("PPE").value.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r17.JobTaskDetail.get("PPE").value == null ? null : ctx_r17.JobTaskDetail.get("PPE").value.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r17.JobTaskDetail.get("PPE").value == null ? null : ctx_r17.JobTaskDetail.get("PPE").value.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r17.PPESelectionData);
} }
function SetRelationComponent_ng_template_14_ng_container_2_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 34);
} }
function SetRelationComponent_ng_template_14_ng_container_2_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetRelationComponent_ng_template_14_ng_container_2_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetRelationComponent_ng_template_14_ng_container_2_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r40._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", parameter_r40.title, " ");
} }
function SetRelationComponent_ng_template_14_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Licences");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SetRelationComponent_ng_template_14_ng_container_2_span_8_Template, 1, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SetRelationComponent_ng_template_14_ng_container_2_span_9_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SetRelationComponent_ng_template_14_ng_container_2_span_10_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SetRelationComponent_ng_template_14_ng_container_2_mat_option_11_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r18.JobTaskDetail.get("LicenceCat").value == null ? null : ctx_r18.JobTaskDetail.get("LicenceCat").value.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r18.JobTaskDetail.get("LicenceCat").value == null ? null : ctx_r18.JobTaskDetail.get("LicenceCat").value.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r18.JobTaskDetail.get("LicenceCat").value == null ? null : ctx_r18.JobTaskDetail.get("LicenceCat").value.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r18.licenceByTradecat);
} }
function SetRelationComponent_ng_template_14_ng_container_3_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 34);
} }
function SetRelationComponent_ng_template_14_ng_container_3_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetRelationComponent_ng_template_14_ng_container_3_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetRelationComponent_ng_template_14_ng_container_3_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r45._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", parameter_r45.title, " ");
} }
function SetRelationComponent_ng_template_14_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Identify Hazards");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SetRelationComponent_ng_template_14_ng_container_3_span_8_Template, 1, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SetRelationComponent_ng_template_14_ng_container_3_span_9_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SetRelationComponent_ng_template_14_ng_container_3_span_10_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SetRelationComponent_ng_template_14_ng_container_3_mat_option_11_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r19.JobTaskDetail.get("identifyHazrds").value == null ? null : ctx_r19.JobTaskDetail.get("identifyHazrds").value.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r19.JobTaskDetail.get("identifyHazrds").value == null ? null : ctx_r19.JobTaskDetail.get("identifyHazrds").value.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r19.JobTaskDetail.get("identifyHazrds").value == null ? null : ctx_r19.JobTaskDetail.get("identifyHazrds").value.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r19.allHazards);
} }
function SetRelationComponent_ng_template_14_ng_container_4_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r47._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", parameter_r47.title, " ");
} }
function SetRelationComponent_ng_template_14_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Risk Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SetRelationComponent_ng_template_14_ng_container_4_mat_option_7_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r20.riskLevelData);
} }
function SetRelationComponent_ng_template_14_ng_container_5_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 34);
} }
function SetRelationComponent_ng_template_14_ng_container_5_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetRelationComponent_ng_template_14_ng_container_5_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetRelationComponent_ng_template_14_ng_container_5_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r52._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", parameter_r52.title, " ");
} }
function SetRelationComponent_ng_template_14_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Control Action Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SetRelationComponent_ng_template_14_ng_container_5_span_8_Template, 1, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SetRelationComponent_ng_template_14_ng_container_5_span_9_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SetRelationComponent_ng_template_14_ng_container_5_span_10_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SetRelationComponent_ng_template_14_ng_container_5_mat_option_11_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r21.JobTaskDetail.get("contrActReq").value == null ? null : ctx_r21.JobTaskDetail.get("contrActReq").value.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r21.JobTaskDetail.get("contrActReq").value == null ? null : ctx_r21.JobTaskDetail.get("contrActReq").value.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r21.JobTaskDetail.get("contrActReq").value == null ? null : ctx_r21.JobTaskDetail.get("contrActReq").value.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r21.allContrlActReq);
} }
function SetRelationComponent_ng_template_14_ng_container_6_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 34);
} }
function SetRelationComponent_ng_template_14_ng_container_6_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetRelationComponent_ng_template_14_ng_container_6_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetRelationComponent_ng_template_14_ng_container_6_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r57._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", parameter_r57.title, " ");
} }
function SetRelationComponent_ng_template_14_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Code of Practice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SetRelationComponent_ng_template_14_ng_container_6_span_8_Template, 1, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SetRelationComponent_ng_template_14_ng_container_6_span_9_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SetRelationComponent_ng_template_14_ng_container_6_span_10_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SetRelationComponent_ng_template_14_ng_container_6_mat_option_11_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r22.JobTaskDetail.get("codeOfPract").value == null ? null : ctx_r22.JobTaskDetail.get("codeOfPract").value.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r22.JobTaskDetail.get("codeOfPract").value == null ? null : ctx_r22.JobTaskDetail.get("codeOfPract").value.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r22.JobTaskDetail.get("codeOfPract").value == null ? null : ctx_r22.JobTaskDetail.get("codeOfPract").value.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r22.allCodeOfPract);
} }
function SetRelationComponent_ng_template_14_ng_container_7_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r59._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", parameter_r59.title, " ");
} }
function SetRelationComponent_ng_template_14_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Residule Risk Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SetRelationComponent_ng_template_14_ng_container_7_mat_option_7_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r23.resiRiskLevelData);
} }
function SetRelationComponent_ng_template_14_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function SetRelationComponent_ng_template_14_ng_container_9_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 34);
} }
function SetRelationComponent_ng_template_14_ng_container_9_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetRelationComponent_ng_template_14_ng_container_9_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetRelationComponent_ng_template_14_ng_container_9_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r66._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", parameter_r66.title, " ");
} }
function SetRelationComponent_ng_template_14_ng_container_9_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_ng_template_14_ng_container_9_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r67.setRelation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Set ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetRelationComponent_ng_template_14_ng_container_9_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_ng_template_14_ng_container_9_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r69.setRelation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetRelationComponent_ng_template_14_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Person Responsible");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SetRelationComponent_ng_template_14_ng_container_9_span_8_Template, 1, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SetRelationComponent_ng_template_14_ng_container_9_span_9_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SetRelationComponent_ng_template_14_ng_container_9_span_10_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SetRelationComponent_ng_template_14_ng_container_9_mat_option_11_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SetRelationComponent_ng_template_14_ng_container_9_button_14_Template, 2, 0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SetRelationComponent_ng_template_14_ng_container_9_button_15_Template, 2, 0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r25.JobTaskDetail.get("personResp").value == null ? null : ctx_r25.JobTaskDetail.get("personResp").value.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r25.JobTaskDetail.get("personResp").value == null ? null : ctx_r25.JobTaskDetail.get("personResp").value.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r25.JobTaskDetail.get("personResp").value == null ? null : ctx_r25.JobTaskDetail.get("personResp").value.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r25.staff);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r25.jobTask == null ? null : ctx_r25.jobTask.set));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r25.jobTask == null ? null : ctx_r25.jobTask.set);
} }
function SetRelationComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SetRelationComponent_ng_template_14_ng_container_0_Template, 12, 4, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SetRelationComponent_ng_template_14_ng_container_1_Template, 12, 4, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SetRelationComponent_ng_template_14_ng_container_2_Template, 12, 4, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SetRelationComponent_ng_template_14_ng_container_3_Template, 12, 4, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SetRelationComponent_ng_template_14_ng_container_4_Template, 8, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SetRelationComponent_ng_template_14_ng_container_5_Template, 12, 4, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SetRelationComponent_ng_template_14_ng_container_6_Template, 12, 4, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SetRelationComponent_ng_template_14_ng_container_7_Template, 8, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SetRelationComponent_ng_template_14_ng_container_8_Template, 11, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SetRelationComponent_ng_template_14_ng_container_9_Template, 16, 6, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_ng_template_14_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r71.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_ng_template_14_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r73.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r15 = ctx.name;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r15.toLowerCase() == "HighRisk Construction".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r15.toLowerCase() == "PPE".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r15.toLowerCase() == "Licence".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r15.toLowerCase() == "Identify Hazards".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r15.toLowerCase() == "Risk Level".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r15.toLowerCase() == "Control Action Required".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r15.toLowerCase() == "Code of Practice".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r15.toLowerCase() == "Residule Risk Level".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r15.toLowerCase() == "Chemical related Task".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r15.toLowerCase() == "Person Responsible".toLowerCase());
} }
const _c1 = function () { return ["/admin/confiLogi/setLogic"]; };
class SetRelationComponent {
    constructor(route, dialog, router, fb, logicalFormInfo) {
        this.route = route;
        this.dialog = dialog;
        this.router = router;
        this.fb = fb;
        this.logicalFormInfo = logicalFormInfo;
        this.jobTask = null;
        this.highRiskConstructionData = [];
        this.PPESelectionData = [];
        this.licenseAndQual = [];
        this.allHazards = [];
        this.allContrlActReq = [];
        this.licenceByTradecat = [];
        this.resiRiskLevelData = [];
        this.riskLevelData = [];
        this.staff = [];
        this.allCodeOfPract = [];
        this.isLinear = false;
        this.jobTaskId = null;
        this.stepperList = [
            {
                name: 'HighRisk Construction',
                i: 1,
                code: 'highRisk'
            },
            {
                name: 'PPE',
                i: 0,
                code: 'ppe'
            },
            {
                name: 'Licence',
                i: 0,
                code: 'licence'
            },
            {
                name: 'Identify Hazards',
                i: 0,
                code: 'identifyHazards'
            },
            {
                name: 'Risk Level',
                i: 0,
                code: 'riskLevel'
            },
            {
                name: 'Control Action Required',
                i: 0,
                code: 'ctrlActreq'
            },
            {
                name: 'Code of Practice',
                i: 0,
                code: 'codeOfPract'
            },
            {
                name: 'Residule Risk Level',
                i: 0,
                code: 'resRiskLevel'
            },
            // {
            //   name:'Code of Practice',
            //   i:0,
            //    code:'codeOfPract'
            // },
            {
                name: 'Chemical related Task',
                i: 0,
                code: ''
            },
            {
                name: 'Person Responsible',
                i: 0,
                code: 'perResbl'
            }
        ];
        this.count = 0;
    }
    ngOnInit() {
        this.JobTaskDetail = this.fb.group({
            highRiskConstr: [],
            PPE: [],
            codeOfPract: [],
            LicenceCat: [],
            identifyHazrds: [],
            contrActReq: [],
            riskLevel: [],
            residualRiskL: [],
            personResp: [],
            chemical: [],
        });
        this.route.queryParams.subscribe((id) => {
            console.log(id);
            this.jobTaskId = id.id;
            this.logicalFormInfo.getJobtaskById(id.id).subscribe((res) => {
                var _a;
                this.jobTask = res.data;
                console.log('this.jobTask ', this.jobTask);
                this.getLicenceByTradeCat(this.jobTask.tradeCategoryId);
                if (this.jobTask.set == true) {
                    this.JobTaskDetail.patchValue({
                        highRiskConstr: this.jobTask.risk,
                        PPE: this.jobTask.PPE,
                        codeOfPract: this.jobTask.codeOfPractice,
                        LicenceCat: this.jobTask.licence,
                        identifyHazrds: this.jobTask.identifyHazard,
                        contrActReq: this.jobTask.controlActionRequired,
                        riskLevel: this.jobTask.riskLevel,
                        residualRiskL: this.jobTask.residualRisk,
                        personResp: this.jobTask.staff,
                        chemical: this.jobTask.chemical,
                    });
                }
                if (((_a = this.jobTask) === null || _a === void 0 ? void 0 : _a.chemical) === 'YES')
                    this.JobTaskDetail.get('chemical').setValue('YES');
                else
                    this.JobTaskDetail.get('chemical').setValue('NO');
            });
        });
        this.getAllHighRisk();
        this.getAllPPE();
        this.getAllHazard();
        this.getAllContrActReq();
        this.getAllStaff();
        this.getAllResidualRiskLevel();
        this.getAllRiskLevel();
        this.getAllCodeOfPractice();
    }
    getAllResidualRiskLevel() {
        this.logicalFormInfo.getAllResidual().subscribe((res) => {
            //  console.log('this.resiRiskLevelData', res.data);
            this.resiRiskLevelData = res.data;
        });
    }
    getAllRiskLevel() {
        this.logicalFormInfo.getAllRiskLevel().subscribe((res) => {
            //console.log('this.riskLevelData', res.data);
            this.riskLevelData = res.data;
        });
    }
    getAllStaff() {
        this.logicalFormInfo.getAllStaff().subscribe((res) => {
            console.log(res);
            this.staff = res.data;
        });
    }
    getAllHighRisk() {
        this.logicalFormInfo.getAllRisk().subscribe((res) => {
            //console.log('Risk=>', res);
            this.highRiskConstructionData = res.data;
        });
    }
    getAllPPE() {
        this.logicalFormInfo.getAllPPE().subscribe((res) => {
            //  console.log('PPE=>', res);
            this.PPESelectionData = res.data;
        });
    }
    getAllCodeOfPractice() {
        this.logicalFormInfo.getAllCOP().subscribe((res) => {
            //console.log('codeOfPractice=>', res);
            this.allCodeOfPract = res.data;
        });
    }
    getAllHazard() {
        this.logicalFormInfo.getAllHazards().subscribe((res) => {
            //   console.log('getAllHazards=>', res);
            this.allHazards = res.data;
        });
    }
    getAllContrActReq() {
        this.logicalFormInfo.getAllContrlActReq().subscribe((res) => {
            //  console.log('getAllHazards=>', res);
            this.allContrlActReq = res.data;
        });
    }
    getLicenceByTradeCat(id) {
        console.log('getLicenceByTradeCat', id);
        this.logicalFormInfo.getLicenceByTradeCat(id).subscribe((res) => {
            //   console.log('getAllLicenceCat=>', res);
            this.licenceByTradecat = res.data.licenceData;
        });
    }
    setRelation() {
        console.log(this.JobTaskDetail.value);
        let allContrlActReqTitle = [];
        let temp1 = this.JobTaskDetail.get('contrActReq').value;
        if (temp1 != null) {
            this.allContrlActReq.forEach(element1 => {
                temp1.forEach(element2 => {
                    if (element1._id === element2) {
                        let data = {
                            title: element1.title,
                            id: element1._id
                        };
                        allContrlActReqTitle.push(data);
                    }
                });
            });
        }
        let allHazardsTitle = [];
        let temp2 = this.JobTaskDetail.get('identifyHazrds').value;
        if (temp2 != null) {
            this.allHazards.forEach(element1 => {
                temp2.forEach(element2 => {
                    if (element1._id === element2) {
                        let data = {
                            title: element1.title,
                            id: element1._id
                        };
                        allHazardsTitle.push(data);
                    }
                });
            });
        }
        let allCOPTitle = [];
        let temp3 = this.JobTaskDetail.get('codeOfPract').value;
        if (temp3 != null) {
            this.allCodeOfPract.forEach(element1 => {
                temp3.forEach(element2 => {
                    if (element1._id === element2) {
                        let data = {
                            title: element1.title,
                            id: element1._id
                        };
                        allCOPTitle.push(data);
                    }
                });
            });
        }
        let staffTitle = [];
        let temp4 = this.JobTaskDetail.get('personResp').value;
        if (temp4 != null) {
            console.log(temp4);
            this.staff.forEach(element1 => {
                temp4.forEach(element2 => {
                    if (element1._id === element2) {
                        let data = {
                            title: element1.title,
                            id: element1._id
                        };
                        staffTitle.push(data);
                    }
                });
            });
        }
        ;
        let data = {
            title: this.jobTask.title,
            risk: this.JobTaskDetail.get('highRiskConstr').value || [],
            codeOfPractice: this.JobTaskDetail.get('codeOfPract').value || [],
            PPE: this.JobTaskDetail.get('PPE').value || [],
            tradeCategoryId: this.jobTask.tradeCategoryId,
            licence: this.JobTaskDetail.get('LicenceCat').value || [],
            identifyHazard: this.JobTaskDetail.get('identifyHazrds').value || [],
            controlActionRequired: this.JobTaskDetail.get('contrActReq').value || [],
            riskLevel: this.JobTaskDetail.get('riskLevel').value,
            residualRisk: this.JobTaskDetail.get('residualRiskL').value,
            staff: this.JobTaskDetail.get('personResp').value,
            chemical: this.JobTaskDetail.get('chemical').value,
            allHazardsTitle: allHazardsTitle,
            allContrlActReqTitle: allContrlActReqTitle,
            allCOPTitle: allCOPTitle,
            staffTitle: staffTitle,
            set: true,
        };
        console.log('send data', data);
        this.logicalFormInfo
            .updateJobTask(data, this.jobTaskId)
            .subscribe((res) => {
            console.log('resJob Task=>', res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Relation set successfully',
                showConfirmButton: false,
                timer: 1200,
            });
            this.router.navigate(['/admin/confiLogi/setLogic']);
        });
    }
    addItem(type) {
        let temp = {
            type: type,
            tradeCategoryId: this.jobTask.tradeCategoryId,
        };
        if (type === 'licence') {
            temp = {
                type: type,
                tradeCategoryId: this.jobTask.tradeCategoryId,
            };
        }
        else {
            temp = {
                type: type,
                tradeCategoryId: '',
            };
        }
        const dialogRef = this.dialog.open(_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_0__["AddItemComponent"], {
            width: '550px',
            // height:'50%',
            data: temp,
        });
        dialogRef.afterClosed().subscribe((result) => {
            switch (result) {
                case 'highRisk': {
                    let data = this.JobTaskDetail.get('highRiskConstr').value;
                    this.getAllHighRisk();
                    this.JobTaskDetail.get('highRiskConstr').patchValue(data);
                    break;
                }
                case 'ppe': {
                    let data = this.JobTaskDetail.get('PPE').value;
                    this.getAllPPE();
                    this.JobTaskDetail.get('PPE').patchValue(data);
                    break;
                }
                case 'codeOfPract': {
                    let data = this.JobTaskDetail.get('codeOfPract').value;
                    this.getAllCodeOfPractice();
                    this.JobTaskDetail.get('codeOfPract').patchValue(data);
                    break;
                }
                case 'licence': {
                    let data = this.JobTaskDetail.get('LicenceCat').value;
                    this.getLicenceByTradeCat(this.jobTask.tradeCategoryId);
                    this.JobTaskDetail.get('LicenceCat').patchValue(data);
                    break;
                }
                case 'identifyHazards': {
                    let data = this.JobTaskDetail.get('identifyHazrds').value;
                    this.getAllHazard();
                    this.JobTaskDetail.get('identifyHazrds').patchValue(data);
                    break;
                }
                case 'riskLevel': {
                    let data = this.JobTaskDetail.get('riskLevel').value;
                    this.getAllRiskLevel();
                    this.JobTaskDetail.get('riskLevel').patchValue(data);
                    break;
                }
                case 'ctrlActreq': {
                    let data = this.JobTaskDetail.get('contrActReq').value;
                    this.getAllContrActReq();
                    this.JobTaskDetail.get('contrActReq').patchValue(data);
                    break;
                }
                case 'resRiskLevel': {
                    let data = this.JobTaskDetail.get('residualRiskL').value;
                    this.getAllResidualRiskLevel();
                    this.JobTaskDetail.get('residualRiskL').patchValue(data);
                    break;
                }
                case 'perResbl': {
                    let data = this.JobTaskDetail.get('personResp').value;
                    this.getAllStaff();
                    this.JobTaskDetail.get('personResp').patchValue(data);
                    break;
                }
            }
            console.log('The dialog was closed');
        });
    }
    prev() {
        if (this.count != this.stepperList.length + 1 && this.count != 0) {
            this.count--;
            this.stepperList.map(x => {
                x.i = 0;
            });
            this.stepperList[this.count].i = 1;
        }
    }
    next() {
        if (this.count != this.stepperList.length - 1) {
            this.count++;
            this.stepperList.map(x => {
                x.i = 0;
            });
            this.stepperList[this.count].i = 1;
        }
    }
    handleClick(index) {
        console.log(index);
        this.count = index;
        this.stepperList.map(x => {
            x.i = 0;
        });
        this.stepperList[this.count].i = 1;
    }
}
SetRelationComponent.ɵfac = function SetRelationComponent_Factory(t) { return new (t || SetRelationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_6__["LogicalFormInfoService"])); };
SetRelationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SetRelationComponent, selectors: [["app-set-relation"]], decls: 16, vars: 6, consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "ml-2"], [1, ""], [1, "row"], [1, "col-md-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills", "nav-pills-custom"], ["class", "nav-link mb-3 p-3 shadow", "id", "v-pills-home-tab", "data-toggle", "pill", "role", "tab", "aria-controls", "v-pills-home", "aria-selected", "true", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "col-md-9"], ["id", "v-pills-tabContent", 1, "tab-content"], ["class", "tab-pane fade shadow rounded bg-white p-5", "id", "v-pills-home", "role", "tabpanel", "aria-labelledby", "v-pills-home-tab", 3, "active", "show", 4, "ngFor", "ngForOf"], ["let", "", "class", "my-auto", 3, "formGroup"], ["test", ""], ["id", "v-pills-home-tab", "data-toggle", "pill", "role", "tab", "aria-controls", "v-pills-home", "aria-selected", "true", 1, "nav-link", "mb-3", "p-3", "shadow", 3, "click"], [1, "fa", "fa-user-circle-o", "mr-2"], [1, "font-weight-bold", "small", "text-uppercase"], ["id", "v-pills-home", "role", "tabpanel", "aria-labelledby", "v-pills-home-tab", 1, "tab-pane", "fade", "shadow", "rounded", "bg-white", "p-5"], [1, "font-italic", "mb-4"], ["class", "material-icons ml-3 my-auto p-0", 3, "click", 4, "ngIf"], [1, "font-italic", "text-muted", "mb-2"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "material-icons", "ml-3", "my-auto", "p-0", 3, "click"], [4, "ngIf"], [1, "buttons"], ["mat-icon-button", "", 3, "click"], [1, "fas", "fa-arrow-left", 2, "font-size", "25px"], [1, "fas", "fa-arrow-right", 2, "font-size", "25px"], [1, "row", "justify-content-center", 2, "margin-top", "auto"], [1, "col-7"], ["appearance", "fill", 1, "container"], [1, "text-center"], ["formControlName", "highRiskConstr", "multiple", ""], ["class", "example-additional-selection", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "example-additional-selection"], [3, "value"], [1, "row", "justify-content-center"], ["formControlName", "PPE", "multiple", ""], ["formControlName", "LicenceCat", "multiple", ""], ["formControlName", "identifyHazrds", "multiple", ""], ["formControlName", "riskLevel"], ["formControlName", "contrActReq", "multiple", ""], ["formControlName", "codeOfPract", "multiple", ""], ["formControlName", "residualRiskL"], [1, "col-7", "text-center"], [1, "form-check", "form-check-inline"], ["type", "radio", "value", "YES", "formControlName", "chemical", 1, "form-check-input"], ["for", "inlineRadio1", 1, "form-check-label"], ["type", "radio", "value", "NO", "formControlName", "chemical", 1, "form-check-input"], ["for", "inlineRadio2", 1, "form-check-label"], [1, "row", "justify-content-center", "mt-3"], [1, "col-6"], ["formControlName", "personResp", "multiple", ""], [1, "col-1", "my-auto"], [1, "text-center", "mt-3"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"]], template: function SetRelationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SetRelationComponent_p_10_Template, 4, 3, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SetRelationComponent_div_13_Template, 7, 10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SetRelationComponent_ng_template_14_Template, 15, 10, "ng-template", 11, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Job Task :\u00A0", ctx.jobTask == null ? null : ctx.jobTask.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stepperList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stepperList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.JobTaskDetail);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]], styles: ["@import 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css';\n@import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';\n.nav-pills-custom[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #aaa;\n  background: #fff;\n  position: relative;\n}\n.nav-pills-custom[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #45b649;\n  background: #fff;\n}\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n@media (min-width: 992px) {\n  .nav-pills-custom[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::before {\n    content: \"\";\n    display: block;\n    border-top: 8px solid transparent;\n    border-left: 10px solid #fff;\n    border-bottom: 8px solid transparent;\n    position: absolute;\n    top: 50%;\n    right: -10px;\n    transform: translateY(-50%);\n    opacity: 0;\n  }\n}\n.nav-pills-custom[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\nbody[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: linear-gradient(to left, #dce35b, #45b649);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNldC1yZWxhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXUSw4RkFBQTtBQUNBLHdGQUFBO0FBRVI7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVhKO0FBY0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFYSjtBQWNBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FBWEo7QUFlQSwyQ0FBQTtBQUNBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGlDQUFBO0lBQ0EsNEJBQUE7SUFDQSxvQ0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFlBQUE7SUFDQSwyQkFBQTtJQUNBLFVBQUE7RUFaTjtBQUNGO0FBZUE7RUFDSSxVQUFBO0FBYko7QUFrQkE7RUFDSSxpQkFBQTtFQUNBLHNEQUFBO0FBZkoiLCJmaWxlIjoic2V0LXJlbGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmV4YW1wbGUtYWRkaXRpb25hbC1zZWxlY3Rpb24ge1xyXG4vLyAgICAgb3BhY2l0eTogMC43NTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4vLyAgIH1cclxuLy8gICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4vLyAgIH1cclxuQGltcG9ydCAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvdHdpdHRlci1ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuQGltcG9ydCAnaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJztcclxuXHJcbi5uYXYtcGlsbHMtY3VzdG9tIC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogI2FhYTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5uYXYtcGlsbHMtY3VzdG9tIC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgY29sb3I6ICM0NWI2NDk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uYnV0dG9uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuXHJcbi8qIEFkZCBpbmRpY2F0b3IgYXJyb3cgZm9yIHRoZSBhY3RpdmUgdGFiICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLm5hdi1waWxscy1jdXN0b20gLm5hdi1saW5rOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2LXBpbGxzLWN1c3RvbSAubmF2LWxpbmsuYWN0aXZlOjpiZWZvcmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcblxyXG5ib2R5IHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNkY2UzNWIsICM0NWI2NDkpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SetRelationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-set-relation',
                templateUrl: './set-relation.component.html',
                styleUrls: ['./set-relation.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_6__["LogicalFormInfoService"] }]; }, null); })();


/***/ }),

/***/ "L2b9":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/confi-logi/hazard-treatment/add-hazard-relation/add-hazard-relation.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AddHazardRelationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHazardRelationComponent", function() { return AddHazardRelationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");








function AddHazardRelationComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rating_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rating_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rating_r4.name);
} }
function AddHazardRelationComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", action_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](action_r5.name);
} }
function AddHazardRelationComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddHazardRelationComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.setRelation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Set");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddHazardRelationComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddHazardRelationComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.setRelation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/admin/confiLogi/setHazard"]; };
class AddHazardRelationComponent {
    constructor(route, fb, logicalFormInfo, router) {
        this.route = route;
        this.fb = fb;
        this.logicalFormInfo = logicalFormInfo;
        this.router = router;
        this.hazard = null;
        this.hazardId = null;
        this.isLinear = false;
        this.Consequences = [
            { name: '1-Insignificant', value: 1 },
            { name: '2-Moderate', value: 2 },
            { name: '4-Minor', value: 4 },
            { name: '3-Major', value: 3 },
            { name: '5-Catastrophic', value: 5 },
        ];
        this.Likelihood = [
            { name: '1-Insignificant', value: 1 },
            { name: '3-Moderate', value: 3 },
            { name: '2-Minor', value: 2 },
            { name: '4-Major', value: 4 },
            { name: '5-Catastrophic', value: 5 }
        ];
        this.RiskRating = [
            { name: 'Low', value: 'low' },
            { name: 'Medium', value: 'medium' },
            { name: 'High', value: 'high' },
        ];
        this.ActionRequired = [
            { name: 'Immediately', value: 'immediately' },
            { name: 'Today', value: 'today' },
            { name: 'This week', value: 'thisWeek' },
            { name: 'This Month', value: 'thisMonth' },
        ];
    }
    ngOnInit() {
        this.setHazard = this.fb.group({
            // Consequence: ['', Validators.required],
            // Likelihood: ['', Validators.required],
            riskRating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            actionRequired: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.route
            .queryParams
            .subscribe((id) => {
            console.log(id);
            this.hazardId = id.id;
            this.logicalFormInfo.getHazardTreatmentById(this.hazardId).subscribe((res) => {
                console.log("getHazardTreatmentById=>", res);
                this.hazard = res.data;
                console.log("hazard", this.hazard);
                if (this.hazard.set == true) {
                    this.setHazard.patchValue({
                        riskRating: this.hazard.riskRating,
                        actionRequired: this.hazard.actionRequired,
                    });
                }
            });
        });
    }
    setRelation() {
        console.log(this.setHazard.value);
        let data = {
            set: true,
            title: this.hazard.title,
            // Consequence: this.setHazard.get('Consequence').value,
            // Likelihood: this.setHazard.get('Likelihood').value,
            riskRating: this.setHazard.get('riskRating').value,
            actionRequired: this.setHazard.get('actionRequired').value,
        };
        console.log("data=>", data);
        console.log("hazardId=>", this.hazardId);
        this.logicalFormInfo.updateHazardTreatmentRelation(this.hazardId, data).subscribe((res) => {
            console.log('updateStates=>', res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Updated successfully',
                showConfirmButton: false,
                timer: 1200,
            });
            this.router.navigate(['/admin/confiLogi/setHazard']);
        });
    }
}
AddHazardRelationComponent.ɵfac = function AddHazardRelationComponent_Factory(t) { return new (t || AddHazardRelationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddHazardRelationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddHazardRelationComponent, selectors: [["app-add-hazard-relation"]], decls: 19, vars: 8, consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "ml-2"], [1, "row", 3, "formGroup"], [1, "col-6"], ["aria-label", "Default select example", "formControlName", "riskRating", 1, "form-select", "form-control"], ["value", "", "selected", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Default select example", "formControlName", "actionRequired", 1, "form-select", "form-control"], [1, "ml-3", "mt-3"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [3, "value"], [1, "btn", "btn-primary", 3, "click"]], template: function AddHazardRelationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Select Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddHazardRelationComponent_option_10_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Action Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddHazardRelationComponent_option_15_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddHazardRelationComponent_button_17_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddHazardRelationComponent_button_18_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hazrad Treatment Relation :\u00A0", ctx.hazard == null ? null : ctx.hazard.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.setHazard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.RiskRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ActionRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.hazard == null ? null : ctx.hazard.set));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hazard == null ? null : ctx.hazard.set);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n\n.mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFkZC1oYXphcmQtcmVsYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7QUFFSjs7QUFDRTtFQUNFLGdCQUFBO0FBRUoiLCJmaWxlIjoiYWRkLWhhemFyZC1yZWxhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWFkZGl0aW9uYWwtc2VsZWN0aW9uIHtcclxuICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICB9XHJcbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddHazardRelationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-hazard-relation',
                templateUrl: './add-hazard-relation.component.html',
                styleUrls: ['./add-hazard-relation.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "M3dG":
/*!***********************************************************************************!*\
  !*** ./src/app/views/confi-logi/set-logic/add-job-task/add-job-task.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddJobTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddJobTaskComponent", function() { return AddJobTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");











function AddJobTaskComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Job Task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddJobTaskComponent_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Job Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddJobTaskComponent_div_8_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tradeCat_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tradeCat_r7._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tradeCat_r7.title);
} }
function AddJobTaskComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddJobTaskComponent_div_8_option_7_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.addjob);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.licenceCatAll);
} }
function AddJobTaskComponent_div_9_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tradeCat_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tradeCat_r9._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tradeCat_r9.title);
} }
function AddJobTaskComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddJobTaskComponent_div_9_option_7_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.jobTaskDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.licenceCatAll);
} }
function AddJobTaskComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddJobTaskComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onFormSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r4.jobTaskDetails.valid);
} }
function AddJobTaskComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddJobTaskComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.addForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r5.addjob.valid);
} }
class AddJobTaskComponent {
    constructor(fb, router, logicalFormInfo, dialogRef, data) {
        this.fb = fb;
        this.router = router;
        this.logicalFormInfo = logicalFormInfo;
        this.dialogRef = dialogRef;
        this.data = data;
        this.Edit = false;
        this.Add = true;
        this.licenceCatAll = [];
        this.dataRec = data;
        console.log("datarec", this.dataRec);
        this.addjob = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tradeCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ngOnInit() {
        this.getAllCategories();
        if (this.Id != "") {
            this.Eddit();
        }
        else {
            this.Added();
        }
    }
    Added() {
        if (this.Edit == true) {
            this.Edit = false;
            this.Add = true;
            this.addjob = this.fb.group({
                title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                tradeCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        }
        else {
            this.Add = true;
        }
    }
    Eddit() {
        if (this.Add == true) {
            this.Add = false;
            this.Edit = true;
            this.jobTaskDetails = this.fb.group({
                title: [this.dataRec.title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                tradeCategoryId: [this.dataRec.tradeCategoryId._id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        }
        else {
            this.Edit = true;
        }
    }
    getAllCategories() {
        this.logicalFormInfo.getAllLicenceCat().subscribe((res) => {
            console.log('getAllLicenceCat=>', res);
            this.licenceCatAll = res.data;
        });
    }
    onFormSubmit() {
        console.log(this.jobTaskDetails.get('title').value);
        let data = {
            title: this.jobTaskDetails.get('title').value,
            tradeCategoryId: this.jobTaskDetails.get('tradeCategoryId').value
        };
        console.log("edit", data);
        this.logicalFormInfo.updateJobTask(data, this.dataRec._id).subscribe((data) => {
            console.log('JOBTask=>', data);
            this.dialogRef.close('true');
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'JobTask Updated successfully',
                showConfirmButton: false,
                timer: 1200,
            });
        }, (err) => { console.error(err); });
    }
    addForm() {
        // let data = {
        //   title: this.addjob.get('title').value,
        //   tradeCategoryId:this.addjob.get('tradeCategoryId').value
        // };
        console.log("addForm", this.addjob.value);
        this.logicalFormInfo.addJobTask(this.addjob.value).subscribe((data) => {
            console.log('JOBTask=>', data);
            this.dialogRef.close('true');
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Parameter Added successfully',
                showConfirmButton: false,
                timer: 1200,
            });
        }, (err) => { console.error(err); });
    }
    close() {
        this.dialogRef.close();
    }
}
AddJobTaskComponent.ɵfac = function AddJobTaskComponent_Factory(t) { return new (t || AddJobTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
AddJobTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddJobTaskComponent, selectors: [["app-add-job-task"]], decls: 15, vars: 6, consts: [[1, "container", "px-4", "py-4", "bg-white"], ["mat-dialog-title", "", 1, "dialog-title"], [4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", 2, "font-size", "30px", 3, "click"], ["aria-hidden", "true"], ["class", "row ", 3, "formGroup", 4, "ngIf"], [1, "col-md-2"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], [1, "row", 3, "formGroup"], [1, "col-6"], ["type", "text", "formControlName", "title", "id", "title", 1, "form-control", "sign"], ["aria-label", "Default select example", "formControlName", "tradeCategoryId", 1, "form-select", "form-control"], ["value", "", "selected", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]], template: function AddJobTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddJobTaskComponent_h2_2_Template, 2, 0, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddJobTaskComponent_h2_3_Template, 2, 0, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddJobTaskComponent_Template_button_click_4_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddJobTaskComponent_div_8_Template, 8, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddJobTaskComponent_div_9_Template, 8, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddJobTaskComponent_button_13_Template, 2, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddJobTaskComponent_button_14_Template, 2, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataRec);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Add);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Add);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".dialog-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFkZC1qb2ItdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiYWRkLWpvYi10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddJobTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-job-task',
                templateUrl: './add-job-task.component.html',
                styleUrls: ['./add-job-task.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "THzD":
/*!*******************************************************************************!*\
  !*** ./src/app/views/confi-logi/set-logic/test-logic/test-logic.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TestLogicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestLogicComponent", function() { return TestLogicComponent; });
/* harmony import */ var _set_relation_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../set-relation/add-item/add-item.component */ "wKjp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ "hzfI");














function TestLogicComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestLogicComponent_p_5_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.handleClick(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.stepperList[i_r5].i);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.name);
} }
function TestLogicComponent_div_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { name: a0 }; };
function TestLogicComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TestLogicComponent_div_8_ng_container_4_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.stepperList[i_r9].i)("show", ctx_r1.stepperList[i_r9].i);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, item_r8.name));
} }
function TestLogicComponent_ng_template_9_ng_container_0_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 30);
} }
function TestLogicComponent_ng_template_9_ng_container_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestLogicComponent_ng_template_9_ng_container_0_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestLogicComponent_ng_template_9_ng_container_0_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r27._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", parameter_r27.title, "");
} }
function TestLogicComponent_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "HighRiskConstruction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TestLogicComponent_ng_template_9_ng_container_0_span_9_Template, 1, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TestLogicComponent_ng_template_9_ng_container_0_span_10_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TestLogicComponent_ng_template_9_ng_container_0_span_11_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TestLogicComponent_ng_template_9_ng_container_0_mat_option_12_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r12.JobTaskDetail.get("highRiskConstr").value == null ? null : ctx_r12.JobTaskDetail.get("highRiskConstr").value.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r12.JobTaskDetail.get("highRiskConstr").value == null ? null : ctx_r12.JobTaskDetail.get("highRiskConstr").value.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r12.JobTaskDetail.get("highRiskConstr").value == null ? null : ctx_r12.JobTaskDetail.get("highRiskConstr").value.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.highRiskConstructionData);
} }
function TestLogicComponent_ng_template_9_ng_container_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 30);
} }
function TestLogicComponent_ng_template_9_ng_container_1_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestLogicComponent_ng_template_9_ng_container_1_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestLogicComponent_ng_template_9_ng_container_1_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r32._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", parameter_r32.title, " ");
} }
function TestLogicComponent_ng_template_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "PPE selection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TestLogicComponent_ng_template_9_ng_container_1_span_9_Template, 1, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TestLogicComponent_ng_template_9_ng_container_1_span_10_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TestLogicComponent_ng_template_9_ng_container_1_span_11_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TestLogicComponent_ng_template_9_ng_container_1_mat_option_12_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r13.JobTaskDetail.get("PPE").value == null ? null : ctx_r13.JobTaskDetail.get("PPE").value.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r13.JobTaskDetail.get("PPE").value == null ? null : ctx_r13.JobTaskDetail.get("PPE").value.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r13.JobTaskDetail.get("PPE").value == null ? null : ctx_r13.JobTaskDetail.get("PPE").value.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.PPESelectionData);
} }
function TestLogicComponent_ng_template_9_ng_container_2_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 30);
} }
function TestLogicComponent_ng_template_9_ng_container_2_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestLogicComponent_ng_template_9_ng_container_2_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestLogicComponent_ng_template_9_ng_container_2_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r37._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", parameter_r37.title, " ");
} }
function TestLogicComponent_ng_template_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Licences");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TestLogicComponent_ng_template_9_ng_container_2_span_9_Template, 1, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TestLogicComponent_ng_template_9_ng_container_2_span_10_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TestLogicComponent_ng_template_9_ng_container_2_span_11_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TestLogicComponent_ng_template_9_ng_container_2_mat_option_12_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r14.JobTaskDetail.get("LicenceCat").value == null ? null : ctx_r14.JobTaskDetail.get("LicenceCat").value.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r14.JobTaskDetail.get("LicenceCat").value == null ? null : ctx_r14.JobTaskDetail.get("LicenceCat").value.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r14.JobTaskDetail.get("LicenceCat").value == null ? null : ctx_r14.JobTaskDetail.get("LicenceCat").value.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.licenceByTradecat);
} }
function TestLogicComponent_ng_template_9_ng_container_3_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 30);
} }
function TestLogicComponent_ng_template_9_ng_container_3_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestLogicComponent_ng_template_9_ng_container_3_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestLogicComponent_ng_template_9_ng_container_3_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r42._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", parameter_r42.title, " ");
} }
function TestLogicComponent_ng_template_9_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Identify Hazards");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TestLogicComponent_ng_template_9_ng_container_3_span_9_Template, 1, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TestLogicComponent_ng_template_9_ng_container_3_span_10_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TestLogicComponent_ng_template_9_ng_container_3_span_11_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TestLogicComponent_ng_template_9_ng_container_3_mat_option_12_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r15.JobTaskDetail.get("identifyHazrds").value == null ? null : ctx_r15.JobTaskDetail.get("identifyHazrds").value.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r15.JobTaskDetail.get("identifyHazrds").value == null ? null : ctx_r15.JobTaskDetail.get("identifyHazrds").value.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r15.JobTaskDetail.get("identifyHazrds").value == null ? null : ctx_r15.JobTaskDetail.get("identifyHazrds").value.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.allHazards);
} }
function TestLogicComponent_ng_template_9_ng_container_4_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r44._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", parameter_r44.title, " ");
} }
function TestLogicComponent_ng_template_9_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Risk Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TestLogicComponent_ng_template_9_ng_container_4_mat_option_8_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r16.riskLevelData);
} }
function TestLogicComponent_ng_template_9_ng_container_5_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 30);
} }
function TestLogicComponent_ng_template_9_ng_container_5_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestLogicComponent_ng_template_9_ng_container_5_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestLogicComponent_ng_template_9_ng_container_5_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r49._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", parameter_r49.title, " ");
} }
function TestLogicComponent_ng_template_9_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Control Action Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TestLogicComponent_ng_template_9_ng_container_5_span_9_Template, 1, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TestLogicComponent_ng_template_9_ng_container_5_span_10_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TestLogicComponent_ng_template_9_ng_container_5_span_11_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TestLogicComponent_ng_template_9_ng_container_5_mat_option_12_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r17.JobTaskDetail.get("contrActReq").value == null ? null : ctx_r17.JobTaskDetail.get("contrActReq").value.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r17.JobTaskDetail.get("contrActReq").value == null ? null : ctx_r17.JobTaskDetail.get("contrActReq").value.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r17.JobTaskDetail.get("contrActReq").value == null ? null : ctx_r17.JobTaskDetail.get("contrActReq").value.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r17.allContrlActReq);
} }
function TestLogicComponent_ng_template_9_ng_container_6_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 30);
} }
function TestLogicComponent_ng_template_9_ng_container_6_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestLogicComponent_ng_template_9_ng_container_6_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestLogicComponent_ng_template_9_ng_container_6_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r54._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", parameter_r54.title, " ");
} }
function TestLogicComponent_ng_template_9_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Code of Practice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TestLogicComponent_ng_template_9_ng_container_6_span_9_Template, 1, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TestLogicComponent_ng_template_9_ng_container_6_span_10_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TestLogicComponent_ng_template_9_ng_container_6_span_11_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TestLogicComponent_ng_template_9_ng_container_6_mat_option_12_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r18.JobTaskDetail.get("codeOfPract").value == null ? null : ctx_r18.JobTaskDetail.get("codeOfPract").value.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r18.JobTaskDetail.get("codeOfPract").value == null ? null : ctx_r18.JobTaskDetail.get("codeOfPract").value.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r18.JobTaskDetail.get("codeOfPract").value == null ? null : ctx_r18.JobTaskDetail.get("codeOfPract").value.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r18.allCodeOfPract);
} }
function TestLogicComponent_ng_template_9_ng_container_7_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r56._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", parameter_r56.title, " ");
} }
function TestLogicComponent_ng_template_9_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Residule Risk Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TestLogicComponent_ng_template_9_ng_container_7_mat_option_8_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r19.resiRiskLevelData);
} }
function TestLogicComponent_ng_template_9_ng_container_8_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Code of Practice");
} }
function TestLogicComponent_ng_template_9_ng_container_8_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 30);
} }
function TestLogicComponent_ng_template_9_ng_container_8_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestLogicComponent_ng_template_9_ng_container_8_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestLogicComponent_ng_template_9_ng_container_8_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r62._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", parameter_r62.title, " ");
} }
function TestLogicComponent_ng_template_9_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TestLogicComponent_ng_template_9_ng_container_8_ng_template_1_Template, 1, 0, "ng-template", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Code of Practice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestLogicComponent_ng_template_9_ng_container_8_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r63.addItem("codeOfPract"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Code of Practice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TestLogicComponent_ng_template_9_ng_container_8_span_16_Template, 1, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, TestLogicComponent_ng_template_9_ng_container_8_span_17_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TestLogicComponent_ng_template_9_ng_container_8_span_18_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, TestLogicComponent_ng_template_9_ng_container_8_mat_option_19_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r20.JobTaskDetail.get("codeOfPract").value == null ? null : ctx_r20.JobTaskDetail.get("codeOfPract").value.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r20.JobTaskDetail.get("codeOfPract").value == null ? null : ctx_r20.JobTaskDetail.get("codeOfPract").value.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r20.JobTaskDetail.get("codeOfPract").value == null ? null : ctx_r20.JobTaskDetail.get("codeOfPract").value.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r20.allCodeOfPract);
} }
function TestLogicComponent_ng_template_9_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function TestLogicComponent_ng_template_9_ng_container_10_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", person_r68._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", person_r68.title, " ");
} }
function TestLogicComponent_ng_template_9_ng_container_10_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestLogicComponent_ng_template_9_ng_container_10_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r69.setRelation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Set ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestLogicComponent_ng_template_9_ng_container_10_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestLogicComponent_ng_template_9_ng_container_10_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r71.setRelation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestLogicComponent_ng_template_9_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Person Responsible");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TestLogicComponent_ng_template_9_ng_container_10_mat_option_8_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TestLogicComponent_ng_template_9_ng_container_10_button_11_Template, 2, 0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TestLogicComponent_ng_template_9_ng_container_10_button_12_Template, 2, 0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r22.staff);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r22.jobTask == null ? null : ctx_r22.jobTask.set));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r22.jobTask == null ? null : ctx_r22.jobTask.set);
} }
function TestLogicComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TestLogicComponent_ng_template_9_ng_container_0_Template, 14, 4, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TestLogicComponent_ng_template_9_ng_container_1_Template, 14, 4, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TestLogicComponent_ng_template_9_ng_container_2_Template, 14, 4, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TestLogicComponent_ng_template_9_ng_container_3_Template, 14, 4, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TestLogicComponent_ng_template_9_ng_container_4_Template, 10, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TestLogicComponent_ng_template_9_ng_container_5_Template, 14, 4, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TestLogicComponent_ng_template_9_ng_container_6_Template, 14, 4, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TestLogicComponent_ng_template_9_ng_container_7_Template, 10, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TestLogicComponent_ng_template_9_ng_container_8_Template, 23, 4, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TestLogicComponent_ng_template_9_ng_container_9_Template, 13, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TestLogicComponent_ng_template_9_ng_container_10_Template, 13, 3, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestLogicComponent_ng_template_9_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r73.prev(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestLogicComponent_ng_template_9_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r75.next(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r11 = ctx.name;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r11.toLowerCase() == "HighRisk Construction".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r11.toLowerCase() == "PPE".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r11.toLowerCase() == "Licence".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r11.toLowerCase() == "Identify Hazards".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r11.toLowerCase() == "Risk Level".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r11.toLowerCase() == "Control Action Required".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r11.toLowerCase() == "Code of Practice".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r11.toLowerCase() == "Residule Risk Level".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r11.toLowerCase() == "Code of Practice".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r11.toLowerCase() == "Chemical related Task".toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", name_r11.toLowerCase() == "Person Responsible".toLowerCase());
} }
class TestLogicComponent {
    constructor(route, dialog, router, fb, logicalFormInfo) {
        this.route = route;
        this.dialog = dialog;
        this.router = router;
        this.fb = fb;
        this.logicalFormInfo = logicalFormInfo;
        this.jobTask = null;
        this.highRiskConstructionData = [];
        this.PPESelectionData = [];
        this.licenseAndQual = [];
        this.allHazards = [];
        this.allContrlActReq = [];
        this.licenceByTradecat = [];
        this.resiRiskLevelData = [];
        this.riskLevelData = [];
        this.staff = [];
        this.allCodeOfPract = [];
        this.isLinear = false;
        this.jobTaskId = null;
        this.stepperList = [
            {
                name: 'HighRisk Construction',
                i: 1,
                ref: 'test'
            },
            {
                name: 'PPE',
                i: 0,
                ref: 'test2'
            },
            {
                name: 'Licence',
                i: 0,
            },
            {
                name: 'Identify Hazards',
                i: 0,
            },
            {
                name: 'Risk Level',
                i: 0,
            },
            {
                name: 'Control Action Required',
                i: 0,
            },
            {
                name: 'Code of Practice',
                i: 0,
            },
            {
                name: 'Residule Risk Level',
                i: 0,
            },
            {
                name: 'Code of Practice',
                i: 0,
            },
            {
                name: 'Chemical related Task',
                i: 0,
            },
            {
                name: 'Person Responsible',
                i: 0,
            }
        ];
        this.count = 0;
        this.ctx = { estimate: 'this.totalEstimate' };
    }
    ngOnInit() {
        this.JobTaskDetail = this.fb.group({
            highRiskConstr: [''],
            PPE: [''],
            codeOfPract: [''],
            LicenceCat: [''],
            identifyHazrds: [''],
            contrActReq: [''],
            riskLevel: [''],
            residualRiskL: [''],
            personResp: [''],
            chemical: [],
        });
        this.route.queryParams.subscribe((id) => {
            console.log(id);
            this.jobTaskId = id.id;
            this.logicalFormInfo.getJobtaskById(id.id).subscribe((res) => {
                var _a;
                this.jobTask = res.data;
                console.log('this.jobTask ', this.jobTask);
                this.getLicenceByTradeCat(this.jobTask.tradeCategoryId);
                if (this.jobTask.set == true) {
                    this.JobTaskDetail.patchValue({
                        highRiskConstr: this.jobTask.risk,
                        PPE: this.jobTask.PPE,
                        codeOfPract: this.jobTask.PPE,
                        LicenceCat: this.jobTask.licence,
                        identifyHazrds: this.jobTask.identifyHazard,
                        contrActReq: this.jobTask.controlActionRequired,
                        riskLevel: this.jobTask.riskLevel,
                        residualRiskL: this.jobTask.residualRisk,
                        personResp: this.jobTask.staffId,
                        chemical: this.jobTask.chemical,
                    });
                }
                if (((_a = this.jobTask) === null || _a === void 0 ? void 0 : _a.chemical) === 'YES')
                    this.JobTaskDetail.get('chemical').setValue('YES');
                else
                    this.JobTaskDetail.get('chemical').setValue('NO');
            });
        });
        this.getAllHighRisk();
        this.getAllPPE();
        this.getAllHazard();
        this.getAllContrActReq();
        this.getAllStaff();
        this.getAllResidualRiskLevel();
        this.getAllRiskLevel();
        this.getAllCodeOfPractice();
    }
    getAllResidualRiskLevel() {
        this.logicalFormInfo.getAllResidual().subscribe((res) => {
            console.log('this.resiRiskLevelData', res.data);
            this.resiRiskLevelData = res.data;
        });
    }
    getAllRiskLevel() {
        this.logicalFormInfo.getAllRiskLevel().subscribe((res) => {
            console.log('this.riskLevelData', res.data);
            this.riskLevelData = res.data;
        });
    }
    getAllStaff() {
        this.logicalFormInfo.getAllStaff().subscribe((res) => {
            console.log(res);
            this.staff = res.data;
        });
    }
    getAllHighRisk() {
        this.logicalFormInfo.getAllRisk().subscribe((res) => {
            console.log('Risk=>', res);
            this.highRiskConstructionData = res.data;
        });
    }
    getAllPPE() {
        this.logicalFormInfo.getAllPPE().subscribe((res) => {
            console.log('PPE=>', res);
            this.PPESelectionData = res.data;
        });
    }
    getAllCodeOfPractice() {
        this.logicalFormInfo.getAllCOP().subscribe((res) => {
            console.log('codeOfPractice=>', res);
            this.allCodeOfPract = res.data;
        });
    }
    getAllHazard() {
        this.logicalFormInfo.getAllHazards().subscribe((res) => {
            console.log('getAllHazards=>', res);
            this.allHazards = res.data;
        });
    }
    getAllContrActReq() {
        this.logicalFormInfo.getAllContrlActReq().subscribe((res) => {
            console.log('getAllHazards=>', res);
            this.allContrlActReq = res.data;
        });
    }
    getLicenceByTradeCat(id) {
        console.log('getLicenceByTradeCat', id);
        this.logicalFormInfo.getLicenceByTradeCat(id).subscribe((res) => {
            console.log('getAllLicenceCat=>', res);
            this.licenceByTradecat = res.data.licenceData;
        });
    }
    setRelation() {
        console.log(this.JobTaskDetail.value);
        let allContrlActReqTitle = [];
        let temp1 = this.JobTaskDetail.get('contrActReq').value;
        this.allContrlActReq.forEach(element1 => {
            temp1.forEach(element2 => {
                if (element1._id === element2) {
                    allContrlActReqTitle.push(element1.title);
                }
            });
        });
        let allHazardsTitle = [];
        let temp2 = this.JobTaskDetail.get('identifyHazrds').value;
        this.allHazards.forEach(element1 => {
            temp2.forEach(element2 => {
                if (element1._id === element2) {
                    allHazardsTitle.push(element1.title);
                }
            });
        });
        let allCOPTitle = [];
        let temp3 = this.JobTaskDetail.get('codeOfPract').value;
        this.allCodeOfPract.forEach(element1 => {
            temp3.forEach(element2 => {
                if (element1._id === element2) {
                    allCOPTitle.push(element1.title);
                }
            });
        });
        let data = {
            title: this.jobTask.title,
            risk: this.JobTaskDetail.get('highRiskConstr').value,
            PPE: this.JobTaskDetail.get('PPE').value,
            tradeCategoryId: this.jobTask.tradeCategoryId,
            licence: this.JobTaskDetail.get('LicenceCat').value,
            identifyHazard: this.JobTaskDetail.get('identifyHazrds').value,
            controlActionRequired: this.JobTaskDetail.get('contrActReq').value,
            riskLevel: this.JobTaskDetail.get('riskLevel').value,
            residualRisk: this.JobTaskDetail.get('residualRiskL').value,
            staffId: this.JobTaskDetail.get('personResp').value,
            chemical: this.JobTaskDetail.get('chemical').value,
            set: true,
        };
        console.log('send data', data);
        this.logicalFormInfo
            .updateJobTask(data, this.jobTaskId)
            .subscribe((res) => {
            console.log('resJob Task=>', res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Relation set successfully',
                showConfirmButton: false,
                timer: 1200,
            });
            this.router.navigate(['/admin/confiLogi/setLogic']);
        });
    }
    addItem(type) {
        let temp = {
            type: type,
            tradeCategoryId: this.jobTask.tradeCategoryId,
        };
        if (type === 'licence') {
            temp = {
                type: type,
                tradeCategoryId: this.jobTask.tradeCategoryId,
            };
        }
        else {
            temp = {
                type: type,
                tradeCategoryId: '',
            };
        }
        const dialogRef = this.dialog.open(_set_relation_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_0__["AddItemComponent"], {
            width: '550px',
            // height:'50%',
            data: temp,
        });
        dialogRef.afterClosed().subscribe((result) => {
            switch (result) {
                case 'highRisk': {
                    let data = this.JobTaskDetail.get('highRiskConstr').value;
                    this.getAllHighRisk();
                    this.JobTaskDetail.get('highRiskConstr').patchValue(data);
                    break;
                }
                case 'ppe': {
                    let data = this.JobTaskDetail.get('PPE').value;
                    this.getAllPPE();
                    this.JobTaskDetail.get('PPE').patchValue(data);
                    break;
                }
                case 'codeOfPract': {
                    let data = this.JobTaskDetail.get('codeOfPract').value;
                    this.getAllCodeOfPractice();
                    this.JobTaskDetail.get('codeOfPract').patchValue(data);
                    break;
                }
                case 'licence': {
                    let data = this.JobTaskDetail.get('LicenceCat').value;
                    this.getLicenceByTradeCat(this.jobTask.tradeCategoryId);
                    this.JobTaskDetail.get('LicenceCat').patchValue(data);
                    break;
                }
                case 'identifyHazards': {
                    let data = this.JobTaskDetail.get('identifyHazrds').value;
                    this.getAllHazard();
                    this.JobTaskDetail.get('identifyHazrds').patchValue(data);
                    break;
                }
                case 'riskLevel': {
                    let data = this.JobTaskDetail.get('riskLevel').value;
                    this.getAllRiskLevel();
                    this.JobTaskDetail.get('riskLevel').patchValue(data);
                    break;
                }
                case 'ctrlActreq': {
                    let data = this.JobTaskDetail.get('contrActReq').value;
                    this.getAllContrActReq();
                    this.JobTaskDetail.get('contrActReq').patchValue(data);
                    break;
                }
                case 'resRiskLevel': {
                    let data = this.JobTaskDetail.get('residualRiskL').value;
                    this.getAllResidualRiskLevel();
                    this.JobTaskDetail.get('residualRiskL').patchValue(data);
                    break;
                }
                case 'perResbl': {
                    let data = this.JobTaskDetail.get('personResp').value;
                    this.getAllStaff();
                    this.JobTaskDetail.get('personResp').patchValue(data);
                    break;
                }
            }
            console.log('The dialog was closed');
        });
    }
    prev(item) {
        if (this.count != this.stepperList.length + 1) {
            this.count--;
            this.stepperList.map(x => {
                x.i = 0;
            });
            this.stepperList[this.count].i = 1;
        }
    }
    next(item) {
        if (this.count != this.stepperList.length - 1) {
            this.count++;
            this.stepperList.map(x => {
                x.i = 0;
            });
            this.stepperList[this.count].i = 1;
        }
    }
    handleClick(index) {
        console.log(index);
        this.count = index;
        this.stepperList.map(x => {
            x.i = 0;
        });
        this.stepperList[this.count].i = 1;
    }
}
TestLogicComponent.ɵfac = function TestLogicComponent_Factory(t) { return new (t || TestLogicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_6__["LogicalFormInfoService"])); };
TestLogicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestLogicComponent, selectors: [["app-test-logic"]], decls: 11, vars: 3, consts: [[1, ""], [1, "row"], [1, "col-md-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills", "nav-pills-custom"], ["class", "nav-link mb-3 p-3 shadow", "id", "v-pills-home-tab", "data-toggle", "pill", "role", "tab", "aria-controls", "v-pills-home", "aria-selected", "true", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "col-md-9"], ["id", "v-pills-tabContent", 1, "tab-content"], ["class", "tab-pane fade shadow rounded bg-white p-5", "id", "v-pills-home", "role", "tabpanel", "aria-labelledby", "v-pills-home-tab", 3, "active", "show", 4, "ngFor", "ngForOf"], ["let", "", "class", "my-auto", 3, "formGroup"], ["test", ""], ["id", "v-pills-home-tab", "data-toggle", "pill", "role", "tab", "aria-controls", "v-pills-home", "aria-selected", "true", 1, "nav-link", "mb-3", "p-3", "shadow", 3, "click"], [1, "fa", "fa-user-circle-o", "mr-2"], [1, "font-weight-bold", "small", "text-uppercase"], ["id", "v-pills-home", "role", "tabpanel", "aria-labelledby", "v-pills-home-tab", 1, "tab-pane", "fade", "shadow", "rounded", "bg-white", "p-5"], [1, "font-italic", "mb-4"], [1, "font-italic", "text-muted", "mb-2"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [1, "buttons"], ["mat-icon-button", "", 3, "click"], [1, "fas", "fa-arrow-left", 2, "font-size", "25px"], [1, "fas", "fa-arrow-right", 2, "font-size", "25px"], [1, "row", "justify-content-center", 2, "margin-top", "auto"], [1, "col-1", "my-auto"], [1, "col-7"], ["appearance", "fill", 1, "container"], [1, "text-center"], ["formControlName", "highRiskConstr", "multiple", ""], ["class", "example-additional-selection", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "example-additional-selection"], [3, "value"], [1, "row", "justify-content-center"], ["formControlName", "PPE", "multiple", ""], ["formControlName", "LicenceCat", "multiple", ""], ["formControlName", "identifyHazrds", "multiple", ""], ["formControlName", "riskLevel"], ["formControlName", "contrActReq", "multiple", ""], ["formControlName", "codeOfPract", "multiple", ""], ["formControlName", "residualRiskL"], ["matStepLabel", ""], [1, "text-center", "mt-3"], [1, "material-icons", "ml-3", 3, "click"], ["matStepperPrevious", "", 1, "btn"], [1, "fas", "fa-arrow-left"], ["matStepperNext", "", 1, "btn"], [1, "fas", "fa-arrow-right"], [1, "col-7", "text-center"], [1, "form-check", "form-check-inline"], ["type", "radio", "value", "YES", "formControlName", "chemical", 1, "form-check-input"], ["for", "inlineRadio1", 1, "form-check-label"], ["type", "radio", "value", "NO", "formControlName", "chemical", 1, "form-check-input"], ["for", "inlineRadio2", 1, "form-check-label"], [1, "row", "justify-content-center", "mt-3"], [1, "col-6"], ["formControlName", "personResp"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"]], template: function TestLogicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TestLogicComponent_p_5_Template, 4, 3, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TestLogicComponent_div_8_Template, 6, 9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TestLogicComponent_ng_template_9_Template, 16, 11, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stepperList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stepperList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.JobTaskDetail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepLabel"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperNext"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]], styles: ["@import 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css';\n@import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';\n.nav-pills-custom[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #aaa;\n  background: #fff;\n  position: relative;\n}\n.nav-pills-custom[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #45b649;\n  background: #fff;\n}\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n@media (min-width: 992px) {\n  .nav-pills-custom[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::before {\n    content: \"\";\n    display: block;\n    border-top: 8px solid transparent;\n    border-left: 10px solid #fff;\n    border-bottom: 8px solid transparent;\n    position: absolute;\n    top: 50%;\n    right: -10px;\n    transform: translateY(-50%);\n    opacity: 0;\n  }\n}\n.nav-pills-custom[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\nbody[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: linear-gradient(to left, #dce35b, #45b649);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRlc3QtbG9naWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEZBQUE7QUFDQSx3RkFBQTtBQUVSO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQUFKO0FBSUEsMkNBQUE7QUFDQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGNBQUE7SUFDQSxpQ0FBQTtJQUNBLDRCQUFBO0lBQ0Esb0NBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSxVQUFBO0VBRE47QUFDRjtBQUlBO0VBQ0ksVUFBQTtBQUZKO0FBT0E7RUFDSSxpQkFBQTtFQUNBLHNEQUFBO0FBSkoiLCJmaWxlIjoidGVzdC1sb2dpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3R3aXR0ZXItYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbkBpbXBvcnQgJ2h0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyc7XHJcblxyXG4ubmF2LXBpbGxzLWN1c3RvbSAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmF2LXBpbGxzLWN1c3RvbSAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjNDViNjQ5O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcblxyXG4vKiBBZGQgaW5kaWNhdG9yIGFycm93IGZvciB0aGUgYWN0aXZlIHRhYiAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5uYXYtcGlsbHMtY3VzdG9tIC5uYXYtbGluazo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2ZmZjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufVxyXG5cclxuLm5hdi1waWxscy1jdXN0b20gLm5hdi1saW5rLmFjdGl2ZTo6YmVmb3JlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG5cclxuYm9keSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZGNlMzViLCAjNDViNjQ5KTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TestLogicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-test-logic',
                templateUrl: './test-logic.component.html',
                styleUrls: ['./test-logic.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_6__["LogicalFormInfoService"] }]; }, null); })();


/***/ }),

/***/ "aVfA":
/*!*********************************************************************************!*\
  !*** ./src/app/views/confi-logi/hazard-treatment/hazard-treatment.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HazardTreatmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HazardTreatmentComponent", function() { return HazardTreatmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/services/set-title.service */ "yZxC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");














const _c0 = ["risk"];
function HazardTreatmentComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HazardTreatmentComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r8.index);
} }
function HazardTreatmentComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HazardTreatmentComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.title, " ");
} }
function HazardTreatmentComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Set ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HazardTreatmentComponent_td_12_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Set");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HazardTreatmentComponent_td_12_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HazardTreatmentComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HazardTreatmentComponent_td_12_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const element_r10 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.setRelation_2(element_r10._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HazardTreatmentComponent_td_12_button_1_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HazardTreatmentComponent_td_12_button_2_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r10.set);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r10.set);
} }
function HazardTreatmentComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function HazardTreatmentComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
const _c1 = function () { return [20]; };
class HazardTreatmentComponent {
    constructor(fb, logicalFormInfo, setTitle, router) {
        this.fb = fb;
        this.logicalFormInfo = logicalFormInfo;
        this.setTitle = setTitle;
        this.router = router;
        this.hazardData = [];
        this.ELEMENT_DATA = [];
        this.displayedColumns = ['index', 'title', 'edit'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    ngOnInit() {
        this.setTitle.setTitle('WHS-Set Hazard Relation');
        this.getAllHazardTreatmentRelation();
    }
    onFormSubmit() {
        console.log(this.setStatesDetail);
    }
    getAllHazardTreatmentRelation() {
        this.logicalFormInfo.getAllHazardTreatmentRelation().subscribe((res) => {
            console.log('getAllHazardTreatmentRelation=>', res);
            this.hazardData = res.data;
            this.hazardData.forEach((element, index) => {
                element.index = index + 1; //adding index
            });
            this.ELEMENT_DATA = this.hazardData;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    setRelation_2(id) {
        this.router.navigate(['/admin/confiLogi/setHazardRelation'], { queryParams: { id: id } });
    }
}
HazardTreatmentComponent.ɵfac = function HazardTreatmentComponent_Factory(t) { return new (t || HazardTreatmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__["SetTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
HazardTreatmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HazardTreatmentComponent, selectors: [["app-hazard-treatment"]], viewQuery: function HazardTreatmentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.Risk = _t);
    } }, decls: 16, vars: 5, consts: [[1, "ml-2"], [1, ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "edit"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-cell", "", 3, "click"], ["mat-stroked-button", "", "color", "primary", "class", "myBtn", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 1, "myBtn"], ["mat-header-row", ""], ["mat-row", ""]], template: function HazardTreatmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Set Hazard's Relation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HazardTreatmentComponent_th_5_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HazardTreatmentComponent_td_6_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HazardTreatmentComponent_th_8_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HazardTreatmentComponent_td_9_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HazardTreatmentComponent_th_11_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HazardTreatmentComponent_td_12_Template, 3, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HazardTreatmentComponent_tr_13_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HazardTreatmentComponent_tr_14_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.myBtn[_ngcontent-%COMP%] {\n  width: 75px;\n}\n\n  .mat-sort-header-container {\n  margin-left: 47% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGF6YXJkLXRyZWF0bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFDRTtFQUNFLFdBQUE7QUFFSjs7QUFBRTtFQUNFLDJCQUFBO0FBR0oiLCJmaWxlIjoiaGF6YXJkLXRyZWF0bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubXlCdG57XHJcbiAgICB3aWR0aDogNzVweDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NyUgIWltcG9ydGFudDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HazardTreatmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hazard-treatment',
                templateUrl: './hazard-treatment.component.html',
                styleUrls: ['./hazard-treatment.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"] }, { type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__["SetTitleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }], Risk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['risk']
        }] }); })();


/***/ }),

/***/ "ao8m":
/*!**********************************************************!*\
  !*** ./src/app/views/confi-logi/confi-logi.component.ts ***!
  \**********************************************************/
/*! exports provided: ConfiLogiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiLogiComponent", function() { return ConfiLogiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class ConfiLogiComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConfiLogiComponent.ɵfac = function ConfiLogiComponent_Factory(t) { return new (t || ConfiLogiComponent)(); };
ConfiLogiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfiLogiComponent, selectors: [["app-confi-logi"]], decls: 1, vars: 0, template: function ConfiLogiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maS1sb2dpLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfiLogiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confi-logi',
                templateUrl: './confi-logi.component.html',
                styleUrls: ['./confi-logi.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bXbX":
/*!**************************************************************************************!*\
  !*** ./src/app/views/confi-logi/job-number/create-job-no/create-job-no.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CreateJobNoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateJobNoComponent", function() { return CreateJobNoComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");








function CreateJobNoComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, item_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.siteName);
} }
function CreateJobNoComponent_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r4._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.title);
} }
function CreateJobNoComponent_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, item_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.customerName);
} }
class CreateJobNoComponent {
    constructor(dialogRef, data, logicalFormInfoService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.logicalFormInfoService = logicalFormInfoService;
        this.fb = fb;
        this.allSites = [];
        this.allCustomers = [];
        this.allState = [];
    }
    ngAfterViewInit() {
        this.addJobNumberForm.get('siteName').valueChanges.subscribe(res => {
            // console.log(JSON.parse(res))
            res = JSON.parse(res);
            this.addJobNumberForm.get('streetNumber').setValue(res.streetNumber);
            this.addJobNumberForm.get('streetAddress').setValue(res.streetAddress);
            this.addJobNumberForm.get('suburb').setValue(res.suburb);
            this.addJobNumberForm.get('state').setValue(res.stateId._id);
        });
        this.addJobNumberForm.get('customerName').valueChanges.subscribe(res => {
            var _a, _b;
            // console.log(JSON.parse(res))
            res = JSON.parse(res);
            this.addJobNumberForm.get('customerContact').setValue(res.customerContact);
            this.addJobNumberForm.get('customerContactPhone').setValue((_a = res.contacts[0]) === null || _a === void 0 ? void 0 : _a.phone);
            this.addJobNumberForm.get('customerEmail').setValue((_b = res.contacts[0]) === null || _b === void 0 ? void 0 : _b.email);
            // this.addJobNumberForm.get('customerEmail').setValue(res.ABN)
        });
    }
    ngOnInit() {
        this.addJobNumberForm = this.fb.group({
            siteName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            streetNumber: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            streetAddress: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            suburb: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            state: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            customerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            customerContact: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            customerContactPhone: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            customerEmail: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.logicalFormInfoService.getAllSite().subscribe((res) => {
            this.allSites = res.data;
            console.log(res.data);
        });
        this.logicalFormInfoService.getAllCustomer().subscribe((res) => {
            this.allCustomers = res.data;
        });
        this.getAllStates();
    }
    get f() {
        return this.addJobNumberForm.controls;
    }
    onSubmit() {
        console.log(this.addJobNumberForm.value);
        let data;
        data = {
            arrObj: [{
                    customerContact: this.f.customerContact.value,
                    customerContactPhone: this.f.customerContactPhone.value,
                    customerEmail: this.f.customerEmail.value,
                    customerName: JSON.parse(this.f.customerName.value).customerName,
                    siteName: JSON.parse(this.f.siteName.value).siteName,
                    stateId: this.f.state.value,
                    streetAddress: this.f.streetAddress.value,
                    streetNumber: this.f.streetNumber.value,
                    suburb: this.f.suburb.value,
                }]
        };
        console.log(data);
        this.logicalFormInfoService.addJobNumber(data).subscribe((res) => {
            console.log(res);
            this.dialogRef.close('success');
        });
    }
    setSite(item) {
        console.log(item);
        this.addJobNumberForm.get('streetNumber').setValue(item.streetNumber);
        this.addJobNumberForm.get('streetAddress').setValue(item.streetAddress);
        this.addJobNumberForm.get('suburb').setValue(item.suburb);
        this.addJobNumberForm.get('state').setValue(item.stateId._id);
    }
    setCustomer(item) {
        var _a, _b;
        this.addJobNumberForm.get('customerContact').setValue(item.customerContact);
        this.addJobNumberForm.get('customerContactPhone').setValue((_a = item.contacts[0]) === null || _a === void 0 ? void 0 : _a.phone);
        this.addJobNumberForm.get('customerEmail').setValue((_b = item.contacts[0]) === null || _b === void 0 ? void 0 : _b.email);
        //   this.addJobNumberForm.get('customerEmail').setValue(item.ABN)
    }
    close() {
        this.dialogRef.close();
    }
    getAllStates() {
        this.logicalFormInfoService.getAllStates().subscribe((res) => {
            console.log('getAllStates=>', res);
            this.allState = res.data;
        });
    }
}
CreateJobNoComponent.ɵfac = function CreateJobNoComponent_Factory(t) { return new (t || CreateJobNoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CreateJobNoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateJobNoComponent, selectors: [["app-create-job-no"]], decls: 56, vars: 5, consts: [[3, "formGroup"], ["mat-dialog-title", "", 1, "dialog-title"], ["type", "button", "aria-label", "Close", 1, "close", 2, "font-size", "25px", 3, "click"], ["aria-hidden", "true"], [1, "row"], [1, "my-3", "col-6"], ["for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "formControlName", "siteName", "id", "siteName", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "my-3", "col-2"], ["type", "text", "formControlName", "streetNumber", "id", "siteName", 1, "form-control"], [1, "my-3", "col-4"], ["type", "text", "formControlName", "streetAddress", "id", "siteName", 1, "form-control"], ["type", "text", "formControlName", "suburb", "id", "siteName", 1, "form-control"], ["for", "exampleFormControlInput1", 1, "form-label"], ["aria-label", "Default select example", "formControlName", "state", 1, "form-select", "form-control", "col"], ["selected", "", "hidden", ""], [1, "my-3", "col"], ["type", "text", "formControlName", "customerName", "id", "siteName", 1, "form-control"], ["type", "text", "id", "siteName", "formControlName", "customerContact", 1, "form-control"], ["type", "text", "id", "siteName", "formControlName", "customerContactPhone", 1, "form-control"], ["type", "text", "id", "siteName", "formControlName", "customerEmail", 1, "form-control"], [1, "btn", "btn-primary", 3, "disabled", "click"], [3, "value"]], template: function CreateJobNoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Create Job Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateJobNoComponent_Template_button_click_5_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Site Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CreateJobNoComponent_option_13_Template, 3, 4, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Street Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Street Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Suburb");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, CreateJobNoComponent_option_33_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, CreateJobNoComponent_option_39_Template, 3, 4, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Customer Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Customer Contact Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Customer Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateJobNoComponent_Template_button_click_54_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addJobNumberForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.allSites);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.allState);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.allCustomers);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.addJobNumberForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], styles: ["input[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\nabel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\n.sign[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid rgba(46, 105, 255, 0.5);\n  width: 500px;\n  border-radius: 5px;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.imgStyle[_ngcontent-%COMP%] {\n  border: 2px solid #2e69ff40;\n  border-radius: 10px;\n}\n\n.example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.dialog-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNyZWF0ZS1qb2Itbm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBRUY7O0FBQUE7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsNEJBQUE7QUFLRjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQU1GOztBQUpBO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQU9GOztBQUxBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBUUY7O0FBTkE7RUFDRSx1QkFBQTtBQVNGOztBQVBBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFVRjs7QUFSQTtFQUNFLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVdGOztBQVRBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0FBWUY7O0FBVEE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0FBWUY7O0FBVkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFhRjs7QUFYQTtFQUNFLFdBQUE7QUFjRjs7QUFaQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBZUYiLCJmaWxlIjoiY3JlYXRlLWpvYi1uby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0OmZvY3VzIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xyXG59XHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmZvcm0tY29udHJvbDpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiKDQ2IDEwNSAyNTUgLyAyNSUpO1xyXG59XHJcbmFiZWw6bm90KC5mb3JtLWNoZWNrLWxhYmVsKTpub3QoLmN1c3RvbS1maWxlLWxhYmVsKSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcclxufVxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg0NiwgMTA1LCAyNTUsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYig0NiAxMDUgMjU1IC8gMjUlKTtcclxufVxyXG4ucHQtMyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5mb3JtLUxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG59XHJcbi5zaWduIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnNpZ246aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzJlNjlmZjQwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNDYsIDEwNSwgMjU1LCAwLjI1KTtcclxufVxyXG5cclxuLmltZ1N0eWxlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMmU2OWZmNDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uZXhhbXBsZS1hZGRpdGlvbmFsLXNlbGVjdGlvbiB7XHJcbiAgb3BhY2l0eTogMC43NTtcclxuICBmb250LXNpemU6IDAuNzVlbTtcclxufVxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmRpYWxvZy10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CreateJobNoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-create-job-no',
                templateUrl: './create-job-no.component.html',
                styleUrls: ['./create-job-no.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__["LogicalFormInfoService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "bu9C":
/*!*******************************************************************!*\
  !*** ./src/app/views/confi-logi/set-logic/set-logic.component.ts ***!
  \*******************************************************************/
/*! exports provided: SetLogicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLogicComponent", function() { return SetLogicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/services/set-title.service */ "yZxC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
















const _c0 = ["risk"];
function SetLogicComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SetLogicComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r8.index);
} }
function SetLogicComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SetLogicComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pre", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r9.title, " ");
} }
function SetLogicComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Set ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SetLogicComponent_td_12_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Set");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SetLogicComponent_td_12_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SetLogicComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetLogicComponent_td_12_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const element_r10 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.setRelation_2(element_r10._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SetLogicComponent_td_12_button_1_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SetLogicComponent_td_12_button_2_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r10.set);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r10.set);
} }
function SetLogicComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
function SetLogicComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
const _c1 = function () { return [20]; };
class SetLogicComponent {
    constructor(fb, dialog, logicalFormInfo, setTitle, router) {
        this.fb = fb;
        this.dialog = dialog;
        this.logicalFormInfo = logicalFormInfo;
        this.setTitle = setTitle;
        this.router = router;
        this.allHazards = [];
        this.allContrlActReq = [];
        this.jobTaskData = [];
        this.highRiskData = [];
        this.PPESelectionData = [];
        this.codeOfPract = [];
        this.licenseAndQual = [];
        this.licenseAndQualificationData = [];
        this.licenceCatAll = [];
        this.highRiskConstructionData = [];
        this.task = [];
        this.riskLevel = '';
        this.residuleRiskL = '';
        this.PPEselection = [
            { label: 'Disposable dust mask', value: '' },
            { label: 'Dust Mas', value: '' },
            { label: 'Face shield', value: '' },
            { label: 'Full face respirator', value: '' },
            { label: 'Gttors', value: '' },
            { label: 'Half face respirator', value: '' },
            { label: 'Hard Hat', value: '' },
            { label: 'Hearing protection', value: '' },
            { label: 'High-Vis Clothing', value: '' },
            { label: 'Lock Out Tags', value: '' },
            { label: 'Long sleeve/Long pants', value: '' },
            { label: 'Out of Service Tags', value: '' },
            { label: 'Protective gloves', value: '' },
            { label: 'Rescue kit', value: '' },
            { label: 'Safety boots', value: '' },
            { label: 'Safety glasses', value: '' },
            { label: 'Sun Screen', value: '' },
            { label: 'torch', value: '' },
            { label: 'Wide Brim Hat', value: '' },
        ];
        this.licenseAndQualification = [
            { label: 'Open Cable Licence', value: '' },
            { label: 'White Card', value: '' },
            { label: 'EWP Licence', value: '' },
            { label: 'Working At Heights', value: '' },
            { label: 'Security Licence', value: '' },
            { label: 'Asbestos Awarness', value: '' },
            { label: 'Working In Confined Space', value: '' },
        ];
        this.highRiskConstruction2 = [
            {
                label: 'Working in or near trenches or shafts deeper than 1.5metres',
                value: '',
            },
            { label: 'Work in or near a confined space', value: '' },
            {
                label: 'Work in an area that may have a contaminated or flammable atmosphere',
                value: '',
            },
            { label: 'Working around or near mobile plant', value: '' },
            { label: 'Work with near or near asbestos', value: '' },
            { label: 'Working with hazardous substances', value: '' },
            { label: 'Working with or near tilt-up/precast concrete', value: '' },
            { label: 'Risk of falls higher than 2 metres', value: '' },
            {
                label: 'Working near on or adjacent to a road or rail corridor',
                value: '',
            },
            { label: 'Working on or near telecommunication tower', value: '' },
            { label: 'Working on or near telecommunication tower', value: '' },
            { label: 'Work near explosives', value: '' },
            {
                label: 'Work in or near water or other liquid that involves a risk of drowning',
                value: '',
            },
            { label: 'Demolition of load-bearing structure', value: '' },
            { label: 'Diving work', value: '' },
        ];
        this.PPEselection2 = [
            { label: 'Disposable dust mask', value: '' },
            { label: 'Dust Mas', value: '' },
            { label: 'Face shield', value: '' },
            { label: 'Full face respirator', value: '' },
            { label: 'Gttors', value: '' },
            { label: 'Half face respirator', value: '' },
            { label: 'Hard Hat', value: '' },
            { label: 'Hearing protection', value: '' },
            { label: 'High-Vis Clothing', value: '' },
            { label: 'Lock Out Tags', value: '' },
            { label: 'Long sleeve/Long pants', value: '' },
            { label: 'Out of Service Tags', value: '' },
            { label: 'Protective gloves', value: '' },
            { label: 'Rescue kit', value: '' },
            { label: 'Safety boots', value: '' },
            { label: 'Safety glasses', value: '' },
            { label: 'Sun Screen', value: '' },
            { label: 'torch', value: '' },
            { label: 'Wide Brim Hat', value: '' },
        ];
        this.ELEMENT_DATA = [];
        /////////////mat table////////////////
        this.displayedColumns = ['index', 'title', 'edit'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    ngOnInit() {
        this.setTitle.setTitle('WHS-Set Relation');
        // this.JobTaskDetail = this.fb.group({
        //   highRiskConstr: this.fb.array([]),
        //   PPE: this.fb.array([]),
        //   LicenceCat: this.fb.array([]),
        //   identifyHazrds: this.fb.array([]),
        //   contrActReq: this.fb.array([]),
        //   riskLevel: this.fb.array([]),
        //   residualRisk: this.fb.array([]),
        // });
        this.getJobTask();
        // this.getAllHighRisk();
        // this.getAllLicence();
        // this.getAllCategories();
        // this.getAllPPE();
        // this.getAllHazard();
        // this.getAllContrActReq();
    }
    // addActionHighRisk() {
    //   {
    //     this.highRiskFA().push(this.highRiskFG());
    //   }
    // }
    // addActionPPE() {
    //   {
    //     this.PPE_FA().push(this.PPE_FG());
    //   }
    // }
    // addActionLicnCat() {
    //   {
    //     this.licenceCatFA().push(this.licenceCatFG());
    //   }
    // }
    // addActionContrActReq() {
    //   {
    //     this.contrActReqFA().push(this.contrActReqFG());
    //   }
    // }
    // addActionIdentifyHazrds() {
    //   {
    //     this.identifyHazrdsFA().push(this.identifyHazrdsFG());
    //   }
    // }
    // addActionRiskLevel() {
    //   {
    //     this.riskLevelFA().push(this.riskLevelFG());
    //   }
    // }
    // addActionResiRiskLevel() {
    //   {
    //     this.residlRiskLevelFA().push(this.residlRiskLevelFG());
    //   }
    // }
    // addActionCOP() {
    //   {
    //     this.addCOP().push(this.newActionCOP());
    //   }
    // }
    // highRiskFA(): FormArray {
    //   return this.JobTaskDetail.get('highRiskConstr') as FormArray;
    // }
    // PPE_FA(): FormArray {
    //   return this.JobTaskDetail.get('PPE') as FormArray;
    // }
    // licenceCatFA(): FormArray {
    //   return this.JobTaskDetail.get('LicenceCat') as FormArray;
    // }
    // identifyHazrdsFA(): FormArray {
    //   return this.JobTaskDetail.get('identifyHazrds') as FormArray;
    // }
    // contrActReqFA(): FormArray {
    //   return this.JobTaskDetail.get('contrActReq') as FormArray;
    // }
    // addCOP(): FormArray {
    //   return this.JobTaskDetail.get('codeOfPract') as FormArray;
    // }
    // riskLevelFA(): FormArray {
    //   return this.JobTaskDetail.get('riskLevel') as FormArray;
    // }
    // residlRiskLevelFA(): FormArray {
    //   return this.JobTaskDetail.get('residualRisk') as FormArray;
    // }
    // highRiskFG(): FormGroup {
    //   return this.fb.group({
    //     highRiskArr: [''],
    //   });
    // }
    // PPE_FG(): FormGroup {
    //   return this.fb.group({
    //     ppeArr: [''],
    //   });
    // }
    // licenceCatFG(): FormGroup {
    //   return this.fb.group({
    //     licenceArr: [''],
    //   });
    // }
    // identifyHazrdsFG(): FormGroup {
    //   return this.fb.group({
    //     hazardsArr: [''],
    //   });
    // }
    // contrActReqFG(): FormGroup {
    //   return this.fb.group({
    //     contrActReqArr: [''],
    //   });
    // }
    // riskLevelFG(): FormGroup {
    //   return this.fb.group({
    //     riskLevel: [''],
    //   });
    // }
    // residlRiskLevelFG(): FormGroup {
    //   return this.fb.group({
    //     resiRiskLevel: [''],
    //   });
    // }
    // newActionCOP(): FormGroup {
    //   //code of practice
    //   return this.fb.group({
    //     copArr: [''],
    //   });
    // }
    onFormSubmit() {
        console.log(this.JobTaskDetail);
    }
    getJobTask() {
        this.logicalFormInfo.getAllJobtask().subscribe((res) => {
            console.log('jobTaskDetails=>', res);
            this.jobTaskData = res.data;
            this.jobTaskData.forEach((element, index) => {
                element.index = index + 1; //adding index
            });
            this.ELEMENT_DATA = this.jobTaskData;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            // this.jobTaskData.forEach((item,i) => {
            //   this.addActionHighRisk();
            //   this.addActionPPE();
            //   this.addActionLicnCat();
            //   this.addActionContrActReq();
            //   this.addActionIdentifyHazrds(); 
            //   this.addActionRiskLevel(); 
            //   this.addActionResiRiskLevel();   
            //   this.highRiskFA().controls[i].get('highRiskArr').setValue(item.risk);
            //   this.PPE_FA().controls[i].get('ppeArr').setValue(item.PPE);
            //   this.licenceCatFA().controls[i].get('licenceArr').setValue(item.licence);  
            //   this.identifyHazrdsFA().controls[i].get('hazardsArr').setValue(item.identifyHazard);
            //   this.contrActReqFA().controls[i].get('contrActReqArr').setValue(item.controlActionRequired);
            //   this.riskLevelFA().controls[i].get('riskLevel').setValue(item.riskLevel);
            //   this.residlRiskLevelFA().controls[i].get('resiRiskLevel').setValue(item.residualRisk);
            //   });
        });
    }
    getAllHighRisk() {
        this.logicalFormInfo.getAllRisk().subscribe((res) => {
            console.log('Risk=>', res);
            this.highRiskConstructionData = res.data;
        });
    }
    getAllPPE() {
        this.logicalFormInfo.getAllPPE().subscribe((res) => {
            console.log('PPE=>', res);
            this.PPESelectionData = res.data;
        });
    }
    getAllLicence() {
        this.logicalFormInfo.getAllLicence().subscribe((res) => {
            console.log('Licence=>', res);
            this.licenseAndQual = res.data;
        });
    }
    getAllHazard() {
        this.logicalFormInfo.getAllHazards().subscribe((res) => {
            console.log('getAllHazards=>', res);
            this.allHazards = res.data;
        });
    }
    getAllContrActReq() {
        this.logicalFormInfo.getAllContrlActReq().subscribe((res) => {
            console.log('getAllHazards=>', res);
            this.allContrlActReq = res.data;
        });
    }
    getAllCategories() {
        this.logicalFormInfo.getAllLicenceCat().subscribe((res) => {
            console.log('getAllLicenceCat=>', res);
            this.licenceCatAll = res.data;
        });
    }
    setRelation_2(id) {
        this.router.navigate(['/admin/confiLogi/setRelation'], { queryParams: { id: id } });
    }
    /* setRelation(title, id,i) {
   
       console.log('index', title);
       console.log('id', id);
       console.log('id', i);
   let risk = [],
   ppe=[],
   licence=[],
   identifyHazard=[],
   controlActionRequired=[];
     if(this.highRiskFA().controls[i].get('highRiskArr').value){
       this.highRiskFA().controls[i].get('highRiskArr').value.forEach(element => {
         risk.push(element._id)
       });
     }
     if(this.PPE_FA().controls[i].get('ppeArr').value){
       this.PPE_FA().controls[i].get('ppeArr').value.forEach(element => {
         ppe.push(element._id)
       });
     }
     if(this.licenceCatFA().controls[i].get('licenceArr').value){
       this.licenceCatFA().controls[i].get('licenceArr').value.forEach(element => {
         licence.push(element._id)
       });
     }
     if(this.identifyHazrdsFA().controls[i].get('hazardsArr').value){
       this.identifyHazrdsFA().controls[i].get('hazardsArr').value.forEach(element => {
         identifyHazard.push(element._id)
       });
     }
     if(this.contrActReqFA().controls[i].get('contrActReqArr').value){
       this.contrActReqFA().controls[i].get('contrActReqArr').value.forEach(element => {
         controlActionRequired.push(element._id)
       });
     }
   
       let data = {
         title: title,
         risk: this.highRiskFA().controls[i].get('highRiskArr').value,
         PPE: this.PPE_FA().controls[i].get('ppeArr').value,
         licence: this.licenceCatFA().controls[i].get('licenceArr').value,
         identifyHazard:this.identifyHazrdsFA().controls[i].get('hazardsArr').value,
         controlActionRequired: this.contrActReqFA().controls[i].get('contrActReqArr').value,
         riskLevel:this.riskLevelFA().controls[i].get('riskLevel').value ,
         residualRisk: this.residlRiskLevelFA().controls[i].get('resiRiskLevel').value,
         set:true
       };
       console.log(data);
   
       this.logicalFormInfo.updateJobTask(data,id).subscribe((res) => {
         console.log('resJob Task=>', res);
         this.getJobTask();
   
         Swal.fire({
           title: 'Relation set successfully',
           showConfirmButton: false,
           timer: 1200,
         });
       });
     } */
    categorySel(catArr) {
        this.licenseAndQualificationData = [];
        console.log(catArr);
        catArr.forEach((element) => {
            this.licenseAndQual.forEach((item) => {
                if (element === item.licenceCategoryId._id) {
                    this.licenseAndQualificationData.push(item);
                }
            });
        });
        console.log(' this.licenseAndQualificationData', this.licenseAndQualificationData);
    }
}
SetLogicComponent.ɵfac = function SetLogicComponent_Factory(t) { return new (t || SetLogicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_6__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
SetLogicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SetLogicComponent, selectors: [["app-set-logic"]], viewQuery: function SetLogicComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.Risk = _t);
    } }, decls: 16, vars: 5, consts: [[1, "ml-2"], [1, ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "edit"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "flex-start"], [2, "font-family", "Roboto, Helvetica Neue, sans-serif", "font-size", "14px"], ["mat-header-cell", ""], ["mat-cell", "", 3, "click"], ["class", "myBtn", "mat-stroked-button", "", "color", "primary", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 1, "myBtn"], ["mat-header-row", ""], ["mat-row", ""]], template: function SetLogicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Set Relation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SetLogicComponent_th_5_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SetLogicComponent_td_6_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SetLogicComponent_th_8_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SetLogicComponent_td_9_Template, 4, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SetLogicComponent_th_11_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SetLogicComponent_td_12_Template, 3, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SetLogicComponent_tr_13_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SetLogicComponent_tr_14_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.myBtn[_ngcontent-%COMP%] {\n  width: 75px;\n}\n\n  .mat-sort-header-container {\n  margin-left: 47% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2V0LWxvZ2ljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksV0FBQTtBQUpKOztBQU1FO0VBQ0UsV0FBQTtBQUhKOztBQUtFO0VBQ0UsMkJBQUE7QUFGSiIsImZpbGUiOiJzZXQtbG9naWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuc2Nyb2xsZXJ7XHJcbiAgIFxyXG4vLyAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4vLyAgICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4vLyB9XHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubXlCdG57XHJcbiAgICB3aWR0aDogNzVweDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NyUgIWltcG9ydGFudDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetLogicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-set-logic',
                templateUrl: './set-logic.component.html',
                styleUrls: ['./set-logic.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_6__["LogicalFormInfoService"] }, { type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], Risk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['risk']
        }] }); })();


/***/ }),

/***/ "il7X":
/*!***************************************************************!*\
  !*** ./src/app/views/confi-logi/confi-logi-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ConfiLogiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiLogiRoutingModule", function() { return ConfiLogiRoutingModule; });
/* harmony import */ var _set_logic_set_relation_set_relation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-logic/set-relation/set-relation.component */ "6ZYc");
/* harmony import */ var _job_number_job_number_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-number/job-number.component */ "zQXG");
/* harmony import */ var _set_logic_set_logic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-logic/set-logic.component */ "bu9C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _confi_logi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confi-logi.component */ "ao8m");
/* harmony import */ var _set_logic_add_job_task_add_job_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./set-logic/add-job-task/add-job-task.component */ "M3dG");
/* harmony import */ var _hazard_treatment_hazard_treatment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hazard-treatment/hazard-treatment.component */ "aVfA");
/* harmony import */ var _hazard_treatment_add_hazard_relation_add_hazard_relation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hazard-treatment/add-hazard-relation/add-hazard-relation.component */ "L2b9");











const routes = [
    { path: '', component: _confi_logi_component__WEBPACK_IMPORTED_MODULE_5__["ConfiLogiComponent"] },
    { path: 'setLogic', component: _set_logic_set_logic_component__WEBPACK_IMPORTED_MODULE_2__["SetLogicComponent"] },
    { path: 'setJobNumber', component: _job_number_job_number_component__WEBPACK_IMPORTED_MODULE_1__["JobNumberComponent"] },
    // { path: 'setRelation', component: TestLogicComponent },
    { path: 'setRelation', component: _set_logic_set_relation_set_relation_component__WEBPACK_IMPORTED_MODULE_0__["SetRelationComponent"] },
    { path: 'addTask', component: _set_logic_add_job_task_add_job_task_component__WEBPACK_IMPORTED_MODULE_6__["AddJobTaskComponent"] },
    { path: 'setHazard', component: _hazard_treatment_hazard_treatment_component__WEBPACK_IMPORTED_MODULE_7__["HazardTreatmentComponent"] },
    { path: 'setHazardRelation', component: _hazard_treatment_add_hazard_relation_add_hazard_relation_component__WEBPACK_IMPORTED_MODULE_8__["AddHazardRelationComponent"] }
];
class ConfiLogiRoutingModule {
}
ConfiLogiRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ConfiLogiRoutingModule });
ConfiLogiRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ConfiLogiRoutingModule_Factory(t) { return new (t || ConfiLogiRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ConfiLogiRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ConfiLogiRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wKjp":
/*!****************************************************************************************!*\
  !*** ./src/app/views/confi-logi/set-logic/set-relation/add-item/add-item.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-autosize */ "5eqV");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");











function AddItemComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add High Risk Construction parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddItemComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add PPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddItemComponent_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Licence ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddItemComponent_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Identify Hazards ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddItemComponent_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Risk Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddItemComponent_h2_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Control Action Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddItemComponent_h2_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Residual Risk");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddItemComponent_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Person Responsible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddItemComponent_h2_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Code of Practice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddItemComponent {
    constructor(fb, logicalFormInfo, dialogRef, data) {
        this.fb = fb;
        this.logicalFormInfo = logicalFormInfo;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataRec = data;
    }
    ngOnInit() {
        console.log(this.dataRec);
        this.addItem = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    onFormSubmit() {
        let data = {
            title: this.addItem.get('title').value
        };
        switch (this.dataRec.type) {
            case 'highRisk': {
                this.addHighRisk(data);
                break;
            }
            case 'ppe': {
                this.addPPE(data);
                break;
            }
            case 'licence': {
                this.addLicence(data);
                break;
            }
            case 'identifyHazards': {
                this.addHazard(data);
                break;
            }
            case 'codeOfPract': {
                this.addCOP(data);
                break;
            }
            case 'riskLevel': {
                this.addRiskLevel(data);
                break;
            }
            case 'ctrlActreq': {
                this.addControlActReq(data);
                break;
            }
            case 'resRiskLevel': {
                this.addResidRiskLevel(data);
                break;
            }
            case 'perResbl': {
                this.addStaff(data);
                break;
            }
        }
    }
    closeDialog() {
        this.dialogRef.close('false');
    }
    addHighRisk(data) {
        this.logicalFormInfo
            .addRisk(data)
            .subscribe((resData) => {
            console.log('resData', resData);
            this.dialogRef.close('highRisk');
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200,
            });
        });
    }
    addPPE(data) {
        this.logicalFormInfo
            .addPPE(data)
            .subscribe((resData) => {
            console.log('resData', resData);
            this.dialogRef.close('ppe');
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200,
            });
        });
    }
    addRiskLevel(data) {
        this.logicalFormInfo
            .addRiskLevel(data)
            .subscribe((resData) => {
            console.log('resData', resData);
            this.dialogRef.close('riskLevel');
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200,
            });
        });
    }
    addResidRiskLevel(data) {
        this.logicalFormInfo
            .addResidual(data)
            .subscribe((resData) => {
            console.log('resData', resData);
            this.dialogRef.close('resRiskLevel');
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200,
            });
        });
    }
    addHazard(data) {
        this.logicalFormInfo
            .addHazards(data)
            .subscribe((resData) => {
            console.log('resData', resData);
            this.dialogRef.close('identifyHazards');
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200,
            });
        });
    }
    addLicence(data) {
        let dataTemp = {
            title: data.title,
            tradeCategoryId: this.dataRec.tradeCategoryId
        };
        this.logicalFormInfo
            .addLicence(dataTemp)
            .subscribe((resData) => {
            console.log('resData', resData);
            this.dialogRef.close('licence');
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200,
            });
        });
    }
    addControlActReq(data) {
        this.logicalFormInfo
            .addContrlActReq(data)
            .subscribe((resData) => {
            console.log('resData', resData);
            this.dialogRef.close('ctrlActreq');
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200,
            });
        });
    }
    addStaff(data) {
        this.logicalFormInfo
            .addStaff(data)
            .subscribe((resData) => {
            console.log('resData', resData);
            this.dialogRef.close('perResbl');
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200,
            });
        });
    }
    addCOP(data) {
        this.logicalFormInfo
            .addCode(data)
            .subscribe((resData) => {
            console.log('resData', resData);
            this.dialogRef.close('codeOfPract');
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200,
            });
        });
    }
}
AddItemComponent.ɵfac = function AddItemComponent_Factory(t) { return new (t || AddItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])); };
AddItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddItemComponent, selectors: [["app-add-item"]], decls: 19, vars: 11, consts: [[3, "formGroup"], [4, "ngIf"], ["autosize", "", "placeholder", "Enter your text......", "formControlName", "title", 1, "form-control", "sign"], [1, "row"], [1, "col-sm-2", "offset-8"], ["mat-raised-button", "", 3, "click"], [1, "col-sm-2"], ["mat-raised-button", "", 3, "disabled", "click"]], template: function AddItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddItemComponent_h2_1_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddItemComponent_h2_2_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddItemComponent_h2_3_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddItemComponent_h2_4_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddItemComponent_h2_5_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddItemComponent_h2_6_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddItemComponent_h2_7_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddItemComponent_h2_8_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddItemComponent_h2_9_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItemComponent_Template_button_click_14_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItemComponent_Template_button_click_17_listener() { return ctx.onFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "highRisk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "ppe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "licence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "identifyHazards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "riskLevel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "ctrlActreq");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "resRiskLevel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "perResbl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "codeOfPract");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.addItem.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_autosize__WEBPACK_IMPORTED_MODULE_6__["AutosizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-item',
                templateUrl: './add-item.component.html',
                styleUrls: ['./add-item.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "zQXG":
/*!*********************************************************************!*\
  !*** ./src/app/views/confi-logi/job-number/job-number.component.ts ***!
  \*********************************************************************/
/*! exports provided: JobNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobNumberComponent", function() { return JobNumberComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _create_job_no_create_job_no_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-job-no/create-job-no.component */ "bXbX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var src_app_site_info_add_site_info_edit_site_edit_site_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/site-info/add-site-info/edit-site/edit-site.component */ "2X0P");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/services/set-title.service */ "yZxC");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
















function JobNumberComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JobNumberComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r25 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r25 + 1);
} }
function JobNumberComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Job Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JobNumberComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r26.jobNumber, " ");
} }
function JobNumberComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Site Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JobNumberComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", element_r27.siteName, " ");
} }
function JobNumberComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Street Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JobNumberComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r28.streetNumber, " ");
} }
function JobNumberComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Street Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JobNumberComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r29.streetAddress);
} }
function JobNumberComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Suburb ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JobNumberComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r30.suburb, " ");
} }
function JobNumberComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " State ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JobNumberComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r31.stateId == null ? null : element_r31.stateId.title, " ");
} }
function JobNumberComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Customer Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JobNumberComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r32.customerName, "");
} }
function JobNumberComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Customer Contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JobNumberComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r33.customerContact);
} }
function JobNumberComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JobNumberComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobNumberComponent_td_36_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const element_r34 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r35.edit(element_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JobNumberComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JobNumberComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobNumberComponent_td_39_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const element_r37 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r38.delete(element_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JobNumberComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 29);
} }
function JobNumberComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 30);
} }
const _c0 = function () { return [20]; };
class JobNumberComponent {
    /////////////mat table end////////////////
    constructor(dialog, setTitle, logicalFormInfoService) {
        this.dialog = dialog;
        this.setTitle = setTitle;
        this.logicalFormInfoService = logicalFormInfoService;
        this.jobTaskData = [];
        this.ELEMENT_DATA = [];
        /////////////mat table////////////////
        this.displayedColumns = [
            'jobNumber',
            'siteName',
            'streetNumber',
            'streetAddress',
            'suburb',
            'state',
            'customerName',
            'customerContact',
            //'customerContactPhone',
            // 'customerEmail',
            /* 'edit', */
            'action',
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.ELEMENT_DATA);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    ngOnInit() {
        this.setTitle.setTitle('WHS-Add Site Info');
        this.getAllJobNumber();
    }
    getAllJobNumber() {
        this.logicalFormInfoService.getAllJobNumber().subscribe((res) => {
            console.log(res);
            this.dataSource = res.data;
            console.log("getAllJobNumber", this.dataSource);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    getAllJobTask() {
        // this.logicalFormInfo.getAllJobtask().subscribe((res: any) => {
        //   console.log('jobTaskDetails=>', res);
        //   // this.jobTaskData = res.data[0].subComponents;
        //   let data = res.data
        //   data.forEach((element, index) => {
        //     element.index = index + 1; //adding index
        //   });
        //   this.ELEMENT_DATA = data;
        //   this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        //   this.dataSource.paginator = this.paginator;
        //   //  this.task = res.data.subComponents;
        // });
    }
    openDialog(id) {
        let dialogRef = this.dialog.open(_create_job_no_create_job_no_component__WEBPACK_IMPORTED_MODULE_1__["CreateJobNoComponent"], {
            height: '80%',
            data: {
                action: 'new',
                userId: id,
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log('CustomerInfoComponent -> openDialog -> result', result);
            console.log("result", result);
            if (result === "success") {
                this.getAllJobNumber();
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                    title: 'Job Number created successfully',
                    showConfirmButton: false,
                    timer: 1200,
                });
            }
            console.log('The dialog was closed');
        });
    }
    edit(element) {
        const dialogRef = this.dialog.open(src_app_site_info_add_site_info_edit_site_edit_site_component__WEBPACK_IMPORTED_MODULE_5__["EditSiteComponent"], {
            width: '550px',
            data: element,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result == 'true') {
                this.getAllJobTask();
            }
            console.log('The dialog was closed');
        });
    }
    delete(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            title: 'Are you sure?',
            text: `Do you want to delete "${item.jobNumber}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B96F',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!',
        }).then((result) => {
            if (result.value) {
                this.logicalFormInfoService
                    .deleteJobNumber(item._id)
                    .subscribe((res) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                        title: 'Job Number Deleted successfully',
                        showConfirmButton: false,
                        timer: 1200,
                    });
                    console.log('deleted res', res);
                    this.getAllJobNumber();
                });
            }
        });
    }
}
JobNumberComponent.ɵfac = function JobNumberComponent_Factory(t) { return new (t || JobNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_8__["SetTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_9__["LogicalFormInfoService"])); };
JobNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: JobNumberComponent, selectors: [["app-job-number"]], viewQuery: function JobNumberComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 43, vars: 5, consts: [["_ngcontent-hqi-c400", "", "type", "button", 1, "btn", "btn-outline-primary", "mt-1", "mr-2", "float-right", 3, "click"], ["_ngcontent-hqi-c400", "", 1, "fas", "fa-plus"], [1, ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "jobNumber"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "siteName"], ["matColumnDef", "streetNumber"], ["matColumnDef", "streetAddress"], ["matColumnDef", "suburb"], ["matColumnDef", "state"], ["matColumnDef", "customerName"], ["matColumnDef", "customerContact"], ["matColumnDef", "edit"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [1, "flex-start"], ["mat-cell", "", 3, "click"], [1, "fas", "fa-pencil-alt"], ["mat-icon-button", "", "aria-label", "Example icon button with a delete icon", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function JobNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Job Number List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobNumberComponent_Template_button_click_2_listener() { return ctx.openDialog("abcd"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](7, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, JobNumberComponent_th_8_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, JobNumberComponent_td_9_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, JobNumberComponent_th_11_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, JobNumberComponent_td_12_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, JobNumberComponent_th_14_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, JobNumberComponent_td_15_Template, 3, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](16, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, JobNumberComponent_th_17_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, JobNumberComponent_td_18_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](19, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, JobNumberComponent_th_20_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, JobNumberComponent_td_21_Template, 3, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](22, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, JobNumberComponent_th_23_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, JobNumberComponent_td_24_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](25, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, JobNumberComponent_th_26_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, JobNumberComponent_td_27_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](28, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, JobNumberComponent_th_29_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, JobNumberComponent_td_30_Template, 3, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](31, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, JobNumberComponent_th_32_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, JobNumberComponent_td_33_Template, 3, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](34, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, JobNumberComponent_th_35_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, JobNumberComponent_td_36_Template, 2, 0, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](37, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, JobNumberComponent_th_38_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, JobNumberComponent_td_39_Template, 4, 0, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, JobNumberComponent_tr_40_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, JobNumberComponent_tr_41_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "mat-paginator", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: ["abel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\n.sign[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid rgba(46, 105, 255, 0.5);\n  width: 500px;\n  border-radius: 5px;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.imgStyle[_ngcontent-%COMP%] {\n  border: 2px solid #2e69ff40;\n  border-radius: 10px;\n}\n\n.example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcam9iLW51bWJlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0U7RUFDRSw0QkFBQTtBQUVKOztBQUFFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBREU7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FBSUo7O0FBRkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFLSjs7QUFIRTtFQUNFLHVCQUFBO0FBTUo7O0FBSkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUxFO0VBQ0UsYUFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUUo7O0FBTkU7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7QUFTSjs7QUFORTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7QUFTSjs7QUFQRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQVVKOztBQVJFO0VBQ0UsV0FBQTtBQVdKIiwiZmlsZSI6ImpvYi1udW1iZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhYmVsOm5vdCguZm9ybS1jaGVjay1sYWJlbCk6bm90KC5jdXN0b20tZmlsZS1sYWJlbCkge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcclxuICB9XHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRyb2w6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2IoNDYgMTA1IDI1NSAvIDI1JSk7XHJcbiAgfVxyXG4gIC5wdC0zIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZm9ybS1MYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgfVxyXG4gIC5zaWduIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLnNpZ246aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNDYsIDEwNSwgMjU1LCAwLjI1KTtcclxuICB9XHJcbiAgXHJcbiAgLmltZ1N0eWxlIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZTY5ZmY0MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWFkZGl0aW9uYWwtc2VsZWN0aW9uIHtcclxuICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICB9XHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](JobNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-job-number',
                templateUrl: './job-number.component.html',
                styleUrls: ['./job-number.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_8__["SetTitleService"] }, { type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_9__["LogicalFormInfoService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=views-confi-logi-confi-logi-module-es2015.js.map