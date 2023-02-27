import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '.';

const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

export const loadMyInfo = createAsyncThunk('user/loadMyInfo', async (payload, thunkAPI) => {
    try {
        const response = await instance.get('user/');
        return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})

export const logIn = createAsyncThunk('user/logIn', async (payload, thunkAPI) => {
    try {
        const response = await instance.post('user/login', payload);
        return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})

export const logOut = createAsyncThunk('user/logOut', async (payload, thunkAPI) => {
    try {
        const response = await instance.post('user/logout');
        return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})

export const signUp = createAsyncThunk('user/signUp', async (payload, thunkAPI) => {
    try {
        const response = await instance.post('user/', payload);
        return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})

export const follow = createAsyncThunk('user/follow', async (payload, thunkAPI) => {
    try {
        // const response = await instance.post('user/follow', payload);
        await pause(1000);
        return thunkAPI.fulfillWithValue(payload); // pass to extraReducer
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})

export const unfollow = createAsyncThunk('user/unfollow', async (payload, thunkAPI) => {
    try {
        // const response = await instance.delete(`user/follow/${payload.id}`);
        await pause(1000);
        return thunkAPI.fulfillWithValue(payload); // pass to extraReducer
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})

export const changeUsername = createAsyncThunk('user/changeUsername', async (payload, thunkAPI) => {
    try {
        const response = await instance.patch('user/profile', payload);
        await pause(1000);
        return thunkAPI.fulfillWithValue(response.data); // pass to extraReducer
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data); // pass to extraReducer
    }
})