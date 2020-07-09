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
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var routes = [
    { path: 'list', component: list_component_1.ListComponent },
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
    AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["id", "main", 1, "section"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "router-outlet");
            i0.ɵɵelementEnd();
        } }, directives: [i1.RouterOutlet], styles: ["div#main[_ngcontent-%COMP%] {\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JpY2gvY29kZS9wdC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQ0NkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2I21haW4ge1xuICB3aWR0aDogMzAwcHg7XG59IiwiZGl2I21haW4ge1xuICB3aWR0aDogMzAwcHg7XG59XG4iXX0= */"] });
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
        background_component_1.BackgroundComponent], imports: [platform_browser_1.BrowserModule,
        app_routing_module_1.AppRoutingModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    app_component_1.AppComponent,
                    list_component_1.ListComponent,
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
var ramda_1 = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var saveTracking = function (tracking) { return chrome.storage.local.set({ tracking: tracking }); };
var splitTrackingNumbers = function (data) {
    return data.map(function (row) { return row.trackingNumbers.map(function (trackingNumber) { return ({ courierCode: row.courierCode, trackingNumber: trackingNumber.replace(/[^a-zA-Z\d]/g, '') }); }); }).flat(Infinity);
};
var storeTrackingNumber = function (response, storedTracking) { return ramda_1.pipe(
// @ts-ignore
ramda_1.unionWith(ramda_1.both(ramda_1.eqBy(ramda_1.prop('courierCode')), ramda_1.eqBy(ramda_1.prop('trackingNumber'))), storedTracking), saveTracking)(response); };
var compareTracking = function (x, y) {
    return x.courierCode === y.courierCode && x.trackingNumber === y.trackingNumber;
};
var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent() {
        this.foundTracking = [];
        this.storedTracking = [];
    }
    BackgroundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addListeners();
        chrome.storage.local.get('tracking', function (_a) {
            var tracking = _a.tracking;
            return _this.storedTracking = tracking || [];
        });
    };
    BackgroundComponent.prototype.addListeners = function () {
        var _this = this;
        chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) { return changeInfo.status === 'complete' && tab.active &&
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                return tabs[0] && chrome.tabs.sendMessage(tabs[0].id, {}, function (response) {
                    chrome.storage.local.get('tracking', function (_a) {
                        var tracking = _a.tracking;
                        _this.storedTracking = tracking;
                        // todo move this filtering to view
                        _this.foundTracking = ramda_1.differenceWith(compareTracking, splitTrackingNumbers(response), _this.storedTracking);
                        chrome.browserAction.setIcon({
                            path: _this.foundTracking.length > 0 ? './app/assets/add.png' : './app/assets/icon.png',
                            tabId: tabs[0].id
                        });
                    });
                });
            }); });
        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            console.log('i got message', request);
            switch (request.command) {
                case 'getTracking':
                    sendResponse({ foundTracking: _this.foundTracking, storedTracking: _this.storedTracking });
                    break;
                case 'saveTracking':
                    storeTrackingNumber(request.data, _this.storedTracking);
                    break;
                case 'removeTracking':
                    chrome.storage.local.set({ tracking: ramda_1.differenceWith(compareTracking, _this.storedTracking, request.data) });
                    break;
            }
        });
        chrome.storage.onChanged.addListener(function (changes, namespace) {
            console.log('storage change', namespace, changes);
            if (changes.tracking) {
                console.log('sending message');
                _this.storedTracking = changes.tracking.newValue;
                chrome.runtime.sendMessage({ command: 'refresh', data: { foundTracking: _this.foundTracking, storedTracking: _this.storedTracking } });
            }
        });
    };
    BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) { return new (t || BackgroundComponent)(); };
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
    }], null, null); })();


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
var i1 = __webpack_require__(/*! ../services/log.service */ "./src/app/services/log.service.ts");
var i2 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
function ListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 4);
    i0.ɵɵelementStart(5, "button", 5);
    i0.ɵɵlistener("click", function ListComponent_div_3_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r4); var tracking_r2 = ctx.$implicit; var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.add(tracking_r2); });
    i0.ɵɵelementStart(6, "span", 6);
    i0.ɵɵelement(7, "i", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tracking_r2 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(tracking_r2.trackingNumber);
} }
function ListComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    var _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "a", 8);
    i0.ɵɵlistener("click", function ListComponent_p_6_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r7); var tracking_r5 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.remove(tracking_r5); });
    i0.ɵɵtext(3, "remove");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tracking_r5 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", tracking_r5.courierCode, " ");
} }
var ListComponent = /** @class */ (function () {
    function ListComponent(appRef, log) {
        this.appRef = appRef;
        this.log = log;
        this.foundTracking = [];
        this.storedTracking = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.refresh();
        this.addListeners();
    };
    ListComponent.prototype.refresh = function () {
        var _this = this;
        chrome.runtime.sendMessage({ command: 'getTracking' }, function (response) {
            _this.foundTracking = response.foundTracking;
            _this.storedTracking = response.storedTracking;
            _this.appRef.tick();
        });
    };
    ListComponent.prototype.add = function (tracking) {
        this.log.background('i will add', tracking);
        chrome.runtime.sendMessage({ command: 'saveTracking', data: [tracking] });
    };
    ListComponent.prototype.remove = function (tracking) {
        chrome.runtime.sendMessage({ command: 'removeTracking', data: [tracking] });
    };
    ListComponent.prototype.addListeners = function () {
        var _this = this;
        chrome.runtime.onMessage.addListener(function (request) {
            _this.log.background('i got a message', request);
            switch (request.command) {
                case 'refresh':
                    _this.log.background('i got a refresh', request);
                    _this.storedTracking = request.data.storedTracking;
                    _this.foundTracking = request.data.foundTracking;
                    _this.appRef.tick();
                    break;
            }
        });
    };
    ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(i0.ɵɵdirectiveInject(i0.ApplicationRef), i0.ɵɵdirectiveInject(i1.LogService)); };
    ListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["app-list"]], decls: 7, vars: 3, consts: [[1, "container"], ["class", "columns is-mobile", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "columns", "is-mobile"], [1, "column"], [1, "button", "is-small", 3, "click"], [1, "icon", "is-small"], [1, "fas", "fa-plus"], [3, "click"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "Hey9");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 0);
            i0.ɵɵtemplate(3, ListComponent_div_3_Template, 8, 1, "div", 1);
            i0.ɵɵelementStart(4, "h2");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, ListComponent_p_6_Template, 4, 1, "p", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.foundTracking);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Stored (", ctx.storedTracking.length, ")");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.storedTracking);
        } }, directives: [i2.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
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
    }], function () { return [{ type: i0.ApplicationRef }, { type: i1.LogService }]; }, null); })();


/***/ }),

/***/ "./src/app/services/log.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/log.service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var LogService = /** @class */ (function () {
    function LogService() {
    }
    LogService.prototype.background = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = chrome.extension.getBackgroundPage().console).log.apply(_a, args);
    };
    LogService.ɵfac = function LogService_Factory(t) { return new (t || LogService)(); };
    LogService.ɵprov = i0.ɵɵdefineInjectable({ token: LogService, factory: LogService.ɵfac, providedIn: 'root' });
    return LogService;
}());
exports.LogService = LogService;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LogService, [{
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