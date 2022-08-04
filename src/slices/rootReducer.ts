import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { userReducer } from './user';
import { commonReducer } from './common';

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  common: commonReducer,
});
