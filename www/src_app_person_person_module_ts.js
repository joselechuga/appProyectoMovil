"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_person_person_module_ts"],{

/***/ 491:
/*!*************************************************!*\
  !*** ./src/app/person/person-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonPageRoutingModule": () => (/* binding */ PersonPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _person_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person.page */ 4398);




const routes = [
    {
        path: '',
        component: _person_page__WEBPACK_IMPORTED_MODULE_0__.PersonPage
    }
];
let PersonPageRoutingModule = class PersonPageRoutingModule {
};
PersonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PersonPageRoutingModule);



/***/ }),

/***/ 6280:
/*!*****************************************!*\
  !*** ./src/app/person/person.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonPageModule": () => (/* binding */ PersonPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _person_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person-routing.module */ 491);
/* harmony import */ var _person_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person.page */ 4398);







let PersonPageModule = class PersonPageModule {
};
PersonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _person_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonPageRoutingModule
        ],
        declarations: [_person_page__WEBPACK_IMPORTED_MODULE_1__.PersonPage]
    })
], PersonPageModule);



/***/ }),

/***/ 4398:
/*!***************************************!*\
  !*** ./src/app/person/person.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonPage": () => (/* binding */ PersonPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _person_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person.page.html?ngResource */ 4782);
/* harmony import */ var _person_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person.page.scss?ngResource */ 2497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/database.service */ 4138);





let PersonPage = class PersonPage {
    constructor(database) {
        this.database = database;
        this.personName = "";
        this.persons = [];
        this.category_id = 0;
        this.categories = [];
        this.editMode = false;
        this.selected_category_id = 0;
        this.editId = 0;
        this.getCategories();
        this.getPersons();
    }
    ngOnInit() { }
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
    addPerson() {
        if (!this.personName.length) {
            alert("Enter person name");
            return;
        }
        if (this.category_id === 0) {
            alert("Select category");
            return;
        }
        if (this.editMode) {
            this.database
                .editPerson(this.personName, this.category_id, this.editId)
                .then((data) => {
                this.personName = "";
                this.editMode = false;
                this.editId = 0;
                this.selected_category_id = 0;
                alert(data);
                this.getPersons();
            });
        }
        else {
            // add
            this.database
                .addPerson(this.personName, this.category_id)
                .then((data) => {
                this.personName = "";
                this.category_id = 0;
                alert(data);
                this.getPersons();
            });
        }
    }
    getPersons() {
        this.database.getPersons().then((data) => {
            this.persons = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    this.persons.push(data.rows.item(i));
                }
            }
        });
    }
    deletePerson(id) {
        this.database.deletePerson(id).then((data) => {
            alert(data);
            this.getPersons();
        });
    }
    editPerson(person) {
        this.editMode = true;
        this.selected_category_id = person.category_id;
        this.personName = person.person;
        this.editId = person.id;
    }
};
PersonPage.ctorParameters = () => [
    { type: _service_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService }
];
PersonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-person",
        template: _person_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_person_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PersonPage);



/***/ }),

/***/ 2497:
/*!****************************************************!*\
  !*** ./src/app/person/person.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb24ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4782:
/*!****************************************************!*\
  !*** ./src/app/person/person.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Personal</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Seleccionar Categoria</ion-label>\r\n      <ion-select value=\"{{ selected_category_id }}\" [(ngModel)]=\"category_id\">\r\n        <ion-select-option\r\n          *ngFor=\"let category of categories\"\r\n          value=\"{{ category.id }}\"\r\n          >{{ category.name }}</ion-select-option\r\n        >\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Nombre</ion-label>\r\n      <ion-input [(ngModel)]=\"personName\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-button expand=\"block\" (click)=\"addPerson()\">Agregar</ion-button>\r\n  </ion-list>\r\n\r\n  <ion-list>\r\n    <ion-item-sliding *ngFor=\"let person of persons\">\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option (click)=\"editPerson(person)\">Edit</ion-item-option>\r\n      </ion-item-options>\r\n\r\n      <ion-item>\r\n        <ion-label>{{ person.person }}</ion-label>\r\n        <ion-badge color=\"primary\">{{ person.category }}</ion-badge>\r\n      </ion-item>\r\n\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"danger\" (click)=\"deletePerson(person.id)\"\r\n          >Delete</ion-item-option\r\n        >\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_person_person_module_ts.js.map