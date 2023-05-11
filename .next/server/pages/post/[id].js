module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+6GR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backUrl; });
const backUrl = true ? 'http://api.shinyoungyou.com' : undefined;

/***/ }),

/***/ "+fgB":
/***/ (function(module, exports) {

module.exports = require("@mui/lab");

/***/ }),

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__("cDcd"));
var _router = __webpack_require__("nOHt");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (false) {}
  return WithRouterWrapper;
}

/***/ }),

/***/ "0HQ6":
/***/ (function(module, exports) {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "0a3R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kQFM");
/* harmony import */ var _store_thunks_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("NFOm");
/* harmony import */ var _store_thunks_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("T1QK");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("QLIw");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ikY9");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;










const Post = () => {
  const {
    singlePost
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.post);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    id
  } = router.query;
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, singlePost && __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx("title", null, singlePost.User.username, "\uB2D8\uC758 \uAE00"), __jsx("meta", {
    name: "description",
    content: singlePost.content
  }), __jsx("meta", {
    property: "og:title",
    content: `${singlePost.User.username}님의 게시글`
  }), __jsx("meta", {
    property: "og:description",
    content: singlePost.content
  }), __jsx("meta", {
    property: "og:image",
    content: singlePost.Images[0] ? singlePost.Images[0].src : 'https://nodebird.com/favicon.ico'
  }), __jsx("meta", {
    property: "og:url",
    content: `https://nodebird.com/post/${id}`
  })), singlePost && (singlePost.Retweet ? __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    post: singlePost.Retweet,
    posts: [singlePost],
    retweetingPostId: singlePost.id,
    key: singlePost.id
  }) : __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    post: singlePost,
    posts: [singlePost],
    retweetingPostId: null
  })));
};
const getServerSideProps = _store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getServerSideProps(async context => {
  var _context$params;
  const cookie = context.req ? context.req.headers.cookie : '';
  axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.headers.Cookie = '';
  if (cookie) {
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.headers.Cookie = cookie;
  }
  await context.store.dispatch(Object(_store_thunks_user__WEBPACK_IMPORTED_MODULE_3__[/* loadMyInfo */ "e"])());
  await context.store.dispatch(Object(_store_thunks_post__WEBPACK_IMPORTED_MODULE_4__[/* loadSinglePost */ "h"])({
    id: parseInt((_context$params = context.params) === null || _context$params === void 0 ? void 0 : _context$params.id)
  }));
  console.log(context.req);
});
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "1S8B":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Backspace");

/***/ }),

/***/ "1miI":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/FavoriteBorder");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

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

/***/ "2WPw":
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0a3R");


/***/ }),

/***/ "3Vz+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_thunks_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("NFOm");
/* harmony import */ var _store_reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("B9iI");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("yZmr");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("zWBi");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("+fgB");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;








const UserProfile = ({
  user,
  maxWidth
}) => {
  const {
    my,
    logOutLoading,
    profileMenu
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.user);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const handleLogout = () => {
    dispatch(Object(_store_thunks_user__WEBPACK_IMPORTED_MODULE_1__[/* logOut */ "h"])());
  };
  const RedirectToHome = () => {
    router.push('/');
  };
  const RedirectToProfile = () => {
    router.push('/profile');
  };
  return __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    sx: {
      maxWidth,
      margin: '8px 0'
    }
  }, __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], {
    avatar: __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Avatar"], {
      alt: user.username,
      src: "/static/images/avatar/1.jpg",
      sx: {
        bgcolor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_6__["blue"][500]
      },
      "aria-label": "recipe"
    }),
    action: (my === null || my === void 0 ? void 0 : my.id) == user.id && __jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_7__["LoadingButton"], {
      onClick: handleLogout,
      variant: "outlined",
      loading: logOutLoading,
      style: {
        margin: '4px 8px'
      }
    }, "Log Out"),
    title: user.username
  }), __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__["CardActions"], null, __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    sx: {
      width: 500
    }
  }, __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__["BottomNavigation"], {
    showLabels: true,
    value: profileMenu,
    onChange: (event, newValue) => {
      dispatch(Object(_store_reducers_user__WEBPACK_IMPORTED_MODULE_2__[/* navigateProfile */ "c"])(newValue));
    }
  }, __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__["BottomNavigationAction"], {
    onClick: RedirectToHome,
    label: "Tweets",
    icon: user.Posts ? user.Posts.length : 0
  }), __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__["BottomNavigationAction"], {
    onClick: RedirectToProfile,
    label: "Following",
    icon: user.Followings ? user.Followings.length : 0
  }), __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__["BottomNavigationAction"], {
    onClick: RedirectToProfile,
    label: "Followers",
    icon: user.Followers ? user.Followers.length : 0
  })))));
};
/* harmony default export */ __webpack_exports__["a"] = (UserProfile);

/***/ }),

/***/ "3WeD":
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

/***/ "4DCN":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));
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

/***/ "9lrK":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Edit");

/***/ }),

/***/ "As4N":
/***/ (function(module, exports) {

module.exports = require("@mui/material/ImageListItem");

/***/ }),

/***/ "B9iI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addPostToMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removePostToMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return navigateProfile; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JMOJ");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _thunks_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("NFOm");



const userSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'user',
  initialState: {
    loadMyInfoLoading: false,
    loadMyInfoDone: false,
    loadMyInfoError: null,
    loadSingleUserLoading: false,
    loadSingleUserDone: false,
    loadSingleUserError: null,
    logInLoading: false,
    logInDone: false,
    logInError: null,
    logOutLoading: false,
    logOutDone: false,
    logOutError: null,
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
    changeUsernameLoading: false,
    changeUsernameDone: false,
    changeUsernameError: null,
    loadFollowingsLoading: false,
    loadFollowingsDone: false,
    loadFollowingsError: null,
    followLoading: false,
    followDone: false,
    followError: null,
    unfollowLoading: false,
    unfollowDone: false,
    unfollowError: null,
    loadFollowersLoading: false,
    loadFollowersDone: false,
    loadFollowersError: null,
    removeFollowerLoading: false,
    removeFollowerDone: false,
    removeFollowerError: null,
    profileMenu: 0,
    my: null,
    singleUser: null,
    User: []
  },
  reducers: {
    addPostToMe(state, action) {
      state.my.Posts.unshift({
        id: action.payload
      });
    },
    removePostToMe(state, action) {
      state.my.Posts = state.my.Posts.filter(post => post.id !== action.payload.id);
    },
    navigateProfile(state, action) {
      state.profileMenu = action.payload;
    }
  },
  extraReducers(builder) {
    // builder.addCase(HYDRATE, (state, action) => {
    //   return {
    //     ...state,
    //     ...action.payload.user,
    //   }
    // })
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* loadMyInfo */ "e"].pending, (state, action) => {
      state.loadMyInfoLoading = true;
      state.loadMyInfoDone = false;
      state.loadMyInfoError = null;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* loadMyInfo */ "e"].fulfilled, (state, action) => {
      state.loadMyInfoLoading = false;
      state.my = action.payload;
      state.loadMyInfoDone = true;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* loadMyInfo */ "e"].rejected, (state, action) => {
      state.loadMyInfoLoading = false;
      state.loadMyInfoError = action.payload;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* loadSingleUser */ "f"].pending, (state, action) => {
      state.loadSingleUserLoading = true;
      state.loadSingleUserDone = false;
      state.loadSingleUserError = null;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* loadSingleUser */ "f"].fulfilled, (state, action) => {
      state.loadSingleUserLoading = false;
      state.singleUser = action.payload;
      state.loadSingleUserDone = true;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* loadSingleUser */ "f"].rejected, (state, action) => {
      state.loadSingleUserLoading = false;
      state.loadSingleUserError = action.payload;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* logIn */ "g"].pending, (state, action) => {
      state.logInLoading = true;
      state.logInDone = false;
      state.logInError = null;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* logIn */ "g"].fulfilled, (state, action) => {
      state.logInLoading = false;
      state.my = action.payload;
      state.logInDone = true;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* logIn */ "g"].rejected, (state, action) => {
      state.logInLoading = false;
      state.logInError = action.payload;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* logOut */ "h"].pending, (state, action) => {
      state.logOutLoading = true;
      state.logOutDone = false;
      state.logOutError = null;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* logOut */ "h"].fulfilled, (state, action) => {
      state.my = null;
      state.logOutLoading = false;
      state.logOutDone = true;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* logOut */ "h"].rejected, (state, action) => {
      state.logOutLoading = false;
      state.logOutError = action.payload;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* signUp */ "j"].pending, (state, action) => {
      state.signUpLoading = true;
      state.signUpDone = false;
      state.signUpError = null;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* signUp */ "j"].fulfilled, (state, action) => {
      state.signUpLoading = false;
      state.signUpDone = true;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* signUp */ "j"].rejected, (state, action) => {
      state.signUpLoading = false;
      state.signUpError = action.payload;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* changeUsername */ "a"].pending, (state, action) => {
      state.changeUsernameLoading = true;
      state.changeUsernameDone = false;
      state.changeUsernameError = null;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* changeUsername */ "a"].fulfilled, (state, action) => {
      state.my.username = action.payload.username;
      state.changeUsernameLoading = false;
      state.changeUsernameDone = true;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* changeUsername */ "a"].rejected, (state, action) => {
      state.changeUsernameLoading = false;
      state.changeUsernameError = action.payload;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* loadFollowings */ "d"].pending, (state, action) => {
      state.loadFollowingsLoading = true;
      state.loadFollowingsDone = false;
      state.loadFollowingsError = null;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* loadFollowings */ "d"].fulfilled, (state, action) => {
      state.loadFollowingsLoading = false;
      state.my.Followings = action.payload || [];
      state.loadFollowingsDone = true;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* loadFollowings */ "d"].rejected, (state, action) => {
      state.loadFollowingsLoading = false;
      state.loadFollowingsError = action.payload;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* follow */ "b"].pending, (state, action) => {
      state.followLoading = true;
      state.followDone = false;
      state.followError = null;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* follow */ "b"].fulfilled, (state, action) => {
      state.my.Followings.unshift({
        id: action.payload.id,
        username: action.payload.username
      });
      state.followLoading = false;
      state.followDone = true;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* follow */ "b"].rejected, (state, action) => {
      state.followLoading = false;
      state.followError = action.payload;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* unfollow */ "k"].pending, (state, action) => {
      state.unfollowLoading = true;
      state.unfollowDone = false;
      state.unfollowError = null;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* unfollow */ "k"].fulfilled, (state, action) => {
      state.my.Followings = state.my.Followings.filter(user => user.id !== action.payload.id);
      state.unfollowLoading = false;
      state.unfollowDone = true;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* unfollow */ "k"].rejected, (state, action) => {
      state.unfollowLoading = false;
      state.unfollowError = action.payload;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* loadFollowers */ "c"].pending, (state, action) => {
      state.loadFollowersLoading = true;
      state.loadFollowersDone = false;
      state.loadFollowersError = null;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* loadFollowers */ "c"].fulfilled, (state, action) => {
      state.loadFollowersLoading = false;
      state.my.Followers = action.payload || [];
      state.loadFollowersDone = true;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* loadFollowers */ "c"].rejected, (state, action) => {
      state.loadFollowersLoading = false;
      state.loadFollowersError = action.payload;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* removeFollower */ "i"].pending, (state, action) => {
      state.removeFollowerLoading = true;
      state.removeFollowerDone = false;
      state.removeFollowerError = null;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* removeFollower */ "i"].fulfilled, (state, action) => {
      state.my.Followers = state.my.Followers.filter(user => user.id !== action.payload.id);
      state.removeFollowerLoading = false;
      state.removeFollowerDone = true;
    });
    builder.addCase(_thunks_user__WEBPACK_IMPORTED_MODULE_2__[/* removeFollower */ "i"].rejected, (state, action) => {
      state.removeFollowerLoading = false;
      state.removeFollowerError = action.payload;
    });
  }
});
const {
  addPostToMe,
  removePostToMe,
  navigateProfile
} = userSlice.actions;
/* harmony default export */ __webpack_exports__["b"] = (userSlice);

