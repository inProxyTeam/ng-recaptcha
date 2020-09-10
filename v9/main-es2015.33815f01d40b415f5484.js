(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/demo-wrapper/demo-wrapper.component.ts":
/*!********************************************************!*\
  !*** ./src/app/demo-wrapper/demo-wrapper.component.ts ***!
  \********************************************************/
/*! exports provided: PAGE_SETTINGS, NAV_LINKS, DemoWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_SETTINGS", function() { return PAGE_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_LINKS", function() { return NAV_LINKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoWrapperComponent", function() { return DemoWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");











function DemoWrapperComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "GitHub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DemoWrapperComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DemoWrapperComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r3.page.feature === link_r9.feature);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r3.site.baseurl + link_r9.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r9.label, " ");
} }
function DemoWrapperComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoWrapperComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.sidebarOpened = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DemoWrapperComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.page.feature, ".component.html");
} }
function DemoWrapperComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.page.feature, ".component.ts");
} }
function DemoWrapperComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "main.ts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DemoWrapperComponent_mat_tab_35_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.page.content.additional.title);
} }
function DemoWrapperComponent_mat_tab_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DemoWrapperComponent_mat_tab_35_ng_template_1_Template, 2, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "pre", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r8.page.content.additional.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = ["*"];
const PAGE_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('PAGE_SETTINGS');
const NAV_LINKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NAV_LINKS');
class DemoWrapperComponent {
    constructor(page, navLinks, titleService, media, changeDetectorRef) {
        this.page = page;
        this.navLinks = navLinks;
        this.titleService = titleService;
        this.site = {
            title: 'ng-recaptcha',
            description: 'Angular component for Google reCAPTCHA',
            baseurl: '/ng-recaptcha/v9',
        };
        this.sidebarOpened = false;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this.mobileQueryListener);
    }
    ngOnInit() {
        this.titleService.setTitle(`${this.page.title} | ${this.site.title}`);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }
}
DemoWrapperComponent.ɵfac = function DemoWrapperComponent_Factory(t) { return new (t || DemoWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PAGE_SETTINGS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NAV_LINKS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DemoWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoWrapperComponent, selectors: [["recaptcha-demo-wrapper"]], ngContentSelectors: _c0, decls: 44, vars: 15, consts: [[1, "recaptcha-demo-wrapper"], ["color", "primary"], ["src", "images/angular.svg", "height", "40px"], [1, "filler"], ["mat-button", "", "href", "https://github.com/DethAriel/ng2-recaptcha", 4, "ngIf"], ["aria-label", "GitHub repository", "mat-icon-button", "", "href", "https://github.com/DethAriel/ng2-recaptcha", 4, "ngIf"], ["fixedTopGap", "56", 3, "opened", "mode", "fixedInViewport", "closed"], ["sidenav", ""], ["mat-list-item", "", 3, "href", "active", 4, "ngFor", "ngForOf"], [1, "layout"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "example-container"], ["mat-tab-label", ""], [3, "innerHTML"], [4, "ngIf"], ["src", "images/angular.svg", "height", "32px"], ["mat-button", "", "href", "https://github.com/DethAriel/ng2-recaptcha"], ["src", "images/octocat.svg", "height", "26px"], ["aria-label", "GitHub repository", "mat-icon-button", "", "href", "https://github.com/DethAriel/ng2-recaptcha"], ["mat-list-item", "", 3, "href"], ["mat-icon-button", "", 3, "click"], ["aria-hidden", "true"]], template: function DemoWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DemoWrapperComponent_a_7_Template, 4, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DemoWrapperComponent_a_8_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-sidenav", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function DemoWrapperComponent_Template_mat_sidenav_closed_10_listener() { return ctx.sidebarOpened = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DemoWrapperComponent_a_15_Template, 2, 4, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DemoWrapperComponent_button_19_Template, 3, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DemoWrapperComponent_ng_template_27_Template, 2, 1, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "pre", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DemoWrapperComponent_ng_template_30_Template, 2, 1, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "pre", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DemoWrapperComponent_ng_template_33_Template, 2, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "pre", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DemoWrapperComponent_mat_tab_35_Template, 3, 1, "mat-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.site.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", !ctx.mobileQuery.matches || ctx.sidebarOpened)("mode", ctx.mobileQuery.matches ? "over" : "side")("fixedInViewport", ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.page.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.page.content.html, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.page.content.component, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.page.content.module, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page.content.additional);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.site.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.site.description);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: [".recaptcha-demo-wrapper[_ngcontent-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.recaptcha-demo-wrapper[_ngcontent-%COMP%]    > mat-toolbar[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n  z-index: 2;\n}\n\n.recaptcha-demo-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.recaptcha-demo-wrapper[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.recaptcha-demo-wrapper[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\n}\n\n.recaptcha-demo-wrapper[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\n.recaptcha-demo-wrapper[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 1px;\n  line-height: 24px;\n  text-transform: uppercase;\n  margin: 0;\n  padding: 0 16px;\n  background: rgba(0,0,0,.32);\n  color: hsla(0,0%,100%,.87);\n}\n\n.recaptcha-demo-wrapper[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0,0,0,.06);\n}\n\n.recaptcha-demo-wrapper[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.recaptcha-demo-wrapper[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n  padding: 15px;\n  flex-grow: 1;\n}\n\n.recaptcha-demo-wrapper[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%] {\n  height: 100%;\n  display: block;\n}\n\n.recaptcha-demo-wrapper[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n.recaptcha-demo-wrapper[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  padding: 10px;\n  font-size: 12px;\n  text-align: center;\n  background: #3f51b5;\n  color: hsla(0,0%,100%,.87);\n}\n\n.recaptcha-demo-wrapper[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby13cmFwcGVyL3JlY2FwdGNoYS1kZW1vLXdyYXBwZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxR0FBcUc7RUFDckcsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvZGVtby13cmFwcGVyL3JlY2FwdGNoYS1kZW1vLXdyYXBwZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNhcHRjaGEtZGVtby13cmFwcGVyIC5maWxsZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnJlY2FwdGNoYS1kZW1vLXdyYXBwZXIgPiBtYXQtdG9vbGJhciB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICB6LWluZGV4OiAyO1xufVxuXG4ucmVjYXB0Y2hhLWRlbW8td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJlY2FwdGNoYS1kZW1vLXdyYXBwZXIgbWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgZmxleDogMTtcbn1cblxuLnJlY2FwdGNoYS1kZW1vLXdyYXBwZXIgbWF0LXNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAwIDZweCByZ2JhKDAsMCwwLC4yNCk7XG59XG5cbi5yZWNhcHRjaGEtZGVtby13cmFwcGVyIG1hdC1uYXYtbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ucmVjYXB0Y2hhLWRlbW8td3JhcHBlciBtYXQtbmF2LWxpc3QgaDMge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMzIpO1xuICBjb2xvcjogaHNsYSgwLDAlLDEwMCUsLjg3KTtcbn1cblxuLnJlY2FwdGNoYS1kZW1vLXdyYXBwZXIgbWF0LW5hdi1saXN0IGEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMDYpO1xufVxuXG4ucmVjYXB0Y2hhLWRlbW8td3JhcHBlciBtYXQtbmF2LWxpc3QgYS5hY3RpdmUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucmVjYXB0Y2hhLWRlbW8td3JhcHBlciBtYWluIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ucmVjYXB0Y2hhLWRlbW8td3JhcHBlciBtYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnJlY2FwdGNoYS1kZW1vLXdyYXBwZXIgLmxheW91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5yZWNhcHRjaGEtZGVtby13cmFwcGVyIGZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICBjb2xvcjogaHNsYSgwLDAlLDEwMCUsLjg3KTtcbn1cblxuLnJlY2FwdGNoYS1kZW1vLXdyYXBwZXIgZm9vdGVyIGgzIHtcbiAgbWFyZ2luOiAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'recaptcha-demo-wrapper',
                styleUrls: [
                    './recaptcha-demo-wrapper.component.css',
                ],
                templateUrl: './recaptcha-demo-wrapper.component.html',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [PAGE_SETTINGS]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [NAV_LINKS]
            }] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/demo-wrapper/demo-wrapper.data.auto-gen.ts":
/*!************************************************************!*\
  !*** ./src/app/demo-wrapper/demo-wrapper.data.auto-gen.ts ***!
  \************************************************************/
/*! exports provided: navLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navLinks", function() { return navLinks; });
const navLinks = [
    {
        label: 'Basic',
        path: '/',
        feature: 'basic',
    },
    {
        label: 'Forms',
        path: '/forms',
        feature: 'forms',
    },
    {
        label: 'Global Config',
        path: '/global-config',
        feature: 'global-config',
    },
    {
        label: 'Invisible',
        path: '/invisible',
        feature: 'invisible',
    },
    {
        label: 'reCAPTCHA v3',
        path: '/v3',
        feature: 'v3',
    },
    {
        label: 'Language',
        path: '/language',
        feature: 'language',
    },
];


/***/ }),

