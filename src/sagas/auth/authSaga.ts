import { call, put, takeLatest } from 'redux-saga/effects';
import { authService } from '../../services';
import { commonActions, authActions } from '../../slices';

export const authSaga = {
  login: function* (action: any) {
    const params = action?.payload ?? {};
    try {
      const { data, status } = yield call(authService.auth.login, params);
      if (status === 200) {
        yield put(authActions.loginSuccess(data));
      } else {
        yield put(authActions.loginFailed(data));
        yield put(commonActions.showError({ message: data }));
      }
    } catch (error: any) {
      yield put(authActions.loginFailed(JSON.stringify(error)));
      yield put(
        commonActions.showError({
          message: error.error,
          title: error.message,
        }),
      );
    }
  },
};

export default [takeLatest(authActions.login.type, authSaga.login)];
