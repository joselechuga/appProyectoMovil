"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 1483:
/*!*************************************!*\
  !*** ./src/app/database.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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

    return (0,C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.sqlite.create({
        name: "ionic_sqlite_crud",
        location: "default"
      }).then(db => {
        _this.databaseObj = db;
      }).catch(e => {
        alert("error on creating database " + JSON.stringify(e));
      });
      yield _this.createTables();
    })();
  }

  createTables() {
    var _this2 = this;

    return (0,C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${_this2.tables.categories} (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL UNIQUE)`, []);
      yield _this2.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${_this2.tables.persons} (id INTEGER PRIMARY KEY AUTOINCREMENT, category_id INTEGER UNSIGNED NOT NULL, name VARCHAR(255) NOT NULL)`, []);
    })();
  }

  addCategory(name) {
    var _this3 = this;

    return (0,C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this3.databaseObj.executeSql(`INSERT INTO ${_this3.tables.categories} (name) VALUES ('${name}')`, []).then(() => {
        return "category created";
      }).catch(e => {
        if (e.code === 6) {
          return "category already exists";
        }

        return "error on creating category " + JSON.stringify(e);
      });
    })();
  }

  getCategories() {
    var _this4 = this;

    return (0,C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this4.databaseObj.executeSql(`SELECT * FROM ${_this4.tables.categories} ORDER BY name ASC`, []).then(res => {
        return res;
      }).catch(e => {
        return "error on getting categories " + JSON.stringify(e);
      });
    })();
  }

  deleteCategory(id) {
    var _this5 = this;

    return (0,C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.databaseObj.executeSql(`DELETE FROM ${_this5.tables.categories} WHERE id = ${id}`, []).then(() => {
        return "category deleted";
      }).catch(e => {
        return "error on deleting category " + JSON.stringify(e);
      });
    })();
  }

  editCategory(name, id) {
    var _this6 = this;

    return (0,C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.databaseObj.executeSql(`UPDATE ${_this6.tables.categories} SET name = '${name}' WHERE id = ${id}`, []).then(() => {
        return "category updated";
      }).catch(e => {
        if (e.code === 6) {
          return "category already exist";
        }

        return "error on updating category " + JSON.stringify(e);
      });
    })();
  }

  addPerson(name, category_id) {
    var _this7 = this;

    return (0,C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this7.databaseObj.executeSql(`INSERT INTO ${_this7.tables.persons} (name, category_id) VALUES ('${name}', ${category_id})`, []).then(() => {
        return "person created";
      }).catch(e => {
        return "error on creating person " + JSON.stringify(e);
      });
    })();
  }

  getPersons() {
    var _this8 = this;

    return (0,C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this8.databaseObj.executeSql(`SELECT persons.id, persons.category_id, persons.name as person, categories.name as category FROM persons INNER JOIN categories ON categories.id = persons.category_id ORDER BY person ASC`, []).then(res => {
        return res;
      }).catch(e => {
        return "error on getting persons " + JSON.stringify(e);
      });
    })();
  }

  deletePerson(id) {
    var _this9 = this;

    return (0,C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this9.databaseObj.executeSql(`DELETE FROM ${_this9.tables.persons} WHERE id = ${id}`, []).then(() => {
        return "person deleted";
      }).catch(e => {
        return "error on deleting person " + JSON.stringify(e);
      });
    })();
  }

  editPerson(name, category_id, id) {
    var _this10 = this;

    return (0,C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this10.databaseObj.executeSql(`UPDATE ${_this10.tables.persons} SET name = '${name}', category_id = ${category_id} WHERE id = ${id}`, []).then(() => {
        return "person updated";
      }).catch(e => {
        return "error on updating person " + JSON.stringify(e);
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

/***/ 2483:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4975dbd0.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_1a99aeb7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-1a99aeb7.js */ 4895);
/* harmony import */ var _haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-683b3b3c.js */ 634);
/* harmony import */ var _index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-3f1a7d95.js */ 2172);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;

  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }

    const target = document.elementFromPoint(x, y);

    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }

    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };

  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;

    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }

    const buttonToModify = currentTouchedButton;
    (0,_index_1a99aeb7_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };

  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }

    const buttonToModify = currentTouchedButton;
    (0,_index_1a99aeb7_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */

    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }

    currentTouchedButton = undefined;
  };

  return (0,_index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};



/***/ }),

/***/ 7481:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = hostEl => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }

  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};



/***/ }),

/***/ 9013:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-5ad6825d.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];

const startFocusVisible = rootEl => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = rootEl ? rootEl.shadowRoot : document;
  const root = rootEl ? rootEl : document.body;

  const setFocus = elements => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };

  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };

  const onKeydown = ev => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);

    if (!keyboardMode) {
      setFocus([]);
    }
  };

  const onFocusin = ev => {
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter(el => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }

        return false;
      });
      setFocus(toFocus);
    }
  };

  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };

  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);

  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };

  return {
    destroy,
    setFocus
  };
};



/***/ }),

/***/ 2668:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-ce4f806c.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CoreDelegate),
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-4d272360.js */ 9158);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (delegate, container, component, cssClasses, componentProps, inline) {
    var _a;

    if (delegate) {
      return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }

    if (!inline && typeof component !== 'string' && !(component instanceof HTMLElement)) {
      throw new Error('framework delegate is missing');
    }

    const el = typeof component === 'string' ? (_a = container.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(component) : component;

    if (cssClasses) {
      cssClasses.forEach(c => el.classList.add(c));
    }

    if (componentProps) {
      Object.assign(el, componentProps);
    }

    container.appendChild(el);
    yield new Promise(resolve => (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
    return el;
  });

  return function attachComponent(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};

const CoreDelegate = () => {
  let BaseComponent;
  let Reference;

  const attachViewToDom = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parentElement, userComponent, userComponentProps = {}, cssClasses = []) {
      var _a, _b;

      BaseComponent = parentElement;
      /**
       * If passing in a component via the `component` props
       * we need to append it inside of our overlay component.
       */

      if (userComponent) {
        /**
         * If passing in the tag name, create
         * the element otherwise just get a reference
         * to the component.
         */
        const el = typeof userComponent === 'string' ? (_a = BaseComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(userComponent) : userComponent;
        /**
         * Add any css classes passed in
         * via the cssClasses prop on the overlay.
         */

        cssClasses.forEach(c => el.classList.add(c));
        /**
         * Add any props passed in
         * via the componentProps prop on the overlay.
         */

        Object.assign(el, userComponentProps);
        /**
         * Finally, append the component
         * inside of the overlay component.
         */

        BaseComponent.appendChild(el);
        yield new Promise(resolve => (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      } else if (BaseComponent.children.length > 0) {
        // If there is no component, then we need to create a new parent
        // element to apply the css classes to.
        const el = (_b = BaseComponent.ownerDocument) === null || _b === void 0 ? void 0 : _b.createElement('div');
        cssClasses.forEach(c => el.classList.add(c)); // Move each child from the original template to the new parent element.

        el.append(...BaseComponent.children); // Append the new parent element to the original parent element.

        BaseComponent.appendChild(el);
      }
      /**
       * Get the root of the app and
       * add the overlay there.
       */


      const app = document.querySelector('ion-app') || document.body;
      /**
       * Create a placeholder comment so that
       * we can return this component to where
       * it was previously.
       */

      Reference = document.createComment('ionic teleport');
      BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
      app.appendChild(BaseComponent);
      return BaseComponent;
    });

    return function attachViewToDom(_x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }();

  const removeViewFromDom = () => {
    /**
     * Return component to where it was previously in the DOM.
     */
    if (BaseComponent && Reference) {
      Reference.parentNode.insertBefore(BaseComponent, Reference);
      Reference.remove();
    }

    return Promise.resolve();
  };

  return {
    attachViewToDom,
    removeViewFromDom
  };
};



/***/ }),

/***/ 634:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-683b3b3c.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const HapticEngine = {
  getEngine() {
    var _a;

    const win = window;
    return win.TapticEngine || ((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.isPluginAvailable('Haptics')) && win.Capacitor.Plugins.Haptics;
  },

  available() {
    return !!this.getEngine();
  },

  isCordova() {
    return !!window.TapticEngine;
  },

  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },

  impact(options) {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({
      style
    });
  },

  notification(options) {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({
      style
    });
  },

  selection() {
    this.impact({
      style: 'light'
    });
  },

  selectionStart() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },

  selectionChanged() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },

  selectionEnd() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }

};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */

const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */


const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */


const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */


const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */


const hapticImpact = options => {
  HapticEngine.impact(options);
};



/***/ }),

/***/ 2286:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-33ffec25.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ win)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * When accessing the window, it is important
 * to account for SSR applications where the
 * window is not available. Code that accesses
 * window when it is not available will crash.
 * Even checking if `window === undefined` will cause
 * apps to crash in SSR.
 *
 * Use win below to access an SSR-safe version
 * of the window.
 *
 * Example 1:
 * Before:
 * if (window.innerWidth > 768) { ... }
 *
 * After:
 * import { win } from 'path/to/this/file';
 * if (win?.innerWidth > 768) { ... }
 *
 * Note: Code inside of this if-block will
 * not run in an SSR environment.
 */
const win = typeof window !== 'undefined' ? window : undefined;


/***/ }),

/***/ 7288:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3413f7be.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ION_CONTENT_ELEMENT_SELECTOR),
/* harmony export */   "a": () => (/* binding */ findIonContent),
/* harmony export */   "b": () => (/* binding */ ION_CONTENT_CLASS_SELECTOR),
/* harmony export */   "c": () => (/* binding */ scrollByPoint),
/* harmony export */   "d": () => (/* binding */ disableContentScrollY),
/* harmony export */   "f": () => (/* binding */ findClosestIonContent),
/* harmony export */   "g": () => (/* binding */ getScrollElement),
/* harmony export */   "i": () => (/* binding */ isIonContent),
/* harmony export */   "p": () => (/* binding */ printIonContentErrorMsg),
/* harmony export */   "r": () => (/* binding */ resetContentScrollY),
/* harmony export */   "s": () => (/* binding */ scrollToTop)
/* harmony export */ });
/* harmony import */ var C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-4d272360.js */ 9158);
/* harmony import */ var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-c4b11676.js */ 9273);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const ION_CONTENT_TAG_NAME = 'ION-CONTENT';
const ION_CONTENT_ELEMENT_SELECTOR = 'ion-content';
const ION_CONTENT_CLASS_SELECTOR = '.ion-content-scroll-host';
/**
 * Selector used for implementations reliant on `<ion-content>` for scroll event changes.
 *
 * Developers should use the `.ion-content-scroll-host` selector to target the element emitting
 * scroll events. With virtual scroll implementations this will be the host element for
 * the scroll viewport.
 */

const ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;

const isIonContent = el => el && el.tagName === ION_CONTENT_TAG_NAME;
/**
 * Waits for the element host fully initialize before
 * returning the inner scroll element.
 *
 * For `ion-content` the scroll target will be the result
 * of the `getScrollElement` function.
 *
 * For custom implementations it will be the element host
 * or a selector within the host, if supplied through `scrollTarget`.
 */


const getScrollElement = /*#__PURE__*/function () {
  var _ref = (0,C_Users_evild_Documents_Repositorio_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    if (isIonContent(el)) {
      yield new Promise(resolve => (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      return el.getScrollElement();
    }

    return el;
  });

  return function getScrollElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Queries the element matching the selector for IonContent.
 * See ION_CONTENT_SELECTOR for the selector used.
 */


const findIonContent = el => {
  /**
   * First we try to query the custom scroll host selector in cases where
   * the implementation is using an outer `ion-content` with an inner custom
   * scroll container.
   */
  const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);

  if (customContentHost) {
    return customContentHost;
  }

  return el.querySelector(ION_CONTENT_SELECTOR);
};
/**
 * Queries the closest element matching the selector for IonContent.
 */


const findClosestIonContent = el => {
  return el.closest(ION_CONTENT_SELECTOR);
};
/**
 * Scrolls to the top of the element. If an `ion-content` is found, it will scroll
 * using the public API `scrollToTop` with a duration.
 */


const scrollToTop = (el, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollToTop(durationMs);
  }

  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Scrolls by a specified X/Y distance in the component. If an `ion-content` is found, it will scroll
 * using the public API `scrollByPoint` with a duration.
 */


const scrollByPoint = (el, x, y, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollByPoint(x, y, durationMs);
  }

  return Promise.resolve(el.scrollBy({
    top: y,
    left: x,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within either the `ion-content` selector or the `.ion-content-scroll-host` class.
 */


const printIonContentErrorMsg = el => {
  return (0,_index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__.a)(el, ION_CONTENT_ELEMENT_SELECTOR);
};
/**
 * Several components in Ionic need to prevent scrolling
 * during a gesture (card modal, range, item sliding, etc).
 * Use this utility to account for ion-content and custom content hosts.
 */


const disableContentScrollY = contentEl => {
  if (isIonContent(contentEl)) {
    const ionContent = contentEl;
    const initialScrollY = ionContent.scrollY;
    ionContent.scrollY = false;
    /**
     * This should be passed into resetContentScrollY
     * so that we can revert ion-content's scrollY to the
     * correct state. For example, if scrollY = false
     * initially, we do not want to enable scrolling
     * when we call resetContentScrollY.
     */

    return initialScrollY;
  } else {
    contentEl.style.setProperty('overflow', 'hidden');
    return true;
  }
};

const resetContentScrollY = (contentEl, initialScrollY) => {
  if (isIonContent(contentEl)) {
    contentEl.scrollY = initialScrollY;
  } else {
    contentEl.style.removeProperty('overflow');
  }
};



/***/ }),

/***/ 2312:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-45ecc7ca.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ arrowBackSharp),
/* harmony export */   "b": () => (/* binding */ closeCircle),
/* harmony export */   "c": () => (/* binding */ chevronBack),
/* harmony export */   "d": () => (/* binding */ closeSharp),
/* harmony export */   "e": () => (/* binding */ searchSharp),
/* harmony export */   "f": () => (/* binding */ checkmarkOutline),
/* harmony export */   "g": () => (/* binding */ ellipseOutline),
/* harmony export */   "h": () => (/* binding */ caretBackSharp),
/* harmony export */   "i": () => (/* binding */ arrowDown),
/* harmony export */   "j": () => (/* binding */ reorderThreeOutline),
/* harmony export */   "k": () => (/* binding */ reorderTwoSharp),
/* harmony export */   "l": () => (/* binding */ chevronDown),
/* harmony export */   "m": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "n": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "o": () => (/* binding */ chevronForward),
/* harmony export */   "p": () => (/* binding */ caretUpSharp),
/* harmony export */   "q": () => (/* binding */ caretDownSharp),
/* harmony export */   "r": () => (/* binding */ removeOutline),
/* harmony export */   "s": () => (/* binding */ searchOutline),
/* harmony export */   "t": () => (/* binding */ close),
/* harmony export */   "u": () => (/* binding */ menuOutline),
/* harmony export */   "v": () => (/* binding */ menuSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/* Ionicons v6.0.2, ES Modules */
const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
const closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
const closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
const ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
const menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
const removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
const searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";


/***/ }),

