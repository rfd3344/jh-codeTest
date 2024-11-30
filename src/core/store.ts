import { configureStore } from '@reduxjs/toolkit';

import core from './coreSlice';

export const store = configureStore({
  reducer: {
    core,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
