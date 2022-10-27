"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mapa_mapa_module_ts"],{

/***/ 5558:
/*!*********************************************!*\
  !*** ./src/app/mapa/mapa-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPageRoutingModule": () => (/* binding */ MapaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapa.page */ 7419);




const routes = [
    {
        path: '',
        component: _mapa_page__WEBPACK_IMPORTED_MODULE_0__.MapaPage
    }
];
let MapaPageRoutingModule = class MapaPageRoutingModule {
};
MapaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapaPageRoutingModule);



/***/ }),

/***/ 964:
/*!*************************************!*\
  !*** ./src/app/mapa/mapa.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPageModule": () => (/* binding */ MapaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mapa_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapa-routing.module */ 5558);
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapa.page */ 7419);








let MapaPageModule = class MapaPageModule {
};
MapaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mapa_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapaPageRoutingModule
        ],
        declarations: [_mapa_page__WEBPACK_IMPORTED_MODULE_1__.MapaPage],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA]
    })
], MapaPageModule);



/***/ }),

/***/ 7419:
/*!***********************************!*\
  !*** ./src/app/mapa/mapa.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPage": () => (/* binding */ MapaPage)
/* harmony export */ });
/* harmony import */ var C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mapa_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapa.page.html?ngResource */ 5119);
/* harmony import */ var _mapa_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapa.page.scss?ngResource */ 4713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/google-maps */ 4822);






let MapaPage = class MapaPage {
  constructor() {}

  ionViewDidEnter() {
    this.createMap();
  }

  createMap() {
    var _this = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.map = yield _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_3__.GoogleMap.create({
        id: 'my-map',
        apiKey: 'environment.mapsKey',
        element: _this.mapRef.nativeElement,
        config: {
          center: {
            lat: 33.6,
            lng: -117.9
          },
          zoom: 8
        }
      });
    })();
  }

  ngOnInit() {}

};

MapaPage.ctorParameters = () => [];

MapaPage.propDecorators = {
  mapRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
    args: ['map']
  }]
};
MapaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-mapa',
  template: _mapa_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_mapa_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MapaPage);


/***/ }),

/***/ 5099:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorCookies": () => (/* binding */ CapacitorCookies),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorHttp": () => (/* binding */ CapacitorHttp),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code, data) {
    super(message);
    this.message = message;
    this.code = code;
    this.data = data;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');
/******** END WEB VIEW PLUGIN ********/

/******** COOKIES PLUGIN ********/

/**
 * Safely web encode a string value (inspired by js-cookie)
 * @param str The string value to encode
 */

const encode = str => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);

class CapacitorCookiesPluginWeb extends WebPlugin {
  setCookie(options) {
    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Safely Encoded Key/Value
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value); // Clean & sanitize options

        const expires = `; expires=${(options.expires || '').replace('expires=', '')}`; // Default is "; expires="

        const path = (options.path || '/').replace('path=', ''); // Default is "path=/"

        document.cookie = `${encodedKey}=${encodedValue || ''}${expires}; path=${path}`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  deleteCookie(options) {
    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  clearCookies() {
    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const cookies = document.cookie.split(';') || [];

        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  clearAllCookies() {
    var _this4 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this4.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

}

const CapacitorCookies = registerPlugin('CapacitorCookies', {
  web: () => new CapacitorCookiesPluginWeb()
}); // UTILITY FUNCTIONS

/**
 * Read in a Blob value and return it as a base64 string
 * @param blob The blob value to convert to a base64 string
 */

const readBlobAsBase64 = /*#__PURE__*/function () {
  var _ref7 = (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result; // remove prefix "data:application/pdf;base64,"

        resolve(base64String.indexOf(',') >= 0 ? base64String.split(',')[1] : base64String);
      };

      reader.onerror = error => reject(error);

      reader.readAsDataURL(blob);
    });
  });

  return function readBlobAsBase64(_x) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Normalize an HttpHeaders map by lowercasing all of the values
 * @param headers The HttpHeaders object to normalize
 */


