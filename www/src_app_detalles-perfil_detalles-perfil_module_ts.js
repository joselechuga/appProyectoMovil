"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_detalles-perfil_detalles-perfil_module_ts"],{

/***/ 8170:
/*!************************************************************!*\
  !*** ./src/app/detail-perfil2/detail-perfil2.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPerfil2Component": () => (/* binding */ DetailPerfil2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _detail_perfil2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-perfil2.component.html?ngResource */ 7661);
/* harmony import */ var _detail_perfil2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-perfil2.component.scss?ngResource */ 7064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let DetailPerfil2Component = class DetailPerfil2Component {
    constructor() { }
    ngOnInit() { }
};
DetailPerfil2Component.ctorParameters = () => [];
DetailPerfil2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-detail-perfil2',
        template: _detail_perfil2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detail_perfil2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailPerfil2Component);



/***/ }),

/***/ 352:
/*!**********************************************************!*\
  !*** ./src/app/detail-perfil/detail-perfil.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPerfilComponent": () => (/* binding */ DetailPerfilComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _detail_perfil_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-perfil.component.html?ngResource */ 7134);
/* harmony import */ var _detail_perfil_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-perfil.component.scss?ngResource */ 2249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let DetailPerfilComponent = class DetailPerfilComponent {
    constructor() { }
    ngOnInit() { }
};
DetailPerfilComponent.ctorParameters = () => [];
DetailPerfilComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-detail-perfil',
        template: _detail_perfil_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detail_perfil_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailPerfilComponent);



/***/ }),

/***/ 4687:
/*!*******************************************************************!*\
  !*** ./src/app/detalles-perfil/detalles-perfil-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetallesPerfilPageRoutingModule": () => (/* binding */ DetallesPerfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _detail_perfil_detail_perfil_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../detail-perfil/detail-perfil.component */ 352);
/* harmony import */ var _detail_perfil2_detail_perfil2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../detail-perfil2/detail-perfil2.component */ 8170);
/* harmony import */ var _detalles_perfil_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalles-perfil.page */ 7046);






const routes = [
    {
        path: '',
        component: _detalles_perfil_page__WEBPACK_IMPORTED_MODULE_2__.DetallesPerfilPage,
        children: [
            {
                path: 'detail-perfil',
                component: _detail_perfil_detail_perfil_component__WEBPACK_IMPORTED_MODULE_0__.DetailPerfilComponent
            },
            {
                path: 'detail-perfil2',
                component: _detail_perfil2_detail_perfil2_component__WEBPACK_IMPORTED_MODULE_1__.DetailPerfil2Component
            },
        ]
    }
];
let DetallesPerfilPageRoutingModule = class DetallesPerfilPageRoutingModule {
};
DetallesPerfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], DetallesPerfilPageRoutingModule);



/***/ }),

/***/ 7718:
/*!***********************************************************!*\
  !*** ./src/app/detalles-perfil/detalles-perfil.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetallesPerfilPageModule": () => (/* binding */ DetallesPerfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _detalles_perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalles-perfil-routing.module */ 4687);
/* harmony import */ var _detalles_perfil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalles-perfil.page */ 7046);







let DetallesPerfilPageModule = class DetallesPerfilPageModule {
};
DetallesPerfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detalles_perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetallesPerfilPageRoutingModule
        ],
        declarations: [_detalles_perfil_page__WEBPACK_IMPORTED_MODULE_1__.DetallesPerfilPage]
    })
], DetallesPerfilPageModule);



/***/ }),

/***/ 7046:
/*!*********************************************************!*\
  !*** ./src/app/detalles-perfil/detalles-perfil.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetallesPerfilPage": () => (/* binding */ DetallesPerfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _detalles_perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalles-perfil.page.html?ngResource */ 2114);
