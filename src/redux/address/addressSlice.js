import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import addressApi from "../../axios/addressApi";

export const getProvince = createAsyncThunk('address/getProvince', async (params, thunkApi) => {
    const addressList = await addressApi.getProvince(params);
    return addressList.data;
});
export const searchProvince = createAsyncThunk('address/searchProvince', async (params, thunkApi) => {
    const addressList = await addressApi.searchProvince(params);
    return addressList.data;
});
export const getDistrict = createAsyncThunk('address/getDistrict', async (params, thunkApi) => {
    const addressList = await addressApi.getDistrict(params.param, params.id);
    return addressList.data;
});
export const searchDistrict = createAsyncThunk('address/searchDistrict', async (params, thunkApi) => {
    const addressList = await addressApi.searchDistrict(params);
    return addressList.data;
});
export const getWard = createAsyncThunk('address/getWard', async (params, thunkApi) => {
    const addressList = await addressApi.getWard(params.param, params.id);
    return addressList.data;
});
export const searchWard = createAsyncThunk('address/searchWard', async (params, thunkApi) => {
    const addressList = await addressApi.searchWard(params);
    return addressList.data;
});

const addressSlice = createSlice({
    name: 'address',
    initialState: {
        addressList: [],
        loading: false,
        error: ''
    },
    reducers: {
        
    },
    extraReducers: {
        [getProvince.pending]: (state) => {
            state.loading = true;
        },
        [getProvince.fulfilled]: (state, action) => {
            state.loading = false;
            state.addressList = action.payload;
        },
        [getProvince.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [searchProvince.fulfilled]: (state, action) => {
            state.loading = false;
            state.addressList = action.payload;
        },
        [getDistrict.fulfilled]: (state, action) => {
            state.loading = false;
            state.addressList = action.payload.districts;
        },
        [searchDistrict.fulfilled]: (state, action) => {
            state.loading = false;
            state.addressList = action.payload;
        },
        [searchWard.fulfilled]: (state, action) => {
            state.loading = false;
            state.addressList = action.payload;
        },
        [getWard.fulfilled]: (state, action) => {
            state.loading = false;
            state.addressList = action.payload.wards;
        }
    }

});
const { actions, reducer } = addressSlice;
//export const { } = actions;
export default reducer;