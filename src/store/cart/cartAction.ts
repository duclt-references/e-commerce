import { cartService } from '@/services/cartService';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCartItems = createAsyncThunk(
  'cart/cartItems',
  async (userId: string | undefined, { rejectWithValue }) => {
    try {
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
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
