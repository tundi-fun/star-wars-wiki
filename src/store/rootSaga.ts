import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { watchSaga } from './sagas';

export default function* rootSaga(): SagaIterator {
  yield all([fork(watchSaga)]);
}
