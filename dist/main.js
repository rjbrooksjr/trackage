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

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var AddComponent = /** @class */ (function () {
    function AddComponent() {
    }
    AddComponent.prototype.ngOnInit = function () {
        // blablak
    };
    AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(); };
    AddComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddComponent, selectors: [["app-add"]], decls: 2, vars: 0, template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "add works!");
            i0.ɵɵelementEnd();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */"] });
    return AddComponent;
}());
exports.AddComponent = AddComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AddComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-add',
                templateUrl: './add.component.html',
                styleUrls: ['./add.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var list_component_1 = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
var background_component_1 = __webpack_require__(/*! ./background/background.component */ "./src/app/background/background.component.ts");
var add_component_1 = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var routes = [
    { path: 'list', component: list_component_1.ListComponent },
    { path: 'add', component: add_component_1.AddComponent },
    { path: 'background', component: background_component_1.BackgroundComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[router_1.RouterModule.forRoot(routes, { useHash: true })],
            router_1.RouterModule] });
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [router_1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppRoutingModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
                exports: [router_1.RouterModule]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "router-outlet");
        } }, directives: [i1.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var list_component_1 = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
var add_component_1 = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
var background_component_1 = __webpack_require__(/*! ./background/background.component */ "./src/app/background/background.component.ts");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
    AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ]] });
    return AppModule;
}());
exports.AppModule = AppModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [app_component_1.AppComponent,
        list_component_1.ListComponent,
        add_component_1.AddComponent,
        background_component_1.BackgroundComponent], imports: [platform_browser_1.BrowserModule,
        app_routing_module_1.AppRoutingModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    app_component_1.AppComponent,
                    list_component_1.ListComponent,
                    add_component_1.AddComponent,
                    background_component_1.BackgroundComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule,
                    app_routing_module_1.AppRoutingModule
                ],
                providers: [],
                bootstrap: [app_component_1.AppComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/background/background.component.ts":
/*!****************************************************!*\
  !*** ./src/app/background/background.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var ramda_1 = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! ../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
var pendingTrackingNumbers = [];
var saveTracking = function (tracking) { return chrome.storage.local.set({ tracking: tracking }, function () { }); };
var refresh = function (x) { return rxjs_1.identity; };
var splitTrackingNumbers = function (data) { return data.map(function (row) { return row.trackingNumbers.map(function (trackingNumber) { return ({ courierCode: row.courierCode, trackingNumber: trackingNumber.replace(/[^a-zA-Z\d]/g, '') }); }); }).flat(Infinity); };
var storeTrackingNumber = function (response) { return function (_a) {
    var tracking = _a.tracking;
    return rxjs_1.pipe(splitTrackingNumbers, 
    // @ts-ignore
    ramda_1.unionWith(ramda_1.both(ramda_1.eqBy(ramda_1.prop('courierCode')), ramda_1.eqBy(ramda_1.prop('trackingNumber'))), tracking), saveTracking)(response);
}; };
var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent(sharedDataService) {
        this.sharedDataService = sharedDataService;
    }
    BackgroundComponent.prototype.ngOnInit = function () {
        this.addListeners();
    };
    BackgroundComponent.prototype.addListeners = function () {
        var _this = this;
        chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) { return changeInfo.status === 'complete' && tab.active &&
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                return tabs[0] && chrome.tabs.sendMessage(tabs[0].id, {}, function (response) {
                    console.log('response', response);
                    console.log('got', splitTrackingNumbers(response));
                    // todo subttract anything in storage
                    var trackingNumbers = splitTrackingNumbers(response);
                    _this.sharedDataService.setFoundTracking(trackingNumbers);
                    response && chrome.storage.local.get('tracking', storeTrackingNumber(response));
                    console.log('woah', response && response.length > 0, response, response.length);
                    chrome.browserAction.setIcon({
                        path: trackingNumbers.length > 0 ? './app/assets/add.png' : './app/assets/icon.png',
                        tabId: tabs[0].id
                    });
                });
            }); });
    };
    BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) { return new (t || BackgroundComponent)(i0.ɵɵdirectiveInject(i1.SharedDataService)); };
    BackgroundComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BackgroundComponent, selectors: [["app-background"]], decls: 2, vars: 0, template: function BackgroundComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "background works!");
            i0.ɵɵelementEnd();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return BackgroundComponent;
}());
exports.BackgroundComponent = BackgroundComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BackgroundComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-background',
                templateUrl: './background.component.html',
                styleUrls: ['./background.component.scss']
            }]
    }], function () { return [{ type: i1.SharedDataService }]; }, null); })();


/***/ }),

/***/ "./src/app/environments/environment.ts":
/*!*********************************************!*\
  !*** ./src/app/environments/environment.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
exports.__esModule = true;
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
        console.log('LIST');
    };
    ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(); };
    ListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["app-list"]], decls: 2, vars: 0, template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "list works!!!omggghhh a lotssss");
            i0.ɵɵelementEnd();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return ListComponent;
}());
exports.ListComponent = ListComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ListComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/shared-data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/shared-data.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var SharedDataService = /** @class */ (function () {
    function SharedDataService() {
        this.foundTrackingMessage = new rxjs_1.BehaviorSubject([]);
        this.foundTracking = this.foundTrackingMessage.asObservable();
    }
    SharedDataService.prototype.setFoundTracking = function (tracking) {
        this.foundTrackingMessage.next(tracking);
    };
    SharedDataService.ɵfac = function SharedDataService_Factory(t) { return new (t || SharedDataService)(); };
    SharedDataService.ɵprov = i0.ɵɵdefineInjectable({ token: SharedDataService, factory: SharedDataService.ɵfac, providedIn: 'root' });
    return SharedDataService;
}());
exports.SharedDataService = SharedDataService;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SharedDataService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var environment_1 = __webpack_require__(/*! ./app/environments/environment */ "./src/app/environments/environment.ts");
var __NgCli_bootstrap_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var __NgCli_bootstrap_2 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
__NgCli_bootstrap_2.platformBrowser().bootstrapModule(__NgCli_bootstrap_1.AppModule)["catch"](function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rich/code/pt/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map