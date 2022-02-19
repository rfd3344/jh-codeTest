import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';



export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  middleware:
    process.env.NODE_ENV === 'development'
      ? (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
      : (getDefaultMiddleware) => getDefaultMiddleware(),
});
