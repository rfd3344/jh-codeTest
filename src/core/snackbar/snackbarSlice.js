import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    open: false,
    isError: false,
    message: 'A server error occurred, please try again later.',
  },
  reducers: {
    openSnackbar: (state, action) => {
      const { payload = {} } = action;
      if (payload.isError) {
        state.isError = true;
        state.message =
          payload.message || 'A server error occurred, please try again later.';
      } else {
        state.isError = false;
        state.message = payload.message || payload || 'Success';
      }
      state.open = true;
    },
    openErrorBar: (state, action) => {
      return {
        open: true,
        isError: true,
        message:
          action.payload || 'A server error occurred, please try again later',
      };
    },
    closeSnackbar: (state, action) => {
      state.open = false;
    },
  },
});

export const { openSnackbar, openErrorBar, closeSnackbar } =
  snackbarSlice.actions;
export default snackbarSlice.reducer;