/***/ "./src/app/demo-wrapper/demo-wrapper.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/demo-wrapper/demo-wrapper.module.ts ***!
  \*****************************************************/
/*! exports provided: DemoWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoWrapperModule", function() { return DemoWrapperModule; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _demo_wrapper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demo-wrapper.component */ "./src/app/demo-wrapper/demo-wrapper.component.ts");
/* harmony import */ var _demo_wrapper_data_auto_gen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo-wrapper.data.auto-gen */ "./src/app/demo-wrapper/demo-wrapper.data.auto-gen.ts");













class DemoWrapperModule {
}
DemoWrapperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DemoWrapperModule });
DemoWrapperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DemoWrapperModule_Factory(t) { return new (t || DemoWrapperModule)(); }, providers: [
        { provide: _demo_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["NAV_LINKS"], useValue: _demo_wrapper_data_auto_gen__WEBPACK_IMPORTED_MODULE_11__["navLinks"] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DemoWrapperModule, { declarations: [_demo_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["DemoWrapperComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"]], exports: [_demo_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["DemoWrapperComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DemoWrapperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_demo_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["DemoWrapperComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
                ],
                exports: [
                    _demo_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["DemoWrapperComponent"],
                ],
                providers: [
                    { provide: _demo_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["NAV_LINKS"], useValue: _demo_wrapper_data_auto_gen__WEBPACK_IMPORTED_MODULE_11__["navLinks"] },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/examples/basic/basic-demo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/examples/basic/basic-demo.component.ts ***!
  \********************************************************/
/*! exports provided: BasicDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicDemoComponent", function() { return BasicDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _demo_wrapper_demo_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../demo-wrapper/demo-wrapper.component */ "./src/app/demo-wrapper/demo-wrapper.component.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");




class BasicDemoComponent {
    resolved(captchaResponse) {
        console.log(`Resolved captcha with response: ${captchaResponse}`);
    }
}
BasicDemoComponent.ɵfac = function BasicDemoComponent_Factory(t) { return new (t || BasicDemoComponent)(); };
BasicDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicDemoComponent, selectors: [["recaptcha-demo"]], decls: 2, vars: 0, consts: [["siteKey", "6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU", 3, "resolved"]], template: function BasicDemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "recaptcha-demo-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "re-captcha", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resolved", function BasicDemoComponent_Template_re_captcha_resolved_1_listener($event) { return ctx.resolved($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_demo_wrapper_demo_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["DemoWrapperComponent"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_2__["RecaptchaComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'recaptcha-demo',
                templateUrl: './basic-demo.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/examples/basic/basic-demo.data.ts":
/*!***************************************************!*\
  !*** ./src/app/examples/basic/basic-demo.data.ts ***!
  \***************************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
const settings = {
    feature: 'basic',
    title: 'Basic Example',
    content: {
        component: "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@angular/core&#x27;</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  selector: <span class=\"hljs-string\">&#x27;recaptcha-demo&#x27;</span>,\n  templateUrl: <span class=\"hljs-string\">&#x27;./basic-demo.component.html&#x27;</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> BasicDemoComponent {\n  <span class=\"hljs-keyword\">public</span> resolved(captchaResponse: <span class=\"hljs-built_in\">string</span>) {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">`Resolved captcha with response: <span class=\"hljs-subst\">${captchaResponse}</span>`</span>);\n  }\n}\n",
        html: "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">recaptcha-demo-wrapper</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">re-captcha</span>\n    (<span class=\"hljs-attr\">resolved</span>)=<span class=\"hljs-string\">&quot;resolved($event)&quot;</span>\n    <span class=\"hljs-attr\">siteKey</span>=<span class=\"hljs-string\">&quot;6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU&quot;</span>\n  &gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">re-captcha</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">recaptcha-demo-wrapper</span>&gt;</span>\n",
        module: "<span class=\"hljs-keyword\">import</span> { NgModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@angular/core&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> { BrowserModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@angular/platform-browser&#x27;</span>;\n\n<span class=\"hljs-keyword\">import</span> { RecaptchaModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;ng-recaptcha&#x27;</span>;\n\n<span class=\"hljs-keyword\">import</span> { PAGE_SETTINGS } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;../../demo-wrapper/demo-wrapper.component&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> { DemoWrapperModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;../../demo-wrapper/demo-wrapper.module&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> { BasicDemoComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;./basic-demo.component&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> { settings } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;./basic-demo.data&#x27;</span>;\n\n<span class=\"hljs-meta\">@NgModule</span>({\n  bootstrap: [BasicDemoComponent],\n  declarations: [BasicDemoComponent],\n  imports: [\n    RecaptchaModule,\n    BrowserModule,\n    DemoWrapperModule,\n  ],\n  providers: [\n    { provide: PAGE_SETTINGS, useValue: settings },\n  ],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule { }\n",
    },
};


/***/ }),

/***/ "./src/app/examples/basic/basic-demo.main.ts":
/*!***************************************************!*\
  !*** ./src/app/examples/basic/basic-demo.main.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _basic_demo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-demo.module */ "./src/app/examples/basic/basic-demo.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["platformBrowser"]().bootstrapModule(_basic_demo_module__WEBPACK_IMPORTED_MODULE_1__["DemoModule"]);


/***/ }),

/***/ "./src/app/examples/basic/basic-demo.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/examples/basic/basic-demo.module.ts ***!
  \*****************************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
/* harmony import */ var _demo_wrapper_demo_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../demo-wrapper/demo-wrapper.component */ "./src/app/demo-wrapper/demo-wrapper.component.ts");
/* harmony import */ var _demo_wrapper_demo_wrapper_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../demo-wrapper/demo-wrapper.module */ "./src/app/demo-wrapper/demo-wrapper.module.ts");
/* harmony import */ var _basic_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic-demo.component */ "./src/app/examples/basic/basic-demo.component.ts");
/* harmony import */ var _basic_demo_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic-demo.data */ "./src/app/examples/basic/basic-demo.data.ts");








