webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<br>\n<br>\n<br>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  padding-top: 5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_router_routing_module__ = __webpack_require__("../../../../../src/app/router/router-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_bootstrap_md__ = __webpack_require__("../../../../angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__card_card_component__ = __webpack_require__("../../../../../src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__step_step_component__ = __webpack_require__("../../../../../src/app/step/step.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__editor_editor_component__ = __webpack_require__("../../../../../src/app/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ang_jsoneditor__ = __webpack_require__("../../../../ang-jsoneditor/esm5/ang-jsoneditor.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// import { Ng4JsonEditorModule } from './component/ng4-jsoneditor/ng4-jsoneditor.module';


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__step_step_component__["a" /* StepComponent */],
                __WEBPACK_IMPORTED_MODULE_16__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__editor_editor_component__["a" /* EditorComponent */],
                __WEBPACK_IMPORTED_MODULE_19__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]],
                [
                    __WEBPACK_IMPORTED_MODULE_12__angular_cdk_table__["m" /* CdkTableModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MatAutocompleteModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatButtonModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MatButtonToggleModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MatCardModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MatCheckboxModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["f" /* MatChipsModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["A" /* MatStepperModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* MatDatepickerModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["h" /* MatDialogModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["i" /* MatExpansionModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["j" /* MatGridListModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["k" /* MatIconModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["l" /* MatInputModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["m" /* MatListModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["n" /* MatMenuModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["o" /* MatNativeDateModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["p" /* MatPaginatorModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["q" /* MatProgressBarModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["r" /* MatProgressSpinnerModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["s" /* MatRadioModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["t" /* MatRippleModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["u" /* MatSelectModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["v" /* MatSidenavModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["x" /* MatSliderModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["w" /* MatSlideToggleModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["y" /* MatSnackBarModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["z" /* MatSortModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["B" /* MatTableModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["C" /* MatTabsModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["D" /* MatToolbarModule */],
                    __WEBPACK_IMPORTED_MODULE_10__angular_material__["E" /* MatTooltipModule */]
                ],
                __WEBPACK_IMPORTED_MODULE_13_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__router_router_routing_module__["a" /* RouterRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_20_ang_jsoneditor__["c" /* NgJsonEditorModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_config_service__["a" /* ConfigService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>General Information</mat-card-title>\n      <mat-card-subtitle>This is the global information about the API</mat-card-subtitle>\n    </mat-card-header>\n   \n    <img mat-card-image src=\"../assets/img/shiba2.jpg\" alt=\"documentation details\">\n    <mat-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n          bred for hunting.\n        </p>\n    </mat-card-content>\n\n  </mat-card>\n  "

/***/ }),

/***/ "../../../../../src/app/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\n  width: 600px;\n  margin: auto; }\n\n.example-header-image {\n  background-image: url(\"/assets/img/shiba1.jpg\");\n  background-size: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__("../../../../../src/app/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button type=\"button\" class=\"btn btn-secondary\" (click)=\"updateEditor()\">Update</button>\n\n<button type=\"button\" class=\"btn btn-secondary\" (click)=\"download()\">Download</button> -->\n\n\n<div style=\"height:600px;\" *ngIf=\"openapi!==''\"> \n  <json-editor [options]=\"editorOptions\" [data]=\"openapi\" ></json-editor>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ang_jsoneditor__ = __webpack_require__("../../../../ang-jsoneditor/esm5/ang-jsoneditor.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { JsonEditorComponent, JsonEditorOptions } from '../component/jsoneditor/jsoneditor.component';
// import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor/jsoneditor/jsoneditor.component';

