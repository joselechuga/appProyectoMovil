"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registrar_registrar_module_ts"],{

/***/ 8542:
/*!*******************************************************!*\
  !*** ./src/app/registrar/registrar-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrarPageRoutingModule": () => (/* binding */ RegistrarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _registrar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrar.page */ 7395);




const routes = [
    {
        path: '',
        component: _registrar_page__WEBPACK_IMPORTED_MODULE_0__.RegistrarPage
    }
];
let RegistrarPageRoutingModule = class RegistrarPageRoutingModule {
};
RegistrarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistrarPageRoutingModule);



/***/ }),

/***/ 7811:
/*!***********************************************!*\
  !*** ./src/app/registrar/registrar.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrarPageModule": () => (/* binding */ RegistrarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registrar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrar-routing.module */ 8542);
/* harmony import */ var _registrar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registrar.page */ 7395);







let RegistrarPageModule = class RegistrarPageModule {
};
RegistrarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registrar_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrarPageRoutingModule
        ],
        declarations: [_registrar_page__WEBPACK_IMPORTED_MODULE_1__.RegistrarPage]
    })
], RegistrarPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_registrar_registrar_module_ts.js.map