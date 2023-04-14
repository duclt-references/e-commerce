import { cartService } from '@/services/cartService';
import { IProductAddToCart } from '@/types/cart.type';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
      (value: { expand: { product_id: object }; quantity: number }) => {
        const { expand: expandProduct } = value;
        return {
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
  async (item: IProductAddToCart, { rejectWithValue }) => {
    try {
      await cartService.addProductToCart(item);
      const data = await getCartItems(item.user_id as string);
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
  async (item: IProductAddToCart, { rejectWithValue }) => {
    try {
      await cartService.updateProductToCart(item);
      const data = await getCartItems(item.user_id as string);
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
