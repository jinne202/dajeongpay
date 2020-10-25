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

/***/ "./src/components/ButtonComp.js":
/*!**************************************!*\
  !*** ./src/components/ButtonComp.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\project\\dajungpay\\src\\components\\ButtonComp.js";
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
  displayName: "ButtonComp__ButtonStyle",
  componentId: "d5ixsq-0"
})(["width:200px;height:60px;background-color:#ff6464;border:0;border-radius:50px;margin:0 auto 0;display:block;color:white;font-size:24px;outline:0;box-shadow:0px 0px 10px rgba(0,0,0,0.1);transition:all .3s ease-in-out;&:active{border:0;outline:0;}&:hover{cursor:pointer;background-color:#FF908A;}"]);
/* harmony default export */ __webpack_exports__["default"] = (CommonButton);

/***/ }),

/***/ "./src/components/CurrentState.js":
/*!****************************************!*\
  !*** ./src/components/CurrentState.js ***!
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
var _jsxFileName = "C:\\project\\dajungpay\\src\\components\\CurrentState.js";
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
  displayName: "CurrentState__ListStyle",
  componentId: "sc-1u8pzbj-0"
})(["float:left;width:160px;text-align:center;height:100px;& > p{font-size:45px;margin:10px 0 0 0;line-height:45px;color:#ff6464;}& > span{margin-top:9px;display:inline-block;}"]);
const ListBorderStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(ListStyle).withConfig({
  displayName: "CurrentState__ListBorderStyle",
  componentId: "sc-1u8pzbj-1"
})(["border:0;border-right:1px solid #ff6464;border-style:dashed;"]);
/* harmony default export */ __webpack_exports__["default"] = (CurrentState);

/***/ }),

