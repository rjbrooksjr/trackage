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

Object.defineProperty(exports, "__esModule", { value: true });
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
                exports: [router_1.RouterModule],
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

Object.defineProperty(exports, "__esModule", { value: true });
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

Object.defineProperty(exports, "__esModule", { value: true });
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

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var ramda_1 = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var axios_1 = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var usps = __webpack_require__(/*! ../../../tracking_number_data/couriers/usps.json */ "./tracking_number_data/couriers/usps.json");
var node_html_parser_1 = __webpack_require__(/*! node-html-parser */ "./node_modules/node-html-parser/dist/index.js");
var util_1 = __webpack_require__(/*! ../common/util */ "./src/app/common/util.ts");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var foundTracking = [];
var storedTracking = [];
var refreshPopup = function () {
    chrome.tabs.query({ currentWindow: true, active: true }, ramda_1.pipe(ramda_1.head, ramda_1.prop('id'), setIcon));
    chrome.runtime.sendMessage({
        command: 'refresh',
        data: getTracking(),
    });
};
var saveTracking = function (callback) { return function (tracking) {
    return chrome.storage.local.set({ tracking: tracking }, callback);
}; };
var splitTrackingNumbers = function (data) {
    return data.map(function (row) { return row.trackingNumbers.map(function (trackingNumber) { return ({ courierCode: row.courierCode, trackingNumber: trackingNumber.replace(/[^a-zA-Z\d]/g, '') }); }); }).flat(Infinity);
};
var storeTrackingNumber = function (response, storedTracking) { return ramda_1.pipe(
// @ts-ignore
ramda_1.unionWith(ramda_1.both(ramda_1.eqBy(ramda_1.prop('courierCode')), ramda_1.eqBy(ramda_1.prop('trackingNumber'))), storedTracking), saveTracking(function () {
    refreshPopup();
    void refreshTracking();
}))(response); };
var compareTracking = function (x, y) {
    return x.courierCode === y.courierCode && x.trackingNumber === y.trackingNumber;
};
var getTracking = function () { return ({
    foundTracking: ramda_1.differenceWith(compareTracking, foundTracking, storedTracking),
    storedTracking: storedTracking,
}); };
var getTrackingStatus = function (tracking) { return tracking.courierCode === 'usps'
    ? axios_1.default.get(usps.tracking_numbers[0].tracking_url.replace('%s', tracking.trackingNumber))
        .then(ramda_1.prop('data'))
        .then(function (html) { return node_html_parser_1.parse(html); })
        .then(function (html) { return html.querySelector('.delivery_status').querySelector('strong').innerHTML.toString(); })
    : Promise.resolve(''); };
