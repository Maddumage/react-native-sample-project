import { call, put, takeLatest } from 'redux-saga/effects';
import { authService } from '../../services';
import { commonActions, authActions } from '../../slices';

export const authSaga = {
	login: function* (action: any) {
		const params = action?.payload ?? {};
		try {
			const { data, status } = yield call(
				authService.auth.login,
				params
			);
			console.log('success saga => ', data, status);
			if (status === 200) {
				yield put(authActions.loginSuccess(data));
			} else {
				yield put(authActions.loginFailed(data));
				yield put(
					commonActions.showError({
						message: data,
					})
				);
			}
		} catch (error) {
			console.log('error saga => ', error);
			// yield put(authActions.loginFailed(error));
			// yield put(
			// 	commonActions.showError({
			// 		message: error.message,
			// 		title: 'Login Failed',
			// 	})
			// );
		}
	},
};

export default [takeLatest(authActions.login.type, authSaga.login)];
