import { all, fork, takeLatest, call, put, delay } from 'redux-saga/effects';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, dummyPost,
  REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE } from "../reducers/post";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";
import axios from 'axios';
import shortId from 'shortid';
import { faker } from '@faker-js/faker/locale/en_CA';

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
      data: {
        id,
        content: faker.lorem.paragraphs(2),
        createdAt: `${faker.date.past(10)}`.substring(0,24),
        User: {
          id: action.data.userId,
          username: faker.name.fullName()
        },
        Images: [
          {
            src: `${faker.image.cats()}?random=${Date.now()}`,
            alt: "cat"
          }
        ],
        Comments: []
      }
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
      data: {
        id,
        postId: action.data.postId,
        content: faker.lorem.sentences(2),
        createdAt: `${faker.date.past(5)}`.substring(0,24),
        User: {
          id: action.data.userId,
          username: faker.name.fullName()
        },
      },
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

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost)
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost)
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}

export default function* userSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchRemovePost),
    fork(watchAddComment),
  ])
}