import { IProduct } from '@/types/product.type';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import {
  fetchAddProductToCart,
  fetchCartItems,
  fetchUpdateProductToCart,
} from './cartAction';

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
      const { cartItems, cartTotalQuantity, cartTotalAmount } = updateState(
        payload.products
      );
      state.cartItems = cartItems;
      state.cartTotalQuantity = cartTotalQuantity;
      state.cartTotalAmount = cartTotalAmount;
    });
    builder.addCase(fetchAddProductToCart.fulfilled, (state, { payload }) => {
      const { cartItems, cartTotalQuantity, cartTotalAmount } = updateState(
        payload.products
      );
      state.cartItems = cartItems;
      state.cartTotalQuantity = cartTotalQuantity;
      state.cartTotalAmount = cartTotalAmount;
    });
    builder.addCase(
      fetchUpdateProductToCart.fulfilled,
      (state, { payload }) => {
        const { cartItems, cartTotalQuantity, cartTotalAmount } = updateState(
          payload.products
        );
        state.cartItems = cartItems;
        state.cartTotalQuantity = cartTotalQuantity;
        state.cartTotalAmount = cartTotalAmount;
      }
    );
  },
});

const updateState = (products: []) => {
  const cartItems = products;
  const cartTotalQuantity = products.length;
  const cartTotalAmount = products.reduce(
    (sum: number, item: IProduct) => sum + item.price * item.discount,
    0
  );
  return { cartItems, cartTotalQuantity, cartTotalAmount };
};

export const selectCartId = (state: RootState) => state.cart.cartId;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectCartTotalQuantity = (state: RootState) =>
  state.cart.cartTotalQuantity;
export const selectCartTotalAmount = (state: RootState) =>
  state.cart.cartTotalAmount;

export default cartSlice.reducer;
