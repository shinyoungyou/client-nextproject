import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '.';
import { addPostToMe, removePostToMe } from "../reducers/user";
import { getDummyPosts, postMyDummyPost, postMyDummyComment } from '../reducers/post';

import shortId from 'shortid';

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export const loadPosts = createAsyncThunk('post/loadPosts', async (payload, thunkAPI) => {
  try {
    const response = await instance.get('posts/');
    // await pause(1000);
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(getDummyPosts(10)); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const addPost = createAsyncThunk('post/addPost', async (payload, thunkAPI) => {
  try {
    const response = await instance.post('post/', payload);
    // await pause(1000);
    // const id = shortId.generate();
    thunkAPI.dispatch(addPostToMe(response.data.id));
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(postMyDummyPost(payload, id)); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const removePost = createAsyncThunk('post/removePost', async (payload, thunkAPI) => {
  try {
    // const response = await instance.delete(`post/${payload.id}`);
    await pause(1000);
    thunkAPI.dispatch(removePostToMe(payload));
    // return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    return thunkAPI.fulfillWithValue(payload); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const addComment = createAsyncThunk('post/addComment', async (payload, thunkAPI) => {
  try {
    const response = await instance.post(`post/${payload.postId}/comment/`, payload);
    // await pause(1000);
    // const id = shortId.generate();
    return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    // return thunkAPI.fulfillWithValue(postMyDummyComment(payload, id)); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const removeComment = createAsyncThunk('post/removeComment', async (payload, thunkAPI) => {
  try {
    // const response = await instance.delete(`post/${payload.postId}/comment/${payload.id}`);
    await pause(1000);
    return thunkAPI.fulfillWithValue(payload); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const likePost = createAsyncThunk('post/likePost', async (payload, thunkAPI) => {
  try {
    // const response = await instance.post(`post/${payload.postId}/like`, payload);
    await pause(1000);
    return thunkAPI.fulfillWithValue(payload); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})

export const unlikePost = createAsyncThunk('post/unlikePost', async (payload, thunkAPI) => {
  try {
    // const response = await instance.delete(`post/${payload.postId}/like/${payload.id}`);
    await pause(1000);
    return thunkAPI.fulfillWithValue(payload); // pass to extraReducer
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
  }
})