/***/ }),

/***/ "Bsp/":
/***/ (function(module, exports) {

module.exports = require("@mui/material/ImageList");

/***/ }),

/***/ "DAZz":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Delete");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "JhnM":
/***/ (function(module, exports) {

module.exports = require("@mui/material/Tooltip");

/***/ }),

/***/ "Ko8R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+6GR");


axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = _config_config__WEBPACK_IMPORTED_MODULE_1__[/* backUrl */ "a"];
axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _config_config__WEBPACK_IMPORTED_MODULE_1__[/* backUrl */ "a"],
  // cors
  withCredentials: true // cookie (user info)
});
// instance.interceptors.request.use(function (instance) {
//   const kakao_authorization = localStorage.getItem("kakao_authorization");
//   const Token = localStorage.getItem("Authorization");
//   const Retoken = localStorage.getItem("refresh-Token");
//   instance.headers["Authorization"] = Token;
//   instance.headers["refresh-Token"] = Retoken;
//   instance.headers["kakao_authorization"] = kakao_authorization;
//   return instance;
// });

/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),

/***/ "NFOm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loadMyInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return loadSingleUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return logIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changeUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loadFollowings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return follow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return unfollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadFollowers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return removeFollower; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ko8R");


const pause = duration => {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
};
const loadMyInfo = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('user/loadMyInfo', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get('user/');
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const loadSingleUser = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('user/loadSingleUser', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(`user/${payload.id}`);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const logIn = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('user/logIn', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post('user/login', payload);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const logOut = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('user/logOut', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post('user/logout');
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const signUp = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('user/signUp', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post('user/', payload);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const changeUsername = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('user/changeUsername', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].patch('user/profile', payload);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const loadFollowings = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('user/loadFollowings', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get('user/followings');
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const follow = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('user/follow', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].put(`user/following/${payload.id}`, payload);
    // await pause(1000);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const unfollow = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('user/unfollow', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].delete(`user/following/${payload.id}`);
    // await pause(1000);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const loadFollowers = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('user/loadFollowers', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get('user/followers');
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const removeFollower = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('user/removeFollower', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].delete(`user/follower/${payload.id}`);
    // await pause(1000);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

/***/ }),

/***/ "NV0Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SearchIconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return StyledInputBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return StyledMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandMore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0HQ6");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yZmr");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const Search = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["styled"])("div")(({
  theme
}) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["alpha"])(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["alpha"])(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));
const SearchIconWrapper = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["styled"])("div")(({
  theme
}) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));
const StyledInputBase = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["styled"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["InputBase"])(({
  theme
}) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));
const StyledMenu = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["styled"])(props => __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Menu"], _extends({
  elevation: 0,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right'
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'right'
  }
}, props)))(({
  theme
}) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["alpha"])(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    }
  }
}));
const ExpandMore = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["styled"])(props => {
  const {
      expand
    } = props,
    other = _objectWithoutProperties(props, ["expand"]);
  return __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__["IconButton"], other);
})(({
  theme,
  expand
}) => ({
  // transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

/***/ }),

/***/ "OcMG":
/***/ (function(module, exports) {



/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "P8OX":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/ModeCommentOutlined");

/***/ }),

/***/ "QLIw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./store/thunks/user.ts
var user = __webpack_require__("NFOm");

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__("yZmr");

// EXTERNAL MODULE: external "@mui/icons-material"
var icons_material_ = __webpack_require__("dud1");

// EXTERNAL MODULE: external "@mui/lab"
var lab_ = __webpack_require__("+fgB");

// EXTERNAL MODULE: external "@mui/material/Alert"
var Alert_ = __webpack_require__("wS+f");
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert_);

// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__("SUlt");
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);

// CONCATENATED MODULE: ./components/LoginForm.tsx
var __jsx = external_react_default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









const LoginForm = () => {
  const {
    logInLoading,
    logInDone,
    logInError
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: form,
    1: setForm
  } = Object(external_react_["useState"])({
    email: "",
    pass: ""
  });
  const {
    email,
    pass
  } = form;
  const {
    0: showPassword,
    1: setShowPassword
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    if (logInDone) {
      setForm({
        email: "",
        pass: ""
      });
    }
  }, [logInDone]);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleChange = Object(external_react_["useCallback"])(e => {
    const {
      name,
      value
    } = e.target;
    setForm(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  }, [form]);
  const handleSubmit = Object(external_react_["useCallback"])(e => {
    e.preventDefault();
    dispatch(Object(user["g" /* logIn */])(form));
  }, [form]);
  return __jsx(material_["Box"], {
    sx: {
      display: "flex",
      flexWrap: "wrap"
    }
  }, __jsx("form", {
    onSubmit: handleSubmit
  }, __jsx(material_["FormControl"], {
    sx: {
      m: 1,
      width: "100%"
    },
    variant: "outlined",
    style: {
      marginBottom: "4px"
    }
  }, __jsx(material_["InputLabel"], {
    htmlFor: "Email"
  }, "Email"), __jsx(material_["OutlinedInput"], {
    type: "email",
    name: "email",
    value: email,
    onChange: handleChange,
    id: "Email",
    label: "Email"
  })), __jsx(material_["FormControl"], {
    sx: {
      m: 1,
      width: "100%"
    },
    variant: "outlined",
    style: {
      marginTop: "4px"
    }
  }, __jsx(material_["InputLabel"], {
    htmlFor: "Password"
  }, "Password"), __jsx(material_["OutlinedInput"], {
    type: showPassword ? "text" : "password",
    name: "pass",
    value: pass,
    onChange: handleChange,
    id: "Password",
    endAdornment: __jsx(material_["InputAdornment"], {
      position: "end"
    }, __jsx(material_["IconButton"], {
      "aria-label": "toggle password visibility",
      onClick: handleClickShowPassword,
      onMouseDown: handleMouseDownPassword,
      edge: "end"
    }, showPassword ? __jsx(icons_material_["VisibilityOff"], null) : __jsx(icons_material_["Visibility"], null))),
    label: "Password"
  })), logInError && __jsx(Stack_default.a, {
    sx: {
      mx: 1,
      width: '100%'
    },
    spacing: 2
  }, __jsx(Alert_default.a, {
    severity: "error"
  }, logInError)), __jsx(material_["ButtonGroup"], {
    "aria-label": "outlined button group",
    style: {
      width: '100%',
      margin: '0 8px'
    }
  }, __jsx(lab_["LoadingButton"], {
    type: "submit",
    variant: "contained",
    loading: logInLoading
  }, "Login"), __jsx(material_["Button"], {
    variant: "outlined"
  }, __jsx(link_default.a, {
    href: "/signup"
  }, __jsx("a", {
    style: {
      textDecoration: 'none',
      color: '#1976d2'
    }
  }, "Sign Up"))))));
};
/* harmony default export */ var components_LoginForm = (LoginForm);
// EXTERNAL MODULE: ./components/UserProfile.tsx
var UserProfile = __webpack_require__("3Vz+");