var setIcon = function (tabId) { return chrome.browserAction.setIcon(__assign({ path: getTracking().foundTracking.length > 0 ? './app/assets/add.png' : './app/assets/icon.png' }, tabId && { tabId: tabId })); };
var checkTab = function (tabId) { return chrome.tabs.sendMessage(tabId, {}, function (response) {
    foundTracking = [];
    chrome.storage.local.get('tracking', function (_a) {
        var tracking = _a.tracking;
        storedTracking = tracking || [];
        foundTracking = response ? splitTrackingNumbers(response) : [];
        setIcon(tabId);
    });
}); };
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
var refreshTracking = function () { return Promise.all(storedTracking.map(function (t) { return util_1.allKeys({
    trackingNumber: t.trackingNumber,
    status: getTrackingStatus(t),
    courierCode: t.courierCode,
}); }))
    .then(saveTracking(refreshPopup)); };
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
            chrome.tabs.query({ active: true, currentWindow: true, }, function (tabs) {
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

/***/ "./src/app/common/util.ts":
/*!********************************!*\
  !*** ./src/app/common/util.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var toObj = function (list) { return Object.assign({}, list); };
var evenKeys = function (_v, k) { return k % 2 === 0; };
var oddKeys = ramda_1.complement(evenKeys);
var formatList = function (tracking) { return ramda_1.pipe(ramda_1.reverse, ramda_1.split(''), ramda_1.map(parseInt))(tracking); };
var getSum = function (parityFn, tracking) { return ramda_1.pipe(toObj, ramda_1.pickBy(parityFn), ramda_1.values, ramda_1.sum)(tracking); };
exports.dummy = function (_serialData) { return true; };
exports.mod10 = function (_a) {
    var serial = _a.serial, checkDigit = _a.checkDigit, checksum = _a.checksum;
    var t = formatList(serial.replace(/[^\d]/g, ''));
    var sum = (getSum(evenKeys, t) * checksum.evens_multiplier) + (getSum(oddKeys, t) * checksum.odds_multiplier);
    return (10 - sum % 10) % 10 === parseInt(checkDigit);
};
var formatSerial = function (serial, numberFormat) {
    return numberFormat.prepend_if && new RegExp(numberFormat.prepend_if.matches_regex).test(serial)
        ? "" + numberFormat.prepend_if.content + serial
        : serial;
};
var matchTrackingData = function (trackingNumber, regex) {
    var match = new RegExp(regex.join('')).exec(trackingNumber);
    return match && {
        serial: match.groups.SerialNumber.replace(/\s/g, ''),
        checkDigit: match.groups.CheckDigit,
    };
};
exports.getSerialData = function (trackingNumber, 
// eslint-disable-next-line camelcase
_a) {
    var regex = _a.regex, _b = _a.validation, serial_number_format = _b.serial_number_format, checksum = _b.checksum;
    var trackingData = matchTrackingData(trackingNumber, regex);
    return {
        // eslint-disable-next-line camelcase
        serial: serial_number_format
            ? formatSerial(trackingData.serial, serial_number_format)
            : trackingData.serial,
        checkDigit: trackingData.checkDigit,
        checksum: checksum,
    };
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-unsafe-return
exports.log = function (t, x) { return (console.log(t, x), x); };
// todo clean this up
var zipObject = function (keys, values) {
    if (keys === void 0) { keys = []; }
    if (values === void 0) { values = []; }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment
    return keys.reduce(function (accumulator, key, index) {
        var _a;
        return (__assign(__assign({}, accumulator), (_a = {}, _a[key] = values[index], _a)));
    }, {});
};
// todo clean this shit up
exports.allKeys = function (obj) {
    var keys = Object.keys(obj);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return Promise.all(keys.map(function (key) {
        var value = obj[key];
        // @ts-ignore
        if (typeof value === 'object' && !value.then) {
            // @ts-ignore
            return exports.allKeys(value);
        }
        return value;
    }))
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        .then(function (result) { return zipObject(keys, result); });
};


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
Object.defineProperty(exports, "__esModule", { value: true });
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

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! ../services/log.service */ "./src/app/services/log.service.ts");
var i2 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
function ListComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelementStart(2, "p", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 7);
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "button", 9);
    i0.ɵɵlistener("click", function ListComponent_div_0_div_4_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r7); var tracking_r5 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.add(tracking_r5); });
    i0.ɵɵelementStart(7, "span", 10);
    i0.ɵɵelement(8, "i", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tracking_r5 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", tracking_r5.courierCode, " ", tracking_r5.trackingNumber, " ");
} }
function ListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2, "Found Tracking Numbers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵtemplate(4, ListComponent_div_0_div_4_Template, 9, 2, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r0.foundTracking);
} }
function ListComponent_div_4_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tracking_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tracking_r9.status);
} }
function ListComponent_div_4_div_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 15);
} }
function ListComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelementStart(2, "p", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7);
    i0.ɵɵelementStart(5, "p", 8);
    i0.ɵɵtemplate(6, ListComponent_div_4_div_1_span_6_Template, 2, 1, "span", 12);
    i0.ɵɵtemplate(7, ListComponent_div_4_div_1_ng_template_7_Template, 1, 0, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 7);
    i0.ɵɵelementStart(10, "button", 9);
    i0.ɵɵlistener("click", function ListComponent_div_4_div_1_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r15); var tracking_r9 = ctx.$implicit; var ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.remove(tracking_r9); });
    i0.ɵɵelementStart(11, "span", 10);
    i0.ɵɵelement(12, "i", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tracking_r9 = ctx.$implicit;
    var _r11 = i0.ɵɵreference(8);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", tracking_r9.courierCode, " ", tracking_r9.trackingNumber, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", tracking_r9.status)("ngIfElse", _r11);
} }
function ListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, ListComponent_div_4_div_1_Template, 13, 4, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.storedTracking);
} }
function ListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "p", 8);
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
    ListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["app-list"]], decls: 7, vars: 3, consts: [["class", "section", 4, "ngIf"], [1, "section"], ["class", "container", 4, "ngIf", "ngIfElse"], ["nothingStored", ""], [1, "container"], ["class", "columns is-mobile", 4, "ngFor", "ngForOf"], [1, "columns", "is-mobile"], [1, "column"], [1, "is-size-7"], [1, "button", "is-small", 3, "click"], [1, "icon", "is-small"], [1, "fas", "fa-plus"], [4, "ngIf", "ngIfElse"], ["statusLoading", ""], [1, "fas", "fa-trash"], [1, "fa", "fa-spinner", "fa-pulse", "fa-fw"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListComponent_div_0_Template, 5, 1, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "h2");
            i0.ɵɵtext(3, "Saved Tracking Numbers");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, ListComponent_div_4_Template, 2, 1, "div", 2);
            i0.ɵɵtemplate(5, ListComponent_ng_template_5_Template, 3, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r2 = i0.ɵɵreference(6);
            i0.ɵɵproperty("ngIf", ctx.foundTracking.length);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.storedTracking.length)("ngIfElse", _r2);
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

