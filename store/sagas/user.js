import { all, fork, takeLatest, put, call, delay } from 'redux-saga/effects';
import { dummyMy } from "../reducers/user";

import { LogInActionType, LogOutActionType, SignUpActionType,
  FollowActionType, UnfollowActionType, ChangeNicknameActionType,
} from '../action-types/user';

import axios from 'axios';

function logInAPI(data) {
  return axios.post('user/login', data)
}
function* logIn(action) {
  const result = yield call(logInAPI, action.data);
  console.log(result);
  // yield delay(1000);
  try{
    console.log('saga login');
    yield put({
      type: LogInActionType.LOG_IN_SUCCESS,
      data: dummyMy
    })
  }
  catch(err) {
    console.error(err);
    put({
      type: LogInActionType.LOG_IN_FAILURE,
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
      type: LogOutActionType.LOG_OUT_SUCCESS,
    })
  } catch (err) {
    console.error(err);
    put({
      type: LogOutActionType.LOG_OUT_FAILURE,
      error: err.response.data,
    })
  }
}

function signUpAPI(data) { // post /: signup
  return axios.post('/user/', data)
}
function* signUp(action) {
  const result = yield call(signUpAPI, action.data);
  console.log(result);
  // yield delay(1000);
  try{
    yield put({
      type: SignUpActionType.SIGN_UP_SUCCESS,
    })
  } catch (err) {
    console.error(err);
    put({
      type: SignUpActionType.SIGN_UP_FAILURE,
      error: err.response.data,
    })
    console.log(err.response.data)
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
      type: FollowActionType.FOLLOW_SUCCESS,
      data: action.data
    })
  } catch (err) {
    console.error(err);
    put({
      type: FollowActionType.FOLLOW_FAILURE,
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
      type: UnfollowActionType.UNFOLLOW_SUCCESS,
      data: action.data
    })
  } catch (err) {
    console.error(err);
    put({
      type: UnfollowActionType.UNFOLLOW_FAILURE,
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
      type: ChangeNicknameActionType.CHANGE_NICKNAME_SUCCESS,
    })
  } catch (err) {
    console.error(err);
    put({
      type: ChangeNicknameActionType.CHANGE_NICKNAME_FAILURE,
      error: err.response.data,
    })
  }
}

function* watchLogIn() {
  yield takeLatest(LogInActionType.LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LogOutActionType.LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SignUpActionType.SIGN_UP_REQUEST, signUp);
}

function* watchFollow() {
  yield takeLatest(FollowActionType.FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(UnfollowActionType.UNFOLLOW_REQUEST, unfollow);
}

function* watchChangeNickname() {
  yield takeLatest(ChangeNicknameActionType.CHANGE_NICKNAME_REQUEST, changeNickname);
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