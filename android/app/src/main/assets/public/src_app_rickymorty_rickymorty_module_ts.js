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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9yaWNreW1vcnR5X3JpY2t5bW9ydHlfbW9kdWxlX3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNjO0FBRUo7QUFFbkQsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSw0REFBYztLQUMxQjtDQUNGLENBQUM7SUFNVywyQkFBMkIsU0FBM0IsMkJBQTJCO0NBQUc7QUFBOUIsMkJBQTJCO0lBSnZDLHVEQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxrRUFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxPQUFPLEVBQUUsQ0FBQyx5REFBWSxDQUFDO0tBQ3hCLENBQUM7R0FDVywyQkFBMkIsQ0FBRztBQUFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQztBQUNNO0FBQ0Y7QUFFQTtBQUU2QjtBQUV2QjtJQVd0QyxvQkFBb0IsU0FBcEIsb0JBQW9CO0NBQUc7QUFBdkIsb0JBQW9CO0lBVGhDLHVEQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx5REFBWTtZQUNaLHVEQUFXO1lBQ1gsdURBQVc7WUFDWCxtRkFBMkI7U0FDNUI7UUFDRCxZQUFZLEVBQUUsQ0FBQyw0REFBYyxDQUFDO0tBQy9CLENBQUM7R0FDVyxvQkFBb0IsQ0FBRztBQUFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CaUI7QUFDQTtJQVFyQyxjQUFjLFNBQWQsY0FBYztJQUl6QixZQUFvQixJQUFlO1FBQWYsU0FBSSxHQUFKLElBQUksQ0FBVztRQUZuQyxlQUFVLEdBQUcsRUFBRSxDQUFDO0lBRXVCLENBQUM7SUFFeEMsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLDJDQUEyQyxDQUFDO2FBQzlELFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUVGOztZQXRCUSw0REFBVTs7QUFRTixjQUFjO0lBTDFCLHdEQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLHVFQUFxQzs7S0FFdEMsQ0FBQztHQUNXLGNBQWMsQ0FjMUI7QUFkMEIiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9yaWNreW1vcnR5L3JpY2t5bW9ydHktcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcmlja3ltb3J0eS9yaWNreW1vcnR5Lm1vZHVsZS50cyIsIi4vc3JjL2FwcC9yaWNreW1vcnR5L3JpY2t5bW9ydHkucGFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBSaWNreW1vcnR5UGFnZSB9IGZyb20gJy4vcmlja3ltb3J0eS5wYWdlJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgY29tcG9uZW50OiBSaWNreW1vcnR5UGFnZVxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJpY2t5bW9ydHlQYWdlUm91dGluZ01vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5cclxuaW1wb3J0IHsgUmlja3ltb3J0eVBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9yaWNreW1vcnR5LXJvdXRpbmcubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IFJpY2t5bW9ydHlQYWdlIH0gZnJvbSAnLi9yaWNreW1vcnR5LnBhZ2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIElvbmljTW9kdWxlLFxyXG4gICAgUmlja3ltb3J0eVBhZ2VSb3V0aW5nTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtSaWNreW1vcnR5UGFnZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJpY2t5bW9ydHlQYWdlTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcmlja3ltb3J0eScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JpY2t5bW9ydHkucGFnZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yaWNreW1vcnR5LnBhZ2Uuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmlja3ltb3J0eVBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwZXJzb25hamVzID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmh0dHAuZ2V0PGFueT4oJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyJylcclxuICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgdGhpcy5wZXJzb25hamVzID0gcmVzLnJlc3VsdHM7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdwZXJzb25hamVzJyx0aGlzLnBlcnNvbmFqZXMpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOltdfQ==