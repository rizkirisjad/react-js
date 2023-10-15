/** @format */

import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './features/cart/cartSLice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});
