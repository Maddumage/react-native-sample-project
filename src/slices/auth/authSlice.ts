import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type CurrentUser = {
  id: string;
  name: string;
};

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  isLoading?: boolean;
  currentUser?: CurrentUser;
}

const initialState: AuthState = {
  isLoggedIn: false,
  isLoading: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.isLoading = true;
      state.currentUser = undefined;
      state.isLoggedIn = false;
    },
    loginSuccess(state, action: PayloadAction<CurrentUser>) {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsLogging = (state: RootState) => state.auth.isLoading;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
