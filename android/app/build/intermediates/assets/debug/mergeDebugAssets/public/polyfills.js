(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["polyfills"],{

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zone_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zone-flags */ 8270);
/* harmony import */ var _zone_flags__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zone_flags__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone */ 3484);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 8270:
/*!***************************!*\
  !*** ./src/zone-flags.ts ***!
  \***************************/
/***/ (() => {

/**
 * Prevents Angular change detection from
 * running with certain Web Component callbacks
 */
// eslint-disable-next-line no-underscore-dangle
window.__Zone_disable_customElements = true;


/***/ }),

/***/ 3484:
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * @license Angular v14.2.0-next.0
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */


(function (factory) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(function () {
  'use strict';
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */

  (function (global) {
    var performance = global['performance'];

    function mark(name) {
      performance && performance['mark'] && performance['mark'](name);
    }

    function performanceMeasure(name, label) {
      performance && performance['measure'] && performance['measure'](name, label);
    }

    mark('Zone'); // Initialize before it's accessed below.
    // __Zone_symbol_prefix global can be used to override the default zone
    // symbol prefix with a custom one if needed.

    var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

    function __symbol__(name) {
      return symbolPrefix + name;
    }

    var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

    if (global['Zone']) {
      // if global['Zone'] already exists (maybe zone.js was already loaded or
      // some other lib also registered a global object named Zone), we may need
      // to throw an error, but sometimes user may not want this error.
      // For example,
      // we have two web pages, page1 includes zone.js, page2 doesn't.
      // and the 1st time user load page1 and page2, everything work fine,
      // but when user load page2 again, error occurs because global['Zone'] already exists.
      // so we add a flag to let user choose whether to throw this error or not.
      // By default, if existing Zone is from zone.js, we will not throw the error.
      if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
        throw new Error('Zone already loaded.');
      } else {
        return global['Zone'];
      }
    }

    var Zone =
    /** @class */
    function () {
      function Zone(parent, zoneSpec) {
        this._parent = parent;
        this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
        this._properties = zoneSpec && zoneSpec.properties || {};
        this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
      }

      Zone.assertZonePatched = function () {
        if (global['Promise'] !== patches['ZoneAwarePromise']) {
          throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
        }
      };

      Object.defineProperty(Zone, "root", {
        get: function () {
          var zone = Zone.current;

          while (zone.parent) {
            zone = zone.parent;
          }

          return zone;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Zone, "current", {
        get: function () {
          return _currentZoneFrame.zone;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Zone, "currentTask", {
        get: function () {
          return _currentTask;
        },
        enumerable: false,
        configurable: true
      }); // tslint:disable-next-line:require-internal-with-underscore

      Zone.__load_patch = function (name, fn, ignoreDuplicate) {
        if (ignoreDuplicate === void 0) {
          ignoreDuplicate = false;
        }

        if (patches.hasOwnProperty(name)) {
          // `checkDuplicate` option is defined from global variable
          // so it works for all modules.
          // `ignoreDuplicate` can work for the specified module
          if (!ignoreDuplicate && checkDuplicate) {
            throw Error('Already loaded patch: ' + name);
          }
        } else if (!global['__Zone_disable_' + name]) {
          var perfName = 'Zone:' + name;
          mark(perfName);
          patches[name] = fn(global, Zone, _api);
          performanceMeasure(perfName, perfName);
        }
      };

      Object.defineProperty(Zone.prototype, "parent", {
        get: function () {
          return this._parent;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Zone.prototype, "name", {
        get: function () {
          return this._name;
        },
        enumerable: false,
        configurable: true
      });

      Zone.prototype.get = function (key) {
        var zone = this.getZoneWith(key);
        if (zone) return zone._properties[key];
      };

      Zone.prototype.getZoneWith = function (key) {
        var current = this;

        while (current) {
          if (current._properties.hasOwnProperty(key)) {
            return current;
          }

          current = current._parent;
        }

        return null;
      };

      Zone.prototype.fork = function (zoneSpec) {
        if (!zoneSpec) throw new Error('ZoneSpec required!');
        return this._zoneDelegate.fork(this, zoneSpec);
      };

      Zone.prototype.wrap = function (callback, source) {
        if (typeof callback !== 'function') {
          throw new Error('Expecting function got: ' + callback);
        }

        var _callback = this._zoneDelegate.intercept(this, callback, source);

        var zone = this;
        return function () {
          return zone.runGuarded(_callback, this, arguments, source);
        };
      };

      Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } finally {
          _currentZoneFrame = _currentZoneFrame.parent;
        }
      };

      Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
        if (applyThis === void 0) {
          applyThis = null;
        }

        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          try {
            return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          _currentZoneFrame = _currentZoneFrame.parent;
        }
      };

      Zone.prototype.runTask = function (task, applyThis, applyArgs) {
        if (task.zone != this) {
          throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
        } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
        // will run in notScheduled(canceled) state, we should not try to
        // run such kind of task but just return


        if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
          return;
        }

        var reEntryGuard = task.state != running;
        reEntryGuard && task._transitionTo(running, scheduled);
        task.runCount++;
        var previousTask = _currentTask;
        _currentTask = task;
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          if (task.type == macroTask && task.data && !task.data.isPeriodic) {
            task.cancelFn = undefined;
          }

          try {
            return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          // if the task's state is notScheduled or unknown, then it has already been cancelled
          // we should not reset the state to scheduled
          if (task.state !== notScheduled && task.state !== unknown) {
            if (task.type == eventTask || task.data && task.data.isPeriodic) {
              reEntryGuard && task._transitionTo(scheduled, running);
            } else {
              task.runCount = 0;

              this._updateTaskCount(task, -1);

              reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
            }
          }

          _currentZoneFrame = _currentZoneFrame.parent;
          _currentTask = previousTask;
        }
      };

      Zone.prototype.scheduleTask = function (task) {
        if (task.zone && task.zone !== this) {
          // check if the task was rescheduled, the newZone
          // should not be the children of the original zone
          var newZone = this;

          while (newZone) {
            if (newZone === task.zone) {
              throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
            }

            newZone = newZone.parent;
          }
        }

        task._transitionTo(scheduling, notScheduled);

        var zoneDelegates = [];
        task._zoneDelegates = zoneDelegates;
        task._zone = this;

        try {
          task = this._zoneDelegate.scheduleTask(this, task);
        } catch (err) {
          // should set task's state to unknown when scheduleTask throw error
          // because the err may from reschedule, so the fromState maybe notScheduled
          task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


          this._zoneDelegate.handleError(this, err);

          throw err;
        }

        if (task._zoneDelegates === zoneDelegates) {
          // we have to check because internally the delegate can reschedule the task.
          this._updateTaskCount(task, 1);
        }

        if (task.state == scheduling) {
          task._transitionTo(scheduled, scheduling);
        }

        return task;
      };

      Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
        return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
      };

      Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
        return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
      };

      Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
        return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
      };

      Zone.prototype.cancelTask = function (task) {
        if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

        task._transitionTo(canceling, scheduled, running);

        try {
          this._zoneDelegate.cancelTask(this, task);
        } catch (err) {
          // if error occurs when cancelTask, transit the state to unknown
          task._transitionTo(unknown, canceling);

          this._zoneDelegate.handleError(this, err);

          throw err;
        }

        this._updateTaskCount(task, -1);

        task._transitionTo(notScheduled, canceling);

        task.runCount = 0;
        return task;
      };

      Zone.prototype._updateTaskCount = function (task, count) {
        var zoneDelegates = task._zoneDelegates;

        if (count == -1) {
          task._zoneDelegates = null;
        }

        for (var i = 0; i < zoneDelegates.length; i++) {
          zoneDelegates[i]._updateTaskCount(task.type, count);
        }
      };

      return Zone;
    }(); // tslint:disable-next-line:require-internal-with-underscore


    Zone.__symbol__ = __symbol__;
    var DELEGATE_ZS = {
      name: '',
      onHasTask: function (delegate, _, target, hasTaskState) {
        return delegate.hasTask(target, hasTaskState);
      },
      onScheduleTask: function (delegate, _, target, task) {
        return delegate.scheduleTask(target, task);
      },
      onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
        return delegate.invokeTask(target, task, applyThis, applyArgs);
      },
      onCancelTask: function (delegate, _, target, task) {
        return delegate.cancelTask(target, task);
      }
    };

    var _ZoneDelegate =
    /** @class */
    function () {
      function _ZoneDelegate(zone, parentDelegate, zoneSpec) {
        this._taskCounts = {
          'microTask': 0,
          'macroTask': 0,
          'eventTask': 0
        };
        this.zone = zone;
        this._parentDelegate = parentDelegate;
        this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
        this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
        this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
        this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
        this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
        this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
        this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
        this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
        this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
        this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
        this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
        this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
        this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
        this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
        this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
        this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
        this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
        this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
        this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
        this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
        this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
        this._hasTaskZS = null;
        this._hasTaskDlgt = null;
        this._hasTaskDlgtOwner = null;
        this._hasTaskCurrZone = null;
        var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
        var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

        if (zoneSpecHasTask || parentHasTask) {
          // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
          // a case all task related interceptors must go through this ZD. We can't short circuit it.
          this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
          this._hasTaskDlgt = parentDelegate;
          this._hasTaskDlgtOwner = this;
          this._hasTaskCurrZone = zone;

          if (!zoneSpec.onScheduleTask) {
            this._scheduleTaskZS = DELEGATE_ZS;
            this._scheduleTaskDlgt = parentDelegate;
            this._scheduleTaskCurrZone = this.zone;
          }

          if (!zoneSpec.onInvokeTask) {
            this._invokeTaskZS = DELEGATE_ZS;
            this._invokeTaskDlgt = parentDelegate;
            this._invokeTaskCurrZone = this.zone;
          }

          if (!zoneSpec.onCancelTask) {
            this._cancelTaskZS = DELEGATE_ZS;
            this._cancelTaskDlgt = parentDelegate;
            this._cancelTaskCurrZone = this.zone;
          }
        }
      }

      _ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
        return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
      };

      _ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
        return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
      };

      _ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
        return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
      };

      _ZoneDelegate.prototype.handleError = function (targetZone, error) {
        return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
      };

      _ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
        var returnTask = task;

        if (this._scheduleTaskZS) {
          if (this._hasTaskZS) {
            returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
          } // clang-format off


          returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task); // clang-format on

          if (!returnTask) returnTask = task;
        } else {
          if (task.scheduleFn) {
            task.scheduleFn(task);
          } else if (task.type == microTask) {
            scheduleMicroTask(task);
          } else {
            throw new Error('Task is missing scheduleFn.');
          }
        }

        return returnTask;
      };

      _ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
        return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
      };

      _ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
        var value;

        if (this._cancelTaskZS) {
          value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
        } else {
          if (!task.cancelFn) {
            throw Error('Task is not cancelable');
          }

          value = task.cancelFn(task);
        }

        return value;
      };

      _ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
        // hasTask should not throw error so other ZoneDelegate
        // can still trigger hasTask callback
        try {
          this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
        } catch (err) {
          this.handleError(targetZone, err);
        }
      }; // tslint:disable-next-line:require-internal-with-underscore


      _ZoneDelegate.prototype._updateTaskCount = function (type, count) {
        var counts = this._taskCounts;
        var prev = counts[type];
        var next = counts[type] = prev + count;

        if (next < 0) {
          throw new Error('More tasks executed then were scheduled.');
        }

        if (prev == 0 || next == 0) {
          var isEmpty = {
            microTask: counts['microTask'] > 0,
            macroTask: counts['macroTask'] > 0,
            eventTask: counts['eventTask'] > 0,
            change: type
          };
          this.hasTask(this.zone, isEmpty);
        }
      };

      return _ZoneDelegate;
    }();

    var ZoneTask =
    /** @class */
    function () {
      function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
        // tslint:disable-next-line:require-internal-with-underscore
        this._zone = null;
        this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

        this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

        this._state = 'notScheduled';
        this.type = type;
        this.source = source;
        this.data = options;
        this.scheduleFn = scheduleFn;
        this.cancelFn = cancelFn;

        if (!callback) {
          throw new Error('callback is not defined');
        }

        this.callback = callback;
        var self = this; // TODO: @JiaLiPassion options should have interface

        if (type === eventTask && options && options.useG) {
          this.invoke = ZoneTask.invokeTask;
        } else {
          this.invoke = function () {
            return ZoneTask.invokeTask.call(global, self, this, arguments);
          };
        }
      }

      ZoneTask.invokeTask = function (task, target, args) {
        if (!task) {
          task = this;
        }

        _numberOfNestedTaskFrames++;

        try {
          task.runCount++;
          return task.zone.runTask(task, target, args);
        } finally {
          if (_numberOfNestedTaskFrames == 1) {
            drainMicroTaskQueue();
          }

          _numberOfNestedTaskFrames--;
        }
      };

      Object.defineProperty(ZoneTask.prototype, "zone", {
        get: function () {
          return this._zone;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ZoneTask.prototype, "state", {
        get: function () {
          return this._state;
        },
        enumerable: false,
        configurable: true
      });

      ZoneTask.prototype.cancelScheduleRequest = function () {
        this._transitionTo(notScheduled, scheduling);
      }; // tslint:disable-next-line:require-internal-with-underscore


      ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
        if (this._state === fromState1 || this._state === fromState2) {
          this._state = toState;

          if (toState == notScheduled) {
            this._zoneDelegates = null;
          }
        } else {
          throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
        }
      };

      ZoneTask.prototype.toString = function () {
        if (this.data && typeof this.data.handleId !== 'undefined') {
          return this.data.handleId.toString();
        } else {
          return Object.prototype.toString.call(this);
        }
      }; // add toJSON method to prevent cyclic error when
      // call JSON.stringify(zoneTask)


      ZoneTask.prototype.toJSON = function () {
        return {
          type: this.type,
          state: this.state,
          source: this.source,
          zone: this.zone.name,
          runCount: this.runCount
        };
      };

      return ZoneTask;
    }(); //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////


    var symbolSetTimeout = __symbol__('setTimeout');

    var symbolPromise = __symbol__('Promise');

    var symbolThen = __symbol__('then');

    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;

    function nativeScheduleMicroTask(func) {
      if (!nativeMicroTaskQueuePromise) {
        if (global[symbolPromise]) {
          nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
        }
      }

      if (nativeMicroTaskQueuePromise) {
        var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

        if (!nativeThen) {
          // native Promise is not patchable, we need to use `then` directly
          // issue 1078
          nativeThen = nativeMicroTaskQueuePromise['then'];
        }

        nativeThen.call(nativeMicroTaskQueuePromise, func);
      } else {
        global[symbolSetTimeout](func, 0);
      }
    }

    function scheduleMicroTask(task) {
      // if we are not running in any task, and there has not been anything scheduled
      // we must bootstrap the initial task creation by manually scheduling the drain
      if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
        // We are not running in Task, so we need to kickstart the microtask queue.
        nativeScheduleMicroTask(drainMicroTaskQueue);
      }

      task && _microTaskQueue.push(task);
    }

    function drainMicroTaskQueue() {
      if (!_isDrainingMicrotaskQueue) {
        _isDrainingMicrotaskQueue = true;

        while (_microTaskQueue.length) {
          var queue = _microTaskQueue;
          _microTaskQueue = [];

          for (var i = 0; i < queue.length; i++) {
            var task = queue[i];

            try {
              task.zone.runTask(task, null, null);
            } catch (error) {
              _api.onUnhandledError(error);
            }
          }
        }

        _api.microtaskDrainDone();

        _isDrainingMicrotaskQueue = false;
      }
    } //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////


    var NO_ZONE = {
      name: 'NO ZONE'
    };
    var notScheduled = 'notScheduled',
        scheduling = 'scheduling',
        scheduled = 'scheduled',
        running = 'running',
        canceling = 'canceling',
        unknown = 'unknown';
    var microTask = 'microTask',
        macroTask = 'macroTask',
        eventTask = 'eventTask';
    var patches = {};
    var _api = {
      symbol: __symbol__,
      currentZoneFrame: function () {
        return _currentZoneFrame;
      },
      onUnhandledError: noop,
      microtaskDrainDone: noop,
      scheduleMicroTask: scheduleMicroTask,
      showUncaughtError: function () {
        return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
      },
      patchEventTarget: function () {
        return [];
      },
      patchOnProperties: noop,
      patchMethod: function () {
        return noop;
      },
      bindArguments: function () {
        return [];
      },
      patchThen: function () {
        return noop;
      },
      patchMacroTask: function () {
        return noop;
      },
      patchEventPrototype: function () {
        return noop;
      },
      isIEOrEdge: function () {
        return false;
      },
      getGlobalObjects: function () {
        return undefined;
      },
      ObjectDefineProperty: function () {
        return noop;
      },
      ObjectGetOwnPropertyDescriptor: function () {
        return undefined;
      },
      ObjectCreate: function () {
        return undefined;
      },
      ArraySlice: function () {
        return [];
      },
      patchClass: function () {
        return noop;
      },
      wrapWithCurrentZone: function () {
        return noop;
      },
      filterProperties: function () {
        return [];
      },
      attachOriginToPatched: function () {
        return noop;
      },
      _redefineProperty: function () {
        return noop;
      },
      patchCallbacks: function () {
        return noop;
      },
      nativeScheduleMicroTask: nativeScheduleMicroTask
    };
    var _currentZoneFrame = {
      parent: null,
      zone: new Zone(null, null)
    };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;

    function noop() {}

    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
  })(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */

  /**
   * Suppress closure compiler errors about unknown 'Zone' variable
   * @fileoverview
   * @suppress {undefinedVars,globalThis,missingRequire}
   */
  /// <reference types="node"/>
  // issue #989, to reduce bundle size, use short name

  /** Object.getOwnPropertyDescriptor */


  var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  /** Object.defineProperty */

  var ObjectDefineProperty = Object.defineProperty;
  /** Object.getPrototypeOf */

  var ObjectGetPrototypeOf = Object.getPrototypeOf;
  /** Object.create */

  var ObjectCreate = Object.create;
  /** Array.prototype.slice */

  var ArraySlice = Array.prototype.slice;
  /** addEventListener string const */

  var ADD_EVENT_LISTENER_STR = 'addEventListener';
  /** removeEventListener string const */

  var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
  /** zoneSymbol addEventListener */

  var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
  /** zoneSymbol removeEventListener */


  var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
  /** true string const */


  var TRUE_STR = 'true';
  /** false string const */

  var FALSE_STR = 'false';
  /** Zone symbol prefix string const. */

  var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

  function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
  }

  function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
  }

  var zoneSymbol$1 = Zone.__symbol__;
  var isWindowExists = typeof window !== 'undefined';
  var internalWindow = isWindowExists ? window : undefined;

  var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

  var REMOVE_ATTRIBUTE = 'removeAttribute';

  function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
      if (typeof args[i] === 'function') {
        args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
      }
    }

    return args;
  }

  function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];

    var _loop_1 = function (i) {
      var name_1 = fnNames[i];
      var delegate = prototype[name_1];

      if (delegate) {
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);

        if (!isPropertyWritable(prototypeDesc)) {
          return "continue";
        }

        prototype[name_1] = function (delegate) {
          var patched = function () {
            return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
          };

          attachOriginToPatched(patched, delegate);
          return patched;
        }(delegate);
      }
    };

    for (var i = 0; i < fnNames.length; i++) {
      _loop_1(i);
    }
  }

  function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
      return true;
    }

    if (propertyDesc.writable === false) {
      return false;
    }

    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
  }

  var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
  // this code.

  var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
  var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
  // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
  // this code.

  var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
  var zoneSymbolEventNames$1 = {};

  var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;

    if (!event) {
      return;
    }

    var eventNameSymbol = zoneSymbolEventNames$1[event.type];

    if (!eventNameSymbol) {
      eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol$1('ON_PROPERTY' + event.type);
    }

    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;

    if (isBrowser && target === internalWindow && event.type === 'error') {
      // window.onerror have different signature
      // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
      // and onerror callback will prevent default when callback return true
      var errorEvent = event;
      result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

      if (result === true) {
        event.preventDefault();
      }
    } else {
      result = listener && listener.apply(this, arguments);

      if (result != undefined && !result) {
        event.preventDefault();
      }
    }

    return result;
  };

  function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

    if (!desc && prototype) {
      // when patch window object, use prototype to check prop exist or not
      var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

      if (prototypeDesc) {
        desc = {
          enumerable: true,
          configurable: true
        };
      }
    } // if the descriptor not exists or is not configurable
    // just return


    if (!desc || !desc.configurable) {
      return;
    }

    var onPropPatchedSymbol = zoneSymbol$1('on' + prop + 'patched');

    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
      return;
    } // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified


    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set; // slice(2) cuz 'onclick' -> 'click', etc

    var eventName = prop.slice(2);
    var eventNameSymbol = zoneSymbolEventNames$1[eventName];

    if (!eventNameSymbol) {
      eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol$1('ON_PROPERTY' + eventName);
    }

    desc.set = function (newValue) {
      // in some of windows's onproperty callback, this is undefined
      // so we need to check it
      var target = this;

      if (!target && obj === _global) {
        target = _global;
      }

      if (!target) {
        return;
      }

      var previousValue = target[eventNameSymbol];

      if (typeof previousValue === 'function') {
        target.removeEventListener(eventName, wrapFn);
      } // issue #978, when onload handler was added before loading zone.js
      // we should remove it with originalDescSet


      originalDescSet && originalDescSet.call(target, null);
      target[eventNameSymbol] = newValue;

      if (typeof newValue === 'function') {
        target.addEventListener(eventName, wrapFn, false);
      }
    }; // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null


    desc.get = function () {
      // in some of windows's onproperty callback, this is undefined
      // so we need to check it
      var target = this;

      if (!target && obj === _global) {
        target = _global;
      }

      if (!target) {
        return null;
      }

      var listener = target[eventNameSymbol];

      if (listener) {
        return listener;
      } else if (originalDescGet) {
        // result will be null when use inline event attribute,
        // such as <button onclick="func();">OK</button>
        // because the onclick function is internal raw uncompiled handler
        // the onclick will be evaluated when first time event was triggered or
        // the property is accessed, https://github.com/angular/zone.js/issues/525
        // so we should use original native get to retrieve the handler
        var value = originalDescGet.call(this);

        if (value) {
          desc.set.call(this, value);

          if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
            target.removeAttribute(prop);
          }

          return value;
        }
      }

      return null;
    };

    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
  }

  function patchOnProperties(obj, properties, prototype) {
    if (properties) {
      for (var i = 0; i < properties.length; i++) {
        patchProperty(obj, 'on' + properties[i], prototype);
      }
    } else {
      var onProperties = [];

      for (var prop in obj) {
        if (prop.slice(0, 2) == 'on') {
          onProperties.push(prop);
        }
      }

      for (var j = 0; j < onProperties.length; j++) {
        patchProperty(obj, onProperties[j], prototype);
      }
    }
  }

  var originalInstanceKey = zoneSymbol$1('originalInstance'); // wrap some native API on `window`

  function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass) return; // keep original class in global

    _global[zoneSymbol$1(className)] = OriginalClass;

    _global[className] = function () {
      var a = bindArguments(arguments, className);

      switch (a.length) {
        case 0:
          this[originalInstanceKey] = new OriginalClass();
          break;

        case 1:
          this[originalInstanceKey] = new OriginalClass(a[0]);
          break;

        case 2:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
          break;

        case 3:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
          break;

        case 4:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
          break;

        default:
          throw new Error('Arg list too long.');
      }
    }; // attach original delegate to patched function


    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () {});
    var prop;

    for (prop in instance) {
      // https://bugs.webkit.org/show_bug.cgi?id=44721
      if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

      (function (prop) {
        if (typeof instance[prop] === 'function') {
          _global[className].prototype[prop] = function () {
            return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
          };
        } else {
          ObjectDefineProperty(_global[className].prototype, prop, {
            set: function (fn) {
              if (typeof fn === 'function') {
                this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                // use it in Function.prototype.toString to return
                // the native one.

                attachOriginToPatched(this[originalInstanceKey][prop], fn);
              } else {
                this[originalInstanceKey][prop] = fn;
              }
            },
            get: function () {
              return this[originalInstanceKey][prop];
            }
          });
        }
      })(prop);
    }

    for (prop in OriginalClass) {
      if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
        _global[className][prop] = OriginalClass[prop];
      }
    }
  }

  function patchMethod(target, name, patchFn) {
    var proto = target;

    while (proto && !proto.hasOwnProperty(name)) {
      proto = ObjectGetPrototypeOf(proto);
    }

    if (!proto && target[name]) {
      // somehow we did not find it, but we can see it. This happens on IE for Window properties.
      proto = target;
    }

    var delegateName = zoneSymbol$1(name);
    var delegate = null;

    if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
      delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
      // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

      var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

      if (isPropertyWritable(desc)) {
        var patchDelegate_1 = patchFn(delegate, delegateName, name);

        proto[name] = function () {
          return patchDelegate_1(this, arguments);
        };

        attachOriginToPatched(proto[name], delegate);
      }
    }

    return delegate;
  } // TODO: @JiaLiPassion, support cancel task later if necessary


  function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;

    function scheduleTask(task) {
      var data = task.data;

      data.args[data.cbIdx] = function () {
        task.invoke.apply(this, arguments);
      };

      setNative.apply(data.target, data.args);
      return task;
    }

    setNative = patchMethod(obj, funcName, function (delegate) {
      return function (self, args) {
        var meta = metaCreator(self, args);

        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
          return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        } else {
          // cause an error by calling it directly.
          return delegate.apply(self, args);
        }
      };
    });
  }

  function attachOriginToPatched(patched, original) {
    patched[zoneSymbol$1('OriginalDelegate')] = original;
  }

  var isDetectedIEOrEdge = false;
  var ieOrEdge = false;

  function isIE() {
    try {
      var ua = internalWindow.navigator.userAgent;

      if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
        return true;
      }
    } catch (error) {}

    return false;
  }

  function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
      return ieOrEdge;
    }

    isDetectedIEOrEdge = true;

    try {
      var ua = internalWindow.navigator.userAgent;

      if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
        ieOrEdge = true;
      }
    } catch (error) {}

    return ieOrEdge;
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;

    function readableObjectToString(obj) {
      if (obj && obj.toString === Object.prototype.toString) {
        var className = obj.constructor && obj.constructor.name;
        return (className ? className : '') + ': ' + JSON.stringify(obj);
      }

      return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }

    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;

    var symbolPromise = __symbol__('Promise');

    var symbolThen = __symbol__('then');

    var creationTrace = '__creationTrace__';

    api.onUnhandledError = function (e) {
      if (api.showUncaughtError()) {
        var rejection = e && e.rejection;

        if (rejection) {
          console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
        } else {
          console.error(e);
        }
      }
    };

    api.microtaskDrainDone = function () {
      var _loop_2 = function () {
        var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

        try {
          uncaughtPromiseError.zone.runGuarded(function () {
            if (uncaughtPromiseError.throwOriginal) {
              throw uncaughtPromiseError.rejection;
            }

            throw uncaughtPromiseError;
          });
        } catch (error) {
          handleUnhandledRejection(error);
        }
      };

      while (_uncaughtPromiseErrors.length) {
        _loop_2();
      }
    };

    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

    function handleUnhandledRejection(e) {
      api.onUnhandledError(e);

      try {
        var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

        if (typeof handler === 'function') {
          handler.call(this, e);
        }
      } catch (err) {}
    }

    function isThenable(value) {
      return value && value.then;
    }

    function forwardResolution(value) {
      return value;
    }

    function forwardRejection(rejection) {
      return ZoneAwarePromise.reject(rejection);
    }

    var symbolState = __symbol__('state');

    var symbolValue = __symbol__('value');

    var symbolFinally = __symbol__('finally');

    var symbolParentPromiseValue = __symbol__('parentPromiseValue');

    var symbolParentPromiseState = __symbol__('parentPromiseState');

    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;

    function makeResolver(promise, state) {
      return function (v) {
        try {
          resolvePromise(promise, state, v);
        } catch (err) {
          resolvePromise(promise, false, err);
        } // Do not return value or you will break the Promise spec.

      };
    }

    var once = function () {
      var wasCalled = false;
      return function wrapper(wrappedFunction) {
        return function () {
          if (wasCalled) {
            return;
          }

          wasCalled = true;
          wrappedFunction.apply(null, arguments);
        };
      };
    };

    var TYPE_ERROR = 'Promise resolved with itself';

    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


    function resolvePromise(promise, state, value) {
      var onceWrapper = once();

      if (promise === value) {
        throw new TypeError(TYPE_ERROR);
      }

      if (promise[symbolState] === UNRESOLVED) {
        // should only get value.then once based on promise spec.
        var then = null;

        try {
          if (typeof value === 'object' || typeof value === 'function') {
            then = value && value.then;
          }
        } catch (err) {
          onceWrapper(function () {
            resolvePromise(promise, false, err);
          })();
          return promise;
        } // if (value instanceof ZoneAwarePromise) {


        if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
          clearRejectedNoCatch(value);
          resolvePromise(promise, value[symbolState], value[symbolValue]);
        } else if (state !== REJECTED && typeof then === 'function') {
          try {
            then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
          } catch (err) {
            onceWrapper(function () {
              resolvePromise(promise, false, err);
            })();
          }
        } else {
          promise[symbolState] = state;
          var queue = promise[symbolValue];
          promise[symbolValue] = value;

          if (promise[symbolFinally] === symbolFinally) {
            // the promise is generated by Promise.prototype.finally
            if (state === RESOLVED) {
              // the state is resolved, should ignore the value
              // and use parent promise value
              promise[symbolState] = promise[symbolParentPromiseState];
              promise[symbolValue] = promise[symbolParentPromiseValue];
            }
          } // record task information in value when error occurs, so we can
          // do some additional work such as render longStackTrace


          if (state === REJECTED && value instanceof Error) {
            // check if longStackTraceZone is here
            var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

            if (trace) {
              // only keep the long stack trace into error when in longStackTraceZone
              ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                configurable: true,
                enumerable: false,
                writable: true,
                value: trace
              });
            }
          }

          for (var i = 0; i < queue.length;) {
            scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
          }

          if (queue.length == 0 && state == REJECTED) {
            promise[symbolState] = REJECTED_NO_CATCH;
            var uncaughtPromiseError = value;

            try {
              // Here we throws a new Error to print more readable error log
              // and if the value is not an error, zone.js builds an `Error`
              // Object here to attach the stack information.
              throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
            } catch (err) {
              uncaughtPromiseError = err;
            }

            if (isDisableWrappingUncaughtPromiseRejection) {
              // If disable wrapping uncaught promise reject
              // use the value instead of wrapping it.
              uncaughtPromiseError.throwOriginal = true;
            }

            uncaughtPromiseError.rejection = value;
            uncaughtPromiseError.promise = promise;
            uncaughtPromiseError.zone = Zone.current;
            uncaughtPromiseError.task = Zone.currentTask;

            _uncaughtPromiseErrors.push(uncaughtPromiseError);

            api.scheduleMicroTask(); // to make sure that it is running
          }
        }
      } // Resolving an already resolved promise is a noop.


      return promise;
    }

    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

    function clearRejectedNoCatch(promise) {
      if (promise[symbolState] === REJECTED_NO_CATCH) {
        // if the promise is rejected no catch status
        // and queue.length > 0, means there is a error handler
        // here to handle the rejected promise, we should trigger
        // windows.rejectionhandled eventHandler or nodejs rejectionHandled
        // eventHandler
        try {
          var handler = Zone[REJECTION_HANDLED_HANDLER];

          if (handler && typeof handler === 'function') {
            handler.call(this, {
              rejection: promise[symbolValue],
              promise: promise
            });
          }
        } catch (err) {}

        promise[symbolState] = REJECTED;

        for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
          if (promise === _uncaughtPromiseErrors[i].promise) {
            _uncaughtPromiseErrors.splice(i, 1);
          }
        }
      }
    }

    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
      clearRejectedNoCatch(promise);
      var promiseState = promise[symbolState];
      var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
      zone.scheduleMicroTask(source, function () {
        try {
          var parentPromiseValue = promise[symbolValue];
          var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

          if (isFinallyPromise) {
            // if the promise is generated from finally call, keep parent promise's state and value
            chainPromise[symbolParentPromiseValue] = parentPromiseValue;
            chainPromise[symbolParentPromiseState] = promiseState;
          } // should not pass value to finally callback


          var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
          resolvePromise(chainPromise, true, value);
        } catch (error) {
          // if error occurs, should always return this error
          resolvePromise(chainPromise, false, error);
        }
      }, chainPromise);
    }

    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

    var noop = function () {};

    var AggregateError = global.AggregateError;

    var ZoneAwarePromise =
    /** @class */
    function () {
      function ZoneAwarePromise(executor) {
        var promise = this;

        if (!(promise instanceof ZoneAwarePromise)) {
          throw new Error('Must be an instanceof Promise.');
        }

        promise[symbolState] = UNRESOLVED;
        promise[symbolValue] = []; // queue;

        try {
          var onceWrapper = once();
          executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
        } catch (error) {
          resolvePromise(promise, false, error);
        }
      }

      ZoneAwarePromise.toString = function () {
        return ZONE_AWARE_PROMISE_TO_STRING;
      };

      ZoneAwarePromise.resolve = function (value) {
        return resolvePromise(new this(null), RESOLVED, value);
      };

      ZoneAwarePromise.reject = function (error) {
        return resolvePromise(new this(null), REJECTED, error);
      };

      ZoneAwarePromise.any = function (values) {
        if (!values || typeof values[Symbol.iterator] !== 'function') {
          return Promise.reject(new AggregateError([], 'All promises were rejected'));
        }

        var promises = [];
        var count = 0;

        try {
          for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var v = values_1[_i];
            count++;
            promises.push(ZoneAwarePromise.resolve(v));
          }
        } catch (err) {
          return Promise.reject(new AggregateError([], 'All promises were rejected'));
        }

        if (count === 0) {
          return Promise.reject(new AggregateError([], 'All promises were rejected'));
        }

        var finished = false;
        var errors = [];
        return new ZoneAwarePromise(function (resolve, reject) {
          for (var i = 0; i < promises.length; i++) {
            promises[i].then(function (v) {
              if (finished) {
                return;
              }

              finished = true;
              resolve(v);
            }, function (err) {
              errors.push(err);
              count--;

              if (count === 0) {
                finished = true;
                reject(new AggregateError(errors, 'All promises were rejected'));
              }
            });
          }
        });
      };

      ;

      ZoneAwarePromise.race = function (values) {
        var resolve;
        var reject;
        var promise = new this(function (res, rej) {
          resolve = res;
          reject = rej;
        });

        function onResolve(value) {
          resolve(value);
        }

        function onReject(error) {
          reject(error);
        }

        for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
          var value = values_2[_i];

          if (!isThenable(value)) {
            value = this.resolve(value);
          }

          value.then(onResolve, onReject);
        }

        return promise;
      };

      ZoneAwarePromise.all = function (values) {
        return ZoneAwarePromise.allWithCallback(values);
      };

      ZoneAwarePromise.allSettled = function (values) {
        var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
        return P.allWithCallback(values, {
          thenCallback: function (value) {
            return {
              status: 'fulfilled',
              value: value
            };
          },
          errorCallback: function (err) {
            return {
              status: 'rejected',
              reason: err
            };
          }
        });
      };

      ZoneAwarePromise.allWithCallback = function (values, callback) {
        var resolve;
        var reject;
        var promise = new this(function (res, rej) {
          resolve = res;
          reject = rej;
        }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

        var unresolvedCount = 2;
        var valueIndex = 0;
        var resolvedValues = [];

        var _loop_3 = function (value) {
          if (!isThenable(value)) {
            value = this_1.resolve(value);
          }

          var curValueIndex = valueIndex;

          try {
            value.then(function (value) {
              resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
              unresolvedCount--;

              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }, function (err) {
              if (!callback) {
                reject(err);
              } else {
                resolvedValues[curValueIndex] = callback.errorCallback(err);
                unresolvedCount--;

                if (unresolvedCount === 0) {
                  resolve(resolvedValues);
                }
              }
            });
          } catch (thenErr) {
            reject(thenErr);
          }

          unresolvedCount++;
          valueIndex++;
        };

        var this_1 = this;

        for (var _i = 0, values_3 = values; _i < values_3.length; _i++) {
          var value = values_3[_i];

          _loop_3(value);
        } // Make the unresolvedCount zero-based again.


        unresolvedCount -= 2;

        if (unresolvedCount === 0) {
          resolve(resolvedValues);
        }

        return promise;
      };

      Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
        get: function () {
          return 'Promise';
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ZoneAwarePromise.prototype, Symbol.species, {
        get: function () {
          return ZoneAwarePromise;
        },
        enumerable: false,
        configurable: true
      });

      ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
        var _a; // We must read `Symbol.species` safely because `this` may be anything. For instance, `this`
        // may be an object without a prototype (created through `Object.create(null)`); thus
        // `this.constructor` will be undefined. One of the use cases is SystemJS creating
        // prototype-less objects (modules) via `Object.create(null)`. The SystemJS creates an empty
        // object and copies promise properties into that object (within the `getOrCreateLoad`
        // function). The zone.js then checks if the resolved value has the `then` method and invokes
        // it with the `value` context. Otherwise, this will throw an error: `TypeError: Cannot read
        // properties of undefined (reading 'Symbol(Symbol.species)')`.


        var C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];

        if (!C || typeof C !== 'function') {
          C = this.constructor || ZoneAwarePromise;
        }

        var chainPromise = new C(noop);
        var zone = Zone.current;

        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
        }

        return chainPromise;
      };

      ZoneAwarePromise.prototype.catch = function (onRejected) {
        return this.then(null, onRejected);
      };

      ZoneAwarePromise.prototype.finally = function (onFinally) {
        var _a; // See comment on the call to `then` about why thee `Symbol.species` is safely accessed.


        var C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];

        if (!C || typeof C !== 'function') {
          C = ZoneAwarePromise;
        }

        var chainPromise = new C(noop);
        chainPromise[symbolFinally] = symbolFinally;
        var zone = Zone.current;

        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
        }

        return chainPromise;
      };

      return ZoneAwarePromise;
    }(); // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.


    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    global['Promise'] = ZoneAwarePromise;

    var symbolThenPatched = __symbol__('thenPatched');

    function patchThen(Ctor) {
      var proto = Ctor.prototype;
      var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

      if (prop && (prop.writable === false || !prop.configurable)) {
        // check Ctor.prototype.then propertyDescriptor is writable or not
        // in meteor env, writable is false, we should ignore such case
        return;
      }

      var originalThen = proto.then; // Keep a reference to the original method.

      proto[symbolThen] = originalThen;

      Ctor.prototype.then = function (onResolve, onReject) {
        var _this = this;

        var wrapped = new ZoneAwarePromise(function (resolve, reject) {
          originalThen.call(_this, resolve, reject);
        });
        return wrapped.then(onResolve, onReject);
      };

      Ctor[symbolThenPatched] = true;
    }

    api.patchThen = patchThen;

    function zoneify(fn) {
      return function (self, args) {
        var resultPromise = fn.apply(self, args);

        if (resultPromise instanceof ZoneAwarePromise) {
          return resultPromise;
        }

        var ctor = resultPromise.constructor;

        if (!ctor[symbolThenPatched]) {
          patchThen(ctor);
        }

        return resultPromise;
      };
    }

    if (NativePromise) {
      patchThen(NativePromise);
      patchMethod(global, 'fetch', function (delegate) {
        return zoneify(delegate);
      });
    } // This is not part of public API, but it is useful for tests, so we expose it.


    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
  });
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
  // override Function.prototype.toString to make zone.js patched function
  // look like native function


  Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol$1('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol$1('Promise');
    var ERROR_SYMBOL = zoneSymbol$1('Error');

    var newFunctionToString = function toString() {
      if (typeof this === 'function') {
        var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

        if (originalDelegate) {
          if (typeof originalDelegate === 'function') {
            return originalFunctionToString.call(originalDelegate);
          } else {
            return Object.prototype.toString.call(originalDelegate);
          }
        }

        if (this === Promise) {
          var nativePromise = global[PROMISE_SYMBOL];

          if (nativePromise) {
            return originalFunctionToString.call(nativePromise);
          }
        }

        if (this === Error) {
          var nativeError = global[ERROR_SYMBOL];

          if (nativeError) {
            return originalFunctionToString.call(nativeError);
          }
        }
      }

      return originalFunctionToString.call(this);
    };

    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';

    Object.prototype.toString = function () {
      if (typeof Promise === 'function' && this instanceof Promise) {
        return PROMISE_OBJECT_TO_STRING;
      }

      return originalObjectToString.call(this);
    };
  });
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  var passiveSupported = false;

  if (typeof window !== 'undefined') {
    try {
      var options = Object.defineProperty({}, 'passive', {
        get: function () {
          passiveSupported = true;
        }
      }); // Note: We pass the `options` object as the event handler too. This is not compatible with the
      // signature of `addEventListener` or `removeEventListener` but enables us to remove the handler
      // without an actual handler.

      window.addEventListener('test', options, options);
      window.removeEventListener('test', options, options);
    } catch (err) {
      passiveSupported = false;
    }
  } // an identifier to tell ZoneTask do not create a new invoke closure


  var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
  };
  var zoneSymbolEventNames = {};
  var globalSources = {};
  var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
  var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol$1('propagationStopped');

  function prepareEventNames(eventName, eventNameToString) {
    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames[eventName] = {};
    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
  }

  function patchEventTarget(_global, api, apis, patchOptions) {
    var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol$1(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

    var invokeTask = function (task, target, event) {
      // for better performance, check isRemoved which is set
      // by removeEventListener
      if (task.isRemoved) {
        return;
      }

      var delegate = task.callback;

      if (typeof delegate === 'object' && delegate.handleEvent) {
        // create the bind version of handleEvent when invoke
        task.callback = function (event) {
          return delegate.handleEvent(event);
        };

        task.originalDelegate = delegate;
      } // invoke static task.invoke
      // need to try/catch error here, otherwise, the error in one event listener
      // will break the executions of the other event listeners. Also error will
      // not remove the event listener when `once` options is true.


      var error;

      try {
        task.invoke(task, target, [event]);
      } catch (err) {
        error = err;
      }

      var options = task.options;

      if (options && typeof options === 'object' && options.once) {
        // if options.once is true, after invoke once remove listener here
        // only browser need to do this, nodejs eventEmitter will cal removeListener
        // inside EventEmitter.once
        var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
        target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
      }

      return error;
    };

    function globalCallback(context, event, isCapture) {
      // https://github.com/angular/zone.js/issues/911, in IE, sometimes
      // event will be undefined, so we need to use window.event
      event = event || _global.event;

      if (!event) {
        return;
      } // event.target is needed for Samsung TV and SourceBuffer
      // || global is needed https://github.com/angular/zone.js/issues/190


      var target = context || event.target || _global;
      var tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];

      if (tasks) {
        var errors = []; // invoke all tasks which attached to current target with given event.type and capture = false
        // for performance concern, if task.length === 1, just invoke

        if (tasks.length === 1) {
          var err = invokeTask(tasks[0], target, event);
          err && errors.push(err);
        } else {
          // https://github.com/angular/zone.js/issues/836
          // copy the tasks array before invoke, to avoid
          // the callback will remove itself or other listener
          var copyTasks = tasks.slice();

          for (var i = 0; i < copyTasks.length; i++) {
            if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
              break;
            }

            var err = invokeTask(copyTasks[i], target, event);
            err && errors.push(err);
          }
        } // Since there is only one error, we don't need to schedule microTask
        // to throw the error.


        if (errors.length === 1) {
          throw errors[0];
        } else {
          var _loop_4 = function (i) {
            var err = errors[i];
            api.nativeScheduleMicroTask(function () {
              throw err;
            });
          };

          for (var i = 0; i < errors.length; i++) {
            _loop_4(i);
          }
        }
      }
    } // global shared zoneAwareCallback to handle all event callback with capture = false


    var globalZoneAwareCallback = function (event) {
      return globalCallback(this, event, false);
    }; // global shared zoneAwareCallback to handle all event callback with capture = true


    var globalZoneAwareCaptureCallback = function (event) {
      return globalCallback(this, event, true);
    };

    function patchEventTargetMethods(obj, patchOptions) {
      if (!obj) {
        return false;
      }

      var useGlobalCallback = true;

      if (patchOptions && patchOptions.useG !== undefined) {
        useGlobalCallback = patchOptions.useG;
      }

      var validateHandler = patchOptions && patchOptions.vh;
      var checkDuplicate = true;

      if (patchOptions && patchOptions.chkDup !== undefined) {
        checkDuplicate = patchOptions.chkDup;
      }

      var returnTarget = false;

      if (patchOptions && patchOptions.rt !== undefined) {
        returnTarget = patchOptions.rt;
      }

      var proto = obj;

      while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
        proto = ObjectGetPrototypeOf(proto);
      }

      if (!proto && obj[ADD_EVENT_LISTENER]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = obj;
      }

      if (!proto) {
        return false;
      }

      if (proto[zoneSymbolAddEventListener]) {
        return false;
      }

      var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
      // so we do not need to create a new object just for pass some data

      var taskData = {};
      var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
      var nativeRemoveEventListener = proto[zoneSymbol$1(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
      var nativeListeners = proto[zoneSymbol$1(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
      var nativeRemoveAllListeners = proto[zoneSymbol$1(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
      var nativePrependEventListener;

      if (patchOptions && patchOptions.prepend) {
        nativePrependEventListener = proto[zoneSymbol$1(patchOptions.prepend)] = proto[patchOptions.prepend];
      }
      /**
       * This util function will build an option object with passive option
       * to handle all possible input from the user.
       */


      function buildEventListenerOptions(options, passive) {
        if (!passiveSupported && typeof options === 'object' && options) {
          // doesn't support passive but user want to pass an object as options.
          // this will not work on some old browser, so we just pass a boolean
          // as useCapture parameter
          return !!options.capture;
        }

        if (!passiveSupported || !passive) {
          return options;
        }

        if (typeof options === 'boolean') {
          return {
            capture: options,
            passive: true
          };
        }

        if (!options) {
          return {
            passive: true
          };
        }

        if (typeof options === 'object' && options.passive !== false) {
          return Object.assign(Object.assign({}, options), {
            passive: true
          });
        }

        return options;
      }

      var customScheduleGlobal = function (task) {
        // if there is already a task for the eventName + capture,
        // just return, because we use the shared globalZoneAwareCallback here.
        if (taskData.isExisting) {
          return;
        }

        return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
      };

      var customCancelGlobal = function (task) {
        // if task is not marked as isRemoved, this call is directly
        // from Zone.prototype.cancelTask, we should remove the task
        // from tasksList of target first
        if (!task.isRemoved) {
          var symbolEventNames = zoneSymbolEventNames[task.eventName];
          var symbolEventName = void 0;

          if (symbolEventNames) {
            symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
          }

          var existingTasks = symbolEventName && task.target[symbolEventName];

          if (existingTasks) {
            for (var i = 0; i < existingTasks.length; i++) {
              var existingTask = existingTasks[i];

              if (existingTask === task) {
                existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                task.isRemoved = true;

                if (existingTasks.length === 0) {
                  // all tasks for the eventName + capture have gone,
                  // remove globalZoneAwareCallback and remove the task cache from target
                  task.allRemoved = true;
                  task.target[symbolEventName] = null;
                }

                break;
              }
            }
          }
        } // if all tasks for the eventName + capture have gone,
        // we will really remove the global event callback,
        // if not, return


        if (!task.allRemoved) {
          return;
        }

        return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
      };

      var customScheduleNonGlobal = function (task) {
        return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
      };

      var customSchedulePrepend = function (task) {
        return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
      };

      var customCancelNonGlobal = function (task) {
        return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
      };

      var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
      var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

      var compareTaskCallbackVsDelegate = function (task, delegate) {
        var typeOfDelegate = typeof delegate;
        return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
      };

      var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
      var unpatchedEvents = Zone[zoneSymbol$1('UNPATCHED_EVENTS')];

      var passiveEvents = _global[zoneSymbol$1('PASSIVE_EVENTS')];

      var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
        if (returnTarget === void 0) {
          returnTarget = false;
        }

        if (prepend === void 0) {
          prepend = false;
        }

        return function () {
          var target = this || _global;
          var eventName = arguments[0];

          if (patchOptions && patchOptions.transferEventName) {
            eventName = patchOptions.transferEventName(eventName);
          }

          var delegate = arguments[1];

          if (!delegate) {
            return nativeListener.apply(this, arguments);
          }

          if (isNode && eventName === 'uncaughtException') {
            // don't patch uncaughtException of nodejs to prevent endless loop
            return nativeListener.apply(this, arguments);
          } // don't create the bind delegate function for handleEvent
          // case here to improve addEventListener performance
          // we will create the bind delegate when invoke


          var isHandleEvent = false;

          if (typeof delegate !== 'function') {
            if (!delegate.handleEvent) {
              return nativeListener.apply(this, arguments);
            }

            isHandleEvent = true;
          }

          if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
            return;
          }

          var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
          var options = buildEventListenerOptions(arguments[2], passive);

          if (unpatchedEvents) {
            // check unpatched list
            for (var i = 0; i < unpatchedEvents.length; i++) {
              if (eventName === unpatchedEvents[i]) {
                if (passive) {
                  return nativeListener.call(target, eventName, delegate, options);
                } else {
                  return nativeListener.apply(this, arguments);
                }
              }
            }
          }

          var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
          var once = options && typeof options === 'object' ? options.once : false;
          var zone = Zone.current;
          var symbolEventNames = zoneSymbolEventNames[eventName];

          if (!symbolEventNames) {
            prepareEventNames(eventName, eventNameToString);
            symbolEventNames = zoneSymbolEventNames[eventName];
          }

          var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
          var existingTasks = target[symbolEventName];
          var isExisting = false;

          if (existingTasks) {
            // already have task registered
            isExisting = true;

            if (checkDuplicate) {
              for (var i = 0; i < existingTasks.length; i++) {
                if (compare(existingTasks[i], delegate)) {
                  // same callback, same capture, same event name, just return
                  return;
                }
              }
            }
          } else {
            existingTasks = target[symbolEventName] = [];
          }

          var source;
          var constructorName = target.constructor['name'];
          var targetSource = globalSources[constructorName];

          if (targetSource) {
            source = targetSource[eventName];
          }

          if (!source) {
            source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
          } // do not create a new object as task.data to pass those things
          // just use the global shared one


          taskData.options = options;

          if (once) {
            // if addEventListener with once options, we don't pass it to
            // native addEventListener, instead we keep the once setting
            // and handle ourselves.
            taskData.options.once = false;
          }

          taskData.target = target;
          taskData.capture = capture;
          taskData.eventName = eventName;
          taskData.isExisting = isExisting;
          var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

          if (data) {
            data.taskData = taskData;
          }

          var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
          // issue, https://github.com/angular/angular/issues/20442

          taskData.target = null; // need to clear up taskData because it is a global object

          if (data) {
            data.taskData = null;
          } // have to save those information to task in case
          // application may call task.zone.cancelTask() directly


          if (once) {
            options.once = true;
          }

          if (!(!passiveSupported && typeof task.options === 'boolean')) {
            // if not support passive, and we pass an option object
            // to addEventListener, we should save the options to task
            task.options = options;
          }

          task.target = target;
          task.capture = capture;
          task.eventName = eventName;

          if (isHandleEvent) {
            // save original delegate for compare to check duplicate
            task.originalDelegate = delegate;
          }

          if (!prepend) {
            existingTasks.push(task);
          } else {
            existingTasks.unshift(task);
          }

          if (returnTarget) {
            return target;
          }
        };
      };

      proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

      if (nativePrependEventListener) {
        proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
      }

      proto[REMOVE_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];

        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }

        var options = arguments[2];
        var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
        var delegate = arguments[1];

        if (!delegate) {
          return nativeRemoveEventListener.apply(this, arguments);
        }

        if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
          return;
        }

        var symbolEventNames = zoneSymbolEventNames[eventName];
        var symbolEventName;

        if (symbolEventNames) {
          symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        }

        var existingTasks = symbolEventName && target[symbolEventName];

        if (existingTasks) {
          for (var i = 0; i < existingTasks.length; i++) {
            var existingTask = existingTasks[i];

            if (compare(existingTask, delegate)) {
              existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

              existingTask.isRemoved = true;

              if (existingTasks.length === 0) {
                // all tasks for the eventName + capture have gone,
                // remove globalZoneAwareCallback and remove the task cache from target
                existingTask.allRemoved = true;
                target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
                // such as target.onclick = function() {}, so we need to clear this internal
                // property too if all delegates all removed

                if (typeof eventName === 'string') {
                  var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                  target[onPropertySymbol] = null;
                }
              }

              existingTask.zone.cancelTask(existingTask);

              if (returnTarget) {
                return target;
              }

              return;
            }
          }
        } // issue 930, didn't find the event name or callback
        // from zone kept existingTasks, the callback maybe
        // added outside of zone, we need to call native removeEventListener
        // to try to remove it.


        return nativeRemoveEventListener.apply(this, arguments);
      };

      proto[LISTENERS_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];

        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }

        var listeners = [];
        var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

        for (var i = 0; i < tasks.length; i++) {
          var task = tasks[i];
          var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
          listeners.push(delegate);
        }

        return listeners;
      };

      proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];

        if (!eventName) {
          var keys = Object.keys(target);

          for (var i = 0; i < keys.length; i++) {
            var prop = keys[i];
            var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
            // used for monitoring the removeListener call,
            // so just keep removeListener eventListener until
            // all other eventListeners are removed

            if (evtName && evtName !== 'removeListener') {
              this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
            }
          } // remove removeListener listener finally


          this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
        } else {
          if (patchOptions && patchOptions.transferEventName) {
            eventName = patchOptions.transferEventName(eventName);
          }

          var symbolEventNames = zoneSymbolEventNames[eventName];

          if (symbolEventNames) {
            var symbolEventName = symbolEventNames[FALSE_STR];
            var symbolCaptureEventName = symbolEventNames[TRUE_STR];
            var tasks = target[symbolEventName];
            var captureTasks = target[symbolCaptureEventName];

            if (tasks) {
              var removeTasks = tasks.slice();

              for (var i = 0; i < removeTasks.length; i++) {
                var task = removeTasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
              }
            }

            if (captureTasks) {
              var removeTasks = captureTasks.slice();

              for (var i = 0; i < removeTasks.length; i++) {
                var task = removeTasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
              }
            }
          }
        }

        if (returnTarget) {
          return this;
        }
      }; // for native toString patch


      attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
      attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

      if (nativeRemoveAllListeners) {
        attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
      }

      if (nativeListeners) {
        attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
      }

      return true;
    }

    var results = [];

    for (var i = 0; i < apis.length; i++) {
      results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }

    return results;
  }

  function findEventTasks(target, eventName) {
    if (!eventName) {
      var foundTasks = [];

      for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];

        if (evtName && (!eventName || evtName === eventName)) {
          var tasks = target[prop];

          if (tasks) {
            for (var i = 0; i < tasks.length; i++) {
              foundTasks.push(tasks[i]);
            }
          }
        }
      }

      return foundTasks;
    }

    var symbolEventName = zoneSymbolEventNames[eventName];

    if (!symbolEventName) {
      prepareEventNames(eventName);
      symbolEventName = zoneSymbolEventNames[eventName];
    }

    var captureFalseTasks = target[symbolEventName[FALSE_STR]];
    var captureTrueTasks = target[symbolEventName[TRUE_STR]];

    if (!captureFalseTasks) {
      return captureTrueTasks ? captureTrueTasks.slice() : [];
    } else {
      return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
    }
  }

  function patchEventPrototype(global, api) {
    var Event = global['Event'];

    if (Event && Event.prototype) {
      api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
        return function (self, args) {
          self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
          // in case in some hybrid application, some part of
          // application will be controlled by zone, some are not

          delegate && delegate.apply(self, args);
        };
      });
    }
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function patchCallbacks(api, target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);

    if (target[symbol]) {
      return;
    }

    var nativeDelegate = target[symbol] = target[method];

    target[method] = function (name, opts, options) {
      if (opts && opts.prototype) {
        callbacks.forEach(function (callback) {
          var source = "".concat(targetName, ".").concat(method, "::") + callback;
          var prototype = opts.prototype; // Note: the `patchCallbacks` is used for patching the `document.registerElement` and
          // `customElements.define`. We explicitly wrap the patching code into try-catch since
          // callbacks may be already patched by other web components frameworks (e.g. LWC), and they
          // make those properties non-writable. This means that patching callback will throw an error
          // `cannot assign to read-only property`. See this code as an example:
          // https://github.com/salesforce/lwc/blob/master/packages/@lwc/engine-core/src/framework/base-bridge-element.ts#L180-L186
          // We don't want to stop the application rendering if we couldn't patch some
          // callback, e.g. `attributeChangedCallback`.

          try {
            if (prototype.hasOwnProperty(callback)) {
              var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

              if (descriptor && descriptor.value) {
                descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

                api._redefineProperty(opts.prototype, callback, descriptor);
              } else if (prototype[callback]) {
                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
              }
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } catch (_a) {// Note: we leave the catch block empty since there's no way to handle the error related
            // to non-writable property.
          }
        });
      }

      return nativeDelegate.call(target, name, opts, options);
    };

    api.attachOriginToPatched(target[method], nativeDelegate);
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
      return onProperties;
    }

    var tip = ignoreProperties.filter(function (ip) {
      return ip.target === target;
    });

    if (!tip || tip.length === 0) {
      return onProperties;
    }

    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) {
      return targetIgnoreProperties.indexOf(op) === -1;
    });
  }

  function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
      return;
    }

    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
  }
  /**
   * Get all event name properties which the event name startsWith `on`
   * from the target object itself, inherited properties are not considered.
   */


  function getOnEventNames(target) {
    return Object.getOwnPropertyNames(target).filter(function (name) {
      return name.startsWith('on') && name.length > 2;
    }).map(function (name) {
      return name.substring(2);
    });
  }

  function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
      return;
    }

    if (Zone[api.symbol('patchEvents')]) {
      // events are already been patched by legacy patch.
      return;
    }

    var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

    var patchTargets = [];

    if (isBrowser) {
      var internalWindow_1 = window;
      patchTargets = patchTargets.concat(['Document', 'SVGElement', 'Element', 'HTMLElement', 'HTMLBodyElement', 'HTMLMediaElement', 'HTMLFrameSetElement', 'HTMLFrameElement', 'HTMLIFrameElement', 'HTMLMarqueeElement', 'Worker']);
      var ignoreErrorProperties = isIE() ? [{
        target: internalWindow_1,
        ignoreProperties: ['error']
      }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
      // so we need to pass WindowPrototype to check onProp exist or not

      patchFilteredProperties(internalWindow_1, getOnEventNames(internalWindow_1), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow_1));
    }

    patchTargets = patchTargets.concat(['XMLHttpRequest', 'XMLHttpRequestEventTarget', 'IDBIndex', 'IDBRequest', 'IDBOpenDBRequest', 'IDBDatabase', 'IDBTransaction', 'IDBCursor', 'WebSocket']);

    for (var i = 0; i < patchTargets.length; i++) {
      var target = _global[patchTargets[i]];
      target && target.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
    }
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  Zone.__load_patch('util', function (global, Zone, api) {
    // Collect native event names by looking at properties
    // on the global namespace, e.g. 'onclick'.
    var eventNames = getOnEventNames(global);
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.

    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

    var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

    if (global[SYMBOL_UNPATCHED_EVENTS]) {
      global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }

    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
      Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }

    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = Object.defineProperty;
    api.patchCallbacks = patchCallbacks;

    api.getGlobalObjects = function () {
      return {
        globalSources: globalSources,
        zoneSymbolEventNames: zoneSymbolEventNames,
        eventNames: eventNames,
        isBrowser: isBrowser,
        isMix: isMix,
        isNode: isNode,
        TRUE_STR: TRUE_STR,
        FALSE_STR: FALSE_STR,
        ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
        ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
      };
    };
  });
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */

  /*
   * This is necessary for Chrome and Chrome mobile, to enable
   * things like redefining `createdCallback` on an element.
   */


  var zoneSymbol;

  var _defineProperty;

  var _getOwnPropertyDescriptor;

  var _create;

  var unconfigurablesKey;

  function propertyPatch() {
    zoneSymbol = Zone.__symbol__;
    _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
    _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] = Object.getOwnPropertyDescriptor;
    _create = Object.create;
    unconfigurablesKey = zoneSymbol('unconfigurables');

    Object.defineProperty = function (obj, prop, desc) {
      if (isUnconfigurable(obj, prop)) {
        throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
      }

      var originalConfigurableFlag = desc.configurable;

      if (prop !== 'prototype') {
        desc = rewriteDescriptor(obj, prop, desc);
      }

      return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };

    Object.defineProperties = function (obj, props) {
      Object.keys(props).forEach(function (prop) {
        Object.defineProperty(obj, prop, props[prop]);
      });

      for (var _i = 0, _b = Object.getOwnPropertySymbols(props); _i < _b.length; _i++) {
        var sym = _b[_i];
        var desc = Object.getOwnPropertyDescriptor(props, sym); // Since `Object.getOwnPropertySymbols` returns *all* symbols,
        // including non-enumerable ones, retrieve property descriptor and check
        // enumerability there. Proceed with the rewrite only when a property is
        // enumerable to make the logic consistent with the way regular
        // properties are retrieved (via `Object.keys`, which respects
        // `enumerable: false` flag). More information:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#retrieval

        if (desc === null || desc === void 0 ? void 0 : desc.enumerable) {
          Object.defineProperty(obj, sym, props[sym]);
        }
      }

      return obj;
    };

    Object.create = function (proto, propertiesObject) {
      if (typeof propertiesObject === 'object' && !Object.isFrozen(propertiesObject)) {
        Object.keys(propertiesObject).forEach(function (prop) {
          propertiesObject[prop] = rewriteDescriptor(proto, prop, propertiesObject[prop]);
        });
      }

      return _create(proto, propertiesObject);
    };

    Object.getOwnPropertyDescriptor = function (obj, prop) {
      var desc = _getOwnPropertyDescriptor(obj, prop);

      if (desc && isUnconfigurable(obj, prop)) {
        desc.configurable = false;
      }

      return desc;
    };
  }

  function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
  }

  function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
  }

  function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
      desc.configurable = true;
    }

    if (!desc.configurable) {
      // issue-927, if the obj is frozen, don't try to set the desc to obj
      if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
        _defineProperty(obj, unconfigurablesKey, {
          writable: true,
          value: {}
        });
      }

      if (obj[unconfigurablesKey]) {
        obj[unconfigurablesKey][prop] = true;
      }
    }

    return desc;
  }

  function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
      return _defineProperty(obj, prop, desc);
    } catch (error) {
      if (desc.configurable) {
        // In case of errors, when the configurable flag was likely set by rewriteDescriptor(),
        // let's retry with the original flag value
        if (typeof originalConfigurableFlag == 'undefined') {
          delete desc.configurable;
        } else {
          desc.configurable = originalConfigurableFlag;
        }

        try {
          return _defineProperty(obj, prop, desc);
        } catch (error) {
          var swallowError = false;

          if (prop === 'createdCallback' || prop === 'attachedCallback' || prop === 'detachedCallback' || prop === 'attributeChangedCallback') {
            // We only swallow the error in registerElement patch
            // this is the work around since some applications
            // fail if we throw the error
            swallowError = true;
          }

          if (!swallowError) {
            throw error;
          } // TODO: @JiaLiPassion, Some application such as `registerElement` patch
          // still need to swallow the error, in the future after these applications
          // are updated, the following logic can be removed.


          var descJson = null;

          try {
            descJson = JSON.stringify(desc);
          } catch (error) {
            descJson = desc.toString();
          }

          console.log("Attempting to configure '".concat(prop, "' with descriptor '").concat(descJson, "' on object '").concat(obj, "' and got error, giving up: ").concat(error));
        }
      } else {
        throw error;
      }
    }
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function eventTargetLegacyPatch(_global, api) {
    var _b = api.getGlobalObjects(),
        eventNames = _b.eventNames,
        globalSources = _b.globalSources,
        zoneSymbolEventNames = _b.zoneSymbolEventNames,
        TRUE_STR = _b.TRUE_STR,
        FALSE_STR = _b.FALSE_STR,
        ZONE_SYMBOL_PREFIX = _b.ZONE_SYMBOL_PREFIX;

    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'.split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');

    if (isWtf) {
      // Workaround for: https://github.com/google/tracing-framework/issues/555
      apis = WTF_ISSUE_555_ARRAY.map(function (v) {
        return 'HTML' + v + 'Element';
      }).concat(NO_EVENT_TARGET);
    } else if (_global[EVENT_TARGET]) {
      apis.push(EVENT_TARGET);
    } else {
      // Note: EventTarget is not available in all browsers,
      // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
      apis = NO_EVENT_TARGET;
    }

    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = api.isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    var pointerEventsMap = {
      'MSPointerCancel': 'pointercancel',
      'MSPointerDown': 'pointerdown',
      'MSPointerEnter': 'pointerenter',
      'MSPointerHover': 'pointerhover',
      'MSPointerLeave': 'pointerleave',
      'MSPointerMove': 'pointermove',
      'MSPointerOut': 'pointerout',
      'MSPointerOver': 'pointerover',
      'MSPointerUp': 'pointerup'
    }; //  predefine all __zone_symbol__ + eventName + true/false string

    for (var i = 0; i < eventNames.length; i++) {
      var eventName = eventNames[i];
      var falseEventName = eventName + FALSE_STR;
      var trueEventName = eventName + TRUE_STR;
      var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
      var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
      zoneSymbolEventNames[eventName] = {};
      zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
      zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    } //  predefine all task.source string


    for (var i = 0; i < WTF_ISSUE_555_ARRAY.length; i++) {
      var target = WTF_ISSUE_555_ARRAY[i];
      var targets = globalSources[target] = {};

      for (var j = 0; j < eventNames.length; j++) {
        var eventName = eventNames[j];
        targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
      }
    }

    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
      if (!isDisableIECheck && ieOrEdge) {
        if (isEnableCrossContextCheck) {
          try {
            var testString = delegate.toString();

            if (testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS) {
              nativeDelegate.apply(target, args);
              return false;
            }
          } catch (error) {
            nativeDelegate.apply(target, args);
            return false;
          }
        } else {
          var testString = delegate.toString();

          if (testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS) {
            nativeDelegate.apply(target, args);
            return false;
          }
        }
      } else if (isEnableCrossContextCheck) {
        try {
          delegate.toString();
        } catch (error) {
          nativeDelegate.apply(target, args);
          return false;
        }
      }

      return true;
    };

    var apiTypes = [];

    for (var i = 0; i < apis.length; i++) {
      var type = _global[apis[i]];
      apiTypes.push(type && type.prototype);
    } // vh is validateHandler to check event handler
    // is valid or not(for security check)


    api.patchEventTarget(_global, api, apiTypes, {
      vh: checkIEAndCrossContext,
      transferEventName: function (eventName) {
        var pointerEventName = pointerEventsMap[eventName];
        return pointerEventName || eventName;
      }
    });
    Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
    return true;
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
  // we have to patch the instance since the proto is non-configurable


  function apply(api, _global) {
    var _b = api.getGlobalObjects(),
        ADD_EVENT_LISTENER_STR = _b.ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR = _b.REMOVE_EVENT_LISTENER_STR;

    var WS = _global.WebSocket; // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched

    if (!_global.EventTarget) {
      api.patchEventTarget(_global, api, [WS.prototype]);
    }

    _global.WebSocket = function (x, y) {
      var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
      var proxySocket;
      var proxySocketProto; // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance

      var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');

      if (onmessageDesc && onmessageDesc.configurable === false) {
        proxySocket = api.ObjectCreate(socket); // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
        // but proxySocket not, so we will keep socket as prototype and pass it to
        // patchOnProperties method

        proxySocketProto = socket;
        [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
          proxySocket[propName] = function () {
            var args = api.ArraySlice.call(arguments);

            if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
              var eventName = args.length > 0 ? args[0] : undefined;

              if (eventName) {
                var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);

                socket[propertySymbol] = proxySocket[propertySymbol];
              }
            }

            return socket[propName].apply(socket, args);
          };
        });
      } else {
        // we can patch the real socket
        proxySocket = socket;
      }

      api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
      return proxySocket;
    };

    var globalWebSocket = _global['WebSocket'];

    for (var prop in WS) {
      globalWebSocket[prop] = WS[prop];
    }
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function propertyDescriptorLegacyPatch(api, _global) {
    var _b = api.getGlobalObjects(),
        isNode = _b.isNode,
        isMix = _b.isMix;

    if (isNode && !isMix) {
      return;
    }

    if (!canPatchViaPropertyDescriptor(api, _global)) {
      var supportsWebSocket = typeof WebSocket !== 'undefined'; // Safari, Android browsers (Jelly Bean)

      patchViaCapturingAllTheEvents(api);
      api.patchClass('XMLHttpRequest');

      if (supportsWebSocket) {
        apply(api, _global);
      }

      Zone[api.symbol('patchEvents')] = true;
    }
  }

  function canPatchViaPropertyDescriptor(api, _global) {
    var _b = api.getGlobalObjects(),
        isBrowser = _b.isBrowser,
        isMix = _b.isMix;

    if ((isBrowser || isMix) && !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') && typeof Element !== 'undefined') {
      // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
      // IDL interface attributes are not configurable
      var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
      if (desc && !desc.configurable) return false; // try to use onclick to detect whether we can patch via propertyDescriptor
      // because XMLHttpRequest is not available in service worker

      if (desc) {
        api.ObjectDefineProperty(Element.prototype, 'onclick', {
          enumerable: true,
          configurable: true,
          get: function () {
            return true;
          }
        });
        var div = document.createElement('div');
        var result = !!div.onclick;
        api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
        return result;
      }
    }

    var XMLHttpRequest = _global['XMLHttpRequest'];

    if (!XMLHttpRequest) {
      // XMLHttpRequest is not available in service worker
      return false;
    }

    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE); // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one

    if (xhrDesc) {
      api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
        enumerable: true,
        configurable: true,
        get: function () {
          return true;
        }
      });
      var req = new XMLHttpRequest();
      var result = !!req.onreadystatechange; // restore original desc

      api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
      return result;
    } else {
      var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
      api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
        enumerable: true,
        configurable: true,
        get: function () {
          return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
        },
        set: function (value) {
          this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
        }
      });
      var req = new XMLHttpRequest();

      var detectFunc = function () {};

      req.onreadystatechange = detectFunc;
      var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
      req.onreadystatechange = null;
      return result;
    }
  }

  var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
  var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
  var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplayconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
  var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
  var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
  var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
  var formEventNames = ['autocomplete', 'autocompleteerror'];
  var detailEventNames = ['toggle'];

  var eventNames = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], globalEventHandlersEventNames, true), webglEventNames, true), formEventNames, true), detailEventNames, true), documentEventNames, true), windowEventNames, true), htmlElementEventNames, true), ieElementEventNames, true); // Whenever any eventListener fires, we check the eventListener target and all parents
  // for `onwhatever` properties and replace them with zone-bound functions
  // - Chrome (for now)


  function patchViaCapturingAllTheEvents(api) {
    var unboundKey = api.symbol('unbound');

    var _loop_5 = function (i) {
      var property = eventNames[i];
      var onproperty = 'on' + property;
      self.addEventListener(property, function (event) {
        var elt = event.target,
            bound,
            source;

        if (elt) {
          source = elt.constructor['name'] + '.' + onproperty;
        } else {
          source = 'unknown.' + onproperty;
        }

        while (elt) {
          if (elt[onproperty] && !elt[onproperty][unboundKey]) {
            bound = api.wrapWithCurrentZone(elt[onproperty], source);
            bound[unboundKey] = elt[onproperty];
            elt[onproperty] = bound;
          }

          elt = elt.parentElement;
        }
      }, true);
    };

    for (var i = 0; i < eventNames.length; i++) {
      _loop_5(i);
    }
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function registerElementPatch(_global, api) {
    var _b = api.getGlobalObjects(),
        isBrowser = _b.isBrowser,
        isMix = _b.isMix;

    if (!isBrowser && !isMix || !('registerElement' in _global.document)) {
      return;
    }

    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  (function (_global) {
    var symbolPrefix = _global['__Zone_symbol_prefix'] || '__zone_symbol__';

    function __symbol__(name) {
      return symbolPrefix + name;
    }

    _global[__symbol__('legacyPatch')] = function () {
      var Zone = _global['Zone'];

      Zone.__load_patch('defineProperty', function (global, Zone, api) {
        api._redefineProperty = _redefineProperty;
        propertyPatch();
      });

      Zone.__load_patch('registerElement', function (global, Zone, api) {
        registerElementPatch(global, api);
      });

      Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
        eventTargetLegacyPatch(global, api);
        propertyDescriptorLegacyPatch(api, global);
      });
    };
  })(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {});
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  var taskSymbol = zoneSymbol$1('zoneTask');

  function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};

    function scheduleTask(task) {
      var data = task.data;

      data.args[0] = function () {
        return task.invoke.apply(this, arguments);
      };

      data.handleId = setNative.apply(window, data.args);
      return task;
    }

    function clearTask(task) {
      return clearNative.call(window, task.data.handleId);
    }

    setNative = patchMethod(window, setName, function (delegate) {
      return function (self, args) {
        if (typeof args[0] === 'function') {
          var options_1 = {
            isPeriodic: nameSuffix === 'Interval',
            delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
            args: args
          };
          var callback_1 = args[0];

          args[0] = function timer() {
            try {
              return callback_1.apply(this, arguments);
            } finally {
              // issue-934, task will be cancelled
              // even it is a periodic task such as
              // setInterval
              // https://github.com/angular/angular/issues/40387
              // Cleanup tasksByHandleId should be handled before scheduleTask
              // Since some zoneSpec may intercept and doesn't trigger
              // scheduleFn(scheduleTask) provided here.
              if (!options_1.isPeriodic) {
                if (typeof options_1.handleId === 'number') {
                  // in non-nodejs env, we remove timerId
                  // from local cache
                  delete tasksByHandleId[options_1.handleId];
                } else if (options_1.handleId) {
                  // Node returns complex objects as handleIds
                  // we remove task reference from timer object
                  options_1.handleId[taskSymbol] = null;
                }
              }
            }
          };

          var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options_1, scheduleTask, clearTask);

          if (!task) {
            return task;
          } // Node.js must additionally support the ref and unref functions.


          var handle = task.data.handleId;

          if (typeof handle === 'number') {
            // for non nodejs env, we save handleId: task
            // mapping in local cache for clearTimeout
            tasksByHandleId[handle] = task;
          } else if (handle) {
            // for nodejs env, we save task
            // reference in timerId Object for clearTimeout
            handle[taskSymbol] = task;
          } // check whether handle is null, because some polyfill or browser
          // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


          if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
            task.ref = handle.ref.bind(handle);
            task.unref = handle.unref.bind(handle);
          }

          if (typeof handle === 'number' || handle) {
            return handle;
          }

          return task;
        } else {
          // cause an error by calling it directly.
          return delegate.apply(window, args);
        }
      };
    });
    clearNative = patchMethod(window, cancelName, function (delegate) {
      return function (self, args) {
        var id = args[0];
        var task;

        if (typeof id === 'number') {
          // non nodejs env.
          task = tasksByHandleId[id];
        } else {
          // nodejs env.
          task = id && id[taskSymbol]; // other environments.

          if (!task) {
            task = id;
          }
        }

        if (task && typeof task.type === 'string') {
          if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
            if (typeof id === 'number') {
              delete tasksByHandleId[id];
            } else if (id) {
              id[taskSymbol] = null;
            } // Do not cancel already canceled functions


            task.zone.cancelTask(task);
          }
        } else {
          // cause an error by calling it directly.
          delegate.apply(window, args);
        }
      };
    });
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function patchCustomElements(_global, api) {
    var _b = api.getGlobalObjects(),
        isBrowser = _b.isBrowser,
        isMix = _b.isMix;

    if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
      return;
    }

    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function eventTargetPatch(_global, api) {
    if (Zone[api.symbol('patchEventTarget')]) {
      // EventTarget is already patched.
      return;
    }

    var _b = api.getGlobalObjects(),
        eventNames = _b.eventNames,
        zoneSymbolEventNames = _b.zoneSymbolEventNames,
        TRUE_STR = _b.TRUE_STR,
        FALSE_STR = _b.FALSE_STR,
        ZONE_SYMBOL_PREFIX = _b.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


    for (var i = 0; i < eventNames.length; i++) {
      var eventName = eventNames[i];
      var falseEventName = eventName + FALSE_STR;
      var trueEventName = eventName + TRUE_STR;
      var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
      var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
      zoneSymbolEventNames[eventName] = {};
      zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
      zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }

    var EVENT_TARGET = _global['EventTarget'];

    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
      return;
    }

    api.patchEventTarget(_global, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
  }

  function patchEvent(global, api) {
    api.patchEventPrototype(global, api);
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  Zone.__load_patch('legacy', function (global) {
    var legacyPatch = global[Zone.__symbol__('legacyPatch')];

    if (legacyPatch) {
      legacyPatch();
    }
  });

  Zone.__load_patch('queueMicrotask', function (global, Zone, api) {
    api.patchMethod(global, 'queueMicrotask', function (delegate) {
      return function (self, args) {
        Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
      };
    });
  });

  Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
  });

  Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
  });

  Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];

    for (var i = 0; i < blockingMethods.length; i++) {
      var name_2 = blockingMethods[i];
      patchMethod(global, name_2, function (delegate, symbol, name) {
        return function (s, args) {
          return Zone.current.run(delegate, global, args, name);
        };
      });
    }
  });

  Zone.__load_patch('EventTarget', function (global, Zone, api) {
    patchEvent(global, api);
    eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
      api.patchEventTarget(global, api, [XMLHttpRequestEventTarget.prototype]);
    }
  });

  Zone.__load_patch('MutationObserver', function (global, Zone, api) {
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
  });

  Zone.__load_patch('IntersectionObserver', function (global, Zone, api) {
    patchClass('IntersectionObserver');
  });

  Zone.__load_patch('FileReader', function (global, Zone, api) {
    patchClass('FileReader');
  });

  Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
  });

  Zone.__load_patch('customElements', function (global, Zone, api) {
    patchCustomElements(global, api);
  });

  Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol$1('xhrTask');
    var XHR_SYNC = zoneSymbol$1('xhrSync');
    var XHR_LISTENER = zoneSymbol$1('xhrListener');
    var XHR_SCHEDULED = zoneSymbol$1('xhrScheduled');
    var XHR_URL = zoneSymbol$1('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol$1('xhrErrorBeforeScheduled');

    function patchXHR(window) {
      var XMLHttpRequest = window['XMLHttpRequest'];

      if (!XMLHttpRequest) {
        // XMLHttpRequest is not available in service worker
        return;
      }

      var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

      function findPendingTask(target) {
        return target[XHR_TASK];
      }

      var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
      var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

      if (!oriAddListener) {
        var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget_1) {
          var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
          oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
      }

      var READY_STATE_CHANGE = 'readystatechange';
      var SCHEDULED = 'scheduled';

      function scheduleTask(task) {
        var data = task.data;
        var target = data.target;
        target[XHR_SCHEDULED] = false;
        target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

        var listener = target[XHR_LISTENER];

        if (!oriAddListener) {
          oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }

        if (listener) {
          oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
        }

        var newListener = target[XHR_LISTENER] = function () {
          if (target.readyState === target.DONE) {
            // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
            // readyState=4 multiple times, so we need to check task state here
            if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
              // check whether the xhr has registered onload listener
              // if that is the case, the task should invoke after all
              // onload listeners finish.
              // Also if the request failed without response (status = 0), the load event handler
              // will not be triggered, in that case, we should also invoke the placeholder callback
              // to close the XMLHttpRequest::send macroTask.
              // https://github.com/angular/angular/issues/38795
              var loadTasks = target[Zone.__symbol__('loadfalse')];

              if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
                var oriInvoke_1 = task.invoke;

                task.invoke = function () {
                  // need to load the tasks again, because in other
                  // load listener, they may remove themselves
                  var loadTasks = target[Zone.__symbol__('loadfalse')];

                  for (var i = 0; i < loadTasks.length; i++) {
                    if (loadTasks[i] === task) {
                      loadTasks.splice(i, 1);
                    }
                  }

                  if (!data.aborted && task.state === SCHEDULED) {
                    oriInvoke_1.call(task);
                  }
                };

                loadTasks.push(task);
              } else {
                task.invoke();
              }
            } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
              // error occurs when xhr.send()
              target[XHR_ERROR_BEFORE_SCHEDULED] = true;
            }
          }
        };

        oriAddListener.call(target, READY_STATE_CHANGE, newListener);
        var storedTask = target[XHR_TASK];

        if (!storedTask) {
          target[XHR_TASK] = task;
        }

        sendNative.apply(target, data.args);
        target[XHR_SCHEDULED] = true;
        return task;
      }

      function placeholderCallback() {}

      function clearTask(task) {
        var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
        // to prevent it from firing. So instead, we store info for the event listener.

        data.aborted = true;
        return abortNative.apply(data.target, data.args);
      }

      var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
        return function (self, args) {
          self[XHR_SYNC] = args[2] == false;
          self[XHR_URL] = args[1];
          return openNative.apply(self, args);
        };
      });
      var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
      var fetchTaskAborting = zoneSymbol$1('fetchTaskAborting');
      var fetchTaskScheduling = zoneSymbol$1('fetchTaskScheduling');
      var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
        return function (self, args) {
          if (Zone.current[fetchTaskScheduling] === true) {
            // a fetch is scheduling, so we are using xhr to polyfill fetch
            // and because we already schedule macroTask for fetch, we should
            // not schedule a macroTask for xhr again
            return sendNative.apply(self, args);
          }

          if (self[XHR_SYNC]) {
            // if the XHR is sync there is no task to schedule, just execute the code.
            return sendNative.apply(self, args);
          } else {
            var options = {
              target: self,
              url: self[XHR_URL],
              isPeriodic: false,
              args: args,
              aborted: false
            };
            var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);

            if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
              // xhr request throw error when send
              // we should invoke task instead of leaving a scheduled
              // pending macroTask
              task.invoke();
            }
          }
        };
      });
      var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
        return function (self, args) {
          var task = findPendingTask(self);

          if (task && typeof task.type == 'string') {
            // If the XHR has already completed, do nothing.
            // If the XHR has already been aborted, do nothing.
            // Fix #569, call abort multiple times before done will cause
            // macroTask task count be negative number
            if (task.cancelFn == null || task.data && task.data.aborted) {
              return;
            }

            task.zone.cancelTask(task);
          } else if (Zone.current[fetchTaskAborting] === true) {
            // the abort is called from fetch polyfill, we need to call native abort of XHR.
            return abortNative.apply(self, args);
          } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
          // task
          // to cancel. Do nothing.

        };
      });
    }
  });

  Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
      patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
  });

  Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
      return function (e) {
        var eventTasks = findEventTasks(global, evtName);
        eventTasks.forEach(function (eventTask) {
          // windows has added unhandledrejection event listener
          // trigger the event listener
          var PromiseRejectionEvent = global['PromiseRejectionEvent'];

          if (PromiseRejectionEvent) {
            var evt = new PromiseRejectionEvent(evtName, {
              promise: e.promise,
              reason: e.rejection
            });
            eventTask.invoke(evt);
          }
        });
      };
    }

    if (global['PromiseRejectionEvent']) {
      Zone[zoneSymbol$1('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
      Zone[zoneSymbol$1('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(7435));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxQztNQUNqQ1UsSUFBSSxDQUFDcU0sWUFBWSxDQUFDLGtDQUFELENBQWIsQ0FBSixHQUNJcWMsMkJBQTJCLENBQUMsb0JBQUQsQ0FEL0I7TUFFQTFvQixJQUFJLENBQUNxTSxZQUFZLENBQUMseUJBQUQsQ0FBYixDQUFKLEdBQ0lxYywyQkFBMkIsQ0FBQyxrQkFBRCxDQUQvQjtJQUVIO0VBQ0osQ0F0QkQ7QUF1QkgsQ0E1OEdEIiwic291cmNlcyI6WyIuL3NyYy9wb2x5ZmlsbHMudHMiLCIuL3NyYy96b25lLWZsYWdzLnRzIiwiLi9ub2RlX21vZHVsZXMvem9uZS5qcy9kaXN0L3pvbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgZmlsZSBpbmNsdWRlcyBwb2x5ZmlsbHMgbmVlZGVkIGJ5IEFuZ3VsYXIgYW5kIGlzIGxvYWRlZCBiZWZvcmUgdGhlIGFwcC5cclxuICogWW91IGNhbiBhZGQgeW91ciBvd24gZXh0cmEgcG9seWZpbGxzIHRvIHRoaXMgZmlsZS5cclxuICpcclxuICogVGhpcyBmaWxlIGlzIGRpdmlkZWQgaW50byAyIHNlY3Rpb25zOlxyXG4gKiAgIDEuIEJyb3dzZXIgcG9seWZpbGxzLiBUaGVzZSBhcmUgYXBwbGllZCBiZWZvcmUgbG9hZGluZyBab25lSlMgYW5kIGFyZSBzb3J0ZWQgYnkgYnJvd3NlcnMuXHJcbiAqICAgMi4gQXBwbGljYXRpb24gaW1wb3J0cy4gRmlsZXMgaW1wb3J0ZWQgYWZ0ZXIgWm9uZUpTIHRoYXQgc2hvdWxkIGJlIGxvYWRlZCBiZWZvcmUgeW91ciBtYWluXHJcbiAqICAgICAgZmlsZS5cclxuICpcclxuICogVGhlIGN1cnJlbnQgc2V0dXAgaXMgZm9yIHNvLWNhbGxlZCBcImV2ZXJncmVlblwiIGJyb3dzZXJzOyB0aGUgbGFzdCB2ZXJzaW9ucyBvZiBicm93c2VycyB0aGF0XHJcbiAqIGF1dG9tYXRpY2FsbHkgdXBkYXRlIHRoZW1zZWx2ZXMuIFRoaXMgaW5jbHVkZXMgU2FmYXJpID49IDEwLCBDaHJvbWUgPj0gNTUgKGluY2x1ZGluZyBPcGVyYSksXHJcbiAqIEVkZ2UgPj0gMTMgb24gdGhlIGRlc2t0b3AsIGFuZCBpT1MgMTAgYW5kIENocm9tZSBvbiBtb2JpbGUuXHJcbiAqXHJcbiAqIExlYXJuIG1vcmUgaW4gaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2Jyb3dzZXItc3VwcG9ydFxyXG4gKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQlJPV1NFUiBQT0xZRklMTFNcclxuICovXHJcblxyXG4vKiogSUUxMSByZXF1aXJlcyB0aGUgZm9sbG93aW5nIGZvciBOZ0NsYXNzIHN1cHBvcnQgb24gU1ZHIGVsZW1lbnRzICovXHJcbi8vIGltcG9ydCAnY2xhc3NsaXN0LmpzJzsgIC8vIFJ1biBgbnBtIGluc3RhbGwgLS1zYXZlIGNsYXNzbGlzdC5qc2AuXHJcblxyXG4vKipcclxuICogV2ViIEFuaW1hdGlvbnMgYEBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc2BcclxuICogT25seSByZXF1aXJlZCBpZiBBbmltYXRpb25CdWlsZGVyIGlzIHVzZWQgd2l0aGluIHRoZSBhcHBsaWNhdGlvbiBhbmQgdXNpbmcgSUUvRWRnZSBvciBTYWZhcmkuXHJcbiAqIFN0YW5kYXJkIGFuaW1hdGlvbiBzdXBwb3J0IGluIEFuZ3VsYXIgRE9FUyBOT1QgcmVxdWlyZSBhbnkgcG9seWZpbGxzIChhcyBvZiBBbmd1bGFyIDYuMCkuXHJcbiAqL1xyXG4vLyBpbXBvcnQgJ3dlYi1hbmltYXRpb25zLWpzJzsgIC8vIFJ1biBgbnBtIGluc3RhbGwgLS1zYXZlIHdlYi1hbmltYXRpb25zLWpzYC5cclxuXHJcbi8qKlxyXG4gKiBCeSBkZWZhdWx0LCB6b25lLmpzIHdpbGwgcGF0Y2ggYWxsIHBvc3NpYmxlIG1hY3JvVGFzayBhbmQgRG9tRXZlbnRzXHJcbiAqIHVzZXIgY2FuIGRpc2FibGUgcGFydHMgb2YgbWFjcm9UYXNrL0RvbUV2ZW50cyBwYXRjaCBieSBzZXR0aW5nIGZvbGxvd2luZyBmbGFnc1xyXG4gKiBiZWNhdXNlIHRob3NlIGZsYWdzIG5lZWQgdG8gYmUgc2V0IGJlZm9yZSBgem9uZS5qc2AgYmVpbmcgbG9hZGVkLCBhbmQgd2VicGFja1xyXG4gKiB3aWxsIHB1dCBpbXBvcnQgaW4gdGhlIHRvcCBvZiBidW5kbGUsIHNvIHVzZXIgbmVlZCB0byBjcmVhdGUgYSBzZXBhcmF0ZSBmaWxlXHJcbiAqIGluIHRoaXMgZGlyZWN0b3J5IChmb3IgZXhhbXBsZTogem9uZS1mbGFncy50cyksIGFuZCBwdXQgdGhlIGZvbGxvd2luZyBmbGFnc1xyXG4gKiBpbnRvIHRoYXQgZmlsZSwgYW5kIHRoZW4gYWRkIHRoZSBmb2xsb3dpbmcgY29kZSBiZWZvcmUgaW1wb3J0aW5nIHpvbmUuanMuXHJcbiAqIGltcG9ydCAnLi96b25lLWZsYWdzJztcclxuICpcclxuICogVGhlIGZsYWdzIGFsbG93ZWQgaW4gem9uZS1mbGFncy50cyBhcmUgbGlzdGVkIGhlcmUuXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgZmxhZ3Mgd2lsbCB3b3JrIGZvciBhbGwgYnJvd3NlcnMuXHJcbiAqXHJcbiAqICh3aW5kb3cgYXMgYW55KS5fX1pvbmVfZGlzYWJsZV9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB0cnVlOyAvLyBkaXNhYmxlIHBhdGNoIHJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gKiAod2luZG93IGFzIGFueSkuX19ab25lX2Rpc2FibGVfb25fcHJvcGVydHkgPSB0cnVlOyAvLyBkaXNhYmxlIHBhdGNoIG9uUHJvcGVydHkgc3VjaCBhcyBvbmNsaWNrXHJcbiAqICh3aW5kb3cgYXMgYW55KS5fX3pvbmVfc3ltYm9sX19VTlBBVENIRURfRVZFTlRTID0gWydzY3JvbGwnLCAnbW91c2Vtb3ZlJ107IC8vIGRpc2FibGUgcGF0Y2ggc3BlY2lmaWVkIGV2ZW50TmFtZXNcclxuICpcclxuICogIGluIElFL0VkZ2UgZGV2ZWxvcGVyIHRvb2xzLCB0aGUgYWRkRXZlbnRMaXN0ZW5lciB3aWxsIGFsc28gYmUgd3JhcHBlZCBieSB6b25lLmpzXHJcbiAqICB3aXRoIHRoZSBmb2xsb3dpbmcgZmxhZywgaXQgd2lsbCBieXBhc3MgYHpvbmUuanNgIHBhdGNoIGZvciBJRS9FZGdlXHJcbiAqXHJcbiAqICAod2luZG93IGFzIGFueSkuX19ab25lX2VuYWJsZV9jcm9zc19jb250ZXh0X2NoZWNrID0gdHJ1ZTtcclxuICpcclxuICovXHJcblxyXG5pbXBvcnQgJy4vem9uZS1mbGFncyc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIFpvbmUgSlMgaXMgcmVxdWlyZWQgYnkgZGVmYXVsdCBmb3IgQW5ndWxhciBpdHNlbGYuXHJcbiAqL1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJzsgIC8vIEluY2x1ZGVkIHdpdGggQW5ndWxhciBDTEkuXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBBUFBMSUNBVElPTiBJTVBPUlRTXHJcbiAqL1xyXG4iLCIvKipcclxuICogUHJldmVudHMgQW5ndWxhciBjaGFuZ2UgZGV0ZWN0aW9uIGZyb21cclxuICogcnVubmluZyB3aXRoIGNlcnRhaW4gV2ViIENvbXBvbmVudCBjYWxsYmFja3NcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxyXG4od2luZG93IGFzIGFueSkuX19ab25lX2Rpc2FibGVfY3VzdG9tRWxlbWVudHMgPSB0cnVlO1xyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG4vKipcbiAqIEBsaWNlbnNlIEFuZ3VsYXIgdjE0LjIuMC1uZXh0LjBcbiAqIChjKSAyMDEwLTIwMjIgR29vZ2xlIExMQy4gaHR0cHM6Ly9hbmd1bGFyLmlvL1xuICogTGljZW5zZTogTUlUXG4gKi9cbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgICAgIGZhY3RvcnkoKTtcbn0pKChmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgICgoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICB2YXIgcGVyZm9ybWFuY2UgPSBnbG9iYWxbJ3BlcmZvcm1hbmNlJ107XG4gICAgICAgIGZ1bmN0aW9uIG1hcmsobmFtZSkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2VbJ21hcmsnXSAmJiBwZXJmb3JtYW5jZVsnbWFyayddKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBlcmZvcm1hbmNlTWVhc3VyZShuYW1lLCBsYWJlbCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2VbJ21lYXN1cmUnXSAmJiBwZXJmb3JtYW5jZVsnbWVhc3VyZSddKG5hbWUsIGxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICBtYXJrKCdab25lJyk7XG4gICAgICAgIC8vIEluaXRpYWxpemUgYmVmb3JlIGl0J3MgYWNjZXNzZWQgYmVsb3cuXG4gICAgICAgIC8vIF9fWm9uZV9zeW1ib2xfcHJlZml4IGdsb2JhbCBjYW4gYmUgdXNlZCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCB6b25lXG4gICAgICAgIC8vIHN5bWJvbCBwcmVmaXggd2l0aCBhIGN1c3RvbSBvbmUgaWYgbmVlZGVkLlxuICAgICAgICB2YXIgc3ltYm9sUHJlZml4ID0gZ2xvYmFsWydfX1pvbmVfc3ltYm9sX3ByZWZpeCddIHx8ICdfX3pvbmVfc3ltYm9sX18nO1xuICAgICAgICBmdW5jdGlvbiBfX3N5bWJvbF9fKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzeW1ib2xQcmVmaXggKyBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjaGVja0R1cGxpY2F0ZSA9IGdsb2JhbFtfX3N5bWJvbF9fKCdmb3JjZUR1cGxpY2F0ZVpvbmVDaGVjaycpXSA9PT0gdHJ1ZTtcbiAgICAgICAgaWYgKGdsb2JhbFsnWm9uZSddKSB7XG4gICAgICAgICAgICAvLyBpZiBnbG9iYWxbJ1pvbmUnXSBhbHJlYWR5IGV4aXN0cyAobWF5YmUgem9uZS5qcyB3YXMgYWxyZWFkeSBsb2FkZWQgb3JcbiAgICAgICAgICAgIC8vIHNvbWUgb3RoZXIgbGliIGFsc28gcmVnaXN0ZXJlZCBhIGdsb2JhbCBvYmplY3QgbmFtZWQgWm9uZSksIHdlIG1heSBuZWVkXG4gICAgICAgICAgICAvLyB0byB0aHJvdyBhbiBlcnJvciwgYnV0IHNvbWV0aW1lcyB1c2VyIG1heSBub3Qgd2FudCB0aGlzIGVycm9yLlxuICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHR3byB3ZWIgcGFnZXMsIHBhZ2UxIGluY2x1ZGVzIHpvbmUuanMsIHBhZ2UyIGRvZXNuJ3QuXG4gICAgICAgICAgICAvLyBhbmQgdGhlIDFzdCB0aW1lIHVzZXIgbG9hZCBwYWdlMSBhbmQgcGFnZTIsIGV2ZXJ5dGhpbmcgd29yayBmaW5lLFxuICAgICAgICAgICAgLy8gYnV0IHdoZW4gdXNlciBsb2FkIHBhZ2UyIGFnYWluLCBlcnJvciBvY2N1cnMgYmVjYXVzZSBnbG9iYWxbJ1pvbmUnXSBhbHJlYWR5IGV4aXN0cy5cbiAgICAgICAgICAgIC8vIHNvIHdlIGFkZCBhIGZsYWcgdG8gbGV0IHVzZXIgY2hvb3NlIHdoZXRoZXIgdG8gdGhyb3cgdGhpcyBlcnJvciBvciBub3QuXG4gICAgICAgICAgICAvLyBCeSBkZWZhdWx0LCBpZiBleGlzdGluZyBab25lIGlzIGZyb20gem9uZS5qcywgd2Ugd2lsbCBub3QgdGhyb3cgdGhlIGVycm9yLlxuICAgICAgICAgICAgaWYgKGNoZWNrRHVwbGljYXRlIHx8IHR5cGVvZiBnbG9iYWxbJ1pvbmUnXS5fX3N5bWJvbF9fICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lIGFscmVhZHkgbG9hZGVkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdsb2JhbFsnWm9uZSddO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBab25lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gWm9uZShwYXJlbnQsIHpvbmVTcGVjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuX25hbWUgPSB6b25lU3BlYyA/IHpvbmVTcGVjLm5hbWUgfHwgJ3VubmFtZWQnIDogJzxyb290Pic7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGVydGllcyA9IHpvbmVTcGVjICYmIHpvbmVTcGVjLnByb3BlcnRpZXMgfHwge307XG4gICAgICAgICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlID1cbiAgICAgICAgICAgICAgICAgICAgbmV3IF9ab25lRGVsZWdhdGUodGhpcywgdGhpcy5fcGFyZW50ICYmIHRoaXMuX3BhcmVudC5fem9uZURlbGVnYXRlLCB6b25lU3BlYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBab25lLmFzc2VydFpvbmVQYXRjaGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxbJ1Byb21pc2UnXSAhPT0gcGF0Y2hlc1snWm9uZUF3YXJlUHJvbWlzZSddKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZS5qcyBoYXMgZGV0ZWN0ZWQgdGhhdCBab25lQXdhcmVQcm9taXNlIGAod2luZG93fGdsb2JhbCkuUHJvbWlzZWAgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnaGFzIGJlZW4gb3ZlcndyaXR0ZW4uXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnTW9zdCBsaWtlbHkgY2F1c2UgaXMgdGhhdCBhIFByb21pc2UgcG9seWZpbGwgaGFzIGJlZW4gbG9hZGVkICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2FmdGVyIFpvbmUuanMgKFBvbHlmaWxsaW5nIFByb21pc2UgYXBpIGlzIG5vdCBuZWNlc3Nhcnkgd2hlbiB6b25lLmpzIGlzIGxvYWRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnSWYgeW91IG11c3QgbG9hZCBvbmUsIGRvIHNvIGJlZm9yZSBsb2FkaW5nIHpvbmUuanMuKScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZSwgXCJyb290XCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh6b25lLnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgem9uZSA9IHpvbmUucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB6b25lO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLCBcImN1cnJlbnRcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2N1cnJlbnRab25lRnJhbWUuem9uZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZSwgXCJjdXJyZW50VGFza1wiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfY3VycmVudFRhc2s7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJlcXVpcmUtaW50ZXJuYWwtd2l0aC11bmRlcnNjb3JlXG4gICAgICAgICAgICBab25lLl9fbG9hZF9wYXRjaCA9IGZ1bmN0aW9uIChuYW1lLCBmbiwgaWdub3JlRHVwbGljYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlnbm9yZUR1cGxpY2F0ZSA9PT0gdm9pZCAwKSB7IGlnbm9yZUR1cGxpY2F0ZSA9IGZhbHNlOyB9XG4gICAgICAgICAgICAgICAgaWYgKHBhdGNoZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYGNoZWNrRHVwbGljYXRlYCBvcHRpb24gaXMgZGVmaW5lZCBmcm9tIGdsb2JhbCB2YXJpYWJsZVxuICAgICAgICAgICAgICAgICAgICAvLyBzbyBpdCB3b3JrcyBmb3IgYWxsIG1vZHVsZXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIGBpZ25vcmVEdXBsaWNhdGVgIGNhbiB3b3JrIGZvciB0aGUgc3BlY2lmaWVkIG1vZHVsZVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZUR1cGxpY2F0ZSAmJiBjaGVja0R1cGxpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0FscmVhZHkgbG9hZGVkIHBhdGNoOiAnICsgbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWdsb2JhbFsnX19ab25lX2Rpc2FibGVfJyArIG5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwZXJmTmFtZSA9ICdab25lOicgKyBuYW1lO1xuICAgICAgICAgICAgICAgICAgICBtYXJrKHBlcmZOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hlc1tuYW1lXSA9IGZuKGdsb2JhbCwgWm9uZSwgX2FwaSk7XG4gICAgICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlTWVhc3VyZShwZXJmTmFtZSwgcGVyZk5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZS5wcm90b3R5cGUsIFwicGFyZW50XCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZS5wcm90b3R5cGUsIFwibmFtZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgem9uZSA9IHRoaXMuZ2V0Wm9uZVdpdGgoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoem9uZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHpvbmUuX3Byb3BlcnRpZXNba2V5XTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS5nZXRab25lV2l0aCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuX3BhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZS5wcm90b3R5cGUuZm9yayA9IGZ1bmN0aW9uICh6b25lU3BlYykge1xuICAgICAgICAgICAgICAgIGlmICghem9uZVNwZWMpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZVNwZWMgcmVxdWlyZWQhJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5mb3JrKHRoaXMsIHpvbmVTcGVjKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS53cmFwID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0aW5nIGZ1bmN0aW9uIGdvdDogJyArIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIF9jYWxsYmFjayA9IHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnRlcmNlcHQodGhpcywgY2FsbGJhY2ssIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgdmFyIHpvbmUgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB6b25lLnJ1bkd1YXJkZWQoX2NhbGxiYWNrLCB0aGlzLCBhcmd1bWVudHMsIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IHsgcGFyZW50OiBfY3VycmVudFpvbmVGcmFtZSwgem9uZTogdGhpcyB9O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuaW52b2tlKHRoaXMsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0gX2N1cnJlbnRab25lRnJhbWUucGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS5ydW5HdWFyZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFwcGx5VGhpcyA9PT0gdm9pZCAwKSB7IGFwcGx5VGhpcyA9IG51bGw7IH1cbiAgICAgICAgICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IHsgcGFyZW50OiBfY3VycmVudFpvbmVGcmFtZSwgem9uZTogdGhpcyB9O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmludm9rZSh0aGlzLCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fem9uZURlbGVnYXRlLmhhbmRsZUVycm9yKHRoaXMsIGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IF9jdXJyZW50Wm9uZUZyYW1lLnBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZS5wcm90b3R5cGUucnVuVGFzayA9IGZ1bmN0aW9uICh0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnpvbmUgIT0gdGhpcykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgdGFzayBjYW4gb25seSBiZSBydW4gaW4gdGhlIHpvbmUgb2YgY3JlYXRpb24hIChDcmVhdGlvbjogJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGFzay56b25lIHx8IE5PX1pPTkUpLm5hbWUgKyAnOyBFeGVjdXRpb246ICcgKyB0aGlzLm5hbWUgKyAnKScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy83NzgsIHNvbWV0aW1lcyBldmVudFRhc2tcbiAgICAgICAgICAgICAgICAvLyB3aWxsIHJ1biBpbiBub3RTY2hlZHVsZWQoY2FuY2VsZWQpIHN0YXRlLCB3ZSBzaG91bGQgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHJ1biBzdWNoIGtpbmQgb2YgdGFzayBidXQganVzdCByZXR1cm5cbiAgICAgICAgICAgICAgICBpZiAodGFzay5zdGF0ZSA9PT0gbm90U2NoZWR1bGVkICYmICh0YXNrLnR5cGUgPT09IGV2ZW50VGFzayB8fCB0YXNrLnR5cGUgPT09IG1hY3JvVGFzaykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcmVFbnRyeUd1YXJkID0gdGFzay5zdGF0ZSAhPSBydW5uaW5nO1xuICAgICAgICAgICAgICAgIHJlRW50cnlHdWFyZCAmJiB0YXNrLl90cmFuc2l0aW9uVG8ocnVubmluZywgc2NoZWR1bGVkKTtcbiAgICAgICAgICAgICAgICB0YXNrLnJ1bkNvdW50Kys7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzVGFzayA9IF9jdXJyZW50VGFzaztcbiAgICAgICAgICAgICAgICBfY3VycmVudFRhc2sgPSB0YXNrO1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0geyBwYXJlbnQ6IF9jdXJyZW50Wm9uZUZyYW1lLCB6b25lOiB0aGlzIH07XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sudHlwZSA9PSBtYWNyb1Rhc2sgJiYgdGFzay5kYXRhICYmICF0YXNrLmRhdGEuaXNQZXJpb2RpYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5jYW5jZWxGbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrKHRoaXMsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB0YXNrJ3Mgc3RhdGUgaXMgbm90U2NoZWR1bGVkIG9yIHVua25vd24sIHRoZW4gaXQgaGFzIGFscmVhZHkgYmVlbiBjYW5jZWxsZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIG5vdCByZXNldCB0aGUgc3RhdGUgdG8gc2NoZWR1bGVkXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLnN0YXRlICE9PSBub3RTY2hlZHVsZWQgJiYgdGFzay5zdGF0ZSAhPT0gdW5rbm93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sudHlwZSA9PSBldmVudFRhc2sgfHwgKHRhc2suZGF0YSAmJiB0YXNrLmRhdGEuaXNQZXJpb2RpYykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5R3VhcmQgJiYgdGFzay5fdHJhbnNpdGlvblRvKHNjaGVkdWxlZCwgcnVubmluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnJ1bkNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzaywgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlHdWFyZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLl90cmFuc2l0aW9uVG8obm90U2NoZWR1bGVkLCBydW5uaW5nLCBub3RTY2hlZHVsZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0gX2N1cnJlbnRab25lRnJhbWUucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBfY3VycmVudFRhc2sgPSBwcmV2aW91c1Rhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLnNjaGVkdWxlVGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suem9uZSAmJiB0YXNrLnpvbmUgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHRhc2sgd2FzIHJlc2NoZWR1bGVkLCB0aGUgbmV3Wm9uZVxuICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQgbm90IGJlIHRoZSBjaGlsZHJlbiBvZiB0aGUgb3JpZ2luYWwgem9uZVxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Wm9uZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChuZXdab25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3Wm9uZSA9PT0gdGFzay56b25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJjYW4gbm90IHJlc2NoZWR1bGUgdGFzayB0byBcIi5jb25jYXQodGhpcy5uYW1lLCBcIiB3aGljaCBpcyBkZXNjZW5kYW50cyBvZiB0aGUgb3JpZ2luYWwgem9uZSBcIikuY29uY2F0KHRhc2suem9uZS5uYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdab25lID0gbmV3Wm9uZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKHNjaGVkdWxpbmcsIG5vdFNjaGVkdWxlZCk7XG4gICAgICAgICAgICAgICAgdmFyIHpvbmVEZWxlZ2F0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB0YXNrLl96b25lRGVsZWdhdGVzID0gem9uZURlbGVnYXRlcztcbiAgICAgICAgICAgICAgICB0YXNrLl96b25lID0gdGhpcztcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrID0gdGhpcy5fem9uZURlbGVnYXRlLnNjaGVkdWxlVGFzayh0aGlzLCB0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQgc2V0IHRhc2sncyBzdGF0ZSB0byB1bmtub3duIHdoZW4gc2NoZWR1bGVUYXNrIHRocm93IGVycm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlY2F1c2UgdGhlIGVyciBtYXkgZnJvbSByZXNjaGVkdWxlLCBzbyB0aGUgZnJvbVN0YXRlIG1heWJlIG5vdFNjaGVkdWxlZFxuICAgICAgICAgICAgICAgICAgICB0YXNrLl90cmFuc2l0aW9uVG8odW5rbm93biwgc2NoZWR1bGluZywgbm90U2NoZWR1bGVkKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQEppYUxpUGFzc2lvbiwgc2hvdWxkIHdlIGNoZWNrIHRoZSByZXN1bHQgZnJvbSBoYW5kbGVFcnJvcj9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlLmhhbmRsZUVycm9yKHRoaXMsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suX3pvbmVEZWxlZ2F0ZXMgPT09IHpvbmVEZWxlZ2F0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBjaGVjayBiZWNhdXNlIGludGVybmFsbHkgdGhlIGRlbGVnYXRlIGNhbiByZXNjaGVkdWxlIHRoZSB0YXNrLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzaywgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0YXNrLnN0YXRlID09IHNjaGVkdWxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKHNjaGVkdWxlZCwgc2NoZWR1bGluZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLnNjaGVkdWxlTWljcm9UYXNrID0gZnVuY3Rpb24gKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGVUYXNrKG5ldyBab25lVGFzayhtaWNyb1Rhc2ssIHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCB1bmRlZmluZWQpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS5zY2hlZHVsZU1hY3JvVGFzayA9IGZ1bmN0aW9uIChzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGVUYXNrKG5ldyBab25lVGFzayhtYWNyb1Rhc2ssIHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS5zY2hlZHVsZUV2ZW50VGFzayA9IGZ1bmN0aW9uIChzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGVUYXNrKG5ldyBab25lVGFzayhldmVudFRhc2ssIHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS5jYW5jZWxUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay56b25lICE9IHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSB0YXNrIGNhbiBvbmx5IGJlIGNhbmNlbGxlZCBpbiB0aGUgem9uZSBvZiBjcmVhdGlvbiEgKENyZWF0aW9uOiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0YXNrLnpvbmUgfHwgTk9fWk9ORSkubmFtZSArICc7IEV4ZWN1dGlvbjogJyArIHRoaXMubmFtZSArICcpJyk7XG4gICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKGNhbmNlbGluZywgc2NoZWR1bGVkLCBydW5uaW5nKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUuY2FuY2VsVGFzayh0aGlzLCB0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBlcnJvciBvY2N1cnMgd2hlbiBjYW5jZWxUYXNrLCB0cmFuc2l0IHRoZSBzdGF0ZSB0byB1bmtub3duXG4gICAgICAgICAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25Ubyh1bmtub3duLCBjYW5jZWxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzaywgLTEpO1xuICAgICAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25Ubyhub3RTY2hlZHVsZWQsIGNhbmNlbGluZyk7XG4gICAgICAgICAgICAgICAgdGFzay5ydW5Db3VudCA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZS5wcm90b3R5cGUuX3VwZGF0ZVRhc2tDb3VudCA9IGZ1bmN0aW9uICh0YXNrLCBjb3VudCkge1xuICAgICAgICAgICAgICAgIHZhciB6b25lRGVsZWdhdGVzID0gdGFzay5fem9uZURlbGVnYXRlcztcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5fem9uZURlbGVnYXRlcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgem9uZURlbGVnYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB6b25lRGVsZWdhdGVzW2ldLl91cGRhdGVUYXNrQ291bnQodGFzay50eXBlLCBjb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBab25lO1xuICAgICAgICB9KCkpO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICAgICAgWm9uZS5fX3N5bWJvbF9fID0gX19zeW1ib2xfXztcbiAgICAgICAgdmFyIERFTEVHQVRFX1pTID0ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBvbkhhc1Rhc2s6IGZ1bmN0aW9uIChkZWxlZ2F0ZSwgXywgdGFyZ2V0LCBoYXNUYXNrU3RhdGUpIHsgcmV0dXJuIGRlbGVnYXRlLmhhc1Rhc2sodGFyZ2V0LCBoYXNUYXNrU3RhdGUpOyB9LFxuICAgICAgICAgICAgb25TY2hlZHVsZVRhc2s6IGZ1bmN0aW9uIChkZWxlZ2F0ZSwgXywgdGFyZ2V0LCB0YXNrKSB7IHJldHVybiBkZWxlZ2F0ZS5zY2hlZHVsZVRhc2sodGFyZ2V0LCB0YXNrKTsgfSxcbiAgICAgICAgICAgIG9uSW52b2tlVGFzazogZnVuY3Rpb24gKGRlbGVnYXRlLCBfLCB0YXJnZXQsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKSB7IHJldHVybiBkZWxlZ2F0ZS5pbnZva2VUYXNrKHRhcmdldCwgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpOyB9LFxuICAgICAgICAgICAgb25DYW5jZWxUYXNrOiBmdW5jdGlvbiAoZGVsZWdhdGUsIF8sIHRhcmdldCwgdGFzaykgeyByZXR1cm4gZGVsZWdhdGUuY2FuY2VsVGFzayh0YXJnZXQsIHRhc2spOyB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBfWm9uZURlbGVnYXRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gX1pvbmVEZWxlZ2F0ZSh6b25lLCBwYXJlbnREZWxlZ2F0ZSwgem9uZVNwZWMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90YXNrQ291bnRzID0geyAnbWljcm9UYXNrJzogMCwgJ21hY3JvVGFzayc6IDAsICdldmVudFRhc2snOiAwIH07XG4gICAgICAgICAgICAgICAgdGhpcy56b25lID0gem9uZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnREZWxlZ2F0ZSA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmtaUyA9IHpvbmVTcGVjICYmICh6b25lU3BlYyAmJiB6b25lU3BlYy5vbkZvcmsgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9mb3JrWlMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmtEbGd0ID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uRm9yayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ZvcmtEbGd0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9mb3JrQ3VyclpvbmUgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25Gb3JrID8gdGhpcy56b25lIDogcGFyZW50RGVsZWdhdGUuX2ZvcmtDdXJyWm9uZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW50ZXJjZXB0WlMgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHRaUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW50ZXJjZXB0RGxndCA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludGVyY2VwdCA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ludGVyY2VwdERsZ3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdEN1cnJab25lID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW50ZXJjZXB0ID8gdGhpcy56b25lIDogcGFyZW50RGVsZWdhdGUuX2ludGVyY2VwdEN1cnJab25lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VaUyA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZSA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVpTKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VEbGd0ID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlRGxndCk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW52b2tlQ3VyclpvbmUgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2UgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlQ3VyclpvbmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yWlMgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYW5kbGVFcnJvciA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2hhbmRsZUVycm9yWlMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yRGxndCA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkhhbmRsZUVycm9yID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faGFuZGxlRXJyb3JEbGd0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvckN1cnJab25lID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSGFuZGxlRXJyb3IgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS5faGFuZGxlRXJyb3JDdXJyWm9uZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVUYXNrWlMgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2taUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVUYXNrRGxndCA9IHpvbmVTcGVjICYmXG4gICAgICAgICAgICAgICAgICAgICh6b25lU3BlYy5vblNjaGVkdWxlVGFzayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX3NjaGVkdWxlVGFza0RsZ3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0N1cnJab25lID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uU2NoZWR1bGVUYXNrID8gdGhpcy56b25lIDogcGFyZW50RGVsZWdhdGUuX3NjaGVkdWxlVGFza0N1cnJab25lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrWlMgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2VUYXNrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlVGFza1pTKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrRGxndCA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZVRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VUYXNrRGxndCk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0N1cnJab25lID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlVGFzayA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VUYXNrQ3VyclpvbmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2taUyA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkNhbmNlbFRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9jYW5jZWxUYXNrWlMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2tEbGd0ID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uQ2FuY2VsVGFzayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2NhbmNlbFRhc2tEbGd0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrQ3VyclpvbmUgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25DYW5jZWxUYXNrID8gdGhpcy56b25lIDogcGFyZW50RGVsZWdhdGUuX2NhbmNlbFRhc2tDdXJyWm9uZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza1pTID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrRGxndCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza0RsZ3RPd25lciA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza0N1cnJab25lID0gbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgem9uZVNwZWNIYXNUYXNrID0gem9uZVNwZWMgJiYgem9uZVNwZWMub25IYXNUYXNrO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRIYXNUYXNrID0gcGFyZW50RGVsZWdhdGUgJiYgcGFyZW50RGVsZWdhdGUuX2hhc1Rhc2taUztcbiAgICAgICAgICAgICAgICBpZiAoem9uZVNwZWNIYXNUYXNrIHx8IHBhcmVudEhhc1Rhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgbmVlZCB0byByZXBvcnQgaGFzVGFzaywgdGhhbiB0aGlzIFpTIG5lZWRzIHRvIGRvIHJlZiBjb3VudGluZyBvbiB0YXNrcy4gSW4gc3VjaFxuICAgICAgICAgICAgICAgICAgICAvLyBhIGNhc2UgYWxsIHRhc2sgcmVsYXRlZCBpbnRlcmNlcHRvcnMgbXVzdCBnbyB0aHJvdWdoIHRoaXMgWkQuIFdlIGNhbid0IHNob3J0IGNpcmN1aXQgaXQuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2taUyA9IHpvbmVTcGVjSGFzVGFzayA/IHpvbmVTcGVjIDogREVMRUdBVEVfWlM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0ID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0T3duZXIgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrQ3VyclpvbmUgPSB6b25lO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXpvbmVTcGVjLm9uU2NoZWR1bGVUYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2taUyA9IERFTEVHQVRFX1pTO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVUYXNrRGxndCA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVUYXNrQ3VyclpvbmUgPSB0aGlzLnpvbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF6b25lU3BlYy5vbkludm9rZVRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2taUyA9IERFTEVHQVRFX1pTO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0RsZ3QgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2tDdXJyWm9uZSA9IHRoaXMuem9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXpvbmVTcGVjLm9uQ2FuY2VsVGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza1pTID0gREVMRUdBVEVfWlM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrRGxndCA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0N1cnJab25lID0gdGhpcy56b25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX1pvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuZm9yayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCB6b25lU3BlYykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JrWlMgPyB0aGlzLl9mb3JrWlMub25Gb3JrKHRoaXMuX2ZvcmtEbGd0LCB0aGlzLnpvbmUsIHRhcmdldFpvbmUsIHpvbmVTcGVjKSA6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBab25lKHRhcmdldFpvbmUsIHpvbmVTcGVjKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfWm9uZURlbGVnYXRlLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnRlcmNlcHRaUyA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdFpTLm9uSW50ZXJjZXB0KHRoaXMuX2ludGVyY2VwdERsZ3QsIHRoaXMuX2ludGVyY2VwdEN1cnJab25lLCB0YXJnZXRab25lLCBjYWxsYmFjaywgc291cmNlKSA6XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9ab25lRGVsZWdhdGUucHJvdG90eXBlLmludm9rZSA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnZva2VaUyA/IHRoaXMuX2ludm9rZVpTLm9uSW52b2tlKHRoaXMuX2ludm9rZURsZ3QsIHRoaXMuX2ludm9rZUN1cnJab25lLCB0YXJnZXRab25lLCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkgOlxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX1pvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3JaUyA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yWlMub25IYW5kbGVFcnJvcih0aGlzLl9oYW5kbGVFcnJvckRsZ3QsIHRoaXMuX2hhbmRsZUVycm9yQ3VyclpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA6XG4gICAgICAgICAgICAgICAgICAgIHRydWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX1pvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuc2NoZWR1bGVUYXNrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIHRhc2spIHtcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuVGFzayA9IHRhc2s7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NjaGVkdWxlVGFza1pTKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9oYXNUYXNrWlMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRhc2suX3pvbmVEZWxlZ2F0ZXMucHVzaCh0aGlzLl9oYXNUYXNrRGxndE93bmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBjbGFuZy1mb3JtYXQgb2ZmXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRhc2sgPSB0aGlzLl9zY2hlZHVsZVRhc2taUy5vblNjaGVkdWxlVGFzayh0aGlzLl9zY2hlZHVsZVRhc2tEbGd0LCB0aGlzLl9zY2hlZHVsZVRhc2tDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgdGFzayk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsYW5nLWZvcm1hdCBvblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJldHVyblRhc2spXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5UYXNrID0gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLnNjaGVkdWxlRm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suc2NoZWR1bGVGbih0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0YXNrLnR5cGUgPT0gbWljcm9UYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZU1pY3JvVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGFzayBpcyBtaXNzaW5nIHNjaGVkdWxlRm4uJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblRhc2s7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX1pvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaW52b2tlVGFzayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnZva2VUYXNrWlMgPyB0aGlzLl9pbnZva2VUYXNrWlMub25JbnZva2VUYXNrKHRoaXMuX2ludm9rZVRhc2tEbGd0LCB0aGlzLl9pbnZva2VUYXNrQ3VyclpvbmUsIHRhcmdldFpvbmUsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKSA6XG4gICAgICAgICAgICAgICAgICAgIHRhc2suY2FsbGJhY2suYXBwbHkoYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9ab25lRGVsZWdhdGUucHJvdG90eXBlLmNhbmNlbFRhc2sgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgdGFzaykge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FuY2VsVGFza1pTKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fY2FuY2VsVGFza1pTLm9uQ2FuY2VsVGFzayh0aGlzLl9jYW5jZWxUYXNrRGxndCwgdGhpcy5fY2FuY2VsVGFza0N1cnJab25lLCB0YXJnZXRab25lLCB0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFzay5jYW5jZWxGbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1Rhc2sgaXMgbm90IGNhbmNlbGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRhc2suY2FuY2VsRm4odGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfWm9uZURlbGVnYXRlLnByb3RvdHlwZS5oYXNUYXNrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIGlzRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAvLyBoYXNUYXNrIHNob3VsZCBub3QgdGhyb3cgZXJyb3Igc28gb3RoZXIgWm9uZURlbGVnYXRlXG4gICAgICAgICAgICAgICAgLy8gY2FuIHN0aWxsIHRyaWdnZXIgaGFzVGFzayBjYWxsYmFja1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2taUyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza1pTLm9uSGFzVGFzayh0aGlzLl9oYXNUYXNrRGxndCwgdGhpcy5faGFzVGFza0N1cnJab25lLCB0YXJnZXRab25lLCBpc0VtcHR5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKHRhcmdldFpvbmUsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyZXF1aXJlLWludGVybmFsLXdpdGgtdW5kZXJzY29yZVxuICAgICAgICAgICAgX1pvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuX3VwZGF0ZVRhc2tDb3VudCA9IGZ1bmN0aW9uICh0eXBlLCBjb3VudCkge1xuICAgICAgICAgICAgICAgIHZhciBjb3VudHMgPSB0aGlzLl90YXNrQ291bnRzO1xuICAgICAgICAgICAgICAgIHZhciBwcmV2ID0gY291bnRzW3R5cGVdO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gY291bnRzW3R5cGVdID0gcHJldiArIGNvdW50O1xuICAgICAgICAgICAgICAgIGlmIChuZXh0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vcmUgdGFza3MgZXhlY3V0ZWQgdGhlbiB3ZXJlIHNjaGVkdWxlZC4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByZXYgPT0gMCB8fCBuZXh0ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzRW1wdHkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaWNyb1Rhc2s6IGNvdW50c1snbWljcm9UYXNrJ10gPiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFjcm9UYXNrOiBjb3VudHNbJ21hY3JvVGFzayddID4gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VGFzazogY291bnRzWydldmVudFRhc2snXSA+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IHR5cGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNUYXNrKHRoaXMuem9uZSwgaXNFbXB0eSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBfWm9uZURlbGVnYXRlO1xuICAgICAgICB9KCkpO1xuICAgICAgICB2YXIgWm9uZVRhc2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBab25lVGFzayh0eXBlLCBzb3VyY2UsIGNhbGxiYWNrLCBvcHRpb25zLCBzY2hlZHVsZUZuLCBjYW5jZWxGbikge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyZXF1aXJlLWludGVybmFsLXdpdGgtdW5kZXJzY29yZVxuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMucnVuQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyZXF1aXJlLWludGVybmFsLXdpdGgtdW5kZXJzY29yZVxuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZXMgPSBudWxsO1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyZXF1aXJlLWludGVybmFsLXdpdGgtdW5kZXJzY29yZVxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gJ25vdFNjaGVkdWxlZCc7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBvcHRpb25zO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVGbiA9IHNjaGVkdWxlRm47XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxGbiA9IGNhbmNlbEZuO1xuICAgICAgICAgICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IEBKaWFMaVBhc3Npb24gb3B0aW9ucyBzaG91bGQgaGF2ZSBpbnRlcmZhY2VcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gZXZlbnRUYXNrICYmIG9wdGlvbnMgJiYgb3B0aW9ucy51c2VHKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlID0gWm9uZVRhc2suaW52b2tlVGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFpvbmVUYXNrLmludm9rZVRhc2suY2FsbChnbG9iYWwsIHNlbGYsIHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgWm9uZVRhc2suaW52b2tlVGFzayA9IGZ1bmN0aW9uICh0YXNrLCB0YXJnZXQsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzayA9IHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMrKztcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnJ1bkNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnpvbmUucnVuVGFzayh0YXNrLCB0YXJnZXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJhaW5NaWNyb1Rhc2tRdWV1ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmVUYXNrLnByb3RvdHlwZSwgXCJ6b25lXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmVUYXNrLnByb3RvdHlwZSwgXCJzdGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBab25lVGFzay5wcm90b3R5cGUuY2FuY2VsU2NoZWR1bGVSZXF1ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Ubyhub3RTY2hlZHVsZWQsIHNjaGVkdWxpbmcpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyZXF1aXJlLWludGVybmFsLXdpdGgtdW5kZXJzY29yZVxuICAgICAgICAgICAgWm9uZVRhc2sucHJvdG90eXBlLl90cmFuc2l0aW9uVG8gPSBmdW5jdGlvbiAodG9TdGF0ZSwgZnJvbVN0YXRlMSwgZnJvbVN0YXRlMikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gZnJvbVN0YXRlMSB8fCB0aGlzLl9zdGF0ZSA9PT0gZnJvbVN0YXRlMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHRvU3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b1N0YXRlID09IG5vdFNjaGVkdWxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdCh0aGlzLnR5cGUsIFwiICdcIikuY29uY2F0KHRoaXMuc291cmNlLCBcIic6IGNhbiBub3QgdHJhbnNpdGlvbiB0byAnXCIpLmNvbmNhdCh0b1N0YXRlLCBcIicsIGV4cGVjdGluZyBzdGF0ZSAnXCIpLmNvbmNhdChmcm9tU3RhdGUxLCBcIidcIikuY29uY2F0KGZyb21TdGF0ZTIgPyAnIG9yIFxcJycgKyBmcm9tU3RhdGUyICsgJ1xcJycgOiAnJywgXCIsIHdhcyAnXCIpLmNvbmNhdCh0aGlzLl9zdGF0ZSwgXCInLlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmVUYXNrLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhICYmIHR5cGVvZiB0aGlzLmRhdGEuaGFuZGxlSWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuaGFuZGxlSWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGFkZCB0b0pTT04gbWV0aG9kIHRvIHByZXZlbnQgY3ljbGljIGVycm9yIHdoZW5cbiAgICAgICAgICAgIC8vIGNhbGwgSlNPTi5zdHJpbmdpZnkoem9uZVRhc2spXG4gICAgICAgICAgICBab25lVGFzay5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgIHpvbmU6IHRoaXMuem9uZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBydW5Db3VudDogdGhpcy5ydW5Db3VudFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFpvbmVUYXNrO1xuICAgICAgICB9KCkpO1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vLyAgTUlDUk9UQVNLIFFVRVVFXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgdmFyIHN5bWJvbFNldFRpbWVvdXQgPSBfX3N5bWJvbF9fKCdzZXRUaW1lb3V0Jyk7XG4gICAgICAgIHZhciBzeW1ib2xQcm9taXNlID0gX19zeW1ib2xfXygnUHJvbWlzZScpO1xuICAgICAgICB2YXIgc3ltYm9sVGhlbiA9IF9fc3ltYm9sX18oJ3RoZW4nKTtcbiAgICAgICAgdmFyIF9taWNyb1Rhc2tRdWV1ZSA9IFtdO1xuICAgICAgICB2YXIgX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgbmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlO1xuICAgICAgICBmdW5jdGlvbiBuYXRpdmVTY2hlZHVsZU1pY3JvVGFzayhmdW5jKSB7XG4gICAgICAgICAgICBpZiAoIW5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxbc3ltYm9sUHJvbWlzZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlID0gZ2xvYmFsW3N5bWJvbFByb21pc2VdLnJlc29sdmUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHZhciBuYXRpdmVUaGVuID0gbmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlW3N5bWJvbFRoZW5dO1xuICAgICAgICAgICAgICAgIGlmICghbmF0aXZlVGhlbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBuYXRpdmUgUHJvbWlzZSBpcyBub3QgcGF0Y2hhYmxlLCB3ZSBuZWVkIHRvIHVzZSBgdGhlbmAgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICAgICAgLy8gaXNzdWUgMTA3OFxuICAgICAgICAgICAgICAgICAgICBuYXRpdmVUaGVuID0gbmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlWyd0aGVuJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5hdGl2ZVRoZW4uY2FsbChuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2UsIGZ1bmMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsW3N5bWJvbFNldFRpbWVvdXRdKGZ1bmMsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNjaGVkdWxlTWljcm9UYXNrKHRhc2spIHtcbiAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBub3QgcnVubmluZyBpbiBhbnkgdGFzaywgYW5kIHRoZXJlIGhhcyBub3QgYmVlbiBhbnl0aGluZyBzY2hlZHVsZWRcbiAgICAgICAgICAgIC8vIHdlIG11c3QgYm9vdHN0cmFwIHRoZSBpbml0aWFsIHRhc2sgY3JlYXRpb24gYnkgbWFudWFsbHkgc2NoZWR1bGluZyB0aGUgZHJhaW5cbiAgICAgICAgICAgIGlmIChfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzID09PSAwICYmIF9taWNyb1Rhc2tRdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBhcmUgbm90IHJ1bm5pbmcgaW4gVGFzaywgc28gd2UgbmVlZCB0byBraWNrc3RhcnQgdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAgICAgICAgICAgICAgICBuYXRpdmVTY2hlZHVsZU1pY3JvVGFzayhkcmFpbk1pY3JvVGFza1F1ZXVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhc2sgJiYgX21pY3JvVGFza1F1ZXVlLnB1c2godGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZHJhaW5NaWNyb1Rhc2tRdWV1ZSgpIHtcbiAgICAgICAgICAgIGlmICghX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSkge1xuICAgICAgICAgICAgICAgIF9pc0RyYWluaW5nTWljcm90YXNrUXVldWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHdoaWxlIChfbWljcm9UYXNrUXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBxdWV1ZSA9IF9taWNyb1Rhc2tRdWV1ZTtcbiAgICAgICAgICAgICAgICAgICAgX21pY3JvVGFza1F1ZXVlID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXNrID0gcXVldWVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suem9uZS5ydW5UYXNrKHRhc2ssIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2FwaS5vblVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfYXBpLm1pY3JvdGFza0RyYWluRG9uZSgpO1xuICAgICAgICAgICAgICAgIF9pc0RyYWluaW5nTWljcm90YXNrUXVldWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vLyAgQk9PVFNUUkFQXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgdmFyIE5PX1pPTkUgPSB7IG5hbWU6ICdOTyBaT05FJyB9O1xuICAgICAgICB2YXIgbm90U2NoZWR1bGVkID0gJ25vdFNjaGVkdWxlZCcsIHNjaGVkdWxpbmcgPSAnc2NoZWR1bGluZycsIHNjaGVkdWxlZCA9ICdzY2hlZHVsZWQnLCBydW5uaW5nID0gJ3J1bm5pbmcnLCBjYW5jZWxpbmcgPSAnY2FuY2VsaW5nJywgdW5rbm93biA9ICd1bmtub3duJztcbiAgICAgICAgdmFyIG1pY3JvVGFzayA9ICdtaWNyb1Rhc2snLCBtYWNyb1Rhc2sgPSAnbWFjcm9UYXNrJywgZXZlbnRUYXNrID0gJ2V2ZW50VGFzayc7XG4gICAgICAgIHZhciBwYXRjaGVzID0ge307XG4gICAgICAgIHZhciBfYXBpID0ge1xuICAgICAgICAgICAgc3ltYm9sOiBfX3N5bWJvbF9fLFxuICAgICAgICAgICAgY3VycmVudFpvbmVGcmFtZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX2N1cnJlbnRab25lRnJhbWU7IH0sXG4gICAgICAgICAgICBvblVuaGFuZGxlZEVycm9yOiBub29wLFxuICAgICAgICAgICAgbWljcm90YXNrRHJhaW5Eb25lOiBub29wLFxuICAgICAgICAgICAgc2NoZWR1bGVNaWNyb1Rhc2s6IHNjaGVkdWxlTWljcm9UYXNrLFxuICAgICAgICAgICAgc2hvd1VuY2F1Z2h0RXJyb3I6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICFab25lW19fc3ltYm9sX18oJ2lnbm9yZUNvbnNvbGVFcnJvclVuY2F1Z2h0RXJyb3InKV07IH0sXG4gICAgICAgICAgICBwYXRjaEV2ZW50VGFyZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzOiBub29wLFxuICAgICAgICAgICAgcGF0Y2hNZXRob2Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgICAgICBiaW5kQXJndW1lbnRzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgICAgIHBhdGNoVGhlbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfSxcbiAgICAgICAgICAgIHBhdGNoTWFjcm9UYXNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICAgICAgcGF0Y2hFdmVudFByb3RvdHlwZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfSxcbiAgICAgICAgICAgIGlzSUVPckVkZ2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgZ2V0R2xvYmFsT2JqZWN0czogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgICAgICBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIE9iamVjdENyZWF0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgQXJyYXlTbGljZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH0sXG4gICAgICAgICAgICBwYXRjaENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICAgICAgd3JhcFdpdGhDdXJyZW50Wm9uZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfSxcbiAgICAgICAgICAgIGZpbHRlclByb3BlcnRpZXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxuICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICAgICAgX3JlZGVmaW5lUHJvcGVydHk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgICAgICBwYXRjaENhbGxiYWNrczogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfSxcbiAgICAgICAgICAgIG5hdGl2ZVNjaGVkdWxlTWljcm9UYXNrOiBuYXRpdmVTY2hlZHVsZU1pY3JvVGFza1xuICAgICAgICB9O1xuICAgICAgICB2YXIgX2N1cnJlbnRab25lRnJhbWUgPSB7IHBhcmVudDogbnVsbCwgem9uZTogbmV3IFpvbmUobnVsbCwgbnVsbCkgfTtcbiAgICAgICAgdmFyIF9jdXJyZW50VGFzayA9IG51bGw7XG4gICAgICAgIHZhciBfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzID0gMDtcbiAgICAgICAgZnVuY3Rpb24gbm9vcCgpIHsgfVxuICAgICAgICBwZXJmb3JtYW5jZU1lYXN1cmUoJ1pvbmUnLCAnWm9uZScpO1xuICAgICAgICByZXR1cm4gZ2xvYmFsWydab25lJ10gPSBab25lO1xuICAgIH0pKSh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgfHwgdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgfHwgZ2xvYmFsKTtcbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBTdXBwcmVzcyBjbG9zdXJlIGNvbXBpbGVyIGVycm9ycyBhYm91dCB1bmtub3duICdab25lJyB2YXJpYWJsZVxuICAgICAqIEBmaWxlb3ZlcnZpZXdcbiAgICAgKiBAc3VwcHJlc3Mge3VuZGVmaW5lZFZhcnMsZ2xvYmFsVGhpcyxtaXNzaW5nUmVxdWlyZX1cbiAgICAgKi9cbiAgICAvLy8gPHJlZmVyZW5jZSB0eXBlcz1cIm5vZGVcIi8+XG4gICAgLy8gaXNzdWUgIzk4OSwgdG8gcmVkdWNlIGJ1bmRsZSBzaXplLCB1c2Ugc2hvcnQgbmFtZVxuICAgIC8qKiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICovXG4gICAgdmFyIE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICAgLyoqIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAqL1xuICAgIHZhciBPYmplY3REZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbiAgICAvKiogT2JqZWN0LmdldFByb3RvdHlwZU9mICovXG4gICAgdmFyIE9iamVjdEdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICAgIC8qKiBPYmplY3QuY3JlYXRlICovXG4gICAgdmFyIE9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG4gICAgLyoqIEFycmF5LnByb3RvdHlwZS5zbGljZSAqL1xuICAgIHZhciBBcnJheVNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuICAgIC8qKiBhZGRFdmVudExpc3RlbmVyIHN0cmluZyBjb25zdCAqL1xuICAgIHZhciBBRERfRVZFTlRfTElTVEVORVJfU1RSID0gJ2FkZEV2ZW50TGlzdGVuZXInO1xuICAgIC8qKiByZW1vdmVFdmVudExpc3RlbmVyIHN0cmluZyBjb25zdCAqL1xuICAgIHZhciBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSID0gJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuICAgIC8qKiB6b25lU3ltYm9sIGFkZEV2ZW50TGlzdGVuZXIgKi9cbiAgICB2YXIgWk9ORV9TWU1CT0xfQUREX0VWRU5UX0xJU1RFTkVSID0gWm9uZS5fX3N5bWJvbF9fKEFERF9FVkVOVF9MSVNURU5FUl9TVFIpO1xuICAgIC8qKiB6b25lU3ltYm9sIHJlbW92ZUV2ZW50TGlzdGVuZXIgKi9cbiAgICB2YXIgWk9ORV9TWU1CT0xfUkVNT1ZFX0VWRU5UX0xJU1RFTkVSID0gWm9uZS5fX3N5bWJvbF9fKFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIpO1xuICAgIC8qKiB0cnVlIHN0cmluZyBjb25zdCAqL1xuICAgIHZhciBUUlVFX1NUUiA9ICd0cnVlJztcbiAgICAvKiogZmFsc2Ugc3RyaW5nIGNvbnN0ICovXG4gICAgdmFyIEZBTFNFX1NUUiA9ICdmYWxzZSc7XG4gICAgLyoqIFpvbmUgc3ltYm9sIHByZWZpeCBzdHJpbmcgY29uc3QuICovXG4gICAgdmFyIFpPTkVfU1lNQk9MX1BSRUZJWCA9IFpvbmUuX19zeW1ib2xfXygnJyk7XG4gICAgZnVuY3Rpb24gd3JhcFdpdGhDdXJyZW50Wm9uZShjYWxsYmFjaywgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBab25lLmN1cnJlbnQud3JhcChjYWxsYmFjaywgc291cmNlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUoc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCkge1xuICAgICAgICByZXR1cm4gWm9uZS5jdXJyZW50LnNjaGVkdWxlTWFjcm9UYXNrKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpO1xuICAgIH1cbiAgICB2YXIgem9uZVN5bWJvbCQxID0gWm9uZS5fX3N5bWJvbF9fO1xuICAgIHZhciBpc1dpbmRvd0V4aXN0cyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuICAgIHZhciBpbnRlcm5hbFdpbmRvdyA9IGlzV2luZG93RXhpc3RzID8gd2luZG93IDogdW5kZWZpbmVkO1xuICAgIHZhciBfZ2xvYmFsID0gaXNXaW5kb3dFeGlzdHMgJiYgaW50ZXJuYWxXaW5kb3cgfHwgdHlwZW9mIHNlbGYgPT09ICdvYmplY3QnICYmIHNlbGYgfHwgZ2xvYmFsO1xuICAgIHZhciBSRU1PVkVfQVRUUklCVVRFID0gJ3JlbW92ZUF0dHJpYnV0ZSc7XG4gICAgZnVuY3Rpb24gYmluZEFyZ3VtZW50cyhhcmdzLCBzb3VyY2UpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IGFyZ3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1tpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSB3cmFwV2l0aEN1cnJlbnRab25lKGFyZ3NbaV0sIHNvdXJjZSArICdfJyArIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXRjaFByb3RvdHlwZShwcm90b3R5cGUsIGZuTmFtZXMpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHByb3RvdHlwZS5jb25zdHJ1Y3RvclsnbmFtZSddO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gZm5OYW1lc1tpXTtcbiAgICAgICAgICAgIHZhciBkZWxlZ2F0ZSA9IHByb3RvdHlwZVtuYW1lXzFdO1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3RvdHlwZURlc2MgPSBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCBuYW1lXzEpO1xuICAgICAgICAgICAgICAgIGlmICghaXNQcm9wZXJ0eVdyaXRhYmxlKHByb3RvdHlwZURlc2MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3RvdHlwZVtuYW1lXzFdID0gKGZ1bmN0aW9uIChkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGF0Y2hlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseSh0aGlzLCBiaW5kQXJndW1lbnRzKGFyZ3VtZW50cywgc291cmNlICsgJy4nICsgbmFtZV8xKSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwYXRjaGVkLCBkZWxlZ2F0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXRjaGVkO1xuICAgICAgICAgICAgICAgIH0pKGRlbGVnYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbk5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzUHJvcGVydHlXcml0YWJsZShwcm9wZXJ0eURlc2MpIHtcbiAgICAgICAgaWYgKCFwcm9wZXJ0eURlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0eURlc2Mud3JpdGFibGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEodHlwZW9mIHByb3BlcnR5RGVzYy5nZXQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHByb3BlcnR5RGVzYy5zZXQgPT09ICd1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgdmFyIGlzV2ViV29ya2VyID0gKHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlKTtcbiAgICAvLyBNYWtlIHN1cmUgdG8gYWNjZXNzIGBwcm9jZXNzYCB0aHJvdWdoIGBfZ2xvYmFsYCBzbyB0aGF0IFdlYlBhY2sgZG9lcyBub3QgYWNjaWRlbnRhbGx5IGJyb3dzZXJpZnlcbiAgICAvLyB0aGlzIGNvZGUuXG4gICAgdmFyIGlzTm9kZSA9ICghKCdudycgaW4gX2dsb2JhbCkgJiYgdHlwZW9mIF9nbG9iYWwucHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAge30udG9TdHJpbmcuY2FsbChfZ2xvYmFsLnByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpO1xuICAgIHZhciBpc0Jyb3dzZXIgPSAhaXNOb2RlICYmICFpc1dlYldvcmtlciAmJiAhIShpc1dpbmRvd0V4aXN0cyAmJiBpbnRlcm5hbFdpbmRvd1snSFRNTEVsZW1lbnQnXSk7XG4gICAgLy8gd2UgYXJlIGluIGVsZWN0cm9uIG9mIG53LCBzbyB3ZSBhcmUgYm90aCBicm93c2VyIGFuZCBub2RlanNcbiAgICAvLyBNYWtlIHN1cmUgdG8gYWNjZXNzIGBwcm9jZXNzYCB0aHJvdWdoIGBfZ2xvYmFsYCBzbyB0aGF0IFdlYlBhY2sgZG9lcyBub3QgYWNjaWRlbnRhbGx5IGJyb3dzZXJpZnlcbiAgICAvLyB0aGlzIGNvZGUuXG4gICAgdmFyIGlzTWl4ID0gdHlwZW9mIF9nbG9iYWwucHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAge30udG9TdHJpbmcuY2FsbChfZ2xvYmFsLnByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScgJiYgIWlzV2ViV29ya2VyICYmXG4gICAgICAgICEhKGlzV2luZG93RXhpc3RzICYmIGludGVybmFsV2luZG93WydIVE1MRWxlbWVudCddKTtcbiAgICB2YXIgem9uZVN5bWJvbEV2ZW50TmFtZXMkMSA9IHt9O1xuICAgIHZhciB3cmFwRm4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvOTExLCBpbiBJRSwgc29tZXRpbWVzXG4gICAgICAgIC8vIGV2ZW50IHdpbGwgYmUgdW5kZWZpbmVkLCBzbyB3ZSBuZWVkIHRvIHVzZSB3aW5kb3cuZXZlbnRcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCBfZ2xvYmFsLmV2ZW50O1xuICAgICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV2ZW50TmFtZVN5bWJvbCA9IHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbZXZlbnQudHlwZV07XG4gICAgICAgIGlmICghZXZlbnROYW1lU3ltYm9sKSB7XG4gICAgICAgICAgICBldmVudE5hbWVTeW1ib2wgPSB6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50LnR5cGVdID0gem9uZVN5bWJvbCQxKCdPTl9QUk9QRVJUWScgKyBldmVudC50eXBlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcyB8fCBldmVudC50YXJnZXQgfHwgX2dsb2JhbDtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGFyZ2V0W2V2ZW50TmFtZVN5bWJvbF07XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIGlmIChpc0Jyb3dzZXIgJiYgdGFyZ2V0ID09PSBpbnRlcm5hbFdpbmRvdyAmJiBldmVudC50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAvLyB3aW5kb3cub25lcnJvciBoYXZlIGRpZmZlcmVudCBzaWduYXR1cmVcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9HbG9iYWxFdmVudEhhbmRsZXJzL29uZXJyb3Ijd2luZG93Lm9uZXJyb3JcbiAgICAgICAgICAgIC8vIGFuZCBvbmVycm9yIGNhbGxiYWNrIHdpbGwgcHJldmVudCBkZWZhdWx0IHdoZW4gY2FsbGJhY2sgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIHZhciBlcnJvckV2ZW50ID0gZXZlbnQ7XG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lciAmJlxuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXJyb3JFdmVudC5tZXNzYWdlLCBlcnJvckV2ZW50LmZpbGVuYW1lLCBlcnJvckV2ZW50LmxpbmVubywgZXJyb3JFdmVudC5jb2xubywgZXJyb3JFdmVudC5lcnJvcik7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyICYmIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9IHVuZGVmaW5lZCAmJiAhcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgZnVuY3Rpb24gcGF0Y2hQcm9wZXJ0eShvYmosIHByb3AsIHByb3RvdHlwZSkge1xuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApO1xuICAgICAgICBpZiAoIWRlc2MgJiYgcHJvdG90eXBlKSB7XG4gICAgICAgICAgICAvLyB3aGVuIHBhdGNoIHdpbmRvdyBvYmplY3QsIHVzZSBwcm90b3R5cGUgdG8gY2hlY2sgcHJvcCBleGlzdCBvciBub3RcbiAgICAgICAgICAgIHZhciBwcm90b3R5cGVEZXNjID0gT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwgcHJvcCk7XG4gICAgICAgICAgICBpZiAocHJvdG90eXBlRGVzYykge1xuICAgICAgICAgICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBkZXNjcmlwdG9yIG5vdCBleGlzdHMgb3IgaXMgbm90IGNvbmZpZ3VyYWJsZVxuICAgICAgICAvLyBqdXN0IHJldHVyblxuICAgICAgICBpZiAoIWRlc2MgfHwgIWRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9uUHJvcFBhdGNoZWRTeW1ib2wgPSB6b25lU3ltYm9sJDEoJ29uJyArIHByb3AgKyAncGF0Y2hlZCcpO1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG9uUHJvcFBhdGNoZWRTeW1ib2wpICYmIG9ialtvblByb3BQYXRjaGVkU3ltYm9sXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEEgcHJvcGVydHkgZGVzY3JpcHRvciBjYW5ub3QgaGF2ZSBnZXR0ZXIvc2V0dGVyIGFuZCBiZSB3cml0YWJsZVxuICAgICAgICAvLyBkZWxldGluZyB0aGUgd3JpdGFibGUgYW5kIHZhbHVlIHByb3BlcnRpZXMgYXZvaWRzIHRoaXMgZXJyb3I6XG4gICAgICAgIC8vXG4gICAgICAgIC8vIFR5cGVFcnJvcjogcHJvcGVydHkgZGVzY3JpcHRvcnMgbXVzdCBub3Qgc3BlY2lmeSBhIHZhbHVlIG9yIGJlIHdyaXRhYmxlIHdoZW4gYVxuICAgICAgICAvLyBnZXR0ZXIgb3Igc2V0dGVyIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgICAgICBkZWxldGUgZGVzYy53cml0YWJsZTtcbiAgICAgICAgZGVsZXRlIGRlc2MudmFsdWU7XG4gICAgICAgIHZhciBvcmlnaW5hbERlc2NHZXQgPSBkZXNjLmdldDtcbiAgICAgICAgdmFyIG9yaWdpbmFsRGVzY1NldCA9IGRlc2Muc2V0O1xuICAgICAgICAvLyBzbGljZSgyKSBjdXogJ29uY2xpY2snIC0+ICdjbGljaycsIGV0Y1xuICAgICAgICB2YXIgZXZlbnROYW1lID0gcHJvcC5zbGljZSgyKTtcbiAgICAgICAgdmFyIGV2ZW50TmFtZVN5bWJvbCA9IHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbZXZlbnROYW1lXTtcbiAgICAgICAgaWYgKCFldmVudE5hbWVTeW1ib2wpIHtcbiAgICAgICAgICAgIGV2ZW50TmFtZVN5bWJvbCA9IHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbZXZlbnROYW1lXSA9IHpvbmVTeW1ib2wkMSgnT05fUFJPUEVSVFknICsgZXZlbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBkZXNjLnNldCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgLy8gaW4gc29tZSBvZiB3aW5kb3dzJ3Mgb25wcm9wZXJ0eSBjYWxsYmFjaywgdGhpcyBpcyB1bmRlZmluZWRcbiAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gY2hlY2sgaXRcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQgJiYgb2JqID09PSBfZ2xvYmFsKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gX2dsb2JhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByZXZpb3VzVmFsdWUgPSB0YXJnZXRbZXZlbnROYW1lU3ltYm9sXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJldmlvdXNWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgd3JhcEZuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlzc3VlICM5NzgsIHdoZW4gb25sb2FkIGhhbmRsZXIgd2FzIGFkZGVkIGJlZm9yZSBsb2FkaW5nIHpvbmUuanNcbiAgICAgICAgICAgIC8vIHdlIHNob3VsZCByZW1vdmUgaXQgd2l0aCBvcmlnaW5hbERlc2NTZXRcbiAgICAgICAgICAgIG9yaWdpbmFsRGVzY1NldCAmJiBvcmlnaW5hbERlc2NTZXQuY2FsbCh0YXJnZXQsIG51bGwpO1xuICAgICAgICAgICAgdGFyZ2V0W2V2ZW50TmFtZVN5bWJvbF0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3VmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHdyYXBGbiwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBUaGUgZ2V0dGVyIHdvdWxkIHJldHVybiB1bmRlZmluZWQgZm9yIHVuYXNzaWduZWQgcHJvcGVydGllcyBidXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYW5cbiAgICAgICAgLy8gdW5hc3NpZ25lZCBwcm9wZXJ0eSBpcyBudWxsXG4gICAgICAgIGRlc2MuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gaW4gc29tZSBvZiB3aW5kb3dzJ3Mgb25wcm9wZXJ0eSBjYWxsYmFjaywgdGhpcyBpcyB1bmRlZmluZWRcbiAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gY2hlY2sgaXRcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQgJiYgb2JqID09PSBfZ2xvYmFsKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gX2dsb2JhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSB0YXJnZXRbZXZlbnROYW1lU3ltYm9sXTtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9yaWdpbmFsRGVzY0dldCkge1xuICAgICAgICAgICAgICAgIC8vIHJlc3VsdCB3aWxsIGJlIG51bGwgd2hlbiB1c2UgaW5saW5lIGV2ZW50IGF0dHJpYnV0ZSxcbiAgICAgICAgICAgICAgICAvLyBzdWNoIGFzIDxidXR0b24gb25jbGljaz1cImZ1bmMoKTtcIj5PSzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIC8vIGJlY2F1c2UgdGhlIG9uY2xpY2sgZnVuY3Rpb24gaXMgaW50ZXJuYWwgcmF3IHVuY29tcGlsZWQgaGFuZGxlclxuICAgICAgICAgICAgICAgIC8vIHRoZSBvbmNsaWNrIHdpbGwgYmUgZXZhbHVhdGVkIHdoZW4gZmlyc3QgdGltZSBldmVudCB3YXMgdHJpZ2dlcmVkIG9yXG4gICAgICAgICAgICAgICAgLy8gdGhlIHByb3BlcnR5IGlzIGFjY2Vzc2VkLCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy81MjVcbiAgICAgICAgICAgICAgICAvLyBzbyB3ZSBzaG91bGQgdXNlIG9yaWdpbmFsIG5hdGl2ZSBnZXQgdG8gcmV0cmlldmUgdGhlIGhhbmRsZXJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBvcmlnaW5hbERlc2NHZXQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzYy5zZXQuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W1JFTU9WRV9BVFRSSUJVVEVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgb2JqW29uUHJvcFBhdGNoZWRTeW1ib2xdID0gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGF0Y2hPblByb3BlcnRpZXMob2JqLCBwcm9wZXJ0aWVzLCBwcm90b3R5cGUpIHtcbiAgICAgICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBhdGNoUHJvcGVydHkob2JqLCAnb24nICsgcHJvcGVydGllc1tpXSwgcHJvdG90eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBvblByb3BlcnRpZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3Auc2xpY2UoMCwgMikgPT0gJ29uJykge1xuICAgICAgICAgICAgICAgICAgICBvblByb3BlcnRpZXMucHVzaChwcm9wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9uUHJvcGVydGllcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHBhdGNoUHJvcGVydHkob2JqLCBvblByb3BlcnRpZXNbal0sIHByb3RvdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIG9yaWdpbmFsSW5zdGFuY2VLZXkgPSB6b25lU3ltYm9sJDEoJ29yaWdpbmFsSW5zdGFuY2UnKTtcbiAgICAvLyB3cmFwIHNvbWUgbmF0aXZlIEFQSSBvbiBgd2luZG93YFxuICAgIGZ1bmN0aW9uIHBhdGNoQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgIHZhciBPcmlnaW5hbENsYXNzID0gX2dsb2JhbFtjbGFzc05hbWVdO1xuICAgICAgICBpZiAoIU9yaWdpbmFsQ2xhc3MpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIGtlZXAgb3JpZ2luYWwgY2xhc3MgaW4gZ2xvYmFsXG4gICAgICAgIF9nbG9iYWxbem9uZVN5bWJvbCQxKGNsYXNzTmFtZSldID0gT3JpZ2luYWxDbGFzcztcbiAgICAgICAgX2dsb2JhbFtjbGFzc05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGEgPSBiaW5kQXJndW1lbnRzKGFyZ3VtZW50cywgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHN3aXRjaCAoYS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSwgYVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0sIGFbMl0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdLCBhWzJdLCBhWzNdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcmcgbGlzdCB0b28gbG9uZy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gYXR0YWNoIG9yaWdpbmFsIGRlbGVnYXRlIHRvIHBhdGNoZWQgZnVuY3Rpb25cbiAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKF9nbG9iYWxbY2xhc3NOYW1lXSwgT3JpZ2luYWxDbGFzcyk7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBPcmlnaW5hbENsYXNzKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgIHZhciBwcm9wO1xuICAgICAgICBmb3IgKHByb3AgaW4gaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD00NDcyMVxuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gJ1hNTEh0dHBSZXF1ZXN0JyAmJiBwcm9wID09PSAncmVzcG9uc2VCbG9iJylcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2VbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgX2dsb2JhbFtjbGFzc05hbWVdLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdLmFwcGx5KHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3REZWZpbmVQcm9wZXJ0eShfZ2xvYmFsW2NsYXNzTmFtZV0ucHJvdG90eXBlLCBwcm9wLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXSA9IHdyYXBXaXRoQ3VycmVudFpvbmUoZm4sIGNsYXNzTmFtZSArICcuJyArIHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIGNhbGxiYWNrIGluIHdyYXBwZWQgZnVuY3Rpb24gc28gd2UgY2FuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZSBpdCBpbiBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgdG8gcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBuYXRpdmUgb25lLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQodGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXSwgZm4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXSA9IGZuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfShwcm9wKSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChwcm9wIGluIE9yaWdpbmFsQ2xhc3MpIHtcbiAgICAgICAgICAgIGlmIChwcm9wICE9PSAncHJvdG90eXBlJyAmJiBPcmlnaW5hbENsYXNzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgX2dsb2JhbFtjbGFzc05hbWVdW3Byb3BdID0gT3JpZ2luYWxDbGFzc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwYXRjaE1ldGhvZCh0YXJnZXQsIG5hbWUsIHBhdGNoRm4pIHtcbiAgICAgICAgdmFyIHByb3RvID0gdGFyZ2V0O1xuICAgICAgICB3aGlsZSAocHJvdG8gJiYgIXByb3RvLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICBwcm90byA9IE9iamVjdEdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXByb3RvICYmIHRhcmdldFtuYW1lXSkge1xuICAgICAgICAgICAgLy8gc29tZWhvdyB3ZSBkaWQgbm90IGZpbmQgaXQsIGJ1dCB3ZSBjYW4gc2VlIGl0LiBUaGlzIGhhcHBlbnMgb24gSUUgZm9yIFdpbmRvdyBwcm9wZXJ0aWVzLlxuICAgICAgICAgICAgcHJvdG8gPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbGVnYXRlTmFtZSA9IHpvbmVTeW1ib2wkMShuYW1lKTtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgaWYgKHByb3RvICYmICghKGRlbGVnYXRlID0gcHJvdG9bZGVsZWdhdGVOYW1lXSkgfHwgIXByb3RvLmhhc093blByb3BlcnR5KGRlbGVnYXRlTmFtZSkpKSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZSA9IHByb3RvW2RlbGVnYXRlTmFtZV0gPSBwcm90b1tuYW1lXTtcbiAgICAgICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgcHJvdG9bbmFtZV0gaXMgd3JpdGFibGVcbiAgICAgICAgICAgIC8vIHNvbWUgcHJvcGVydHkgaXMgcmVhZG9ubHkgaW4gc2FmYXJpLCBzdWNoIGFzIEh0bWxDYW52YXNFbGVtZW50LnByb3RvdHlwZS50b0Jsb2JcbiAgICAgICAgICAgIHZhciBkZXNjID0gcHJvdG8gJiYgT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBuYW1lKTtcbiAgICAgICAgICAgIGlmIChpc1Byb3BlcnR5V3JpdGFibGUoZGVzYykpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGF0Y2hEZWxlZ2F0ZV8xID0gcGF0Y2hGbihkZWxlZ2F0ZSwgZGVsZWdhdGVOYW1lLCBuYW1lKTtcbiAgICAgICAgICAgICAgICBwcm90b1tuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdGNoRGVsZWdhdGVfMSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW25hbWVdLCBkZWxlZ2F0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlbGVnYXRlO1xuICAgIH1cbiAgICAvLyBUT0RPOiBASmlhTGlQYXNzaW9uLCBzdXBwb3J0IGNhbmNlbCB0YXNrIGxhdGVyIGlmIG5lY2Vzc2FyeVxuICAgIGZ1bmN0aW9uIHBhdGNoTWFjcm9UYXNrKG9iaiwgZnVuY05hbWUsIG1ldGFDcmVhdG9yKSB7XG4gICAgICAgIHZhciBzZXROYXRpdmUgPSBudWxsO1xuICAgICAgICBmdW5jdGlvbiBzY2hlZHVsZVRhc2sodGFzaykge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgICAgICBkYXRhLmFyZ3NbZGF0YS5jYklkeF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGFzay5pbnZva2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZXROYXRpdmUuYXBwbHkoZGF0YS50YXJnZXQsIGRhdGEuYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfVxuICAgICAgICBzZXROYXRpdmUgPSBwYXRjaE1ldGhvZChvYmosIGZ1bmNOYW1lLCBmdW5jdGlvbiAoZGVsZWdhdGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgbWV0YSA9IG1ldGFDcmVhdG9yKHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgaWYgKG1ldGEuY2JJZHggPj0gMCAmJiB0eXBlb2YgYXJnc1ttZXRhLmNiSWR4XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZU1hY3JvVGFza1dpdGhDdXJyZW50Wm9uZShtZXRhLm5hbWUsIGFyZ3NbbWV0YS5jYklkeF0sIG1ldGEsIHNjaGVkdWxlVGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjYXVzZSBhbiBlcnJvciBieSBjYWxsaW5nIGl0IGRpcmVjdGx5LlxuICAgICAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwYXRjaGVkLCBvcmlnaW5hbCkge1xuICAgICAgICBwYXRjaGVkW3pvbmVTeW1ib2wkMSgnT3JpZ2luYWxEZWxlZ2F0ZScpXSA9IG9yaWdpbmFsO1xuICAgIH1cbiAgICB2YXIgaXNEZXRlY3RlZElFT3JFZGdlID0gZmFsc2U7XG4gICAgdmFyIGllT3JFZGdlID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gaXNJRSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB1YSA9IGludGVybmFsV2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgICAgICAgICBpZiAodWEuaW5kZXhPZignTVNJRSAnKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignVHJpZGVudC8nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzSUVPckVkZ2UoKSB7XG4gICAgICAgIGlmIChpc0RldGVjdGVkSUVPckVkZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBpZU9yRWRnZTtcbiAgICAgICAgfVxuICAgICAgICBpc0RldGVjdGVkSUVPckVkZ2UgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHVhID0gaW50ZXJuYWxXaW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgICAgIGlmICh1YS5pbmRleE9mKCdNU0lFICcpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdUcmlkZW50LycpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdFZGdlLycpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGllT3JFZGdlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWVPckVkZ2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCdab25lQXdhcmVQcm9taXNlJywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgICAgIHZhciBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAgICAgICB2YXIgT2JqZWN0RGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gICAgICAgIGZ1bmN0aW9uIHJlYWRhYmxlT2JqZWN0VG9TdHJpbmcob2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqICYmIG9iai50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykge1xuICAgICAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJykgKyAnOiAnICsgSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmogPyBvYmoudG9TdHJpbmcoKSA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfX3N5bWJvbF9fID0gYXBpLnN5bWJvbDtcbiAgICAgICAgdmFyIF91bmNhdWdodFByb21pc2VFcnJvcnMgPSBbXTtcbiAgICAgICAgdmFyIGlzRGlzYWJsZVdyYXBwaW5nVW5jYXVnaHRQcm9taXNlUmVqZWN0aW9uID0gZ2xvYmFsW19fc3ltYm9sX18oJ0RJU0FCTEVfV1JBUFBJTkdfVU5DQVVHSFRfUFJPTUlTRV9SRUpFQ1RJT04nKV0gPT09IHRydWU7XG4gICAgICAgIHZhciBzeW1ib2xQcm9taXNlID0gX19zeW1ib2xfXygnUHJvbWlzZScpO1xuICAgICAgICB2YXIgc3ltYm9sVGhlbiA9IF9fc3ltYm9sX18oJ3RoZW4nKTtcbiAgICAgICAgdmFyIGNyZWF0aW9uVHJhY2UgPSAnX19jcmVhdGlvblRyYWNlX18nO1xuICAgICAgICBhcGkub25VbmhhbmRsZWRFcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoYXBpLnNob3dVbmNhdWdodEVycm9yKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVqZWN0aW9uID0gZSAmJiBlLnJlamVjdGlvbjtcbiAgICAgICAgICAgICAgICBpZiAocmVqZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBQcm9taXNlIHJlamVjdGlvbjonLCByZWplY3Rpb24gaW5zdGFuY2VvZiBFcnJvciA/IHJlamVjdGlvbi5tZXNzYWdlIDogcmVqZWN0aW9uLCAnOyBab25lOicsIGUuem9uZS5uYW1lLCAnOyBUYXNrOicsIGUudGFzayAmJiBlLnRhc2suc291cmNlLCAnOyBWYWx1ZTonLCByZWplY3Rpb24sIHJlamVjdGlvbiBpbnN0YW5jZW9mIEVycm9yID8gcmVqZWN0aW9uLnN0YWNrIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBhcGkubWljcm90YXNrRHJhaW5Eb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9sb29wXzIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVuY2F1Z2h0UHJvbWlzZUVycm9yID0gX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnpvbmUucnVuR3VhcmRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5jYXVnaHRQcm9taXNlRXJyb3IudGhyb3dPcmlnaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHVuY2F1Z2h0UHJvbWlzZUVycm9yLnJlamVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHVuY2F1Z2h0UHJvbWlzZUVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVVuaGFuZGxlZFJlamVjdGlvbihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHdoaWxlIChfdW5jYXVnaHRQcm9taXNlRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIF9sb29wXzIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIFVOSEFORExFRF9QUk9NSVNFX1JFSkVDVElPTl9IQU5ETEVSX1NZTUJPTCA9IF9fc3ltYm9sX18oJ3VuaGFuZGxlZFByb21pc2VSZWplY3Rpb25IYW5kbGVyJyk7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVVuaGFuZGxlZFJlamVjdGlvbihlKSB7XG4gICAgICAgICAgICBhcGkub25VbmhhbmRsZWRFcnJvcihlKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBab25lW1VOSEFORExFRF9QUk9NSVNFX1JFSkVDVElPTl9IQU5ETEVSX1NZTUJPTF07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNUaGVuYWJsZSh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLnRoZW47XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZm9yd2FyZFJlc29sdXRpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBmb3J3YXJkUmVqZWN0aW9uKHJlamVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2UucmVqZWN0KHJlamVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN5bWJvbFN0YXRlID0gX19zeW1ib2xfXygnc3RhdGUnKTtcbiAgICAgICAgdmFyIHN5bWJvbFZhbHVlID0gX19zeW1ib2xfXygndmFsdWUnKTtcbiAgICAgICAgdmFyIHN5bWJvbEZpbmFsbHkgPSBfX3N5bWJvbF9fKCdmaW5hbGx5Jyk7XG4gICAgICAgIHZhciBzeW1ib2xQYXJlbnRQcm9taXNlVmFsdWUgPSBfX3N5bWJvbF9fKCdwYXJlbnRQcm9taXNlVmFsdWUnKTtcbiAgICAgICAgdmFyIHN5bWJvbFBhcmVudFByb21pc2VTdGF0ZSA9IF9fc3ltYm9sX18oJ3BhcmVudFByb21pc2VTdGF0ZScpO1xuICAgICAgICB2YXIgc291cmNlID0gJ1Byb21pc2UudGhlbic7XG4gICAgICAgIHZhciBVTlJFU09MVkVEID0gbnVsbDtcbiAgICAgICAgdmFyIFJFU09MVkVEID0gdHJ1ZTtcbiAgICAgICAgdmFyIFJFSkVDVEVEID0gZmFsc2U7XG4gICAgICAgIHZhciBSRUpFQ1RFRF9OT19DQVRDSCA9IDA7XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VSZXNvbHZlcihwcm9taXNlLCBzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgc3RhdGUsIHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIGZhbHNlLCBlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgcmV0dXJuIHZhbHVlIG9yIHlvdSB3aWxsIGJyZWFrIHRoZSBQcm9taXNlIHNwZWMuXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBvbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdhc0NhbGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBwZXIod3JhcHBlZEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdhc0NhbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdhc0NhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZWRGdW5jdGlvbi5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgVFlQRV9FUlJPUiA9ICdQcm9taXNlIHJlc29sdmVkIHdpdGggaXRzZWxmJztcbiAgICAgICAgdmFyIENVUlJFTlRfVEFTS19UUkFDRV9TWU1CT0wgPSBfX3N5bWJvbF9fKCdjdXJyZW50VGFza1RyYWNlJyk7XG4gICAgICAgIC8vIFByb21pc2UgUmVzb2x1dGlvblxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBzdGF0ZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBvbmNlV3JhcHBlciA9IG9uY2UoKTtcbiAgICAgICAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoVFlQRV9FUlJPUik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvbWlzZVtzeW1ib2xTdGF0ZV0gPT09IFVOUkVTT0xWRUQpIHtcbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgb25seSBnZXQgdmFsdWUudGhlbiBvbmNlIGJhc2VkIG9uIHByb21pc2Ugc3BlYy5cbiAgICAgICAgICAgICAgICB2YXIgdGhlbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVuID0gdmFsdWUgJiYgdmFsdWUudGhlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uY2VXcmFwcGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIGZhbHNlLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgKHZhbHVlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSAhPT0gUkVKRUNURUQgJiYgdmFsdWUgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlICYmXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmhhc093blByb3BlcnR5KHN5bWJvbFN0YXRlKSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShzeW1ib2xWYWx1ZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbc3ltYm9sU3RhdGVdICE9PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyUmVqZWN0ZWROb0NhdGNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgdmFsdWVbc3ltYm9sU3RhdGVdLCB2YWx1ZVtzeW1ib2xWYWx1ZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdGF0ZSAhPT0gUkVKRUNURUQgJiYgdHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgb25jZVdyYXBwZXIobWFrZVJlc29sdmVyKHByb21pc2UsIHN0YXRlKSksIG9uY2VXcmFwcGVyKG1ha2VSZXNvbHZlcihwcm9taXNlLCBmYWxzZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbmNlV3JhcHBlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgZmFsc2UsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcXVldWUgPSBwcm9taXNlW3N5bWJvbFZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xWYWx1ZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb21pc2Vbc3ltYm9sRmluYWxseV0gPT09IHN5bWJvbEZpbmFsbHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBwcm9taXNlIGlzIGdlbmVyYXRlZCBieSBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IFJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHN0YXRlIGlzIHJlc29sdmVkLCBzaG91bGQgaWdub3JlIHRoZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCB1c2UgcGFyZW50IHByb21pc2UgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IHByb21pc2Vbc3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFZhbHVlXSA9IHByb21pc2Vbc3ltYm9sUGFyZW50UHJvbWlzZVZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyByZWNvcmQgdGFzayBpbmZvcm1hdGlvbiBpbiB2YWx1ZSB3aGVuIGVycm9yIG9jY3Vycywgc28gd2UgY2FuXG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIHNvbWUgYWRkaXRpb25hbCB3b3JrIHN1Y2ggYXMgcmVuZGVyIGxvbmdTdGFja1RyYWNlXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gUkVKRUNURUQgJiYgdmFsdWUgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgbG9uZ1N0YWNrVHJhY2Vab25lIGlzIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFjZSA9IFpvbmUuY3VycmVudFRhc2sgJiYgWm9uZS5jdXJyZW50VGFzay5kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWm9uZS5jdXJyZW50VGFzay5kYXRhW2NyZWF0aW9uVHJhY2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25seSBrZWVwIHRoZSBsb25nIHN0YWNrIHRyYWNlIGludG8gZXJyb3Igd2hlbiBpbiBsb25nU3RhY2tUcmFjZVpvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3REZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgQ1VSUkVOVF9UQVNLX1RSQUNFX1NZTUJPTCwgeyBjb25maWd1cmFibGU6IHRydWUsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHRyYWNlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QocHJvbWlzZSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA9PSAwICYmIHN0YXRlID09IFJFSkVDVEVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IFJFSkVDVEVEX05PX0NBVENIO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVuY2F1Z2h0UHJvbWlzZUVycm9yID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhlcmUgd2UgdGhyb3dzIGEgbmV3IEVycm9yIHRvIHByaW50IG1vcmUgcmVhZGFibGUgZXJyb3IgbG9nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGlmIHRoZSB2YWx1ZSBpcyBub3QgYW4gZXJyb3IsIHpvbmUuanMgYnVpbGRzIGFuIGBFcnJvcmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPYmplY3QgaGVyZSB0byBhdHRhY2ggdGhlIHN0YWNrIGluZm9ybWF0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jYXVnaHQgKGluIHByb21pc2UpOiAnICsgcmVhZGFibGVPYmplY3RUb1N0cmluZyh2YWx1ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUgJiYgdmFsdWUuc3RhY2sgPyAnXFxuJyArIHZhbHVlLnN0YWNrIDogJycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0Rpc2FibGVXcmFwcGluZ1VuY2F1Z2h0UHJvbWlzZVJlamVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGRpc2FibGUgd3JhcHBpbmcgdW5jYXVnaHQgcHJvbWlzZSByZWplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIHZhbHVlIGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3IudGhyb3dPcmlnaW5hbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci5yZWplY3Rpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnByb21pc2UgPSBwcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3Iuem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnRhc2sgPSBab25lLmN1cnJlbnRUYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5wdXNoKHVuY2F1Z2h0UHJvbWlzZUVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5zY2hlZHVsZU1pY3JvVGFzaygpOyAvLyB0byBtYWtlIHN1cmUgdGhhdCBpdCBpcyBydW5uaW5nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXNvbHZpbmcgYW4gYWxyZWFkeSByZXNvbHZlZCBwcm9taXNlIGlzIGEgbm9vcC5cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBSRUpFQ1RJT05fSEFORExFRF9IQU5ETEVSID0gX19zeW1ib2xfXygncmVqZWN0aW9uSGFuZGxlZEhhbmRsZXInKTtcbiAgICAgICAgZnVuY3Rpb24gY2xlYXJSZWplY3RlZE5vQ2F0Y2gocHJvbWlzZSkge1xuICAgICAgICAgICAgaWYgKHByb21pc2Vbc3ltYm9sU3RhdGVdID09PSBSRUpFQ1RFRF9OT19DQVRDSCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIG5vIGNhdGNoIHN0YXR1c1xuICAgICAgICAgICAgICAgIC8vIGFuZCBxdWV1ZS5sZW5ndGggPiAwLCBtZWFucyB0aGVyZSBpcyBhIGVycm9yIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAvLyBoZXJlIHRvIGhhbmRsZSB0aGUgcmVqZWN0ZWQgcHJvbWlzZSwgd2Ugc2hvdWxkIHRyaWdnZXJcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3dzLnJlamVjdGlvbmhhbmRsZWQgZXZlbnRIYW5kbGVyIG9yIG5vZGVqcyByZWplY3Rpb25IYW5kbGVkXG4gICAgICAgICAgICAgICAgLy8gZXZlbnRIYW5kbGVyXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBab25lW1JFSkVDVElPTl9IQU5ETEVEX0hBTkRMRVJdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlciAmJiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIHsgcmVqZWN0aW9uOiBwcm9taXNlW3N5bWJvbFZhbHVlXSwgcHJvbWlzZTogcHJvbWlzZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gUkVKRUNURUQ7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9taXNlID09PSBfdW5jYXVnaHRQcm9taXNlRXJyb3JzW2ldLnByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF91bmNhdWdodFByb21pc2VFcnJvcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHByb21pc2UsIHpvbmUsIGNoYWluUHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgIGNsZWFyUmVqZWN0ZWROb0NhdGNoKHByb21pc2UpO1xuICAgICAgICAgICAgdmFyIHByb21pc2VTdGF0ZSA9IHByb21pc2Vbc3ltYm9sU3RhdGVdO1xuICAgICAgICAgICAgdmFyIGRlbGVnYXRlID0gcHJvbWlzZVN0YXRlID9cbiAgICAgICAgICAgICAgICAodHlwZW9mIG9uRnVsZmlsbGVkID09PSAnZnVuY3Rpb24nKSA/IG9uRnVsZmlsbGVkIDogZm9yd2FyZFJlc29sdXRpb24gOlxuICAgICAgICAgICAgICAgICh0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJykgPyBvblJlamVjdGVkIDpcbiAgICAgICAgICAgICAgICAgICAgZm9yd2FyZFJlamVjdGlvbjtcbiAgICAgICAgICAgIHpvbmUuc2NoZWR1bGVNaWNyb1Rhc2soc291cmNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudFByb21pc2VWYWx1ZSA9IHByb21pc2Vbc3ltYm9sVmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNGaW5hbGx5UHJvbWlzZSA9ICEhY2hhaW5Qcm9taXNlICYmIHN5bWJvbEZpbmFsbHkgPT09IGNoYWluUHJvbWlzZVtzeW1ib2xGaW5hbGx5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRmluYWxseVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcm9taXNlIGlzIGdlbmVyYXRlZCBmcm9tIGZpbmFsbHkgY2FsbCwga2VlcCBwYXJlbnQgcHJvbWlzZSdzIHN0YXRlIGFuZCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5Qcm9taXNlW3N5bWJvbFBhcmVudFByb21pc2VWYWx1ZV0gPSBwYXJlbnRQcm9taXNlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFpblByb21pc2Vbc3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlXSA9IHByb21pc2VTdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQgbm90IHBhc3MgdmFsdWUgdG8gZmluYWxseSBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB6b25lLnJ1bihkZWxlZ2F0ZSwgdW5kZWZpbmVkLCBpc0ZpbmFsbHlQcm9taXNlICYmIGRlbGVnYXRlICE9PSBmb3J3YXJkUmVqZWN0aW9uICYmIGRlbGVnYXRlICE9PSBmb3J3YXJkUmVzb2x1dGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICBbXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50UHJvbWlzZVZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKGNoYWluUHJvbWlzZSwgdHJ1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgZXJyb3Igb2NjdXJzLCBzaG91bGQgYWx3YXlzIHJldHVybiB0aGlzIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKGNoYWluUHJvbWlzZSwgZmFsc2UsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBjaGFpblByb21pc2UpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBaT05FX0FXQVJFX1BST01JU0VfVE9fU1RSSU5HID0gJ2Z1bmN0aW9uIFpvbmVBd2FyZVByb21pc2UoKSB7IFtuYXRpdmUgY29kZV0gfSc7XG4gICAgICAgIHZhciBub29wID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB2YXIgQWdncmVnYXRlRXJyb3IgPSBnbG9iYWwuQWdncmVnYXRlRXJyb3I7XG4gICAgICAgIHZhciBab25lQXdhcmVQcm9taXNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gWm9uZUF3YXJlUHJvbWlzZShleGVjdXRvcikge1xuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAoIShwcm9taXNlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGJlIGFuIGluc3RhbmNlb2YgUHJvbWlzZS4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBVTlJFU09MVkVEO1xuICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sVmFsdWVdID0gW107IC8vIHF1ZXVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvbmNlV3JhcHBlciA9IG9uY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgZXhlY3V0b3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWN1dG9yKG9uY2VXcmFwcGVyKG1ha2VSZXNvbHZlcihwcm9taXNlLCBSRVNPTFZFRCkpLCBvbmNlV3JhcHBlcihtYWtlUmVzb2x2ZXIocHJvbWlzZSwgUkVKRUNURUQpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFpvbmVBd2FyZVByb21pc2UudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpPTkVfQVdBUkVfUFJPTUlTRV9UT19TVFJJTkc7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRVNPTFZFRCwgdmFsdWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmVBd2FyZVByb21pc2UucmVqZWN0ID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRUpFQ1RFRCwgZXJyb3IpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmVBd2FyZVByb21pc2UuYW55ID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWVzIHx8IHR5cGVvZiB2YWx1ZXNbU3ltYm9sLml0ZXJhdG9yXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEFnZ3JlZ2F0ZUVycm9yKFtdLCAnQWxsIHByb21pc2VzIHdlcmUgcmVqZWN0ZWQnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB2YWx1ZXNfMSA9IHZhbHVlczsgX2kgPCB2YWx1ZXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ID0gdmFsdWVzXzFbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goWm9uZUF3YXJlUHJvbWlzZS5yZXNvbHZlKHYpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQWdncmVnYXRlRXJyb3IoW10sICdBbGwgcHJvbWlzZXMgd2VyZSByZWplY3RlZCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQWdncmVnYXRlRXJyb3IoW10sICdBbGwgcHJvbWlzZXMgd2VyZSByZWplY3RlZCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIGVycm9ycyA9IFtdO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWm9uZUF3YXJlUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvbWlzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzW2ldLnRoZW4oZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBBZ2dyZWdhdGVFcnJvcihlcnJvcnMsICdBbGwgcHJvbWlzZXMgd2VyZSByZWplY3RlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIFpvbmVBd2FyZVByb21pc2UucmFjZSA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICB2YXIgcmVqZWN0O1xuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IHRoaXMoZnVuY3Rpb24gKHJlcywgcmVqKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUgPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCA9IHJlajtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBvblJlc29sdmUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9uUmVqZWN0KGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgdmFsdWVzXzIgPSB2YWx1ZXM7IF9pIDwgdmFsdWVzXzIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc18yW19pXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnRoZW4ob25SZXNvbHZlLCBvblJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmVBd2FyZVByb21pc2UuYWxsID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBab25lQXdhcmVQcm9taXNlLmFsbFdpdGhDYWxsYmFjayh2YWx1ZXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmVBd2FyZVByb21pc2UuYWxsU2V0dGxlZCA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgUCA9IHRoaXMgJiYgdGhpcy5wcm90b3R5cGUgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlID8gdGhpcyA6IFpvbmVBd2FyZVByb21pc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFAuYWxsV2l0aENhbGxiYWNrKHZhbHVlcywge1xuICAgICAgICAgICAgICAgICAgICB0aGVuQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gKHsgc3RhdHVzOiAnZnVsZmlsbGVkJywgdmFsdWU6IHZhbHVlIH0pOyB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrOiBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiAoeyBzdGF0dXM6ICdyZWplY3RlZCcsIHJlYXNvbjogZXJyIH0pOyB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5hbGxXaXRoQ2FsbGJhY2sgPSBmdW5jdGlvbiAodmFsdWVzLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHZhciByZXNvbHZlO1xuICAgICAgICAgICAgICAgIHZhciByZWplY3Q7XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgdGhpcyhmdW5jdGlvbiAocmVzLCByZWopIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0ID0gcmVqO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IGF0IDIgdG8gcHJldmVudCBwcmVtYXR1cmVseSByZXNvbHZpbmcgaWYgLnRoZW4gaXMgY2FsbGVkIGltbWVkaWF0ZWx5LlxuICAgICAgICAgICAgICAgIHZhciB1bnJlc29sdmVkQ291bnQgPSAyO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB2YXIgcmVzb2x2ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgX2xvb3BfMyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXNfMS5yZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyVmFsdWVJbmRleCA9IHZhbHVlSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVkVmFsdWVzW2N1clZhbHVlSW5kZXhdID0gY2FsbGJhY2sgPyBjYWxsYmFjay50aGVuQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5yZXNvbHZlZENvdW50LS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVucmVzb2x2ZWRDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkVmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVkVmFsdWVzW2N1clZhbHVlSW5kZXhdID0gY2FsbGJhY2suZXJyb3JDYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnJlc29sdmVkQ291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVucmVzb2x2ZWRDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvbHZlZFZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAodGhlbkVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoZW5FcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHVucmVzb2x2ZWRDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZUluZGV4Kys7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc18xID0gdGhpcztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHZhbHVlc18zID0gdmFsdWVzOyBfaSA8IHZhbHVlc18zLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNfM1tfaV07XG4gICAgICAgICAgICAgICAgICAgIF9sb29wXzModmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBNYWtlIHRoZSB1bnJlc29sdmVkQ291bnQgemVyby1iYXNlZCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICB1bnJlc29sdmVkQ291bnQgLT0gMjtcbiAgICAgICAgICAgICAgICBpZiAodW5yZXNvbHZlZENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzb2x2ZWRWYWx1ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZUF3YXJlUHJvbWlzZS5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1Byb21pc2UnO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lQXdhcmVQcm9taXNlLnByb3RvdHlwZSwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2U7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAvLyBXZSBtdXN0IHJlYWQgYFN5bWJvbC5zcGVjaWVzYCBzYWZlbHkgYmVjYXVzZSBgdGhpc2AgbWF5IGJlIGFueXRoaW5nLiBGb3IgaW5zdGFuY2UsIGB0aGlzYFxuICAgICAgICAgICAgICAgIC8vIG1heSBiZSBhbiBvYmplY3Qgd2l0aG91dCBhIHByb3RvdHlwZSAoY3JlYXRlZCB0aHJvdWdoIGBPYmplY3QuY3JlYXRlKG51bGwpYCk7IHRodXNcbiAgICAgICAgICAgICAgICAvLyBgdGhpcy5jb25zdHJ1Y3RvcmAgd2lsbCBiZSB1bmRlZmluZWQuIE9uZSBvZiB0aGUgdXNlIGNhc2VzIGlzIFN5c3RlbUpTIGNyZWF0aW5nXG4gICAgICAgICAgICAgICAgLy8gcHJvdG90eXBlLWxlc3Mgb2JqZWN0cyAobW9kdWxlcykgdmlhIGBPYmplY3QuY3JlYXRlKG51bGwpYC4gVGhlIFN5c3RlbUpTIGNyZWF0ZXMgYW4gZW1wdHlcbiAgICAgICAgICAgICAgICAvLyBvYmplY3QgYW5kIGNvcGllcyBwcm9taXNlIHByb3BlcnRpZXMgaW50byB0aGF0IG9iamVjdCAod2l0aGluIHRoZSBgZ2V0T3JDcmVhdGVMb2FkYFxuICAgICAgICAgICAgICAgIC8vIGZ1bmN0aW9uKS4gVGhlIHpvbmUuanMgdGhlbiBjaGVja3MgaWYgdGhlIHJlc29sdmVkIHZhbHVlIGhhcyB0aGUgYHRoZW5gIG1ldGhvZCBhbmQgaW52b2tlc1xuICAgICAgICAgICAgICAgIC8vIGl0IHdpdGggdGhlIGB2YWx1ZWAgY29udGV4dC4gT3RoZXJ3aXNlLCB0aGlzIHdpbGwgdGhyb3cgYW4gZXJyb3I6IGBUeXBlRXJyb3I6IENhbm5vdCByZWFkXG4gICAgICAgICAgICAgICAgLy8gcHJvcGVydGllcyBvZiB1bmRlZmluZWQgKHJlYWRpbmcgJ1N5bWJvbChTeW1ib2wuc3BlY2llcyknKWAuXG4gICAgICAgICAgICAgICAgdmFyIEMgPSAoX2EgPSB0aGlzLmNvbnN0cnVjdG9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbU3ltYm9sLnNwZWNpZXNdO1xuICAgICAgICAgICAgICAgIGlmICghQyB8fCB0eXBlb2YgQyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBDID0gdGhpcy5jb25zdHJ1Y3RvciB8fCBab25lQXdhcmVQcm9taXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY2hhaW5Qcm9taXNlID0gbmV3IEMobm9vcCk7XG4gICAgICAgICAgICAgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbc3ltYm9sU3RhdGVdID09IFVOUkVTT0xWRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tzeW1ib2xWYWx1ZV0ucHVzaCh6b25lLCBjaGFpblByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHRoaXMsIHpvbmUsIGNoYWluUHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY2hhaW5Qcm9taXNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmVBd2FyZVByb21pc2UucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmVBd2FyZVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIC8vIFNlZSBjb21tZW50IG9uIHRoZSBjYWxsIHRvIGB0aGVuYCBhYm91dCB3aHkgdGhlZSBgU3ltYm9sLnNwZWNpZXNgIGlzIHNhZmVseSBhY2Nlc3NlZC5cbiAgICAgICAgICAgICAgICB2YXIgQyA9IChfYSA9IHRoaXMuY29uc3RydWN0b3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtTeW1ib2wuc3BlY2llc107XG4gICAgICAgICAgICAgICAgaWYgKCFDIHx8IHR5cGVvZiBDICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIEMgPSBab25lQXdhcmVQcm9taXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY2hhaW5Qcm9taXNlID0gbmV3IEMobm9vcCk7XG4gICAgICAgICAgICAgICAgY2hhaW5Qcm9taXNlW3N5bWJvbEZpbmFsbHldID0gc3ltYm9sRmluYWxseTtcbiAgICAgICAgICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1tzeW1ib2xTdGF0ZV0gPT0gVU5SRVNPTFZFRCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3N5bWJvbFZhbHVlXS5wdXNoKHpvbmUsIGNoYWluUHJvbWlzZSwgb25GaW5hbGx5LCBvbkZpbmFsbHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QodGhpcywgem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZpbmFsbHksIG9uRmluYWxseSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjaGFpblByb21pc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2U7XG4gICAgICAgIH0oKSk7XG4gICAgICAgIC8vIFByb3RlY3QgYWdhaW5zdCBhZ2dyZXNzaXZlIG9wdGltaXplcnMgZHJvcHBpbmcgc2VlbWluZ2x5IHVudXNlZCBwcm9wZXJ0aWVzLlxuICAgICAgICAvLyBFLmcuIENsb3N1cmUgQ29tcGlsZXIgaW4gYWR2YW5jZWQgbW9kZS5cbiAgICAgICAgWm9uZUF3YXJlUHJvbWlzZVsncmVzb2x2ZSddID0gWm9uZUF3YXJlUHJvbWlzZS5yZXNvbHZlO1xuICAgICAgICBab25lQXdhcmVQcm9taXNlWydyZWplY3QnXSA9IFpvbmVBd2FyZVByb21pc2UucmVqZWN0O1xuICAgICAgICBab25lQXdhcmVQcm9taXNlWydyYWNlJ10gPSBab25lQXdhcmVQcm9taXNlLnJhY2U7XG4gICAgICAgIFpvbmVBd2FyZVByb21pc2VbJ2FsbCddID0gWm9uZUF3YXJlUHJvbWlzZS5hbGw7XG4gICAgICAgIHZhciBOYXRpdmVQcm9taXNlID0gZ2xvYmFsW3N5bWJvbFByb21pc2VdID0gZ2xvYmFsWydQcm9taXNlJ107XG4gICAgICAgIGdsb2JhbFsnUHJvbWlzZSddID0gWm9uZUF3YXJlUHJvbWlzZTtcbiAgICAgICAgdmFyIHN5bWJvbFRoZW5QYXRjaGVkID0gX19zeW1ib2xfXygndGhlblBhdGNoZWQnKTtcbiAgICAgICAgZnVuY3Rpb24gcGF0Y2hUaGVuKEN0b3IpIHtcbiAgICAgICAgICAgIHZhciBwcm90byA9IEN0b3IucHJvdG90eXBlO1xuICAgICAgICAgICAgdmFyIHByb3AgPSBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sICd0aGVuJyk7XG4gICAgICAgICAgICBpZiAocHJvcCAmJiAocHJvcC53cml0YWJsZSA9PT0gZmFsc2UgfHwgIXByb3AuY29uZmlndXJhYmxlKSkge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIEN0b3IucHJvdG90eXBlLnRoZW4gcHJvcGVydHlEZXNjcmlwdG9yIGlzIHdyaXRhYmxlIG9yIG5vdFxuICAgICAgICAgICAgICAgIC8vIGluIG1ldGVvciBlbnYsIHdyaXRhYmxlIGlzIGZhbHNlLCB3ZSBzaG91bGQgaWdub3JlIHN1Y2ggY2FzZVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvcmlnaW5hbFRoZW4gPSBwcm90by50aGVuO1xuICAgICAgICAgICAgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICAgICAgcHJvdG9bc3ltYm9sVGhlbl0gPSBvcmlnaW5hbFRoZW47XG4gICAgICAgICAgICBDdG9yLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uUmVzb2x2ZSwgb25SZWplY3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVkID0gbmV3IFpvbmVBd2FyZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFRoZW4uY2FsbChfdGhpcywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlZC50aGVuKG9uUmVzb2x2ZSwgb25SZWplY3QpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEN0b3Jbc3ltYm9sVGhlblBhdGNoZWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBhcGkucGF0Y2hUaGVuID0gcGF0Y2hUaGVuO1xuICAgICAgICBmdW5jdGlvbiB6b25laWZ5KGZuKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0UHJvbWlzZSA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRQcm9taXNlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGN0b3IgPSByZXN1bHRQcm9taXNlLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgIGlmICghY3RvcltzeW1ib2xUaGVuUGF0Y2hlZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hUaGVuKGN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE5hdGl2ZVByb21pc2UpIHtcbiAgICAgICAgICAgIHBhdGNoVGhlbihOYXRpdmVQcm9taXNlKTtcbiAgICAgICAgICAgIHBhdGNoTWV0aG9kKGdsb2JhbCwgJ2ZldGNoJywgZnVuY3Rpb24gKGRlbGVnYXRlKSB7IHJldHVybiB6b25laWZ5KGRlbGVnYXRlKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhpcyBpcyBub3QgcGFydCBvZiBwdWJsaWMgQVBJLCBidXQgaXQgaXMgdXNlZnVsIGZvciB0ZXN0cywgc28gd2UgZXhwb3NlIGl0LlxuICAgICAgICBQcm9taXNlW1pvbmUuX19zeW1ib2xfXygndW5jYXVnaHRQcm9taXNlRXJyb3JzJyldID0gX3VuY2F1Z2h0UHJvbWlzZUVycm9ycztcbiAgICAgICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2U7XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgLy8gb3ZlcnJpZGUgRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nIHRvIG1ha2Ugem9uZS5qcyBwYXRjaGVkIGZ1bmN0aW9uXG4gICAgLy8gbG9vayBsaWtlIG5hdGl2ZSBmdW5jdGlvblxuICAgIFpvbmUuX19sb2FkX3BhdGNoKCd0b1N0cmluZycsIGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAgICAgLy8gcGF0Y2ggRnVuYy5wcm90b3R5cGUudG9TdHJpbmcgdG8gbGV0IHRoZW0gbG9vayBsaWtlIG5hdGl2ZVxuICAgICAgICB2YXIgb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuICAgICAgICB2YXIgT1JJR0lOQUxfREVMRUdBVEVfU1lNQk9MID0gem9uZVN5bWJvbCQxKCdPcmlnaW5hbERlbGVnYXRlJyk7XG4gICAgICAgIHZhciBQUk9NSVNFX1NZTUJPTCA9IHpvbmVTeW1ib2wkMSgnUHJvbWlzZScpO1xuICAgICAgICB2YXIgRVJST1JfU1lNQk9MID0gem9uZVN5bWJvbCQxKCdFcnJvcicpO1xuICAgICAgICB2YXIgbmV3RnVuY3Rpb25Ub1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsRGVsZWdhdGUgPSB0aGlzW09SSUdJTkFMX0RFTEVHQVRFX1NZTUJPTF07XG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsRGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbERlbGVnYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nLmNhbGwob3JpZ2luYWxEZWxlZ2F0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9yaWdpbmFsRGVsZWdhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzID09PSBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYXRpdmVQcm9taXNlID0gZ2xvYmFsW1BST01JU0VfU1lNQk9MXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hdGl2ZVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcuY2FsbChuYXRpdmVQcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcyA9PT0gRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hdGl2ZUVycm9yID0gZ2xvYmFsW0VSUk9SX1NZTUJPTF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYXRpdmVFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZy5jYWxsKG5hdGl2ZUVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgbmV3RnVuY3Rpb25Ub1N0cmluZ1tPUklHSU5BTF9ERUxFR0FURV9TWU1CT0xdID0gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nO1xuICAgICAgICBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBuZXdGdW5jdGlvblRvU3RyaW5nO1xuICAgICAgICAvLyBwYXRjaCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nIHRvIGxldCB0aGVtIGxvb2sgbGlrZSBuYXRpdmVcbiAgICAgICAgdmFyIG9yaWdpbmFsT2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICAgICAgICB2YXIgUFJPTUlTRV9PQkpFQ1RfVE9fU1RSSU5HID0gJ1tvYmplY3QgUHJvbWlzZV0nO1xuICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlID09PSAnZnVuY3Rpb24nICYmIHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBST01JU0VfT0JKRUNUX1RPX1NUUklORztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbE9iamVjdFRvU3RyaW5nLmNhbGwodGhpcyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBOb3RlOiBXZSBwYXNzIHRoZSBgb3B0aW9uc2Agb2JqZWN0IGFzIHRoZSBldmVudCBoYW5kbGVyIHRvby4gVGhpcyBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoZVxuICAgICAgICAgICAgLy8gc2lnbmF0dXJlIG9mIGBhZGRFdmVudExpc3RlbmVyYCBvciBgcmVtb3ZlRXZlbnRMaXN0ZW5lcmAgYnV0IGVuYWJsZXMgdXMgdG8gcmVtb3ZlIHRoZSBoYW5kbGVyXG4gICAgICAgICAgICAvLyB3aXRob3V0IGFuIGFjdHVhbCBoYW5kbGVyLlxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGFuIGlkZW50aWZpZXIgdG8gdGVsbCBab25lVGFzayBkbyBub3QgY3JlYXRlIGEgbmV3IGludm9rZSBjbG9zdXJlXG4gICAgdmFyIE9QVElNSVpFRF9aT05FX0VWRU5UX1RBU0tfREFUQSA9IHtcbiAgICAgICAgdXNlRzogdHJ1ZVxuICAgIH07XG4gICAgdmFyIHpvbmVTeW1ib2xFdmVudE5hbWVzID0ge307XG4gICAgdmFyIGdsb2JhbFNvdXJjZXMgPSB7fTtcbiAgICB2YXIgRVZFTlRfTkFNRV9TWU1CT0xfUkVHWCA9IG5ldyBSZWdFeHAoJ14nICsgWk9ORV9TWU1CT0xfUFJFRklYICsgJyhcXFxcdyspKHRydWV8ZmFsc2UpJCcpO1xuICAgIHZhciBJTU1FRElBVEVfUFJPUEFHQVRJT05fU1lNQk9MID0gem9uZVN5bWJvbCQxKCdwcm9wYWdhdGlvblN0b3BwZWQnKTtcbiAgICBmdW5jdGlvbiBwcmVwYXJlRXZlbnROYW1lcyhldmVudE5hbWUsIGV2ZW50TmFtZVRvU3RyaW5nKSB7XG4gICAgICAgIHZhciBmYWxzZUV2ZW50TmFtZSA9IChldmVudE5hbWVUb1N0cmluZyA/IGV2ZW50TmFtZVRvU3RyaW5nKGV2ZW50TmFtZSkgOiBldmVudE5hbWUpICsgRkFMU0VfU1RSO1xuICAgICAgICB2YXIgdHJ1ZUV2ZW50TmFtZSA9IChldmVudE5hbWVUb1N0cmluZyA/IGV2ZW50TmFtZVRvU3RyaW5nKGV2ZW50TmFtZSkgOiBldmVudE5hbWUpICsgVFJVRV9TVFI7XG4gICAgICAgIHZhciBzeW1ib2wgPSBaT05FX1NZTUJPTF9QUkVGSVggKyBmYWxzZUV2ZW50TmFtZTtcbiAgICAgICAgdmFyIHN5bWJvbENhcHR1cmUgPSBaT05FX1NZTUJPTF9QUkVGSVggKyB0cnVlRXZlbnROYW1lO1xuICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdID0ge307XG4gICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bRkFMU0VfU1RSXSA9IHN5bWJvbDtcbiAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtUUlVFX1NUUl0gPSBzeW1ib2xDYXB0dXJlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXRjaEV2ZW50VGFyZ2V0KF9nbG9iYWwsIGFwaSwgYXBpcywgcGF0Y2hPcHRpb25zKSB7XG4gICAgICAgIHZhciBBRERfRVZFTlRfTElTVEVORVIgPSAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5hZGQpIHx8IEFERF9FVkVOVF9MSVNURU5FUl9TVFI7XG4gICAgICAgIHZhciBSRU1PVkVfRVZFTlRfTElTVEVORVIgPSAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5ybSkgfHwgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUjtcbiAgICAgICAgdmFyIExJU1RFTkVSU19FVkVOVF9MSVNURU5FUiA9IChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLmxpc3RlbmVycykgfHwgJ2V2ZW50TGlzdGVuZXJzJztcbiAgICAgICAgdmFyIFJFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSID0gKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMucm1BbGwpIHx8ICdyZW1vdmVBbGxMaXN0ZW5lcnMnO1xuICAgICAgICB2YXIgem9uZVN5bWJvbEFkZEV2ZW50TGlzdGVuZXIgPSB6b25lU3ltYm9sJDEoQUREX0VWRU5UX0xJU1RFTkVSKTtcbiAgICAgICAgdmFyIEFERF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UgPSAnLicgKyBBRERfRVZFTlRfTElTVEVORVIgKyAnOic7XG4gICAgICAgIHZhciBQUkVQRU5EX0VWRU5UX0xJU1RFTkVSID0gJ3ByZXBlbmRMaXN0ZW5lcic7XG4gICAgICAgIHZhciBQUkVQRU5EX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSA9ICcuJyArIFBSRVBFTkRfRVZFTlRfTElTVEVORVIgKyAnOic7XG4gICAgICAgIHZhciBpbnZva2VUYXNrID0gZnVuY3Rpb24gKHRhc2ssIHRhcmdldCwgZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UsIGNoZWNrIGlzUmVtb3ZlZCB3aGljaCBpcyBzZXRcbiAgICAgICAgICAgIC8vIGJ5IHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgIGlmICh0YXNrLmlzUmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkZWxlZ2F0ZSA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRlbGVnYXRlID09PSAnb2JqZWN0JyAmJiBkZWxlZ2F0ZS5oYW5kbGVFdmVudCkge1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgYmluZCB2ZXJzaW9uIG9mIGhhbmRsZUV2ZW50IHdoZW4gaW52b2tlXG4gICAgICAgICAgICAgICAgdGFzay5jYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gZGVsZWdhdGUuaGFuZGxlRXZlbnQoZXZlbnQpOyB9O1xuICAgICAgICAgICAgICAgIHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaW52b2tlIHN0YXRpYyB0YXNrLmludm9rZVxuICAgICAgICAgICAgLy8gbmVlZCB0byB0cnkvY2F0Y2ggZXJyb3IgaGVyZSwgb3RoZXJ3aXNlLCB0aGUgZXJyb3IgaW4gb25lIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAvLyB3aWxsIGJyZWFrIHRoZSBleGVjdXRpb25zIG9mIHRoZSBvdGhlciBldmVudCBsaXN0ZW5lcnMuIEFsc28gZXJyb3Igd2lsbFxuICAgICAgICAgICAgLy8gbm90IHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiBgb25jZWAgb3B0aW9ucyBpcyB0cnVlLlxuICAgICAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXNrLmludm9rZSh0YXNrLCB0YXJnZXQsIFtldmVudF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB0YXNrLm9wdGlvbnM7XG4gICAgICAgICAgICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgJiYgb3B0aW9ucy5vbmNlKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgb3B0aW9ucy5vbmNlIGlzIHRydWUsIGFmdGVyIGludm9rZSBvbmNlIHJlbW92ZSBsaXN0ZW5lciBoZXJlXG4gICAgICAgICAgICAgICAgLy8gb25seSBicm93c2VyIG5lZWQgdG8gZG8gdGhpcywgbm9kZWpzIGV2ZW50RW1pdHRlciB3aWxsIGNhbCByZW1vdmVMaXN0ZW5lclxuICAgICAgICAgICAgICAgIC8vIGluc2lkZSBFdmVudEVtaXR0ZXIub25jZVxuICAgICAgICAgICAgICAgIHZhciBkZWxlZ2F0ZV8xID0gdGFzay5vcmlnaW5hbERlbGVnYXRlID8gdGFzay5vcmlnaW5hbERlbGVnYXRlIDogdGFzay5jYWxsYmFjaztcbiAgICAgICAgICAgICAgICB0YXJnZXRbUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRhcmdldCwgZXZlbnQudHlwZSwgZGVsZWdhdGVfMSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH07XG4gICAgICAgIGZ1bmN0aW9uIGdsb2JhbENhbGxiYWNrKGNvbnRleHQsIGV2ZW50LCBpc0NhcHR1cmUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzkxMSwgaW4gSUUsIHNvbWV0aW1lc1xuICAgICAgICAgICAgLy8gZXZlbnQgd2lsbCBiZSB1bmRlZmluZWQsIHNvIHdlIG5lZWQgdG8gdXNlIHdpbmRvdy5ldmVudFxuICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCBfZ2xvYmFsLmV2ZW50O1xuICAgICAgICAgICAgaWYgKCFldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGV2ZW50LnRhcmdldCBpcyBuZWVkZWQgZm9yIFNhbXN1bmcgVFYgYW5kIFNvdXJjZUJ1ZmZlclxuICAgICAgICAgICAgLy8gfHwgZ2xvYmFsIGlzIG5lZWRlZCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy8xOTBcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBjb250ZXh0IHx8IGV2ZW50LnRhcmdldCB8fCBfZ2xvYmFsO1xuICAgICAgICAgICAgdmFyIHRhc2tzID0gdGFyZ2V0W3pvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50LnR5cGVdW2lzQ2FwdHVyZSA/IFRSVUVfU1RSIDogRkFMU0VfU1RSXV07XG4gICAgICAgICAgICBpZiAodGFza3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3JzID0gW107XG4gICAgICAgICAgICAgICAgLy8gaW52b2tlIGFsbCB0YXNrcyB3aGljaCBhdHRhY2hlZCB0byBjdXJyZW50IHRhcmdldCB3aXRoIGdpdmVuIGV2ZW50LnR5cGUgYW5kIGNhcHR1cmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIC8vIGZvciBwZXJmb3JtYW5jZSBjb25jZXJuLCBpZiB0YXNrLmxlbmd0aCA9PT0gMSwganVzdCBpbnZva2VcbiAgICAgICAgICAgICAgICBpZiAodGFza3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSBpbnZva2VUYXNrKHRhc2tzWzBdLCB0YXJnZXQsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgZXJyICYmIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy84MzZcbiAgICAgICAgICAgICAgICAgICAgLy8gY29weSB0aGUgdGFza3MgYXJyYXkgYmVmb3JlIGludm9rZSwgdG8gYXZvaWRcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGNhbGxiYWNrIHdpbGwgcmVtb3ZlIGl0c2VsZiBvciBvdGhlciBsaXN0ZW5lclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29weVRhc2tzID0gdGFza3Muc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3B5VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCAmJiBldmVudFtJTU1FRElBVEVfUFJPUEFHQVRJT05fU1lNQk9MXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IGludm9rZVRhc2soY29weVRhc2tzW2ldLCB0YXJnZXQsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyciAmJiBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoZXJlIGlzIG9ubHkgb25lIGVycm9yLCB3ZSBkb24ndCBuZWVkIHRvIHNjaGVkdWxlIG1pY3JvVGFza1xuICAgICAgICAgICAgICAgIC8vIHRvIHRocm93IHRoZSBlcnJvci5cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcnNbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2xvb3BfNCA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gZXJyb3JzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLm5hdGl2ZVNjaGVkdWxlTWljcm9UYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9sb29wXzQoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2xvYmFsIHNoYXJlZCB6b25lQXdhcmVDYWxsYmFjayB0byBoYW5kbGUgYWxsIGV2ZW50IGNhbGxiYWNrIHdpdGggY2FwdHVyZSA9IGZhbHNlXG4gICAgICAgIHZhciBnbG9iYWxab25lQXdhcmVDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbENhbGxiYWNrKHRoaXMsIGV2ZW50LCBmYWxzZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGdsb2JhbCBzaGFyZWQgem9uZUF3YXJlQ2FsbGJhY2sgdG8gaGFuZGxlIGFsbCBldmVudCBjYWxsYmFjayB3aXRoIGNhcHR1cmUgPSB0cnVlXG4gICAgICAgIHZhciBnbG9iYWxab25lQXdhcmVDYXB0dXJlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxDYWxsYmFjayh0aGlzLCBldmVudCwgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIGZ1bmN0aW9uIHBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKG9iaiwgcGF0Y2hPcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoIW9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1c2VHbG9iYWxDYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy51c2VHICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB1c2VHbG9iYWxDYWxsYmFjayA9IHBhdGNoT3B0aW9ucy51c2VHO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbGlkYXRlSGFuZGxlciA9IHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMudmg7XG4gICAgICAgICAgICB2YXIgY2hlY2tEdXBsaWNhdGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuY2hrRHVwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjaGVja0R1cGxpY2F0ZSA9IHBhdGNoT3B0aW9ucy5jaGtEdXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmV0dXJuVGFyZ2V0ID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5ydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVGFyZ2V0ID0gcGF0Y2hPcHRpb25zLnJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb3RvID0gb2JqO1xuICAgICAgICAgICAgd2hpbGUgKHByb3RvICYmICFwcm90by5oYXNPd25Qcm9wZXJ0eShBRERfRVZFTlRfTElTVEVORVIpKSB7XG4gICAgICAgICAgICAgICAgcHJvdG8gPSBPYmplY3RHZXRQcm90b3R5cGVPZihwcm90byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXByb3RvICYmIG9ialtBRERfRVZFTlRfTElTVEVORVJdKSB7XG4gICAgICAgICAgICAgICAgLy8gc29tZWhvdyB3ZSBkaWQgbm90IGZpbmQgaXQsIGJ1dCB3ZSBjYW4gc2VlIGl0LiBUaGlzIGhhcHBlbnMgb24gSUUgZm9yIFdpbmRvdyBwcm9wZXJ0aWVzLlxuICAgICAgICAgICAgICAgIHByb3RvID0gb2JqO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwcm90bykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm90b1t6b25lU3ltYm9sQWRkRXZlbnRMaXN0ZW5lcl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZXZlbnROYW1lVG9TdHJpbmcgPSBwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLmV2ZW50TmFtZVRvU3RyaW5nO1xuICAgICAgICAgICAgLy8gYSBzaGFyZWQgZ2xvYmFsIHRhc2tEYXRhIHRvIHBhc3MgZGF0YSBmb3Igc2NoZWR1bGVFdmVudFRhc2tcbiAgICAgICAgICAgIC8vIHNvIHdlIGRvIG5vdCBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QganVzdCBmb3IgcGFzcyBzb21lIGRhdGFcbiAgICAgICAgICAgIHZhciB0YXNrRGF0YSA9IHt9O1xuICAgICAgICAgICAgdmFyIG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIgPSBwcm90b1t6b25lU3ltYm9sQWRkRXZlbnRMaXN0ZW5lcl0gPSBwcm90b1tBRERfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgdmFyIG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIgPSBwcm90b1t6b25lU3ltYm9sJDEoUkVNT1ZFX0VWRU5UX0xJU1RFTkVSKV0gPVxuICAgICAgICAgICAgICAgIHByb3RvW1JFTU9WRV9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICB2YXIgbmF0aXZlTGlzdGVuZXJzID0gcHJvdG9bem9uZVN5bWJvbCQxKExJU1RFTkVSU19FVkVOVF9MSVNURU5FUildID1cbiAgICAgICAgICAgICAgICBwcm90b1tMSVNURU5FUlNfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgdmFyIG5hdGl2ZVJlbW92ZUFsbExpc3RlbmVycyA9IHByb3RvW3pvbmVTeW1ib2wkMShSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUildID1cbiAgICAgICAgICAgICAgICBwcm90b1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICB2YXIgbmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXI7XG4gICAgICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5wcmVwZW5kKSB7XG4gICAgICAgICAgICAgICAgbmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXIgPSBwcm90b1t6b25lU3ltYm9sJDEocGF0Y2hPcHRpb25zLnByZXBlbmQpXSA9XG4gICAgICAgICAgICAgICAgICAgIHByb3RvW3BhdGNoT3B0aW9ucy5wcmVwZW5kXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhpcyB1dGlsIGZ1bmN0aW9uIHdpbGwgYnVpbGQgYW4gb3B0aW9uIG9iamVjdCB3aXRoIHBhc3NpdmUgb3B0aW9uXG4gICAgICAgICAgICAgKiB0byBoYW5kbGUgYWxsIHBvc3NpYmxlIGlucHV0IGZyb20gdGhlIHVzZXIuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGJ1aWxkRXZlbnRMaXN0ZW5lck9wdGlvbnMob3B0aW9ucywgcGFzc2l2ZSkge1xuICAgICAgICAgICAgICAgIGlmICghcGFzc2l2ZVN1cHBvcnRlZCAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgJiYgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAvLyBkb2Vzbid0IHN1cHBvcnQgcGFzc2l2ZSBidXQgdXNlciB3YW50IHRvIHBhc3MgYW4gb2JqZWN0IGFzIG9wdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBub3Qgd29yayBvbiBzb21lIG9sZCBicm93c2VyLCBzbyB3ZSBqdXN0IHBhc3MgYSBib29sZWFuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFzIHVzZUNhcHR1cmUgcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIW9wdGlvbnMuY2FwdHVyZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFwYXNzaXZlU3VwcG9ydGVkIHx8ICFwYXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBjYXB0dXJlOiBvcHRpb25zLCBwYXNzaXZlOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBwYXNzaXZlOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgJiYgb3B0aW9ucy5wYXNzaXZlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjdXN0b21TY2hlZHVsZUdsb2JhbCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYWxyZWFkeSBhIHRhc2sgZm9yIHRoZSBldmVudE5hbWUgKyBjYXB0dXJlLFxuICAgICAgICAgICAgICAgIC8vIGp1c3QgcmV0dXJuLCBiZWNhdXNlIHdlIHVzZSB0aGUgc2hhcmVkIGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrIGhlcmUuXG4gICAgICAgICAgICAgICAgaWYgKHRhc2tEYXRhLmlzRXhpc3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2tEYXRhLnRhcmdldCwgdGFza0RhdGEuZXZlbnROYW1lLCB0YXNrRGF0YS5jYXB0dXJlID8gZ2xvYmFsWm9uZUF3YXJlQ2FwdHVyZUNhbGxiYWNrIDogZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2ssIHRhc2tEYXRhLm9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBjdXN0b21DYW5jZWxHbG9iYWwgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRhc2sgaXMgbm90IG1hcmtlZCBhcyBpc1JlbW92ZWQsIHRoaXMgY2FsbCBpcyBkaXJlY3RseVxuICAgICAgICAgICAgICAgIC8vIGZyb20gWm9uZS5wcm90b3R5cGUuY2FuY2VsVGFzaywgd2Ugc2hvdWxkIHJlbW92ZSB0aGUgdGFza1xuICAgICAgICAgICAgICAgIC8vIGZyb20gdGFza3NMaXN0IG9mIHRhcmdldCBmaXJzdFxuICAgICAgICAgICAgICAgIGlmICghdGFzay5pc1JlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lc1t0YXNrLmV2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBzeW1ib2xFdmVudE5hbWUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2xFdmVudE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW3Rhc2suY2FwdHVyZSA/IFRSVUVfU1RSIDogRkFMU0VfU1RSXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdUYXNrcyA9IHN5bWJvbEV2ZW50TmFtZSAmJiB0YXNrLnRhcmdldFtzeW1ib2xFdmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nVGFzayA9IGV4aXN0aW5nVGFza3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFzayA9PT0gdGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGlzUmVtb3ZlZCB0byBkYXRhIGZvciBmYXN0ZXIgaW52b2tlVGFzayBjaGVja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmlzUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxsIHRhc2tzIGZvciB0aGUgZXZlbnROYW1lICsgY2FwdHVyZSBoYXZlIGdvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgYW5kIHJlbW92ZSB0aGUgdGFzayBjYWNoZSBmcm9tIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5hbGxSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sudGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiBhbGwgdGFza3MgZm9yIHRoZSBldmVudE5hbWUgKyBjYXB0dXJlIGhhdmUgZ29uZSxcbiAgICAgICAgICAgICAgICAvLyB3ZSB3aWxsIHJlYWxseSByZW1vdmUgdGhlIGdsb2JhbCBldmVudCBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICAvLyBpZiBub3QsIHJldHVyblxuICAgICAgICAgICAgICAgIGlmICghdGFzay5hbGxSZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIuY2FsbCh0YXNrLnRhcmdldCwgdGFzay5ldmVudE5hbWUsIHRhc2suY2FwdHVyZSA/IGdsb2JhbFpvbmVBd2FyZUNhcHR1cmVDYWxsYmFjayA6IGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrLCB0YXNrLm9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBjdXN0b21TY2hlZHVsZU5vbkdsb2JhbCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0YXNrRGF0YS50YXJnZXQsIHRhc2tEYXRhLmV2ZW50TmFtZSwgdGFzay5pbnZva2UsIHRhc2tEYXRhLm9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBjdXN0b21TY2hlZHVsZVByZXBlbmQgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2tEYXRhLnRhcmdldCwgdGFza0RhdGEuZXZlbnROYW1lLCB0YXNrLmludm9rZSwgdGFza0RhdGEub3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGN1c3RvbUNhbmNlbE5vbkdsb2JhbCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIuY2FsbCh0YXNrLnRhcmdldCwgdGFzay5ldmVudE5hbWUsIHRhc2suaW52b2tlLCB0YXNrLm9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBjdXN0b21TY2hlZHVsZSA9IHVzZUdsb2JhbENhbGxiYWNrID8gY3VzdG9tU2NoZWR1bGVHbG9iYWwgOiBjdXN0b21TY2hlZHVsZU5vbkdsb2JhbDtcbiAgICAgICAgICAgIHZhciBjdXN0b21DYW5jZWwgPSB1c2VHbG9iYWxDYWxsYmFjayA/IGN1c3RvbUNhbmNlbEdsb2JhbCA6IGN1c3RvbUNhbmNlbE5vbkdsb2JhbDtcbiAgICAgICAgICAgIHZhciBjb21wYXJlVGFza0NhbGxiYWNrVnNEZWxlZ2F0ZSA9IGZ1bmN0aW9uICh0YXNrLCBkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHZhciB0eXBlT2ZEZWxlZ2F0ZSA9IHR5cGVvZiBkZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHR5cGVPZkRlbGVnYXRlID09PSAnZnVuY3Rpb24nICYmIHRhc2suY2FsbGJhY2sgPT09IGRlbGVnYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAodHlwZU9mRGVsZWdhdGUgPT09ICdvYmplY3QnICYmIHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA9PT0gZGVsZWdhdGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBjb21wYXJlID0gKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuZGlmZikgPyBwYXRjaE9wdGlvbnMuZGlmZiA6IGNvbXBhcmVUYXNrQ2FsbGJhY2tWc0RlbGVnYXRlO1xuICAgICAgICAgICAgdmFyIHVucGF0Y2hlZEV2ZW50cyA9IFpvbmVbem9uZVN5bWJvbCQxKCdVTlBBVENIRURfRVZFTlRTJyldO1xuICAgICAgICAgICAgdmFyIHBhc3NpdmVFdmVudHMgPSBfZ2xvYmFsW3pvbmVTeW1ib2wkMSgnUEFTU0lWRV9FVkVOVFMnKV07XG4gICAgICAgICAgICB2YXIgbWFrZUFkZExpc3RlbmVyID0gZnVuY3Rpb24gKG5hdGl2ZUxpc3RlbmVyLCBhZGRTb3VyY2UsIGN1c3RvbVNjaGVkdWxlRm4sIGN1c3RvbUNhbmNlbEZuLCByZXR1cm5UYXJnZXQsIHByZXBlbmQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuVGFyZ2V0ID09PSB2b2lkIDApIHsgcmV0dXJuVGFyZ2V0ID0gZmFsc2U7IH1cbiAgICAgICAgICAgICAgICBpZiAocHJlcGVuZCA9PT0gdm9pZCAwKSB7IHByZXBlbmQgPSBmYWxzZTsgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzIHx8IF9nbG9iYWw7XG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgPSBwYXRjaE9wdGlvbnMudHJhbnNmZXJFdmVudE5hbWUoZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghZGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05vZGUgJiYgZXZlbnROYW1lID09PSAndW5jYXVnaHRFeGNlcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkb24ndCBwYXRjaCB1bmNhdWdodEV4Y2VwdGlvbiBvZiBub2RlanMgdG8gcHJldmVudCBlbmRsZXNzIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvbid0IGNyZWF0ZSB0aGUgYmluZCBkZWxlZ2F0ZSBmdW5jdGlvbiBmb3IgaGFuZGxlRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSBoZXJlIHRvIGltcHJvdmUgYWRkRXZlbnRMaXN0ZW5lciBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3aWxsIGNyZWF0ZSB0aGUgYmluZCBkZWxlZ2F0ZSB3aGVuIGludm9rZVxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNIYW5kbGVFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlbGVnYXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlbGVnYXRlLmhhbmRsZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hhbmRsZUV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVIYW5kbGVyICYmICF2YWxpZGF0ZUhhbmRsZXIobmF0aXZlTGlzdGVuZXIsIGRlbGVnYXRlLCB0YXJnZXQsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFzc2l2ZSA9IHBhc3NpdmVTdXBwb3J0ZWQgJiYgISFwYXNzaXZlRXZlbnRzICYmIHBhc3NpdmVFdmVudHMuaW5kZXhPZihldmVudE5hbWUpICE9PSAtMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBidWlsZEV2ZW50TGlzdGVuZXJPcHRpb25zKGFyZ3VtZW50c1syXSwgcGFzc2l2ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1bnBhdGNoZWRFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHVucGF0Y2hlZCBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVucGF0Y2hlZEV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09IHVucGF0Y2hlZEV2ZW50c1tpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFzc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUxpc3RlbmVyLmNhbGwodGFyZ2V0LCBldmVudE5hbWUsIGRlbGVnYXRlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXB0dXJlID0gIW9wdGlvbnMgPyBmYWxzZSA6IHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicgPyB0cnVlIDogb3B0aW9ucy5jYXB0dXJlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb25jZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5vbmNlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciB6b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghc3ltYm9sRXZlbnROYW1lcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlcGFyZUV2ZW50TmFtZXMoZXZlbnROYW1lLCBldmVudE5hbWVUb1N0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xFdmVudE5hbWVzID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tjYXB0dXJlID8gVFJVRV9TVFIgOiBGQUxTRV9TVFJdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdUYXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNFeGlzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBoYXZlIHRhc2sgcmVnaXN0ZXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNFeGlzdGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tEdXBsaWNhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoZXhpc3RpbmdUYXNrc1tpXSwgZGVsZWdhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzYW1lIGNhbGxiYWNrLCBzYW1lIGNhcHR1cmUsIHNhbWUgZXZlbnQgbmFtZSwganVzdCByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFza3MgPSB0YXJnZXRbc3ltYm9sRXZlbnROYW1lXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBzb3VyY2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25zdHJ1Y3Rvck5hbWUgPSB0YXJnZXQuY29uc3RydWN0b3JbJ25hbWUnXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldFNvdXJjZSA9IGdsb2JhbFNvdXJjZXNbY29uc3RydWN0b3JOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlID0gdGFyZ2V0U291cmNlW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IGNvbnN0cnVjdG9yTmFtZSArIGFkZFNvdXJjZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGV2ZW50TmFtZVRvU3RyaW5nID8gZXZlbnROYW1lVG9TdHJpbmcoZXZlbnROYW1lKSA6IGV2ZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90IGNyZWF0ZSBhIG5ldyBvYmplY3QgYXMgdGFzay5kYXRhIHRvIHBhc3MgdGhvc2UgdGhpbmdzXG4gICAgICAgICAgICAgICAgICAgIC8vIGp1c3QgdXNlIHRoZSBnbG9iYWwgc2hhcmVkIG9uZVxuICAgICAgICAgICAgICAgICAgICB0YXNrRGF0YS5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGFkZEV2ZW50TGlzdGVuZXIgd2l0aCBvbmNlIG9wdGlvbnMsIHdlIGRvbid0IHBhc3MgaXQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hdGl2ZSBhZGRFdmVudExpc3RlbmVyLCBpbnN0ZWFkIHdlIGtlZXAgdGhlIG9uY2Ugc2V0dGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGhhbmRsZSBvdXJzZWx2ZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGF0YS5vcHRpb25zLm9uY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YXNrRGF0YS50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tEYXRhLmNhcHR1cmUgPSBjYXB0dXJlO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRGF0YS5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tEYXRhLmlzRXhpc3RpbmcgPSBpc0V4aXN0aW5nO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHVzZUdsb2JhbENhbGxiYWNrID8gT1BUSU1JWkVEX1pPTkVfRVZFTlRfVEFTS19EQVRBIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIHRhc2tEYXRhIGludG8gZGF0YSB0byBhbGxvdyBvblNjaGVkdWxlRXZlbnRUYXNrIHRvIGFjY2VzcyB0aGUgdGFzayBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50YXNrRGF0YSA9IHRhc2tEYXRhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXNrID0gem9uZS5zY2hlZHVsZUV2ZW50VGFzayhzb3VyY2UsIGRlbGVnYXRlLCBkYXRhLCBjdXN0b21TY2hlZHVsZUZuLCBjdXN0b21DYW5jZWxGbik7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBjbGVhciB0YXNrRGF0YS50YXJnZXQgdG8gYXZvaWQgbWVtb3J5IGxlYWtcbiAgICAgICAgICAgICAgICAgICAgLy8gaXNzdWUsIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwNDQyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEYXRhLnRhcmdldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gY2xlYXIgdXAgdGFza0RhdGEgYmVjYXVzZSBpdCBpcyBhIGdsb2JhbCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGFza0RhdGEgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhdmUgdG8gc2F2ZSB0aG9zZSBpbmZvcm1hdGlvbiB0byB0YXNrIGluIGNhc2VcbiAgICAgICAgICAgICAgICAgICAgLy8gYXBwbGljYXRpb24gbWF5IGNhbGwgdGFzay56b25lLmNhbmNlbFRhc2soKSBkaXJlY3RseVxuICAgICAgICAgICAgICAgICAgICBpZiAob25jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoISghcGFzc2l2ZVN1cHBvcnRlZCAmJiB0eXBlb2YgdGFzay5vcHRpb25zID09PSAnYm9vbGVhbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBub3Qgc3VwcG9ydCBwYXNzaXZlLCBhbmQgd2UgcGFzcyBhbiBvcHRpb24gb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhZGRFdmVudExpc3RlbmVyLCB3ZSBzaG91bGQgc2F2ZSB0aGUgb3B0aW9ucyB0byB0YXNrXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhc2sudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICB0YXNrLmNhcHR1cmUgPSBjYXB0dXJlO1xuICAgICAgICAgICAgICAgICAgICB0YXNrLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSGFuZGxlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgb3JpZ2luYWwgZGVsZWdhdGUgZm9yIGNvbXBhcmUgdG8gY2hlY2sgZHVwbGljYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFza3MudW5zaGlmdCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0dXJuVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwcm90b1tBRERfRVZFTlRfTElTVEVORVJdID0gbWFrZUFkZExpc3RlbmVyKG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIsIEFERF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwsIHJldHVyblRhcmdldCk7XG4gICAgICAgICAgICBpZiAobmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBwcm90b1tQUkVQRU5EX0VWRU5UX0xJU1RFTkVSXSA9IG1ha2VBZGRMaXN0ZW5lcihuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lciwgUFJFUEVORF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UsIGN1c3RvbVNjaGVkdWxlUHJlcGVuZCwgY3VzdG9tQ2FuY2VsLCByZXR1cm5UYXJnZXQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvdG9bUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcyB8fCBfZ2xvYmFsO1xuICAgICAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMudHJhbnNmZXJFdmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lID0gcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzWzJdO1xuICAgICAgICAgICAgICAgIHZhciBjYXB0dXJlID0gIW9wdGlvbnMgPyBmYWxzZSA6IHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicgPyB0cnVlIDogb3B0aW9ucy5jYXB0dXJlO1xuICAgICAgICAgICAgICAgIHZhciBkZWxlZ2F0ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgICAgICBpZiAoIWRlbGVnYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZUhhbmRsZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgIXZhbGlkYXRlSGFuZGxlcihuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLCBkZWxlZ2F0ZSwgdGFyZ2V0LCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBzeW1ib2xFdmVudE5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tjYXB0dXJlID8gVFJVRV9TVFIgOiBGQUxTRV9TVFJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdUYXNrcyA9IHN5bWJvbEV2ZW50TmFtZSAmJiB0YXJnZXRbc3ltYm9sRXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ1Rhc2sgPSBleGlzdGluZ1Rhc2tzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoZXhpc3RpbmdUYXNrLCBkZWxlZ2F0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgaXNSZW1vdmVkIHRvIGRhdGEgZm9yIGZhc3RlciBpbnZva2VUYXNrIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrLmlzUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbCB0YXNrcyBmb3IgdGhlIGV2ZW50TmFtZSArIGNhcHR1cmUgaGF2ZSBnb25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgYW5kIHJlbW92ZSB0aGUgdGFzayBjYWNoZSBmcm9tIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2suYWxsUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtzeW1ib2xFdmVudE5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW4gdGhlIHRhcmdldCwgd2UgaGF2ZSBhbiBldmVudCBsaXN0ZW5lciB3aGljaCBpcyBhZGRlZCBieSBvbl9wcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdWNoIGFzIHRhcmdldC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7fSwgc28gd2UgbmVlZCB0byBjbGVhciB0aGlzIGludGVybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb3BlcnR5IHRvbyBpZiBhbGwgZGVsZWdhdGVzIGFsbCByZW1vdmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXZlbnROYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uUHJvcGVydHlTeW1ib2wgPSBaT05FX1NZTUJPTF9QUkVGSVggKyAnT05fUFJPUEVSVFknICsgZXZlbnROYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W29uUHJvcGVydHlTeW1ib2xdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2suem9uZS5jYW5jZWxUYXNrKGV4aXN0aW5nVGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldHVyblRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaXNzdWUgOTMwLCBkaWRuJ3QgZmluZCB0aGUgZXZlbnQgbmFtZSBvciBjYWxsYmFja1xuICAgICAgICAgICAgICAgIC8vIGZyb20gem9uZSBrZXB0IGV4aXN0aW5nVGFza3MsIHRoZSBjYWxsYmFjayBtYXliZVxuICAgICAgICAgICAgICAgIC8vIGFkZGVkIG91dHNpZGUgb2Ygem9uZSwgd2UgbmVlZCB0byBjYWxsIG5hdGl2ZSByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICAgICAgICAgICAgLy8gdG8gdHJ5IHRvIHJlbW92ZSBpdC5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHByb3RvW0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMgfHwgX2dsb2JhbDtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9IHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIHRhc2tzID0gZmluZEV2ZW50VGFza3ModGFyZ2V0LCBldmVudE5hbWVUb1N0cmluZyA/IGV2ZW50TmFtZVRvU3RyaW5nKGV2ZW50TmFtZSkgOiBldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGVnYXRlID0gdGFzay5vcmlnaW5hbERlbGVnYXRlID8gdGFzay5vcmlnaW5hbERlbGVnYXRlIDogdGFzay5jYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2goZGVsZWdhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHByb3RvW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcyB8fCBfZ2xvYmFsO1xuICAgICAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IEVWRU5UX05BTUVfU1lNQk9MX1JFR1guZXhlYyhwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBldnROYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbiBub2RlanMgRXZlbnRFbWl0dGVyLCByZW1vdmVMaXN0ZW5lciBldmVudCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlZCBmb3IgbW9uaXRvcmluZyB0aGUgcmVtb3ZlTGlzdGVuZXIgY2FsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIGp1c3Qga2VlcCByZW1vdmVMaXN0ZW5lciBldmVudExpc3RlbmVyIHVudGlsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGwgb3RoZXIgZXZlbnRMaXN0ZW5lcnMgYXJlIHJlbW92ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnROYW1lICYmIGV2dE5hbWUgIT09ICdyZW1vdmVMaXN0ZW5lcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRoaXMsIGV2dE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSByZW1vdmVMaXN0ZW5lciBsaXN0ZW5lciBmaW5hbGx5XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVJdLmNhbGwodGhpcywgJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lID0gcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sRXZlbnROYW1lcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN5bWJvbEV2ZW50TmFtZSA9IHN5bWJvbEV2ZW50TmFtZXNbRkFMU0VfU1RSXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzeW1ib2xDYXB0dXJlRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tUUlVFX1NUUl07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFza3MgPSB0YXJnZXRbc3ltYm9sRXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXB0dXJlVGFza3MgPSB0YXJnZXRbc3ltYm9sQ2FwdHVyZUV2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlVGFza3MgPSB0YXNrcy5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVtb3ZlVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSByZW1vdmVUYXNrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGVnYXRlID0gdGFzay5vcmlnaW5hbERlbGVnYXRlID8gdGFzay5vcmlnaW5hbERlbGVnYXRlIDogdGFzay5jYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tSRU1PVkVfRVZFTlRfTElTVEVORVJdLmNhbGwodGhpcywgZXZlbnROYW1lLCBkZWxlZ2F0ZSwgdGFzay5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZVRhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW92ZVRhc2tzID0gY2FwdHVyZVRhc2tzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdmVUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHJlbW92ZVRhc2tzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPyB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgOiB0YXNrLmNhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1JFTU9WRV9FVkVOVF9MSVNURU5FUl0uY2FsbCh0aGlzLCBldmVudE5hbWUsIGRlbGVnYXRlLCB0YXNrLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBmb3IgbmF0aXZlIHRvU3RyaW5nIHBhdGNoXG4gICAgICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bQUREX0VWRU5UX0xJU1RFTkVSXSwgbmF0aXZlQWRkRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXSwgbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgICBpZiAobmF0aXZlUmVtb3ZlQWxsTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXSwgbmF0aXZlUmVtb3ZlQWxsTGlzdGVuZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuYXRpdmVMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXSwgbmF0aXZlTGlzdGVuZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXBpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0c1tpXSA9IHBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKGFwaXNbaV0sIHBhdGNoT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpbmRFdmVudFRhc2tzKHRhcmdldCwgZXZlbnROYW1lKSB7XG4gICAgICAgIGlmICghZXZlbnROYW1lKSB7XG4gICAgICAgICAgICB2YXIgZm91bmRUYXNrcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBFVkVOVF9OQU1FX1NZTUJPTF9SRUdYLmV4ZWMocHJvcCk7XG4gICAgICAgICAgICAgICAgdmFyIGV2dE5hbWUgPSBtYXRjaCAmJiBtYXRjaFsxXTtcbiAgICAgICAgICAgICAgICBpZiAoZXZ0TmFtZSAmJiAoIWV2ZW50TmFtZSB8fCBldnROYW1lID09PSBldmVudE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXNrcyA9IHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRUYXNrcy5wdXNoKHRhc2tzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmb3VuZFRhc2tzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzeW1ib2xFdmVudE5hbWUgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICAgICAgICBpZiAoIXN5bWJvbEV2ZW50TmFtZSkge1xuICAgICAgICAgICAgcHJlcGFyZUV2ZW50TmFtZXMoZXZlbnROYW1lKTtcbiAgICAgICAgICAgIHN5bWJvbEV2ZW50TmFtZSA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhcHR1cmVGYWxzZVRhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZVtGQUxTRV9TVFJdXTtcbiAgICAgICAgdmFyIGNhcHR1cmVUcnVlVGFza3MgPSB0YXJnZXRbc3ltYm9sRXZlbnROYW1lW1RSVUVfU1RSXV07XG4gICAgICAgIGlmICghY2FwdHVyZUZhbHNlVGFza3MpIHtcbiAgICAgICAgICAgIHJldHVybiBjYXB0dXJlVHJ1ZVRhc2tzID8gY2FwdHVyZVRydWVUYXNrcy5zbGljZSgpIDogW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY2FwdHVyZVRydWVUYXNrcyA/IGNhcHR1cmVGYWxzZVRhc2tzLmNvbmNhdChjYXB0dXJlVHJ1ZVRhc2tzKSA6XG4gICAgICAgICAgICAgICAgY2FwdHVyZUZhbHNlVGFza3Muc2xpY2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwYXRjaEV2ZW50UHJvdG90eXBlKGdsb2JhbCwgYXBpKSB7XG4gICAgICAgIHZhciBFdmVudCA9IGdsb2JhbFsnRXZlbnQnXTtcbiAgICAgICAgaWYgKEV2ZW50ICYmIEV2ZW50LnByb3RvdHlwZSkge1xuICAgICAgICAgICAgYXBpLnBhdGNoTWV0aG9kKEV2ZW50LnByb3RvdHlwZSwgJ3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbicsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBzZWxmW0lNTUVESUFURV9QUk9QQUdBVElPTl9TWU1CT0xdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGNhbGwgdGhlIG5hdGl2ZSBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb25cbiAgICAgICAgICAgICAgICAvLyBpbiBjYXNlIGluIHNvbWUgaHlicmlkIGFwcGxpY2F0aW9uLCBzb21lIHBhcnQgb2ZcbiAgICAgICAgICAgICAgICAvLyBhcHBsaWNhdGlvbiB3aWxsIGJlIGNvbnRyb2xsZWQgYnkgem9uZSwgc29tZSBhcmUgbm90XG4gICAgICAgICAgICAgICAgZGVsZWdhdGUgJiYgZGVsZWdhdGUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICB9OyB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwYXRjaENhbGxiYWNrcyhhcGksIHRhcmdldCwgdGFyZ2V0TmFtZSwgbWV0aG9kLCBjYWxsYmFja3MpIHtcbiAgICAgICAgdmFyIHN5bWJvbCA9IFpvbmUuX19zeW1ib2xfXyhtZXRob2QpO1xuICAgICAgICBpZiAodGFyZ2V0W3N5bWJvbF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmF0aXZlRGVsZWdhdGUgPSB0YXJnZXRbc3ltYm9sXSA9IHRhcmdldFttZXRob2RdO1xuICAgICAgICB0YXJnZXRbbWV0aG9kXSA9IGZ1bmN0aW9uIChuYW1lLCBvcHRzLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob3B0cyAmJiBvcHRzLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gXCJcIi5jb25jYXQodGFyZ2V0TmFtZSwgXCIuXCIpLmNvbmNhdChtZXRob2QsIFwiOjpcIikgKyBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3RvdHlwZSA9IG9wdHMucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiB0aGUgYHBhdGNoQ2FsbGJhY2tzYCBpcyB1c2VkIGZvciBwYXRjaGluZyB0aGUgYGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudGAgYW5kXG4gICAgICAgICAgICAgICAgICAgIC8vIGBjdXN0b21FbGVtZW50cy5kZWZpbmVgLiBXZSBleHBsaWNpdGx5IHdyYXAgdGhlIHBhdGNoaW5nIGNvZGUgaW50byB0cnktY2F0Y2ggc2luY2VcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsbGJhY2tzIG1heSBiZSBhbHJlYWR5IHBhdGNoZWQgYnkgb3RoZXIgd2ViIGNvbXBvbmVudHMgZnJhbWV3b3JrcyAoZS5nLiBMV0MpLCBhbmQgdGhleVxuICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIHRob3NlIHByb3BlcnRpZXMgbm9uLXdyaXRhYmxlLiBUaGlzIG1lYW5zIHRoYXQgcGF0Y2hpbmcgY2FsbGJhY2sgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgICAgICAgICAgICAgICAgICAvLyBgY2Fubm90IGFzc2lnbiB0byByZWFkLW9ubHkgcHJvcGVydHlgLiBTZWUgdGhpcyBjb2RlIGFzIGFuIGV4YW1wbGU6XG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zYWxlc2ZvcmNlL2x3Yy9ibG9iL21hc3Rlci9wYWNrYWdlcy9AbHdjL2VuZ2luZS1jb3JlL3NyYy9mcmFtZXdvcmsvYmFzZS1icmlkZ2UtZWxlbWVudC50cyNMMTgwLUwxODZcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBzdG9wIHRoZSBhcHBsaWNhdGlvbiByZW5kZXJpbmcgaWYgd2UgY291bGRuJ3QgcGF0Y2ggc29tZVxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxsYmFjaywgZS5nLiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYC5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm90b3R5cGUuaGFzT3duUHJvcGVydHkoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBhcGkuT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IGFwaS53cmFwV2l0aEN1cnJlbnRab25lKGRlc2NyaXB0b3IudmFsdWUsIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5fcmVkZWZpbmVQcm9wZXJ0eShvcHRzLnByb3RvdHlwZSwgY2FsbGJhY2ssIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm90b3R5cGVbY2FsbGJhY2tdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvdHlwZVtjYWxsYmFja10gPSBhcGkud3JhcFdpdGhDdXJyZW50Wm9uZShwcm90b3R5cGVbY2FsbGJhY2tdLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3RvdHlwZVtjYWxsYmFja10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90b3R5cGVbY2FsbGJhY2tdID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUocHJvdG90eXBlW2NhbGxiYWNrXSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IHdlIGxlYXZlIHRoZSBjYXRjaCBibG9jayBlbXB0eSBzaW5jZSB0aGVyZSdzIG5vIHdheSB0byBoYW5kbGUgdGhlIGVycm9yIHJlbGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIG5vbi13cml0YWJsZSBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZURlbGVnYXRlLmNhbGwodGFyZ2V0LCBuYW1lLCBvcHRzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgYXBpLmF0dGFjaE9yaWdpblRvUGF0Y2hlZCh0YXJnZXRbbWV0aG9kXSwgbmF0aXZlRGVsZWdhdGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmaWx0ZXJQcm9wZXJ0aWVzKHRhcmdldCwgb25Qcm9wZXJ0aWVzLCBpZ25vcmVQcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmICghaWdub3JlUHJvcGVydGllcyB8fCBpZ25vcmVQcm9wZXJ0aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG9uUHJvcGVydGllcztcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGlwID0gaWdub3JlUHJvcGVydGllcy5maWx0ZXIoZnVuY3Rpb24gKGlwKSB7IHJldHVybiBpcC50YXJnZXQgPT09IHRhcmdldDsgfSk7XG4gICAgICAgIGlmICghdGlwIHx8IHRpcC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBvblByb3BlcnRpZXM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRhcmdldElnbm9yZVByb3BlcnRpZXMgPSB0aXBbMF0uaWdub3JlUHJvcGVydGllcztcbiAgICAgICAgcmV0dXJuIG9uUHJvcGVydGllcy5maWx0ZXIoZnVuY3Rpb24gKG9wKSB7IHJldHVybiB0YXJnZXRJZ25vcmVQcm9wZXJ0aWVzLmluZGV4T2Yob3ApID09PSAtMTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKHRhcmdldCwgb25Qcm9wZXJ0aWVzLCBpZ25vcmVQcm9wZXJ0aWVzLCBwcm90b3R5cGUpIHtcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0YXJnZXQgaXMgYXZhaWxhYmxlLCBzb21ldGltZXMgdGFyZ2V0IHdpbGwgYmUgdW5kZWZpbmVkXG4gICAgICAgIC8vIGJlY2F1c2UgZGlmZmVyZW50IGJyb3dzZXIgb3Igc29tZSAzcmQgcGFydHkgcGx1Z2luLlxuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmaWx0ZXJlZFByb3BlcnRpZXMgPSBmaWx0ZXJQcm9wZXJ0aWVzKHRhcmdldCwgb25Qcm9wZXJ0aWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgcGF0Y2hPblByb3BlcnRpZXModGFyZ2V0LCBmaWx0ZXJlZFByb3BlcnRpZXMsIHByb3RvdHlwZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgZXZlbnQgbmFtZSBwcm9wZXJ0aWVzIHdoaWNoIHRoZSBldmVudCBuYW1lIHN0YXJ0c1dpdGggYG9uYFxuICAgICAqIGZyb20gdGhlIHRhcmdldCBvYmplY3QgaXRzZWxmLCBpbmhlcml0ZWQgcHJvcGVydGllcyBhcmUgbm90IGNvbnNpZGVyZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0T25FdmVudE5hbWVzKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gbmFtZS5zdGFydHNXaXRoKCdvbicpICYmIG5hbWUubGVuZ3RoID4gMjsgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIG5hbWUuc3Vic3RyaW5nKDIpOyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJvcGVydHlEZXNjcmlwdG9yUGF0Y2goYXBpLCBfZ2xvYmFsKSB7XG4gICAgICAgIGlmIChpc05vZGUgJiYgIWlzTWl4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFpvbmVbYXBpLnN5bWJvbCgncGF0Y2hFdmVudHMnKV0pIHtcbiAgICAgICAgICAgIC8vIGV2ZW50cyBhcmUgYWxyZWFkeSBiZWVuIHBhdGNoZWQgYnkgbGVnYWN5IHBhdGNoLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpZ25vcmVQcm9wZXJ0aWVzID0gX2dsb2JhbFsnX19ab25lX2lnbm9yZV9vbl9wcm9wZXJ0aWVzJ107XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IHdlIGNhbiBwYXRjaCB0aGUgZGVzY3JpcHRvcjogIENocm9tZSAmIEZpcmVmb3hcbiAgICAgICAgdmFyIHBhdGNoVGFyZ2V0cyA9IFtdO1xuICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICB2YXIgaW50ZXJuYWxXaW5kb3dfMSA9IHdpbmRvdztcbiAgICAgICAgICAgIHBhdGNoVGFyZ2V0cyA9IHBhdGNoVGFyZ2V0cy5jb25jYXQoW1xuICAgICAgICAgICAgICAgICdEb2N1bWVudCcsICdTVkdFbGVtZW50JywgJ0VsZW1lbnQnLCAnSFRNTEVsZW1lbnQnLCAnSFRNTEJvZHlFbGVtZW50JywgJ0hUTUxNZWRpYUVsZW1lbnQnLFxuICAgICAgICAgICAgICAgICdIVE1MRnJhbWVTZXRFbGVtZW50JywgJ0hUTUxGcmFtZUVsZW1lbnQnLCAnSFRNTElGcmFtZUVsZW1lbnQnLCAnSFRNTE1hcnF1ZWVFbGVtZW50JywgJ1dvcmtlcidcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgdmFyIGlnbm9yZUVycm9yUHJvcGVydGllcyA9IGlzSUUoKSA/IFt7IHRhcmdldDogaW50ZXJuYWxXaW5kb3dfMSwgaWdub3JlUHJvcGVydGllczogWydlcnJvciddIH1dIDogW107XG4gICAgICAgICAgICAvLyBpbiBJRS9FZGdlLCBvblByb3Agbm90IGV4aXN0IGluIHdpbmRvdyBvYmplY3QsIGJ1dCBpbiBXaW5kb3dQcm90b3R5cGVcbiAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gcGFzcyBXaW5kb3dQcm90b3R5cGUgdG8gY2hlY2sgb25Qcm9wIGV4aXN0IG9yIG5vdFxuICAgICAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoaW50ZXJuYWxXaW5kb3dfMSwgZ2V0T25FdmVudE5hbWVzKGludGVybmFsV2luZG93XzEpLCBpZ25vcmVQcm9wZXJ0aWVzID8gaWdub3JlUHJvcGVydGllcy5jb25jYXQoaWdub3JlRXJyb3JQcm9wZXJ0aWVzKSA6IGlnbm9yZVByb3BlcnRpZXMsIE9iamVjdEdldFByb3RvdHlwZU9mKGludGVybmFsV2luZG93XzEpKTtcbiAgICAgICAgfVxuICAgICAgICBwYXRjaFRhcmdldHMgPSBwYXRjaFRhcmdldHMuY29uY2F0KFtcbiAgICAgICAgICAgICdYTUxIdHRwUmVxdWVzdCcsICdYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0JywgJ0lEQkluZGV4JywgJ0lEQlJlcXVlc3QnLCAnSURCT3BlbkRCUmVxdWVzdCcsXG4gICAgICAgICAgICAnSURCRGF0YWJhc2UnLCAnSURCVHJhbnNhY3Rpb24nLCAnSURCQ3Vyc29yJywgJ1dlYlNvY2tldCdcbiAgICAgICAgXSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0Y2hUYXJnZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gX2dsb2JhbFtwYXRjaFRhcmdldHNbaV1dO1xuICAgICAgICAgICAgdGFyZ2V0ICYmIHRhcmdldC5wcm90b3R5cGUgJiZcbiAgICAgICAgICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyh0YXJnZXQucHJvdG90eXBlLCBnZXRPbkV2ZW50TmFtZXModGFyZ2V0LnByb3RvdHlwZSksIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCd1dGlsJywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgICAgIC8vIENvbGxlY3QgbmF0aXZlIGV2ZW50IG5hbWVzIGJ5IGxvb2tpbmcgYXQgcHJvcGVydGllc1xuICAgICAgICAvLyBvbiB0aGUgZ2xvYmFsIG5hbWVzcGFjZSwgZS5nLiAnb25jbGljaycuXG4gICAgICAgIHZhciBldmVudE5hbWVzID0gZ2V0T25FdmVudE5hbWVzKGdsb2JhbCk7XG4gICAgICAgIGFwaS5wYXRjaE9uUHJvcGVydGllcyA9IHBhdGNoT25Qcm9wZXJ0aWVzO1xuICAgICAgICBhcGkucGF0Y2hNZXRob2QgPSBwYXRjaE1ldGhvZDtcbiAgICAgICAgYXBpLmJpbmRBcmd1bWVudHMgPSBiaW5kQXJndW1lbnRzO1xuICAgICAgICBhcGkucGF0Y2hNYWNyb1Rhc2sgPSBwYXRjaE1hY3JvVGFzaztcbiAgICAgICAgLy8gSW4gZWFybGllciB2ZXJzaW9uIG9mIHpvbmUuanMgKDwwLjkuMCksIHdlIHVzZSBlbnYgbmFtZSBgX196b25lX3N5bWJvbF9fQkxBQ0tfTElTVEVEX0VWRU5UU2AgdG9cbiAgICAgICAgLy8gZGVmaW5lIHdoaWNoIGV2ZW50cyB3aWxsIG5vdCBiZSBwYXRjaGVkIGJ5IGBab25lLmpzYC5cbiAgICAgICAgLy8gSW4gbmV3ZXIgdmVyc2lvbiAoPj0wLjkuMCksIHdlIGNoYW5nZSB0aGUgZW52IG5hbWUgdG8gYF9fem9uZV9zeW1ib2xfX1VOUEFUQ0hFRF9FVkVOVFNgIHRvIGtlZXBcbiAgICAgICAgLy8gdGhlIG5hbWUgY29uc2lzdGVudCB3aXRoIGFuZ3VsYXIgcmVwby5cbiAgICAgICAgLy8gVGhlICBgX196b25lX3N5bWJvbF9fQkxBQ0tfTElTVEVEX0VWRU5UU2AgaXMgZGVwcmVjYXRlZCwgYnV0IGl0IGlzIHN0aWxsIGJlIHN1cHBvcnRlZCBmb3JcbiAgICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIHZhciBTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UUyA9IFpvbmUuX19zeW1ib2xfXygnQkxBQ0tfTElTVEVEX0VWRU5UUycpO1xuICAgICAgICB2YXIgU1lNQk9MX1VOUEFUQ0hFRF9FVkVOVFMgPSBab25lLl9fc3ltYm9sX18oJ1VOUEFUQ0hFRF9FVkVOVFMnKTtcbiAgICAgICAgaWYgKGdsb2JhbFtTWU1CT0xfVU5QQVRDSEVEX0VWRU5UU10pIHtcbiAgICAgICAgICAgIGdsb2JhbFtTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UU10gPSBnbG9iYWxbU1lNQk9MX1VOUEFUQ0hFRF9FVkVOVFNdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnbG9iYWxbU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFNdKSB7XG4gICAgICAgICAgICBab25lW1NZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTXSA9IFpvbmVbU1lNQk9MX1VOUEFUQ0hFRF9FVkVOVFNdID1cbiAgICAgICAgICAgICAgICBnbG9iYWxbU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFNdO1xuICAgICAgICB9XG4gICAgICAgIGFwaS5wYXRjaEV2ZW50UHJvdG90eXBlID0gcGF0Y2hFdmVudFByb3RvdHlwZTtcbiAgICAgICAgYXBpLnBhdGNoRXZlbnRUYXJnZXQgPSBwYXRjaEV2ZW50VGFyZ2V0O1xuICAgICAgICBhcGkuaXNJRU9yRWRnZSA9IGlzSUVPckVkZ2U7XG4gICAgICAgIGFwaS5PYmplY3REZWZpbmVQcm9wZXJ0eSA9IE9iamVjdERlZmluZVByb3BlcnR5O1xuICAgICAgICBhcGkuT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAgICAgICBhcGkuT2JqZWN0Q3JlYXRlID0gT2JqZWN0Q3JlYXRlO1xuICAgICAgICBhcGkuQXJyYXlTbGljZSA9IEFycmF5U2xpY2U7XG4gICAgICAgIGFwaS5wYXRjaENsYXNzID0gcGF0Y2hDbGFzcztcbiAgICAgICAgYXBpLndyYXBXaXRoQ3VycmVudFpvbmUgPSB3cmFwV2l0aEN1cnJlbnRab25lO1xuICAgICAgICBhcGkuZmlsdGVyUHJvcGVydGllcyA9IGZpbHRlclByb3BlcnRpZXM7XG4gICAgICAgIGFwaS5hdHRhY2hPcmlnaW5Ub1BhdGNoZWQgPSBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQ7XG4gICAgICAgIGFwaS5fcmVkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbiAgICAgICAgYXBpLnBhdGNoQ2FsbGJhY2tzID0gcGF0Y2hDYWxsYmFja3M7XG4gICAgICAgIGFwaS5nZXRHbG9iYWxPYmplY3RzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgIGdsb2JhbFNvdXJjZXM6IGdsb2JhbFNvdXJjZXMsXG4gICAgICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lczogem9uZVN5bWJvbEV2ZW50TmFtZXMsXG4gICAgICAgICAgICBldmVudE5hbWVzOiBldmVudE5hbWVzLFxuICAgICAgICAgICAgaXNCcm93c2VyOiBpc0Jyb3dzZXIsXG4gICAgICAgICAgICBpc01peDogaXNNaXgsXG4gICAgICAgICAgICBpc05vZGU6IGlzTm9kZSxcbiAgICAgICAgICAgIFRSVUVfU1RSOiBUUlVFX1NUUixcbiAgICAgICAgICAgIEZBTFNFX1NUUjogRkFMU0VfU1RSLFxuICAgICAgICAgICAgWk9ORV9TWU1CT0xfUFJFRklYOiBaT05FX1NZTUJPTF9QUkVGSVgsXG4gICAgICAgICAgICBBRERfRVZFTlRfTElTVEVORVJfU1RSOiBBRERfRVZFTlRfTElTVEVORVJfU1RSLFxuICAgICAgICAgICAgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUjogUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUlxuICAgICAgICB9KTsgfTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICAvKlxuICAgICAqIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBDaHJvbWUgYW5kIENocm9tZSBtb2JpbGUsIHRvIGVuYWJsZVxuICAgICAqIHRoaW5ncyBsaWtlIHJlZGVmaW5pbmcgYGNyZWF0ZWRDYWxsYmFja2Agb24gYW4gZWxlbWVudC5cbiAgICAgKi9cbiAgICB2YXIgem9uZVN5bWJvbDtcbiAgICB2YXIgX2RlZmluZVByb3BlcnR5O1xuICAgIHZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAgIHZhciBfY3JlYXRlO1xuICAgIHZhciB1bmNvbmZpZ3VyYWJsZXNLZXk7XG4gICAgZnVuY3Rpb24gcHJvcGVydHlQYXRjaCgpIHtcbiAgICAgICAgem9uZVN5bWJvbCA9IFpvbmUuX19zeW1ib2xfXztcbiAgICAgICAgX2RlZmluZVByb3BlcnR5ID0gT2JqZWN0W3pvbmVTeW1ib2woJ2RlZmluZVByb3BlcnR5JyldID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuICAgICAgICBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0W3pvbmVTeW1ib2woJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicpXSA9XG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAgICAgICBfY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbiAgICAgICAgdW5jb25maWd1cmFibGVzS2V5ID0gem9uZVN5bWJvbCgndW5jb25maWd1cmFibGVzJyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICAgIGlmIChpc1VuY29uZmlndXJhYmxlKG9iaiwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgYXNzaWduIHRvIHJlYWQgb25seSBwcm9wZXJ0eSBcXCcnICsgcHJvcCArICdcXCcgb2YgJyArIG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxDb25maWd1cmFibGVGbGFnID0gZGVzYy5jb25maWd1cmFibGU7XG4gICAgICAgICAgICBpZiAocHJvcCAhPT0gJ3Byb3RvdHlwZScpIHtcbiAgICAgICAgICAgICAgICBkZXNjID0gcmV3cml0ZURlc2NyaXB0b3Iob2JqLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfdHJ5RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjLCBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcpO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmosIHByb3BzKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHByb3BzW3Byb3BdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocHJvcHMpOyBfaSA8IF9iLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBzeW0gPSBfYltfaV07XG4gICAgICAgICAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3BzLCBzeW0pO1xuICAgICAgICAgICAgICAgIC8vIFNpbmNlIGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCByZXR1cm5zICphbGwqIHN5bWJvbHMsXG4gICAgICAgICAgICAgICAgLy8gaW5jbHVkaW5nIG5vbi1lbnVtZXJhYmxlIG9uZXMsIHJldHJpZXZlIHByb3BlcnR5IGRlc2NyaXB0b3IgYW5kIGNoZWNrXG4gICAgICAgICAgICAgICAgLy8gZW51bWVyYWJpbGl0eSB0aGVyZS4gUHJvY2VlZCB3aXRoIHRoZSByZXdyaXRlIG9ubHkgd2hlbiBhIHByb3BlcnR5IGlzXG4gICAgICAgICAgICAgICAgLy8gZW51bWVyYWJsZSB0byBtYWtlIHRoZSBsb2dpYyBjb25zaXN0ZW50IHdpdGggdGhlIHdheSByZWd1bGFyXG4gICAgICAgICAgICAgICAgLy8gcHJvcGVydGllcyBhcmUgcmV0cmlldmVkICh2aWEgYE9iamVjdC5rZXlzYCwgd2hpY2ggcmVzcGVjdHNcbiAgICAgICAgICAgICAgICAvLyBgZW51bWVyYWJsZTogZmFsc2VgIGZsYWcpLiBNb3JlIGluZm9ybWF0aW9uOlxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvRW51bWVyYWJpbGl0eV9hbmRfb3duZXJzaGlwX29mX3Byb3BlcnRpZXMjcmV0cmlldmFsXG4gICAgICAgICAgICAgICAgaWYgKGRlc2MgPT09IG51bGwgfHwgZGVzYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVzYy5lbnVtZXJhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHN5bSwgcHJvcHNbc3ltXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmNyZWF0ZSA9IGZ1bmN0aW9uIChwcm90bywgcHJvcGVydGllc09iamVjdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzT2JqZWN0ID09PSAnb2JqZWN0JyAmJiAhT2JqZWN0LmlzRnJvemVuKHByb3BlcnRpZXNPYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllc09iamVjdCkuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzT2JqZWN0W3Byb3BdID0gcmV3cml0ZURlc2NyaXB0b3IocHJvdG8sIHByb3AsIHByb3BlcnRpZXNPYmplY3RbcHJvcF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9jcmVhdGUocHJvdG8sIHByb3BlcnRpZXNPYmplY3QpO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG9iaiwgcHJvcCkge1xuICAgICAgICAgICAgdmFyIGRlc2MgPSBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcCk7XG4gICAgICAgICAgICBpZiAoZGVzYyAmJiBpc1VuY29uZmlndXJhYmxlKG9iaiwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlc2M7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9yZWRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYykge1xuICAgICAgICB2YXIgb3JpZ2luYWxDb25maWd1cmFibGVGbGFnID0gZGVzYy5jb25maWd1cmFibGU7XG4gICAgICAgIGRlc2MgPSByZXdyaXRlRGVzY3JpcHRvcihvYmosIHByb3AsIGRlc2MpO1xuICAgICAgICByZXR1cm4gX3RyeURlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYywgb3JpZ2luYWxDb25maWd1cmFibGVGbGFnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNVbmNvbmZpZ3VyYWJsZShvYmosIHByb3ApIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmpbdW5jb25maWd1cmFibGVzS2V5XSAmJiBvYmpbdW5jb25maWd1cmFibGVzS2V5XVtwcm9wXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmV3cml0ZURlc2NyaXB0b3Iob2JqLCBwcm9wLCBkZXNjKSB7XG4gICAgICAgIC8vIGlzc3VlLTkyNywgaWYgdGhlIGRlc2MgaXMgZnJvemVuLCBkb24ndCB0cnkgdG8gY2hhbmdlIHRoZSBkZXNjXG4gICAgICAgIGlmICghT2JqZWN0LmlzRnJvemVuKGRlc2MpKSB7XG4gICAgICAgICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkZXNjLmNvbmZpZ3VyYWJsZSkge1xuICAgICAgICAgICAgLy8gaXNzdWUtOTI3LCBpZiB0aGUgb2JqIGlzIGZyb3plbiwgZG9uJ3QgdHJ5IHRvIHNldCB0aGUgZGVzYyB0byBvYmpcbiAgICAgICAgICAgIGlmICghb2JqW3VuY29uZmlndXJhYmxlc0tleV0gJiYgIU9iamVjdC5pc0Zyb3plbihvYmopKSB7XG4gICAgICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KG9iaiwgdW5jb25maWd1cmFibGVzS2V5LCB7IHdyaXRhYmxlOiB0cnVlLCB2YWx1ZToge30gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob2JqW3VuY29uZmlndXJhYmxlc0tleV0pIHtcbiAgICAgICAgICAgICAgICBvYmpbdW5jb25maWd1cmFibGVzS2V5XVtwcm9wXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlc2M7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF90cnlEZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MsIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gY2FzZSBvZiBlcnJvcnMsIHdoZW4gdGhlIGNvbmZpZ3VyYWJsZSBmbGFnIHdhcyBsaWtlbHkgc2V0IGJ5IHJld3JpdGVEZXNjcmlwdG9yKCksXG4gICAgICAgICAgICAgICAgLy8gbGV0J3MgcmV0cnkgd2l0aCB0aGUgb3JpZ2luYWwgZmxhZyB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxDb25maWd1cmFibGVGbGFnID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkZXNjLmNvbmZpZ3VyYWJsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gb3JpZ2luYWxDb25maWd1cmFibGVGbGFnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3dhbGxvd0Vycm9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSAnY3JlYXRlZENhbGxiYWNrJyB8fCBwcm9wID09PSAnYXR0YWNoZWRDYWxsYmFjaycgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3AgPT09ICdkZXRhY2hlZENhbGxiYWNrJyB8fCBwcm9wID09PSAnYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2Ugb25seSBzd2FsbG93IHRoZSBlcnJvciBpbiByZWdpc3RlckVsZW1lbnQgcGF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIHdvcmsgYXJvdW5kIHNpbmNlIHNvbWUgYXBwbGljYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmYWlsIGlmIHdlIHRocm93IHRoZSBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dhbGxvd0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN3YWxsb3dFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQEppYUxpUGFzc2lvbiwgU29tZSBhcHBsaWNhdGlvbiBzdWNoIGFzIGByZWdpc3RlckVsZW1lbnRgIHBhdGNoXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0aWxsIG5lZWQgdG8gc3dhbGxvdyB0aGUgZXJyb3IsIGluIHRoZSBmdXR1cmUgYWZ0ZXIgdGhlc2UgYXBwbGljYXRpb25zXG4gICAgICAgICAgICAgICAgICAgIC8vIGFyZSB1cGRhdGVkLCB0aGUgZm9sbG93aW5nIGxvZ2ljIGNhbiBiZSByZW1vdmVkLlxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzY0pzb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY0pzb24gPSBKU09OLnN0cmluZ2lmeShkZXNjKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NKc29uID0gZGVzYy50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXR0ZW1wdGluZyB0byBjb25maWd1cmUgJ1wiLmNvbmNhdChwcm9wLCBcIicgd2l0aCBkZXNjcmlwdG9yICdcIikuY29uY2F0KGRlc2NKc29uLCBcIicgb24gb2JqZWN0ICdcIikuY29uY2F0KG9iaiwgXCInIGFuZCBnb3QgZXJyb3IsIGdpdmluZyB1cDogXCIpLmNvbmNhdChlcnJvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGV2ZW50VGFyZ2V0TGVnYWN5UGF0Y2goX2dsb2JhbCwgYXBpKSB7XG4gICAgICAgIHZhciBfYiA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCksIGV2ZW50TmFtZXMgPSBfYi5ldmVudE5hbWVzLCBnbG9iYWxTb3VyY2VzID0gX2IuZ2xvYmFsU291cmNlcywgem9uZVN5bWJvbEV2ZW50TmFtZXMgPSBfYi56b25lU3ltYm9sRXZlbnROYW1lcywgVFJVRV9TVFIgPSBfYi5UUlVFX1NUUiwgRkFMU0VfU1RSID0gX2IuRkFMU0VfU1RSLCBaT05FX1NZTUJPTF9QUkVGSVggPSBfYi5aT05FX1NZTUJPTF9QUkVGSVg7XG4gICAgICAgIHZhciBXVEZfSVNTVUVfNTU1ID0gJ0FuY2hvcixBcmVhLEF1ZGlvLEJSLEJhc2UsQmFzZUZvbnQsQm9keSxCdXR0b24sQ2FudmFzLENvbnRlbnQsRExpc3QsRGlyZWN0b3J5LERpdixFbWJlZCxGaWVsZFNldCxGb250LEZvcm0sRnJhbWUsRnJhbWVTZXQsSFIsSGVhZCxIZWFkaW5nLEh0bWwsSUZyYW1lLEltYWdlLElucHV0LEtleWdlbixMSSxMYWJlbCxMZWdlbmQsTGluayxNYXAsTWFycXVlZSxNZWRpYSxNZW51LE1ldGEsTWV0ZXIsTW9kLE9MaXN0LE9iamVjdCxPcHRHcm91cCxPcHRpb24sT3V0cHV0LFBhcmFncmFwaCxQcmUsUHJvZ3Jlc3MsUXVvdGUsU2NyaXB0LFNlbGVjdCxTb3VyY2UsU3BhbixTdHlsZSxUYWJsZUNhcHRpb24sVGFibGVDZWxsLFRhYmxlQ29sLFRhYmxlLFRhYmxlUm93LFRhYmxlU2VjdGlvbixUZXh0QXJlYSxUaXRsZSxUcmFjayxVTGlzdCxVbmtub3duLFZpZGVvJztcbiAgICAgICAgdmFyIE5PX0VWRU5UX1RBUkdFVCA9ICdBcHBsaWNhdGlvbkNhY2hlLEV2ZW50U291cmNlLEZpbGVSZWFkZXIsSW5wdXRNZXRob2RDb250ZXh0LE1lZGlhQ29udHJvbGxlcixNZXNzYWdlUG9ydCxOb2RlLFBlcmZvcm1hbmNlLFNWR0VsZW1lbnRJbnN0YW5jZSxTaGFyZWRXb3JrZXIsVGV4dFRyYWNrLFRleHRUcmFja0N1ZSxUZXh0VHJhY2tMaXN0LFdlYktpdE5hbWVkRmxvdyxXaW5kb3csV29ya2VyLFdvcmtlckdsb2JhbFNjb3BlLFhNTEh0dHBSZXF1ZXN0LFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQsWE1MSHR0cFJlcXVlc3RVcGxvYWQsSURCUmVxdWVzdCxJREJPcGVuREJSZXF1ZXN0LElEQkRhdGFiYXNlLElEQlRyYW5zYWN0aW9uLElEQkN1cnNvcixEQkluZGV4LFdlYlNvY2tldCdcbiAgICAgICAgICAgIC5zcGxpdCgnLCcpO1xuICAgICAgICB2YXIgRVZFTlRfVEFSR0VUID0gJ0V2ZW50VGFyZ2V0JztcbiAgICAgICAgdmFyIGFwaXMgPSBbXTtcbiAgICAgICAgdmFyIGlzV3RmID0gX2dsb2JhbFsnd3RmJ107XG4gICAgICAgIHZhciBXVEZfSVNTVUVfNTU1X0FSUkFZID0gV1RGX0lTU1VFXzU1NS5zcGxpdCgnLCcpO1xuICAgICAgICBpZiAoaXNXdGYpIHtcbiAgICAgICAgICAgIC8vIFdvcmthcm91bmQgZm9yOiBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL3RyYWNpbmctZnJhbWV3b3JrL2lzc3Vlcy81NTVcbiAgICAgICAgICAgIGFwaXMgPSBXVEZfSVNTVUVfNTU1X0FSUkFZLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gJ0hUTUwnICsgdiArICdFbGVtZW50JzsgfSkuY29uY2F0KE5PX0VWRU5UX1RBUkdFVCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX2dsb2JhbFtFVkVOVF9UQVJHRVRdKSB7XG4gICAgICAgICAgICBhcGlzLnB1c2goRVZFTlRfVEFSR0VUKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vdGU6IEV2ZW50VGFyZ2V0IGlzIG5vdCBhdmFpbGFibGUgaW4gYWxsIGJyb3dzZXJzLFxuICAgICAgICAgICAgLy8gaWYgaXQncyBub3QgYXZhaWxhYmxlLCB3ZSBpbnN0ZWFkIHBhdGNoIHRoZSBBUElzIGluIHRoZSBJREwgdGhhdCBpbmhlcml0IGZyb20gRXZlbnRUYXJnZXRcbiAgICAgICAgICAgIGFwaXMgPSBOT19FVkVOVF9UQVJHRVQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzRGlzYWJsZUlFQ2hlY2sgPSBfZ2xvYmFsWydfX1pvbmVfZGlzYWJsZV9JRV9jaGVjayddIHx8IGZhbHNlO1xuICAgICAgICB2YXIgaXNFbmFibGVDcm9zc0NvbnRleHRDaGVjayA9IF9nbG9iYWxbJ19fWm9uZV9lbmFibGVfY3Jvc3NfY29udGV4dF9jaGVjayddIHx8IGZhbHNlO1xuICAgICAgICB2YXIgaWVPckVkZ2UgPSBhcGkuaXNJRU9yRWRnZSgpO1xuICAgICAgICB2YXIgQUREX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSA9ICcuYWRkRXZlbnRMaXN0ZW5lcjonO1xuICAgICAgICB2YXIgRlVOQ1RJT05fV1JBUFBFUiA9ICdbb2JqZWN0IEZ1bmN0aW9uV3JhcHBlcl0nO1xuICAgICAgICB2YXIgQlJPV1NFUl9UT09MUyA9ICdmdW5jdGlvbiBfX0JST1dTRVJUT09MU19DT05TT0xFX1NBRkVGVU5DKCkgeyBbbmF0aXZlIGNvZGVdIH0nO1xuICAgICAgICB2YXIgcG9pbnRlckV2ZW50c01hcCA9IHtcbiAgICAgICAgICAgICdNU1BvaW50ZXJDYW5jZWwnOiAncG9pbnRlcmNhbmNlbCcsXG4gICAgICAgICAgICAnTVNQb2ludGVyRG93bic6ICdwb2ludGVyZG93bicsXG4gICAgICAgICAgICAnTVNQb2ludGVyRW50ZXInOiAncG9pbnRlcmVudGVyJyxcbiAgICAgICAgICAgICdNU1BvaW50ZXJIb3Zlcic6ICdwb2ludGVyaG92ZXInLFxuICAgICAgICAgICAgJ01TUG9pbnRlckxlYXZlJzogJ3BvaW50ZXJsZWF2ZScsXG4gICAgICAgICAgICAnTVNQb2ludGVyTW92ZSc6ICdwb2ludGVybW92ZScsXG4gICAgICAgICAgICAnTVNQb2ludGVyT3V0JzogJ3BvaW50ZXJvdXQnLFxuICAgICAgICAgICAgJ01TUG9pbnRlck92ZXInOiAncG9pbnRlcm92ZXInLFxuICAgICAgICAgICAgJ01TUG9pbnRlclVwJzogJ3BvaW50ZXJ1cCdcbiAgICAgICAgfTtcbiAgICAgICAgLy8gIHByZWRlZmluZSBhbGwgX196b25lX3N5bWJvbF9fICsgZXZlbnROYW1lICsgdHJ1ZS9mYWxzZSBzdHJpbmdcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnROYW1lc1tpXTtcbiAgICAgICAgICAgIHZhciBmYWxzZUV2ZW50TmFtZSA9IGV2ZW50TmFtZSArIEZBTFNFX1NUUjtcbiAgICAgICAgICAgIHZhciB0cnVlRXZlbnROYW1lID0gZXZlbnROYW1lICsgVFJVRV9TVFI7XG4gICAgICAgICAgICB2YXIgc3ltYm9sID0gWk9ORV9TWU1CT0xfUFJFRklYICsgZmFsc2VFdmVudE5hbWU7XG4gICAgICAgICAgICB2YXIgc3ltYm9sQ2FwdHVyZSA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIHRydWVFdmVudE5hbWU7XG4gICAgICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdID0ge307XG4gICAgICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdW0ZBTFNFX1NUUl0gPSBzeW1ib2w7XG4gICAgICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdW1RSVUVfU1RSXSA9IHN5bWJvbENhcHR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gIHByZWRlZmluZSBhbGwgdGFzay5zb3VyY2Ugc3RyaW5nXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgV1RGX0lTU1VFXzU1NV9BUlJBWS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IFdURl9JU1NVRV81NTVfQVJSQVlbaV07XG4gICAgICAgICAgICB2YXIgdGFyZ2V0cyA9IGdsb2JhbFNvdXJjZXNbdGFyZ2V0XSA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBldmVudE5hbWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50TmFtZXNbal07XG4gICAgICAgICAgICAgICAgdGFyZ2V0c1tldmVudE5hbWVdID0gdGFyZ2V0ICsgQUREX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSArIGV2ZW50TmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY2hlY2tJRUFuZENyb3NzQ29udGV4dCA9IGZ1bmN0aW9uIChuYXRpdmVEZWxlZ2F0ZSwgZGVsZWdhdGUsIHRhcmdldCwgYXJncykge1xuICAgICAgICAgICAgaWYgKCFpc0Rpc2FibGVJRUNoZWNrICYmIGllT3JFZGdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRW5hYmxlQ3Jvc3NDb250ZXh0Q2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0U3RyaW5nID0gZGVsZWdhdGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodGVzdFN0cmluZyA9PT0gRlVOQ1RJT05fV1JBUFBFUiB8fCB0ZXN0U3RyaW5nID09IEJST1dTRVJfVE9PTFMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVsZWdhdGUuYXBwbHkodGFyZ2V0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWxlZ2F0ZS5hcHBseSh0YXJnZXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdFN0cmluZyA9IGRlbGVnYXRlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgodGVzdFN0cmluZyA9PT0gRlVOQ1RJT05fV1JBUFBFUiB8fCB0ZXN0U3RyaW5nID09IEJST1dTRVJfVE9PTFMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWxlZ2F0ZS5hcHBseSh0YXJnZXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNFbmFibGVDcm9zc0NvbnRleHRDaGVjaykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGVnYXRlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWxlZ2F0ZS5hcHBseSh0YXJnZXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBhcGlUeXBlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFwaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0eXBlID0gX2dsb2JhbFthcGlzW2ldXTtcbiAgICAgICAgICAgIGFwaVR5cGVzLnB1c2godHlwZSAmJiB0eXBlLnByb3RvdHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdmggaXMgdmFsaWRhdGVIYW5kbGVyIHRvIGNoZWNrIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgLy8gaXMgdmFsaWQgb3Igbm90KGZvciBzZWN1cml0eSBjaGVjaylcbiAgICAgICAgYXBpLnBhdGNoRXZlbnRUYXJnZXQoX2dsb2JhbCwgYXBpLCBhcGlUeXBlcywge1xuICAgICAgICAgICAgdmg6IGNoZWNrSUVBbmRDcm9zc0NvbnRleHQsXG4gICAgICAgICAgICB0cmFuc2ZlckV2ZW50TmFtZTogZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBwb2ludGVyRXZlbnROYW1lID0gcG9pbnRlckV2ZW50c01hcFtldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiBwb2ludGVyRXZlbnROYW1lIHx8IGV2ZW50TmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFpvbmVbYXBpLnN5bWJvbCgncGF0Y2hFdmVudFRhcmdldCcpXSA9ICEhX2dsb2JhbFtFVkVOVF9UQVJHRVRdO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgLy8gd2UgaGF2ZSB0byBwYXRjaCB0aGUgaW5zdGFuY2Ugc2luY2UgdGhlIHByb3RvIGlzIG5vbi1jb25maWd1cmFibGVcbiAgICBmdW5jdGlvbiBhcHBseShhcGksIF9nbG9iYWwpIHtcbiAgICAgICAgdmFyIF9iID0gYXBpLmdldEdsb2JhbE9iamVjdHMoKSwgQUREX0VWRU5UX0xJU1RFTkVSX1NUUiA9IF9iLkFERF9FVkVOVF9MSVNURU5FUl9TVFIsIFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIgPSBfYi5SRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSO1xuICAgICAgICB2YXIgV1MgPSBfZ2xvYmFsLldlYlNvY2tldDtcbiAgICAgICAgLy8gT24gU2FmYXJpIHdpbmRvdy5FdmVudFRhcmdldCBkb2Vzbid0IGV4aXN0IHNvIG5lZWQgdG8gcGF0Y2ggV1MgYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgLy8gT24gb2xkZXIgQ2hyb21lLCBubyBuZWVkIHNpbmNlIEV2ZW50VGFyZ2V0IHdhcyBhbHJlYWR5IHBhdGNoZWRcbiAgICAgICAgaWYgKCFfZ2xvYmFsLkV2ZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICBhcGkucGF0Y2hFdmVudFRhcmdldChfZ2xvYmFsLCBhcGksIFtXUy5wcm90b3R5cGVdKTtcbiAgICAgICAgfVxuICAgICAgICBfZ2xvYmFsLldlYlNvY2tldCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgICAgICB2YXIgc29ja2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBuZXcgV1MoeCwgeSkgOiBuZXcgV1MoeCk7XG4gICAgICAgICAgICB2YXIgcHJveHlTb2NrZXQ7XG4gICAgICAgICAgICB2YXIgcHJveHlTb2NrZXRQcm90bztcbiAgICAgICAgICAgIC8vIFNhZmFyaSA3LjAgaGFzIG5vbi1jb25maWd1cmFibGUgb3duICdvbm1lc3NhZ2UnIGFuZCBmcmllbmRzIHByb3BlcnRpZXMgb24gdGhlIHNvY2tldCBpbnN0YW5jZVxuICAgICAgICAgICAgdmFyIG9ubWVzc2FnZURlc2MgPSBhcGkuT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvY2tldCwgJ29ubWVzc2FnZScpO1xuICAgICAgICAgICAgaWYgKG9ubWVzc2FnZURlc2MgJiYgb25tZXNzYWdlRGVzYy5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcHJveHlTb2NrZXQgPSBhcGkuT2JqZWN0Q3JlYXRlKHNvY2tldCk7XG4gICAgICAgICAgICAgICAgLy8gc29ja2V0IGhhdmUgb3duIHByb3BlcnR5IGRlc2NyaXB0b3IgJ29ub3BlbicsICdvbm1lc3NhZ2UnLCAnb25jbG9zZScsICdvbmVycm9yJ1xuICAgICAgICAgICAgICAgIC8vIGJ1dCBwcm94eVNvY2tldCBub3QsIHNvIHdlIHdpbGwga2VlcCBzb2NrZXQgYXMgcHJvdG90eXBlIGFuZCBwYXNzIGl0IHRvXG4gICAgICAgICAgICAgICAgLy8gcGF0Y2hPblByb3BlcnRpZXMgbWV0aG9kXG4gICAgICAgICAgICAgICAgcHJveHlTb2NrZXRQcm90byA9IHNvY2tldDtcbiAgICAgICAgICAgICAgICBbQUREX0VWRU5UX0xJU1RFTkVSX1NUUiwgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUiwgJ3NlbmQnLCAnY2xvc2UnXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm94eVNvY2tldFtwcm9wTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IGFwaS5BcnJheVNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wTmFtZSA9PT0gQUREX0VWRU5UX0xJU1RFTkVSX1NUUiB8fCBwcm9wTmFtZSA9PT0gUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBhcmdzLmxlbmd0aCA+IDAgPyBhcmdzWzBdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5U3ltYm9sID0gWm9uZS5fX3N5bWJvbF9fKCdPTl9QUk9QRVJUWScgKyBldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXRbcHJvcGVydHlTeW1ib2xdID0gcHJveHlTb2NrZXRbcHJvcGVydHlTeW1ib2xdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzb2NrZXRbcHJvcE5hbWVdLmFwcGx5KHNvY2tldCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gcGF0Y2ggdGhlIHJlYWwgc29ja2V0XG4gICAgICAgICAgICAgICAgcHJveHlTb2NrZXQgPSBzb2NrZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcGkucGF0Y2hPblByb3BlcnRpZXMocHJveHlTb2NrZXQsIFsnY2xvc2UnLCAnZXJyb3InLCAnbWVzc2FnZScsICdvcGVuJ10sIHByb3h5U29ja2V0UHJvdG8pO1xuICAgICAgICAgICAgcmV0dXJuIHByb3h5U29ja2V0O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZ2xvYmFsV2ViU29ja2V0ID0gX2dsb2JhbFsnV2ViU29ja2V0J107XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gV1MpIHtcbiAgICAgICAgICAgIGdsb2JhbFdlYlNvY2tldFtwcm9wXSA9IFdTW3Byb3BdO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHByb3BlcnR5RGVzY3JpcHRvckxlZ2FjeVBhdGNoKGFwaSwgX2dsb2JhbCkge1xuICAgICAgICB2YXIgX2IgPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpLCBpc05vZGUgPSBfYi5pc05vZGUsIGlzTWl4ID0gX2IuaXNNaXg7XG4gICAgICAgIGlmIChpc05vZGUgJiYgIWlzTWl4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjYW5QYXRjaFZpYVByb3BlcnR5RGVzY3JpcHRvcihhcGksIF9nbG9iYWwpKSB7XG4gICAgICAgICAgICB2YXIgc3VwcG9ydHNXZWJTb2NrZXQgPSB0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgICAgIC8vIFNhZmFyaSwgQW5kcm9pZCBicm93c2VycyAoSmVsbHkgQmVhbilcbiAgICAgICAgICAgIHBhdGNoVmlhQ2FwdHVyaW5nQWxsVGhlRXZlbnRzKGFwaSk7XG4gICAgICAgICAgICBhcGkucGF0Y2hDbGFzcygnWE1MSHR0cFJlcXVlc3QnKTtcbiAgICAgICAgICAgIGlmIChzdXBwb3J0c1dlYlNvY2tldCkge1xuICAgICAgICAgICAgICAgIGFwcGx5KGFwaSwgX2dsb2JhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBab25lW2FwaS5zeW1ib2woJ3BhdGNoRXZlbnRzJyldID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjYW5QYXRjaFZpYVByb3BlcnR5RGVzY3JpcHRvcihhcGksIF9nbG9iYWwpIHtcbiAgICAgICAgdmFyIF9iID0gYXBpLmdldEdsb2JhbE9iamVjdHMoKSwgaXNCcm93c2VyID0gX2IuaXNCcm93c2VyLCBpc01peCA9IF9iLmlzTWl4O1xuICAgICAgICBpZiAoKGlzQnJvd3NlciB8fCBpc01peCkgJiZcbiAgICAgICAgICAgICFhcGkuT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgJ29uY2xpY2snKSAmJlxuICAgICAgICAgICAgdHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBXZWJLaXQgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNDM2NFxuICAgICAgICAgICAgLy8gSURMIGludGVyZmFjZSBhdHRyaWJ1dGVzIGFyZSBub3QgY29uZmlndXJhYmxlXG4gICAgICAgICAgICB2YXIgZGVzYyA9IGFwaS5PYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRWxlbWVudC5wcm90b3R5cGUsICdvbmNsaWNrJyk7XG4gICAgICAgICAgICBpZiAoZGVzYyAmJiAhZGVzYy5jb25maWd1cmFibGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgLy8gdHJ5IHRvIHVzZSBvbmNsaWNrIHRvIGRldGVjdCB3aGV0aGVyIHdlIGNhbiBwYXRjaCB2aWEgcHJvcGVydHlEZXNjcmlwdG9yXG4gICAgICAgICAgICAvLyBiZWNhdXNlIFhNTEh0dHBSZXF1ZXN0IGlzIG5vdCBhdmFpbGFibGUgaW4gc2VydmljZSB3b3JrZXJcbiAgICAgICAgICAgIGlmIChkZXNjKSB7XG4gICAgICAgICAgICAgICAgYXBpLk9iamVjdERlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCAnb25jbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAhIWRpdi5vbmNsaWNrO1xuICAgICAgICAgICAgICAgIGFwaS5PYmplY3REZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgJ29uY2xpY2snLCBkZXNjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBYTUxIdHRwUmVxdWVzdCA9IF9nbG9iYWxbJ1hNTEh0dHBSZXF1ZXN0J107XG4gICAgICAgIGlmICghWE1MSHR0cFJlcXVlc3QpIHtcbiAgICAgICAgICAgIC8vIFhNTEh0dHBSZXF1ZXN0IGlzIG5vdCBhdmFpbGFibGUgaW4gc2VydmljZSB3b3JrZXJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgT05fUkVBRFlfU1RBVEVfQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgICAgIHZhciBYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSA9IFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZTtcbiAgICAgICAgdmFyIHhockRlc2MgPSBhcGkuT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCBPTl9SRUFEWV9TVEFURV9DSEFOR0UpO1xuICAgICAgICAvLyBhZGQgZW51bWVyYWJsZSBhbmQgY29uZmlndXJhYmxlIGhlcmUgYmVjYXVzZSBpbiBvcGVyYVxuICAgICAgICAvLyBieSBkZWZhdWx0IFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vbnJlYWR5c3RhdGVjaGFuZ2UgaXMgdW5kZWZpbmVkXG4gICAgICAgIC8vIHdpdGhvdXQgYWRkaW5nIGVudW1lcmFibGUgYW5kIGNvbmZpZ3VyYWJsZSB3aWxsIGNhdXNlIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlXG4gICAgICAgIC8vIGFuZCBpZiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub25yZWFkeXN0YXRlY2hhbmdlIGlzIHVuZGVmaW5lZCxcbiAgICAgICAgLy8gd2Ugc2hvdWxkIHNldCBhIHJlYWwgZGVzYyBpbnN0ZWFkIGEgZmFrZSBvbmVcbiAgICAgICAgaWYgKHhockRlc2MpIHtcbiAgICAgICAgICAgIGFwaS5PYmplY3REZWZpbmVQcm9wZXJ0eShYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgT05fUkVBRFlfU1RBVEVfQ0hBTkdFLCB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICEhcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZTtcbiAgICAgICAgICAgIC8vIHJlc3RvcmUgb3JpZ2luYWwgZGVzY1xuICAgICAgICAgICAgYXBpLk9iamVjdERlZmluZVByb3BlcnR5KFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCBPTl9SRUFEWV9TVEFURV9DSEFOR0UsIHhockRlc2MgfHwge30pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBTWU1CT0xfRkFLRV9PTlJFQURZU1RBVEVDSEFOR0VfMSA9IGFwaS5zeW1ib2woJ2Zha2UnKTtcbiAgICAgICAgICAgIGFwaS5PYmplY3REZWZpbmVQcm9wZXJ0eShYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgT05fUkVBRFlfU1RBVEVfQ0hBTkdFLCB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW1NZTUJPTF9GQUtFX09OUkVBRFlTVEFURUNIQU5HRV8xXTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbU1lNQk9MX0ZBS0VfT05SRUFEWVNUQVRFQ0hBTkdFXzFdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB2YXIgZGV0ZWN0RnVuYyA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBkZXRlY3RGdW5jO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlcVtTWU1CT0xfRkFLRV9PTlJFQURZU1RBVEVDSEFOR0VfMV0gPT09IGRldGVjdEZ1bmM7XG4gICAgICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGdsb2JhbEV2ZW50SGFuZGxlcnNFdmVudE5hbWVzID0gW1xuICAgICAgICAnYWJvcnQnLFxuICAgICAgICAnYW5pbWF0aW9uY2FuY2VsJyxcbiAgICAgICAgJ2FuaW1hdGlvbmVuZCcsXG4gICAgICAgICdhbmltYXRpb25pdGVyYXRpb24nLFxuICAgICAgICAnYXV4Y2xpY2snLFxuICAgICAgICAnYmVmb3JlaW5wdXQnLFxuICAgICAgICAnYmx1cicsXG4gICAgICAgICdjYW5jZWwnLFxuICAgICAgICAnY2FucGxheScsXG4gICAgICAgICdjYW5wbGF5dGhyb3VnaCcsXG4gICAgICAgICdjaGFuZ2UnLFxuICAgICAgICAnY29tcG9zaXRpb25zdGFydCcsXG4gICAgICAgICdjb21wb3NpdGlvbnVwZGF0ZScsXG4gICAgICAgICdjb21wb3NpdGlvbmVuZCcsXG4gICAgICAgICdjdWVjaGFuZ2UnLFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICAnY2xvc2UnLFxuICAgICAgICAnY29udGV4dG1lbnUnLFxuICAgICAgICAnY3VyZWNoYW5nZScsXG4gICAgICAgICdkYmxjbGljaycsXG4gICAgICAgICdkcmFnJyxcbiAgICAgICAgJ2RyYWdlbmQnLFxuICAgICAgICAnZHJhZ2VudGVyJyxcbiAgICAgICAgJ2RyYWdleGl0JyxcbiAgICAgICAgJ2RyYWdsZWF2ZScsXG4gICAgICAgICdkcmFnb3ZlcicsXG4gICAgICAgICdkcm9wJyxcbiAgICAgICAgJ2R1cmF0aW9uY2hhbmdlJyxcbiAgICAgICAgJ2VtcHRpZWQnLFxuICAgICAgICAnZW5kZWQnLFxuICAgICAgICAnZXJyb3InLFxuICAgICAgICAnZm9jdXMnLFxuICAgICAgICAnZm9jdXNpbicsXG4gICAgICAgICdmb2N1c291dCcsXG4gICAgICAgICdnb3Rwb2ludGVyY2FwdHVyZScsXG4gICAgICAgICdpbnB1dCcsXG4gICAgICAgICdpbnZhbGlkJyxcbiAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICAna2V5cHJlc3MnLFxuICAgICAgICAna2V5dXAnLFxuICAgICAgICAnbG9hZCcsXG4gICAgICAgICdsb2Fkc3RhcnQnLFxuICAgICAgICAnbG9hZGVkZGF0YScsXG4gICAgICAgICdsb2FkZWRtZXRhZGF0YScsXG4gICAgICAgICdsb3N0cG9pbnRlcmNhcHR1cmUnLFxuICAgICAgICAnbW91c2Vkb3duJyxcbiAgICAgICAgJ21vdXNlZW50ZXInLFxuICAgICAgICAnbW91c2VsZWF2ZScsXG4gICAgICAgICdtb3VzZW1vdmUnLFxuICAgICAgICAnbW91c2VvdXQnLFxuICAgICAgICAnbW91c2VvdmVyJyxcbiAgICAgICAgJ21vdXNldXAnLFxuICAgICAgICAnbW91c2V3aGVlbCcsXG4gICAgICAgICdvcmllbnRhdGlvbmNoYW5nZScsXG4gICAgICAgICdwYXVzZScsXG4gICAgICAgICdwbGF5JyxcbiAgICAgICAgJ3BsYXlpbmcnLFxuICAgICAgICAncG9pbnRlcmNhbmNlbCcsXG4gICAgICAgICdwb2ludGVyZG93bicsXG4gICAgICAgICdwb2ludGVyZW50ZXInLFxuICAgICAgICAncG9pbnRlcmxlYXZlJyxcbiAgICAgICAgJ3BvaW50ZXJsb2NrY2hhbmdlJyxcbiAgICAgICAgJ21venBvaW50ZXJsb2NrY2hhbmdlJyxcbiAgICAgICAgJ3dlYmtpdHBvaW50ZXJsb2NrZXJjaGFuZ2UnLFxuICAgICAgICAncG9pbnRlcmxvY2tlcnJvcicsXG4gICAgICAgICdtb3pwb2ludGVybG9ja2Vycm9yJyxcbiAgICAgICAgJ3dlYmtpdHBvaW50ZXJsb2NrZXJyb3InLFxuICAgICAgICAncG9pbnRlcm1vdmUnLFxuICAgICAgICAncG9pbnRvdXQnLFxuICAgICAgICAncG9pbnRlcm92ZXInLFxuICAgICAgICAncG9pbnRlcnVwJyxcbiAgICAgICAgJ3Byb2dyZXNzJyxcbiAgICAgICAgJ3JhdGVjaGFuZ2UnLFxuICAgICAgICAncmVzZXQnLFxuICAgICAgICAncmVzaXplJyxcbiAgICAgICAgJ3Njcm9sbCcsXG4gICAgICAgICdzZWVrZWQnLFxuICAgICAgICAnc2Vla2luZycsXG4gICAgICAgICdzZWxlY3QnLFxuICAgICAgICAnc2VsZWN0aW9uY2hhbmdlJyxcbiAgICAgICAgJ3NlbGVjdHN0YXJ0JyxcbiAgICAgICAgJ3Nob3cnLFxuICAgICAgICAnc29ydCcsXG4gICAgICAgICdzdGFsbGVkJyxcbiAgICAgICAgJ3N1Ym1pdCcsXG4gICAgICAgICdzdXNwZW5kJyxcbiAgICAgICAgJ3RpbWV1cGRhdGUnLFxuICAgICAgICAndm9sdW1lY2hhbmdlJyxcbiAgICAgICAgJ3RvdWNoY2FuY2VsJyxcbiAgICAgICAgJ3RvdWNobW92ZScsXG4gICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgJ3RvdWNoZW5kJyxcbiAgICAgICAgJ3RyYW5zaXRpb25jYW5jZWwnLFxuICAgICAgICAndHJhbnNpdGlvbmVuZCcsXG4gICAgICAgICd3YWl0aW5nJyxcbiAgICAgICAgJ3doZWVsJ1xuICAgIF07XG4gICAgdmFyIGRvY3VtZW50RXZlbnROYW1lcyA9IFtcbiAgICAgICAgJ2FmdGVyc2NyaXB0ZXhlY3V0ZScsICdiZWZvcmVzY3JpcHRleGVjdXRlJywgJ0RPTUNvbnRlbnRMb2FkZWQnLCAnZnJlZXplJywgJ2Z1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICAgICAnbW96ZnVsbHNjcmVlbmNoYW5nZScsICd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgJ21zZnVsbHNjcmVlbmNoYW5nZScsICdmdWxsc2NyZWVuZXJyb3InLFxuICAgICAgICAnbW96ZnVsbHNjcmVlbmVycm9yJywgJ3dlYmtpdGZ1bGxzY3JlZW5lcnJvcicsICdtc2Z1bGxzY3JlZW5lcnJvcicsICdyZWFkeXN0YXRlY2hhbmdlJyxcbiAgICAgICAgJ3Zpc2liaWxpdHljaGFuZ2UnLCAncmVzdW1lJ1xuICAgIF07XG4gICAgdmFyIHdpbmRvd0V2ZW50TmFtZXMgPSBbXG4gICAgICAgICdhYnNvbHV0ZWRldmljZW9yaWVudGF0aW9uJyxcbiAgICAgICAgJ2FmdGVyaW5wdXQnLFxuICAgICAgICAnYWZ0ZXJwcmludCcsXG4gICAgICAgICdhcHBpbnN0YWxsZWQnLFxuICAgICAgICAnYmVmb3JlaW5zdGFsbHByb21wdCcsXG4gICAgICAgICdiZWZvcmVwcmludCcsXG4gICAgICAgICdiZWZvcmV1bmxvYWQnLFxuICAgICAgICAnZGV2aWNlbGlnaHQnLFxuICAgICAgICAnZGV2aWNlbW90aW9uJyxcbiAgICAgICAgJ2RldmljZW9yaWVudGF0aW9uJyxcbiAgICAgICAgJ2RldmljZW9yaWVudGF0aW9uYWJzb2x1dGUnLFxuICAgICAgICAnZGV2aWNlcHJveGltaXR5JyxcbiAgICAgICAgJ2hhc2hjaGFuZ2UnLFxuICAgICAgICAnbGFuZ3VhZ2VjaGFuZ2UnLFxuICAgICAgICAnbWVzc2FnZScsXG4gICAgICAgICdtb3piZWZvcmVwYWludCcsXG4gICAgICAgICdvZmZsaW5lJyxcbiAgICAgICAgJ29ubGluZScsXG4gICAgICAgICdwYWludCcsXG4gICAgICAgICdwYWdlc2hvdycsXG4gICAgICAgICdwYWdlaGlkZScsXG4gICAgICAgICdwb3BzdGF0ZScsXG4gICAgICAgICdyZWplY3Rpb25oYW5kbGVkJyxcbiAgICAgICAgJ3N0b3JhZ2UnLFxuICAgICAgICAndW5oYW5kbGVkcmVqZWN0aW9uJyxcbiAgICAgICAgJ3VubG9hZCcsXG4gICAgICAgICd1c2VycHJveGltaXR5JyxcbiAgICAgICAgJ3ZyZGlzcGxheWNvbm5lY3RlZCcsXG4gICAgICAgICd2cmRpc3BsYXlkaXNjb25uZWN0ZWQnLFxuICAgICAgICAndnJkaXNwbGF5cHJlc2VudGNoYW5nZSdcbiAgICBdO1xuICAgIHZhciBodG1sRWxlbWVudEV2ZW50TmFtZXMgPSBbXG4gICAgICAgICdiZWZvcmVjb3B5JywgJ2JlZm9yZWN1dCcsICdiZWZvcmVwYXN0ZScsICdjb3B5JywgJ2N1dCcsICdwYXN0ZScsICdkcmFnc3RhcnQnLCAnbG9hZGVuZCcsXG4gICAgICAgICdhbmltYXRpb25zdGFydCcsICdzZWFyY2gnLCAndHJhbnNpdGlvbnJ1bicsICd0cmFuc2l0aW9uc3RhcnQnLCAnd2Via2l0YW5pbWF0aW9uZW5kJyxcbiAgICAgICAgJ3dlYmtpdGFuaW1hdGlvbml0ZXJhdGlvbicsICd3ZWJraXRhbmltYXRpb25zdGFydCcsICd3ZWJraXR0cmFuc2l0aW9uZW5kJ1xuICAgIF07XG4gICAgdmFyIGllRWxlbWVudEV2ZW50TmFtZXMgPSBbXG4gICAgICAgICdhY3RpdmF0ZScsXG4gICAgICAgICdhZnRlcnVwZGF0ZScsXG4gICAgICAgICdhcmlhcmVxdWVzdCcsXG4gICAgICAgICdiZWZvcmVhY3RpdmF0ZScsXG4gICAgICAgICdiZWZvcmVkZWFjdGl2YXRlJyxcbiAgICAgICAgJ2JlZm9yZWVkaXRmb2N1cycsXG4gICAgICAgICdiZWZvcmV1cGRhdGUnLFxuICAgICAgICAnY2VsbGNoYW5nZScsXG4gICAgICAgICdjb250cm9sc2VsZWN0JyxcbiAgICAgICAgJ2RhdGFhdmFpbGFibGUnLFxuICAgICAgICAnZGF0YXNldGNoYW5nZWQnLFxuICAgICAgICAnZGF0YXNldGNvbXBsZXRlJyxcbiAgICAgICAgJ2Vycm9ydXBkYXRlJyxcbiAgICAgICAgJ2ZpbHRlcmNoYW5nZScsXG4gICAgICAgICdsYXlvdXRjb21wbGV0ZScsXG4gICAgICAgICdsb3NlY2FwdHVyZScsXG4gICAgICAgICdtb3ZlJyxcbiAgICAgICAgJ21vdmVlbmQnLFxuICAgICAgICAnbW92ZXN0YXJ0JyxcbiAgICAgICAgJ3Byb3BlcnR5Y2hhbmdlJyxcbiAgICAgICAgJ3Jlc2l6ZWVuZCcsXG4gICAgICAgICdyZXNpemVzdGFydCcsXG4gICAgICAgICdyb3dlbnRlcicsXG4gICAgICAgICdyb3dleGl0JyxcbiAgICAgICAgJ3Jvd3NkZWxldGUnLFxuICAgICAgICAncm93c2luc2VydGVkJyxcbiAgICAgICAgJ2NvbW1hbmQnLFxuICAgICAgICAnY29tcGFzc25lZWRzY2FsaWJyYXRpb24nLFxuICAgICAgICAnZGVhY3RpdmF0ZScsXG4gICAgICAgICdoZWxwJyxcbiAgICAgICAgJ21zY29udGVudHpvb20nLFxuICAgICAgICAnbXNtYW5pcHVsYXRpb25zdGF0ZWNoYW5nZWQnLFxuICAgICAgICAnbXNnZXN0dXJlY2hhbmdlJyxcbiAgICAgICAgJ21zZ2VzdHVyZWRvdWJsZXRhcCcsXG4gICAgICAgICdtc2dlc3R1cmVlbmQnLFxuICAgICAgICAnbXNnZXN0dXJlaG9sZCcsXG4gICAgICAgICdtc2dlc3R1cmVzdGFydCcsXG4gICAgICAgICdtc2dlc3R1cmV0YXAnLFxuICAgICAgICAnbXNnb3Rwb2ludGVyY2FwdHVyZScsXG4gICAgICAgICdtc2luZXJ0aWFzdGFydCcsXG4gICAgICAgICdtc2xvc3Rwb2ludGVyY2FwdHVyZScsXG4gICAgICAgICdtc3BvaW50ZXJjYW5jZWwnLFxuICAgICAgICAnbXNwb2ludGVyZG93bicsXG4gICAgICAgICdtc3BvaW50ZXJlbnRlcicsXG4gICAgICAgICdtc3BvaW50ZXJob3ZlcicsXG4gICAgICAgICdtc3BvaW50ZXJsZWF2ZScsXG4gICAgICAgICdtc3BvaW50ZXJtb3ZlJyxcbiAgICAgICAgJ21zcG9pbnRlcm91dCcsXG4gICAgICAgICdtc3BvaW50ZXJvdmVyJyxcbiAgICAgICAgJ21zcG9pbnRlcnVwJyxcbiAgICAgICAgJ3BvaW50ZXJvdXQnLFxuICAgICAgICAnbXNzaXRlbW9kZWp1bXBsaXN0aXRlbXJlbW92ZWQnLFxuICAgICAgICAnbXN0aHVtYm5haWxjbGljaycsXG4gICAgICAgICdzdG9wJyxcbiAgICAgICAgJ3N0b3JhZ2Vjb21taXQnXG4gICAgXTtcbiAgICB2YXIgd2ViZ2xFdmVudE5hbWVzID0gWyd3ZWJnbGNvbnRleHRyZXN0b3JlZCcsICd3ZWJnbGNvbnRleHRsb3N0JywgJ3dlYmdsY29udGV4dGNyZWF0aW9uZXJyb3InXTtcbiAgICB2YXIgZm9ybUV2ZW50TmFtZXMgPSBbJ2F1dG9jb21wbGV0ZScsICdhdXRvY29tcGxldGVlcnJvciddO1xuICAgIHZhciBkZXRhaWxFdmVudE5hbWVzID0gWyd0b2dnbGUnXTtcbiAgICB2YXIgZXZlbnROYW1lcyA9IF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgZ2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TmFtZXMsIHRydWUpLCB3ZWJnbEV2ZW50TmFtZXMsIHRydWUpLCBmb3JtRXZlbnROYW1lcywgdHJ1ZSksIGRldGFpbEV2ZW50TmFtZXMsIHRydWUpLCBkb2N1bWVudEV2ZW50TmFtZXMsIHRydWUpLCB3aW5kb3dFdmVudE5hbWVzLCB0cnVlKSwgaHRtbEVsZW1lbnRFdmVudE5hbWVzLCB0cnVlKSwgaWVFbGVtZW50RXZlbnROYW1lcywgdHJ1ZSk7XG4gICAgLy8gV2hlbmV2ZXIgYW55IGV2ZW50TGlzdGVuZXIgZmlyZXMsIHdlIGNoZWNrIHRoZSBldmVudExpc3RlbmVyIHRhcmdldCBhbmQgYWxsIHBhcmVudHNcbiAgICAvLyBmb3IgYG9ud2hhdGV2ZXJgIHByb3BlcnRpZXMgYW5kIHJlcGxhY2UgdGhlbSB3aXRoIHpvbmUtYm91bmQgZnVuY3Rpb25zXG4gICAgLy8gLSBDaHJvbWUgKGZvciBub3cpXG4gICAgZnVuY3Rpb24gcGF0Y2hWaWFDYXB0dXJpbmdBbGxUaGVFdmVudHMoYXBpKSB7XG4gICAgICAgIHZhciB1bmJvdW5kS2V5ID0gYXBpLnN5bWJvbCgndW5ib3VuZCcpO1xuICAgICAgICB2YXIgX2xvb3BfNSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydHkgPSBldmVudE5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIG9ucHJvcGVydHkgPSAnb24nICsgcHJvcGVydHk7XG4gICAgICAgICAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIocHJvcGVydHksIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBlbHQgPSBldmVudC50YXJnZXQsIGJvdW5kLCBzb3VyY2U7XG4gICAgICAgICAgICAgICAgaWYgKGVsdCkge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSBlbHQuY29uc3RydWN0b3JbJ25hbWUnXSArICcuJyArIG9ucHJvcGVydHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSAndW5rbm93bi4nICsgb25wcm9wZXJ0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2hpbGUgKGVsdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWx0W29ucHJvcGVydHldICYmICFlbHRbb25wcm9wZXJ0eV1bdW5ib3VuZEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5kID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUoZWx0W29ucHJvcGVydHldLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm91bmRbdW5ib3VuZEtleV0gPSBlbHRbb25wcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHRbb25wcm9wZXJ0eV0gPSBib3VuZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHQgPSBlbHQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF81KGkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRWxlbWVudFBhdGNoKF9nbG9iYWwsIGFwaSkge1xuICAgICAgICB2YXIgX2IgPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpLCBpc0Jyb3dzZXIgPSBfYi5pc0Jyb3dzZXIsIGlzTWl4ID0gX2IuaXNNaXg7XG4gICAgICAgIGlmICgoIWlzQnJvd3NlciAmJiAhaXNNaXgpIHx8ICEoJ3JlZ2lzdGVyRWxlbWVudCcgaW4gX2dsb2JhbC5kb2N1bWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FsbGJhY2tzID0gWydjcmVhdGVkQ2FsbGJhY2snLCAnYXR0YWNoZWRDYWxsYmFjaycsICdkZXRhY2hlZENhbGxiYWNrJywgJ2F0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayddO1xuICAgICAgICBhcGkucGF0Y2hDYWxsYmFja3MoYXBpLCBkb2N1bWVudCwgJ0RvY3VtZW50JywgJ3JlZ2lzdGVyRWxlbWVudCcsIGNhbGxiYWNrcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIChmdW5jdGlvbiAoX2dsb2JhbCkge1xuICAgICAgICB2YXIgc3ltYm9sUHJlZml4ID0gX2dsb2JhbFsnX19ab25lX3N5bWJvbF9wcmVmaXgnXSB8fCAnX196b25lX3N5bWJvbF9fJztcbiAgICAgICAgZnVuY3Rpb24gX19zeW1ib2xfXyhuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sUHJlZml4ICsgbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBfZ2xvYmFsW19fc3ltYm9sX18oJ2xlZ2FjeVBhdGNoJyldID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIFpvbmUgPSBfZ2xvYmFsWydab25lJ107XG4gICAgICAgICAgICBab25lLl9fbG9hZF9wYXRjaCgnZGVmaW5lUHJvcGVydHknLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgICAgICAgICBhcGkuX3JlZGVmaW5lUHJvcGVydHkgPSBfcmVkZWZpbmVQcm9wZXJ0eTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVBhdGNoKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFpvbmUuX19sb2FkX3BhdGNoKCdyZWdpc3RlckVsZW1lbnQnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgICAgICAgICByZWdpc3RlckVsZW1lbnRQYXRjaChnbG9iYWwsIGFwaSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFpvbmUuX19sb2FkX3BhdGNoKCdFdmVudFRhcmdldExlZ2FjeScsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0TGVnYWN5UGF0Y2goZ2xvYmFsLCBhcGkpO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5RGVzY3JpcHRvckxlZ2FjeVBhdGNoKGFwaSwgZ2xvYmFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH0pKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgd2luZG93IDpcbiAgICAgICAgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge30pO1xuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciB0YXNrU3ltYm9sID0gem9uZVN5bWJvbCQxKCd6b25lVGFzaycpO1xuICAgIGZ1bmN0aW9uIHBhdGNoVGltZXIod2luZG93LCBzZXROYW1lLCBjYW5jZWxOYW1lLCBuYW1lU3VmZml4KSB7XG4gICAgICAgIHZhciBzZXROYXRpdmUgPSBudWxsO1xuICAgICAgICB2YXIgY2xlYXJOYXRpdmUgPSBudWxsO1xuICAgICAgICBzZXROYW1lICs9IG5hbWVTdWZmaXg7XG4gICAgICAgIGNhbmNlbE5hbWUgKz0gbmFtZVN1ZmZpeDtcbiAgICAgICAgdmFyIHRhc2tzQnlIYW5kbGVJZCA9IHt9O1xuICAgICAgICBmdW5jdGlvbiBzY2hlZHVsZVRhc2sodGFzaykge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgICAgICBkYXRhLmFyZ3NbMF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2suaW52b2tlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGF0YS5oYW5kbGVJZCA9IHNldE5hdGl2ZS5hcHBseSh3aW5kb3csIGRhdGEuYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjbGVhclRhc2sodGFzaykge1xuICAgICAgICAgICAgcmV0dXJuIGNsZWFyTmF0aXZlLmNhbGwod2luZG93LCB0YXNrLmRhdGEuaGFuZGxlSWQpO1xuICAgICAgICB9XG4gICAgICAgIHNldE5hdGl2ZSA9XG4gICAgICAgICAgICBwYXRjaE1ldGhvZCh3aW5kb3csIHNldE5hbWUsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbnNfMSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUGVyaW9kaWM6IG5hbWVTdWZmaXggPT09ICdJbnRlcnZhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogKG5hbWVTdWZmaXggPT09ICdUaW1lb3V0JyB8fCBuYW1lU3VmZml4ID09PSAnSW50ZXJ2YWwnKSA/IGFyZ3NbMV0gfHwgMCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2tfMSA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbMF0gPSBmdW5jdGlvbiB0aW1lcigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrXzEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzc3VlLTkzNCwgdGFzayB3aWxsIGJlIGNhbmNlbGxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV2ZW4gaXQgaXMgYSBwZXJpb2RpYyB0YXNrIHN1Y2ggYXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXRJbnRlcnZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzQwMzg3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYW51cCB0YXNrc0J5SGFuZGxlSWQgc2hvdWxkIGJlIGhhbmRsZWQgYmVmb3JlIHNjaGVkdWxlVGFza1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHNvbWUgem9uZVNwZWMgbWF5IGludGVyY2VwdCBhbmQgZG9lc24ndCB0cmlnZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2NoZWR1bGVGbihzY2hlZHVsZVRhc2spIHByb3ZpZGVkIGhlcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEob3B0aW9uc18xLmlzUGVyaW9kaWMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc18xLmhhbmRsZUlkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW4gbm9uLW5vZGVqcyBlbnYsIHdlIHJlbW92ZSB0aW1lcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIGxvY2FsIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZUlkW29wdGlvbnNfMS5oYW5kbGVJZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9uc18xLmhhbmRsZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOb2RlIHJldHVybnMgY29tcGxleCBvYmplY3RzIGFzIGhhbmRsZUlkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgcmVtb3ZlIHRhc2sgcmVmZXJlbmNlIGZyb20gdGltZXIgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zXzEuaGFuZGxlSWRbdGFza1N5bWJvbF0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKHNldE5hbWUsIGFyZ3NbMF0sIG9wdGlvbnNfMSwgc2NoZWR1bGVUYXNrLCBjbGVhclRhc2spO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vZGUuanMgbXVzdCBhZGRpdGlvbmFsbHkgc3VwcG9ydCB0aGUgcmVmIGFuZCB1bnJlZiBmdW5jdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGUgPSB0YXNrLmRhdGEuaGFuZGxlSWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIG5vbiBub2RlanMgZW52LCB3ZSBzYXZlIGhhbmRsZUlkOiB0YXNrXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXBwaW5nIGluIGxvY2FsIGNhY2hlIGZvciBjbGVhclRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzQnlIYW5kbGVJZFtoYW5kbGVdID0gdGFzaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciBub2RlanMgZW52LCB3ZSBzYXZlIHRhc2tcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlZmVyZW5jZSBpbiB0aW1lcklkIE9iamVjdCBmb3IgY2xlYXJUaW1lb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVbdGFza1N5bWJvbF0gPSB0YXNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgaGFuZGxlIGlzIG51bGwsIGJlY2F1c2Ugc29tZSBwb2x5ZmlsbCBvciBicm93c2VyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1heSByZXR1cm4gdW5kZWZpbmVkIGZyb20gc2V0VGltZW91dC9zZXRJbnRlcnZhbC9zZXRJbW1lZGlhdGUvcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGUgJiYgaGFuZGxlLnJlZiAmJiBoYW5kbGUudW5yZWYgJiYgdHlwZW9mIGhhbmRsZS5yZWYgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBoYW5kbGUudW5yZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucmVmID0gaGFuZGxlLnJlZi5iaW5kKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnVucmVmID0gaGFuZGxlLnVucmVmLmJpbmQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZSA9PT0gJ251bWJlcicgfHwgaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2F1c2UgYW4gZXJyb3IgYnkgY2FsbGluZyBpdCBkaXJlY3RseS5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTsgfSk7XG4gICAgICAgIGNsZWFyTmF0aXZlID1cbiAgICAgICAgICAgIHBhdGNoTWV0aG9kKHdpbmRvdywgY2FuY2VsTmFtZSwgZnVuY3Rpb24gKGRlbGVnYXRlKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgdmFyIHRhc2s7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9uIG5vZGVqcyBlbnYuXG4gICAgICAgICAgICAgICAgICAgIHRhc2sgPSB0YXNrc0J5SGFuZGxlSWRbaWRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9kZWpzIGVudi5cbiAgICAgICAgICAgICAgICAgICAgdGFzayA9IGlkICYmIGlkW3Rhc2tTeW1ib2xdO1xuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlciBlbnZpcm9ubWVudHMuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzayA9IGlkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0YXNrICYmIHR5cGVvZiB0YXNrLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLnN0YXRlICE9PSAnbm90U2NoZWR1bGVkJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2suY2FuY2VsRm4gJiYgdGFzay5kYXRhLmlzUGVyaW9kaWMgfHwgdGFzay5ydW5Db3VudCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVJZFtpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkW3Rhc2tTeW1ib2xdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdCBjYW5jZWwgYWxyZWFkeSBjYW5jZWxlZCBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suem9uZS5jYW5jZWxUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYXVzZSBhbiBlcnJvciBieSBjYWxsaW5nIGl0IGRpcmVjdGx5LlxuICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0ZS5hcHBseSh3aW5kb3csIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwYXRjaEN1c3RvbUVsZW1lbnRzKF9nbG9iYWwsIGFwaSkge1xuICAgICAgICB2YXIgX2IgPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpLCBpc0Jyb3dzZXIgPSBfYi5pc0Jyb3dzZXIsIGlzTWl4ID0gX2IuaXNNaXg7XG4gICAgICAgIGlmICgoIWlzQnJvd3NlciAmJiAhaXNNaXgpIHx8ICFfZ2xvYmFsWydjdXN0b21FbGVtZW50cyddIHx8ICEoJ2N1c3RvbUVsZW1lbnRzJyBpbiBfZ2xvYmFsKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYWxsYmFja3MgPSBbJ2Nvbm5lY3RlZENhbGxiYWNrJywgJ2Rpc2Nvbm5lY3RlZENhbGxiYWNrJywgJ2Fkb3B0ZWRDYWxsYmFjaycsICdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snXTtcbiAgICAgICAgYXBpLnBhdGNoQ2FsbGJhY2tzKGFwaSwgX2dsb2JhbC5jdXN0b21FbGVtZW50cywgJ2N1c3RvbUVsZW1lbnRzJywgJ2RlZmluZScsIGNhbGxiYWNrcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGV2ZW50VGFyZ2V0UGF0Y2goX2dsb2JhbCwgYXBpKSB7XG4gICAgICAgIGlmIChab25lW2FwaS5zeW1ib2woJ3BhdGNoRXZlbnRUYXJnZXQnKV0pIHtcbiAgICAgICAgICAgIC8vIEV2ZW50VGFyZ2V0IGlzIGFscmVhZHkgcGF0Y2hlZC5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2IgPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpLCBldmVudE5hbWVzID0gX2IuZXZlbnROYW1lcywgem9uZVN5bWJvbEV2ZW50TmFtZXMgPSBfYi56b25lU3ltYm9sRXZlbnROYW1lcywgVFJVRV9TVFIgPSBfYi5UUlVFX1NUUiwgRkFMU0VfU1RSID0gX2IuRkFMU0VfU1RSLCBaT05FX1NZTUJPTF9QUkVGSVggPSBfYi5aT05FX1NZTUJPTF9QUkVGSVg7XG4gICAgICAgIC8vICBwcmVkZWZpbmUgYWxsIF9fem9uZV9zeW1ib2xfXyArIGV2ZW50TmFtZSArIHRydWUvZmFsc2Ugc3RyaW5nXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnROYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50TmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgZmFsc2VFdmVudE5hbWUgPSBldmVudE5hbWUgKyBGQUxTRV9TVFI7XG4gICAgICAgICAgICB2YXIgdHJ1ZUV2ZW50TmFtZSA9IGV2ZW50TmFtZSArIFRSVUVfU1RSO1xuICAgICAgICAgICAgdmFyIHN5bWJvbCA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIGZhbHNlRXZlbnROYW1lO1xuICAgICAgICAgICAgdmFyIHN5bWJvbENhcHR1cmUgPSBaT05FX1NZTUJPTF9QUkVGSVggKyB0cnVlRXZlbnROYW1lO1xuICAgICAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXSA9IHt9O1xuICAgICAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtGQUxTRV9TVFJdID0gc3ltYm9sO1xuICAgICAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtUUlVFX1NUUl0gPSBzeW1ib2xDYXB0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBFVkVOVF9UQVJHRVQgPSBfZ2xvYmFsWydFdmVudFRhcmdldCddO1xuICAgICAgICBpZiAoIUVWRU5UX1RBUkdFVCB8fCAhRVZFTlRfVEFSR0VULnByb3RvdHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFwaS5wYXRjaEV2ZW50VGFyZ2V0KF9nbG9iYWwsIGFwaSwgW0VWRU5UX1RBUkdFVCAmJiBFVkVOVF9UQVJHRVQucHJvdG90eXBlXSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXRjaEV2ZW50KGdsb2JhbCwgYXBpKSB7XG4gICAgICAgIGFwaS5wYXRjaEV2ZW50UHJvdG90eXBlKGdsb2JhbCwgYXBpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ2xlZ2FjeScsIGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAgICAgdmFyIGxlZ2FjeVBhdGNoID0gZ2xvYmFsW1pvbmUuX19zeW1ib2xfXygnbGVnYWN5UGF0Y2gnKV07XG4gICAgICAgIGlmIChsZWdhY3lQYXRjaCkge1xuICAgICAgICAgICAgbGVnYWN5UGF0Y2goKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCdxdWV1ZU1pY3JvdGFzaycsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICBhcGkucGF0Y2hNZXRob2QoZ2xvYmFsLCAncXVldWVNaWNyb3Rhc2snLCBmdW5jdGlvbiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgICAgIFpvbmUuY3VycmVudC5zY2hlZHVsZU1pY3JvVGFzaygncXVldWVNaWNyb3Rhc2snLCBhcmdzWzBdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCd0aW1lcnMnLCBmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICAgIHZhciBzZXQgPSAnc2V0JztcbiAgICAgICAgdmFyIGNsZWFyID0gJ2NsZWFyJztcbiAgICAgICAgcGF0Y2hUaW1lcihnbG9iYWwsIHNldCwgY2xlYXIsICdUaW1lb3V0Jyk7XG4gICAgICAgIHBhdGNoVGltZXIoZ2xvYmFsLCBzZXQsIGNsZWFyLCAnSW50ZXJ2YWwnKTtcbiAgICAgICAgcGF0Y2hUaW1lcihnbG9iYWwsIHNldCwgY2xlYXIsICdJbW1lZGlhdGUnKTtcbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgncmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICBwYXRjaFRpbWVyKGdsb2JhbCwgJ3JlcXVlc3QnLCAnY2FuY2VsJywgJ0FuaW1hdGlvbkZyYW1lJyk7XG4gICAgICAgIHBhdGNoVGltZXIoZ2xvYmFsLCAnbW96UmVxdWVzdCcsICdtb3pDYW5jZWwnLCAnQW5pbWF0aW9uRnJhbWUnKTtcbiAgICAgICAgcGF0Y2hUaW1lcihnbG9iYWwsICd3ZWJraXRSZXF1ZXN0JywgJ3dlYmtpdENhbmNlbCcsICdBbmltYXRpb25GcmFtZScpO1xuICAgIH0pO1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCdibG9ja2luZycsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUpIHtcbiAgICAgICAgdmFyIGJsb2NraW5nTWV0aG9kcyA9IFsnYWxlcnQnLCAncHJvbXB0JywgJ2NvbmZpcm0nXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja2luZ01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuYW1lXzIgPSBibG9ja2luZ01ldGhvZHNbaV07XG4gICAgICAgICAgICBwYXRjaE1ldGhvZChnbG9iYWwsIG5hbWVfMiwgZnVuY3Rpb24gKGRlbGVnYXRlLCBzeW1ib2wsIG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHMsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFpvbmUuY3VycmVudC5ydW4oZGVsZWdhdGUsIGdsb2JhbCwgYXJncywgbmFtZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ0V2ZW50VGFyZ2V0JywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgICAgIHBhdGNoRXZlbnQoZ2xvYmFsLCBhcGkpO1xuICAgICAgICBldmVudFRhcmdldFBhdGNoKGdsb2JhbCwgYXBpKTtcbiAgICAgICAgLy8gcGF0Y2ggWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCdzIGFkZEV2ZW50TGlzdGVuZXIvcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgICAgICB2YXIgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCA9IGdsb2JhbFsnWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCddO1xuICAgICAgICBpZiAoWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCAmJiBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0LnByb3RvdHlwZSkge1xuICAgICAgICAgICAgYXBpLnBhdGNoRXZlbnRUYXJnZXQoZ2xvYmFsLCBhcGksIFtYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0LnByb3RvdHlwZV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ011dGF0aW9uT2JzZXJ2ZXInLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgcGF0Y2hDbGFzcygnTXV0YXRpb25PYnNlcnZlcicpO1xuICAgICAgICBwYXRjaENsYXNzKCdXZWJLaXRNdXRhdGlvbk9ic2VydmVyJyk7XG4gICAgfSk7XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ0ludGVyc2VjdGlvbk9ic2VydmVyJywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgICAgIHBhdGNoQ2xhc3MoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyk7XG4gICAgfSk7XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ0ZpbGVSZWFkZXInLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgcGF0Y2hDbGFzcygnRmlsZVJlYWRlcicpO1xuICAgIH0pO1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCdvbl9wcm9wZXJ0eScsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICBwcm9wZXJ0eURlc2NyaXB0b3JQYXRjaChhcGksIGdsb2JhbCk7XG4gICAgfSk7XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ2N1c3RvbUVsZW1lbnRzJywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgICAgIHBhdGNoQ3VzdG9tRWxlbWVudHMoZ2xvYmFsLCBhcGkpO1xuICAgIH0pO1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCdYSFInLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lKSB7XG4gICAgICAgIC8vIFRyZWF0IFhNTEh0dHBSZXF1ZXN0IGFzIGEgbWFjcm90YXNrLlxuICAgICAgICBwYXRjaFhIUihnbG9iYWwpO1xuICAgICAgICB2YXIgWEhSX1RBU0sgPSB6b25lU3ltYm9sJDEoJ3hoclRhc2snKTtcbiAgICAgICAgdmFyIFhIUl9TWU5DID0gem9uZVN5bWJvbCQxKCd4aHJTeW5jJyk7XG4gICAgICAgIHZhciBYSFJfTElTVEVORVIgPSB6b25lU3ltYm9sJDEoJ3hockxpc3RlbmVyJyk7XG4gICAgICAgIHZhciBYSFJfU0NIRURVTEVEID0gem9uZVN5bWJvbCQxKCd4aHJTY2hlZHVsZWQnKTtcbiAgICAgICAgdmFyIFhIUl9VUkwgPSB6b25lU3ltYm9sJDEoJ3hoclVSTCcpO1xuICAgICAgICB2YXIgWEhSX0VSUk9SX0JFRk9SRV9TQ0hFRFVMRUQgPSB6b25lU3ltYm9sJDEoJ3hockVycm9yQmVmb3JlU2NoZWR1bGVkJyk7XG4gICAgICAgIGZ1bmN0aW9uIHBhdGNoWEhSKHdpbmRvdykge1xuICAgICAgICAgICAgdmFyIFhNTEh0dHBSZXF1ZXN0ID0gd2luZG93WydYTUxIdHRwUmVxdWVzdCddO1xuICAgICAgICAgICAgaWYgKCFYTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIC8vIFhNTEh0dHBSZXF1ZXN0IGlzIG5vdCBhdmFpbGFibGUgaW4gc2VydmljZSB3b3JrZXJcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUgPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGU7XG4gICAgICAgICAgICBmdW5jdGlvbiBmaW5kUGVuZGluZ1Rhc2sodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtYSFJfVEFTS107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb3JpQWRkTGlzdGVuZXIgPSBYTUxIdHRwUmVxdWVzdFByb3RvdHlwZVtaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgdmFyIG9yaVJlbW92ZUxpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RQcm90b3R5cGVbWk9ORV9TWU1CT0xfUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgICAgIGlmICghb3JpQWRkTGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldF8xID0gd2luZG93WydYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0J107XG4gICAgICAgICAgICAgICAgaWYgKFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRfMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFByb3RvdHlwZSA9IFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRfMS5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgICAgIG9yaUFkZExpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFByb3RvdHlwZVtaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgICAgICAgICBvcmlSZW1vdmVMaXN0ZW5lciA9IFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRQcm90b3R5cGVbWk9ORV9TWU1CT0xfUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgUkVBRFlfU1RBVEVfQ0hBTkdFID0gJ3JlYWR5c3RhdGVjaGFuZ2UnO1xuICAgICAgICAgICAgdmFyIFNDSEVEVUxFRCA9ICdzY2hlZHVsZWQnO1xuICAgICAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHRhc2suZGF0YTtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZGF0YS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W1hIUl9TQ0hFRFVMRURdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W1hIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBleGlzdGluZyBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldFtYSFJfTElTVEVORVJdO1xuICAgICAgICAgICAgICAgIGlmICghb3JpQWRkTGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpQWRkTGlzdGVuZXIgPSB0YXJnZXRbWk9ORV9TWU1CT0xfQUREX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgICAgICAgICAgICAgb3JpUmVtb3ZlTGlzdGVuZXIgPSB0YXJnZXRbWk9ORV9TWU1CT0xfUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaVJlbW92ZUxpc3RlbmVyLmNhbGwodGFyZ2V0LCBSRUFEWV9TVEFURV9DSEFOR0UsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG5ld0xpc3RlbmVyID0gdGFyZ2V0W1hIUl9MSVNURU5FUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQucmVhZHlTdGF0ZSA9PT0gdGFyZ2V0LkRPTkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvbWV0aW1lcyBvbiBzb21lIGJyb3dzZXJzIFhNTEh0dHBSZXF1ZXN0IHdpbGwgZmlyZSBvbnJlYWR5c3RhdGVjaGFuZ2Ugd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVhZHlTdGF0ZT00IG11bHRpcGxlIHRpbWVzLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHRhc2sgc3RhdGUgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmFib3J0ZWQgJiYgdGFyZ2V0W1hIUl9TQ0hFRFVMRURdICYmIHRhc2suc3RhdGUgPT09IFNDSEVEVUxFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIHhociBoYXMgcmVnaXN0ZXJlZCBvbmxvYWQgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGF0IGlzIHRoZSBjYXNlLCB0aGUgdGFzayBzaG91bGQgaW52b2tlIGFmdGVyIGFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ubG9hZCBsaXN0ZW5lcnMgZmluaXNoLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsc28gaWYgdGhlIHJlcXVlc3QgZmFpbGVkIHdpdGhvdXQgcmVzcG9uc2UgKHN0YXR1cyA9IDApLCB0aGUgbG9hZCBldmVudCBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lsbCBub3QgYmUgdHJpZ2dlcmVkLCBpbiB0aGF0IGNhc2UsIHdlIHNob3VsZCBhbHNvIGludm9rZSB0aGUgcGxhY2Vob2xkZXIgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBjbG9zZSB0aGUgWE1MSHR0cFJlcXVlc3Q6OnNlbmQgbWFjcm9UYXNrLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzM4Nzk1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvYWRUYXNrcyA9IHRhcmdldFtab25lLl9fc3ltYm9sX18oJ2xvYWRmYWxzZScpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LnN0YXR1cyAhPT0gMCAmJiBsb2FkVGFza3MgJiYgbG9hZFRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaUludm9rZV8xID0gdGFzay5pbnZva2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suaW52b2tlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmVlZCB0byBsb2FkIHRoZSB0YXNrcyBhZ2FpbiwgYmVjYXVzZSBpbiBvdGhlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9hZCBsaXN0ZW5lciwgdGhleSBtYXkgcmVtb3ZlIHRoZW1zZWx2ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsb2FkVGFza3MgPSB0YXJnZXRbWm9uZS5fX3N5bWJvbF9fKCdsb2FkZmFsc2UnKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvYWRUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2FkVGFza3NbaV0gPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuYWJvcnRlZCAmJiB0YXNrLnN0YXRlID09PSBTQ0hFRFVMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlJbnZva2VfMS5jYWxsKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suaW52b2tlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWRhdGEuYWJvcnRlZCAmJiB0YXJnZXRbWEhSX1NDSEVEVUxFRF0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3Igb2NjdXJzIHdoZW4geGhyLnNlbmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcmlBZGRMaXN0ZW5lci5jYWxsKHRhcmdldCwgUkVBRFlfU1RBVEVfQ0hBTkdFLCBuZXdMaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JlZFRhc2sgPSB0YXJnZXRbWEhSX1RBU0tdO1xuICAgICAgICAgICAgICAgIGlmICghc3RvcmVkVGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbWEhSX1RBU0tdID0gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VuZE5hdGl2ZS5hcHBseSh0YXJnZXQsIGRhdGEuYXJncyk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W1hIUl9TQ0hFRFVMRURdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYWNlaG9sZGVyQ2FsbGJhY2soKSB7IH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFyVGFzayh0YXNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgICAgICAgICAgLy8gTm90ZSAtIGlkZWFsbHksIHdlIHdvdWxkIGNhbGwgZGF0YS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lciBoZXJlLCBidXQgaXQncyB0b28gbGF0ZVxuICAgICAgICAgICAgICAgIC8vIHRvIHByZXZlbnQgaXQgZnJvbSBmaXJpbmcuIFNvIGluc3RlYWQsIHdlIHN0b3JlIGluZm8gZm9yIHRoZSBldmVudCBsaXN0ZW5lci5cbiAgICAgICAgICAgICAgICBkYXRhLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBhYm9ydE5hdGl2ZS5hcHBseShkYXRhLnRhcmdldCwgZGF0YS5hcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvcGVuTmF0aXZlID0gcGF0Y2hNZXRob2QoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsICdvcGVuJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBzZWxmW1hIUl9TWU5DXSA9IGFyZ3NbMl0gPT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2VsZltYSFJfVVJMXSA9IGFyZ3NbMV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5OYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICB9OyB9KTtcbiAgICAgICAgICAgIHZhciBYTUxIVFRQUkVRVUVTVF9TT1VSQ0UgPSAnWE1MSHR0cFJlcXVlc3Quc2VuZCc7XG4gICAgICAgICAgICB2YXIgZmV0Y2hUYXNrQWJvcnRpbmcgPSB6b25lU3ltYm9sJDEoJ2ZldGNoVGFza0Fib3J0aW5nJyk7XG4gICAgICAgICAgICB2YXIgZmV0Y2hUYXNrU2NoZWR1bGluZyA9IHpvbmVTeW1ib2wkMSgnZmV0Y2hUYXNrU2NoZWR1bGluZycpO1xuICAgICAgICAgICAgdmFyIHNlbmROYXRpdmUgPSBwYXRjaE1ldGhvZChYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgJ3NlbmQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgICAgIGlmIChab25lLmN1cnJlbnRbZmV0Y2hUYXNrU2NoZWR1bGluZ10gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBmZXRjaCBpcyBzY2hlZHVsaW5nLCBzbyB3ZSBhcmUgdXNpbmcgeGhyIHRvIHBvbHlmaWxsIGZldGNoXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCBiZWNhdXNlIHdlIGFscmVhZHkgc2NoZWR1bGUgbWFjcm9UYXNrIGZvciBmZXRjaCwgd2Ugc2hvdWxkXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdCBzY2hlZHVsZSBhIG1hY3JvVGFzayBmb3IgeGhyIGFnYWluXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZW5kTmF0aXZlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2VsZltYSFJfU1lOQ10pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIFhIUiBpcyBzeW5jIHRoZXJlIGlzIG5vIHRhc2sgdG8gc2NoZWR1bGUsIGp1c3QgZXhlY3V0ZSB0aGUgY29kZS5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbmROYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHsgdGFyZ2V0OiBzZWxmLCB1cmw6IHNlbGZbWEhSX1VSTF0sIGlzUGVyaW9kaWM6IGZhbHNlLCBhcmdzOiBhcmdzLCBhYm9ydGVkOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKFhNTEhUVFBSRVFVRVNUX1NPVVJDRSwgcGxhY2Vob2xkZXJDYWxsYmFjaywgb3B0aW9ucywgc2NoZWR1bGVUYXNrLCBjbGVhclRhc2spO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZiAmJiBzZWxmW1hIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEXSA9PT0gdHJ1ZSAmJiAhb3B0aW9ucy5hYm9ydGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnN0YXRlID09PSBTQ0hFRFVMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHhociByZXF1ZXN0IHRocm93IGVycm9yIHdoZW4gc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIGludm9rZSB0YXNrIGluc3RlYWQgb2YgbGVhdmluZyBhIHNjaGVkdWxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVuZGluZyBtYWNyb1Rhc2tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suaW52b2tlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9OyB9KTtcbiAgICAgICAgICAgIHZhciBhYm9ydE5hdGl2ZSA9IHBhdGNoTWV0aG9kKFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCAnYWJvcnQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgICAgIHZhciB0YXNrID0gZmluZFBlbmRpbmdUYXNrKHNlbGYpO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrICYmIHR5cGVvZiB0YXNrLnR5cGUgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIFhIUiBoYXMgYWxyZWFkeSBjb21wbGV0ZWQsIGRvIG5vdGhpbmcuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBYSFIgaGFzIGFscmVhZHkgYmVlbiBhYm9ydGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgICAgICAvLyBGaXggIzU2OSwgY2FsbCBhYm9ydCBtdWx0aXBsZSB0aW1lcyBiZWZvcmUgZG9uZSB3aWxsIGNhdXNlXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hY3JvVGFzayB0YXNrIGNvdW50IGJlIG5lZ2F0aXZlIG51bWJlclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5jYW5jZWxGbiA9PSBudWxsIHx8ICh0YXNrLmRhdGEgJiYgdGFzay5kYXRhLmFib3J0ZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFzay56b25lLmNhbmNlbFRhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKFpvbmUuY3VycmVudFtmZXRjaFRhc2tBYm9ydGluZ10gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGFib3J0IGlzIGNhbGxlZCBmcm9tIGZldGNoIHBvbHlmaWxsLCB3ZSBuZWVkIHRvIGNhbGwgbmF0aXZlIGFib3J0IG9mIFhIUi5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFib3J0TmF0aXZlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGFyZSB0cnlpbmcgdG8gYWJvcnQgYW4gWEhSIHdoaWNoIGhhcyBub3QgeWV0IGJlZW4gc2VudCwgc28gdGhlcmUgaXMgbm9cbiAgICAgICAgICAgICAgICAvLyB0YXNrXG4gICAgICAgICAgICAgICAgLy8gdG8gY2FuY2VsLiBEbyBub3RoaW5nLlxuICAgICAgICAgICAgfTsgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgnZ2VvbG9jYXRpb24nLCBmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICAgIC8vLyBHRU9fTE9DQVRJT05cbiAgICAgICAgaWYgKGdsb2JhbFsnbmF2aWdhdG9yJ10gJiYgZ2xvYmFsWyduYXZpZ2F0b3InXS5nZW9sb2NhdGlvbikge1xuICAgICAgICAgICAgcGF0Y2hQcm90b3R5cGUoZ2xvYmFsWyduYXZpZ2F0b3InXS5nZW9sb2NhdGlvbiwgWydnZXRDdXJyZW50UG9zaXRpb24nLCAnd2F0Y2hQb3NpdGlvbiddKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCdQcm9taXNlUmVqZWN0aW9uRXZlbnQnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lKSB7XG4gICAgICAgIC8vIGhhbmRsZSB1bmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb25cbiAgICAgICAgZnVuY3Rpb24gZmluZFByb21pc2VSZWplY3Rpb25IYW5kbGVyKGV2dE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBldmVudFRhc2tzID0gZmluZEV2ZW50VGFza3MoZ2xvYmFsLCBldnROYW1lKTtcbiAgICAgICAgICAgICAgICBldmVudFRhc2tzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50VGFzaykge1xuICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3dzIGhhcyBhZGRlZCB1bmhhbmRsZWRyZWplY3Rpb24gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJpZ2dlciB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICAgICAgdmFyIFByb21pc2VSZWplY3Rpb25FdmVudCA9IGdsb2JhbFsnUHJvbWlzZVJlamVjdGlvbkV2ZW50J107XG4gICAgICAgICAgICAgICAgICAgIGlmIChQcm9taXNlUmVqZWN0aW9uRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBldnQgPSBuZXcgUHJvbWlzZVJlamVjdGlvbkV2ZW50KGV2dE5hbWUsIHsgcHJvbWlzZTogZS5wcm9taXNlLCByZWFzb246IGUucmVqZWN0aW9uIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXNrLmludm9rZShldnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChnbG9iYWxbJ1Byb21pc2VSZWplY3Rpb25FdmVudCddKSB7XG4gICAgICAgICAgICBab25lW3pvbmVTeW1ib2wkMSgndW5oYW5kbGVkUHJvbWlzZVJlamVjdGlvbkhhbmRsZXInKV0gPVxuICAgICAgICAgICAgICAgIGZpbmRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcigndW5oYW5kbGVkcmVqZWN0aW9uJyk7XG4gICAgICAgICAgICBab25lW3pvbmVTeW1ib2wkMSgncmVqZWN0aW9uSGFuZGxlZEhhbmRsZXInKV0gPVxuICAgICAgICAgICAgICAgIGZpbmRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcigncmVqZWN0aW9uaGFuZGxlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG59KSk7XG4iXSwibmFtZXMiOlsiX19zcHJlYWRBcnJheSIsInRvIiwiZnJvbSIsInBhY2siLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJpIiwibCIsImFyIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJjb25jYXQiLCJmYWN0b3J5IiwiZGVmaW5lIiwiYW1kIiwiZ2xvYmFsIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwibmFtZSIsInBlcmZvcm1hbmNlTWVhc3VyZSIsImxhYmVsIiwic3ltYm9sUHJlZml4IiwiX19zeW1ib2xfXyIsImNoZWNrRHVwbGljYXRlIiwiRXJyb3IiLCJab25lIiwicGFyZW50Iiwiem9uZVNwZWMiLCJfcGFyZW50IiwiX25hbWUiLCJfcHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJfem9uZURlbGVnYXRlIiwiX1pvbmVEZWxlZ2F0ZSIsImFzc2VydFpvbmVQYXRjaGVkIiwicGF0Y2hlcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwiem9uZSIsImN1cnJlbnQiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiX2N1cnJlbnRab25lRnJhbWUiLCJfY3VycmVudFRhc2siLCJfX2xvYWRfcGF0Y2giLCJmbiIsImlnbm9yZUR1cGxpY2F0ZSIsImhhc093blByb3BlcnR5IiwicGVyZk5hbWUiLCJfYXBpIiwia2V5IiwiZ2V0Wm9uZVdpdGgiLCJmb3JrIiwid3JhcCIsImNhbGxiYWNrIiwic291cmNlIiwiX2NhbGxiYWNrIiwiaW50ZXJjZXB0IiwicnVuR3VhcmRlZCIsInJ1biIsImFwcGx5VGhpcyIsImFwcGx5QXJncyIsImludm9rZSIsImVycm9yIiwiaGFuZGxlRXJyb3IiLCJydW5UYXNrIiwidGFzayIsIk5PX1pPTkUiLCJzdGF0ZSIsIm5vdFNjaGVkdWxlZCIsInR5cGUiLCJldmVudFRhc2siLCJtYWNyb1Rhc2siLCJyZUVudHJ5R3VhcmQiLCJydW5uaW5nIiwiX3RyYW5zaXRpb25UbyIsInNjaGVkdWxlZCIsInJ1bkNvdW50IiwicHJldmlvdXNUYXNrIiwiZGF0YSIsImlzUGVyaW9kaWMiLCJjYW5jZWxGbiIsInVuZGVmaW5lZCIsImludm9rZVRhc2siLCJ1bmtub3duIiwiX3VwZGF0ZVRhc2tDb3VudCIsInNjaGVkdWxlVGFzayIsIm5ld1pvbmUiLCJzY2hlZHVsaW5nIiwiem9uZURlbGVnYXRlcyIsIl96b25lRGVsZWdhdGVzIiwiX3pvbmUiLCJlcnIiLCJzY2hlZHVsZU1pY3JvVGFzayIsImN1c3RvbVNjaGVkdWxlIiwiWm9uZVRhc2siLCJtaWNyb1Rhc2siLCJzY2hlZHVsZU1hY3JvVGFzayIsImN1c3RvbUNhbmNlbCIsInNjaGVkdWxlRXZlbnRUYXNrIiwiY2FuY2VsVGFzayIsImNhbmNlbGluZyIsImNvdW50IiwiREVMRUdBVEVfWlMiLCJvbkhhc1Rhc2siLCJkZWxlZ2F0ZSIsIl8iLCJ0YXJnZXQiLCJoYXNUYXNrU3RhdGUiLCJoYXNUYXNrIiwib25TY2hlZHVsZVRhc2siLCJvbkludm9rZVRhc2siLCJvbkNhbmNlbFRhc2siLCJwYXJlbnREZWxlZ2F0ZSIsIl90YXNrQ291bnRzIiwiX3BhcmVudERlbGVnYXRlIiwiX2ZvcmtaUyIsIm9uRm9yayIsIl9mb3JrRGxndCIsIl9mb3JrQ3VyclpvbmUiLCJfaW50ZXJjZXB0WlMiLCJvbkludGVyY2VwdCIsIl9pbnRlcmNlcHREbGd0IiwiX2ludGVyY2VwdEN1cnJab25lIiwiX2ludm9rZVpTIiwib25JbnZva2UiLCJfaW52b2tlRGxndCIsIl9pbnZva2VDdXJyWm9uZSIsIl9oYW5kbGVFcnJvclpTIiwib25IYW5kbGVFcnJvciIsIl9oYW5kbGVFcnJvckRsZ3QiLCJfaGFuZGxlRXJyb3JDdXJyWm9uZSIsIl9zY2hlZHVsZVRhc2taUyIsIl9zY2hlZHVsZVRhc2tEbGd0IiwiX3NjaGVkdWxlVGFza0N1cnJab25lIiwiX2ludm9rZVRhc2taUyIsIl9pbnZva2VUYXNrRGxndCIsIl9pbnZva2VUYXNrQ3VyclpvbmUiLCJfY2FuY2VsVGFza1pTIiwiX2NhbmNlbFRhc2tEbGd0IiwiX2NhbmNlbFRhc2tDdXJyWm9uZSIsIl9oYXNUYXNrWlMiLCJfaGFzVGFza0RsZ3QiLCJfaGFzVGFza0RsZ3RPd25lciIsIl9oYXNUYXNrQ3VyclpvbmUiLCJ6b25lU3BlY0hhc1Rhc2siLCJwYXJlbnRIYXNUYXNrIiwidGFyZ2V0Wm9uZSIsImFwcGx5IiwicmV0dXJuVGFzayIsInB1c2giLCJzY2hlZHVsZUZuIiwidmFsdWUiLCJpc0VtcHR5IiwiY291bnRzIiwicHJldiIsIm5leHQiLCJjaGFuZ2UiLCJvcHRpb25zIiwiX3N0YXRlIiwic2VsZiIsInVzZUciLCJhcmdzIiwiX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcyIsImRyYWluTWljcm9UYXNrUXVldWUiLCJjYW5jZWxTY2hlZHVsZVJlcXVlc3QiLCJ0b1N0YXRlIiwiZnJvbVN0YXRlMSIsImZyb21TdGF0ZTIiLCJ0b1N0cmluZyIsImhhbmRsZUlkIiwidG9KU09OIiwic3ltYm9sU2V0VGltZW91dCIsInN5bWJvbFByb21pc2UiLCJzeW1ib2xUaGVuIiwiX21pY3JvVGFza1F1ZXVlIiwiX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSIsIm5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZSIsIm5hdGl2ZVNjaGVkdWxlTWljcm9UYXNrIiwiZnVuYyIsInJlc29sdmUiLCJuYXRpdmVUaGVuIiwicXVldWUiLCJvblVuaGFuZGxlZEVycm9yIiwibWljcm90YXNrRHJhaW5Eb25lIiwic3ltYm9sIiwiY3VycmVudFpvbmVGcmFtZSIsIm5vb3AiLCJzaG93VW5jYXVnaHRFcnJvciIsInBhdGNoRXZlbnRUYXJnZXQiLCJwYXRjaE9uUHJvcGVydGllcyIsInBhdGNoTWV0aG9kIiwiYmluZEFyZ3VtZW50cyIsInBhdGNoVGhlbiIsInBhdGNoTWFjcm9UYXNrIiwicGF0Y2hFdmVudFByb3RvdHlwZSIsImlzSUVPckVkZ2UiLCJnZXRHbG9iYWxPYmplY3RzIiwiT2JqZWN0RGVmaW5lUHJvcGVydHkiLCJPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJPYmplY3RDcmVhdGUiLCJBcnJheVNsaWNlIiwicGF0Y2hDbGFzcyIsIndyYXBXaXRoQ3VycmVudFpvbmUiLCJmaWx0ZXJQcm9wZXJ0aWVzIiwiYXR0YWNoT3JpZ2luVG9QYXRjaGVkIiwiX3JlZGVmaW5lUHJvcGVydHkiLCJwYXRjaENhbGxiYWNrcyIsIndpbmRvdyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIk9iamVjdEdldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJjcmVhdGUiLCJBRERfRVZFTlRfTElTVEVORVJfU1RSIiwiUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUiIsIlpPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUiIsIlpPTkVfU1lNQk9MX1JFTU9WRV9FVkVOVF9MSVNURU5FUiIsIlRSVUVfU1RSIiwiRkFMU0VfU1RSIiwiWk9ORV9TWU1CT0xfUFJFRklYIiwic2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUiLCJ6b25lU3ltYm9sJDEiLCJpc1dpbmRvd0V4aXN0cyIsImludGVybmFsV2luZG93IiwiX2dsb2JhbCIsIlJFTU9WRV9BVFRSSUJVVEUiLCJwYXRjaFByb3RvdHlwZSIsImZuTmFtZXMiLCJjb25zdHJ1Y3RvciIsIl9sb29wXzEiLCJuYW1lXzEiLCJwcm90b3R5cGVEZXNjIiwiaXNQcm9wZXJ0eVdyaXRhYmxlIiwicGF0Y2hlZCIsInByb3BlcnR5RGVzYyIsIndyaXRhYmxlIiwic2V0IiwiaXNXZWJXb3JrZXIiLCJXb3JrZXJHbG9iYWxTY29wZSIsImlzTm9kZSIsInByb2Nlc3MiLCJpc0Jyb3dzZXIiLCJpc01peCIsInpvbmVTeW1ib2xFdmVudE5hbWVzJDEiLCJ3cmFwRm4iLCJldmVudCIsImV2ZW50TmFtZVN5bWJvbCIsImxpc3RlbmVyIiwicmVzdWx0IiwiZXJyb3JFdmVudCIsIm1lc3NhZ2UiLCJmaWxlbmFtZSIsImxpbmVubyIsImNvbG5vIiwicHJldmVudERlZmF1bHQiLCJwYXRjaFByb3BlcnR5Iiwib2JqIiwicHJvcCIsImRlc2MiLCJvblByb3BQYXRjaGVkU3ltYm9sIiwib3JpZ2luYWxEZXNjR2V0Iiwib3JpZ2luYWxEZXNjU2V0IiwiZXZlbnROYW1lIiwibmV3VmFsdWUiLCJwcmV2aW91c1ZhbHVlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvblByb3BlcnRpZXMiLCJqIiwib3JpZ2luYWxJbnN0YW5jZUtleSIsImNsYXNzTmFtZSIsIk9yaWdpbmFsQ2xhc3MiLCJhIiwiaW5zdGFuY2UiLCJwYXRjaEZuIiwicHJvdG8iLCJkZWxlZ2F0ZU5hbWUiLCJwYXRjaERlbGVnYXRlXzEiLCJmdW5jTmFtZSIsIm1ldGFDcmVhdG9yIiwic2V0TmF0aXZlIiwiY2JJZHgiLCJtZXRhIiwib3JpZ2luYWwiLCJpc0RldGVjdGVkSUVPckVkZ2UiLCJpZU9yRWRnZSIsImlzSUUiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJhcGkiLCJyZWFkYWJsZU9iamVjdFRvU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsIl91bmNhdWdodFByb21pc2VFcnJvcnMiLCJpc0Rpc2FibGVXcmFwcGluZ1VuY2F1Z2h0UHJvbWlzZVJlamVjdGlvbiIsImNyZWF0aW9uVHJhY2UiLCJlIiwicmVqZWN0aW9uIiwiY29uc29sZSIsInN0YWNrIiwiX2xvb3BfMiIsInVuY2F1Z2h0UHJvbWlzZUVycm9yIiwic2hpZnQiLCJ0aHJvd09yaWdpbmFsIiwiaGFuZGxlVW5oYW5kbGVkUmVqZWN0aW9uIiwiVU5IQU5ETEVEX1BST01JU0VfUkVKRUNUSU9OX0hBTkRMRVJfU1lNQk9MIiwiaGFuZGxlciIsImlzVGhlbmFibGUiLCJ0aGVuIiwiZm9yd2FyZFJlc29sdXRpb24iLCJmb3J3YXJkUmVqZWN0aW9uIiwiWm9uZUF3YXJlUHJvbWlzZSIsInJlamVjdCIsInN5bWJvbFN0YXRlIiwic3ltYm9sVmFsdWUiLCJzeW1ib2xGaW5hbGx5Iiwic3ltYm9sUGFyZW50UHJvbWlzZVZhbHVlIiwic3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlIiwiVU5SRVNPTFZFRCIsIlJFU09MVkVEIiwiUkVKRUNURUQiLCJSRUpFQ1RFRF9OT19DQVRDSCIsIm1ha2VSZXNvbHZlciIsInByb21pc2UiLCJ2IiwicmVzb2x2ZVByb21pc2UiLCJvbmNlIiwid2FzQ2FsbGVkIiwid3JhcHBlciIsIndyYXBwZWRGdW5jdGlvbiIsIlRZUEVfRVJST1IiLCJDVVJSRU5UX1RBU0tfVFJBQ0VfU1lNQk9MIiwib25jZVdyYXBwZXIiLCJUeXBlRXJyb3IiLCJjbGVhclJlamVjdGVkTm9DYXRjaCIsInRyYWNlIiwiY3VycmVudFRhc2siLCJzY2hlZHVsZVJlc29sdmVPclJlamVjdCIsIlJFSkVDVElPTl9IQU5ETEVEX0hBTkRMRVIiLCJzcGxpY2UiLCJjaGFpblByb21pc2UiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJwcm9taXNlU3RhdGUiLCJwYXJlbnRQcm9taXNlVmFsdWUiLCJpc0ZpbmFsbHlQcm9taXNlIiwiWk9ORV9BV0FSRV9QUk9NSVNFX1RPX1NUUklORyIsIkFnZ3JlZ2F0ZUVycm9yIiwiZXhlY3V0b3IiLCJhbnkiLCJ2YWx1ZXMiLCJTeW1ib2wiLCJpdGVyYXRvciIsIlByb21pc2UiLCJwcm9taXNlcyIsIl9pIiwidmFsdWVzXzEiLCJmaW5pc2hlZCIsImVycm9ycyIsInJhY2UiLCJyZXMiLCJyZWoiLCJvblJlc29sdmUiLCJvblJlamVjdCIsInZhbHVlc18yIiwiYWxsIiwiYWxsV2l0aENhbGxiYWNrIiwiYWxsU2V0dGxlZCIsIlAiLCJ0aGVuQ2FsbGJhY2siLCJzdGF0dXMiLCJlcnJvckNhbGxiYWNrIiwicmVhc29uIiwidW5yZXNvbHZlZENvdW50IiwidmFsdWVJbmRleCIsInJlc29sdmVkVmFsdWVzIiwiX2xvb3BfMyIsInRoaXNfMSIsImN1clZhbHVlSW5kZXgiLCJ0aGVuRXJyIiwidmFsdWVzXzMiLCJ0b1N0cmluZ1RhZyIsInNwZWNpZXMiLCJfYSIsIkMiLCJjYXRjaCIsImZpbmFsbHkiLCJvbkZpbmFsbHkiLCJOYXRpdmVQcm9taXNlIiwic3ltYm9sVGhlblBhdGNoZWQiLCJDdG9yIiwib3JpZ2luYWxUaGVuIiwiX3RoaXMiLCJ3cmFwcGVkIiwiem9uZWlmeSIsInJlc3VsdFByb21pc2UiLCJjdG9yIiwib3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nIiwiRnVuY3Rpb24iLCJPUklHSU5BTF9ERUxFR0FURV9TWU1CT0wiLCJQUk9NSVNFX1NZTUJPTCIsIkVSUk9SX1NZTUJPTCIsIm5ld0Z1bmN0aW9uVG9TdHJpbmciLCJvcmlnaW5hbERlbGVnYXRlIiwibmF0aXZlUHJvbWlzZSIsIm5hdGl2ZUVycm9yIiwib3JpZ2luYWxPYmplY3RUb1N0cmluZyIsIlBST01JU0VfT0JKRUNUX1RPX1NUUklORyIsInBhc3NpdmVTdXBwb3J0ZWQiLCJPUFRJTUlaRURfWk9ORV9FVkVOVF9UQVNLX0RBVEEiLCJ6b25lU3ltYm9sRXZlbnROYW1lcyIsImdsb2JhbFNvdXJjZXMiLCJFVkVOVF9OQU1FX1NZTUJPTF9SRUdYIiwiUmVnRXhwIiwiSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTCIsInByZXBhcmVFdmVudE5hbWVzIiwiZXZlbnROYW1lVG9TdHJpbmciLCJmYWxzZUV2ZW50TmFtZSIsInRydWVFdmVudE5hbWUiLCJzeW1ib2xDYXB0dXJlIiwiYXBpcyIsInBhdGNoT3B0aW9ucyIsIkFERF9FVkVOVF9MSVNURU5FUiIsImFkZCIsIlJFTU9WRV9FVkVOVF9MSVNURU5FUiIsInJtIiwiTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSIiwibGlzdGVuZXJzIiwiUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVIiLCJybUFsbCIsInpvbmVTeW1ib2xBZGRFdmVudExpc3RlbmVyIiwiQUREX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSIsIlBSRVBFTkRfRVZFTlRfTElTVEVORVIiLCJQUkVQRU5EX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSIsImlzUmVtb3ZlZCIsImhhbmRsZUV2ZW50IiwiZGVsZWdhdGVfMSIsImdsb2JhbENhbGxiYWNrIiwiY29udGV4dCIsImlzQ2FwdHVyZSIsInRhc2tzIiwiY29weVRhc2tzIiwiX2xvb3BfNCIsImdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrIiwiZ2xvYmFsWm9uZUF3YXJlQ2FwdHVyZUNhbGxiYWNrIiwicGF0Y2hFdmVudFRhcmdldE1ldGhvZHMiLCJ1c2VHbG9iYWxDYWxsYmFjayIsInZhbGlkYXRlSGFuZGxlciIsInZoIiwiY2hrRHVwIiwicmV0dXJuVGFyZ2V0IiwicnQiLCJ0YXNrRGF0YSIsIm5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIiLCJuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyIiwibmF0aXZlTGlzdGVuZXJzIiwibmF0aXZlUmVtb3ZlQWxsTGlzdGVuZXJzIiwibmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXIiLCJwcmVwZW5kIiwiYnVpbGRFdmVudExpc3RlbmVyT3B0aW9ucyIsInBhc3NpdmUiLCJjYXB0dXJlIiwiYXNzaWduIiwiY3VzdG9tU2NoZWR1bGVHbG9iYWwiLCJpc0V4aXN0aW5nIiwiY3VzdG9tQ2FuY2VsR2xvYmFsIiwic3ltYm9sRXZlbnROYW1lcyIsInN5bWJvbEV2ZW50TmFtZSIsImV4aXN0aW5nVGFza3MiLCJleGlzdGluZ1Rhc2siLCJhbGxSZW1vdmVkIiwiY3VzdG9tU2NoZWR1bGVOb25HbG9iYWwiLCJjdXN0b21TY2hlZHVsZVByZXBlbmQiLCJjdXN0b21DYW5jZWxOb25HbG9iYWwiLCJjb21wYXJlVGFza0NhbGxiYWNrVnNEZWxlZ2F0ZSIsInR5cGVPZkRlbGVnYXRlIiwiY29tcGFyZSIsImRpZmYiLCJ1bnBhdGNoZWRFdmVudHMiLCJwYXNzaXZlRXZlbnRzIiwibWFrZUFkZExpc3RlbmVyIiwibmF0aXZlTGlzdGVuZXIiLCJhZGRTb3VyY2UiLCJjdXN0b21TY2hlZHVsZUZuIiwiY3VzdG9tQ2FuY2VsRm4iLCJ0cmFuc2ZlckV2ZW50TmFtZSIsImlzSGFuZGxlRXZlbnQiLCJjb25zdHJ1Y3Rvck5hbWUiLCJ0YXJnZXRTb3VyY2UiLCJ1bnNoaWZ0Iiwib25Qcm9wZXJ0eVN5bWJvbCIsImZpbmRFdmVudFRhc2tzIiwia2V5cyIsIm1hdGNoIiwiZXhlYyIsImV2dE5hbWUiLCJzeW1ib2xDYXB0dXJlRXZlbnROYW1lIiwiY2FwdHVyZVRhc2tzIiwicmVtb3ZlVGFza3MiLCJyZXN1bHRzIiwiZm91bmRUYXNrcyIsImNhcHR1cmVGYWxzZVRhc2tzIiwiY2FwdHVyZVRydWVUYXNrcyIsIkV2ZW50IiwidGFyZ2V0TmFtZSIsIm1ldGhvZCIsImNhbGxiYWNrcyIsIm5hdGl2ZURlbGVnYXRlIiwib3B0cyIsImZvckVhY2giLCJkZXNjcmlwdG9yIiwiaWdub3JlUHJvcGVydGllcyIsInRpcCIsImZpbHRlciIsImlwIiwidGFyZ2V0SWdub3JlUHJvcGVydGllcyIsIm9wIiwicGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMiLCJmaWx0ZXJlZFByb3BlcnRpZXMiLCJnZXRPbkV2ZW50TmFtZXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwic3RhcnRzV2l0aCIsIm1hcCIsInN1YnN0cmluZyIsInByb3BlcnR5RGVzY3JpcHRvclBhdGNoIiwicGF0Y2hUYXJnZXRzIiwiaW50ZXJuYWxXaW5kb3dfMSIsImlnbm9yZUVycm9yUHJvcGVydGllcyIsImV2ZW50TmFtZXMiLCJTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UUyIsIlNZTUJPTF9VTlBBVENIRURfRVZFTlRTIiwiem9uZVN5bWJvbCIsIl9kZWZpbmVQcm9wZXJ0eSIsIl9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfY3JlYXRlIiwidW5jb25maWd1cmFibGVzS2V5IiwicHJvcGVydHlQYXRjaCIsImlzVW5jb25maWd1cmFibGUiLCJvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWciLCJyZXdyaXRlRGVzY3JpcHRvciIsIl90cnlEZWZpbmVQcm9wZXJ0eSIsImRlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsIl9iIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltIiwicHJvcGVydGllc09iamVjdCIsImlzRnJvemVuIiwic3dhbGxvd0Vycm9yIiwiZGVzY0pzb24iLCJsb2ciLCJldmVudFRhcmdldExlZ2FjeVBhdGNoIiwiV1RGX0lTU1VFXzU1NSIsIk5PX0VWRU5UX1RBUkdFVCIsInNwbGl0IiwiRVZFTlRfVEFSR0VUIiwiaXNXdGYiLCJXVEZfSVNTVUVfNTU1X0FSUkFZIiwiaXNEaXNhYmxlSUVDaGVjayIsImlzRW5hYmxlQ3Jvc3NDb250ZXh0Q2hlY2siLCJGVU5DVElPTl9XUkFQUEVSIiwiQlJPV1NFUl9UT09MUyIsInBvaW50ZXJFdmVudHNNYXAiLCJ0YXJnZXRzIiwiY2hlY2tJRUFuZENyb3NzQ29udGV4dCIsInRlc3RTdHJpbmciLCJhcGlUeXBlcyIsInBvaW50ZXJFdmVudE5hbWUiLCJXUyIsIldlYlNvY2tldCIsIkV2ZW50VGFyZ2V0IiwieCIsInkiLCJzb2NrZXQiLCJwcm94eVNvY2tldCIsInByb3h5U29ja2V0UHJvdG8iLCJvbm1lc3NhZ2VEZXNjIiwicHJvcE5hbWUiLCJwcm9wZXJ0eVN5bWJvbCIsImdsb2JhbFdlYlNvY2tldCIsInByb3BlcnR5RGVzY3JpcHRvckxlZ2FjeVBhdGNoIiwiY2FuUGF0Y2hWaWFQcm9wZXJ0eURlc2NyaXB0b3IiLCJzdXBwb3J0c1dlYlNvY2tldCIsInBhdGNoVmlhQ2FwdHVyaW5nQWxsVGhlRXZlbnRzIiwiSFRNTEVsZW1lbnQiLCJFbGVtZW50IiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwib25jbGljayIsIlhNTEh0dHBSZXF1ZXN0IiwiT05fUkVBRFlfU1RBVEVfQ0hBTkdFIiwiWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUiLCJ4aHJEZXNjIiwicmVxIiwib25yZWFkeXN0YXRlY2hhbmdlIiwiU1lNQk9MX0ZBS0VfT05SRUFEWVNUQVRFQ0hBTkdFXzEiLCJkZXRlY3RGdW5jIiwiZ2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TmFtZXMiLCJkb2N1bWVudEV2ZW50TmFtZXMiLCJ3aW5kb3dFdmVudE5hbWVzIiwiaHRtbEVsZW1lbnRFdmVudE5hbWVzIiwiaWVFbGVtZW50RXZlbnROYW1lcyIsIndlYmdsRXZlbnROYW1lcyIsImZvcm1FdmVudE5hbWVzIiwiZGV0YWlsRXZlbnROYW1lcyIsInVuYm91bmRLZXkiLCJfbG9vcF81IiwicHJvcGVydHkiLCJvbnByb3BlcnR5IiwiZWx0IiwiYm91bmQiLCJwYXJlbnRFbGVtZW50IiwicmVnaXN0ZXJFbGVtZW50UGF0Y2giLCJ0YXNrU3ltYm9sIiwicGF0Y2hUaW1lciIsInNldE5hbWUiLCJjYW5jZWxOYW1lIiwibmFtZVN1ZmZpeCIsImNsZWFyTmF0aXZlIiwidGFza3NCeUhhbmRsZUlkIiwiY2xlYXJUYXNrIiwib3B0aW9uc18xIiwiZGVsYXkiLCJjYWxsYmFja18xIiwidGltZXIiLCJoYW5kbGUiLCJyZWYiLCJ1bnJlZiIsImJpbmQiLCJpZCIsInBhdGNoQ3VzdG9tRWxlbWVudHMiLCJjdXN0b21FbGVtZW50cyIsImV2ZW50VGFyZ2V0UGF0Y2giLCJwYXRjaEV2ZW50IiwibGVnYWN5UGF0Y2giLCJjbGVhciIsImJsb2NraW5nTWV0aG9kcyIsIm5hbWVfMiIsInMiLCJYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0IiwicGF0Y2hYSFIiLCJYSFJfVEFTSyIsIlhIUl9TWU5DIiwiWEhSX0xJU1RFTkVSIiwiWEhSX1NDSEVEVUxFRCIsIlhIUl9VUkwiLCJYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRCIsImZpbmRQZW5kaW5nVGFzayIsIm9yaUFkZExpc3RlbmVyIiwib3JpUmVtb3ZlTGlzdGVuZXIiLCJYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0XzEiLCJYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0UHJvdG90eXBlIiwiUkVBRFlfU1RBVEVfQ0hBTkdFIiwiU0NIRURVTEVEIiwibmV3TGlzdGVuZXIiLCJyZWFkeVN0YXRlIiwiRE9ORSIsImFib3J0ZWQiLCJsb2FkVGFza3MiLCJvcmlJbnZva2VfMSIsInN0b3JlZFRhc2siLCJzZW5kTmF0aXZlIiwicGxhY2Vob2xkZXJDYWxsYmFjayIsImFib3J0TmF0aXZlIiwib3Blbk5hdGl2ZSIsIlhNTEhUVFBSRVFVRVNUX1NPVVJDRSIsImZldGNoVGFza0Fib3J0aW5nIiwiZmV0Y2hUYXNrU2NoZWR1bGluZyIsInVybCIsImdlb2xvY2F0aW9uIiwiZmluZFByb21pc2VSZWplY3Rpb25IYW5kbGVyIiwiZXZlbnRUYXNrcyIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsImV2dCJdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMl19