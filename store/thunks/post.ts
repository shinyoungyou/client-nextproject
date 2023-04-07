import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '.';
import { addPostToMe, removePostToMe } from "../reducers/user";
import { Post, ImagePath } from "../state-types/post";
import { User } from "../state-types/user";
import { getDummyPosts, postMyDummyPost, postMyDummyComment } from '../reducers/post';

import shortId from 'shortid';

const pause = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export const loadPosts = createAsyncThunk('post/loadPosts', async (payload: { lastId?: number }, thunkAPI) => {
  try {
    const response = await instance.get(`posts?lastId=${payload?.lastId || 0}`);
    // await pause(1000);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(getDummyPosts(10)); // pass to extraReducer
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const loadPostsByUser = createAsyncThunk('post/loadPostsByUser', async (payload: { id: number, lastId?: number }, thunkAPI) => {
  try {
    const response = await instance.get(`user/${payload.id}/posts?lastId=${payload?.lastId || 0}`);
    // await pause(1000);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(getDummyPosts(10)); // pass to extraReducer
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const loadSinglePost = createAsyncThunk('post/loadSinglePost', async (payload: { id: number }, thunkAPI) => {
  try {
    const response = await instance.get(`post/${payload.id}`);
    // await pause(1000);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(getDummyPosts(10)); // pass to extraReducer
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const uploadImages = createAsyncThunk('post/uploadImages', async (payload: FormData, thunkAPI) => {
  try {
    const response = await instance.post(`post/images/`, payload);
    // await pause(1000);
    // const id = shortId.generate();
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(postMyDummyComment(payload, id)); // pass to extraReducer
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const addPost = createAsyncThunk('post/addPost', async (payload: { content: string, images?: ImagePath[] }, thunkAPI) => {
  try {
    const response = await instance.post('post/', payload);
    // await pause(1000);
    // const id = shortId.generate();
    thunkAPI.dispatch(addPostToMe(response.data.id));
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(postMyDummyPost(payload, id)); // pass to extraReducer
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const editPost = createAsyncThunk('post/editPost', async (payload: { id: number, content: string }, thunkAPI) => {
  try {
    const response = await instance.patch(`post/${payload.id}`, payload);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const removePost = createAsyncThunk('post/removePost', async (payload: Post, thunkAPI) => {
  try {
    const response = await instance.delete(`post/${payload.id}`);
    // await pause(1000);
    thunkAPI.dispatch(removePostToMe(response.data));
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(payload); // pass to extraReducer
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const addComment = createAsyncThunk('post/addComment', async (payload: { content: string, postId: number, userId: number, User: User }, thunkAPI) => {
  try {
    const response = await instance.post(`post/${payload.postId}/comment/`, payload);
    // await pause(1000);
    // const id = shortId.generate();
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(postMyDummyComment(payload, id)); // pass to extraReducer
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const editComment = createAsyncThunk('post/editComment', async (payload: { postId: number, id: number, content: string }, thunkAPI) => {
  try {
    const response = await instance.patch(`post/${payload.postId}/comment/${payload.id}`, payload);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const removeComment = createAsyncThunk('post/removeComment', async (payload: { postId: number, id: number }, thunkAPI) => {
  try {
    const response = await instance.delete(`post/${payload.postId}/comment/${payload.id}`);
    // await pause(1000);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const likePost = createAsyncThunk('post/likePost', async (payload: { postId: number }, thunkAPI) => {
  try {
    const response = await instance.post(`post/${payload.postId}/like`);
    // await pause(1000);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const unlikePost = createAsyncThunk('post/unlikePost', async (payload: { postId: number }, thunkAPI) => {
  try {
    const response = await instance.delete(`post/${payload.postId}/like`);
    // await pause(1000);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const retweet = createAsyncThunk('post/retweet', async (payload: { id: number }, thunkAPI) => {
  try {
    const response = await instance.post(`post/${payload.id}/retweet`, payload);
    // await pause(1000);
    // const id = shortId.generate();
    thunkAPI.dispatch(addPostToMe(response.data.id));
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(postMyDummyPost(payload, id)); // pass to extraReducer
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const undoRetweet = createAsyncThunk('post/undoRetweet', async (payload: { id: number }, thunkAPI) => {
  try {
    const response = await instance.delete(`post/${payload.id}/retweet`);
    // await pause(1000);
    thunkAPI.dispatch(removePostToMe(response.data));
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(payload); // pass to extraReducer
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})



