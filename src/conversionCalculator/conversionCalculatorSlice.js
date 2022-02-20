import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import axios from 'axios';

import {
  PAYTRON_MAKEUP,
  formatConversionRateUrl,
} from 'src/utils/currencyUtils';

export const getConversionRate = createAsyncThunk(
  'conversionCalculator/getConversionRate',
  async (_arg, { getState }) => {
    const state = getState();
    const { converter } = state.currencyConverter;
    const url = formatConversionRateUrl(converter);
    const rate = await axios.get(url);
    return rate.data;
  }
);

const currencyConverterSlice = createSlice({
  name: 'conversionCalculator',
  initialState: {
    converter: {
      amount: 0,
      sell: 'AUD',
      buy: 'USD',
      fixed: 'sell',
      loading: false,
    },
  },
  reducers: {
    updateConverter: (state, action) => {
      const { payload } = action;
      state.converter = {
        ...state.converter,
        ...payload,
      };
    },
  },
  extraReducers: {
    [getConversionRate.pending]: (state, _action) => {
      state.converter.loading = true;
    },
    [getConversionRate.fulfilled]: (state, action) => {
      const { midMarketRate, clientBuyAmount } = action.payload;
      const rateMakeup = midMarketRate * (1 - PAYTRON_MAKEUP);
      const amountConverted = _.toNumber(clientBuyAmount);
      const amountFinal = amountConverted * (1 - PAYTRON_MAKEUP);
      const amountMakeup = amountConverted - amountFinal;

      state.converter = {
        ...state.converter,
        rateBase: midMarketRate,
        rateMakeup,
        amountConverted,
        amountMakeup,
        amountFinal,
        loading: false,
      };
    },
  },
});

export const { updateConverter } = currencyConverterSlice.actions;
export default currencyConverterSlice.reducer;
