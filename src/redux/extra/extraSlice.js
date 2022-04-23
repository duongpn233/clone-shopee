import { createSlice } from "@reduxjs/toolkit";

const extraSlice = createSlice({
    name: 'extra',
    initialState: {
        active: 1,
        loading: false,
        error: ''
    },
    reducers: {
        setNumberActive(state, action) {
            state.active = action.payload;
        }
    }
});

const { actions, reducer } = extraSlice;
export const { setNumberActive } = actions;
export default reducer;