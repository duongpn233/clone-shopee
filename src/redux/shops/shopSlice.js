import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import shopApi from "../../axios/shopApi";

export const getShops = createAsyncThunk('shops/getShops', async (params, thunkApi) => {
    const res = await shopApi.getShops(params);
    return res.data;
});

const shopSlice = createSlice({
    name: 'shops',
    initialState: {
        shopsList: [],
        loading: false,
        error: ''
    },
    reducers: {
    
    },
    extraReducers: {
        [getShops.pending]: (state) => {
            state.loading = true;
        },
        [getShops.fulfilled]: (state, action) => {
            state.loading = false;
            state.shopsList = action.payload;
        },
        [getShops.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }
    }
});

const { actions, reducer } = shopSlice;
// export const {  } = actions;
export default reducer;