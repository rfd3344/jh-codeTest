import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import currencyConverter from 'src/conversionCalculator/conversionCalculatorSlice';

export const store = configureStore({
  reducer: {
    currencyConverter,
  },
  middleware:
    process.env.NODE_ENV === 'development'
      ? (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
      : (getDefaultMiddleware) => getDefaultMiddleware(),
});