/* harmony import */ var _detalles_perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalles-perfil.page.scss?ngResource */ 9742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let DetallesPerfilPage = class DetallesPerfilPage {
    constructor(router) {
        this.router = router;
        this.router.navigate(['detalles-perfil/detail-perfil']);
    }
    ngOnInit() {
    }
    segmentChanged($event) {
        console.log($event.detail.value);
        let direction = $event.detail.value;
        if (direction == 'salir') {
            localStorage.removeItem('ingresado');
            this.router.navigate(['login']);
        }
        else {
            this.router.navigate(['detalles-perfil/' + direction]);
        }
    }
};
DetallesPerfilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
DetallesPerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-detalles-perfil',
        template: _detalles_perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detalles_perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetallesPerfilPage);



/***/ }),

/***/ 7064:
/*!*************************************************************************!*\
  !*** ./src/app/detail-perfil2/detail-perfil2.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtcGVyZmlsMi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 2249:
/*!***********************************************************************!*\
  !*** ./src/app/detail-perfil/detail-perfil.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Fruktur&display=swap\");\nion-card {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n}\nion-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 10px;\n  background-image: url('halloween.jpg');\n}\niframe {\n  height: 50vh;\n}\n.textohalloween {\n  font-size: 30px;\n  font-family: \"Fruktur\", cursive;\n  -webkit-text-stroke: 1px rgb(203, 84, 10);\n}\n.gif {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1wZXJmaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNEVBQUE7QUFFUjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUVBQUE7QUFBSjtBQUdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtBQUFKO0FBR0E7RUFDSSxZQUFBO0FBQUo7QUFFQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLHlDQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoiZGV0YWlsLXBlcmZpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZydWt0dXImZGlzcGxheT1zd2FwJyk7XHJcblxyXG5pb24tY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoLi4vLi4vYXNzZXRzL2ZvbmRvcy9oYWxsb3dlZW4uanBnKTtcclxufVxyXG5cclxuaWZyYW1le1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG59XHJcbi50ZXh0b2hhbGxvd2VlbntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnRnJ1a3R1cicsIGN1cnNpdmU7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggcmdiKDIwMywgODQsIDEwKTtcclxufVxyXG5cclxuLmdpZntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59Il19 */";

/***/ }),

/***/ 9742:
/*!**********************************************************************!*\
  !*** ./src/app/detalles-perfil/detalles-perfil.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  background-color: var(--ion-color-estilopropio);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsbGVzLXBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBQTtBQUNKIiwiZmlsZSI6ImRldGFsbGVzLXBlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1lc3RpbG9wcm9waW8pO1xyXG4gIH1cclxuICAiXX0= */";

/***/ }),

/***/ 7661:
/*!*************************************************************************!*\
  !*** ./src/app/detail-perfil2/detail-perfil2.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<p>\n  detail-perfil2 works!\n</p>\n";

/***/ }),

/***/ 7134:
/*!***********************************************************************!*\
  !*** ./src/app/detail-perfil/detail-perfil.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<p>\n  Hola! Conoce los detalles de tu perfil\n    \n  <ion-card>\n    <ion-item class=\"gif\">\n      <iframe src=\"https://giphy.com/embed/100TIDBVCq8Zji\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>\n    </ion-item>\n\n    <ion-item>\n      <h2 class=\"textohalloween\">SE VIENE JAGUOLIN !</h2>\n    </ion-item>\n    \n  </ion-card>\n</p>\n\n";

/***/ }),

/***/ 2114:
/*!**********************************************************************!*\
  !*** ./src/app/detalles-perfil/detalles-perfil.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"estilopropio\">\n    <ion-back-button slot=\"start\" defaultHref=\"perfil\"></ion-back-button>\n    <ion-title>detalles-perfil</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-segment value=\"detalles-perfil\" (ionChange)=\"segmentChanged($event)\">\n      <ion-segment-button  value=\"detail-perfil\">\n        <ion-icon name=\"caret-forward-circle-sharp\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button  value=\"detail-perfil2\">\n        <ion-icon name=\"moon-sharp\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"salir\">\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-router-outlet></ion-router-outlet>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_detalles-perfil_detalles-perfil_module_ts.js.map