// EXTERNAL MODULE: ./styles/index.js
var styles = __webpack_require__("NV0Y");

// EXTERNAL MODULE: external "@mui/icons-material/Search"
var Search_ = __webpack_require__("qJU1");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);

// EXTERNAL MODULE: external "@mui/icons-material/AccountCircle"
var AccountCircle_ = __webpack_require__("uJZ4");
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_);

// EXTERNAL MODULE: ./node_modules/@fontsource/public-sans/index.css
var public_sans = __webpack_require__("OcMG");

// CONCATENATED MODULE: ./components/AppLayout.tsx
var AppLayout_jsx = external_react_default.a.createElement;










const AppLayout = ({
  children
}) => {
  const {
    my
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const menuId = "primary-search-account-menu";
  return AppLayout_jsx(material_["Box"], {
    sx: {
      flexGrow: 1,
      fontFamily: 'Public Sans'
    }
  }, AppLayout_jsx(material_["AppBar"], {
    position: "static"
  }, AppLayout_jsx(material_["Toolbar"], null, AppLayout_jsx(link_default.a, {
    href: "/"
  }, AppLayout_jsx(material_["Typography"], {
    variant: "h6",
    noWrap: true,
    component: "h1",
    sx: {
      display: {
        xs: "flex",
        sm: "flex"
      }
    }
  }, AppLayout_jsx("a", {
    style: {
      cursor: "pointer"
    }
  }, "MUI"))), AppLayout_jsx(styles["b" /* Search */], null, AppLayout_jsx(styles["c" /* SearchIconWrapper */], null, AppLayout_jsx(Search_default.a, null)), AppLayout_jsx(styles["d" /* StyledInputBase */], {
    placeholder: "Search\u2026",
    inputProps: {
      "aria-label": "search"
    }
  })), AppLayout_jsx(material_["Box"], {
    sx: {
      flexGrow: 1,
      display: {
        xs: "flex",
        md: "flex"
      }
    }
  }), AppLayout_jsx(material_["Box"], {
    sx: {
      display: {
        xs: "flex",
        md: "flex"
      }
    }
  }, AppLayout_jsx(link_default.a, {
    href: "/profile"
  }, AppLayout_jsx(material_["IconButton"], {
    size: "large",
    edge: "end",
    "aria-label": "account of current user",
    "aria-controls": menuId,
    "aria-haspopup": "true",
    color: "inherit"
  }, AppLayout_jsx("a", null, AppLayout_jsx(AccountCircle_default.a, null))))))), AppLayout_jsx(material_["Grid"], {
    container: true,
    spacing: 2
  }, AppLayout_jsx(material_["Grid"], {
    item: true,
    xs: 12,
    md: 3
  }, my !== null ? AppLayout_jsx(UserProfile["a" /* default */], {
    user: my,
    maxWidth: 345
  }) : AppLayout_jsx(components_LoginForm, null)), AppLayout_jsx(material_["Grid"], {
    item: true,
    xs: 12,
    md: 6
  }, children), AppLayout_jsx(material_["Grid"], {
    item: true,
    xs: 12,
    md: 3
  }, AppLayout_jsx("a", {
    href: "https://shinyoung-portfolio.web.app/",
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Made by Austyn"))));
};
/* harmony default export */ var components_AppLayout = __webpack_exports__["a"] = (AppLayout);

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "SUlt":
/***/ (function(module, exports) {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ "T1QK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return loadPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return loadPostsByUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return loadSinglePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return uploadImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return editPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return removePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return removeComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return likePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return unlikePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return retweet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return undoRetweet; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ko8R");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("B9iI");



const pause = duration => {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
};
const loadPosts = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('post/loadPosts', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(`posts?lastId=${(payload === null || payload === void 0 ? void 0 : payload.lastId) || 0}`);
    // await pause(1000);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(getDummyPosts(10)); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const loadPostsByUser = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('post/loadPostsByUser', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(`user/${payload.id}/posts?lastId=${(payload === null || payload === void 0 ? void 0 : payload.lastId) || 0}`);
    // await pause(1000);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(getDummyPosts(10)); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const loadSinglePost = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('post/loadSinglePost', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(`post/${payload.id}`);
    // await pause(1000);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(getDummyPosts(10)); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const uploadImages = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('post/uploadImages', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post(`post/images/`, payload);
    // await pause(1000);
    // const id = shortId.generate();
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(postMyDummyComment(payload, id)); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const addPost = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('post/addPost', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post('post/', payload);
    // await pause(1000);
    // const id = shortId.generate();
    thunkAPI.dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[/* addPostToMe */ "a"])(response.data.id));
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(postMyDummyPost(payload, id)); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const editPost = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('post/editPost', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].patch(`post/${payload.id}`, payload);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const removePost = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('post/removePost', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].delete(`post/${payload.id}`);
    // await pause(1000);
    thunkAPI.dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[/* removePostToMe */ "d"])(response.data));
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(payload); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const addComment = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('post/addComment', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post(`post/${payload.postId}/comment/`, payload);
    // await pause(1000);
    // const id = shortId.generate();
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(postMyDummyComment(payload, id)); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const editComment = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('post/editComment', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].patch(`post/${payload.postId}/comment/${payload.id}`, payload);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const removeComment = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('post/removeComment', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].delete(`post/${payload.postId}/comment/${payload.id}`);
    // await pause(1000);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const likePost = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('post/likePost', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post(`post/${payload.postId}/like`);
    // await pause(1000);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const unlikePost = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('post/unlikePost', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].delete(`post/${payload.postId}/like`);
    // await pause(1000);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const retweet = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('post/retweet', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post(`post/${payload.id}/retweet`, payload);
    // await pause(1000);
    // const id = shortId.generate();
    thunkAPI.dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[/* addPostToMe */ "a"])(response.data.id));
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(postMyDummyPost(payload, id)); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

const undoRetweet = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('post/undoRetweet', async (payload, thunkAPI) => {
  try {
    const response = await ___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].delete(`post/${payload.id}/retweet`);
    // await pause(1000);
    thunkAPI.dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[/* removePostToMe */ "d"])(response.data));
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(payload); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
});

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "V1NK":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/PersonAddAltRounded");

/***/ }),

/***/ "W88w":
/***/ (function(module, exports) {

module.exports = require("@mui/joy");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0; /**
                                             * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
                                             */
function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
} /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */
const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
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

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__("cDcd"));
var _router = __webpack_require__("elyg");
var _router2 = __webpack_require__("nOHt");
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
    if (false) {}
  }); // Join on an invalid URI character
  prefetched[href + '%' + as] = true;
}
function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
  // triggers resource download
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
  if (false) {}
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

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
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

/***/ "dud1":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material");

/***/ }),

/***/ "eRX9":
/***/ (function(module, exports) {



/***/ }),

/***/ "elyg":
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
var _normalizeTrailingSlash = __webpack_require__("X24+");
var _denormalizePagePath = __webpack_require__("wkBG");
var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));
var _utils = __webpack_require__("g/15");
var _isDynamic = __webpack_require__("/jkW");
var _parseRelativeUrl = __webpack_require__("hS4m");
var _querystring = __webpack_require__("3WeD");
var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));
var _routeMatcher = __webpack_require__("gguc");
var _routeRegex = __webpack_require__("YTqd");
var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
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
} /**
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
  const dynamicMatches =
  // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') ||
  // Fall back to reading the values from the href
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
    return (optional || param in dynamicMatches) && (
    // Interpolate group into data URL if present
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
} /**
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
  */ // Static Data Cache
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
      styleSheets: [/* /_app does not need its stylesheets managed */]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
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
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
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
  } /**
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
    if (false) {}
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
          if (false) {}
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
      if (false) {}
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
    if (false) {}
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
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
      if (false) {}
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
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
  } /**
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
  } /**
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
    if (false) {}
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
    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }
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

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp
function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "flk9":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/MoreVert");

/***/ }),

