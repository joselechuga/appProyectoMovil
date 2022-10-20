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
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_0__.PerfilPage
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page.html?ngResource */ 5768);
/* harmony import */ var _perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page.scss?ngResource */ 5879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 6710);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);





let PerfilPage = class PerfilPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
PerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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

module.exports = ".a {\n  color: blue;\n  background-color: aqua;\n}\n\nh3 {\n  color: black;\n}\n\nion-card {\n  background-color: #2b7686;\n}\n\n.botonmostrarnombre {\n  color: black;\n}\n\n.botones {\n  display: flex;\n  flex-direction: column;\n}\n\nbutton {\n  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);\n  border: 1px solid black;\n  padding: 10px;\n  margin: 3px;\n  border-radius: 15px;\n}\n\nion-card {\n  background-color: #2b7686;\n}\n\n.botonmostrarnombre {\n  color: black;\n}\n\n.botones {\n  display: flex;\n  flex-direction: column;\n}\n\nbutton {\n  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);\n  border: 1px solid black;\n  padding: 10px;\n  margin: 3px;\n  border-radius: 15px;\n}\n\n.square {\n  width: 100px;\n  height: 100px;\n  opacity: 0.5;\n  background: blue;\n  margin: 10px;\n  --background: red;\n}\n\n@media (prefers-color-scheme: dark) {\n  .square {\n    --background: rgb(134, 23, 10);\n  }\n}\n\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .square {\n    --background: rgb(134, 23, 10);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLG1FQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxtRUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsOEJBQUE7RUFERjtBQUNGOztBQUlFO0VBQ0U7SUFDRSw4QkFBQTtFQUZKO0FBQ0YiLCJmaWxlIjoicGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYSB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxufVxyXG5cclxuaDMge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjc2ODY7XHJcbn1cclxuXHJcbi5ib3Rvbm1vc3RyYXJub21icmUge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJvdG9uZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjYTFjNGZkIDAlLCAjYzJlOWZiIDEwMCUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiNzY4NjtcclxufVxyXG5cclxuLmJvdG9ubW9zdHJhcm5vbWJyZXtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5ib3RvbmVze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICNhMWM0ZmQgMCUsICNjMmU5ZmIgMTAwJSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uc3F1YXJlIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgYmFja2dyb3VuZDogYmx1ZTtcclxuICBtYXJnaW46IDEwcHg7XHJcblxyXG4gIC0tYmFja2dyb3VuZDogcmVkO1xyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgLnNxdWFyZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigxMzQsIDIzLCAxMCk7XHJcbiAgfVxyXG5cclxuICBcclxuICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICAuc3F1YXJlIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTM0LCAyMywgMTApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 5768:
/*!****************************************************!*\
  !*** ./src/app/perfil/perfil.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"producto\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"titulo\">Perfil </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n\r\n        <h3>\r\n          Usuario: {{usuario.rialname}}\r\n        </h3>\r\n\r\n        <div class=\"square\"></div>\r\n        <div class=\"botones\">\r\n        <button id=\"play\">Correr animacion</button>\r\n        <button id=\"pause\">Pausar animacion</button>\r\n        <button id=\"stop\">Detener animacion</button>\r\n        </div>\r\n\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n\r\n    <img src=\"../../assets/fondos/JOJOS.png\" alt=\"\">\r\n\r\n  </ion-card>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wZXJmaWxfcGVyZmlsX21vZHVsZV90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDYztBQUVaO0FBRTNDLE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsb0RBQVU7S0FDdEI7Q0FDRixDQUFDO0lBTVcsdUJBQXVCLFNBQXZCLHVCQUF1QjtDQUFHO0FBQTFCLHVCQUF1QjtJQUpuQyx1REFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsa0VBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsT0FBTyxFQUFFLENBQUMseURBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1csdUJBQXVCLENBQUc7QUFBSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQks7QUFDTTtBQUNGO0FBRUE7QUFFcUI7QUFFdkI7SUFXOUIsZ0JBQWdCLFNBQWhCLGdCQUFnQjtDQUFHO0FBQW5CLGdCQUFnQjtJQVQ1Qix1REFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AseURBQVk7WUFDWix1REFBVztZQUNYLHVEQUFXO1lBQ1gsMkVBQXVCO1NBQ3hCO1FBQ0QsWUFBWSxFQUFFLENBQUMsb0RBQVUsQ0FBQztLQUMzQixDQUFDO0dBQ1csZ0JBQWdCLENBQUc7QUFBSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJxQjtBQUNjO0lBTW5ELFVBQVUsU0FBVixVQUFVO0lBSXJCLFlBQW1CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFGekMsWUFBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRVQsQ0FBQztJQUk5QyxRQUFRO1FBQ04sTUFBTSxTQUFTLEdBQUcsK0RBQWUsRUFBRTthQUNoQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM3QyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ2QsVUFBVSxDQUFDLFFBQVEsQ0FBQzthQUNwQixNQUFNLENBQUMsV0FBVyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO2FBQzNELE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWpDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUM3RCxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDOUQsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQzdELFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FFRjs7WUFuQ3lCLHlEQUFhOztBQU0xQixVQUFVO0lBTHRCLHdEQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixtRUFBaUM7O0tBRWxDLENBQUM7R0FDVyxVQUFVLENBNkJ0QjtBQTdCc0IiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9wZXJmaWwvcGVyZmlsLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BlcmZpbC9wZXJmaWwubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BlcmZpbC9wZXJmaWwucGFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBQZXJmaWxQYWdlIH0gZnJvbSAnLi9wZXJmaWwucGFnZSc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogUGVyZmlsUGFnZVxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcmZpbFBhZ2VSb3V0aW5nTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgeyBQZXJmaWxQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vcGVyZmlsLXJvdXRpbmcubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IFBlcmZpbFBhZ2UgfSBmcm9tICcuL3BlcmZpbC5wYWdlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBJb25pY01vZHVsZSxcclxuICAgIFBlcmZpbFBhZ2VSb3V0aW5nTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtQZXJmaWxQYWdlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVyZmlsUGFnZU1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjcmVhdGVBbmltYXRpb24sIE5hdkNvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBlcmZpbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BlcmZpbC5wYWdlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BlcmZpbC5wYWdlLnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcmZpbFBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICB1c3VhcmlvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXN1YXJpbycpKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIpIHsgfVxyXG5cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3QgYW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKClcclxuICAgICAgLmFkZEVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNxdWFyZScpKVxyXG4gICAgICAuZHVyYXRpb24oMTUwMClcclxuICAgICAgLml0ZXJhdGlvbnMoSW5maW5pdHkpXHJcbiAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDBweCknLCAndHJhbnNsYXRlWCgxMDBweCknKVxyXG4gICAgICAuZnJvbVRvKCdvcGFjaXR5JywgJzEnLCAnMC4yJyk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgYW5pbWF0aW9uLnBsYXkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXVzZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBhbmltYXRpb24ucGF1c2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdG9wJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGFuaW1hdGlvbi5zdG9wKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6W119