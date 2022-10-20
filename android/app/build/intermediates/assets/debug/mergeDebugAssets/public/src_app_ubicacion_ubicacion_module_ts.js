"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ubicacion_ubicacion_module_ts"],{

/***/ 3468:
/*!*******************************************************!*\
  !*** ./src/app/ubicacion/ubicacion-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UbicacionPageRoutingModule": () => (/* binding */ UbicacionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ubicacion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ubicacion.page */ 132);




const routes = [
    {
        path: '',
        component: _ubicacion_page__WEBPACK_IMPORTED_MODULE_0__.UbicacionPage
    }
];
let UbicacionPageRoutingModule = class UbicacionPageRoutingModule {
};
UbicacionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UbicacionPageRoutingModule);



/***/ }),

/***/ 7922:
/*!***********************************************!*\
  !*** ./src/app/ubicacion/ubicacion.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UbicacionPageModule": () => (/* binding */ UbicacionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ubicacion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ubicacion-routing.module */ 3468);
/* harmony import */ var _ubicacion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ubicacion.page */ 132);







let UbicacionPageModule = class UbicacionPageModule {
};
UbicacionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ubicacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.UbicacionPageRoutingModule
        ],
        declarations: [_ubicacion_page__WEBPACK_IMPORTED_MODULE_1__.UbicacionPage]
    })
], UbicacionPageModule);



/***/ }),

/***/ 132:
/*!*********************************************!*\
  !*** ./src/app/ubicacion/ubicacion.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UbicacionPage": () => (/* binding */ UbicacionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ubicacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ubicacion.page.html?ngResource */ 8492);
/* harmony import */ var _ubicacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ubicacion.page.scss?ngResource */ 328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 6457);





let UbicacionPage = class UbicacionPage {
    constructor(geolocation) {
        this.geolocation = geolocation;
    }
    ngOnInit() {
        this.geolocationNative();
    }
    geolocationNative() {
        this.geolocation.getCurrentPosition().then((geposition) => {
            console.log(geposition);
            this.ubicacion = geposition;
            console.log('ubicacion', this.ubicacion);
        });
    }
};
UbicacionPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation }
];
UbicacionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ubicacion',
        template: _ubicacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ubicacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UbicacionPage);



/***/ }),

/***/ 5400:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/awesome-cordova-plugin.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* binding */ AwesomeCordovaNativePlugin)
/* harmony export */ });
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/common */ 2474);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 8219);



var AwesomeCordovaNativePlugin =
/** @class */
function () {
  function AwesomeCordovaNativePlugin() {}
  /**
   * Returns a boolean that indicates whether the plugin is installed
   *
   * @returns {boolean}
   */


  AwesomeCordovaNativePlugin.installed = function () {
    var isAvailable = (0,_decorators_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(this.pluginRef) === true;
    return isAvailable;
  };
  /**
   * Returns the original plugin object
   */


  AwesomeCordovaNativePlugin.getPlugin = function () {
    if (typeof window !== 'undefined') {
      return (0,_util__WEBPACK_IMPORTED_MODULE_1__.get)(window, this.pluginRef);
    }

    return null;
  };
  /**
   * Returns the plugin's name
   */


  AwesomeCordovaNativePlugin.getPluginName = function () {
    var pluginName = this.pluginName;
    return pluginName;
  };
  /**
   * Returns the plugin's reference
   */


  AwesomeCordovaNativePlugin.getPluginRef = function () {
    var pluginRef = this.pluginRef;
    return pluginRef;
  };
  /**
   * Returns the plugin's install name
   */


  AwesomeCordovaNativePlugin.getPluginInstallName = function () {
    var plugin = this.plugin;
    return plugin;
  };
  /**
   * Returns the plugin's supported platforms
   */


  AwesomeCordovaNativePlugin.getSupportedPlatforms = function () {
    var platform = this.platforms;
    return platform;
  };

  AwesomeCordovaNativePlugin.pluginName = '';
  AwesomeCordovaNativePlugin.pluginRef = '';
  AwesomeCordovaNativePlugin.plugin = '';
  AwesomeCordovaNativePlugin.repo = '';
  AwesomeCordovaNativePlugin.platforms = [];
  AwesomeCordovaNativePlugin.install = '';
  return AwesomeCordovaNativePlugin;
}();



/***/ }),

/***/ 3512:
/*!******************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/bootstrap.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkReady": () => (/* binding */ checkReady)
/* harmony export */ });
/**
 *
 */
function checkReady() {
  if (typeof process === 'undefined') {
    var win_1 = typeof window !== 'undefined' ? window : {};
    var DEVICE_READY_TIMEOUT_1 = 5000; // To help developers using cordova, we listen for the device ready event and
    // log an error if it didn't fire in a reasonable amount of time. Generally,
    // when this happens, developers should remove and reinstall plugins, since
    // an inconsistent plugin is often the culprit.

    var before_1 = Date.now();
    var didFireReady_1 = false;
    win_1.document.addEventListener('deviceready', function () {
      console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
      didFireReady_1 = true;
    });
    setTimeout(function () {
      if (!didFireReady_1 && win_1.cordova) {
        console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
      }
    }, DEVICE_READY_TIMEOUT_1);
  }
}

/***/ }),

/***/ 2474:
/*!**************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/common.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERR_CORDOVA_NOT_AVAILABLE": () => (/* binding */ ERR_CORDOVA_NOT_AVAILABLE),
/* harmony export */   "ERR_PLUGIN_NOT_INSTALLED": () => (/* binding */ ERR_PLUGIN_NOT_INSTALLED),
/* harmony export */   "callCordovaPlugin": () => (/* binding */ callCordovaPlugin),
/* harmony export */   "callInstance": () => (/* binding */ callInstance),
/* harmony export */   "checkAvailability": () => (/* binding */ checkAvailability),
/* harmony export */   "cordovaWarn": () => (/* binding */ cordovaWarn),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPlugin": () => (/* binding */ getPlugin),
/* harmony export */   "getPromise": () => (/* binding */ getPromise),
/* harmony export */   "instanceAvailability": () => (/* binding */ instanceAvailability),
/* harmony export */   "pluginWarn": () => (/* binding */ pluginWarn),
/* harmony export */   "setIndex": () => (/* binding */ setIndex),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapInstance": () => (/* binding */ wrapInstance),
/* harmony export */   "wrapPromise": () => (/* binding */ wrapPromise)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6312);

var ERR_CORDOVA_NOT_AVAILABLE = {
  error: 'cordova_not_available'
};
var ERR_PLUGIN_NOT_INSTALLED = {
  error: 'plugin_not_installed'
};
/**
 * @param callback
 */

function getPromise(callback) {
  var tryNativePromise = function () {
    if (Promise) {
      return new Promise(function (resolve, reject) {
        callback(resolve, reject);
      });
    } else {
      console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
    }
  };

  if (typeof window !== 'undefined' && window.angular) {
    var doc = window.document;
    var injector = window.angular.element(doc.querySelector('[ng-app]') || doc.body).injector();

    if (injector) {
      var $q = injector.get('$q');
      return $q(function (resolve, reject) {
        callback(resolve, reject);
      });
    }

    console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
  }

  return tryNativePromise();
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */

function wrapPromise(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var pluginResult, rej;
  var p = getPromise(function (resolve, reject) {
    if (opts.destruct) {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return resolve(args);
      }, function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return reject(args);
      });
    } else {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
    }

    rej = reject;
  }); // Angular throws an error on unhandled rejection, but in this case we have already printed
  // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
  // to error

  if (pluginResult && pluginResult.error) {
    p.catch(function () {});
    typeof rej === 'function' && rej(pluginResult.error);
  }

  return p;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */

function wrapOtherPromise(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return getPromise(function (resolve, reject) {
    var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);

    if (pluginResult) {
      if (pluginResult.error) {
        reject(pluginResult.error);
      } else if (pluginResult.then) {
        pluginResult.then(resolve).catch(reject);
      }
    } else {
      reject({
        error: 'unexpected_error'
      });
    }
  });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */


function wrapObservable(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
    var pluginResult;

    if (opts.destruct) {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return observer.next(args);
      }, function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return observer.error(args);
      });
    } else {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
    }

    if (pluginResult && pluginResult.error) {
      observer.error(pluginResult.error);
      observer.complete();
    }

    return function () {
      try {
        if (opts.clearFunction) {
          if (opts.clearWithArgs) {
            return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
          }

          return callCordovaPlugin(pluginObj, opts.clearFunction, []);
        }
      } catch (e) {
        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
        console.warn(e);
      }
    };
  });
}
/**
 * Wrap the event with an observable
 *
 * @private
 * @param event event name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */


function wrapEventObservable(event, element) {
  element = typeof window !== 'undefined' && element ? get(window, element) : element || (typeof window !== 'undefined' ? window : {});
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(element, event);
}
/**
 * @param plugin
 * @param methodName
 * @param pluginName
 */


function checkAvailability(plugin, methodName, pluginName) {
  var pluginRef, pluginPackage;

  if (typeof plugin === 'string') {
    pluginRef = plugin;
  } else {
    pluginRef = plugin.constructor.getPluginRef();
    pluginName = plugin.constructor.getPluginName();
    pluginPackage = plugin.constructor.getPluginInstallName();
  }

  var pluginInstance = getPlugin(pluginRef);

  if (!pluginInstance || !!methodName && typeof pluginInstance[methodName] === 'undefined') {
    if (typeof window === 'undefined' || !window.cordova) {
      cordovaWarn(pluginName, methodName);
      return ERR_CORDOVA_NOT_AVAILABLE;
    }

    pluginWarn(pluginName, pluginPackage, methodName);
    return ERR_PLUGIN_NOT_INSTALLED;
  }

  return true;
}
/**
 * Checks if _objectInstance exists and has the method/property
 *
 * @param pluginObj
 * @param methodName
 * @private
 */

function instanceAvailability(pluginObj, methodName) {
  return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
}
/**
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */

function setIndex(args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  } // ignore resolve and reject in case sync


  if (opts.sync) {
    return args;
  } // If the plugin method expects myMethod(success, err, options)


  if (opts.callbackOrder === 'reverse') {
    // Get those arguments in the order [resolve, reject, ...restOfArgs]
    args.unshift(reject);
    args.unshift(resolve);
  } else if (opts.callbackStyle === 'node') {
    args.push(function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  } else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
    var obj = {};
    obj[opts.successName] = resolve;
    obj[opts.errorName] = reject;
    args.push(obj);
  } else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
    var setSuccessIndex = function () {
      // If we've specified a success/error index
      if (opts.successIndex > args.length) {
        args[opts.successIndex] = resolve;
      } else {
        args.splice(opts.successIndex, 0, resolve);
      }
    };

    var setErrorIndex = function () {
      // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
      // defined and thus causing non expected behavior.
      if (opts.errorIndex > args.length) {
        args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
      } else {
        args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
      }
    };

    if (opts.successIndex > opts.errorIndex) {
      setErrorIndex();
      setSuccessIndex();
    } else {
      setSuccessIndex();
      setErrorIndex();
    }
  } else {
    // Otherwise, let's tack them on to the end of the argument list
    // which is 90% of cases
    args.push(resolve);
    args.push(reject);
  }

  return args;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */

function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  } // Try to figure out where the success/error callbacks need to be bound
  // to our promise resolve/reject handlers.


  args = setIndex(args, opts, resolve, reject);
  var availabilityCheck = checkAvailability(pluginObj, methodName);

  if (availabilityCheck === true) {
    var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef()); // eslint-disable-next-line prefer-spread

    return pluginInstance[methodName].apply(pluginInstance, args);
  } else {
    return availabilityCheck;
  }
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */

function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  }

  args = setIndex(args, opts, resolve, reject);

  if (instanceAvailability(pluginObj, methodName)) {
    // eslint-disable-next-line prefer-spread
    return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
  }
}
/**
 * @param pluginRef
 */

function getPlugin(pluginRef) {
  if (typeof window !== 'undefined') {
    return get(window, pluginRef);
  }

  return null;
}
/**
 * @param element
 * @param path
 */

function get(element, path) {
  var paths = path.split('.');
  var obj = element;

  for (var i = 0; i < paths.length; i++) {
    if (!obj) {
      return null;
    }

    obj = obj[paths[i]];
  }

  return obj;
}
/**
 * @param pluginName
 * @param plugin
 * @param method
 */

function pluginWarn(pluginName, plugin, method) {
  if (method) {
    console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
  } else {
    console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
  }

  if (plugin) {
    console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
  }
}
/**
 * @private
 * @param pluginName
 * @param method
 */

function cordovaWarn(pluginName, method) {
  if (typeof process === 'undefined') {
    if (method) {
      console.warn('Native: tried calling ' + pluginName + '.' + method + ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    } else {
      console.warn('Native: tried accessing the ' + pluginName + ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    }
  }
}
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */

var wrap = function (pluginObj, methodName, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (opts.sync) {
      // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
      return callCordovaPlugin(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return wrapObservable(pluginObj, methodName, args, opts);
    } else if (opts.eventObservable && opts.event) {
      return wrapEventObservable(opts.event, opts.element);
    } else if (opts.otherPromise) {
      return wrapOtherPromise(pluginObj, methodName, args, opts);
    } else {
      return wrapPromise(pluginObj, methodName, args, opts);
    }
  };
};
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */

function wrapInstance(pluginObj, methodName, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (opts.sync) {
      return callInstance(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var pluginResult;

        if (opts.destruct) {
          pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return observer.next(args);
          }, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return observer.error(args);
          });
        } else {
          pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }

        if (pluginResult && pluginResult.error) {
          observer.error(pluginResult.error);
        }

        return function () {
          try {
            if (opts.clearWithArgs) {
              return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
            }

            return callInstance(pluginObj, opts.clearFunction, []);
          } catch (e) {
            console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
            console.warn(e);
          }
        };
      });
    } else if (opts.otherPromise) {
      return getPromise(function (resolve, reject) {
        var result;

        if (opts.destruct) {
          result = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return resolve(args);
          }, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return reject(args);
          });
        } else {
          result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
        }

        if (result && result.then) {
          result.then(resolve, reject);
        } else {
          reject();
        }
      });
    } else {
      var pluginResult_1, rej_1;
      var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
          pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return resolve(args);
          }, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return reject(args);
          });
        } else {
          pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
        }

        rej_1 = reject;
      }); // Angular throws an error on unhandled rejection, but in this case we have already printed
      // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
      // to error

      if (pluginResult_1 && pluginResult_1.error) {
        p.catch(function () {});
        typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
      }

      return p;
    }
  };
}

/***/ }),

/***/ 1485:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-function-override.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaFunctionOverride": () => (/* binding */ cordovaFunctionOverride)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 2474);


/**
 * @param pluginObj
 * @param methodName
 */

function overrideFunction(pluginObj, methodName) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
    var availabilityCheck = (0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, methodName);

    if (availabilityCheck === true) {
      var pluginInstance_1 = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef());
      pluginInstance_1[methodName] = observer.next.bind(observer);
      return function () {
        return pluginInstance_1[methodName] = function () {};
      };
    } else {
      observer.error(availabilityCheck);
      observer.complete();
    }
  });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 */


function cordovaFunctionOverride(pluginObj, methodName, args) {
  if (args === void 0) {
    args = [];
  }

  return overrideFunction(pluginObj, methodName);
}

/***/ }),

/***/ 5084:
/*!************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-instance.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaInstance": () => (/* binding */ cordovaInstance)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 2474);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */

function cordovaInstance(pluginObj, methodName, config, args) {
  args = Array.from(args);
  return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrapInstance)(pluginObj, methodName, config).apply(this, args);
}

/***/ }),

/***/ 1830:
/*!************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-property.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaPropertyGet": () => (/* binding */ cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* binding */ cordovaPropertySet)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 2474);

/**
 * @param pluginObj
 * @param key
 */

function cordovaPropertyGet(pluginObj, key) {
  if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key];
  }

  return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */

function cordovaPropertySet(pluginObj, key, value) {
  if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
    (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key] = value;
  }
}

/***/ }),

/***/ 4461:
/*!***************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordova": () => (/* binding */ cordova)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 2474);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */

function cordova(pluginObj, methodName, config, args) {
  return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrap)(pluginObj, methodName, config).apply(this, args);
}

/***/ }),

/***/ 6936:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/instance-property.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instancePropertyGet": () => (/* binding */ instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* binding */ instancePropertySet)
/* harmony export */ });
/**
 * @param pluginObj
 * @param key
 */
function instancePropertyGet(pluginObj, key) {
  if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
    return pluginObj._objectInstance[key];
  }

  return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */

function instancePropertySet(pluginObj, key, value) {
  if (pluginObj._objectInstance) {
    pluginObj._objectInstance[key] = value;
  }
}

/***/ }),

/***/ 3142:
/*!******************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/interfaces.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4624:
/*!**************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* reexport safe */ _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__.AwesomeCordovaNativePlugin),
/* harmony export */   "checkAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.checkAvailability),
/* harmony export */   "cordova": () => (/* reexport safe */ _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__.cordova),
/* harmony export */   "cordovaFunctionOverride": () => (/* reexport safe */ _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__.cordovaFunctionOverride),
/* harmony export */   "cordovaInstance": () => (/* reexport safe */ _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__.cordovaInstance),
/* harmony export */   "cordovaPropertyGet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertySet),
/* harmony export */   "getPromise": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.getPromise),
/* harmony export */   "instanceAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.instanceAvailability),
/* harmony export */   "instancePropertyGet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertySet),
/* harmony export */   "wrap": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.wrap)
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ 3512);
/* harmony import */ var _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awesome-cordova-plugin */ 5400);
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/common */ 2474);
/* harmony import */ var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/cordova */ 4461);
/* harmony import */ var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/cordova-function-override */ 1485);
/* harmony import */ var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/cordova-instance */ 5084);
/* harmony import */ var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/cordova-property */ 1830);
/* harmony import */ var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/instance-property */ 6936);
/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/interfaces */ 3142);

 // Decorators








(0,_bootstrap__WEBPACK_IMPORTED_MODULE_0__.checkReady)();

/***/ }),

/***/ 8219:
/*!*************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/util.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPromise": () => (/* binding */ getPromise)
/* harmony export */ });
/**
 * @param element
 * @param path
 * @private
 */
function get(element, path) {
  var paths = path.split('.');
  var obj = element;

  for (var i = 0; i < paths.length; i++) {
    if (!obj) {
      return null;
    }

    obj = obj[paths[i]];
  }

  return obj;
}
/**
 * @param callback
 * @private
 */

function getPromise(callback) {
  if (callback === void 0) {
    callback = function () {};
  }

  var tryNativePromise = function () {
    if (typeof Promise === 'function' || typeof window !== 'undefined' && window.Promise) {
      return new Promise(function (resolve, reject) {
        callback(resolve, reject);
      });
    } else {
      console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
    }
  };

  return tryNativePromise();
}

/***/ }),

