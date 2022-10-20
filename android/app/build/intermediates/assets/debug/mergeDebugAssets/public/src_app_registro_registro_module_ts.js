"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registro_registro_module_ts"],{

/***/ 4967:
/*!*****************************************************!*\
  !*** ./src/app/registro/registro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 2299);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 636:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 4967);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 2299);







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 2299:
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.html?ngResource */ 9575);
/* harmony import */ var _registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro.page.scss?ngResource */ 7177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let RegistroPage = class RegistroPage {
  constructor(fb, alertController, navCtrl) {
    this.fb = fb;
    this.alertController = alertController;
    this.navCtrl = navCtrl;
    this.formularioRegistro = this.fb.group({
      'rialname': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      'confirmacionPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
    });
  }

  ngOnInit() {}

  guardar() {
    var _this = this;

    return (0,C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var f = _this.formularioRegistro.value;

      if (_this.formularioRegistro.invalid) {
        const alert = yield _this.alertController.create({
          header: 'Datos incompletos!',
          message: 'Debes rellenar todos los campos',
          buttons: ['Aceptar']
        });
        yield alert.present();
        return;
      }

      var usuario = {
        rialname: f.rialname,
        nombre: f.nombre,
        password: f.password,
        confirmacionPassword: f.confirmacionPassword
      };

      if (usuario.password != usuario.confirmacionPassword) {
        console.log('distinta');
        const alert = yield _this.alertController.create({
          header: 'La contraseña no coincide!',
          message: 'Verifica que la contraseña y la confirmacion de contraseña sean las mismas',
          buttons: ['Aceptar']
        });
        yield alert.present();
        return;
      } else {
        _this.navCtrl.navigateRoot('login');
      }

      localStorage.setItem('usuario', JSON.stringify(usuario)); //SE GUARDA DE FORMA LOCAL
    })();
  }

};

RegistroPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
}];

RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-registro',
  template: _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegistroPage);


/***/ }),

/***/ 7177:
/*!********************************************************!*\
  !*** ./src/app/registro/registro.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=DynaPuff&display=swap\");\nion-title {\n  color: aqua;\n}\n.fotodio {\n  height: 10vh;\n}\np {\n  font-family: \"DynaPuff\", cursive;\n  -webkit-text-stroke: 0.5px rgba(0, 140, 255, 0.962);\n  font-size: 15px;\n}\n.pieregistro {\n  display: flex;\n  justify-content: center;\n  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);\n}\n.fotodio {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw2RUFBQTtBQUdSO0VBQ0ksV0FBQTtBQURKO0FBSUE7RUFDSSxZQUFBO0FBREo7QUFHQTtFQUNJLGdDQUFBO0VBQ0EsbURBQUE7RUFDQSxlQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1FQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUFKIiwiZmlsZSI6InJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUR5bmFQdWZmJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiBhcXVhO1xyXG59XHJcblxyXG4uZm90b2Rpb3tcclxuICAgIGhlaWdodDogMTB2aDtcclxufVxyXG5we1xyXG4gICAgZm9udC1mYW1pbHk6ICdEeW5hUHVmZicsIGN1cnNpdmU7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjVweCByZ2JhKDAsIDE0MCwgMjU1LCAwLjk2Mik7ICAgXHJcbiAgICBmb250LXNpemU6IDE1cHg7IFxyXG59XHJcblxyXG4ucGllcmVnaXN0cm97XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjYTFjNGZkIDAlLCAjYzJlOWZiIDEwMCUpO1xyXG59XHJcblxyXG4uZm90b2Rpb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */";

/***/ }),

