(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ingresado_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingresado.guard */ 4612);
/* harmony import */ var _no_ingresado_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-ingresado.guard */ 4218);





const routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'mapa',
        redirectTo: 'e404',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_inicio_inicio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inicio/inicio.module */ 3185)).then(m => m.InicioPageModule),
        canActivate: [_no_ingresado_guard__WEBPACK_IMPORTED_MODULE_1__.NoIngresadoGuard]
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule),
        canActivate: [_ingresado_guard__WEBPACK_IMPORTED_MODULE_0__.IngresadoGuard]
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(m => m.LoginPageModule),
    },
    {
        path: 'registrar',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_registrar_registrar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./registrar/registrar.module */ 7811)).then(m => m.RegistrarPageModule),
        canActivate: [_no_ingresado_guard__WEBPACK_IMPORTED_MODULE_1__.NoIngresadoGuard]
    },
    {
        path: 'producto',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_producto_producto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./producto/producto.module */ 3386)).then(m => m.ProductoPageModule),
    },
    {
        path: 'perfil',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_perfil_perfil_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./perfil/perfil.module */ 1320)).then(m => m.PerfilPageModule)
    },
    {
        path: 'datos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_datos_datos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./datos/datos.module */ 7652)).then(m => m.DatosPageModule)
    },
    {
        path: 'rickymorty',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_rickymorty_rickymorty_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./rickymorty/rickymorty.module */ 1820)).then(m => m.RickymortyPageModule)
    },
    {
        path: 'ubicacion',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ubicacion_ubicacion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ubicacion/ubicacion.module */ 7922)).then(m => m.UbicacionPageModule)
    },
    {
        path: 'category',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_category_category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./category/category.module */ 6914)).then(m => m.CategoryPageModule)
    },
    {
        path: 'person',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_person_person_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./person/person.module */ 6280)).then(m => m.PersonPageModule)
    },
    {
        path: 'person',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_person_person_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./person/person.module */ 6280)).then(m => m.PersonPageModule)
    },
    {
        path: 'productos/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_productos_productos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./productos/productos.module */ 1011)).then(m => m.ProductosPageModule)
    },
    {
        path: 'mapa',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mapa_mapa_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mapa/mapa.module */ 964)).then(m => m.MapaPageModule)
    },
    {
        path: 'mapa',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mapa_mapa_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mapa/mapa.module */ 964)).then(m => m.MapaPageModule)
    },
    {
        path: 'e404',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_e404_e404_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./e404/e404.module */ 7284)).then(m => m.E404PageModule)
    },
    {
        path: 'catalogo-productos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_catalogo-productos_catalogo-productos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./catalogo-productos/catalogo-productos.module */ 474)).then(m => m.CatalogoProductosPageModule)
    },
    {
        path: 'prod-detail/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_prod-detail_prod-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./prod-detail/prod-detail.module */ 4334)).then(m => m.ProdDetailPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Users_medin_repoPrograMovil_appProyectoMovil_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 190);







let AppComponent = class AppComponent {
  constructor(navCtrl, storage) {
    this.navCtrl = navCtrl;
    this.storage = storage;
  }

  salir() {
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
    console.log('salir');
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_medin_repoPrograMovil_appProyectoMovil_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // If using a custom driver:
      // await this.storage.defineDriver(MyCustomDriver)
      yield _this.storage.create();
    })();
  }

};

AppComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 7954);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 1714);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 2820);
/* harmony import */ var _service_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/database.service */ 4138);














let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen,
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__.SQLite,
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage,
            _service_database_service__WEBPACK_IMPORTED_MODULE_6__.DatabaseService,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 4612:
/*!************************************!*\
  !*** ./src/app/ingresado.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresadoGuard": () => (/* binding */ IngresadoGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 3819);



let IngresadoGuard = class IngresadoGuard {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    canActivate(route, state) {
        if (localStorage.getItem('ingresado')) {
            return true;
        }
        else {
            this.navCtrl.navigateRoot('inicio');
            return false;
        }
    }
};
IngresadoGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.NavController }
];
IngresadoGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], IngresadoGuard);



/***/ }),

/***/ 4218:
/*!***************************************!*\
  !*** ./src/app/no-ingresado.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoIngresadoGuard": () => (/* binding */ NoIngresadoGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 3819);



let NoIngresadoGuard = class NoIngresadoGuard {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    canActivate(route, state) {
        if (localStorage.getItem('ingresado')) {
            this.navCtrl.navigateRoot('catalogo-productos');
            return false;
        }
        else {
            return true;
        }
    }
};
NoIngresadoGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.NavController }
];
NoIngresadoGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], NoIngresadoGuard);