/***/ "fyxZ":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Repeat");

/***/ }),

/***/ "g/15":
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
var _formatUrl = __webpack_require__("6D7l"); /**
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
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`
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
  if (false) {}
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (false) {}
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__("g/15");
var _querystring = __webpack_require__("3WeD");
const DUMMY_BASE = new URL(true ? 'http://n' : undefined); /**
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

/***/ "ikY9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./store/thunks/post.ts
var thunks_post = __webpack_require__("T1QK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./store/thunks/user.ts
var user = __webpack_require__("NFOm");

// EXTERNAL MODULE: ./styles/index.js
var styles = __webpack_require__("NV0Y");

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__("yZmr");

// EXTERNAL MODULE: external "@mui/icons-material/Edit"
var Edit_ = __webpack_require__("9lrK");
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_);

// EXTERNAL MODULE: external "@mui/joy/ListItemDecorator"
var ListItemDecorator_ = __webpack_require__("j2IM");
var ListItemDecorator_default = /*#__PURE__*/__webpack_require__.n(ListItemDecorator_);

// EXTERNAL MODULE: external "@mui/icons-material/Delete"
var Delete_ = __webpack_require__("DAZz");
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete_);

// EXTERNAL MODULE: external "@mui/icons-material/PersonAddAltRounded"
var PersonAddAltRounded_ = __webpack_require__("V1NK");
var PersonAddAltRounded_default = /*#__PURE__*/__webpack_require__.n(PersonAddAltRounded_);

// EXTERNAL MODULE: external "@mui/icons-material/Backspace"
var Backspace_ = __webpack_require__("1S8B");
var Backspace_default = /*#__PURE__*/__webpack_require__.n(Backspace_);

// EXTERNAL MODULE: external "@mui/icons-material/Flag"
var Flag_ = __webpack_require__("oRbK");
var Flag_default = /*#__PURE__*/__webpack_require__.n(Flag_);

// EXTERNAL MODULE: external "@mui/lab"
var lab_ = __webpack_require__("+fgB");

// CONCATENATED MODULE: ./components/MoreMenu.tsx
var __jsx = external_react_default.a.createElement;












