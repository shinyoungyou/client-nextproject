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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+6GR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backUrl; });
const backUrl = true ? 'http://54.176.45.190' : undefined;

/***/ }),

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "2WPw":
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "4DCN":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

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

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Ko8R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+6GR");


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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kQFM");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const App = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "NodeBird"), __jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Public+Sans&display=swap"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/favicon.ico"
  })), __jsx(Component, null));
};
/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].withRedux(App)); // (configureStore가 들어있는)HOC로 감싸주기. 
// 고차 컴포넌트는 컴포넌트를 새로운 컴포넌트로 변환합니다.
// 그냥 컴포넌트는 props를 UI로 변환합니다.(이해 못함. 근데 상관없음)

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zKjy":
/***/ (function(module, exports) {

module.exports = require("@faker-js/faker/locale/en_CA");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });