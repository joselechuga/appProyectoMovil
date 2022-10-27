"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ubicacion_ubicacion_module_ts"],{

/***/ 3468:
/*!*******************************************************!*\
  !*** ./src/app/ubicacion/ubicacion-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UbicacionPageRoutingModule": () => (/* binding */ UbicacionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ubicacion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ubicacion.page */ 132);




const routes = [
    {
        path: '',
        component: _ubicacion_page__WEBPACK_IMPORTED_MODULE_0__.UbicacionPage
    }
];
let UbicacionPageRoutingModule = class UbicacionPageRoutingModule {
};
UbicacionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UbicacionPageRoutingModule);



/***/ }),

/***/ 7922:
/*!***********************************************!*\
  !*** ./src/app/ubicacion/ubicacion.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UbicacionPageModule": () => (/* binding */ UbicacionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ubicacion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ubicacion-routing.module */ 3468);
/* harmony import */ var _ubicacion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ubicacion.page */ 132);







let UbicacionPageModule = class UbicacionPageModule {
};
UbicacionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ubicacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.UbicacionPageRoutingModule
        ],
        declarations: [_ubicacion_page__WEBPACK_IMPORTED_MODULE_1__.UbicacionPage]
    })
], UbicacionPageModule);



/***/ }),

/***/ 132:
/*!*********************************************!*\
  !*** ./src/app/ubicacion/ubicacion.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UbicacionPage": () => (/* binding */ UbicacionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ubicacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ubicacion.page.html?ngResource */ 8492);
/* harmony import */ var _ubicacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ubicacion.page.scss?ngResource */ 328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 6457);





let UbicacionPage = class UbicacionPage {
    constructor(geolocation) {
        this.geolocation = geolocation;
    }
    ngOnInit() {
        this.geolocationNative();
    }
    geolocationNative() {
        this.geolocation.getCurrentPosition().then((geposition) => {
            console.log(geposition);
            this.ubicacion = geposition;
            console.log('ubicacion', this.ubicacion);
        });
    }
};
UbicacionPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation }
];
UbicacionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ubicacion',
        template: _ubicacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ubicacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UbicacionPage);



/***/ }),

/***/ 328:
/*!**********************************************************!*\
  !*** ./src/app/ubicacion/ubicacion.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1YmljYWNpb24ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 8492:
/*!**********************************************************!*\
  !*** ./src/app/ubicacion/ubicacion.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>ubicacion</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<h1>Ubicacion actual: {{ubicacion}}</h1>\r\n<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.2910105622063!2d-70.68033748426696!3d-33.363467800440596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c7025c925e0f%3A0x7f2f6a657c08d14a!2sDuoc%20UC%3A%20Sede%20Plaza%20Norte!5e0!3m2!1ses!2scl!4v1665114360929!5m2!1ses!2scl\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_ubicacion_ubicacion_module_ts.js.map