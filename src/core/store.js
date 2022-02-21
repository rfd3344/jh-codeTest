import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import login from 'src/login/loginSlice';

export const store = configureStore({
  reducer: {
    login,
  },
  middleware:
    process.env.NODE_ENV === 'development'
      ? (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
      : (getDefaultMiddleware) => getDefaultMiddleware(),
});
