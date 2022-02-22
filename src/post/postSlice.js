import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from 'lodash';

export const getPosts = createAsyncThunk(
  'appointment/getPosts',
  async (data) => {
    const posts = await axios.get(
      'https://my-json-server.typicode.com/typicode/demo/posts'
    );

    return posts.data;
  }
);

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      const { payload } = action;
      state.posts = payload;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