/***/ 9575:
/*!********************************************************!*\
  !*** ./src/app/registro/registro.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>registro</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Registro</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <form [formGroup]=\"formularioRegistro\" (keyup.enter)=\"guardar()\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Nombre</ion-label>\r\n          <ion-input formControlName=\"rialname\" placeholder=\"Ingresa tu nombre\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Nombre de usuario</ion-label>\r\n          <ion-input formControlName=\"nombre\" placeholder=\"Ingresa tu usuario\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Contraseña</ion-label>\r\n          <ion-input formControlName=\"password\" type=\"password\" placeholder=\"1 a 6 caracteres\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Confirmar contraseña</ion-label>\r\n          <ion-input formControlName=\"confirmacionPassword\" type=\"password\"></ion-input>\r\n        </ion-item>\r\n        <br>\r\n        <ion-button (click)=\"guardar()\">Registrarse</ion-button>\r\n      </form>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"pieregistro\">\r\n    <ion-card-content>\r\n      <ion-card-item class=\"fotodio\">\r\n        <img class=\"fotodio\" src=\"assets/fondos/dio.png\" alt=\"\">\r\n      </ion-card-item>\r\n      <iom-card-item>\r\n        <p>UNETE A LA COMUNIDAD JOJO</p>\r\n      </iom-card-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9yZWdpc3Ryb19yZWdpc3Ryb19tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2M7QUFFUjtBQUUvQyxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHdEQUFZO0tBQ3hCO0NBQ0YsQ0FBQztJQU1XLHlCQUF5QixTQUF6Qix5QkFBeUI7Q0FBRztBQUE1Qix5QkFBeUI7SUFKckMsdURBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLGtFQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sRUFBRSxDQUFDLHlEQUFZLENBQUM7S0FDeEIsQ0FBQztHQUNXLHlCQUF5QixDQUFHO0FBQUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJHO0FBQ007QUFDbUI7QUFFckI7QUFFeUI7QUFFdkI7SUFZbEMsa0JBQWtCLFNBQWxCLGtCQUFrQjtDQUFHO0FBQXJCLGtCQUFrQjtJQVY5Qix1REFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AseURBQVk7WUFDWix1REFBVztZQUNYLCtEQUFtQjtZQUNuQix1REFBVztZQUNYLCtFQUF5QjtTQUMxQjtRQUNELFlBQVksRUFBRSxDQUFDLHdEQUFZLENBQUM7S0FDN0IsQ0FBQztHQUNXLGtCQUFrQixDQUFHO0FBQUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEIvQjtBQUNBO0FBQ0E7SUFRYU0sWUFBWSxTQUFaQSxZQUFZO0VBSXZCQyxZQUFtQkMsRUFBbkIsRUFBNENDLGVBQTVDLEVBQ1NDLE9BRFQsRUFDK0I7SUFEWjtJQUF5QjtJQUNuQztJQUVQLEtBQUtDLGtCQUFMLEdBQXlCLEtBQUtILEVBQUwsQ0FBUUksS0FBUixDQUFjO01BQ3JDLFlBQVcsSUFBSVgsdURBQUosQ0FBZ0IsRUFBaEIsRUFBbUJDLCtEQUFuQixDQUQwQjtNQUVyQyxVQUFVLElBQUlELHVEQUFKLENBQWdCLEVBQWhCLEVBQW1CQywrREFBbkIsQ0FGMkI7TUFHckMsWUFBWSxJQUFJRCx1REFBSixDQUFnQixFQUFoQixFQUFtQkMsK0RBQW5CLENBSHlCO01BSXJDLHdCQUF3QixJQUFJRCx1REFBSixDQUFnQixFQUFoQixFQUFtQkMsK0RBQW5CO0lBSmEsQ0FBZCxDQUF6QjtFQU1BOztFQUVGWSxRQUFRLElBQ1A7O0VBRUtDLE9BQU87SUFBQTs7SUFBQTtNQUVYLElBQUlDLENBQUMsR0FBRyxLQUFJLENBQUNMLGtCQUFMLENBQXdCTSxLQUFoQzs7TUFJQSxJQUFHLEtBQUksQ0FBQ04sa0JBQUwsQ0FBd0JPLE9BQTNCLEVBQW1DO1FBQ2pDLE1BQU1DLEtBQUssU0FBUyxLQUFJLENBQUNWLGVBQUwsQ0FBcUJXLE1BQXJCLENBQTRCO1VBQzlDQyxNQUFNLEVBQUUsb0JBRHNDO1VBRTlDQyxPQUFPLEVBQUUsaUNBRnFDO1VBRzlDQyxPQUFPLEVBQUUsQ0FBQyxTQUFEO1FBSHFDLENBQTVCLENBQXBCO1FBS0EsTUFBTUosS0FBSyxDQUFDSyxPQUFOLEVBQU47UUFDQTtNQUNEOztNQUVELElBQUlDLE9BQU8sR0FBRztRQUNaQyxRQUFRLEVBQUVWLENBQUMsQ0FBQ1UsUUFEQTtRQUVaQyxNQUFNLEVBQUVYLENBQUMsQ0FBQ1csTUFGRTtRQUdaQyxRQUFRLEVBQUVaLENBQUMsQ0FBQ1ksUUFIQTtRQUlaQyxvQkFBb0IsRUFBR2IsQ0FBQyxDQUFDYTtNQUpiLENBQWQ7O01BT0EsSUFBR0osT0FBTyxDQUFDRyxRQUFSLElBQW9CSCxPQUFPLENBQUNJLG9CQUEvQixFQUFvRDtRQUNsREMsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtRQUNBLE1BQU1aLEtBQUssU0FBUyxLQUFJLENBQUNWLGVBQUwsQ0FBcUJXLE1BQXJCLENBQTRCO1VBQzlDQyxNQUFNLEVBQUUsNEJBRHNDO1VBRTlDQyxPQUFPLEVBQUUsNEVBRnFDO1VBRzlDQyxPQUFPLEVBQUUsQ0FBQyxTQUFEO1FBSHFDLENBQTVCLENBQXBCO1FBS0EsTUFBTUosS0FBSyxDQUFDSyxPQUFOLEVBQU47UUFDQTtNQUNELENBVEQsTUFTSztRQUNILEtBQUksQ0FBQ2QsT0FBTCxDQUFhc0IsWUFBYixDQUEwQixPQUExQjtNQUNEOztNQUVEQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsRUFBK0JDLElBQUksQ0FBQ0MsU0FBTCxDQUFlWCxPQUFmLENBQS9CLEVBcENXLENBb0M2QztJQXBDN0M7RUFxQ1o7O0FBdkRzQjs7O1FBVGlCdEIsdURBQVdBOztRQUM1Q0MsMkRBQWVBOztRQUFFQyx5REFBYUE7OztBQVExQkMsWUFBWSxzREFMeEJOLHdEQUFTLENBQUM7RUFDVHFDLFFBQVEsRUFBRSxjQUREO0VBRVRDLFVBQUFBLDJEQUZTOztBQUFBLENBQUQsQ0FLZSxHQUFaaEMsWUFBWSxDQUFaIiwic291cmNlcyI6WyIuL3NyYy9hcHAvcmVnaXN0cm8vcmVnaXN0cm8tcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcmVnaXN0cm8vcmVnaXN0cm8ubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgUmVnaXN0cm9QYWdlIH0gZnJvbSAnLi9yZWdpc3Ryby5wYWdlJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgY29tcG9uZW50OiBSZWdpc3Ryb1BhZ2VcclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWdpc3Ryb1BhZ2VSb3V0aW5nTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgeyBSZWdpc3Ryb1BhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9yZWdpc3Ryby1yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBSZWdpc3Ryb1BhZ2UgfSBmcm9tICcuL3JlZ2lzdHJvLnBhZ2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBJb25pY01vZHVsZSxcclxuICAgIFJlZ2lzdHJvUGFnZVJvdXRpbmdNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1JlZ2lzdHJvUGFnZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJvUGFnZU1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsRm9ybUNvbnRyb2wsVmFsaWRhdG9ycyxGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQWxlcnRDb250cm9sbGVyLCBOYXZDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXJlZ2lzdHJvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0cm8ucGFnZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yZWdpc3Ryby5wYWdlLnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJvUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGZvcm11bGFyaW9SZWdpc3RybzpGb3JtR3JvdXA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIgLCBwdWJsaWMgYWxlcnRDb250cm9sbGVyOkFsZXJ0Q29udHJvbGxlcixcclxuICAgIHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyICkge1xyXG5cclxuICAgIHRoaXMuZm9ybXVsYXJpb1JlZ2lzdHJvPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgJ3JpYWxuYW1lJzpuZXcgRm9ybUNvbnRyb2woXCJcIixWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ25vbWJyZSc6IG5ldyBGb3JtQ29udHJvbChcIlwiLFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAncGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woXCJcIixWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ2NvbmZpcm1hY2lvblBhc3N3b3JkJzogbmV3IEZvcm1Db250cm9sKFwiXCIsVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICB9KVxyXG4gICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ3VhcmRhcigpe1xyXG5cclxuICAgIHZhciBmID0gdGhpcy5mb3JtdWxhcmlvUmVnaXN0cm8udmFsdWU7XHJcblxyXG5cclxuXHJcbiAgICBpZih0aGlzLmZvcm11bGFyaW9SZWdpc3Ryby5pbnZhbGlkKXtcclxuICAgICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xyXG4gICAgICAgIGhlYWRlcjogJ0RhdG9zIGluY29tcGxldG9zIScsXHJcbiAgICAgICAgbWVzc2FnZTogJ0RlYmVzIHJlbGxlbmFyIHRvZG9zIGxvcyBjYW1wb3MnLFxyXG4gICAgICAgIGJ1dHRvbnM6IFsnQWNlcHRhciddLFxyXG4gICAgICB9KTtcclxuICAgICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHVzdWFyaW8gPSB7XHJcbiAgICAgIHJpYWxuYW1lOiBmLnJpYWxuYW1lLFxyXG4gICAgICBub21icmU6IGYubm9tYnJlLFxyXG4gICAgICBwYXNzd29yZDogZi5wYXNzd29yZCxcclxuICAgICAgY29uZmlybWFjaW9uUGFzc3dvcmQgOiBmLmNvbmZpcm1hY2lvblBhc3N3b3JkXHJcbiAgICB9XHJcblxyXG4gICAgaWYodXN1YXJpby5wYXNzd29yZCAhPSB1c3VhcmlvLmNvbmZpcm1hY2lvblBhc3N3b3JkKXtcclxuICAgICAgY29uc29sZS5sb2coJ2Rpc3RpbnRhJyk7XHJcbiAgICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcclxuICAgICAgICBoZWFkZXI6ICdMYSBjb250cmFzZcOxYSBubyBjb2luY2lkZSEnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdWZXJpZmljYSBxdWUgbGEgY29udHJhc2XDsWEgeSBsYSBjb25maXJtYWNpb24gZGUgY29udHJhc2XDsWEgc2VhbiBsYXMgbWlzbWFzJyxcclxuICAgICAgICBidXR0b25zOiBbJ0FjZXB0YXInXSxcclxuICAgICAgfSk7XHJcbiAgICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZVJvb3QoJ2xvZ2luJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzdWFyaW8nLEpTT04uc3RyaW5naWZ5KHVzdWFyaW8pKTsvL1NFIEdVQVJEQSBERSBGT1JNQSBMT0NBTFxyXG4gIH1cclxuXHJcbn1cclxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkZvcm1Db250cm9sIiwiVmFsaWRhdG9ycyIsIkZvcm1CdWlsZGVyIiwiQWxlcnRDb250cm9sbGVyIiwiTmF2Q29udHJvbGxlciIsIlJlZ2lzdHJvUGFnZSIsImNvbnN0cnVjdG9yIiwiZmIiLCJhbGVydENvbnRyb2xsZXIiLCJuYXZDdHJsIiwiZm9ybXVsYXJpb1JlZ2lzdHJvIiwiZ3JvdXAiLCJyZXF1aXJlZCIsIm5nT25Jbml0IiwiZ3VhcmRhciIsImYiLCJ2YWx1ZSIsImludmFsaWQiLCJhbGVydCIsImNyZWF0ZSIsImhlYWRlciIsIm1lc3NhZ2UiLCJidXR0b25zIiwicHJlc2VudCIsInVzdWFyaW8iLCJyaWFsbmFtZSIsIm5vbWJyZSIsInBhc3N3b3JkIiwiY29uZmlybWFjaW9uUGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwibmF2aWdhdGVSb290IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWxlY3RvciIsInRlbXBsYXRlIl0sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOltdfQ==