import IUser from '@/types/user.type';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { login, register } from './authAction';

interface AuthState {
  isLoggedIn: boolean;
  logging: boolean;
  currentUser: IUser | null;
  accessToken?: string;
  error?: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ------------------ Register ------------------
    builder.addCase(register.pending, (state) => {
      state.logging = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.logging = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
      state.accessToken = action.payload.token;
    });
    builder.addCase(register.rejected, (state) => {
      state.logging = false;
      state.isLoggedIn = false;
      state.error = '';
    });
    // ------------------ Login ------------------
    builder.addCase(login.pending, (state) => {
      state.logging = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.logging = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
      state.accessToken = action.payload.token;
    });
    builder.addCase(login.rejected, (state) => {
      state.logging = false;
      state.isLoggedIn = false;
      state.error = '';
    });
  },
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectLogging = (state: RootState) => state.auth.logging;
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;

// Reducer
export default authSlice.reducer;