/***/ 6524:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-4d5544a0.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYBOARD_DID_CLOSE": () => (/* binding */ KEYBOARD_DID_CLOSE),
/* harmony export */   "KEYBOARD_DID_OPEN": () => (/* binding */ KEYBOARD_DID_OPEN),
/* harmony export */   "copyVisualViewport": () => (/* binding */ copyVisualViewport),
/* harmony export */   "keyboardDidClose": () => (/* binding */ keyboardDidClose),
/* harmony export */   "keyboardDidOpen": () => (/* binding */ keyboardDidOpen),
/* harmony export */   "keyboardDidResize": () => (/* binding */ keyboardDidResize),
/* harmony export */   "resetKeyboardAssist": () => (/* binding */ resetKeyboardAssist),
/* harmony export */   "setKeyboardClose": () => (/* binding */ setKeyboardClose),
/* harmony export */   "setKeyboardOpen": () => (/* binding */ setKeyboardOpen),
/* harmony export */   "startKeyboardAssist": () => (/* binding */ startKeyboardAssist),
/* harmony export */   "trackViewportChanges": () => (/* binding */ trackViewportChanges)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const KEYBOARD_DID_OPEN = 'ionKeyboardDidShow';
const KEYBOARD_DID_CLOSE = 'ionKeyboardDidHide';
const KEYBOARD_THRESHOLD = 150;
let previousVisualViewport = {};
let currentVisualViewport = {};
let keyboardOpen = false;
/**
 * This is only used for tests
 */

const resetKeyboardAssist = () => {
  previousVisualViewport = {};
  currentVisualViewport = {};
  keyboardOpen = false;
};

const startKeyboardAssist = win => {
  startNativeListeners(win);

  if (!win.visualViewport) {
    return;
  }

  currentVisualViewport = copyVisualViewport(win.visualViewport);

  win.visualViewport.onresize = () => {
    trackViewportChanges(win);

    if (keyboardDidOpen() || keyboardDidResize(win)) {
      setKeyboardOpen(win);
    } else if (keyboardDidClose(win)) {
      setKeyboardClose(win);
    }
  };
};
/**
 * Listen for events fired by native keyboard plugin
 * in Capacitor/Cordova so devs only need to listen
 * in one place.
 */


const startNativeListeners = win => {
  win.addEventListener('keyboardDidShow', ev => setKeyboardOpen(win, ev));
  win.addEventListener('keyboardDidHide', () => setKeyboardClose(win));
};

const setKeyboardOpen = (win, ev) => {
  fireKeyboardOpenEvent(win, ev);
  keyboardOpen = true;
};

const setKeyboardClose = win => {
  fireKeyboardCloseEvent(win);
  keyboardOpen = false;
};
/**
 * Returns `true` if the `keyboardOpen` flag is not
 * set, the previous visual viewport width equal the current
 * visual viewport width, and if the scaled difference
 * of the previous visual viewport height minus the current
 * visual viewport height is greater than KEYBOARD_THRESHOLD
 *
 * We need to be able to accommodate users who have zooming
 * enabled in their browser (or have zoomed in manually) which
 * is why we take into account the current visual viewport's
 * scale value.
 */


const keyboardDidOpen = () => {
  const scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
  return !keyboardOpen && previousVisualViewport.width === currentVisualViewport.width && scaledHeightDifference > KEYBOARD_THRESHOLD;
};
/**
 * Returns `true` if the keyboard is open,
 * but the keyboard did not close
 */


const keyboardDidResize = win => {
  return keyboardOpen && !keyboardDidClose(win);
};
/**
 * Determine if the keyboard was closed
 * Returns `true` if the `keyboardOpen` flag is set and
 * the current visual viewport height equals the
 * layout viewport height.
 */


const keyboardDidClose = win => {
  return keyboardOpen && currentVisualViewport.height === win.innerHeight;
};
/**
 * Dispatch a keyboard open event
 */


const fireKeyboardOpenEvent = (win, nativeEv) => {
  const keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
  const ev = new CustomEvent(KEYBOARD_DID_OPEN, {
    detail: {
      keyboardHeight
    }
  });
  win.dispatchEvent(ev);
};
/**
 * Dispatch a keyboard close event
 */


const fireKeyboardCloseEvent = win => {
  const ev = new CustomEvent(KEYBOARD_DID_CLOSE);
  win.dispatchEvent(ev);
};
/**
 * Given a window object, create a copy of
 * the current visual and layout viewport states
 * while also preserving the previous visual and
 * layout viewport states
 */


const trackViewportChanges = win => {
  previousVisualViewport = Object.assign({}, currentVisualViewport);
  currentVisualViewport = copyVisualViewport(win.visualViewport);
};
/**
 * Creates a deep copy of the visual viewport
 * at a given state
 */


const copyVisualViewport = visualViewport => {
  return {
    width: Math.round(visualViewport.width),
    height: Math.round(visualViewport.height),
    offsetTop: visualViewport.offsetTop,
    offsetLeft: visualViewport.offsetLeft,
    pageTop: visualViewport.pageTop,
    pageLeft: visualViewport.pageLeft,
    scale: visualViewport.scale
  };
};



/***/ }),

/***/ 3963:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-controller-73af62b2.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createKeyboardController)
/* harmony export */ });
/* harmony import */ var _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-33ffec25.js */ 2286);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * Creates a controller that tracks and reacts to opening or closing the keyboard.
 *
 * @internal
 * @param keyboardChangeCallback A function to call when the keyboard opens or closes.
 */

const createKeyboardController = keyboardChangeCallback => {
  let keyboardWillShowHandler;
  let keyboardWillHideHandler;
  let keyboardVisible;

  const init = () => {
    keyboardWillShowHandler = () => {
      keyboardVisible = true;
      if (keyboardChangeCallback) keyboardChangeCallback(true);
    };

    keyboardWillHideHandler = () => {
      keyboardVisible = false;
      if (keyboardChangeCallback) keyboardChangeCallback(false);
    };

    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillHide', keyboardWillHideHandler);
  };

  const destroy = () => {
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillHide', keyboardWillHideHandler);
    keyboardWillShowHandler = keyboardWillHideHandler = undefined;
  };

  const isKeyboardVisible = () => keyboardVisible;

  init();
  return {
    init,
    destroy,
    isKeyboardVisible
  };
};



/***/ }),