/***/ }),

/***/ 4138:
/*!*********************************************!*\
  !*** ./src/app/service/database.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var C_Users_medin_repoPrograMovil_appProyectoMovil_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 2820);




let DatabaseService = class DatabaseService {
  constructor(sqlite) {
    this.sqlite = sqlite;
    this.tables = {
      categories: "categories",
      persons: "persons"
    };
  }

  createDatabase() {
    var _this = this;

    return (0,C_Users_medin_repoPrograMovil_appProyectoMovil_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.sqlite.create({
        name: "ionic_sqlite_crud",
        location: "default"
      }).then(db => {
        _this.databaseObj = db;
      }).catch(e => {
        alert("Error Al Crear La Base De Datos " + JSON.stringify(e));
      });
      yield _this.createTables();
    })();
  }

  createTables() {
    var _this2 = this;

    return (0,C_Users_medin_repoPrograMovil_appProyectoMovil_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${_this2.tables.categories} (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL UNIQUE)`, []);
      yield _this2.databaseObj.executeSql(`CREATE TABLE IF NOT EXIST sesion_data (
        user.name TEXT PRIMARY KEY NOT NULL,
        password INTEGER NOT NULL,
        active INTEGER(1) NOT NULL)`, []);
      yield _this2.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${_this2.tables.persons} (id INTEGER PRIMARY KEY AUTOINCREMENT, category_id INTEGER UNSIGNED NOT NULL, name VARCHAR(255) NOT NULL)`, []);
    })();
  }

  addCategory(name) {
    var _this3 = this;

    return (0,C_Users_medin_repoPrograMovil_appProyectoMovil_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this3.databaseObj.executeSql(`INSERT INTO ${_this3.tables.categories} (name) VALUES ('${name}')`, []).then(() => {
        return "Nueva Categoria Creada";
      }).catch(e => {
        if (e.code === 6) {
          return "Esta Categoria Ya Existe";
        }

        return "Error Al Crear La Categoria " + JSON.stringify(e);
      });
    })();
  }

  getCategories() {
    var _this4 = this;

    return (0,C_Users_medin_repoPrograMovil_appProyectoMovil_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this4.databaseObj.executeSql(`SELECT * FROM ${_this4.tables.categories} ORDER BY name ASC`, []).then(res => {
        return res;
      }).catch(e => {
        return "Error Al Obtener Categories " + JSON.stringify(e);
      });
    })();
  }

  deleteCategory(id) {
    var _this5 = this;

    return (0,C_Users_medin_repoPrograMovil_appProyectoMovil_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.databaseObj.executeSql(`DELETE FROM ${_this5.tables.categories} WHERE id = ${id}`, []).then(() => {
        return "Categoria Eliminada";
      }).catch(e => {
        return "Error Al Eliminar La Categoria " + JSON.stringify(e);
      });
    })();
  }

  editCategory(name, id) {
    var _this6 = this;

    return (0,C_Users_medin_repoPrograMovil_appProyectoMovil_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.databaseObj.executeSql(`UPDATE ${_this6.tables.categories} SET name = '${name}' WHERE id = ${id}`, []).then(() => {
        return "Categoria Actualizada";
      }).catch(e => {
        if (e.code === 6) {
          return "La Catagoria Ya Existe";
        }

        return "Error Al Actualizar La Categoria " + JSON.stringify(e);
      });
    })();
  }

  addPerson(name, category_id) {
    var _this7 = this;

    return (0,C_Users_medin_repoPrograMovil_appProyectoMovil_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this7.databaseObj.executeSql(`INSERT INTO ${_this7.tables.persons} (name, category_id) VALUES ('${name}', ${category_id})`, []).then(() => {
        return "Personal Creado";
      }).catch(e => {
        return "Error Al Crear al Personal " + JSON.stringify(e);
      });
    })();
  }

  getPersons() {
    var _this8 = this;

    return (0,C_Users_medin_repoPrograMovil_appProyectoMovil_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this8.databaseObj.executeSql(`SELECT persons.id, persons.category_id, persons.name as person, categories.name as category FROM persons INNER JOIN categories ON categories.id = persons.category_id ORDER BY person ASC`, []).then(res => {
        return res;
      }).catch(e => {
        return "Error Al Obtener Al Personal " + JSON.stringify(e);
      });
    })();
  }

  deletePerson(id) {
    var _this9 = this;

    return (0,C_Users_medin_repoPrograMovil_appProyectoMovil_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this9.databaseObj.executeSql(`DELETE FROM ${_this9.tables.persons} WHERE id = ${id}`, []).then(() => {
        return "Personal Eliminado";
      }).catch(e => {
        return "Error Al Eliminar Al Personal " + JSON.stringify(e);
      });
    })();
  }

  editPerson(name, category_id, id) {
    var _this10 = this;

    return (0,C_Users_medin_repoPrograMovil_appProyectoMovil_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this10.databaseObj.executeSql(`UPDATE ${_this10.tables.persons} SET name = '${name}', category_id = ${category_id} WHERE id = ${id}`, []).then(() => {
        return "Personal Actualizado";
      }).catch(e => {
        return "Error al Actualizar Al Personal " + JSON.stringify(e);
      });
    })();
  }

};

DatabaseService.ctorParameters = () => [{
  type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__.SQLite
}];

DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: "root"
})], DatabaseService);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    mapsKey: 'AIzaSyCzXZvD25zq5rW4pchhHLnJdYweeMkR2tY',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-26477881_js-node_modules_ionic_core_dist_esm_t-6bed99",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-26477881_js-node_modules_ionic_core_dist_esm_t-6bed99",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  background-color: var(--ion-color-estip2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWVzdGlwMik7XHJcbn0iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\">\r\n      <ion-header color=\"estilopropio\">\r\n        <ion-toolbar>\r\n          <ion-title>Menu</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content>\r\n        <ion-list>\r\n          <ion-menu-toggle auto-hide=\"false\">\r\n            <ion-item [routerDirection]=\"'home'\" [routerLink]=\"'/home'\">\r\n              <ion-icon slot=\"start\" name=\"home-sharp\"></ion-icon>\r\n              <ion-label>\r\n                Inicio\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item [routerDirection]=\"'home'\" [routerLink]=\"'/producto'\">\r\n              <ion-icon slot=\"start\" [name]=\"'list'\"></ion-icon>\r\n              <ion-label>\r\n                Producto\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item [routerDirection]=\"'home'\" [routerLink]=\"'/catalogo-productos'\">\r\n              <ion-icon slot=\"start\" [name]=\"'list'\"></ion-icon>\r\n              <ion-label>\r\n                Catalogo\r\n              </ion-label>\r\n            </ion-item>\r\n           \r\n            <ion-item [routerDirection]=\"'home'\" [routerLink]=\"'/datos'\">\r\n              <ion-icon slot=\"start\" name=\"globe-sharp\"></ion-icon>\r\n              <ion-label>\r\n                datos\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item [routerDirection]=\"'home'\" [routerLink]=\"'/rickymorty'\">\r\n              <ion-icon slot=\"start\" name=\"earth-sharp\"></ion-icon>\r\n              <ion-label>\r\n                Api Rick & Morty \r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item [routerDirection]=\"'root'\" [routerLink]=\"'/perfil'\">\r\n              <ion-icon slot=\"start\" [name]=\"'person-outline'\"></ion-icon>\r\n              <ion-label>\r\n                Perfil\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item [routerDirection]=\"'categoria'\" [routerLink]=\"'/category'\">\r\n              <ion-icon slot=\"start\" [name]=\"'albums-outline'\"></ion-icon>\r\n              <ion-label>\r\n                Categoria\r\n              </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item [routerDirection]=\"'personal'\" [routerLink]=\"'/person'\">\r\n              <ion-icon slot=\"start\" [name]=\"'accessibility-outline'\"></ion-icon>\r\n              <ion-label>\r\n                Personal\r\n              </ion-label>\r\n            </ion-item>\r\n            \r\n            <ion-item [routerDirection]=\"'home'\" [routerLink]=\"'/ubicacion'\">\r\n              <ion-icon slot=\"start\" name=\"map-sharp\"></ion-icon>\r\n              <ion-label>\r\n                Ubicación GPS\r\n              </ion-label>\r\n\r\n            </ion-item>\r\n            <ion-item [routerDirection]=\"'home'\" [routerLink]=\"'/mapa'\">\r\n              <ion-icon slot=\"start\" name=\"map-sharp\"></ion-icon>\r\n              <ion-label>\r\n                Google Maps\r\n              </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item (click)=\"salir()\" [routerDirection]=\"'home'\" [routerLink]=\"'/login'\">\r\n              <ion-icon slot=\"start\" name=\"log-out-outline\"></ion-icon>\r\n              <ion-label>\r\n                Cerrar sesion\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu> \r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n\r\n<!--\r\nCOMPONENT ORIGINAL \r\n<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n-->";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map