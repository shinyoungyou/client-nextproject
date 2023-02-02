import { all, fork, takeLatest, call, put, delay } from 'redux-saga/effects';
import {
  LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, getDummyPosts,
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, getSingleDummyPost,
  REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, getDummyComment,
  REMOVE_COMMENT_REQUEST, REMOVE_COMMENT_SUCCESS, REMOVE_COMMENT_FAILURE
} from "../reducers/post";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";
import axios from 'axios';
import shortId from 'shortid';
import { faker } from '@faker-js/faker/locale/en_CA';

function loadPostsAPI(data) {
  return axios.post(`/api/posts/`, data);
}

function* loadPosts(action) {
  // const result = yield call(loadPostsAPI, action.data);
  yield delay(1000);
  try{
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: getDummyPosts(10)
    })
  }
  catch(err) {
    console.error(err);
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    })
  }
}

function addPostAPI(data) {
  return axios.post(`/api/post/${data.id}`, data);
}

function* addPost(action) {
  // const result = yield call(addPostAPI, action.data);
  yield delay(1000);
  try{
    const id = shortId.generate();
    yield put({
      type: ADD_POST_SUCCESS,
      data: getSingleDummyPost(action, id)
    })
    yield put({
      type: ADD_POST_TO_ME,
      data: id
    })
  }
  catch(err) {
    console.error(err);
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    })
  }
}

function removePostAPI(data) {
  return axios.post(`/api/post/${data.id}`, data);
}

function* removePost(action) {
  // const result = yield call(removePostAPI, action.data);
  yield delay(1000);
  try{
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data
    })
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data
    })
  }
  catch(err) {
    console.error(err);
    yield put({
      type: REMOVE_POST_FAILURE,
      error: err.response.data,
    })
  }
}

function addCommentAPI(data) {
  return axios.post(`/api/post/${data.postId}/comment/`, data);
}

function* addComment(action) {
  // const result = yield call(addCommentAPI, action.data);
  yield delay(1000);
  try{
    const id = shortId.generate();
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: getDummyComment(action, id)
    })
  }
  catch(err) {
    console.error(err);
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.response.data,
    })
  }
}

function removeCommentAPI(data) {
  return axios.post(`/api/post/${data.id}`, data);
}

function* removeComment(action) {
  // const result = yield call(removeCommentAPI, action.data);
  yield delay(1000);
  try{
    yield put({
      type: REMOVE_COMMENT_SUCCESS,
      data: action.data
    })
  }
  catch(err) {
    console.error(err);
    yield put({
      type: REMOVE_COMMENT_FAILURE,
      error: err.response.data,
    })
  }
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts)
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost)
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost)
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}

function* watchRemoveComment() {
  yield takeLatest(REMOVE_COMMENT_REQUEST, removeComment)
}

export default function* postSaga() {
  yield all([
    fork(watchLoadPost),
    fork(watchAddPost),
    fork(watchRemovePost),
    fork(watchAddComment),
    fork(watchRemoveComment),
  ])
}