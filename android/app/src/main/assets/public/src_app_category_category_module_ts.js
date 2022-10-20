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
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ 1483);






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
    { type: _database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
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

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Category</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">Category</ion-label>\n      <ion-input [(ngModel)]=\"categoryName\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"block\" (click)=\"addCategory()\">Submit</ion-button>\n  </ion-list>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let category of categories\">\n      <ion-item-options side=\"start\">\n        <ion-item-option (click)=\"editCategory(category)\">Edit</ion-item-option>\n      </ion-item-options>\n\n      <ion-item>\n        <ion-label>{{ category.name }}</ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"deleteCategory(category.id)\"\n          >Delete</ion-item-option\n        >\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9jYXRlZ29yeV9jYXRlZ29yeV9tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2M7QUFFUjtBQUUvQyxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHdEQUFZO0tBQ3hCO0NBQ0YsQ0FBQztJQU1XLHlCQUF5QixTQUF6Qix5QkFBeUI7Q0FBRztBQUE1Qix5QkFBeUI7SUFKckMsdURBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLGtFQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sRUFBRSxDQUFDLHlEQUFZLENBQUM7S0FDeEIsQ0FBQztHQUNXLHlCQUF5QixDQUFHO0FBQUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJHO0FBQ007QUFDRjtBQUVBO0FBRXlCO0FBRXZCO0lBV2xDLGtCQUFrQixTQUFsQixrQkFBa0I7Q0FBRztBQUFyQixrQkFBa0I7SUFUOUIsdURBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHlEQUFZO1lBQ1osdURBQVc7WUFDWCx1REFBVztZQUNYLCtFQUF5QjtTQUMxQjtRQUNELFlBQVksRUFBRSxDQUFDLHdEQUFZLENBQUM7S0FDN0IsQ0FBQztHQUNXLGtCQUFrQixDQUFHO0FBQUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CbUI7QUFDUjtBQUNZO0lBT3pDLFlBQVksU0FBWixZQUFZO0lBTXZCLFlBQW1CLFFBQXlCLEVBQVMsUUFBa0I7UUFBcEQsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTHZFLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFDckIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR2pCLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN2QywyQkFBMkI7WUFDM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVEsS0FBSSxDQUFDO0lBRWIsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUM3QixLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUM3QixPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsZ0JBQWdCO1lBQ2hCLElBQUksQ0FBQyxRQUFRO2lCQUNWLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQzVDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNMLGVBQWU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDekM7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxFQUFVO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzdDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNaLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZLENBQUMsUUFBYTtRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQzVCLENBQUM7Q0FDRjs7WUF2RVEsOERBQWU7WUFEZixvREFBUTs7QUFRSixZQUFZO0lBTHhCLHdEQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixxRUFBbUM7O0tBRXBDLENBQUM7R0FDVyxZQUFZLENBZ0V4QjtBQWhFd0IiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS5tb2R1bGUudHMiLCIuL3NyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkucGFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDYXRlZ29yeVBhZ2UgfSBmcm9tICcuL2NhdGVnb3J5LnBhZ2UnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogQ2F0ZWdvcnlQYWdlXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVBhZ2VSb3V0aW5nTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuaW1wb3J0IHsgQ2F0ZWdvcnlQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY2F0ZWdvcnktcm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBDYXRlZ29yeVBhZ2UgfSBmcm9tICcuL2NhdGVnb3J5LnBhZ2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIENhdGVnb3J5UGFnZVJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2F0ZWdvcnlQYWdlXVxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVBhZ2VNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSBcIkBpb25pYy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBEYXRhYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vZGF0YWJhc2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWNhdGVnb3J5XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2F0ZWdvcnkucGFnZS5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jYXRlZ29yeS5wYWdlLnNjc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5UGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNhdGVnb3J5TmFtZTogc3RyaW5nID0gXCJcIjtcbiAgY2F0ZWdvcmllczogYW55ID0gW107XG4gIGVkaXRNb2RlOiBib29sZWFuID0gZmFsc2U7XG4gIGVkaXRJZDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YWJhc2U6IERhdGFiYXNlU2VydmljZSwgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xuICAgIHRoaXMuZGF0YWJhc2UuY3JlYXRlRGF0YWJhc2UoKS50aGVuKCgpID0+IHtcbiAgICAgIC8vIHdpbGwgY2FsbCBnZXQgY2F0ZWdvcmllc1xuICAgICAgdGhpcy5nZXRDYXRlZ29yaWVzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgYWRkQ2F0ZWdvcnkoKSB7XG4gICAgaWYgKCF0aGlzLmNhdGVnb3J5TmFtZS5sZW5ndGgpIHtcbiAgICAgIGFsZXJ0KFwiRW50ZXIgY2F0ZWdvcnkgbmFtZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lZGl0TW9kZSkge1xuICAgICAgLy8gZWRpdCBjYXRlZ29yeVxuICAgICAgdGhpcy5kYXRhYmFzZVxuICAgICAgICAuZWRpdENhdGVnb3J5KHRoaXMuY2F0ZWdvcnlOYW1lLCB0aGlzLmVkaXRJZClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmNhdGVnb3J5TmFtZSA9IFwiXCI7XG4gICAgICAgICAgKHRoaXMuZWRpdE1vZGUgPSBmYWxzZSksICh0aGlzLmVkaXRJZCA9IDApO1xuICAgICAgICAgIGFsZXJ0KGRhdGEpO1xuICAgICAgICAgIHRoaXMuZ2V0Q2F0ZWdvcmllcygpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWRkIGNhdGVnb3J5XG4gICAgICB0aGlzLmRhdGFiYXNlLmFkZENhdGVnb3J5KHRoaXMuY2F0ZWdvcnlOYW1lKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlOYW1lID0gXCJcIjtcbiAgICAgICAgYWxlcnQoZGF0YSk7XG4gICAgICAgIHRoaXMuZ2V0Q2F0ZWdvcmllcygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2F0ZWdvcmllcygpIHtcbiAgICB0aGlzLmRhdGFiYXNlLmdldENhdGVnb3JpZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXMgPSBbXTtcbiAgICAgIGlmIChkYXRhLnJvd3MubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKGRhdGEucm93cy5pdGVtKGkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlQ2F0ZWdvcnkoaWQ6IG51bWJlcikge1xuICAgIHRoaXMuZGF0YWJhc2UuZGVsZXRlQ2F0ZWdvcnkoaWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGFsZXJ0KGRhdGEpO1xuICAgICAgdGhpcy5nZXRDYXRlZ29yaWVzKCk7XG4gICAgfSk7XG4gIH1cblxuICBlZGl0Q2F0ZWdvcnkoY2F0ZWdvcnk6IGFueSkge1xuICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlO1xuICAgIHRoaXMuY2F0ZWdvcnlOYW1lID0gY2F0ZWdvcnkubmFtZTtcbiAgICB0aGlzLmVkaXRJZCA9IGNhdGVnb3J5LmlkO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbXX0=