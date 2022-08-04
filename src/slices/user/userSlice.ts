import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

interface UserState {
  user: any;
  isLoading: boolean;
}

const initialState = {
  user: null,
  isLoading: false,
} as UserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserProfile(state, action: PayloadAction<{ userId: string }>) {
      state.isLoading = true;
      state.user = undefined;
    },
    getUserProfileSuccess(state, action: PayloadAction<User>) {
      state.isLoading = false;
      state.user = action.payload;
    },
    getUserProfileFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