class DemoModule {
}
DemoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoModule, bootstrap: [_basic_demo_component__WEBPACK_IMPORTED_MODULE_5__["BasicDemoComponent"]] });
DemoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DemoModule_Factory(t) { return new (t || DemoModule)(); }, providers: [
        { provide: _demo_wrapper_demo_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["PAGE_SETTINGS"], useValue: _basic_demo_data__WEBPACK_IMPORTED_MODULE_6__["settings"] },
    ], imports: [[
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_2__["RecaptchaModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _demo_wrapper_demo_wrapper_module__WEBPACK_IMPORTED_MODULE_4__["DemoWrapperModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoModule, { declarations: [_basic_demo_component__WEBPACK_IMPORTED_MODULE_5__["BasicDemoComponent"]], imports: [ng_recaptcha__WEBPACK_IMPORTED_MODULE_2__["RecaptchaModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _demo_wrapper_demo_wrapper_module__WEBPACK_IMPORTED_MODULE_4__["DemoWrapperModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                bootstrap: [_basic_demo_component__WEBPACK_IMPORTED_MODULE_5__["BasicDemoComponent"]],
                declarations: [_basic_demo_component__WEBPACK_IMPORTED_MODULE_5__["BasicDemoComponent"]],
                imports: [
                    ng_recaptcha__WEBPACK_IMPORTED_MODULE_2__["RecaptchaModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _demo_wrapper_demo_wrapper_module__WEBPACK_IMPORTED_MODULE_4__["DemoWrapperModule"],
                ],
                providers: [
                    { provide: _demo_wrapper_demo_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["PAGE_SETTINGS"], useValue: _basic_demo_data__WEBPACK_IMPORTED_MODULE_6__["settings"] },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!*********************************************************!*\
  !*** multi ./src/app/examples/basic/basic-demo.main.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dethariel/Code/ng-recaptcha/demo/v9/src/app/examples/basic/basic-demo.main.ts */"./src/app/examples/basic/basic-demo.main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.33815f01d40b415f5484.js.map