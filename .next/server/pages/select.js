module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/select.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/components/commonButton.js":
/*!****************************************!*\
  !*** ./src/components/commonButton.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\project\\dajungpay\\src\\components\\commonButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CommonButton = props => {
  return __jsx(ButtonStyle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, props.title);
};

const ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "commonButton__ButtonStyle",
  componentId: "sc-122lx69-0"
})(["width:200px;height:60px;background-color:#ff6464;border:0;border-radius:50px;margin:0 auto 0;display:block;color:white;font-size:24px;outline:0;box-shadow:0px 0px 10px rgba(0,0,0,0.1);transition:all .3s ease-in-out;&:active{border:0;outline:0;}&:hover{cursor:pointer;background-color:#FF908A;}"]);
/* harmony default export */ __webpack_exports__["default"] = (CommonButton);

/***/ }),

/***/ "./src/components/currentState.js":
/*!****************************************!*\
  !*** ./src/components/currentState.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_img_backer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/img/backer.png */ "./src/data/img/backer.png");
/* harmony import */ var _data_img_backer_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_img_backer_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_img_day_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/img/day.png */ "./src/data/img/day.png");
/* harmony import */ var _data_img_day_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_img_day_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_img_status_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/img/status.png */ "./src/data/img/status.png");
/* harmony import */ var _data_img_status_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_img_status_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\project\\dajungpay\\src\\components\\currentState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // * 오른쪽 위쪽 후원자, 남은 기간, 전체 펀딩 현황

const CurrentState = () => {
  return __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(ListBorderStyle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "60"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: _data_img_backer_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: _data_img_backer_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 23
    }
  }))), __jsx(ListBorderStyle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "30"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: _data_img_day_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: _data_img_day_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 23
    }
  }))), __jsx(ListStyle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "65%"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: _data_img_status_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: _data_img_status_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 23
    }
  }))));
};

const ListStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "currentState__ListStyle",
  componentId: "sc-56rs60-0"
})(["float:left;width:160px;text-align:center;height:100px;& > p{font-size:45px;margin:10px 0 0 0;line-height:45px;color:#ff6464;}& > span{margin-top:9px;display:inline-block;}"]);
const ListBorderStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(ListStyle).withConfig({
  displayName: "currentState__ListBorderStyle",
  componentId: "sc-56rs60-1"
})(["border:0;border-right:1px solid #ff6464;border-style:dashed;"]);
/* harmony default export */ __webpack_exports__["default"] = (CurrentState);

/***/ }),

/***/ "./src/components/selectCard.js":
/*!**************************************!*\
  !*** ./src/components/selectCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_img_joy_pink_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/img/joy_pink.png */ "./src/data/img/joy_pink.png");
/* harmony import */ var _data_img_joy_pink_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_img_joy_pink_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_img_joy_white_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/img/joy_white.png */ "./src/data/img/joy_white.png");
/* harmony import */ var _data_img_joy_white_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_img_joy_white_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_img_funding_img1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/img/funding_img1.png */ "./src/data/img/funding_img1.png");
/* harmony import */ var _data_img_funding_img1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_img_funding_img1_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_img_kind_pink_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/img/kind_pink.png */ "./src/data/img/kind_pink.png");
/* harmony import */ var _data_img_kind_pink_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_img_kind_pink_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_img_kind_white_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/img/kind_white.png */ "./src/data/img/kind_white.png");
/* harmony import */ var _data_img_kind_white_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_img_kind_white_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_img_funding_img2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/img/funding_img2.png */ "./src/data/img/funding_img2.png");
/* harmony import */ var _data_img_funding_img2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_img_funding_img2_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_img_thanks_pink_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/img/thanks_pink.png */ "./src/data/img/thanks_pink.png");
/* harmony import */ var _data_img_thanks_pink_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_img_thanks_pink_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_img_thanks_white_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/img/thanks_white.png */ "./src/data/img/thanks_white.png");
/* harmony import */ var _data_img_thanks_white_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_data_img_thanks_white_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data_img_funding_img3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/img/funding_img3.png */ "./src/data/img/funding_img3.png");
/* harmony import */ var _data_img_funding_img3_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_data_img_funding_img3_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _data_img_un_pink_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/img/un_pink.png */ "./src/data/img/un_pink.png");
/* harmony import */ var _data_img_un_pink_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_data_img_un_pink_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _data_img_un_white_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/img/un_white.png */ "./src/data/img/un_white.png");
/* harmony import */ var _data_img_un_white_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_data_img_un_white_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _data_img_funding_img4_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../data/img/funding_img4.png */ "./src/data/img/funding_img4.png");
/* harmony import */ var _data_img_funding_img4_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_data_img_funding_img4_png__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\project\\dajungpay\\src\\components\\selectCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const SelectCard = props => {
  const {
    0: check,
    1: setCheck
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleClick = e => {
    setCheck(!check);
    console.log(check, props.id);
  };

  if (props.id === "joy") {
    return __jsx(SelectBox, {
      onClick: handleClick,
      check: check,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, __jsx(SelectBox_Left, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: check ? _data_img_joy_white_png__WEBPACK_IMPORTED_MODULE_3___default.a : _data_img_joy_pink_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }), __jsx(SelectText, {
      check: check,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }, "\uB2F9\uC2E0\uC774 '\uAE30\uC068'\uC744 \uB290\uAF08\uB2E4\uBA74 \uAE30\uC05C \uAC10\uC815\uC744 \uD380\uB529 \uD574\uC8FC\uC138\uC694")), __jsx(SelectBox_Right_1, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _data_img_funding_img1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }
    })));
  } else if (props.id === "kind") {
    return __jsx(SelectBox, {
      onClick: handleClick,
      check: check,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, __jsx(SelectBox_Left, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: check ? _data_img_kind_white_png__WEBPACK_IMPORTED_MODULE_6___default.a : _data_img_kind_pink_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }), __jsx(SelectText, {
      check: check,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, "\uB2F9\uC2E0\uC774 \u2018\uB2E4\uC815\uD568\u2019\uC744 \uB290\uAF08\uB2E4\uBA74 \uB2E4\uC815\uD55C \uAC10\uC815\uC744 \uD380\uB529 \uD574\uC8FC\uC138\uC694")), __jsx(SelectBox_Right_2, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _data_img_funding_img2_png__WEBPACK_IMPORTED_MODULE_7___default.a,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    })));
  } else if (props.id === "thanks") {
    return __jsx(SelectBox, {
      onClick: handleClick,
      check: check,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, __jsx(SelectBox_Left, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: check ? _data_img_thanks_white_png__WEBPACK_IMPORTED_MODULE_9___default.a : _data_img_thanks_pink_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }
    }), __jsx(SelectText, {
      check: check,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }, "\uB2F9\uC2E0\uC774 \u2018\uAC10\uC0AC\uD568\u2019\uC744 \uB290\uAF08\uB2E4\uBA74 \uAC10\uC0AC\uD55C \uAC10\uC815\uC744 \uD380\uB529 \uD574\uC8FC\uC138\uC694")), __jsx(SelectBox_Right_3, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _data_img_funding_img3_png__WEBPACK_IMPORTED_MODULE_10___default.a,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    })));
  } else if (props.id === "un") {
    return __jsx(SelectBox, {
      onClick: handleClick,
      check: check,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, __jsx(SelectBox_Left, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: check ? _data_img_un_white_png__WEBPACK_IMPORTED_MODULE_12___default.a : _data_img_un_pink_png__WEBPACK_IMPORTED_MODULE_11___default.a,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }), __jsx(SelectText, {
      check: check,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }, "\uB2F9\uC2E0\uC774 \u2018\uBD88\uD3B8\uD568\u2019\uC744 \uB290\uAF08\uB2E4\uBA74 \uBD88\uD3B8\uD55C \uAC10\uC815\uC744 \uD380\uB529 \uD574\uC8FC\uC138\uC694")), __jsx(SelectBox_Right_4, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _data_img_funding_img4_png__WEBPACK_IMPORTED_MODULE_13___default.a,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    })));
  }
};

const SelectBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "selectCard__SelectBox",
  componentId: "sc-2tky1s-0"
})(["width:750px;height:130px;position:relative;background-color:white;border:3px solid white;border-radius:16px;box-shadow:0 0 10px 0 rgba(0,0,0,0.05);transition:border 0.1s ease-in-out;transition:background-color 0.2s ease-in-out;cursor:pointer;&:hover{border:3px solid #ff6464;}", ""], props => props.check && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["background:#ff7b7b;border:3px solid #ff6464;"]));
const SelectBox_Left = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "selectCard__SelectBox_Left",
  componentId: "sc-2tky1s-1"
})(["width:460px;margin:28px 0 0 49px;font-size:18px;"]);
const SelectBox_Right_1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "selectCard__SelectBox_Right_1",
  componentId: "sc-2tky1s-2"
})(["width:219px;height:180px;position:absolute;bottom:-3px;right:18px;"]);
const SelectBox_Right_2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "selectCard__SelectBox_Right_2",
  componentId: "sc-2tky1s-3"
})(["width:210px;height:130px;position:absolute;top:-28px;right:27px;"]);
const SelectBox_Right_3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "selectCard__SelectBox_Right_3",
  componentId: "sc-2tky1s-4"
})(["width:204px;height:130px;position:absolute;top:-28px;right:18px;"]);
const SelectBox_Right_4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "selectCard__SelectBox_Right_4",
  componentId: "sc-2tky1s-5"
})(["width:170px;height:142px;position:absolute;top:-23px;right:52px;"]);
const SelectText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "selectCard__SelectText",
  componentId: "sc-2tky1s-6"
})(["margin:5px 0 0 0;color:#333;", ""], props => props.check && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["color:white;"]));
/* harmony default export */ __webpack_exports__["default"] = (SelectCard);

/***/ }),

/***/ "./src/data/img/backer.png":
/*!*********************************!*\
  !*** ./src/data/img/backer.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAARCAYAAACSGY9uAAAABHNCSVQICAgIfAhkiAAAA0VJREFUSEu9V0FSGzEQ1IwLww3yAuAFMS/AeQH8IOYFMQe0ewvcduVD/ATzAvyDwAtifmD/wLnZUGhSvaVxyev1rqGS6EJ5NZKmp3tagswOI0kSQRgRfcmy7LFpSb/fP9rb2/tMRCdEdOS9nxhjfg8GA/xdjTRNe977Y2a+z7Js2rRvaW3Xe3/OzE9xTlQOent7K5KPBzMriH5Ibm1+MBg86YckScbGmIuq5ERkIiJXCsxa+0hE51ooLVwdMBG5c87dWmtviei7/tY1a4B22bDqsDzPi32iQ2ZENBaReRTfRfLGmGme56ch/sOAtHC1gELFjowxnzUREVlVP8iuY4w5DPPPSNo5161KsAxeC7ZcLj8Nh8N5maE4PirOk+5fmi+KUQsoTkpE7p1zvSpGrLV9IvoBCTnnzjTGWjsioq8iAnaGrVZrtlgs5ugnZkYhhuilPM9RNDC6xtA/ARQZwGldo1bF3dzcdEK/KYMb9SCiqyzLRu8ANHPOnZQ30mI0MpQkCXR/iAo7567rGMKc9o/GweEODg4uvfdIopAi+sYYM2HmcVykv8GQMWbkvR+9vr4+Q8ZrpoCTkySBLL5FQNZsWkQ6sGLMx7JM07Sw0TqHiuecc3c7AlqTdSTvQq76W51yAxACcD+ISD82h1KiMIMx7DM6oLDRXQGB2QZAUyI6DoW7ds6h0KsRSW4GBSBfXAeVgOKF6ItWq1UwgrHtYg0MqcQ0vIekglOuMR3ukkpTKNk/1s+Z+axKrlt7SG/tXSscxzHzTBt9SxWLy7AsSyKCi+I1sXqBpGl64r3/BVnje1DKRYWj1tu2UvgRQGAguosgQ4l7pHy7l8+IAUUXZrEnTGZ/fx+mAqMqCoP1jS4XGNqwRyzW3sCGVYCZeaoMqZ2jRyK5Yn6K6oMR3QNOij5VQGBQRH6GM1fXhrX2koge8N17f4ZeaQRUx8x7HqcxoCa2FfBisZiEl0NhBOW+wD4Rc4Xr/XdA3vuyQWzFhxeF9x7XwYOIzF5eXjoAGC+A9Nrt9oSI5svlsttut8c7PX2qTv0IQ03sxPPKSJA93oZ4sW8MSFadbqfX9rYkQC/mmLnX9H+Lxr4HEDOPqlyybo8Avlde+wfo5L4wvh8pPQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/data/img/day.png":
/*!******************************!*\
  !*** ./src/data/img/day.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAATCAYAAADGWsDDAAAABHNCSVQICAgIfAhkiAAAAw9JREFUWEftWMuR2kAQ7R6Kz81kAI7AJoJlM9gMdh2BdUHoZvYmDYfFEZgMTAaGCKzNADLANwTFtKtlDTUIfUZ87Kotz4UC9fR0v3n9ugXC/3WCAPIvnuf19/s9jcfjRRlGbKuUuhNCrHzfn5r2juO06/X6B0Ts5/khornNOWVx6Od8ZqPR+MzfpZTP5r7BYPARAN7p37LO9TzvSSnVEUIsfN+fs20MynA4JP4MgiD+XrRc1x0h4hciWkgpD8knzl8QsV3mg4jWAPBJSjlL27qu6yDiS5EPpVRvPB6H+kKJ6IeOn+Mgom9F+83YXdedI+IdET1LKUdXA4VvRAjxkx3ygQAwE0LEQZtLKcUg9pMg1tvt9v1kMmGADkuDXpQUIt7rW2XmpkBhJsfJZawuInZuBgoALIloyrQDgG5yO69BEDBlC5dmpplc2R5+nrUvDUqRH82iW4ISn8+0A4AQEb8zUFEU9dK3bwZqssosg38NCgBMlVLT3W73eommrNiREGK+2WzCZrO5NEQtFiwWVZ0siy8RtRFRM8mKVSZYlzIlSw+1phhx3h+BUnRbmnIFQtvlWkbEB1Px0z6JaIWIsyiKRkWMyorllqBwXIkkODEojFYZfRExDILAyQPF3M9tstVqnWgLM6oqEH+LKSfdpwwQ83nSep80SJ7nMUMeq/gwbbfb7VdboG7MlOOWzInt9/tOxcR+8axgqn/F/bF5lQ50BVC4tB0AmOuZJHdOsZkNMrQhHt7MUlFKccmUDm+JrzXPMlVKyhaUpPUye1nMGYTcVQpKIjZHo3uGNx6AHs1eb5ZQetQ+hz15e2xBsdE9fYYNKEeje1ZwulxSoBxNldcE4hyhrQIKz021Wo3ZvfR9n8eKP+8+VZy8NVCyLjANSiil7JXU4ANPr3lMSd5vrMhSq9X4TTu+HZt1RvmERFSoKca5ceM4YYpNYNomD5SKPg5t0GYfM5rthBBTDWbWu88ljeMAip49bALTNnpO4e9cl4g4qbLfSK5M2AvdJiIf+9B/ZVyaT+n/J1UTfQv2vwEQikbYqp4pSAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/data/img/funding_img1.png":
/*!***************************************!*\
  !*** ./src/data/img/funding_img1.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/funding_img1-827076e96385e40f46db0925e5d453d5.png";

/***/ }),

/***/ "./src/data/img/funding_img2.png":
/*!***************************************!*\
  !*** ./src/data/img/funding_img2.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/funding_img2-fedb7363d70c0cbeaf559f6888f785e0.png";

/***/ }),

/***/ "./src/data/img/funding_img3.png":
/*!***************************************!*\
  !*** ./src/data/img/funding_img3.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/funding_img3-196e0ef19af2cc109f3038ef96f98793.png";

/***/ }),

/***/ "./src/data/img/funding_img4.png":
/*!***************************************!*\
  !*** ./src/data/img/funding_img4.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/data/img/joy_pink.png":
/*!***********************************!*\
  !*** ./src/data/img/joy_pink.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/data/img/joy_white.png":
/*!************************************!*\
  !*** ./src/data/img/joy_white.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAeCAYAAAAFFcHsAAAABHNCSVQICAgIfAhkiAAABMZJREFUaEPtWz2sTUEQ/qYmQUWHkNBRaUhQURASGg0KHQkqCglCoUNCp0BNQkeFhEZFpyBR0pFQr3ycfebO25/Zc+999z7OJifv3XNmZ3bm252/e65giiOE8A3Aqk7EUxE5rMWFEG4BOBvviYiklhNCeAlgd/fstoics3QhhD0AXqj7V0XkSk29EMJ2tcYaeen5dxF5FwlCCE8AHOo+fxORNerZBgDrxxA2IkvxLdrbyvtt7M64AcBqADSGZ1BRCnsgIvczoJFnHK9EhAAtDAMqnOAv4tPp0Bd8vbE8eudoRtZV0i2EwE15eQxhORsU7Z0DX09qXVP2hIUQBvA7a+qNPYD/1+NEd9666Wr0Xrf/3598GsA7GBq2KeKJnXzvApx0LvBNGLLueK+IjNim5s0iP+v2AWwUkc9diKrKceo4QuZdW5yUTLBKglsSq9piEgbqo3NuzryBv7CREm5/0SbrY4iavZMxv0VQAnwmfCdTPMxiFiV085DwLeHJ/yfBT2aenXsbSSRtNv8vga8qprifWDUxRMYxgG9Omk22RkpBRct+QCxBWWIuqvO756SLY0ndvvVyCU84f+CHELa0uH0AOwA8VHPeAjie4fHB3N9qPpMP+U1j3AHAq2WcAcArDupF/fTQOmndra5WrublkdOy7kibW1uSl3QxvEUQT+BNNeF95iSSRHfc+HmvEcSTqiuHlnXUaB8ASDafChOZu5xQz88DWOjadfe1Tlp37XVIuhnAigwvj5yafqnnubXNJfhHAewCsA7A2j7aJuZ8AvADwLPuamHrAcVrYLux9UayclrWqGntYfKu7TePWZ/8vkpPa94AfsWyk3T71jVOEtSfAD46GFKfWJXsB8ArDuYMlod273ym8wqGgTiGk2+MH93UNGO9xbsW+21e4tgvWRLthkvgM8zx4tD/e2XHPMSbj8xVzP/fwfeC3Eq3LGL+AH4rrD56/XU8k95i2JtlwreyK4d8avWjqhqgH1vXLLvBD3ZVSGkywWPpy1yI9imFhC8AeEUdGQJ0zlFd5CzBry5umRNY8G1ZptVjlbFP5QF9VedGeATgsWOjzbzUo4HGeZGkZCTW+60dPlt9NJ0ksxgv+NcB7OyLdmYe3T37CtwM2THrkz/JTNsqWeo85gziBcyDlYcXm1ynDTOWqHThBDC69pS8GBL4l+HCNsmeA7gxgO+B6g+NBzAvtxi3I70ty3j/HoBNiuHdzm17ZWg69icumInFPGOeTv7XHu1YayTdl5/1yfcAqD0fw9Qpz6QCzcUud4gkqe8mFqYvJfgpMJrqUodhxuU3yZPvWO7IF199NquV4WlPD+BnkJkl+Izvxzw7Zp5O/hsAlzILqp3E2vNWW4zLb6nBtzH/NQDGfW6ElsGewBEA+nU6Jo4Hpp3wlXrnNTD080k0ZHSHq48bnWbnMbUefp19LQEQM/2Y7cfHsaHDRDKO2ChL/dCGtX6x1O0T821nrlSOtIDfstM9tMsBfOrBt3p4aic5qDu98cTr/JZFDuD/tVZpM/Lk0mWP+1YTKyZ2+HhVR5+TX2WqCNjEoKfgoBtjTNMj+cp3i4ACLT0S3+ZpGbE29/5esYU3da+9X0BbUXZch3bxKVnR6/Iv+whNucIv9WPIJVwLG6cAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/data/img/kind_pink.png":
/*!************************************!*\
  !*** ./src/data/img/kind_pink.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/data/img/kind_white.png":
/*!*************************************!*\
  !*** ./src/data/img/kind_white.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAdCAYAAACDgbNCAAAABHNCSVQICAgIfAhkiAAABr1JREFUaEPtWT2ME1cQ/sbrH/lPRjS5LpFyBUqTo0gFUqAKDVWuSHcXKTQhBVRQgJKIFFCFSEeVFFyV5hDtUSWRrqM5inQgQXdXoMNa+4zXXr9o/Lzet2//3q7N+U6513k9b2befDPzZuYRPsASQlwC8JfC+mci+sn7LYQ4A+DzGUW/IaLXKg8hBMv4Ufl2mYj+TpIjhFgB0JpRF97eJqJd5Yws90vvNxGR8t8nAD6eQWZAlsJXKDz/ISLGIXaNFZqAcZBTmV0iOq+BkAa+/n8e0b8R0Y05gB8AKY8ikz0BYwshksDXnTSr2EhghRC5wJ8JDNWrJ86k89skonXFQ2eSF2Xsidw8kX8Kvpams3gipyBO49MVkfb1qJgH+IGrZAL+YwBrGdP+QwCc+nllTcdtAF6q5ww4zUQnOfLfAGBDmqzXRBSgTQM/ialuNACp97aSUfQoNt5rmjlMU2vEOc57NUGe2sQECFPdPF7ena9HYmqxkAJgbn6m4McUamoUs4rHCfypLqfgx3hPBvDfGVTpp+AnROlJjny1so074pGBr6XcKH1OI9/gungKQC0g+R7/NqKnP1aRfyLBF2/ffoZm8wuUSn7RJsRzHBxMWzOTYiNAk4dfq3UdlvV9rCwhnsK2H2A4tMc01eo5FIvNAH2pdBvAuem3wWAdtv3cWH9dh6j9Z8/+q7Q1vp3U71ECVV4mcoyVVgjjdIvhReLg4BKq1RVUKr8qh3qBdjswQMmkSxZ+5fIyqtVbIFpOlSFEB6PRFmx7M5K21XoIIn9y2O/fRK83nbql8m8212FZfqsYtf/MGX9yKYRvJz5zobCMQqExllMoXAHRR1OZKi9dzmCwgdHoZap+OkGv9yLwKU63hYKvClcNVq+volhcA5E0mLdc9wn6/W1UKgzGhZDuQuxhMHiEw8MdLeP8EqA/SvB1JZMcUQc/M+qTDe/eXT5p4O+h07mGRuMeiLzhijyDEF0MBvcDoHJElcu3A1Hkndhx7gZoTSI3ydAm+02j6xT8CEtz5I9Ge7CsrwL/8vdO5w5ctxOJT612BaXSDyCqTxxlH+32N1rkp6ftqAgFvM5hCURLUxIhOBUH9VEdlq8hwE/X7fbN6d4k8OVZrkxoGyD61Dj4hdgHsDem169mU8ecCDuqO38fo9H2WKbr7sFxdlGv/zEGkqN9OHyMbncr1QCW1UCttopCYRWOcyd0n5tEri5ENViqAikEahqetf7Io8sxBT9cQHKhx3d6r7eB4VB68qzr/w4+nx+QRedgsI3DQxlwMeuoIj9f98CRXi7Hp0THeRV7TZg6kjTYfJZt++1y3sj3zsxFsGUld0CcRWXxu58ngI4P+MXiEiqVCygUuGVaCXUASfCwAbhVGo128f79s5kdYh6uoINv21dj9eKzV6tfo1C4GKg5sughbbCLXm/T1BEWD768x9dgWatZzppI67o8C3g0N355GOng622Zx1MWf9czOXuaPq77OHYWouxdPPjNZrA3TzuY6f+uuwPbvmtKPqZrNm9PuxCu9Nvta5n2q8Qm4OvDMHU/dz+85PAn3AFxdpRredoBqft5DpJSRC8W/FrtIsrlewED86G5WOE0ZjKdYwNye8atkzrdY6b6HCANSRPA0nioEW1Zftuo1gMeje74fHYugB0n27TPK57VgRi3oe321SR1Fwt+eMyZ6q2JtueJIadQb7nuJqKMHsdknuCbOEmwNQvPLUx4JGWblAlnHPgv4TgbmWSrFafpbD9LUWSiDBdOjcafU1J1lGyyf7Hg5+uI1HNlbHWjwTcxlE6jRpkp+Oody/wOD69lTnmqHrpc130G275vfJzFgj9bjcGH1O2ZK/KNraUQ5gFfT9NcZHW7d01blYCaHPX1Or8X+L2xQdET4HHU4LdaPOX05xizdClR9VNSewlARj4XDLXa73kwj7xfwxH4BLYdvkYkYHLMqy52Ap7/q3Nz130JLmLCw4+l8VOq/iTMY+Nu97tMjqSDL4T3HMzz9/Qn5zgDyqdozkJBG3CbVy7f0s7OtCxXFn3DYfSTtP98zOeXRa+6DLKeBJ8XOwD33HmXWpmHwY8vvPQHm7zy9X2O8yBtvBkSpYM/L12YT1z9oafqecgU4hU6nRtpwy4f/HkI9XhkAZ/3yAkXv8gFX/ry6MQe3+9v5aodFgE+n5FTdqm0GmpVs56fX/z4Ac2ww/kw4Huvb57ynLpMenamZ8cpFuUAwx9kxJtBpkiZHrk/jnsSNjGkl/08+SZ7TGn6/Z1Uh2S7VSork5l+Y3ydJa3RSD4p84x/OOQOLdN84D8IlVKTt3AwcgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/data/img/reword_title.png":
/*!***************************************!*\
  !*** ./src/data/img/reword_title.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/data/img/select_bg.png":
/*!************************************!*\
  !*** ./src/data/img/select_bg.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/select_bg-b188ea91b6c959c7310d1c32cd057dd8.png";

/***/ }),

/***/ "./src/data/img/select_graph.png":
/*!***************************************!*\
  !*** ./src/data/img/select_graph.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/data/img/select_graph_bubble.png":
/*!**********************************************!*\
  !*** ./src/data/img/select_graph_bubble.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAApCAYAAABupZRPAAAABHNCSVQICAgIfAhkiAAAAt1JREFUaEPtmkuoTlEUx39/zyQDIa8MZMAtokwIA3l2B6QIpTDyKDGjKEwwUR4TSmHikYnLgLzVjYnkRlEykBKJiQmhpXXb33c/372fc84953a+zT3Ts/d/r/U7++y99lpbZHzMrBVYAcwERgOjgJEZZfqq+SfgM/AeuAW0SXqVdjClaWhmk4H9wGpgeJo+TdTmBXBY0oUkm/4KowbCBmBgkliTv3coeyVda2RnQxhmNhe4Hn6DJvczk3lHgd2SftX36hGGmfmacAUYkmmYeBrfA9ZI+lJrcjcYZubrwmVgQDy+9crSdmChpJ+V3n/AMDPfIR4Dw3olH1+n05K2doNhZr5NPgUmxedTLot9djxwherMMLNzwMZcsnF2bpe0oArDzMYB74BBcfqT2+pVkq52zgwzOwbszC0Zr8BzYFYFhoev4+P1JbflBkyUmc0JO0huxcgFtjmMIx6RRe5IEeafdxg3gWVFqEWu8dBhPAvH8ch9yW3+W4fxARibWyp+ge8O4xswNH5f8nvQPzO6GH7sXzO6YHT07yZdMNocxoGQ38z/08WtcNBhTANexu1HIda3VM4mnk6fWohknCIdkqoHtXXAxTj9KMTq9ZIu1SZ3/tdI9JGkedXkTshpLAduFMI5LpHuab8A5BSwJS5fclnbc0I4wPC0331gfq4h4uh8G2htWCoIQDxL7jWFf3l3eQ3MlvS19rs1qqgNBk4A1ZpCHB87lZVngO2SftS3Tio8LwI8WTw91TDN3egJsEfS3UZmpr2SsBbYFykUr74fkpQYR6WCUSEZQveVwFJgQqjQj2miCdH3l1WKdtbMkiLezoiw6HGT9DLNjCSxLO/NzLe2xT30uSNpSRatotqWCaMF8EpW7Y0gv0AyQ1Ipp+jSYISYpr6seVzSrqK+dFadsmGMAN4Avgj74jelPhDK6lCe9qXCCLNjE3AW2CzJr0WU9pQOIwA5KWlHaRTCwL8B/q/bzfL0U8UAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/data/img/status.png":
/*!*********************************!*\
  !*** ./src/data/img/status.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/data/img/thanks_pink.png":
/*!**************************************!*\
  !*** ./src/data/img/thanks_pink.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/data/img/thanks_white.png":
/*!***************************************!*\
  !*** ./src/data/img/thanks_white.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/data/img/un_pink.png":
/*!**********************************!*\
  !*** ./src/data/img/un_pink.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/data/img/un_white.png":
/*!***********************************!*\
  !*** ./src/data/img/un_white.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/select.js":
/*!*****************************!*\
  !*** ./src/pages/select.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_commonButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/commonButton */ "./src/components/commonButton.js");