const MoreMenu = ({
  item,
  anchorEl,
  setAnchorEl,
  open,
  editStatus,
  setEditStatus,
  handleEdit,
  editLoading,
  handleDelete,
  removeLoading
}) => {
  const {
    my,
    followLoading,
    unfollowLoading
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const handleClose = () => {
    setAnchorEl(null);
  };
  const isFollowing = my === null || my === void 0 ? void 0 : my.Followings.find(user => user.id == item.User.id);
  const handleFollowing = item => {
    if (isFollowing) {
      dispatch(Object(user["k" /* unfollow */])({
        id: item.User.id
      }));
    } else {
      dispatch(Object(user["b" /* follow */])(item.User));
    }
  };
  return __jsx(styles["e" /* StyledMenu */], {
    id: "demo-customized-menu",
    MenuListProps: {
      'aria-labelledby': 'demo-customized-button'
    },
    anchorEl: anchorEl,
    open: open,
    onClose: handleClose
  }, (my === null || my === void 0 ? void 0 : my.id) == item.User.id ? __jsx(external_react_default.a.Fragment, null, __jsx(material_["MenuItem"], {
    key: "Edit",
    onClick: handleEdit
  }, __jsx(lab_["LoadingButton"], {
    loading: editLoading,
    sx: {
      p: 0,
      color: "inherit",
      textTransform: "inherit",
      fontSize: "inherit"
    }
  }, __jsx(ListItemDecorator_default.a, {
    sx: {
      color: 'inherit'
    }
  }, __jsx(Edit_default.a, null)), ' ', editStatus === "beforeEdit" && "Edit", editStatus === "editing" && "Done")), editStatus === "editing" && __jsx(material_["MenuItem"], {
    key: "Cancel",
    onClick: () => setEditStatus("beforeEdit")
  }, __jsx(lab_["LoadingButton"], {
    loading: editLoading,
    sx: {
      p: 0,
      color: "inherit",
      textTransform: "inherit",
      fontSize: "inherit"
    }
  }, __jsx(ListItemDecorator_default.a, {
    sx: {
      color: 'inherit'
    }
  }, __jsx(Backspace_default.a, null)), ' ', "Cancel")), __jsx(material_["MenuItem"], {
    key: "Delete",
    onClick: handleDelete
  }, __jsx(lab_["LoadingButton"], {
    loading: removeLoading,
    sx: {
      p: 0,
      color: "inherit",
      textTransform: "inherit",
      fontSize: "inherit"
    }
  }, __jsx(ListItemDecorator_default.a, {
    sx: {
      color: 'inherit'
    }
  }, __jsx(Delete_default.a, null)), ' ', "Delete"))) : __jsx(external_react_default.a.Fragment, null, __jsx(material_["MenuItem"], {
    key: isFollowing ? "Unfollow" : "Follow",
    onClick: () => handleFollowing(item),
    disableRipple: true
  }, __jsx(lab_["LoadingButton"], {
    loading: isFollowing ? unfollowLoading : followLoading,
    sx: {
      p: 0,
      color: "inherit",
      textTransform: "inherit",
      fontSize: "inherit"
    }
  }, __jsx(ListItemDecorator_default.a, {
    sx: {
      color: 'inherit'
    }
  }, __jsx(PersonAddAltRounded_default.a, null)), ' ', isFollowing ? "Unfollow" : "Follow")), __jsx(material_["MenuItem"], {
    key: "Report",
    onClick: handleClose,
    disableRipple: true
  }, __jsx(Flag_default.a, null), "Report")));
};
/* harmony default export */ var components_MoreMenu = (MoreMenu);
// EXTERNAL MODULE: external "@mui/icons-material/Repeat"
var Repeat_ = __webpack_require__("fyxZ");
var Repeat_default = /*#__PURE__*/__webpack_require__.n(Repeat_);

// CONCATENATED MODULE: ./components/RetweetMenu.tsx
var RetweetMenu_jsx = external_react_default.a.createElement;









const RetweetMenu = ({
  post,
  anchorEl,
  setAnchorEl,
  open
}) => {
  const {
    mainPosts,
    retweetLoading,
    undoRetweetLoading
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const {
    my
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const handleClose = () => {
    setAnchorEl(null);
  };
  const isRetweetedByMe = post.RetweetId && post.UserId == (my === null || my === void 0 ? void 0 : my.id) || mainPosts.find(mainPost => post.id == mainPost.RetweetId && mainPost.UserId == (my === null || my === void 0 ? void 0 : my.id));
  const isRetweetedByOthers = post.RetweetId && post.UserId == (my === null || my === void 0 ? void 0 : my.id) || mainPosts.find(mainPost => post.id == mainPost.RetweetId && mainPost.UserId != (my === null || my === void 0 ? void 0 : my.id));
  const isOriginalPost = mainPosts.find(mainPost => post.id == mainPost.RetweetId && mainPost.UserId);
  const retweetingPostId = isOriginalPost === null || isOriginalPost === void 0 ? void 0 : isOriginalPost.id; // the id of the post which is retweeting the original one.

  const handleRetweet = post => {
    if (my === null) return alert('로그인이 필요합니다.');
    if (isRetweetedByMe) {
      dispatch(Object(thunks_post["l" /* undoRetweet */])({
        id: isOriginalPost ? retweetingPostId : post.id
      }));
    } else if (isRetweetedByOthers) {
      dispatch(Object(thunks_post["k" /* retweet */])({
        id: isOriginalPost ? post.id : post.RetweetId
      }));
    } else {
      dispatch(Object(thunks_post["k" /* retweet */])({
        id: post.id
      }));
    }
  };
  return RetweetMenu_jsx(styles["e" /* StyledMenu */], {
    id: "demo-customized-menu",
    MenuListProps: {
      'aria-labelledby': 'demo-customized-button'
    },
    anchorEl: anchorEl,
    open: open,
    onClose: handleClose
  }, RetweetMenu_jsx(material_["MenuItem"], {
    key: isRetweetedByMe ? "Undo Retweet" : "Retweet",
    onClick: () => handleRetweet(post),
    disableRipple: true
  }, RetweetMenu_jsx(lab_["LoadingButton"], {
    loading: isRetweetedByMe ? undoRetweetLoading : retweetLoading,
    sx: {
      p: 0,
      color: "inherit",
      textTransform: "inherit",
      fontSize: "inherit"
    }
  }, RetweetMenu_jsx(ListItemDecorator_default.a, {
    sx: {
      color: 'inherit'
    }
  }, RetweetMenu_jsx(Repeat_default.a, null)), ' ', isRetweetedByMe ? "Undo Retweet" : "Retweet")), RetweetMenu_jsx(material_["MenuItem"], {
    key: "Quote Tweet",
    onClick: handleClose,
    disableRipple: true
  }, RetweetMenu_jsx(Edit_default.a, null), "Quote Tweet"));
};
/* harmony default export */ var components_RetweetMenu = (RetweetMenu);
// EXTERNAL MODULE: ./store/state-types/post.ts
var state_types_post = __webpack_require__("eRX9");

// EXTERNAL MODULE: ./config/config.ts
var config = __webpack_require__("+6GR");

// EXTERNAL MODULE: external "@mui/material/ImageList"
var ImageList_ = __webpack_require__("Bsp/");
var ImageList_default = /*#__PURE__*/__webpack_require__.n(ImageList_);

// EXTERNAL MODULE: external "@mui/material/ImageListItem"
var ImageListItem_ = __webpack_require__("As4N");
var ImageListItem_default = /*#__PURE__*/__webpack_require__.n(ImageListItem_);

// CONCATENATED MODULE: ./components/PostImages.jsx
var PostImages_jsx = external_react_default.a.createElement;







// interface PostImagesProps {
//   images: Image[]
// }

const PostImages = ({
  images
}) => {
  // const PostImages: React.FC<PostImagesProps> = ({ images }) => {
  return PostImages_jsx(external_react_default.a.Fragment, null, images.length == 1 && PostImages_jsx(material_["CardMedia"], {
    component: "img",
    height: "100%",
    src: `${config["a" /* backUrl */]}/${images[0].src}`,
    alt: images[0].alt
  }), (images.length == 2 || images.length == 4) && PostImages_jsx(ImageList_default.a, {
    sx: {
      m: 0
    },
    cols: 2,
    rowHeight: 250
  }, images.map((image, index) => PostImages_jsx(ImageListItem_default.a, {
    key: index
  }, PostImages_jsx("img", {
    src: `${config["a" /* backUrl */]}/${image.src}`,
    alt: image.alt,
    loading: "lazy"
  })))), images.length == 3 && PostImages_jsx(ImageList_default.a, {
    sx: {
      m: 0
    },
    variant: "quilted",
    cols: 4,
    rows: 2,
    rowHeight: 150
  }, PostImages_jsx(ImageListItem_default.a, {
    key: 0,
    cols: 2,
    rows: 2
  }, PostImages_jsx("img", {
    src: `${config["a" /* backUrl */]}/${images[0].src}`,
    alt: images[0].src,
    loading: "lazy"
  })), PostImages_jsx(ImageListItem_default.a, {
    key: 1,
    cols: 2,
    rows: 1
  }, PostImages_jsx("img", {
    src: `${config["a" /* backUrl */]}/${images[1].src}`,
    alt: images[1].src,
    loading: "lazy"
  })), PostImages_jsx(ImageListItem_default.a, {
    key: 2,
    cols: 2,
    rows: 1
  }, PostImages_jsx("img", {
    src: `${config["a" /* backUrl */]}/${images[2].src}`,
    alt: images[2].src,
    loading: "lazy"
  }))));
};
/* harmony default export */ var components_PostImages = (PostImages);
// EXTERNAL MODULE: external "@mui/joy"
var joy_ = __webpack_require__("W88w");

// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__("JhnM");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// CONCATENATED MODULE: ./components/CommentForm.tsx
var CommentForm_jsx = external_react_default.a.createElement;






const CommentForm = ({
  post
}) => {
  const {
    my
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    addCommentLoading,
    addCommentDone
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: text,
    1: setText
  } = Object(external_react_["useState"])('');
  Object(external_react_["useEffect"])(() => {
    if (addCommentDone) {
      setText('');
    }
  }, [addCommentDone]);
  const addEmoji = emoji => () => setText(`${text}${emoji}`);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(Object(thunks_post["a" /* addComment */])({
      content: text,
      postId: post.id,
      userId: my === null || my === void 0 ? void 0 : my.id,
      User: my
    }));
  };
  return CommentForm_jsx(joy_["Box"], {
    sx: {
      m: 1
    }
  }, CommentForm_jsx("form", {
    onSubmit: handleSubmit
  }, CommentForm_jsx(joy_["Textarea"], {
    placeholder: "Type in here\u2026",
    value: text,
    onChange: event => setText(event.target.value),
    minRows: 1,
    maxRows: 2,
    startDecorator: CommentForm_jsx(joy_["Box"], {
      sx: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }
    }, CommentForm_jsx(joy_["Box"], {
      sx: {
        display: 'flex',
        gap: 0.5
      }
    }, CommentForm_jsx(Tooltip_default.a, {
      title: "Good",
      placement: "top"
    }, CommentForm_jsx(joy_["IconButton"], {
      variant: "outlined",
      sx: {
        borderColor: '#D8D8DF'
      },
      color: "neutral",
      onClick: addEmoji('👍')
    }, "\uD83D\uDC4D")), CommentForm_jsx(Tooltip_default.a, {
      title: "Summer",
      placement: "top"
    }, CommentForm_jsx(joy_["IconButton"], {
      variant: "outlined",
      sx: {
        borderColor: '#D8D8DF'
      },
      color: "neutral",
      onClick: addEmoji('🏖')
    }, "\uD83C\uDFD6")), CommentForm_jsx(Tooltip_default.a, {
      title: "Love",
      placement: "top"
    }, CommentForm_jsx(joy_["IconButton"], {
      variant: "outlined",
      sx: {
        borderColor: '#D8D8DF'
      },
      color: "neutral",
      onClick: addEmoji('😍')
    }, "\uD83D\uDE0D"))), CommentForm_jsx(joy_["Typography"], {
      level: "body3",
      sx: {
        ml: 'auto',
        color: '#73738c',
        fontSize: '14px'
      }
    }, text.length, " letter(s)")),
    endDecorator: CommentForm_jsx(joy_["Box"], {
      sx: {
        width: '100%',
        display: 'flex',
        justifyContent: 'right'
      }
    }, CommentForm_jsx(lab_["LoadingButton"], {
      type: "submit",
      variant: "contained",
      loading: addCommentLoading
    }, "Reply")),
    sx: {
      minWidth: 300,
      borderColor: '#D8D8DF',
      "&:hover": {
        borderColor: '#B9B9C6'
      }
    }
  })));
};
/* harmony default export */ var components_CommentForm = (CommentForm);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./styles/styled-components.js

const EditContent = external_styled_components_default.a.textarea`
  outline: none;
  border: none;
  font-family: inherit;
  width: 100%;
  min-height: 7vh;
  resize: none;
  font-size: 14px;
  //overflow: hidden;
`;
// EXTERNAL MODULE: external "@mui/icons-material/MoreVert"
var MoreVert_ = __webpack_require__("flk9");
var MoreVert_default = /*#__PURE__*/__webpack_require__.n(MoreVert_);

// CONCATENATED MODULE: ./components/CommentListItem.tsx
var CommentListItem_jsx = external_react_default.a.createElement;







const CommentListItem = ({
  comment
}) => {
  const {
    editCommentDone,
    editCommentLoading,
    removeCommentLoading
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const {
    my
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: editStatus,
    1: setEditStatus
  } = Object(external_react_["useState"])("beforeEdit");
  const {
    0: content,
    1: setContent
  } = Object(external_react_["useState"])(comment.content);
  const {
    0: anchorEl,
    1: setAnchorEl
  } = Object(external_react_["useState"])(null);
  const open = Boolean(anchorEl);
  Object(external_react_["useEffect"])(() => {
    if (editCommentDone) {
      setEditStatus("beforeEdit");
    }
  }, [editCommentDone]);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleContentChange = e => {
    setContent(e.target.value);
  };
  const handleEditComment = comment => {
    if (editStatus === "beforeEdit") {
      setEditStatus("editing");
    } else if (editStatus === "editing") {
      dispatch(Object(thunks_post["c" /* editComment */])({
        postId: comment.PostId,
        id: comment.id,
        content
      }));
      setEditStatus("pending");
    }
  };
  const handleDeleteComment = comment => {
    dispatch(Object(thunks_post["i" /* removeComment */])({
      postId: comment.PostId,
      id: comment.id
    }));
  };
  return CommentListItem_jsx(external_react_default.a.Fragment, null, CommentListItem_jsx(material_["ListItem"], {
    key: comment.id,
    secondaryAction: my !== null && CommentListItem_jsx(external_react_default.a.Fragment, null, CommentListItem_jsx(material_["Tooltip"], {
      title: "More"
    }, CommentListItem_jsx(material_["IconButton"], {
      "aria-label": "more",
      id: "long-button",
      "aria-controls": open ? 'long-menu' : undefined,
      "aria-expanded": open ? 'true' : undefined,
      "aria-haspopup": "true",
      onClick: handleClick
    }, CommentListItem_jsx(MoreVert_default.a, null))), CommentListItem_jsx(components_MoreMenu, {
      item: comment,
      anchorEl: anchorEl,
      setAnchorEl: setAnchorEl,
      open: open,
      editStatus: editStatus,
      setEditStatus: setEditStatus,
      handleEdit: () => handleEditComment(comment),
      editLoading: editCommentLoading,
      handleDelete: () => handleDeleteComment(comment),
      removeLoading: removeCommentLoading
    })),
    alignItems: "flex-start"
  }, CommentListItem_jsx(material_["ListItemAvatar"], null, CommentListItem_jsx(material_["Avatar"], {
    alt: comment.User.username,
    src: "/static/images/avatar/1.jpg"
  })), CommentListItem_jsx(material_["ListItemText"], {
    sx: {
      m: 1
    },
    primary: comment.User.username,
    secondary: editStatus === "editing" ? CommentListItem_jsx(EditContent, {
      onChange: handleContentChange
    }, content) : comment.content
  })), CommentListItem_jsx(material_["Divider"], {
    variant: "inset",
    component: "li"
  }));
};
/* harmony default export */ var components_CommentListItem = (CommentListItem);
// EXTERNAL MODULE: external "@mui/material/colors"
var colors_ = __webpack_require__("zWBi");

// EXTERNAL MODULE: external "@mui/icons-material/FavoriteBorder"
var FavoriteBorder_ = __webpack_require__("1miI");
var FavoriteBorder_default = /*#__PURE__*/__webpack_require__.n(FavoriteBorder_);

// EXTERNAL MODULE: external "@mui/icons-material/ModeCommentOutlined"
var ModeCommentOutlined_ = __webpack_require__("P8OX");
var ModeCommentOutlined_default = /*#__PURE__*/__webpack_require__.n(ModeCommentOutlined_);

// CONCATENATED MODULE: ./components/PostCard.tsx
var PostCard_jsx = external_react_default.a.createElement;


















const PostCard = ({
  post,
  posts,
  retweetingPostId
}) => {
  var _post$Likers, _post$Images, _post$Likers2, _post$Comments;
  const my = Object(external_react_redux_["useSelector"])(state => state.user.my);
  const {
    editPostDone,
    editPostLoading,
    removePostLoading
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: editStatus,
    1: setEditStatus
  } = Object(external_react_["useState"])("beforeEdit");
  const {
    0: content,
    1: setContent
  } = Object(external_react_["useState"])(post.content);
  const {
    0: expanded,
    1: setExpanded
  } = Object(external_react_["useState"])(false);
  const retweetingPost = posts.find(retweetingPost => retweetingPost.id == retweetingPostId);
  const retweetedTimes = posts.filter(retweetingPost => retweetingPost.RetweetId == post.id).length;
  const isRetweetedByMe = post.RetweetId && post.UserId == (my === null || my === void 0 ? void 0 : my.id) || posts.find(mainPost => post.id == mainPost.RetweetId && mainPost.UserId == (my === null || my === void 0 ? void 0 : my.id));
  Object(external_react_["useEffect"])(() => {
    if (editPostDone) {
      setEditStatus("beforeEdit");
    }
  }, [editPostDone]);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const {
    0: anchorEl,
    1: setAnchorEl
  } = Object(external_react_["useState"])(null);
  const {
    0: retweetEl,
    1: setRetweetEl
  } = Object(external_react_["useState"])(null);
  const open = Boolean(anchorEl);
  const openRetweet = Boolean(retweetEl);
  // MouseEvent<HTMLButtonElement, MouseEvent>
  // BaseSyntheticEvent<HTMLButtonElement>.currentTarget
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleRetweetButton = event => {
    setRetweetEl(event.currentTarget);
  };
  const handleContentChange = e => {
    setContent(e.target.value);
  };
  const handleEditPost = post => {
    if (editStatus === "beforeEdit") {
      setEditStatus("editing");
    } else if (editStatus === "editing") {
      dispatch(Object(thunks_post["d" /* editPost */])({
        id: post.id,
        content
      }));
      setEditStatus("pending");
    }
  };
  const handleDeletePost = post => {
    dispatch(Object(thunks_post["j" /* removePost */])(post));
  };
  const isLiked = (_post$Likers = post.Likers) === null || _post$Likers === void 0 ? void 0 : _post$Likers.find(like => like.id == (my === null || my === void 0 ? void 0 : my.id));
  const handleLikeButton = post => {
    if (my === null) return alert('로그인이 필요합니다.');
    if (isLiked) {
      dispatch(Object(thunks_post["m" /* unlikePost */])({
        postId: post.id
      }));
    } else {
      dispatch(Object(thunks_post["e" /* likePost */])({
        postId: post.id
      }));
    }
  };
  return PostCard_jsx(material_["Card"], {
    sx: {
      m: 1,
      mb: 3
    }
  }, retweetingPostId && PostCard_jsx(link_default.a, {
    href: `/user/${retweetingPost === null || retweetingPost === void 0 ? void 0 : retweetingPost.User.id}`
  }, PostCard_jsx("a", {
    style: {
      display: 'flex',
      alignItems: 'center',
      color: 'inherit',
      textDecoration: 'none'
    }
  }, PostCard_jsx(Repeat_default.a, null), (retweetingPost === null || retweetingPost === void 0 ? void 0 : retweetingPost.User.username) === (my === null || my === void 0 ? void 0 : my.username) ? "You" : retweetingPost === null || retweetingPost === void 0 ? void 0 : retweetingPost.User.username, " Retweeted")), PostCard_jsx(material_["CardHeader"], {
    avatar: PostCard_jsx(material_["Avatar"], {
      alt: post.User.username,
      src: "/static/images/avatar/1.jpg",
      sx: {
        bgcolor: colors_["blue"][500]
      }
    }),
    action: my !== null && PostCard_jsx(external_react_default.a.Fragment, null, PostCard_jsx(material_["Tooltip"], {
      title: "More"
    }, PostCard_jsx(material_["IconButton"], {
      "aria-label": "more",
      id: "long-button",
      "aria-controls": open ? 'long-menu' : undefined,
      "aria-expanded": open ? 'true' : undefined,
      "aria-haspopup": "true",
      onClick: handleClick
    }, PostCard_jsx(MoreVert_default.a, null))), PostCard_jsx(components_MoreMenu, {
      item: post,
      anchorEl: anchorEl,
      setAnchorEl: setAnchorEl,
      open: open,
      editStatus: editStatus,
      setEditStatus: setEditStatus,
      handleEdit: () => handleEditPost(post),
      editLoading: editPostLoading,
      handleDelete: () => handleDeletePost(post),
      removeLoading: removePostLoading
    })),
    title: PostCard_jsx(link_default.a, {
      href: `/user/${post.UserId}`
    }, PostCard_jsx("a", {
      style: {
        color: 'inherit',
        textDecoration: 'none'
      }
    }, post.User.username)),
    subheader: post.createdAt === post.updatedAt ? external_moment_default()(post.createdAt).startOf('day').fromNow() : `Edited · ${external_moment_default()(post.updatedAt).startOf('day').fromNow()}`
  }), ((_post$Images = post.Images) === null || _post$Images === void 0 ? void 0 : _post$Images.length) > 0 && post.Images.length < 5 && PostCard_jsx(components_PostImages, {
    images: post.Images
  }), PostCard_jsx(material_["CardContent"], null, PostCard_jsx(material_["Typography"], {
    variant: "body2",
    color: "text.secondary"
  }, editStatus === "editing" ? PostCard_jsx(EditContent, {
    onChange: handleContentChange
  }, content) : post.content)), PostCard_jsx(material_["CardActions"], {
    disableSpacing: true
  }, PostCard_jsx(material_["Tooltip"], {
    title: isLiked ? "Unlike" : "Like"
  }, PostCard_jsx(material_["IconButton"], {
    onClick: () => handleLikeButton(post),
    "aria-label": "add to favorites",
    sx: {
      py: 0,
      fontSize: "inherit",
      "&:hover": {
        color: "#F91880",
        bgcolor: 'transparent'
      }
    }
  }, PostCard_jsx(material_["IconButton"], {
    sx: {
      color: "inherit",
      "&:hover": {
        bgcolor: 'rgba(249, 24, 128, 0.1)'
      }
    }
  }, PostCard_jsx(FavoriteBorder_default.a, null)), ((_post$Likers2 = post.Likers) === null || _post$Likers2 === void 0 ? void 0 : _post$Likers2.length) > 0 ? post.Likers.length : 0)), PostCard_jsx(external_react_default.a.Fragment, null, PostCard_jsx(material_["Tooltip"], {
    title: isRetweetedByMe ? "Undo Retweet" : "Retweet"
  }, PostCard_jsx(material_["IconButton"], {
    onClick: handleRetweetButton,
    "aria-label": "retweet",
    sx: {
      py: 0,
      fontSize: "inherit",
      "&:hover": {
        color: "#53b781",
        bgcolor: 'transparent'
      }
    }
  }, PostCard_jsx(material_["IconButton"], {
    sx: {
      color: "inherit",
      "&:hover": {
        bgcolor: '#e6f1eb'
      }
    }
  }, PostCard_jsx(Repeat_default.a, null)), retweetedTimes)), PostCard_jsx(components_RetweetMenu, {
    post: post,
    anchorEl: retweetEl,
    setAnchorEl: setRetweetEl,
    open: openRetweet
  })), PostCard_jsx(material_["Tooltip"], {
    title: "Reply"
  }, PostCard_jsx(styles["a" /* ExpandMore */], {
    expand: expanded,
    onClick: handleExpandClick,
    "aria-expanded": expanded,
    "aria-label": "show more"
  }, PostCard_jsx(ModeCommentOutlined_default.a, null)))), PostCard_jsx(material_["Collapse"], {
    in: expanded,
    timeout: "auto",
    unmountOnExit: true
  }, my !== null && PostCard_jsx(components_CommentForm, {
    post: post
  }), PostCard_jsx(material_["List"], {
    subheader: PostCard_jsx(material_["ListSubheader"], null, post.Comments ? post.Comments.length : 0, "\uAC1C\uC758 \uB313\uAE00"),
    sx: {
      m: 1,
      bgcolor: 'background.paper'
    }
  }, (_post$Comments = post.Comments) === null || _post$Comments === void 0 ? void 0 : _post$Comments.map(comment => PostCard_jsx(components_CommentListItem, {
    comment: comment,
    key: comment.id
  })))));
};
/* harmony default export */ var components_PostCard = __webpack_exports__["a"] = (PostCard);

/***/ }),

