"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_productos_productos_module_ts"],{

/***/ 4484:
/*!*******************************************************!*\
  !*** ./src/app/productos/productos-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductosPageRoutingModule": () => (/* binding */ ProductosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _productos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productos.page */ 5610);




const routes = [
    {
        path: '',
        component: _productos_page__WEBPACK_IMPORTED_MODULE_0__.ProductosPage
    }
];
let ProductosPageRoutingModule = class ProductosPageRoutingModule {
};
ProductosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductosPageRoutingModule);



/***/ }),

/***/ 1011:
/*!***********************************************!*\
  !*** ./src/app/productos/productos.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductosPageModule": () => (/* binding */ ProductosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _productos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productos-routing.module */ 4484);
/* harmony import */ var _productos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productos.page */ 5610);







let ProductosPageModule = class ProductosPageModule {
};
ProductosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _productos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductosPageRoutingModule
        ],
        declarations: [_productos_page__WEBPACK_IMPORTED_MODULE_1__.ProductosPage]
    })
], ProductosPageModule);



/***/ }),

/***/ 5610:
/*!*********************************************!*\
  !*** ./src/app/productos/productos.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductosPage": () => (/* binding */ ProductosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _productos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productos.page.html?ngResource */ 2178);
/* harmony import */ var _productos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productos.page.scss?ngResource */ 1760);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);







let ProductosPage = class ProductosPage {
    constructor(activatedRoute, http) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.producto = [];
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get("id");
        this.idfinal = this.id - 1;
        console.log("id", this.id);
        this.getproducto().subscribe(res => {
            console.log("Res", res);
            this.producto = res;
            this.name = this.producto[this.idfinal].name;
            this.imagen = this.producto[this.idfinal].imagen;
            this.desc = this.producto[this.idfinal].desc;
        });
    }
    getproducto() {
        return this.http
            .get("assets/files/producto.json")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res.data;
        }));
    }
};
ProductosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
ProductosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-productos',
        template: _productos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_productos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductosPage);



/***/ }),

/***/ 1760:
/*!**********************************************************!*\
  !*** ./src/app/productos/productos.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  background-color: var(--ion-color-estilopropio);\n}\n\nion-content {\n  background-color: var(--ion-color-estip2);\n}\n\n.desc {\n  margin: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Rvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBQTtBQUNKOztBQUVBO0VBQ0kseUNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJwcm9kdWN0b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZXN0aWxvcHJvcGlvKTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZXN0aXAyKTtcclxufVxyXG5cclxuLmRlc2N7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 2178:
/*!**********************************************************!*\
  !*** ./src/app/productos/productos.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"estilopropio\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <img src=\"../../assets/producto-imagen/{{imagen}}\" />\r\n  </ion-card>\r\n  <div class=\"desc\">\r\n    {{desc}}\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_productos_productos_module_ts.js.map