const normalizeHttpHeaders = (headers = {}) => {
  const originalKeys = Object.keys(headers);
  const loweredKeys = Object.keys(headers).map(k => k.toLocaleLowerCase());
  const normalized = loweredKeys.reduce((acc, key, index) => {
    acc[key] = headers[originalKeys[index]];
    return acc;
  }, {});
  return normalized;
};
/**
 * Builds a string of url parameters that
 * @param params A map of url parameters
 * @param shouldEncode true if you should encodeURIComponent() the values (true by default)
 */


const buildUrlParams = (params, shouldEncode = true) => {
  if (!params) return null;
  const output = Object.entries(params).reduce((accumulator, entry) => {
    const [key, value] = entry;
    let encodedValue;
    let item;

    if (Array.isArray(value)) {
      item = '';
      value.forEach(str => {
        encodedValue = shouldEncode ? encodeURIComponent(str) : str;
        item += `${key}=${encodedValue}&`;
      }); // last character will always be "&" so slice it off

      item.slice(0, -1);
    } else {
      encodedValue = shouldEncode ? encodeURIComponent(value) : value;
      item = `${key}=${encodedValue}`;
    }

    return `${accumulator}&${item}`;
  }, ''); // Remove initial "&" from the reduce

  return output.substr(1);
};
/**
 * Build the RequestInit object based on the options passed into the initial request
 * @param options The Http plugin options
 * @param extra Any extra RequestInit values
 */


const buildRequestInit = (options, extra = {}) => {
  const output = Object.assign({
    method: options.method || 'GET',
    headers: options.headers
  }, extra); // Get the content-type

  const headers = normalizeHttpHeaders(options.headers);
  const type = headers['content-type'] || ''; // If body is already a string, then pass it through as-is.

  if (typeof options.data === 'string') {
    output.body = options.data;
  } // Build request initializers based off of content-type
  else if (type.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(options.data || {})) {
      params.set(key, value);
    }

    output.body = params.toString();
  } else if (type.includes('multipart/form-data')) {
    const form = new FormData();

    if (options.data instanceof FormData) {
      options.data.forEach((value, key) => {
        form.append(key, value);
      });
    } else {
      for (const key of Object.keys(options.data)) {
        form.append(key, options.data[key]);
      }
    }

    output.body = form;
    const headers = new Headers(output.headers);
    headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary

    output.headers = headers;
  } else if (type.includes('application/json') || typeof options.data === 'object') {
    output.body = JSON.stringify(options.data);
  }

  return output;
}; // WEB IMPLEMENTATION


class CapacitorHttpPluginWeb extends WebPlugin {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  request(options) {
    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? `${options.url}?${urlParams}` : options.url;
      const response = yield fetch(url, requestInit);
      const contentType = response.headers.get('content-type') || ''; // Default to 'text' responseType so no parsing happens

      let {
        responseType = 'text'
      } = response.ok ? options : {}; // If the response content-type is json, force the response to be json

      if (contentType.includes('application/json')) {
        responseType = 'json';
      }

      let data;
      let blob;

      switch (responseType) {
        case 'arraybuffer':
        case 'blob':
          blob = yield response.blob();
          data = yield readBlobAsBase64(blob);
          break;

        case 'json':
          data = yield response.json();
          break;

        case 'document':
        case 'text':
        default:
          data = yield response.text();
      } // Convert fetch headers to Capacitor HttpHeaders


      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    })();
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */


  get(options) {
    var _this5 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.request(Object.assign(Object.assign({}, options), {
        method: 'GET'
      }));
    })();
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */


  post(options) {
    var _this6 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.request(Object.assign(Object.assign({}, options), {
        method: 'POST'
      }));
    })();
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */


  put(options) {
    var _this7 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this7.request(Object.assign(Object.assign({}, options), {
        method: 'PUT'
      }));
    })();
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */


  patch(options) {
    var _this8 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this8.request(Object.assign(Object.assign({}, options), {
        method: 'PATCH'
      }));
    })();
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */


  delete(options) {
    var _this9 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this9.request(Object.assign(Object.assign({}, options), {
        method: 'DELETE'
      }));
    })();
  }

}

