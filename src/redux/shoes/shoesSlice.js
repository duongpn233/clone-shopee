import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import shoesApi from "../../axios/shoesApi";

export const getShoes = createAsyncThunk('shoes/getShoes', async (params, thunkApi) => {
  const res = await shoesApi.getShoes(params);
  return res.data;
});

const shoesSlice = createSlice({
  name: 'shoes',
  initialState: {
    shoesList: [],
    loading: false,
    error: ''
  },
  reducers: {
    selectSize(state, action) {
      const idShoes = action.payload.shoesId;
      const sizeIndex = action.payload.sizeIndex;
      state.shoesList.forEach(shoes => {
        if (shoes._id === idShoes) {
          shoes.sizes.forEach((size, index) => {
            if (size.isActive && index !== sizeIndex) {
              size.isActive = false;
            }
          });
          shoes.sizes[sizeIndex].isActive = !shoes.sizes[sizeIndex].isActive;
        }
      });
    }
  },
  extraReducers: {
    [getShoes.pending]: (state) => {
      state.loading = true;
    },
    [getShoes.fulfilled]: (state, action) => {
      state.loading = false;
      state.shoesList = action.payload.shoes;
    },
    [getShoes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    }
  }

});
const { actions, reducer } = shoesSlice;
export const { selectSize } = actions;
export default reducer;