import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import searchHistoryApi from "../../axios/searchHistoryApi";

export const getHistory = createAsyncThunk('searchHistory/getHistory', async (params, thunkApi) => {
  const res = await searchHistoryApi.getHistory(params);
  return res.data;
});

export const postHistory = createAsyncThunk('searchHistory/postHistory', async (data, thunkApi) => {
    const res = await searchHistoryApi.postHistory(data);
    return res.data;
  });

const historySlice = createSlice({
  name: 'searchHistory',
  initialState: {
    historyList: [],
    search:'',
    active: 1,
    loading: false,
    error: ''
  },
  reducers: {
    setSearch(state, action){
        state.search = action.payload;
    },
    setNumberActive(state, action){
      state.active = action.payload;
    }
  },
  extraReducers: {
    [getHistory.pending]: (state) => {
      state.loading = true;
    },
    [getHistory.fulfilled]: (state, action) => {
      state.loading = false;
      state.historyList = action.payload;
    },
    [getHistory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [postHistory.fulfilled]: (state, action) => {
        state.historyList.push(action.payload);
        //state.search = action.payload.title;
    }
  }

});
const { actions, reducer } = historySlice;
export const { setSearch, setNumberActive } = actions;
export default reducer;