const CapacitorHttp = registerPlugin('CapacitorHttp', {
  web: () => new CapacitorHttpPluginWeb()
});
/******** END HTTP PLUGIN ********/



/***/ }),

/***/ 5325:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapType": () => (/* binding */ MapType)
/* harmony export */ });
var MapType;

(function (MapType) {
  /**
   * Basic map.
   */
  MapType["Normal"] = "Normal";
  /**
   * Satellite imagery with roads and labels.
   */

  MapType["Hybrid"] = "Hybrid";
  /**
   * Satellite imagery with no labels.
   */

  MapType["Satellite"] = "Satellite";
  /**
   * Topographic data.
   */

  MapType["Terrain"] = "Terrain";
  /**
   * No base map tiles.
   */

  MapType["None"] = "None";
})(MapType || (MapType = {}));

/***/ }),

/***/ 1819:
/*!************************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/implementation.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapacitorGoogleMaps": () => (/* binding */ CapacitorGoogleMaps)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);

const CapacitorGoogleMaps = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('CapacitorGoogleMaps', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_google-maps_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 601)).then(m => new m.CapacitorGoogleMapsWeb())
});
CapacitorGoogleMaps.addListener('isMapInFocus', data => {
  var _a;

  const x = data.x;
  const y = data.y;
  const elem = document.elementFromPoint(x, y);
  const internalId = (_a = elem === null || elem === void 0 ? void 0 : elem.dataset) === null || _a === void 0 ? void 0 : _a.internalId;
  const mapInFocus = internalId === data.mapId;
  CapacitorGoogleMaps.dispatchMapEvent({
    id: data.mapId,
    focus: mapInFocus
  });
});


/***/ }),

/***/ 4822:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* reexport safe */ _map__WEBPACK_IMPORTED_MODULE_1__.GoogleMap),
/* harmony export */   "MapType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_0__.MapType)
/* harmony export */ });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ 5325);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ 8968);
/* eslint-disable @typescript-eslint/no-namespace */




/***/ }),

/***/ 8968:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/map.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* binding */ GoogleMap)
/* harmony export */ });
/* harmony import */ var C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./implementation */ 1819);




class MapCustomElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'ios') {
      this.style.overflow = 'scroll';
      this.style['-webkit-overflow-scrolling'] = 'touch';
      const overflowDiv = document.createElement('div');
      overflowDiv.style.height = '200%';
      this.appendChild(overflowDiv);
    }
  }

}

customElements.define('capacitor-google-map', MapCustomElement);
class GoogleMap {
  constructor(id) {
    this.element = null;

    this.handleScrollEvent = () => this.updateMapBounds();

    this.id = id;
  }
  /**
   * Creates a new instance of a Google Map
   * @param options
   * @param callback
   * @returns GoogleMap
   */


