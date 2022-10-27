"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_perfil_perfil_module_ts"],{

/***/ 9810:
/*!*************************************************!*\
  !*** ./src/app/perfil/perfil-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageRoutingModule": () => (/* binding */ PerfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page */ 9557);




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_0__.PerfilPage,
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ 1320:
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageModule": () => (/* binding */ PerfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-routing.module */ 9810);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page */ 9557);







let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilPageRoutingModule
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_1__.PerfilPage]
    })
], PerfilPageModule);



/***/ }),

/***/ 9557:
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPage": () => (/* binding */ PerfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page.html?ngResource */ 5768);
/* harmony import */ var _perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page.scss?ngResource */ 5879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 6710);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let PerfilPage = class PerfilPage {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }
    /**funcion de animacion para el perfil */
    ngOnInit() {
        const animation = (0,_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.createAnimation)()
            .addElement(document.querySelector('.square'))
            .duration(1500)
            .iterations(Infinity)
            .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
            .fromTo('opacity', '1', '0.2');
        document.querySelector('#play').addEventListener('click', () => {
            animation.play();
        });
        document.querySelector('#pause').addEventListener('click', () => {
            animation.pause();
        });
        document.querySelector('#stop').addEventListener('click', () => {
            animation.stop();
        });
    }
};
PerfilPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
PerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-perfil',
        template: _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PerfilPage);



/***/ }),

/***/ 5879:
/*!****************************************************!*\
  !*** ./src/app/perfil/perfil.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  background-color: var(--ion-color-estilopropio);\n}\n\n.a {\n  color: blue;\n  background-color: aqua;\n}\n\n.perfilcard {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\nsmall {\n  font-size: 15px;\n  color: #242526;\n}\n\np {\n  color: black;\n  font-size: 250%;\n}\n\n.fotoperfil {\n  height: 25vh;\n  width: 50vw;\n  border: 2px solid #060606;\n  border-radius: 80px;\n  display: flex;\n  align-items: center;\n  background-color: #515455;\n}\n\n.fotoperfil2 {\n  border-radius: 80px;\n}\n\nion-card {\n  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n}\n\n.botonmostrarnombre {\n  color: black;\n}\n\nbutton {\n  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);\n  border: 1px solid black;\n  padding: 10px;\n  margin: 3px;\n  border-radius: 15px;\n  color: black;\n}\n\nion-card {\n  background-color: #2b7686;\n}\n\n.botonmostrarnombre {\n  color: black;\n}\n\n.botones {\n  display: flex;\n  flex-direction: column;\n}\n\nbutton {\n  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);\n  border: 1px solid black;\n  padding: 10px;\n  margin: 3px;\n  border-radius: 15px;\n}\n\n.square {\n  width: 100px;\n  height: 100px;\n  opacity: 0.5;\n  background: blue;\n  margin: 10px;\n  --background: red;\n}\n\n@media (prefers-color-scheme: dark) {\n  .square {\n    --background: rgb(134, 23, 10);\n  }\n}\n\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .square {\n    --background: rgb(134, 23, 10);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwrQ0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUlBO0VBQ0UsbUVBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFLQTtFQUNFLG1FQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUZGOztBQUtBO0VBQ0UsbUVBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0FBSEY7O0FBTUE7RUFDRTtJQUNFLDhCQUFBO0VBSEY7QUFDRjs7QUFNRTtFQUNFO0lBQ0UsOEJBQUE7RUFKSjtBQUNGIiwiZmlsZSI6InBlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRvb2xiYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWVzdGlsb3Byb3Bpbyk7XHJcbn1cclxuXHJcbi5hIHtcclxuICBjb2xvcjogYmx1ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG59XHJcblxyXG4ucGVyZmlsY2FyZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuc21hbGx7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjMjQyNTI2O1xyXG59XHJcblxyXG5we1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDI1MCU7XHJcbn1cclxuXHJcbi5mb3RvcGVyZmlse1xyXG4gIGhlaWdodDogMjV2aDtcclxuICB3aWR0aDogNTB2dztcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDYwNjA2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDgwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTU0NTU7IFxyXG59XHJcblxyXG4uZm90b3BlcmZpbDJ7XHJcbiAgYm9yZGVyLXJhZGl1czogODBweDtcclxuICBcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNWY3ZmEgMCUsICNjM2NmZTIgMTAwJSk7XHJcbn1cclxuXHJcbi5ib3Rvbm1vc3RyYXJub21icmUge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgI2ExYzRmZCAwJSwgI2MyZTlmYiAxMDAlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI3Njg2O1xyXG59XHJcblxyXG4uYm90b25tb3N0cmFybm9tYnJle1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJvdG9uZXN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgI2ExYzRmZCAwJSwgI2MyZTlmYiAxMDAlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5zcXVhcmUge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gIG1hcmdpbjogMTBweDtcclxuXHJcbiAgLS1iYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuXHJcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAuc3F1YXJlIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDEzNCwgMjMsIDEwKTtcclxuICB9XHJcblxyXG4gIFxyXG4gIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgIC5zcXVhcmUge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHJnYigxMzQsIDIzLCAxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 5768:
/*!****************************************************!*\
  !*** ./src/app/perfil/perfil.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"estilopropio\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"titulo\">Perfil </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card class=\"perfilcard\">\r\n    \r\n    <div class=\"fotoperfil\">\r\n      <img class=\"fotoperfil2\" src=\"../../assets/fondos/Pikachu.png\" alt=\"\">\r\n    </div>\r\n    <small>USUARIO</small>\r\n    <p>{{usuario.rialname}}</p>\r\n    <button class=\"botondetalle\" [routerLink]=\"['/detalles-perfil']\">DETALLES DEL PERFIL</button>\r\n\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n        <div class=\"square\"></div>\r\n        <div class=\"botones\">\r\n        <button id=\"play\">Correr animacion</button>\r\n        <button id=\"pause\">Pausar animacion</button>\r\n        <button id=\"stop\">Detener animacion</button>\r\n        </div>\r\n\r\n  </ion-card>\r\n  \r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_perfil_perfil_module_ts.js.map