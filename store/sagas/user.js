import { all, fork, takeLatest, put, call, delay } from 'redux-saga/effects';
import {
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, dummyMy,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
  FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
  UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE,
  CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE
} from "../reducers/user";
import axios from 'axios';

function logInAPI(data) {
  return axios.post('/user/login', data)
}
function* logIn(action) {
  // const result = yield call(logInAPI, action.data);
  yield delay(1000);
  try{
    console.log('saga login');
    yield put({
      type: LOG_IN_SUCCESS,
      data: dummyMy
    })
  }
  catch(err) {
    console.error(err);
    put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    })
  }
}

function logOutAPI() {
  return axios.post('/user/logout')
}
function* logOut() {
  // const result = yield call(logOutAPI);
  yield delay(1000);
  console.log('saga logout');
  try{
    yield put({
      type: LOG_OUT_SUCCESS,
    })
  } catch (err) {
    console.error(err);
    put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    })
  }
}

function signUpAPI(data) {
  return axios.post('/user/signup', data)
}
function* signUp(action) {
  // const result = yield call(signUpAPI, action.data);
  yield delay(1000);
  try{
    yield put({
      type: SIGN_UP_SUCCESS,
    })
  } catch (err) {
    console.error(err);
    put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    })
  }
}

function followAPI(data) {
  return axios.post('/user/follow', data)
}
function* follow(action) {
  // const result = yield call(followAPI, action.data);
  yield delay(1000);
  try{
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data
    })
  } catch (err) {
    console.error(err);
    put({
      type: FOLLOW_FAILURE,
      error: err.response.data,
    })
  }
}

function unfollowAPI(data) {
  return axios.post('/user/unfollow', data)
}
function* unfollow(action) {
  // const result = yield call(unfollowAPI, action.data);
  yield delay(1000);
  try{
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data
    })
  } catch (err) {
    console.error(err);
    put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    })
  }
}

function changeNicknameAPI(data) {
  return axios.post('/user/unfollow', data)
}
function* changeNickname(action) {
  // const result = yield call(changeNicknameAPI, action.data);
  yield delay(1000);
  try{
    yield put({
      type: CHANGE_NICKNAME_SUCCESS,
    })
  } catch (err) {
    console.error(err);
    put({
      type: CHANGE_NICKNAME_FAILURE,
      error: err.response.data,
    })
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function* watchChangeNickname() {
  yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchChangeNickname),
  ])
}