  static create(options, callback) {
    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const newMap = new GoogleMap(options.id);

      if (!options.element) {
        throw new Error('container element is required');
      }

      if (options.config.androidLiteMode === undefined) {
        options.config.androidLiteMode = false;
      }

      newMap.element = options.element;
      newMap.element.dataset.internalId = options.id;
      const elementBounds = options.element.getBoundingClientRect();
      options.config.width = elementBounds.width;
      options.config.height = elementBounds.height;
      options.config.x = elementBounds.x;
      options.config.y = elementBounds.y;
      options.config.devicePixelRatio = window.devicePixelRatio;

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        newMap.initScrolling();
      }

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform()) {
        options.element = {};
      }

      yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.create(options);

      if (callback) {
        const onMapReadyListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMapReady', data => {
          if (data.mapId == newMap.id) {
            callback(data);
            onMapReadyListener.remove();
          }
        });
      }

      return newMap;
    })();
  }
  /**
   * Enable marker clustering
   *
   * @returns void
   */


  enableClustering() {
    var _this = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableClustering({
        id: _this.id
      });
    })();
  }
  /**
   * Disable marker clustering
   *
   * @returns void
   */


  disableClustering() {
    var _this2 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.disableClustering({
        id: _this2.id
      });
    })();
  }
  /**
   * Adds a marker to the map
   *
   * @param marker
   * @returns created marker id
   */


  addMarker(marker) {
    var _this3 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addMarker({
        id: _this3.id,
        marker
      });
      return res.id;
    })();
  }
  /**
   * Adds multiple markers to the map
   *
   * @param markers
   * @returns array of created marker IDs
   */


  addMarkers(markers) {
    var _this4 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addMarkers({
        id: _this4.id,
        markers
      });
      return res.ids;
    })();
  }
  /**
   * Remove marker from the map
   *
   * @param id id of the marker to remove from the map
   * @returns
   */


  removeMarker(id) {
    var _this5 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.removeMarker({
        id: _this5.id,
        markerId: id
      });
    })();
  }
  /**
   * Remove markers from the map
   *
   * @param ids array of ids to remove from the map
   * @returns
   */


  removeMarkers(ids) {
    var _this6 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.removeMarkers({
        id: _this6.id,
        markerIds: ids
      });
    })();
  }
  /**
   * Destroy the current instance of the map
   */


  destroy() {
    var _this7 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        _this7.disableScrolling();
      }

      _this7.removeAllMapListeners();

      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.destroy({
        id: _this7.id
      });
    })();
  }
  /**
   * Update the map camera configuration
   *
   * @param config
   * @returns
   */


  setCamera(config) {
    var _this8 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.setCamera({
        id: _this8.id,
        config
      });
    })();
  }
  /**
   * Sets the type of map tiles that should be displayed.
   *
   * @param mapType
   * @returns
   */


  setMapType(mapType) {
    var _this9 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.setMapType({
        id: _this9.id,
        mapType
      });
    })();
  }
  /**
   * Sets whether indoor maps are shown, where available.
   *
   * @param enabled
   * @returns
   */


  enableIndoorMaps(enabled) {
    var _this10 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableIndoorMaps({
        id: _this10.id,
        enabled
      });
    })();
  }
  /**
   * Controls whether the map is drawing traffic data, if available.
   *
   * @param enabled
   * @returns
   */


  enableTrafficLayer(enabled) {
    var _this11 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableTrafficLayer({
        id: _this11.id,
        enabled
      });
    })();
  }
  /**
   * Show accessibility elements for overlay objects, such as Marker and Polyline.
   *
   * Only available on iOS.
   *
   * @param enabled
   * @returns
   */


  enableAccessibilityElements(enabled) {
    var _this12 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableAccessibilityElements({
        id: _this12.id,
        enabled
      });
    })();
  }
  /**
   * Set whether the My Location dot and accuracy circle is enabled.
   *
   * @param enabled
   * @returns
   */


  enableCurrentLocation(enabled) {
    var _this13 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableCurrentLocation({
        id: _this13.id,
        enabled
      });
    })();
  }
  /**
   * Set padding on the 'visible' region of the view.
   *
   * @param padding
   * @returns
   */


  setPadding(padding) {
    var _this14 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.setPadding({
        id: _this14.id,
        padding
      });
    })();
  }
  /**
   * Get the map's current viewport latitude and longitude bounds.
   *
   * @returns {LatLngBounds}
   */


  getMapBounds() {
    var _this15 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.getMapBounds({
        id: _this15.id
      });
    })();
  }

  initScrolling() {
    const ionContents = document.getElementsByTagName('ion-content'); // eslint-disable-next-line @typescript-eslint/prefer-for-of

    for (let i = 0; i < ionContents.length; i++) {
      ionContents[i].scrollEvents = true;
    }

    window.addEventListener('ionScroll', this.handleScrollEvent);
    window.addEventListener('scroll', this.handleScrollEvent);
    window.addEventListener('resize', this.handleScrollEvent);

    if (screen.orientation) {
      screen.orientation.addEventListener('change', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    } else {
      window.addEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    }
  }

  disableScrolling() {
    window.removeEventListener('ionScroll', this.handleScrollEvent);
    window.removeEventListener('scroll', this.handleScrollEvent);
    window.removeEventListener('resize', this.handleScrollEvent);

    if (screen.orientation) {
      screen.orientation.removeEventListener('change', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    } else {
      window.removeEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    }
  }

  updateMapBounds() {
    if (this.element) {
      const mapRect = this.element.getBoundingClientRect();
      _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.onScroll({
        id: this.id,
        mapBounds: {
          x: mapRect.x,
          y: mapRect.y,
          width: mapRect.width,
          height: mapRect.height
        }
      });
    }
  }
  /*
  private findContainerElement(): HTMLElement | null {
    if (!this.element) {
      return null;
    }
       let parentElement = this.element.parentElement;
    while (parentElement !== null) {
      if (window.getComputedStyle(parentElement).overflowY !== 'hidden') {
        return parentElement;
      }
         parentElement = parentElement.parentElement;
    }
       return null;
  }
  */

  /**
   * Set the event listener on the map for 'onCameraIdle' events.
   *
   * @param callback
   * @returns
   */


  setOnCameraIdleListener(callback) {
    var _this16 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this16.onCameraIdleListener) {
        _this16.onCameraIdleListener.remove();
      }

      if (callback) {
        _this16.onCameraIdleListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onCameraIdle', _this16.generateCallback(callback));
      } else {
        _this16.onCameraIdleListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onBoundsChanged' events.
   *
   * @param callback
   * @returns
   */


  setOnBoundsChangedListener(callback) {
    var _this17 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this17.onBoundsChangedListener) {
        _this17.onBoundsChangedListener.remove();
      }

      if (callback) {
        _this17.onBoundsChangedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onBoundsChanged', _this17.generateCallback(callback));
      } else {
        _this17.onBoundsChangedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onCameraMoveStarted' events.
   *
   * @param callback
   * @returns
   */


  setOnCameraMoveStartedListener(callback) {
    var _this18 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this18.onCameraMoveStartedListener) {
        _this18.onCameraMoveStartedListener.remove();
      }

      if (callback) {
        _this18.onCameraMoveStartedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onCameraMoveStarted', _this18.generateCallback(callback));
      } else {
        _this18.onCameraMoveStartedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterClick' events.
   *
   * @param callback
   * @returns
   */


  setOnClusterClickListener(callback) {
    var _this19 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this19.onClusterClickListener) {
        _this19.onClusterClickListener.remove();
      }

      if (callback) {
        _this19.onClusterClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onClusterClick', _this19.generateCallback(callback));
      } else {
        _this19.onClusterClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */


  setOnClusterInfoWindowClickListener(callback) {
    var _this20 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this20.onClusterInfoWindowClickListener) {
        _this20.onClusterInfoWindowClickListener.remove();
      }

      if (callback) {
        _this20.onClusterInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onClusterInfoWindowClick', _this20.generateCallback(callback));
      } else {
        _this20.onClusterInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */


  setOnInfoWindowClickListener(callback) {
    var _this21 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this21.onInfoWindowClickListener) {
        _this21.onInfoWindowClickListener.remove();
      }

      if (callback) {
        _this21.onInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onInfoWindowClick', _this21.generateCallback(callback));
      } else {
        _this21.onInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMapClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMapClickListener(callback) {
    var _this22 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this22.onMapClickListener) {
        _this22.onMapClickListener.remove();
      }

      if (callback) {
        _this22.onMapClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMapClick', _this22.generateCallback(callback));
      } else {
        _this22.onMapClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerClickListener(callback) {
    var _this23 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this23.onMarkerClickListener) {
        _this23.onMarkerClickListener.remove();
      }

      if (callback) {
        _this23.onMarkerClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMarkerClick', _this23.generateCallback(callback));
      } else {
        _this23.onMarkerClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDragStart' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragStartListener(callback) {
    var _this24 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this24.onMarkerDragStartListener) {
        _this24.onMarkerDragStartListener.remove();
      }

      if (callback) {
        _this24.onMarkerDragStartListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMarkerDragStart', _this24.generateCallback(callback));
      } else {
        _this24.onMarkerDragStartListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDrag' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragListener(callback) {
    var _this25 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this25.onMarkerDragListener) {
        _this25.onMarkerDragListener.remove();
      }

      if (callback) {
        _this25.onMarkerDragListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMarkerDrag', _this25.generateCallback(callback));
      } else {
        _this25.onMarkerDragListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDragEnd' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragEndListener(callback) {
    var _this26 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this26.onMarkerDragEndListener) {
        _this26.onMarkerDragEndListener.remove();
      }

      if (callback) {
        _this26.onMarkerDragEndListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMarkerDragEnd', _this26.generateCallback(callback));
      } else {
        _this26.onMarkerDragEndListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationButtonClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMyLocationButtonClickListener(callback) {
    var _this27 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this27.onMyLocationButtonClickListener) {
        _this27.onMyLocationButtonClickListener.remove();
      }

      if (callback) {
        _this27.onMyLocationButtonClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMyLocationButtonClick', _this27.generateCallback(callback));
      } else {
        _this27.onMyLocationButtonClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMyLocationClickListener(callback) {
    var _this28 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this28.onMyLocationClickListener) {
        _this28.onMyLocationClickListener.remove();
      }

      if (callback) {
        _this28.onMyLocationClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMyLocationClick', _this28.generateCallback(callback));
      } else {
        _this28.onMyLocationClickListener = undefined;
      }
    })();
  }
  /**
   * Remove all event listeners on the map.
   *
   * @param callback
   * @returns
   */


  removeAllMapListeners() {
    var _this29 = this;

    return (0,C_Users_evild_Documents_Repositorio_repo_appProyectoMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this29.onBoundsChangedListener) {
        _this29.onBoundsChangedListener.remove();

        _this29.onBoundsChangedListener = undefined;
      }

      if (_this29.onCameraIdleListener) {
        _this29.onCameraIdleListener.remove();

        _this29.onCameraIdleListener = undefined;
      }

      if (_this29.onCameraMoveStartedListener) {
        _this29.onCameraMoveStartedListener.remove();

        _this29.onCameraMoveStartedListener = undefined;
      }

      if (_this29.onClusterClickListener) {
        _this29.onClusterClickListener.remove();

        _this29.onClusterClickListener = undefined;
      }

      if (_this29.onClusterInfoWindowClickListener) {
        _this29.onClusterInfoWindowClickListener.remove();

        _this29.onClusterInfoWindowClickListener = undefined;
      }

      if (_this29.onInfoWindowClickListener) {
        _this29.onInfoWindowClickListener.remove();

        _this29.onInfoWindowClickListener = undefined;
      }

      if (_this29.onMapClickListener) {
        _this29.onMapClickListener.remove();

        _this29.onMapClickListener = undefined;
      }

      if (_this29.onMarkerClickListener) {
        _this29.onMarkerClickListener.remove();

        _this29.onMarkerClickListener = undefined;
      }

      if (_this29.onMyLocationButtonClickListener) {
        _this29.onMyLocationButtonClickListener.remove();

        _this29.onMyLocationButtonClickListener = undefined;
      }

      if (_this29.onMyLocationClickListener) {
        _this29.onMyLocationClickListener.remove();

        _this29.onMyLocationClickListener = undefined;
      }
    })();
  }

  generateCallback(callback) {
    const mapId = this.id;
    return data => {
      if (data.mapId == mapId) {
        callback(data);
      }
    };
  }

}

/***/ }),

/***/ 4713:
/*!************************************************!*\
  !*** ./src/app/mapa/mapa.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXBhLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5119:
/*!************************************************!*\
  !*** ./src/app/mapa/mapa.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Google Maps</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <capacitor-google-map #map></capacitor-google-map>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_mapa_mapa_module_ts.js.map