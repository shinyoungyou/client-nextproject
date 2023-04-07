import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '.';
import { User } from "../state-types/user";

const pause = (duration: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

export const loadMyInfo = createAsyncThunk('user/loadMyInfo', async (payload, thunkAPI) => {
    try {
        const response = await instance.get('user/');
        return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})

export const loadSingleUser = createAsyncThunk('user/loadSingleUser', async (payload: { id: number }, thunkAPI) => {
    try {
        const response = await instance.get(`user/${payload.id}`);
        return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})

export const logIn = createAsyncThunk('user/logIn', async (payload: { email: string, pass: string }, thunkAPI) => {
    try {
        const response = await instance.post('user/login', payload);
        return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})

export const logOut = createAsyncThunk('user/logOut', async (payload, thunkAPI) => {
    try {
        const response = await instance.post('user/logout');
        return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})

export const signUp = createAsyncThunk('user/signUp', async (payload: { email: string, username: string, pass: string }, thunkAPI) => {
    try {
        const response = await instance.post('user/', payload);
        return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})

export const changeUsername = createAsyncThunk('user/changeUsername', async (payload: { username: string }, thunkAPI) => {
    try {
        const response = await instance.patch('user/profile', payload);
        return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})

export const loadFollowings = createAsyncThunk('user/loadFollowings', async (payload, thunkAPI) => {
    try {
        const response = await instance.get('user/followings');
        return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})

export const follow = createAsyncThunk('user/follow', async (payload: Partial<User>, thunkAPI) => {
    try {
        const response = await instance.put(`user/following/${payload.id}`, payload);
        // await pause(1000);
        return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})

export const unfollow = createAsyncThunk('user/unfollow', async (payload: { id: number }, thunkAPI) => {
    try {
        const response = await instance.delete(`user/following/${payload.id}`);
        // await pause(1000);
        return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})

export const loadFollowers = createAsyncThunk('user/loadFollowers', async (payload, thunkAPI) => {
    try {
        const response = await instance.get('user/followers');
        return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})

export const removeFollower = createAsyncThunk('user/removeFollower', async (payload: { id: number }, thunkAPI) => {
    try {
        const response = await instance.delete(`user/follower/${payload.id}`);
        // await pause(1000);
        return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})


