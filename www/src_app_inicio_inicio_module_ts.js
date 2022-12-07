"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inicio_inicio_module_ts"],{

/***/ 9681:
/*!*************************************************!*\
  !*** ./src/app/inicio/inicio-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageRoutingModule": () => (/* binding */ InicioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/login.page */ 6825);
/* harmony import */ var _registrar_registrar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../registrar/registrar.page */ 7395);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio.page */ 8476);






const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_2__.InicioPage,
        children: [
            {
                path: 'login',
                component: _login_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
            },
            {
                path: 'registrar',
                component: _registrar_registrar_page__WEBPACK_IMPORTED_MODULE_1__.RegistrarPage
            }
        ]
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ 3185:
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageModule": () => (/* binding */ InicioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-routing.module */ 9681);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page */ 8476);







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioPageRoutingModule
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_1__.InicioPage]
    })
], InicioPageModule);



/***/ }),

/***/ 8476:
/*!***************************************!*\
  !*** ./src/app/inicio/inicio.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPage": () => (/* binding */ InicioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _inicio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page.html?ngResource */ 4588);
/* harmony import */ var _inicio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page.scss?ngResource */ 1075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let InicioPage = class InicioPage {
    constructor(router, alertController, navCtrl) {
        this.router = router;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.router.navigate(['inicio']);
    }
    ngOnInit() {
    }
    segmentChanged($event) {
        console.log($event.detail.value);
        let direction = $event.detail.value;
        this.router.navigate(['inicio/' + direction]);
    }
};
InicioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
InicioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-inicio',
        template: _inicio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_inicio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InicioPage);



/***/ }),

/***/ 1075:
/*!****************************************************!*\
  !*** ./src/app/inicio/inicio.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n.imageninicio {\n  position: relative;\n  top: 15px;\n}\n.head {\n  --ion-background-color: #92c6b9;\n}\n.body {\n  --ion-background-color: #92c6b9;\n}\n.seccionchilds {\n  height: 70vh;\n}\n.icono {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\nion-button {\n  width: 100%;\n}\nsmall {\n  color: black;\n}\nsmall {\n  display: flex;\n  justify-content: center;\n}\nion-card-title,\nion-title {\n  font-family: \"Righteous\", cursive;\n  -webkit-text-stroke: 0.5px rgba(0, 140, 255, 0.962);\n  font-size: 30px;\n}\nion-item {\n  border-radius: 35px;\n  padding: 5px;\n}\n.encabezado {\n  background-color: #2b7686;\n}\nion-card {\n  background-color: #f5f7f7;\n  border-radius: 25px;\n}\n.botonescarta {\n  display: flex;\n  flex-direction: column;\n  height: 15vh;\n  width: 100vw;\n  right: 10px;\n}\n.botones1 {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.botones2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nbutton {\n  border: 1px solid rgb(95, 95, 95);\n  height: 8vh;\n  width: 28vw;\n  background-color: #374649;\n  color: #f5f7f7;\n  font-family: \"Righteous\", cursive;\n  font-size: 20px;\n}\n.inicio1 {\n  width: 50vw;\n  border-radius: 20px 0 0 0;\n}\n.inicio2 {\n  width: 50vw;\n  border-radius: 0 20px 0 0;\n}\n.invitadoboton {\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEVBQUE7QUFFUjtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQUFKO0FBR0E7RUFDSSwrQkFBQTtBQUFKO0FBR0E7RUFDSSwrQkFBQTtBQUFKO0FBR0E7RUFDSSxZQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFBSjtBQUtBO0VBQ0ksV0FBQTtBQUZKO0FBS0E7RUFDSSxZQUFBO0FBRko7QUFNQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUhKO0FBTUE7O0VBRUksaUNBQUE7RUFDQSxtREFBQTtFQUNBLGVBQUE7QUFISjtBQU1BO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBSEo7QUFNQTtFQUNJLHlCQUFBO0FBSEo7QUFNQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQU1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSEo7QUFNQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSEo7QUFNQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSEo7QUFNQTtFQUNJLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUFISjtBQU1BO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBSEo7QUFNQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQUhKO0FBTUE7RUFDSSxZQUFBO0FBSEoiLCJmaWxlIjoiaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5pbWFnZW5pbmljaW97XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM5MmM2Yjk7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM5MmM2Yjk7XHJcbn1cclxuXHJcbi5zZWNjaW9uY2hpbGRzIHtcclxuICAgIGhlaWdodDogNzB2aDtcclxufVxyXG5cclxuLmljb25vIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuc21hbGwge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuc21hbGwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSxcclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuNXB4IHJnYmEoMCwgMTQwLCAyNTUsIDAuOTYyKTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmVuY2FiZXphZG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiNzY4NjtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5ib3RvbmVzY2FydGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICByaWdodDogMTBweDtcclxufVxyXG5cclxuLmJvdG9uZXMxIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3RvbmVzMiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk1LCA5NSwgOTUpO1xyXG4gICAgaGVpZ2h0OiA4dmg7XHJcbiAgICB3aWR0aDogMjh2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzQ2NDk7XHJcbiAgICBjb2xvcjogI2Y1ZjdmNztcclxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmluaWNpbzEge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDAgMCAwO1xyXG59XHJcblxyXG4uaW5pY2lvMiB7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDA7XHJcbn1cclxuXHJcbi5pbnZpdGFkb2JvdG9uIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxufSJdfQ== */";

/***/ }),

/***/ 4588:
/*!****************************************************!*\
  !*** ./src/app/inicio/inicio.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"head\">\r\n    <ion-title>JOJO APP</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"body\">\r\n\r\n  <div class=\"seccionchilds\">\r\n    <div class=\"imageninicio\">\r\n      <img src=\"../../assets/fondos/JoJosbizarre.png\" alt=\"\">\r\n    </div>\r\n    <ion-router-outlet></ion-router-outlet>\r\n  </div>\r\n\r\n\r\n  <ion-card>\r\n    <ion-toolbar>\r\n      <ion-segment value=\"inicio\" (ionChange)=\"segmentChanged($event)\">\r\n\r\n        <ion-segment-button value=\"login\">\r\n          <small>Login</small>  \r\n          <ion-icon name=\"log-in-sharp\"></ion-icon>\r\n        </ion-segment-button>\r\n\r\n        <ion-segment-button value=\"registrar\">\r\n          <small>Registro</small>\r\n          <ion-icon name=\"accessibility-sharp\"></ion-icon>\r\n        </ion-segment-button>\r\n        \r\n      </ion-segment>\r\n    </ion-toolbar>\r\n  </ion-card>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_inicio_inicio_module_ts.js.map