import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import snackbar from 'src/core/snackbar/snackbarSlice';
import login from 'src/login/loginSlice';
import post from 'src/post/postSlice';

export const store = configureStore({
  reducer: {
    login,
    post,
    common: combineReducers({
      snackbar,
    }),
  },
  middleware:
    process.env.NODE_ENV === 'development'
      ? (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
      : (getDefaultMiddleware) => getDefaultMiddleware(),
});
