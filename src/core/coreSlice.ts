import _ from 'lodash';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  country: {},
  snackBar: {
    isOpen: false,
    isError: false,
    message: '',
  },
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
