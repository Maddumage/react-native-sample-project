import { call, put, takeLatest } from 'redux-saga/effects';
import { userService } from '../../services';
import { commonActions, userActions } from '../../slices';

const { getUserProfile, getUserProfileSuccess, getUserProfileFailed } =
  userActions;

export const userSaga = {
  profile: {
    get: function* (action: any) {
      const params = action?.payload ?? {};
      try {
        const { data, status } = yield call(
          userService.user.getProfile,
          params,
        );
        if (status === 200) {
          yield put(getUserProfileSuccess(data));
        } else {
          yield put(getUserProfileFailed(data));
          yield put(commonActions.showError({ message: data }));
        }
      } catch (error: any) {
        yield put(getUserProfileFailed(JSON.stringify(error)));
        yield put(
          commonActions.showError({
            message: error.error,
            title: error.message,
          }),
        );
      }
    },
  },
};

export default [takeLatest(getUserProfile.type, userSaga.profile.get)];
