import { all, fork, takeLatest, call, put, delay } from 'redux-saga/effects';
import {
  LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, getDummyPosts,
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, postMyDummyPost,
  LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE,
  REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, postMyDummyComment,
  REMOVE_COMMENT_REQUEST, REMOVE_COMMENT_SUCCESS, REMOVE_COMMENT_FAILURE
} from "../reducers/post";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";
import axios from 'axios';
import shortId from 'shortid';

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
      data: postMyDummyPost(action, id)
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
      data: postMyDummyComment(action, id)
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
  return axios.post(`/api/post/${data.id}/comment/`, data);
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

function likePostAPI(data) {
  return axios.post(`/api/post/${data.postId}/like/`, data);
}

function* likePost(action) {
  // const result = yield call(likePostAPI, action.data);
  yield delay(1000);
  try{
    const id = shortId.generate();
    yield put({
      type: LIKE_POST_SUCCESS,
      data: {
        id,
        postId: action.data.postId,
        userId: action.data.userId,
      }

    })
  }
  catch(err) {
    console.error(err);
    yield put({
      type: LIKE_POST_FAILURE,
      error: err.response.data,
    })
  }
}

function unlikePostAPI(data) {
  return axios.post(`/api/post/${data.postId}/like/`, data);
}

function* unlikePost(action) {
  // const result = yield call(unlikePostAPI, action.data);
  yield delay(1000);
  try{
    const id = shortId.generate();
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data: action.data,
    })
  }
  catch(err) {
    console.error(err);
    yield put({
      type: UNLIKE_POST_FAILURE,
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

function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost)
}

function* watchUnlikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost)
}

export default function* postSaga() {
  yield all([
    fork(watchLoadPost),
    fork(watchAddPost),
    fork(watchLikePost),
    fork(watchUnlikePost),
    fork(watchRemovePost),
    fork(watchAddComment),
    fork(watchRemoveComment),
  ])
}