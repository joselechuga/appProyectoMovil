"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_datos_datos_module_ts"],{

/***/ 2217:
/*!***********************************************!*\
  !*** ./src/app/datos/datos-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosPageRoutingModule": () => (/* binding */ DatosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _datos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datos.page */ 4165);




const routes = [
    {
        path: '',
        component: _datos_page__WEBPACK_IMPORTED_MODULE_0__.DatosPage
    }
];
let DatosPageRoutingModule = class DatosPageRoutingModule {
};
DatosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DatosPageRoutingModule);



/***/ }),

/***/ 7652:
/*!***************************************!*\
  !*** ./src/app/datos/datos.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosPageModule": () => (/* binding */ DatosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _datos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datos-routing.module */ 2217);
/* harmony import */ var _datos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datos.page */ 4165);







let DatosPageModule = class DatosPageModule {
};
DatosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _datos_routing_module__WEBPACK_IMPORTED_MODULE_0__.DatosPageRoutingModule
        ],
        declarations: [_datos_page__WEBPACK_IMPORTED_MODULE_1__.DatosPage]
    })
], DatosPageModule);



/***/ }),

/***/ 4165:
/*!*************************************!*\
  !*** ./src/app/datos/datos.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosPage": () => (/* binding */ DatosPage)
/* harmony export */ });
/* harmony import */ var C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _datos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datos.page.html?ngResource */ 9404);
/* harmony import */ var _datos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datos.page.scss?ngResource */ 4000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _getdatos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getdatos.service */ 7736);







let DatosPage = class DatosPage {
  constructor(proovedor, loadingCtrl) {
    this.proovedor = proovedor;
    this.loadingCtrl = loadingCtrl;
  }

  ngOnInit() {
    this.proovedor.obtenerDatos().subscribe(data => {
      this.datos = data;
    }, error => {
      console.log(error);
    });
    this.conteo();
    this.showLoading();
  }

  showLoading() {
    var _this = this;

    return (0,C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtrl.create({
        message: 'Cargando datos...',
        duration: 3000,
        spinner: 'circles'
      });
      loading.present();
    })();
  }

  conteo() {
    setTimeout(function () {
      console.log('Datos');
    }, 1000);
  }

};

DatosPage.ctorParameters = () => [{
  type: _getdatos_service__WEBPACK_IMPORTED_MODULE_3__.GetdatosService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController
}];

DatosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-datos',
  template: _datos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_datos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DatosPage);


/***/ }),

/***/ 7736:
/*!*******************************************!*\
  !*** ./src/app/datos/getdatos.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetdatosService": () => (/* binding */ GetdatosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let GetdatosService = class GetdatosService {
    constructor(_http) {
        this._http = _http;
        this.urlapi = 'https://jsonplaceholder.typicode.com/users';
    }
    obtenerDatos() {
        return this._http.get('https://jsonplaceholder.typicode.com/photos');
    }
};
GetdatosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
GetdatosService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], GetdatosService);



/***/ }),

/***/ 4000:
/*!**************************************************!*\
  !*** ./src/app/datos/datos.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRvcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9404:
/*!**************************************************!*\
  !*** ./src/app/datos/datos.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"producto\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>datos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<!-- \r\n  Campos de datos:\r\n  -albumId\r\n  -id\r\n  -title\r\n  -url\r\n  -thumbnailUrl\r\n-->\r\n  <ion-card *ngFor=\"let dato of datos\">\r\n    <p>\r\n      <b>Titulo:</b> {{dato.title}}\r\n    </p>\r\n\r\n    <img src=\"{{dato.url}}\" alt=\"\">\r\n\r\n    \r\n  </ion-card>\r\n\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_datos_datos_module_ts.js.map