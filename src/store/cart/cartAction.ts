import { cartApi } from '@/apis/cartApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await cartApi.getCartItems(id);
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
