"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_prod-detail_prod-detail_module_ts"],{

/***/ 9040:
/*!***********************************************************!*\
  !*** ./src/app/prod-detail/prod-detail-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdDetailPageRoutingModule": () => (/* binding */ ProdDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _prod_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prod-detail.page */ 8826);




const routes = [
    {
        path: '',
        component: _prod_detail_page__WEBPACK_IMPORTED_MODULE_0__.ProdDetailPage
    }
];
let ProdDetailPageRoutingModule = class ProdDetailPageRoutingModule {
};
ProdDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProdDetailPageRoutingModule);



/***/ }),

/***/ 4334:
/*!***************************************************!*\
  !*** ./src/app/prod-detail/prod-detail.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdDetailPageModule": () => (/* binding */ ProdDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _prod_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prod-detail-routing.module */ 9040);
/* harmony import */ var _prod_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prod-detail.page */ 8826);







let ProdDetailPageModule = class ProdDetailPageModule {
};
ProdDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _prod_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProdDetailPageRoutingModule
        ],
        declarations: [_prod_detail_page__WEBPACK_IMPORTED_MODULE_1__.ProdDetailPage]
    })
], ProdDetailPageModule);



/***/ }),

/***/ 8826:
/*!*************************************************!*\
  !*** ./src/app/prod-detail/prod-detail.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdDetailPage": () => (/* binding */ ProdDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _prod_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prod-detail.page.html?ngResource */ 1437);
/* harmony import */ var _prod_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prod-detail.page.scss?ngResource */ 3113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);






let ProdDetailPage = class ProdDetailPage {
    constructor(http, activateRoute) {
        this.http = http;
        this.activateRoute = activateRoute;
    }
    ngOnInit() {
        this.producto = this.activateRoute.snapshot.paramMap.get('id');
        this.http.get('https://636848caedc85dbc84e49015.mockapi.io/producto/' + this.producto)
            .subscribe(res => {
            this.detalle_prod = res;
            console.log(res);
        });
    }
};
ProdDetailPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ProdDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-prod-detail',
        template: _prod_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_prod_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProdDetailPage);



/***/ }),

/***/ 3113:
/*!**************************************************************!*\
  !*** ./src/app/prod-detail/prod-detail.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans:700);\nion-content {\n  --ion-background-color:linear-gradient(to top, #cfd2d4 0%, #c5cfd5 100%);\n}\n.barrabtnbck {\n  height: 10vh;\n  background-color: #92c6b9;\n}\nion-back-button {\n  color: rgb(62, 63, 64);\n}\n#contenedorbtns {\n  background-color: aliceblue;\n  height: 5vh;\n  width: 65vw;\n  display: flex;\n  align-items: center;\n  border-radius: 30px;\n  opacity: 0.5;\n}\n#btncarru {\n  background-color: var(--ion-color-estilopropio);\n  height: 2vh;\n  width: 4vw;\n  border-radius: 50%;\n  margin: 7px;\n}\n.carousel-inner {\n  border-radius: 0 0 80px 80px;\n  height: 50vh;\n  background-color: #92c6b9;\n  box-shadow: 10px 10px 10px 1px rgba(8, 8, 8, 0.2);\n}\nimg {\n  filter: drop-shadow(8px 8px 4px rgb(26, 25, 25));\n}\n.nomprod {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nh1, h3 {\n  font-family: \"Open Sans\", sans-serif;\n}\nh4 {\n  font-family: \"Open Sans\", sans-serif;\n  color: #830a0a;\n}\n.precio {\n  display: flex;\n}\n.accordion-item {\n  background-color: #92c6b9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.accordion-button {\n  background-color: #83370a;\n  color: aliceblue;\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2QtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxrRUFBQTtBQUdSO0VBQ0ksd0VBQUE7QUFESjtBQUlBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FBREo7QUFJQTtFQUNJLHNCQUFBO0FBREo7QUFJQTtFQUNJLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFESjtBQUlBO0VBQ0ksK0NBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQURKO0FBSUE7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlEQUFBO0FBREo7QUFJQTtFQUNJLGdEQUFBO0FBREo7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREo7QUFJQTtFQUNJLG9DQUFBO0FBREo7QUFJQTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUE7RUFDSSxhQUFBO0FBREo7QUFJQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQURKO0FBSUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQURKIiwiZmlsZSI6InByb2QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NzAwKTtcclxuXHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6bGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2NmZDJkNCAwJSwgI2M1Y2ZkNSAxMDAlKTtcclxufVxyXG5cclxuLmJhcnJhYnRuYmNre1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyYzZiOTtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9ue1xyXG4gICAgY29sb3I6cmdiKDYyLCA2MywgNjQpO1xyXG59XHJcblxyXG4jY29udGVuZWRvcmJ0bnN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxuICAgIHdpZHRoOiA2NXZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4jYnRuY2FycnV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZXN0aWxvcHJvcGlvKTtcclxuICAgIGhlaWdodDogMnZoO1xyXG4gICAgd2lkdGg6IDR2dztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogN3B4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5uZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgODBweCA4MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyYzZiOTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDFweCByZ2JhKDgsIDgsIDgsIDAuMik7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coOHB4IDhweCA0cHggcmdiKDI2LCAyNSwgMjUpKTtcclxufVxyXG5cclxuLm5vbXByb2R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5oMSxoM3tcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDR7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzgzMGEwYTsgXHJcbn1cclxuXHJcbi5wcmVjaW97XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWl0ZW17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJjNmI5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5hY2NvcmRpb24tYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzMzcwYTtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 1437:
/*!**************************************************************!*\
  !*** ./src/app/prod-detail/prod-detail.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n\r\n  <ion-buttons class=\"barrabtnbck\">\r\n    <ion-back-button defaultHref=\"catalogo-productos\"></ion-back-button>\r\n  </ion-buttons>\r\n\r\n  <div *ngIf=\"detalle_prod\">\r\n\r\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n      <div id=\"contenedorbtns\" class=\"carousel-indicators\">\r\n        <button id=\"btncarru\" type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"0\"\r\n          class=\"active\" aria-label=\"Slide 1\"></button>\r\n        <button id=\"btncarru\" type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"1\"\r\n          aria-label=\"Slide 2\"></button>\r\n        <button id=\"btncarru\" type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"2\"\r\n          aria-label=\"Slide 3\"></button>\r\n      </div>\r\n      <div class=\"carousel-inner\">\r\n        <div class=\"carousel-item active\">\r\n          <img src=\"{{detalle_prod.image1}}\" class=\"\" alt=\"...\">\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n          <img src=\"{{detalle_prod.image2}}\" class=\" \" alt=\"...\">\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n          <img src=\"{{detalle_prod.image3}}\" class=\"\" alt=\"...\">\r\n        </div>\r\n      </div>\r\n      <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleIndicators\"\r\n        data-bs-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"visually-hidden\">Previous</span>\r\n      </button>\r\n      <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleIndicators\"\r\n        data-bs-slide=\"next\">\r\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"visually-hidden\">Next</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"nomprod\">\r\n      <h1>{{detalle_prod.name}}</h1>\r\n    </div>\r\n\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"accordion-item\">\r\n        <div class=\"precio\">\r\n          <h3>Precio: $</h3>\r\n          <h4>{{detalle_prod.precio}}</h4>\r\n        </div>\r\n        <h2 class=\"accordion-header\" id=\"headingThree\">\r\n          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n            data-bs-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n            Ver descipción del producto\r\n          </button>\r\n        </h2>\r\n        <div id=\"collapseThree\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingThree\"\r\n          data-bs-parent=\"#accordionExample\">\r\n          <div class=\"accordion-body\">\r\n            <p>{{detalle_prod.description}}</p>\r\n            <div class=\"fotodetalle\">\r\n              <img src=\"{{detalle_prod.image4}}\" alt=\"\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_prod-detail_prod-detail_module_ts.js.map