/***/ "j2IM":
/***/ (function(module, exports) {

module.exports = require("@mui/joy/ListItemDecorator");

/***/ }),

/***/ "kQFM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__("+wlD");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux-logger"
var external_redux_logger_ = __webpack_require__("4DCN");
var external_redux_logger_default = /*#__PURE__*/__webpack_require__.n(external_redux_logger_);

// EXTERNAL MODULE: ./store/reducers/user.js
var user = __webpack_require__("B9iI");

// EXTERNAL MODULE: ./store/thunks/post.ts
var thunks_post = __webpack_require__("T1QK");

// EXTERNAL MODULE: external "shortid"
var external_shortid_ = __webpack_require__("2WPw");
var external_shortid_default = /*#__PURE__*/__webpack_require__.n(external_shortid_);

// EXTERNAL MODULE: external "@faker-js/faker/locale/en_CA"
var en_CA_ = __webpack_require__("zKjy");

// CONCATENATED MODULE: ./store/reducers/post.js





const postSlice = Object(toolkit_["createSlice"])({
  name: 'post',
  initialState: {
    bringMorePosts: true,
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    bringMorePostsByUser: true,
    loadPostsByUserLoading: false,
    loadPostsByUserDone: false,
    loadPostsByUserError: null,
    loadSinglePostLoading: false,
    loadSinglePostDone: false,
    loadSinglePostError: null,
    uploadImagesLoading: false,
    uploadImagesDone: false,
    uploadImagesError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    editPostLoading: false,
    editPostDone: false,
    editPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
    editCommentLoading: false,
    editCommentDone: false,
    editCommentError: null,
    removeCommentLoading: false,
    removeCommentDone: false,
    removeCommentError: null,
    likePostLoading: false,
    likePostDone: false,
    likePostError: null,
    unlikePostLoading: false,
    unlikePostDone: false,
    unlikePostError: null,
    retweetLoading: false,
    retweetDone: false,
    retweetError: null,
    mainPosts: [],
    postsByUser: [],
    singlePost: null,
    imagePaths: []
  },
  extraReducers(builder) {
    // builder.addCase(HYDRATE, (state, action) => {
    //   return {
    //     ...state,
    //     ...action.payload.post,
    //   }
    // })
    builder.addCase(thunks_post["f" /* loadPosts */].pending, (state, action) => {
      state.loadPostsLoading = true;
      state.loadPostsDone = false;
      state.loadPostsError = null;
    });
    builder.addCase(thunks_post["f" /* loadPosts */].fulfilled, (state, action) => {
      state.mainPosts = state.mainPosts.concat(action.payload);
      state.loadPostsLoading = false;
      state.loadPostsDone = true;
      state.bringMorePosts = action.payload.length == 10;
    });
    builder.addCase(thunks_post["f" /* loadPosts */].rejected, (state, action) => {
      state.loadPostsLoading = false;
      state.loadPostsError = action.payload;
    });
    builder.addCase(thunks_post["g" /* loadPostsByUser */].pending, (state, action) => {
      state.loadPostsByUserLoading = true;
      state.loadPostsByUserDone = false;
      state.loadPostsByUserError = null;
    });
    builder.addCase(thunks_post["g" /* loadPostsByUser */].fulfilled, (state, action) => {
      state.postsByUser = state.postsByUser.concat(action.payload);
      state.loadPostsByUserLoading = false;
      state.loadPostsByUserDone = true;
      state.bringMorePostsByUser = action.payload.length == 10;
    });
    builder.addCase(thunks_post["g" /* loadPostsByUser */].rejected, (state, action) => {
      state.loadPostsByUserLoading = false;
      state.loadPostsByUserError = action.payload;
    });
    builder.addCase(thunks_post["h" /* loadSinglePost */].pending, (state, action) => {
      state.loadSinglePostLoading = true;
      state.loadSinglePostDone = false;
      state.loadSinglePostError = null;
    });
    builder.addCase(thunks_post["h" /* loadSinglePost */].fulfilled, (state, action) => {
      state.singlePost = action.payload;
      state.loadSinglePostLoading = false;
      state.loadSinglePostDone = true;
    });
    builder.addCase(thunks_post["h" /* loadSinglePost */].rejected, (state, action) => {
      state.loadSinglePostLoading = false;
      state.loadSinglePostError = action.payload;
    });
    builder.addCase(thunks_post["n" /* uploadImages */].pending, (state, action) => {
      state.uploadImagesLoading = true;
      state.uploadImagesDone = false;
      state.uploadImagesError = null;
    });
    builder.addCase(thunks_post["n" /* uploadImages */].fulfilled, (state, action) => {
      state.imagePaths = action.payload;
      state.uploadImagesLoading = false;
      state.uploadImagesDone = true;
    });
    builder.addCase(thunks_post["n" /* uploadImages */].rejected, (state, action) => {
      state.uploadImagesLoading = false;
      state.uploadImagesError = action.payload;
    });
    builder.addCase(thunks_post["b" /* addPost */].pending, (state, action) => {
      state.addPostLoading = true;
      state.addPostDone = false;
      state.addPostError = null;
    });
    builder.addCase(thunks_post["b" /* addPost */].fulfilled, (state, action) => {
      state.mainPosts.unshift(action.payload);
      state.addPostLoading = false;
      state.addPostDone = true;
    });
    builder.addCase(thunks_post["b" /* addPost */].rejected, (state, action) => {
      state.addPostLoading = false;
      state.addPostError = action.payload;
    });
    builder.addCase(thunks_post["d" /* editPost */].pending, (state, action) => {
      state.editPostLoading = true;
      state.editPostDone = false;
      state.editPostError = null;
    });
    builder.addCase(thunks_post["d" /* editPost */].fulfilled, (state, action) => {
      const retweetingPost = state.mainPosts.find(post => post.RetweetId === action.payload.id);
      if (retweetingPost) {
        retweetingPost.Retweet.content = action.payload.content;
        retweetingPost.Retweet.updatedAt = action.payload.updatedAt;
        state.editPostLoading = false;
        state.editPostDone = true;
      }
      const post = state.mainPosts.find(post => post.id === action.payload.id);
      if (post) {
        post.content = action.payload.content;
        post.updatedAt = action.payload.updatedAt;
        state.editPostLoading = false;
        state.editPostDone = true;
      }
    });
    builder.addCase(thunks_post["d" /* editPost */].rejected, (state, action) => {
      state.editPostLoading = false;
      state.editPostError = action.payload;
    });
    builder.addCase(thunks_post["j" /* removePost */].pending, (state, action) => {
      state.removePostLoading = true;
      state.removePostDone = false;
      state.removePostError = null;
    });
    builder.addCase(thunks_post["j" /* removePost */].fulfilled, (state, action) => {
      const retweetingPost = state.mainPosts.find(post => post.RetweetId == action.payload.id);
      if (retweetingPost) {
        state.mainPosts = state.mainPosts.filter(post => post.id !== retweetingPost.id);
        state.removePostLoading = false;
        state.removePostDone = true;
      }
      state.mainPosts = state.mainPosts.filter(post => post.id !== action.payload.id);
      state.removePostLoading = false;
      state.removePostDone = true;
    });
    builder.addCase(thunks_post["j" /* removePost */].rejected, (state, action) => {
      state.removePostLoading = false;
      state.removePostError = action.payload;
    });
    builder.addCase(thunks_post["a" /* addComment */].pending, (state, action) => {
      state.addCommentLoading = true;
      state.addCommentDone = false;
      state.addCommentError = null;
    });
    builder.addCase(thunks_post["a" /* addComment */].fulfilled, (state, action) => {
      const retweetingPost = state.mainPosts.find(post => post.RetweetId == action.payload.PostId);
      if (retweetingPost) {
        retweetingPost.Retweet.Comments.unshift(action.payload);
        state.addCommentLoading = false;
        state.addCommentDone = true;
      }
      const post = state.mainPosts.find(post => post.id == action.payload.PostId);
      if (post) {
        post.Comments.unshift(action.payload);
        state.addCommentLoading = false;
        state.addCommentDone = true;
      }
    });
    builder.addCase(thunks_post["a" /* addComment */].rejected, (state, action) => {
      state.addCommentLoading = false;
      state.addCommentError = action.payload;
    });
    builder.addCase(thunks_post["c" /* editComment */].pending, (state, action) => {
      state.editCommentLoading = true;
      state.editCommentDone = false;
      state.editCommentError = null;
    });
    builder.addCase(thunks_post["c" /* editComment */].fulfilled, (state, action) => {
      const retweetingPost = state.mainPosts.find(post => post.RetweetId == action.payload.PostId);
      if (retweetingPost) {
        const comment = retweetingPost.Retweet.Comments.find(comment => comment.id == action.payload.id);
        if (comment) {
          comment.content = action.payload.content;
          comment.updatedAt = action.payload.updatedAt;
          state.editCommentLoading = false;
          state.editCommentDone = true;
        }
      }
      const post = state.mainPosts.find(post => post.id == action.payload.PostId);
      if (post) {
        const comment = post.Comments.find(comment => comment.id == action.payload.id);
        if (comment) {
          comment.content = action.payload.content;
          comment.updatedAt = action.payload.updatedAt;
          state.editCommentLoading = false;
          state.editCommentDone = true;
        }
      }
    });
    builder.addCase(thunks_post["c" /* editComment */].rejected, (state, action) => {
      state.editCommentLoading = false;
      state.editCommentError = action.payload;
    });
    builder.addCase(thunks_post["i" /* removeComment */].pending, (state, action) => {
      state.removeCommentLoading = true;
      state.removeCommentDone = false;
      state.removeCommentError = null;
    });
    builder.addCase(thunks_post["i" /* removeComment */].fulfilled, (state, action) => {
      const retweetingPost = state.mainPosts.find(post => post.RetweetId === action.payload.PostId);
      if (retweetingPost) {
        retweetingPost.Retweet.Comments = retweetingPost.Retweet.Comments.filter(comment => comment.id !== action.payload.id);
        state.removeCommentLoading = false;
        state.removeCommentDone = true;
      }
      const post = state.mainPosts.find(post => post.id === action.payload.PostId);
      if (post) {
        post.Comments = post.Comments.filter(comment => comment.id !== action.payload.id);
        state.removeCommentLoading = false;
        state.removeCommentDone = true;
      }
    });
    builder.addCase(thunks_post["i" /* removeComment */].rejected, (state, action) => {
      state.removeCommentLoading = false;
      state.removeCommentError = action.payload;
    });
    builder.addCase(thunks_post["e" /* likePost */].pending, (state, action) => {
      state.likePostLoading = true;
      state.likePostDone = false;
      state.likePostError = null;
    });
    builder.addCase(thunks_post["e" /* likePost */].fulfilled, (state, action) => {
      const retweetingPost = state.mainPosts.find(post => post.RetweetId == action.payload.PostId);
      if (retweetingPost !== null) {
        retweetingPost.Retweet.Likers.unshift({
          id: action.payload.UserId
        });
        state.likePostLoading = false;
        state.likePostDone = true;
      }
      const post = state.mainPosts.find(post => post.id === action.payload.PostId);
      if (post) {
        post.Likers.unshift({
          id: action.payload.UserId
        });
        state.likePostLoading = false;
        state.likePostDone = true;
      }
    });
    builder.addCase(thunks_post["e" /* likePost */].rejected, (state, action) => {
      state.likePostLoading = false;
      state.likePostError = action.payload;
    });
    builder.addCase(thunks_post["m" /* unlikePost */].pending, (state, action) => {
      state.unlikePostLoading = true;
      state.unlikePostDone = false;
      state.unlikePostError = null;
    });
    builder.addCase(thunks_post["m" /* unlikePost */].fulfilled, (state, action) => {
      const retweetingPost = state.mainPosts.find(post => post.RetweetId == action.payload.PostId);
      if (retweetingPost !== null) {
        retweetingPost.Retweet.Likers = retweetingPost.Retweet.Likers.filter(like => like.id !== action.payload.UserId);
        state.unlikePostLoading = false;
        state.unlikePostDone = true;
      }
      const post = state.mainPosts.find(post => post.id === action.payload.PostId);
      if (post) {
        post.Likers = post.Likers.filter(like => like.id !== action.payload.UserId);
        state.unlikePostLoading = false;
        state.unlikePostDone = true;
      }
    });
    builder.addCase(thunks_post["m" /* unlikePost */].rejected, (state, action) => {
      state.unlikePostLoading = false;
      state.unlikePostError = action.payload;
    });
    builder.addCase(thunks_post["k" /* retweet */].pending, (state, action) => {
      state.retweetLoading = true;
      state.retweetDone = false;
      state.retweetError = null;
    });
    builder.addCase(thunks_post["k" /* retweet */].fulfilled, (state, action) => {
      state.mainPosts.unshift(action.payload);
      state.retweetLoading = false;
      state.retweetDone = true;
    });
    builder.addCase(thunks_post["k" /* retweet */].rejected, (state, action) => {
      state.retweetLoading = false;
      state.retweetError = action.payload;
    });
    builder.addCase(thunks_post["l" /* undoRetweet */].pending, (state, action) => {
      state.undoRetweetLoading = true;
      state.undoRetweetDone = false;
      state.undoRetweetError = null;
    });
    builder.addCase(thunks_post["l" /* undoRetweet */].fulfilled, (state, action) => {
      state.mainPosts = state.mainPosts.filter(post => post.id !== action.payload.id);
      state.undoRetweetLoading = false;
      state.undoRetweetDone = true;
    });
    builder.addCase(thunks_post["l" /* undoRetweet */].rejected, (state, action) => {
      state.undoRetweetLoading = false;
      state.undoRetweetError = action.payload;
    });
  },
  reducers: undefined
});
const getDummyPosts = number => Array(number).fill().map((post, index) => ({
  id: external_shortid_default.a.generate(),
  content: en_CA_["faker"].lorem.paragraphs(2),
  createdAt: `${en_CA_["faker"].date.past(10)}`.substring(0, 24),
  User: {
    id: external_shortid_default.a.generate(),
    username: en_CA_["faker"].name.fullName()
  },
  Images: [{
    src: `${en_CA_["faker"].image.cats()}?random=${Date.now() + index}`,
    alt: "cat"
  }],
  Comments: [],
  Likers: []
}));
const postMyDummyPost = (payload, id) => ({
  id,
  content: en_CA_["faker"].lorem.paragraphs(2),
  createdAt: `${en_CA_["faker"].date.past(10)}`.substring(0, 24),
  User: {
    id: payload.userId,
    username: payload.User.username
  },
  Images: Array(Math.floor(Math.random() * 4) + 1).fill().map((image, index) => ({
    src: `${en_CA_["faker"].image.cats()}?random=${Date.now() + index}`,
    alt: `Cat_0${index}`
  })),
  Comments: [],
  Likers: []
});
const postMyDummyComment = (payload, id) => ({
  id,
  postId: payload.postId,
  content: en_CA_["faker"].lorem.sentences(2),
  createdAt: `${en_CA_["faker"].date.past(5)}`.substring(0, 24),
  User: {
    id: payload.userId,
    username: payload.User.username
  }
});
/* harmony default export */ var reducers_post = (postSlice);
// CONCATENATED MODULE: ./store/reducers/index.js




