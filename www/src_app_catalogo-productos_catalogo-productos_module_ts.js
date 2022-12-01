"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_catalogo-productos_catalogo-productos_module_ts"],{

/***/ 6802:
/*!*************************************************************************!*\
  !*** ./src/app/catalogo-productos/catalogo-productos-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogoProductosPageRoutingModule": () => (/* binding */ CatalogoProductosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _catalogo_productos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalogo-productos.page */ 1734);




const routes = [
    {
        path: '',
        component: _catalogo_productos_page__WEBPACK_IMPORTED_MODULE_0__.CatalogoProductosPage
    }
];
let CatalogoProductosPageRoutingModule = class CatalogoProductosPageRoutingModule {
};
CatalogoProductosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CatalogoProductosPageRoutingModule);



/***/ }),

/***/ 474:
/*!*****************************************************************!*\
  !*** ./src/app/catalogo-productos/catalogo-productos.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogoProductosPageModule": () => (/* binding */ CatalogoProductosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _catalogo_productos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalogo-productos-routing.module */ 6802);
/* harmony import */ var _catalogo_productos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogo-productos.page */ 1734);







let CatalogoProductosPageModule = class CatalogoProductosPageModule {
};
CatalogoProductosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _catalogo_productos_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatalogoProductosPageRoutingModule
        ],
        declarations: [_catalogo_productos_page__WEBPACK_IMPORTED_MODULE_1__.CatalogoProductosPage]
    })
], CatalogoProductosPageModule);



/***/ }),

/***/ 1734:
/*!***************************************************************!*\
  !*** ./src/app/catalogo-productos/catalogo-productos.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogoProductosPage": () => (/* binding */ CatalogoProductosPage)
/* harmony export */ });
/* harmony import */ var C_Users_medin_repoPrograMovil_appProyectoMovil_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _catalogo_productos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogo-productos.page.html?ngResource */ 3106);
/* harmony import */ var _catalogo_productos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalogo-productos.page.scss?ngResource */ 9843);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let CatalogoProductosPage = class CatalogoProductosPage {
  constructor(http, loadingCtrl) {
    this.http = http;
    this.loadingCtrl = loadingCtrl;
    this.productos = [];
  }

  ngOnInit() {
    this.http.get('https://636848caedc85dbc84e49015.mockapi.io/producto').subscribe(res => {
      this.productos = res;
      console.log('productos', this.productos);
      this.showLoading();
    });
  }

  showLoading() {
    var _this = this;

    return (0,C_Users_medin_repoPrograMovil_appProyectoMovil_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtrl.create({
        message: 'Cargando productos...',
        duration: 2000,
        spinner: 'dots'
      });
      loading.present();
    })();
  }

};

CatalogoProductosPage.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController
}];

CatalogoProductosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-catalogo-productos',
  template: _catalogo_productos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_catalogo_productos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CatalogoProductosPage);


/***/ }),

/***/ 9843:
/*!****************************************************************************!*\
  !*** ./src/app/catalogo-productos/catalogo-productos.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Anton&display=swap\");\nion-toolbar {\n  background-color: var(--ion-color-estilopropio);\n}\nion-title {\n  color: aliceblue;\n  -webkit-text-stroke: 1px black;\n  font-family: \"Anton\", sans-serif;\n  font-size: 30px;\n}\nion-card {\n  border-radius: 40px 5px 40px 5px;\n  height: 35vh;\n  background-color: cadetblue;\n  border: 2px solid rgb(4, 121, 12);\n  filter: drop-shadow(4px 4px 4px rgb(65, 65, 65));\n}\n.titulo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nh4 {\n  color: rgb(230, 228, 228);\n  -webkit-text-stroke: 2px black;\n  font-family: \"Anton\", sans-serif;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2dvLXByb2R1Y3Rvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJRLDBFQUFBO0FBekJSO0VBQ0ksK0NBQUE7QUFFSjtBQUNBO0VBQ0ksZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQ0E7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0RBQUE7QUFFSjtBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFSjtBQUdBO0VBQ0kseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6ImNhdGFsb2dvLXByb2R1Y3Rvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1lc3RpbG9wcm9waW8pO1xyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjphbGljZWJsdWU7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ0FudG9uJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4IDVweCA0MHB4IDVweDtcclxuICAgIGhlaWdodDogMzV2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig0LCAxMjEsIDEyKTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDRweCA0cHggcmdiKDY1LCA2NSwgNjUpKTtcclxufVxyXG5cclxuLnRpdHVsb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFudG9uJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuaDR7XHJcbiAgICBjb2xvcjogcmdiKDIzMCwgMjI4LCAyMjgpO1xyXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcblxyXG59Il19 */";

/***/ }),

/***/ 3106:
/*!****************************************************************************!*\
  !*** ./src/app/catalogo-productos/catalogo-productos.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"estilopropio\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>     \r\n    <ion-title>\r\n      Tienda JOJO\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n   <ion-list *ngFor=\"let i of productos\" [routerLink]=\"['/prod-detail/' + i.id]\">\r\n\r\n  <ion-card>\r\n    <img src=\"{{i.image}}\" alt=\"\">\r\n    <div class=\"titulo\">\r\n      <h4>{{i.name}}</h4>\r\n    </div>\r\n  </ion-card>\r\n </ion-list>\r\n\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_catalogo-productos_catalogo-productos_module_ts.js.map