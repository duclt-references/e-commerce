import { IProduct } from '@/types/product.type';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { fetchCartItems } from './cartAction';

interface CartState {
  cartItems: IProduct[];
  cartQuantity: number;
  cartTotal: number;
}

const initialState: CartState = {
  cartItems: [],
  cartQuantity: 0,
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.cartItems = action.payload;
    });
  },
});

// Actions
export const cartActions = cartSlice.actions;

// Selectors
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectCartQuantity = (state: RootState) => state.cart.cartQuantity;
export const selectCartTotal = (state: RootState) => state.cart.cartTotal;

// Reducer
export default cartSlice.reducer;
