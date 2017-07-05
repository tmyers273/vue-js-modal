(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-js-modal"] = factory(require("vue"));
	else
		root["vue-js-modal"] = factory(root["vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_16__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Modal = __webpack_require__(5);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Plugin = {
    install: function install(Vue) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (this.installed) {
            return;
        }

        this.installed = true;
        this.event = new Vue();

        Vue.prototype.$modal = {
            show: function show(name, params) {
                Plugin.event.$emit('toggle', name, true, params);
            },
            hide: function hide(name, params) {
                Plugin.event.$emit('toggle', name, false, params);
            },
            toggle: function toggle(name, params) {
                Plugin.event.$emit('toggle', name, undefined, params);
            }
        };

        var component_name = options.component_name ? options.component_name : 'modal';

        Vue.component(component_name, _Modal2.default);
    }
};

exports.default = Plugin;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var inRange = exports.inRange = function inRange(from, to, value) {
  if (value < from) {
    return from;
  }

  if (value > to) {
    return to;
  }

  return value;
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(15)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(13)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(11),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\tom\\vue-js-modal\\src\\Modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40dd3b1e", Component.options)
  } else {
    hotAPI.reload("data-v-40dd3b1e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(16);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _Resizer = __webpack_require__(10);

var _Resizer2 = _interopRequireDefault(_Resizer);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'VueJsModal',
  props: {
    name: {
      required: true,
      type: String
    },
    delay: {
      type: Number,
      default: 0
    },
    resizable: {
      type: Boolean,
      default: false
    },
    adaptive: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: [Boolean, String],
      default: false
    },
    transition: {
      type: String
    },
    classes: {
      type: [String, Array],
      default: 'v--modal'
    },
    minWidth: {
      type: Number,
      default: 0,
      validator: function validator(value) {
        return value >= 0;
      }
    },
    minHeight: {
      type: Number,
      default: 0,
      validator: function validator(value) {
        return value >= 0;
      }
    },
    maxAdaptiveWidth: {
      type: Number,
      default: 1
    },
    maxAdaptiveHeight: {
      type: Number,
      default: 1
    },
    width: {
      type: Number,
      default: 600,
      validator: function validator(value) {
        return value >= 0;
      }
    },
    height: {
      type: [Number, String],
      default: 300,
      validator: function validator(value) {
        if (typeof value === 'string') {
          return value === 'auto';
        }

        if (typeof value === 'number') {
          return value >= 0;
        }
      }
    },
    pivotX: {
      type: Number,
      default: 0.5,
      validator: function validator(value) {
        return value >= 0 && value <= 1;
      }
    },
    pivotY: {
      type: Number,
      default: 0.5,
      validator: function validator(value) {
        return value >= 0 && value <= 1;
      }
    }
  },
  components: {
    Resizer: _Resizer2.default
  },
  data: function data() {
    return {
      visible: false,

      visibility: {
        modal: false,
        overlay: false
      },

      shift: {
        left: 0,
        top: 0
      },

      modal: {
        width: this.width,
        height: this.height
      },

      window: {
        width: 0,
        height: 0
      },

      draggableElement: false
    };
  },

  watch: {
    visible: function visible(value) {
      var _this = this;

      if (value) {
        this.visibility.overlay = true;
        this.adaptSize();

        setTimeout(function () {
          _this.visibility.modal = true;
          _this.$nextTick(function () {
            _this.addDraggableListeners();
          });
        }, this.delay);
      } else {
        this.visibility.modal = false;

        setTimeout(function () {
          _this.visibility.overlay = false;
          _this.$nextTick(function () {
            _this.removeDraggableListeners();
          });
        }, this.delay);
      }
    }
  },
  beforeMount: function beforeMount() {
    var _this2 = this;

    _index2.default.event.$on('toggle', function (name, state, params) {
      if (name === _this2.name) {
        if (typeof state === 'undefined') {
          state = !_this2.visible;
        }

        _this2.toggle(state, params);
      }
    });

    window.addEventListener('resize', this.onWindowResize);
    this.onWindowResize();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  },

  computed: {
    position: function position() {
      var window = this.window,
          modal = this.modal,
          shift = this.shift;

      var maxLeft = window.width - modal.width;
      var maxTop = window.height - modal.height;

      var left = shift.left + this.pivotX * (window.width - modal.width);
      var top = shift.top + this.pivotY * (window.height - modal.height);

      return {
        left: (0, _util.inRange)(0, maxLeft, left),
        top: (0, _util.inRange)(0, maxTop, top)
      };
    },
    modalClass: function modalClass() {
      return ['v--modal-box', this.classes];
    },
    modalStyle: function modalStyle() {
      return {
        top: this.position.top + 'px',
        left: this.position.left + 'px',
        width: this.modal.width + 'px',
        height: this.modal.height + 'px'
      };
    }
  },
  methods: {
    onWindowResize: function onWindowResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      this.adaptSize();
    },
    genEventObject: function genEventObject(params) {
      var data = {
        name: this.name,
        timestamp: Date.now(),
        canceled: false,
        ref: this.$refs.modal,
        stop: function stop() {
          this.canceled = true;
        }
      };

      return _vue2.default.util.extend(data, params || {});
    },
    adaptSize: function adaptSize() {
      if (this.adaptive) {
        this.modal.width = (0, _util.inRange)(0, this.window.width * this.maxAdaptiveWidth, this.modal.width);
        this.modal.height = (0, _util.inRange)(0, this.window.height * this.maxAdaptiveHeight, this.modal.height);
      }
    },
    resize: function resize(event) {
      this.modal.width = event.size.width;
      this.modal.height = event.size.height;

      var size = this.modal.size;

      var resizeEvent = this.genEventObject({ size: size });

      this.$emit('resize', resizeEvent);
    },
    toggle: function toggle(state, params) {
      var beforeEventName = this.visible ? 'before-close' : 'before-open';
      var afterEventName = this.visible ? 'closed' : 'opened';

      var stopEventExecution = false;

      var stop = function stop() {
        stopEventExecution = true;
      };
      var beforeEvent = this.genEventObject({ stop: stop, state: state, params: params });

      this.$emit(beforeEventName, beforeEvent);

      if (!stopEventExecution) {
        var afterEvent = this.genEventObject({ state: state, params: params });

        this.visible = state;
        this.$emit(afterEventName, afterEvent);
      }
    },
    emitCancelableEvent: function emitCancelableEvent(data) {
      var stopEventExecution = false;
      var stop = function stop() {
        stopEventExecution = true;
      };
      var event = this.genEventObject(data);
    },
    getDraggableElement: function getDraggableElement() {
      var selector = typeof this.draggable !== 'string' ? '.v--modal-box' : this.draggable;

      if (selector) {
        var handler = this.$refs.overlay.querySelector(selector);
        if (handler) {
          return handler;
        }
      }
    },
    addDraggableListeners: function addDraggableListeners() {
      var _this3 = this;

      if (!this.draggable) {
        return;
      }

      var dragger = this.getDraggableElement();

      if (dragger) {
        var startX = 0;
        var startY = 0;
        var cachedShiftX = 0;
        var cachedShiftY = 0;

        var getPosition = function getPosition(event) {
          return event.touches && event.touches.length > 0 ? event.touches[0] : event;
        };

        var mousedown = function mousedown(event) {
          var _getPosition = getPosition(event),
              clientX = _getPosition.clientX,
              clientY = _getPosition.clientY;

          document.addEventListener('mousemove', _mousemove);
          document.addEventListener('mouseup', _mouseup);

          document.addEventListener('touchmove', _mousemove);
          document.addEventListener('touchend', _mouseup);

          startX = clientX;
          startY = clientY;
          cachedShiftX = _this3.shift.left;
          cachedShiftY = _this3.shift.top;

          event.preventDefault();
        };

        var _mousemove = function _mousemove(event) {
          var _getPosition2 = getPosition(event),
              clientX = _getPosition2.clientX,
              clientY = _getPosition2.clientY;

          _this3.shift.left = cachedShiftX + clientX - startX;
          _this3.shift.top = cachedShiftY + clientY - startY;
          event.preventDefault();
        };

        var _mouseup = function _mouseup(event) {
          document.removeEventListener('mousemove', _mousemove);
          document.removeEventListener('mouseup', _mouseup);

          document.removeEventListener('touchmove', _mousemove);
          document.removeEventListener('touchend', _mouseup);

          event.preventDefault();
        };

        dragger.addEventListener('mousedown', mousedown);
        dragger.addEventListener('touchstart', mousedown);
      }
    },
    removeDraggableListeners: function removeDraggableListeners() {}
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(1);

exports.default = {
  name: 'VueJsModalResizer',
  props: {
    minHeight: {
      type: Number,
      default: 0
    },
    minWidth: {
      type: Number,
      default: 0
    } },
  data: function data() {
    return {
      clicked: false,
      size: {}
    };
  },
  mounted: function mounted() {
    this.$el.addEventListener('mousedown', this.start, false);
  },

  computed: {
    className: function className() {
      return { 'vue-modal-resizer': true, 'clicked': this.clicked };
    }
  },
  methods: {
    start: function start(event) {
      this.clicked = true;

      window.addEventListener('mousemove', this.mousemove, false);
      window.addEventListener('mouseup', this.stop, false);

      event.stopPropagation();
      event.preventDefault();
    },
    stop: function stop() {
      this.clicked = false;

      window.removeEventListener('mousemove', this.mousemove, false);
      window.removeEventListener('mouseup', this.stop, false);

      this.$emit('resize-stop', {
        element: this.$el.parentElement,
        size: this.size
      });
    },
    mousemove: function mousemove(event) {
      this.resize(event);
    },
    resize: function resize(event) {
      var el = this.$el.parentElement;

      if (el) {
        var width = event.clientX - el.offsetLeft;
        var height = event.clientY - el.offsetTop;

        width = (0, _util.inRange)(this.minWidth, window.innerWidth, width);
        height = (0, _util.inRange)(this.minHeight, window.innerHeight, height);

        this.size = { width: width, height: height };
        el.style.width = width + 'px';
        el.style.height = height + 'px';

        this.$emit('resize', {
          element: el,
          size: this.size
        });
      }
    }
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.v--modal-overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.2);\n  z-index: 999;\n  opacity: 1;\n}\n.v--modal-overlay .v--modal-box {\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.v--modal {\n  background-color: white;\n  text-align: left;\n  border-radius: 3px;\n  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, .4);\n  padding: 0;\n}\n.v--modal.v--modal-fullscreen {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  left: 0;\n  top: 0;\n}\n.v--modal-top-right {\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.overlay-fade-enter-active, .overlay-fade-leave-active {\n  transition: all 0.2s;\n}\n.overlay-fade-enter, .overlay-fade-leave-active {\n  opacity: 0;\n}\n.nice-modal-fade-enter-active, .nice-modal-fade-leave-active {\n  transition: all 0.4s;\n}\n.nice-modal-fade-enter, .nice-modal-fade-leave-active {\n  opacity: 0;\n  transform: translateY(-20px);\n}\n", "", {"version":3,"sources":["/./src/Modal.vue?e9652fe6"],"names":[],"mappings":";AAwXA;EACA,gBAAA;EACA,QAAA;EACA,OAAA;EACA,aAAA;EACA,cAAA;EACA,+BAAA;EACA,aAAA;EACA,WAAA;CACA;AAEA;EACA,mBAAA;EACA,iBAAA;EACA,uBAAA;CACA;AAEA;EACA,wBAAA;EACA,iBAAA;EACA,mBAAA;EACA,kDAAA;EACA,WAAA;CACA;AAEA;EACA,aAAA;EACA,cAAA;EACA,UAAA;EACA,QAAA;EACA,OAAA;CACA;AAEA;EACA,eAAA;EACA,mBAAA;EACA,SAAA;EACA,OAAA;CACA;AAEA;EACA,qBAAA;CACA;AAEA;EACA,WAAA;CACA;AAEA;EACA,qBAAA;CACA;AAEA;EACA,WAAA;EACA,6BAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\r\n  <transition name=\"overlay-fade\">\r\n    <div v-if=\"visibility.overlay\"\r\n         ref=\"overlay\"\r\n         class=\"v--modal-overlay\"\r\n         :aria-expanded=\"visible.toString()\"\r\n         :data-modal=\"name\"\r\n         @mousedown.stop=\"toggle(false)\">\r\n      <div class=\"v--modal-top-right\">\r\n        <slot name=\"top-right\"/>\r\n      </div>\r\n      <transition :name=\"transition\">\r\n        <div v-if=\"visibility.modal\"\r\n             ref=\"modal\"\r\n             :class=\"modalClass\"\r\n             :style=\"modalStyle\"\r\n             @mousedown.stop>\r\n          <slot/>\r\n          <resizer v-if=\"resizable\"\r\n                   :min-width=\"minWidth\"\r\n                   :min-height=\"minHeight\"\r\n                   @resize=\"resize\"/>\r\n        </div>\r\n      </transition>\r\n    </div>\r\n  </transition>\r\n</template>\r\n<script>\r\n  import Vue         from 'vue'\r\n  import Modal       from './index'\r\n  import Resizer     from './Resizer.vue'\r\n  import { inRange } from './util'\r\n\r\n  export default {\r\n    name: 'VueJsModal',\r\n    props: {\r\n      name: {\r\n        required: true,\r\n        type: String\r\n      },\r\n      delay: {\r\n        type: Number,\r\n        default: 0,\r\n      },\r\n      resizable: {\r\n        type: Boolean,\r\n        default: false\r\n      },\r\n      adaptive: {\r\n        type: Boolean,\r\n        default: false\r\n      },\r\n      draggable: {\r\n        type: [Boolean, String],\r\n        default: false\r\n      },\r\n      transition: {\r\n        type: String\r\n      },\r\n      classes: {\r\n        type: [String, Array],\r\n        default: 'v--modal',\r\n      },\r\n      minWidth: {\r\n        type: Number,\r\n        default: 0,\r\n        validator (value) {\r\n          return value >= 0\r\n        }\r\n      },\r\n      minHeight: {\r\n        type: Number,\r\n        default: 0,\r\n        validator (value) {\r\n          return value >= 0\r\n        }\r\n      },\r\n      maxAdaptiveWidth: {\r\n        type: Number,\r\n        default: 1\r\n        // ,\r\n        // validator (value) {\r\n        //   return value > 0 && value <= 1\r\n        // }\r\n      },\r\n      maxAdaptiveHeight: {\r\n        type: Number,\r\n        default: 1\r\n        // ,\r\n        // validator (value) {\r\n        //  return value > 0 && value <= 1\r\n        // }\r\n      },\r\n      width: {\r\n        type: Number,\r\n        default: 600,\r\n        validator (value) {\r\n          return value >= 0\r\n        }\r\n      },\r\n      height: {\r\n        type: [Number, String],\r\n        default: 300,\r\n        validator (value) {\r\n          if (typeof value === 'string') {\r\n            return value === 'auto'\r\n          }\r\n\r\n          if (typeof value === 'number') {\r\n            return value >= 0\r\n          }\r\n        }\r\n      },\r\n      pivotX: {\r\n        type: Number,\r\n        default: 0.5,\r\n        validator (value) {\r\n          return value >= 0 && value <= 1\r\n        }\r\n      },\r\n      pivotY: {\r\n        type: Number,\r\n        default: 0.5,\r\n        validator (value) {\r\n          return value >= 0 && value <= 1\r\n        }\r\n      }\r\n    },\r\n    components: {\r\n      Resizer\r\n    },\r\n    data () {\r\n      return {\r\n        visible: false,\r\n\r\n        visibility: {\r\n          modal: false,\r\n          overlay: false\r\n        },\r\n\r\n        shift: {\r\n          left: 0,\r\n          top: 0\r\n        },\r\n\r\n        modal: {\r\n          width: this.width,\r\n          height: this.height\r\n        },\r\n\r\n        window: {\r\n          width: 0,\r\n          height: 0\r\n        },\r\n\r\n        draggableElement: false\r\n      };\r\n    },\r\n    watch: {\r\n      visible (value) {\r\n        if (value) {\r\n          this.visibility.overlay = true\r\n          this.adaptSize()\r\n\r\n          setTimeout(() => {\r\n            this.visibility.modal = true\r\n            this.$nextTick(() => {\r\n              this.addDraggableListeners()\r\n            })\r\n          }, this.delay)\r\n        } else {\r\n          this.visibility.modal = false\r\n\r\n          setTimeout(() => {\r\n            this.visibility.overlay = false\r\n            this.$nextTick(() => {\r\n              this.removeDraggableListeners()\r\n            })\r\n          }, this.delay)\r\n        }\r\n      }\r\n    },\r\n    beforeMount () {\r\n      Modal.event.$on('toggle', (name, state, params) => {\r\n        if (name === this.name) {\r\n          if (typeof state === 'undefined') {\r\n            state = !this.visible\r\n          }\r\n\r\n          this.toggle(state, params)\r\n        }\r\n      });\r\n\r\n      window.addEventListener('resize', this.onWindowResize)\r\n      this.onWindowResize()\r\n    },\r\n    beforeDestroy () {\r\n      window.removeEventListener('resize', this.onWindowResize)\r\n    },\r\n    computed: {\r\n      position () {\r\n        const { window, modal, shift } = this\r\n        const maxLeft = window.width - modal.width\r\n        const maxTop = window.height - modal.height\r\n\r\n        const left = shift.left + this.pivotX * (window.width - modal.width)\r\n        const top = shift.top + this.pivotY * (window.height - modal.height)\r\n\r\n        return {\r\n          left: inRange(0, maxLeft, left),\r\n          top: inRange(0, maxTop, top)\r\n        }\r\n      },\r\n\r\n      modalClass () {\r\n        return ['v--modal-box', this.classes]\r\n      },\r\n\r\n      modalStyle () {\r\n        return {\r\n          top: this.position.top + 'px',\r\n          left: this.position.left + 'px',\r\n          width: this.modal.width + 'px',\r\n          height: this.modal.height + 'px'\r\n        }\r\n      }\r\n    },\r\n    methods: {\r\n      onWindowResize () {\r\n        this.window.width = window.innerWidth\r\n        this.window.height = window.innerHeight\r\n        this.adaptSize()\r\n      },\r\n\r\n      genEventObject (params) {\r\n        //todo: clean this up (change to ...)\r\n        var data = {\r\n          name: this.name,\r\n          timestamp: Date.now(),\r\n          canceled: false,\r\n          ref: this.$refs.modal,\r\n          stop: function() {\r\n            this.canceled = true\r\n          }\r\n        }\r\n\r\n        return Vue.util.extend(data, params || {});\r\n      },\r\n\r\n      adaptSize () {\r\n        if (this.adaptive) {\r\n          this.modal.width = inRange(\r\n            0,\r\n            this.window.width * this.maxAdaptiveWidth,\r\n            this.modal.width)\r\n          this.modal.height = inRange(\r\n            0,\r\n            this.window.height * this.maxAdaptiveHeight,\r\n            this.modal.height)\r\n        }\r\n      },\r\n\r\n      resize (event) {\r\n        this.modal.width = event.size.width\r\n        this.modal.height = event.size.height\r\n\r\n        const { size } = this.modal\r\n        const resizeEvent = this.genEventObject({ size });\r\n\r\n        this.$emit('resize', resizeEvent)\r\n      },\r\n\r\n      toggle (state, params) {\r\n        const beforeEventName = this.visible ? 'before-close' : 'before-open'\r\n        const afterEventName = this.visible ? 'closed' : 'opened'\r\n\r\n        let stopEventExecution = false\r\n\r\n        const stop = () => { stopEventExecution = true }\r\n        const beforeEvent = this.genEventObject({ stop, state, params })\r\n\r\n        this.$emit(beforeEventName, beforeEvent)\r\n\r\n        if (!stopEventExecution) {\r\n          const afterEvent = this.genEventObject({ state, params })\r\n\r\n          this.visible = state\r\n          this.$emit(afterEventName, afterEvent)\r\n        }\r\n      },\r\n\r\n      emitCancelableEvent (data) {\r\n        let stopEventExecution = false\r\n        let stop = () => { stopEventExecution = true }\r\n        let event = this.genEventObject(data)\r\n      },\r\n\r\n      getDraggableElement () {\r\n        var selector = typeof this.draggable !== 'string'\r\n          ? '.v--modal-box'\r\n          : this.draggable\r\n\r\n        if (selector) {\r\n          var handler = this.$refs.overlay.querySelector(selector)\r\n          if (handler) {\r\n            return handler\r\n          }\r\n        }\r\n      },\r\n\r\n      addDraggableListeners () {\r\n        if (!this.draggable) {\r\n          return;\r\n        }\r\n\r\n        let dragger = this.getDraggableElement()\r\n\r\n        if (dragger) {\r\n          let startX = 0\r\n          let startY = 0\r\n          let cachedShiftX = 0\r\n          let cachedShiftY = 0\r\n\r\n          let getPosition = (event) => {\r\n              return event.touches && event.touches.length > 0\r\n                ? event.touches[0]\r\n                : event\r\n          }\r\n\r\n          let mousedown = (event) => {\r\n            let { clientX, clientY } = getPosition(event)\r\n\r\n            document.addEventListener('mousemove', mousemove)\r\n            document.addEventListener('mouseup', mouseup)\r\n\r\n            document.addEventListener('touchmove', mousemove)\r\n            document.addEventListener('touchend', mouseup)\r\n\r\n            startX = clientX\r\n            startY = clientY\r\n            cachedShiftX = this.shift.left\r\n            cachedShiftY = this.shift.top\r\n\r\n            event.preventDefault()\r\n          }\r\n\r\n          let mousemove = (event) => {\r\n            let { clientX, clientY } = getPosition(event)\r\n\r\n            this.shift.left = cachedShiftX + clientX - startX\r\n            this.shift.top = cachedShiftY + clientY - startY\r\n            event.preventDefault()\r\n          }\r\n\r\n          let mouseup = (event) => {\r\n            document.removeEventListener('mousemove', mousemove)\r\n            document.removeEventListener('mouseup', mouseup)\r\n\r\n            document.removeEventListener('touchmove', mousemove)\r\n            document.removeEventListener('touchend', mouseup)\r\n\r\n            event.preventDefault()\r\n          }\r\n\r\n          dragger.addEventListener('mousedown', mousedown)\r\n          dragger.addEventListener('touchstart', mousedown)\r\n        }\r\n      },\r\n\r\n      removeDraggableListeners () {\r\n      //  console.log('removing draggable handlers')\r\n      }\r\n    }\r\n  };\r\n</script>\r\n<style>\r\n  .v--modal-overlay {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: rgba(0, 0, 0, 0.2);\r\n    z-index: 999;\r\n    opacity: 1;\r\n  }\r\n\r\n  .v--modal-overlay .v--modal-box {\r\n    position: relative;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  .v--modal {\r\n    background-color: white;\r\n    text-align: left;\r\n    border-radius: 3px;\r\n    box-shadow: 0 20px 60px -2px rgba(27, 33, 58, .4);\r\n    padding: 0;\r\n  }\r\n\r\n  .v--modal.v--modal-fullscreen {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    margin: 0;\r\n    left: 0;\r\n    top: 0;\r\n  }\r\n\r\n  .v--modal-top-right {\r\n    display: block;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n\r\n  .overlay-fade-enter-active, .overlay-fade-leave-active {\r\n    transition: all 0.2s;\r\n  }\r\n\r\n  .overlay-fade-enter, .overlay-fade-leave-active {\r\n    opacity: 0;\r\n  }\r\n\r\n  .nice-modal-fade-enter-active, .nice-modal-fade-leave-active {\r\n    transition: all 0.4s;\r\n  }\r\n\r\n  .nice-modal-fade-enter, .nice-modal-fade-leave-active {\r\n    opacity: 0;\r\n    transform: translateY(-20px);\r\n  }\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.vue-modal-resizer {\r\n  display: block;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  width: 12px;\r\n  height: 12px;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 9999999;\r\n  background: transparent;\r\n  cursor: se-resize;\n}\n.vue-modal-resizer::after {\r\n  display: block;\r\n  position: absolute;\r\n  content: '';\r\n  background: transparent;\r\n  left: 0;\r\n  top: 0;\r\n  width: 0;\r\n  height: 0;\r\n  border-bottom: 10px solid #ddd;\r\n  border-left: 10px solid transparent;\n}\n.vue-modal-resizer.clicked::after {\r\n  border-bottom: 10px solid #369BE9;\n}\r\n", "", {"version":3,"sources":["/./src/Resizer.vue?8a2b1a06"],"names":[],"mappings":";AA+EA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,SAAA;EACA,UAAA;EACA,iBAAA;EACA,wBAAA;EACA,kBAAA;CACA;AAEA;EACA,eAAA;EACA,mBAAA;EACA,YAAA;EACA,wBAAA;EACA,QAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,+BAAA;EACA,oCAAA;CACA;AAEA;EACA,kCAAA;CACA","file":"Resizer.vue","sourcesContent":["<template>\r\n  <div :class=\"className\"></div>\r\n</template>\r\n<script>\r\nimport { inRange } from './util'\r\n\r\nexport default {\r\n  name: 'VueJsModalResizer',\r\n  props: {\r\n    minHeight: {\r\n      type: Number,\r\n      default: 0\r\n    },\r\n    minWidth: {\r\n      type: Number,\r\n      default: 0\r\n    }},\r\n  data() {\r\n    return {\r\n      clicked: false,\r\n      size: {}\r\n    }\r\n  },\r\n  mounted() {\r\n    this.$el.addEventListener('mousedown', this.start, false)\r\n  },\r\n  computed: {\r\n    className () {\r\n      return {'vue-modal-resizer': true, 'clicked': this.clicked}\r\n    }\r\n  },\r\n  methods: {\r\n    start(event) {\r\n      this.clicked = true\r\n\r\n      window.addEventListener('mousemove', this.mousemove, false)\r\n      window.addEventListener('mouseup', this.stop, false)\r\n\r\n      event.stopPropagation()\r\n      event.preventDefault()\r\n    },\r\n    stop() {\r\n      this.clicked = false\r\n\r\n      window.removeEventListener('mousemove', this.mousemove, false)\r\n      window.removeEventListener('mouseup', this.stop, false)\r\n\r\n      this.$emit('resize-stop', {\r\n        element: this.$el.parentElement,\r\n        size: this.size\r\n      });\r\n    },\r\n    mousemove(event) {\r\n      this.resize(event)\r\n    },\r\n    resize(event) {\r\n      var el = this.$el.parentElement\r\n\r\n      if (el) {\r\n        var width = event.clientX - el.offsetLeft\r\n        var height = event.clientY - el.offsetTop\r\n\r\n        width = inRange(this.minWidth, window.innerWidth, width)\r\n        height = inRange(this.minHeight, window.innerHeight, height)\r\n\r\n        this.size = {width, height}\r\n        el.style.width = width + 'px'\r\n        el.style.height = height + 'px'\r\n\r\n        this.$emit('resize', {\r\n          element: el,\r\n          size: this.size\r\n        })\r\n      }\r\n    }\r\n  }\r\n}\r\n</script>\r\n<style>\r\n.vue-modal-resizer {\r\n  display: block;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  width: 12px;\r\n  height: 12px;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 9999999;\r\n  background: transparent;\r\n  cursor: se-resize;\r\n}\r\n\r\n.vue-modal-resizer::after {\r\n  display: block;\r\n  position: absolute;\r\n  content: '';\r\n  background: transparent;\r\n  left: 0;\r\n  top: 0;\r\n  width: 0;\r\n  height: 0;\r\n  border-bottom: 10px solid #ddd;\r\n  border-left: 10px solid transparent;\r\n}\r\n\r\n.vue-modal-resizer.clicked::after {\r\n  border-bottom: 10px solid #369BE9;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(14)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(12),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\tom\\vue-js-modal\\src\\Resizer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Resizer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60fe12fc", Component.options)
  } else {
    hotAPI.reload("data-v-60fe12fc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "overlay-fade"
    }
  }, [(_vm.visibility.overlay) ? _c('div', {
    ref: "overlay",
    staticClass: "v--modal-overlay",
    attrs: {
      "aria-expanded": _vm.visible.toString(),
      "data-modal": _vm.name
    },
    on: {
      "mousedown": function($event) {
        $event.stopPropagation();
        _vm.toggle(false)
      }
    }
  }, [_c('div', {
    staticClass: "v--modal-top-right"
  }, [_vm._t("top-right")], 2), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [(_vm.visibility.modal) ? _c('div', {
    ref: "modal",
    class: _vm.modalClass,
    style: (_vm.modalStyle),
    on: {
      "mousedown": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_vm._t("default"), _vm._v(" "), (_vm.resizable) ? _c('resizer', {
    attrs: {
      "min-width": _vm.minWidth,
      "min-height": _vm.minHeight
    },
    on: {
      "resize": _vm.resize
    }
  }) : _vm._e()], 2) : _vm._e()])], 1) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-40dd3b1e", module.exports)
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.className
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-60fe12fc", module.exports)
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0ba9730a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-40dd3b1e!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-40dd3b1e!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("43d3f0d1", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-60fe12fc!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Resizer.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-60fe12fc!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Resizer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map