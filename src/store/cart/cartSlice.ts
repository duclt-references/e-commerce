import { ICartItem } from '@/types/cart.type';
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
      const { cartTotalQuantity, cartTotalAmount } = updateState(
        payload.products
      );
      state.cartItems = payload.products;
      state.cartTotalQuantity = cartTotalQuantity;
      state.cartTotalAmount = cartTotalAmount;
    });
    builder.addCase(fetchAddProductToCart.fulfilled, (state, { payload }) => {
      const { cartTotalQuantity, cartTotalAmount } = updateState(
        payload.products
      );
      state.cartItems = payload.products;
      state.cartTotalQuantity = cartTotalQuantity;
      state.cartTotalAmount = cartTotalAmount;
    });
    builder.addCase(
      fetchUpdateProductToCart.fulfilled,
      (state, { payload }) => {
        const { cartTotalQuantity, cartTotalAmount } = updateState(
          payload.products
        );
        state.cartItems = payload.products;
        state.cartTotalQuantity = cartTotalQuantity;
        state.cartTotalAmount = cartTotalAmount;
      }
    );
  },
});

const updateState = (products: []) => {
  const cartTotalQuantity = products.reduce(
    (sum: number, item: ICartItem) => sum + item.quantity,
    0
  );
  const cartTotalAmount = products.reduce(
    (sum: number, item: ICartItem) => sum + item.price * item.discount,
    0
  );
  return { cartTotalQuantity, cartTotalAmount };
};

export const selectCartId = (state: RootState) => state.cart.cartId;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectCartTotalQuantity = (state: RootState) =>
  state.cart.cartTotalQuantity;
export const selectCartTotalAmount = (state: RootState) =>
  state.cart.cartTotalAmount;

export default cartSlice.reducer;