/***/ 6457:
/*!*************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/geolocation/__ivy_ngcc__/ngx/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 4624);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2378);






var Geolocation =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Geolocation, _super);

  function Geolocation() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Geolocation.prototype.getCurrentPosition = function (options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getCurrentPosition", {
      "callbackOrder": "reverse"
    }, arguments);
  };
  /**
   * Watch the current device's position.  Clear the watch by unsubscribing from
   * Observable changes.
   *
   * ```typescript
   * const subscription = this.geolocation.watchPosition()
   *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
   *                               .subscribe(position => {
   *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
   * });
   *
   * // To stop notifications
   * subscription.unsubscribe();
   * ```
   *
   * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
   * @returns {Observable<Geoposition | PositionError>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
   */


  Geolocation.prototype.watchPosition = function (options) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(function (observer) {
      var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
      return function () {
        return navigator.geolocation.clearWatch(watchId);
      };
    });
  };

  Geolocation.pluginName = "Geolocation";
  Geolocation.plugin = "cordova-plugin-geolocation";
  Geolocation.pluginRef = "navigator.geolocation";
  Geolocation.repo = "https://github.com/apache/cordova-plugin-geolocation";
  Geolocation.install = "ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION=\"To locate you\"";
  Geolocation.installVariables = ["GEOLOCATION_USAGE_DESCRIPTION"];
  Geolocation.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];

  Geolocation.ɵfac = /*@__PURE__*/function () {
    var ɵGeolocation_BaseFactory;
    return function Geolocation_Factory(t) {
      return (ɵGeolocation_BaseFactory || (ɵGeolocation_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](Geolocation)))(t || Geolocation);
    };
  }();

  Geolocation.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: Geolocation,
    factory: function (t) {
      return Geolocation.ɵfac(t);
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Geolocation, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
    }], null, null);
  })();

  return Geolocation;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);



/***/ }),

