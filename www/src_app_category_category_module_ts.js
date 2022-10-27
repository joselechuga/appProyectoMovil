"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_category_category_module_ts"],{

/***/ 4826:
/*!*****************************************************!*\
  !*** ./src/app/category/category-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPageRoutingModule": () => (/* binding */ CategoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.page */ 838);




const routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_0__.CategoryPage
    }
];
let CategoryPageRoutingModule = class CategoryPageRoutingModule {
};
CategoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoryPageRoutingModule);



/***/ }),

/***/ 6914:
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPageModule": () => (/* binding */ CategoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-routing.module */ 4826);
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.page */ 838);







let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _category_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryPageRoutingModule
        ],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_1__.CategoryPage]
    })
], CategoryPageModule);



/***/ }),

/***/ 838:
/*!*******************************************!*\
  !*** ./src/app/category/category.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPage": () => (/* binding */ CategoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _category_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.page.html?ngResource */ 5966);
/* harmony import */ var _category_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.page.scss?ngResource */ 5058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _service_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/database.service */ 4138);






let CategoryPage = class CategoryPage {
    constructor(database, platform) {
        this.database = database;
        this.platform = platform;
        this.categoryName = "";
        this.categories = [];
        this.editMode = false;
        this.editId = 0;
        this.database.createDatabase().then(() => {
            // will call get categories
            this.getCategories();
        });
    }
    ngOnInit() { }
    addCategory() {
        if (!this.categoryName.length) {
            alert("Enter category name");
            return;
        }
        if (this.editMode) {
            // edit category
            this.database
                .editCategory(this.categoryName, this.editId)
                .then((data) => {
                this.categoryName = "";
                (this.editMode = false), (this.editId = 0);
                alert(data);
                this.getCategories();
            });
        }
        else {
            // add category
            this.database.addCategory(this.categoryName).then((data) => {
                this.categoryName = "";
                alert(data);
                this.getCategories();
            });
        }
    }
    getCategories() {
        this.database.getCategories().then((data) => {
            this.categories = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    this.categories.push(data.rows.item(i));
                }
            }
        });
    }
    deleteCategory(id) {
        this.database.deleteCategory(id).then((data) => {
            alert(data);
            this.getCategories();
        });
    }
    editCategory(category) {
        this.editMode = true;
        this.categoryName = category.name;
        this.editId = category.id;
    }
};
CategoryPage.ctorParameters = () => [
    { type: _service_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
CategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-category",
        template: _category_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_category_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategoryPage);



/***/ }),

/***/ 5058:
/*!********************************************************!*\
  !*** ./src/app/category/category.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5966:
/*!********************************************************!*\
  !*** ./src/app/category/category.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Categoria</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Categorias</ion-label>\r\n      <ion-input [(ngModel)]=\"categoryName\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-button expand=\"block\" (click)=\"addCategory()\">Agregar</ion-button>\r\n  </ion-list>\r\n\r\n  <ion-list>\r\n    <ion-item-sliding *ngFor=\"let category of categories\">\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option (click)=\"editCategory(category)\">Edit</ion-item-option>\r\n      </ion-item-options>\r\n\r\n      <ion-item>\r\n        <ion-label>{{ category.name }}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"danger\" (click)=\"deleteCategory(category.id)\"\r\n          >Delete</ion-item-option\r\n        >\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_category_category_module_ts.js.map