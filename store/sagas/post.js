import { all, fork, takeLatest, call, put, delay } from 'redux-saga/effects';
import axios from 'axios';
import shortId from 'shortid';
import {
  AddCommentActionType,
  AddPostActionType, LikePostActionType,
  LoadPostsActionType,
  RemoveCommentActionType,
  RemovePostActionType, UnlikePostActionType
} from "../action-types/post";
import { AddPostToMeActionType, RemovePostOfMeActionType } from "../action-types/user";
import { getDummyPosts, postMyDummyPost, postMyDummyComment } from '../reducers/post';

function loadPostsAPI(data) {
  return axios.post(`/api/posts/`, data);
}

function* loadPosts(action) {
  // const result = yield call(loadPostsAPI, action.data);
  yield delay(1000);
  try{
    yield put({
      type: LoadPostsActionType.LOAD_POSTS_SUCCESS,
      data: getDummyPosts(10)
    })
  }
  catch(err) {
    console.error(err);
    yield put({
      type: LoadPostsActionType.LOAD_POSTS_FAILURE,
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
      type: AddPostActionType.ADD_POST_SUCCESS,
      data: postMyDummyPost(action, id)
    })
    yield put({
      type: AddPostToMeActionType.ADD_POST_TO_ME,
      data: id
    })
  }
  catch(err) {
    console.error(err);
    yield put({
      type: AddPostActionType.ADD_POST_FAILURE,
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
      type: RemovePostActionType.REMOVE_POST_SUCCESS,
      data: action.data
    })
    yield put({
      type: RemovePostOfMeActionType.REMOVE_POST_OF_ME,
      data: action.data
    })
  }
  catch(err) {
    console.error(err);
    yield put({
      type: RemovePostActionType.REMOVE_POST_FAILURE,
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
      type: AddCommentActionType.ADD_COMMENT_SUCCESS,
      data: postMyDummyComment(action, id)
    })
  }
  catch(err) {
    console.error(err);
    yield put({
      type: AddCommentActionType.ADD_COMMENT_FAILURE,
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
      type: RemoveCommentActionType.REMOVE_COMMENT_SUCCESS,
      data: action.data
    })
  }
  catch(err) {
    console.error(err);
    yield put({
      type: RemoveCommentActionType.REMOVE_COMMENT_FAILURE,
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
      type: LikePostActionType.LIKE_POST_SUCCESS,
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
      type: LikePostActionType.LIKE_POST_FAILURE,
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
      type: UnlikePostActionType.UNLIKE_POST_SUCCESS,
      data: action.data,
    })
  }
  catch(err) {
    console.error(err);
    yield put({
      type: UnlikePostActionType.UNLIKE_POST_FAILURE,
      error: err.response.data,
    })
  }
}

function* watchLoadPost() {
  yield takeLatest(LoadPostsActionType.LOAD_POSTS_REQUEST, loadPosts)
}

function* watchAddPost() {
  yield takeLatest(AddPostActionType.ADD_POST_REQUEST, addPost)
}

function* watchRemovePost() {
  yield takeLatest(RemovePostActionType.REMOVE_POST_REQUEST, removePost)
}

function* watchAddComment() {
  yield takeLatest(AddCommentActionType.ADD_COMMENT_REQUEST, addComment)
}

function* watchRemoveComment() {
  yield takeLatest(RemoveCommentActionType.REMOVE_COMMENT_REQUEST, removeComment)
}

function* watchLikePost() {
  yield takeLatest(LikePostActionType.LIKE_POST_REQUEST, likePost)
}

function* watchUnlikePost() {
  yield takeLatest(UnlikePostActionType.UNLIKE_POST_REQUEST, unlikePost)
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