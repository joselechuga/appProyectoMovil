(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ingresado_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingresado.guard */ 4612);
/* harmony import */ var _no_ingresado_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-ingresado.guard */ 4218);





const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule),
        canActivate: [_ingresado_guard__WEBPACK_IMPORTED_MODULE_0__.IngresadoGuard]
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(m => m.LoginPageModule),
        canActivate: [_no_ingresado_guard__WEBPACK_IMPORTED_MODULE_1__.NoIngresadoGuard]
    },
    {
        path: 'registro',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_registro_registro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./registro/registro.module */ 636)).then(m => m.RegistroPageModule),
        canActivate: [_no_ingresado_guard__WEBPACK_IMPORTED_MODULE_1__.NoIngresadoGuard]
    },
    {
        path: 'producto',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_producto_producto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./producto/producto.module */ 3386)).then(m => m.ProductoPageModule)
    },
    {
        path: 'perfil',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_perfil_perfil_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./perfil/perfil.module */ 1320)).then(m => m.PerfilPageModule)
    },
    {
        path: 'datos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_datos_datos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./datos/datos.module */ 7652)).then(m => m.DatosPageModule)
    },
    {
        path: 'rickymorty',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_rickymorty_rickymorty_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./rickymorty/rickymorty.module */ 1820)).then(m => m.RickymortyPageModule)
    },
    {
        path: 'ubicacion',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ubicacion_ubicacion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ubicacion/ubicacion.module */ 7922)).then(m => m.UbicacionPageModule)
    },
    {
        path: 'category',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_category_category_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./category/category.module */ 6914)).then(m => m.CategoryPageModule)
    },
    {
        path: 'person',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_person_person_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./person/person.module */ 6280)).then(m => m.PersonPageModule)
    },
    {
        path: 'person',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_person_person_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./person/person.module */ 6280)).then(m => m.PersonPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let AppComponent = class AppComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    salir() {
        localStorage.removeItem('ingresado');
        this.navCtrl.navigateRoot('login');
        console.log('salir');
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 7954);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 1714);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 2820);












let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy },
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__.SQLite,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 4612:
/*!************************************!*\
  !*** ./src/app/ingresado.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresadoGuard": () => (/* binding */ IngresadoGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 3819);



let IngresadoGuard = class IngresadoGuard {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    canActivate(route, state) {
        if (localStorage.getItem('ingresado')) {
            return true;
        }
        else {
            this.navCtrl.navigateRoot('login');
            return false;
        }
    }
};
IngresadoGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.NavController }
];
IngresadoGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], IngresadoGuard);



/***/ }),

/***/ 4218:
/*!***************************************!*\
  !*** ./src/app/no-ingresado.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoIngresadoGuard": () => (/* binding */ NoIngresadoGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 3819);