var EditorComponent = (function () {
    function EditorComponent(configService) {
        this.configService = configService;
        this.openapi = "";
        this.prop = false;
        this.editorOptions = new __WEBPACK_IMPORTED_MODULE_2_ang_jsoneditor__["b" /* JsonEditorOptions */]();
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
        this.configService.getOpenapi()
            .subscribe(function (res) {
            console.log("-------interval 10s to get openapis------");
            // console.log(res);
            _this.openapi = res.data;
        });
    };
    EditorComponent.prototype.download = function () {
        console.log(this.openapi);
        this.openapi = JSON.stringify(this.editor.get(), null, 2);
        console.log(this.openapi);
    };
    EditorComponent.prototype.updateEditor = function () {
        var _this = this;
        this.configService.getNewValue()
            .subscribe(function (res) {
            console.log("-------res.data------");
            console.log(res);
            _this.openapi = res.data;
            console.log("Success to get");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ang_jsoneditor__["a" /* JsonEditorComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ang_jsoneditor__["a" /* JsonEditorComponent */])
    ], EditorComponent.prototype, "editor", void 0);
    EditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editor',
            template: __webpack_require__("../../../../../src/app/editor/editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/editor/editor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* ConfigService */]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-bottom navbar-expand navbar-light bg-light\">\n  <div class=\"navbar-text m-auto\">\n    Made with <i class=\"fa fa-heart\" aria-hidden=\"true\" style=\"color: red;\"></i> by Hanyang\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"starter-template\">\n    <h1>ExtrateREST</h1>\n    <p class=\"lead\">To generate OpenAPI specification for a REST service.</p>\n    \n\n    <img src=\"../assets/img/overview.png\" alt=\"documentation details\" align=\"center\" width=75%>\n<br>\n<button mat-fab color=\"primary\" style=\"height:100px;width:100px;font-size:18px;\" onclick=\"window.location.href='/setup'\">Start</button>\n    \n  </div>\n \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".starter-template {\n  padding: 3rem 1.5rem 0rem 1.5rem;\n  text-align: center;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/config.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Config = (function () {
    function Config() {
        this.apiName = "Instagram";
        this.docUrl = "https://www.instagram.com/developer";
        this.filterUrl = "https://www.instagram.com/developer/endpoints";
        this.searchBase = false;
        this.urlBase = "";
        this.stuffing = "\\s";
        this.urlMiddle = " ";
        this.urlAfter = "\n";
        this.urlTemplate = "no";
        this.reverse = "no";
        this.existVerb = "yes";
        this.urlKey = "";
        this.verbKey = "";
        this.mode = "https://";
        this.abbrevDelete = "delete";
        this.reqKey = "no";
        this.reqMiddle = ".{0,10}";
        this.reqExample = "((\\{)|(\\[)){1}(.*?)((\\})|(\\])){1}";
        this.reqTemplate = "pre";
        this.resKey = "response";
        this.resMiddle = "\\s.{0,120}";
        this.url1res2 = true;
        this.resTemplate = "pre";
        this.resExample = "((\\{)|(\\[)){1}(.*?)((\\})|(\\])){1}";
        this.existPara = true;
        this.paraKey = "(parameter)|(argument)|(field)|(parameters)|(arguments)|(fields)";
        this.url1para2 = true;
        this.paraMiddle = "13";
        this.paraIn = "query";
        this.template = "table";
        this.number = "multiple";
    }
    return Config;
}());
/* harmony default export */ __webpack_exports__["a"] = (Config);


/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-primary fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">ExtrateREST</a>\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/setup\">Set up </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/openapi\">OpenAPI </a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://twitter.com/caohanyang007\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://github.com/caohanyang/ExtrateREST\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/router/router-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_editor_component__ = __webpack_require__("../../../../../src/app/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__step_step_component__ = __webpack_require__("../../../../../src/app/step/step.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'setup',
        component: __WEBPACK_IMPORTED_MODULE_3__step_step_component__["a" /* StepComponent */],
    },
    {
        path: 'openapi',
        component: __WEBPACK_IMPORTED_MODULE_2__editor_editor_component__["a" /* EditorComponent */],
    },
];
var RouterRoutingModule = (function () {
    function RouterRoutingModule() {
    }
    RouterRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], RouterRoutingModule);
    return RouterRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// RxJS operator for mapping the observable

var ConfigService = (function () {
    function ConfigService(http) {
        this.http = http;
        this.api_url = 'http://localhost:3000';
        this.configUrl = this.api_url + "/api/configs";
        this.openapiUrl = this.api_url + "/api/configs";
        this.REFRESH_TEMPO = 10000;
    }
    //Create config, takes a Config Object
    ConfigService.prototype.createConfig = function (config) {
        console.log(config);
        return this.http.post("" + this.configUrl, config);
    };
    ConfigService.prototype.getNewValue = function () {
        console.log("sending request for openapi");
        return this.http.get("" + this.openapiUrl);
    };
    ConfigService.prototype.getOpenapi = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */].interval(this.REFRESH_TEMPO)
            .switchMap(function () { return _this.http.get("" + _this.openapiUrl); });
    };
    //Default Error handling method.
    ConfigService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "../../../../../src/app/step/step.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-raised-button (click)=\"isLinear = true\" id=\"toggle-linear\">Enable linear mode</button> -->\n\n<mat-horizontal-stepper [linear]=\"isLinear\">\n  \n    <!-- First form -->\n    <mat-step [stepControl]=\"firstFormGroup\">\n      <form [formGroup]=\"firstFormGroup\">\n        <ng-template matStepLabel>General Information</ng-template>\n  \n  \n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>General Information</mat-card-title>\n            <mat-card-subtitle>This is the global information about the API</mat-card-subtitle>\n          </mat-card-header>\n  \n          <!-- <h5 align=\"left\">\n            <strong>Input the name of the target API</strong>\n          </h5>\n          <div class=\"example-container\">\n            <mat-form-field>\n              <mat-label>API Name</mat-label>\n              <input matInput placeholder=\"Instragram, Twitter, ...\" formControlName=\"apiName\" required>\n            </mat-form-field>\n          </div>\n          <br> -->\n  \n  \n          <h5 align=\"left\">\n            <strong>Find the Root URL of the API documentation</strong>\n          </h5>\n          <div class=\"example-container\">\n            <mat-form-field>\n              <mat-label>Documentation Main Entry</mat-label>\n              <input matInput placeholder=\"https://www.instagram.com/developer/\" formControlName=\"docUrl\" required>\n            </mat-form-field>\n            <p align=\"left\">\n              A REST API HTML Documentation is composed of a set of web pages. Among the set of pages, one page is called the Root Page,\n              and is linked directly or indirectly to all the pages of the set.\n              <br> As an example, the Root Page of the Instagram API HTML Documentation is <i>https://www.instagram.com/developer/</i>.\n            </p>\n          </div>\n          <img src=\"../assets/img/mainUrl.png\" alt=\"documentation details\" align=\"center\" width=100%>\n          <br>\n          <br>\n  \n          <h5 align=\"left\">\n            <strong>Find the Filter URL of the API documentation (optional)</strong>\n          </h5>\n          <div class=\"example-container\">\n            <mat-form-field>\n              <mat-label>Documentation Filter Url</mat-label>\n              <input matInput placeholder=\"https://www.instagram.com/developer/endpoints\" formControlName=\"filterUrl\">\n            </mat-form-field>\n            <p align=\"left\">\n              This is an optional parameter.\n              <br> If the developer can conclude the common URL for pages that describe the endpoints.\n              <br> As an example, if the Instagram endpoints Urls are:\n              <br>\n              <i>https://www.instagram.com/developer/endpoints/users/</i>\n              <br>\n              <i>https://www.instagram.com/developer/endpoints/comments/</i>\n              <br>\n              <i>https://www.instagram.com/developer/endpoints/likes/</i>\n              <br> The Filter Url could be <i>https://www.instagram.com/developer/endpoints</i>.\n            </p>\n          </div>\n          <br>\n  \n        </mat-card>\n  \n        <div style=\"text-align:center\">\n          <button mat-button matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n  \n    <!--Second form -->\n    <ng-template #httpsMode><img src=\"../assets/img/https.png\" alt=\"https mode\" align=\"center\"></ng-template>\n    <ng-template #httpMode><img src=\"../assets/img/http.png\" alt=\"http mode\" align=\"center\"></ng-template>\n    <ng-template #relativeMode><img src=\"../assets/img/relative.png\" alt=\"relative mode\" align=\"center\"></ng-template>\n    <ng-template #noverbkeyMode><img src=\"../assets/img/noverbkey.png\" alt=\"noverbkey mode\" align=\"center\"></ng-template>\n    <ng-template #nullMode><img src=\"../assets/img/noverbnull.png\" alt=\"null mode\" align=\"center\"></ng-template>\n    <ng-template #multiplywords><img src=\"../assets/img/multiplywords.png\" alt=\"multiply words\" align=\"center\"></ng-template>\n    <ng-template #urlMiddle><img src=\"../assets/img/urlmiddle.png\" alt=\"url middle\" align=\"center\"></ng-template>\n    <ng-template #pathTemplate><img src=\"../assets/img/pathtemplate.png\" alt=\"paht template\" align=\"center\"></ng-template>\n  \n  \n    <mat-step [stepControl]=\"secondFormGroup\">\n      <form [formGroup]=\"secondFormGroup\">\n        <ng-template matStepLabel>URL & Verb</ng-template>\n  \n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>Url & Verb</mat-card-title>\n            <mat-card-subtitle>This is the Url and Verb information about API endpoints</mat-card-subtitle>\n          </mat-card-header>\n  \n  \n          <h5 align=\"left\">\n            <strong>Choose the endpoint Url and Http Verb pattern</strong>\n          </h5>\n          <p align=\"left\">\n            Take 2 minutes to look at the endpoint pages which describe the Url and Http Verb information.\n            <br>\n            <br> Choose the one of following patterns that match the target documentation:\n            <br>\n          </p>\n  \n          <mat-radio-group formControlName=\"mode\" [(ngModel)]=\"modeType\">\n  \n            <div class=\"example-margin\" align=\"left\">\n              <mat-radio-button class=\"example-radio\" value=\"https://\" [ngbTooltip]=\"httpsMode\">Both URL and Verb exist, Url begins with https</mat-radio-button>\n            </div>\n            <br>\n  \n            <div class=\"example-margin\">\n              <mat-radio-button class=\"example-radio\" value=\"http://\" [ngbTooltip]=\"httpMode\">Both URL and Verb exist, Url begins with http</mat-radio-button>\n            </div>\n            <br>\n  \n            <div class=\"example-margin\">\n              <mat-radio-button class=\"example-radio\" value=\"/\" [ngbTooltip]=\"relativeMode\">Both URL and Verb exist, Url begins with /</mat-radio-button>\n            </div>\n            <br>\n  \n            <div class=\"example-margin\">\n              <mat-radio-button class=\"example-radio\" value=\"key\" [ngbTooltip]=\"noverbkeyMode\">Verb doesn't exist, common keyword exists before Url</mat-radio-button>\n            </div>\n            <br>\n  \n            <div class=\"example-margin\">\n              <mat-radio-button class=\"example-radio\" value=\"null\" [ngbTooltip]=\"nullMode\">Verb doesn't exist, can't find common keyword before Url</mat-radio-button>\n            </div>\n            <br>\n  \n          </mat-radio-group>\n          <br>\n  \n  \n          <h5 align=\"left\">\n            <strong>URL details</strong>\n          </h5>\n          <div class=\"example-container\" *ngIf=\"!(modeType=='key' || modeType=='null')\">\n            <strong>Check order of appearance: \n            <i align=\"left\" [ngbTooltip]=\"httpsMode\">Verb first</i> or \n            <i align=\"left\" [ngbTooltip]=\"httpMode\">Url first</i>\n          </strong>\n            <mat-form-field>\n              <mat-select placeholder=\"order of url and verb\" [(value)]=\"reverse\" formControlName=\"reverse\" required>\n                <mat-option value=\"yes\">Verb first</mat-option>\n                <mat-option value=\"no\">Url first</mat-option>\n              </mat-select>\n            </mat-form-field>\n  \n            <br>\n            <strong>Check stuffing between Verb and Url: \n              <i align=\"left\" [ngbTooltip]=\"relativeMode\">Whitespace</i> or \n              <i align=\"left\" [ngbTooltip]=\"multiplywords\">Multiply words</i>\n            </strong>\n            <mat-form-field hintLabel=\"The stuffing can be whitespace or multiply words\">\n              <mat-select placeholder=\"stuffing\" formControlName=\"stuffing\" required>\n                <mat-option>None</mat-option>\n                <mat-option value=\"\\\\s\">Whitespace</mat-option>\n                <mat-option value=\".{0,10}\">1 or 2 words</mat-option>\n                <mat-option value=\"\\\\s.{0,60}\">3 or 10 words</mat-option>\n                <mat-option value=\"(.*?)\">more than 10 words</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n  \n          <br>\n          <div class=\"example-container\" *ngIf=\"modeType=='key'\">\n            <strong>The common keyword before Url:</strong>\n            <p align=\"left\">\n              Look at each endpoint, and summarize the common keyword before url.\n              <br> As an example, if the endpoints Urls are presented:\n              <br>\n              <i>Url : api.geonames.org/postalCodeLookupJSON?</i>\n              <br>\n              <i>Url : api.geonames.org/postalCodeLookupJSON?</i>\n              <br>\n              <i>Url : api.geonames.org/findNearbyPlaceName?</i>\n              <br> The common keyword could be: <i>Url :</i>\n            </p>\n            <mat-form-field>\n              <mat-label>Keyword before Url</mat-label>\n              <input matInput placeholder=\"Url :\" formControlName=\"urlKey\">\n            </mat-form-field>\n          </div>\n  \n          <br>\n          <div class=\"example-container\">\n            <strong>Check if the Url wrapped in different tags: \n            <i align=\"left\" [ngbTooltip]=\"httpsMode\">No</i> or\n            <i align=\"left\" [ngbTooltip]=\"urlMiddle\">Yes</i>\n          </strong> Normally, if the Url itself (ignores query parameters) wrapped in different tags, it shows in\n            different color or it may contian whitespace.\n            <br> Inspect the HTML sources to check this property.\n            <mat-form-field>\n              <mat-select placeholder=\"urlMiddle\" formControlName=\"urlMiddle\" required>\n                <mat-option>None</mat-option>\n                <mat-option value=\"\\ \">Yes</mat-option>\n                <mat-option value=\"\">No</mat-option>\n              </mat-select>\n            </mat-form-field>\n  \n            <!-- <strong> Character after the Url: {{urlAfter}} </strong>\n            <mat-form-field>\n              <mat-select placeholder=\"urlAfter\" [(value)]=\"urlAfter\" formControlName=\"urlAfter\" required>\n                <mat-option>None</mat-option>\n                <mat-option value=\"\\ \">Space Bar</mat-option>\n                <mat-option value=\"\\n\">New Line</mat-option>\n              </mat-select>\n            </mat-form-field> -->\n  \n            <strong>Check if the Url support Path templating: \n                <i align=\"left\" [ngbTooltip]=\"pathTemplate\">Example</i>\n            </strong>\n            <p> Path templating refers to the usage of curly braces (&#123;&#125;) to mark a section of a URL path as replaceable\n              using path parameters</p>\n            <mat-form-field>\n              <mat-select placeholder=\"urlTemplate\" formControlName=\"urlTemplate\" required>\n                <mat-option value=\"no\">No</mat-option>\n                <mat-option value=\":id\">:id</mat-option>\n                <mat-option value=\"{id}\">&#123;id&#125;</mat-option>\n                <mat-option value=\"<id>\">&lt;id&gt;</mat-option>\n              </mat-select>\n            </mat-form-field>\n  \n          </div>\n          <br>\n  \n  \n          <h5 align=\"left\">\n            <strong>Http Verb details</strong>\n          </h5>\n          <div class=\"example-container\">\n            <strong>The abbreviation for the Http Verb Delete: \n              <i >Del</i> or <i >Delete</i> \n            </strong>\n            <mat-form-field>\n              <mat-select placeholder=\"abbreviation for delete\"  formControlName=\"abbrevDelete\" required>\n                <mat-option value=\"del\">Del</mat-option>\n                <mat-option value=\"delete\">Delete</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n  \n  \n        </mat-card>\n  \n        <div style=\"text-align:center\">\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n  \n    <!-- Three form -->\n    <ng-template #reqHttp><img src=\"../assets/img/reqhttp.png\" alt=\"reqHttp mode\" align=\"center\"></ng-template>\n    <ng-template #reqCurl><img src=\"../assets/img/reqcurl.png\" alt=\"reqCurl mode\" align=\"center\"></ng-template>\n    <ng-template #reqJson><img src=\"../assets/img/reqjson.png\" alt=\"reqJson mode\" align=\"center\"></ng-template>\n    <ng-template #reqExample><img src=\"../assets/img/reqexample.png\" alt=\"reqJson mode\" align=\"center\"></ng-template>\n  \n    <mat-step [stepControl]=\"threeFormGroup\">\n      <form [formGroup]=\"threeFormGroup\">\n        <ng-template matStepLabel>Request & Response Example</ng-template>\n  \n  \n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>Request & Response Example</mat-card-title>\n            <mat-card-subtitle>This is the Request and Response information about API endpoints</mat-card-subtitle>\n          </mat-card-header>\n  \n          <!-- request details-->\n          <h5 align=\"left\">\n            <strong>Request details</strong>\n          </h5>\n  \n          <div class=\"example-container\">\n            <strong>Check if the API contain request examples</strong>\n            <p>Request example could be </p>\n            <p>\n              <i align=\"left\" [ngbTooltip]=\"reqHttp\">Standard Http request</i> or\n              <i align=\"left\" [ngbTooltip]=\"reqCurl\">Curl request</i> or\n              <i align=\"left\" [ngbTooltip]=\"reqJson\">POST body </i>\n            </p>\n  \n            <mat-form-field>\n              <mat-select placeholder=\"exist request example?\" [(value)]=\"request\" required>\n                <mat-option value=\"yes\">Yes</mat-option>\n                <mat-option value=\"no\">No</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n  \n          <div class=\"example-container\" *ngIf=\"request=='yes'\">\n  \n            <strong>Type of request example</strong>\n            <p>3 types of request example: </p>\n            <p>\n              <i align=\"left\" [ngbTooltip]=\"reqHttp\">Standard Http request</i> or\n              <i align=\"left\" [ngbTooltip]=\"reqCurl\">Curl request</i> or\n              <i align=\"left\" [ngbTooltip]=\"reqJson\">POST body </i>\n            </p>\n            <mat-form-field>\n              <mat-select placeholder=\"the type of the request example\" formControlName=\"reqExample\" required>\n                <mat-option value=\"http\">HTTP</mat-option>\n                <mat-option value=\"curl\">CURL</mat-option>\n                <mat-option value=\"((\\\\{)|(\\\\[)){1}(.*?)((\\\\})|(\\\\])){1}\">POST body</mat-option>\n                <!-- <mat-option value=\"xml\">XML</mat-option> -->\n              </mat-select>\n            </mat-form-field>\n  \n            <br>\n            <strong>Common Keyword before the request</strong>\n            <p align=\"left\">\n              Look at each endpoint, and summarize the common keyword before request example.\n              <br> The common keyword could be:\n              <i [ngbTooltip]=\"reqExample\">example request</i>, <i [ngbTooltip]=\"reqHttp\">sample request</i>\n            </p>\n            <mat-form-field>\n              <mat-label>keyword before request example</mat-label>\n              <input matInput placeholder=\"example request, sample request\" formControlName=\"reqKey\" required>\n            </mat-form-field>\n  \n            <br>\n            <strong>Filling between keyword and request example: \n              <i align=\"left\" [ngbTooltip]=\"reqExample\">Whitespace</i> or \n              <i align=\"left\" [ngbTooltip]=\"reqHttp\">Multiply words</i>\n            </strong>\n            <mat-form-field>\n              <mat-select placeholder=\"filling between keyword and example\" formControlName=\"reqMiddle\" required>\n                <mat-option>None</mat-option>\n                <mat-option value=\"\\\\s\">Whitespace</mat-option>\n                <mat-option value=\".{0,10}\">1 or 2 words</mat-option>\n                <mat-option value=\"\\\\s.{0,60}\">3 or 10 words</mat-option>\n                <mat-option value=\"(.*?)\">more than 10 words</mat-option>\n              </mat-select>\n            </mat-form-field>\n  \n            <br>\n            <strong>HTML tags for the request example: </strong>\n            <p>Inspect the HTML sources to check this property. </p>\n            <mat-form-field>\n              <mat-select placeholder=\"html tag for the request example\" formControlName=\"reqTemplate\" required>\n                <mat-option>None</mat-option>\n                <mat-option value=\"pre\">pre</mat-option>\n                <mat-option value=\"code\">code</mat-option>\n                <mat-option value=\"a\">a</mat-option>\n              </mat-select>\n            </mat-form-field>\n  \n            <!-- <br>\n            <strong>Check the location order of Url and request example: </strong>\n            <mat-form-field>\n              <mat-select placeholder=\"order of url and request example\" formControlName=\"url1req2\" required>\n                <mat-option value=\"yes\">Url first</mat-option>\n                <mat-option value=\"no\">Request example first</mat-option>\n              </mat-select>\n            </mat-form-field> -->\n  \n          </div>\n          <br>\n  \n          <!-- response details-->\n          <ng-template #resExample><img src=\"../assets/img/resexample.png\" alt=\"reqJson mode\" align=\"center\"></ng-template>\n          <ng-template #resMultiply><img src=\"../assets/img/resmultiply.png\" alt=\"reqJson mode\" align=\"center\"></ng-template>\n  \n  \n          <h5 align=\"left\">\n            <strong>Response details</strong>\n          </h5>\n          <div class=\"example-container\">\n            <strong>Check if the API contain response examples</strong>\n            <p>Response example could be </p>\n            <p>\n              <i align=\"left\" [ngbTooltip]=\"resExample\">Twitter Response example</i>\n            </p>\n            <mat-form-field>\n              <mat-select placeholder=\"exist response example?\" [(value)]=\"response\" required>\n                <mat-option value=\"yes\">Yes</mat-option>\n                <mat-option value=\"no\">No</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n  \n          <div class=\"example-container\" *ngIf=\"response=='yes'\">\n            <br>\n            <strong>Common Keyword before the response</strong>\n            <p align=\"left\">\n              Look at each endpoint, and summarize the common keyword before response example.\n              <br> The common keyword could be:\n              <i [ngbTooltip]=\"resExample\">Example Response</i>, <i [ngbTooltip]=\"resMultiply\">Response Body</i>\n            </p>\n            <mat-form-field>\n              <mat-label>keyword before response example</mat-label>\n              <input matInput placeholder=\"example, response, JSON representation...\" formControlName=\"resKey\" required>\n            </mat-form-field>\n  \n            <!-- <br>\n            <strong>Type of response example</strong>\n            <mat-form-field>\n              <mat-select placeholder=\"the type of the response example\" formControlName=\"resExample\" required>\n                <mat-option value=\"((\\\\{)|(\\\\[)){1}(.*?)((\\\\})|(\\\\])){1}\">JSON</mat-option> -->\n            <!-- <mat-option value=\"xml\">XML</mat-option> -->\n            <!-- </mat-select>\n            </mat-form-field> -->\n  \n            <br>\n            <strong> Filling between keyword and response example: \n                <i align=\"left\" [ngbTooltip]=\"resExample\">Whitespace</i> or \n                <i align=\"left\" [ngbTooltip]=\"resMultiply\">Multiply words</i>\n            </strong>\n            <mat-form-field>\n              <mat-select placeholder=\"stuffing between keyword and example\" formControlName=\"resMiddle\" required>\n                <mat-option>None</mat-option>\n                <mat-option value=\"\\\\s\">Whitespace</mat-option>\n                <mat-option value=\".{0,10}\">1 or 2 words</mat-option>\n                <mat-option value=\"\\\\s.{0,60}\">3 or 10 words</mat-option>\n                <mat-option value=\"\\\\s.{0,120}\">10 or 20 words</mat-option>\n                <mat-option value=\"(.*?)\">more than 20 words</mat-option>\n              </mat-select>\n            </mat-form-field>\n  \n            <br>\n            <strong>HTML tags for the response example: </strong>\n            <p>Inspect the HTML sources to check this property. </p>\n            <mat-form-field>\n              <mat-select placeholder=\"html tag for the response example\" formControlName=\"resTemplate\" required>\n                <mat-option>None</mat-option>\n                <mat-option value=\"pre\">pre</mat-option>\n                <mat-option value=\"code\">code</mat-option>\n                <mat-option value=\"span\">span</mat-option>\n              </mat-select>\n            </mat-form-field>\n  \n            <!-- <p>Check the location order of Url and response example: </p>\n            <mat-form-field>\n              <mat-select placeholder=\"order of url and response example\" formControlName=\"url1res2\" required>\n                <mat-option value=\"yes\">Url first</mat-option>\n                <mat-option value=\"no\">Response example first</mat-option>\n              </mat-select>\n            </mat-form-field> -->\n  \n          </div>\n  \n        </mat-card>\n  \n        <div style=\"text-align:center\">\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n  \n  \n    <!-- Four form -->\n    <ng-template #table><img src=\"../assets/img/table.png\" alt=\"table\" align=\"center\"></ng-template>\n    <ng-template #list><img src=\"../assets/img/list.png\" alt=\"list\" align=\"center\"></ng-template>\n    \n    <mat-step [stepControl]=\"fourFormGroup\">\n      <form [formGroup]=\"fourFormGroup\">\n        <ng-template matStepLabel>Parameter</ng-template>\n  \n  \n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>Parameter</mat-card-title>\n            <mat-card-subtitle>This is the Parameter information about API endpoints</mat-card-subtitle>\n          </mat-card-header>\n  \n  \n          <!-- Parameter details-->\n          <h5 align=\"left\">\n            <strong>Parameter details</strong>\n          </h5>\n  \n          <div class=\"example-container\">\n            <strong>Check if the API contain parameter details</strong>\n            <p>parameter could be presented in a </p>\n            <p>\n              <i align=\"left\" [ngbTooltip]=\"table\">HTML Table</i> or\n              <i align=\"left\" [ngbTooltip]=\"list\">HTML List</i>\n            </p>\n            <mat-form-field>\n              <mat-select placeholder=\"exist parameter information?\" [(value)]=\"existpara\" required>\n                <mat-option value=\"yes\">Yes</mat-option>\n                <mat-option value=\"no\">No</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n  \n          <br>\n          <div class=\"example-container\" *ngIf=\"existpara=='yes'\">\n            <strong>Type of HTML template: </strong>\n            <p>\n                <i align=\"left\" [ngbTooltip]=\"table\">HTML Table</i> or\n                <i align=\"left\" [ngbTooltip]=\"list\">HTML List</i>\n            </p>\n            <mat-form-field>\n              <mat-select placeholder=\"the type of the parameter template\" formControlName=\"template\" required>\n                <mat-option value=\"table\">Table</mat-option>\n                <mat-option value=\"list\">List</mat-option>\n              </mat-select>\n            </mat-form-field>\n  \n            <br>\n            <strong>The key word before the parameter template</strong>\n            <p align=\"left\">\n                Look at each endpoint, and summarize the common keyword before parameter information.\n                <br> The common keyword could be:\n                <i [ngbTooltip]=\"table\">Parameters</i>, <i [ngbTooltip]=\"list\">Arguments</i>\n            </p>\n            <mat-form-field>\n              <mat-label>keyword before parameter template</mat-label>\n              <input matInput placeholder=\"parameter, argument, field, parameters...\" formControlName=\"paraKey\" required>\n            </mat-form-field>\n  \n            <!-- <br>\n            <strong> Stuffing between keyword and parameter template: \n                <i align=\"left\" [ngbTooltip]=\"list\">Whitespace</i> or \n                <i align=\"left\" >Multiply words</i>\n            </strong>\n            <mat-form-field>\n              <mat-select placeholder=\"stuffing between keyword and parameter template\" formControlName=\"paraMiddle\" required>\n                <mat-option value=\"whitespace\">Whitespace</mat-option>\n                <mat-option value=\"10\">1 or 2 words</mat-option>\n                <mat-option value=\"100\">3 or 10 words</mat-option>\n              </mat-select>\n            </mat-form-field> -->\n  \n            <!-- <p>Check the location order of Url and parameter template: </p>\n            <mat-form-field>\n              <mat-select placeholder=\"order of url and parameter template\" formControlName=\"url1para2\" required>\n                <mat-option value=\"yes\">Url first</mat-option>\n                <mat-option value=\"no\">Parameter template first</mat-option>\n              </mat-select>\n            </mat-form-field> -->\n  \n          </div>\n  \n  \n        </mat-card>\n  \n  \n        <div style=\"text-align:center\">\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n  \n    <mat-step>\n      <ng-template matStepLabel>Done</ng-template>\n  \n  \n  \n  \n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Generation</mat-card-title>\n          <mat-card-subtitle>You are now done. Ready to have the OpenAPI? </mat-card-subtitle>\n        </mat-card-header>\n  \n      </mat-card>\n  \n      <div style=\"text-align:center\">\n        <button mat-button matStepperPrevious>Back</button>\n        <button type=\"submit\" mat-button (click)=\"openModal(template)\">Done</button>\n        <!-- <button type=\"submit\" mat-raised-button color=\"primary\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Done</button> -->\n      </div>\n  \n      <!-- Modal -->\n      <ng-template #template>\n  \n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">OpenAPI Will Be Generated</h5>\n            <button type=\"button\" class=\"close\" (click)=\"modalRef.hide()\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n          </div>\n          <div class=\"modal-body\">\n            <p>The OpenAPI has been requested to be generated.</p>\n            <p> Wait several minutes and then, look at your OpenAPI page.</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.hide()\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\" onclick=\"window.location.href='/openapi'\">Go</button>\n          </div>\n        </div>\n  \n  \n      </ng-template>\n  \n    </mat-step>\n  </mat-horizontal-stepper>\n  \n  \n  <!-- Copyright 2017 Google Inc. All Rights Reserved.\n      Use of this source code is governed by an MIT-style license that\n      can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "../../../../../src/app/step/step.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-radio {\n  -ms-flex-item-align: left;\n      -ms-grid-row-align: left;\n      align-self: left;\n  margin: 0; }\n\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: auto;\n  width: 100%; }\n\n.example-container img {\n  width: 597px; }\n\n.example-container > * {\n  width: 100%; }\n\n.example-card {\n  width: 650px;\n  margin: auto; }\n\n.example-header-image {\n  background-image: url(\"/assets/img/shiba1.jpg\");\n  background-size: cover; }\n\n.example-h2 {\n  margin: 10px; }\n\n.example-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 60px; }\n\n.example-margin {\n  margin: 10px 0px; }\n\n.cc-selector input {\n  margin: 0;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.visa {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/mainUrl.png")) + "); }\n\n.mastercard {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/mainUrl.png")) + "); }\n\n.cc-selector input:active + .drinkcard-cc {\n  opacity: .9; }\n\n.cc-selector input:checked + .drinkcard-cc {\n  -webkit-filter: none;\n  -moz-filter: none;\n  filter: none; }\n\n.drinkcard-cc {\n  cursor: pointer;\n  background-size: contain;\n  background-repeat: no-repeat;\n  margin: auto;\n  transition: all 100ms ease-in;\n  -webkit-filter: brightness(1.8) grayscale(1) opacity(0.7);\n  -moz-filter: brightness(1.8) grayscale(1) opacity(0.7);\n  filter: brightness(1.8) grayscale(1) opacity(0.7); }\n\n.drinkcard-cc:hover {\n  -webkit-filter: brightness(1.2) grayscale(0.5) opacity(0.9);\n  -moz-filter: brightness(1.2) grayscale(0.5) opacity(0.9);\n  filter: brightness(1.2) grayscale(0.5) opacity(0.9); }\n\n/* Extras */\na:visited {\n  color: #888; }\n\na {\n  color: #444;\n  text-decoration: none; }\n\np {\n  margin-bottom: .3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/step/step.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_config_model__ = __webpack_require__("../../../../../src/app/models/config.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StepComponent = (function () {
    function StepComponent(_formBuilder, configService, modalService) {
        this._formBuilder = _formBuilder;
        this.configService = configService;
        this.modalService = modalService;
        this.isLinear = false;
        // stuffing = 'Whitespace';
        this.request = 'no';
        this.response = 'no';
        this.existpara = 'no';
        //Declaring the new confige object and initilizing it
        this.newConfig = new __WEBPACK_IMPORTED_MODULE_3__models_config_model__["a" /* default */]();
    }
    StepComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            apiName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            docUrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            filterUrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            mode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            reverse: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            stuffing: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            urlMiddle: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            urlAfter: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            urlTemplate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            urlKey: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            abbrevDelete: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
        this.threeFormGroup = this._formBuilder.group({
            reqKey: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            reqExample: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            reqMiddle: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            reqTemplate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            url1req2: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            resKey: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            resExample: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            resMiddle: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            resTemplate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            url1res2: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
        this.fourFormGroup = this._formBuilder.group({
            fourCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            test: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            paraKey: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            url1para2: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            paraMiddle: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            template: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    };
    StepComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
        this.create();
    };
    StepComponent.prototype.create = function () {
        var _this = this;
        this.receiveForm();
        this.configService.createConfig(this.newConfig)
            .subscribe(function (res) {
            console.log("-------new config------");
            console.log(_this.newConfig);
            console.log("-------res.data------");
            console.log(res);
            console.log("Success to create new config");
        });
    };
    StepComponent.prototype.receiveForm = function () {
        // first form
        // this.newConfig.apiName = this.firstFormGroup.value.apiName;
        this.newConfig.docUrl = this.firstFormGroup.value.docUrl;
        this.newConfig.filterUrl = this.firstFormGroup.value.filterUrl;
        this.newConfig.searchBase = false;
        this.newConfig.urlBase = "";
        // second form
        this.newConfig.mode = this.secondFormGroup.value.mode;
        this.newConfig.stuffing = this.secondFormGroup.value.stuffing;
        this.newConfig.reverse = this.secondFormGroup.value.reverse;
        this.newConfig.urlKey = this.secondFormGroup.value.urlKey;
        this.newConfig.urlMiddle = this.secondFormGroup.value.urlMiddle;
        this.newConfig.urlAfter = this.secondFormGroup.value.urlAfter;
        this.newConfig.urlTemplate = this.secondFormGroup.value.urlTemplate;
        this.newConfig.abbrevDelete = this.secondFormGroup.value.abbrevDelete;
        this.newConfig.existVerb = "yes";
        this.newConfig.verbKey = "";
        // third form   request
        if (this.request === "yes") {
            this.newConfig.reqKey = this.threeFormGroup.value.reqKey;
        }
        else {
            this.newConfig.reqKey = "no";
        }
        this.newConfig.reqExample = this.threeFormGroup.value.reqExample;
        this.newConfig.reqMiddle = this.threeFormGroup.value.reqMiddle;
        // this.newConfig.url1req2 = (this.threeFormGroup.value.url1req2==="yes")? true: false;
        this.newConfig.reqTemplate = this.threeFormGroup.value.reqTemplate;
        // third form   response
        if (this.response === "yes") {
            console.log(this.threeFormGroup.value.resKey);
            this.newConfig.reqKey = this.threeFormGroup.value.resKey;
            console.log(this.newConfig.reqKey);
        }
        else {
            this.newConfig.resKey = "no";
        }
        this.newConfig.resMiddle = this.threeFormGroup.value.resMiddle;
        this.newConfig.url1res2 = (this.threeFormGroup.value.url1res2 === "yes") ? true : false;
        this.newConfig.resTemplate = this.threeFormGroup.value.resTemplate;
        // this.newConfig.resExample= this.threeFormGroup.value.resExample;
        // four form  
        this.newConfig.existPara = (this.existpara === "yes") ? true : false;
        this.newConfig.paraKey = this.fourFormGroup.value.paraKey;
        this.newConfig.url1para2 = true;
        // this.newConfig.url1para2= (this.fourFormGroup.value.url1para2==="yes")? true: false;    
        // this.newConfig.paraMiddle= this.fourFormGroup.value.paraMiddle;
        this.newConfig.template = this.fourFormGroup.value.template;
        // default
        this.newConfig.apiName = "fakeName";
        this.newConfig.paraIn = "query";
        this.newConfig.number = "multiple";
        this.newConfig.url1req2 = true;
        this.newConfig.resExample = "((\\{)|(\\[)){1}(.*?)((\\})|(\\])){1}";
        this.newConfig.paraMiddle = "13";
    };
    StepComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-step',
            template: __webpack_require__("../../../../../src/app/step/step.component.html"),
            styles: [__webpack_require__("../../../../../src/app/step/step.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], StepComponent);
    return StepComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/img/mainUrl.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mainUrl.63b12ec3a4a4bc4b179e.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map