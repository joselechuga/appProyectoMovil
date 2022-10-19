"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_producto_producto_module_ts"],{

/***/ 4369:
/*!*****************************************************!*\
  !*** ./src/app/producto/producto-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoPageRoutingModule": () => (/* binding */ ProductoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _producto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto.page */ 8908);




const routes = [
    {
        path: '',
        component: _producto_page__WEBPACK_IMPORTED_MODULE_0__.ProductoPage
    }
];
let ProductoPageRoutingModule = class ProductoPageRoutingModule {
};
ProductoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductoPageRoutingModule);



/***/ }),

/***/ 3386:
/*!*********************************************!*\
  !*** ./src/app/producto/producto.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoPageModule": () => (/* binding */ ProductoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _producto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto-routing.module */ 4369);
/* harmony import */ var _producto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto.page */ 8908);







let ProductoPageModule = class ProductoPageModule {
};
ProductoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _producto_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductoPageRoutingModule
        ],
        declarations: [_producto_page__WEBPACK_IMPORTED_MODULE_1__.ProductoPage]
    })
], ProductoPageModule);



/***/ }),

/***/ 8908:
/*!*******************************************!*\
  !*** ./src/app/producto/producto.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoPage": () => (/* binding */ ProductoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _producto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto.page.html?ngResource */ 4532);
/* harmony import */ var _producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto.page.scss?ngResource */ 1353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let ProductoPage = class ProductoPage {
    constructor(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        //splash = true;
        //tabBarElement: any;
        this.producto = [];
        //this.tabBarElement = document.querySelector('.tabbar');
    }
    /**
     *   ionViewDidLoad(){
       // this.tabBarElement.style.display = 'none';
        setTimeout(() => {
          this.splash = false;
          //this.tabBarElement.style.display = 'flex';
        },1000);
      }
     */
    ngOnInit() {
        console.log('producto');
        this.permission = true;
        this.getproducto().subscribe(res => {
            console.log("Res", res);
            this.producto = res;
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
ProductoPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
ProductoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-producto',
        template: _producto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductoPage);



/***/ }),

/***/ 1353:
/*!********************************************************!*\
  !*** ./src/app/producto/producto.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  background-color: var(--ion-color-estilopropio);\n}\n\nion-content {\n  background-color: var(--ion-color-estip2);\n}\n\n/**\n#custom-overlay {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 100000;\n    width:100%;\n    background-color: #002a3e;\n  }\n\n  .flb {\n    background-color: #3ebffb;\n    height:100%;\n    width:100%;\n    animation: pulse 1s linear forwards;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .Aligner-item {\n    max-width: 50%;\n  }\n  .Aligner-item--top {\n    align-self: flex-start;\n  }\n  .Aligner-item--bottom {\n    align-self: flex-end;\n  }\n  #custom-overlay img {\n    display: block;\n    margin: 0 auto;\n    width: 50%;\n    height: auto;\n    animation: animation 3100ms linear infinite both;\n    animation-delay: 1s;\n  }\n\n  @keyframes pulse {\n    0% {\n      opacity:0;\n    }\n    100% {\n      opacity:1;\n    }\n  }\n\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5Q0FBQTtBQUNKOztBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJwcm9kdWN0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1lc3RpbG9wcm9waW8pO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1lc3RpcDIpO1xyXG59XHJcbiAgLyoqXHJcbiNjdXN0b20tb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDAwMDA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmEzZTtcclxuICB9XHJcbiAgXHJcbiAgLmZsYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ViZmZiO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAxcyBsaW5lYXIgZm9yd2FyZHM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuQWxpZ25lci1pdGVtIHtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gIH1cclxuICAuQWxpZ25lci1pdGVtLS10b3Age1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICB9XHJcbiAgLkFsaWduZXItaXRlbS0tYm90dG9tIHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIH1cclxuICAjY3VzdG9tLW92ZXJsYXkgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRpb24gMzEwMG1zIGxpbmVhciBpbmZpbml0ZSBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OjA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiovIl19 */";

/***/ }),

/***/ 4532:
/*!********************************************************!*\
  !*** ./src/app/producto/producto.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<!-- <div id=\"custom-overlay\" [style.display]=\"splash ? 'flex': 'none'\">\r\n  <div class=\"flb\">\r\n    <div class=\"Aligner-item Aligner-item--top\"></div>\r\n    <img src=\"assets/icon/favicon.png\" alt=\"\">\r\n    <div class=\"Aligner-item Aligner-item--bottom\"></div>\r\n  </div>\r\n</div>\r\n-->\r\n\r\n<ion-header>\r\n  <ion-toolbar color=\"estilopropio\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>     \r\n    <ion-title>\r\n      Tienda JOJO\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content>\r\n\r\n  <ion-row>\r\n    <ion-col sizeLg=\"6\" sizeMd=\"6\" sizeXs=\"12\" *ngFor=\" let productos of producto\">\r\n      <ion-card>\r\n        <img src=\"../../assets/producto-imagen/{{productos.imagen}}\">\r\n        <div class=\"card-title\">{{productos.name}}</div>\r\n      </ion-card>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_producto_producto_module_ts.js.map