import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import usersApi from "../../axios/usersApi";

export const signIn = createAsyncThunk('user/signIn', async (data, thunkApi) => {
  const resToken = await usersApi.signIn(data);
  const token = resToken.data.token;
  localStorage.setItem('token', JSON.stringify(token));
  const res = await usersApi.getUser();
  return res.data;

});

export const signUp = createAsyncThunk('user/signUp', async (data, thunkApi) => {
  const resToken = await usersApi.signUp(data);
  const token = resToken.data.token;
  localStorage.setItem('token', JSON.stringify(token));
  const res = await usersApi.getUser();
  console.log(res)
  return res.data;
});

export const signUpAndSignInWithGoogle = createAsyncThunk('user/signUpWithGoogle', async (data, thunkApi) => {
  const resToken = await usersApi.signUpAndSignInWithGoogle(data);
  const token = resToken.data.token;
  localStorage.setItem('token', JSON.stringify(token));
  const res = await usersApi.getUser();
  return res.data;
});

export const getUser = createAsyncThunk('user/getUser', async (data, thunkApi) => {
  const res = await usersApi.getUser();
  return res.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    loading: false,
    error: ''
  },
  reducers: {
    logOut(state) {
      state.user = {};
    }
  },
  extraReducers: {
    [signIn.pending]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [signIn.rejected]: (state, action) => {
      console.log(action.error);
      state.loading = false;
      state.error = {
        message: action.error.message
      };
    },
    [signUp.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [signUp.rejected]: (state, action) => {
      console.log(action.error);
      state.loading = false;
      state.error = {
        message: action.error.message
      };
    },
    [signUpAndSignInWithGoogle.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [signUpAndSignInWithGoogle.rejected]: (state, action) => {
      console.log(action.error);
      state.loading = false;
      state.error = {
        message: action.error.message
      };
    },
    [getUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      console.log(action.error);
      state.loading = false;
      state.error = {
        message: action.error.message
      };
    }
  }

});
const { actions, reducer } = userSlice;
export const { logOut } = actions;
export default reducer;