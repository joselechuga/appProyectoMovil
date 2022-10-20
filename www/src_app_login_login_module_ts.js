"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);








let LoginPage = class LoginPage {
  constructor(router, fb, alertController, navCtrl) {
    this.router = router;
    this.fb = fb;
    this.alertController = alertController;
    this.navCtrl = navCtrl;
    this.user = {
      usuario: "",
      password: ""
    };
    this.formularioLogin = this.fb.group({
      'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
    });
  }

  ngOnInit() {}

  ingresar() {
    var _this = this;

    return (0,C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var f = _this.formularioLogin.value;
      var usuario = JSON.parse(localStorage.getItem('usuario'));

      if (usuario.nombre == f.nombre && usuario.password == f.password) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        let navigationExtras = {
          state: {
            user: _this.user
          }
        };

        _this.router.navigate(['/producto'], navigationExtras);
      } else {
        const alert = yield _this.alertController.create({
          header: 'Datos incorrectos!',
          message: 'Usuario y/o contraseña incorrectos',
          buttons: ['Aceptar']
        });
        yield alert.present();
        return;
      }
    })();
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=DynaPuff&display=swap\");\n.body {\n  background-color: red;\n}\n.icono {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\n.titulologin {\n  font-family: \"DynaPuff\", cursive;\n  -webkit-text-stroke: 0.5px rgba(0, 140, 255, 0.962);\n  font-size: 30px;\n}\nion-button {\n  width: 100%;\n}\nsmall {\n  color: black;\n}\nsmall {\n  display: flex;\n  justify-content: center;\n}\nion-card-title, ion-title {\n  font-family: \"DynaPuff\", cursive;\n  -webkit-text-stroke: 0.5px rgba(0, 140, 255, 0.962);\n  font-size: 30px;\n}\nion-item {\n  border-radius: 35px;\n  padding: 5px;\n}\n.encabezado {\n  background-color: #2b7686;\n}\nion-card {\n  background-color: #2b7686;\n}\n.loader {\n  width: 100px;\n  height: 100px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border-top: 5px solid #e74c3c;\n  position: relative;\n  animation: load 2s linear infinite;\n}\n.loader::before, .loader::after {\n  content: \"\";\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  box-sizing: border-box;\n  border-radius: 50%;\n}\n.loader::before {\n  border-top: 5px solid #e67e22;\n  transform: rotate(120deg);\n}\n.loader::after {\n  border-top: 5px solid #3498db;\n  transform: rotate(240deg);\n}\n.loader span {\n  position: absolute;\n  font-size: small;\n  width: 100px;\n  height: 100px;\n  color: #fff;\n  text-align: center;\n  line-height: 100px;\n  animation: a2 2s linear infinite;\n}\n@keyframes load {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes a2 {\n  to {\n    transform: rotate(-360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw2RUFBQTtBQUNSO0VBQ0kscUJBQUE7QUFDSjtBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNKO0FBRUE7RUFDSSxnQ0FBQTtFQUNBLG1EQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUE7RUFDSSxXQUFBO0FBQ0o7QUFFQTtFQUNJLFlBQUE7QUFDSjtBQUdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQUo7QUFHQTtFQUNJLGdDQUFBO0VBQ0EsbURBQUE7RUFDQSxlQUFBO0FBQUo7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUE7RUFDSSx5QkFBQTtBQUNKO0FBRUE7RUFDSSx5QkFBQTtBQUNKO0FBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFBSjtBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdFO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtBQUFKO0FBR0U7RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFBSjtBQUdFO0VBQ0U7SUFDRSx5QkFBQTtFQUFKO0FBQ0Y7QUFHRTtFQUNFO0lBQ0UsMEJBQUE7RUFESjtBQUNGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUR5bmFQdWZmJmRpc3BsYXk9c3dhcCcpO1xyXG4uYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmljb25ve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnRpdHVsb2xvZ2lue1xyXG4gICAgZm9udC1mYW1pbHk6ICdEeW5hUHVmZicsIGN1cnNpdmU7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjVweCByZ2JhKDAsIDE0MCwgMjU1LCAwLjk2Mik7ICAgXHJcbiAgICBmb250LXNpemU6IDMwcHg7IFxyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5zbWFsbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcbnNtYWxse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgICBcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUsaW9uLXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6ICdEeW5hUHVmZicsIGN1cnNpdmU7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjVweCByZ2JhKDAsIDE0MCwgMjU1LCAwLjk2Mik7ICAgXHJcbiAgICBmb250LXNpemU6IDMwcHg7IFxyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmVuY2FiZXphZG97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI3Njg2O1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjc2ODY7XHJcbn1cclxuXHJcblxyXG4ubG9hZGVyIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNlNzRjM2M7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbmltYXRpb246IGxvYWQgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICAubG9hZGVyOjpiZWZvcmUsLmxvYWRlcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkZXI6OmJlZm9yZSB7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgI2U2N2UyMjtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkZXI6OmFmdGVyIHtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMzQ5OGRiO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgLmxvYWRlciBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XHJcbiAgICBhbmltYXRpb246IGEyIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBsb2FkIHtcclxuICAgIHRvIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBhMiB7XHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xyXG4gICAgfVxyXG4gIH0iXX0= */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Inicio de sesion</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"body\">\r\n\r\n\r\n  <ion-card>\r\n\r\n    <ion-card-item class=\"icono\">\r\n      <div class=\"loader\">\r\n        <span class=\"titulologin\">JOJO</span>\r\n    </div>\r\n    </ion-card-item>\r\n\r\n\r\n    <ion-card-content>\r\n\r\n      <form [formGroup]=\"formularioLogin\">\r\n        <ion-item lines=\"full\">\r\n          <ion-label position=\"floating\">Usuario</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"user.usuario\" formControlName=\"nombre\"></ion-input>\r\n        </ion-item>\r\n        <ion-item lines=\"full\">\r\n          <ion-label position=\"floating\">Contraseña</ion-label>\r\n          <ion-input type=\"password\" [(ngModel)]=\"user.password\" formControlName=\"password\"></ion-input>\r\n        </ion-item>\r\n      </form>\r\n      <br>\r\n      <ion-card-item class=\"botoneslogin\">\r\n        <ion-button (click)=\"ingresar()\">Ingresar</ion-button>\r\n      </ion-card-item>\r\n\r\n      <ion-card-item class=\"botonregiinvit\">\r\n        <small>¿No tienes cuenta?</small>\r\n    \r\n        <ion-button [routerLink]=\"['/registro']\">Registrate</ion-button>\r\n   \r\n        <small>Seguir como invitado</small>\r\n        <ion-button [routerLink]=\"['/producto']\">Invitado</ion-button>\r\n      </ion-card-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map