"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_producto_producto_module_ts"],{

/***/ 4369:
/*!*****************************************************!*\
  !*** ./src/app/producto/producto-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoPageRoutingModule": () => (/* binding */ ProductoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _producto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto.page */ 8908);




const routes = [
    {
        path: '',
        component: _producto_page__WEBPACK_IMPORTED_MODULE_0__.ProductoPage
    }
];
let ProductoPageRoutingModule = class ProductoPageRoutingModule {
};
ProductoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductoPageRoutingModule);



/***/ }),

/***/ 3386:
/*!*********************************************!*\
  !*** ./src/app/producto/producto.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoPageModule": () => (/* binding */ ProductoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _producto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto-routing.module */ 4369);
/* harmony import */ var _producto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto.page */ 8908);







let ProductoPageModule = class ProductoPageModule {
};
ProductoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _producto_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductoPageRoutingModule
        ],
        declarations: [_producto_page__WEBPACK_IMPORTED_MODULE_1__.ProductoPage]
    })
], ProductoPageModule);



/***/ }),

/***/ 8908:
/*!*******************************************!*\
  !*** ./src/app/producto/producto.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoPage": () => (/* binding */ ProductoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _producto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto.page.html?ngResource */ 4532);
/* harmony import */ var _producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto.page.scss?ngResource */ 1353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let ProductoPage = class ProductoPage {
    constructor(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        //splash = true;
        //tabBarElement: any;
        this.producto = [];
        //this.tabBarElement = document.querySelector('.tabbar');
    }
    /**
     *   ionViewDidLoad(){
       // this.tabBarElement.style.display = 'none';
        setTimeout(() => {
          this.splash = false;
          //this.tabBarElement.style.display = 'flex';
        },1000);
      }
     */
    ngOnInit() {
        console.log('producto');
        this.permission = true;
        this.getproducto().subscribe(res => {
            console.log("Res", res);
            this.producto = res;
        });
    }
    getproducto() {
        return this.http
            .get("assets/files/producto.json")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res.data;
        }));
    }
};
ProductoPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
ProductoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-producto',
        template: _producto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductoPage);



/***/ }),

/***/ 1353:
/*!********************************************************!*\
  !*** ./src/app/producto/producto.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  background-color: var(--ion-color-estilopropio);\n}\n\nion-content {\n  background-color: var(--ion-color-estip2);\n}\n\n/**\n#custom-overlay {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 100000;\n    width:100%;\n    background-color: #002a3e;\n  }\n\n  .flb {\n    background-color: #3ebffb;\n    height:100%;\n    width:100%;\n    animation: pulse 1s linear forwards;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .Aligner-item {\n    max-width: 50%;\n  }\n  .Aligner-item--top {\n    align-self: flex-start;\n  }\n  .Aligner-item--bottom {\n    align-self: flex-end;\n  }\n  #custom-overlay img {\n    display: block;\n    margin: 0 auto;\n    width: 50%;\n    height: auto;\n    animation: animation 3100ms linear infinite both;\n    animation-delay: 1s;\n  }\n\n  @keyframes pulse {\n    0% {\n      opacity:0;\n    }\n    100% {\n      opacity:1;\n    }\n  }\n\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5Q0FBQTtBQUNKOztBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJwcm9kdWN0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1lc3RpbG9wcm9waW8pO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1lc3RpcDIpO1xyXG59XHJcbiAgLyoqXHJcbiNjdXN0b20tb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDAwMDA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmEzZTtcclxuICB9XHJcbiAgXHJcbiAgLmZsYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ViZmZiO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAxcyBsaW5lYXIgZm9yd2FyZHM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuQWxpZ25lci1pdGVtIHtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gIH1cclxuICAuQWxpZ25lci1pdGVtLS10b3Age1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICB9XHJcbiAgLkFsaWduZXItaXRlbS0tYm90dG9tIHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIH1cclxuICAjY3VzdG9tLW92ZXJsYXkgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRpb24gMzEwMG1zIGxpbmVhciBpbmZpbml0ZSBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OjA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiovIl19 */";

/***/ }),