/***/ 3844:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-5d6b6fe7.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const spinners = {
  bubbles: {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${dur * index / total - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circles: {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${dur * step - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circular: {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  crescent: {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  dots: {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          left: `${9 - 9 * index}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  lines: {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
const SPINNERS = spinners;


/***/ }),

/***/ 1812:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-fa30a130.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSwipeBackGesture": () => (/* binding */ createSwipeBackGesture)
/* harmony export */ });
/* harmony import */ var _helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-4d272360.js */ 9158);
/* harmony import */ var _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dir-e8b767a8.js */ 7481);
/* harmony import */ var _index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-3f1a7d95.js */ 2172);
/* harmony import */ var _gesture_controller_17e82006_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gesture-controller-17e82006.js */ 607);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  const rtl = (0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
  /**
   * Determine if a gesture is near the edge
   * of the screen. If true, then the swipe
   * to go back gesture should proceed.
   */

  const isAtEdge = detail => {
    const threshold = 50;
    const {
      startX
    } = detail;

    if (rtl) {
      return startX >= win.innerWidth - threshold;
    }

    return startX <= threshold;
  };

  const getDeltaX = detail => {
    return rtl ? -detail.deltaX : detail.deltaX;
  };

  const getVelocityX = detail => {
    return rtl ? -detail.velocityX : detail.velocityX;
  };

  const canStart = detail => {
    return isAtEdge(detail) && canStartHandler();
  };

  const onMove = detail => {
    // set the transition animation's progress
    const delta = getDeltaX(detail);
    const stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  };

  const onEnd = detail => {
    // the swipe back gesture has ended
    const delta = getDeltaX(detail);
    const width = win.innerWidth;
    const stepValue = delta / width;
    const velocity = getVelocityX(detail);
    const z = width / 2.0;
    const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
    const missing = shouldComplete ? 1 - stepValue : stepValue;
    const missingDistance = missing * width;
    let realDur = 0;

    if (missingDistance > 5) {
      const dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }
    /**
     * TODO: stepValue can sometimes return negative values
     * or values greater than 1 which should not be possible.
     * Need to investigate more to find where the issue is.
     */


    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_0__.l)(0, stepValue, 0.9999), realDur);
  };

  return (0,_index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'goback-swipe',
    gesturePriority: 40,
    threshold: 10,
    canStart,
    onStart: onStartHandler,
    onMove,
    onEnd
  });
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sR0FBR2hFLElBQUksQ0FBQ2tFLEdBQUwsQ0FBU25ELEdBQVQsRUFBYyxHQUFkLENBQVY7SUFDRDtJQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7OztJQUNJK0IsWUFBWSxDQUFDZSxjQUFELEVBQWlCSCxTQUFTLElBQUksQ0FBYixHQUFpQixJQUFqQixHQUF3QmpCLHVEQUFLLENBQUMsQ0FBRCxFQUFJaUIsU0FBSixFQUFlLE1BQWYsQ0FBOUMsRUFBc0VNLE9BQXRFLENBQVo7RUFDRCxDQXJCRDs7RUFzQkEsT0FBT3JTLGlFQUFhLENBQUM7SUFDbkJFLEVBRG1CO0lBRW5CcUIsV0FBVyxFQUFFLGNBRk07SUFHbkJpUixlQUFlLEVBQUUsRUFIRTtJQUluQmhSLFNBQVMsRUFBRSxFQUpRO0lBS25CcVEsUUFMbUI7SUFNbkJwUSxPQUFPLEVBQUV3UCxjQU5VO0lBT25CcFAsTUFQbUI7SUFRbkJDO0VBUm1CLENBQUQsQ0FBcEI7QUFVRCxDQS9ERCIsInNvdXJjZXMiOlsiLi9zcmMvYXBwL2RhdGFiYXNlLnNlcnZpY2UudHMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9idXR0b24tYWN0aXZlLTQ5NzVkYmQwLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vZGlyLWU4Yjc2N2E4LmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vZm9jdXMtdmlzaWJsZS01YWQ2ODI1ZC5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2ZyYW1ld29yay1kZWxlZ2F0ZS1jZTRmODA2Yy5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2hhcHRpYy02ODNiM2IzYy5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTMzZmZlYzI1LmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW5kZXgtMzQxM2Y3YmUuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pbmRleC00NWVjYzdjYS5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2tleWJvYXJkLTRkNTU0NGEwLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20va2V5Ym9hcmQtY29udHJvbGxlci03M2FmNjJiMi5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3NwaW5uZXItY29uZmlncy01ZDZiNmZlNy5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3N3aXBlLWJhY2stZmEzMGExMzAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFNRTGl0ZSwgU1FMaXRlT2JqZWN0IH0gZnJvbSBcIkBpb25pYy1uYXRpdmUvc3FsaXRlL25neFwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YWJhc2VTZXJ2aWNlIHtcclxuICBkYXRhYmFzZU9iajogU1FMaXRlT2JqZWN0O1xyXG4gIHRhYmxlcyA9IHtcclxuICAgIGNhdGVnb3JpZXM6IFwiY2F0ZWdvcmllc1wiLFxyXG4gICAgcGVyc29uczogXCJwZXJzb25zXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcWxpdGU6IFNRTGl0ZSkge31cclxuXHJcbiAgYXN5bmMgY3JlYXRlRGF0YWJhc2UoKSB7XHJcbiAgICBhd2FpdCB0aGlzLnNxbGl0ZVxyXG4gICAgICAuY3JlYXRlKHtcclxuICAgICAgICBuYW1lOiBcImlvbmljX3NxbGl0ZV9jcnVkXCIsXHJcbiAgICAgICAgbG9jYXRpb246IFwiZGVmYXVsdFwiLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoZGI6IFNRTGl0ZU9iamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YWJhc2VPYmogPSBkYjtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJlcnJvciBvbiBjcmVhdGluZyBkYXRhYmFzZSBcIiArIEpTT04uc3RyaW5naWZ5KGUpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgYXdhaXQgdGhpcy5jcmVhdGVUYWJsZXMoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGNyZWF0ZVRhYmxlcygpIHtcclxuICAgIGF3YWl0IHRoaXMuZGF0YWJhc2VPYmouZXhlY3V0ZVNxbChcclxuICAgICAgYENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTICR7dGhpcy50YWJsZXMuY2F0ZWdvcmllc30gKGlkIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCwgbmFtZSBWQVJDSEFSKDI1NSkgTk9UIE5VTEwgVU5JUVVFKWAsXHJcbiAgICAgIFtdXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IHRoaXMuZGF0YWJhc2VPYmouZXhlY3V0ZVNxbChcclxuICAgICAgYENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTICR7dGhpcy50YWJsZXMucGVyc29uc30gKGlkIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCwgY2F0ZWdvcnlfaWQgSU5URUdFUiBVTlNJR05FRCBOT1QgTlVMTCwgbmFtZSBWQVJDSEFSKDI1NSkgTk9UIE5VTEwpYCxcclxuICAgICAgW11cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBhZGRDYXRlZ29yeShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlT2JqXHJcbiAgICAgIC5leGVjdXRlU3FsKFxyXG4gICAgICAgIGBJTlNFUlQgSU5UTyAke3RoaXMudGFibGVzLmNhdGVnb3JpZXN9IChuYW1lKSBWQUxVRVMgKCcke25hbWV9JylgLFxyXG4gICAgICAgIFtdXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcImNhdGVnb3J5IGNyZWF0ZWRcIjtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gNikge1xyXG4gICAgICAgICAgcmV0dXJuIFwiY2F0ZWdvcnkgYWxyZWFkeSBleGlzdHNcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBcImVycm9yIG9uIGNyZWF0aW5nIGNhdGVnb3J5IFwiICsgSlNPTi5zdHJpbmdpZnkoZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0Q2F0ZWdvcmllcygpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlT2JqXHJcbiAgICAgIC5leGVjdXRlU3FsKFxyXG4gICAgICAgIGBTRUxFQ1QgKiBGUk9NICR7dGhpcy50YWJsZXMuY2F0ZWdvcmllc30gT1JERVIgQlkgbmFtZSBBU0NgLFxyXG4gICAgICAgIFtdXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcImVycm9yIG9uIGdldHRpbmcgY2F0ZWdvcmllcyBcIiArIEpTT04uc3RyaW5naWZ5KGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGRlbGV0ZUNhdGVnb3J5KGlkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlT2JqXHJcbiAgICAgIC5leGVjdXRlU3FsKGBERUxFVEUgRlJPTSAke3RoaXMudGFibGVzLmNhdGVnb3JpZXN9IFdIRVJFIGlkID0gJHtpZH1gLCBbXSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcImNhdGVnb3J5IGRlbGV0ZWRcIjtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFwiZXJyb3Igb24gZGVsZXRpbmcgY2F0ZWdvcnkgXCIgKyBKU09OLnN0cmluZ2lmeShlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBlZGl0Q2F0ZWdvcnkobmFtZTogc3RyaW5nLCBpZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhYmFzZU9ialxyXG4gICAgICAuZXhlY3V0ZVNxbChcclxuICAgICAgICBgVVBEQVRFICR7dGhpcy50YWJsZXMuY2F0ZWdvcmllc30gU0VUIG5hbWUgPSAnJHtuYW1lfScgV0hFUkUgaWQgPSAke2lkfWAsXHJcbiAgICAgICAgW11cclxuICAgICAgKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFwiY2F0ZWdvcnkgdXBkYXRlZFwiO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5jb2RlID09PSA2KSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJjYXRlZ29yeSBhbHJlYWR5IGV4aXN0XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gXCJlcnJvciBvbiB1cGRhdGluZyBjYXRlZ29yeSBcIiArIEpTT04uc3RyaW5naWZ5KGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGFkZFBlcnNvbihuYW1lOiBzdHJpbmcsIGNhdGVnb3J5X2lkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlT2JqXHJcbiAgICAgIC5leGVjdXRlU3FsKFxyXG4gICAgICAgIGBJTlNFUlQgSU5UTyAke3RoaXMudGFibGVzLnBlcnNvbnN9IChuYW1lLCBjYXRlZ29yeV9pZCkgVkFMVUVTICgnJHtuYW1lfScsICR7Y2F0ZWdvcnlfaWR9KWAsXHJcbiAgICAgICAgW11cclxuICAgICAgKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFwicGVyc29uIGNyZWF0ZWRcIjtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFwiZXJyb3Igb24gY3JlYXRpbmcgcGVyc29uIFwiICsgSlNPTi5zdHJpbmdpZnkoZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0UGVyc29ucygpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlT2JqXHJcbiAgICAgIC5leGVjdXRlU3FsKFxyXG4gICAgICAgIGBTRUxFQ1QgcGVyc29ucy5pZCwgcGVyc29ucy5jYXRlZ29yeV9pZCwgcGVyc29ucy5uYW1lIGFzIHBlcnNvbiwgY2F0ZWdvcmllcy5uYW1lIGFzIGNhdGVnb3J5IEZST00gcGVyc29ucyBJTk5FUiBKT0lOIGNhdGVnb3JpZXMgT04gY2F0ZWdvcmllcy5pZCA9IHBlcnNvbnMuY2F0ZWdvcnlfaWQgT1JERVIgQlkgcGVyc29uIEFTQ2AsXHJcbiAgICAgICAgW11cclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFwiZXJyb3Igb24gZ2V0dGluZyBwZXJzb25zIFwiICsgSlNPTi5zdHJpbmdpZnkoZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGVsZXRlUGVyc29uKGlkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlT2JqXHJcbiAgICAgIC5leGVjdXRlU3FsKGBERUxFVEUgRlJPTSAke3RoaXMudGFibGVzLnBlcnNvbnN9IFdIRVJFIGlkID0gJHtpZH1gLCBbXSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcInBlcnNvbiBkZWxldGVkXCI7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcImVycm9yIG9uIGRlbGV0aW5nIHBlcnNvbiBcIiArIEpTT04uc3RyaW5naWZ5KGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGVkaXRQZXJzb24obmFtZTogc3RyaW5nLCBjYXRlZ29yeV9pZDogbnVtYmVyLCBpZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhYmFzZU9ialxyXG4gICAgICAuZXhlY3V0ZVNxbChcclxuICAgICAgICBgVVBEQVRFICR7dGhpcy50YWJsZXMucGVyc29uc30gU0VUIG5hbWUgPSAnJHtuYW1lfScsIGNhdGVnb3J5X2lkID0gJHtjYXRlZ29yeV9pZH0gV0hFUkUgaWQgPSAke2lkfWAsXHJcbiAgICAgICAgW11cclxuICAgICAgKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFwicGVyc29uIHVwZGF0ZWRcIjtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFwiZXJyb3Igb24gdXBkYXRpbmcgcGVyc29uIFwiICsgSlNPTi5zdHJpbmdpZnkoZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufSIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBjIGFzIHdyaXRlVGFzayB9IGZyb20gJy4vaW5kZXgtMWE5OWFlYjcuanMnO1xuaW1wb3J0IHsgaCBhcyBoYXB0aWNTZWxlY3Rpb25FbmQsIGEgYXMgaGFwdGljU2VsZWN0aW9uU3RhcnQsIGIgYXMgaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCB9IGZyb20gJy4vaGFwdGljLTY4M2IzYjNjLmpzJztcbmltcG9ydCB7IGNyZWF0ZUdlc3R1cmUgfSBmcm9tICcuL2luZGV4LTNmMWE3ZDk1LmpzJztcblxuY29uc3QgY3JlYXRlQnV0dG9uQWN0aXZlR2VzdHVyZSA9IChlbCwgaXNCdXR0b24pID0+IHtcbiAgbGV0IGN1cnJlbnRUb3VjaGVkQnV0dG9uO1xuICBsZXQgaW5pdGlhbFRvdWNoZWRCdXR0b247XG4gIGNvbnN0IGFjdGl2YXRlQnV0dG9uQXRQb2ludCA9ICh4LCB5LCBoYXB0aWNGZWVkYmFja0ZuKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgICBpZiAoIXRhcmdldCB8fCAhaXNCdXR0b24odGFyZ2V0KSkge1xuICAgICAgY2xlYXJBY3RpdmVCdXR0b24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRhcmdldCAhPT0gY3VycmVudFRvdWNoZWRCdXR0b24pIHtcbiAgICAgIGNsZWFyQWN0aXZlQnV0dG9uKCk7XG4gICAgICBzZXRBY3RpdmVCdXR0b24odGFyZ2V0LCBoYXB0aWNGZWVkYmFja0ZuKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNldEFjdGl2ZUJ1dHRvbiA9IChidXR0b24sIGhhcHRpY0ZlZWRiYWNrRm4pID0+IHtcbiAgICBjdXJyZW50VG91Y2hlZEJ1dHRvbiA9IGJ1dHRvbjtcbiAgICBpZiAoIWluaXRpYWxUb3VjaGVkQnV0dG9uKSB7XG4gICAgICBpbml0aWFsVG91Y2hlZEJ1dHRvbiA9IGN1cnJlbnRUb3VjaGVkQnV0dG9uO1xuICAgIH1cbiAgICBjb25zdCBidXR0b25Ub01vZGlmeSA9IGN1cnJlbnRUb3VjaGVkQnV0dG9uO1xuICAgIHdyaXRlVGFzaygoKSA9PiBidXR0b25Ub01vZGlmeS5jbGFzc0xpc3QuYWRkKCdpb24tYWN0aXZhdGVkJykpO1xuICAgIGhhcHRpY0ZlZWRiYWNrRm4oKTtcbiAgfTtcbiAgY29uc3QgY2xlYXJBY3RpdmVCdXR0b24gPSAoZGlzcGF0Y2hDbGljayA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50VG91Y2hlZEJ1dHRvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBidXR0b25Ub01vZGlmeSA9IGN1cnJlbnRUb3VjaGVkQnV0dG9uO1xuICAgIHdyaXRlVGFzaygoKSA9PiBidXR0b25Ub01vZGlmeS5jbGFzc0xpc3QucmVtb3ZlKCdpb24tYWN0aXZhdGVkJykpO1xuICAgIC8qKlxuICAgICAqIENsaWNraW5nIG9uIG9uZSBidXR0b24sIGJ1dCByZWxlYXNpbmcgb24gYW5vdGhlciBidXR0b25cbiAgICAgKiBkb2VzIG5vdCBkaXNwYXRjaCBhIGNsaWNrIGV2ZW50IGluIGJyb3dzZXJzLCBzbyB3ZVxuICAgICAqIG5lZWQgdG8gZG8gaXQgbWFudWFsbHkgaGVyZS4gU29tZSBicm93c2VycyB3aWxsXG4gICAgICogZGlzcGF0Y2ggYSBjbGljayBpZiBjbGlja2luZyBvbiBvbmUgYnV0dG9uLCBkcmFnZ2luZyBvdmVyXG4gICAgICogYW5vdGhlciBidXR0b24sIGFuZCByZWxlYXNpbmcgb24gdGhlIG9yaWdpbmFsIGJ1dHRvbi4gSW4gdGhhdFxuICAgICAqIGNhc2UsIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHdlIGRvIG5vdCBjYXVzZSBhIGRvdWJsZSBjbGljayB0aGVyZS5cbiAgICAgKi9cbiAgICBpZiAoZGlzcGF0Y2hDbGljayAmJiBpbml0aWFsVG91Y2hlZEJ1dHRvbiAhPT0gY3VycmVudFRvdWNoZWRCdXR0b24pIHtcbiAgICAgIGN1cnJlbnRUb3VjaGVkQnV0dG9uLmNsaWNrKCk7XG4gICAgfVxuICAgIGN1cnJlbnRUb3VjaGVkQnV0dG9uID0gdW5kZWZpbmVkO1xuICB9O1xuICByZXR1cm4gY3JlYXRlR2VzdHVyZSh7XG4gICAgZWwsXG4gICAgZ2VzdHVyZU5hbWU6ICdidXR0b25BY3RpdmVEcmFnJyxcbiAgICB0aHJlc2hvbGQ6IDAsXG4gICAgb25TdGFydDogKGV2KSA9PiBhY3RpdmF0ZUJ1dHRvbkF0UG9pbnQoZXYuY3VycmVudFgsIGV2LmN1cnJlbnRZLCBoYXB0aWNTZWxlY3Rpb25TdGFydCksXG4gICAgb25Nb3ZlOiAoZXYpID0+IGFjdGl2YXRlQnV0dG9uQXRQb2ludChldi5jdXJyZW50WCwgZXYuY3VycmVudFksIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQpLFxuICAgIG9uRW5kOiAoKSA9PiB7XG4gICAgICBjbGVhckFjdGl2ZUJ1dHRvbih0cnVlKTtcbiAgICAgIGhhcHRpY1NlbGVjdGlvbkVuZCgpO1xuICAgICAgaW5pdGlhbFRvdWNoZWRCdXR0b24gPSB1bmRlZmluZWQ7XG4gICAgfSxcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVCdXR0b25BY3RpdmVHZXN0dXJlIGFzIGMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBkb2N1bWVudCBvciBob3N0IGVsZW1lbnRcbiAqIGhhcyBhIGBkaXJgIHNldCB0byBgcnRsYC4gVGhlIGhvc3QgdmFsdWUgd2lsbCBhbHdheXNcbiAqIHRha2UgcHJpb3JpdHkgb3ZlciB0aGUgcm9vdCBkb2N1bWVudCB2YWx1ZS5cbiAqL1xuY29uc3QgaXNSVEwgPSAoaG9zdEVsKSA9PiB7XG4gIGlmIChob3N0RWwpIHtcbiAgICBpZiAoaG9zdEVsLmRpciAhPT0gJycpIHtcbiAgICAgIHJldHVybiBob3N0RWwuZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKGRvY3VtZW50ID09PSBudWxsIHx8IGRvY3VtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkb2N1bWVudC5kaXIudG9Mb3dlckNhc2UoKSkgPT09ICdydGwnO1xufTtcblxuZXhwb3J0IHsgaXNSVEwgYXMgaSB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmNvbnN0IElPTl9GT0NVU0VEID0gJ2lvbi1mb2N1c2VkJztcbmNvbnN0IElPTl9GT0NVU0FCTEUgPSAnaW9uLWZvY3VzYWJsZSc7XG5jb25zdCBGT0NVU19LRVlTID0gW1xuICAnVGFiJyxcbiAgJ0Fycm93RG93bicsXG4gICdTcGFjZScsXG4gICdFc2NhcGUnLFxuICAnICcsXG4gICdTaGlmdCcsXG4gICdFbnRlcicsXG4gICdBcnJvd0xlZnQnLFxuICAnQXJyb3dSaWdodCcsXG4gICdBcnJvd1VwJyxcbiAgJ0hvbWUnLFxuICAnRW5kJyxcbl07XG5jb25zdCBzdGFydEZvY3VzVmlzaWJsZSA9IChyb290RWwpID0+IHtcbiAgbGV0IGN1cnJlbnRGb2N1cyA9IFtdO1xuICBsZXQga2V5Ym9hcmRNb2RlID0gdHJ1ZTtcbiAgY29uc3QgcmVmID0gcm9vdEVsID8gcm9vdEVsLnNoYWRvd1Jvb3QgOiBkb2N1bWVudDtcbiAgY29uc3Qgcm9vdCA9IHJvb3RFbCA/IHJvb3RFbCA6IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IHNldEZvY3VzID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgY3VycmVudEZvY3VzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKElPTl9GT0NVU0VEKSk7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoSU9OX0ZPQ1VTRUQpKTtcbiAgICBjdXJyZW50Rm9jdXMgPSBlbGVtZW50cztcbiAgfTtcbiAgY29uc3QgcG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAga2V5Ym9hcmRNb2RlID0gZmFsc2U7XG4gICAgc2V0Rm9jdXMoW10pO1xuICB9O1xuICBjb25zdCBvbktleWRvd24gPSAoZXYpID0+IHtcbiAgICBrZXlib2FyZE1vZGUgPSBGT0NVU19LRVlTLmluY2x1ZGVzKGV2LmtleSk7XG4gICAgaWYgKCFrZXlib2FyZE1vZGUpIHtcbiAgICAgIHNldEZvY3VzKFtdKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uRm9jdXNpbiA9IChldikgPT4ge1xuICAgIGlmIChrZXlib2FyZE1vZGUgJiYgZXYuY29tcG9zZWRQYXRoKSB7XG4gICAgICBjb25zdCB0b0ZvY3VzID0gZXYuY29tcG9zZWRQYXRoKCkuZmlsdGVyKChlbCkgPT4ge1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhJT05fRk9DVVNBQkxFKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHNldEZvY3VzKHRvRm9jdXMpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb25Gb2N1c291dCA9ICgpID0+IHtcbiAgICBpZiAocmVmLmFjdGl2ZUVsZW1lbnQgPT09IHJvb3QpIHtcbiAgICAgIHNldEZvY3VzKFtdKTtcbiAgICB9XG4gIH07XG4gIHJlZi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvbkZvY3VzaW4pO1xuICByZWYuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkZvY3Vzb3V0KTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBwb2ludGVyRG93bik7XG4gIHJlZi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBwb2ludGVyRG93bik7XG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xuICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgb25Gb2N1c2luKTtcbiAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkZvY3Vzb3V0KTtcbiAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHBvaW50ZXJEb3duKTtcbiAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgcG9pbnRlckRvd24pO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGRlc3Ryb3ksXG4gICAgc2V0Rm9jdXMsXG4gIH07XG59O1xuXG5leHBvcnQgeyBzdGFydEZvY3VzVmlzaWJsZSB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IGMgYXMgY29tcG9uZW50T25SZWFkeSB9IGZyb20gJy4vaGVscGVycy00ZDI3MjM2MC5qcyc7XG5cbmNvbnN0IGF0dGFjaENvbXBvbmVudCA9IGFzeW5jIChkZWxlZ2F0ZSwgY29udGFpbmVyLCBjb21wb25lbnQsIGNzc0NsYXNzZXMsIGNvbXBvbmVudFByb3BzLCBpbmxpbmUpID0+IHtcbiAgdmFyIF9hO1xuICBpZiAoZGVsZWdhdGUpIHtcbiAgICByZXR1cm4gZGVsZWdhdGUuYXR0YWNoVmlld1RvRG9tKGNvbnRhaW5lciwgY29tcG9uZW50LCBjb21wb25lbnRQcm9wcywgY3NzQ2xhc3Nlcyk7XG4gIH1cbiAgaWYgKCFpbmxpbmUgJiYgdHlwZW9mIGNvbXBvbmVudCAhPT0gJ3N0cmluZycgJiYgIShjb21wb25lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZyYW1ld29yayBkZWxlZ2F0ZSBpcyBtaXNzaW5nJyk7XG4gIH1cbiAgY29uc3QgZWwgPSB0eXBlb2YgY29tcG9uZW50ID09PSAnc3RyaW5nJyA/IChfYSA9IGNvbnRhaW5lci5vd25lckRvY3VtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY3JlYXRlRWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50O1xuICBpZiAoY3NzQ2xhc3Nlcykge1xuICAgIGNzc0NsYXNzZXMuZm9yRWFjaCgoYykgPT4gZWwuY2xhc3NMaXN0LmFkZChjKSk7XG4gIH1cbiAgaWYgKGNvbXBvbmVudFByb3BzKSB7XG4gICAgT2JqZWN0LmFzc2lnbihlbCwgY29tcG9uZW50UHJvcHMpO1xuICB9XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBjb21wb25lbnRPblJlYWR5KGVsLCByZXNvbHZlKSk7XG4gIHJldHVybiBlbDtcbn07XG5jb25zdCBkZXRhY2hDb21wb25lbnQgPSAoZGVsZWdhdGUsIGVsZW1lbnQpID0+IHtcbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIHJldHVybiBkZWxlZ2F0ZS5yZW1vdmVWaWV3RnJvbURvbShjb250YWluZXIsIGVsZW1lbnQpO1xuICAgIH1cbiAgICBlbGVtZW50LnJlbW92ZSgpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbn07XG5jb25zdCBDb3JlRGVsZWdhdGUgPSAoKSA9PiB7XG4gIGxldCBCYXNlQ29tcG9uZW50O1xuICBsZXQgUmVmZXJlbmNlO1xuICBjb25zdCBhdHRhY2hWaWV3VG9Eb20gPSBhc3luYyAocGFyZW50RWxlbWVudCwgdXNlckNvbXBvbmVudCwgdXNlckNvbXBvbmVudFByb3BzID0ge30sIGNzc0NsYXNzZXMgPSBbXSkgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgQmFzZUNvbXBvbmVudCA9IHBhcmVudEVsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogSWYgcGFzc2luZyBpbiBhIGNvbXBvbmVudCB2aWEgdGhlIGBjb21wb25lbnRgIHByb3BzXG4gICAgICogd2UgbmVlZCB0byBhcHBlbmQgaXQgaW5zaWRlIG9mIG91ciBvdmVybGF5IGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBpZiAodXNlckNvbXBvbmVudCkge1xuICAgICAgLyoqXG4gICAgICAgKiBJZiBwYXNzaW5nIGluIHRoZSB0YWcgbmFtZSwgY3JlYXRlXG4gICAgICAgKiB0aGUgZWxlbWVudCBvdGhlcndpc2UganVzdCBnZXQgYSByZWZlcmVuY2VcbiAgICAgICAqIHRvIHRoZSBjb21wb25lbnQuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGVsID0gdHlwZW9mIHVzZXJDb21wb25lbnQgPT09ICdzdHJpbmcnID8gKF9hID0gQmFzZUNvbXBvbmVudC5vd25lckRvY3VtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY3JlYXRlRWxlbWVudCh1c2VyQ29tcG9uZW50KSA6IHVzZXJDb21wb25lbnQ7XG4gICAgICAvKipcbiAgICAgICAqIEFkZCBhbnkgY3NzIGNsYXNzZXMgcGFzc2VkIGluXG4gICAgICAgKiB2aWEgdGhlIGNzc0NsYXNzZXMgcHJvcCBvbiB0aGUgb3ZlcmxheS5cbiAgICAgICAqL1xuICAgICAgY3NzQ2xhc3Nlcy5mb3JFYWNoKChjKSA9PiBlbC5jbGFzc0xpc3QuYWRkKGMpKTtcbiAgICAgIC8qKlxuICAgICAgICogQWRkIGFueSBwcm9wcyBwYXNzZWQgaW5cbiAgICAgICAqIHZpYSB0aGUgY29tcG9uZW50UHJvcHMgcHJvcCBvbiB0aGUgb3ZlcmxheS5cbiAgICAgICAqL1xuICAgICAgT2JqZWN0LmFzc2lnbihlbCwgdXNlckNvbXBvbmVudFByb3BzKTtcbiAgICAgIC8qKlxuICAgICAgICogRmluYWxseSwgYXBwZW5kIHRoZSBjb21wb25lbnRcbiAgICAgICAqIGluc2lkZSBvZiB0aGUgb3ZlcmxheSBjb21wb25lbnQuXG4gICAgICAgKi9cbiAgICAgIEJhc2VDb21wb25lbnQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IGNvbXBvbmVudE9uUmVhZHkoZWwsIHJlc29sdmUpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoQmFzZUNvbXBvbmVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBubyBjb21wb25lbnQsIHRoZW4gd2UgbmVlZCB0byBjcmVhdGUgYSBuZXcgcGFyZW50XG4gICAgICAvLyBlbGVtZW50IHRvIGFwcGx5IHRoZSBjc3MgY2xhc3NlcyB0by5cbiAgICAgIGNvbnN0IGVsID0gKF9iID0gQmFzZUNvbXBvbmVudC5vd25lckRvY3VtZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjc3NDbGFzc2VzLmZvckVhY2goKGMpID0+IGVsLmNsYXNzTGlzdC5hZGQoYykpO1xuICAgICAgLy8gTW92ZSBlYWNoIGNoaWxkIGZyb20gdGhlIG9yaWdpbmFsIHRlbXBsYXRlIHRvIHRoZSBuZXcgcGFyZW50IGVsZW1lbnQuXG4gICAgICBlbC5hcHBlbmQoLi4uQmFzZUNvbXBvbmVudC5jaGlsZHJlbik7XG4gICAgICAvLyBBcHBlbmQgdGhlIG5ldyBwYXJlbnQgZWxlbWVudCB0byB0aGUgb3JpZ2luYWwgcGFyZW50IGVsZW1lbnQuXG4gICAgICBCYXNlQ29tcG9uZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSByb290IG9mIHRoZSBhcHAgYW5kXG4gICAgICogYWRkIHRoZSBvdmVybGF5IHRoZXJlLlxuICAgICAqL1xuICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1hcHAnKSB8fCBkb2N1bWVudC5ib2R5O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHBsYWNlaG9sZGVyIGNvbW1lbnQgc28gdGhhdFxuICAgICAqIHdlIGNhbiByZXR1cm4gdGhpcyBjb21wb25lbnQgdG8gd2hlcmVcbiAgICAgKiBpdCB3YXMgcHJldmlvdXNseS5cbiAgICAgKi9cbiAgICBSZWZlcmVuY2UgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdpb25pYyB0ZWxlcG9ydCcpO1xuICAgIEJhc2VDb21wb25lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoUmVmZXJlbmNlLCBCYXNlQ29tcG9uZW50KTtcbiAgICBhcHAuYXBwZW5kQ2hpbGQoQmFzZUNvbXBvbmVudCk7XG4gICAgcmV0dXJuIEJhc2VDb21wb25lbnQ7XG4gIH07XG4gIGNvbnN0IHJlbW92ZVZpZXdGcm9tRG9tID0gKCkgPT4ge1xuICAgIC8qKlxuICAgICAqIFJldHVybiBjb21wb25lbnQgdG8gd2hlcmUgaXQgd2FzIHByZXZpb3VzbHkgaW4gdGhlIERPTS5cbiAgICAgKi9cbiAgICBpZiAoQmFzZUNvbXBvbmVudCAmJiBSZWZlcmVuY2UpIHtcbiAgICAgIFJlZmVyZW5jZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShCYXNlQ29tcG9uZW50LCBSZWZlcmVuY2UpO1xuICAgICAgUmVmZXJlbmNlLnJlbW92ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH07XG4gIHJldHVybiB7IGF0dGFjaFZpZXdUb0RvbSwgcmVtb3ZlVmlld0Zyb21Eb20gfTtcbn07XG5cbmV4cG9ydCB7IENvcmVEZWxlZ2F0ZSBhcyBDLCBhdHRhY2hDb21wb25lbnQgYXMgYSwgZGV0YWNoQ29tcG9uZW50IGFzIGQgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5jb25zdCBIYXB0aWNFbmdpbmUgPSB7XG4gIGdldEVuZ2luZSgpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3Qgd2luID0gd2luZG93O1xuICAgIHJldHVybiB3aW4uVGFwdGljRW5naW5lIHx8ICgoKF9hID0gd2luLkNhcGFjaXRvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlzUGx1Z2luQXZhaWxhYmxlKCdIYXB0aWNzJykpICYmIHdpbi5DYXBhY2l0b3IuUGx1Z2lucy5IYXB0aWNzKTtcbiAgfSxcbiAgYXZhaWxhYmxlKCkge1xuICAgIHJldHVybiAhIXRoaXMuZ2V0RW5naW5lKCk7XG4gIH0sXG4gIGlzQ29yZG92YSgpIHtcbiAgICByZXR1cm4gISF3aW5kb3cuVGFwdGljRW5naW5lO1xuICB9LFxuICBpc0NhcGFjaXRvcigpIHtcbiAgICBjb25zdCB3aW4gPSB3aW5kb3c7XG4gICAgcmV0dXJuICEhd2luLkNhcGFjaXRvcjtcbiAgfSxcbiAgaW1wYWN0KG9wdGlvbnMpIHtcbiAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgIGlmICghZW5naW5lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5pc0NhcGFjaXRvcigpID8gb3B0aW9ucy5zdHlsZS50b1VwcGVyQ2FzZSgpIDogb3B0aW9ucy5zdHlsZTtcbiAgICBlbmdpbmUuaW1wYWN0KHsgc3R5bGUgfSk7XG4gIH0sXG4gIG5vdGlmaWNhdGlvbihvcHRpb25zKSB7XG4gICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZSA9IHRoaXMuaXNDYXBhY2l0b3IoKSA/IG9wdGlvbnMuc3R5bGUudG9VcHBlckNhc2UoKSA6IG9wdGlvbnMuc3R5bGU7XG4gICAgZW5naW5lLm5vdGlmaWNhdGlvbih7IHN0eWxlIH0pO1xuICB9LFxuICBzZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5pbXBhY3QoeyBzdHlsZTogJ2xpZ2h0JyB9KTtcbiAgfSxcbiAgc2VsZWN0aW9uU3RhcnQoKSB7XG4gICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0NhcGFjaXRvcigpKSB7XG4gICAgICBlbmdpbmUuc2VsZWN0aW9uU3RhcnQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvblN0YXJ0KCk7XG4gICAgfVxuICB9LFxuICBzZWxlY3Rpb25DaGFuZ2VkKCkge1xuICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNDYXBhY2l0b3IoKSkge1xuICAgICAgZW5naW5lLnNlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICB9XG4gIH0sXG4gIHNlbGVjdGlvbkVuZCgpIHtcbiAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgIGlmICghZW5naW5lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmlzQ2FwYWNpdG9yKCkpIHtcbiAgICAgIGVuZ2luZS5zZWxlY3Rpb25FbmQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkVuZCgpO1xuICAgIH1cbiAgfSxcbn07XG4vKipcbiAqIFRyaWdnZXIgYSBzZWxlY3Rpb24gY2hhbmdlZCBoYXB0aWMgZXZlbnQuIEdvb2QgZm9yIG9uZS10aW1lIGV2ZW50c1xuICogKG5vdCBmb3IgZ2VzdHVyZXMpXG4gKi9cbmNvbnN0IGhhcHRpY1NlbGVjdGlvbiA9ICgpID0+IHtcbiAgSGFwdGljRW5naW5lLnNlbGVjdGlvbigpO1xufTtcbi8qKlxuICogVGVsbCB0aGUgaGFwdGljIGVuZ2luZSB0aGF0IGEgZ2VzdHVyZSBmb3IgYSBzZWxlY3Rpb24gY2hhbmdlIGlzIHN0YXJ0aW5nLlxuICovXG5jb25zdCBoYXB0aWNTZWxlY3Rpb25TdGFydCA9ICgpID0+IHtcbiAgSGFwdGljRW5naW5lLnNlbGVjdGlvblN0YXJ0KCk7XG59O1xuLyoqXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHRoYXQgYSBzZWxlY3Rpb24gY2hhbmdlZCBkdXJpbmcgYSBnZXN0dXJlLlxuICovXG5jb25zdCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkID0gKCkgPT4ge1xuICBIYXB0aWNFbmdpbmUuc2VsZWN0aW9uQ2hhbmdlZCgpO1xufTtcbi8qKlxuICogVGVsbCB0aGUgaGFwdGljIGVuZ2luZSB3ZSBhcmUgZG9uZSB3aXRoIGEgZ2VzdHVyZS4gVGhpcyBuZWVkcyB0byBiZVxuICogY2FsbGVkIGxlc3QgcmVzb3VyY2VzIGFyZSBub3QgcHJvcGVybHkgcmVjeWNsZWQuXG4gKi9cbmNvbnN0IGhhcHRpY1NlbGVjdGlvbkVuZCA9ICgpID0+IHtcbiAgSGFwdGljRW5naW5lLnNlbGVjdGlvbkVuZCgpO1xufTtcbi8qKlxuICogVXNlIHRoaXMgdG8gaW5kaWNhdGUgc3VjY2Vzcy9mYWlsdXJlL3dhcm5pbmcgdG8gdGhlIHVzZXIuXG4gKiBvcHRpb25zIHNob3VsZCBiZSBvZiB0aGUgdHlwZSBgeyBzdHlsZTogJ2xpZ2h0JyB9YCAob3IgYG1lZGl1bWAvYGhlYXZ5YClcbiAqL1xuY29uc3QgaGFwdGljSW1wYWN0ID0gKG9wdGlvbnMpID0+IHtcbiAgSGFwdGljRW5naW5lLmltcGFjdChvcHRpb25zKTtcbn07XG5cbmV4cG9ydCB7IGhhcHRpY1NlbGVjdGlvblN0YXJ0IGFzIGEsIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgYXMgYiwgaGFwdGljU2VsZWN0aW9uIGFzIGMsIGhhcHRpY0ltcGFjdCBhcyBkLCBoYXB0aWNTZWxlY3Rpb25FbmQgYXMgaCB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbi8qKlxuICogV2hlbiBhY2Nlc3NpbmcgdGhlIHdpbmRvdywgaXQgaXMgaW1wb3J0YW50XG4gKiB0byBhY2NvdW50IGZvciBTU1IgYXBwbGljYXRpb25zIHdoZXJlIHRoZVxuICogd2luZG93IGlzIG5vdCBhdmFpbGFibGUuIENvZGUgdGhhdCBhY2Nlc3Nlc1xuICogd2luZG93IHdoZW4gaXQgaXMgbm90IGF2YWlsYWJsZSB3aWxsIGNyYXNoLlxuICogRXZlbiBjaGVja2luZyBpZiBgd2luZG93ID09PSB1bmRlZmluZWRgIHdpbGwgY2F1c2VcbiAqIGFwcHMgdG8gY3Jhc2ggaW4gU1NSLlxuICpcbiAqIFVzZSB3aW4gYmVsb3cgdG8gYWNjZXNzIGFuIFNTUi1zYWZlIHZlcnNpb25cbiAqIG9mIHRoZSB3aW5kb3cuXG4gKlxuICogRXhhbXBsZSAxOlxuICogQmVmb3JlOlxuICogaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KSB7IC4uLiB9XG4gKlxuICogQWZ0ZXI6XG4gKiBpbXBvcnQgeyB3aW4gfSBmcm9tICdwYXRoL3RvL3RoaXMvZmlsZSc7XG4gKiBpZiAod2luPy5pbm5lcldpZHRoID4gNzY4KSB7IC4uLiB9XG4gKlxuICogTm90ZTogQ29kZSBpbnNpZGUgb2YgdGhpcyBpZi1ibG9jayB3aWxsXG4gKiBub3QgcnVuIGluIGFuIFNTUiBlbnZpcm9ubWVudC5cbiAqL1xuY29uc3Qgd2luID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG5cbmV4cG9ydCB7IHdpbiBhcyB3IH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRPblJlYWR5IH0gZnJvbSAnLi9oZWxwZXJzLTRkMjcyMzYwLmpzJztcbmltcG9ydCB7IGEgYXMgcHJpbnRSZXF1aXJlZEVsZW1lbnRFcnJvciB9IGZyb20gJy4vaW5kZXgtYzRiMTE2NzYuanMnO1xuXG5jb25zdCBJT05fQ09OVEVOVF9UQUdfTkFNRSA9ICdJT04tQ09OVEVOVCc7XG5jb25zdCBJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SID0gJ2lvbi1jb250ZW50JztcbmNvbnN0IElPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SID0gJy5pb24tY29udGVudC1zY3JvbGwtaG9zdCc7XG4vKipcbiAqIFNlbGVjdG9yIHVzZWQgZm9yIGltcGxlbWVudGF0aW9ucyByZWxpYW50IG9uIGA8aW9uLWNvbnRlbnQ+YCBmb3Igc2Nyb2xsIGV2ZW50IGNoYW5nZXMuXG4gKlxuICogRGV2ZWxvcGVycyBzaG91bGQgdXNlIHRoZSBgLmlvbi1jb250ZW50LXNjcm9sbC1ob3N0YCBzZWxlY3RvciB0byB0YXJnZXQgdGhlIGVsZW1lbnQgZW1pdHRpbmdcbiAqIHNjcm9sbCBldmVudHMuIFdpdGggdmlydHVhbCBzY3JvbGwgaW1wbGVtZW50YXRpb25zIHRoaXMgd2lsbCBiZSB0aGUgaG9zdCBlbGVtZW50IGZvclxuICogdGhlIHNjcm9sbCB2aWV3cG9ydC5cbiAqL1xuY29uc3QgSU9OX0NPTlRFTlRfU0VMRUNUT1IgPSBgJHtJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SfSwgJHtJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUn1gO1xuY29uc3QgaXNJb25Db250ZW50ID0gKGVsKSA9PiBlbCAmJiBlbC50YWdOYW1lID09PSBJT05fQ09OVEVOVF9UQUdfTkFNRTtcbi8qKlxuICogV2FpdHMgZm9yIHRoZSBlbGVtZW50IGhvc3QgZnVsbHkgaW5pdGlhbGl6ZSBiZWZvcmVcbiAqIHJldHVybmluZyB0aGUgaW5uZXIgc2Nyb2xsIGVsZW1lbnQuXG4gKlxuICogRm9yIGBpb24tY29udGVudGAgdGhlIHNjcm9sbCB0YXJnZXQgd2lsbCBiZSB0aGUgcmVzdWx0XG4gKiBvZiB0aGUgYGdldFNjcm9sbEVsZW1lbnRgIGZ1bmN0aW9uLlxuICpcbiAqIEZvciBjdXN0b20gaW1wbGVtZW50YXRpb25zIGl0IHdpbGwgYmUgdGhlIGVsZW1lbnQgaG9zdFxuICogb3IgYSBzZWxlY3RvciB3aXRoaW4gdGhlIGhvc3QsIGlmIHN1cHBsaWVkIHRocm91Z2ggYHNjcm9sbFRhcmdldGAuXG4gKi9cbmNvbnN0IGdldFNjcm9sbEVsZW1lbnQgPSBhc3luYyAoZWwpID0+IHtcbiAgaWYgKGlzSW9uQ29udGVudChlbCkpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gY29tcG9uZW50T25SZWFkeShlbCwgcmVzb2x2ZSkpO1xuICAgIHJldHVybiBlbC5nZXRTY3JvbGxFbGVtZW50KCk7XG4gIH1cbiAgcmV0dXJuIGVsO1xufTtcbi8qKlxuICogUXVlcmllcyB0aGUgZWxlbWVudCBtYXRjaGluZyB0aGUgc2VsZWN0b3IgZm9yIElvbkNvbnRlbnQuXG4gKiBTZWUgSU9OX0NPTlRFTlRfU0VMRUNUT1IgZm9yIHRoZSBzZWxlY3RvciB1c2VkLlxuICovXG5jb25zdCBmaW5kSW9uQ29udGVudCA9IChlbCkgPT4ge1xuICAvKipcbiAgICogRmlyc3Qgd2UgdHJ5IHRvIHF1ZXJ5IHRoZSBjdXN0b20gc2Nyb2xsIGhvc3Qgc2VsZWN0b3IgaW4gY2FzZXMgd2hlcmVcbiAgICogdGhlIGltcGxlbWVudGF0aW9uIGlzIHVzaW5nIGFuIG91dGVyIGBpb24tY29udGVudGAgd2l0aCBhbiBpbm5lciBjdXN0b21cbiAgICogc2Nyb2xsIGNvbnRhaW5lci5cbiAgICovXG4gIGNvbnN0IGN1c3RvbUNvbnRlbnRIb3N0ID0gZWwucXVlcnlTZWxlY3RvcihJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUik7XG4gIGlmIChjdXN0b21Db250ZW50SG9zdCkge1xuICAgIHJldHVybiBjdXN0b21Db250ZW50SG9zdDtcbiAgfVxuICByZXR1cm4gZWwucXVlcnlTZWxlY3RvcihJT05fQ09OVEVOVF9TRUxFQ1RPUik7XG59O1xuLyoqXG4gKiBRdWVyaWVzIHRoZSBjbG9zZXN0IGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yIGZvciBJb25Db250ZW50LlxuICovXG5jb25zdCBmaW5kQ2xvc2VzdElvbkNvbnRlbnQgPSAoZWwpID0+IHtcbiAgcmV0dXJuIGVsLmNsb3Nlc3QoSU9OX0NPTlRFTlRfU0VMRUNUT1IpO1xufTtcbi8qKlxuICogU2Nyb2xscyB0byB0aGUgdG9wIG9mIHRoZSBlbGVtZW50LiBJZiBhbiBgaW9uLWNvbnRlbnRgIGlzIGZvdW5kLCBpdCB3aWxsIHNjcm9sbFxuICogdXNpbmcgdGhlIHB1YmxpYyBBUEkgYHNjcm9sbFRvVG9wYCB3aXRoIGEgZHVyYXRpb24uXG4gKi9cbmNvbnN0IHNjcm9sbFRvVG9wID0gKGVsLCBkdXJhdGlvbk1zKSA9PiB7XG4gIGlmIChpc0lvbkNvbnRlbnQoZWwpKSB7XG4gICAgY29uc3QgY29udGVudCA9IGVsO1xuICAgIHJldHVybiBjb250ZW50LnNjcm9sbFRvVG9wKGR1cmF0aW9uTXMpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWwuc2Nyb2xsVG8oe1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJlaGF2aW9yOiBkdXJhdGlvbk1zID4gMCA/ICdzbW9vdGgnIDogJ2F1dG8nLFxuICB9KSk7XG59O1xuLyoqXG4gKiBTY3JvbGxzIGJ5IGEgc3BlY2lmaWVkIFgvWSBkaXN0YW5jZSBpbiB0aGUgY29tcG9uZW50LiBJZiBhbiBgaW9uLWNvbnRlbnRgIGlzIGZvdW5kLCBpdCB3aWxsIHNjcm9sbFxuICogdXNpbmcgdGhlIHB1YmxpYyBBUEkgYHNjcm9sbEJ5UG9pbnRgIHdpdGggYSBkdXJhdGlvbi5cbiAqL1xuY29uc3Qgc2Nyb2xsQnlQb2ludCA9IChlbCwgeCwgeSwgZHVyYXRpb25NcykgPT4ge1xuICBpZiAoaXNJb25Db250ZW50KGVsKSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlbDtcbiAgICByZXR1cm4gY29udGVudC5zY3JvbGxCeVBvaW50KHgsIHksIGR1cmF0aW9uTXMpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWwuc2Nyb2xsQnkoe1xuICAgIHRvcDogeSxcbiAgICBsZWZ0OiB4LFxuICAgIGJlaGF2aW9yOiBkdXJhdGlvbk1zID4gMCA/ICdzbW9vdGgnIDogJ2F1dG8nLFxuICB9KSk7XG59O1xuLyoqXG4gKiBQcmludHMgYW4gZXJyb3IgaW5mb3JtaW5nIGRldmVsb3BlcnMgdGhhdCBhbiBpbXBsZW1lbnRhdGlvbiByZXF1aXJlcyBhbiBlbGVtZW50IHRvIGJlIHVzZWRcbiAqIHdpdGhpbiBlaXRoZXIgdGhlIGBpb24tY29udGVudGAgc2VsZWN0b3Igb3IgdGhlIGAuaW9uLWNvbnRlbnQtc2Nyb2xsLWhvc3RgIGNsYXNzLlxuICovXG5jb25zdCBwcmludElvbkNvbnRlbnRFcnJvck1zZyA9IChlbCkgPT4ge1xuICByZXR1cm4gcHJpbnRSZXF1aXJlZEVsZW1lbnRFcnJvcihlbCwgSU9OX0NPTlRFTlRfRUxFTUVOVF9TRUxFQ1RPUik7XG59O1xuLyoqXG4gKiBTZXZlcmFsIGNvbXBvbmVudHMgaW4gSW9uaWMgbmVlZCB0byBwcmV2ZW50IHNjcm9sbGluZ1xuICogZHVyaW5nIGEgZ2VzdHVyZSAoY2FyZCBtb2RhbCwgcmFuZ2UsIGl0ZW0gc2xpZGluZywgZXRjKS5cbiAqIFVzZSB0aGlzIHV0aWxpdHkgdG8gYWNjb3VudCBmb3IgaW9uLWNvbnRlbnQgYW5kIGN1c3RvbSBjb250ZW50IGhvc3RzLlxuICovXG5jb25zdCBkaXNhYmxlQ29udGVudFNjcm9sbFkgPSAoY29udGVudEVsKSA9PiB7XG4gIGlmIChpc0lvbkNvbnRlbnQoY29udGVudEVsKSkge1xuICAgIGNvbnN0IGlvbkNvbnRlbnQgPSBjb250ZW50RWw7XG4gICAgY29uc3QgaW5pdGlhbFNjcm9sbFkgPSBpb25Db250ZW50LnNjcm9sbFk7XG4gICAgaW9uQ29udGVudC5zY3JvbGxZID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGhpcyBzaG91bGQgYmUgcGFzc2VkIGludG8gcmVzZXRDb250ZW50U2Nyb2xsWVxuICAgICAqIHNvIHRoYXQgd2UgY2FuIHJldmVydCBpb24tY29udGVudCdzIHNjcm9sbFkgdG8gdGhlXG4gICAgICogY29ycmVjdCBzdGF0ZS4gRm9yIGV4YW1wbGUsIGlmIHNjcm9sbFkgPSBmYWxzZVxuICAgICAqIGluaXRpYWxseSwgd2UgZG8gbm90IHdhbnQgdG8gZW5hYmxlIHNjcm9sbGluZ1xuICAgICAqIHdoZW4gd2UgY2FsbCByZXNldENvbnRlbnRTY3JvbGxZLlxuICAgICAqL1xuICAgIHJldHVybiBpbml0aWFsU2Nyb2xsWTtcbiAgfVxuICBlbHNlIHtcbiAgICBjb250ZW50RWwuc3R5bGUuc2V0UHJvcGVydHkoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuY29uc3QgcmVzZXRDb250ZW50U2Nyb2xsWSA9IChjb250ZW50RWwsIGluaXRpYWxTY3JvbGxZKSA9PiB7XG4gIGlmIChpc0lvbkNvbnRlbnQoY29udGVudEVsKSkge1xuICAgIGNvbnRlbnRFbC5zY3JvbGxZID0gaW5pdGlhbFNjcm9sbFk7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29udGVudEVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xuICB9XG59O1xuXG5leHBvcnQgeyBJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SIGFzIEksIGZpbmRJb25Db250ZW50IGFzIGEsIElPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SIGFzIGIsIHNjcm9sbEJ5UG9pbnQgYXMgYywgZGlzYWJsZUNvbnRlbnRTY3JvbGxZIGFzIGQsIGZpbmRDbG9zZXN0SW9uQ29udGVudCBhcyBmLCBnZXRTY3JvbGxFbGVtZW50IGFzIGcsIGlzSW9uQ29udGVudCBhcyBpLCBwcmludElvbkNvbnRlbnRFcnJvck1zZyBhcyBwLCByZXNldENvbnRlbnRTY3JvbGxZIGFzIHIsIHNjcm9sbFRvVG9wIGFzIHMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG4vKiBJb25pY29ucyB2Ni4wLjIsIEVTIE1vZHVsZXMgKi9cbmNvbnN0IGFycm93QmFja1NoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+QXJyb3cgQmFjazwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3NxdWFyZScgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMjQ0IDQwMEwxMDAgMjU2bDE0NC0xNDRNMTIwIDI1NmgyOTInIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgYXJyb3dEb3duID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+QXJyb3cgRG93bjwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMTEyIDI2OGwxNDQgMTQ0IDE0NC0xNDRNMjU2IDM5MlYxMDAnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgY2FyZXRCYWNrU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DYXJldCBCYWNrPC90aXRsZT48cGF0aCBkPSdNMzY4IDY0TDE0NCAyNTZsMjI0IDE5MlY2NHonLz48L3N2Zz5cIjtcbmNvbnN0IGNhcmV0RG93blNoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+Q2FyZXQgRG93bjwvdGl0bGU+PHBhdGggZD0nTTY0IDE0NGwxOTIgMjI0IDE5Mi0yMjRINjR6Jy8+PC9zdmc+XCI7XG5jb25zdCBjYXJldFVwU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DYXJldCBVcDwvdGl0bGU+PHBhdGggZD0nTTQ0OCAzNjhMMjU2IDE0NCA2NCAzNjhoMzg0eicvPjwvc3ZnPlwiO1xuY29uc3QgY2hlY2ttYXJrT3V0bGluZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNoZWNrbWFyazwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNDE2IDEyOEwxOTIgMzg0bC05Ni05NicgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCBjaGV2cm9uQmFjayA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNoZXZyb24gQmFjazwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMzI4IDExMkwxODQgMjU2bDE0NCAxNDQnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgY2hldnJvbkRvd24gPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DaGV2cm9uIERvd248L3RpdGxlPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0OCcgZD0nTTExMiAxODRsMTQ0IDE0NCAxNDQtMTQ0JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGNoZXZyb25Gb3J3YXJkID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+Q2hldnJvbiBGb3J3YXJkPC90aXRsZT48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDgnIGQ9J00xODQgMTEybDE0NCAxNDQtMTQ0IDE0NCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBjaGV2cm9uRm9yd2FyZE91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DaGV2cm9uIEZvcndhcmQ8L3RpdGxlPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0OCcgZD0nTTE4NCAxMTJsMTQ0IDE0NC0xNDQgMTQ0JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGNsb3NlID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+Q2xvc2U8L3RpdGxlPjxwYXRoIGQ9J00yODkuOTQgMjU2bDk1LTk1QTI0IDI0IDAgMDAzNTEgMTI3bC05NSA5NS05NS05NWEyNCAyNCAwIDAwLTM0IDM0bDk1IDk1LTk1IDk1YTI0IDI0IDAgMTAzNCAzNGw5NS05NSA5NSA5NWEyNCAyNCAwIDAwMzQtMzR6Jy8+PC9zdmc+XCI7XG5jb25zdCBjbG9zZUNpcmNsZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNsb3NlIENpcmNsZTwvdGl0bGU+PHBhdGggZD0nTTI1NiA0OEMxNDEuMzEgNDggNDggMTQxLjMxIDQ4IDI1NnM5My4zMSAyMDggMjA4IDIwOCAyMDgtOTMuMzEgMjA4LTIwOFMzNzAuNjkgNDggMjU2IDQ4em03NS4zMSAyNjAuNjlhMTYgMTYgMCAxMS0yMi42MiAyMi42MkwyNTYgMjc4LjYzbC01Mi42OSA1Mi42OGExNiAxNiAwIDAxLTIyLjYyLTIyLjYyTDIzMy4zNyAyNTZsLTUyLjY4LTUyLjY5YTE2IDE2IDAgMDEyMi42Mi0yMi42MkwyNTYgMjMzLjM3bDUyLjY5LTUyLjY4YTE2IDE2IDAgMDEyMi42MiAyMi42MkwyNzguNjMgMjU2eicvPjwvc3ZnPlwiO1xuY29uc3QgY2xvc2VTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNsb3NlPC90aXRsZT48cGF0aCBkPSdNNDAwIDE0NS40OUwzNjYuNTEgMTEyIDI1NiAyMjIuNTEgMTQ1LjQ5IDExMiAxMTIgMTQ1LjQ5IDIyMi41MSAyNTYgMTEyIDM2Ni41MSAxNDUuNDkgNDAwIDI1NiAyODkuNDkgMzY2LjUxIDQwMCA0MDAgMzY2LjUxIDI4OS40OSAyNTYgNDAwIDE0NS40OXonLz48L3N2Zz5cIjtcbmNvbnN0IGVsbGlwc2VPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+RWxsaXBzZTwvdGl0bGU+PGNpcmNsZSBjeD0nMjU2JyBjeT0nMjU2JyByPScxOTInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCBlbGxpcHNpc0hvcml6b250YWwgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5FbGxpcHNpcyBIb3Jpem9udGFsPC90aXRsZT48Y2lyY2xlIGN4PScyNTYnIGN5PScyNTYnIHI9JzQ4Jy8+PGNpcmNsZSBjeD0nNDE2JyBjeT0nMjU2JyByPSc0OCcvPjxjaXJjbGUgY3g9Jzk2JyBjeT0nMjU2JyByPSc0OCcvPjwvc3ZnPlwiO1xuY29uc3QgbWVudU91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5NZW51PC90aXRsZT48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTgwIDE2MGgzNTJNODAgMjU2aDM1Mk04MCAzNTJoMzUyJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IG1lbnVTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPk1lbnU8L3RpdGxlPjxwYXRoIGQ9J002NCAzODRoMzg0di00Mi42N0g2NHptMC0xMDYuNjdoMzg0di00Mi42Nkg2NHpNNjQgMTI4djQyLjY3aDM4NFYxMjh6Jy8+PC9zdmc+XCI7XG5jb25zdCByZW1vdmVPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+UmVtb3ZlPC90aXRsZT48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J000MDAgMjU2SDExMicgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCByZW9yZGVyVGhyZWVPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+UmVvcmRlciBUaHJlZTwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNOTYgMjU2aDMyME05NiAxNzZoMzIwTTk2IDMzNmgzMjAnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjwvc3ZnPlwiO1xuY29uc3QgcmVvcmRlclR3b1NoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+UmVvcmRlciBUd288L3RpdGxlPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdzcXVhcmUnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDQnIGQ9J00xMTggMzA0aDI3Nk0xMTggMjA4aDI3NicgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBzZWFyY2hPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+U2VhcmNoPC90aXRsZT48cGF0aCBkPSdNMjIxLjA5IDY0YTE1Ny4wOSAxNTcuMDkgMCAxMDE1Ny4wOSAxNTcuMDlBMTU3LjEgMTU3LjEgMCAwMDIyMS4wOSA2NHonIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J00zMzguMjkgMzM4LjI5TDQ0OCA0NDgnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjwvc3ZnPlwiO1xuY29uc3Qgc2VhcmNoU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5TZWFyY2g8L3RpdGxlPjxwYXRoIGQ9J000NjQgNDI4TDMzOS45MiAzMDMuOWExNjAuNDggMTYwLjQ4IDAgMDAzMC43Mi05NC41OEMzNzAuNjQgMTIwLjM3IDI5OC4yNyA0OCAyMDkuMzIgNDhTNDggMTIwLjM3IDQ4IDIwOS4zMnM3Mi4zNyAxNjEuMzIgMTYxLjMyIDE2MS4zMmExNjAuNDggMTYwLjQ4IDAgMDA5NC41OC0zMC43Mkw0MjggNDY0ek0yMDkuMzIgMzE5LjY5YTExMC4zOCAxMTAuMzggMCAxMTExMC4zNy0xMTAuMzcgMTEwLjUgMTEwLjUgMCAwMS0xMTAuMzcgMTEwLjM3eicvPjwvc3ZnPlwiO1xuXG5leHBvcnQgeyBhcnJvd0JhY2tTaGFycCBhcyBhLCBjbG9zZUNpcmNsZSBhcyBiLCBjaGV2cm9uQmFjayBhcyBjLCBjbG9zZVNoYXJwIGFzIGQsIHNlYXJjaFNoYXJwIGFzIGUsIGNoZWNrbWFya091dGxpbmUgYXMgZiwgZWxsaXBzZU91dGxpbmUgYXMgZywgY2FyZXRCYWNrU2hhcnAgYXMgaCwgYXJyb3dEb3duIGFzIGksIHJlb3JkZXJUaHJlZU91dGxpbmUgYXMgaiwgcmVvcmRlclR3b1NoYXJwIGFzIGssIGNoZXZyb25Eb3duIGFzIGwsIGNoZXZyb25Gb3J3YXJkT3V0bGluZSBhcyBtLCBlbGxpcHNpc0hvcml6b250YWwgYXMgbiwgY2hldnJvbkZvcndhcmQgYXMgbywgY2FyZXRVcFNoYXJwIGFzIHAsIGNhcmV0RG93blNoYXJwIGFzIHEsIHJlbW92ZU91dGxpbmUgYXMgciwgc2VhcmNoT3V0bGluZSBhcyBzLCBjbG9zZSBhcyB0LCBtZW51T3V0bGluZSBhcyB1LCBtZW51U2hhcnAgYXMgdiB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmNvbnN0IEtFWUJPQVJEX0RJRF9PUEVOID0gJ2lvbktleWJvYXJkRGlkU2hvdyc7XG5jb25zdCBLRVlCT0FSRF9ESURfQ0xPU0UgPSAnaW9uS2V5Ym9hcmREaWRIaWRlJztcbmNvbnN0IEtFWUJPQVJEX1RIUkVTSE9MRCA9IDE1MDtcbmxldCBwcmV2aW91c1Zpc3VhbFZpZXdwb3J0ID0ge307XG5sZXQgY3VycmVudFZpc3VhbFZpZXdwb3J0ID0ge307XG5sZXQga2V5Ym9hcmRPcGVuID0gZmFsc2U7XG4vKipcbiAqIFRoaXMgaXMgb25seSB1c2VkIGZvciB0ZXN0c1xuICovXG5jb25zdCByZXNldEtleWJvYXJkQXNzaXN0ID0gKCkgPT4ge1xuICBwcmV2aW91c1Zpc3VhbFZpZXdwb3J0ID0ge307XG4gIGN1cnJlbnRWaXN1YWxWaWV3cG9ydCA9IHt9O1xuICBrZXlib2FyZE9wZW4gPSBmYWxzZTtcbn07XG5jb25zdCBzdGFydEtleWJvYXJkQXNzaXN0ID0gKHdpbikgPT4ge1xuICBzdGFydE5hdGl2ZUxpc3RlbmVycyh3aW4pO1xuICBpZiAoIXdpbi52aXN1YWxWaWV3cG9ydCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjdXJyZW50VmlzdWFsVmlld3BvcnQgPSBjb3B5VmlzdWFsVmlld3BvcnQod2luLnZpc3VhbFZpZXdwb3J0KTtcbiAgd2luLnZpc3VhbFZpZXdwb3J0Lm9ucmVzaXplID0gKCkgPT4ge1xuICAgIHRyYWNrVmlld3BvcnRDaGFuZ2VzKHdpbik7XG4gICAgaWYgKGtleWJvYXJkRGlkT3BlbigpIHx8IGtleWJvYXJkRGlkUmVzaXplKHdpbikpIHtcbiAgICAgIHNldEtleWJvYXJkT3Blbih3aW4pO1xuICAgIH1cbiAgICBlbHNlIGlmIChrZXlib2FyZERpZENsb3NlKHdpbikpIHtcbiAgICAgIHNldEtleWJvYXJkQ2xvc2Uod2luKTtcbiAgICB9XG4gIH07XG59O1xuLyoqXG4gKiBMaXN0ZW4gZm9yIGV2ZW50cyBmaXJlZCBieSBuYXRpdmUga2V5Ym9hcmQgcGx1Z2luXG4gKiBpbiBDYXBhY2l0b3IvQ29yZG92YSBzbyBkZXZzIG9ubHkgbmVlZCB0byBsaXN0ZW5cbiAqIGluIG9uZSBwbGFjZS5cbiAqL1xuY29uc3Qgc3RhcnROYXRpdmVMaXN0ZW5lcnMgPSAod2luKSA9PiB7XG4gIHdpbi5hZGRFdmVudExpc3RlbmVyKCdrZXlib2FyZERpZFNob3cnLCAoZXYpID0+IHNldEtleWJvYXJkT3Blbih3aW4sIGV2KSk7XG4gIHdpbi5hZGRFdmVudExpc3RlbmVyKCdrZXlib2FyZERpZEhpZGUnLCAoKSA9PiBzZXRLZXlib2FyZENsb3NlKHdpbikpO1xufTtcbmNvbnN0IHNldEtleWJvYXJkT3BlbiA9ICh3aW4sIGV2KSA9PiB7XG4gIGZpcmVLZXlib2FyZE9wZW5FdmVudCh3aW4sIGV2KTtcbiAga2V5Ym9hcmRPcGVuID0gdHJ1ZTtcbn07XG5jb25zdCBzZXRLZXlib2FyZENsb3NlID0gKHdpbikgPT4ge1xuICBmaXJlS2V5Ym9hcmRDbG9zZUV2ZW50KHdpbik7XG4gIGtleWJvYXJkT3BlbiA9IGZhbHNlO1xufTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGBrZXlib2FyZE9wZW5gIGZsYWcgaXMgbm90XG4gKiBzZXQsIHRoZSBwcmV2aW91cyB2aXN1YWwgdmlld3BvcnQgd2lkdGggZXF1YWwgdGhlIGN1cnJlbnRcbiAqIHZpc3VhbCB2aWV3cG9ydCB3aWR0aCwgYW5kIGlmIHRoZSBzY2FsZWQgZGlmZmVyZW5jZVxuICogb2YgdGhlIHByZXZpb3VzIHZpc3VhbCB2aWV3cG9ydCBoZWlnaHQgbWludXMgdGhlIGN1cnJlbnRcbiAqIHZpc3VhbCB2aWV3cG9ydCBoZWlnaHQgaXMgZ3JlYXRlciB0aGFuIEtFWUJPQVJEX1RIUkVTSE9MRFxuICpcbiAqIFdlIG5lZWQgdG8gYmUgYWJsZSB0byBhY2NvbW1vZGF0ZSB1c2VycyB3aG8gaGF2ZSB6b29taW5nXG4gKiBlbmFibGVkIGluIHRoZWlyIGJyb3dzZXIgKG9yIGhhdmUgem9vbWVkIGluIG1hbnVhbGx5KSB3aGljaFxuICogaXMgd2h5IHdlIHRha2UgaW50byBhY2NvdW50IHRoZSBjdXJyZW50IHZpc3VhbCB2aWV3cG9ydCdzXG4gKiBzY2FsZSB2YWx1ZS5cbiAqL1xuY29uc3Qga2V5Ym9hcmREaWRPcGVuID0gKCkgPT4ge1xuICBjb25zdCBzY2FsZWRIZWlnaHREaWZmZXJlbmNlID0gKHByZXZpb3VzVmlzdWFsVmlld3BvcnQuaGVpZ2h0IC0gY3VycmVudFZpc3VhbFZpZXdwb3J0LmhlaWdodCkgKiBjdXJyZW50VmlzdWFsVmlld3BvcnQuc2NhbGU7XG4gIHJldHVybiAoIWtleWJvYXJkT3BlbiAmJlxuICAgIHByZXZpb3VzVmlzdWFsVmlld3BvcnQud2lkdGggPT09IGN1cnJlbnRWaXN1YWxWaWV3cG9ydC53aWR0aCAmJlxuICAgIHNjYWxlZEhlaWdodERpZmZlcmVuY2UgPiBLRVlCT0FSRF9USFJFU0hPTEQpO1xufTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGtleWJvYXJkIGlzIG9wZW4sXG4gKiBidXQgdGhlIGtleWJvYXJkIGRpZCBub3QgY2xvc2VcbiAqL1xuY29uc3Qga2V5Ym9hcmREaWRSZXNpemUgPSAod2luKSA9PiB7XG4gIHJldHVybiBrZXlib2FyZE9wZW4gJiYgIWtleWJvYXJkRGlkQ2xvc2Uod2luKTtcbn07XG4vKipcbiAqIERldGVybWluZSBpZiB0aGUga2V5Ym9hcmQgd2FzIGNsb3NlZFxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGBrZXlib2FyZE9wZW5gIGZsYWcgaXMgc2V0IGFuZFxuICogdGhlIGN1cnJlbnQgdmlzdWFsIHZpZXdwb3J0IGhlaWdodCBlcXVhbHMgdGhlXG4gKiBsYXlvdXQgdmlld3BvcnQgaGVpZ2h0LlxuICovXG5jb25zdCBrZXlib2FyZERpZENsb3NlID0gKHdpbikgPT4ge1xuICByZXR1cm4ga2V5Ym9hcmRPcGVuICYmIGN1cnJlbnRWaXN1YWxWaWV3cG9ydC5oZWlnaHQgPT09IHdpbi5pbm5lckhlaWdodDtcbn07XG4vKipcbiAqIERpc3BhdGNoIGEga2V5Ym9hcmQgb3BlbiBldmVudFxuICovXG5jb25zdCBmaXJlS2V5Ym9hcmRPcGVuRXZlbnQgPSAod2luLCBuYXRpdmVFdikgPT4ge1xuICBjb25zdCBrZXlib2FyZEhlaWdodCA9IG5hdGl2ZUV2ID8gbmF0aXZlRXYua2V5Ym9hcmRIZWlnaHQgOiB3aW4uaW5uZXJIZWlnaHQgLSBjdXJyZW50VmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICBjb25zdCBldiA9IG5ldyBDdXN0b21FdmVudChLRVlCT0FSRF9ESURfT1BFTiwge1xuICAgIGRldGFpbDogeyBrZXlib2FyZEhlaWdodCB9LFxuICB9KTtcbiAgd2luLmRpc3BhdGNoRXZlbnQoZXYpO1xufTtcbi8qKlxuICogRGlzcGF0Y2ggYSBrZXlib2FyZCBjbG9zZSBldmVudFxuICovXG5jb25zdCBmaXJlS2V5Ym9hcmRDbG9zZUV2ZW50ID0gKHdpbikgPT4ge1xuICBjb25zdCBldiA9IG5ldyBDdXN0b21FdmVudChLRVlCT0FSRF9ESURfQ0xPU0UpO1xuICB3aW4uZGlzcGF0Y2hFdmVudChldik7XG59O1xuLyoqXG4gKiBHaXZlbiBhIHdpbmRvdyBvYmplY3QsIGNyZWF0ZSBhIGNvcHkgb2ZcbiAqIHRoZSBjdXJyZW50IHZpc3VhbCBhbmQgbGF5b3V0IHZpZXdwb3J0IHN0YXRlc1xuICogd2hpbGUgYWxzbyBwcmVzZXJ2aW5nIHRoZSBwcmV2aW91cyB2aXN1YWwgYW5kXG4gKiBsYXlvdXQgdmlld3BvcnQgc3RhdGVzXG4gKi9cbmNvbnN0IHRyYWNrVmlld3BvcnRDaGFuZ2VzID0gKHdpbikgPT4ge1xuICBwcmV2aW91c1Zpc3VhbFZpZXdwb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudFZpc3VhbFZpZXdwb3J0KTtcbiAgY3VycmVudFZpc3VhbFZpZXdwb3J0ID0gY29weVZpc3VhbFZpZXdwb3J0KHdpbi52aXN1YWxWaWV3cG9ydCk7XG59O1xuLyoqXG4gKiBDcmVhdGVzIGEgZGVlcCBjb3B5IG9mIHRoZSB2aXN1YWwgdmlld3BvcnRcbiAqIGF0IGEgZ2l2ZW4gc3RhdGVcbiAqL1xuY29uc3QgY29weVZpc3VhbFZpZXdwb3J0ID0gKHZpc3VhbFZpZXdwb3J0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IE1hdGgucm91bmQodmlzdWFsVmlld3BvcnQud2lkdGgpLFxuICAgIGhlaWdodDogTWF0aC5yb3VuZCh2aXN1YWxWaWV3cG9ydC5oZWlnaHQpLFxuICAgIG9mZnNldFRvcDogdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wLFxuICAgIG9mZnNldExlZnQ6IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQsXG4gICAgcGFnZVRvcDogdmlzdWFsVmlld3BvcnQucGFnZVRvcCxcbiAgICBwYWdlTGVmdDogdmlzdWFsVmlld3BvcnQucGFnZUxlZnQsXG4gICAgc2NhbGU6IHZpc3VhbFZpZXdwb3J0LnNjYWxlLFxuICB9O1xufTtcblxuZXhwb3J0IHsgS0VZQk9BUkRfRElEX0NMT1NFLCBLRVlCT0FSRF9ESURfT1BFTiwgY29weVZpc3VhbFZpZXdwb3J0LCBrZXlib2FyZERpZENsb3NlLCBrZXlib2FyZERpZE9wZW4sIGtleWJvYXJkRGlkUmVzaXplLCByZXNldEtleWJvYXJkQXNzaXN0LCBzZXRLZXlib2FyZENsb3NlLCBzZXRLZXlib2FyZE9wZW4sIHN0YXJ0S2V5Ym9hcmRBc3Npc3QsIHRyYWNrVmlld3BvcnRDaGFuZ2VzIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgdyBhcyB3aW4gfSBmcm9tICcuL2luZGV4LTMzZmZlYzI1LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY29udHJvbGxlciB0aGF0IHRyYWNrcyBhbmQgcmVhY3RzIHRvIG9wZW5pbmcgb3IgY2xvc2luZyB0aGUga2V5Ym9hcmQuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ga2V5Ym9hcmRDaGFuZ2VDYWxsYmFjayBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUga2V5Ym9hcmQgb3BlbnMgb3IgY2xvc2VzLlxuICovXG5jb25zdCBjcmVhdGVLZXlib2FyZENvbnRyb2xsZXIgPSAoa2V5Ym9hcmRDaGFuZ2VDYWxsYmFjaykgPT4ge1xuICBsZXQga2V5Ym9hcmRXaWxsU2hvd0hhbmRsZXI7XG4gIGxldCBrZXlib2FyZFdpbGxIaWRlSGFuZGxlcjtcbiAgbGV0IGtleWJvYXJkVmlzaWJsZTtcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBrZXlib2FyZFdpbGxTaG93SGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGtleWJvYXJkVmlzaWJsZSA9IHRydWU7XG4gICAgICBpZiAoa2V5Ym9hcmRDaGFuZ2VDYWxsYmFjaylcbiAgICAgICAga2V5Ym9hcmRDaGFuZ2VDYWxsYmFjayh0cnVlKTtcbiAgICB9O1xuICAgIGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAga2V5Ym9hcmRWaXNpYmxlID0gZmFsc2U7XG4gICAgICBpZiAoa2V5Ym9hcmRDaGFuZ2VDYWxsYmFjaylcbiAgICAgICAga2V5Ym9hcmRDaGFuZ2VDYWxsYmFjayhmYWxzZSk7XG4gICAgfTtcbiAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4uYWRkRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsU2hvdycsIGtleWJvYXJkV2lsbFNob3dIYW5kbGVyKTtcbiAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4uYWRkRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsSGlkZScsIGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyKTtcbiAgfTtcbiAgY29uc3QgZGVzdHJveSA9ICgpID0+IHtcbiAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsU2hvdycsIGtleWJvYXJkV2lsbFNob3dIYW5kbGVyKTtcbiAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsSGlkZScsIGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyKTtcbiAgICBrZXlib2FyZFdpbGxTaG93SGFuZGxlciA9IGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyID0gdW5kZWZpbmVkO1xuICB9O1xuICBjb25zdCBpc0tleWJvYXJkVmlzaWJsZSA9ICgpID0+IGtleWJvYXJkVmlzaWJsZTtcbiAgaW5pdCgpO1xuICByZXR1cm4geyBpbml0LCBkZXN0cm95LCBpc0tleWJvYXJkVmlzaWJsZSB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlS2V5Ym9hcmRDb250cm9sbGVyIGFzIGMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5jb25zdCBzcGlubmVycyA9IHtcbiAgYnViYmxlczoge1xuICAgIGR1cjogMTAwMCxcbiAgICBjaXJjbGVzOiA5LFxuICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4KSAvIHRvdGFsIC0gZHVyfW1zYDtcbiAgICAgIGNvbnN0IGFuZ2xlID0gKDIgKiBNYXRoLlBJICogaW5kZXgpIC8gdG90YWw7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiA1LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRvcDogYCR7OSAqIE1hdGguc2luKGFuZ2xlKX1weGAsXG4gICAgICAgICAgbGVmdDogYCR7OSAqIE1hdGguY29zKGFuZ2xlKX1weGAsXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICBjaXJjbGVzOiB7XG4gICAgZHVyOiAxMDAwLFxuICAgIGNpcmNsZXM6IDgsXG4gICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgY29uc3Qgc3RlcCA9IGluZGV4IC8gdG90YWw7XG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAke2R1ciAqIHN0ZXAgLSBkdXJ9bXNgO1xuICAgICAgY29uc3QgYW5nbGUgPSAyICogTWF0aC5QSSAqIHN0ZXA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiA1LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRvcDogYCR7OSAqIE1hdGguc2luKGFuZ2xlKX1weGAsXG4gICAgICAgICAgbGVmdDogYCR7OSAqIE1hdGguY29zKGFuZ2xlKX1weGAsXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICBjaXJjdWxhcjoge1xuICAgIGR1cjogMTQwMCxcbiAgICBlbG1EdXJhdGlvbjogdHJ1ZSxcbiAgICBjaXJjbGVzOiAxLFxuICAgIGZuOiAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiAyMCxcbiAgICAgICAgY3g6IDQ4LFxuICAgICAgICBjeTogNDgsXG4gICAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICAgdmlld0JveDogJzI0IDI0IDQ4IDQ4JyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsMCknLFxuICAgICAgICBzdHlsZToge30sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIGNyZXNjZW50OiB7XG4gICAgZHVyOiA3NTAsXG4gICAgY2lyY2xlczogMSxcbiAgICBmbjogKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcjogMjYsXG4gICAgICAgIHN0eWxlOiB7fSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgZG90czoge1xuICAgIGR1cjogNzUwLFxuICAgIGNpcmNsZXM6IDMsXG4gICAgZm46IChfLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSAtKDExMCAqIGluZGV4KSArICdtcyc7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiA2LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGxlZnQ6IGAkezkgLSA5ICogaW5kZXh9cHhgLFxuICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgbGluZXM6IHtcbiAgICBkdXI6IDEwMDAsXG4gICAgbGluZXM6IDgsXG4gICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZSgkeygzNjAgLyB0b3RhbCkgKiBpbmRleCArIChpbmRleCA8IHRvdGFsIC8gMiA/IDE4MCA6IC0xODApfWRlZylgO1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBgJHsoZHVyICogaW5kZXgpIC8gdG90YWwgLSBkdXJ9bXNgO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeTE6IDE0LFxuICAgICAgICB5MjogMjYsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICAnbGluZXMtc21hbGwnOiB7XG4gICAgZHVyOiAxMDAwLFxuICAgIGxpbmVzOiA4LFxuICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGByb3RhdGUoJHsoMzYwIC8gdG90YWwpICogaW5kZXggKyAoaW5kZXggPCB0b3RhbCAvIDIgPyAxODAgOiAtMTgwKX1kZWcpYDtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4KSAvIHRvdGFsIC0gZHVyfW1zYDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHkxOiAxMixcbiAgICAgICAgeTI6IDIwLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgJ2xpbmVzLXNoYXJwJzoge1xuICAgIGR1cjogMTAwMCxcbiAgICBsaW5lczogMTIsXG4gICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZSgkezMwICogaW5kZXggKyAoaW5kZXggPCA2ID8gMTgwIDogLTE4MCl9ZGVnKWA7XG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAkeyhkdXIgKiBpbmRleCkgLyB0b3RhbCAtIGR1cn1tc2A7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB5MTogMTcsXG4gICAgICAgIHkyOiAyOSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gICdsaW5lcy1zaGFycC1zbWFsbCc6IHtcbiAgICBkdXI6IDEwMDAsXG4gICAgbGluZXM6IDEyLFxuICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGByb3RhdGUoJHszMCAqIGluZGV4ICsgKGluZGV4IDwgNiA/IDE4MCA6IC0xODApfWRlZylgO1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBgJHsoZHVyICogaW5kZXgpIC8gdG90YWwgLSBkdXJ9bXNgO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeTE6IDEyLFxuICAgICAgICB5MjogMjAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxufTtcbmNvbnN0IFNQSU5ORVJTID0gc3Bpbm5lcnM7XG5cbmV4cG9ydCB7IFNQSU5ORVJTIGFzIFMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBsIGFzIGNsYW1wIH0gZnJvbSAnLi9oZWxwZXJzLTRkMjcyMzYwLmpzJztcbmltcG9ydCB7IGkgYXMgaXNSVEwgfSBmcm9tICcuL2Rpci1lOGI3NjdhOC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVHZXN0dXJlIH0gZnJvbSAnLi9pbmRleC0zZjFhN2Q5NS5qcyc7XG5pbXBvcnQgJy4vZ2VzdHVyZS1jb250cm9sbGVyLTE3ZTgyMDA2LmpzJztcblxuY29uc3QgY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSA9IChlbCwgY2FuU3RhcnRIYW5kbGVyLCBvblN0YXJ0SGFuZGxlciwgb25Nb3ZlSGFuZGxlciwgb25FbmRIYW5kbGVyKSA9PiB7XG4gIGNvbnN0IHdpbiA9IGVsLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIGNvbnN0IHJ0bCA9IGlzUlRMKGVsKTtcbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhIGdlc3R1cmUgaXMgbmVhciB0aGUgZWRnZVxuICAgKiBvZiB0aGUgc2NyZWVuLiBJZiB0cnVlLCB0aGVuIHRoZSBzd2lwZVxuICAgKiB0byBnbyBiYWNrIGdlc3R1cmUgc2hvdWxkIHByb2NlZWQuXG4gICAqL1xuICBjb25zdCBpc0F0RWRnZSA9IChkZXRhaWwpID0+IHtcbiAgICBjb25zdCB0aHJlc2hvbGQgPSA1MDtcbiAgICBjb25zdCB7IHN0YXJ0WCB9ID0gZGV0YWlsO1xuICAgIGlmIChydGwpIHtcbiAgICAgIHJldHVybiBzdGFydFggPj0gd2luLmlubmVyV2lkdGggLSB0aHJlc2hvbGQ7XG4gICAgfVxuICAgIHJldHVybiBzdGFydFggPD0gdGhyZXNob2xkO1xuICB9O1xuICBjb25zdCBnZXREZWx0YVggPSAoZGV0YWlsKSA9PiB7XG4gICAgcmV0dXJuIHJ0bCA/IC1kZXRhaWwuZGVsdGFYIDogZGV0YWlsLmRlbHRhWDtcbiAgfTtcbiAgY29uc3QgZ2V0VmVsb2NpdHlYID0gKGRldGFpbCkgPT4ge1xuICAgIHJldHVybiBydGwgPyAtZGV0YWlsLnZlbG9jaXR5WCA6IGRldGFpbC52ZWxvY2l0eVg7XG4gIH07XG4gIGNvbnN0IGNhblN0YXJ0ID0gKGRldGFpbCkgPT4ge1xuICAgIHJldHVybiBpc0F0RWRnZShkZXRhaWwpICYmIGNhblN0YXJ0SGFuZGxlcigpO1xuICB9O1xuICBjb25zdCBvbk1vdmUgPSAoZGV0YWlsKSA9PiB7XG4gICAgLy8gc2V0IHRoZSB0cmFuc2l0aW9uIGFuaW1hdGlvbidzIHByb2dyZXNzXG4gICAgY29uc3QgZGVsdGEgPSBnZXREZWx0YVgoZGV0YWlsKTtcbiAgICBjb25zdCBzdGVwVmFsdWUgPSBkZWx0YSAvIHdpbi5pbm5lcldpZHRoO1xuICAgIG9uTW92ZUhhbmRsZXIoc3RlcFZhbHVlKTtcbiAgfTtcbiAgY29uc3Qgb25FbmQgPSAoZGV0YWlsKSA9PiB7XG4gICAgLy8gdGhlIHN3aXBlIGJhY2sgZ2VzdHVyZSBoYXMgZW5kZWRcbiAgICBjb25zdCBkZWx0YSA9IGdldERlbHRhWChkZXRhaWwpO1xuICAgIGNvbnN0IHdpZHRoID0gd2luLmlubmVyV2lkdGg7XG4gICAgY29uc3Qgc3RlcFZhbHVlID0gZGVsdGEgLyB3aWR0aDtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IGdldFZlbG9jaXR5WChkZXRhaWwpO1xuICAgIGNvbnN0IHogPSB3aWR0aCAvIDIuMDtcbiAgICBjb25zdCBzaG91bGRDb21wbGV0ZSA9IHZlbG9jaXR5ID49IDAgJiYgKHZlbG9jaXR5ID4gMC4yIHx8IGRlbHRhID4geik7XG4gICAgY29uc3QgbWlzc2luZyA9IHNob3VsZENvbXBsZXRlID8gMSAtIHN0ZXBWYWx1ZSA6IHN0ZXBWYWx1ZTtcbiAgICBjb25zdCBtaXNzaW5nRGlzdGFuY2UgPSBtaXNzaW5nICogd2lkdGg7XG4gICAgbGV0IHJlYWxEdXIgPSAwO1xuICAgIGlmIChtaXNzaW5nRGlzdGFuY2UgPiA1KSB7XG4gICAgICBjb25zdCBkdXIgPSBtaXNzaW5nRGlzdGFuY2UgLyBNYXRoLmFicyh2ZWxvY2l0eSk7XG4gICAgICByZWFsRHVyID0gTWF0aC5taW4oZHVyLCA1NDApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUT0RPOiBzdGVwVmFsdWUgY2FuIHNvbWV0aW1lcyByZXR1cm4gbmVnYXRpdmUgdmFsdWVzXG4gICAgICogb3IgdmFsdWVzIGdyZWF0ZXIgdGhhbiAxIHdoaWNoIHNob3VsZCBub3QgYmUgcG9zc2libGUuXG4gICAgICogTmVlZCB0byBpbnZlc3RpZ2F0ZSBtb3JlIHRvIGZpbmQgd2hlcmUgdGhlIGlzc3VlIGlzLlxuICAgICAqL1xuICAgIG9uRW5kSGFuZGxlcihzaG91bGRDb21wbGV0ZSwgc3RlcFZhbHVlIDw9IDAgPyAwLjAxIDogY2xhbXAoMCwgc3RlcFZhbHVlLCAwLjk5OTkpLCByZWFsRHVyKTtcbiAgfTtcbiAgcmV0dXJuIGNyZWF0ZUdlc3R1cmUoe1xuICAgIGVsLFxuICAgIGdlc3R1cmVOYW1lOiAnZ29iYWNrLXN3aXBlJyxcbiAgICBnZXN0dXJlUHJpb3JpdHk6IDQwLFxuICAgIHRocmVzaG9sZDogMTAsXG4gICAgY2FuU3RhcnQsXG4gICAgb25TdGFydDogb25TdGFydEhhbmRsZXIsXG4gICAgb25Nb3ZlLFxuICAgIG9uRW5kLFxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVN3aXBlQmFja0dlc3R1cmUgfTtcbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiU1FMaXRlIiwiRGF0YWJhc2VTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJzcWxpdGUiLCJjYXRlZ29yaWVzIiwicGVyc29ucyIsImNyZWF0ZURhdGFiYXNlIiwiY3JlYXRlIiwibmFtZSIsImxvY2F0aW9uIiwidGhlbiIsImRiIiwiZGF0YWJhc2VPYmoiLCJjYXRjaCIsImUiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVhdGVUYWJsZXMiLCJleGVjdXRlU3FsIiwidGFibGVzIiwiYWRkQ2F0ZWdvcnkiLCJjb2RlIiwiZ2V0Q2F0ZWdvcmllcyIsInJlcyIsImRlbGV0ZUNhdGVnb3J5IiwiaWQiLCJlZGl0Q2F0ZWdvcnkiLCJhZGRQZXJzb24iLCJjYXRlZ29yeV9pZCIsImdldFBlcnNvbnMiLCJkZWxldGVQZXJzb24iLCJlZGl0UGVyc29uIiwicHJvdmlkZWRJbiIsImMiLCJ3cml0ZVRhc2siLCJoIiwiaGFwdGljU2VsZWN0aW9uRW5kIiwiYSIsImhhcHRpY1NlbGVjdGlvblN0YXJ0IiwiYiIsImhhcHRpY1NlbGVjdGlvbkNoYW5nZWQiLCJjcmVhdGVHZXN0dXJlIiwiY3JlYXRlQnV0dG9uQWN0aXZlR2VzdHVyZSIsImVsIiwiaXNCdXR0b24iLCJjdXJyZW50VG91Y2hlZEJ1dHRvbiIsImluaXRpYWxUb3VjaGVkQnV0dG9uIiwiYWN0aXZhdGVCdXR0b25BdFBvaW50IiwieCIsInkiLCJoYXB0aWNGZWVkYmFja0ZuIiwiZG9jdW1lbnQiLCJ0YXJnZXQiLCJlbGVtZW50RnJvbVBvaW50IiwiY2xlYXJBY3RpdmVCdXR0b24iLCJzZXRBY3RpdmVCdXR0b24iLCJidXR0b24iLCJidXR0b25Ub01vZGlmeSIsImNsYXNzTGlzdCIsImFkZCIsImRpc3BhdGNoQ2xpY2siLCJyZW1vdmUiLCJjbGljayIsInVuZGVmaW5lZCIsImdlc3R1cmVOYW1lIiwidGhyZXNob2xkIiwib25TdGFydCIsImV2IiwiY3VycmVudFgiLCJjdXJyZW50WSIsIm9uTW92ZSIsIm9uRW5kIiwiaXNSVEwiLCJob3N0RWwiLCJkaXIiLCJ0b0xvd2VyQ2FzZSIsImkiLCJJT05fRk9DVVNFRCIsIklPTl9GT0NVU0FCTEUiLCJGT0NVU19LRVlTIiwic3RhcnRGb2N1c1Zpc2libGUiLCJyb290RWwiLCJjdXJyZW50Rm9jdXMiLCJrZXlib2FyZE1vZGUiLCJyZWYiLCJzaGFkb3dSb290Iiwicm9vdCIsImJvZHkiLCJzZXRGb2N1cyIsImVsZW1lbnRzIiwiZm9yRWFjaCIsInBvaW50ZXJEb3duIiwib25LZXlkb3duIiwiaW5jbHVkZXMiLCJrZXkiLCJvbkZvY3VzaW4iLCJjb21wb3NlZFBhdGgiLCJ0b0ZvY3VzIiwiZmlsdGVyIiwiY29udGFpbnMiLCJvbkZvY3Vzb3V0IiwiYWN0aXZlRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudE9uUmVhZHkiLCJhdHRhY2hDb21wb25lbnQiLCJkZWxlZ2F0ZSIsImNvbnRhaW5lciIsImNvbXBvbmVudCIsImNzc0NsYXNzZXMiLCJjb21wb25lbnRQcm9wcyIsImlubGluZSIsIl9hIiwiYXR0YWNoVmlld1RvRG9tIiwiSFRNTEVsZW1lbnQiLCJFcnJvciIsIm93bmVyRG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwiYXBwZW5kQ2hpbGQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImRldGFjaENvbXBvbmVudCIsImVsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlVmlld0Zyb21Eb20iLCJDb3JlRGVsZWdhdGUiLCJCYXNlQ29tcG9uZW50IiwiUmVmZXJlbmNlIiwidXNlckNvbXBvbmVudCIsInVzZXJDb21wb25lbnRQcm9wcyIsIl9iIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJhcHBlbmQiLCJhcHAiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlQ29tbWVudCIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJDIiwiZCIsIkhhcHRpY0VuZ2luZSIsImdldEVuZ2luZSIsIndpbiIsIndpbmRvdyIsIlRhcHRpY0VuZ2luZSIsIkNhcGFjaXRvciIsImlzUGx1Z2luQXZhaWxhYmxlIiwiUGx1Z2lucyIsIkhhcHRpY3MiLCJhdmFpbGFibGUiLCJpc0NvcmRvdmEiLCJpc0NhcGFjaXRvciIsImltcGFjdCIsIm9wdGlvbnMiLCJlbmdpbmUiLCJzdHlsZSIsInRvVXBwZXJDYXNlIiwibm90aWZpY2F0aW9uIiwic2VsZWN0aW9uIiwic2VsZWN0aW9uU3RhcnQiLCJnZXN0dXJlU2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25DaGFuZ2VkIiwiZ2VzdHVyZVNlbGVjdGlvbkNoYW5nZWQiLCJzZWxlY3Rpb25FbmQiLCJnZXN0dXJlU2VsZWN0aW9uRW5kIiwiaGFwdGljU2VsZWN0aW9uIiwiaGFwdGljSW1wYWN0IiwidyIsInByaW50UmVxdWlyZWRFbGVtZW50RXJyb3IiLCJJT05fQ09OVEVOVF9UQUdfTkFNRSIsIklPTl9DT05URU5UX0VMRU1FTlRfU0VMRUNUT1IiLCJJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUiIsIklPTl9DT05URU5UX1NFTEVDVE9SIiwiaXNJb25Db250ZW50IiwidGFnTmFtZSIsImdldFNjcm9sbEVsZW1lbnQiLCJmaW5kSW9uQ29udGVudCIsImN1c3RvbUNvbnRlbnRIb3N0IiwiZmluZENsb3Nlc3RJb25Db250ZW50IiwiY2xvc2VzdCIsInNjcm9sbFRvVG9wIiwiZHVyYXRpb25NcyIsImNvbnRlbnQiLCJzY3JvbGxUbyIsInRvcCIsImxlZnQiLCJiZWhhdmlvciIsInNjcm9sbEJ5UG9pbnQiLCJzY3JvbGxCeSIsInByaW50SW9uQ29udGVudEVycm9yTXNnIiwiZGlzYWJsZUNvbnRlbnRTY3JvbGxZIiwiY29udGVudEVsIiwiaW9uQ29udGVudCIsImluaXRpYWxTY3JvbGxZIiwic2Nyb2xsWSIsInNldFByb3BlcnR5IiwicmVzZXRDb250ZW50U2Nyb2xsWSIsInJlbW92ZVByb3BlcnR5IiwiSSIsImYiLCJnIiwicCIsInIiLCJzIiwiYXJyb3dCYWNrU2hhcnAiLCJhcnJvd0Rvd24iLCJjYXJldEJhY2tTaGFycCIsImNhcmV0RG93blNoYXJwIiwiY2FyZXRVcFNoYXJwIiwiY2hlY2ttYXJrT3V0bGluZSIsImNoZXZyb25CYWNrIiwiY2hldnJvbkRvd24iLCJjaGV2cm9uRm9yd2FyZCIsImNoZXZyb25Gb3J3YXJkT3V0bGluZSIsImNsb3NlIiwiY2xvc2VDaXJjbGUiLCJjbG9zZVNoYXJwIiwiZWxsaXBzZU91dGxpbmUiLCJlbGxpcHNpc0hvcml6b250YWwiLCJtZW51T3V0bGluZSIsIm1lbnVTaGFycCIsInJlbW92ZU91dGxpbmUiLCJyZW9yZGVyVGhyZWVPdXRsaW5lIiwicmVvcmRlclR3b1NoYXJwIiwic2VhcmNoT3V0bGluZSIsInNlYXJjaFNoYXJwIiwiaiIsImsiLCJsIiwibSIsIm4iLCJvIiwicSIsInQiLCJ1IiwidiIsIktFWUJPQVJEX0RJRF9PUEVOIiwiS0VZQk9BUkRfRElEX0NMT1NFIiwiS0VZQk9BUkRfVEhSRVNIT0xEIiwicHJldmlvdXNWaXN1YWxWaWV3cG9ydCIsImN1cnJlbnRWaXN1YWxWaWV3cG9ydCIsImtleWJvYXJkT3BlbiIsInJlc2V0S2V5Ym9hcmRBc3Npc3QiLCJzdGFydEtleWJvYXJkQXNzaXN0Iiwic3RhcnROYXRpdmVMaXN0ZW5lcnMiLCJ2aXN1YWxWaWV3cG9ydCIsImNvcHlWaXN1YWxWaWV3cG9ydCIsIm9ucmVzaXplIiwidHJhY2tWaWV3cG9ydENoYW5nZXMiLCJrZXlib2FyZERpZE9wZW4iLCJrZXlib2FyZERpZFJlc2l6ZSIsInNldEtleWJvYXJkT3BlbiIsImtleWJvYXJkRGlkQ2xvc2UiLCJzZXRLZXlib2FyZENsb3NlIiwiZmlyZUtleWJvYXJkT3BlbkV2ZW50IiwiZmlyZUtleWJvYXJkQ2xvc2VFdmVudCIsInNjYWxlZEhlaWdodERpZmZlcmVuY2UiLCJoZWlnaHQiLCJzY2FsZSIsIndpZHRoIiwiaW5uZXJIZWlnaHQiLCJuYXRpdmVFdiIsImtleWJvYXJkSGVpZ2h0IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJkaXNwYXRjaEV2ZW50IiwiTWF0aCIsInJvdW5kIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsInBhZ2VUb3AiLCJwYWdlTGVmdCIsImNyZWF0ZUtleWJvYXJkQ29udHJvbGxlciIsImtleWJvYXJkQ2hhbmdlQ2FsbGJhY2siLCJrZXlib2FyZFdpbGxTaG93SGFuZGxlciIsImtleWJvYXJkV2lsbEhpZGVIYW5kbGVyIiwia2V5Ym9hcmRWaXNpYmxlIiwiaW5pdCIsImlzS2V5Ym9hcmRWaXNpYmxlIiwic3Bpbm5lcnMiLCJidWJibGVzIiwiZHVyIiwiY2lyY2xlcyIsImZuIiwiaW5kZXgiLCJ0b3RhbCIsImFuaW1hdGlvbkRlbGF5IiwiYW5nbGUiLCJQSSIsInNpbiIsImNvcyIsInN0ZXAiLCJjaXJjdWxhciIsImVsbUR1cmF0aW9uIiwiY3giLCJjeSIsImZpbGwiLCJ2aWV3Qm94IiwidHJhbnNmb3JtIiwiY3Jlc2NlbnQiLCJkb3RzIiwiXyIsImxpbmVzIiwieTEiLCJ5MiIsIlNQSU5ORVJTIiwiUyIsImNsYW1wIiwiY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSIsImNhblN0YXJ0SGFuZGxlciIsIm9uU3RhcnRIYW5kbGVyIiwib25Nb3ZlSGFuZGxlciIsIm9uRW5kSGFuZGxlciIsImRlZmF1bHRWaWV3IiwicnRsIiwiaXNBdEVkZ2UiLCJzdGFydFgiLCJpbm5lcldpZHRoIiwiZ2V0RGVsdGFYIiwiZGVsdGFYIiwiZ2V0VmVsb2NpdHlYIiwidmVsb2NpdHlYIiwiY2FuU3RhcnQiLCJkZWx0YSIsInN0ZXBWYWx1ZSIsInZlbG9jaXR5IiwieiIsInNob3VsZENvbXBsZXRlIiwibWlzc2luZyIsIm1pc3NpbmdEaXN0YW5jZSIsInJlYWxEdXIiLCJhYnMiLCJtaW4iLCJnZXN0dXJlUHJpb3JpdHkiXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyXX0=