import authApi from '@/apis/authApi';
import { ILogin } from '@/types/auth.type';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }: ILogin, { rejectWithValue }) => {
    try {
      const { data } = await authApi.login({
        username,
        password,
      });

      // store user's token in local storage
      // localStorage.setItem('userToken', data.userToken);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (
    data: { email: string; password: string; name: string; phone: string },
    { rejectWithValue }
  ) => {
    try {
      const response = authApi.register(data);
      const resData = (await response).data;
      return resData;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