let NoIngresadoGuard = class NoIngresadoGuard {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    canActivate(route, state) {
        if (localStorage.getItem('ingresado')) {
            this.navCtrl.navigateRoot('producto');
            return false;
        }
        else {
            return true;
        }
    }
};
NoIngresadoGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.NavController }
];
NoIngresadoGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], NoIngresadoGuard);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-26477881_js-node_modules_ionic_core_dist_esm_t-6bed99",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-26477881_js-node_modules_ionic_core_dist_esm_t-6bed99",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  background-color: var(--ion-color-estip2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWVzdGlwMik7XHJcbn0iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\">\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-title>Menu</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content>\r\n        <ion-list>\r\n          <ion-menu-toggle auto-hide=\"false\">\r\n            <ion-item [routerDirection]=\"'home'\" [routerLink]=\"'/producto'\">\r\n              <ion-icon slot=\"start\" [name]=\"'list'\"></ion-icon>\r\n              <ion-label>\r\n                Producto\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item [routerDirection]=\"'home'\" [routerLink]=\"'/datos'\">\r\n              <ion-icon slot=\"start\" name=\"globe-sharp\"></ion-icon>\r\n              <ion-label>\r\n                datos\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item [routerDirection]=\"'home'\" [routerLink]=\"'/rickymorty'\">\r\n              <ion-icon slot=\"start\" name=\"earth-sharp\"></ion-icon>\r\n              <ion-label>\r\n                Api Rick & Morty \r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item [routerDirection]=\"'root'\" [routerLink]=\"'/perfil'\">\r\n              <ion-icon slot=\"start\" [name]=\"'person-outline'\"></ion-icon>\r\n              <ion-label>\r\n                Perfil\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item [routerDirection]=\"'categoria'\" [routerLink]=\"'/category'\">\r\n              <ion-icon slot=\"start\" [name]=\"'albums-outline'\"></ion-icon>\r\n              <ion-label>\r\n                Categoria\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item [routerDirection]=\"'personal'\" [routerLink]=\"'/person'\">\r\n              <ion-icon slot=\"start\" [name]=\"'accessibility-outline'\"></ion-icon>\r\n              <ion-label>\r\n                Personal\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item (click)=\"salir()\" [routerDirection]=\"'home'\" [routerLink]=\"'/login'\">\r\n              <ion-icon slot=\"start\" name=\"log-out-outline\"></ion-icon>\r\n              <ion-label>\r\n                Cerrar sesion\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu> \r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n\r\n<!--\r\nCOMPONENT ORIGINAL \r\n<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n-->";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiLi9zcmMvYXBwL2luZ3Jlc2Fkby5ndWFyZC50cyIsIi4vc3JjL2FwcC9uby1pbmdyZXNhZG8uZ3VhcmQudHMiLCIuL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCIuL3NyYy9tYWluLnRzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vIGxhenkgXlxcLlxcLy4qXFwuZW50cnlcXC5qcyQgaW5jbHVkZTogXFwuZW50cnlcXC5qcyQgZXhjbHVkZTogXFwuc3lzdGVtXFwuZW50cnlcXC5qcyQgbmFtZXNwYWNlIG9iamVjdCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcmVsb2FkQWxsTW9kdWxlcywgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBJbmdyZXNhZG9HdWFyZCB9IGZyb20gJy4vaW5ncmVzYWRvLmd1YXJkJztcclxuaW1wb3J0IHsgTm9JbmdyZXNhZG9HdWFyZCB9IGZyb20gJy4vbm8taW5ncmVzYWRvLmd1YXJkJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIHJlZGlyZWN0VG86ICdsb2dpbicsXHJcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2hvbWUnLFxyXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vaG9tZS9ob21lLm1vZHVsZScpLnRoZW4oIG0gPT4gbS5Ib21lUGFnZU1vZHVsZSksXHJcbiAgICBjYW5BY3RpdmF0ZTpbSW5ncmVzYWRvR3VhcmRdXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnbG9naW4nLFxyXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vbG9naW4vbG9naW4ubW9kdWxlJykudGhlbiggbSA9PiBtLkxvZ2luUGFnZU1vZHVsZSksXHJcbiAgICBjYW5BY3RpdmF0ZTpbTm9JbmdyZXNhZG9HdWFyZF1cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdyZWdpc3RybycsXHJcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9yZWdpc3Ryby9yZWdpc3Ryby5tb2R1bGUnKS50aGVuKCBtID0+IG0uUmVnaXN0cm9QYWdlTW9kdWxlKSxcclxuICAgIGNhbkFjdGl2YXRlOltOb0luZ3Jlc2Fkb0d1YXJkXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3Byb2R1Y3RvJyxcclxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3Byb2R1Y3RvL3Byb2R1Y3RvLm1vZHVsZScpLnRoZW4oIG0gPT4gbS5Qcm9kdWN0b1BhZ2VNb2R1bGUpXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAncGVyZmlsJyxcclxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3BlcmZpbC9wZXJmaWwubW9kdWxlJykudGhlbiggbSA9PiBtLlBlcmZpbFBhZ2VNb2R1bGUpXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnZGF0b3MnLFxyXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vZGF0b3MvZGF0b3MubW9kdWxlJykudGhlbiggbSA9PiBtLkRhdG9zUGFnZU1vZHVsZSlcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdyaWNreW1vcnR5JyxcclxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3JpY2t5bW9ydHkvcmlja3ltb3J0eS5tb2R1bGUnKS50aGVuKCBtID0+IG0uUmlja3ltb3J0eVBhZ2VNb2R1bGUpXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAndWJpY2FjaW9uJyxcclxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3ViaWNhY2lvbi91YmljYWNpb24ubW9kdWxlJykudGhlbiggbSA9PiBtLlViaWNhY2lvblBhZ2VNb2R1bGUpXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnY2F0ZWdvcnknLFxyXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vY2F0ZWdvcnkvY2F0ZWdvcnkubW9kdWxlJykudGhlbiggbSA9PiBtLkNhdGVnb3J5UGFnZU1vZHVsZSlcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdwZXJzb24nLFxyXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vcGVyc29uL3BlcnNvbi5tb2R1bGUnKS50aGVuKCBtID0+IG0uUGVyc29uUGFnZU1vZHVsZSlcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdwZXJzb24nLFxyXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vcGVyc29uL3BlcnNvbi5tb2R1bGUnKS50aGVuKCBtID0+IG0uUGVyc29uUGFnZU1vZHVsZSlcclxuICB9LFxyXG5cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzLCB7IHByZWxvYWRpbmdTdHJhdGVneTogUHJlbG9hZEFsbE1vZHVsZXMgfSlcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9hZGluZ0NvbnRyb2xsZXIsIE5hdkNvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2FwcC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlcikge31cclxuXHJcblxyXG4gIHNhbGlyKCl7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaW5ncmVzYWRvJyk7XHJcbiAgICB0aGlzLm5hdkN0cmwubmF2aWdhdGVSb290KCdsb2dpbicpO1xyXG4gICAgY29uc29sZS5sb2coJ3NhbGlyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBSb3V0ZVJldXNlU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgSW9uaWNNb2R1bGUsIElvbmljUm91dGVTdHJhdGVneSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgU3BsYXNoU2NyZWVuIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcGxhc2gtc2NyZWVuL25neCc7XHJcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3RhdHVzLWJhci9uZ3gnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcclxuXHJcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXHJcbmltcG9ydCB7QnJvd3NlckFuaW1hdGlvbnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IFNRTGl0ZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3FsaXRlL25neCc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtdLFxyXG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLCBJb25pY01vZHVsZS5mb3JSb290KCksIEFwcFJvdXRpbmdNb2R1bGUsSHR0cENsaWVudE1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBTdGF0dXNCYXIsXHJcbiAgICBTcGxhc2hTY3JlZW4sXHJcbiAgICB7IHByb3ZpZGU6IFJvdXRlUmV1c2VTdHJhdGVneSwgdXNlQ2xhc3M6IElvbmljUm91dGVTdHJhdGVneSB9LFxyXG4gICAgU1FMaXRlLFxyXG4gIF0sXHJcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOYXZDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmdyZXNhZG9HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIpe31cclxuXHJcbiAgY2FuQWN0aXZhdGUoXHJcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlIHtcclxuICAgICAgXHJcbiAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmdyZXNhZG8nKSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZVJvb3QoJ2xvZ2luJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOYXZDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb0luZ3Jlc2Fkb0d1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDpOYXZDb250cm9sbGVyKXt9XHJcblxyXG4gIGNhbkFjdGl2YXRlKFxyXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHwgUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT4gfCBib29sZWFuIHwgVXJsVHJlZSB7XHJcblxyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZ3Jlc2FkbycpKXtcclxuICAgICAgdGhpcy5uYXZDdHJsLm5hdmlnYXRlUm9vdCgncHJvZHVjdG8nKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIH1cclxuICBcclxufVxyXG4iLCIvLyBUaGlzIGZpbGUgY2FuIGJlIHJlcGxhY2VkIGR1cmluZyBidWlsZCBieSB1c2luZyB0aGUgYGZpbGVSZXBsYWNlbWVudHNgIGFycmF5LlxyXG4vLyBgbmcgYnVpbGQgLS1wcm9kYCByZXBsYWNlcyBgZW52aXJvbm1lbnQudHNgIHdpdGggYGVudmlyb25tZW50LnByb2QudHNgLlxyXG4vLyBUaGUgbGlzdCBvZiBmaWxlIHJlcGxhY2VtZW50cyBjYW4gYmUgZm91bmQgaW4gYGFuZ3VsYXIuanNvbmAuXHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XHJcbiAgcHJvZHVjdGlvbjogZmFsc2VcclxufTtcclxuXHJcbi8qXHJcbiAqIEZvciBlYXNpZXIgZGVidWdnaW5nIGluIGRldmVsb3BtZW50IG1vZGUsIHlvdSBjYW4gaW1wb3J0IHRoZSBmb2xsb3dpbmcgZmlsZVxyXG4gKiB0byBpZ25vcmUgem9uZSByZWxhdGVkIGVycm9yIHN0YWNrIGZyYW1lcyBzdWNoIGFzIGB6b25lLnJ1bmAsIGB6b25lRGVsZWdhdGUuaW52b2tlVGFza2AuXHJcbiAqXHJcbiAqIFRoaXMgaW1wb3J0IHNob3VsZCBiZSBjb21tZW50ZWQgb3V0IGluIHByb2R1Y3Rpb24gbW9kZSBiZWNhdXNlIGl0IHdpbGwgaGF2ZSBhIG5lZ2F0aXZlIGltcGFjdFxyXG4gKiBvbiBwZXJmb3JtYW5jZSBpZiBhbiBlcnJvciBpcyB0aHJvd24uXHJcbiAqL1xyXG4vLyBpbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lLWVycm9yJzsgIC8vIEluY2x1ZGVkIHdpdGggQW5ndWxhciBDTEkuXHJcbiIsImltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5cclxuaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcclxuICBlbmFibGVQcm9kTW9kZSgpO1xyXG59XHJcblxyXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSlcclxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW9uLWFjY29yZGlvbl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ3OSxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWFjY29yZGlvbl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1hY3Rpb24tc2hlZXQuZW50cnkuanNcIjogW1xuXHRcdDU1OTMsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1hY3Rpb24tc2hlZXRfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWFsZXJ0LmVudHJ5LmpzXCI6IFtcblx0XHQzMjI1LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYWxlcnRfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWFwcF84LmVudHJ5LmpzXCI6IFtcblx0XHQ0ODEyLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYXBwXzhfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWF2YXRhcl8zLmVudHJ5LmpzXCI6IFtcblx0XHQ2NjU1LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWF2YXRhcl8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1iYWNrLWJ1dHRvbi5lbnRyeS5qc1wiOiBbXG5cdFx0NDg1Nixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWJhY2stYnV0dG9uX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1iYWNrZHJvcC5lbnRyeS5qc1wiOiBbXG5cdFx0MzA1OSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1iYWNrZHJvcF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYnJlYWRjcnVtYl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ4NjQ4LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYnJlYWRjcnVtYl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1idXR0b25fMi5lbnRyeS5qc1wiOiBbXG5cdFx0ODMwOCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1idXR0b25fMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tY2FyZF81LmVudHJ5LmpzXCI6IFtcblx0XHQ0NjkwLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWNhcmRfNV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tY2hlY2tib3guZW50cnkuanNcIjogW1xuXHRcdDQwOTAsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tY2hlY2tib3hfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWNoaXAuZW50cnkuanNcIjogW1xuXHRcdDYyMTQsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tY2hpcF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tY29sXzMuZW50cnkuanNcIjogW1xuXHRcdDk0NDcsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tY29sXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWRhdGV0aW1lLWJ1dHRvbi5lbnRyeS5qc1wiOiBbXG5cdFx0Nzk1MCxcblx0XHRcImRlZmF1bHQtbm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21fcGFyc2UtMjY0Nzc4ODFfanMtbm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21fdC02YmVkOTlcIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1kYXRldGltZS1idXR0b25fZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWRhdGV0aW1lXzMuZW50cnkuanNcIjogW1xuXHRcdDk2ODksXG5cdFx0XCJkZWZhdWx0LW5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX3BhcnNlLTI2NDc3ODgxX2pzLW5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX3QtNmJlZDk5XCIsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1kYXRldGltZV8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1mYWJfMy5lbnRyeS5qc1wiOiBbXG5cdFx0ODg0MCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWZhYl8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1pbWcuZW50cnkuanNcIjogW1xuXHRcdDc0OSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pbWdfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWluZmluaXRlLXNjcm9sbF8yLmVudHJ5LmpzXCI6IFtcblx0XHQ5NjY3LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24taW5maW5pdGUtc2Nyb2xsXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWlucHV0LmVudHJ5LmpzXCI6IFtcblx0XHQzMjg4LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWlucHV0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1pdGVtLW9wdGlvbl8zLmVudHJ5LmpzXCI6IFtcblx0XHQ1NDczLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24taXRlbS1vcHRpb25fM19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24taXRlbV84LmVudHJ5LmpzXCI6IFtcblx0XHQzNjM0LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24taXRlbV84X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1sb2FkaW5nLmVudHJ5LmpzXCI6IFtcblx0XHQyODU1LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWxvYWRpbmdfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLW1lbnVfMy5lbnRyeS5qc1wiOiBbXG5cdFx0NDk1LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tbWVudV8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1tb2RhbC5lbnRyeS5qc1wiOiBbXG5cdFx0ODczNyxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLW1vZGFsX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1uYXZfMi5lbnRyeS5qc1wiOiBbXG5cdFx0OTYzMixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLW5hdl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1waWNrZXItY29sdW1uLWludGVybmFsLmVudHJ5LmpzXCI6IFtcblx0XHQ0NDQ2LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcGlja2VyLWNvbHVtbi1pbnRlcm5hbF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcGlja2VyLWludGVybmFsLmVudHJ5LmpzXCI6IFtcblx0XHQyMjc1LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXBpY2tlci1pbnRlcm5hbF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcG9wb3Zlci5lbnRyeS5qc1wiOiBbXG5cdFx0ODA1MCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXBvcG92ZXJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXByb2dyZXNzLWJhci5lbnRyeS5qc1wiOiBbXG5cdFx0ODk5NCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1wcm9ncmVzcy1iYXJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXJhZGlvXzIuZW50cnkuanNcIjogW1xuXHRcdDM1OTIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcmFkaW9fMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcmFuZ2UuZW50cnkuanNcIjogW1xuXHRcdDU0NTQsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1yYW5nZV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcmVmcmVzaGVyXzIuZW50cnkuanNcIjogW1xuXHRcdDI5MCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJlZnJlc2hlcl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yZW9yZGVyXzIuZW50cnkuanNcIjogW1xuXHRcdDI2NjYsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1yZW9yZGVyXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXJpcHBsZS1lZmZlY3QuZW50cnkuanNcIjogW1xuXHRcdDQ4MTYsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcmlwcGxlLWVmZmVjdF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcm91dGVfNC5lbnRyeS5qc1wiOiBbXG5cdFx0NTUzNCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1yb3V0ZV80X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1zZWFyY2hiYXIuZW50cnkuanNcIjogW1xuXHRcdDQ5MDIsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zZWFyY2hiYXJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNlZ21lbnRfMi5lbnRyeS5qc1wiOiBbXG5cdFx0MTkzOCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNlZ21lbnRfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc2VsZWN0XzMuZW50cnkuanNcIjogW1xuXHRcdDgxNzksXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc2VsZWN0XzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNsaWRlXzIuZW50cnkuanNcIjogW1xuXHRcdDY2OCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zbGlkZV8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1zcGlubmVyLmVudHJ5LmpzXCI6IFtcblx0XHQxNjI0LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc3Bpbm5lcl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc3BsaXQtcGFuZS5lbnRyeS5qc1wiOiBbXG5cdFx0OTk4OSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zcGxpdC1wYW5lX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10YWItYmFyXzIuZW50cnkuanNcIjogW1xuXHRcdDg5MDIsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10YWItYmFyXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXRhYl8yLmVudHJ5LmpzXCI6IFtcblx0XHQxOTksXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10YWJfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdGV4dC5lbnRyeS5qc1wiOiBbXG5cdFx0ODM5NSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10ZXh0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10ZXh0YXJlYS5lbnRyeS5qc1wiOiBbXG5cdFx0NjM1Nyxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10ZXh0YXJlYV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdG9hc3QuZW50cnkuanNcIjogW1xuXHRcdDgyNjgsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tdG9hc3RfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXRvZ2dsZS5lbnRyeS5qc1wiOiBbXG5cdFx0NTI2OSxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRvZ2dsZV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdmlydHVhbC1zY3JvbGwuZW50cnkuanNcIjogW1xuXHRcdDI4NzUsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tdmlydHVhbC1zY3JvbGxfZW50cnlfanNcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgxKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSA4NjM7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzddfQ==