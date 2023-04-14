import { IProduct } from '@/types/product.type';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { fetchAddProductToCart, fetchCartItems } from './cartAction';

interface CartState {
  cartId: string | null;
  cartItems: [];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState: CartState = {
  cartId: null,
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.fulfilled, (state, { payload }) => {
      state.cartId = payload.orderId;
      state.cartItems = payload.products;
      state.cartTotalQuantity = payload.products.length;
      state.cartTotalAmount = payload.products.reduce(
        (sum: number, item: IProduct) => sum + item.price * item.discount,
        0
      );
    });
    builder.addCase(fetchAddProductToCart.fulfilled, (state, { payload }) => {
      state.cartItems = payload.products;
      state.cartTotalQuantity = payload.products.length;
      state.cartTotalAmount = payload.products.reduce(
        (sum: number, item: IProduct) => sum + item.price * item.discount,
        0
      );
    });
  },
});

export const selectCartId = (state: RootState) => state.cart.cartId;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectCartTotalQuantity = (state: RootState) =>
  state.cart.cartTotalQuantity;
export const selectCartTotalAmount = (state: RootState) =>
  state.cart.cartTotalAmount;

export default cartSlice.reducer;
