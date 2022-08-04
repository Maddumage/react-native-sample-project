import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export enum GlobalAlertType {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

export interface GlobalAlertState {
  type?: GlobalAlertType;
  title?: string;
  message: string;
  buttonText?: string;
  visible?: boolean;
}

export interface CommonState {
  globalAlert?: GlobalAlertState;
}

const initialState: CommonState = {
  globalAlert: undefined,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    showSuccess(state, action: PayloadAction<GlobalAlertState>) {
      state.globalAlert = {
        ...action.payload,
        type: GlobalAlertType.SUCCESS,
        visible: true,
        title: 'Success',
      };
    },
    showError(state, action: PayloadAction<GlobalAlertState>) {
      state.globalAlert = {
        ...action.payload,
        type: GlobalAlertType.ERROR,
        visible: true,
        title: 'Error',
      };
    },
    closeAlert(state, action: PayloadAction) {
      state.globalAlert = undefined;
    },
  },
});

// Actions
export const commonActions = commonSlice.actions;

// Reducer
const commonReducer = commonSlice.reducer;
export default commonReducer;
