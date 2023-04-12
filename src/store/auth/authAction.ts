import { authService } from '@/services/authService';
import { ILogin } from '@/types/auth.type';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }: ILogin, { rejectWithValue }) => {
    try {
      const { data } = await authService.login({
        identity: email,
        password,
      });
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

export const fetchRegister = createAsyncThunk(
  'auth/register',
  async (
    data: { email: string; password: string; name: string; phone: string },
    { rejectWithValue }
  ) => {
    try {
      const response = authService.register(data);
      const resData = (await response).data;
      return resData;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