/* harmony import */ var _components_currentState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/currentState */ "./src/components/currentState.js");
/* harmony import */ var _components_selectCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/selectCard */ "./src/components/selectCard.js");
/* harmony import */ var _data_img_select_bg_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/img/select_bg.png */ "./src/data/img/select_bg.png");
/* harmony import */ var _data_img_select_bg_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_img_select_bg_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_img_reword_title_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/img/reword_title.png */ "./src/data/img/reword_title.png");
/* harmony import */ var _data_img_reword_title_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_img_reword_title_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_img_select_graph_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/img/select_graph.png */ "./src/data/img/select_graph.png");
/* harmony import */ var _data_img_select_graph_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_img_select_graph_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_img_select_graph_bubble_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/img/select_graph_bubble.png */ "./src/data/img/select_graph_bubble.png");
/* harmony import */ var _data_img_select_graph_bubble_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_data_img_select_graph_bubble_png__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\project\\dajungpay\\src\\pages\\select.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const SelectPage = () => {
  return __jsx(BackgroundWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(TopWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(TopLeftWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: _data_img_reword_title_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: _data_img_reword_title_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }), __jsx(MainTextStyle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, "2020\uB144 \uD55C \uD574\uB97C \uB2E4\uC815\uD558\uAC8C \uCC44\uC6CC\uC8FC\uC6E0\uB358 \uB9CC\uB0A8\uB4E4\uC744 \uB9AC\uB9C8\uC778\uB4DC \uD574\uBCF4\uC138\uC694.", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 58
    }
  }), " \uB9CC\uB0A8 \uC18D\uC5D0\uC11C \uB2F9\uC2E0\uC740 \uC5B4\uB5A4 \uD398\uC774\uB97C \uD574\uC624\uC168\uB098\uC694? ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 89
    }
  }), "\uAE30\uC068, \uB2E4\uC815\uD568, \uAC10\uC0AC\uD568, \uBD88\uD3B8\uD588\uB358 \uAC10\uC815 \uB4E4 \uC911 \uB2F9\uC2E0\uC774 \uB290\uAF08\uB358 \uAC10\uC815\uC744 \uB098\uB204\uC5B4\uC8FC\uC138\uC694.")), __jsx(TopRightWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(_components_currentState__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }))), __jsx(MiddleWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(MiddleLeftWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(SelectCardWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx(_components_selectCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "joy",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  })), __jsx(SelectCardWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx(_components_selectCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "kind",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  })), __jsx(SelectCardWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx(_components_selectCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "thanks",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  })), __jsx(SelectCardWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx(_components_selectCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "un",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }))), __jsx(MiddelRightWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx(GraphTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: _data_img_select_graph_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  })), __jsx(GraphWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx(GraphCard, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx(GraphBubbleWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _data_img_select_graph_bubble_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }, "65%")), __jsx(GraphBackground, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, __jsx(GraphFunctionJoy, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  })), __jsx(GraphSubTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, "\uAE30\uC068")), __jsx(GraphCard, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx(GraphBubbleWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _data_img_select_graph_bubble_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 33
    }
  }, "65%")), __jsx(GraphBackground, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, __jsx(GraphFunctionKind, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  })), __jsx(GraphSubTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, "\uB2E4\uC815")), __jsx(GraphCard, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, __jsx(GraphBubbleWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _data_img_select_graph_bubble_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, "65%")), __jsx(GraphBackground, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, __jsx(GraphFunctionThanks, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  })), __jsx(GraphSubTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, "\uAC10\uC0AC")), __jsx(GraphCard, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx(GraphBubbleWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _data_img_select_graph_bubble_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 33
    }
  }, "65%")), __jsx(GraphBackground, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, __jsx(GraphFunctionUn, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 33
    }
  })), __jsx(GraphSubTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, "\uBD88\uD3B8"))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/test",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      position: "absolute",
      bottom: 60,
      right: 120
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx(_components_commonButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "\uC2E0\uCCAD\uD558\uAE30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }))));
};

const BackgroundWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "select__BackgroundWrapper",
  componentId: "sc-1fdfnkq-0"
})(["background-image:url(", ");width:1920px;height:980px;top:0;position:absolute;"], _data_img_select_bg_png__WEBPACK_IMPORTED_MODULE_6___default.a);
const TopWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "select__TopWrapper",
  componentId: "sc-1fdfnkq-1"
})(["width:1200px;margin:100px auto 59px;display:flex;justify-content:space-between;"]);
const TopLeftWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "select__TopLeftWrapper",
  componentId: "sc-1fdfnkq-2"
})(["display:block;"]);
const TopRightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "select__TopRightWrapper",
  componentId: "sc-1fdfnkq-3"
})(["display:block;float:right;"]);
const MainTextStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "select__MainTextStyle",
  componentId: "sc-1fdfnkq-4"
})(["font-size:16px;line-height:22px;letter-spacing:-0.48px;margin:30px 0 0 0;width:650px;"]);
const MiddleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "select__MiddleWrapper",
  componentId: "sc-1fdfnkq-5"
})(["width:1200px;margin:0 auto;display:flex;"]);
const MiddleLeftWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "select__MiddleLeftWrapper",
  componentId: "sc-1fdfnkq-6"
})(["width:750px;"]);
const SelectCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "select__SelectCardWrapper",
  componentId: "sc-1fdfnkq-7"
})(["margin-bottom:31px;"]);
const MiddelRightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "select__MiddelRightWrapper",
  componentId: "sc-1fdfnkq-8"
})(["width:334px;margin-left:116px;"]);
const GraphTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "select__GraphTitle",
  componentId: "sc-1fdfnkq-9"
})(["width:193px;height:55px;margin:47px 0 59px 100px;"]);
const GraphWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "select__GraphWrapper",
  componentId: "sc-1fdfnkq-10"
})(["display:flex;"]);
const GraphCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "select__GraphCard",
  componentId: "sc-1fdfnkq-11"
})(["width:67px;margin:0 22px 0 0;"]);
const GraphBubbleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "select__GraphBubbleWrapper",
  componentId: "sc-1fdfnkq-12"
})(["position:relative;width:67px;height:41px;& > p{position:absolute;top:0;margin:0;color:#ff7b7b;line-height:34px;width:67px;text-align:center;}"]);
const GraphBackground = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "select__GraphBackground",
  componentId: "sc-1fdfnkq-13"
})(["background-color:white;position:relative;border-radius:80px;width:29px;height:276px;border:solid 1.5px #6b4d4d;margin:30px auto 20px;"]);
const GraphFunction = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "select__GraphFunction",
  componentId: "sc-1fdfnkq-14"
})(["position:absolute;z-index:999;width:21px;bottom:3px;left:2px;border-radius:20px 20px 40px 40px;"]);
const GraphFunctionJoy = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(GraphFunction).withConfig({
  displayName: "select__GraphFunctionJoy",
  componentId: "sc-1fdfnkq-15"
})(["background-color:#ff908a;height:65%;"]);
const GraphFunctionKind = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(GraphFunction).withConfig({
  displayName: "select__GraphFunctionKind",
  componentId: "sc-1fdfnkq-16"
})(["background-color:#ffe1e9;height:65%;"]);
const GraphFunctionThanks = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(GraphFunction).withConfig({
  displayName: "select__GraphFunctionThanks",
  componentId: "sc-1fdfnkq-17"
})(["background-color:#fff8d9;height:65%;"]);
const GraphFunctionUn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(GraphFunction).withConfig({
  displayName: "select__GraphFunctionUn",
  componentId: "sc-1fdfnkq-18"
})(["background-color:#def3ff;height:65%;"]);
const GraphSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "select__GraphSubTitle",
  componentId: "sc-1fdfnkq-19"
})(["font-size:20px;color:#333333;text-align:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (SelectPage);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jdXJyZW50U3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbWcvYmFja2VyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbWcvZGF5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbWcvZnVuZGluZ19pbWcxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbWcvZnVuZGluZ19pbWcyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbWcvZnVuZGluZ19pbWczLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbWcvZnVuZGluZ19pbWc0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbWcvam95X3BpbmsucG5nIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2ltZy9qb3lfd2hpdGUucG5nIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2ltZy9raW5kX3BpbmsucG5nIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2ltZy9raW5kX3doaXRlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbWcvcmV3b3JkX3RpdGxlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbWcvc2VsZWN0X2JnLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbWcvc2VsZWN0X2dyYXBoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbWcvc2VsZWN0X2dyYXBoX2J1YmJsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW1nL3N0YXR1cy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW1nL3RoYW5rc19waW5rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbWcvdGhhbmtzX3doaXRlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbWcvdW5fcGluay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW1nL3VuX3doaXRlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2VsZWN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwidmFsdWUiLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGUiLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsInN0YXRlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJDb21tb25CdXR0b24iLCJ0aXRsZSIsIkJ1dHRvblN0eWxlIiwic3R5bGVkIiwiYnV0dG9uIiwiQ3VycmVudFN0YXRlIiwic3ViVGl0bGVJbWcxIiwic3ViVGl0bGVJbWcyIiwic3ViVGl0bGVJbWczIiwiTGlzdFN0eWxlIiwibGkiLCJMaXN0Qm9yZGVyU3R5bGUiLCJTZWxlY3RDYXJkIiwiY2hlY2siLCJzZXRDaGVjayIsInVzZVN0YXRlIiwiaGFuZGxlQ2xpY2siLCJsb2ciLCJpZCIsImpveVdoaXRlIiwiam95UGluayIsImZ1bmRpbmdJbWcxIiwia2luZFdoaXRlIiwia2luZFBpbmsiLCJmdW5kaW5nSW1nMiIsInRoYW5rc1doaXRlIiwidGhhbmtzUGluayIsImZ1bmRpbmdJbWczIiwidW5XaGl0ZSIsInVuUGluayIsImZ1bmRpbmdJbWc0IiwiU2VsZWN0Qm94IiwiZGl2IiwiY3NzIiwiU2VsZWN0Qm94X0xlZnQiLCJTZWxlY3RCb3hfUmlnaHRfMSIsIlNlbGVjdEJveF9SaWdodF8yIiwiU2VsZWN0Qm94X1JpZ2h0XzMiLCJTZWxlY3RCb3hfUmlnaHRfNCIsIlNlbGVjdFRleHQiLCJTZWxlY3RQYWdlIiwicmV3b3JkVGl0bGUiLCJzZWxlY3RHcmFwaFRpdGxlIiwiZ3JhcGhCdWJibGUiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiQmFja2dyb3VuZFdyYXBwZXIiLCJiYWNrZ3JvdW5kSW1nIiwiVG9wV3JhcHBlciIsIlRvcExlZnRXcmFwcGVyIiwiVG9wUmlnaHRXcmFwcGVyIiwiTWFpblRleHRTdHlsZSIsIk1pZGRsZVdyYXBwZXIiLCJNaWRkbGVMZWZ0V3JhcHBlciIsIlNlbGVjdENhcmRXcmFwcGVyIiwiTWlkZGVsUmlnaHRXcmFwcGVyIiwiR3JhcGhUaXRsZSIsIkdyYXBoV3JhcHBlciIsIkdyYXBoQ2FyZCIsIkdyYXBoQnViYmxlV3JhcHBlciIsIkdyYXBoQmFja2dyb3VuZCIsIkdyYXBoRnVuY3Rpb24iLCJHcmFwaEZ1bmN0aW9uSm95IiwiR3JhcGhGdW5jdGlvbktpbmQiLCJHcmFwaEZ1bmN0aW9uVGhhbmtzIiwiR3JhcGhGdW5jdGlvblVuIiwiR3JhcGhTdWJUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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LElBRHBFLDZNQUZKLENBREosRUFPSSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBUEosQ0FESixFQVlJLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFZLE1BQUUsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUksTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFZLE1BQUUsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLEVBT0ksTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFZLE1BQUUsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVBKLEVBVUksTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFZLE1BQUUsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVZKLENBREosRUFlSSxNQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFFQyxpRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRUMsd0VBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKLENBREosRUFLSSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBTEosRUFRSSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSSixDQURKLEVBV0ksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRUEsd0VBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKLENBREosRUFLSSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBTEosRUFRSSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSSixDQVhKLEVBcUJJLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFB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QUlBLE1BQU0yQixTQUFTLEdBQUd4RCx3REFBTSxDQUFDNkIsR0FBVjtBQUFBO0FBQUE7QUFBQSxxQ0FBZjtBQUtBLE1BQU00QixrQkFBa0IsR0FBR3pELHdEQUFNLENBQUM2QixHQUFWO0FBQUE7QUFBQTtBQUFBLHFKQUF4QjtBQWdCQSxNQUFNNkIsZUFBZSxHQUFHMUQsd0RBQU0sQ0FBQzZCLEdBQVY7QUFBQTtBQUFBO0FBQUEsNklBQXJCO0FBVUEsTUFBTThCLGFBQWEsR0FBRzNELHdEQUFNLENBQUM2QixHQUFWO0FBQUE7QUFBQTtBQUFBLHVHQUFuQjtBQVNBLE1BQU0rQixnQkFBZ0IsR0FBRzVELHdEQUFNLENBQUMyRCxhQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsNENBQXRCO0FBS0EsTUFBTUUsaUJBQWlCLEdBQUc3RCx3REFBTSxDQUFDMkQsYUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDRDQUF2QjtBQUtBLE1BQU1HLG1CQUFtQixHQUFHOUQsd0RBQU0sQ0FBQzJELGFBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSw0Q0FBekI7QUFLQSxNQUFNSSxlQUFlLEdBQUcvRCx3REFBTSxDQUFDMkQsYUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDRDQUFyQjtBQUtBLE1BQU1LLGFBQWEsR0FBR2hFLHdEQUFNLENBQUM2QixHQUFWO0FBQUE7QUFBQTtBQUFBLHVEQUFuQjtBQU1lUSx5RUFBZixFOzs7Ozs7Ozs7OztBQ2hPQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9zZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9zZWxlY3QuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QsIHtmb3J3YXJkUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQ29tbW9uQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b25TdHlsZT5cclxuICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxyXG4gICAgICAgIDwvQnV0dG9uU3R5bGU+XHJcbiAgICApXHJcbn07XHJcblxyXG5jb25zdCBCdXR0b25TdHlsZSA9IHN0eWxlZC5idXR0b25gXHJcbiAgICB3aWR0aCA6IDIwMHB4O1xyXG4gICAgaGVpZ2h0IDogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3IgOiAjZmY2NDY0O1xyXG4gICAgYm9yZGVyIDogMDtcclxuICAgIGJvcmRlci1yYWRpdXMgOiA1MHB4O1xyXG4gICAgbWFyZ2luIDogMCBhdXRvIDA7XHJcbiAgICBkaXNwbGF5IDogYmxvY2s7XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplIDogMjRweDtcclxuICAgIG91dGxpbmUgOiAwO1xyXG4gICAgYm94LXNoYWRvdyA6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIGJvcmRlciA6IDA7XHJcbiAgICAgICAgb3V0bGluZSA6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjRkY5MDhBO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tb25CdXR0b247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBzdWJUaXRsZUltZzEgZnJvbSAnLi4vZGF0YS9pbWcvYmFja2VyLnBuZyc7XHJcbmltcG9ydCBzdWJUaXRsZUltZzIgZnJvbSAnLi4vZGF0YS9pbWcvZGF5LnBuZyc7XHJcbmltcG9ydCBzdWJUaXRsZUltZzMgZnJvbSAnLi4vZGF0YS9pbWcvc3RhdHVzLnBuZyc7XHJcblxyXG4vLyAqIOyYpOuluOyqvSDsnITsqr0g7ZuE7JuQ7J6QLCDrgqjsnYAg6riw6rCELCDsoITssrQg7Y6A65SpIO2YhO2ZqVxyXG5jb25zdCBDdXJyZW50U3RhdGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPExpc3RCb3JkZXJTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxwPjYwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PGltZyBzcmM9e3N1YlRpdGxlSW1nMX0gYWx0PXtzdWJUaXRsZUltZzF9Lz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvTGlzdEJvcmRlclN0eWxlPlxyXG4gICAgICAgICAgICA8TGlzdEJvcmRlclN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPHA+MzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj48aW1nIHNyYz17c3ViVGl0bGVJbWcyfSBhbHQ9e3N1YlRpdGxlSW1nMn0vPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaXN0Qm9yZGVyU3R5bGU+XHJcbiAgICAgICAgICAgIDxMaXN0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8cD42NSU8L3A+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj48aW1nIHNyYz17c3ViVGl0bGVJbWczfSBhbHQ9e3N1YlRpdGxlSW1nM30vPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaXN0U3R5bGU+XHJcbiAgICAgICAgPC91bD5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IExpc3RTdHlsZSA9IHN0eWxlZC5saWBcclxuICAgIGZsb2F0IDogbGVmdDtcclxuICAgIHdpZHRoIDogMTYwcHg7XHJcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG4gICAgaGVpZ2h0IDogMTAwcHg7XHJcblxyXG4gICAgJiA+IHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDQ1cHg7XHJcbiAgICAgICAgbWFyZ2luIDogMTBweCAwIDAgMDtcclxuICAgICAgICBsaW5lLWhlaWdodCA6IDQ1cHg7XHJcbiAgICAgICAgY29sb3IgOiAjZmY2NDY0O1xyXG4gICAgfVxyXG5cclxuICAgICYgPiBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tdG9wIDogOXB4O1xyXG4gICAgICAgIGRpc3BsYXkgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IExpc3RCb3JkZXJTdHlsZSA9IHN0eWxlZChMaXN0U3R5bGUpYFxyXG4gICAgYm9yZGVyIDogMDtcclxuICAgIGJvcmRlci1yaWdodCA6IDFweCBzb2xpZCAjZmY2NDY0O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgQ3VycmVudFN0YXRlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBqb3lQaW5rIGZyb20gJy4uL2RhdGEvaW1nL2pveV9waW5rLnBuZyc7XHJcbmltcG9ydCBqb3lXaGl0ZSBmcm9tICcuLi9kYXRhL2ltZy9qb3lfd2hpdGUucG5nJztcclxuaW1wb3J0IGZ1bmRpbmdJbWcxIGZyb20gJy4uL2RhdGEvaW1nL2Z1bmRpbmdfaW1nMS5wbmcnO1xyXG5pbXBvcnQga2luZFBpbmsgZnJvbSAnLi4vZGF0YS9pbWcva2luZF9waW5rLnBuZyc7XHJcbmltcG9ydCBraW5kV2hpdGUgZnJvbSAnLi4vZGF0YS9pbWcva2luZF93aGl0ZS5wbmcnO1xyXG5pbXBvcnQgZnVuZGluZ0ltZzIgZnJvbSAnLi4vZGF0YS9pbWcvZnVuZGluZ19pbWcyLnBuZyc7XHJcbmltcG9ydCB0aGFua3NQaW5rIGZyb20gJy4uL2RhdGEvaW1nL3RoYW5rc19waW5rLnBuZyc7XHJcbmltcG9ydCB0aGFua3NXaGl0ZSBmcm9tICcuLi9kYXRhL2ltZy90aGFua3Nfd2hpdGUucG5nJztcclxuaW1wb3J0IGZ1bmRpbmdJbWczIGZyb20gJy4uL2RhdGEvaW1nL2Z1bmRpbmdfaW1nMy5wbmcnO1xyXG5pbXBvcnQgdW5QaW5rIGZyb20gJy4uL2RhdGEvaW1nL3VuX3BpbmsucG5nJztcclxuaW1wb3J0IHVuV2hpdGUgZnJvbSAnLi4vZGF0YS9pbWcvdW5fd2hpdGUucG5nJztcclxuaW1wb3J0IGZ1bmRpbmdJbWc0IGZyb20gJy4uL2RhdGEvaW1nL2Z1bmRpbmdfaW1nNC5wbmcnO1xyXG5cclxuY29uc3QgU2VsZWN0Q2FyZCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjaGVjaywgc2V0Q2hlY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBzZXRDaGVjayghY2hlY2spO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrLCBwcm9wcy5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb3BzLmlkID09PSBcImpveVwiKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U2VsZWN0Qm94IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjaGVjaz17Y2hlY2t9PlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdEJveF9MZWZ0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjaGVjayA/IGpveVdoaXRlIDogam95UGlua30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RUZXh0IGNoZWNrPXtjaGVja30+64u57Iug7J20ICfquLDsgagn7J2EIOuKkOq8iOuLpOuptCDquLDsgZwg6rCQ7KCV7J2EIO2OgOuUqSDtlbTso7zshLjsmpQ8L1NlbGVjdFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdEJveF9MZWZ0PlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdEJveF9SaWdodF8xPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmdW5kaW5nSW1nMX0vPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RCb3hfUmlnaHRfMT5cclxuICAgICAgICAgICAgPC9TZWxlY3RCb3g+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIGlmIChwcm9wcy5pZCA9PT0gXCJraW5kXCIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U2VsZWN0Qm94IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjaGVjaz17Y2hlY2t9PlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdEJveF9MZWZ0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjaGVjayA/IGtpbmRXaGl0ZSA6IGtpbmRQaW5rfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRleHQgY2hlY2s9e2NoZWNrfT7ri7nsi6DsnbQg4oCY64uk7KCV7ZWo4oCZ7J2EIOuKkOq8iOuLpOuptCDri6TsoJXtlZwg6rCQ7KCV7J2EIO2OgOuUqSDtlbTso7zshLjsmpQ8L1NlbGVjdFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdEJveF9MZWZ0PlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdEJveF9SaWdodF8yPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmdW5kaW5nSW1nMn0vPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RCb3hfUmlnaHRfMj5cclxuICAgICAgICAgICAgPC9TZWxlY3RCb3g+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIGlmIChwcm9wcy5pZCA9PT0gXCJ0aGFua3NcIikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTZWxlY3RCb3ggb25DbGljaz17aGFuZGxlQ2xpY2t9IGNoZWNrPXtjaGVja30+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Qm94X0xlZnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoZWNrID8gdGhhbmtzV2hpdGUgOiB0aGFua3NQaW5rfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRleHQgY2hlY2s9e2NoZWNrfT7ri7nsi6DsnbQg4oCY6rCQ7IKs7ZWo4oCZ7J2EIOuKkOq8iOuLpOuptCDqsJDsgqztlZwg6rCQ7KCV7J2EIO2OgOuUqSDtlbTso7zshLjsmpQ8L1NlbGVjdFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdEJveF9MZWZ0PlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdEJveF9SaWdodF8zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmdW5kaW5nSW1nM30vPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RCb3hfUmlnaHRfMz5cclxuICAgICAgICAgICAgPC9TZWxlY3RCb3g+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIGlmIChwcm9wcy5pZCA9PT0gXCJ1blwiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNlbGVjdEJveCBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2hlY2s9e2NoZWNrfT5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hlY2sgPyB1bldoaXRlIDogdW5QaW5rfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRleHQgY2hlY2s9e2NoZWNrfT7ri7nsi6DsnbQg4oCY67aI7Y647ZWo4oCZ7J2EIOuKkOq8iOuLpOuptCDrtojtjrjtlZwg6rCQ7KCV7J2EIO2OgOuUqSDtlbTso7zshLjsmpQ8L1NlbGVjdFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdEJveF9MZWZ0PlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdEJveF9SaWdodF80PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmdW5kaW5nSW1nNH0vPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RCb3hfUmlnaHRfND5cclxuICAgICAgICAgICAgPC9TZWxlY3RCb3g+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBTZWxlY3RCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGggOiA3NTBweDtcclxuICAgIGhlaWdodCA6IDEzMHB4O1xyXG4gICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3IgOiB3aGl0ZTtcclxuICAgIGJvcmRlciA6IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXMgOiAxNnB4O1xyXG4gICAgYm94LXNoYWRvdyA6IDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIHRyYW5zaXRpb24gOiBib3JkZXIgMC4xcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlciA6IDNweCBzb2xpZCAjZmY2NDY0O1xyXG4gICAgfVxyXG5cclxuICAgICR7cHJvcHMgPT5cclxuICAgIHByb3BzLmNoZWNrICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIGJhY2tncm91bmQgOiAjZmY3YjdiO1xyXG4gICAgICBib3JkZXIgOiAzcHggc29saWQgI2ZmNjQ2NDtcclxuICAgIGB9XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdEJveF9MZWZ0ID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoIDogNDYwcHg7XHJcbiAgICBtYXJnaW4gOiAyOHB4IDAgMCA0OXB4O1xyXG4gICAgZm9udC1zaXplIDogMThweDtcclxuYFxyXG5cclxuY29uc3QgU2VsZWN0Qm94X1JpZ2h0XzEgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGggOiAyMTlweDtcclxuICAgIGhlaWdodCA6IDE4MHB4O1xyXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbSA6IC0zcHg7XHJcbiAgICByaWdodCA6IDE4cHg7XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdEJveF9SaWdodF8yID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoIDogMjEwcHg7XHJcbiAgICBoZWlnaHQgOiAxMzBweDtcclxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XHJcbiAgICB0b3AgOiAtMjhweDtcclxuICAgIHJpZ2h0IDogMjdweDtcclxuYFxyXG5cclxuY29uc3QgU2VsZWN0Qm94X1JpZ2h0XzMgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGggOiAyMDRweDtcclxuICAgIGhlaWdodCA6IDEzMHB4O1xyXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuICAgIHRvcCA6IC0yOHB4O1xyXG4gICAgcmlnaHQgOiAxOHB4O1xyXG5gXHJcblxyXG5jb25zdCBTZWxlY3RCb3hfUmlnaHRfNCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aCA6IDE3MHB4O1xyXG4gICAgaGVpZ2h0IDogMTQycHg7XHJcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xyXG4gICAgdG9wIDogLTIzcHg7XHJcbiAgICByaWdodCA6IDUycHg7XHJcbmBcclxuXHJcblxyXG5jb25zdCBTZWxlY3RUZXh0ID0gc3R5bGVkLnBgXHJcbiAgICBtYXJnaW4gOiA1cHggMCAwIDA7XHJcbiAgICBjb2xvciA6ICMzMzM7XHJcblxyXG4gICAgJHtwcm9wcyA9PlxyXG4gICAgcHJvcHMuY2hlY2sgJiZcclxuICAgIGNzc2BcclxuICAgICAgY29sb3IgOiB3aGl0ZTtcclxuICAgIGB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdENhcmQ7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRFFBQUFBUkNBWUFBQUNTR1k5dUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUEwVkpSRUZVU0V1OVYwRlNHekVRMUl3THd3M3lBdUFGTVMvQWVRSDhJT1lGTVFlMGV3dmNkdVZEL0FUekF2eUR3QXRpZm1EL3dMblpVR2hTdmFWeHlldjFycUdTNkVKNU5aS21wM3RhZ3N3T0kwa1NRUmdSZmNteTdMRnBTYi9mUDlyYjIvdE1SQ2RFZE9TOW54aGpmZzhHQS94ZGpUUk5lOTc3WTJhK3o3SnMyclJ2YVczWGUzL096RTl4VGxRT2VudDdLNUtQQnpNcmlINUlibTErTUJnODZZY2tTY2JHbUl1cTVFUmtJaUpYQ3N4YSswaEU1MW9vTFZ3ZE1CRzVjODdkV210dmllaTcvdFkxYTRCMjJiRHFzRHpQaTMyaVEyWkVOQmFSZVJUZlJmTEdtR21lNTZjaC9zT0F0SEMxZ0VMRmpvd3huelVSRVZsVlA4aXVZNHc1RFBQUFNObzUxNjFLc0F4ZUM3WmNMajhOaDhONW1hRTRQaXJPays1Zm1pK0tVUXNvVGtwRTdwMXp2U3BHckxWOUl2b0JDVG5uempUR1dqc2lvcThpQW5hR3JWWnJ0bGdzNXVnblprWWhodWlsUE05Uk5EQzZ4dEEvQVJRWndHbGRvMWJGM2R6Y2RFSy9LWU1iOVNDaXF5ekxSdThBTkhQT25aUTMwbUkwTXBRa0NYUi9pQW83NTY3ckdNS2M5by9Hd2VFT0RnNHV2ZmRJb3BBaStzWVlNMkhtY1Z5a3Y4R1FNV2JrdlIrOXZyNCtROFpycG9DVGt5U0JMTDVGUU5ac1drUTZzR0xNeDdKTTA3U3cwVHFIaXVlY2MzYzdBbHFUZFNUdlFxNzZXNTF5QXhBQ2NEK0lTRDgyaDFLaU1JTXg3RE02b0xEUlhRR0IyUVpBVXlJNkRvVzdkczZoMEtzUlNXNEdCU0JmWEFlVmdPS0Y2SXRXcTFVd2dySHRZZzBNcWNRMHZJZWtnbE91TVIzdWtrcFRLTmsvMXMrWitheEtybHQ3U0cvdFhTc2N4ekh6VEJ0OVN4V0x5N0FzU3lLQ2krSTFzWHFCcEdsNjRyMy9CVm5qZTFES1JZV2oxdHUyVXZnUlFHQWd1b3NnUTRsN3BIeTdsOCtJQVVVWFpyRW5UR1ovZngrbUFxTXFDb1AxalM0WEdOcXdSeXpXM3NDR1ZZQ1plYW9NcVoyalJ5SzVZbjZLNm9NUjNRTk9pajVWUUdCUVJINkdNMWZYaHJYMmtvZ2U4TjE3ZjRaZWFRUlV4OHg3SHFjeG9DYTJGZkJpc1ppRWwwTmhCT1crd0Q0UmM0WHIvWGRBM3Z1eVFXekZoeGVGOXg3WHdZT0l6RjVlWGpvQUdDK0E5TnJ0OW9TSTVzdmxzdHR1dDhjN1BYMnFUdjBJUTAzc3hQUEtTSkE5M29aNHNXOE1TRmFkYnFmWDlyWWtRQy9tbUxuWDlIK0x4cjRIRURPUHFseXlibzhBdmxkZSt3Zm81TDR3dmg4cFBRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFVUFBQUFUQ0FZQUFBREdXc0REQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQXc5SlJFRlVXRWZ0V011UjJrQVE3UjZLejgxa0FJN0FKb0psTTlnTWRoMkJkVUhvWnZZbURZZkZFWmdNVEFhR0NLek5BRExBTndURnRLdGxEVFVJZlVaODdLb3R6NFVDOWZSMHYzbjl1Z1hDLzNXQ0FQSXZudWYxOS9zOWpjZmpSUmxHYkt1VXVoTkNySHpmbjVyMmp1TzA2L1g2QjBUczUva2hvcm5OT1dWeDZPZDhacVBSK016ZnBaVFA1cjdCWVBBUkFON3AzN0xPOVR6dlNTblZFVUlzZk4rZnMyME15bkE0SlA0TWdpRCtYclJjMXgwaDRoY2lXa2dwRDhrbnpsOFFzVjNtZzRqV0FQQkpTamxMMjdxdTZ5RGlTNUVQcFZSdlBCNkgra0tKNkllT24rTWdvbTlGKzgzWVhkZWRJK0lkRVQxTEtVZFhBNFZ2UkFqeGt4M3lnUUF3RTBMRVFadExLY1VnOXBNZzF0dnQ5djFrTW1HQURrdURYcFFVSXQ3clcyWG1wa0JoSnNmSlphd3VJblp1QmdvQUxJbG95clFEZ0c1eU82OUJFREJsQzVkbXBwbGMyUjUrbnJVdkRVcVJIODJpVzRJU244KzBBNEFRRWI4elVGRVU5ZEszYndacXNzb3NnMzhOQ2dCTWxWTFQzVzczZW9tbXJOaVJFR0srMld6Q1pyTzVORVF0Rml3V1ZaMHNpeThSdFJGUk04bUtWU1pZbHpJbFN3KzFwaGh4M2grQlVuUmJtbklGUXR2bFdrYkVCMVB4MHo2SmFJV0lzeWlLUmtXTXlvcmxscUJ3WElra09ERW9qRllaZlJFeERJTEF5UVBGM005dHN0VnFuV2dMTTZvcUVIK0xLU2ZkcHd3UTgzblNlcDgwU0o3bk1VTWVxL2d3YmJmYjdWZGJvRzdNbE9PV3pJbnQ5L3RPeGNSKzhheGdxbi9GL2JGNWxRNTBCVkM0dEIwQW1PdVpKSGRPc1prTk1yUWhIdDdNVWxGS2NjbVVEbStKcnpYUE1sVkt5aGFVcFBVeWUxbk1HWVRjVlFwS0lqWkhvM3VHTng2QUhzMWViNVpRZXRRK2h6MTVlMnhCc2RFOWZZWU5LRWVqZTFad3VseFNvQnhObGRjRTRoeWhyUUlLejAyMVdvM1p2ZlI5bjhlS1ArOCtWWnk4TlZDeUxqQU5TaWlsN0pYVTRBTlByM2xNU2Q1dnJNaFNxOVg0VFR1K0hadDFSdm1FUkZTb0tjYTVjZU00WVlwTllOb21ENVNLUGc1dDBHWWZNNXJ0aEJCVERXYld1ODhsamVNQWlwNDliQUxUTm5wTzRlOWNsNGc0cWJMZlNLNU0yQXZkSmlJZis5Qi9aVnlhVCtuL0oxVVRmUXYydndFUWlrYllxcDRwU0FBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mdW5kaW5nX2ltZzEtODI3MDc2ZTk2Mzg1ZTQwZjQ2ZGIwOTI1ZTVkNDUzZDUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Z1bmRpbmdfaW1nMi1mZWRiNzM2M2Q3MGMwY2JlYWY1NTlmNjg4OGY3ODVlMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZnVuZGluZ19pbWczLTE5NmUwZWYxOWFmMmNjMTA5ZjMwMzhlZjk2Zjk4NzkzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUtvQUFBQ09DQVlBQUFDaFM1T2lBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFIdXhKUkVGVWVGN3RuUWwwVTFYK3g3OHY2Wkt1MEphdHBXQ2hsS1dVVlN3bzZvQ29DRzJLRGpvcXl2Z2ZGWlJGUWNkUndWMEhVWEZtVUduQmpSMUZjTUVtQlVXUnNyWkFnUzVRNkVwYnV1OUwydXg1LzNOVDBqUk4wclRweTh2aXUrZk1jUTU1OTk3Zi9kNVA3L0s3R3dVdWNBbzRnUUtVRTlqSW1jZ3BBQTVVRGdLblVJQUQxU21xeWRqSTVmUG5ENkY0dkJBTlRmdndhYnBSNCs3ZWlLYW1ob1RrWkltVEZxbGJzemxRSGJoV240MkppZUlCYzBGUm95Z2doS2FvWU5CMENFVlJRODJaVGROMEV5anFBa1hUYVJxYVBxZFFxWTU4L2V1djlRNWN6QjZaeG9IYUk1blkrZWlGaHg3eVVzaGtjMERUOXdHSUJVWGRSSExtVTVUVXk4MnR0Yi9BUXgzZzZVa044UGJpQjNwNkNnSzlCRDRDUGgvTmNubWpSS21VTlNzVWlsSkptK3g2aThSSG9sQjJ3RXpUOUJHS3BuK1FxVlRmT1N1MEhLanNNTmh0TGl1RXdzVTA4Q2dGekNNZmV2TDUwb2pBZnJKSkF3WUVSQVlGb0orblI2K3RWR28wS0c1cXdkbks2c3VaTlRXZUVxVjZGRW1FQnJiVEZQWEI1c1RFbkY0bmFzY0lIS2gyRkg5RlRNd1Q0UEhlQUJBZTdPTmRORzNJb0tDb0FZRitRMzE5R0xkS3FsUzFIaTRxT1gva2VubUVocWFEYWVCbm1xTGUzSnlZbU1sNFpqWklrQVBWQnFKYVNuSmxURXljaHNmN2hBTEN3dno5U2g4ZU95cGttSjh2ejFJOGhuNlgvNXhmbVBKN1VlbFltcUtHME1EL3ZPWHlOejQrZkxpVm9mUnRrZ3dIcWsxa05aM295cmk0RUpxbVB3V3djTENYb1BxSnFMR0RodnY3c1dpQllWYmJMMTA1a1ZaVmV3ZE4wMlUwUlMzWkxCSWRzcHN4RmpKMlNsQlgzMzkvZjFLdWpRY09ORHFxc0YzdFdoWVRFOE9qcUcvYytUdzhQRGJDWTBid1lJRWoyRjRsYWF2KzM0WE1Kb2xTR1VIVDlIY2FoZUw1TFljUFZ6dUNiWjF0Y0VwUVY4VEVyQ2FGaUU5SzJ1aG9ncHF3aDFvZUcvc09nTmZEKy9tM0xwc1M1ZXZsNXVaUVp0TTBqVjhLaXk4a0ZaZUcweHFOQmhUMXJ3U1I2R3RITXRJcFFYMXV3WUxyTkVCdit2bm40WTRrWmxkYmx0NTlkejkzZ2VBN0dyajN2aEhERmJFamIvS2tLTWVWdkZrbXIvZ29MVDJuVWE2WUJacmVPMUFpV2Z4MmNyTEtFVFIyWE5YTXFMTk1LTHlmQi94RWZ0WUFEMndXaVE0NGdwQW11dm9BSGtXZGR1UHpiMW8yTWRKalRGQUEzeEh0TkdHVCtxdk03Qi9UYStvZW9vR2pLaUQyQzVHb3pkNjJPeDJvSytMaWZnNElDb29sd2pYVTFZbmpFeE1YZENmaXMvZmRGMGE1dTk5RTBmUmtBR1JzTzVscS82ODIwQlJWQkpvdUF0QklVMVE2K2JmTkl0R3h2bFRNc3BnWUF1a3hOeDR2NHBYb0tZSmdHN2liK21KZlQrTCtsSC90OE85RjErOEJSYVhMRllxNzdiMVE0RlNnRXVqNDd1N1g1ajN5aUZiclEzdjNRcTFVanRqeXl5OEVORzFZUG4vK1pJclBmNEttNlZrVVJSRTREVUx3OE9FcUgzOS83U0NSMW1qVWRaV1ZkR045dmRHZ2tlTHhzalJxOWRjYWxlcm56dWxicXVTbFFxRzNHNURDcDZoeEwwNmI1QjVteDFtOUpWc3QvZjdydGVJTG9zS1NxVFJONTJsVXFudDdvNE9sdEh2N3UxT0J1ancyZGlORlVhdmUrZkpMYlRuZldySUVORTEvb2xHcE52TGMzSjV3YzNkZnFsYXBRc2h2RTZaUFIraUlFUWp5ODBNUW40ZFFYMjk0dGJVQ3pjMkFyQTJReWdDWnRGMHZieDlJK1h5VXRza0FIeC9rMXRZaE03OEFaUldWMnAvZFBEeXVLdVh5TFQyQmRvVlErRDF4UDYyWUVvVnhnUUc5clErSCsvNTRhZm1WZlRrRjQyaWdTSzVRM0d5dmx0VnBRQ1V1S1pWR1V4dzllN2IvNHRYYVNUOTJiZHlJczhuSkdscWowVHJMQ1p5VFpzekFwUEJ3ZUpVV0FkY0tnZm82cXl1L1RpcERacXNVcVdXVktLdXRiWWZXelMxSnJWUit2RWtzVHU2YThBcWg4SGtBbjhTTkNzTzlOdzJ6T2w5SGkzaXl0THhnYjA1Qk9JRGo4U0xSWCt4aG45T0F1bHdvL0Q4SzJMWnEzVHBFVEppZzFTb3ZLd3VmdlBZYWJyN3pUc1F0WG93ZzBrS2VTd1hLcmpPdXBSWmFoUXBIQzR0UlgxOFBIbzkzUWltWC8xM1hIUzVmc0dBWXBkRVVqQXZzVDYyWU1zR3gvRThNcUxFN095Yzd0YUk2RXNDT2VKSG8veGhJc2xkSk9BMm9LK1BpTWtPR0Q0OWE4OWxuQmphdmYvNTVRS1hDbWp0bUFOVlZ2U3E4dFI4bk5UVGpqK3djV2k2VFVSU1B0OU9Ob2xZcFZLcHRBamMzNFhzem8vbmU3aTdIS1JsaTRmM1VDOWtWYlcyUkd1RDV6U0xSWjlicVowMDhwd0IxeGZ6NXNlRHpSWSt2V29VWmMrWVlsRFAxeUJIcy91UVRySm82QVJFQkhaTjVhN1RvVlJ5cFJvT2twbFlrWDBnSG44OHZVcXZWWVErUENjY2RvZG9oc2tzR2hWcU5OU2RTUzJScVRUQ2xWa2ZGSHp5WXkxWkJIUjdVRzdQNFU1NWVYdDcvM3JvVlhqNkdPNHVrcmExNDQ4a25NYW0vSHhaSGptRkx0NDU4U3VVSy9QZk1CYWhWS2p3NkxnSXpnZ2V6YmdPYkdWYTB0ald1U3ozZm42YnAwd2xpOFV5MjhuWm9VSFhqVWlMR0xLRVFEeTVaWWxLWDc3LzhFc2tpRVRiODVWYllZM2xTcWxMaDg0eHM1RGMyWVhyd1lDeU9ITTFXL2RrbG45M1pPWmRTSzZxamFKcGVtaUFXdDd0Z2JCd2NGbFFkcFA3OSs5UE5qWTBVY1VrRkRUYmRXdFZWVldsZFZRc2pSbUQyOEZBYlMyWSsrVjJYYzNDbXNob0xJMFppOW5DenAwWHNaaDlUR1pOTjJhOGNTNm1VcTlWdTNncEZHQnRiQkIwU1ZPMm1FeDd2ZjlQdnVndDExZFdRU2lSWTh5blpIV2MrYUNkVmRUVllFejJWcWZxd0toMGRySTlIam5icFljRDVxdXI2YlpkeUFqVTB2WGF6V0x6ZUtyRjZFY25oUU5XMXBBUlM0aTlkR1JjSHNoSVZzMmhSdDhWSyt1WWI3VXJWcGpsMzlLTDR0dmxVQit1U2laR1lORERJTnBrNFFLcHJqcWVXdGlpVnZsNXllYWl0VzFXSEFuVmxiT3dzbXFLT2poby9ubDY5ZnIzV05tY0VsZGk5UHZVOHBHU1dQSDJxWGNiTmJIQ2NYbDFULzFYVzFVQ2FwdDlPRUl2SlZrYWJCWWNCbGF6anUzbDRaQVFQRytiendvY2Y4cld6KzVZV3JGLzJMQUxIUmVLWjExN3JWb1RQMTYxRGZmWmxySW1lWWpPeGVwTndhWXNFSDV5OWlGbWhJWGh3REZuVWNjM3d5dkhVNGxhbHN0L0FscGFCdHR3UzZEQ2dyb3lMTytidTZUbHozYlp0N1pDUzhNME9KSjA1aDBQWFN0Q1R5ZFM4RWNNUk0xSjd3dGdoUWxKQkVRNFZYY2VxcVJNUkVkRFBJV3hpMm9pVXNzcnlQVmZ6UW1pTlptRkNVdEtQVEtldlM4OGhRTlZObnBhc1hhdGRxOWVHbEpQQTJSUVExODhicDlNUUZCcUsxZSsvYjlLUHVuSE5HdFNWbGVLOTIyNXh1RzZXdUsxbWhBeDIyYkdxV3FQQkMwZFB0V3FBby9FaWtkQmxRU1Zkdm9kQWNDbHkyalNmanU2OXFoTFl1NnVqekJrMXRmZ3k4d29DQncxRXpLT0xNQ29xU3Z0Yi9xVkxJSk9vK3BvYUxKazREcE1HRGpEUXFVNHFSWkNYbDYyMDYzbTZOQTA0OE03K25oZkU5SmZic3E3bW5hK3VDVmNDZzc4UWlkcDM3ekFjN042aWtpN2ZReUM0NDk5YnQxTGFMbCtqMFhiNXFETXNMeG56N2JxU2g3SVd3NnVWeUJsNDRtQVA5Zk0xa3ViTlUyZng3c3hvaGlYamt1dXFRSFdiVlBsdVNwbzdhUHJsZUxGNGd5MFVzaXVvdWk3ZllBMC8vUUp3N0lqWnNoSmdTeVh0UjlCRGZYMU1Ba3ArUzYyb3d1N3NYTGk2UDlNV1VGaVQ1bXNuejVRMnloV2xDU0xScmRiRXR4VEhicURxOXBlR2p4L3ZUOGFlMmtDMjZXMzdBbEFvTE5sdDhmZU5GektSMzlDRWlQNzlzT3JtaVJhL3Qva0hSR25hNXJuWUxZTzlWL0xLVHBaVkRPYXAxYjZmSFRva1o5b1F1NEc2UERiMmJZcWkzaktZelo4KzBiNmZ0SStCakUzZk9wMkd3SUVEdGVQWGQyNmJadit4cW91UFV5L1gxbXMyWjF6bVVjQ2NUU0xSSDMyc1FxUG9kZ1AxK1FjZUtCMHhaa3lJenJFUGxSTDRJaDVRS3Z0Y3h1OXpDNUI4dlZ6cjBpSjdBR1lOQzhHRG8rM3N5M1J4VUdVcUZWNDZscUtoYWZxOUJMSDQ3VDVYWXBjRTdBS3FxZDM2dUpnR0hEL2E1L0lSZDlhYnA5TXc4WTQ3dEV1dzVMaEs1b2tUZVBlMmFRN251dXB6WVIwc2dUZE9wbGJWeTVYWkNTTFJYVXliWmhkUW4xdXc0SGkvd01EYjM5dTZWWi8venErQmhyN2ZONnViUk9tT3JPaU9xOWg5VWtYR3AzWlJtMmxrektlMyszSk9lVXBGVldDTmw1ZnYvdjM3MVV6bXpMcDB1dlY4ZzVsK0Y3OXBYd3E0L3V4RlNBVmVlUGRyL1kwMGJ6NzFGTHhrVW9kWlh1MUwrUnc1Ym5wVmplS3JTMWM5YUkwbU1pRXA2UXFUdHJJTzZncWhjTHVIcCtkajY3WnZkK3RZS2swK0FtUmM2SE81ZE92clhZK3M2STZydkJvOXhhdzdxOCtaY3dtZ3BrMktkMUxTUUt2Vjh4SU9IdnlGU1Vuc0FXckQ5THZ1NnJkNDlXcDkzanUrQWhvYitseXVYZGs1eUdoc3dYdGRqcXpZKzdpS3ZtQ3UzZitUNWRSVlIwOFJMOXl6Q1NMUjUzMnUwRTRKc0FxcXJ0czNXTk52YlFXK1NtQ2tUQzhkUzhHa08rL1VUcUs2QmpLcHlrdE53YnUzVG1Na0wrc1NjVzFRaVNZdkhEM1pxbFJyUG8wWGk5ZGFwNUhwV0t5Q3F2T2RidmoyVy8zbWtwd3J3QzlpUnNxMDhzZ0pzNXVzSFdKanRldHppdGRQbnFscGxNbC9peGVMSDJPa1VtOGt3amFvRjhQR2pJbjQxOGNmNjQrU0h2a1Z1TVRNTmZKdm5qcUhvWk1tbWR5N1N2YXJsbVZrNE4yWnR6Q3BYKy9TK2hPQXV1SHN4ZkxpRnNtMWVKSG85dDZKMC8zWHJJSzZRaWlralk2VmZMdVRzWXNqeUJqMVRFVzEwZDVWM2VHLzZjR0Q3SEtrbXNrS2MvUzB2cnAwcFN5OXNvYU9GNHNadmRPSU5WQnZuTSsvYURBK0phcHYrUlNRTTdNMFRKWk8xNTlOQitYcHFSMm5EZzBMUTFsUmtkYnBUOHZsV0JNOTJRR1dVbDNibi9wOVhrRlZja241NEhpUmlGRzJHRTJzdTc5MjNRVzhyMjdjaU5DUkk5cy9KWUFTVUJrTXhFWDFSZVlWMU10a0hha0dDZ1JZT25HY1k3aW1YTHo3UDF4MHZUbXhvTWhmU2xIK1d4TVRXNWlxV3RaQTFVMmtOaVVtNm0wbmQwV1JydDhHSWEraEVia05UUmdkMEkvVnEzNHNGc1hGUVUwcHEyamRjelhmUjBuVE4zMGhGcGRZMUtPSEg3QUhxbEI0d0w5ZnYzdlg3OXFsMzNKZldBQ0liSGJNcG9jU2NKOHhxVUJLV1dYcm5xdDVQbENydytJUEhpeG1LbTAyUVUyK0tTSmk2c3YvK1kvK1lhVzhIT0JncHhhV3FWSTVkRHF1M2FUK1huUzkrVUJCa2I5R293bmNuSlRVOTFVY3R0MVR5NFhDNUxBeFkyNzUxNFlOM2gwY1hjMEdmazF5YUt5WU44NjFRZjArcDZBdXViUThLRjRrSXBjck03WlZuTlVXZGNUWXNkTmYrdWdqL1VOZ2w3T0EzeGxkRW1hZUt5N0ZYaW1RY1BGU2RYWjlBeDB2RWczcFZVUUxIN01LYXZpNGNiZTkrT0dIN2gwMlpXVUFmeHhtc2p4Y1duWlc0TjJVdE5ycU5tazIwMWVvc3dycXFNakkyMS80NEFQOWUwc01McC9hdVg2NDdHOG84R0x5S1lsY3BmNDJRU3hleXFRb3JJSTZjdXpZR2YvODZDUFBqZ0pjTHdGKy9JN0o4bkJwMlZHQlZxVVNyeHhQQldoNlpieFlITStrS2F5Q0dqWjY5RFNEZFg1eWRuLzNOaWJMdzZWbFJ3V3lhdXJ3ZVdZMk5Cck50TTFKU2VlWk5JVk5VQThNQ2dtWjg5YVdMZnFiSXFSdDdRZjZ1R0JSZ2NxV0Z2eVVsUTFmRHc4OE1DRVN2cDc2anNsaVpKWStPSkJYcVBxdHBJd2UxTkxpemZTRmFleUJldU40dE1IS0ZCRXdmaU8wSjFDNTBLMEN6M3gvQUlWMTdXN0pTY0ZEOEhIY1BJZFRiRjFxV2xORnEvUjh2RWhrK0NJSUE1YXlCcXJ1VmhTRHZhaWtBUHYyQUJYbERCVEZ5Wks0Y1h5Nm9MWU80UU1zWC9aN3orZUdRNlJkaXg3RUVELzkyb205Uzk4c1YyRHR5VFBFakZYeEloR3pHempZM01lajI5M2YrVUV6cmJoSERnT1hNdXl0TSt2NVMyUXl2SDM0S0RJcUtqSFkxMGZiUW5ZSFhsZFFsOTBXamI5T0dHL2FicVc4L1E0dkVuaDh3TjNENXVVN2RyME0rM01MNFVaUlF6NUpUR1Q4d1MvV1dsUnloWTlTclc0dzJvLzZKL1dsbmlvc3d0dS82ZTh4dUdkME9GNmVmYWRab0Q0NmVoeS81UlowL0w3NDVzbjQrN1F1bHhhclZZQzBGZEIwT2FsTVlQWHlBZmkyZTZodDQva01kVjVEVTNxQ1dHeVRzejZzZ1VvVVhoa1hWeEk5ZS9Zd2d6Tk50ZFhBbmgwMi80dDN0QXk2Z3VyajRZRUQvekIvZWlPanZBSXZpZlNyZUVaZFA2MEJKTTNreVd6VFJhVjRnSzgvUVA3TGNDQnVxVmRQbk5Gb2FQck5CSkZvSGNQSmE1TmpGVlN5M2g4OGJOaU0xK1BqOVZOV01sWWpFeXJTR3Z5SlFrRk5IWjc5MFhCRFRtZjRKSEk1cWxva0J1TlhNdk0vbkpPUG1XSERqY2UxQ3FuK3RXeHpPZ3E4QUEvbTc0dlZYZnFoVXFuR2YzN29VTFl0cXBGZFVNM04vSC9hQjVRd3RpUE1GanJaSUUwYS8wdzhoTXdLL1hEdXQyZiswWkdQYnBiLzlyMnpNWE5FbU9YODI1cTFiOEoyRzl6Y0FXL21KMkR4RjdOa1Yrb2FxdVBGWXB2ZFM4OHFxTHBkL2tiSFVSaTZkOHB5YlRyV0YyVEduM0Q2REFycTZySHN0dW1ZT3lhaXcwRGRtSFRMd3JnZWVRWFFJMURkQUc5L1JrVm9raXZJeVZNTkRXeUlGNGxlWlRUeFRvbXhDaXJKZDRWUTJEUkxLUFEzZUM2eXFSSFl6c3BMaGJiUzBYeTZaR0pEcXBFb2JjUEpER1N0Z01MQzJUTVBUMEJnK0pac1h3WDVJYmNBUjYrWGEyaUtHcE9RbUpqZjEvVE14V2NkMU9WQzRZSCtnWUh6MW0zZmJ1Z3oyYlVWcUsrelZUblpUOWZVREp4TVpMeko3RnUvZ2N3YXcwejZYa2wrcmMzZEorZmp6K2dmUzV0U2hUVW5VOVVxRGIwdlFTVHEvc1U2YXdwcXp4WlZkK1drd1NFL1lsRHFLZURNNlQ0V3gwR2lXNExHeCs4R3JOMXZvaVpBbmk0cVFXV0xSRHV4eXErclI2dENnWkZCQVhoNTFoMjltMURaWUNKMXNMQVlTWVhGdEZxdGpyTFZKRXBYbzZ5M3FEcC9xdEZyMGE2MFFhVzFFVkNiY1JNUjVVbkw2dGYveGdaNENtU0dUOXhQdWtuVHJ6bDUrQzBuSHhVU0NlYU9Ib1hCZnI0WTR1ZUw4S0JBeTJ2OGFpVWdsK3E5S0dTNDRlblY1MWE4YXhPZ1VLdXg5c1FadFZTbEVpV0l4US9ZdW9sZ0hWUlNJRzMzSHhRMGY5MjJiWVo5NE02dmdBYkdqdG5ZV2p2VDZaTXhxYVRKY3Q3YWJwaHN6VzBIOWZFOSszSExzS0U0VjFxT1NTRkRjTy9vOEo3TjlpM25aSk12anBhVTRZZThRcWdwYXVxV3hNU0xOc25FbmwyL2RrSjE0L1ZvbzlmNDBzNEFwNDdidXN5MlRaKzBhSzA5T003ZTBmMjNtN012UFF0SDhncnd6bjF6SEdvTjM1UllhZzJOMTA2ZVVVa1VpaVB4WXZGOXRoVzBQWFdidDZnclltTTNkUzVJdkZpODBtejMzOVlLZk1uTXpYNXNpR2N5ajE2MXFQb2xUZEtxYmtnK2lYZm1Ncjd4aUhFcGZpOHV4WUg4YTJTRDlHM3hZbkdLdVF5NjFqMzVqdFMvTlFiWkhsU2gwT0Frb3U2cUY5TDk5d3NJbVB2K2poMzZ3MzZrQkw4ZEFySXZXVk1XeDRsamFZektJOHVaWkl6cWZLRlJKc2ZiS1drYWxVYnpVN3hJOUdCM0pTQjNqWFg5M2RxcmZsZ0hGVFNkZk1QNC9xQ295VjF2aDBaek03RDlDL0xYNm55MXFMTzR4N04rNXl2aVp4ZXprRnZmcUtZMW1sUlFWUGNiaVNscWx2T0Myc2x5Z21LL2dBQzh2NlBMcHBUazM0RU1tNC9QYlVzSmdWVW1NWno5azVaVXU0dXA4eHpTZWM3NXAxWFdZUHZscSsyTmlKVnZ1enBQaTJvQ2o0VlBQWVhaQ3hib2Y1SEwybC93WStpV1A5c1NhU0YxTW1ZbE81cUlTNHBzdCtzYW5JUlQ4aXpTVzZmT1FhWldROU9IM3M1cFFTWDFKQkFJc1Bhenp4QTBlTEMrR3NsbWFyS3BtZ3NPb2NDZTdGenQrN0k5R1pEUk5BM0tUSXZyTktDdVdweGpJSHl6eEExN2trWml6T1RwZU9iMTF3MHJaZjgzUUhtWlExVFVuOWtJOHFZc2VWdDI1cFFhVElzeS94YVlXZzJJa2tOUlhHNStQNEhUZ0xycDlUU2pPaGY5TVJTL25nNkcwUkJBMGdMczJtWjVzOFdmbVNJYmw1MXNpbDZYZWg3ZWZoS3NmU1lMWkpodEtwQ0Z1QzE3STNDbHNGKzNGamt0cUZWMUFtemNPUVl0YlI3d0ZBand3dnIxK290K1NaR0xpNEFEKzIxY0hYWk92ZytURTF0YVRzYWlHODlub3JTdEVhODhmUm1EZzB6dnppS1FmclYvRkxMeUxMdmNuQkxVRGtoYmI4eUNLUXBEaGczRFB6LzhVUDlxQ3FtSlU4ZUF0TE8yckJNdWJSTUs3TXZKeC9IU0NpeDdKQmZqUjVuZW1kVWJTRWtXVGdlcUVhU2RoSm9RSFcwNFhpVW5LdmQ5QTFSVmNFQ3hwTUNaaWlyc3lzN0ZmYmVYSTNhVzZlUHN2WVhVNlVBMUMybW5MbkQ2bkRsWXZHcVZ2bHBhbW9HOXV3R3l6TW9GbXlwd3ZVV0NEZWZTTVRaTWdtV0xycGgwbVZvRHFWT0Irc2F5UysxalVsMTNyNU5jNTV1aktPamNHMFpIcThucjAvdS9CY2hWUUs0V0hHU2MycUpRWVAyWkMzQVhTTEgyMlV4NGVoaHZWN1FXVXFjQzFjOUhhUVNwRmt4U2lrNitOK0tISS85dXRNUmFXd044LzYxckxBWTQyQjhiZWN2MHYrY3pVQ0Z0d1N0UFh6STVlZW9McEU0RmF0ZTZNUVZwUnlON1kzdVgwV0ZBTGF4N0FiS0M1U3JCemkwcWdaVGN4SmRkMTJCMjhrU21DbC8yY0hadnJscWNaakxWdVFEZFFkcjVPdytCQUUrOCtDSW16WmloLzJjQ0sxa1FVQ2hjQTFVN2drcDI2Mi9KdUt4OTd1aXgyR3U0ZGJMeDJUVUM2ZFlmUnlMOWFtQ2Y5SFk2VUhzS2FXZFZqSVlCNVBnSzhiRktKSDBTenlFaTIybk5YNjVXNDdNTFdTaHVic1kvL2xxSXFaSEdKeXlZZ3RUcHVuNXJJTlhCWk9RTklNK29rMXVyWGVrRUswdC9PZVFVS2RtMlY5YmFncWNYRm1EaW1FYWpuSm1FMUtsQUpaQzJ6NXQ2dnhWVzV3MllHQjJOeFMrOG9GOFVJTjMvd1ovYlY3RzQwQ01GS2x2YnNEbjlFcG9VTWl4N05CZGpSaGdmbjJFYVVxY0QxUnBJU1NGblRLckZxT0VTN0JhRllXalljS3hlMzJVRml4eTNKc2V1dWRDdEFoZXJhN0R6Y2c1OHZKVlkrbkF1aGdjYnUvdHNBYWxUZ1dvdFE5T2k2dkRFZ210YUQxWmVzUjgrM3hjQml1K05wYSs5Z1lnSkUvVEpsaFFCQjBXdTVSR3dWclF1OGNqYS9mN2NBcHdvclVCNGFDdVcvaTBYUHQ1ZHJxaEUrOVdxVEV5Y1RKbnRkSk9wM21oUElQMzdnbXZnZFJvdGxGWjZZVmZpQ0pSVmUyTjJuQkR6SDEya0h3cVFjZXV2WW9DOHV1SlV3WFl6cWthNVhQdnFka2x6QzJaSFYySGh2ZGROS2tOdUg5cjZROTluOStaa2QxbFFUVUhhV1lTa1k4RTRkR0lvdkh5ODhmaXExWVl1ckt4MDRIaXlFNzBSWUJ0UXoxWldZMzlPQVZTMEVvL0hGZUxtOGFidlRpQ1E3dng1Qk5JdVdiNnEzZUxmdnhsM20wdUNhZ2xTblZqdHJXczR5cW9GbURnOUdvdFhkNXBva1F2WXlPdUFUbkd0SmJPZ2tyMmt1N056a1ZWYmo2RURGSGp5b1J5elcvV1lobFJiRWhNVFpwY0RkZkxZZWp5NXNOQ2d1N2YwVjZ4clhRWGVYbHBZRFJZSWlxOEJKNUlCNG50MTZNQU1ySmRyNjdXN245cFVDc3lkV1lsNWQ1YUR4ek45a0lScFNHKzRkVXlxN0ZLZ2FpSDlhNkhaM2VUbU9GT3FLUHhuMjFpVVZyVWZoUWlQakVUc1k0OFpUcll1WndJcHA0QldGMWdrTUNFRU9YeTM3Mm8rU0hjL3FMOUsyNHFHRHBhYS9kTmtHbEp6TGFuT0FKY0J0UytRYnY0MkFybkYrb3RxZVJTbFBURVpFUldGK1k4K3FnZVdUR3ZKeTlia0NxSG1IdHdUNWRBdGNMdHh4TWQ4dXJ3UzRzSmlTQlJLekw2bEJuRjNsOENOYi80NEh0dVF1b3g3aWtsSU83UGw1dVlHbFVwbERDd1o4Ri9OQnM2bEFtUUxvWk9HN0xwNi9KUjNEUld0YlJnWklzV0Q4NjZaOUkxMkxwNDlJSFVKVUcwRmFlZks0ZlA1VUt2VkdEVitQR0lXTFRMMnYxNDhEeFFWMmhuWG5vOVJ5ZXJTM3F2NXlHOXNRcEMvR3ZmZlU0UXA0eXpmaHNna3BPWldHbStkVklPVWpJRkdXanAxMXo4aG9oRkxIc3EzYWt6YXRidnZDV1U4SG84OExJdUFnUU14K2RaYk1mMnV1L1FIQ3NtbWJPSi9KUzN0TmYyN1RqMUpsNWx2TElOS2ppLy9VVktxbmMxN3V0R1llMmM1WmsrdjdMYWIxOWxHT3BFZERMbWd0SkJTbE5GTmV3VFNSYkZGZUc3ZExhNERLb0gwNllmeXdlL2w4MGRrNG1RTnBKMlY2NHdFZ2ZhdUJRdTB3NFBRa1NQYlB5TnZ0QmJrQTVucFFIa3BNeHhhbVFvWmExK29xc0VmSldVb2FaSEFWd0RNaXE3Q1g2TEw0U1V3WGwweWxRM2hhbzg0REtrWkE2eTBRaC9ORXFURU5iWHkzOFp2b3psbGkycFBTTHZXbE81RUFmbDNzbmdRRVRWQk96VG9BSmVjMVNJdExRRzJyTlRHYmk2eUJOYytDU0pYNlp3c3E4Q3g2K1ZvbENzdzBJL0duSm5sbURHbFp5MW81NWFVVFVoSnZpNEI2c1RSRFZqNnQ5NTNyVXkwcE9hYWt3Qi9CZWJlWG81cnBiN0lLd2xDZldQN21tM2d3QUVJR2p4RUN5NXBiUU1IRGtUb3NHRkFSUmxRVlFsVVZyU2ZrQ1ZMdHd3RTRxalByS2xIUm5VdHJqWTBRS1doRWVURHgvMXpjekI1WEdPdjd5ZGp1eVhWU2VEMG9JNGIyWVJuSDhtelMzZHZqcVBBZm5LUTY0YUMrdXRQRE5RMWVpQ3Z4Qjk1UmI0b3JRNUFXYVhoSldkRFI0eEEwS0JCV25qSi83d0Vub0NVdktBblEwUkljUHVKMmJhMmRvREovMWNhMzlKWVd0OEFxVXFKZW9VS3BTVWx5S3VzUXFta0hYaHZONzUyZFNja3BBSFBQWmJUNnpFOFNjTmVrRHA5aTBvZ2ZlYmgvQjROL0R0RFpjdVcxQlNrNW9BbXk3VjFUWjRnL3lVTEM5WDFmcWlxTlhGTFg1Y0VRa2VNZ0V3bVEyMUY5M2NUdUZFVXZOemQwS0pvaDlyYTRaRzlJWFY2VUUzZFBXV3B0M1FVU0x2YVdWWG5pWTA3eDVvOCttM2tacjh4TzlhNWMzUnBkYmMzMTVraC9kT0JxbEpUU1BqR2NNWEpFdGc5L2IwM0xXbFBJZTN1eXNXZTJ0WFhscFRFSjV2TGJUbTdueFpWZTJOL3NQbVRHazQ5UnUxTmkwb2cvZnk3VVJadmlPc05BTHB2WFJuU3ZRZUg0K1NGUWRiSVloREhuQXRLQzJuY05WQ2ROd2lieU8xUEFTb0hxWFdjTVFVcG1ZWFJKcHo1UFlYMFQ5SDFjNURhSDFLdEJWMzJrL1lHVXBjSGxZUFVOU0IxYVZBNVNGMEhVcWNIdGJ1cVlHckczRFdQdmx4NFlSMDZwbU9aS3AvbExTaTl0OENhOG1ydE1IZXRFSVBYRFRubFduL3ZxOEF4WXRqcUQ4cmVwZXU2WmM4YTRDMlZnUVBWa2tKOS9GMEhwNnRDcXBPbjg0SkUxNnRBK3lpaE5qb0hLaE1xY21sb0ZiQkZTNnFUMW1sQXRkWlFqaUhuVThDcEgrM2xRSFUrNEt5MW1BUFZXdVc0ZUt3cXdJSEtxdHhjWnRZcXdJRnFyWEpjUEZZVjRFQmxWVzR1TTJzVjRFQzFWamt1SHFzS2NLQ3lLamVYbWJVS2NLQmFxeHdYajFVRk9GQlpsWnZMekZvRk9GQ3RWWTZMeDZvQ0hLaXN5czFsWnEwQ0hLaldLc2ZGWTFVQkRsUlc1ZVl5czFZQkRsUnJsZVBpc2FvQUJ5cXJjbk9aV2FzQUI2cTF5bkh4V0ZXQUE1VlZ1Ym5NckZXQUE5VmE1Ymg0ckNyQWdjcXEzRnhtMWlyQWdXcXRjbHc4VmhWd0tsQ1h4OGF1N0t4T2dsaThpVlcxdU16c3BrRFh1aWVHV0Z2LzVpKzN0RnZ4dUl3NUJZd1Y0RURscUhBS0JUaFFuYUthT0NQL0h4WGlESEFBSlhKdkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUg4QUFBQWVDQVlBQUFBRkZjSHNBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFCZmRKUkVGVWFFUHRXMHRzRzBVWS9zYTdpV1BYTFdtcXBxR3Qwb1M0Y1VXUW1sTXZWSUtleUFFRVVybHdLWkc2UFRVUzlBU0hTb0RnQU9MUUlLV24ybFhTY3lyQnJad0FLVng2U2lXS210U2hVU1RBb1dxYU5FNk00N1VIalIvcjJmVStadnlJbmVDNXhmdlAvL3BtL3RkdUNCcTRxS2F0QTNpcEtPSUhFbzIreDR1amx5OVBncENQU3IrUmFKVFlxVU0xN1djQWIrU2ZVZm9kaWNVK3R0SlJUWHNUd0UvYzcxK1FhUFJ6TC9Qb2xTdWpuSTVlNUc3UE44aXRXL01sQXFwcDN3TjR0Nmp6T29uRkRodlB4c2NIME5GeHFnWmhKbG1jVEZkL1crWGxuVjEwTGdYUURZQTVRMlF4UTllUnk4MlEyN2VuSFVCalBFdnJGeEtOTW9DTVpRSVZnQkQ0UUFXZm9nM1ZnYzhmTEJHcm5XbE1lcm5aUmpXTkhjclBhaERuNUFOWGZ6dUJ6MitTMWNueGhsRk5hNE5mOUNaL3NOdmdseU5PSVp6WGY0bUYvZmJOeitkVXNVVnBOd2c1eXhIWDdlYUxLU0JNSlFTK0pRMVp3L0VGRW8yYWZPTVZ6VXI4ckdFZnVqNUlwcWVYaXluS1U0NndsZVkwS2gvMlpRVEpGRlplanFwd2tJd2kzclN0QlQ1Z0hDU2JzRjl4eUx6TnE2VHc4cmR0enBjUlZBRStwVE1rRmh1MzQyRlJwcUtnYTRXQ2I5ZHUvcjRFMzZINkxvWTNVeUZwcmViM0UvaGN4MVE0VDVTT2doRFdQWlhXUHJ6NWRRUWZoSmhhUWNOdGxFNXlMZWc4Q0tubzg1SExNV2N6dXRMYTFiQnZqWEkya2JEMXdLZVQzMFJrd2o2Vy96eUg1UFlkWXc4aDl6RVN2bVRMNDdmSGoweS92M2I2ak9udmgvRTdvUFNjbEh4UjRrNTFDc09EVTZMa2VickZKeFBZMFNlTVBhSGdKUXljdUcvaXdkdkUyMjYxMVNxWTV5VWlSMHJ4SXJHVGJnNjhDTDN4cmYxdGN4TCs5K29vMXRadkdJOFYzd09jT1YxNUV4bkJ3d1YrNGdhTVJDNlkyRDU2UElsc2p1OGNxakhaZmsrWGZ3WkRBN2JESjBjaFM4dmorRGY5b2ZHOHAvc2FYajVtVE8zeXYvTTI4Yll6Vy9pVnpZVUJITERsSlNLbkdrODQ2ZGFTNEQ5WmVSL3A5SGxrYzMwQWpsVmpiOFVlUXBiZ0kwbDArZTlob1ArZUZFOFJVRVFkYkQzWS9FR3l5cEZTa2lPMlhpWlIzWW9zbW52enF6VzZVZnZhNEh0NHRwNWgvK216TUxMWmNtaXNKNmlLc29XalIrS2VMSms5aEJTNmtoZkpNV1F5WThhZVFOY1VnZ0V6ajJmUHkrR2RrRGg2dXN0MVJWL3ZBMk52KytZNzVQeEc1bm9yMmw2NTMxcVhlSjRXRndJK0RMdUJ2L2E4RCtrZGx1cUFkTHF2bVBiRUpRY0RoVHBFdEI1cHFaei9md2RmSEdZNXlqMlI4OXZneTRFcVNzMVNXR21wYXRJcjdUV3Y0RXR1aGJDWlpPMVE0NWFBQXhvbTNIckFUNTE4QjZFRFNWZDVETHhVNml4MjlEQkFROFYwVUVnUGxTc0J4WmNBU0JLZGFoekI0RHo0bWtQQXNPYUJMNkRjbmlheGdtOXR5M2pqQ2wzR1d3Q2NnQloxUlJJQi95eDZqOTcxUEdqczQ1bW1EM21BV2o0a2NYYUtUMW5DOEN0eUV6NXI5eUY1azB6S2lJSy9FUDhLZXZaMVVYU0Y2RmdYMG4vaW10Y0JhQzc0OWF5MHJWNXhtenc2ZVZBVU1CRUVSSGl4SWRkMjZxcUYzUlpVWlI2cUdzK0hkYjgvWVN1dTFDWG8yVDdvT3N2MTVpR1pxdjZJeU5EWGJxcTJ3ZWU5SXdLWUNQQ01oa1VSWFE4WjVOYTJqRDM0ZlRFS1NvY01tbURnSmdiN1owVkZtT2lXVjhhd2xmckU5SnRIbmRGSzRLL21SN0sxTEg0dTMreWJMMklISC9uWVdQclZZVTFrbXlQTnd0S24wSFZXT3hTVzNic0pidlB1Z1c4SGhtUmY2dW1ZV3ZuVjgrWjdLdXZ5a2toa3J4Mk55SGk2RGI2RGQ1c0pQcERBU09TRGFuSFA3OXYxbTY4cXZ5SVN2bTZydE5kTjlIb3U2NGxhK2UwMitOYWNyeWh6NkQxeUV6Mkg3WXM4SjMrd21jay9UeThpbGVZL3A5dkNTT1J0TnhmV0h2YmRadWRlWUppci9TUVVuL2VMR0RkcnNybnloS3NlT1YvMjhMblIyK216OHRkNWJHNStXYkdOdFdxczJsZlpFS2U0ZkdvQ2lwSkVKbDBlakdYWklFZ1BnN2U3Uk4vUmNkZXIxWlVIM3pxWjgzY21IRStxSFBqMWREV3dGOEJuRmkvK01ZRk01bUpkaldlMm56eCt2ZjU5dm95V2JmREwzbkk3akd5c3UvRml2QTVmTmEwaUdKZ1ZiUmZsYjc0TStHeUlrY3NWZXQyT3pqajZqOCtadHJQcXRGR0xEVWhrditRcDllYmJLZEgvVnhUWC90REJPYThYTFdCUmRXMWpGSmtkRnNwRHlHWGQzMzBRWHdLcVVwanhIem80TDFzci9BZndvNVNPc1NQWXRnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFIOEFBQUFlQ0FZQUFBQUZGY0hzQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQk1aSlJFRlVhRVB0V3oyc1RVRVEvcVltUVVXSGtOQlJhVWhRVVJBU0dnMEtIUWtxQ2dsQ29VTkNwMEJOUWtlRmhFWkZweUJSMHBGUXIzeWNmZWJPMjUvWmMrOTk5ejdPSmlmdjNYTm1aM2JtMjUyL2U2NWdpaU9FOEEzQXFrN0VVeEU1ck1XRkVHNEJPQnZ2aVlpa2xoTkNlQWxnZC9mc3RvaWNzM1FoaEQwQVhxajdWMFhrU2syOUVNSjJ0Y1lhZWVuNWR4RjVGd2xDQ0U4QUhPbytmeE9STmVyWkJnRHJ4eEEySWt2eExkcmJ5dnR0N002NEFjQnFBRFNHWjFCUkNuc2dJdmN6b0pGbkhLOUVoQUF0REFNcW5PQXY0dFBwMEJkOHZiRThldWRvUnRaVjBpMkV3RTE1ZVF4aE9Sc1U3WjBEWDA5cVhWUDJoSVVRQnZBN2ErcU5QWUQvMStORWQ5NjY2V3IwWHJmLzM1OThHc0E3R0JxMktlS0puWHp2QXB4MEx2Qk5HTEx1ZUsrSWpOaW01czBpUCt2MkFXd1VrYzlkaUtyS2NlbzRRdVpkVzV5VVRMQktnbHNTcTlwaUVnYnFvM051enJ5QnY3Q1JFbTUvMFNiclk0aWF2Wk14djBWUUFud21mQ2RUUE14aUZpVjA4NUR3TGVISi95ZkJUMmFlblhzYlNTUnROdjh2Z2E4cXByaWZXRFV4Uk1ZeGdHOU9tazIyUmtwQlJjdCtRQ3hCV1dJdXF2Tzc1NlNMWTBuZHZ2VnlDVTg0ZitDSEVMYTB1SDBBT3dBOFZIUGVBamllNGZIQjNOOXFQcE1QK1UxajNBSEFxMldjQWNBckR1cEYvZlRRT21uZHJhNVdydWJsa2RPeTdraWJXMXVTbDNReHZFVVFUK0JOTmVGOTVpU1NSSGZjK0htdkVjU1RxaXVIbG5YVWFCOEFTRGFmQ2hPWnU1eFF6ODhEV09qYWRmZTFUbHAzN1hWSXVobkFpZ3d2ajV5YWZxbm51YlhOSmZoSEFld0NzQTdBMmo3YUp1WjhBdkFEd0xQdWFtSHJBY1ZyWUx1eDlVYXljbHJXcUdudFlmS3U3VGVQV1ovOHZrcFBhOTRBZnNXeWszVDcxalZPRXRTZkFENDZHRktmV0pYc0I4QXJEdVlNbG9kMjczeW04d3FHZ1RpR2syK01IOTNVTkdPOXhic1crMjFlNHRndldSTHRoa3ZnTTh6eDR0RC9lMlhIUE1TYmo4eFZ6UC9md2ZlQzNFcTNMR0wrQUg0cnJENTYvWFU4azk1aTJKdGx3cmV5SzRkOGF2V2pxaHFnSDF2WExMdkJEM1pWU0dreXdXUHB5MXlJOWltRmhDOEFlRVVkR1FKMHpsRmQ1Q3pCcnk1dW1STlk4RzFacHRWamxiRlA1UUY5VmVkR2VBVGdzV09qemJ6VW80SEdlWkdrWkNUVys2MGRQbHQ5Tkowa3N4Z3YrTmNCN095TGRtWWUzVDM3Q3R3TTJUSHJrei9KVE5zcVdlbzg1Z3ppQmN5RGxZY1htMXluRFRPV3FIVGhCREM2OXBTOEdCTDRsK0hDTnNtZUE3Z3hnTytCNmcrTkJ6QXZ0eGkzSTcwdHkzai9Ib0JOaXVIZHptMTdaV2c2OWljdW1JbkZQR09lVHY3WEh1MVlheVRkbDUvMXlmY0FxRDBmdzlRcHo2UUN6Y1V1ZDRna3FlOG1GcVl2SmZncE1KcnFVb2RoeHVVM3laUHZXTzdJRjE5OU5xdVY0V2xQRCtCbmtKa2wrSXp2eHp3N1pwNU8vaHNBbHpJTHFwM0Uydk5XVzR6TGI2bkJ0ekgvTlFER2ZXNkVsc0dld0JFQStuVTZKbzRIcHAzd2xYcm5OVEQwODBrMFpIU0hxNDhibldibk1iVWVmcDE5TFFFUU0vMlk3Y2ZIc2FIRFJES08yQ2hML2RDR3RYNngxTzBUODIxbnJsU090SURmc3RNOXRNc0JmT3JCdDNwNGFpYzVxRHU5OGNUci9KWkZEdUQvdFZacE0vTGswbVdQKzFZVEt5WjIrSGhWUjUrVFgyV3FDTmpFb0tmZ29CdGpUTk1qK2NwM2k0QUNMVDBTMytacEdiRTI5LzVlc1lVM2RhKzlYMEJiVVhaY2gzYnhLVm5SNi9Jdit3aE51Y0l2OVdQSUpWd0xHNmNBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSDhBQUFBZENBWUFBQUNEZ2JOQ0FBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUJ6cEpSRUZVYUVQdFdUMXNVMWNVL3E2Zm5jU09EY0ZBQ0Q4S0FRS0pZR2dZT29GVW1NckMxQXpkU0JWbktSMWdnZ0hVVmxRVnFKV2dVcGh3VURKMVNjVUtVNm5FeG1JR0ttaWROa1F0Y1pJU2tzYjU5Yyt0cmwrZWZkOTlmL2MrbTVpb3VWS0dQTjk3L3I1enpqM25YSUozc0dnaWNRYkF6eHpwcjBreStaWHhQKzNyYTBFbzlFRlZySE81VjJSNGVKeW5RUk1KeHVOTDd0dFpra3crZHVOREJ3WjZBR3l2U2hiOThEeTVkeTlWMWpHUllIdy9NdjRueVNUaDlPOUFLSFN3Q3A0bVhoeFB5dEg4aFNTVERBZkhWUktvQkVZdytOYW5NQ21TVEo0VVFIQUgzK29jNnF3cC9ZRU1EVjJxR253QkpIVkJ5aWRNeHFadTRGdWRWSld0TGJBMGtmQUJmcFZnOEY1ZGNpYVJIcVVqWkdpb2ovTlEwVGxVbFdmN0xRYndGZmxiNEZ2U3RBb1k4eVNaYlBHSWZERXFhZ0crNlNvcE9WMS8vekFJdWFDVTl2djc3NEFRbHZvQlNqdEFpRW82bmdlZ3AzcEtVM3dtMnJ5UlQra3JFRElzNVFIRjRqaTVmOSswMStiTzk3eC9uTzVLQUo3M2RpM09ybWNzejVwQk5yV0s0SU9RazBaTjRDZER5V0FoSzV0QlM3L3pyV2xmR2l3N29hcWhaekdhQS9pMmhScWxkd0RvVWF3dmFjZDU1K0J6c215QjcrREswdUFuRW5NU1Zmb1crQzRwWS9OR3ZybXlkVkp4dzhBWFVxNmRQR1ZadGlMZnhqeWw2NExTQnlDRUx5QWZJNS8vekthbmY2OGlmMU9DVDcvLzlqait6bnlJaGFWSzBVYklVM1FkS3JkbU1zV0dhWThmZXVtSmk4am5QM2ZrcFdrUDBCcS9oZTJ4aGRLZXllbHVGSXN4MC83czhsVlEybDMrRm92MFlYL2JVMm41UlJuc3pyLzQ0M21aSG04bi9yc2RRNTZXREI5cG9ibU5Uckk1MENMMDluZG5NRG5WZzltNTIrVTlXdUFadW8rYUJpaEtzcWpRbTNuVGlaazNWMEJwcHdTUExNS05vempjTVdLNzk4WHZkMUFvVmlhSDhaYkwyTHVuUEhYenBEODIzb2VWMVVxcmFIZisrY3ZLNUpLM0U5TjVaYlVUeFdLMHhHZGw5UnlBUFdXZVBDMlJUN2hwRUpGdzJsTStjVU5iNnpQVEp5Zlo2Z28rejV3MzJKOFR2VmhhWnNiV0RXYXNVT2duN05qK0VMTnYrNUF2bkxLUlBZTlk3QzdhOXoweC9mWXkvWTFwLzBhQ0x3cnA1b2dpK01xb3J4ODQwWFYyYzRFUFpIRHd3QUQrZW4wRGhTTGZsakU5RmhHTDNUU0JxbWVScTZZb01qU094YTZiOXNwRXJwdWhaYzdMUnRjVytEYVdacEZQQWhuazh4K2JmbVhmRCt5N2htaHoxaGFmOFlseldGeitBa0R6K3U5VE9OSDFxV212REhoMkVRcm9NL0ZDc1EwQSs5TVhJV2tFaUZrZXM4Tm1vUVVxNmJyNzZPWHlXVGZ3bVM3NnRRQVVhUlNVSGxFSS9pbG9nVXhwdjNnMXl6cW1vZDZHM1BuQUZKb2FINVo0TXNHM3hWS1luRTZ1QTdtSVNIZ1loOXBIUFEyUVhZeGlhcVlYSzZ1OWlMZGNzOXpuZnNEbkRlWXBnTWNHUGcxWFczLzRrZVc5Qk4rdWdHU0ZIcnZUZCs4Y1JIeUg3c25WcnY4NytFei9mTDRUbEVaTHdkYlJyZ2VjdzZwL3RlOG1IWXYwN0tKelNvdzJqemxlRTdLT3hBeFdxM1drbzlJdSs0MThRK2RjSVlyY3Fuc0hGQWhtME5TUVFVTm95azhBdlQvZ3o3NXR3OXkvcDdDVzYwR2h3QXBCY3dmZ0RsQUdtcFpHUXlpRjFsMlBxbmFJV2ppRENQN0JBK2NkNVdLNnY1bjdCR3RycDAwMWg1b2NHWVJDS2V6YU1TTHJDUFVIbjNuNjVQUUZySzMxcXVucXNydWhZUlJIRDkydEdUMC9oRVR3eGJiTW9La1hzaGNWbmQxZG9uRGpzT01zaER0WmYvREYzdHlQb2UzT2FOb1RkSGRlVnlMM2N1eHF1UXRobGY3eFl3Tks1L25OTXVDTHd6RCtQS3VUMkFwb2FXZ0Jhd2VVeStsdGNxSElyZ2FqQTZwUWlJVHZlaFhSOVFWLzR2VnBMQ3pjTUJtWUtjMktsY2JHak5SMGpobHdkYld0MURyeDB6MUdWSndEZUNFcEE1Z1hEVDZpOWRaUlgzdzlZSHdUSFovcHZqTStpTjA3MWFaOVJ2RnNIb2hsY2FMcnZKdTQ5UVZmck00bHZOWFY5dnJFa0tWUWZUVTFqdGdhM1lsSUxjR1hjUkp6bTJtZFc4alFjTXMySGhOT2UvQlp5b3UzRENyeDVpdE8yZG0rU2xFa0l3d3JuQ2FuZnl4dlZYMmpxQ2Y0cXJMYTJVT3gxYlVIWDhiUTRoNCt5bVRCNSs5WVJxOTExNEJ5eXVQbFlPbHYrcDk3NVUvQjRDTjBIYmtwclU0OXdhKzJ4bUJLaXZiMEZmblMxdUkyK2dGZlROUE1BRzI3cjh1MktpWXhXZFJuWm02WVhnZFZyNUdOQnYvWDM1S20wVzQxWFlwZC9lVFdYckxwZFdtOEswWk1yY0ZucjNUSERsdXZFVDFORzJQZUN0ZlNURDJRUVVPd1V2aUVHdE1JYVZtSXc0OThzVzE5cWlVT1JCYXh0eldoNUVnaStGcEFmdzdXNSs4eVQ4NU9sc3NpRkhwa3NZSGU1bDBSRG1XaGFhbXk3cEdJL1pQMDBuSW5RS05nK3V1VmY2VzRaQVFsc3A0T1Bsdk1BZko1bGNHS1dXYiszVnhNKzI2RmwvWEJ4by9yV2M4MGgyOTVqVGN0aDBUd2F5T0pUc1hwVGhkVGRTMTRFaktHOXYyWHZJWmRGZkJyd2RTZ29RSStPOE15d013c20wdWJYL3I4eU1ROFB0NHk2cXQycUFmNFRFZVdzcGNXZXkydHFycisrZ09hWFZ0cFErdmRnRys4dmhrTUkrR1VWTS9POWpQSFdWcldCeGpHSU1QTkNHeWt5UmJqRVl1bXZiemQxWjVHOWpQNHF4dmYrY1MyMkJOUGgyUjJtNTN2UVc2dEU0VmlGTVdDKzFWRFNCYkJJQnNDWmREY25QYWtMMGozSHd1eFNEKy9rbHZ2QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSDhBQUFBZENBWUFBQUNEZ2JOQ0FBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUJyMUpSRUZVYUVQdFdUMk1FMWNRL3NickgvbFBSalM1THBGeUJVcVRvMGdGVXFBS0RWV3VTSGNYS1RRaEJWUlFnSktJRkZDRlNFZVZGRnlWNWhEdFVTV1JycU01aW5RZ1FYZFhvTU5hKzR6WFhyOW8vTHpldDIvLzNxN04rVTY1MTNrOWIyYmVmRFB6WnVZUlBzQVNRbHdDOEpmQyttY2krc243TFlRNEErRHpHVVcvSWFMWEtnOGhCTXY0VWZsMm1ZaitUcElqaEZnQjBKcFJGOTdlSnFKZDVZd3M5MHZ2TnhHUjh0OG5BRDZlUVdaQWxzSlhLRHovSVNMR0lYYU5GWnFBY1pCVG1WMGlPcStCa0FhKy9uOGUwYjhSMFkwNWdCOEFLWThpa3owQll3c2hrc0RYblRTcjJFaGdoUkM1d0o4SkROV3JKODZrODlza29uWEZRMmVTRjJYc2lkdzhrWDhLdnBhbXMzZ2lweUJPNDlNVmtmYjFxSmdIK0lHclpBTCtZd0JyR2RQK1F3Q2MrbmxsVGNkdEFGNnE1d3c0elVRbk9mTGZBR0JEbXF6WFJCU2dUUU0vaWFsdU5BQ3A5N2FTVWZRb050NXJtamxNVTJ2RU9jNTdOVUdlMnNRRUNGUGRQRjdlbmE5SFltcXhrQUpnYm42bTRNY1VhbW9VczRySENmeXBMcWZneDNoUEJ2RGZHVlRwcCtBblJPbEpqbnkxc28wNzRwR0JyNlhjS0gxT0k5L2d1bmdLUUMwZytSNy9OcUtuUDFhUmZ5TEJGMi9mZm9abTh3dVVTbjdSSnNSekhCeE1Xek9UWWlOQWs0ZGZxM1VkbHZWOXJDd2huc0sySDJBNHRNYzAxZW81Rkl2TkFIMnBkQnZBdWVtM3dXQWR0djNjV0g5ZGg2ajlaOC8rcTdRMXZwM1U3MUVDVlY0bWNveVZWZ2pqZEl2aFJlTGc0QktxMVJWVUtyOHFoM3FCZGpzd1FNbWtTeForNWZJeXF0VmJJRnBPbFNGRUI2UFJGbXg3TTVLMjFYb0lJbjl5Mk8vZlJLODNuYnFsOG04MjEyRlpmcXNZdGYvTUdYOXlLWVJ2Sno1em9iQ01RcUV4bGxNb1hBSFJSMU9aS2k5ZHptQ3dnZEhvWmFwK09rR3Y5eUx3S1U2M2hZS3ZDbGNOVnErdm9saGNBNUUwbUxkYzl3bjYvVzFVS2d6R2haRHVRdXhoTUhpRXc4TWRMZVA4RXFBL1N2QjFKWk1jVVFjL00rcVREZS9lWFQ1cDRPK2gwN21HUnVNZWlMemhpanlERUYwTUJ2Y0RvSEpFbGN1M0ExSGtuZGh4N2dab1RTSTN5ZEFtKzAyajZ4VDhDRXR6NUk5R2U3Q3Nyd0wvOHZkTzV3NWN0eE9KVDYxMkJhWFNEeUNxVHh4bEgrMzJOMXJrcDZmdHFBZ0Z2TTVoQ1VSTFV4SWhPQlVIOVZFZGxxOGh3RS9YN2ZiTjZkNGs4T1Zacmt4b0d5RDYxRGo0aGRnSHNEZW0xNjltVThlY0NEdXFPMzhmbzlIMldLYnI3c0Z4ZGxHdi96RUdrcU45T0h5TWJuY3IxUUNXMVVDdHRvcENZUldPY3lkMG41dEVyaTVFTlZpcUFpa0VhaHFldGY3SW84c3hCVDljUUhLaHgzZDZyN2VCNFZCNjhxenIvdzQrbngrUVJlZGdzSTNEUXhsd01ldW9JajlmOThDUlhpN0hwMFRIZVJWN1RaZzZralRZZkpadCsrMXkzc2ozenN4RnNHVWxkMENjUldYeHU1OG5nSTRQK01YaUVpcVZDeWdVdUdWYUNYVUFTZkN3QWJoVkdvMTI4Zjc5czVrZFloNnVvSU52MjFkajllS3pWNnRmbzFDNEdLZzVzdWdoYmJDTFhtL1QxQkVXRDc2OHg5ZGdXYXRaenBwSTY3bzhDM2cwTjM1NUdPbmc2MjJaeDFNV2Y5Y3pPWHVhUHE3N09IWVdvdXhkUFBqTlpyQTNUenVZNmYrdXV3UGJ2bXRLUHFack5tOVB1eEN1OU52dGE1bjJxOFFtNE92RE1IVS9keis4NVBBbjNBRnhkcFJyZWRvQnFmdDVEcEpTUkM4Vy9GcnRJc3JsZXdFRDg2RzVXT0UwWmpLZFl3TnllOGF0a3pyZFk2YjZIQ0FOU1JQQTBuaW9FVzFaZnR1bzFnTWVqZTc0ZkhZdWdCMG4yN1RQSzU3VmdSaTNvZTMyMVNSMUZ3dCtlTXlaNnEySnR1ZUpJYWRRYjdudUpxS01Ic2RrbnVDYk9FbXdOUXZQTFV4NEpHV2JsQWxuSFBndjRUZ2JtV1NyRmFmcGJEOUxVV1NpREJkT2pjYWZVMUoxbEd5eWY3SGc1K3VJMUhObGJIV2p3VGN4bEU2alJwa3ArT29keS93T0Q2OWxUbm1xSHJwYzEzMEcyNzV2Zkp6RmdqOWJqY0dIMU8yWksvS05yYVVRNWdGZlQ5TmNaSFc3ZDAxYmxZQ2FIUFgxT3I4WCtMMnhRZEVUNEhIVTRMZGFQT1gwNXhpemRDbFI5Vk5TZXdsQVJqNFhETFhhNzNrd2o3eGZ3eEg0QkxZZHZrWWtZSExNcXk1MkFwNy9xM056MTMwSkxtTEN3NCtsOFZPcS9pVE1ZK051OTd0TWpxU0RMNFQzSE16ejkvUW41emdEeXFkb3prSkJHM0NiVnk3ZjBzN090Q3hYRm4zRFlmU1R0UDk4ek9lWFJhKzZETEtlQko4WE93RDMzSG1YV3BtSHdZOHZ2UFFIbTd6eTlYMk84eUJ0dkJrU3BZTS9MMTJZVDF6OW9hZnFlY2dVNGhVNm5SdHB3eTRmL0hrSTlYaGtBWi8zeUFrWHY4Z0ZYL3J5Nk1RZTMrOXY1YW9kRmdFK241RlRkcW0wR21wVnM1NmZYL3o0QWMyd3cva3c0SHV2YjU3eW5McE1lbmFtWjhjcEZ1VUF3eDlreEp0QnBraVpIcmsvam5zU05qR2tsLzA4K1NaN1RHbjYvWjFVaDJTN1ZTb3JrNWwrWTN5ZEphM1JTRDRwODR4L09PUU9MZE44NEQ4SWxWS1R0M0F3Y2dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVhVQUFBQXNDQVlBQUFDYUN5aERBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFGNkJKUkVGVWVGN3RYV3UwWkVWMS92YnBPendUalFhRG9CRERReFRrbWFDNFFpUzZVRUFEaWNwREpZeHorNXc3SXBDTWdTU0FUMlFaVEFRUlExQ2NXNmZ2Q0NLTFo4eGdSQXdzTUFyaG9lRzFsQVVMa0FCQllNQVJpTXlyKyt5c2ZmcDAzL09vNmxQVmZmcmV2bk83MXBvZmM3dXF6cTVkVmQvWlo5ZXVieFBHWmF5QnNRYkdHaGhyWUxQUkFHMDJJeGtQWkt5QnNRYkdHaGhyQVBNRzZqdzVlUUJxdFlzeWM4RDhLSVhoOGFNeUx4d0Vad0Q0ODV3OEY1QlNWOHlGakZ5dmZ4QkVmd3lpMXliUGV4RE1sMUVZUHR4NVB2ditqMEEwQWVZSkVEVUJQRTVLSGVjaUh5OWQrcnZZWW9zM2dQazEzWGFlOXlpSWZrRXJWMjV5NmFzclZ4QzhHOERab3p5L3ZjYkZRZkJWQUcrdFl1NTUrZkp0d1B4NmJOeTRCQk1UT3lHSzFtSmlZaTAyYkhpZUxybmtlVmY5ZG1XYm5YUHBZczdXcGF1OEM2aytCOEUrWUw0bzNsUGR4VHczdU1UMStsSHdQRmx6dXdCNERzRHpJTHFhcHFkLzFoVmwyYkxYb2xhN0tyZm43eVNsVm5UcVpFQ2RKeWZmQnM5N1ZYY3dSRHNnaW1ZSFp6TTdudGNFOHkrVHFpOVJHTjZxYXhZRGx1ZGRuZnZ0ZjBtcDErZnJzKzkvRkVRbjluajhxd0ZzMjFNODVoZEI5RUtoRHZQZEZJWW5hV1VNZ204RCtIRHV0N05JcWMrblFIVTNBUEp2dGpEdlpLT3FWSjBOSUhvMi92K21UWGQxTmpycm5zOThCSVhoOTFQZ3lUWTZMT2gwYXVwQU1KOE00SjBBZGpiSXV3SE1Qd2R3TFlpbVNhbG5iTWZGOWZvVVBHOWxQN0lWWk8yc1MrWlhBSGlsclF5RmVrUlBBV2lCYUQwcGRVdXZmamdJL2d2QVFiM20zdFNlZzJCN1JOSFJJSG9maVBZQjhEcmpzOXJyVW5SOEM1aXZwREM4dTJ4OGc4aFcxdmRDKzUxOS94RVFiWm1STzRwT29rWmpkVDlqWWQ4L0hFVFhsNjFiOXYzVklPb1lRWUk5Z2tGbDVZbGNoWE5KcVd0VGU3bUlOMUcwbkJxTjZXNmRxYWszZ3ZuQlhEKzNrMUp2Ny93dEMrcjZoVndtYUsvZnRTQXREVncyUFFmQjV3Q2NOWWdnUGRwbUZKS3V4NzUvSllpTzZiV3hLNWN0TllrY0JEY0QrTlBNODFPZ0hsdUFVZlNic2dXWUdaTUFEdlBYUVBRQlIzMEt3SCtPd3ZDZmJOcTV6RzlaZnh3RVQvWUV4cklPaXI4YjEyVnFnem1EZXZ6Rk16RnhEanp2b3dDeVFHTXY0MjJJb2hYVWFQekUxTVFGMURrSVpQMThDNEFZYTl2WWl6RmdUZVpua2kvSHgwaXBnd2ZzemRpY2d5QnYxQUE1SUhSNXRnSFVueU9sWnI5aUJiK0NZQTJBN1Z6NjF0VE5Hb2c2STg0TzFPOG5wY1I0aU1zWTFBRXpxRnRZYTBNRzlTS3dwRUZkLzlZMnYwaURRTDZDNUVXUi9iSndXWm5NVjFFWUhsdldaTEdCT2s5TjdZVW91akhsS2l0VFVhL2Y1UVZhcHpBVXk2MVFuRUJkYjNrT0lwdHIyOUlYcUd1SE9TTmxMa0FkcEZRZUs0dlBkUjlJVmFDZTBmR29nZm9HVW1xcnZHNHFCODdzQXhZV3FBTjFVbXBHaHNCNlVHK1NVa3NLT2hTcnZ0VzZBMFJ2Y1Y5N3VSWlJkQlkxR2wwWGxCWjRxblMvVkcrcEZ5d3Z6WnF6dHRTVE00bDdBQlJjaHdQb3Vva29Pb0lhalJzSGttME02azVUWUxEVWh3UHF6SitoTVB4Q1IwQ3R1OVhPVWg5cFVDOG9Md2F2OWdIQ21TV3pJeHNxdjZrMkFDanpVZDVBU21sZE96WVcwUkJlT0xPZ3JmdFNTTHRuOUtCdTB1SFo4THpQR0hUNE1waC9DQ0w1cEJTLzN5NWdmaE9JOWpmVWx3UFpmVWlwQjB4ek11S1d1bFpIT1F2UUh0UjlYdzdXdE9jeUFFU24vd0hnSGtUUnI3dlBJTm9HUkxzQ09BekFHN1Y2WlA0ZjFHcTc1dytyYmRabEZ5aDhYL3o2MzNWQ3Rtb3JMeVpMWGR4YzNTQ0dValcyV3RmUnpNeC96ejJvTTk4QjVqQWpvT2Z0cUJVNGlsNENJUDg2NVFWcU5LNTBzT1JLTjVzUlJQUis5NEVXbE0zbWlhMjBXbTIzK0lDWlNEYm9KM0l5ZmtzaVZsS2IyVnhIUU5YekhxQ1ZLMStPWDJZVmdUb2ZmL3dyc05WV1Q0QklEaHF6aGZrcldMLytMTHJzc2hjMUZ1R2JBVFEwQjRaUzlSSlNTbnpIZWp5cTBsS1hsenF3ZmVrbTBWWHdQUEhuTHMzL2xQK2Mxb3pkQ3RSajNXNjl0Unh5NTMzb1ltbWZqb21KQzhzaWlMZ2RLU1I2TGxyNlVYUmNmZy9ack1zdVVPam5RWDZXTDR2MVNkVFVEbjNwdG5lanpxR2djelNXaXl4ejVGTzNzOVJ6UVF3dTQwajJlL2xCYWIyK0x6eFA1aTVkZWxycXVnT3B5MG1wajdnS1dGYmZZTWt0T0ZCUGo5TXdwcXpmVEwvSk1uVzZHN0lxVUsvWFQ0VG5mVjBENkYrZ01EUlo3M0gxQkxSK0NHQy9YUHNOV0xmdTkzUXZnN2hkdlg0cVBPL0x2UlpmMlJxcDR2ZCsxeG43L3M5QkpDKzFkQ25NRTlmcng4THppaUd1VVhRS05SclprTjBlQStKNmZROTQzcjJhbDBOSVNnV1pkV1p4MWxNSzZrUjcwUFQwUTFYb2VENzdjQVYxbG5NbFpyTUxrdmtBZU40LzVNZGs1Vk9Qb25mcjNHVzIrckZ5djFoRTUrUjk2b3NPMURrSUJPeE1ZWEtIQXNpY2Vrc1VUanFrY1VHQXV1L2ZES0o4RkkzMjAxNjNBSGx5OGwybzFXN1N2QlNXVWhoZXFtMHpoQzhuMjgxaE1TZWx4b01oNHFZSTZyNS9Kb2pPeWNqRy9CeHF0UjNMTFBUOGVEZ0k1SXN1YjBEZFEwcGwzR0JWV09wbFh5cjk2SG8rMmppRHV0N1lLQlhkQ3RRSGZGRWFvdTB1UVJUOXVDdWc1KzJwOFFhTUxmV2MxZU42aXIyZ1FKMlhMMStTK0hMejRXekdjV2hCMnZkL0JpSlpVT2xTc0NLN0Z1TGlBZlh6UWZRM09iMFlEOTk3b1FmNy9nb1FYWkNyVTNBaGprRzlyYUZrYlc4czZMUkhTR08vWjJCV29GNzZha2hWaUtKZHFkRjROSWRGT3BlZlRhOWpVQjlCVU5lNnVLcndxY2NYeW1xMTJ6VXJZMTlTNmo2YkZSTnZJTjgvRjBSL203TklINkF3ekFOOWU4TXRIbEMvR0VRZnF3VFU5VzZ5TWFnYkZpbjcvcitCU001Yjh1VkpFQjJldm9sWllteVVib1BLUVYxajFSdGUxcVd5QWRoc1FWM2NLTmxicDNKYnovTU9wZW5wdTB5YTBYNis5VmJqTUN6MTRZRjZ2YjRVbnZmTkhCaS9TR0hvZERQVDREdldocUF1S2xEWHZiemFkQmNTMmVKVU9BaitHY0JmNVJwbExwWWt1clU2eEkzckdnNUtGN3I3aFlQZ2F3QSsza1BCTDZQWlBJWldyZnBleG9qVHVjc3NabWtNNmhaS3FtcXhKWkVkL3dLaUV3eVBGZHFDeTBIMFNWSkt6Z3l5K0JZRWNpUFQ1YWJkd2dKMXZjVmM4Tk9XVFJuclQ5M2w5bDdoTTNKUmdicnVwU2tLaUtKM1VhTWhGNzJzU25JZ0xlRncrVE9jZnlXbE1yZC8yZmZ2QXRFZjVUcStrSlQ2NjhMNjNneEIzUUxRTzJxUXZiK0N3bEJlQUhGSk9LZU9iUCtIZCtoR2hMWHBHb1RlUkM3bS9XVmVqMk5RdDFqR1ZZQTYxK3NIdy9NdXQ3cjBJWk1HZkJtMTJubWRrTUhFa3RrRnRacWUzNFpab2hyeVVSOExEZFIxL0RVRm9DaWJNZ01sZ1lDWDlzUi8wYmhmZ3VBUEFHUjhvNGt1MTREb1BUUTluUTgvSzZnNkRvdGRzdVNiTVZkTXZrVFJ4Nm5SdURqOVo4TWhydjVyYnpNRGRRZEFuMVVaODNrVWhuOVh0c1pqUERCYzFySUNkV1lmZ1BBTDlTb3Z3ZlBXNkNLUERPNlhUNFBvS3JSYVc2TldXNGNvT2hoRTJSRHp6Y0g5RWgrUXRGcWZCWkd3S0xvUmpzbUZEdUNUcGl2WXVjMWovWm1idkNCMEpGWTJJWTNEYzc4RWdWeDhrU2llOUNML0JvVmhMNEkwN2FMa0lGaGZDTG5UeEZISHVsZ2tQdlZrclA4TzRMMGFwY2tscmRWZy9rNU0ydFZxUFVzek0wL0VWcm13TmRacWIwSTdqbDdpL1dlSjlEb2RpU0d5YWRNdWVTYkh4UXJxSEFSZjBVUitpTGJFSWo4RndBa3hxNm11TUYrTFd1MkV0RUduclRZWXFCOXNJakMwZXFHVWhERDNlT21NdGsrOVFOd1ZSZCtoUmtQaWQrUEN2cjhiaUNTTUxzK2cxNmtpdDBoL1ZBQ3lvbFp2QTlFblN2enRjd3JxWEs4TFkrSXNMNHZublE0ZzY1dDF2RkhxRWlsUnR2QzBZR0tJTkZoVW9MNXMyZDZZbUpERGFCYzNYcG02NVN2b05HbzB6czlYWEl5Z3psTlRwNFA1SHcyQWZTS0Y0VGNTWSs5cXcrR3B1RnR1QjlGZjlHSWJIZEJTenpDb2xrOXd0Z1lIZ1RBMnZqL3oxenhOd0VLTVV5OG9JZzFpNHI4a3VsQjdNN0xkOEJGRTBZZUU0UzUyelJDSnIzM2ZIc290ODdmUExhajcvdmRBZEVUUHhlQU82aExoc25ldVQ2ZHd4dTRMVmNmQm9uRVBWRzJweHh3My9SWm1ZZG5zOG10MHVpazdLTFNOVTA4Wkd4OEJrUnhJdTMwNW1zZjFkVkxLUkFsdGZaK2tDamRudjZxdnFsMVBRQ2M2ZzZhbnU4eWhTWmlqY09HYkRsRWZSaFQ5R1RVYWVmcmFqdEdvbzk2MXUxRWFSWjhDVWZ2YWZ4bE5kSWVpUElyVzBzek1IY21lS2I5UnVybUFPcHJOYTdIRkZuTFlZV1lIWkw0VTY5ZWZrcjdobUx5NXAwQWszQzc1QTZqMG1pdEVHQ1JLbmx0UXQ2RStkZ2QxSFFEOFBTbDFydXVtY3dHNktpMzFQaUtVU29kV05hakg2NlVkUGlyK3pyMUtCVEJWYUIvWW5VRktGVzhBSjIwV2s2WE92bjhTaVBRM2M1bU5ONkk1Q0Q2bGU1a25LbHlEVnV2SURwaW1wMklnUzcyL1NlL2VhYkM2VWRxbVVzNGZ3SSs4K3lXckd1YXpRVlR2Y1JpNkZzd2ZvekM4eXJoUDJwbDlQZ3RBNG9tTFBOZk1KNmRQeUZPVzZlWUo2bjN5VFJ1aUxrd1VCem9PL0w2NGVDb0hkZVpuS0F3NzJhUzB5OGJsQlpidmdJTkFvbFdPQTdOWWZVVytuZUlUTzhSelYyRGp4a3ZMc2lGVkFlcG9ObmVnVmF1ZTdnK0g1cVlWKzM2dnJ4L2psMHgzLzdZamsrUWxxL3Q2RWhLN0QxRVlYamZQb1A0UUtiV0h0YVZ1UWJjOWNqUUJoZVVTUmN0QjVJUG9iWnFsZEFPYXpSTnAxYXJIYkpZWkI4R2JZNzljK3NJQzg3Mm8xUTdVWGVubUlKRHNLZTN3cDlreXRPZ1hIbzc3cFdpcDl3dnFMcHdqRlIyVUpyUzJrdHFyeWxMNmNoa0UxRE1nSVpzd2luWUhjNXNFajJnN01LK05NekFCdjRMblBRYlB1OCtGVXFBU1VBYytqU2hxWjl0eUxXMkd5ZC9SdncyNUJVbVFrUzZlSjRreTVNRGV1Z3dLNkYxZ2IxdTI0cXN1SGtRRGo1QlNtZHdDRHBaNk1XakFlblNaaXQzd1lpdExYUS9xbVJEbFVRVDFOQTN1YzJDK0FjdzFlSjc0cWpvSFVjSmllQ1lwSlpjMW5Fc1NDaWwrdVAwUVJZZVlzc3hvbFR3YzdwYzQraVUrS1BXOGQ2UUdKRVJPV2VhK2F0d3ZwNUJTMW1SVDNRM1NUaDBtK1JQVFphaVd1b0V6M25uT2N3M21ETlFIRlZUWHZpSlFINFpvcGo2ZGFCTlk4bkJPVER4aU9IZ3V0ZER6UXNRSlRDUUNLWnNjcG9sVzYrQzhDOFlCMUt2S3h0WGIvWkxLbnlEak11eUhudW5zckE5Z0JsMFJyZ2M0N1B2SGdPamJFQ3BnWUZrNitYSy9zdkRrNUo0ME15UDVJYlZscmtHOXNCZ3JZR2xNY2poYUFYR1pIZzNSTDZZSWpVcmNMMFpRWjc0T1JEOHRrMW43ZXhTOXBJc3FTZGV0eWxMdlM3NlNSazZnUHY5Sk1tUTBUcUFlZzVlZWxtSTFoV0UrRWJ5Vml1TzhzY3pYZEVNZW1lT0ltY0tlc3d4cDdCbzZFcDY2elRZOVhYbGFBVjkrK2VrOHc2bFZUdUkrY3BTT0xLakhFejA1ZVVDYVZONXFOZ2VvVkFneGJQZDFaenJFTWdNRUZyUzZocGZaTU9QVW5jNEZlcWxyUGtJYWphRGVwd3ZKZGptVWdUcjcvanRBWkpXdjFmYVpKZlVVS1JWZk9sa01vSjZNYzVZS2dIazFhcldqWGR4VUJjQnUzMitSaTF6M1VSaEtoRXloMkZycUZjMXBwcHN1M29pTGptZ0xSTkZUOEx6cjB6ZmhrNjhZQ2VuK3JWVGpPMG1wRlozL2o1ejdwU3dxb1V5WnlYVnI4V0crQnN3N3hmVk5TVDJZTjBKb1VvRU5JSG9XemVZVDJITExoL3BkT0FQd3FjOHRxQk45aWFhbkpRYmVxWEFRL0Vyam0reG1hc3E4NEtyeXFSdXlPdzJTWE5obTBLV2diazQrWWROOVAzVzZTVWtXQzZnbndINGFtTitBV3UzVWZ2ZWxpN0xuRTlSZDVPeFZkOEdET3JldmFSOFpSeG9BKzFlUStGZHVBY3ExNzUrZzFib1JHemRlWTBvRVViQUVSdE5TMTlFRTlKWDRSQnVGWXNqMlVsVkk0OGhhNm5NUDZ0MDVjd0wxTmdYQmdYMEFScTE3dUt0djNEYUViQXJSVXk2TW9EWmREcXRPUDZCZXVFY2hWL3FKaHBGTnFqMXM1aVpxdGNlN09tZzIxOGxONVFWdnFjZVJMTUI1QU41VDRZVVAzVnFSMEtkVjJMVHBzNldoWnYyQ09yUDIybjRsMUx1K1grVDdadjR4aGVHZnVHd01ydGQzZ2VmSjRWVzJSTkYrT25mVUdOUmR0R3RWdHk5UXQrcDVYS21yQVZkUU4zSzZ6NjFPUnp0TzNjYjlraHlhcnFyOFduYXZpV0IrV3I0R1RQNzArQVhhTDZnYkltb3FBbldyeEF0bGE1Q25wZzREOC9jTDlUeHZXeDJmeG1ZUDZwSU55dk9tUVZTODk2Qlg1dXMwZjViUXhqZ2ZyVVg1WWlkaXljVlN0K2gzUVZSaDN4ZGVsL3h0NjF0SXFaVlZEc0FaMUUzdXdTcUZLdTlyWVlNNkQ0dG5vMXh4VWtNeXcrOXQ0bzRZU1ZBM2dmSEdqZHVWZlhta1ZlS2FjM1J6QjNXNzVUSmJ5elh0V2svN1FrZlhVSklJM0ZYZVVhdHZpRVRyeTQzWVU3Y1cxL0F6KzJJTTZxbEYzaWNsS0FlQmlSRlBPcjhyaVd1L0g4TEdPREd4dGl5NWJrd3B5eXpKYUhkRUZPME1JcUhhUFV5VHVxMHR2TUZWTXJLV2V2czJiZkh5VHF0VnA1bVpHZHZOeTBId0F3Q1M5VDQxaVh3OWhhR09uYkF5bHNZZUlZMERrU2VWamJ2c29MU3NmZjczaWtHOXNvZ20xM0hNVi8wNUEvVWcyQWZBR1hHUUJkRkU3TDhtdXBlVUVoYklRaG5TNVRoWE5TOWNTejJKYkhsZTQwTi9HTTNtQjJqVnF2dGR0V0dxejBFZ0FDYUpnUE9jTVd0SnFWZHJKM2dFM1MveHl5WUlpcVJlekQrZ01Eek1SbDl4Qm5aQUVqamtYUTByVEJmQWhtNnBHdzVvYmNaalUyZStRSjBGVkRxM1Q4MkN5am1KbkNtbFMxOGtiVGE2R0lVNmN3WHEvWXcxV2V2OU5PMm5qUzZKeHdJR2RUMlpqU2htVDFMcWdYNDAxS3NOQjRGWW9mSmxrQzJtYkQrakMrcGZqSzJQNGppc3N2TndFTWdsamVXRjlxM1dYcWJMVzJOUXoyckwxbEkzZ0pmTjBoNkR1bzJXRm5nZGc4OS9NRkR2dWl0NkthZlZhdVl6WmVlcnU5NG9qUzFPMzM4ZmlMNmI2Y3VDbkdtUWVUU1FTYjJUbExyRmNrdzJTVEpNVisyTG45bU9OQUd4M3RxZmxGMU8rcFRjcGRsNWpHeDN6SGRUR0I1ZzB1MWNnYnJWZXN3THFibk5WNWhMdmQrNmIrQWNnL29ndXpCZXc1V0Y1ZzRteWZ5MjdnZlU3OWFrYjZ0bUZMbUR1VDVCWGNkMWJIU0hEQ3E0TVZ5cDFUcW95NEhzKzBLODMrRm5FVzZhTEhGUW0wcFYzQmJtS0lsMm5aY1NlVzhpcFNRVGppemtTa0E5NmF0WGRwNHI0ck1JT1FnbVdwTmMzTm9WbnJjVXdGdTFlbVErdGljelpoQkkrckF2NWRxV2NxNFV3SFg0QjFFdmsxTGJha0JkK0xielBPNWpVQjkwVS9YWmZnenFiY1Z4dmY1QmVON1Z2ZlpWL3ZLUjdnQ216Mm5JTlNQYUkzMW8yUmVvdC9tcUpjTk10a1RSZTZuUnVMNGFRV2Q3U1pqaXhLK2VMYTNXenAxZ2Y0UHZkUkJSMGdRL3V2bm8zdUEwSFNMcXdrS1RqRkZpclErZW5ZZjVQeWtNRCtrMVNNUDhqaUtvRnhJZ0dGK29QY2pjeWlaOHZpejEyREJobGd0NjgxZUluaXhMSTFjbTNCalV1NkN1UzVuWjAvMHkzNkRlSktXV21DWTRzWngvclFHbXRZaWkwekV4c2FxS3E4VHhjNXJOWmZDOEN6VFB5aWh3emtFOWRVQm9BSFVqY0piUW1aYnRxMlJWOGRNZ09qRE5SNkZyV0Jtb1MzUlNGUDNHVHJqK2FtbGZnZzQwd3paUGRRRDFTZzVLT1Fna0YrL09OckxOV1IzbUJ5Z005K3puZVdOUVg3aWdYbXJKc2UrdkJOR1VkbUdJR3dPNE5RNXRKSG9Nekw4RUVHZnZOaTZrS0pMb2x0K09yL1VLeHdUUi9tQStwRWR5ZzNOSUtjbXFFcGVGQk9xeHZNSjJDU2pMNUExWnRUSC9GSzNXMFRiODlWV0JlcUpqN2djSWJOdU1FcWpieUd5VGQzWUk2OUpHdExJNnBmdmJhTkRwZmVxeXJ6dTNuQ1VpcmVCR0t4UEk0ZmRyMHFSWkR1MHFyV3F6cjdMdUY5Ly9QSWgycjFTS3BEUGhDMC8zYXlPYzFnSnNVMmplVXdISFN6L0RmQmpyMXYxaEptVmVPOFA1OW9iTzVJV1JabFByVkpQRitIK0dOcmVtYmc0V3Y1d0dzTlJUTHlLSnl6OFRSQjgySkEvSWl5YTVYNytLaVltTGJiK0UrcDFmdzV6TElkbXd5Z3VrVkNHZnBRMXd1Z2hrYTZuYjlHa2oyeUlCZFJ0MVZWWEhtVDY0cWdlNzRtWUcxSWNoaFBITnF3Ly9zM3FUeDZUM1VTVGN5SEVhcURrcHpBK2kxVHJjeGtxdFNoN3Q1azJEdXQ0MVlhVkRrVEhKNFNwSk9kNFNNMWwyV0MyQlRUR3BXUlQ5QXA0bldWVWt6dDJwVkFucVRnK3VxTElOY0xvOGFnenFzYlllSjZWKzMwVnZLVU5FRi8zU1QxZjl0aG1EZXBubXVKMC9VTEt2cDRzTElJbXY5V1F3bnpwVXExMDRYNGpPaCtkZE5PaGhUNWxPOHI5ekVFZ2FydmRuL3A2N2RLTUJDMnNkdXNyalVuOE02bGx0elFPb253eGdPOE9jQ1NYMTRBZm01UXRDZUcyNjdJRUFudXh3d3BjM0xlaHZET3BtZmluelFhbXJvZ2VwbjJSZWw0UEkyY0s4aHNMd0tOZCtlWEx5RUhpZVJHTWNCQ0xKNUQ3SUFaRlFXajRFWm9teXVZWEM4Q1pYZWFxcXovWDYyMk1yT2wwOGIzV2FleWF4S0FmV1lWVXlkeTJyZXYwb2VONlpWY3h2MWJMWjlNZStMMlJkV2QwRDNVUVZObjFrbG5iN3kxVHllcmJCTklva2orZk4xR2hJNktSVHFWbzJwNGZQVTJVT2d1VmdQaFJFN1J3SkxvWDVsWVl6cFBRTHAzZVB6TGRSR0o3bTh0aGgxRTN1bkVpQ2o2MVMvVXZ5NmpnTVdzcTh1VitHTWVETUpwTDQ1bWJ6VmZDOGR0ejRyR3RodGhwUmUxS2phSzBOVDh5d1pSNzNQOWJBV0FOakRReXFnYzBXMUFkVnpMajlXQU5qRFl3MXNCQTE4UDhGaVBZc2JJR3A2Z0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NlbGVjdF9iZy1iMTg4ZWE5MWI2Yzk1OWM3MzEwZDFjMzJjZDA1N2RkOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNRUFBQUEzQ0FZQUFBQzFpUzZZQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBRk5aSlJFRlVlRjd0WFFsMEZWV2EvbS9WZTFsQUlBdjdZaExEcGl5Skx5Q09SeUhvMkFna1NyZW9mWG9neUhUakF2UVFISjNXYnBmZ1lHc2ZIQWhLd21MUG1BQXpIdEFlQTFrYThTakVGWVgzU05nMGdJWWdBUW1FTEVDMmw3cDN6bitwS2lwRnZWZjFranlXU2QxelBNSDNidjMzMWwvLzkrKzNIZ0Y3MkJ6bzRod2dYZnorN2R1M09RQTJDR3doQ0RvSG5ucmdnVmpCNFhnSUFKSUZnZHpMR1BUVUxrb0kxRlBLUGlXTTVVbVNWTHhtMjdaalFkK1VaZ0ViQkZlVDIxMXNMUzc4VHVjckJPQnh2UFdJcUo2dGlYZU9kWVIzQzIvRGljYUdSaWpadGErMTlseTlBNzlnQURuVTYxMXl0Y0JnZzZDTENlYlZ1dDM1S1NtWmhKQkZJYUVocmZlbFRuTGNtVHdPb3Z0RytWMytSSGtsbE80K0NILy80R01RQkhKZWt1aEwyUVVGSzRPOVp4c0V3ZVp3RjZPZlBtTkdSRXRyNjd1RWtCa1RKbzJEbVk4L0NPSGQyMnArTTVaVVY1MkREM0szd3Y3ZEI3bFZ5TTdQbjJ0MlRVZSt0MEhRRWU3WjE3YmhBQUtnbGRIUEdHVmpaczEvREZEN2QyUVVidDdPclFKanJDUzdvT0QyanREeWQ2ME5nbUJ4dGd2U25aK2Fta2NBSHByMzdCeEl1R1AwRlJ3NGN2QUhPSExvQnpoeDdDUlVISzN3aG9XSFN2MEc5UThiSERzUWhvMktoMkczeFY5eHphNmRlMkJqOXFhZ1dnUWJCRjFRV0lOeHkwb01ZR1FCMEwzWjhQWkc2V2paVHlLdVBiQlBnelJrUUlQWTBDUkNkVTJvZFBKTU4vNTUvTWk0MXFmK01OZWhkNTlVaXdBd056cy9QNmV6OTIrRG9MTTUyZ1hwWVJaSWREckx4NHdmQlU4K3h4TkI2dGhSOEJrVWJDcHFCZFlzUGpMbEozSm5RclVoaDNaODB4Y0tpZ2RSSUtFMDdmZi81TkJia3JYTGN1REFub1AxRGtHTXljekxxKzFNTnRzZzZFeHVkbEZhQzFKVGMwSkNRMmE5dHVaRlVhdkZFUUIvVzU4UFk0YlhRTnFEeHlBOFRQTExvZW9hSjJ3b3VBV09WdlFBdlV1RjF1U1ZoYTlqZkxBa3U2QWd3d3FyWlhBdVlvd2xBMEFpQUp3TmNUaUc2VUZrZzhBS04rMDVQam1nV0lHcE0rK0g2WS8rUXAySFF2dmF2eTd6am9nNTQzenkwUjhDNHVEeTlTTmFLNnVpeU5MVkw3VUIxWWFzVGZCTjhSN0l5cy8zSzdmNitzVEFJZjJrUGdQNmlLWGZIZ0FBK2tOV2Z1RlE3WVpzRUFUMGVPekplZzdNVDAxOW5BQzh1MlRWQzIzcUFDdGVla3M2VVY0dUxQMlgvV1JYYVRTTUhWNEQwWkZldnd4RWwyaFl6SGtJRDIyRjE5YU5sa1ltamhXZjBMaFhHRml2WExJR0tNQXZWK2ZuNXhrUld6QjllanFJSkFNWTZUWDB0bmlZL3NqOVBPaEdBS3g3TS9kU2l3U0IzS3l0K2FyZlpvUEFsdXNPY1FBelFwRlJQVk9Xcm5tSkI3YzRGR0dkbFZvT0dBTXNYRG9PcHQ1VENkTW5uVkxYMnZMcElMakhkUWFpSWxyNForZ0t2WktWQU1vMUNJaS9mWHd6UFArWGRCZ2NOMGk5N3BtMFAwa3RUUzBicy9JdkN6RitxYTFQUkVaSDBMU0Z2eFpRK0pXeGVOWUxyTlhySmIvNng1ODRYU3BKNzY0dUt2cm5TNWl3aDgyQkRuQmc0WU9weCsrWU9HN0k3QVdQcVZTVWJNNnFGL2Z3enpJM2pPQi8wMmVYOGI4bmZnNkhOLzQ2Q21JR1hJRG5mdnM5L3d5dHhjYjhPSGorZHdkaGNQL0d5NkRRMVJzeU05WmdtclU0T3o4Zi9YdytGcWFrSkRNQjhsRDdUMGhPZ3RqNG15RnVlSXdLbmc5eXRzQ093cytCRUFJVEVzNUNRNE1JKzQ5RWdpUkp6NndwS2xwaGc2QURBbUJmQ3JBZ05aWHA0d0hNNVB6MHZVZGF1bWcvdHc2RnhRUGc3NThQQWdVVUc3Ykd3cDREVVJEaXBQRHE3L2Z6Z0JrL0t5MkxnRGVmSzFIWnlpMklMdGFRczBUSFYyM05qOEdKODFOU01nZ2hyemhEblN4MldBdzVjdUFvdng1ZG9mU01wK0NBK3hDc2Z1Ty9NQzBMOS8xREZRZmF1TkhWc0dkL0ZBQmppN01LQ3pOdEVOaVMzQ0VPR0lIZ3RjVi84ZmJ1ZmtRTmlGRzQzM2wvS0N5YTlUMUU5V3JtYnMrRU1WWHd6ZjYrcXB2MDh0dGpZRkMvQnRBRzBkeUNkRS9rd3F3TXhjcGdjSXhaS1FDWWMvUFFJWEQ2eE0rc3VjbEwwTzM2YW04ZjcxMFBUSGNtakI4RnkxL09vaTNOWGdFelZFZ2J3ZmJOdnQ2WVpRS2c5UGJzb3FJU0d3UWRFZ0g3WWlNUUxIODV1MVZvM09kQTl3ZTFlYUJEaVF2OGdZQUlaRCsyWnd5S0hRQ1Z4MDZocHFkcEQ1VUxuK3pxNXoxNk1zN3g5QXZ6eVBLWHMxaFRZek9aTlA0MEZPL3V4MTJoYVhkWHdwTFZZNmpVQ3FlekN3c0g0dDVzRUFUNmhPejViVGhnQkFKTVpaWjV2bXhkdW1pL0EzMzk2dG9RK01MZGgxL1gyQ3hDditnbUdEdWlGczdWaHNDdWZiMzUvNSt1RG9PN1hXZWdmKzhtSGt5amkyVGtEbVZtcklhajM1VjdnVEZucjhnZXJLN21QRWtlL3pQTW5ISUNjdk5pdmZ1T0RoQ2ZmdjUzd24rdjJTeWQrYmxhdkdYSWVYaG1UcGxxQVhyZDFNenFMb1FTSmtuY0N0Z2dzQVc2d3h4WWtKSlNNdWFPMFFuYVNyRlNKRnYyN0Y2MVFQYkJSNE5oNSs3K2ZEMGwrTVYvbzdiSDRoZ09KV2JBZnl2QnM3Wm9ocTNXeS83ME5vaUNBS0hoSWF5bHNaNDlNdVc0Z0tCUjNCeHMyL2hzKzFkdy9PaFBrRFNxR3R3SG83a0ZtSjE2RERLeVJzUFptckFyQ202MkplaXdHSFJ0QXVpWGg0YUh6dnFQM0tWcWloU0Y5WTAvWk1MRDl4K0h5Uk9xT0lPVXVHQm96SGsxUzRTZksxa2gvZWNLYUpUNkE2WmQxeTNMZ1p0NmRJUDZ1bnBHYUJOSlR5dmptU1F0QUw0ckxRUDNseVhRTzdJSk1oWWNVTDlMdXUwc3VBLzFCa2JwNGV6Q3drdnBLbm5ZSU9qYU10emh1MWVLWmZwOFBtWnhEcGZ1a3hhbmZTK2lvRFkyaWZENk83ZkI3TlJ5R0JaN29jMjZyNis3bFlORjZTczZjdXdtV0xseEpDUlB1eHRtUHY0UUtKMmtFVkc5b0xHaEFhSjcxTkhGYzhvRUpMTHUvWGc0VXRFVEh2M3RMMkhYcDkvQzhmSktHQkZYQjJYbHZWUUw4TmFHNFhDNG9pY0hRSWpUT2NGdW0randZN2NKYURtQVJTcXZKTlhnQVJwdHJhRHhZaU84K1BTLzAraWVkZXlQVHh4U3JZUVo5eEFzZjE1M0t3dnBQckQ1MlQrbmgrRkpNMnlsam9qdUJiWFZkVENvNzBWSVR6dk15YXhZUDRLZXJPb21JQUNLdDMwSnB5dXJRSWtCRkV0eTM0UlQ4SVduYjJ0VE0ybGxralJoOWJadCsvUjdzQzJCMlZPeHZ6ZmxnSktyMTdkT1lLdkNPMi9td3NDK0RWTGFnK1hjSXZnYmFBSFdiNDFsTmZWaEJDM0xpWXBUaGdEQVFIdnQ1bmpXME5LRC9YcmVUS0ZnMDBlMHV1cWNNREt1RHI0djc2VzZZV3MzeGZPaUdEQjJrVkY2dHhJSTJ5QXdmYVQyaEVBNUlGdUQ0MlBIaitxaDdmVkJPdWpMNTd5MXdWdFhjOUU1YldJbGpCMWV5LzE0N1VEaDMzYzRFblo4MncvNkRZaHFtcHVlRmxaOXBvWURhTFRyVmpqZytVNjFBSWNyZXNDR3JYR1VrVEF5ZDlFc3N1ay9QNlExWjJzRjlQbm4vdXFZR2dQZ1dwOTgzWjliQUVtU0hsNjdiVnVSci91eUxVR2dUOXllYjhnQkpUWlEvSGp0SkhTTkN0L2ZEanVMdmxBL1J1dUEvM095NnRLQkdoeEtkUmdENjVXdnJ1VkI4SVg2OHhEWnZSWVd6eW5qbFdmTU1BMGMzSWRPZWZnWHdzYlZtNWhBdkd6NHpiVUNhbnlsdnZCcTlpaW9PaGNPbExIemhOS0p2aXlBc3E0TkFsdW9PNDBEL2s2WDRTTFlYbzFISy9sL0ZTZjV1b05qQnNMd1VmRVExU2VTZDZIaUhNd3NoWWVIUVZpWUE4NmQrUm1lZk9RSXZQL1JFSGJ5VEhlQ3NVZk0wQ0d3K2EvL0MwQUlvTWFmTnZFVVlIQmRXZFVkNXM0NEN2OVRHTmZhMUVJdUFtWEpaZ0RBUGRnZzZEUVJzQWtoQjVSV2hnbko0MkQyL010TmRWYTRneFlqYzhrYURvUjdwMCtFb3ZlM3c3Q1llcDc5Q1ExenNyU0Z2eUZmZlB3MUhDbzlEUEUzbjI5dGFoUWRKODkwNDNXSDZJZ1dlT09kVzZHNkxoU0Yrb0JEZE54ajlRU2FEUUlyVDhlZUV4QUhGSXVBWjRaVEhwdmkwTFkwK3lPRWFWVjh6UW9HeGJ1Szk2anVFMnIvZTZmZkE3bXIzcE1xSzA2SjJBMktyay9DaUZySVhEOGN6dFdId2wwSlorQ1Rid1pnRUZ5RFBVRlpSVVVWVmpkdGc4QXFwK3g1QVhIZzZkVFVHUUxBZWdEb2dWWWhZZnhvR0hiYkxUN2ZRYlQ3Y3cva3Z2MGVQSnlXQ3BOVEpnSmFoY01IZndCOEU0WDdpNzFRc09rakVFVkplbXhxaFlpdEZ2d0k1aU5IWVhqTWVYaCtlUUpJRWdFaXdIcUg0RmhrMVFKMFdreVFtSmlZS0FnQ3ZtY1NLS1hGSlNVbE93UGlsby9KaVltSnNZSWd6T2xzdWtiTHVWd3VQTFBLQUtEQzQvRjB5dHNNRWhNVGt3VkJtQ1R2UDdla3BNVFMrelh4dmtWUkxNZnJHR1BGSG85SDdaczMycnZWZFhDZUtJbzdyTkR0TEg3SUIxM1NDU0hQSUJod2JRUUMvenNxSGhvYm1nQ0RZQnhIdnZzUmh0NTZxZjFaR2VnV1lZM2d5S0VmUVJRb09CME1YcGgzQUxxRjAwc1dvQzRVYnVyZUFsWFY0Y2lyM05XRmhXMVArVnNVUkc0SmtwS1NVQUFzRDdmYnJWb1FaQmoyYzh2TVhlTHhlUGdoYU8zblZnbExralJaQVpIdW9hbDA5YlRhc3c3UzBLNmwzTDlXNkZ3dTEwNUNDQmRpS3dNUGdDdjNycjkvN1ZwbXRBSVJWbC9yb0dJaWhQVFNyaVVJQWg0MHo1US9LNkdVcHV2M3doZ3JMU2twcWRYdzQ1akg0NGt6MjdPVjcvSGdDd1dZQVlUZ1B0QnZuMFFJdVVBWmN3TkFmd0l3UXFrem9CWFlVZlE1Yk0vYlFiMHRYdUVlVnhXTUczME8xbXdlQnRFUnpaQSsrekJVbmc2RGxSdEc0bEZMaVFHWjZldTRwWlc5dFFzRWtpVEZLWnJOQnNFbE5yY0hCQzZYQzdVa3Q2S2FFU0cvR1FGcDFoSkNMcDh5a1NlNTNlN0p5bnd0L3hXd0JRcGdoWlp5dlZZcGFoV2VGWUZxejV6NUtTbUZnMklHUFBEa3Y4MFZNUEQ5cE9Bem9CS0Y3dDI4Y0xIQnFiWS9ZRk1kTnR3NUhSVE9Yd3dCZ2RDVExTM1NQSDgxQUN2NzRTQ1F6Wi9aL01jSklmdzBqMWF6K1FLQmJLYjFwanhaMGE2b2RRR2dqZXRFS2MxUndHWFZFc2h1RTlMRnRiajdaRUJiM1RzS0s2VVUxeTFCcllmekxWaUNYTWFZWDNjR2FXcGRRU1BoMURPNHZjTHF5eExmc0NDWVBuMFhFWVFKL0tBTFdna0NFTm16QmY3NHhDSGVlSWVud2JBVGRQTDQwN0JtODFDb3JROEZRcVgzSE02UStZSDYvMFpDYmprdzFqNHdYeUJBb1dhTW9ZQVordGErQUdPME1TMElBQ0RYN1hiNzlmZjhnVWE3ZHlQTlpnYUNRTndaZnhyYUFBVG9PdnIxK1gxb3BoeENpQUw0V0VKSXJGNDV5Y3BoTHlFRUxjc1dTWkl5RVBVNEx6RXhNVUlRaEJtRUVIU1BlakhHY2p3ZWovclMyNnR0Q1hqRnVkVjd3T0ZnQTJlbmxoT0hFL2hKdExIRHo4RVRqLzRJU2g4UVFzUXBTS2NrU2ZqTnFvS0NUb2s5WmRmTXpBQmMrdDRpQ1BoY1h3R2RQeERvaEw3TnBxd0dpSnJBVCsrZnEvNDlnZ0NGZ0JDU29Dd2lDQUpucUsrWUlGZ2cwSE5ldnkvbCs3MTc5NkxWVklldk9FaW5uTkRWV2lHREkxS3hlcjdvU0pLa3p0R0NnRkxLUWFyRUM5YWtKZkJaQ0FUR1dyNXlPTm5JOU5sbDVNVHBidHdDWUVQY3Vib1FxYll1UkpRWSt6ak02WHkwTTdTL2RvZWRiUW5NUU1EZldTOHpkYVhINDFHRHM2c01BalZUb21YR3RRSkJVbExTREFEQTVBSVBHbjBNL0JXWEphak5YUzRYV2tYRk1xSWxNSEpUVlJBd3hoWjdQQjRsS09ia0VYQ3kwdUJyYWkya1VhS2tQWW9nVUNqTW56WXRrWWprNjlBUUduWlhZalY4dWJlMzFOd2lpRVFnbnhIS1h1bE03UjgwRU9pRFEyVWgyZnl1SUlUb1hacWRraVF0eGdjcm0rL0xMMFM2Wk9KVkg5OUtxakFBUzNEZGdNQWYrUFZDaElFeXBSU1RFdXE3T0gzRkhuS3FGZDBmbmlVeUNMSzFidGdXdDl1TlFPVGpXb0VBMTU0L2RlcGpna1BJRmtWMjJ0c3FiQmNBOG9JbC9NcjlkcW9sTUFLQlhFZjRVUEZiamJRRCtxU1VVZ1NEK25BRFRSVUdFaE1nS0xWYTF5aC9yblgvY0g4QVlKcm4xOVpKckFUR3NzRGhtOVI0aG9neHRwSlNtcW10S2NqOHd4aUF1Mjk2cmU1dkhiUXdqREcwdnR4UytCaTVraVNsYTNtdkJRRmFBUGs2TlpFUXFJYS8zdWNIRlFSNjN4WDlTa29wYXZ0YVFSRHd3YXA1ZU5SVUFJQytQRGZiT3FGdTR6b1pNVFVRRU9pdk53dU1yVDVFclJJSUFBUjQzeGljbG5vOEhrTjNTRmRBQzdnZUlRTUphd2Z2eWtDcWtKL0RNYU1pM3RVT2pLM3lOMWp6Z2dhQ3BLUWsvazRZWmVPeWxzTU1SUnR0TDRPQmF5cXRFRmxOa2NyK01WNlB2ckhpVGlsWkttVjVUSkh5REFwampCZnp0RnI3R29PQTV3WDlCZit5LzE0ajN3eFAxeW9GU3ExZ0tINDc4bzRRY2tVQlZFa0FZSHJZUjdHc0FrRmhneUJBdU9tQ05FeTE4YllEalJEWFNaSTB3MTg3aFVLRFVvcnpPRWdDQUVGQWxWME5LRldOYWdTQ0FObHd4WFNybGtDWGRidGRTV05xQ2NwRk5aN3BRVVdCZi8yQklOQU9BQTFQZUp1R0RZS09QbjNOOWVpVFNwS0VSYVNBZjFSQkd5anJDMUU2QWJrdVFZRDdSK3RrNWs4YnBEc3htSzJWdFgwc1kweXRBeUF0ck5ianI2RmlubCttclJZZ2pTcStnVHhPeFJwcFFGRG5kcnN4ZnZwL1BWUjNxTDNhUThzZFg5a2hXYk5qWTlnaythSDZLeENoQUtDNVJxVzQ1V3B3Mzh3U3lPNEl1bmE0YnhSc2Y2bE1GR0lNb2pIemhZMXpwZ3JBNVhLcHFXTS85MXZIR0V2WE4vZ1pXUnkwb3Uza0c0OFJYQzVYaVJ5SXQ4a2F0WlBtZFg5WjBFSGdKejFxeWh3NXJaZmhkcnVEK2x1Mi9rQWd1MnFZM2cxWUk4ckJQdWJvVFR0VFpjdUgyaDBMZWR3Q29PK09WZ0ZCUlNuTnMxRHdVaHNROWN4Rit0b3NFVGJVTWNZaTVBby9uODRZcXpOeXgwd2YxQTArNFFvUXlCbWNLem9NZmQwbk1sT3BUQnBaQW4xL0RHTU1EenNvNlVadDZWdE5XK3E3TjQyS1BmcjlvTEJxc2g4K3UwNk43c01YQ0xSWkdWbEljTytZMHVTTmJaSWtxVnBlRkVVVUtMUVFlQi9vb3FnVmFTdUZKbTB3cTY4USs1TXhmN0dIbkJYQzRpUzJTQVFDWW53dU9XNjNPL2NHbDI5TDJ6Y0NnV2tQdTVheXZ3QldKMFNtQWJMTzE5ZFdQRTFiZWdQcFM3TEVtVXV0SXVvZXNQOUdXMUF5bzZIYmoybUt0NzNCcUo5aW1XRkIwR3pmT3ZlMlRVOVJJTmZlU0hPRERRTHRRUTVUUVREUTdvcHYycWFzYjhUZ0lJRkFQU3RoUlp2cmxFT2lLSXA3WlF0aXFsamFDd0pmQVhoU1VwSmFoRU1BbzJaSHkrVXJTNmZRRVFRQnJSaDZBcnpTckcyYnY1RUVPNUM5WGpVUVlLQ283WU0zMjZRY1M1UXJadHlzcnozWUlQQVg5UHR3c2RDLy8xRCt6clFMdHIwZzhNVkhzODVaZi96WDFuZ0NCYi9aYzcwZXZ6Y0N3VEhHbU9WamF0akhUd2poQlNnalFVbEtTdUlWVWZubXVhOUpLY1UxcmdqQ0ZMOVlEdHJRRlZGU2pLYXVpQzdWcUMrV1dlWTlwVlE5Q29rK3RhTE41ZnZMWkl6bCtRb2dsZUNURUlJQXdCaUYrK0dNc2JsbXdiRVdCRXBCei9LbUwwOVVXOWgxbHNDTTcycFhyWDd2WGRJU3RJUHg2aVUrQW1NMVlHMFBiUXlrc1ozWDdJeHVlNDlaNnZlazEzeWRRTmNVd0xpSFRrcFJxMjZYREdBVS9qYkhMQU41QmxqbDEzYjZCbkx0alRRMzZDbFNaSVljSUdmZ2p5cWJOSE5wQVZXS21SaTVvY3hLcnIxRFlGTVdOakwvY3ZDUGZqTG0zNjBLMVJhMEdtWVdRRm0zczBHZzhGMFFCTnczWm9mOE5kSHBaWmJIRUc2MzIvQm5VbThrQWJleVY4dTlRMWFJV1oxalZzenByRGRXV04xUElQUDBIYWdHMXhvMnBRV3lSckRtbXZFZFU5ZG1GamRZZTd1V2RLOEpDSzdsRGR0cjJ4elFjOEFHZ1MwVFhaNEQvd2RVVllUN2hmVloxUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRU1BQUFBcENBWUFBQUJ1cFpSUEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUF0MUpSRUZVYUVQdG1rdW9UbEVVeDM5L3p5UURJYThNWk1BdG9rd0lBM2wyQjZRSXBURHlLREdqS0V3d1VSNFRTbUhpa1luTGdMelZqWW5rUmxFeWtCS0ppUW1ocFhYYjMzYy8zNzJmYzg0OTUzYSt6VDNUcy9kL3IvVTcrK3k5OWxwYlpIek1yQlZZQWN3RVJnT2pnSkVaWmZxcStTZmdNL0FldUFXMFNYcVZkakNsYVdobWs0SDl3R3BnZUpvK1RkVG1CWEJZMG9Va20vNEtvd2JDQm1CZ2tsaVR2M2NvZXlWZGEyUm5ReGhtTmhlNEhuNkRKdmN6azNsSGdkMlNmdFgzNmhHR21mbWFjQVVZa21tWWVCcmZBOVpJK2xKcmNqY1ladWJyd21WZ1FEeSs5Y3JTZG1DaHBKK1Yzbi9BTURQZklSNER3M29sSDErbjA1SzJkb05oWnI1TlBnVW14ZWRUTG90OWRqeHdoZXJNTUxOendNWmNzbkYyYnBlMG9BckR6TVlCNzRCQmNmcVQyK3BWa3E1Mnpnd3pPd2JzekMwWnI4QnpZRllGaG9ldjQrUDFKYmZsQmt5VW1jMEpPMGh1eGNnRnRqbU1JeDZSUmU1SUVlYWZkeGczZ1dWRnFFV3U4ZEJoUEF2SDhjaDl5VzMrVzRmeEFSaWJXeXArZ2U4TzR4c3dOSDVmOG52UVB6TzZHSDdzWHpPNllIVDA3eVpkTU5vY3hvR1EzOHovMDhXdGNOQmhUQU5leHUxSElkYTNWTTRtbms2ZldvaGtuQ0lka3FvSHRYWEF4VGo5S01UcTlaSXUxU1ozL3RkSTlKR2tlZFhrVHNocExBZHVGTUk1THBIdWFiOEE1QlN3SlM1ZmNsbmJjMEk0d1BDMDMzMWdmcTRoNHVoOEcyaHRXQ29JUUR4TDdqV0ZmM2wzZVEzTWx2UzE5cnMxcXFnTkJrNEExWnBDSEI4N2xaVm5nTzJTZnRTM1RpbzhMd0k4V1R3OTFURE4zZWdKc0VmUzNVWm1wcjJTc0JiWUZ5a1VyNzRma3BRWVI2V0NVU0VaUXZlVndGSmdRcWpRajJtaUNkSDNsMVdLZHRiTWtpTGV6b2l3NkhHVDlETE5qQ1N4TE8vTnpMZTJ4VDMwdVNOcFNSYXRvdHFXQ2FNRjhFcFc3WTBndjBBeVExSXBwK2pTWUlTWXByNnNlVnpTcnFLK2RGYWRzbUdNQU40QXZnajc0amVsUGhESzZsQ2U5cVhDQ0xOakUzQVcyQ3pKcjBXVTlwUU9Jd0E1S1dsSGFSVEN3TDhCL3EvYnpmTDBVOFVBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBR2tBQUFBVENBWUFBQUNUT3lPZEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUJqTkpSRUZVV0VmdFdWMVMyMGdRbmg0WFAyOGhKOENjWU1rSlFrNEFld0xJQ2RZOElQbHQ0YzJTSHhaT2dEbEI0QVFMTnlBbldPY0c4SVpWeFV6cW0zU3IydU9SSlR1a2FoL2lxbFFSeVdyTjlQZlQzV015dnovLyt3elFPaXNjRG9jbnpybGRhKzNEYURTNjF6R3lMTHNuSWw4VXhhZm8rcEV4NWcvdi9kMTRQSDdNc3V6Y0dPUExzcnhZWncxUjdCRExXbnN6R28ybXE4WlQrMmw5WHZibm5EdkZQdUozRFlmRHZuUHUyRnI3YlRRYVRSTDNUN3ozeDhhWXIwVlJERkwzT2JmMVdnSkllWjc3dG8xNTd5L0tza1F5REMvMG83Nkc2OFBoOE1CNy95LytuczFtN3k4dkw1OGtybjdHV2p2eDN2K0hlMFZSekJGRngyaGJrendyNnllaVR5Qk5sLzNJZC9WKzlEWDlicXpwOWZVMTVNaGFLNlFjT09jQ1NPUHgrRUcrTCt2MzNqK1VaWGtnQkpEN1JIUmdqTUcvcWZlK0JsRkFqZmVDNTBLQ2tFQVZaQWVNeC8veElybU94QW96WXBDRVhkNzdIU0xhNTJmcW1GQlZCTks5Z0JtRGRIWjJ0azlFbDhhWVBoSHRldSsvWVVOaHNUOWl2d01MdmZkUFNJSW1XUUtrOEwwVTJONzdnU2hCMWhhRHRBNWhZcEFrZGh2aEJOUkdrR0xXTkNVd3BRcW9xNDI1QUtJclNPb2Q1MFQwZDByQmNUS2JsTlNrakRoaFRTQXB3clRsR0FxRE94d0xVU1hwZzhGZ1ozTno4NUtJWUhGM1RNQVF6emwzZ3V2NGJsVlZSM0NlbndJcHozT3dXeFFHdHU5SUFzRWVmaW11LzhNcVBMWFdCanVBQmIwMVNLK3ZyMDlFZE1nS0N6WWNLK2xuUVlySjY1ejdHS0UxTGN2eWh0MG9rRXJ1QzBqYVRwMXpIK0k2QmxEWUZkNXJWekRHQUhURXYxaG9ITFRFdFJXbFpMdXNKc1VKZW11UW5ITUhPaW0vRXFROHowRzJRTkQ0Z3dSWFZiVzN2YjJOTW9HbUlSQTFBbW5DU3BxclE2byszUlZGZ2NacW9UOEFCbk1nc2J5dnBhNTQ3eCt0dFgraVk4SzlYcStIaGFCV0JWVzFnZlR5OHZLNHNiRVJOZ2VaSXk2ZVFmSHRZS2xMN1E1MUNuYkJzUU9ERXpVcHNMSEpxNlN6YkxJN1ZzR0FrNDdhT0VDOFhxK0hPdGVYUEJoanJxUlRpMnNTWXNEeXRyYTIwQ1FFNWVzUHdMVFdua2hYcWtySEZSSGR3b1Zxa0JEY09mY0ZOb2JDeklFQUJHemx2Q2lLS3duZXBidUR0QUdxZ0tGczRFMUEwcTMvT3QwZDFpTk8wUUxTQWxsa0x4b1FKQnF0TnhIMWpURm9zME4zcHdHSjZ0UFgyV3gyb0R0Z3JTVHRSTkxkQmJhd1NtN0tzanhoOU9IMWYvSDEyNnFxUGlOb0UwaFpsaDBSMFJkaE5iZVpZQjhzSUhSbWJVckMvQlRiV0pNU21tcFFsbVdZUDRMcWwzelFIY0lSNnBFaVZjUFVlbXExS0pBQXhqVjN3WmdQRjJwU2xtV3d1bDIxRG9BSUZZTDhjM01XdXVCazQ4Qmd3QktRd0ZOWnVGSU5FZytwVG91aUNPMzFFcEN3VUNtdTkzcWc3VnFUZUs1QTExT1BBbEdpbjJIRFRKelFScWMybGdJSGUyWDdmZFlGSE9ReXh1enptREZuajdwRzgzdHZtWVF5NzhCbVA3UDk0aHBHaDlDeFFVbFpsazBqa0JwNUEyWG5lUTRyZmJlZ0pOUWJQSm1hb0hHZE45ZVA1d3BkazlSbWtFU3daRGMxTUxZcHFZWDl5ZHROSUFGd251N25iQ2VxQ1k5Z05CRmROSjFXc0VQQVZlYWFCNTdoSmpMa0kyNnFKcTJ5SnlacFh4TkcxNlNseHhuNlJTa2xSVXBCRjNQTjZ0dUwxZGVsY2VERkhscHJyK0tqcDNqVEtaQjRaQkNycmdmaStGbFJQb2hscmYzUWRxd0V3aUpHWEV1VUJZWlRsN2dtY2MwL1ZFMlpEUDVRcnFnWGVidXZxdXBPeDU5ckhGTEJVeXpBK1JSa2plNE53YlNLWnJOWm4rdFdrRG1zQUNjVlhlMU8yV3l3enJpRFRLMUhPcytHWmlLOHY0bk5iUGM0SFZub1Z2VXpRb1Q0aENTT20xS1NKa3hIVlNGM09PTDZjZExTeG9BdVFmTThoMDhmUnZZWGlxcW82VmVDbEZwajE2U3l5aHM3T0xZd0ZQcmtXV1BIL0lSelA5VDhxcW9tVFNya0VlaVdqOFBxczlJVVNJODQxK3J5Y21QTU0yWUczc0N6cUVpcElhZ0o3VGpQU1VFWlhleE9EYzhUNTF5akV2UTZlNzBlVHA0RCs2UUFZM0x2VUcvUTJRS0loY1pKMXhuOGpTRzZZMjdxZzFjMSt3eG1zOWxOQzBoaFR0V0VYd0NwNndLWUdmcWtkeWZ1REhWRDB2VVVQTGE3RmRkVHM0K2JCaWk1L3FBN0k2Snc0TXBqZ1c3VGszTkxyS1JWMWtORWV5RE5HbmIzREtBVzdHNlZ3MFJaS0xxaTFHOGlxWTFJMStLOXYrWGZrOElwZVR6d3liUFlHQks1U2xMMFNiMGtsMDhsQXZ2VktUcEFrbVppQ21VdnExdHNpWE8vbTNWWmw5NGIxNm9qMlpNYVZlcTFnRURjT014WjRsby8rblZaNE8vdnZGMEd2Z04vTkZkdVBoc1dIUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSDhBQUFBZUNBWUFBQUFGRmNIc0FBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUJudEpSRUZVYUVQdFdqdHdFMGNZL2xhU2tTVkx4Smo0QWZiWUpoYklnd3ZjVUlXWmhDb1V5VXhtU0FGVlZNZ05wSUNPQWliSkpKTkpKcGtoQlZUV01FNlZGS1pJRjZxRUdhZWlzUXN5bU1nOFBFa1FFRERHRW82dGt5NnprdTl1YjNXUC8wN3lFMjBsM2YzN3Y3NzlIN3Q3REFEVWRQcGRNS2J5Mzc1R3NUakRKaVplYUhNci9JQmZCVjZmczB6bU13cHZOWlVhUkV2TGdFYkx4c2R2a3VhbDA1ei9wd0x0Y1piSi9PWTJWeDBiR3dYd2hoc2Q0ZjBpR3grZkZuekFaYitqMjVISk1QMmRaQ09CdDB4aWtpWElGREc4eVRJWmpvUHRxQ2lrcHRQK2dhK3lOam02THZEVGFaUFRaTjUybHFoK3dhK1Y1d09MeWhTVHMxV0pMeFBCcjlYVnEweExZQ1VjbStDN2VWVUd5WTNlNFgwVC9MVk00ai90TnlPZnN2NGFHdm1PdGFGR0cxVk5nYkdQN2VxclJkci9tV1V5SDFLc3NvaEVXdTMybWZaRm5TaWxnNXBhYSt4UWxEMWFYMFNSUS9HVlRFUFZUZTlEZkFweGJLNXF3RmZWQjJCc29pS3JYSDdJcmwyci9yWVlPeFo4b1M5NnZjQTNnK3pZaURUQjl4T08xVGxiTS9KZkEvRFhGcTJ4YTFMVlVURFdibFVhbTVHL3c5SStZYnVzOXk1YkJuejF1NjhPZTA0MDJmbXpVSlF6K3J4NE5JWGVubHY2Lzc5elI3SDB5cWpyak4xQzhrQ0tKR2YyL2dSVTlhZ3RienNtYmpwUmhGTjQzTGwzVzJjbDJpVSt0NUlsK29naWg2S3ZUR09ubXcwdnBsNysxbHVuenhuTlBVamh2eFdqMis5b1A0OTkzZnJwRmg0OUhzWHpGNWQxbWNIQURJWVBuaVBaYytmUDcxRXFIOUZwWmQ1MlROeDBvZ2luOExnOWE1eGNpblp4dmNWUktpY0F0Rm5hUVpGRDBWZW1zZE50VThFUEJYOUhNbkdSWkUrandHY3Npd0RMSXhETUlkNTJ3N1E0NjFsQVZBYzcyU0dEVDNLTUJkRkk4cmpwS1ZXM3RVa2JFL210NFI4d05HaTd2ZE1OeUJkaWVQalhqd0JpK3JObzVDb085RSs2K3NmSm9WVDVsSWlrT3JnSi9ocGtmcDFmblo3SHZxNHhkT3pKT1M0QXYrRHpFcVZkYXIzTW4wQ3hlRUtYRTJtOWdtZ2thNUw3Yk1GSTd6eTdkTFJmMGQvM2RNM292M2NzK004WGVyQ3kycU1iR285bEVXdkw2Ly9sbWs4QjN5cnFOWWJCNEJTR0U1ZldCWHd4a2wzVGl3dUJtSWFkd0pmOXA3Rjl0Y3h2R0sxSElKQkhhOWk4RU1VK2k4K2lacVc2MHI2Yms3aHhDNHRHQkVVajA2NDFkM2J1QWhUbFBWdlc4ZmdsOU8rZnNuMVBTZGxXa3pjRGZEZi8rWDIvSmNEM3FqeGZMSStlOEZxdmpRS2lrUW04V2o0clBNdGpvTyswS2NPSWNwcmdBMkpHQ2UvS3VaVktvK0dUMDVSWEFKM28zZEsrSFBVYXZheFRTOHQxSEhyTHFMR05BTCtSZG9xOFpOMjczaHhENTE1ejJwWmw4M0s1dkh3RXEwb0NVR01vbFhscE5jcXJtVDZQWUtES2IxZkxOS0xSYVlnOUI4R3VqUUhmQ1RTcnFCL29PMVdKOEtmUEVuank3N2pKRHJ0OXY5L0lKempKRjRrTXZyd3RxMTI0dk9UWkFVMVZJWTlJZUJKZG5kZHRNNlRBYVdQQWR6cmtzWXQ2VGNtNzl6NUJzWGhTMERtSGtlVHBHbTgwQW55KzJFb2w0MkRHWXlTWmRLS0N2eDRabCs5QytudlB1eTBBZS9CNWhOVXpLQ2Q4OHE0QUtFQ0xlazEyZFJlUUFkQ3RxMk5WUmhvQlBoVXdpbDhvdk83UGZ5VDFOWnh6QWFIUUZFTEJISUtCSE1KaDZ5MXVzUlJEY1RVQnBkUURSZUc3Qk1NL25Fc29kQVBKb2ErZFZMVUgzeWxOVVl5bmRKNnlnK3g2Zy9sL2ptRnA2UXVUV0xtR2JqWHc1ZTJjdkMzanh0eWUvY2tFR3ZWQXk4ci9WajRhNlB2QUtmbzNEM3hLMUl0R3ptYS9oRko2VzM4VURFeGorS0NSbmJZYStGNERoTEU1SEQ2VXBreXpwWkZMcU11OXlPYUJUNDE2emRKcVk4alR2MUdUMnlMZllMRC9sd3JKZGdmZnkrV1hIZm9lZmJBNTRIdU5lczNZMmhwcDdQMDlHbTdwUDBxZHJpczBwY25tQXliclJ0YUx2RzBSK2JLVHZkUTZjUzVQbGYyOTV5cDFiVHVDLzhmZERGUjF5Q2hsd1NsMDdiM3FkamhUc3g1NFUvems2VWtzcjRqZlRCUXdrbnpmWDhPblhZbDZXWGthYlZtTlFWWDVmWFoxeUNtdEd2a1gxcHFkeHhoSm5pS0wwZEovYTNqU2RGTzRIdUNUbFNJUVdxVjFxeWFOcytLK0Q0V3lDQVdNVGo4UXlpRVl6S080WXZpMXhBK0NsQVJLNWRvN0FhZXpsVFYxTjJhZmI3ZnRlREIvb3JLVnNlcUVuZnpKVjdwNGtiUmVOWitBS1puRXJxYlhubU9RV2RvU2NsbDkreS82MytmWHI0TEJ3ZTE0dHhHeXRtUGthM2J6VExqNE1tWDZnc21mVHg0akdwa2tmZi9BRTR6K0dSYy8zU29VZUFxcDk0alJySGJMcml4aWthem5PdWJWZUs3L3k2VmorclR1emttM2xWOGpndk5RbEJpY3JsYTk2cVhSNzQ1UHVaN3Q4NHkybEU5VTVKZktNWlJMUm9xM2tzc0NPZjB3YUhkODJxdVAvd2ZNYVZPWmJRZis3Z0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSDhBQUFBZENBWUFBQUNEZ2JOQ0FBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUJqTkpSRUZVYUVQdFdqMXNHemNVZms5blNiQXNRVW1XZW11QmVPcFNkOGhVQTIybWVnbFFJQjdhcVI2U3BlN2dUTTJRb0MzYUlWc3pKRk03MkZNN3VFQzd1Vk5id0pteTJFTTNkN2VId0Q3Y1NZSWxuVmc4bmUrT3BNZ2pqNUxsbjVxTExaRjhmeC9meDBkU0NBREFHUHVJL3REL2ptMFBFWStUdWFmeS91UmtmWXVJMzlqSVpvd3RBa0NUR3l2STFzbGdqSkg4cjduK3U0ajRsMG1uUXA5cGlxN2ZSOFJkTGdhays4UGtNeUlpMS9jT0FMenRxZ2dBQkYyY1hCN0R2eEdSY05XMm9VR01zWEdBSnhGQ29NY0VYd2lhTFBzTXdKZjF1V0lpQkpzeGxnZSt2RkNMNmxRQ0srRjREYjRwcWpKSXB2RTUvZGZnYzl1SUsrMVBPL09mQXdCdE5kU0swckVQQUFuVjd5TGl1aVh0WDV6TUw3cmFUZnVyZ3ZaL1I4UlBiUFFvTXRGMjczYmE4M21iVEg0cHRrZ3R0U3I4ZUQrcENXejAyTVJLSHVORSswVVZtWXhYZ0UvRllKSWhWTUNsR2FKd1lLcVpQMFh3MDBWc2lsOVJQTVlxK0lvcU14bXZBSjlYa1Z1SVhPSE12d1lmQUs0aytCWW5wdjh0K0h4aDlCc2lVcEdsYkpjMTh5OGwrT3pObTNlTDBqNDBtMnZnZVYrazgzcTlWUWlDMStublJ1TU9sTXNiNldmR1hzUFIwYXFWbnBzM053RHhqbGEyVG9qSkpodmxOakp1M2ZwSDZSZi92VW9YSHlNYlBUYjJ5bU4wdG1sa0lUczZ5cjBGVXM1ck5GYkI4ejVQKzA1T0hrR25rOTV1d2V6c0lsU3JQM0JCMmdQZjF4WjVnbzVtOHprZ3ZxZVZyUXVLeVNhYllOckl1SEVqTzhJeWx2bEZQcGRLQzFBcTFZZXFTcVZsUUh4TDZZZXNwOWQ3QVlQQnZvMkp3cGhPWjAvNHJMUHRYTUdQb2swSWdvd0o4cnhzTm44Q3hOdGpnOC9yc05VL0R2aXlUM21MV05aVEdQWFRDY2ZIZDY4TytESmprR2RSdEFOQjhOUVluN3lBWG9PdkRKOGI3ZGRxeTFBdXJ3REFQQURzUTZmekFycmRqTFprRUcyREwyZExZbkszK3hUYTdaM2NCZUFLUHVuTUhyWG1BWkY4aWh0ajVGTW82RVZNYmdPcG4vb3l2MzMvVVRvMkwvUGorQzJmanEwTFRHZGE1WXdkQXNEQmNKaThsVTZGOWswR3VvQmZxeTFCcGZLZFVqUUZPUXcvZ3lnU2dlQUh5K0JIMFI5cGtQcjlYYUVtNGVmeEFUUDVaZXJuYWRpMWRqSHB5T3UvRU9DN09OQnMvaUlVU0l6OUsyU0VpZjV0OW11VlhWY0pmSW9CUUZ4MDlucmIwRzV2NTBHUjBUNVJrZWRsMWFrTGdMbzUvZjZlTnZOb0R1bXVWTDdpNkhZUHd2QUoxT3UwSU9iUzcvUG8zeFg4T0dDVGFYeFI2NXI1bmxlSFN1VTJJTmJCOHhaeURZdWlBMkRzQUhxOVErajM0NjJnUU12QTErMjNCWVJwaCtidCtlUnN2Zjd6ME5ta0pVZkh1YmtWS0pmWHVFV2hwMzlYOENmaG4wcUdITThndUtmZHRtWm01bUYyOWo2VVNrdEN6VkhFTmxvRWd3RnRiNXUyQzJGYTRMK0NJSGlpOUVVR2pUODcwd1E1aURyNnYramd5OGV5SkJoeDhiY21MUDRpb0t2R1J0RUdCTUdtU1l3ZWZNcldjUnAvQ1NRRG1zak55L3BrREdVRk1RUGZWUFEvQ2ZBYmpjZmdlUjhQVlZHbDcvc1BuVU1nTDFvVitLcWpiYUtRWWtZdHZ2d1pMWFJMcGVUVXNTQnNqY244WHU4bHRGcGJlZmJyd2RldFZOdG8yRlNlamNhWDRIbjNVNUZVb1FmQnN4RVZvK3d3U3YrVEFOOEdNRnYvNHhvcU96YXFMcmthamUvQjh6N2d0aldxamNSanM0MitTbVVCcWxXNmRlVmxoZUQ3OXk0bStLcU1wdU9jcm5DUmIvNmk2RmNJZ2hlcGN4Y05mQnZReEFRNUJOLy8xR2FhZGt6Qkl2UDhNcCtuV1BKR2wvV0pwN1M2YTdVZkJjZjVONFhMRDc3OSs0Y08vWUl4T0Ivd1pTQVphMEdyOWNCWXBZN1Mvd0dFNGNOaEZWM1FjV1g4SmtuN05pa3NadjU0TlFicGt4TktmbkNUYkRvZjhFY3JlTGVISDdycWJMWFdoNHZtTW9JL3VwVnRRUkM4dEZrM0kyTlVONlI1eDBzQTBJUFBXUFpFNjJLTmVBY3VVaG9aV2k0L0hsYXBCR0FZUHNpOXV1WDFKNndSUmErZzNYNld6anNMOExNWVVFV2QzVU1ValFkZFR3OEdWTXhtTlFySmtDKzM0bE1HamFYWTc4TmdRUCtybjNycERTSXVLT2VCS24vK1RjSm1HODBGdjZpRGVlTUpLUG1jVDhlOGFuVnBlSXd4UGRySXNtbXVmTTkvRnVCUE1nYTY0NjVNMVpQUVNWZmpZYmh1U3FocFhmTFkwN3FyODVjVi9KZ0JpQWxYaEIreHVNU0JXSFF3MkxiOTdVUUdQdEZwdVV5L1JuR25ONVhCZFAvYzdlNGFpemtYWitYdElHYVN1TFhiVzZhVlA2S1NZa0NzTWpPVFBkdU9hMWN5LytSa1IzajJWc21OMlhEeDlFNi9QdnhsVUY2amJZRzJCNHB4djc5dmxDL0orZzgwSVVTVGlHalNTd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSDhBQUFBZUNBWUFBQUFGRmNIc0FBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUJocEpSRUZVYUVQdFdrMXNHMFVVL3NaZXgzSGlsSkNxcVFzbFAwMW9BamswRjdpQUJEMDFCeEJJNWNLRit1Q2VtZ001d1FFSktoQkNBcWxCYWs1MXBaUVRoMVRpV0U2QWxCTmNra09oS1U2YkJvazZWRTJUeHFucmVOZUxKbzUzWjhmN003TzdTWnJFZS9MYTgrWjk3MzN6M3J4NVk0S3RSODlrM2did1MrMGR3RVdTelg3QnZFdDkxRE1ablJINGpXU3pkUDdOUjArbjJ4R0xuWktha0I5Y0x0OGprNU1MN05jMk5veVJiSGJjVFk5Ky92d3dnT2NDWWFrS3I1SXJWMllZZi80RTRMM2FPOGxtQ1dOL0QyS3g3Z0E2TGJvWW5TdU1MUmFmMitreUFlMGsrZlc2NVAyZzY5K1RxMWMvOWlEZmN3SHJtY3l2QU42U0IxQW5ZVjNnM0x3VzhqTVpHbFNmQjlCcFM2eGJ3TW1TSHdDYnAyUDRMT05IVjUwRC9HU3ZCdmswRlljUmpjNFU4bEVSQnZrWG9hcmpsdTJqVWhrR0lXeWFiMFMrUzFpNXBYMC8wZWdrNDdqLzZQVXA4RFRKWm1rcXJ0WUg3dW5UYXhGNWtzOXRHM3c2dG1EWnd1Tll5M0J6V2JjVFZlMnQxU2hlTnZ0MWZKaHBYOHB4UEdCUklGNk8yRGZrQThaQzhySzVRZjUraS93OVJyN2ZCV2dudHkxcDM1Sm0wK2tlS01yN0FDNHgzMHRsTDVHSWRNcG9XeG5LM0JKMG5kWWY3UXlXUFJYNWU0cjhyZjA0VUs4aUlQbHNMV0RudTJlUGZQMjdyd2Mza2Y1ei8zV3NGNitGeWJneEZ5Ri9ZS0QzSTl1NTUrK05vcXhkTUg1clRaekRTOGQrTjk3bjd2NEFYWC9OZUI4ODhZb2pSdDZHV0hRQ2ZkMlhoVzN5d2tJbnVuWG5MMXU3Mk8vdEZMSjJpZWdSQnMwTWRNTG1NQmZSTDMxcmRON3c0R0UvVkRYcFI2K3JURnN5aDJScndaNzhoVFNlbHM0WnYzVzBqK0hZVWFOVGhsdC9qME9ybU4zQW9ZSFRqcnJ1THcxamVjVk0rODN4YStqcm1SUzJaOTREQzUzbzVwelpCWTFHWmpINGNyWFJSSEd5ajFicEI5QnFhNWVJSG1IUXpFQW5iSjdrTHo5S1lhTjgxSTlPSVpsazY3enRBdkJ5aEJ2NUZQUEs2aGxEdjFwSm9Wd2VNZDUza256ZUNUeHVkbEh6TmdzNTBHWVFId2pTNUk5ZW1MUkVubDhnb25JODRDRGs4NUhPWTJpUWIybC84KzRoK2tFbm55NGdRcXJGMnVQQ2lDVnpKSm92b3lXUnN6anQ0U016dlJPU1EwZTdXVk9rT21lTnNZM0lkMGhWQzRzamVGbzZBNjFDYjlUa0grcDBSWmxGVyt1MFpZLzNFL2xzcXBSSFlwVmdzNW9iK1hTN0ttMmtET0VuUlhFL3hKcHlpRVdyOVJOYkc5RjM2YlRQRm53aXhyc1pKU0pQeDRTeDU3SEZWazJ2bjRKdk44Z1g5WlBzdUFiNWt0WCtmaUtmUGEwcFNnRkhEbHUzTEc0eG1VZTlNS0xSYmFXeUtaRk5lNlZTQ2xyRlRJRnVjMFFpQlRUSHF3YlpHZWNuOG1XalMzUThueUc3ajcvcmVOeGxNMWV4ZUFvYmFqK2dKN2Y4NHVTYkFxS1JIRUFLYUZKeWFHbVpBVnR6Q09EY0hmSUZnUGthOGl5VDc5YWZxQVllUGJLS0JZR3pjd3BJeEtmUWVlUzY1MElEc1B2azgvMEZwMzZBeUdvSVNqNU5tNXBtTm1Za0k4a0NVYlE1TlpmN0NxcjJob2g1d21Ob1FkejE0cGpYQXJCMitJUm5GeGdvYXJ6WE9WOUFsVEVrS1BtaW1FVXdpY3gxZC9FRFBDbWFyZTNxdk90UWxHa28wVHlpa1R6aThieXR1cktXUkhtakg2cVdncXJTMDRLMVFhY29QMk9nN3hzM3FDYjVZWGY0bGxkR29ldTB4Vmw5bk5KZW1PUVgxcE5ZSzVnNjQwMTVkRHh2N3p3N3I0Z1FKa0k4SGNNZjUvaGpHUjF6Yys1SEMya3RpUW4wZGsySnFyQ01vOGZuOWVJbmx1ODg2b3pkVC90aGt1L0xhNHhRbU9TTFlHRlBHb1RNNDlXVEdSRXh4ekZ6ODU5Q1ZjMTJOMzlQd2dtYTVQT0dCMEpoSTd3VGtSOFU4MjZTYjllM2tMVkhNcENjeWFkN0J0MTN3bnFjYnRja0FZY0Z4M2FlM1NRZnlHTm80TU5BOW9VVytSNHBJeEJJVnZnZ2svL243U3gwdmM5d1J6UTZqYzdERTFKMUNoV210YzUvRDg2aVdFb3pybDNIME1BN2JqdzVSMzRzZGdOS0pMeklqMFNXME5OMW93N01UamFYdkZic2RtNTlkbWw5OGQ4M3NiYjJaUjJzNnQxRnp1TC9pSkpITkZwQXVXUVd0QnB0QktuOXRuY2tzZGgxbkR6aCtrZVduZHZ6bmZhMGcwdytaZjMyblZHVXkyZTkxcVhVNzlUWHgxLzRUUHljdngwZ1dNUU44czEvL2ZCTTB2N0U2dU8wNVI5TFVtd2JnNWZRa3BnU1BTNmFrVThCeUZ3dHlvS2pEUXU3dEY4N0Q4djArRVYxTytsMGtxOWRqR3lISHc2MVRYdGR0R3p1M2N1cnc1dk5HNjJTUkVVelU3d2RaaExKRzgyZ1EyMHpzclhDL3dhQXQ0Z3ZQYVBnQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSDhBQUFBZENBWUFBQUNEZ2JOQ0FBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUJrbEpSRUZVYUVQdFdqdHNIRlVVUFhkbmQ1MTF2TEtWRkxnREtTbENoU21nSVJLa1NwcUlnaFJVSkUycXVIQXFFQUlCQW9sMFNlRjBGREYxa0NoSkJVaXBvSEdxTkk1RU9rZEtZcS9XNi9Wblp4KzZPOTU1bjUyWjk1bDFITU0reVpMSDgrN24zZlB1ZDB3NFdFS0lqd0Q4UG53RzhCMFJmYXM4ZS8wcWhCQUt3WjlFeFB3SFN3Z3hCK0FkTDRham01OFMwVC9xbnpQT2NKT0k3aFRKRVVJc0FKZ3RxUXVUdDRob1ZUbmpyd0ErSGo0VEVTbnYzZ0x3WmdtWm1peUY3Nlp5RnMzbVdiSlVoVjRsK0thc0VEdXNFTkUxQy9qV0N5eUUrQVBBaHlFS0dEVG1CZGY0R3VDelUzMVRRbVltc0VVTzV3dCtDZDFHU0UzRGpBUDhFUU9FUks4SitFa29IZ2NnZVJmR0JKOURMWWZqa1BEL0ZBQ0grM3NBMkx1dUtrSTVuS3JSd01YeldRL1dKOVQ3aC9xc0V0R1NFb0tQdGVmem9SaWNrSHo0eU1qcHVmbEhDR0dHd0F0RXhJWWIxZ2RGUnJSZFdDdjRSdG9vMU9XZ1hzbXRaUXhlWmpwNWQxZ1QyTTRjR25MSEdmYTlER2NxN0txSXpSQm1XRFp5NTNFQ1A3M1V0ak8vRHVCeldPV2Z2TVhGb3VvRjVyN1Vld0VjbHVmYjBvZlhCWFlCeGVOU201NS9yTUFQdllCWmRJY0Nma2EwS2RXeGxBSGZ1QlJaTnBpQW53RlljTTZmZ0s5YndEVXFEYWxJUEg5K2J2RFFiSjVEcmZibE9OMDk1U1hFWTJ4cy9KakplMjV1RVZGMEkzMjNzM01WbmM1ZjZmT3BVeitENkwzMCtjV0x0M04xUEhueWZadzRzWksraitPNzJOeGNkajZUVFJkbWRQcjBZK1ZjZitQbHk4OEd6K3Jmc3dTcTUzS1I0Nnkwc2pGUHR4eGVKRFkyMHNsYmlMelNOTTNtTlVTUmJOZDJkMitpMjAwblpaaWR2UU1pT1EzYzNMeVFLN1BSV01EVTFHMEYvQlcwMjBWMWk4N0twZ3Z2bnB1VFUxQWhIcUhWU3RxNzZlbExpS0w1bEdHbGNnbEViNlRQNnJsTU9mdjd5K2ozMTd4dDJlMXlWeVZYbm02NTRPL3NMS0ZhTFR0cWRkZTczWmFleVZRMmd4ZUJYNitmUmFNaG93WXdBNkt6UndLK2FRRlQ3eUx3M2Eybjd6UWR3UnY4WHUrZTVubWhpcmpTbVFxWEFkLzBkRk9IT0g1MW5qOEIzK0VHTVBqVjZqeHF0U1FrVnF0WEVFWG5GVy85RGNDNkVUNWxPTjNiK3dwQ2JDR09PNGlpR1MzTWg0RFBIaXBiMW5rUVNWbENjQ2plMHRnU2NYdVpMTllEa09HNjFicVp2aXZ5ZkU0UnRkb2xBQ3hQcGdZSDh4M0k3UXprRGxQT2tNN2I4NU93THc5a1U4RE1aWEg4UUFQTFJzODUyUFIyRzAzV2U4NjNuYzR0TkJwc3hPR2FSeFJkVkM2UzNmTlZnNFhvb2RLb1VhMEkvTEp5OHVpOXdmY3QrTVp4cUhHQmI5NzhrSUx2dndSK3M3bUlTaVdwZVhxOWgraDA3aGZkTTFudHMrRmNDci9FODJWb2pHTTlUT2RKVXdzOUdmYkNmWUNyNDNaYmIrTkN3T2VMT0s2bGRoYW1rMnh2WDhmZW5yMmk1MVJXcjU4QjBReWlTQmF2V1RyRzhkb2c5ZXp0UFVFYzYrbko0VXdTL0hGNFk1SEFvaGJOUVZHbkxTSGdPekVPMk9UVG9uSU4xR2hjaE9sWVBtS0ZXRWUvL3hEZDdpL285V1ROVk1CakFyNlBnWDMydW9LZlJNRWJBMDhmMTRyamV6QmI2Z3plRXZ5a0FwZmh2S3dpOWZvaWlNNmtiUEk4WHowODM5NXU5MnVuOEppbFgxblA1NXdaUlo4TVdIT2wzMnBkRHphREMvaEZyU29YdEx5UzRZOFowbWZTM0E2Y0JkSEpFVDMzOSsrNjUvemdVK1lRdWh5ZVNXMTl2bzllU2ZpVTFYK3Z0NnBOQzIyOFhIVzI4ZUgzNXNRdmE5TFliUDZBS1BvZ1pjZUFkN3ZMM3BlZmgxMVRVendwVlhsdG9kVzZYS1RxMFlmOWNZTHZBa3JSbm5HQzc2S0wzcG85UTZ2MXFRdFo3aDdQVGt3Rlg3K0ZwYlRJSU00TCt4UHdFMk9wM3dsQ2JlOXBTd20rZVd1RWVKS1JhMExWd3NnMGFzakpVK0Z3QlJ3b2o5Ynp5OVVZU1FyOVFodHltUi9KREJQa2cyOGhkRENsMjViL00vaXpzejlwUlhFYzMwZTdmZGZOY01hdTZlbnpxTmUvMS83YWJsOHU2di96d1EvOXpKaW5PYy9pczRZY0p2ajZQSjByMmZBV1NJaFZxUE4ybTFWSG81Lzh0S3pPOUcxOHpQYzhpT24zSDR3TXBiZ29yTmMvMTdZbmUxbnVHdnA5L2oxN01NU0R0dVFUOGp3cWxRVnQ4TVlNZWV6ZWJ0OXlLL2pNZy9zZTBMWS9MNmU5VHNPbHc3UkIvdm4xVUcyem84dDdUdGxiVzB1MnFaOWE4TWtlMTBXQTc1NEorUElmUDB6YmNjaXUxYTVvLzdUaWE5K2thSHlHWHUrK3JiOGZzalpuKys1ZjkzeVZpK04xYkcvemR3QjlEWWRML0VHaVVna1A4Vm42NU1uTTA1MzdaWjZ0KzN6bGRMWEQ3dTVEYS8rZWZLSmVPSmpwcTRPY2JDbjlQbzl4MThIbjdQWFdyUHdOTHY4Q2FEMTFnTTBPdERVQUFBQUFTVVZPUks1Q1lJST1cIiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBDb21tb25CdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb25CdXR0b24nO1xyXG5pbXBvcnQgQ3VycmVudFN0YXRlIGZyb20gJy4uL2NvbXBvbmVudHMvY3VycmVudFN0YXRlJztcclxuaW1wb3J0IFNlbGVjdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9zZWxlY3RDYXJkJ1xyXG5pbXBvcnQgYmFja2dyb3VuZEltZyBmcm9tICcuLi9kYXRhL2ltZy9zZWxlY3RfYmcucG5nJztcclxuaW1wb3J0IHJld29yZFRpdGxlIGZyb20gJy4uL2RhdGEvaW1nL3Jld29yZF90aXRsZS5wbmcnO1xyXG5pbXBvcnQgc2VsZWN0R3JhcGhUaXRsZSBmcm9tICcuLi9kYXRhL2ltZy9zZWxlY3RfZ3JhcGgucG5nJztcclxuaW1wb3J0IGdyYXBoQnViYmxlIGZyb20gJy4uL2RhdGEvaW1nL3NlbGVjdF9ncmFwaF9idWJibGUucG5nJztcclxuXHJcbmNvbnN0IFNlbGVjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCYWNrZ3JvdW5kV3JhcHBlcj5cclxuICAgICAgICAgICAgPFRvcFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8VG9wTGVmdFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Jld29yZFRpdGxlfSBhbHQ9e3Jld29yZFRpdGxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgMjAyMOuFhCDtlZwg7ZW066W8IOuLpOygle2VmOqyjCDssYTsm4zso7zsm6DrjZgg66eM64Ko65Ok7J2EIOumrOuniOyduOuTnCDtlbTrs7TshLjsmpQuPGJyLz4g66eM64KoIOyGjeyXkOyEnCDri7nsi6DsnYAg7Ja065akIO2OmOydtOulvCDtlbTsmKTshajrgpjsmpQ/IDxici8+6riw7IGoLCDri6TsoJXtlagsIOqwkOyCrO2VqCwg67aI7Y647ZaI642YIOqwkOyglSDrk6Qg7KSRIOuLueyLoOydtCDripDqvIjrjZgg6rCQ7KCV7J2EIOuCmOuIhOyWtOyjvOyEuOyalC5cclxuICAgICAgICAgICAgICAgICAgICA8L01haW5UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L1RvcExlZnRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPFRvcFJpZ2h0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q3VycmVudFN0YXRlLz5cclxuICAgICAgICAgICAgICAgIDwvVG9wUmlnaHRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8L1RvcFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxNaWRkbGVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPE1pZGRsZUxlZnRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDYXJkV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENhcmQgaWQ9XCJqb3lcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDYXJkV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q2FyZFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDYXJkIGlkPVwia2luZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdENhcmRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDYXJkV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENhcmQgaWQ9XCJ0aGFua3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDYXJkV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q2FyZFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDYXJkIGlkPVwidW5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDYXJkV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDwvTWlkZGxlTGVmdFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8TWlkZGVsUmlnaHRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmFwaFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2VsZWN0R3JhcGhUaXRsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JhcGhUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JhcGhXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoQnViYmxlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z3JhcGhCdWJibGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD42NSU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyYXBoQnViYmxlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaEJhY2tncm91bmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoRnVuY3Rpb25Kb3k+PC9HcmFwaEZ1bmN0aW9uSm95PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmFwaEJhY2tncm91bmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhTdWJUaXRsZT7quLDsgag8L0dyYXBoU3ViVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JhcGhDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoQnViYmxlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z3JhcGhCdWJibGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD42NSU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyYXBoQnViYmxlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaEJhY2tncm91bmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoRnVuY3Rpb25LaW5kPjwvR3JhcGhGdW5jdGlvbktpbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyYXBoQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaFN1YlRpdGxlPuuLpOyglTwvR3JhcGhTdWJUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmFwaENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhCdWJibGVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtncmFwaEJ1YmJsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjY1JTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JhcGhCdWJibGVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhGdW5jdGlvblRoYW5rcz48L0dyYXBoRnVuY3Rpb25UaGFua3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyYXBoQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaFN1YlRpdGxlPuqwkOyCrDwvR3JhcGhTdWJUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmFwaENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhCdWJibGVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtncmFwaEJ1YmJsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjY1JTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JhcGhCdWJibGVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhGdW5jdGlvblVuPjwvR3JhcGhGdW5jdGlvblVuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmFwaEJhY2tncm91bmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhTdWJUaXRsZT7rtojtjrg8L0dyYXBoU3ViVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JhcGhDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JhcGhXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9NaWRkZWxSaWdodFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvTWlkZGxlV3JhcHBlcj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCBib3R0b20gOiA2MCwgcmlnaHQgOiAxMjB9fT5cclxuICAgICAgICAgICAgICAgIDxDb21tb25CdXR0b24gdGl0bGU9XCLsi6Dssq3tlZjquLBcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvQmFja2dyb3VuZFdyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEJhY2tncm91bmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2JhY2tncm91bmRJbWd9KTtcclxuICAgIHdpZHRoIDogMTkyMHB4O1xyXG4gICAgaGVpZ2h0IDogOTgwcHg7XHJcbiAgICB0b3AgOiAwO1xyXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuYFxyXG5cclxuY29uc3QgVG9wV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aCA6IDEyMDBweDtcclxuICAgIG1hcmdpbiA6IDEwMHB4IGF1dG8gNTlweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQgOiBzcGFjZS1iZXR3ZWVuO1xyXG5gXHJcblxyXG5jb25zdCBUb3BMZWZ0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5IDogYmxvY2s7XHJcbmBcclxuXHJcbmNvbnN0IFRvcFJpZ2h0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5IDogYmxvY2s7XHJcbiAgICBmbG9hdCA6IHJpZ2h0O1xyXG5gXHJcblxyXG5jb25zdCBNYWluVGV4dFN0eWxlID0gc3R5bGVkLnBgXHJcbiAgICBmb250LXNpemUgOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQgOiAyMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmcgOiAtMC40OHB4O1xyXG4gICAgbWFyZ2luOjMwcHggMCAwIDA7XHJcbiAgICB3aWR0aCA6IDY1MHB4O1xyXG5gXHJcblxyXG5jb25zdCBNaWRkbGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoIDogMTIwMHB4O1xyXG4gICAgbWFyZ2luIDogMCBhdXRvO1xyXG4gICAgZGlzcGxheSA6IGZsZXg7XHJcbmBcclxuXHJcbmNvbnN0IE1pZGRsZUxlZnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoIDogNzUwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi1ib3R0b20gOiAzMXB4O1xyXG5gXHJcblxyXG5jb25zdCBNaWRkZWxSaWdodFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGggOiAzMzRweDtcclxuICAgIG1hcmdpbi1sZWZ0IDogMTE2cHg7XHJcbmBcclxuXHJcbmNvbnN0IEdyYXBoVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGggOiAxOTNweDtcclxuICAgIGhlaWdodCA6IDU1cHg7XHJcbiAgICBtYXJnaW4gOiA0N3B4IDAgNTlweCAxMDBweDtcclxuYFxyXG5cclxuY29uc3QgR3JhcGhXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXkgOiBmbGV4O1xyXG5gXHJcblxyXG5jb25zdCBHcmFwaENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGggOiA2N3B4O1xyXG4gICAgbWFyZ2luIDogMCAyMnB4IDAgMDtcclxuYFxyXG5cclxuY29uc3QgR3JhcGhCdWJibGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgICB3aWR0aCA6IDY3cHg7XHJcbiAgICBoZWlnaHQgOiA0MXB4O1xyXG5cclxuICAgICYgPiBwIHtcclxuICAgICAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xyXG4gICAgICAgIHRvcCA6IDA7XHJcbiAgICAgICAgbWFyZ2luIDogMDtcclxuICAgICAgICBjb2xvciA6ICNmZjdiN2I7XHJcbiAgICAgICAgbGluZS1oZWlnaHQgOiAzNHB4O1xyXG4gICAgICAgIHdpZHRoIDogNjdweDtcclxuICAgICAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBHcmFwaEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6IHdoaXRlO1xyXG4gICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXMgOiA4MHB4O1xyXG4gICAgd2lkdGggOiAyOXB4O1xyXG4gICAgaGVpZ2h0IDogMjc2cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDEuNXB4ICM2YjRkNGQ7XHJcbiAgICBtYXJnaW4gOiAzMHB4IGF1dG8gMjBweDtcclxuYFxyXG5cclxuY29uc3QgR3JhcGhGdW5jdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xyXG4gICAgei1pbmRleCA6IDk5OTtcclxuICAgIHdpZHRoIDogMjFweDtcclxuICAgIGJvdHRvbSA6IDNweDtcclxuICAgIGxlZnQgOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzIDogMjBweCAyMHB4IDQwcHggNDBweDtcclxuYFxyXG5cclxuY29uc3QgR3JhcGhGdW5jdGlvbkpveSA9IHN0eWxlZChHcmFwaEZ1bmN0aW9uKWBcclxuICAgIGJhY2tncm91bmQtY29sb3IgOiAjZmY5MDhhO1xyXG4gICAgaGVpZ2h0IDogNjUlO1xyXG5gXHJcblxyXG5jb25zdCBHcmFwaEZ1bmN0aW9uS2luZCA9IHN0eWxlZChHcmFwaEZ1bmN0aW9uKWBcclxuICAgIGJhY2tncm91bmQtY29sb3IgOiAjZmZlMWU5O1xyXG4gICAgaGVpZ2h0IDogNjUlO1xyXG5gXHJcblxyXG5jb25zdCBHcmFwaEZ1bmN0aW9uVGhhbmtzID0gc3R5bGVkKEdyYXBoRnVuY3Rpb24pYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6ICNmZmY4ZDk7XHJcbiAgICBoZWlnaHQgOiA2NSU7XHJcbmBcclxuXHJcbmNvbnN0IEdyYXBoRnVuY3Rpb25VbiA9IHN0eWxlZChHcmFwaEZ1bmN0aW9uKWBcclxuICAgIGJhY2tncm91bmQtY29sb3IgOiAjZGVmM2ZmO1xyXG4gICAgaGVpZ2h0IDogNjUlO1xyXG5gXHJcblxyXG5jb25zdCBHcmFwaFN1YlRpdGxlID0gc3R5bGVkLmRpdmBcclxuICAgIGZvbnQtc2l6ZSA6IDIwcHg7XHJcbiAgICBjb2xvciA6ICMzMzMzMzM7XHJcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RQYWdlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=