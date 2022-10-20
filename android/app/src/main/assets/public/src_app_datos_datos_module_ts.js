"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_datos_datos_module_ts"],{

/***/ 2217:
/*!***********************************************!*\
  !*** ./src/app/datos/datos-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosPageRoutingModule": () => (/* binding */ DatosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _datos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datos.page */ 4165);




const routes = [
    {
        path: '',
        component: _datos_page__WEBPACK_IMPORTED_MODULE_0__.DatosPage
    }
];
let DatosPageRoutingModule = class DatosPageRoutingModule {
};
DatosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DatosPageRoutingModule);



/***/ }),

/***/ 7652:
/*!***************************************!*\
  !*** ./src/app/datos/datos.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosPageModule": () => (/* binding */ DatosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _datos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datos-routing.module */ 2217);
/* harmony import */ var _datos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datos.page */ 4165);







let DatosPageModule = class DatosPageModule {
};
DatosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _datos_routing_module__WEBPACK_IMPORTED_MODULE_0__.DatosPageRoutingModule
        ],
        declarations: [_datos_page__WEBPACK_IMPORTED_MODULE_1__.DatosPage]
    })
], DatosPageModule);



/***/ }),

/***/ 4165:
/*!*************************************!*\
  !*** ./src/app/datos/datos.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosPage": () => (/* binding */ DatosPage)
/* harmony export */ });
/* harmony import */ var C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _datos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datos.page.html?ngResource */ 9404);
/* harmony import */ var _datos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datos.page.scss?ngResource */ 4000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _getdatos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getdatos.service */ 7736);







let DatosPage = class DatosPage {
  constructor(proovedor, loadingCtrl) {
    this.proovedor = proovedor;
    this.loadingCtrl = loadingCtrl;
  }

  ngOnInit() {
    this.proovedor.obtenerDatos().subscribe(data => {
      this.datos = data;
    }, error => {
      console.log(error);
    });
    this.conteo();
    this.showLoading();
  }

  showLoading() {
    var _this = this;

    return (0,C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtrl.create({
        message: 'Cargando datos...',
        duration: 3000,
        spinner: 'circles'
      });
      loading.present();
    })();
  }

  conteo() {
    setTimeout(function () {
      console.log('Datos');
    }, 1000);
  }

};

DatosPage.ctorParameters = () => [{
  type: _getdatos_service__WEBPACK_IMPORTED_MODULE_3__.GetdatosService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController
}];

DatosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-datos',
  template: _datos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_datos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DatosPage);


/***/ }),

/***/ 7736:
/*!*******************************************!*\
  !*** ./src/app/datos/getdatos.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetdatosService": () => (/* binding */ GetdatosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let GetdatosService = class GetdatosService {
    constructor(_http) {
        this._http = _http;
        this.urlapi = 'https://jsonplaceholder.typicode.com/users';
    }
    obtenerDatos() {
        return this._http.get('https://jsonplaceholder.typicode.com/photos');
    }
};
GetdatosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
GetdatosService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], GetdatosService);



/***/ }),

/***/ 4000:
/*!**************************************************!*\
  !*** ./src/app/datos/datos.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRvcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9404:
/*!**************************************************!*\
  !*** ./src/app/datos/datos.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"producto\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>datos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<!-- \r\n  Campos de datos:\r\n  -albumId\r\n  -id\r\n  -title\r\n  -url\r\n  -thumbnailUrl\r\n-->\r\n  <ion-card *ngFor=\"let dato of datos\">\r\n    <p>\r\n      <b>Titulo:</b> {{dato.title}}\r\n    </p>\r\n\r\n    <img src=\"{{dato.url}}\" alt=\"\">\r\n\r\n    \r\n  </ion-card>\r\n\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9kYXRvc19kYXRvc19tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2M7QUFFZDtBQUV6QyxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLGtEQUFTO0tBQ3JCO0NBQ0YsQ0FBQztJQU1XLHNCQUFzQixTQUF0QixzQkFBc0I7Q0FBRztBQUF6QixzQkFBc0I7SUFKbEMsdURBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLGtFQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sRUFBRSxDQUFDLHlEQUFZLENBQUM7S0FDeEIsQ0FBQztHQUNXLHNCQUFzQixDQUFHO0FBQUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJNO0FBQ007QUFDRjtBQUVBO0FBRW1CO0FBRXZCO0lBVzVCLGVBQWUsU0FBZixlQUFlO0NBQUc7QUFBbEIsZUFBZTtJQVQzQix1REFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AseURBQVk7WUFDWix1REFBVztZQUNYLHVEQUFXO1lBQ1gseUVBQXNCO1NBQ3ZCO1FBQ0QsWUFBWSxFQUFFLENBQUMsa0RBQVMsQ0FBQztLQUMxQixDQUFDO0dBQ1csZUFBZSxDQUFHO0FBQUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkI1QjtBQUNBO0FBQ0E7SUFPYUcsU0FBUyxTQUFUQSxTQUFTO0VBSXBCQyxZQUFtQkMsU0FBbkIsRUFBcURDLFdBQXJELEVBQW1GO0lBQWhFO0lBQWtDO0VBQWtDOztFQUl2RkMsUUFBUTtJQUNOLEtBQUtGLFNBQUwsQ0FBZUcsWUFBZixHQUE4QkMsU0FBOUIsQ0FDR0MsSUFBRCxJQUFTO01BQUUsS0FBS0MsS0FBTCxHQUFhRCxJQUFiO0lBQWtCLENBRC9CLEVBRUdFLEtBQUQsSUFBUztNQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtJQUFvQixDQUZqQztJQUtBLEtBQUtHLE1BQUw7SUFDQSxLQUFLQyxXQUFMO0VBRUQ7O0VBQ0tBLFdBQVc7SUFBQTs7SUFBQTtNQUNmLE1BQU1DLE9BQU8sU0FBUyxLQUFJLENBQUNYLFdBQUwsQ0FBaUJZLE1BQWpCLENBQXdCO1FBQzVDQyxPQUFPLEVBQUUsbUJBRG1DO1FBRTVDQyxRQUFRLEVBQUUsSUFGa0M7UUFHNUNDLE9BQU8sRUFBRTtNQUhtQyxDQUF4QixDQUF0QjtNQU1BSixPQUFPLENBQUNLLE9BQVI7SUFQZTtFQVFoQjs7RUFFRFAsTUFBTTtJQUNKUSxVQUFVLENBQUM7TUFDVFYsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtJQUNELENBRlMsRUFFUixJQUZRLENBQVY7RUFHRDs7QUFoQ21COzs7UUFQYlosOERBQWVBOztRQURmRCw2REFBaUJBOzs7QUFRYkUsU0FBUyxzREFMckJILHdEQUFTLENBQUM7RUFDVHdCLFFBQVEsRUFBRSxXQUREO0VBRVRDLFVBQUFBLHdEQUZTOztBQUFBLENBQUQsQ0FLWSxHQUFUdEIsU0FBUyxDQUFUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDhCO0FBQ087SUFLckMsZUFBZSxTQUFmLGVBQWU7SUFJMUIsWUFBbUIsS0FBZ0I7UUFBaEIsVUFBSyxHQUFMLEtBQUssQ0FBVztRQUZuQyxXQUFNLEdBQUcsNENBQTRDO0lBRWQsQ0FBQztJQUd6QyxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Q0FHRDs7WUFqQlEsNERBQVU7O0FBS04sZUFBZTtJQUgzQix5REFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGVBQWUsQ0FZM0I7QUFaMkIiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9kYXRvcy9kYXRvcy1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9kYXRvcy9kYXRvcy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvZGF0b3MvZGF0b3MucGFnZS50cyIsIi4vc3JjL2FwcC9kYXRvcy9nZXRkYXRvcy5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IERhdG9zUGFnZSB9IGZyb20gJy4vZGF0b3MucGFnZSc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogRGF0b3NQYWdlXHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0b3NQYWdlUm91dGluZ01vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5cclxuaW1wb3J0IHsgRGF0b3NQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZGF0b3Mtcm91dGluZy5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgRGF0b3NQYWdlIH0gZnJvbSAnLi9kYXRvcy5wYWdlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBJb25pY01vZHVsZSxcclxuICAgIERhdG9zUGFnZVJvdXRpbmdNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0RhdG9zUGFnZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdG9zUGFnZU1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2FkaW5nQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgR2V0ZGF0b3NTZXJ2aWNlIH0gZnJvbSAnLi9nZXRkYXRvcy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWRhdG9zJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0b3MucGFnZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kYXRvcy5wYWdlLnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdG9zUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGRhdG9zO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvb3ZlZG9yOkdldGRhdG9zU2VydmljZSxwcml2YXRlIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlcikge31cclxuXHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucHJvb3ZlZG9yLm9idGVuZXJEYXRvcygpLnN1YnNjcmliZShcclxuICAgICAgKGRhdGEpID0+IHt0aGlzLmRhdG9zID0gZGF0YX0sXHJcbiAgICAgIChlcnJvcik9PiB7Y29uc29sZS5sb2coZXJyb3IpO31cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5jb250ZW8oKTtcclxuICAgIHRoaXMuc2hvd0xvYWRpbmcoKTtcclxuICAgIFxyXG4gIH1cclxuICBhc3luYyBzaG93TG9hZGluZygpIHtcclxuICAgIGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XHJcbiAgICAgIG1lc3NhZ2U6ICdDYXJnYW5kbyBkYXRvcy4uLicsXHJcbiAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICBzcGlubmVyOiAnY2lyY2xlcycsXHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2FkaW5nLnByZXNlbnQoKTtcclxuICB9XHJcblxyXG4gIGNvbnRlbygpe1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICBjb25zb2xlLmxvZygnRGF0b3MnKVxyXG4gICAgfSwxMDAwKTtcclxuICB9XHJcbiAgXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR2V0ZGF0b3NTZXJ2aWNlIHtcclxuXHJcbiAgdXJsYXBpID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycydcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIF9odHRwOkh0dHBDbGllbnQpIHsgfVxyXG5cclxuXHJcbiBvYnRlbmVyRGF0b3MoKXtcclxuICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9waG90b3MnKTtcclxuIH1cclxuXHJcbiAgXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJMb2FkaW5nQ29udHJvbGxlciIsIkdldGRhdG9zU2VydmljZSIsIkRhdG9zUGFnZSIsImNvbnN0cnVjdG9yIiwicHJvb3ZlZG9yIiwibG9hZGluZ0N0cmwiLCJuZ09uSW5pdCIsIm9idGVuZXJEYXRvcyIsInN1YnNjcmliZSIsImRhdGEiLCJkYXRvcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNvbnRlbyIsInNob3dMb2FkaW5nIiwibG9hZGluZyIsImNyZWF0ZSIsIm1lc3NhZ2UiLCJkdXJhdGlvbiIsInNwaW5uZXIiLCJwcmVzZW50Iiwic2V0VGltZW91dCIsInNlbGVjdG9yIiwidGVtcGxhdGUiXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6W119