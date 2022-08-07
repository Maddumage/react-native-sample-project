import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = {
	_id: string;
	first_name: string;
	last_name: string;
	email: string;
	password: string;
};

interface UserState {
	user: User | undefined;
	isLoading: boolean;
}

const initialState = {
	user: undefined,
	isLoading: false,
} as UserState;

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUserProfile(state, action: PayloadAction) {
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
