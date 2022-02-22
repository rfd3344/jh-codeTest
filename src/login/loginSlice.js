import { createAsyncThunk, createSlice, unwrapResult } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from 'lodash';
const matchedInfo = {
  email: `candidate@carly.co`,
  password: `blueCar_345#`,
};

export const doLogin = createAsyncThunk(
  'appointment/getLoggedinInfo',
  async (data) => {
    const isMatch = _.isEqual(data, matchedInfo);
    if (!isMatch) {
      throw new Error('Invalid login');
    }

    const user = await axios.post('https://subscribe-carly.drivemycar.me/api/Login');
    // .then(unwrapResult);
    return user.data;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: {},
  },
  reducers: {},

  extraReducers: {
    [doLogin.fulfilled]: (state, action) => {
      const { payload } = action;
      state.user = payload;
    },
  },
});

export const {} = loginSlice.actions;
export default loginSlice.reducer;
