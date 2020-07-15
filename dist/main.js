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
    AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "router-outlet");
        } }, directives: [i1.RouterOutlet], styles: ["body[_ngcontent-%COMP%] {\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JpY2gvY29kZS9wdC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQ0NkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIHdpZHRoOiAzMDBweDtcbn0iLCJib2R5IHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuIl19 */"] });
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
                app_routing_module_1.AppRoutingModule,
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
                    background_component_1.BackgroundComponent,
                ],
                imports: [
                    platform_browser_1.BrowserModule,
                    app_routing_module_1.AppRoutingModule,
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
var foundTracking = [];
var storedTracking = [];
var refreshPopup = function () { return chrome.runtime.sendMessage({
    command: 'refresh',
    data: getTracking()
}); };
var saveTracking = function (tracking) { return chrome.storage.local.set({ tracking: tracking }, refreshPopup); };
var splitTrackingNumbers = function (data) {
    return data.map(function (row) { return row.trackingNumbers.map(function (trackingNumber) { return ({ courierCode: row.courierCode, trackingNumber: trackingNumber.replace(/[^a-zA-Z\d]/g, '') }); }); }).flat(Infinity);
};
var storeTrackingNumber = function (response, storedTracking) { return ramda_1.pipe(
// @ts-ignore
ramda_1.unionWith(ramda_1.both(ramda_1.eqBy(ramda_1.prop('courierCode')), ramda_1.eqBy(ramda_1.prop('trackingNumber'))), storedTracking), saveTracking)(response); };
var compareTracking = function (x, y) {
    return x.courierCode === y.courierCode && x.trackingNumber === y.trackingNumber;
};
var getTracking = function () { return ({
    foundTracking: ramda_1.differenceWith(compareTracking, foundTracking, storedTracking),
    storedTracking: storedTracking
}); };
var checkTab = function (tabId) { return chrome.tabs.sendMessage(tabId, {}, function (response) {
    foundTracking = [];
    chrome.storage.local.get('tracking', function (_a) {
        var tracking = _a.tracking;
        storedTracking = tracking || [];
        foundTracking = response ? splitTrackingNumbers(response) : [];
        chrome.browserAction.setIcon({
            path: foundTracking.length > 0 ? './app/assets/add.png' : './app/assets/icon.png',
            tabId: tabId
        });
    });
}); };
var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent() {
    }
    BackgroundComponent.prototype.ngOnInit = function () {
        this.addListeners();
        chrome.storage.local.get('tracking', function (_a) {
            var tracking = _a.tracking;
            return storedTracking = tracking || [];
        });
    };
    BackgroundComponent.prototype.addListeners = function () {
        chrome.tabs.onUpdated.addListener(function (_tabId, changeInfo, tab) { return changeInfo.status === 'complete' && tab.active &&
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                return tabs[0] && checkTab(tabs[0].id);
            }); });
        chrome.tabs.onActivated.addListener(function (_a) {
            var tabId = _a.tabId;
            return checkTab(tabId);
        });
        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            switch (request.command) {
                case 'getTracking':
                    sendResponse(getTracking());
                    break;
                case 'saveTracking':
                    storeTrackingNumber(request.data, storedTracking);
                    break;
                case 'removeTracking':
                    chrome.storage.local.set({
                        tracking: ramda_1.differenceWith(compareTracking, storedTracking, request.data)
                    });
                    break;
            }
        });
        chrome.storage.onChanged.addListener(function (changes) {
            if (changes.tracking) {
                storedTracking = changes.tracking.newValue;
                refreshPopup();
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
function ListComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "p", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 6);
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelementStart(6, "button", 8);
    i0.ɵɵlistener("click", function ListComponent_div_0_div_4_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r6); var tracking_r4 = ctx.$implicit; var ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.add(tracking_r4); });
    i0.ɵɵelementStart(7, "span", 9);
    i0.ɵɵelement(8, "i", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tracking_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", tracking_r4.courierCode, " ", tracking_r4.trackingNumber, " ");
} }
function ListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2, "Found Tracking Numbers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵtemplate(4, ListComponent_div_0_div_4_Template, 9, 2, "div", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r0.foundTracking);
} }
function ListComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "p", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 6);
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelementStart(6, "button", 8);
    i0.ɵɵlistener("click", function ListComponent_div_4_div_1_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r10); var tracking_r8 = ctx.$implicit; var ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.remove(tracking_r8); });
    i0.ɵɵelementStart(7, "span", 9);
    i0.ɵɵelement(8, "i", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tracking_r8 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", tracking_r8.courierCode, " ", tracking_r8.trackingNumber, " ");
} }
function ListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, ListComponent_div_4_div_1_Template, 9, 2, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.storedTracking);
} }
function ListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "p", 7);
    i0.ɵɵtext(2, "None Yet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
        chrome.runtime.sendMessage({ command: 'saveTracking', data: [tracking] });
    };
    ListComponent.prototype.remove = function (tracking) {
        chrome.runtime.sendMessage({ command: 'removeTracking', data: [tracking] });
    };
    ListComponent.prototype.addListeners = function () {
        var _this = this;
        chrome.runtime.onMessage.addListener(function (request) {
            switch (request.command) {
                case 'refresh':
                    _this.storedTracking = request.data.storedTracking;
                    _this.foundTracking = request.data.foundTracking;
                    _this.appRef.tick();
                    break;
            }
        });
    };
    ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(i0.ɵɵdirectiveInject(i0.ApplicationRef), i0.ɵɵdirectiveInject(i1.LogService)); };
    ListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["app-list"]], decls: 6, vars: 3, consts: [["class", "section", 4, "ngIf"], [1, "section"], ["class", "container", 4, "ngIf"], [1, "container"], ["class", "columns is-mobile", 4, "ngFor", "ngForOf"], [1, "columns", "is-mobile"], [1, "column"], [1, "is-size-7"], [1, "button", "is-small", 3, "click"], [1, "icon", "is-small"], [1, "fas", "fa-plus"], [1, "fas", "fa-trash"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListComponent_div_0_Template, 5, 1, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "h2");
            i0.ɵɵtext(3, "Saved Tracking Numbers");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, ListComponent_div_4_Template, 2, 1, "div", 2);
            i0.ɵɵtemplate(5, ListComponent_div_5_Template, 3, 0, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.foundTracking.length);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.storedTracking.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.storedTracking.length);
        } }, directives: [i2.NgIf, i2.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
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
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
    }], null, null); })();


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