/***/ "./src/components/SelectCard.js":
/*!**************************************!*\
  !*** ./src/components/SelectCard.js ***!
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
var _jsxFileName = "C:\\project\\dajungpay\\src\\components\\SelectCard.js";
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
  displayName: "SelectCard__SelectBox",
  componentId: "sc-1p71olm-0"
})(["width:750px;height:130px;position:relative;background-color:white;border:3px solid white;border-radius:16px;box-shadow:0 0 10px 0 rgba(0,0,0,0.05);transition:border 0.1s ease-in-out;transition:background-color 0.2s ease-in-out;cursor:pointer;&:hover{border:3px solid #ff6464;}", ""], props => props.check && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["background:#ff7b7b;border:3px solid #ff6464;"]));
const SelectBox_Left = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SelectCard__SelectBox_Left",
  componentId: "sc-1p71olm-1"
})(["width:460px;margin:28px 0 0 49px;font-size:18px;"]);
const SelectBox_Right_1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SelectCard__SelectBox_Right_1",
  componentId: "sc-1p71olm-2"
})(["width:219px;height:180px;position:absolute;bottom:-3px;right:18px;"]);
const SelectBox_Right_2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SelectCard__SelectBox_Right_2",
  componentId: "sc-1p71olm-3"
})(["width:210px;height:130px;position:absolute;top:-28px;right:27px;"]);
const SelectBox_Right_3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SelectCard__SelectBox_Right_3",
  componentId: "sc-1p71olm-4"
})(["width:204px;height:130px;position:absolute;top:-28px;right:18px;"]);
const SelectBox_Right_4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SelectCard__SelectBox_Right_4",
  componentId: "sc-1p71olm-5"
})(["width:170px;height:142px;position:absolute;top:-23px;right:52px;"]);
const SelectText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "SelectCard__SelectText",
  componentId: "sc-1p71olm-6"
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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAeCAYAAAAFFcHsAAAABHNCSVQICAgIfAhkiAAABfdJREFUaEPtW0tsG0UY/sa7iWPXLWmqpqGt0oS4cUWQmlMvVIKeyAEEUrlwKZG6PTUS9ASHSoDgAOLQIKWn2lXScyrBrZwAKVx6SiWKmtShUSTAoWqaNE6M47UHjR/r2fU+ZvyIneC5xfvP//pm/tduCBq4qKatA3ipKOIHEo2+x4ujly9PgpCPSr+RaJTYqUM17WcAb+SfUfodicU+ttJRTXsTwE/c71+QaPRzL/PolSujnI5e5G7PN8itW/MlAqpp3wN4t6jzOonFDhvPxscH0NFxqgZhJlmcTFd/W+XlnV10LgXQDYA5Q2QxQ9eRy82Q27enHUBjPEvrFxKNMoCMZQIVgBD4QAWfog3Vgc8fLBGrnWlMernZRjWNHcrPahDn5ANXfzuBz2+S1cnxhlFNa4Nf9CZ/sNvglyNOIZzXf4mF/fbNz+dUsUVpNwg5yxHX7eaLKSBMJQS+JQ1Zw/EFEo2afOMVzUr8rGEfuj5IpqeXiynKU46wleY0Kh/2ZQTJFFZejqpwkIwi3rStBT5gHCSbsF9xyLzNq6Tw8rdtzpcRVAE+pTMkFhu342FRpqKga4WCb9du/r4E36H6LoY3UyFpreb3E/hcx1Q4T5SOghDWPZXWPrz5dQQfhJhaQcNtlE5yLeg8CKno85HLMWczutLa1bBvjXI2kbD1wKeT30Rkwj6W/zyH5PYdYw8h9zESvmTL47fHj0y/v3b6jOnvh/E7oPSclHxR4k51CsODU6LkebrFJxPY0SeMPaHgJQycuG/iwdvE22611SqY5yUiR0rxIrGTbg68CL3xrf1tcxL+9+oo1tZvGI8V3wOcOV15ExnBwwV+4gaMRC6Y2D56PIlsju8cqjHZfk+XfwZDA7bDJ0chS8vj+Df9ofG8p/saXj5mTO3yv/M28bYzW/iVzYUBHLDlJSKnGk846daS4D9ZeR/p9Hlkc30AjlVjb8UeQpbgI0l0+e9hoP+eFE8RUEQdbD3Y/EGyypFSkiO2XiZR3YosmnvzqzW6Ufva4Ht4tp5h/+mzMLLZcmisJ6iKsoWjR+KeLJk9hBS6khfJMWQyY8aeQNcUggEzj2fPy+GdkDh6ust1RV/vA2Nv++Y75PxG5nor2l6531qXeJ4WFwI+DLuBv/a8D+kdluqAdLqvmPbEJQcDhTpEtB5pqZz/fwdfHGY5yj2R89vgy4EqSs1SWGmpatIr7TWv4EtuhbCZZO1Q45aAAxom3HrAT518B6EDSVd5DLxU6ix29DBAQ8V0UEgPlSsBxZcASBKdahzB4Dz4mkPAsOaBL6Dcniaxgm9ty3jjCl3GWwCcgBZ1RRIB/yx6j971PGjs45mmD3mAWj4kcXaKT1nC8CtyEz5r9yF5k0zKiIK/EP8KevZ1UXSF6FgX0n/imtcBaC749ay0rV5xmzw6eVAUMBEERHixIdd26qqF3RZUZR6qGs+Hdb8/YSuu1CXo2T7oOsv15iGZqv6IyNDXbqq2wee9IwKYCPCMhkURXQ8Z5Na2jD34fTEKSocMmmDgJgb7Z0VFmOiWV8awlfrE9JtHndFK4K/mR7K1LH4u3+ybL2IHH/nYWPrVYU1kmyPNwtKn0HVWOxSW3bsJbvPugW8HhmRf6umYWvnV8+Z7Kuvykkhkrx2NyHi6Db6Dd5sJPpDASOSDanHP79v1m68qvyISvm6rtNdN9Hou64la+e02+Nacryhz6D1yEz2H7Ys8J3+wmck/Ty8ileY/p9vCSORtNxfWHvbdZudeYJir/SQUn/eLGDdrsrnyhKseOV/28LnR2+mz8td5bG5+WbGNtWqs2lfZEKe4fGoCipJEJl0ejGXZIEgPg7e7RN/Rcder1ZUH3zqZ83cmHE+qHPj1dDWwF8BnFi/+MYFM5mJdjWe2nzx+vf59voyWbfDL3nI7jGysu/FivA5fNa0iGJgVbRflb74M+GyIkcsVet2Ozjj6j8+ZtrPqtFGLDUhkv+Qp9ebbKdH/VxTX/tDBOa8XLWBRdW1jFJkdFspDyGXd330QXwKqUpjxHzo4L1sr/Afwo5SOsSPYtgAAAABJRU5ErkJggg=="

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

module.exports = "data:image/png;base64,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"

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
/* harmony import */ var _components_ButtonComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ButtonComp */ "./src/components/ButtonComp.js");
/* harmony import */ var _components_CurrentState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CurrentState */ "./src/components/CurrentState.js");
/* harmony import */ var _components_SelectCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SelectCard */ "./src/components/SelectCard.js");
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
  }, __jsx(_components_CurrentState__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }, __jsx(_components_SelectCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, __jsx(_components_SelectCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, __jsx(_components_SelectCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, __jsx(_components_SelectCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, __jsx(_components_ButtonComp__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbkNvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3VycmVudFN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlbGVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW1nL2JhY2tlci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW1nL2RheS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW1nL2Z1bmRpbmdfaW1nMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW1nL2Z1bmRpbmdfaW1nMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW1nL2Z1bmRpbmdfaW1nMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW1nL2Z1bmRpbmdfaW1nNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW1nL2pveV9waW5rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbWcvam95X3doaXRlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbWcva2luZF9waW5rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbWcva2luZF93aGl0ZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW1nL3Jld29yZF90aXRsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW1nL3NlbGVjdF9iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW1nL3NlbGVjdF9ncmFwaC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW1nL3NlbGVjdF9ncmFwaF9idWJibGUucG5nIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2ltZy9zdGF0dXMucG5nIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2ltZy90aGFua3NfcGluay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW1nL3RoYW5rc193aGl0ZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW1nL3VuX3BpbmsucG5nIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2ltZy91bl93aGl0ZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInZhbHVlIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiZGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQ29tbW9uQnV0dG9uIiwidGl0bGUiLCJCdXR0b25TdHlsZSIsInN0eWxlZCIsImJ1dHRvbiIsIkN1cnJlbnRTdGF0ZSIsInN1YlRpdGxlSW1nMSIsInN1YlRpdGxlSW1nMiIsInN1YlRpdGxlSW1nMyIsIkxpc3RTdHlsZSIsImxpIiwiTGlzdEJvcmRlclN0eWxlIiwiU2VsZWN0Q2FyZCIsImNoZWNrIiwic2V0Q2hlY2siLCJ1c2VTdGF0ZSIsImhhbmRsZUNsaWNrIiwibG9nIiwiaWQiLCJqb3lXaGl0ZSIsImpveVBpbmsiLCJmdW5kaW5nSW1nMSIsImtpbmRXaGl0ZSIsImtpbmRQaW5rIiwiZnVuZGluZ0ltZzIiLCJ0aGFua3NXaGl0ZSIsInRoYW5rc1BpbmsiLCJmdW5kaW5nSW1nMyIsInVuV2hpdGUiLCJ1blBpbmsiLCJmdW5kaW5nSW1nNCIsIlNlbGVjdEJveCIsImRpdiIsImNzcyIsIlNlbGVjdEJveF9MZWZ0IiwiU2VsZWN0Qm94X1JpZ2h0XzEiLCJTZWxlY3RCb3hfUmlnaHRfMiIsIlNlbGVjdEJveF9SaWdodF8zIiwiU2VsZWN0Qm94X1JpZ2h0XzQiLCJTZWxlY3RUZXh0IiwiU2VsZWN0UGFnZSIsInJld29yZFRpdGxlIiwic2VsZWN0R3JhcGhUaXRsZSIsImdyYXBoQnViYmxlIiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsIkJhY2tncm91bmRXcmFwcGVyIiwiYmFja2dyb3VuZEltZyIsIlRvcFdyYXBwZXIiLCJUb3BMZWZ0V3JhcHBlciIsIlRvcFJpZ2h0V3JhcHBlciIsIk1haW5UZXh0U3R5bGUiLCJNaWRkbGVXcmFwcGVyIiwiTWlkZGxlTGVmdFdyYXBwZXIiLCJTZWxlY3RDYXJkV3JhcHBlciIsIk1pZGRlbFJpZ2h0V3JhcHBlciIsIkdyYXBoVGl0bGUiLCJHcmFwaFdyYXBwZXIiLCJHcmFwaENhcmQiLCJHcmFwaEJ1YmJsZVdyYXBwZXIiLCJHcmFwaEJhY2tncm91bmQiLCJHcmFwaEZ1bmN0aW9uIiwiR3JhcGhGdW5jdGlvbkpveSIsIkdyYXBoRnVuY3Rpb25LaW5kIiwiR3JhcGhGdW5jdGlvblRoYW5rcyIsIkdyYXBoRnVuY3Rpb25VbiIsIkdyYXBoU3ViVGl0bGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQywwRUFBbUI7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QURwRSw2TUFGSixDQURKLEVBT0ksTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVBKLENBREosRUFZSSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBWSxNQUFFLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJLE1BQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBWSxNQUFFLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixFQU9JLE1BQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBWSxNQUFFLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FQSixFQVVJLE1BQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBWSxNQUFFLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FWSixDQURKLEVBZUksTUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRUMsaUVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUVDLHdFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSixDQURKLEVBS0ksTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUxKLEVBUUksTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkosQ0FESixFQVdJLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUVBLHdFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSixDQURKLEVBS0ksTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUxKLEVBUUksTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkosQ0FYSixFQXFCSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7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QSxNQUFNMkIsU0FBUyxHQUFHeEQsd0RBQU0sQ0FBQzZCLEdBQVY7QUFBQTtBQUFBO0FBQUEscUNBQWY7QUFLQSxNQUFNNEIsa0JBQWtCLEdBQUd6RCx3REFBTSxDQUFDNkIsR0FBVjtBQUFBO0FBQUE7QUFBQSxxSkFBeEI7QUFnQkEsTUFBTTZCLGVBQWUsR0FBRzFELHdEQUFNLENBQUM2QixHQUFWO0FBQUE7QUFBQTtBQUFBLDZJQUFyQjtBQVVBLE1BQU04QixhQUFhLEdBQUczRCx3REFBTSxDQUFDNkIsR0FBVjtBQUFBO0FBQUE7QUFBQSx1R0FBbkI7QUFTQSxNQUFNK0IsZ0JBQWdCLEdBQUc1RCx3REFBTSxDQUFDMkQsYUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDRDQUF0QjtBQUtBLE1BQU1FLGlCQUFpQixHQUFHN0Qsd0RBQU0sQ0FBQzJELGFBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSw0Q0FBdkI7QUFLQSxNQUFNRyxtQkFBbUIsR0FBRzlELHdEQUFNLENBQUMyRCxhQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsNENBQXpCO0FBS0EsTUFBTUksZUFBZSxHQUFHL0Qsd0RBQU0sQ0FBQzJELGFBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSw0Q0FBckI7QUFLQSxNQUFNSyxhQUFhLEdBQUdoRSx3REFBTSxDQUFDNkIsR0FBVjtBQUFBO0FBQUE7QUFBQSx1REFBbkI7QUFNZVEseUVBQWYsRTs7Ozs7Ozs7Ozs7QUNoT0Esa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvc2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvc2VsZWN0LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0LCB7Zm9yd2FyZFJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IENvbW1vbkJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnV0dG9uU3R5bGU+XHJcbiAgICAgICAgICAgIHtwcm9wcy50aXRsZX1cclxuICAgICAgICA8L0J1dHRvblN0eWxlPlxyXG4gICAgKVxyXG59O1xyXG5cclxuY29uc3QgQnV0dG9uU3R5bGUgPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgd2lkdGggOiAyMDBweDtcclxuICAgIGhlaWdodCA6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2ZmNjQ2NDtcclxuICAgIGJvcmRlciA6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzIDogNTBweDtcclxuICAgIG1hcmdpbiA6IDAgYXV0byAwO1xyXG4gICAgZGlzcGxheSA6IGJsb2NrO1xyXG4gICAgY29sb3IgOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZSA6IDI0cHg7XHJcbiAgICBvdXRsaW5lIDogMDtcclxuICAgIGJveC1zaGFkb3cgOiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBib3JkZXIgOiAwO1xyXG4gICAgICAgIG91dGxpbmUgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI0ZGOTA4QTtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbW9uQnV0dG9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgc3ViVGl0bGVJbWcxIGZyb20gJy4uL2RhdGEvaW1nL2JhY2tlci5wbmcnO1xyXG5pbXBvcnQgc3ViVGl0bGVJbWcyIGZyb20gJy4uL2RhdGEvaW1nL2RheS5wbmcnO1xyXG5pbXBvcnQgc3ViVGl0bGVJbWczIGZyb20gJy4uL2RhdGEvaW1nL3N0YXR1cy5wbmcnO1xyXG5cclxuLy8gKiDsmKTrpbjsqr0g7JyE7Kq9IO2bhOybkOyekCwg64Ko7J2AIOq4sOqwhCwg7KCE7LK0IO2OgOuUqSDtmITtmalcclxuY29uc3QgQ3VycmVudFN0YXRlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxMaXN0Qm9yZGVyU3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8cD42MDwvcD5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjxpbWcgc3JjPXtzdWJUaXRsZUltZzF9IGFsdD17c3ViVGl0bGVJbWcxfS8+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L0xpc3RCb3JkZXJTdHlsZT5cclxuICAgICAgICAgICAgPExpc3RCb3JkZXJTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxwPjMwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PGltZyBzcmM9e3N1YlRpdGxlSW1nMn0gYWx0PXtzdWJUaXRsZUltZzJ9Lz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvTGlzdEJvcmRlclN0eWxlPlxyXG4gICAgICAgICAgICA8TGlzdFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPHA+NjUlPC9wPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PGltZyBzcmM9e3N1YlRpdGxlSW1nM30gYWx0PXtzdWJUaXRsZUltZzN9Lz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvTGlzdFN0eWxlPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBMaXN0U3R5bGUgPSBzdHlsZWQubGlgXHJcbiAgICBmbG9hdCA6IGxlZnQ7XHJcbiAgICB3aWR0aCA6IDE2MHB4O1xyXG4gICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuICAgIGhlaWdodCA6IDEwMHB4O1xyXG5cclxuICAgICYgPiBwIHtcclxuICAgICAgICBmb250LXNpemUgOiA0NXB4O1xyXG4gICAgICAgIG1hcmdpbiA6IDEwcHggMCAwIDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQgOiA0NXB4O1xyXG4gICAgICAgIGNvbG9yIDogI2ZmNjQ2NDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcCA6IDlweDtcclxuICAgICAgICBkaXNwbGF5IDogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBMaXN0Qm9yZGVyU3R5bGUgPSBzdHlsZWQoTGlzdFN0eWxlKWBcclxuICAgIGJvcmRlciA6IDA7XHJcbiAgICBib3JkZXItcmlnaHQgOiAxcHggc29saWQgI2ZmNjQ2NDtcclxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRTdGF0ZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgam95UGluayBmcm9tICcuLi9kYXRhL2ltZy9qb3lfcGluay5wbmcnO1xyXG5pbXBvcnQgam95V2hpdGUgZnJvbSAnLi4vZGF0YS9pbWcvam95X3doaXRlLnBuZyc7XHJcbmltcG9ydCBmdW5kaW5nSW1nMSBmcm9tICcuLi9kYXRhL2ltZy9mdW5kaW5nX2ltZzEucG5nJztcclxuaW1wb3J0IGtpbmRQaW5rIGZyb20gJy4uL2RhdGEvaW1nL2tpbmRfcGluay5wbmcnO1xyXG5pbXBvcnQga2luZFdoaXRlIGZyb20gJy4uL2RhdGEvaW1nL2tpbmRfd2hpdGUucG5nJztcclxuaW1wb3J0IGZ1bmRpbmdJbWcyIGZyb20gJy4uL2RhdGEvaW1nL2Z1bmRpbmdfaW1nMi5wbmcnO1xyXG5pbXBvcnQgdGhhbmtzUGluayBmcm9tICcuLi9kYXRhL2ltZy90aGFua3NfcGluay5wbmcnO1xyXG5pbXBvcnQgdGhhbmtzV2hpdGUgZnJvbSAnLi4vZGF0YS9pbWcvdGhhbmtzX3doaXRlLnBuZyc7XHJcbmltcG9ydCBmdW5kaW5nSW1nMyBmcm9tICcuLi9kYXRhL2ltZy9mdW5kaW5nX2ltZzMucG5nJztcclxuaW1wb3J0IHVuUGluayBmcm9tICcuLi9kYXRhL2ltZy91bl9waW5rLnBuZyc7XHJcbmltcG9ydCB1bldoaXRlIGZyb20gJy4uL2RhdGEvaW1nL3VuX3doaXRlLnBuZyc7XHJcbmltcG9ydCBmdW5kaW5nSW1nNCBmcm9tICcuLi9kYXRhL2ltZy9mdW5kaW5nX2ltZzQucG5nJztcclxuXHJcbmNvbnN0IFNlbGVjdENhcmQgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbY2hlY2ssIHNldENoZWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hlY2soIWNoZWNrKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGVjaywgcHJvcHMuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9wcy5pZCA9PT0gXCJqb3lcIil7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNlbGVjdEJveCBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2hlY2s9e2NoZWNrfT5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hlY2sgPyBqb3lXaGl0ZSA6IGpveVBpbmt9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0VGV4dCBjaGVjaz17Y2hlY2t9PuuLueyLoOydtCAn6riw7IGoJ+ydhCDripDqvIjri6TrqbQg6riw7IGcIOqwkOygleydhCDtjoDrlKkg7ZW07KO87IS47JqUPC9TZWxlY3RUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfUmlnaHRfMT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnVuZGluZ0ltZzF9Lz5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X1JpZ2h0XzE+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0Qm94PlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSBpZiAocHJvcHMuaWQgPT09IFwia2luZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNlbGVjdEJveCBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2hlY2s9e2NoZWNrfT5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hlY2sgPyBraW5kV2hpdGUgOiBraW5kUGlua30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RUZXh0IGNoZWNrPXtjaGVja30+64u57Iug7J20IOKAmOuLpOygle2VqOKAmeydhCDripDqvIjri6TrqbQg64uk7KCV7ZWcIOqwkOygleydhCDtjoDrlKkg7ZW07KO87IS47JqUPC9TZWxlY3RUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfUmlnaHRfMj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnVuZGluZ0ltZzJ9Lz5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X1JpZ2h0XzI+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0Qm94PlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSBpZiAocHJvcHMuaWQgPT09IFwidGhhbmtzXCIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U2VsZWN0Qm94IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjaGVjaz17Y2hlY2t9PlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdEJveF9MZWZ0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjaGVjayA/IHRoYW5rc1doaXRlIDogdGhhbmtzUGlua30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RUZXh0IGNoZWNrPXtjaGVja30+64u57Iug7J20IOKAmOqwkOyCrO2VqOKAmeydhCDripDqvIjri6TrqbQg6rCQ7IKs7ZWcIOqwkOygleydhCDtjoDrlKkg7ZW07KO87IS47JqUPC9TZWxlY3RUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfUmlnaHRfMz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnVuZGluZ0ltZzN9Lz5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X1JpZ2h0XzM+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0Qm94PlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSBpZiAocHJvcHMuaWQgPT09IFwidW5cIikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTZWxlY3RCb3ggb25DbGljaz17aGFuZGxlQ2xpY2t9IGNoZWNrPXtjaGVja30+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Qm94X0xlZnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoZWNrID8gdW5XaGl0ZSA6IHVuUGlua30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RUZXh0IGNoZWNrPXtjaGVja30+64u57Iug7J20IOKAmOu2iO2OuO2VqOKAmeydhCDripDqvIjri6TrqbQg67aI7Y647ZWcIOqwkOygleydhCDtjoDrlKkg7ZW07KO87IS47JqUPC9TZWxlY3RUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfUmlnaHRfND5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnVuZGluZ0ltZzR9Lz5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X1JpZ2h0XzQ+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0Qm94PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgU2VsZWN0Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoIDogNzUwcHg7XHJcbiAgICBoZWlnaHQgOiAxMzBweDtcclxuICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogd2hpdGU7XHJcbiAgICBib3JkZXIgOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzIDogMTZweDtcclxuICAgIGJveC1zaGFkb3cgOiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICB0cmFuc2l0aW9uIDogYm9yZGVyIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXIgOiAzcHggc29saWQgI2ZmNjQ2NDtcclxuICAgIH1cclxuXHJcbiAgICAke3Byb3BzID0+XHJcbiAgICBwcm9wcy5jaGVjayAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBiYWNrZ3JvdW5kIDogI2ZmN2I3YjtcclxuICAgICAgYm9yZGVyIDogM3B4IHNvbGlkICNmZjY0NjQ7XHJcbiAgICBgfVxyXG5gXHJcblxyXG5jb25zdCBTZWxlY3RCb3hfTGVmdCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aCA6IDQ2MHB4O1xyXG4gICAgbWFyZ2luIDogMjhweCAwIDAgNDlweDtcclxuICAgIGZvbnQtc2l6ZSA6IDE4cHg7XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdEJveF9SaWdodF8xID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoIDogMjE5cHg7XHJcbiAgICBoZWlnaHQgOiAxODBweDtcclxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XHJcbiAgICBib3R0b20gOiAtM3B4O1xyXG4gICAgcmlnaHQgOiAxOHB4O1xyXG5gXHJcblxyXG5jb25zdCBTZWxlY3RCb3hfUmlnaHRfMiA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aCA6IDIxMHB4O1xyXG4gICAgaGVpZ2h0IDogMTMwcHg7XHJcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xyXG4gICAgdG9wIDogLTI4cHg7XHJcbiAgICByaWdodCA6IDI3cHg7XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdEJveF9SaWdodF8zID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoIDogMjA0cHg7XHJcbiAgICBoZWlnaHQgOiAxMzBweDtcclxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XHJcbiAgICB0b3AgOiAtMjhweDtcclxuICAgIHJpZ2h0IDogMThweDtcclxuYFxyXG5cclxuY29uc3QgU2VsZWN0Qm94X1JpZ2h0XzQgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGggOiAxNzBweDtcclxuICAgIGhlaWdodCA6IDE0MnB4O1xyXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuICAgIHRvcCA6IC0yM3B4O1xyXG4gICAgcmlnaHQgOiA1MnB4O1xyXG5gXHJcblxyXG5cclxuY29uc3QgU2VsZWN0VGV4dCA9IHN0eWxlZC5wYFxyXG4gICAgbWFyZ2luIDogNXB4IDAgMCAwO1xyXG4gICAgY29sb3IgOiAjMzMzO1xyXG5cclxuICAgICR7cHJvcHMgPT5cclxuICAgIHByb3BzLmNoZWNrICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIGNvbG9yIDogd2hpdGU7XHJcbiAgICBgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RDYXJkOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURRQUFBQVJDQVlBQUFDU0dZOXVBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBMFZKUkVGVVNFdTlWMEZTR3pFUTFJd0x3dzN5QXVBRk1TL0FlUUg4SU9ZRk1RZTBld3ZjZHVWRC9BVHpBdnlEd0F0aWZtRC93TG5aVUdoU3ZhVnh5ZXYxcnFHUzZFSjVOWkttcDN0YWdzd09JMGtTUVJnUmZjbXk3TEZwU2IvZlA5cmIyL3RNUkNkRWRPUzlueGhqZmc4R0EveGRqVFJOZTk3N1kyYSt6N0pzMnJSdmFXM1hlMy9PekU5eFRsUU9lbnQ3SzVLUEJ6TXJpSDVJYm0xK01CZzg2WWNrU2NiR21JdXE1RVJrSWlKWENzeGErMGhFNTFvb0xWd2RNQkc1Yzg3ZFdtdHZpZWk3L3RZMWE0QjIyYkRxc0R6UGkzMmlRMlpFTkJhUmVSVGZSZkxHbUdtZTU2Y2gvc09BdEhDMWdFTEZqb3d4bnpVUkVWbFZQOGl1WTR3NURQUFBTTm81MTYxS3NBeGVDN1pjTGo4Tmg4TjVtYUU0UGlyT2srNWZtaStLVVFzb1RrcEU3cDF6dlNwR3JMVjlJdm9CQ1RubnpqVEdXanNpb3E4aUFuYUdyVlpydGxnczV1Z25aa1loaHVpbFBNOVJOREM2eHRBL0FSUVp3R2xkbzFiRjNkemNkRUsvS1lNYjlTQ2lxeXpMUnU4QU5IUE9uWlEzMG1JME1wUWtDWFIvaUFvNzU2N3JHTUtjOW8vR3dlRU9EZzR1dmZkSW9wQWkrc1lZTTJIbWNWeWt2OEdRTVdia3ZSKzl2cjQrUThacnBvQ1RreVNCTEw1RlFOWnNXa1E2c0dMTXg3Sk0wN1N3MFRxSGl1ZWNjM2M3QWxxVGRTVHZRcTc2VzUxeUF4QUNjRCtJU0Q4MmgxS2lNSU14N0RNNm9MRFJYUUdCMlFaQVV5STZEb1c3ZHM2aDBLc1JTVzRHQlNCZlhBZVZnT0tGNkl0V3ExVXdnckh0WWcwTXFjUTB2SWVrZ2xPdU1SM3Vra3BUS05rLzFzK1orYXhLcmx0N1NHL3RYU3NjeHpIelRCdDlTeFdMeTdBc1N5S0NpK0kxc1hxQnBHbDY0cjMvQlZuamUxREtSWVdqMXR1MlV2Z1JRR0FndW9zZ1E0bDdwSHk3bDgrSUFVVVhackVuVEdaL2Z4K21BcU1xQ29QMWpTNFhHTnF3Unl6VzNzQ0dWWUNaZWFvTXFaMmpSeUs1WW42SzZvTVIzUU5PaWo1VlFHQlFSSDZHTTFmWGhyWDJrb2dlOE4xN2Y0WmVhUVJVeDh4N0hxY3hvQ2EyRmZCaXNaaUVsME5oQk9XK3dENFJjNFhyL1hkQTN2dXlRV3pGaHhlRjl4N1h3WU9JekY1ZVhqb0FHQytBOU5ydDlvU0k1c3Zsc3R0dXQ4YzdQWDJxVHYwSVEwM3N4UFBLU0pBOTNvWjRzVzhNU0ZhZGJxZlg5cllrUUMvbW1Mblg5SCtMeHI0SEVET1BxbHl5Ym84QXZsZGUrd2ZvNUw0d3ZoOHBQUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVVBQUFBVENBWUFBQURHV3NEREFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUF3OUpSRUZVV0VmdFdNdVIya0FRN1I2S3o4MWtBSTdBSm9KbE05Z01kaDJCZFVIb1p2WW1EWWZGRVpnTVRBYUdDS3pOQURMQU53VEZ0S3RsRFRVSWZVWjg3S290ejRVQzlmUjB2M245dWdYQy8zV0NBUEl2bnVmMTkvczlqY2ZqUlJsR2JLdVV1aE5Dckh6Zm41cjJqdU8wNi9YNkIwVHM1L2tob3JuTk9XVng2T2Q4WnFQUitNemZwWlRQNXI3QllQQVJBTjdwMzdMTzlUenZTU25WRVVJc2ZOK2ZzMjBNeW5BNEpQNE1naUQrWHJSYzF4MGg0aGNpV2tncEQ4a256bDhRc1YzbWc0aldBUEJKU2psTDI3cXU2eURpUzVFUHBWUnZQQjZIK2tLSjZJZU9uK01nb205Ris4M1lYZGVkSStJZEVUMUxLVWRYQTRWdlJBanhreDN5Z1FBd0UwTEVRWnRMS2NVZzlwTWcxdHZ0OXYxa01tR0FEa3VEWHBRVUl0N3JXMlhtcGtCaEpzZkpaYXd1SW5adUJnb0FMSWxveXJRRGdHNXlPNjlCRURCbEM1ZG1wcGxjMlI1K25yVXZEVXFSSDgyaVc0SVNuOCswQTRBUUViOHpVRkVVOWRLM2J3WnFzc29zZzM4TkNnQk1sVkxUM1c3M2VvbW1yTmlSRUdLKzJXekNack81TkVRdEZpd1dWWjBzaXk4UnRSRlJNOG1LVlNaWWx6SWxTdysxcGhoeDNoK0JVblJibW5JRlF0dmxXa2JFQjFQeDB6NkphSVdJc3lpS1JrV015b3JsbHFCd1hJa2tPREVvakZZWmZSRXhESUxBeVFQRjNNOXRzdFZxbldnTE02b3FFSCtMS1NmZHB3d1E4M25TZXA4MFNKN25NVU1lcS9nd2JiZmI3VmRib0c3TWxPT1d6SW50OS90T3hjUis4YXhncW4vRi9iRjVsUTUwQlZDNHRCMEFtT3VaSkhkT3Naa05NclFoSHQ3TVVsRktjY21VRG0rSnJ6WFBNbFZLeWhhVXBQVXllMW5NR1lUY1ZRcEtJalpIbzN1R054NkFIczFlYjVaUWV0UStoejE1ZTJ4QnNkRTlmWVlOS0VlamUxWnd1bHhTb0J4TmxkY0U0aHloclFJS3owMjFXbzNadmZSOW44ZUtQKzgrVlp5OE5WQ3lMakFOU2lpbDdKWFU0QU5QcjNsTVNkNXZyTWhTcTlYNFRUdStIWnQxUnZtRVJGU29LY2E1Y2VNNFlZcE5ZTm9tRDVTS1BnNXQwR1lmTTVydGhCQlREV2JXdTg4bGplTUFpcDQ5YkFMVE5ucE80ZTljbDRnNHFiTGZTSzVNMkF2ZEppSWYrOUIvWlZ5YVQrbi9KMVVUZlF2MnZ3RVFpa2JZcXA0cFNBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZnVuZGluZ19pbWcxLTgyNzA3NmU5NjM4NWU0MGY0NmRiMDkyNWU1ZDQ1M2Q1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mdW5kaW5nX2ltZzItZmVkYjczNjNkNzBjMGNiZWFmNTU5ZjY4ODhmNzg1ZTAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Z1bmRpbmdfaW1nMy0xOTZlMGVmMTlhZjJjYzEwOWYzMDM4ZWY5NmY5ODc5My5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFLb0FBQUNPQ0FZQUFBQ2hTNU9pQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBSHV4SlJFRlVlRjd0blFsMFUxWCt4Nzh2NlpLdTBKYXRwV0NobEtXVVZTd282b0NvQ0cyS0Rqb3F5dmdmRlpSRlFjZFJ3VjBIVVhGbVVHbkJqUjFGY01FbUJVV1JzclpBZ1M1UTZFcGJ1dTlMMnV4NS8zTlQwalJOMHJUcHk4dml1K2ZNY1E1NTk5N2YvZDVQNy9LN0d3VXVjQW80Z1FLVUU5akltY2dwQUE1VURnS25VSUFEMVNtcXlkakk1ZlBuRDZGNHZCQU5UZnZ3YWJwUjQrN2VpS2FtaG9Ua1pJbVRGcWxic3psUUhiaFduNDJKaWVJQmMwRlJveWdnaEthb1lOQjBDRVZSUTgyWlRkTjBFeWpxQWtYVGFScWFQcWRRcVk1OC9ldXY5UTVjekI2WnhvSGFJNW5ZK2VpRmh4N3lVc2hrYzBEVDl3R0lCVVhkUkhMbVU1VFV5ODJ0dGIvQVF4M2c2VWtOOFBiaUIzcDZDZ0s5QkQ0Q1BoL05jbm1qUkttVU5Tc1VpbEpKbSt4Nmk4UkhvbEIyd0V6VDlCR0twbitRcVZUZk9TdTBIS2pzTU5odExpdUV3c1UwOENnRnpDTWZldkw1MG9qQWZySkpBd1lFUkFZRm9KK25SNit0VkdvMEtHNXF3ZG5LNnN1Wk5UV2VFcVY2RkVtRUJyYlRGUFhCNXNURW5GNG5hc2NJSEtoMkZIOUZUTXdUNFBIZUFCQWU3T05kTkczSW9LQ29BWUYrUTMxOUdMZEtxbFMxSGk0cU9YL2tlbm1FaHFhRGFlQm5tcUxlM0p5WW1NbDRaalpJa0FQVkJxSmFTbkpsVEV5Y2hzZjdoQUxDd3Z6OVNoOGVPeXBrbUo4dnoxSThobjZYLzV4Zm1QSjdVZWxZbXFLRzBNRC92T1h5Tno0K2ZMaVZvZlJ0a2d3SHFrMWtOWjNveXJpNEVKcW1Qd1d3Y0xDWG9QcUpxTEdEaHZ2N3NXaUJZVmJiTDEwNWtWWlZld2ROMDJVMFJTM1pMQklkc3BzeEZqSjJTbEJYMzM5L2YxS3VqUWNPTkRxcXNGM3RXaFlURThPanFHL2MrVHc4UERiQ1kwYndZSUVqMkY0bGFhdiszNFhNSm9sU0dVSFQ5SGNhaGVMNUxZY1BWenVDYloxdGNFcFFWOFRFckNhRmlFOUsydWhvZ3Bxd2gxb2VHL3NPZ05mRCsvbTNMcHNTNWV2bDV1WlFadE0walY4S2l5OGtGWmVHMHhxTkJoVDFyd1NSNkd0SE10SXBRWDF1d1lMck5FQnYrdm5uNFk0a1psZGJsdDU5ZHo5M2dlQTdHcmozdmhIREZiRWpiL0trS01lVnZGa21yL2dvTFQyblVhNllCWnJlTzFBaVdmeDJjckxLRVRSMlhOWE1xTE5NS0x5ZkIveEVmdFlBRDJ3V2lRNDRncEFtdXZvQUhrV2RkdVB6YjFvMk1kSmpURkFBM3hIdE5HR1QrcXZNN0IvVGErb2Vvb0dqS2lEMkM1R296ZDYyT3gyb0srTGlmZzRJQ29vbHdqWFUxWW5qRXhNWGRDZmlzL2ZkRjBhNXU5OUUwZlJrQUdSc081bHEvNjgyMEJSVkJKb3VBdEJJVTFRNitiZk5JdEd4dmxUTXNwZ1lBdWt4Tng0djRwWG9LWUpnRzdpYittSmZUK0wrbEgvdDhPOUYxKzhCUmFYTEZZcTc3YjFRNEZTZ0V1ajQ3dTdYNWozeWlGYnJRM3YzUXExVWp0anl5eThFTkcxWVBuLytaSXJQZjRLbTZWa1VSUkU0RFVMdzhPRXFIMzkvN1NDUjFtalVkWldWZEdOOXZkR2drZUx4c2pScTlkY2FsZXJuenVsYnF1U2xRcUczRzVEQ3A2aHhMMDZiNUI1bXgxbTlKVnN0L2Y3cnRlSUxvc0tTcVRSTjUybFVxbnQ3bzRPbHRIdjd1MU9CdWp3MmRpTkZVYXZlK2ZKTGJUbmZXcklFTkUxL29sR3BOdkxjM0o1d2MzZGZxbGFwUXNodkU2WlBSK2lJRVFqeTgwTVFuNGRRWDI5NHRiVUN6YzJBckEyUXlnQ1p0RjB2Yng5SStYeVV0c2tBSHgvazF0WWhNNzhBWlJXVjJwL2RQRHl1S3VYeUxUMkJkb1ZRK0QxeFA2MllFb1Z4Z1FHOXJRK0grLzU0YWZtVmZUa0Y0MmlnU0s1UTNHeXZsdFZwUUNVdUtaVkdVeHc5ZTdiLzR0WGFTVDkyYmR5SXM4bkpHbHFqMFRyTENaeVRac3pBcFBCd2VKVVdBZGNLZ2ZvNnF5dS9UaXBEWnFzVXFXV1ZLS3V0YllmV3pTMUpyVlIrdkVrc1R1NmE4QXFoOEhrQW44U05Dc085Tncyek9sOUhpM2l5dEx4Z2IwNUJPSURqOFNMUlgreGhuOU9BdWx3by9EOEsyTFpxM1RwRVRKaWcxU292S3d1ZnZQWWFicjd6VHNRdFhvd2cwa0tlU3dYS3JqT3VwUlphaFFwSEM0dFJYMThQSG85M1FpbVgvMTNYSFM1ZnNHQVlwZEVVakF2c1Q2MllNc0d4L0U4TXFMRTdPeWM3dGFJNkVzQ09lSkhvL3hoSXNsZEpPQTJvSytQaU1rT0dENDlhODlsbkJqYXZmLzU1UUtYQ21qdG1BTlZWdlNxOHRSOG5OVFRqait3Y1dpNlRVUlNQdDlPTm9sWXBWS3B0QWpjMzRYc3pvL25lN2k3SEtSbGk0ZjNVQzlrVmJXMlJHdUQ1elNMUlo5YnFaMDA4cHdCMXhmejVzZUR6UlkrdldvVVpjK1lZbERQMXlCSHMvdVFUckpvNkFSRUJIWk41YTdUb1ZSeXBSb09rcGxZa1gwZ0huODh2VXF2VllRK1BDY2Nkb2RvaHNrc0doVnFOTlNkU1MyUnFUVENsVmtmRkh6eVl5MVpCSFI3VUc3UDRVNTVlWHQ3LzNyb1ZYajZHTzR1a3JhMTQ0OGtuTWFtL0h4WkhqbUZMdDQ1OFN1VUsvUGZNQmFoVktqdzZMZ0l6Z2dlemJnT2JHVmEwdGpXdVN6M2ZuNmJwMHdsaThVeTI4blpvVUhYalVpTEdMS0VRRHk1WllsS1g3Ny84RXNraUVUYjg1VmJZWTNsU3FsTGg4NHhzNURjMllYcndZQ3lPSE0xVy9ka2xuOTNaT1pkU0s2cWphSnBlbWlBV3Q3dGdiQndjRmxRZHBQNzkrOVBOalkwVWNVa0ZEVGJkV3RWVlZXbGRWUXNqUm1EMjhGQWJTMlkrK1YyWGMzQ21zaG9MSTBaaTluQ3pwMFhzWmg5VEdaTk4yYThjUzZtVXE5VnUzZ3BGR0J0YkJCMFNWTzJtRXg3dmY5UHZ1Z3QxMWRXUVNpUlk4eW5aSFdjK2FDZFZkVFZZRXoyVnFmcXdLaDBkckk5SGpuYnBZY0Q1cXVyNmJaZHlBalUwdlhheldMemVLckY2RWNuaFFOVzFwQVJTNGk5ZEdSY0hzaElWczJoUnQ4VksrdVliN1VyVnBqbDM5S0w0dHZsVUIrdVNpWkdZTkRESU5wazRRS3ByanFlV3RpaVZ2bDV5ZWFpdFcxV0hBblZsYk93c21xS09qaG8vbmw2OWZyM1dObWNFbGRpOVB2VThwR1NXUEgycVhjYk5iSENjWGwxVC8xWFcxVUNhcHQ5T0VJdkpWa2FiQlljQmxhemp1M2w0WkFRUEcrYnp3b2NmOHJXeis1WVdyRi8yTEFMSFJlS1oxMTdyVm9UUDE2MURmZlpsckltZVlqT3hlcE53YVlzRUg1eTlpRm1oSVhod0RGblVjYzN3eXZIVTRsYWxzdC9BbHBhQnR0d1M2RENncm95TE8rYnU2VGx6M2JadDdaQ1M4TTBPSkowNWgwUFhTdENUeWRTOEVjTVJNMUo3d3RnaFFsSkJFUTRWWGNlcXFSTVJFZERQSVd4aTJvaVVzc3J5UFZmelFtaU5abUZDVXRLUFRLZXZTODhoUU5WTm5wYXNYYXRkcTllR2xKUEEyUlFRMTg4YnA5TVFGQnFLMWUrL2I5S1B1bkhOR3RTVmxlSzkyMjV4dUc2V3VLMW1oQXgyMmJHcVdxUEJDMGRQdFdxQW8vRWlrZEJsUVNWZHZvZEFjQ2x5MmpTZmp1NjlxaExZdTZ1anpCazF0Zmd5OHdvQ0J3MUV6S09MTUNvcVN2dGIvcVZMSUpPbytwb2FMSms0RHBNR0RqRFFxVTRxUlpDWGw2MjA2M202TkEwNDhNNytuaGZFOUpmYnNxN21uYSt1Q1ZjQ2c3OFFpZHAzN3pBYzdONmlraTdmUXlDNDQ5OWJ0MUxhTGwrajBYYjVxRE1zTHhuejdicVNoN0lXdzZ1VnlCbDQ0bUFQOWZNMWt1Yk5VMmZ4N3N4b2hpWGprdXVxUUhXYlZQbHVTcG83YVBybGVMRjRneTBVc2l1b3VpN2ZZQTAvL1FKdzdJalpzaEpnU3lYdFI5QkRmWDFNQWtwK1M2Mm93dTdzWExpNlA5TVdVRmlUNW1zbno1UTJ5aFdsQ1NMUnJkYkV0eFRIYnFEcTlwZUdqeC92VDhhZTJrQzI2VzM3QWxBb0xObHQ4ZmVORnpLUjM5Q0VpUDc5c09ybWlSYS90L2tIUkduYTVybllMWU85Vi9MS1RwWlZET2FwMWI2ZkhUb2taOW9RdTRHNlBEYjJiWXFpM2pLWXpaOCswYjZmdEkrQmpFM2ZPcDJHd0lFRHRlUFhkMjZiWnYreHFvdVBVeS9YMW1zMloxem1VY0NjVFNMUkgzMnNRcVBvZGdQMStRY2VLQjB4Wmt5SXpyRVBsUkw0SWg1UUt2dGN4dTl6QzVCOHZWenIwaUo3QUdZTkM4R0RvKzNzeTNSeFVHVXFGVjQ2bHFLaGFmcTlCTEg0N1Q1WFlwY0U3QUtxcWQzNnVKZ0dIRC9hNS9JUmQ5YWJwOU13OFk0N3RFdXc1TGhLNW9rVGVQZTJhUTdudXVwellSMHNnVGRPcGxiVnk1WFpDU0xSWFV5YlpoZFFuMXV3NEhpL3dNRGIzOXU2VlovL3pxK0JocjdmTjZ1YlJPbU9yT2lPcTloOVVrWEdwM1pSbTJsa3pLZTMrM0pPZVVwRlZXQ05sNWZ2L3YzNzFVem16THAwdXZWOGc1bCtGNzlwWHdxNC91eEZTQVZlZVBkci9ZMDBiejcxRkx4a1VvZFpYdTFMK1J3NWJucFZqZUtyUzFjOWFJMG1NaUVwNlFxVHRySU82Z3FoY0x1SHArZGo2N1p2ZCt0WUtrMCtBbVJjNkhPNWRPdnJYWStzNkk2cnZCbzl4YXc3cTgrWmN3bWdwazJLZDFMU1FLdlY4eElPSHZ5RlNVbnNBV3JEOUx2dTZyZDQ5V3A5M2p1K0Fob2IrbHl1WGRrNXlHaHN3WHRkanF6WSs3aUt2bUN1M2YrVDVkUlZSMDhSTDl5ekNTTFI1MzJ1MEU0SnNBcXFydHMzV05OdmJRVytTbUNrVEM4ZFM4R2tPKy9VVHFLNkJqS3B5a3ROd2J1M1RtTWtMK3NTY1cxUWlTWXZIRDNacWxSclBvMFhpOWRhcDVIcFdLeUNxdk9kYnZqMlcvM21rcHdyd0M5aVJzcTA4c2dKczV1c0hXSmp0ZXR6aXRkUG5xbHBsTWwvaXhlTEgyT2tVbThrd2phb0Y4UEdqSW40MThjZjY0K1NIdmtWdU1UTU5mSnZuanFIb1pNbW1keTdTdmFybG1WazROMlp0ekNwWCsvUytoT0F1dUhzeGZMaUZzbTFlSkhvOXQ2SjAvM1hySUs2UWlpa2pZNlZmTHVUc1lzanlCajFURVcxMGQ1VjNlRy82Y0dEN0hLa21za0tjL1MwdnJwMHBTeTlzb2FPRjRzWnZkT0lOVkJ2bk0rL2FEQStKYXB2K1JTUU03TTBUSlpPMTU5TkIrWHBxUjJuRGcwTFExbFJrZGJwVDh2bFdCTTkyUUdXVWwzYm4vcDlYa0ZWY2tuNTRIaVJpRkcyR0Uyc3U3OTIzUVc4cjI3Y2lOQ1JJOXMvSllBU1VCa014RVgxUmVZVjFNdGtIYWtHQ2dSWU9uR2NZN2ltWEx6N1AxeDB2VG14b01oZlNsSCtXeE1UVzVpcVd0WkExVTJrTmlVbTZtMG5kMFdScnQ4R0lhK2hFYmtOVFJnZDBJL1ZxMzRzRnNYRlFVMHBxMmpkY3pYZlIwblROMzBoRnBkWTFLT0hIN0FIcWxCNHdMOWZ2M3ZYNzlxbDMzSmZXQUNJYkhiTXBvY1NjSjh4cVVCS1dXWHJucXQ1UGxDcncrSVBIaXhtS20wMlFVMitLU0ppNnN2LytZLytZYVc4SE9CZ3B4YVdxVkk1ZERxdTNhVCtYblM5K1VCQmtiOUdvd25jbkpUVTkxVWN0dDFUeTRYQzVMQXhZMjc1MTRZTjNoMGNYYzBHZmsxeWFLeVlOODYxUWYwK3A2QXV1YlE4S0Y0a0lwY3JNN1pWbk5VV2RjVFlzZE5mK3Vnai9VTmdsN09BM3hsZEVtYWVLeTdGWGltUWNQRlNkWFo5QXgwdkVnM3BWVVFMSDdNS2F2aTRjYmU5K09HSDdoMDJaV1VBZnh4bXNqeGNXblpXNE4yVXROcnFObWsyMDFlb3N3cnFxTWpJMjEvNDRBUDllMHNNTHAvYXVYNjQ3RzhvOEdMeUtZbGNwZjQyUVN4ZXlxUW9ySUk2Y3V6WUdmLzg2Q1BQamdKY0x3RisvSTdKOG5CcDJWR0JWcVVTcnh4UEJXaDZaYnhZSE0ra0theUNHalo2OURTRGRYNXlkbi8zTmliTHc2VmxSd1d5YXVyd2VXWTJOQnJOdE0xSlNlZVpOSVZOVUE4TUNnbVo4OWFXTGZxYklxUnQ3UWY2dUdCUmdjcVdGdnlVbFExZkR3ODhNQ0VTdnA3NmpzbGlaSlkrT0pCWHFQcXRwSXdlMU5MaXpmU0ZhZXlCZXVONHRNSEtGQkV3ZmlPMEoxQzUwSzBDejN4L0FJVjE3VzdKU2NGRDhISGNQSWRUYkYxcVdsTkZxL1I4dkVoaytDSUlBNWF5QnFydVZoU0R2YWlrQVB2MkFCWGxEQlRGeVpLNGNYeTZvTFlPNFFNc1gvWjd6K2VHUTZSZGl4N0VFRC85Mm9tOVM5OHNWMkR0eVRQRWpGWHhJaEd6R3pqWTNNZWoyOTNmK1VFenJiaEhEZ09YTXV5dE0rdjVTMlF5dkgzNEtESXFLakhZMTBmYlFuWUhYbGRRbDkwV2piOU9HRy9hYnFXOC9RNHZFbmg4d04zRDV1VTdkcjBNKzNNTDRVWlJRejVKVEdUOHdTL1dXbFJ5aFk5U3JXNHcyby82Si9XbG5pb3N3dHUvNmU4eHVHZDBPRjZlZmFkWm9ENDZlaHkvNVJaMC9MNzQ1c240KzdRdWx4YXJWWUMwRmRCME9hbE1ZUFh5QWZpMmU2aHQ0L2tNZFY1RFUzcUNXR3lUc3o2c2dVb1VYaGtYVnhJOWUvWXdnek5OdGRYQW5oMDIvNHQzdEF5Nmd1cmo0WUVEL3pCL2VpT2p2QUl2aWZTcmVFWmRQNjBCSk0za3lXelRSYVY0Z0s4L1FQN0xjQ0J1cVZkUG5ORm9hUHJOQkpGb0hjUEphNU5qRlZTeTNoODhiTmlNMStQajlWTldNbFlqRXlyU0d2eUpRa0ZOSFo3OTBYQkRUbWY0SkhJNXFsb2tCdU5YTXZNL25KT1BtV0hEamNlMUNxbit0V3h6T2dxOEFBL203NHZWWGZxaFVxbkdmMzdvVUxZdHFwRmRVTTNOL0gvYUI1UXd0aVBNRmpyWklFMGEvMHc4aE13Sy9YRHV0MmYrMFpHUGJwYi85cjJ6TVhORW1PWDgyNXExYjhKMkc5emNBVy9tSjJEeEY3TmtWK29hcXVQRllwdmRTODhxcUxwZC9rYkhVUmk2ZDhweWJUcldGMlRHbjNENkRBcnE2ckhzdHVtWU95YWl3MERkbUhUTHdyZ2VlUVhRSTFEZEFHOS9Sa1Zva2l2SXlWTU5EV3lJRjRsZVpUVHhUb214Q2lySmQ0VlEyRFJMS1BRM2VDNnlxUkhZenNwTGhiYlMwWHk2WkdKRHFwRW9iY1BKREdTdGdNTEMyVE1QVDBCZytKWnNYd1g1SWJjQVI2K1hhMmlLR3BPUW1KamYxL1RNeFdjZDFPVkM0WUgrZ1lIejFtM2ZidWd6MmJVVnFLK3pWVG5aVDlmVURKeE1aTHpKN0Z1L2djd2F3MHo2WGtsK3JjM2RKK2ZqeitnZlM1dFNoVFVuVTlVcURiMHZRU1RxL3NVNmF3cHF6eFpWZCtXa3dTRS9ZbERxS2VETTZUNFd4MEdpVzRMR3grOEdyTjF2b2laQW5pNHFRV1dMUkR1eHlxK3JSNnRDZ1pGQkFYaDUxaDI5bTFEWllDSjFzTEFZU1lYRnRGcXRqckxWSkVwWG82eTNxRHAvcXRGcjBhNjBRYVcxRVZDYmNSTVI1VW5MNnRmL3hnWjRDbVNHVDl4UHVrblRyemw1K0Mwbkh4VVNDZWFPSG9YQmZyNFk0dWVMOEtCQXkydjhhaVVnbCtxOUtHUzQ0ZW5WNTFhOGF4T2dVS3V4OXNRWnRWU2xFaVdJeFEvWXVvbGdIVlJTSUczM0h4UTBmOTIyYllaOTRNNnZnQWJHanRuWVdqdlQ2Wk14cWFUSmN0N2FicGhzelcwSDlmRTkrM0hMc0tFNFYxcU9TU0ZEY08vbzhKN045aTNuWkpNdmpwYVU0WWU4UXFncGF1cVd4TVNMTnNuRW5sMi9ka0oxNC9Wb285ZjQwczRBcDQ3YnVzeTJUWiswYUswOU9NN2UwZjIzbTdNdlBRdEg4Z3J3em4xekhHb04zNVJZYWcyTjEwNmVVVWtVaWlQeFl2Rjl0aFcwUFhXYnQ2Z3JZbU0zZFM1SXZGaTgwbXozMzlZS2ZNbk16WDVzaUdjeWoxNjFxUG9sVGRLcWJrZytpWGZtTXI3eGlIRXBmaTh1eFlIOGEyU0Q5RzN4WW5HS3VReTYxajM1anRTL05RYlpIbFNoME9Ba291NnFGOUw5OXdzSW1QditqaDM2dzM2a0JMOGRBckl2V1ZNV3g0bGphWXpLSTh1WlpJenFmS0ZSSnNmYktXa2FsVWJ6VTd4STlHQjNKU0IzalhYOTNkcXJmbGdIRlRTZGZNUDQvcUNveVYxdmgwWnpNN0Q5Qy9MWDZueTFxTE80eDdOKzV5dmlaeGV6a0Z2ZnFLWTFtbFJRVlBjYmlTbHFsdk9DMnNseWdtSy9nQUM4djZQTHBwVGszNEVNbTQvUGJVc0pnVlVtTVp6OWs1WlV1NHVwOHh6U2VjNzVwMVhXWVB2bHErMk5pSlZ2dXpwUGkyb0NqNFZQUFlYWkN4Ym9mNUhMMmwvd1kraVdQOXNTYVNGMU1tWWxPNXFJUzRwc3Qrc2FuSVJUOGl6U1c2Zk9RYVpXUTlPSDNzNXBRU1gxSkJBSXNQYXp6eEEwZUxDK0dzbG1hcktwbWdzT29jQ2U3Rnp0KzdJOUdaRFJOQTNLVEl2ck5LQ3VXcHhqSUh5enhBMTdra1ppek9UcGVPYjExdzByWmY4M1FIbVpRMVRVbjlrSThxWXNlVnQyNXBRYVRJc3kveGFZV2cySWtrTlJYRzUrUDRIVGdMcnA5VFNqT2hmOU1SUy9uZzZHMFJCQTBnTHMybVo1czhXZm1TSWJsNTFzaWw2WGVoN2VmaEtzZlNZTFpKaHRLcENGdUMxN0kzQ2xzRiszRmprdHFGVjFBbXpjT1FZdGJSN3dGQWp3d3ZyMStvdCtTWkdMaTRBRCsyMWNIWFpPdmcrVEUxdGFUc2FpRzg5bm9yU3RFYTg4ZlJtRGcwenZ6aUtRZnJWL0ZMTHlMTHZjbkJMVURraGJiOHlDS1FwRGhnM0RQei84VVA5cUNxbUpVOGVBdExPMnJCTXViUk1LN012SngvSFNDaXg3SkJmalI1bmVtZFViU0VrV1RnZXFFYVNkaEpvUUhXMDRYaVVuS3ZkOUExUlZjRUN4cE1DWmlpcnN5czdGZmJlWEkzYVc2ZVBzdllYVTZVQTFDMm1uTG5ENm5EbFl2R3FWdmxwYW1vRzl1d0d5ek1vRm15cHd2VVdDRGVmU01UWk1nbVdMcnBoMG1Wb0RxVk9CK3NheVMrMWpVbDEzcjVOYzU1dWpLT2pjRzBaSHE4bnIwL3UvQmNoVlFLNFdIR1NjMnFKUVlQMlpDM0FYU0xIMjJVeDRlaGh2VjdRV1VxY0MxYzlIYVFTcEZreFNpazYrTitLSEkvOXV0TVJhV3dOOC82MXJMQVk0MkI4YmVjdjB2K2N6VUNGdHdTdFBYekk1ZWVvTHBFNEZhdGU2TVFWcFJ5TjdZM3VYMFdGQUxheDdBYktDNVNyQnppMHFnWlRjeEpkZDEyQjI4a1NtQ2wvMmNIWnZybHFjWmpMVnVRRGRRZHI1T3crQkFFKzgrQ0ltelppaC8yY0NLMWtRVUNoY0ExVTdna3AyNjIvSnVLeDk3dWl4Mkd1NGRiTHgyVFVDNmRZZlJ5TDlhbUNmOUhZNlVIc0thV2RWaklZQjVQZ0s4YkZLSkgwU3p5RWkyMm5OWDY1VzQ3TUxXU2h1YnNZLy9scUlxWkhHSnl5WWd0VHB1bjVySU5YQlpPUU5JTStvazF1clhla0VLMHQvT2VRVUtkbTJWOWJhZ3FjWEZtRGltRWFqbkptRTFLbEFKWkMyejV0NnZ4Vlc1dzJZR0IyTnhTKzhvRjhVSU4zL3daL2JWN0c0MENNRktsdmJzRG45RXBvVU1peDdOQmRqUmhnZm4yRWFVcWNEMVJwSVNTRm5US3JGcU9FUzdCYUZZV2pZY0t4ZTMyVUZpeHkzSnNldXVkQ3RBaGVyYTdEemNnNTh2SlZZK25BdWhnY2J1L3RzQWFsVGdXb3RROU9pNnZERWdtdGFEMVplc1I4KzN4Y0JpdStOcGErOWdZZ0pFL1RKbGhRQkIwV3U1Ukd3VnJRdThjamEvZjdjQXB3b3JVQjRhQ3VXL2kwWFB0NWRycWhFKzlXcVRFeWNUSm50ZEpPcDNtaFBJUDM3Z212Z2RSb3RsRlo2WVZmaUNKUlZlMk4ybkJEekgxMmtId3FRY2V1dllvQzh1dUpVd1hZenFrYTVYUHZxZGtsekMyWkhWMkhodmRkTktrTnVIOXI2UTk5bjkrWmtkMWxRVFVIYVdZU2tZOEU0ZEdJb3ZIeTg4ZmlxMVlZdXJLeDA0SGl5RTcwUllCdFF6MVpXWTM5T0FWUzBFby9IRmVMbThhYnZUaUNRN3Z4NUJOSXVXYjZxM2VMZnZ4bDNtMHVDYWdsU25WanRyV3M0eXFvRm1EZzlHb3RYZDVwb2tRdll5T3VBVG5HdEpiT2drcjJrdTdOemtWVmJqNkVERkhqeW9SeXpXL1dZaGxSYkVoTVRacGNEZGZMWWVqeTVzTkNndTdmMFY2eHJYUVhlWGxwWURSWUlpcThCSjVJQjRudDE2TUFNckpkcjY3VzduOXBVQ3N5ZFdZbDVkNWFEeHpOOWtJUnBTRys0ZFV5cTdGS2dhaUg5YTZIWjNlVG1PRk9xS1B4bjIxaVVWclVmaFFpUGpFVHNZNDhaVHJZdVp3SXBwNEJXRjFna01DRUVPWHkzNzJvK1NIYy9xTDlLMjRxR0RwYWEvZE5rR2xKekxhbk9BSmNCdFMrUWJ2NDJBcm5GK290cWVSU2xQVEVaRVJXRitZOCtxZ2VXVEd2Snk5YmtDcUhtSHR3VDVkQXRjTHR4eE1kOHVyd1M0c0ppU0JSS3pMNmxCbkYzbDhDTmIvNDRIdHVRdW94N2lrbElPN1BsNXVZR2xVcGxEQ3daOEYvTkJzNmxBbVFMb1pPRzdMcDYvSlIzRFJXdGJSZ1pJc1dEODY2WjlJMTJMcDQ5SUhVSlVHMEZhZWZLNGZQNVVLdlZHRFYrUEdJV0xUTDJ2MTQ4RHhRVjJoblhubzlSeWVyUzNxdjV5RzlzUXBDL0d2ZmZVNFFwNHl6ZmhzZ2twT1pXR20rZFZJT1VqSUZHV2pwMTF6OGhvaEZMSHNxM2FremF0YnZ2Q1dVOEhvODhMSXVBZ1FNeCtkWmJNZjJ1dS9RSENzbW1iT0ovSlMzdE5mMjdUajFKbDVsdkxJTktqaS8vVVZLcW5jMTd1dEdZZTJjNVprK3Y3TGFiMTlsR09wRWRETG1ndEpCU2xORk5ld1RTUmJGRmVHN2RMYTRES29IMDZZZnl3ZS9sODBkazRtUU5wSjJWNjR3RWdmYXVCUXUwdzRQUWtTUGJQeU52dEJia0E1bnBRSGtwTXh4YW1Rb1phMStvcXNFZkpXVW9hWkhBVndETWlxN0NYNkxMNFNVd1hsMHlsUTNoYW84NERLa1pBNnkwUWgvTkVxVEVOYlh5Mzhadm96bGxpMnBQU0x2V2xPNUVBZmwzc25nUUVUVkJPelRvQUplYzFTSXRMUUcyck5UR2JpNnlCTmMrQ1NKWDZad3NxOEN4NitWb2xDc3cwSS9HbkpubG1ER2xaeTFvNTVhVVRVaEp2aTRCNnNUUkRWajZ0OTUzclV5MHBPYWFrd0IvQmViZVhvNXJwYjdJS3dsQ2ZXUDdtbTNnd0FFSUdqeEVDeTVwYlFNSERrVG9zR0ZBUlJsUVZRbFVWclNma0NWTHR3d0U0cWpQcktsSFJuVXRyalkwUUtXaEVlVER4LzF6Y3pCNVhHT3Y3eWRqdXlYVlNlRDBvSTRiMllSbkg4bXpTM2R2anFQQWZuS1E2NGFDK3V0UEROUTFlaUN2eEI5NVJiNG9yUTVBV2FYaEpXZERSNHhBMEtCQlduakovN3dFbm9DVXZLQW5RMFJJY1B1SjJiYTJkb0RKLzFjYTM5SllXdDhBcVVxSmVvVUtwU1VseUt1c1FxbWtIWGh2Tjc1MmRTY2twQUhQUFpiVDZ6RThTY05la0RwOWkwb2dmZWJoL0I0Ti9EdERaY3VXMUJTazVvQW15N1YxVFo0Zy95VUxDOVgxZnFpcU5YRkxYNWNFUWtlTWdFd21RMjFGOTNjVHVGRVV2TnpkMEtKb2g5cmE0Wkc5SVhWNlVFM2RQV1dwdDNRVVNMdmFXVlhuaVkwN3g1bzgrbTNrWnI4eE85YTVjM1JwZGJjMzE1a2gvZE9CcWxKVFNQakdjTVhKRXRnOS9iMDNMV2xQSWUzdXlzV2UydFhYbHBURUo1dkxiVG03bnhaVmUyTi9zUG1UR2s0OVJ1MU5pMG9nL2Z5N1VSWnZpT3NOQUxwdlhSblN2UWVINCtTRlFkYklZaERIbkF0S0MybmNOVkNkTndpYnlPMVBBU29IcVhXY01RVXBtWVhSSnB6NVBZWDBUOUgxYzVEYUgxS3RCVjMyay9ZR1VwY0hsWVBVTlNCMWFWQTVTRjBIVXFjSHRidXFZR3JHM0RXUHZseDRZUjA2cG1PWktwL2xMU2k5dDhDYThtcnRNSGV0RUlQWERUbmxXbi92cThBeFl0anFEOHJlcGV1NlpjOGE0QzJWZ1FQVmtrSjkvRjBIcDZ0Q3FwT244NEpFMTZ0QSt5aWhOam9IS2hNcWNtbG9GYkJGUzZxVDFtbEF0ZFpRamlIblU4Q3BIKzNsUUhVKzRLeTFtQVBWV3VXNGVLd3F3SUhLcXR4Y1p0WXF3SUZxclhKY1BGWVY0RUJsVlc0dU0yc1Y0RUMxVmprdUhxc0tjS0N5S2plWG1iVUtjS0JhcXh3WGoxVUZPRkJabFp2THpGb0ZPRkN0Vlk2THg2b0NIS2lzeXMxbFpxMENIS2pXS3NmRlkxVUJEbFJXNWVZeXMxWUJEbFJybGVQaXNhb0FCeXFyY25PWldhc0FCNnExeW5IeFdGV0FBNVZWdWJuTXJGV0FBOVZhNWJoNHJDckFnY3FxM0Z4bTFpckFnV3F0Y2x3OFZoVndLbENYeDhhdTdLeE9nbGk4aVZXMXVNenNwa0RYdWllR1dGdi81aSszdEZ2eHVJdzVCWXdWNEVEbHFIQUtCVGhRbmFLYU9DUC9IeFhpREhBQUpYSnZBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFIOEFBQUFlQ0FZQUFBQUZGY0hzQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQmZkSlJFRlVhRVB0VzB0c0cwVVkvc2E3aVdQWExXbXFwcUd0MG9TNGNVV1FtbE12VklLZXlBRUVVcmx3S1pHNlBUVVM5QVNIU29EZ0FPTFFJS1duMmxYU2N5ckJyWndBS1Z4NlNpV0ttdFNoVVNUQW9XcWFORTZNNDdVSGpSL3IyZlUrWnZ5SW5lQzV4ZnZQLy9wbS90ZHVDQnE0cUthdEEzaXBLT0lIRW8yK3g0dWpseTlQZ3BDUFNyK1JhSlRZcVVNMTdXY0FiK1NmVWZvZGljVSt0dEpSVFhzVHdFL2M3MStRYVBSekwvUG9sU3Vqbkk1ZTVHN1BOOGl0Vy9NbEFxcHAzd040dDZqek9vbkZEaHZQeHNjSDBORnhxZ1poSmxtY1RGZC9XK1hsblYxMExnWFFEWUE1UTJReFE5ZVJ5ODJRMjdlbkhVQmpQRXZyRnhLTk1vQ01aUUlWZ0JENFFBV2ZvZzNWZ2M4ZkxCR3JuV2xNZXJuWlJqV05IY3JQYWhEbjVBTlhmenVCejIrUzFjbnhobEZOYTROZjlDWi9zTnZnbHlOT0laelhmNG1GL2ZiTnorZFVzVVZwTndnNXl4SFg3ZWFMS1NCTUpRUytKUTFady9FRkVvMmFmT01WelVyOHJHRWZ1ajVJcHFlWGl5bktVNDZ3bGVZMEtoLzJaUVRKRkZaZWpxcHdrSXdpM3JTdEJUNWdIQ1Nic0Y5eHlMek5xNlR3OHJkdHpwY1JWQUUrcFRNa0ZodTM0MkZScHFLZ2E0V0NiOWR1L3I0RTM2SDZMb1kzVXlGcHJlYjNFL2hjeDFRNFQ1U09naERXUFpYV1ByejVkUVFmaEpoYVFjTnRsRTV5TGVnOENLbm84NUhMTVdjenV0TGExYkJ2alhJMmtiRDF3S2VUMzBSa3dqNlcvenlINVBZZFl3OGg5ekVTdm1UTDQ3ZkhqMHkvdjNiNmpPbnZoL0U3b1BTY2xIeFI0azUxQ3NPRFU2TGtlYnJGSnhQWTBTZU1QYUhnSlF5Y3VHL2l3ZHZFMjI2MTFTcVk1eVVpUjByeElyR1RiZzY4Q0wzeHJmMXRjeEwrOStvbzF0WnZHSThWM3dPY09WMTVFeG5Cd3dWKzRnYU1SQzZZMkQ1NlBJbHNqdThjcWpIWmZrK1hmd1pEQTdiREowY2hTOHZqK0RmOW9mRzhwL3NhWGo1bVRPM3l2L00yOGJZelcvaVZ6WVVCSExEbEpTS25Hazg0NmRhUzREOVplUi9wOUhsa2MzMEFqbFZqYjhVZVFwYmdJMGwwK2U5aG9QK2VGRThSVUVRZGJEM1kvRUd5eXBGU2tpTzJYaVpSM1lvc21udnpxelc2VWZ2YTRIdDR0cDVoLyttek1MTFpjbWlzSjZpS3NvV2pSK0tlTEprOWhCUzZraGZKTVdReVk4YWVRTmNVZ2dFemoyZlB5K0dka0RoNnVzdDFSVi92QTJOdisrWTc1UHhHNW5vcjJsNjUzMXFYZUo0V0Z3SStETHVCdi9hOEQra2RsdXFBZExxdm1QYkVKUWNEaFRwRXRCNXBxWnovZndkZkhHWTV5ajJSODl2Z3k0RXFTczFTV0dtcGF0SXI3VFd2NEV0dWhiQ1paTzFRNDVhQUF4b20zSHJBVDUxOEI2RURTVmQ1REx4VTZpeDI5REJBUThWMFVFZ1BsU3NCeFpjQVNCS2RhaHpCNER6NG1rUEFzT2FCTDZEY25pYXhnbTl0eTNqakNsM0dXd0NjZ0JaMVJSSUIveXg2ajk3MVBHanM0NW1tRDNtQVdqNGtjWGFLVDFuQzhDdHlFejVyOXlGNWswektpSUsvRVA4S2V2WjFVWFNGNkZnWDBuL2ltdGNCYUM3NDlheTByVjV4bXp3NmVWQVVNQkVFUkhpeElkZDI2cXFGM1JaVVpSNnFHcytIZGI4L1lTdXUxQ1hvMlQ3b09zdjE1aUdacXY2SXlORFhicXEyd2VlOUl3S1lDUENNaGtVUlhROFo1TmEyakQzNGZURUtTb2NNbW1EZ0pnYjdaMFZGbU9pV1Y4YXdsZnJFOUp0SG5kRks0Sy9tUjdLMUxINHUzK3liTDJJSEgvbllXUHJWWVUxa215UE53dEtuMEhWV094U1czYnNKYnZQdWdXOEhobVJmNnVtWVd2blY4K1o3S3V2eWtraGtyeDJOeUhpNkRiNkRkNXNKUHBEQVNPU0RhbkhQNzl2MW02OHF2eUlTdm02cnROZE45SG91NjRsYStlMDIrTmFjcnloejZEMXlFejJIN1lzOEozK3dtY2svVHk4aWxlWS9wOXZDU09SdE54ZldIdmJkWnVkZVlKaXIvU1FVbi9lTEdEZHJzcm55aEtzZU9WLzI4TG5SMittejh0ZDViRzUrV2JHTnRXcXMybGZaRUtlNGZHb0NpcEpFSmwwZWpHWFpJRWdQZzdlN1JOL1JjZGVyMVpVSDN6cVo4M2NtSEUrcUhQajFkRFd3RjhCbkZpLytNWUZNNW1KZGpXZTJuengrdmY1OXZveVdiZkRMM25JN2pHeXN1L0ZpdkE1Zk5hMGlHSmdWYlJmbGI3NE0rR3lJa2NzVmV0Mk96amo2ajgrWnRyUHF0RkdMRFVoa3YrUXA5ZWJiS2RIL1Z4VFgvdERCT2E4WExXQlJkVzFqRkprZEZzcER5R1hkMzMwUVh3S3FVcGp4SHpvNEwxc3IvQWZ3bzVTT3NTUFl0Z0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSDhBQUFBZUNBWUFBQUFGRmNIc0FBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUJNWkpSRUZVYUVQdFd6MnNUVUVRL3FZbVFVV0hrTkJSYVVoUVVSQVNHZzBLSFFrcUNnbENvVU5DcDBCTlFrZUZoRVpGcHlCUjBwRlFyM3ljZmViTzI1L1pjKzk5OXo3T0ppZnYzWE5tWjNibTI1Mi9lNjVnaWlPRThBM0FxazdFVXhFNXJNV0ZFRzRCT0J2dmlZaWtsaE5DZUFsZ2QvZnN0b2ljczNRaGhEMEFYcWo3VjBYa1NrMjlFTUoydGNZYWVlbjVkeEY1RndsQ0NFOEFIT28rZnhPUk5lclpCZ0RyeHhBMklrdnhMZHJieXZ0dDdNNjRBY0JxQURTR1oxQlJDbnNnSXZjem9KRm5ISzlFaEFBdERBTXFuT0F2NHRQcDBCZDh2YkU4ZXVkb1J0WlYwaTJFd0UxNWVReGhPUnNVN1owRFgwOXFYVlAyaElVUUJ2QTdhK3FOUFlELzErTkVkOTY2NldyMFhyZi8zNTk4R3NBN0dCcTJLZUtKblh6dkFweDBMdkJOR0xMdWVLK0lqTmltNXMwaVArdjJBV3dVa2M5ZGlLcktjZW80UXVaZFc1eVVUTEJLZ2xzU3E5cGlFZ2JxbzNOdXpyeUJ2N0NSRW01LzBTYnJZNGlhdlpNeHYwVlFBbndtZkNkVFBNeGlGaVYwODVEd0xlSEoveWZCVDJhZW5Yc2JTU1J0TnY4dmdhOHFwcmlmV0RVeFJNWXhnRzlPbWsyMlJrcEJSY3QrUUN4QldXSXVxdk83NTZTTFkwbmR2dlZ5Q1U4NGYrQ0hFTGEwdUgwQU93QThWSFBlQWppZTRmSEIzTjlxUHBNUCtVMWozQUhBcTJXY0FjQXJEdXBGL2ZUUU9tbmRyYTVXcnVibGtkT3k3a2liVzF1U2wzUXh2RVVRVCtCTk5lRjk1aVNTUkhmYytIbXZFY1NUcWl1SGxuWFVhQjhBU0RhZkNoT1p1NXhRejg4RFdPamFkZmUxVGxwMzdYVkl1aG5BaWd3dmo1eWFmcW5udWJYTkpmaEhBZXdDc0E3QTJqN2FKdVo4QXZBRHdMUHVhbUhyQWNWcllMdXg5VWF5Y2xyV3FHbnRZZkt1N1RlUFdaLzh2a3BQYTk0QWZzV3lrM1Q3MWpWT0V0U2ZBRDQ2R0ZLZldKWHNCOEFyRHVZTWxvZDI3M3ltOHdxR2dUaUdrMitNSDkzVU5HTzl4YnNXKzIxZTR0Z3ZXUkx0aGt2Z004eng0dEQvZTJYSFBNU2JqOHhWelAvZndmZUMzRXEzTEdMK0FINHJyRDU2L1hVOGs5NWkySnRsd3JleUs0ZDhhdldqcWhxZ0gxdlhMTHZCRDNaVlNHa3l3V1BweTF5STlpbUZoQzhBZUVVZEdRSjB6bEZkNUN6QnJ5NXVtUk5ZOEcxWnB0VmpsYkZQNVFGOVZlZEdlQVRnc1dPanpielVvNEhHZVpHa1pDVFcrNjBkUGx0OU5KMGtzeGd2K05jQjdPeUxkbVllM1QzN0N0d00yVEhya3ovSlROc3FXZW84NWd6aUJjeURsWWNYbTF5bkRUT1dxSFRoQkRDNjlwUzhHQkw0bCtIQ05zbWVBN2d4Z08rQjZnK05CekF2dHhpM0k3MHR5M2ovSG9CTml1SGR6bTE3WldnNjlpY3VtSW5GUEdPZVR2N1hIdTFZYXlUZGw1LzF5ZmNBcUQwZnc5UXB6NlFDemNVdWQ0Z2txZThtRnFZdkpmZ3BNSnJxVW9kaHh1VTN5WlB2V083SUYxOTlOcXVWNFdsUEQrQm5rSmtsK0l6dnh6dzdacDVPL2hzQWx6SUxxcDNFMnZOV1c0ekxiNm5CdHpIL05RREdmVzZFbHNHZXdCRUErblU2Sm80SHBwM3dsWHJuTlREMDgwazBaSFNIcTQ4Ym5XYm5NYlVlZnAxOUxRRVFNLzJZN2NmSHNhSERSREtPMkNoTC9kQ0d0WDZ4MU8wVDgyMW5ybFNPdElEZnN0TTl0TXNCZk9yQnQzcDRhaWM1cUR1OThjVHIvSlpGRHVEL3RWWnBNL0xrMG1XUCsxWVRLeVoyK0hoVlI1K1RYMldxQ05qRW9LZmdvQnRqVE5NaitjcDNpNEFDTFQwUzMrWnBHYkUyOS81ZXNZVTNkYSs5WDBCYlVYWmNoM2J4S1ZuUjYvSXYrd2hOdWNJdjlXUElKVndMRzZjQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUg4QUFBQWRDQVlBQUFDRGdiTkNBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFCenBKUkVGVWFFUHRXVDFzVTFjVS9xNmZuY1NPRGNGQUNEOEtBUUtKWUdnWU9vRlVtTXJDMUF6ZFNCVm5LUjFnZ2dIVVZsUVZxSldnVXBod1VESjFTY1VLVTZuRXhtSUdLbWlkTmtRdGNaSVNrc2I1OWMrdHJsK2VmZDk5Zi9jK201aW91VktHUE45Ny9yNXp6ajNuWElKM3NHZ2ljUWJBenh6cHIwa3krWlh4UCszcmEwRW85RUZWckhPNVYyUjRlSnluUVJNSnh1Tkw3dHRaa2t3K2R1TkRCd1o2QUd5dlNoYjk4RHk1ZHk5VjFqR1JZSHcvTXY0bnlTVGg5TzlBS0hTd0NwNG1YaHhQeXRIOGhTU1REQWZIVlJLb0JFWXcrTmFuTUNtU1RKNFVRSEFIMytvYzZxd3AvWUVNRFYycUdud0JKSFZCeWlkTXhxWnU0RnVkVkpXdExiQTBrZkFCZnBWZzhGNWRjaWFSSHFValpHaW9qL05RMFRsVWxXZjdMUWJ3RmZsYjRGdlN0QW9ZOHlTWmJQR0lmREVxYWdHKzZTb3BPVjEvL3pBSXVhQ1U5dnY3NzRBUWx2b0JTanRBaUVvNm5nZWdwM3BLVTN3bTJyeVJUK2tyRURJczVRSEY0amk1ZjkrMDErYk85N3gvbk81S0FKNzNkaTNPcm1jc3o1cEJOcldLNElPUWswWk40Q2REeVdBaEs1dEJTNy96cldsZkdpdzdvYXFoWnpHYUEvaTJoUnFsZHdEb1Vhd3ZhY2Q1NStCenNteUI3K0RLMHVBbkVuTVNWZm9XK0M0cFkvTkd2cm15ZFZKeHc4QVhVcTZkUEdWWnRpTGZ4anlsNjRMU0J5Q0VMeUFmSTUvL3pLYW5mNjhpZjFPQ1Q3Ly85amorem55SWhhVkswVWJJVTNRZEtyZG1Nc1dHYVk4ZmV1bUppOGpuUDNma3BXa1AwQnEvaGUyeGhkS2V5ZWx1RklzeDAvN3M4bFZRMmwzK0ZvdjBZWC9iVTJuNVJSbnN6ci80NDNtWkhtOG4vcnNkUTU2V0RCOXBvYm1OVHJJNTBDTDA5bmRuTURuVmc5bTUyK1U5V3VBWnVvK2FCaWhLc3FqUW0zblRpWmszVjBCcHB3U1BMTUtOb3pqY01XSzc5OFh2ZDFBb1ZpYUg4WmJMMkx1blBIWHpwRDgyM29lVjFVcXJhSGYrK2N2SzVKSzNFOU41WmJVVHhXSzB4R2RsOVJ5QVBXV2VQQzJSVDdocEVKRncybE0rY1VOYjZ6UFRKeWZaNmdvK3o1dzMySjhUdlZoYVpzYldEV2FzVU9nbjdOaitFTE52KzVBdm5MS1JQWU5ZN0M3YTl6MHgvZll5L1kxcC8wYUNMd3JwNW9naStNcW9yeDg0MFhWMmM0RVBaSER3d0FEK2VuMERoU0xmbGpFOUZoR0wzVFNCcW1lUnE2WW9NalNPeGE2YjlzcEVycHVoWmM3TFJ0Y1crRGFXWnBGUEFobms4eCtiZm1YZkQreTdobWh6MWhhZjhZbHpXRnorQWtEeit1OVRPTkgxcVdtdkRIaDJFUXJvTS9GQ3NRMEErOU1YSVdrRWlGa2VzOE5tb1FVcTZicjc2T1h5V1Rmd21TNzZ0UUFVYVJTVUhsRUkvaWxvZ1V4cHYzZzF5enFtb2Q2RzNQbkFGSm9hSDVaNE1zRzN4VktZbkU2dUE3bUlTSGdZaDlwSFBRMlFYWXhpYXFZWEs2dTlpTGRjczl6bmZzRG5EZVlwZ01jR1BnMVhXMy80a2VXOUJOK3VnR1NGSHJ2VGQrOGNSSHlIN3NuVnJ2ODcrRXovZkw0VGxFWkx3ZGJScmdlY3c2cC90ZThtSFl2MDdLSnpTb3cyanpsZUU3S094QXhXcTNXa285SXUrNDE4UStkY0lZcmNxbnNIRkFobTBOU1FRVU5veWs4QXZUL2d6NzV0dzl5L3A3Q1c2MEdod0FwQmN3ZmdEbEFHbXBaR1F5aUYxbDJQcW5hSVdqaURDUDdCQStjZDVXSzZ2NW43Qkd0cnAwMDFoNW9jR1lSQ0tlemFNU0xyQ1BVSG4zbjY1UFFGckszMXF1bnFzcnVoWVJSSEQ5MnRHVDAvaEVUd3hiYk1vS2tYc2hjVm5kMWRvbkRqc09Nc2hEdFpmL0RGM3R5UG9lM09hTm9UZEhkZVZ5TDNjdXhxdVF0aGxmN3hZd05LNS9uTk11Q0x3ekQrUEt1VDJBcG9hV2dCYXdlVXkrbHRjcUhJcmdhakE2cFFpSVR2ZWhYUjlRVi80dlZwTEN6Y01CbVlLYzJLbGNiR2pOUjBqaGx3ZGJXdDFEcngwejFHVkp3RGVDRXBBNWdYRFQ2aTlkWlJYM3c5WUh3VEhaL3B2ak0raU4wNzFhWjlSdkZzSG9obGNhTHJ2SnU0OVFWZnJNNGx2TlhWOXZyRWtLVlFmVFUxanRnYTNZbElMY0dYY1JKem0ybWRXOGpRY01zMkhoTk9lL0JaeW91M0RDcng1aXRPMmRtK1NsRWtJd3dybkNhbmZ5eHZWWDJqcUNmNHFyTGEyVU94MWJVSFg4YlE0aDQreW1UQjUrOVlScTkxMTRCeXl1UGxZT2x2K3A5NzVVL0I0Q04wSGJrcHJVNDl3YSsyeG1CS2l2YjBGZm5TMXVJMitnRmZUTlBNQUcyN3I4dTJLaVl4V2RSblptNllYZ2RWcjVHTkJ2L1gzNUttMFc0MVhZcGQvZVRXWHJMcGRXbThLMFpNcmNGbnIzVEhEbHV2RVQxTkcyUGVDdGZTVEQyUVFVT3dVdmlFR3RNSWFWbUl3NDk4c1cxOXFpVU9SQmF4dHpXaDVFZ2krRnBBZnc3VzUrOHlUODVPbHNzaUZIcGtzWUhlNWwwUkRtV2hhYW15N3BHSS9aUDAwbkluUUtOZyt1dVZmNlc0WkFRbHNwNE9QbHZNQWZKNWxjR0tXV2IrM1Z4TSsyNkZsL1hCeG8vcldjODBoMjk1alRjdGgwVHdheU9KVHNYcFRoZFRkUzE0RWpLRzl2Mlh2SVpkRmZCcndkU2dvUUkrTzhNeXdNd3NtMHViWC9yOHlNUThQdDR5NnF0MnFBZjRURWVXc3BjV2V5MnRxcnIrK2dPYVhWdHBRK3ZkZ0crOHZoa01JK0dVVk0vTzlqUEhXVnJXQnhqR0lNUE5DR3lreVJiakVZdW12YnpkMVo1RzlqUDRxeHZmK2NTMjJCTlBoMlIybTUzdlFXNnRFNFZpRk1XQysxVkRTQmJCSUJzQ1pkRGNuUGFrTDBqM0h3dXhTRCsva2x2dkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUg4QUFBQWRDQVlBQUFDRGdiTkNBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFCcjFKUkVGVWFFUHRXVDJNRTFjUS9zYnJIL2xQUmpTNUxwRnlCVXFUbzBnRlVxQUtEVld1U0hjWEtUUWhCVlJRZ0pLSUZGQ0ZTRWVWRkZ5VjVoRHRVU1dScnFNNWluUWdRWGRYb01OYSs0elhYcjlvL0x6ZXQyLy8zcTdOK1U2NTEzazliMmJlZkRQelp1WVJQc0FTUWx3QzhKZkMrbWNpK3NuN0xZUTRBK0R6R1VXL0lhTFhLZzhoQk12NFVmbDJtWWorVHBJamhGZ0IwSnBSRjk3ZUpxSmQ1WXdzOTB2dk54R1I4dDhuQUQ2ZVFXWkFsc0pYS0R6L0lTTEdJWGFORlpxQWNaQlRtVjBpT3ErQmtBYSsvbjhlMGI4UjBZMDVnQjhBS1k4aWt6MEJZd3Noa3NEWG5UU3IyRWhnaFJDNXdKOEpETldySjg2azg5c2tvblhGUTJlU0YyWHNpZHc4a1g4S3ZwYW1zM2dpcHlCTzQ5TVZrZmIxcUpnSCtJR3JaQUwrWXdCckdkUCtRd0NjK25sbFRjZHRBRjZxNXd3NHpVUW5PZkxmQUdCRG1xelhSQlNnVFFNL2lhbHVOQUNwOTdhU1VmUW9OdDVybWpsTVUydkVPYzU3TlVHZTJzUUVDRlBkUEY3ZW5hOUhZbXF4a0FKZ2JuNm00TWNVYW1vVXM0ckhDZnlwTHFmZ3gzaFBCdkRmR1ZUcHArQW5ST2xKam55MXNvMDc0cEdCcjZYY0tIMU9JOS9ndW5nS1FDMGcrUjcvTnFLblAxYVJmeUxCRjIvZmZvWm04d3VVU243UkpzUnpIQnhNV3pPVFlpTkFrNGRmcTNVZGx2VjlyQ3dobnNLMkgyQTR0TWMwMWVvNUZJdk5BSDJwZEJ2QXVlbTN3V0FkdHYzY1dIOWRoNmo5WjgvK3E3UTF2cDNVNzFFQ1ZWNG1jb3lWVmdqamRJdmhSZUxnNEJLcTFSVlVLcjhxaDNxQmRqc3dRTW1rU3haKzVmSXlxdFZiSUZwT2xTRkVCNlBSRm14N001SzIxWG9JSW45eTJPL2ZSSzgzbmJxbDhtODIxMkZaZnFzWXRmL01HWDl5S1lSdkp6NXpvYkNNUXFFeGxsTW9YQUhSUjFPWktpOWR6bUN3Z2RIb1phcCtPa0d2OXlMd0tVNjNoWUt2Q2xjTlZxK3ZvbGhjQTVFMG1MZGM5d242L1cxVUtnekdoWkR1UXV4aE1IaUV3OE1kTGVQOEVxQS9TdkIxSlpNY1VRYy9NK3FURGUvZVhUNXA0TytoMDdtR1J1TWVpTHpoaWp5REVGME1CdmNEb0hKRWxjdTNBMUhrbmRoeDdnWm9UU0kzeWRBbSswMmo2eFQ4Q0V0ejVJOUdlN0NzcndMLzh2ZE81dzVjdHhPSlQ2MTJCYVhTRHlDcVR4eGxIKzMyTjFya3A2ZnRxQWdGdk01aENVUkxVeEloT0JVSDlWRWRscThod0UvWDdmYk42ZDRrOE9WWnJreG9HeUQ2MURqNGhkZ0hzRGVtMTY5bVU4ZWNDRHVxTzM4Zm85SDJXS2JyN3NGeGRsR3YvekVHa3FOOU9IeU1ibmNyMVFDVzFVQ3R0b3BDWVJXT2N5ZDBuNXRFcmk1RU5WaXFBaWtFYWhxZXRmN0lvOHN4QlQ5Y1FIS2h4M2Q2cjdlQjRWQjY4cXpyL3c0K254K1FSZWRnc0kzRFF4bHdNZXVvSWo5Zjk4Q1JYaTdIcDBUSGVSVjdUWmc2a2pUWWZKWnQrKzF5M3NqM3pzeEZzR1VsZDBDY1JXWHh1NThuZ0k0UCtNWGlFaXFWQ3lnVXVHVmFDWFVBU2ZDd0FiaFZHbzEyOGY3OXM1a2RZaDZ1b0lOdjIxZGo5ZUt6VjZ0Zm8xQzRHS2c1c3VnaGJiQ0xYbS9UMUJFV0Q3Njh4OWRnV2F0WnpwcEk2N284QzNnME4zNTVHT25nNjIyWngxTVdmOWN6T1h1YVBxNzdPSFlXb3V4ZFBQak5ackEzVHp1WTZmK3V1d1Bidm10S1BxWnJObTlQdXhDdTlOdnRhNW4ycThRbTRPdkRNSFUvZHorODVQQW4zQUZ4ZHBScmVkb0JxZnQ1RHBKU1JDOFcvRnJ0SXNybGV3RUQ4Nkc1V09FMFpqS2RZd055ZThhdGt6cmRZNmI2SENBTlNSUEEwbmlvRVcxWmZ0dW8xZ01lamU3NGZIWXVnQjBuMjdUUEs1N1ZnUmkzb2UzMjFTUjFGd3QrZU15WjZxMkp0dWVKSWFkUWI3bnVKcUtNSHNka251Q2JPRW13TlF2UExVeDRKR1dibEFsbkhQZ3Y0VGdibVdTckZhZnBiRDlMVVdTaURCZE9qY2FmVTFKMWxHeXlmN0hnNSt1STFITmxiSFdqd1RjeGxFNmpScGtwK09vZHkvd09ENjlsVG5tcUhycGMxMzBHMjc1dmZKekZnajliamNHSDFPMlpLL0tOcmFVUTVnRmZUOU5jWkhXN2QwMWJsWUNhSFBYMU9yOFgrTDJ4UWRFVDRISFU0TGRhUE9YMDV4aXpkQ2xSOVZOU2V3bEFSajRYRExYYTcza3dqN3hmd3hINEJMWWR2a1lrWUhMTXF5NTJBcDcvcTNOejEzMEpMbUxDdzQrbDhWT3EvaVRNWStOdTk3dE1qcVNETDRUM0hNeno5L1FuNXpnRHlxZG96a0pCRzNDYlZ5N2YwczdPdEN4WEZuM0RZZlNUdFA5OHpPZVhSYSs2RExLZUJKOFhPd0QzM0htWFdwbUh3WTh2dlBRSG03enk5WDJPOHlCdHZCa1NwWU0vTDEyWVQxejlvYWZxZWNnVTRoVTZuUnRwd3k0Zi9Ia0k5WGhrQVovM3lBa1h2OGdGWC9yeTZNUWUzKzl2NWFvZEZnRStuNUZUZHFtMEdtcFZzNTZmWC96NEFjMnd3L2t3NEh1dmI1N3luTHBNZW5hbVo4Y3BGdVVBd3g5a3hKdEJwa2laSHJrL2puc1NOakdrbC8wOCtTWjdUR242L1oxVWgyUzdWU29yazVsK1kzeWRKYTNSU0Q0cDg0eC9PT1FPTGROODREOElsVktUdDNBd2NnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFYVUFBQUFzQ0FZQUFBQ2FDeWhEQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBRjZCSlJFRlVlRjd0WFd1MFpFVjEvdmJwT3p3VGpRYURvQkREUXhUa21hQzRRaVM2VUVBRGljcERKWXh6KzV3N0lwQ01nU1NBVDJRWlRBUVJRMUNjVzZmdkNDS0xaOHhnUkF3c01BcmhvZUcxbEFVTGtBQkJZTUFSaU15cisreXNmZnAwMy9PbzZsUFZmZnJldm5PNzFwb2ZjN3VxenE1ZFZkL1paOWV1YnhQR1pheUJzUWJHR2hocllMUFJBRzAySXhrUFpLeUJzUWJHR2hockFQTUc2anc1ZVFCcXRZc3ljOEQ4S0lYaDhhTXlMeHdFWndENDg1dzhGNUJTVjh5RmpGeXZmeEJFZnd5aTF5YlBleERNbDFFWVB0eDVQdnYrajBBMEFlWUpFRFVCUEU1S0hlY2lIeTlkK3J2WVlvczNnUGsxM1hhZTl5aUlma0VyVjI1eTZhc3JWeEM4RzhEWm96eS92Y2JGUWZCVkFHK3RZdTU1K2ZKdHdQeDZiTnk0QkJNVE95R0sxbUppWWkwMmJIaWVMcm5rZVZmOWRtV2JuWFBwWXM3V3BhdThDNmsrQjhFK1lMNG8zbFBkeFR3M3VNVDErbEh3UEZsenV3QjREc0R6SUxxYXBxZC8xaFZsMmJMWG9sYTdLcmZuN3lTbFZuVHFaRUNkSnlmZkJzOTdWWGN3UkRzZ2ltWUhaek03bnRjRTh5K1RxaTlSR042cWF4WURsdWRkbmZ2dGYwbXAxK2Zycys5L0ZFUW45bmo4cXdGczIxTTg1aGRCOUVLaER2UGRGSVluYVdVTWdtOEQrSER1dDdOSXFjK25RSFUzQVBKdnRqRHZaS09xVkowTklIbzIvdittVFhkMU5qcnJuczk4QklYaDkxUGd5VFk2TE9oMGF1cEFNSjhNNEowQWRqYkl1d0hNUHdkd0xZaW1TYWxuYk1mRjlmb1VQRzlsUDdJVlpPMnNTK1pYQUhpbHJReUZla1JQQVdpQmFEMHBkVXV2ZmpnSS9ndkFRYjNtM3RTZWcyQjdSTkhSSUhvZmlQWUI4RHJqczlyclVuUjhDNWl2cERDOHUyeDhnOGhXMXZkQys1MTkveEVRYlptUk80cE9va1pqZFQ5allkOC9IRVRYbDYxYjl2M1ZJT29ZUVlJOWdrRmw1WWxjaFhOSnFXdFRlN21JTjFHMG5CcU42VzZkcWFrM2d2bkJYRCszazFKdjcvd3RDK3I2aFZ3bWFLL2Z0U0F0RFZ3MlBRZkI1d0NjTllnZ1BkcG1GSkt1eDc1L0pZaU82Yld4SzVjdE5Za2NCRGNEK05QTTgxT2dIbHVBVWZTYnNnV1lHWk1BRHZQWFFQUUJSMzBLd0grT3d2Q2ZiTnE1ekc5WmZ4d0VUL1lFeHJJT2lyOGIxMlZxZ3ptRGV2ekZNekZ4RGp6dm93Q3lRR012NDIySW9oWFVhUHpFMU1RRjFEa0laUDE4QzRBWWE5dllpekZnVGVabmtpL0h4MGlwZ3dmc3pkaWNneUJ2MUFBNUlIUjV0Z0hVbnlPbFpyOWlCYitDWUEyQTdWejYxdFROR29nNkk4NE8xTzhucGNSNGlNc1kxQUV6cUZ0WWEwTUc5U0t3cEVGZC85WTJ2MGlEUUw2QzVFV1IvYkp3V1puTVYxRVlIbHZXWkxHQk9rOU43WVVvdWpIbEtpdFRVYS9mNVFWYXB6QVV5NjFRbkVCZGIza09JcHRyMjlJWHFHdUhPU05sTGtBZHBGUWVLNHZQZFI5SVZhQ2UwZkdvZ2ZvR1VtcXJ2RzRxQjg3c0F4WVdxQU4xVW1wR2hzQjZVRytTVWtzS09oU3J2dFc2QTBSdmNWOTd1UlpSZEJZMUdsMFhsQlo0cW5TL1ZHK3BGeXd2elpxenR0U1RNNGw3QUJSY2h3UG91b2tvT29JYWpSc0hrbTBNNms1VFlMRFVod1BxekoraE1QeENSMEN0dTlYT1VoOXBVQzhvTHdhdjlnSENtU1d6SXhzcXY2azJBQ2p6VWQ1QVNtbGRPellXMFJCZU9MT2dyZnRTU0x0bjlLQnUwdUhaOEx6UEdIVDRNcGgvQ0NMNXBCUy8zeTVnZmhPSTlqZlVsd1BaZlVpcEIweHpNdUtXdWxaSE9RdlFIdFI5WHc3V3RPY3lBRVNuL3dIZ0hrVFJyN3ZQSU5vR1JMc0NPQXpBRzdWNlpQNGYxR3E3NXcrcmJkWmxGeWg4WC96NjMzVkN0bW9yTHlaTFhkeGMzU0NHVWpXMld0ZlJ6TXgvenoyb005OEI1akFqb09mdHFCVTRpbDRDSVA4NjVRVnFOSzUwc09SS041c1JSUFIrOTRFV2xNM21pYTIwV20yMytJQ1pTRGJvSjNJeWZrc2lWbEtiMlZ4SFFOWHpIcUNWSzErT1gyWVZnVG9mZi93cnNOVldUNEJJRGhxemhma3JXTC8rTExyc3NoYzFGdUdiQVRRMEI0WlM5UkpTU256SGVqeXEwbEtYbHpxd2Zla20wVlh3UFBIbkxzMy9sUCtjMW96ZEN0UmozVzY5dFJ4eTUzM29ZbW1mam9tSkM4c2lpTGdkS1NSNkxscjZVWFJjZmcvWnJNc3VVT2puUVg2V0w0djFTZFRVRG4zcHRuZWp6cUdnY3pTV2l5eHo1Rk8zczlSelFRd3U0MGoyZS9sQmFiMitMenhQNWk1ZGVscnF1Z09weTBtcGo3Z0tXRmJmWU1rdE9GQlBqOU13cHF6ZlRML0pNblc2RzdJcVVLL1hUNFRuZlYwRDZGK2dNRFJaNzNIMUJMUitDR0MvWFBzTldMZnU5M1F2ZzdoZHZYNHFQTy9MdlJaZjJScXA0dmQrMXhuNy9zOUJKQysxZENuTUU5ZnJ4OEx6aWlHdVVYUUtOUnJaa04wZUErSjZmUTk0M3IyYWwwTklTZ1daZFdaeDFsTUs2a1I3MFBUMFExWG9lRDc3Y0FWMWxuTWxack1Ma3ZrQWVONC81TWRrNVZPUG9uZnIzR1cyK3JGeXYxaEU1K1I5Nm9zTzFEa0lCT3hNWVhLSEFzaWNla3NVVGpxa2NVR0F1dS9mREtKOEZJMzIwMTYzQUhseThsMm8xVzdTdkJTV1VoaGVxbTB6aEM4bjI4MWhNU2VseG9NaDRxWUk2cjUvSm9qT3ljakcvQnhxdFIzTExQVDhlRGdJNUlzdWIwRGRRMHBsM0dCVldPcGxYeXI5NkhvKzJqaUR1dDdZS0JYZEN0UUhmRkVhb3UwdVFSVDl1Q3VnNSsycDhRYU1MZldjMWVONmlyMmdRSjJYTDErUytITHo0V3pHY1doQjJ2ZC9CaUpaVU9sU3NDSzdGdUxpQWZYelFmUTNPYjBZRDk5N29RZjcvZ29RWFpDclUzQWhqa0c5cmFGa2JXOHM2TFJIU0dPL1oyQldvRjc2YWtoVmlLSmRxZEY0TklkRk9wZWZUYTlqVUI5QlVOZTZ1S3J3cWNjWHltcTEyelVyWTE5UzZqNmJGUk52SU44L0YwUi9tN05JSDZBd3pBTjllOE10SGxDL0dFUWZxd1RVOVc2eU1hZ2JGaW43L3IrQlNNNWI4dVZKRUIyZXZvbFpZbXlVYm9QS1FWMWoxUnRlMXFXeUFkaHNRVjNjS05sYnAzSmJ6L01PcGVucHUweWEwWDYrOVZiak1DejE0WUY2dmI0VW52Zk5IQmkvU0dIb2REUFQ0RHZXaHFBdUtsRFh2YnphZEJjUzJlSlVPQWorR2NCZjVScGxMcFlrdXJVNnhJM3JHZzVLRjdyN2hZUGdhd0ErM2tQQkw2UFpQSVpXcmZwZXhvalR1Y3NzWm1rTTZoWktxbXF4SlpFZC93S2lFd3lQRmRxQ3kwSDBTVkpLemd5eStCWUVjaVBUNWFiZHdnSjF2Y1ZjOE5PV1RSbnJUOTNsOWw3aE0zSlJnYnJ1cFNrS2lLSjNVYU1oRjcyc1NuSWdMZUZ3K1RPY2Z5V2xNcmQvMmZmdkF0RWY1VHEra0pUNjY4TDYzZ3hCM1FMUU8ycVF2YitDd2xCZUFIRkpPS2VPYlArSGQraEdoTFhwR29UZVJDN20vV1ZlajJOUXQxakdWWUE2MStzSHcvTXV0N3IwSVpNR2ZCbTEybm1ka01IRWt0a0Z0WnFlMzRaWm9ocnlVUjhMRGRSMS9EVUZvQ2liTWdNbGdZQ1g5c1IvMGJoZmd1QVBBR1I4bzRrdTE0RG9QVFE5blE4L0s2ZzZEb3Rkc3VTYk1WZE12a1RSeDZuUnVEajlaOE1ocnY1cmJ6TURkUWRBbjFVWjgza1VobjlYdHNaalBEQmMxcklDZFdZZmdQQUw5U292d2ZQVzZDS1BETzZYVDRQb0tyUmFXNk5XVzRjb09oaEUyUkR6emNIOUVoK1F0RnFmQlpHd0tMb1Jqc21GRHVDVHBpdll1YzFqL1ptYnZDQjBKRlkySVkzRGM3OEVnVng4a1NpZTlDTC9Cb1ZoTDRJMDdhTGtJRmhmQ0xuVHhGSEh1bGdrUHZWa3JQOE80TDBhcGNrbHJkVmcvazVNMnRWcVBVc3pNMC9FVnJtd05kWnFiMEk3amw3aS9XZUo5RG9kaVNHeWFkTXVlU2JIeFFycUhBUmYwVVIraUxiRUlqOEZ3QWt4cTZtdU1GK0xXdTJFdEVHbnJUWVlxQjlzSWpDMGVxR1VoREQzZU9tTXRrKzlRTndWUmQraFJrUGlkK1BDdnI4YmlDU01McytnMTZraXQwaC9WQUN5b2xadkE5RW5Tdnp0Y3dycVhLOExZK0lzTDR2bm5RNGc2NXQxdkZIcUVpbFJ0dkMwWUdLSU5GaFVvTDVzMmQ2WW1KRERhQmMzWHBtNjVTdm9OR28wenM5WFhJeWd6bE5UcDRQNUh3MkFmU0tGNFRjU1krOXF3K0dwdUZ0dUI5RmY5R0liSGRCU3p6Q29sazl3dGdZSGdUQTJ2ai96MXp4TndFS01VeThvSWcxaTRyOGt1bEI3TTdMZDhCRkUwWWVFNFM1MnpSQ0pyMzNmSHNvdDg3ZlBMYWo3L3ZkQWRFVFB4ZUFPNmhMaHNuZXVUNmR3eHU0TFZjZkJvbkVQVkcycHh4dzMvUlptWWRuczhtdDB1aWs3S0xTTlUwOFpHeDhCa1J4SXUzMDVtc2YxZFZMS1JBbHRmWitrQ2pkbnY2cXZxbDFQUUNjNmc2YW51OHloU1ppamNPR2JEbEVmUmhUOUdUVWFlZnJhanRHb285NjF1MUVhUlo4Q1VmdmFmeGxOZEllaVBJclcwc3pNSGNtZUtiOVJ1cm1BT3ByTmE3SEZGbkxZWVdZSFpMNFU2OWVma3I3aG1MeTVwMEFrM0M3NUE2ajBtaXRFR0NSS25sdFF0NkUrZGdkMUhRRDhQU2wxcnV1bWN3RzZLaTMxUGlLVVNvZFdOYWpINjZVZFBpcit6cjFLQlRCVmFCL1luVUZLRlc4QUoyMFdrNlhPdm44U2lQUTNjNW1OTjZJNUNENmxlNWtuS2x5RFZ1dklEcGltcDJJZ1M3Mi9TZS9lYWJDNlVkcW1VczRmd0krOCt5V3JHdWF6UVZUdmNSaTZGc3dmb3pDOHlyaFAycGw5UGd0QTRvbUxQTmZNSjZkUHlGT1c2ZVlKNm4zeVRSdWlMa3dVQnpvTy9MNjRlQ29IZGVabktBdzcyYVMweThibEJaYnZnSU5Bb2xXT0E3TllmVVcrbmVJVE84UnpWMkRqeGt2THNpRlZBZXBvTm5lZ1ZhdWU3ZytINXFZViszNnZyeC9qbDB4My83WWprK1FscS90NkVoSzdEMUVZWGpmUG9QNFFLYldIdGFWdVFiYzljalFCaGVVU1JjdEI1SVBvYlpxbGRBT2F6Uk5wMWFySGJKWVpCOEdiWTc5YytzSUM4NzJvMVE3VVhlbm1JSkRzS2Uzd3A5a3l0T2dYSG83N3BXaXA5d3ZxTHB3akZSMlVKclMya3RxcnlsTDZjaGtFMURNZ0lac3dpbllIYzVzRWoyZzdNSytOTXpBQnY0TG5QUWJQdTgrRlVxQVNVQWMralNocVo5dHlMVzJHeWQvUnZ3MjVCVW1Ra1M2ZUo0a3k1TURldWd3SzZGMWdiMXUyNHFzdUhrUURqNUJTbWR3Q0RwWjZNV2pBZW5TWml0M3dZaXRMWFEvcW1SRGxVUVQxTkEzdWMyQytBY3cxZUo3NHFqb0hVY0ppZUNZcEpaYzFuRXNTQ2lsK3VQMFFSWWVZc3N4b2xUd2M3cGM0K2lVK0tQVzhkNlFHSkVST1dlYSthdHd2cDVCUzFtUlQzUTNTVGgwbStSUFRaYWlXdW9FejNubk9jdzNtRE5RSEZWVFh2aUpRSDRab3BqNmRhQk5ZOG5CT1REeGlPSGd1dGREelFzUUpUQ1FDS1pzY3BvbFc2K0M4QzhZQjFLdkt4dFhiL1pMS255RGpNdXlIbnVuc3JBOWdCbDBScmdjNDdQdkhnT2piRUNwZ1lGazYrWEsvc3ZEazVKNDBNeVA1SWJWbHJrRzlzQmdyWUdsTWNqaGFBWEdaSGczUkw2WUlqVXJjTDBaUVo3NE9SRDh0azFuN2V4UzlwSXNxU2RldHlsTHZTNzZTUms2Z1B2OUpNbVEwVHFBZWc1ZWVsbUkxaFdFK0VieVZpdU84c2N6WGRFTWVtZU9JbWNLZXN3eHA3Qm82RXA2NnpUWTlYWGxhQVY5Kytlazh3NmxWVHVJK2NwU09MS2pIRXowNWVVQ2FWTjVxTmdlb1ZBZ3hiUGQxWnpyRU1nTUVGclM2aHBmWk1PUFVuYzRGZXFsclBrSWFqYURlcHd2SmRqbVVnVHI3L2p0QVpKV3YxZmFaSmZVVUtSVmZPbGtNb0o2TWM1WUtnSGsxYXJXalhkeFVCY0J1MzIrUmkxejNVUmhLaEV5aDJGcnFGYzFwcHBzdTNvaUxqbWdMUk5GVDhMenIwemZoazY4WUNlbityVlRqTzBtcEZaMy9qNXo3cFN3cW9VeVp5WFZyOFdHK0Jzdzd4ZlZOU1QyWU4wSm9Vb0VOSUhvV3plWVQySExMaC9wZE9BUHdxYzh0cUJOOWlhYW5KUWJlcVhBUS9FcmptK3htYXNxODRLcnlxUnV5T3cyU1hOaG0wS1dnYms0K1lkTjlQM1c2U1VrV0M2Z253SDRhbU4rQVd1M1VmdmVsaTdMbkU5UmQ1T3hWZDhHRE9yZXZhUjhaUnhvQSsxZVErRmR1QWNxMTc1K2cxYm9SR3pkZVkwb0VVYkFFUnROUzE5RUU5Slg0UkJ1RllzajJVbFZJNDhoYTZuTVA2dDA1Y3dMMU5nWEJnWDBBUnExN3VLdHYzRGFFYkFyUlV5Nk1vRFpkRHF0T1A2QmV1RWNoVi9xSmhwRk5xajFzNWlacXRjZTdPbWcyMThsTjVRVnZxY2VSTE1CNUFONVQ0WVVQM1ZxUjBLZFYyTFRwczZXaFp2MkNPclAyMm40bDFMdStYK1Q3WnY0eGhlR2Z1R3dNcnRkM2dlZko0VlcyUk5GK09uZlVHTlJkdEd0VnR5OVF0K3A1WEttckFWZFFOM0s2ejYxT1J6dE8zY2I5a2h5YXJxcjhXbmF2aVdCK1dyNEdUUDcwK0FYYUw2Z2JJbW9xQW5XcnhBdGxhNUNucGc0RDgvY0w5VHh2V3gyZnhtWVA2cElOeXZPbVFWUzg5NkJYNXVzMGY1YlF4amdmclVYNVlpZGl5Y1ZTdCtoM1FWUmgzeGRlbC94dDYxdElxWlZWRHNBWjFFM3V3U3FGS3U5cllZTTZENHRubzF4eFVrTXl3Kzl0NG80WVNWQTNnZkhHamR1VmZYbWtWZUthYzNSekIzVzc1VEpieXpYdFdrLzdRa2ZYVUpJSTNGWGVVYXR2aUVUcnk0M1lVN2NXMS9BeisySU02cWxGM2ljbEtBZUJpUkZQT3I4cmlXdS9IOExHT0RHeHRpeTVia3dweXl6SmFIZEVGTzBNSXFIYVBVeVR1cTB0dk1GVk1yS1dldnMyYmZIeVRxdFZwNW1aR2R2TnkwSHdBd0NTOVQ0MWlYdzloYUdPbmJBeWxzWWVJWTBEa1NlVmpidnNvTFNzZmY3M2lrRzlzb2dtMTNITVYvMDVBL1VnMkFmQUdYR1FCZEZFN0w4bXVwZVVFaGJJUWhuUzVUaFhOUzljU3oySmJIbGU0ME4vR00zbUIyalZxdnRkdFdHcXowRWdBQ2FKZ1BPY01XdEpxVmRySjNnRTNTL3h5eVlJaXFSZXpEK2dNRHpNUmw5eEJuWkFFamprWFEwclRCZkFobTZwR3c1b2JjWmpVMmUrUUowRlZEcTNUODJDeWptSm5DbWxTMThrYlRhNkdJVTZjd1hxL1l3MVdldjlOTzJualM2Snh3SUdkVDJaalNobVQxTHFnWDQwMUtzTkI0RllvZkpsa0MybWJEK2pDK3BmaksyUDRqaXNzdk53RU1nbGplV0Y5cTNXWHFiTFcyTlF6MnJMMWxJM2dKZk4waDZEdW8yV0ZuZ2RnODkvTUZEdnVpdDZLYWZWYXVZelplZXJ1OTRvalMxTzMzOGZpTDZiNmN1Q25HbVFlVFNRU2IyVGxMckZja3cyU1RKTVYrMkxuOW1PTkFHeDN0cWZsRjFPK3BUY3BkbDVqR3gzekhkVEdCNWcwdTFjZ2JyVmVzd0xxYm5OVjVoTHZkKzZiK0FjZy9vZ3V6QmV3NVdGNWc0bXlmeTI3Z2ZVNzlha2I2dG1GTG1EdVQ1QlhjZDFiSFNIRENxNE1WeXAxVHFveTRIcyswSzgzK0ZuRVc2YUxIRlFtMHBWM0JibUtJbDJuWmNTZVc4aXBTUVRqaXprU2tBOTZhdFhkcDRyNHJNSU9RZ21XcE5jM05vVm5yY1V3RnUxZW1RK3RpY3paaEJJK3JBdjVkcVdjcTRVd0hYNEIxRXZrMUxiYWtCZCtMYnpQTzVqVUI5MFUvWFpmZ3pxYmNWeHZmNUJlTjdWdmZaVi92S1I3Z0NtejJuSU5TUGFJMzFvMlJlb3QvbXFKY05NdGtUUmU2blJ1TDRhUVdkN1Naaml4SytlTGEzV3pwMWdmNFB2ZFJCUjBnUS91dm5vM3VBMEhTTHF3a0tUakZGaXJRK2VuWWY1UHlrTUQrazFTTVA4amlLb0Z4SWdHRitvUGNqY3lpWjh2aXoxMkRCaGxndDY4MWVJbml4TEkxY20zQmpVdTZDdVM1blowLzB5MzZEZUpLV1dtQ1k0c1p4L3JRR210WWlpMHpFeHNhcUtxOFR4YzVyTlpmQzhDelRQeWlod3prRTlkVUJvQUhVamNKYlFtWmJ0cTJSVjhkTWdPakROUjZGcldCbW9TM1JTRlAzR1RyaithbWxmZ2c0MHd6WlBkUUQxU2c1S09RZ2tGKy9PTnJMTldSM21CeWdNOSt6bmVXTlFYN2lnWG1ySnNlK3ZCTkdVZG1HSUd3TzROUTV0SkhvTXpMOEVFR2Z2Tmk2a0tKTG9sdCtPci9VS3h3VFIvbUErcEVkeWczTklLY21xRXBlRkJPcXh2TUoyQ1NqTDVBMVp0VEgvRkszVzBUYjg5VldCZXFKajdnY0liTnVNRXFqYnlHeVRkM1lJNjlKR3RMSTZwZnZiYU5EcGZlcXlyenUzbkNVaXJlQkdLeFBJNGZkcjBxUlpEdTBxcldxenI3THVGOS8vUEloMnIxU0twRFBoQzAvM2F5T2MxZ0pzVTJqZVV3SEhTei9EZkJqcjF2MWhKbVZlTzhQNTlvYk81SVdSWmxQclZKUEYrSCtHTnJlbWJnNFd2NXdHc05SVEx5S0p5ejhUUkI4MkpBL0lpeWE1WDcrS2lZbUxiYitFK3AxZnc1ekxJZG13eWd1a1ZDR2ZwUTF3dWdoa2E2bmI5R2tqMnlJQmRSdDFWVlhIbVQ2NHFnZTc0bVlHMUljaGhQSE5xdy8vczNxVHg2VDNVU1RjeUhFYXFEa3B6QStpMVRyY3hrcXRTaDd0NWsyRHV0NDFZYVZEa1RISjRTcEpPZDRTTTFsMldDMkJUVEdwV1JUOUFwNG5XVlVrenQycFZBbnFUZyt1cUxJTmNMbzhhZ3pxc2JZZUo2ViszMFZ2S1VORUYvM1NUMWY5dGhtRGVwbm11SjAvVUxLdnA0c0xJSW12OVdRd256cFVxMTA0WDRqT2grZGROT2hoVDVsTzhyOXpFRWdhcnZkbi9wNjdkS01CQzJzZHVzcmpVbjhNNmxsdHpRT29ud3hnTzhPY0NTWDE0QWZtNVF0Q2VHMjY3SUVBbnV4d3dwYzNMZWh2RE9wbWZpbnpRYW1yb2dlcG4yUmVsNFBJMmNLOGhzTHdLTmQrZVhMeUVIaWVSR01jQkNMSjVEN0lBWkZRV2o0RVpvbXl1WVhDOENaWGVhcXF6L1g2MjJNck9sMDhiM1dhZXlheEtBZldZVlV5ZHkycmV2MG9lTjZaVmN4djFiTFo5TWUrTDJSZFdkMEQzVVFWTm4xa2xuYjd5MVR5ZXJiQk5Jb2tqK2ZOMUdoSTZLUlRxVm8ycDRmUFUyVU9ndVZnUGhSRTdSd0pMb1g1bFlZenBQUUxwM2VQekxkUkdKN204dGhoMUUzdW5FaUNqNjFTL1V2eTZqZ01Xc3E4dVYrR01lRE1KcEw0NW1ielZmQzhkdHo0ckd0aHRocFJlMUtqYUswTlQ4eXdaUjczUDliQVdBTmpEUXlxZ2MwVzFBZFZ6TGo5V0FOakRZdzFzQkExOFA4RmlQWXNiSUdwNmdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zZWxlY3RfYmctYjE4OGVhOTFiNmM5NTljNzMxMGQxYzMyY2QwNTdkZDgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTUVBQUFBM0NBWUFBQUMxaVM2WUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUZOWkpSRUZVZUY3dFhRbDBGVldhL20vVmUxbEFJQXY3WWhMRHBpeUpMeUNPUnlIbzJBZ2tTcmVvZlhvZ3lIVGpBdlFRSEozV2JwZmdZR3NmSEFoS3dtTFBtQUF6SHRBZUExa2E4U2pFRllYM1NOZzBnSVlnQVFtRUxFQzJsN3Azem4rcEtpcEZ2VmYxa2p5V1NkMXpQTUgzYnYzMzFsLy85KyszSGdGNzJCem80aHdnWGZ6KzdkdTNPUUEyQ0d3aENEb0hubnJnZ1ZqQjRYZ0lBSklGZ2R6TEdQVFVMa29JMUZQS1BpV001VW1TVkx4bTI3WmpRZCtVWmdFYkJGZVQyMTFzTFM3OFR1Y3JCT0J4dlBXSXFKNnRpWGVPZFlSM0MyL0RpY2FHUmlqWnRhKzE5bHk5QTc5Z0FEblU2MTF5dGNCZ2c2Q0xDZWJWdXQzNUtTbVpoSkJGSWFFaHJmZWxUbkxjbVR3T292dEcrVjMrUkhrbGxPNCtDSC8vNEdNUUJISmVrdWhMMlFVRks0TzlaeHNFd2Vad0Y2T2ZQbU5HUkV0cjY3dUVrQmtUSm8yRG1ZOC9DT0hkMjJwK001WlVWNTJERDNLM3d2N2RCN2xWeU03UG4ydDJUVWUrdDBIUUVlN1oxN2JoQUFLZ2xkSFBHR1ZqWnMxL0RGRDdkMlFVYnQ3T3JRSmpyQ1M3b09EMmp0RHlkNjBOZ21CeHRndlNuWithbWtjQUhwcjM3QnhJdUdQMEZSdzRjdkFIT0hMb0J6aHg3Q1JVSEszd2hvV0hTdjBHOVE4YkhEc1FobzJLaDJHM3hWOXh6YTZkZTJCajlxYWdXZ1FiQkYxUVdJTnh5MG9NWUdRQjBMM1o4UFpHNldqWlR5S3VQYkJQZ3pSa1FJUFkwQ1JDZFUyb2RQSk1OLzU1L01pNDFxZitNTmVoZDU5VWl3QXdOenMvUDZlejkyK0RvTE01MmdYcFlSWklkRHJMeDR3ZkJVOCt4eE5CNnRoUjhCa1ViQ3BxQmRZc1BqTGxKM0puUXJVaGgzWjgweGNLaWdkUklLRTA3ZmYvNU5CYmtyWExjdURBbm9QMURrR015Y3pMcSsxTU50c2c2RXh1ZGxGYUMxSlRjMEpDUTJhOXR1WkZVYXZGRVFCL1c1OFBZNGJYUU5xRHh5QThUUExMb2VvYUoyd291QVdPVnZRQXZVdUYxdVNWaGE5amZMQWt1NkFnd3dxclpYQXVZb3dsQTBBaUFKd05jVGlHNlVGa2c4QUtOKzA1UGptZ1dJR3BNKytINlkvK1FwMkhRdnZhdnk3empvZzU0M3p5MFI4QzR1RHk5U05hSzZ1aXlOTFZMN1VCMVlhc1RmQk44UjdJeXMvM0s3ZjYrc1RBSWYya1BnUDZpS1hmSGdBQStrTldmdUZRN1lac0VBVDBlT3pKZWc3TVQwMTluQUM4dTJUVkMyM3FBQ3RlZWtzNlVWNHVMUDJYL1dSWGFUU01IVjREMFpGZXZ3eEVsMmhZekhrSUQyMkYxOWFObGtZbWpoV2YwTGhYR0ZpdlhMSUdLTUF2VitmbjV4a1JXekI5ZWpxSUpBTVk2VFgwdG5pWS9zajlQT2hHQUt4N00vZFNpd1NCM0t5dCthcmZab1BBbHVzT2NRQXpRcEZSUFZPV3JubUpCN2M0RkdHZGxWb09HQU1zWERvT3B0NVRDZE1ublZMWDJ2THBJTGpIZFFhaUlscjRaK2dLdlpLVkFNbzFDSWkvZlh3elBQK1hkQmdjTjBpOTdwbTBQMGt0VFMwYnMvSXZDekYrcWExUFJFWkgwTFNGdnhaUStKV3hlTllMck5YckpiLzZ4NTg0WFNwSjc2NHVLdnJuUzVpd2g4MkJEbkJnNFlPcHgrK1lPRzdJN0FXUHFWU1ViTTZxRi9md3p6STNqT0IvMDJlWDhiOG5mZzZITi80NkNtSUdYSURuZnZzOS93eXR4Y2I4T0hqK2R3ZGhjUC9HeTZEUTFSc3lNOVpnbXJVNE96OGYvWHcrRnFha0pETUI4bEQ3VDBoT2d0ajRteUZ1ZUl3S25nOXl0c0NPd3MrQkVBSVRFczVDUTRNSSs0OUVnaVJKejZ3cEtscGhnNkFEQW1CZkNyQWdOWlhwNHdITTVQejB2VWRhdW1nL3R3NkZ4UVBnNzU4UEFnVVVHN2JHd3A0RFVSRGlwUERxNy9memdCay9LeTJMZ0RlZksxSFp5aTJJTHRhUXMwVEhWMjNOajhHSjgxTlNNZ2docnpoRG5TeDJXQXc1Y3VBb3Z4NWRvZlNNcCtDQSt4Q3NmdU8vTUMwTDkvMURGUWZhdU5IVnNHZC9GQUJqaTdNS0N6TnRFTmlTM0NFT0dJSGd0Y1YvOGZidWZrUU5pRkc0MzNsL0tDeWE5VDFFOVdybWJzK0VNVlh3emY2K3FwdjA4dHRqWUZDL0J0QUcwZHlDZEUva3dxd014Y3BnY0l4WktRQ1ljL1BRSVhENnhNK3N1Y2xMME8zNmFtOGY3MTBQVEhjbWpCOEZ5MS9Pb2kzTlhnRXpWRWdid2ZiTnZ0NllaUUtnOVBic29xSVNHd1FkRWdIN1lpTVFMSDg1dTFWbzNPZEE5d2UxZWFCRGlRdjhnWUFJWkQrMlp3eUtIUUNWeDA2aHBxZHBENVVMbit6cTV6MTZNczd4OUF2enlQS1hzMWhUWXpPWk5QNDBGTy91eDEyaGFYZFh3cExWWTZqVUNxZXpDd3NINHQ1c0VBVDZoT3o1YlRoZ0JBSk1aWlo1dm14ZHVtaS9BMzM5NnRvUStNTGRoMS9YMkN4Q3YrZ21HRHVpRnM3VmhzQ3VmYjM1LzUrdURvTzdYV2VnZis4bUhreWppMlRrRG1WbXJJYWozNVY3Z1RGbnI4Z2VySzdtUEVrZS96UE1uSElDY3ZOaXZmdU9EaENmZnY1M3duK3YyU3lkK2JsYXZHWEllWGhtVHBscUFYcmQxTXpxTG9RU0prbmNDdGdnc0FXNnd4eFlrSkpTTXVhTzBRbmFTckZTSkZ2MjdGNjFRUGJCUjROaDUrNytmRDBsK01WL283Ykg0aGdPSldiQWZ5dkJzN1pvaHEzV3kvNzBOb2lDQUtIaElheWxzWjQ5TXVXNGdLQlIzQnhzMi9ocysxZHcvT2hQa0RTcUd0d0hvN2tGbUoxNkRES3lSc1BabXJBckNtNjJKZWl3R0hSdEF1aVhoNGFIenZxUDNLVnFpaFNGOVkwL1pNTEQ5eCtIeVJPcU9JT1V1R0JvekhrMVM0U2ZLMWtoL2VjS2FKVDZBNlpkMXkzTGdadDZkSVA2dW5wR2FCTkpUeXZqbVNRdEFMNHJMUVAzbHlYUU83SUpNaFljVUw5THV1MHN1QS8xQmticDRlekN3a3ZwS25uWUlPamFNdHpodTFlS1pmcDhQbVp4RHBmdWt4YW5mUytpb0RZMmlmRDZPN2ZCN05SeUdCWjdvYzI2cjYrN2xZTkY2U3M2Y3V3bVdMbHhKQ1JQdXh0bVB2NFFLSjJrRVZHOW9MR2hBYUo3MU5IRmM4b0VKTEx1L1hnNFV0RVRIdjN0TDJIWHA5L0M4ZkpLR0JGWEIyWGx2VlFMOE5hRzRYQzRvaWNIUUlqVE9jRnVtK2p3WTdjSmFEbUFSU3F2Sk5YZ0FScHRyYUR4WWlPOCtQUy8wK2llZGV5UFR4eFNyWVFaOXhBc2YxNTNLd3ZwUHJENTJUK25oK0ZKTTJ5bGpvanVCYlhWZFRDbzcwVklUenZNeWF4WVA0S2VyT29tSUFDS3QzMEpweXVyUUlrQkZFdHkzNFJUOElXbmIydFRNMmxsa2pSaDliWnQrL1I3c0MyQjJWT3h2emZsZ0pLcjE3ZE9ZS3ZDTzIvbXdzQytEVkxhZytYY0l2Z2JhQUhXYjQxbE5mVmhCQzNMaVlwVGhnREFRSHZ0NW5qVzBOS0QvWHJlVEtGZzAwZTB1dXFjTURLdURyNHY3Nlc2WVdzM3hmT2lHREIya1ZGNnR4SUkyeUF3ZmFUMmhFQTVJRnVENDJQSGorcWg3ZlZCT3VqTDU3eTF3VnRYYzlFNWJXSWxqQjFleS8xNDdVRGgzM2M0RW5aODJ3LzZEWWhxbXB1ZUZsWjlwb1lEYUxUclZqamcrVTYxQUljcmVzQ0dyWEdVa1RBeWQ5RXNzdWsvUDZRMVoyc0Y5UG5uL3VxWUdnUGdXcDk4M1o5YkFFbVNIbDY3YlZ1UnIvdXlMVUdnVDl5ZWI4Z0JKVFpRL0hqdEpIU05DdC9mRGp1THZsQS9SdXVBLzNPeTZ0S0JHaHhLZFJnRDY1V3ZydVZCOElYNjh4RFp2UllXenluamxXZk1NQTBjM0lkT2VmZ1h3c2JWbTVoQXZHejR6YlVDYW55bHZ2QnE5aWlvT2hjT2xMSHpoTktKdml5QXNxNE5BbHVvTzQwRC9rNlg0U0xZWG8xSEsvbC9GU2Y1dW9OakJzTHdVZkVRMVNlU2Q2SGlITXdzaFllSFFWaVlBODZkK1JtZWZPUUl2UC9SRUhieVRIZUNzVWZNMENHdythLy9DMEFJb01hZk52RVVZSEJkV2RVZDVzNDRDdjlUR05mYTFFSXVBbVhKWmdEQVBkZ2c2RFFSc0FraEI1UldoZ25KNDJEMi9NdE5kVmE0Z3hZamM4a2FEb1I3cDArRW92ZTN3N0NZZXA3OUNRMXpzclNGdnlGZmZQdzFIQ285RFBFM24yOXRhaFFkSjg5MDQzV0g2SWdXZU9PZFc2RzZMaFNGK29CRGROeGo5UVNhRFFJclQ4ZWVFeEFIRkl1QVo0WlRIcHZpMExZMCt5T0VhVlY4elFvR3hidUs5Nmp1RTJyL2U2ZmZBN21yM3BNcUswNkoyQTJLcmsvQ2lGcklYRDhjenRXSHdsMEpaK0NUYndaZ0VGeURQVUZaUlVVVlZqZHRnOEFxcCt4NUFYSGc2ZFRVR1FMQWVnRG9nVlloWWZ4b0dIYmJMVDdmUWJUN2N3L2t2djBlUEp5V0NwTlRKZ0phaGNNSGZ3QjhFNFg3aTcxUXNPa2pFRVZKZW14cWhZaXRGdndJNWlOSFlYak1lWGgrZVFKSUVnRWl3SHFINEZoazFRSjBXa3lRbUppWUtBZ0N2bWNTS0tYRkpTVWxPd1BpbG8vSmlZbUpzWUlnek9sc3VrYkx1Vnd1UExQS0FLREM0L0YweXRzTUVoTVRrd1ZCbUNUdlA3ZWtwTVRTK3pYeHZrVlJMTWZyR0dQRkhvOUg3WnMzMnJ2VmRYQ2VLSW83ck5EdExIN0lCMTNTQ1NIUElCaHdiUVFDL3pzcUhob2JtZ0NEWUJ4SHZ2c1JodDU2cWYxWkdlZ1dZWTNneUtFZlFSUW9PQjBNWHBoM0FMcUYwMHNXb0M0VWJ1cmVBbFhWNGNpcjNOV0ZoVzFQK1ZzVVJHNEprcEtTVUFBc0Q3ZmJyVm9RWkJqMmM4dk1YZUx4ZVBnaGFPM25WZ2xMa2pSWkFaSHVvYWwwOWJUYXN3N1MwSzZsM0w5VzZGd3UxMDVDQ0JkaUt3TVBnQ3YzcnI5LzdWcG10QUlSVmwvcm9HSWloUFRTcmlVSUFoNDB6NVEvSzZHVXB1djN3aGdyTFNrcHFkWHc0NWpINDRrejI3T1Y3L0hnQ3dXWUFZVGdQdEJ2bjBRSXVVQVpjd05BZndJd1Fxa3pvQlhZVWZRNWJNL2JRYjB0WHVFZVZ4V01HMzBPMW13ZUJ0RVJ6WkErK3pCVW5nNkRsUnRHNGxGTGlRR1o2ZXU0cFpXOXRRc0VraVRGS1pyTkJzRWxOcmNIQkM2WEM3VWt0NkthRVNHL0dRRnAxaEpDTHA4eWtTZTUzZTdKeW53dC94V3dCUXBnaFpaeXZWWXBhaFdlRllGcXo1ejVLU21GZzJJR1BQRGt2ODBWTVBEOXBPQXpvQktGN3QyOGNMSEJxYlkvWUZNZE50dzVIUlRPWHd3QmdkQ1RMUzNTUEg4MUFDdjc0U0NRelovWi9NY0pJZncwajFheitRS0JiS2IxcGp4WjBhNm9kUUdnamV0RUtjMVJ3R1hWRXNodUU5TEZ0Ymo3WkVCYjNUc0tLNlVVMXkxQnJZZnpMVmlDWE1hWVgzY0dhV3BkUVNQaDFETzR2Y0xxeXhMZnNDQ1lQbjBYRVlRSi9LQUxXZ2tDRU5tekJmNzR4Q0hlZUllbndiQVRkUEw0MDdCbTgxQ29yUThGUXFYM0hNNlErWUg2LzBaQ2Jqa3cxajR3WHlCQW9XYU1vWUFaK3RhK0FHTzBNUzBJQUNEWDdYYjc5ZmY4Z1VhN2R5UE5aZ2FDUU53WmZ4cmFBQVRvT3ZyMStYMW9waHhDaUFMNFdFSklyRjQ1eWNwaEx5RUVMY3NXU1pJeUVQVTRMekV4TVVJUWhCbUVFSFNQZWpIR2Nqd2VqL3JTMjZ0dENYakZ1ZFY3d09GZ0EyZW5saE9IRS9oSnRMSER6OEVUai80SVNoOFFRc1FwU0tja1Nmak5xb0tDVG9rOVpkZk16QUJjK3Q0aUNQaGNYd0dkUHhEb2hMN05wcXdHaUpyQVQrK2ZxLzQ5Z2dDRmdCQ1NvQ3dpQ0FKbnFLK1lJRmdnMEhOZXZ5L2wrNzE3OTZMVlZJZXZPRWlubk5EVldpR0RJMUt4ZXI3b1NKS2t6dEdDZ0ZMS1FhckVDOWFrSmZCWkNBVEdXcjV5T05uSTlObGw1TVRwYnR3Q1lFUGN1Ym9RcWJZdVJKUVkrempNNlh5ME03Uy9kb2VkYlFuTVFNRGZXUzh6ZGFYSDQxR0RzNnNNQWpWVG9tWEd0UUpCVWxMU0RBREE1QUlQR24wTS9CV1hKYWpOWFM0WFdrWEZNcUlsTUhKVFZSQXd4aFo3UEI0bEtPYmtFWEN5MHVCcmFpMmtVYUtrUFlvZ1VDak1uell0a1lqazY5QVFHblpYWWpWOHViZTMxTndpaUVRZ254SEtYdWxNN1I4MEVPaURRMlVoMmZ5dUlJVG9YWnFka2lRdHhnY3JtKy9MTDBTNlpPSlZIOTlLcWpBQVMzRGRnTUFmK1BWQ2hJRXlwUlNURXVxN09IM0ZIbktxRmQwZm5pVXlDTEsxYnRnV3Q5dU5RT1RqV29FQTE1NC9kZXBqZ2tQSUZrVjIydHNxYkJjQThvSWwvTXI5ZHFvbE1BS0JYRWY0VVBGYmpiUUQrcVNVVWdTRCtuQURUUlVHRWhNZ0tMVmExeWgvcm5YL2NIOEFZSnJuMTlaSnJBVEdzc0RobTlSNGhvZ3h0cEpTbXFtdEtjajh3eGlBdTI5NnJlNXZIYlF3akRHMHZ0eFMrQmk1a2lTbGEzbXZCUUZhQVBrNk5aRVFxSWEvM3VjSEZRUjYzeFg5U2tvcGF2dGFRUkR3d2FwNWVOUlVBSUMrUERmYk9xRnU0em9aTVRVUUVPaXZOd3VNclQ1RXJSSUlBQVI0M3hpY2xubzhIa04zU0ZkQUM3Z2VJUU1KYXdmdnlrQ3FrSi9ETWFNaTN0VU9qSzN5TjFqemdnYUNwS1FrL2s0WVplT3lsc01NUlJ0dEw0T0JheXF0RUZsTmtjcitNVjZQdnJIaVRpbFpLbVY1VEpIeURBcGpqQmZ6dEZyN0dvT0E1d1g5QmYreS8xNGozd3hQMXlvRlNxMWdLSDQ3OG80UWNrVUJWRWtBWUhyWVI3R3NBa0ZoZ3lCQXVPbUNORXkxOGJZRGpSRFhTWkkwdzE4N2hVS0RVb3J6T0VnQ0FFRkFsVjBOS0ZXTmFnU0NBTmx3eFhTcmxrQ1hkYnRkU1dOcUNjcEZOWjdwUVVXQmYvMkJJTkFPQUExUGVKdUdEWUtPUG4zTjllaVRTcEtFUmFTQWYxUkJHeWpyQzFFNkFia3VRWUQ3Uit0azVrOGJwRHN4bUsyVnRYMHNZMHl0QXlBdHJOYmpyNkZpbmwrbXJSWWdqU3ErZ1R4T3hScHBRRkRuZHJzeGZ2cC9QVlIzcUwzYVE4c2RYOWtoV2JOalk5Z2srYUg2S3hDaEFLQzVScVc0NVdwdzM4d1N5TzRJdW5hNGJ4UnNmNmxNRkdJTW9qSHpoWTF6cGdyQTVYS3BxV00vOTF2SEdFdlhOL2daV1J5MG91M2tHNDhSWEM1WGlSeUl0OGthdFpQbWRYOVowRUhnSnoxcXlodzVyWmZoZHJ1RCtsdTIva0FndTJxWTNnMVlJOHJCUHVib1RUdFRaY3VIMmgwTGVkd0NvTytPVmdGQlJTbk5zMUR3VWhzUTljeEYrdG9zRVRiVU1jWWk1QW8vbjg0WXF6Tnl4MHdmMUEwKzRRb1F5Qm1jS3pvTWZkMG5NbE9wVEJwWkFuMS9ER01NRHpzbzZVWnQ2VnROVytxN040MktQZnI5b0xCcXNoOCt1MDZON3NNWENMUlpHVmxJY08rWTB1U05iWklrcVZwZUZFVVVLTFFRZUIvb29xZ1ZhU3VGSm0wd3E2OFErNU14ZjdHSG5CWEM0aVMyU0FRQ1lud3VPVzYzTy9jR2wyOUwyemNDZ1drUHU1YXl2d0JXSjBTbUFiTE8xOWRXUEUxYmVnUHBTN0xFbVV1dEl1b2VzUDlHVzFBeW82SGJqMm1LdDczQnFKOWltV0ZCMEd6Zk92ZTJUVTlSSU5mZVNIT0REUUx0UVE1VFFURFE3b3B2MnFhc2I4VGdJSUZBUFN0aFJadnJsRU9pS0lwN1pRdGlxbGphQ3dKZkFYaFNVcEphaEVNQW8yWkh5K1VyUzZmUUVRUUJyUmg2QXJ6U3JHMmJ2NUVFTzVDOVhqVVFZS0NvN1lNMzI2UWNTNVFyWnR5c3J6M1lJUEFYOVB0d3NkQy8vMUQrenJRTHRyMGc4TVZIczg1WmYvelgxbmdDQmIvWmM3MGV2emNDd1RIR21PVmphdGpIVHdqaEJTZ2pRVWxLU3VJVlVmbm11YTlKS2NVMXJnakNGTDlZRHRyUUZWRlNqS2F1aUM3VnFDK1dXZVk5cFZROUNvayt0YUxONWZ2TFpJemwrUW9nbGVDVEVJSUF3QmlGKytHTXNibG13YkVXQkVwQnovS21MMDlVVzloMWxzQ003MnBYclg3dlhkSVN0SVB4NmlVK0FtTTFZRzBQYlF5a3NaM1g3SXh1ZTQ5WjZ2ZWsxM3lkUU5jVXdMaUhUa3BScTI2WERHQVUvamJITEFONUJsamwxM2I2Qm5MdGpUUTM2Q2xTWklZY0lHZmdqeXFiTkhOcEFWV0ttUmk1b2N4S3JyMURZRk1XTmpML2N2Q1BmakxtMzYwSzFSYTBHbVlXUUZtM3MwR2c4RjBRQk53M1pvZjhOZEhwWlpiSEVHNjMyL0JuVW04a0FiZXlWOHU5UTFhSVdaMWpWc3pwckRkV1dOMVBJUFAwSGFnRzF4bzJwUVd5UnJEbW12RWRVOWRtRmpkWWU3dVdkSzhKQ0s3bERkdHIyeHpRYzhBR2dTMFRYWjREL3dkVVZZVDdoZlZaMVFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVNQUFBQXBDQVlBQUFCdXBaUlBBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBdDFKUkVGVWFFUHRta3VvVGxFVXgzOS96eVFESWE4TVpNQXRva3dJQTNsMkI2UUlwVER5S0RHaktFd3dVUjRUU21IaWtZbkxnTHpWallua1JsRXlrQktKaVFtaHBYWGIzM2MvMzcyZmM4NDk1M2ErelQzVHMvZC9yL1U3Kyt5OTlscGJaSHpNckJWWUFjd0VSZ09qZ0pFWlpmcXErU2ZnTS9BZXVBVzBTWHFWZGpDbGFXaG1rNEg5d0dwZ2VKbytUZFRtQlhCWTBvVWttLzRLb3diQ0JtQmdrbGlUdjNjb2V5VmRhMlJuUXhobU5oZTRIbjZESnZjemszbEhnZDJTZnRYMzZoR0dtZm1hY0FVWWttbVllQnJmQTlaSStsSnJjamNZWnVicndtVmdRRHkrOWNyU2RtQ2hwSitWM24vQU1EUGZJUjREdzNvbEgxK24wNUsyZG9OaFpyNU5QZ1VteGVkVExvdDlkanh3aGVyTU1MTnp3TVpjc25GMmJwZTBvQXJEek1ZQjc0QkJjZnFUMitwVmtxNTJ6Z3d6T3dic3pDMFpyOEJ6WUZZRmhvZXY0K1AxSmJmbEJreVVtYzBKTzBodXhjZ0Z0am1NSXg2UlJlNUlFZWFmZHhnM2dXVkZxRVd1OGRCaFBBdkg4Y2g5eVczK1c0ZnhBUmliV3lwK2dlOE80eHN3Tkg1ZjhudlFQek82R0g3c1h6TzZZSFQwN3laZE1Ob2N4b0dRMzh6LzA4V3RjTkJoVEFOZXh1MUhJZGEzVk00bW5rNmZXb2hrbkNJZGtxb0h0WFhBeFRqOUtNVHE5Wkl1MVNaMy90ZEk5SkdrZWRYa1RzaHBMQWR1Rk1JNUxwSHVhYjhBNUJTd0pTNWZjbG5iYzBJNHdQQzAzMzFnZnE0aDR1aDhHMmh0V0NvSVFEeEw3aldGZjNsM2VRM01sdlMxOXJzMXFxZ05CazRBMVpwQ0hCODdsWlZuZ08yU2Z0UzNUaW84THdJOFdUdzkxVEROM2VnSnNFZlMzVVptcHIyU3NCYllGeWtVcjc0ZmtwUVlSNldDVVNFWlF2ZVZ3RkpnUXFqUWoybWlDZEgzbDFXS2R0Yk1raUxlem9pdzZIR1Q5RExOakNTeExPL056TGUyeFQzMHVTTnBTUmF0b3RxV0NhTUY4RXBXN1kwZ3YwQXlRMUlwcCtqU1lJU1lwcjZzZVZ6U3JxSytkRmFkc21HTUFONEF2Z2o3NGplbFBoREs2bENlOXFYQ0NMTmpFM0FXMkN6SnIwV1U5cFFPSXdBNUtXbEhhUlRDd0w4Qi9xL2J6ZkwwVThVQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUdrQUFBQVRDQVlBQUFDVE95T2RBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFCak5KUkVGVVdFZnRXVjFTMjBnUW5oNFhQMjhoSjhDY1lNa0pRazRBZXdMSUNkWThJUGx0NGMyU0h4Wk9nRGxCNEFRTE55QW5XT2NHOElaVnhVenFtM1NyMnVPUkpUdWthaC9pcWxRUnlXck45UGZUM1dNeXZ6Ly8rd3pRT2lzY0RvY256cmxkYSszRGFEUzYxekd5TExzbklsOFV4YWZvK3BFeDVnL3YvZDE0UEg3TXN1emNHT1BMc3J4WVp3MVI3QkRMV25zekdvMm1xOFpUKzJsOVh2Ym5uRHZGUHVKM0RZZkR2blB1MkZyN2JUUWFUUkwzVDd6M3g4YVlyMFZSREZMM09iZjFXZ0pJZVo3N3RvMTU3eS9Lc2tReURDLzBvNzZHNjhQaDhNQjcveS8rbnMxbTd5OHZMNThrcm43R1dqdngzditIZTBWUnpCRkZ4Mmhia3p3cjZ5ZWlUeUJObC8zSWQvVis5RFg5YnF6cDlmVTE1TWhhSzZRY09PY0NTT1B4K0VHK0wrdjMzaitVWlhrZ0JKRDdSSFJnak1HL3FmZStCbEZBamZlQzUwS0NrRUFWWkFlTXgvL3hJcm1PeEFvellwQ0VYZDc3SFNMYTUyZnFtRkJWQk5LOWdCbURkSFoydGs5RWw4YVlQaEh0ZXUrL1lVTmhzVDlpdndNTHZmZFBTSUltV1FLazhMMFUyTjc3Z1NoQjFoYUR0QTVoWXBBa2RodmhCTlJHa0dMV05DVXdwUXFvcTQyNUFLSXJTT29kNTBUMGQwckJjVEtibE5Ta2pEaGhUU0Fwd3JUbEdBcURPeHdMVVNYcGc4RmdaM056ODVLSVlIRjNUTUFRenpsM2d1djRibFZWUjNDZW53SXB6M093V3hRR3R1OUlBc0VlZmltdS84TXFQTFhXQmp1QUJiMDFTSyt2cjA5RWRNZ0tDelljSytsblFZcko2NXo3R0tFMUxjdnlodDBva0VydUMwamFUcDF6SCtJNkJsRFlGZDVyVnpER0FIVEV2MWhvSExURXRSV2xaTHVzSnNVSmVtdVFuSE1IT2ltL0VxUTh6MEcyUU5ENGd3UlhWYlczdmIyTk1vR21JUkExQW1uQ1NwcXJRNm8rM1JWRmdjWnFvVDhBQm5NZ3NieXZwYTU0N3grdHRYK2lZOEs5WHErSGhhQldCVlcxZ2ZUeTh2SzRzYkVSTmdlWkl5NmVRZkh0WUtsTDdRNTFDbmJCc1FPREV6VXBzTEhKcTZTemJMSTdWc0dBazQ3YU9FQzhYcStIT3RlWFBCaGpycVJUaTJzU1lzRHl0cmEyMENRRTVlc1B3TFRXbmtoWHFrckhGUkhkd29WcWtCRGNPZmNGTm9iQ3pJRUFCR3psdkNpS0t3bmVwYnVEdEFHcWdLRnM0RTFBMHEzL090MGQxaU5PMFFMU0FsbGtMeG9RSkJxdE54SDFqVEZvczBOM3B3R0o2dFBYMld4Mm9EdGdyU1R0Uk5MZEJiYXdTbTdLc2p4aDlPSDFmL0gxMjZxcVBpTm9FMGhabGgwUjBSZGhOYmVaWUI4c0lIUm1iVXJDL0JUYldKTVNtbXBRbG1XWVA0THFsM3pRSGNJUjZwRWlWY1BVZW1xMUtKQUF4alYzd1pnUEYycFNsbVd3dWwyMURvQUlGWUw4YzNNV3V1Qms0OEJnd0JLUXdGTlp1RklORWcrcFRvdWlDTzMxRXBDd1VDbXU5M3FnN1ZxVGVLNUExMU9QQWxHaW4ySERUSnpRUnFjMmxnSUhlMlg3ZmRZRkhPUXl4dXp6bURGbmo3cEc4M3R2bVlReTc4Qm1QN1A5NGhwR2g5Q3hRVWxabGswamtCcDVBMlhuZVE0cmZiZWdKTlFiUEptYW9IR2ROOWVQNXdwZGs5Um1rRVN3WkRjMU1MWXBxWVg5eWR0TklBRndudTduYkNlcUNZOWdOQkZkTkoxV3NFUEFWZWFhQjU3aEpqTGtJMjZxSnEyeUp5WnBYeE5HMTZTbHh4bjZSU2tsUlVwQkYzUE42dHVMMWRlbGNlREZIbHBycitLanAzalRLWkI0WkJDcnJnZmkrRmxSUG9obHJmM1FkcXdFd2lKR1hFdVVCWVpUbDdnbWNjMC9WRTJaRFA1UXJxZ1hlYnV2cXVwT3g1OXJIRkxCVXl6QStSUmtqZTROd2JTS1pyTlpuK3RXa0Rtc0FDY1ZYZTFPMld5d3pyaURUSzFIT3MrR1ppSzh2NG5OYlBjNEhWbm9WdlV6UW9UNGhDU09tMUtTSmt4SFZTRjNPT0w2Y2RMU3hvQXVRZk04aDA4ZlJ2WVhpcXFvNlZlQ2xGcGoxNlN5eWhzN09MWXdGUHJrV1dQSC9JUnpQOVQ4cXFvbVRTcmtFZWlXajhQcXM5SVVTSTg0MStyeWNtUE1NMllHM3NDenFFaXBJYWdKN1RqUFNVRVpYZXhPRGM4VDUxeWpFdlE2ZTcwZVRwNEQrNlFBWTNMdlVHL1EyUUtJaGNaSjF4bjhqU0c2WTI3cWcxYzErd3htczlsTkMwaGhUdFdFWHdDcDZ3S1lHZnFrZHlmdURIVkQwdlVVUExhN0ZkZFRzNCtiQmlpNS9xQTdJNkp3NE1wamdXN1RrM05McktSVjFrTkVleUROR25iM0RLQVc3RzZWdzBSWktMcWkxRzhpcVkxSTErSzl2K1hmazhJcGVUend5YlBZR0JLNVNsTDBTYjBrbDA4bEF2dlZLVHBBa21aaUNtVXZxMXRzaVhPL20zVlpsOTRiMTZvajJaTWFWZXExZ0VEY09NeFo0bG8vK25WWjRPL3Z2RjBHdmdOL05GZHVQaHNXSFFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUg4QUFBQWVDQVlBQUFBRkZjSHNBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFCbnRKUkVGVWFFUHRXanR3RTBjWS9sYVNrU1ZMeEpqNEFmYllKaGJJZ3d2Y1VJV1poQ29VeVV4bVNBRlZWTWdOcElDT0FpYkpKSk5KSnBraEJWVFdNRTZWRktaSUY2cUVHYWVpc1FzeW1NZzhQRWtRRURER0VvNnRreTZ6a3U5dWIzV1AvMDd5RTIwbDNmMzd2Nzc5SDd0N0RBRFVkUHBkTUtieTM3NUdzVGpESmlaZWFITXIvSUJmQlY2ZnMwem1Nd3B2TlpVYVJFdkxnRWJMeHNkdmt1YWwwNXovcHdMdGNaYkovT1kyVngwYkd3WHdoaHNkNGYwaUd4K2ZGbnpBWmIrajI1SEpNUDJkWkNPQnQweGlraVhJRkRHOHlUSVpqb1B0cUNpa3B0UCtnYSt5TmptNkx2RFRhWlBUWk41MmxxaCt3YStWNXdPTHloU1RzMVdKTHhQQnI5WFZxMHhMWUNVY20rQzdlVlVHeVkzZTRYMFQvTFZNNGovdE55T2ZzdjRhR3ZtT3RhRkdHMVZOZ2JHUDdlcXJSZHIvbVdVeUgxS3Nzb2hFV3UzMm1mWkZuU2lsZzVwYWEreFFsRDFhWDBTUlEvR1ZURVBWVGU5RGZBcHhiSzVxd0ZmVkIyQnNvaUtyWEg3SXJsMnIvcllZT3haOG9TOTZ2Y0EzZyt6WWlEVEI5eE9PMVRsYk0vSmZBL0RYRnEyeGExTFZVVERXYmxVYW01Ry93OUkrWWJ1czl5NWJCbnoxdTY4T2UwNDAyZm16VUpReityeDROSVhlbmx2Ni83OXpSN0gweXFqcmpOMUM4a0NLSkdmMi9nUlU5YWd0YnpzbWJqcFJoRk40M0xsM1cyY2wyaVUrdDVJbCtvZ2loNkt2VEdPbm13MHZwbDcrMWx1bnp4bk5QVWpodnhXajIrOW9QNDk5M2ZycEZoNDlIc1h6RjVkMW1jSEFESVlQbmlQWmMrZlA3MUVxSDlGcFpkNTJUTngwb2dpbjhMZzlhNXhjaW5aeHZjVlJLaWNBdEZuYVFaRkQwVmVtc2ROdFU4RVBCWDlITW5HUlpFK2p3R2NzaXdETEl4RE1JZDUydzdRNDYxbEFWQWM3MlNHRFQzS01CZEZJOHJqcEtWVzN0VWtiRS9tdDRSOHdOR2k3dmRNTnlCZGllUGpYandCaStyTm81Q29POUUrNitzZkpvVlQ1bElpa09yZ0ovaHBrZnAxZm5aN0h2cTR4ZE96Sk9TNEF2K0R6RXFWZGFyM01uMEN4ZUVLWEUybTlnbWdrYTVMN2JNRkk3enk3ZExSZjBkLzNkTTNvdjNjcytNOFhlckN5MnFNYkdvOWxFV3ZMNi8vbG1rOEIzeXJxTlliQjRCU0dFNWZXQlh3eGtsM1Rpd3VCbUlhZHdKZjlwN0Y5dGN4dkdLMUhJSkJIYTlpOEVNVStpOCtpWnFXNjByNmJrN2h4QzR0R0JFVWowNjQxZDNidUFoVGxQVnZXOGZnbDlPK2ZzbjFQU2RsV2t6Y0RmRGYvK1gyL0pjRDNxanhmTEkrZThGcXZqUUtpa1FtOFdqNHJQTXRqb08rMEtjT0ljcHJnQTJKR0NlL0t1WlZLbytHVDA1UlhBSjNvM2RLK0hQVWF2YXhUUzh0MUhIckxxTEdOQUwrUmRvcThaTjI3M2h4RDUxNXoycFpsODNLNXZId0VxMG9DVUdNb2xYbHBOY3FybVQ2UFlLREtiMWZMTktMUmFZZzlCOEd1alFIZkNUU3JxQi9vTzFXSjhLZlBFbmp5NzdqSkRydDl2OS9JSnpqSkY0a012cnd0cTEyNHZPVFpBVTFWSVk5SWVCSmRuZGR0TTZUQWFXUEFkenJrc1l0NlRjbTc5ejVCc1hoUzBEbUhrZVRwR204MEFueSsyRW9sNDJER1l5U1pkS0tDdng0WmwrOUMrbnZQdXkwQWUvQjVoTlV6S0NkODhxNEFLRUNMZWsxMmRSZVFBZEN0cTJOVlJob0JQaFV3aWw4b3ZPN1BmeVQxTlp4ekFhSFFGRUxCSElLQkhNSmg2eTF1c1JSRGNUVUJwZFFEUmVHN0JNTS9uRXNvZEFQSm9hK2RWTFVIM3lsTlVZeW5kSjZ5Zyt4NmcvbC9qbUZwNlF1VFdMbUdialh3NWUyY3ZDM2p4dHllL2NrRUd2VkF5OHIvVmo0YTZQdkFLZm8zRDN4SzFJdEd6bWEvaEZKNlczOFVERXhqK0tDUm5iWWErRjREaExFNUhENlVwa3l6cFpGTHFNdTl5T2FCVDQxNnpkSnFZOGpUdjFHVDJ5TGZZTEQvbHdySmRnZmZ5K1dYSGZvZWZiQTU0SHVOZXMzWTJocHA3UDA5R203cFAwcWRyaXMwcGNubUF5YnJSdGFMdkcwUitiS1R2ZFE2Y1M1UGxmMjk1eXAxYlR1Qy84ZmRERlIxeUNobHdTbDA3YjNxZGpoVHN4NTRVL3prNlVrc3I0amZUQlF3a256Zlg4T25YWWw2V1hrYWJWbU5RVlg1ZlhaMXlDbXRHdmtYMXBxZHh4aEpuaUtMMGRKL2EzalNkRk80SHVDVGxTSVFXcVYxcXlhTnMrSytENFd5Q0FXTVRqOFF5aUVZektPNFl2aTF4QStDbEFSSzVkbzdBYWV6bFRWMU4yYWZiN2Z0ZURCL29yS1ZzZXFFbmZ6SlY3cDRrYlJlTlorQUtabkVycWJYbm1PUVdkb1NjbGw5K3kvNjMrZlhyNExCd2UxNHR4R3l0bVBrYTNielRMajRNbVg2Z3NtZlR4NGpHcGtrZmYvQUU0eitHUmMvM1NvVWVBcXA5NGpSckhiTHJpeGlrYXpuT3ViVmVLNy95NlZqK3JUdXprbTNsVjhqZ3ZOUWxCaWNybGE5NnFYUjc0NVB1Wjd0ODR5MmxFOVU1SmZLTVpSTFJvcTNrc3NDT2Ywd2FIZDgycXVQL3dmTWFWT1piUWYrN2dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUg4QUFBQWRDQVlBQUFDRGdiTkNBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFCak5KUkVGVWFFUHRXajFzR3pjVWZrOW5TYkFzUVVtV2VtdUJlT3BTZDhoVUEyMm1lZ2xRSUI3YXFSNlNwZTdnVE0yUW9DM2FJVnN6SkZNNzJGTTd1RUM3dVZOYndKbXkyRU0zZDdlSHdEN2NTWUlsblZnOG5lK09wTWdqajVMbG41cUxMWkY4ZngvZngwZFNDQURBR1B1SS90RC9qbTBQRVkrVHVhZnkvdVJrZll1STM5aklab3d0QWtDVEd5dkkxc2xnakpIOHI3bit1NGo0bDBtblFwOXBpcTdmUjhSZExnYWsrOFBrTXlJaTEvY09BTHp0cWdnQUJGMmNYQjdEdnhHUmNOVzJvVUdNc1hHQUp4RkNvTWNFWHdpYUxQc013SmYxdVdJaUJKc3hsZ2UrdkZDTDZsUUNLK0Y0RGI0cHFqSklwdkU1L2RmZ2M5dUlLKzFQTy9PZkF3QnROZFNLMHJFUEFBblY3eUxpdWlYdFg1ek1MN3JhVGZ1cmd2Wi9SOFJQYlBRb010RjI3M2JhODNtYlRINHB0a2d0dFNyOGVEK3BDV3owMk1SS0h1TkUrMFVWbVl4WGdFL0ZZSkloVk1DbEdhSndZS3FaUDBYdzAwVnNpbDlSUE1ZcStJb3FNeG12QUo5WGtWdUlYT0hNdndZZkFLNGsrQllucHY4dCtIeGg5QnNpVXBHbGJKYzE4eThsK096Tm0zZUwwajQwbTJ2Z2VWK2s4M3E5VlFpQzErbm5SdU1PbE1zYjZXZkdYc1BSMGFxVm5wczNOd0R4amxhMlRvakpKaHZsTmpKdTNmcEg2UmYvdlVvWEh5TWJQVGIyeW1OMHRtbGtJVHM2eXIwRlVzNXJORmJCOHo1UCswNU9Ia0duazk1dXdlenNJbFNyUDNCQjJnUGYxeFo1Z281bTh6a2d2cWVWclF1S3lTYWJZTnJJdUhFak84SXlsdmxGUHBkS0MxQXExWWVxU3FWbFFIeEw2WWVzcDlkN0FZUEJ2bzJKd3BoT1owLzRyTFB0WE1HUG9rMElnb3dKOHJ4c05uOEN4TnRqZzgvcnNOVS9Edml5VDNtTFdOWlRHUFhUQ2NmSGQ2OE8rREpqa0dkUnRBTkI4TlFZbjd5QVhvT3ZESjhiN2RkcXkxQXVyd0RBUEFEc1E2ZnpBcnJkakxaa0VHMkRMMmRMWW5LMyt4VGE3WjNjQmVBS1B1bk1IclhtQVpGOGlodGo1Rk1vNkVWTWJnT3BuL295djMzL1VUbzJML1BqK0MyZmpxMExUR2RhNVl3ZEFzREJjSmk4bFU2RjlrMEd1b0JmcXkxQnBmS2RValFGT1F3L2d5Z1NnZUFIeStCSDBSOXBrUHI5WGFFbTRlZnhBVFA1WmVybmFkaTFkakhweU91L0VPQzdPTkJzL2lJVVNJejlLMlNFaWY1dDltdVZYVmNKZklvQlFGeDA5bnJiMEc1djUwR1IwVDVSa2VkbDFha0xnTG81L2Y2ZU52Tm9EdW11Vkw3aTZIWVB3dkFKMU91MElPYlM3L1BvM3hYOE9HQ1RhWHhSNjVyNW5sZUhTdVUySU5iQjh4WnlEWXVpQTJEc0FIcTlRK2ozNDYyZ1FNdkExKzIzQllScGgrYnQrZVJzdmY3ejBObWtKVWZIdWJrVktKZlh1RVdocDM5WDhDZmhuMHFHSE04Z3VLZmR0bVptNW1GMjlqNlVTa3RDelZIRU5sb0Vnd0Z0YjV1MkMyRmE0TCtDSUhpaTlFVUdqVDg3MHdRNWlEcjZ2K2pneThleUpCaHg4YmNtTFA0aW9LdkdSdEVHQk1HbVNZd2VmTXJXY1JwL0NTUURtc2pOeS9wa0RHVUZNUVBmVlBRL0NmQWJqY2ZnZVI4UFZWR2w3L3NQblVNZ0wxb1YrS3FqYmFLUVlrWXR2dndaTFhSTHBlVFVzU0JzamNuOFh1OGx0RnBiZWZicndkZXRWTnRvMkZTZWpjYVg0SG4zVTVGVW9RZkJzeEVWbyt3d1N2K1RBTjhHTUZ2LzR4b3FPemFxTHJrYWplL0I4ejdndGpXcWpjUmpzNDIrU21VQnFsVzZkZVZsaGVENzl5NG0rS3FNcHVPY3JuQ1JiLzZpNkZjSWdoZXBjeGNOZkJ2UXhBUTVCTi8vMUdhYWRrekJJdlA4TXArbldQSkdsL1dKcDdTNmE3VWZCY2Y1TjRYTEQ3NzkrNGNPL1lJeE9CL3daU0FaYTBHcjljQllwWTdTL3dHRTRjTmhGVjNRY1dYOEprbjdOaWtzWnY1NE5RYnBreE5LZm5DVGJEb2Y4RWNyZUxlSEg3cnFiTFhXaDR2bU1vSS91cFZ0UVJDOHRGazNJMk5VTjZSNXgwc0EwSVBQV1BaRTYyS05lQWN1VWhvWldpNC9IbGFwQkdBWVBzaTl1dVgxSjZ3UlJhK2czWDZXempzTDhMTVlVRVdkM1VNVWpRZGRUdzhHVk14bU5RckprQyszNGxNR2phWFk3OE5nUVArcm4zcnBEU0l1S09lQktuLytUY0ptRzgwRnY2aURlZU1KS1BtY1Q4ZThhblZwZUl3eFBkcklzbW11Zk05L0Z1QlBNZ2E2NDY1TTFaUFFTVmZqWWJodVNxaHBYZkxZMDdxcjg1Y1YvSmdCaUFsWGhCK3h1TVNCV0hRdzJMYjk3VVFHUHRGcHVVeS9SbkduTjVYQmRQL2M3ZTRhaXprWForWHRJR2FTdUxYYlc2YVZQNktTWWtDc01qT1RQZHVPYTFjeS8rUmtSM2oyVnNtTjJYRHg5RTYvUHZ4bFVGNmpiWUcyQjRweHY3OXZsQy9KK2c4MElVU1RpR2pTU3dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUg4QUFBQWVDQVlBQUFBRkZjSHNBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFCaHBKUkVGVWFFUHRXazFzRzBVVS9zWmV4M0hpbEpDcXFRc2xQMDFvQWprMEY3aUFCRDAxQnhCSTVjS0YrdUNlbWdNNXdRRUpLaEJDQXFsQmFrNTFwWlFUaDFUaVdFNkFsQk5ja2tPaEtVNmJCb2s2VkUyVHhxbnJlTmVMSm81M1o4ZjdNN083U1pyRWUvTGE4K1o5NzMzejNyeDVZNEt0Ujg5azNnYndTKzBkd0VXU3pYN0J2RXQ5MURNWm5SSDRqV1N6ZFA3TlIwK24yeEdMblpLYWtCOWNMdDhqazVNTDdOYzJOb3lSYkhiY1RZOSsvdnd3Z09jQ1lha0tyNUlyVjJZWWYvNEU0TDNhTzhsbUNXTi9EMkt4N2dBNkxib1luU3VNTFJhZjIra3lBZTBrK2ZXNjVQMmc2OStUcTFjLzlpRGZjd0hybWN5dkFONlNCMUFuWVYzZzNMd1c4ak1aR2xTZkI5QnBTNnhid01tU0h3Q2JwMlA0TE9OSFY1MEQvR1N2QnZrMEZZY1JqYzRVOGxFUkJ2a1hvYXJqbHUyalVoa0dJV3lhYjBTK1MxaTVwWDAvMGVnazQ3ai82UFVwOERUSlpta3FydFlIN3VuVGF4RjVrczl0RzN3NnRtRFp3dU5ZeTNCeldiY1RWZTJ0MVNoZU52dDFmSmhwWDhweFBHQlJJRjZPMkRma0E4WkM4cks1UWY1K2kvdzlScjdmQldnbnR5MXAzNUptMCtrZUtNcjdBQzR4MzB0bEw1R0lkTXBvV3huSzNCSjBuZFlmN1F5V1BSWDVlNHI4cmYwNFVLOGlJUGxzTFdEbnUyZVBmUDI3cndjM2tmNXovM1dzRjYrRnliZ3hGeUYvWUtEM0k5dTU1KytOb3F4ZE1INXJUWnpEUzhkK045N243djRBWFgvTmVCODg4WW9qUnQ2R1dIUUNmZDJYaFczeXdrSW51blhuTDF1NzJPL3RGTEoyaWVnUkJzME1kTUxtTUJmUkwzMXJkTjd3NEdFL1ZEWHBSNityVEZzeWgyUnJ3Wjc4aFRTZWxzNFp2M1cwaitIWVVhTlRobHQvajBPcm1OM0FvWUhUanJydUx3MWplY1ZNKzgzeGEranJtUlMyWjk0REM1M281cHpaQlkxR1pqSDRjclhSUkhHeWoxYnBCOUJxYTVlSUhtSFF6RUFuYko3a0x6OUtZYU44MUk5T0labGs2N3p0QXZCeWhCdjVGUFBLNmhsRHYxcEpvVndlTWQ1M2tuemVDVHh1ZGxIek5nczUwR1lRSHdqUzVJOWVtTFJFbmw4Z29uSTg0Q0RrODVIT1kyaVFiMmwvOCs0aCtrRW5ueTRnUXFyRjJ1UENpQ1Z6Skpvdm95V1Jzemp0NFNNenZST1NRMGU3V1ZPa09tZU5zWTNJZDBoVkM0c2plRm82QTYxQ2I5VGtIK3AwUlpsRlcrdTBaWS8zRS9sc3FwUkhZcFZnczVvYitYUzdLbTJrRE9FblJYRS94SnB5aUVXcjlSTmJHOUYzNmJUUEZud2l4cnNaSlNKUHg0U3g1N0hGVmsydm40SnZOOGdYOVpQc3VBYjVrdFgrZmlLZlBhMHBTZ0ZIRGx1M0xHNHhtVWU5TUtMUmJhV3lLWkZOZTZWU0NsckZUSUZ1YzBRaUJUVEhxd2JaR2VjbjhtV2pTM1E4bnlHN2o3L3JlTnhsTTFleGVBb2JhaitnSjdmODR1U2JBcUtSSEVBS2FGSnlhR21aQVZ0ekNPRGNIZklGZ1BrYThpeVQ3OWFmcUFZZVBiS0tCWUd6Y3dwSXhLZlFlZVM2NTBJRHNQdms4LzBGcDM2QXlHb0lTajVObTVwbU5tWWtJOGtDVWJRNU5aZjdDcXIyaG9oNXdtTm9RZHoxNHBqWEFyQjIrSVJuRnhnb2FyelhPVjlBbFRFa0tQbWltRVV3aWN4MWQvRURQQ21hcmUzcXZPdFFsR2tvMFR5aWtUemk4Ynl0dXJLV1JIbWpINnFXZ3FyUzA0SzFRYWNvUDJPZzd4czNxQ2I1WVhmNGxsZEdvZXUweFZsOW5OSmVtT1FYMXBOWUs1ZzY0MDE1ZER4djd6dzdyNGdRSmtJOEhjTWY1L2hqR1IxemMrNUhDMmt0aVFuMGRrMkpxckNNbzhmbjllSW5sdTg4Nm96ZFQvdGhrdS9MYTR4UW1PU0xZR0ZQR29UTTQ5V1RHUkV4eHpGejg1OUNWYzEyTjM5UHdnbWE1UE9HQjBKaEk3d1RrUjhVODI2U2I5ZTNrTFZITXBDY3lhZDdCdDEzd25xY2J0Y2tBWWNGeDNhZTNTUWZ5R05vNE1OQTlvVVcrUjRwSXhCSVZ2Z2drLy9uN1N4MHZjOXdSelE2amM3REUxSjFDaFdtdGM1L0Q4NmlXRW96cmwzSDBNQTdianc1UjM0c2RnTktKTHpJajBTVzBOTjFvdzdNVGphWHZGYnNkbTU5ZG1sOThkODNzYmIyWlIyczZ0MUZ6dUwvaUpKSE5GcEF1V1FXdEJwdEJLbjl0bmNrc2RoMW5Eemgra2VXbmR2em5mYTBnMHcrWmYzMm5WR1V5MmU5MXFYVTc5VFh4MS80VFB5Y3Z4MGdXTVFOOHMxLy9mQk0wdjdFNnVPMDVSOUxVbXdiZzVmUWtwZ1NQUzZha1U4QnlGd3R5b0tqRFF1N3RGODdEOHYwK0VWMU8rbDBrcTlkakd5SEh3NjFUWHRkdEd6dTNjdXJ3NXZORzYyU1JFVXpVN3dkWmhMSkc4MmdRMjB6c3JYQy93YUF0NGd2UGFQZ0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUg4QUFBQWRDQVlBQUFDRGdiTkNBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFCa2xKUkVGVWFFUHRXanRzSEZVVVBYZG5kNTExdkxLVkZMZ0RLU2xDaFNtZ0lSS2tTcHFJZ2hSVUpFMnF1SEFxRUFJQkFvbDBTZUYwRkRGMWtDaEpCVWlwb0hHcU5JNUVPa2RLWXEvVzYvVm5aeCs2Tzk1NW41Mlo5NWwxSE1NK3laTEg4KzduM2ZQdWQwdzRXRUtJandEOFBud0c4QjBSZmFzOGUvMHFoQkFLd1o5RXhQd0hTd2d4QitBZEw0YWptNThTMFQvcW56UE9jSk9JN2hUSkVVSXNBSmd0cVF1VHQ0aG9WVG5qcndBK0hqNFRFU252M2dMd1pnbVptaXlGNzZaeUZzM21XYkpVaFY0bCtLYXNFRHVzRU5FMUMvaldDeXlFK0FQQWh5RUtHRFRtQmRmNEd1Q3pVMzFUUW1ZbXNFVU81d3QrQ2QxR1NFM0RqQVA4RVFPRVJLOEorRWtvSGdjZ2VSZkdCSjlETFlmamtQRC9GQUNIKzNzQTJMdXVLa0k1bktyUndNWHpXUS9XSjlUN2gvcXNFdEdTRW9LUHRlZnpvUmlja0h6NHlNanB1ZmxIQ0dHR3dBdEV4SVliMWdkRlJyUmRXQ3Y0UnRvbzFPV2dYc210WlF4ZVpqcDVkMWdUMk00Y0duTEhHZmE5REdjcTdLcUl6UkJtV0RaeTUzRUNQNzNVdGpPL0R1QnpXT1dmdk1YRm91b0Y1cjdVZXdFY2x1ZmIwb2ZYQlhZQnhlTlNtNTUvck1BUHZZQlpkSWNDZmthMEtkV3hsQUhmdUJSWk5waUFud0ZZY002ZmdLOWJ3RFVxRGFsSVBIOStidkRRYko1RHJmYmxPTjA5NVNYRVkyeHMvSmpKZTI1dUVWRjBJMzIzczNNVm5jNWY2Zk9wVXorRDZMMzArY1dMdDNOMVBIbnlmWnc0c1pLK2orTzcyTnhjZGo2VFRSZG1kUHIwWStWY2YrUGx5ODhHeityZnN3U3E1M0tSNDZ5MHNqRlB0eHhlSkRZMjBzbGJpTHpTTk0zbU5VU1JiTmQyZDIraTIwMG5aWmlkdlFNaU9RM2MzTHlRSzdQUldNRFUxRzBGL0JXMDIwVjFpODdLcGd2dm5wdVRVMUFoSHFIVlN0cTc2ZWxMaUtMNWxHR2xjZ2xFYjZUUDZybE1PZnY3eStqMzE3eHQyZTF5VnlWWG5tNjU0Ty9zTEtGYUxUdHFkZGU3M1phZXlWUTJneGVCWDYrZlJhTWhvd1l3QTZLelJ3SythUUZUN3lMdzNhMm43elFkd1J2OFh1K2U1bm1oaXJqU21RcVhBZC8wZEZPSE9INTFuajhCMytFR01QalY2anhxdFNRa1ZxdFhFRVhuRlcvOURjQzZFVDVsT04zYit3cENiQ0dPTzRpaUdTM01oNERQSGlwYjFua1FTVmxDY0NqZTB0Z1NjWHVaTE5ZRGtPRzYxYnFadml2eWZFNFJ0ZG9sQUN4UHBnWUg4eDNJN1F6a0RsUE9rTTdiODVPd0x3OWtVOERNWlhIOFFBUExSczg1MlBSMkcwM1dlODYzbmM0dE5CcHN4T0dhUnhSZFZDNlMzZk5WZzRYb29kS29VYTBJL0xKeTh1aTl3ZmN0K01aeHFIR0JiOTc4a0lMdnZ3UitzN21JU2lXcGVYcTloK2gwN2hmZE0xbnRzK0ZjQ3IvRTgyVm9qR005VE9kSlV3czlHZmJDZllDcjQzWmJiK05Dd09lTE9LNmxkaGFtazJ4dlg4ZmVucjJpNTFSV3I1OEIwUXlpU0JhdldUckc4ZG9nOWV6dFBVRWM2K25KNFV3Uy9IRjRZNUhBb2hiTlFWR25MU0hnT3pFTzJPVFRvbklOMUdoY2hPbFlQbUtGV0VlLy94RGQ3aS9vOVdUTlZNQmpBcjZQZ1gzMnVvS2ZSTUViQTA4ZjE0cmplekJiNmd6ZUV2eWtBcGZodkt3aTlmb2lpTTZrYlBJOFh6MDgzOTV1OTJ1bjhKaWxYMW5QNTV3WlJaOE1XSE9sMzJwZER6YURDL2hGclNvWHRMeVM0WThaMG1mUzNBNmNCZEhKRVQzMzkrKzY1L3pnVStZUXVoeWVTVzE5dm85ZVNmaVUxWCt2dDZwTkMyMjhYSFcyOGVIMzVzUXZhOUxZYlA2QUtQb2daY2VBZDd2TDNwZWZoMTFUVXp3cFZYbHRvZFc2WEtUcTBZZjljWUx2QWtyUm5uR0M3NktMM3BvOVE2djFxUXRaN2g3UFRrd0ZYNytGcGJUSUlNNEwreFB3RTJPcDN3bENiZTlwU3dtK2VXdUVlSktSYTBMVndzZzBhc2pKVStGd0JSd29qOWJ6eTlVWVNRcjlRaHR5bVIvSkRCUGtnMjhoZERDbDI1Yi9NL2l6c3o5cFJYRWMzMGU3ZmRmTmNNYXU2ZW56cU5lLzEvN2FibDh1NnYvendRLzl6SmluT2MvaXM0WWNKdmo2UEowcjJmQVdTSWhWcVBOMm0xVkhvNS84dEt6TzlHMTh6UGM4aU9uM0g0d01wYmdvck5jLzE3WW5lMW51R3ZwOS9qMTdNTVNEdHVRVDhqd3FsUVZ0OE1ZTWVlemVidDl5Sy9qTWcvc2UwTFkvTDZlOVRzT2x3N1JCL3ZuMVVHMnpvOHQ3VHRsYlcwdTJxWjlhOE1rZTEwV0E3NTRKK1BJZlAwemJjY2l1MWE1by83VGlhOStrYUh5R1h1KytyYjhmc2pabisrNWY5M3lWaStOMWJHL3pkd0I5RFlkTC9FR2lVZ2tQOFZuNjVNbk0wNTM3Wlo2dCszemxkTFhEN3U1RGEvK2VmS0plT0pqcHE0T2NiQ245UG85eDE4SG43UFhXclB3Tkx2OENhRDExZ00wT3REVUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgQ29tbW9uQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uQ29tcCc7XHJcbmltcG9ydCBDdXJyZW50U3RhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9DdXJyZW50U3RhdGUnO1xyXG5pbXBvcnQgU2VsZWN0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1NlbGVjdENhcmQnXHJcbmltcG9ydCBiYWNrZ3JvdW5kSW1nIGZyb20gJy4uL2RhdGEvaW1nL3NlbGVjdF9iZy5wbmcnO1xyXG5pbXBvcnQgcmV3b3JkVGl0bGUgZnJvbSAnLi4vZGF0YS9pbWcvcmV3b3JkX3RpdGxlLnBuZyc7XHJcbmltcG9ydCBzZWxlY3RHcmFwaFRpdGxlIGZyb20gJy4uL2RhdGEvaW1nL3NlbGVjdF9ncmFwaC5wbmcnO1xyXG5pbXBvcnQgZ3JhcGhCdWJibGUgZnJvbSAnLi4vZGF0YS9pbWcvc2VsZWN0X2dyYXBoX2J1YmJsZS5wbmcnO1xyXG5cclxuY29uc3QgU2VsZWN0UGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJhY2tncm91bmRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8VG9wV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxUb3BMZWZ0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmV3b3JkVGl0bGV9IGFsdD17cmV3b3JkVGl0bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpblRleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAyMDIw64WEIO2VnCDtlbTrpbwg64uk7KCV7ZWY6rKMIOyxhOybjOyjvOyboOuNmCDrp4zrgqjrk6TsnYQg66as66eI7J2465OcIO2VtOuztOyEuOyalC48YnIvPiDrp4zrgqgg7IaN7JeQ7IScIOuLueyLoOydgCDslrTrlqQg7Y6Y7J2066W8IO2VtOyYpOyFqOuCmOyalD8gPGJyLz7quLDsgagsIOuLpOygle2VqCwg6rCQ7IKs7ZWoLCDrtojtjrjtlojrjZgg6rCQ7KCVIOuTpCDspJEg64u57Iug7J20IOuKkOq8iOuNmCDqsJDsoJXsnYQg64KY64iE7Ja07KO87IS47JqULlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWFpblRleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvVG9wTGVmdFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8VG9wUmlnaHRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDdXJyZW50U3RhdGUvPlxyXG4gICAgICAgICAgICAgICAgPC9Ub3BSaWdodFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvVG9wV3JhcHBlcj5cclxuICAgICAgICAgICAgPE1pZGRsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8TWlkZGxlTGVmdFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENhcmRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q2FyZCBpZD1cImpveVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdENhcmRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDYXJkV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENhcmQgaWQ9XCJraW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Q2FyZFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENhcmRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q2FyZCBpZD1cInRoYW5rc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdENhcmRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDYXJkV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENhcmQgaWQ9XCJ1blwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdENhcmRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9NaWRkbGVMZWZ0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxNaWRkZWxSaWdodFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyYXBoVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzZWxlY3RHcmFwaFRpdGxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmFwaFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmFwaFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhCdWJibGVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtncmFwaEJ1YmJsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjY1JTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JhcGhCdWJibGVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhGdW5jdGlvbkpveT48L0dyYXBoRnVuY3Rpb25Kb3k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyYXBoQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaFN1YlRpdGxlPuq4sOyBqDwvR3JhcGhTdWJUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmFwaENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhCdWJibGVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtncmFwaEJ1YmJsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjY1JTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JhcGhCdWJibGVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhGdW5jdGlvbktpbmQ+PC9HcmFwaEZ1bmN0aW9uS2luZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JhcGhCYWNrZ3JvdW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoU3ViVGl0bGU+64uk7KCVPC9HcmFwaFN1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyYXBoQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaEJ1YmJsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dyYXBoQnViYmxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+NjUlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmFwaEJ1YmJsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhCYWNrZ3JvdW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaEZ1bmN0aW9uVGhhbmtzPjwvR3JhcGhGdW5jdGlvblRoYW5rcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JhcGhCYWNrZ3JvdW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoU3ViVGl0bGU+6rCQ7IKsPC9HcmFwaFN1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyYXBoQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaEJ1YmJsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dyYXBoQnViYmxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+NjUlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmFwaEJ1YmJsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhCYWNrZ3JvdW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaEZ1bmN0aW9uVW4+PC9HcmFwaEZ1bmN0aW9uVW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyYXBoQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaFN1YlRpdGxlPuu2iO2OuDwvR3JhcGhTdWJUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmFwaENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmFwaFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8L01pZGRlbFJpZ2h0V3JhcHBlcj5cclxuICAgICAgICAgICAgPC9NaWRkbGVXcmFwcGVyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Rlc3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIGJvdHRvbSA6IDYwLCByaWdodCA6IDEyMH19PlxyXG4gICAgICAgICAgICAgICAgPENvbW1vbkJ1dHRvbiB0aXRsZT1cIuyLoOyyre2VmOq4sFwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9CYWNrZ3JvdW5kV3JhcHBlcj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgQmFja2dyb3VuZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7YmFja2dyb3VuZEltZ30pO1xyXG4gICAgd2lkdGggOiAxOTIwcHg7XHJcbiAgICBoZWlnaHQgOiA5ODBweDtcclxuICAgIHRvcCA6IDA7XHJcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xyXG5gXHJcblxyXG5jb25zdCBUb3BXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoIDogMTIwMHB4O1xyXG4gICAgbWFyZ2luIDogMTAwcHggYXV0byA1OXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudCA6IHNwYWNlLWJldHdlZW47XHJcbmBcclxuXHJcbmNvbnN0IFRvcExlZnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXkgOiBibG9jaztcclxuYFxyXG5cclxuY29uc3QgVG9wUmlnaHRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXkgOiBibG9jaztcclxuICAgIGZsb2F0IDogcmlnaHQ7XHJcbmBcclxuXHJcbmNvbnN0IE1haW5UZXh0U3R5bGUgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc2l6ZSA6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodCA6IDIycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZyA6IC0wLjQ4cHg7XHJcbiAgICBtYXJnaW46MzBweCAwIDAgMDtcclxuICAgIHdpZHRoIDogNjUwcHg7XHJcbmBcclxuXHJcbmNvbnN0IE1pZGRsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGggOiAxMjAwcHg7XHJcbiAgICBtYXJnaW4gOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5IDogZmxleDtcclxuYFxyXG5cclxuY29uc3QgTWlkZGxlTGVmdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGggOiA3NTBweDtcclxuYFxyXG5cclxuY29uc3QgU2VsZWN0Q2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLWJvdHRvbSA6IDMxcHg7XHJcbmBcclxuXHJcbmNvbnN0IE1pZGRlbFJpZ2h0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aCA6IDMzNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQgOiAxMTZweDtcclxuYFxyXG5cclxuY29uc3QgR3JhcGhUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aCA6IDE5M3B4O1xyXG4gICAgaGVpZ2h0IDogNTVweDtcclxuICAgIG1hcmdpbiA6IDQ3cHggMCA1OXB4IDEwMHB4O1xyXG5gXHJcblxyXG5jb25zdCBHcmFwaFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheSA6IGZsZXg7XHJcbmBcclxuXHJcbmNvbnN0IEdyYXBoQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aCA6IDY3cHg7XHJcbiAgICBtYXJnaW4gOiAwIDIycHggMCAwO1xyXG5gXHJcblxyXG5jb25zdCBHcmFwaEJ1YmJsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoIDogNjdweDtcclxuICAgIGhlaWdodCA6IDQxcHg7XHJcblxyXG4gICAgJiA+IHAge1xyXG4gICAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wIDogMDtcclxuICAgICAgICBtYXJnaW4gOiAwO1xyXG4gICAgICAgIGNvbG9yIDogI2ZmN2I3YjtcclxuICAgICAgICBsaW5lLWhlaWdodCA6IDM0cHg7XHJcbiAgICAgICAgd2lkdGggOiA2N3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IEdyYXBoQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogd2hpdGU7XHJcbiAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1cyA6IDgwcHg7XHJcbiAgICB3aWR0aCA6IDI5cHg7XHJcbiAgICBoZWlnaHQgOiAyNzZweDtcclxuICAgIGJvcmRlcjogc29saWQgMS41cHggIzZiNGQ0ZDtcclxuICAgIG1hcmdpbiA6IDMwcHggYXV0byAyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBHcmFwaEZ1bmN0aW9uID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4IDogOTk5O1xyXG4gICAgd2lkdGggOiAyMXB4O1xyXG4gICAgYm90dG9tIDogM3B4O1xyXG4gICAgbGVmdCA6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXMgOiAyMHB4IDIwcHggNDBweCA0MHB4O1xyXG5gXHJcblxyXG5jb25zdCBHcmFwaEZ1bmN0aW9uSm95ID0gc3R5bGVkKEdyYXBoRnVuY3Rpb24pYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6ICNmZjkwOGE7XHJcbiAgICBoZWlnaHQgOiA2NSU7XHJcbmBcclxuXHJcbmNvbnN0IEdyYXBoRnVuY3Rpb25LaW5kID0gc3R5bGVkKEdyYXBoRnVuY3Rpb24pYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6ICNmZmUxZTk7XHJcbiAgICBoZWlnaHQgOiA2NSU7XHJcbmBcclxuXHJcbmNvbnN0IEdyYXBoRnVuY3Rpb25UaGFua3MgPSBzdHlsZWQoR3JhcGhGdW5jdGlvbilgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2ZmZjhkOTtcclxuICAgIGhlaWdodCA6IDY1JTtcclxuYFxyXG5cclxuY29uc3QgR3JhcGhGdW5jdGlvblVuID0gc3R5bGVkKEdyYXBoRnVuY3Rpb24pYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6ICNkZWYzZmY7XHJcbiAgICBoZWlnaHQgOiA2NSU7XHJcbmBcclxuXHJcbmNvbnN0IEdyYXBoU3ViVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gICAgZm9udC1zaXplIDogMjBweDtcclxuICAgIGNvbG9yIDogIzMzMzMzMztcclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFBhZ2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==