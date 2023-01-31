import { all, fork, takeLatest, call, put, delay } from 'redux-saga/effects';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, dummyPost,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE } from "../reducers/post";
import axios from 'axios';

function addPostAPI(data) {
  return axios.post(`/api/post/${data.id}`, data);
}

function* addPost(action) {
  // const result = yield call(addPostAPI, action.data);
  yield delay(1000);
  try{
    yield put({
      type: ADD_POST_SUCCESS,
      data: dummyPost
    })
  }
  catch(err) {
    console.error(err);
    yield put({
      type: ADD_POST_FAILURE,
      error: dummyPost
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
    console.error(err);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data
    })
  }
  catch(err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: result.data
    })
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost)
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}

export default function* userSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
  ])
}