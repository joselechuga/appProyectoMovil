"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let HomePage = class HomePage {
    constructor() {
    }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".botonprod {\n  height: 30vh;\n}\n\nion-fab-button {\n  --background: #b7f399;\n  --background-activated: #87d361;\n  --background-hover: #a3e681;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0,0,0,.3), 0px 1px 3px 1px rgba(0,0,0,.15);\n  --color: black;\n}\n\n.botonnav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.cajabtninicio {\n  background-image: linear-gradient(to bottom, #4e4f52, #525556, #555859, #5b5d5d, #606060);\n  border-radius: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 89%;\n  height: 10vh;\n  width: 100%;\n}\n\nion-card {\n  width: 190px;\n  height: 254px;\n  background: transparent;\n  border: 2px solid #07ff07;\n  box-shadow: 2px 2px 15px #000000 inset;\n  text-align: center;\n  color: #e8e8e8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Pacifico\";\n}\n\nion-card:hover {\n  color: #07ff07;\n  box-shadow: 2px 2px 15px #07ff07 inset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSw2RUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBSUE7RUFDRSx5RkFBQTtFQUE0RixtQkFBQTtFQUM1RixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxzQ0FBQTtBQURGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdG9ucHJvZHtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbn1cclxuXHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6ICNiN2YzOTk7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzg3ZDM2MTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNhM2U2ODE7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIC0tYm94LXNoYWRvdzogMHB4IDFweCAycHggMHB4IHJnYmEoMCwwLDAsLjMpLCAwcHggMXB4IDNweCAxcHggcmdiYSgwLDAsMCwuMTUpO1xyXG4gIC0tY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYm90b25uYXZ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBcclxufVxyXG5cclxuLmNhamFidG5pbmljaW97XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzRlNGY1MiwgIzUyNTU1NiwgIzU1NTg1OSwgIzViNWQ1ZCwgIzYwNjA2MCk7ICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA4OSU7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuaW9uLWNhcmR7XHJcbiAgd2lkdGg6IDE5MHB4O1xyXG4gIGhlaWdodDogMjU0cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzA3ZmYwNztcclxuICBib3gtc2hhZG93OiAycHggMnB4IDE1cHggIzAwMDAwMCBpbnNldDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNlOGU4ZTg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nO1xyXG59XHJcblxyXG5pb24tY2FyZDpob3ZlciB7XHJcbiAgY29sb3I6ICMwN2ZmMDc7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4ICMwN2ZmMDcgaW5zZXQ7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title id=\"titulo\">\r\n      Tienda JOJO \r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div>\r\n    <h2>Descubre nuestros productos</h2>\r\n  </div>\r\n\r\n  <ion-button class=\"botonprod\" [routerLink]=\"['/catalogo-productos']\">\r\n    <img src=\"https://www.asicomsystems.com.mx/img/saas/dispositivos_img.png\" alt=\"\">\r\n  </ion-button>\r\n\r\n\r\n  <div class=\"cajabtninicio\">\r\n    <div class=\"botonnav\">\r\n      <ion-fab>\r\n        <ion-fab-button>\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-list side=\"start\">\r\n          <ion-fab-button [routerLink]=\"['/producto']\">\r\n            <ion-icon name=\"storefront-sharp\"></ion-icon>\r\n          </ion-fab-button>\r\n          <ion-fab-button [routerLink]=\"['/catalogo-productos']\">\r\n            <ion-icon name=\"gift-sharp\"></ion-icon>\r\n          </ion-fab-button>\r\n        </ion-fab-list>\r\n        <ion-fab-list side=\"end\">\r\n          <ion-fab-button [routerLink]=\"['/datos']\">\r\n            <ion-icon name=\"earth-sharp\"></ion-icon>\r\n          </ion-fab-button>\r\n          <ion-fab-button [routerLink]=\"['/perfil']\">\r\n            <ion-icon name=\"person-sharp\"></ion-icon>\r\n          </ion-fab-button>\r\n        </ion-fab-list>\r\n      </ion-fab>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map