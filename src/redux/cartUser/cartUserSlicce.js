import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import cartUserApi from "../../axios/cartUserApi";


export const getCartUser = createAsyncThunk('cartUser/getCartUser', async () => {
    const res = await cartUserApi.getCartUser();
    return res.data;
});

export const postCart = createAsyncThunk('cartUser/postCart', async (data, thunkApi) => {
    const res = await cartUserApi.postCart(data);
    return res.data;
});

export const deleteCartUser = createAsyncThunk('cartUser/deleteCartUser', async (params, thunkApi) => {
    await cartUserApi.deleteCartUser(params.id);
    return params;
});

const cartUserSlice = createSlice({
    name: 'cartUser',
    initialState: {
        cartUser: [],
        loading: false,
        error: ''
    },
    reducers: {

    },
    extraReducers: {
        [getCartUser.pending]: (state) => {
            state.loading = true;
        },
        [getCartUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.cartUser = action.payload;
        },
        [getCartUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [postCart.fulfilled]: (state, action) => {
            state.cartUser.push(action.payload);
        },
        [deleteCartUser.fulfilled]: (state, action) => {
            state.cartUser.splice(action.payload.index, 1);
        }

    }

});
const { actions, reducer } = cartUserSlice;
//export const {  } = actions;
export default reducer;