const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      return action.payload;
    default:
      const combinedReducer = Object(toolkit_["combineReducers"])({
        user: user["b" /* default */].reducer,
        post: reducers_post.reducer
      });
      return combinedReducer(state, action);
  }
};
/* harmony default export */ var reducers = (rootReducer);
// CONCATENATED MODULE: ./store/index.js




const createStore = () => {
  const store = Object(toolkit_["configureStore"])({
    reducer: reducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(external_redux_logger_default.a),
    // redux-toolkit 은 devTools 등의 미들웨어들을 기본적으로 제공 (사용하고 싶은 미들웨어가 있다면 추가로 정의 ex.logger),
    devTools: false
  });
  return store;
};
const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(createStore, {
  debug: false
});
/* harmony default export */ var store_0 = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");
var _interopRequireDefault = __webpack_require__("TqRt");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__("cDcd"));
var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__("Osoz");
var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));
exports.withRouter = _withRouter.default; /* global window */
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

/***/ "oRbK":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Flag");

/***/ }),

/***/ "qJU1":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ "uJZ4":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/AccountCircle");

/***/ }),

/***/ "wS+f":
/***/ (function(module, exports) {

module.exports = require("@mui/material/Alert");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yZmr":
/***/ (function(module, exports) {

module.exports = require("@mui/material");

/***/ }),

/***/ "zKjy":
/***/ (function(module, exports) {

module.exports = require("@faker-js/faker/locale/en_CA");

/***/ }),

/***/ "zWBi":
/***/ (function(module, exports) {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });