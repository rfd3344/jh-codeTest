import _ from 'lodash';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  test: 'aaa'
};

const slice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    updateCore: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    },
  },
  extraReducers: ({ addCase }) => {},
});

export const { updateCore } = slice.actions;

export default slice.reducer;
