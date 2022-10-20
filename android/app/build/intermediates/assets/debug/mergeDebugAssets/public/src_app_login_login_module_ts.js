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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkMsU0FBUyxzREFMckJQLHdEQUFTLENBQUM7RUFDVHdDLFFBQVEsRUFBRSxXQUREO0VBRVRDLFVBQUFBLHdEQUZTOztBQUFBLENBQUQsQ0FLWSxHQUFUbEMsU0FBUyxDQUFUIiwic291cmNlcyI6WyIuL3NyYy9hcHAvbG9naW4vbG9naW4tcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvbG9naW4vbG9naW4ubW9kdWxlLnRzIiwiLi9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi9sb2dpbi5wYWdlJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgY29tcG9uZW50OiBMb2dpblBhZ2VcclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpblBhZ2VSb3V0aW5nTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgeyBMb2dpblBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9sb2dpbi1yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBMb2dpblBhZ2UgfSBmcm9tICcuL2xvZ2luLnBhZ2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBJb25pY01vZHVsZSxcclxuICAgIExvZ2luUGFnZVJvdXRpbmdNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0xvZ2luUGFnZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luUGFnZU1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsRm9ybUNvbnRyb2wsVmFsaWRhdG9ycyxGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQWxlcnRDb250cm9sbGVyLCBOYXZDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5wYWdlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLnBhZ2Uuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5QYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgdXNlcj17XHJcbiAgICB1c3VhcmlvOlwiXCIsXHJcbiAgICBwYXNzd29yZDpcIlwiXHJcbiAgfVxyXG5cclxuICBmb3JtdWxhcmlvTG9naW46Rm9ybUdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLHB1YmxpYyBmYjpGb3JtQnVpbGRlciAsIFxyXG4gICAgcHVibGljIGFsZXJ0Q29udHJvbGxlcjpBbGVydENvbnRyb2xsZXIsXHJcbiAgICBwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciApIHsgXHJcblxyXG4gICAgdGhpcy5mb3JtdWxhcmlvTG9naW4gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgJ25vbWJyZSc6IG5ldyBGb3JtQ29udHJvbChcIlwiLFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAncGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woXCJcIixWYWxpZGF0b3JzLnJlcXVpcmVkKVxyXG4gICAgfSlcclxuICB9IFxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbiAgXHJcbiAgYXN5bmMgaW5ncmVzYXIoKXtcclxuICAgIHZhciBmID0gdGhpcy5mb3JtdWxhcmlvTG9naW4udmFsdWU7XHJcblxyXG4gICAgdmFyIHVzdWFyaW8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c3VhcmlvJykpO1xyXG5cclxuICAgIGlmKHVzdWFyaW8ubm9tYnJlID09IGYubm9tYnJlICYmIHVzdWFyaW8ucGFzc3dvcmQgPT0gZi5wYXNzd29yZCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbmdyZXNhZG8nKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luZ3Jlc2FkbycsJ3RydWUnKTtcclxuICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgIHN0YXRlOiB7XHJcbiAgICAgICAgdXNlcjogdGhpcy51c2VyIFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcHJvZHVjdG8nXSxuYXZpZ2F0aW9uRXh0cmFzKTsgXHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcclxuICAgICAgICBoZWFkZXI6ICdEYXRvcyBpbmNvcnJlY3RvcyEnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdVc3VhcmlvIHkvbyBjb250cmFzZcOxYSBpbmNvcnJlY3RvcycsXHJcbiAgICAgICAgYnV0dG9uczogWydBY2VwdGFyJ10sXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUm91dGVyIiwiRm9ybUNvbnRyb2wiLCJWYWxpZGF0b3JzIiwiRm9ybUJ1aWxkZXIiLCJBbGVydENvbnRyb2xsZXIiLCJOYXZDb250cm9sbGVyIiwiTG9naW5QYWdlIiwiY29uc3RydWN0b3IiLCJyb3V0ZXIiLCJmYiIsImFsZXJ0Q29udHJvbGxlciIsIm5hdkN0cmwiLCJ1c3VhcmlvIiwicGFzc3dvcmQiLCJmb3JtdWxhcmlvTG9naW4iLCJncm91cCIsInJlcXVpcmVkIiwibmdPbkluaXQiLCJpbmdyZXNhciIsImYiLCJ2YWx1ZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJub21icmUiLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsIm5hdmlnYXRpb25FeHRyYXMiLCJzdGF0ZSIsInVzZXIiLCJuYXZpZ2F0ZSIsImFsZXJ0IiwiY3JlYXRlIiwiaGVhZGVyIiwibWVzc2FnZSIsImJ1dHRvbnMiLCJwcmVzZW50Iiwic2VsZWN0b3IiLCJ0ZW1wbGF0ZSJdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbXX0=