/***/ 4532:
/*!********************************************************!*\
  !*** ./src/app/producto/producto.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<!-- <div id=\"custom-overlay\" [style.display]=\"splash ? 'flex': 'none'\">\r\n  <div class=\"flb\">\r\n    <div class=\"Aligner-item Aligner-item--top\"></div>\r\n    <img src=\"assets/icon/favicon.png\" alt=\"\">\r\n    <div class=\"Aligner-item Aligner-item--bottom\"></div>\r\n  </div>\r\n</div>\r\n-->\r\n\r\n<ion-header>\r\n  <ion-toolbar color=\"estilopropio\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>     \r\n    <ion-title>\r\n      Tienda JOJO\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content>\r\n\r\n  <ion-row>\r\n    <ion-col sizeLg=\"6\" sizeMd=\"6\" sizeXs=\"12\" *ngFor=\" let productos of producto\">\r\n      <ion-card>\r\n        <img src=\"../../assets/producto-imagen/{{productos.imagen}}\">\r\n        <div class=\"card-title\">{{productos.name}}</div>\r\n      </ion-card>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wcm9kdWN0b19wcm9kdWN0b19tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2M7QUFFUjtBQUUvQyxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHdEQUFZO0tBQ3hCO0NBQ0YsQ0FBQztJQU1XLHlCQUF5QixTQUF6Qix5QkFBeUI7Q0FBRztBQUE1Qix5QkFBeUI7SUFKckMsdURBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLGtFQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sRUFBRSxDQUFDLHlEQUFZLENBQUM7S0FDeEIsQ0FBQztHQUNXLHlCQUF5QixDQUFHO0FBQUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJHO0FBQ007QUFDRjtBQUVBO0FBRXlCO0FBRXZCO0lBV2xDLGtCQUFrQixTQUFsQixrQkFBa0I7Q0FBRztBQUFyQixrQkFBa0I7SUFUOUIsdURBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHlEQUFZO1lBQ1osdURBQVc7WUFDWCx1REFBVztZQUNYLCtFQUF5QjtTQUMxQjtRQUNELFlBQVksRUFBRSxDQUFDLHdEQUFZLENBQUM7S0FDN0IsQ0FBQztHQUNXLGtCQUFrQixDQUFHO0FBQUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQm1CO0FBQ0Y7QUFDYjtBQUNZO0lBT2xDLFlBQVksU0FBWixZQUFZO0lBUXZCLFlBQW9CLElBQWUsRUFDMUIsT0FBcUI7UUFEVixTQUFJLEdBQUosSUFBSSxDQUFXO1FBQzFCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFQOUIsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUVyQixhQUFRLEdBQU8sRUFBRSxDQUFDO1FBS2QseURBQXlEO0lBQzNELENBQUM7SUFFTDs7Ozs7Ozs7T0FRRztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRTtZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRSxHQUFHLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDZixHQUFHLENBQUMsNEJBQTRCLENBQUM7YUFDakMsSUFBSSxDQUNILG1EQUFHLENBQUMsQ0FBQyxHQUFPLEVBQUUsRUFBRTtZQUNkLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FDSDtJQUNILENBQUM7Q0FDRjs7WUFsRFEsNERBQVU7WUFFVix5REFBYTs7QUFPVCxZQUFZO0lBTHhCLHdEQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixxRUFBbUM7O0tBRXBDLENBQUM7R0FDVyxZQUFZLENBeUN4QjtBQXpDd0IiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9wcm9kdWN0by9wcm9kdWN0by1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wcm9kdWN0by9wcm9kdWN0by5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcHJvZHVjdG8vcHJvZHVjdG8ucGFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBQcm9kdWN0b1BhZ2UgfSBmcm9tICcuL3Byb2R1Y3RvLnBhZ2UnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RvUGFnZVxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RvUGFnZVJvdXRpbmdNb2R1bGUge31cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuXHJcbmltcG9ydCB7IFByb2R1Y3RvUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3RvLXJvdXRpbmcubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IFByb2R1Y3RvUGFnZSB9IGZyb20gJy4vcHJvZHVjdG8ucGFnZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgSW9uaWNNb2R1bGUsXHJcbiAgICBQcm9kdWN0b1BhZ2VSb3V0aW5nTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtQcm9kdWN0b1BhZ2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0b1BhZ2VNb2R1bGUge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXHJcbmltcG9ydCB7bWFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgTmF2Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXByb2R1Y3RvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdG8ucGFnZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0by5wYWdlLnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RvUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8vc3BsYXNoID0gdHJ1ZTtcclxuICAvL3RhYkJhckVsZW1lbnQ6IGFueTtcclxuXHJcbiAgcHJvZHVjdG86YW55ID0gW107XHJcbiAgcGVybWlzc2lvbjogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQsXHJcbiAgICBwdWJsaWMgbmF2Q3RybDpOYXZDb250cm9sbGVyKSB7XHJcbiAgICAgIC8vdGhpcy50YWJCYXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmJhcicpO1xyXG4gICAgfVxyXG5cclxuLyoqXHJcbiAqICAgaW9uVmlld0RpZExvYWQoKXtcclxuICAgLy8gdGhpcy50YWJCYXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zcGxhc2ggPSBmYWxzZTtcclxuICAgICAgLy90aGlzLnRhYkJhckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0sMTAwMCk7XHJcbiAgfVxyXG4gKi9cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygncHJvZHVjdG8nKVxyXG4gICAgdGhpcy5wZXJtaXNzaW9uID0gdHJ1ZTtcclxuICAgIHRoaXMuZ2V0cHJvZHVjdG8oKS5zdWJzY3JpYmUocmVzPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVzXCIscmVzKVxyXG4gICAgICB0aGlzLnByb2R1Y3RvPSByZXM7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldHByb2R1Y3RvKCl7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAuZ2V0KFwiYXNzZXRzL2ZpbGVzL3Byb2R1Y3RvLmpzb25cIilcclxuICAgIC5waXBlKFxyXG4gICAgICBtYXAoKHJlczphbnkpID0+e1xyXG4gICAgICAgIHJldHVybiByZXMuZGF0YTtcclxuICAgICAgfSlcclxuICAgIClcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6W119