import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
import rootReducer from './reducers';

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // redux-toolkit 은 devTools 등의 미들웨어들을 기본적으로 제공 (사용하고 싶은 미들웨어가 있다면 추가로 정의 ex.logger),
    devTools: process.env.NODE_ENV === 'development',
  });
  return store;
};

const wrapper = createWrapper(createStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
