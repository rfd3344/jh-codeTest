import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {},
  reducers: {
    setLoginDetails: (state, action) => {
      state.loginDetails = action.payload;
    },
    setStore: (state, action) => {
      state.store = action.payload;
    },
    showChangeStore: (state, action) => {
      state.showChangeStore = true;
    },
    hideChangeStore: (state, action) => {
      state.showChangeStore = false;
    },
  },

  extraReducers: {
    // [getCurrentSession.fulfilled]: (state, action) => {
    //   state.loginDetails = action.payload.loginDetails;
    //   state.store = action.payload.store;
    // },
  },
});

export const { setStore, showChangeStore, hideChangeStore } =
  loginSlice.actions;
export default loginSlice.reducer;