Object.defineProperty(exports, "__esModule", { value: true });
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

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var environment_1 = __webpack_require__(/*! ./app/environments/environment */ "./src/app/environments/environment.ts");
var __NgCli_bootstrap_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var __NgCli_bootstrap_2 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
__NgCli_bootstrap_2.platformBrowser().bootstrapModule(__NgCli_bootstrap_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./tracking_number_data/couriers/usps.json":
/*!*************************************************!*\
  !*** ./tracking_number_data/couriers/usps.json ***!
  \*************************************************/
/*! exports provided: name, courier_code, tracking_numbers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"United States Postal Service\",\"courier_code\":\"usps\",\"tracking_numbers\":[{\"tracking_url\":\"https://tools.usps.com/go/TrackConfirmAction?tLabels=%s\",\"name\":\"USPS 20\",\"description\":\"20 digit USPS numbers\",\"regex\":[\"\\\\s*(?<SerialNumber>\",\"(?<ServiceType>([0-9]\\\\s*){2})\",\"(?<ShipperId>([0-9]\\\\s*){9})\",\"(?<PackageId>([0-9]\\\\s*){8})\",\")\",\"(?<CheckDigit>[0-9]\\\\s*)\"],\"validation\":{\"checksum\":{\"name\":\"mod10\",\"evens_multiplier\":3,\"odds_multiplier\":1}},\"test_numbers\":{\"valid\":[\"0307 1790 0005 2348 3741\",\" 0 3 0 7   1 7 9 0   0 0 0 5   2 3 4 8   3 7 4 1 \",\"7112 3456 7891 2345 6787\"],\"invalid\":[\"0307 1790 0005 2348 3742\"]},\"additional\":[{\"name\":\"Service Type\",\"regex_group_name\":\"ServiceType\",\"lookup\":[{\"matches\":\"71\",\"name\":\"Certified Mail\"},{\"matches\":\"73\",\"name\":\"Insured Mail\"},{\"matches\":\"77\",\"name\":\"Registered Mail\"},{\"matches\":\"81\",\"name\":\"Return Receipt For Merchanise\"}]}]},{\"name\":\"USPS 34v2\",\"description\":\"variation on 34 digit USPS IMpd numbers\",\"regex\":[\"\\\\s*(?<RoutingApplicationId>4\\\\s*2\\\\s*0\\\\s*)(?<DestinationZip>([0-9]\\\\s*){5})\",\"(?<RoutingNumber>([0-9]\\\\s*){4})\",\"(?<SerialNumber>\",\"(?<ApplicationIdentifier>9\\\\s*[2345]\\\\s*)?\",\"(?<ShipperId>([0-9]\\\\s*){8})\",\"(?<PackageId>([0-9]\\\\s*){11})\",\")\",\"(?<CheckDigit>[0-9]\\\\s*)\"],\"validation\":{\"checksum\":{\"name\":\"mod10\",\"evens_multiplier\":3,\"odds_multiplier\":1}},\"tracking_url\":\"https://tools.usps.com/go/TrackConfirmAction?tLabels=%s\",\"test_numbers\":{\"valid\":[\"4201002334249200190132607600833457\",\"4201028200009261290113185417468510\",\" 4 2 0 1 0 2 8 2 0 0 0 0 9 2 6 1 2 9 0 1 1 3 1 8 5 4 1 7 4 6 8 5 1 0 \"],\"invalid\":[\"4201028200009261290113185417468511\"]}},{\"name\":\"USPS 91\",\"description\":\"USPS now calls this the IMpd barcode format\",\"regex\":[\"\\\\s*(?:(?<RoutingApplicationId>4\\\\s*2\\\\s*0\\\\s*)(?<DestinationZip>([0-9]\\\\s*){5}))?\",\"(?<SerialNumber>\",\"(?<ApplicationIdentifier>9\\\\s*[12345]\\\\s*)?\",\"(?<SCNC>([0-9]\\\\s*){2})\",\"(?<ServiceType>([0-9]\\\\s*){2})\",\"(?<ShipperId>([0-9]\\\\s*){8})\",\"(?<PackageId>([0-9]\\\\s*){11}|([0-9]\\\\s*){7})\",\")\",\"(?<CheckDigit>[0-9]\\\\s*)\"],\"validation\":{\"checksum\":{\"name\":\"mod10\",\"evens_multiplier\":3,\"odds_multiplier\":1},\"serial_number_format\":{\"prepend_if\":{\"matches_regex\":\"^(?!9[1-5]).+\",\"content\":\"91\"}}},\"tracking_url\":\"https://tools.usps.com/go/TrackConfirmAction?tLabels=%s\",\"test_numbers\":{\"valid\":[\"420 22153 9101026837331000039521\",\"7196 9010 7560 0307 7385\",\"9505 5110 6960 5048 6006 24\",\"9101 1234 5678 9000 0000 13\",\"92748931507708513018050063\",\"9400 1112 0108 0805 4830 16\",\"9361 2898 7870 0317 6337 95\",\" 9 3 6 1   2 8 9 8   7 8 7 0   0 3 1 7   6 3 3 7   9 5 \",\"9405803699300124287899\"],\"invalid\":[\"61299998820821171811\",\"9200000000000000000000\",\"420000000000000000000000000000\",\"420000009200000000000000000000\"]}}]}");

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