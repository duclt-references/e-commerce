import { cartService } from '@/services/cartService';
import { IProductAddToCart, IProductUpdateToCart } from '@/types/cart.type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '..';

const getCartItems = async (userId: string | undefined) => {
  const params = {
    limit: 10,
    filter: `(order_id.user_id='${userId}'&&order_id.status='pending')`,
    expand: 'product_id,order_id',
  };
  const response = await cartService.getCartItems(params);

  if (response.data.items.length > 0) {
    const items = response.data.items;
    const orderId = items[0].order_id;

    const products = items.map(
      (value: {
        id: string;
        expand: { product_id: object };
        quantity: number;
      }) => {
        const { expand: expandProduct } = value;
        return {
          orderId: value.id,
          quantity: value.quantity,
          ...expandProduct.product_id,
        };
      }
    );
    return { orderId, products };
  }
  return [];
};

export const fetchCartItems = createAsyncThunk(
  'cart/cartItems',
  async (userId: string | undefined, { rejectWithValue }) => {
    try {
      return getCartItems(userId);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchAddProductToCart = createAsyncThunk(
  'cart/addItem',
  async (item: IProductAddToCart, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      await cartService.addProductToCart(item);

      const data = await getCartItems(state.auth.currentUser?.id);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchUpdateProductToCart = createAsyncThunk(
  'cart/updateItem',
  async (item: IProductUpdateToCart, { getState, rejectWithValue }) => {
    try {
      await cartService.updateProductToCart(item);
      const state = getState() as RootState;
      const data = await getCartItems(state.auth.currentUser?.id);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
