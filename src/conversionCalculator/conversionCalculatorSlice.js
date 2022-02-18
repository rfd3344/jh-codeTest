import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const currencyConverterSlice = createSlice({
  name: 'conversionCalculator',
  initialState: {
    converter: {},
  },
  reducers: {
    updateConverter: (state, action) => {
      const { payload } = action;
      state.converter = {
        ...state.converter,
        payload,
      };
    },
  },
  extraReducers: {},
});

export const { setStore, showChangeStore, hideChangeStore } =
  currencyConverterSlice.actions;
export default currencyConverterSlice.reducer;
