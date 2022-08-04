import { all } from 'redux-saga/effects';

import { authSaga } from './auth';
import { userSaga } from './user';

const sagas = [...authSaga, ...userSaga];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
