import { all, fork, takeLatest, put, call, delay } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, dummyMy } from "../reducers/user";
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
      error: err.data
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
      error: err.data
    })
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
  ])
}