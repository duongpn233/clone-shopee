import { configureStore } from '@reduxjs/toolkit';
import shoesReducer from './shoes/shoesSlice';
import  userReducer  from './users/userSlice';
import cartUserReducer from './cartUser/cartUserSlicce';
import shopsReducer from './shops/shopSlice';
import historyReducer from './searchHistory/searchHistorySlice';
import addressReducer from './address/addressSlice';
import extraReducer from './extra/extraSlice';
const store = configureStore({ 
    reducer: {
        shoes: shoesReducer,
        user: userReducer,
        cartUser: cartUserReducer,
        shops: shopsReducer,
        searchHistory: historyReducer,
        address: addressReducer,
        extra: extraReducer
    }
});
export default store;