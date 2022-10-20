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
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ 1483);





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
    { type: _database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService }
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

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Person</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>Select category</ion-label>\n      <ion-select value=\"{{ selected_category_id }}\" [(ngModel)]=\"category_id\">\n        <ion-select-option\n          *ngFor=\"let category of categories\"\n          value=\"{{ category.id }}\"\n          >{{ category.name }}</ion-select-option\n        >\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input [(ngModel)]=\"personName\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"block\" (click)=\"addPerson()\">Submit</ion-button>\n  </ion-list>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let person of persons\">\n      <ion-item-options side=\"start\">\n        <ion-item-option (click)=\"editPerson(person)\">Edit</ion-item-option>\n      </ion-item-options>\n\n      <ion-item>\n        <ion-label>{{ person.person }}</ion-label>\n        <ion-badge color=\"primary\">{{ person.category }}</ion-badge>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"deletePerson(person.id)\"\n          >Delete</ion-item-option\n        >\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNaLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBVztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQzFCLENBQUM7Q0FDRjs7WUE5RlEsOERBQWU7O0FBT1gsVUFBVTtJQUx0Qix3REFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsbUVBQWlDOztLQUVsQyxDQUFDO0dBQ1csVUFBVSxDQXVGdEI7QUF2RnNCIiwic291cmNlcyI6WyIuL3NyYy9hcHAvcGVyc29uL3BlcnNvbi1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wZXJzb24vcGVyc29uLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wZXJzb24vcGVyc29uLnBhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUGVyc29uUGFnZSB9IGZyb20gJy4vcGVyc29uLnBhZ2UnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogUGVyc29uUGFnZVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgUGVyc29uUGFnZVJvdXRpbmdNb2R1bGUge31cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBQZXJzb25QYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vcGVyc29uLXJvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgUGVyc29uUGFnZSB9IGZyb20gJy4vcGVyc29uLnBhZ2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIFBlcnNvblBhZ2VSb3V0aW5nTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1BlcnNvblBhZ2VdXG59KVxuZXhwb3J0IGNsYXNzIFBlcnNvblBhZ2VNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGFiYXNlU2VydmljZSB9IGZyb20gXCIuLi9kYXRhYmFzZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtcGVyc29uXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGVyc29uLnBhZ2UuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcGVyc29uLnBhZ2Uuc2Nzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgUGVyc29uUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBlcnNvbk5hbWU6IHN0cmluZyA9IFwiXCI7XG4gIHBlcnNvbnM6IGFueSA9IFtdO1xuICBjYXRlZ29yeV9pZDogbnVtYmVyID0gMDtcbiAgY2F0ZWdvcmllczogYW55ID0gW107XG5cbiAgZWRpdE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2VsZWN0ZWRfY2F0ZWdvcnlfaWQ6IG51bWJlciA9IDA7XG4gIGVkaXRJZDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YWJhc2U6IERhdGFiYXNlU2VydmljZSkge1xuICAgIHRoaXMuZ2V0Q2F0ZWdvcmllcygpO1xuICAgIHRoaXMuZ2V0UGVyc29ucygpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIGdldENhdGVnb3JpZXMoKSB7XG4gICAgdGhpcy5kYXRhYmFzZS5nZXRDYXRlZ29yaWVzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gW107XG4gICAgICBpZiAoZGF0YS5yb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChkYXRhLnJvd3MuaXRlbShpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFkZFBlcnNvbigpIHtcbiAgICBpZiAoIXRoaXMucGVyc29uTmFtZS5sZW5ndGgpIHtcbiAgICAgIGFsZXJ0KFwiRW50ZXIgcGVyc29uIG5hbWVcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2F0ZWdvcnlfaWQgPT09IDApIHtcbiAgICAgIGFsZXJ0KFwiU2VsZWN0IGNhdGVnb3J5XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVkaXRNb2RlKSB7XG4gICAgICB0aGlzLmRhdGFiYXNlXG4gICAgICAgIC5lZGl0UGVyc29uKHRoaXMucGVyc29uTmFtZSwgdGhpcy5jYXRlZ29yeV9pZCwgdGhpcy5lZGl0SWQpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5wZXJzb25OYW1lID0gXCJcIjtcbiAgICAgICAgICB0aGlzLmVkaXRNb2RlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5lZGl0SWQgPSAwO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfY2F0ZWdvcnlfaWQgPSAwO1xuICAgICAgICAgIGFsZXJ0KGRhdGEpO1xuICAgICAgICAgIHRoaXMuZ2V0UGVyc29ucygpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWRkXG4gICAgICB0aGlzLmRhdGFiYXNlXG4gICAgICAgIC5hZGRQZXJzb24odGhpcy5wZXJzb25OYW1lLCB0aGlzLmNhdGVnb3J5X2lkKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMucGVyc29uTmFtZSA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5jYXRlZ29yeV9pZCA9IDA7XG4gICAgICAgICAgYWxlcnQoZGF0YSk7XG4gICAgICAgICAgdGhpcy5nZXRQZXJzb25zKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFBlcnNvbnMoKSB7XG4gICAgdGhpcy5kYXRhYmFzZS5nZXRQZXJzb25zKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5wZXJzb25zID0gW107XG4gICAgICBpZiAoZGF0YS5yb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLnBlcnNvbnMucHVzaChkYXRhLnJvd3MuaXRlbShpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZVBlcnNvbihpZDogbnVtYmVyKSB7XG4gICAgdGhpcy5kYXRhYmFzZS5kZWxldGVQZXJzb24oaWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGFsZXJ0KGRhdGEpO1xuICAgICAgdGhpcy5nZXRQZXJzb25zKCk7XG4gICAgfSk7XG4gIH1cblxuICBlZGl0UGVyc29uKHBlcnNvbjogYW55KSB7XG4gICAgdGhpcy5lZGl0TW9kZSA9IHRydWU7XG4gICAgdGhpcy5zZWxlY3RlZF9jYXRlZ29yeV9pZCA9IHBlcnNvbi5jYXRlZ29yeV9pZDtcbiAgICB0aGlzLnBlcnNvbk5hbWUgPSBwZXJzb24ucGVyc29uO1xuICAgIHRoaXMuZWRpdElkID0gcGVyc29uLmlkO1xuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6W119