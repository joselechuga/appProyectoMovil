"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_rickymorty_rickymorty_module_ts"],{

/***/ 2812:
/*!*********************************************************!*\
  !*** ./src/app/rickymorty/rickymorty-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RickymortyPageRoutingModule": () => (/* binding */ RickymortyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _rickymorty_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rickymorty.page */ 744);




const routes = [
    {
        path: '',
        component: _rickymorty_page__WEBPACK_IMPORTED_MODULE_0__.RickymortyPage
    }
];
let RickymortyPageRoutingModule = class RickymortyPageRoutingModule {
};
RickymortyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RickymortyPageRoutingModule);



/***/ }),

/***/ 1820:
/*!*************************************************!*\
  !*** ./src/app/rickymorty/rickymorty.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RickymortyPageModule": () => (/* binding */ RickymortyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _rickymorty_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rickymorty-routing.module */ 2812);
/* harmony import */ var _rickymorty_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rickymorty.page */ 744);







let RickymortyPageModule = class RickymortyPageModule {
};
RickymortyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _rickymorty_routing_module__WEBPACK_IMPORTED_MODULE_0__.RickymortyPageRoutingModule
        ],
        declarations: [_rickymorty_page__WEBPACK_IMPORTED_MODULE_1__.RickymortyPage]
    })
], RickymortyPageModule);



/***/ }),

/***/ 744:
/*!***********************************************!*\
  !*** ./src/app/rickymorty/rickymorty.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RickymortyPage": () => (/* binding */ RickymortyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _rickymorty_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rickymorty.page.html?ngResource */ 6294);
/* harmony import */ var _rickymorty_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rickymorty.page.scss?ngResource */ 7370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);





let RickymortyPage = class RickymortyPage {
    constructor(http) {
        this.http = http;
        this.personajes = [];
    }
    ngOnInit() {
        this.http.get('https://rickandmortyapi.com/api/character')
            .subscribe(res => {
            this.personajes = res.results;
            console.log('personajes', this.personajes);
        });
    }
};
RickymortyPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
RickymortyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-rickymorty',
        template: _rickymorty_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_rickymorty_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RickymortyPage);



/***/ }),

/***/ 7370:
/*!************************************************************!*\
  !*** ./src/app/rickymorty/rickymorty.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWNreW1vcnR5LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6294:
/*!************************************************************!*\
  !*** ./src/app/rickymorty/rickymorty.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"producto\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>rickymorty</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n <ion-list *ngFor=\"let i of personajes\">\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\" >\r\n      <img src=\"{{i.image}}\" alt=\"\">\r\n    </ion-avatar>\r\n    <ion-label>{{i.name}}</ion-label>\r\n  </ion-item>\r\n </ion-list>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_rickymorty_rickymorty_module_ts.js.map