/***/ 328:
/*!**********************************************************!*\
  !*** ./src/app/ubicacion/ubicacion.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1YmljYWNpb24ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 8492:
/*!**********************************************************!*\
  !*** ./src/app/ubicacion/ubicacion.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>ubicacion</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"body\">\r\n<h1>Ubicacion actual: {{ubicacion}}</h1>\r\n<br>\r\n<div class=\"mapa\">\r\n  <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.2910105622063!2d-70.68033748426696!3d-33.363467800440596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c7025c925e0f%3A0x7f2f6a657c08d14a!2sDuoc%20UC%3A%20Sede%20Plaza%20Norte!5e0!3m2!1ses!2scl!4v1665114360929!5m2!1ses!2scl\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\r\n</div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF91YmljYWNpb25fdWJpY2FjaW9uX21vZHVsZV90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDYztBQUVOO0FBRWpELE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsMERBQWE7S0FDekI7Q0FDRixDQUFDO0lBTVcsMEJBQTBCLFNBQTFCLDBCQUEwQjtDQUFHO0FBQTdCLDBCQUEwQjtJQUp0Qyx1REFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsa0VBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsT0FBTyxFQUFFLENBQUMseURBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1csMEJBQTBCLENBQUc7QUFBSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkU7QUFDTTtBQUNGO0FBRUE7QUFFMkI7QUFFdkI7SUFXcEMsbUJBQW1CLFNBQW5CLG1CQUFtQjtDQUFHO0FBQXRCLG1CQUFtQjtJQVQvQix1REFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AseURBQVk7WUFDWix1REFBVztZQUNYLHVEQUFXO1lBQ1gsaUZBQTBCO1NBQzNCO1FBQ0QsWUFBWSxFQUFFLENBQUMsMERBQWEsQ0FBQztLQUM5QixDQUFDO0dBQ1csbUJBQW1CLENBQUc7QUFBSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmtCO0FBQ2tDO0lBUXZFLGFBQWEsU0FBYixhQUFhO0lBSXhCLFlBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUdELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUF1QixFQUFDLEVBQUU7WUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FB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RW1CLEtBQUssRUFBRWxCLFdBQVQ7SUFBc0JtQixPQUFPLEVBQUUsVUFBVUwsQ0FBVixFQUFhO01BQUUsT0FBT2QsV0FBVyxDQUFDVyxJQUFaLENBQWlCRyxDQUFqQixDQUFQO0lBQTZCO0VBQTNFLENBQTFCLENBQWxDOztFQUNBLENBQUMsWUFBWTtJQUFFLENBQUMsT0FBT00sU0FBUCxLQUFxQixXQUFyQixJQUFvQ0EsU0FBckMsS0FBbURyQiwrREFBQSxDQUF5QkMsV0FBekIsRUFBc0MsQ0FBQztNQUNqR3NCLElBQUksRUFBRXhCLHFEQUFVQTtJQURpRixDQUFELENBQXRDLEVBRTFELElBRjBELEVBRXBELElBRm9ELENBQW5EO0VBRU8sQ0FGdEI7O0VBR0ksT0FBT0UsV0FBUDtBQUNILENBM0NnQyxDQTJDL0JqSSxxRkEzQytCLENBQWpDIiwic291cmNlcyI6WyIuL3NyYy9hcHAvdWJpY2FjaW9uL3ViaWNhY2lvbi1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC91YmljYWNpb24vdWJpY2FjaW9uLm1vZHVsZS50cyIsIi4vc3JjL2FwcC91YmljYWNpb24vdWJpY2FjaW9uLnBhZ2UudHMiLCIuL25vZGVfbW9kdWxlcy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZS9fX2l2eV9uZ2NjX18vYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbi5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlL19faXZ5X25nY2NfXy9ib290c3RyYXAuanMiLCIuL25vZGVfbW9kdWxlcy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZS9fX2l2eV9uZ2NjX18vZGVjb3JhdG9ycy9jb21tb24uanMiLCIuL25vZGVfbW9kdWxlcy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZS9fX2l2eV9uZ2NjX18vZGVjb3JhdG9ycy9jb3Jkb3ZhLWZ1bmN0aW9uLW92ZXJyaWRlLmpzIiwiLi9ub2RlX21vZHVsZXMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUvX19pdnlfbmdjY19fL2RlY29yYXRvcnMvY29yZG92YS1pbnN0YW5jZS5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlL19faXZ5X25nY2NfXy9kZWNvcmF0b3JzL2NvcmRvdmEtcHJvcGVydHkuanMiLCIuL25vZGVfbW9kdWxlcy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZS9fX2l2eV9uZ2NjX18vZGVjb3JhdG9ycy9jb3Jkb3ZhLmpzIiwiLi9ub2RlX21vZHVsZXMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUvX19pdnlfbmdjY19fL2RlY29yYXRvcnMvaW5zdGFuY2UtcHJvcGVydHkuanMiLCIuL25vZGVfbW9kdWxlcy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZS9fX2l2eV9uZ2NjX18vZGVjb3JhdG9ycy9pbnRlcmZhY2VzLmpzIiwiLi9ub2RlX21vZHVsZXMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUvX19pdnlfbmdjY19fL2luZGV4LmpzIiwiLi9ub2RlX21vZHVsZXMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUvX19pdnlfbmdjY19fL3V0aWwuanMiLCIuL25vZGVfbW9kdWxlcy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZ2VvbG9jYXRpb24vX19pdnlfbmdjY19fL25neC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBVYmljYWNpb25QYWdlIH0gZnJvbSAnLi91YmljYWNpb24ucGFnZSc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogVWJpY2FjaW9uUGFnZVxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFViaWNhY2lvblBhZ2VSb3V0aW5nTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgeyBVYmljYWNpb25QYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vdWJpY2FjaW9uLXJvdXRpbmcubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IFViaWNhY2lvblBhZ2UgfSBmcm9tICcuL3ViaWNhY2lvbi5wYWdlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBJb25pY01vZHVsZSxcclxuICAgIFViaWNhY2lvblBhZ2VSb3V0aW5nTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtVYmljYWNpb25QYWdlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVWJpY2FjaW9uUGFnZU1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHZW9sb2NhdGlvbiwgR2VvcG9zaXRpb24gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZ2VvbG9jYXRpb24vbmd4JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC11YmljYWNpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi91YmljYWNpb24ucGFnZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi91YmljYWNpb24ucGFnZS5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVYmljYWNpb25QYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgdWJpY2FjaW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvciggcHVibGljIGdlb2xvY2F0aW9uOiBHZW9sb2NhdGlvbikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZW9sb2NhdGlvbk5hdGl2ZSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIGdlb2xvY2F0aW9uTmF0aXZlKCkge1xyXG4gICAgdGhpcy5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKS50aGVuKChnZXBvc2l0aW9uOiBHZW9wb3NpdGlvbik9PntcclxuICAgICAgY29uc29sZS5sb2coZ2Vwb3NpdGlvbik7XHJcbiAgICAgIHRoaXMudWJpY2FjaW9uID0gZ2Vwb3NpdGlvbjtcclxuICAgICAgY29uc29sZS5sb2coJ3ViaWNhY2lvbicsdGhpcy51YmljYWNpb24pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjaGVja0F2YWlsYWJpbGl0eSB9IGZyb20gJy4vZGVjb3JhdG9ycy9jb21tb24nO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi91dGlsJztcbnZhciBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbigpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgcGx1Z2luIGlzIGluc3RhbGxlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4uaW5zdGFsbGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNBdmFpbGFibGUgPSBjaGVja0F2YWlsYWJpbGl0eSh0aGlzLnBsdWdpblJlZikgPT09IHRydWU7XG4gICAgICAgIHJldHVybiBpc0F2YWlsYWJsZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG9yaWdpbmFsIHBsdWdpbiBvYmplY3RcbiAgICAgKi9cbiAgICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbi5nZXRQbHVnaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIGdldCh3aW5kb3csIHRoaXMucGx1Z2luUmVmKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBsdWdpbidzIG5hbWVcbiAgICAgKi9cbiAgICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbi5nZXRQbHVnaW5OYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGx1Z2luTmFtZSA9IHRoaXMucGx1Z2luTmFtZTtcbiAgICAgICAgcmV0dXJuIHBsdWdpbk5hbWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwbHVnaW4ncyByZWZlcmVuY2VcbiAgICAgKi9cbiAgICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbi5nZXRQbHVnaW5SZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwbHVnaW5SZWYgPSB0aGlzLnBsdWdpblJlZjtcbiAgICAgICAgcmV0dXJuIHBsdWdpblJlZjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBsdWdpbidzIGluc3RhbGwgbmFtZVxuICAgICAqL1xuICAgIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLmdldFBsdWdpbkluc3RhbGxOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGx1Z2luID0gdGhpcy5wbHVnaW47XG4gICAgICAgIHJldHVybiBwbHVnaW47XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwbHVnaW4ncyBzdXBwb3J0ZWQgcGxhdGZvcm1zXG4gICAgICovXG4gICAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4uZ2V0U3VwcG9ydGVkUGxhdGZvcm1zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGxhdGZvcm0gPSB0aGlzLnBsYXRmb3JtcztcbiAgICAgICAgcmV0dXJuIHBsYXRmb3JtO1xuICAgIH07XG4gICAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ucGx1Z2luTmFtZSA9ICcnO1xuICAgIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLnBsdWdpblJlZiA9ICcnO1xuICAgIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLnBsdWdpbiA9ICcnO1xuICAgIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLnJlcG8gPSAnJztcbiAgICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbi5wbGF0Zm9ybXMgPSBbXTtcbiAgICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbi5pbnN0YWxsID0gJyc7XG4gICAgcmV0dXJuIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luO1xufSgpKTtcbmV4cG9ydCB7IEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH07XG4iLCIvKipcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JlYWR5KCkge1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIHdpbl8xID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fTtcbiAgICAgICAgdmFyIERFVklDRV9SRUFEWV9USU1FT1VUXzEgPSA1MDAwO1xuICAgICAgICAvLyBUbyBoZWxwIGRldmVsb3BlcnMgdXNpbmcgY29yZG92YSwgd2UgbGlzdGVuIGZvciB0aGUgZGV2aWNlIHJlYWR5IGV2ZW50IGFuZFxuICAgICAgICAvLyBsb2cgYW4gZXJyb3IgaWYgaXQgZGlkbid0IGZpcmUgaW4gYSByZWFzb25hYmxlIGFtb3VudCBvZiB0aW1lLiBHZW5lcmFsbHksXG4gICAgICAgIC8vIHdoZW4gdGhpcyBoYXBwZW5zLCBkZXZlbG9wZXJzIHNob3VsZCByZW1vdmUgYW5kIHJlaW5zdGFsbCBwbHVnaW5zLCBzaW5jZVxuICAgICAgICAvLyBhbiBpbmNvbnNpc3RlbnQgcGx1Z2luIGlzIG9mdGVuIHRoZSBjdWxwcml0LlxuICAgICAgICB2YXIgYmVmb3JlXzEgPSBEYXRlLm5vdygpO1xuICAgICAgICB2YXIgZGlkRmlyZVJlYWR5XzEgPSBmYWxzZTtcbiAgICAgICAgd2luXzEuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIklvbmljIE5hdGl2ZTogZGV2aWNlcmVhZHkgZXZlbnQgZmlyZWQgYWZ0ZXIgXCIgKyAoRGF0ZS5ub3coKSAtIGJlZm9yZV8xKSArIFwiIG1zXCIpO1xuICAgICAgICAgICAgZGlkRmlyZVJlYWR5XzEgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWRpZEZpcmVSZWFkeV8xICYmIHdpbl8xLmNvcmRvdmEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJJb25pYyBOYXRpdmU6IGRldmljZXJlYWR5IGRpZCBub3QgZmlyZSB3aXRoaW4gXCIgKyBERVZJQ0VfUkVBRFlfVElNRU9VVF8xICsgXCJtcy4gVGhpcyBjYW4gaGFwcGVuIHdoZW4gcGx1Z2lucyBhcmUgaW4gYW4gaW5jb25zaXN0ZW50IHN0YXRlLiBUcnkgcmVtb3ZpbmcgcGx1Z2lucyBmcm9tIHBsdWdpbnMvIGFuZCByZWluc3RhbGxpbmcgdGhlbS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIERFVklDRV9SRUFEWV9USU1FT1VUXzEpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IHZhciBFUlJfQ09SRE9WQV9OT1RfQVZBSUxBQkxFID0geyBlcnJvcjogJ2NvcmRvdmFfbm90X2F2YWlsYWJsZScgfTtcbmV4cG9ydCB2YXIgRVJSX1BMVUdJTl9OT1RfSU5TVEFMTEVEID0geyBlcnJvcjogJ3BsdWdpbl9ub3RfaW5zdGFsbGVkJyB9O1xuLyoqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByb21pc2UoY2FsbGJhY2spIHtcbiAgICB2YXIgdHJ5TmF0aXZlUHJvbWlzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKFByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gUHJvbWlzZSBzdXBwb3J0IG9yIHBvbHlmaWxsIGZvdW5kLiBUbyBlbmFibGUgSW9uaWMgTmF0aXZlIHN1cHBvcnQsIHBsZWFzZSBhZGQgdGhlIGVzNi1wcm9taXNlIHBvbHlmaWxsIGJlZm9yZSB0aGlzIHNjcmlwdCwgb3IgcnVuIHdpdGggYSBsaWJyYXJ5IGxpa2UgQW5ndWxhciBvciBvbiBhIHJlY2VudCBicm93c2VyLicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmFuZ3VsYXIpIHtcbiAgICAgICAgdmFyIGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcbiAgICAgICAgdmFyIGluamVjdG9yID0gd2luZG93LmFuZ3VsYXIuZWxlbWVudChkb2MucXVlcnlTZWxlY3RvcignW25nLWFwcF0nKSB8fCBkb2MuYm9keSkuaW5qZWN0b3IoKTtcbiAgICAgICAgaWYgKGluamVjdG9yKSB7XG4gICAgICAgICAgICB2YXIgJHEgPSBpbmplY3Rvci5nZXQoJyRxJyk7XG4gICAgICAgICAgICByZXR1cm4gJHEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLndhcm4oXCJBbmd1bGFyIDEgd2FzIGRldGVjdGVkIGJ1dCAkcSBjb3VsZG4ndCBiZSByZXRyaWV2ZWQuIFRoaXMgaXMgdXN1YWxseSB3aGVuIHRoZSBhcHAgaXMgbm90IGJvb3RzdHJhcHBlZCBvbiB0aGUgaHRtbCBvciBib2R5IHRhZy4gRmFsbGluZyBiYWNrIHRvIG5hdGl2ZSBwcm9taXNlcyB3aGljaCB3b24ndCB0cmlnZ2VyIGFuIGF1dG9tYXRpYyBkaWdlc3Qgd2hlbiBwcm9taXNlcyByZXNvbHZlLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRyeU5hdGl2ZVByb21pc2UoKTtcbn1cbi8qKlxuICogQHBhcmFtIHBsdWdpbk9ialxuICogQHBhcmFtIG1ldGhvZE5hbWVcbiAqIEBwYXJhbSBhcmdzXG4gKiBAcGFyYW0gb3B0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcFByb21pc2UocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cbiAgICB2YXIgcGx1Z2luUmVzdWx0LCByZWo7XG4gICAgdmFyIHAgPSBnZXRQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKG9wdHMuZGVzdHJ1Y3QpIHtcbiAgICAgICAgICAgIHBsdWdpblJlc3VsdCA9IGNhbGxDb3Jkb3ZhUGx1Z2luKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgYXJncywgb3B0cywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGx1Z2luUmVzdWx0ID0gY2FsbENvcmRvdmFQbHVnaW4ocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHJlaiA9IHJlamVjdDtcbiAgICB9KTtcbiAgICAvLyBBbmd1bGFyIHRocm93cyBhbiBlcnJvciBvbiB1bmhhbmRsZWQgcmVqZWN0aW9uLCBidXQgaW4gdGhpcyBjYXNlIHdlIGhhdmUgYWxyZWFkeSBwcmludGVkXG4gICAgLy8gYSB3YXJuaW5nIHRoYXQgQ29yZG92YSBpcyB1bmRlZmluZWQgb3IgdGhlIHBsdWdpbiBpcyB1bmluc3RhbGxlZCwgc28gdGhlcmUgaXMgbm8gcmVhc29uXG4gICAgLy8gdG8gZXJyb3JcbiAgICBpZiAocGx1Z2luUmVzdWx0ICYmIHBsdWdpblJlc3VsdC5lcnJvcikge1xuICAgICAgICBwLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgIHR5cGVvZiByZWogPT09ICdmdW5jdGlvbicgJiYgcmVqKHBsdWdpblJlc3VsdC5lcnJvcik7XG4gICAgfVxuICAgIHJldHVybiBwO1xufVxuLyoqXG4gKiBAcGFyYW0gcGx1Z2luT2JqXG4gKiBAcGFyYW0gbWV0aG9kTmFtZVxuICogQHBhcmFtIGFyZ3NcbiAqIEBwYXJhbSBvcHRzXG4gKi9cbmZ1bmN0aW9uIHdyYXBPdGhlclByb21pc2UocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cbiAgICByZXR1cm4gZ2V0UHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBwbHVnaW5SZXN1bHQgPSBjYWxsQ29yZG92YVBsdWdpbihwbHVnaW5PYmosIG1ldGhvZE5hbWUsIGFyZ3MsIG9wdHMpO1xuICAgICAgICBpZiAocGx1Z2luUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAocGx1Z2luUmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHBsdWdpblJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwbHVnaW5SZXN1bHQudGhlbikge1xuICAgICAgICAgICAgICAgIHBsdWdpblJlc3VsdC50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoeyBlcnJvcjogJ3VuZXhwZWN0ZWRfZXJyb3InIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vKipcbiAqIEBwYXJhbSBwbHVnaW5PYmpcbiAqIEBwYXJhbSBtZXRob2ROYW1lXG4gKiBAcGFyYW0gYXJnc1xuICogQHBhcmFtIG9wdHNcbiAqL1xuZnVuY3Rpb24gd3JhcE9ic2VydmFibGUocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHZhciBwbHVnaW5SZXN1bHQ7XG4gICAgICAgIGlmIChvcHRzLmRlc3RydWN0KSB7XG4gICAgICAgICAgICBwbHVnaW5SZXN1bHQgPSBjYWxsQ29yZG92YVBsdWdpbihwbHVnaW5PYmosIG1ldGhvZE5hbWUsIGFyZ3MsIG9wdHMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLm5leHQoYXJncyk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5lcnJvcihhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGx1Z2luUmVzdWx0ID0gY2FsbENvcmRvdmFQbHVnaW4ocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzLCBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLCBvYnNlcnZlci5lcnJvci5iaW5kKG9ic2VydmVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsdWdpblJlc3VsdCAmJiBwbHVnaW5SZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKHBsdWdpblJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRzLmNsZWFyRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdHMuY2xlYXJXaXRoQXJncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxDb3Jkb3ZhUGx1Z2luKHBsdWdpbk9iaiwgb3B0cy5jbGVhckZ1bmN0aW9uLCBhcmdzLCBvcHRzLCBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLCBvYnNlcnZlci5lcnJvci5iaW5kKG9ic2VydmVyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxDb3Jkb3ZhUGx1Z2luKHBsdWdpbk9iaiwgb3B0cy5jbGVhckZ1bmN0aW9uLCBbXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1VuYWJsZSB0byBjbGVhciB0aGUgcHJldmlvdXMgb2JzZXJ2YWJsZSB3YXRjaCBmb3InLCBwbHVnaW5PYmouY29uc3RydWN0b3IuZ2V0UGx1Z2luTmFtZSgpLCBtZXRob2ROYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG59XG4vKipcbiAqIFdyYXAgdGhlIGV2ZW50IHdpdGggYW4gb2JzZXJ2YWJsZVxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZXZlbnQgZXZlbnQgbmFtZVxuICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gYXR0YWNoIHRoZSBldmVudCBsaXN0ZW5lciB0b1xuICogQHJldHVybnMge09ic2VydmFibGV9XG4gKi9cbmZ1bmN0aW9uIHdyYXBFdmVudE9ic2VydmFibGUoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBlbGVtZW50ID1cbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudFxuICAgICAgICAgICAgPyBnZXQod2luZG93LCBlbGVtZW50KVxuICAgICAgICAgICAgOiBlbGVtZW50IHx8ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9KTtcbiAgICByZXR1cm4gZnJvbUV2ZW50KGVsZW1lbnQsIGV2ZW50KTtcbn1cbi8qKlxuICogQHBhcmFtIHBsdWdpblxuICogQHBhcmFtIG1ldGhvZE5hbWVcbiAqIEBwYXJhbSBwbHVnaW5OYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0F2YWlsYWJpbGl0eShwbHVnaW4sIG1ldGhvZE5hbWUsIHBsdWdpbk5hbWUpIHtcbiAgICB2YXIgcGx1Z2luUmVmLCBwbHVnaW5QYWNrYWdlO1xuICAgIGlmICh0eXBlb2YgcGx1Z2luID09PSAnc3RyaW5nJykge1xuICAgICAgICBwbHVnaW5SZWYgPSBwbHVnaW47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwbHVnaW5SZWYgPSBwbHVnaW4uY29uc3RydWN0b3IuZ2V0UGx1Z2luUmVmKCk7XG4gICAgICAgIHBsdWdpbk5hbWUgPSBwbHVnaW4uY29uc3RydWN0b3IuZ2V0UGx1Z2luTmFtZSgpO1xuICAgICAgICBwbHVnaW5QYWNrYWdlID0gcGx1Z2luLmNvbnN0cnVjdG9yLmdldFBsdWdpbkluc3RhbGxOYW1lKCk7XG4gICAgfVxuICAgIHZhciBwbHVnaW5JbnN0YW5jZSA9IGdldFBsdWdpbihwbHVnaW5SZWYpO1xuICAgIGlmICghcGx1Z2luSW5zdGFuY2UgfHwgKCEhbWV0aG9kTmFtZSAmJiB0eXBlb2YgcGx1Z2luSW5zdGFuY2VbbWV0aG9kTmFtZV0gPT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdpbmRvdy5jb3Jkb3ZhKSB7XG4gICAgICAgICAgICBjb3Jkb3ZhV2FybihwbHVnaW5OYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBFUlJfQ09SRE9WQV9OT1RfQVZBSUxBQkxFO1xuICAgICAgICB9XG4gICAgICAgIHBsdWdpbldhcm4ocGx1Z2luTmFtZSwgcGx1Z2luUGFja2FnZSwgbWV0aG9kTmFtZSk7XG4gICAgICAgIHJldHVybiBFUlJfUExVR0lOX05PVF9JTlNUQUxMRUQ7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgX29iamVjdEluc3RhbmNlIGV4aXN0cyBhbmQgaGFzIHRoZSBtZXRob2QvcHJvcGVydHlcbiAqXG4gKiBAcGFyYW0gcGx1Z2luT2JqXG4gKiBAcGFyYW0gbWV0aG9kTmFtZVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlQXZhaWxhYmlsaXR5KHBsdWdpbk9iaiwgbWV0aG9kTmFtZSkge1xuICAgIHJldHVybiBwbHVnaW5PYmouX29iamVjdEluc3RhbmNlICYmICghbWV0aG9kTmFtZSB8fCB0eXBlb2YgcGx1Z2luT2JqLl9vYmplY3RJbnN0YW5jZVttZXRob2ROYW1lXSAhPT0gJ3VuZGVmaW5lZCcpO1xufVxuLyoqXG4gKiBAcGFyYW0gYXJnc1xuICogQHBhcmFtIG9wdHNcbiAqIEBwYXJhbSByZXNvbHZlXG4gKiBAcGFyYW0gcmVqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbmRleChhcmdzLCBvcHRzLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxuICAgIC8vIGlnbm9yZSByZXNvbHZlIGFuZCByZWplY3QgaW4gY2FzZSBzeW5jXG4gICAgaWYgKG9wdHMuc3luYykge1xuICAgICAgICByZXR1cm4gYXJncztcbiAgICB9XG4gICAgLy8gSWYgdGhlIHBsdWdpbiBtZXRob2QgZXhwZWN0cyBteU1ldGhvZChzdWNjZXNzLCBlcnIsIG9wdGlvbnMpXG4gICAgaWYgKG9wdHMuY2FsbGJhY2tPcmRlciA9PT0gJ3JldmVyc2UnKSB7XG4gICAgICAgIC8vIEdldCB0aG9zZSBhcmd1bWVudHMgaW4gdGhlIG9yZGVyIFtyZXNvbHZlLCByZWplY3QsIC4uLnJlc3RPZkFyZ3NdXG4gICAgICAgIGFyZ3MudW5zaGlmdChyZWplY3QpO1xuICAgICAgICBhcmdzLnVuc2hpZnQocmVzb2x2ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9wdHMuY2FsbGJhY2tTdHlsZSA9PT0gJ25vZGUnKSB7XG4gICAgICAgIGFyZ3MucHVzaChmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9wdHMuY2FsbGJhY2tTdHlsZSA9PT0gJ29iamVjdCcgJiYgb3B0cy5zdWNjZXNzTmFtZSAmJiBvcHRzLmVycm9yTmFtZSkge1xuICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgIG9ialtvcHRzLnN1Y2Nlc3NOYW1lXSA9IHJlc29sdmU7XG4gICAgICAgIG9ialtvcHRzLmVycm9yTmFtZV0gPSByZWplY3Q7XG4gICAgICAgIGFyZ3MucHVzaChvYmopO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2Ygb3B0cy5zdWNjZXNzSW5kZXggIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBvcHRzLmVycm9ySW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBzZXRTdWNjZXNzSW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSBzcGVjaWZpZWQgYSBzdWNjZXNzL2Vycm9yIGluZGV4XG4gICAgICAgICAgICBpZiAob3B0cy5zdWNjZXNzSW5kZXggPiBhcmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFyZ3Nbb3B0cy5zdWNjZXNzSW5kZXhdID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFyZ3Muc3BsaWNlKG9wdHMuc3VjY2Vzc0luZGV4LCAwLCByZXNvbHZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNldEVycm9ySW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRoYXQgdGhlIHJlamVjdCBjYiBnZXRzIHNwbGljZWQgaW50byB0aGUgcG9zaXRpb24gb2YgYW4gb3B0aW9uYWwgYXJndW1lbnQgdGhhdCBoYXMgbm90IGJlZW5cbiAgICAgICAgICAgIC8vIGRlZmluZWQgYW5kIHRodXMgY2F1c2luZyBub24gZXhwZWN0ZWQgYmVoYXZpb3IuXG4gICAgICAgICAgICBpZiAob3B0cy5lcnJvckluZGV4ID4gYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhcmdzW29wdHMuZXJyb3JJbmRleF0gPSByZWplY3Q7IC8vIGluc2VydCB0aGUgcmVqZWN0IGZuIGF0IHRoZSBjb3JyZWN0IHNwZWNpZmljIGluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcmdzLnNwbGljZShvcHRzLmVycm9ySW5kZXgsIDAsIHJlamVjdCk7IC8vIG90aGVyd2lzZSBqdXN0IHNwbGljZSBpdCBpbnRvIHRoZSBhcnJheVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAob3B0cy5zdWNjZXNzSW5kZXggPiBvcHRzLmVycm9ySW5kZXgpIHtcbiAgICAgICAgICAgIHNldEVycm9ySW5kZXgoKTtcbiAgICAgICAgICAgIHNldFN1Y2Nlc3NJbmRleCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0U3VjY2Vzc0luZGV4KCk7XG4gICAgICAgICAgICBzZXRFcnJvckluZGV4KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSwgbGV0J3MgdGFjayB0aGVtIG9uIHRvIHRoZSBlbmQgb2YgdGhlIGFyZ3VtZW50IGxpc3RcbiAgICAgICAgLy8gd2hpY2ggaXMgOTAlIG9mIGNhc2VzXG4gICAgICAgIGFyZ3MucHVzaChyZXNvbHZlKTtcbiAgICAgICAgYXJncy5wdXNoKHJlamVjdCk7XG4gICAgfVxuICAgIHJldHVybiBhcmdzO1xufVxuLyoqXG4gKiBAcGFyYW0gcGx1Z2luT2JqXG4gKiBAcGFyYW0gbWV0aG9kTmFtZVxuICogQHBhcmFtIGFyZ3NcbiAqIEBwYXJhbSBvcHRzXG4gKiBAcGFyYW0gcmVzb2x2ZVxuICogQHBhcmFtIHJlamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsbENvcmRvdmFQbHVnaW4ocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxuICAgIC8vIFRyeSB0byBmaWd1cmUgb3V0IHdoZXJlIHRoZSBzdWNjZXNzL2Vycm9yIGNhbGxiYWNrcyBuZWVkIHRvIGJlIGJvdW5kXG4gICAgLy8gdG8gb3VyIHByb21pc2UgcmVzb2x2ZS9yZWplY3QgaGFuZGxlcnMuXG4gICAgYXJncyA9IHNldEluZGV4KGFyZ3MsIG9wdHMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgdmFyIGF2YWlsYWJpbGl0eUNoZWNrID0gY2hlY2tBdmFpbGFiaWxpdHkocGx1Z2luT2JqLCBtZXRob2ROYW1lKTtcbiAgICBpZiAoYXZhaWxhYmlsaXR5Q2hlY2sgPT09IHRydWUpIHtcbiAgICAgICAgdmFyIHBsdWdpbkluc3RhbmNlID0gZ2V0UGx1Z2luKHBsdWdpbk9iai5jb25zdHJ1Y3Rvci5nZXRQbHVnaW5SZWYoKSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgICAgIHJldHVybiBwbHVnaW5JbnN0YW5jZVttZXRob2ROYW1lXS5hcHBseShwbHVnaW5JbnN0YW5jZSwgYXJncyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYXZhaWxhYmlsaXR5Q2hlY2s7XG4gICAgfVxufVxuLyoqXG4gKiBAcGFyYW0gcGx1Z2luT2JqXG4gKiBAcGFyYW0gbWV0aG9kTmFtZVxuICogQHBhcmFtIGFyZ3NcbiAqIEBwYXJhbSBvcHRzXG4gKiBAcGFyYW0gcmVzb2x2ZVxuICogQHBhcmFtIHJlamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsbEluc3RhbmNlKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgYXJncywgb3B0cywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cbiAgICBhcmdzID0gc2V0SW5kZXgoYXJncywgb3B0cywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICBpZiAoaW5zdGFuY2VBdmFpbGFiaWxpdHkocGx1Z2luT2JqLCBtZXRob2ROYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgICAgICByZXR1cm4gcGx1Z2luT2JqLl9vYmplY3RJbnN0YW5jZVttZXRob2ROYW1lXS5hcHBseShwbHVnaW5PYmouX29iamVjdEluc3RhbmNlLCBhcmdzKTtcbiAgICB9XG59XG4vKipcbiAqIEBwYXJhbSBwbHVnaW5SZWZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBsdWdpbihwbHVnaW5SZWYpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGdldCh3aW5kb3csIHBsdWdpblJlZik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuLyoqXG4gKiBAcGFyYW0gZWxlbWVudFxuICogQHBhcmFtIHBhdGhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldChlbGVtZW50LCBwYXRoKSB7XG4gICAgdmFyIHBhdGhzID0gcGF0aC5zcGxpdCgnLicpO1xuICAgIHZhciBvYmogPSBlbGVtZW50O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIG9iaiA9IG9ialtwYXRoc1tpXV07XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG4vKipcbiAqIEBwYXJhbSBwbHVnaW5OYW1lXG4gKiBAcGFyYW0gcGx1Z2luXG4gKiBAcGFyYW0gbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwbHVnaW5XYXJuKHBsdWdpbk5hbWUsIHBsdWdpbiwgbWV0aG9kKSB7XG4gICAgaWYgKG1ldGhvZCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ05hdGl2ZTogdHJpZWQgY2FsbGluZyAnICsgcGx1Z2luTmFtZSArICcuJyArIG1ldGhvZCArICcsIGJ1dCB0aGUgJyArIHBsdWdpbk5hbWUgKyAnIHBsdWdpbiBpcyBub3QgaW5zdGFsbGVkLicpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiTmF0aXZlOiB0cmllZCBhY2Nlc3NpbmcgdGhlIFwiICsgcGx1Z2luTmFtZSArIFwiIHBsdWdpbiBidXQgaXQncyBub3QgaW5zdGFsbGVkLlwiKTtcbiAgICB9XG4gICAgaWYgKHBsdWdpbikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJJbnN0YWxsIHRoZSBcIiArIHBsdWdpbk5hbWUgKyBcIiBwbHVnaW46ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgXCIgKyBwbHVnaW4gKyBcIidcIik7XG4gICAgfVxufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHBsdWdpbk5hbWVcbiAqIEBwYXJhbSBtZXRob2RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcmRvdmFXYXJuKHBsdWdpbk5hbWUsIG1ldGhvZCkge1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOYXRpdmU6IHRyaWVkIGNhbGxpbmcgJyArXG4gICAgICAgICAgICAgICAgcGx1Z2luTmFtZSArXG4gICAgICAgICAgICAgICAgJy4nICtcbiAgICAgICAgICAgICAgICBtZXRob2QgK1xuICAgICAgICAgICAgICAgICcsIGJ1dCBDb3Jkb3ZhIGlzIG5vdCBhdmFpbGFibGUuIE1ha2Ugc3VyZSB0byBpbmNsdWRlIGNvcmRvdmEuanMgb3IgcnVuIGluIGEgZGV2aWNlL3NpbXVsYXRvcicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOYXRpdmU6IHRyaWVkIGFjY2Vzc2luZyB0aGUgJyArXG4gICAgICAgICAgICAgICAgcGx1Z2luTmFtZSArXG4gICAgICAgICAgICAgICAgJyBwbHVnaW4gYnV0IENvcmRvdmEgaXMgbm90IGF2YWlsYWJsZS4gTWFrZSBzdXJlIHRvIGluY2x1ZGUgY29yZG92YS5qcyBvciBydW4gaW4gYSBkZXZpY2Uvc2ltdWxhdG9yJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEBwYXJhbSBwbHVnaW5PYmpcbiAqIEBwYXJhbSBtZXRob2ROYW1lXG4gKiBAcGFyYW0gb3B0c1xuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IHZhciB3cmFwID0gZnVuY3Rpb24gKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHt9OyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5zeW5jKSB7XG4gICAgICAgICAgICAvLyBTeW5jIGRvZXNuJ3Qgd3JhcCB0aGUgcGx1Z2luIHdpdGggYSBwcm9taXNlIG9yIG9ic2VydmFibGUsIGl0IHJldHVybnMgdGhlIHJlc3VsdCBhcy1pc1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxDb3Jkb3ZhUGx1Z2luKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgYXJncywgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0cy5vYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcE9ic2VydmFibGUocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRzLmV2ZW50T2JzZXJ2YWJsZSAmJiBvcHRzLmV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcEV2ZW50T2JzZXJ2YWJsZShvcHRzLmV2ZW50LCBvcHRzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdHMub3RoZXJQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcE90aGVyUHJvbWlzZShwbHVnaW5PYmosIG1ldGhvZE5hbWUsIGFyZ3MsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHdyYXBQcm9taXNlKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgYXJncywgb3B0cyk7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbi8qKlxuICogQHBhcmFtIHBsdWdpbk9ialxuICogQHBhcmFtIG1ldGhvZE5hbWVcbiAqIEBwYXJhbSBvcHRzXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcEluc3RhbmNlKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHt9OyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5zeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbEluc3RhbmNlKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgYXJncywgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0cy5vYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBsdWdpblJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5kZXN0cnVjdCkge1xuICAgICAgICAgICAgICAgICAgICBwbHVnaW5SZXN1bHQgPSBjYWxsSW5zdGFuY2UocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIubmV4dChhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLmVycm9yKGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBsdWdpblJlc3VsdCA9IGNhbGxJbnN0YW5jZShwbHVnaW5PYmosIG1ldGhvZE5hbWUsIGFyZ3MsIG9wdHMsIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksIG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBsdWdpblJlc3VsdCAmJiBwbHVnaW5SZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IocGx1Z2luUmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRzLmNsZWFyV2l0aEFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbEluc3RhbmNlKHBsdWdpbk9iaiwgb3B0cy5jbGVhckZ1bmN0aW9uLCBhcmdzLCBvcHRzLCBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLCBvYnNlcnZlci5lcnJvci5iaW5kKG9ic2VydmVyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbEluc3RhbmNlKHBsdWdpbk9iaiwgb3B0cy5jbGVhckZ1bmN0aW9uLCBbXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5hYmxlIHRvIGNsZWFyIHRoZSBwcmV2aW91cyBvYnNlcnZhYmxlIHdhdGNoIGZvcicsIHBsdWdpbk9iai5jb25zdHJ1Y3Rvci5nZXRQbHVnaW5OYW1lKCksIG1ldGhvZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdHMub3RoZXJQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0UHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5kZXN0cnVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjYWxsSW5zdGFuY2UocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjYWxsSW5zdGFuY2UocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwbHVnaW5SZXN1bHRfMSwgcmVqXzE7XG4gICAgICAgICAgICB2YXIgcCA9IGdldFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRzLmRlc3RydWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBsdWdpblJlc3VsdF8xID0gY2FsbEluc3RhbmNlKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgYXJncywgb3B0cywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luUmVzdWx0XzEgPSBjYWxsSW5zdGFuY2UocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWpfMSA9IHJlamVjdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQW5ndWxhciB0aHJvd3MgYW4gZXJyb3Igb24gdW5oYW5kbGVkIHJlamVjdGlvbiwgYnV0IGluIHRoaXMgY2FzZSB3ZSBoYXZlIGFscmVhZHkgcHJpbnRlZFxuICAgICAgICAgICAgLy8gYSB3YXJuaW5nIHRoYXQgQ29yZG92YSBpcyB1bmRlZmluZWQgb3IgdGhlIHBsdWdpbiBpcyB1bmluc3RhbGxlZCwgc28gdGhlcmUgaXMgbm8gcmVhc29uXG4gICAgICAgICAgICAvLyB0byBlcnJvclxuICAgICAgICAgICAgaWYgKHBsdWdpblJlc3VsdF8xICYmIHBsdWdpblJlc3VsdF8xLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgcC5jYXRjaChmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgICAgIHR5cGVvZiByZWpfMSA9PT0gJ2Z1bmN0aW9uJyAmJiByZWpfMShwbHVnaW5SZXN1bHRfMS5lcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfVxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjaGVja0F2YWlsYWJpbGl0eSwgZ2V0UGx1Z2luIH0gZnJvbSAnLi9jb21tb24nO1xuLyoqXG4gKiBAcGFyYW0gcGx1Z2luT2JqXG4gKiBAcGFyYW0gbWV0aG9kTmFtZVxuICovXG5mdW5jdGlvbiBvdmVycmlkZUZ1bmN0aW9uKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIGF2YWlsYWJpbGl0eUNoZWNrID0gY2hlY2tBdmFpbGFiaWxpdHkocGx1Z2luT2JqLCBtZXRob2ROYW1lKTtcbiAgICAgICAgaWYgKGF2YWlsYWJpbGl0eUNoZWNrID09PSB0cnVlKSB7XG4gICAgICAgICAgICB2YXIgcGx1Z2luSW5zdGFuY2VfMSA9IGdldFBsdWdpbihwbHVnaW5PYmouY29uc3RydWN0b3IuZ2V0UGx1Z2luUmVmKCkpO1xuICAgICAgICAgICAgcGx1Z2luSW5zdGFuY2VfMVttZXRob2ROYW1lXSA9IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcik7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHBsdWdpbkluc3RhbmNlXzFbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoKSB7IH0pOyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoYXZhaWxhYmlsaXR5Q2hlY2spO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiBAcGFyYW0gcGx1Z2luT2JqXG4gKiBAcGFyYW0gbWV0aG9kTmFtZVxuICogQHBhcmFtIGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcmRvdmFGdW5jdGlvbk92ZXJyaWRlKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgYXJncykge1xuICAgIGlmIChhcmdzID09PSB2b2lkIDApIHsgYXJncyA9IFtdOyB9XG4gICAgcmV0dXJuIG92ZXJyaWRlRnVuY3Rpb24ocGx1Z2luT2JqLCBtZXRob2ROYW1lKTtcbn1cbiIsImltcG9ydCB7IHdyYXBJbnN0YW5jZSB9IGZyb20gJy4vY29tbW9uJztcbi8qKlxuICogQHBhcmFtIHBsdWdpbk9ialxuICogQHBhcmFtIG1ldGhvZE5hbWVcbiAqIEBwYXJhbSBjb25maWdcbiAqIEBwYXJhbSBhcmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3Jkb3ZhSW5zdGFuY2UocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBjb25maWcsIGFyZ3MpIHtcbiAgICBhcmdzID0gQXJyYXkuZnJvbShhcmdzKTtcbiAgICByZXR1cm4gd3JhcEluc3RhbmNlKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgY29uZmlnKS5hcHBseSh0aGlzLCBhcmdzKTtcbn1cbiIsImltcG9ydCB7IGNoZWNrQXZhaWxhYmlsaXR5LCBnZXRQbHVnaW4gfSBmcm9tICcuL2NvbW1vbic7XG4vKipcbiAqIEBwYXJhbSBwbHVnaW5PYmpcbiAqIEBwYXJhbSBrZXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcmRvdmFQcm9wZXJ0eUdldChwbHVnaW5PYmosIGtleSkge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShwbHVnaW5PYmosIGtleSkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGdldFBsdWdpbihwbHVnaW5PYmouY29uc3RydWN0b3IuZ2V0UGx1Z2luUmVmKCkpW2tleV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuLyoqXG4gKiBAcGFyYW0gcGx1Z2luT2JqXG4gKiBAcGFyYW0ga2V5XG4gKiBAcGFyYW0gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcmRvdmFQcm9wZXJ0eVNldChwbHVnaW5PYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkocGx1Z2luT2JqLCBrZXkpID09PSB0cnVlKSB7XG4gICAgICAgIGdldFBsdWdpbihwbHVnaW5PYmouY29uc3RydWN0b3IuZ2V0UGx1Z2luUmVmKCkpW2tleV0gPSB2YWx1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyB3cmFwIH0gZnJvbSAnLi9jb21tb24nO1xuLyoqXG4gKiBAcGFyYW0gcGx1Z2luT2JqXG4gKiBAcGFyYW0gbWV0aG9kTmFtZVxuICogQHBhcmFtIGNvbmZpZ1xuICogQHBhcmFtIGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcmRvdmEocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBjb25maWcsIGFyZ3MpIHtcbiAgICByZXR1cm4gd3JhcChwbHVnaW5PYmosIG1ldGhvZE5hbWUsIGNvbmZpZykuYXBwbHkodGhpcywgYXJncyk7XG59XG4iLCIvKipcbiAqIEBwYXJhbSBwbHVnaW5PYmpcbiAqIEBwYXJhbSBrZXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlUHJvcGVydHlHZXQocGx1Z2luT2JqLCBrZXkpIHtcbiAgICBpZiAocGx1Z2luT2JqLl9vYmplY3RJbnN0YW5jZSAmJiBwbHVnaW5PYmouX29iamVjdEluc3RhbmNlW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbk9iai5fb2JqZWN0SW5zdGFuY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG4vKipcbiAqIEBwYXJhbSBwbHVnaW5PYmpcbiAqIEBwYXJhbSBrZXlcbiAqIEBwYXJhbSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFuY2VQcm9wZXJ0eVNldChwbHVnaW5PYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAocGx1Z2luT2JqLl9vYmplY3RJbnN0YW5jZSkge1xuICAgICAgICBwbHVnaW5PYmouX29iamVjdEluc3RhbmNlW2tleV0gPSB2YWx1ZTtcbiAgICB9XG59XG4iLCJleHBvcnQge307XG4iLCJpbXBvcnQgeyBjaGVja1JlYWR5IH0gZnJvbSAnLi9ib290c3RyYXAnO1xuZXhwb3J0IHsgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICcuL2F3ZXNvbWUtY29yZG92YS1wbHVnaW4nO1xuLy8gRGVjb3JhdG9yc1xuZXhwb3J0IHsgY2hlY2tBdmFpbGFiaWxpdHksIGluc3RhbmNlQXZhaWxhYmlsaXR5LCB3cmFwLCBnZXRQcm9taXNlIH0gZnJvbSAnLi9kZWNvcmF0b3JzL2NvbW1vbic7XG5leHBvcnQgKiBmcm9tICcuL2RlY29yYXRvcnMvY29yZG92YSc7XG5leHBvcnQgKiBmcm9tICcuL2RlY29yYXRvcnMvY29yZG92YS1mdW5jdGlvbi1vdmVycmlkZSc7XG5leHBvcnQgKiBmcm9tICcuL2RlY29yYXRvcnMvY29yZG92YS1pbnN0YW5jZSc7XG5leHBvcnQgKiBmcm9tICcuL2RlY29yYXRvcnMvY29yZG92YS1wcm9wZXJ0eSc7XG5leHBvcnQgKiBmcm9tICcuL2RlY29yYXRvcnMvaW5zdGFuY2UtcHJvcGVydHknO1xuZXhwb3J0ICogZnJvbSAnLi9kZWNvcmF0b3JzL2ludGVyZmFjZXMnO1xuY2hlY2tSZWFkeSgpO1xuXG4iLCIvKipcbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcGFyYW0gcGF0aFxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldChlbGVtZW50LCBwYXRoKSB7XG4gICAgdmFyIHBhdGhzID0gcGF0aC5zcGxpdCgnLicpO1xuICAgIHZhciBvYmogPSBlbGVtZW50O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIG9iaiA9IG9ialtwYXRoc1tpXV07XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG4vKipcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByb21pc2UoY2FsbGJhY2spIHtcbiAgICBpZiAoY2FsbGJhY2sgPT09IHZvaWQgMCkgeyBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgfTsgfVxuICAgIHZhciB0cnlOYXRpdmVQcm9taXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5Qcm9taXNlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBQcm9taXNlIHN1cHBvcnQgb3IgcG9seWZpbGwgZm91bmQuIFRvIGVuYWJsZSBJb25pYyBOYXRpdmUgc3VwcG9ydCwgcGxlYXNlIGFkZCB0aGUgZXM2LXByb21pc2UgcG9seWZpbGwgYmVmb3JlIHRoaXMgc2NyaXB0LCBvciBydW4gd2l0aCBhIGxpYnJhcnkgbGlrZSBBbmd1bGFyIG9yIG9uIGEgcmVjZW50IGJyb3dzZXIuJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB0cnlOYXRpdmVQcm9taXNlKCk7XG59XG4iLCJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBjb3Jkb3ZhIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgybVuZ2NjMCBmcm9tICdAYW5ndWxhci9jb3JlJztcbnZhciBHZW9sb2NhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoR2VvbG9jYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR2VvbG9jYXRpb24oKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgR2VvbG9jYXRpb24ucHJvdG90eXBlLmdldEN1cnJlbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7IHJldHVybiBjb3Jkb3ZhKHRoaXMsIFwiZ2V0Q3VycmVudFBvc2l0aW9uXCIsIHsgXCJjYWxsYmFja09yZGVyXCI6IFwicmV2ZXJzZVwiIH0sIGFyZ3VtZW50cyk7IH07XG4gICAgLyoqXG4gICAgICogV2F0Y2ggdGhlIGN1cnJlbnQgZGV2aWNlJ3MgcG9zaXRpb24uICBDbGVhciB0aGUgd2F0Y2ggYnkgdW5zdWJzY3JpYmluZyBmcm9tXG4gICAgICogT2JzZXJ2YWJsZSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbigpXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigocCkgPT4gcC5jb29yZHMgIT09IHVuZGVmaW5lZCkgLy9GaWx0ZXIgT3V0IEVycm9yc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocG9zaXRpb24gPT4ge1xuICAgICAqICAgY29uc29sZS5sb2cocG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSArICcgJyArIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgICogfSk7XG4gICAgICpcbiAgICAgKiAvLyBUbyBzdG9wIG5vdGlmaWNhdGlvbnNcbiAgICAgKiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7R2VvbG9jYXRpb25PcHRpb25zfSBvcHRpb25zICBUaGUgW2dlb2xvY2F0aW9uIG9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbk9wdGlvbnMpLlxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEdlb3Bvc2l0aW9uIHwgUG9zaXRpb25FcnJvcj59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHdpdGggdGhlIFtwb3NpdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Bvc2l0aW9uKSBvZiB0aGUgZGV2aWNlLCBvciBlcnJvcnMuXG4gICAgICovXG4gICAgR2VvbG9jYXRpb24ucHJvdG90eXBlLndhdGNoUG9zaXRpb24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICB2YXIgd2F0Y2hJZCA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKHdhdGNoSWQpOyB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEdlb2xvY2F0aW9uLnBsdWdpbk5hbWUgPSBcIkdlb2xvY2F0aW9uXCI7XG4gICAgR2VvbG9jYXRpb24ucGx1Z2luID0gXCJjb3Jkb3ZhLXBsdWdpbi1nZW9sb2NhdGlvblwiO1xuICAgIEdlb2xvY2F0aW9uLnBsdWdpblJlZiA9IFwibmF2aWdhdG9yLmdlb2xvY2F0aW9uXCI7XG4gICAgR2VvbG9jYXRpb24ucmVwbyA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1nZW9sb2NhdGlvblwiO1xuICAgIEdlb2xvY2F0aW9uLmluc3RhbGwgPSBcImlvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nZW9sb2NhdGlvbiAtLXZhcmlhYmxlIEdFT0xPQ0FUSU9OX1VTQUdFX0RFU0NSSVBUSU9OPVxcXCJUbyBsb2NhdGUgeW91XFxcIlwiO1xuICAgIEdlb2xvY2F0aW9uLmluc3RhbGxWYXJpYWJsZXMgPSBbXCJHRU9MT0NBVElPTl9VU0FHRV9ERVNDUklQVElPTlwiXTtcbiAgICBHZW9sb2NhdGlvbi5wbGF0Zm9ybXMgPSBbXCJBbWF6b24gRmlyZSBPU1wiLCBcIkFuZHJvaWRcIiwgXCJCcm93c2VyXCIsIFwiaU9TXCIsIFwiV2luZG93c1wiXTtcbkdlb2xvY2F0aW9uLsm1ZmFjID0gLypAX19QVVJFX18qLyBmdW5jdGlvbiAoKSB7IHZhciDJtUdlb2xvY2F0aW9uX0Jhc2VGYWN0b3J5OyByZXR1cm4gZnVuY3Rpb24gR2VvbG9jYXRpb25fRmFjdG9yeSh0KSB7IHJldHVybiAoybVHZW9sb2NhdGlvbl9CYXNlRmFjdG9yeSB8fCAoybVHZW9sb2NhdGlvbl9CYXNlRmFjdG9yeSA9IMm1bmdjYzAuybXJtWdldEluaGVyaXRlZEZhY3RvcnkoR2VvbG9jYXRpb24pKSkodCB8fCBHZW9sb2NhdGlvbik7IH07IH0oKTtcbkdlb2xvY2F0aW9uLsm1cHJvdiA9IC8qQF9fUFVSRV9fKi8gybVuZ2NjMC7Jtcm1ZGVmaW5lSW5qZWN0YWJsZSh7IHRva2VuOiBHZW9sb2NhdGlvbiwgZmFjdG9yeTogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIEdlb2xvY2F0aW9uLsm1ZmFjKHQpOyB9IH0pO1xuKGZ1bmN0aW9uICgpIHsgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiDJtW5nY2MwLsm1c2V0Q2xhc3NNZXRhZGF0YShHZW9sb2NhdGlvbiwgW3tcbiAgICAgICAgdHlwZTogSW5qZWN0YWJsZVxuICAgIH1dLCBudWxsLCBudWxsKTsgfSkoKTtcbiAgICByZXR1cm4gR2VvbG9jYXRpb247XG59KEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luKSk7XG5leHBvcnQgeyBHZW9sb2NhdGlvbiB9O1xuXG4iXSwibmFtZXMiOlsiY2hlY2tBdmFpbGFiaWxpdHkiLCJnZXQiLCJBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiIsImluc3RhbGxlZCIsImlzQXZhaWxhYmxlIiwicGx1Z2luUmVmIiwiZ2V0UGx1Z2luIiwid2luZG93IiwiZ2V0UGx1Z2luTmFtZSIsInBsdWdpbk5hbWUiLCJnZXRQbHVnaW5SZWYiLCJnZXRQbHVnaW5JbnN0YWxsTmFtZSIsInBsdWdpbiIsImdldFN1cHBvcnRlZFBsYXRmb3JtcyIsInBsYXRmb3JtIiwicGxhdGZvcm1zIiwicmVwbyIsImluc3RhbGwiLCJjaGVja1JlYWR5IiwicHJvY2VzcyIsIndpbl8xIiwiREVWSUNFX1JFQURZX1RJTUVPVVRfMSIsImJlZm9yZV8xIiwiRGF0ZSIsIm5vdyIsImRpZEZpcmVSZWFkeV8xIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJjb3Jkb3ZhIiwid2FybiIsImZyb21FdmVudCIsIk9ic2VydmFibGUiLCJFUlJfQ09SRE9WQV9OT1RfQVZBSUxBQkxFIiwiZXJyb3IiLCJFUlJfUExVR0lOX05PVF9JTlNUQUxMRUQiLCJnZXRQcm9taXNlIiwiY2FsbGJhY2siLCJ0cnlOYXRpdmVQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhbmd1bGFyIiwiZG9jIiwiaW5qZWN0b3IiLCJlbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImJvZHkiLCIkcSIsIndyYXBQcm9taXNlIiwicGx1Z2luT2JqIiwibWV0aG9kTmFtZSIsImFyZ3MiLCJvcHRzIiwicGx1Z2luUmVzdWx0IiwicmVqIiwicCIsImRlc3RydWN0IiwiY2FsbENvcmRvdmFQbHVnaW4iLCJfaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNhdGNoIiwid3JhcE90aGVyUHJvbWlzZSIsInRoZW4iLCJ3cmFwT2JzZXJ2YWJsZSIsIm9ic2VydmVyIiwibmV4dCIsImJpbmQiLCJjb21wbGV0ZSIsImNsZWFyRnVuY3Rpb24iLCJjbGVhcldpdGhBcmdzIiwiZSIsImNvbnN0cnVjdG9yIiwid3JhcEV2ZW50T2JzZXJ2YWJsZSIsImV2ZW50IiwicGx1Z2luUGFja2FnZSIsInBsdWdpbkluc3RhbmNlIiwiY29yZG92YVdhcm4iLCJwbHVnaW5XYXJuIiwiaW5zdGFuY2VBdmFpbGFiaWxpdHkiLCJfb2JqZWN0SW5zdGFuY2UiLCJzZXRJbmRleCIsInN5bmMiLCJjYWxsYmFja09yZGVyIiwidW5zaGlmdCIsImNhbGxiYWNrU3R5bGUiLCJwdXNoIiwiZXJyIiwicmVzdWx0Iiwic3VjY2Vzc05hbWUiLCJlcnJvck5hbWUiLCJvYmoiLCJzdWNjZXNzSW5kZXgiLCJlcnJvckluZGV4Iiwic2V0U3VjY2Vzc0luZGV4Iiwic3BsaWNlIiwic2V0RXJyb3JJbmRleCIsImF2YWlsYWJpbGl0eUNoZWNrIiwiYXBwbHkiLCJjYWxsSW5zdGFuY2UiLCJwYXRoIiwicGF0aHMiLCJzcGxpdCIsImkiLCJtZXRob2QiLCJ3cmFwIiwib2JzZXJ2YWJsZSIsImV2ZW50T2JzZXJ2YWJsZSIsIm90aGVyUHJvbWlzZSIsIndyYXBJbnN0YW5jZSIsInBsdWdpblJlc3VsdF8xIiwicmVqXzEiLCJvdmVycmlkZUZ1bmN0aW9uIiwicGx1Z2luSW5zdGFuY2VfMSIsImNvcmRvdmFGdW5jdGlvbk92ZXJyaWRlIiwiY29yZG92YUluc3RhbmNlIiwiY29uZmlnIiwiQXJyYXkiLCJmcm9tIiwiY29yZG92YVByb3BlcnR5R2V0Iiwia2V5IiwiY29yZG92YVByb3BlcnR5U2V0IiwidmFsdWUiLCJpbnN0YW5jZVByb3BlcnR5R2V0IiwiaW5zdGFuY2VQcm9wZXJ0eVNldCIsIl9fZXh0ZW5kcyIsIkluamVjdGFibGUiLCLJtW5nY2MwIiwiR2VvbG9jYXRpb24iLCJfc3VwZXIiLCJwcm90b3R5cGUiLCJnZXRDdXJyZW50UG9zaXRpb24iLCJvcHRpb25zIiwid2F0Y2hQb3NpdGlvbiIsIndhdGNoSWQiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImNsZWFyV2F0Y2giLCJpbnN0YWxsVmFyaWFibGVzIiwiybVmYWMiLCLJtUdlb2xvY2F0aW9uX0Jhc2VGYWN0b3J5IiwiR2VvbG9jYXRpb25fRmFjdG9yeSIsInQiLCLJtcm1Z2V0SW5oZXJpdGVkRmFjdG9yeSIsIsm1cHJvdiIsIsm1ybVkZWZpbmVJbmplY3RhYmxlIiwidG9rZW4iLCJmYWN0b3J5IiwibmdEZXZNb2RlIiwiybVzZXRDbGFzc01ldGFkYXRhIiwidHlwZSJdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNF19