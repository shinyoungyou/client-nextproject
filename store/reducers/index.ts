import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import userSlice from './user';
import postSlice from './post';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  post: postSlice.reducer,
});

export default rootReducer;
