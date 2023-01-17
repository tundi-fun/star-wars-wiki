import { Action } from '@reduxjs/toolkit';
import { put, call, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { fetchSpeciesAction, setSpeciesState } from './slice';
import { fetchSpeciesAPICall } from '../lib/api';

interface IExtendedAction extends Action {
  payload: Partial<{
    page: number;
  }>;
}

export function* fetchSpeciesSaga(action: IExtendedAction): SagaIterator {
  const { page } = action.payload;
  try {
    yield put(setSpeciesState({ isFetching: true }));
    if (page) {
      const response = yield call(fetchSpeciesAPICall, { page });

      yield put(setSpeciesState({ data: response.data }));
    }
  } catch (error) {
    // TODO
    console.log(error);
  } finally {
    yield put(setSpeciesState({ isFetching: false }));
  }
}

export function* watchSaga() {
  yield takeLatest(fetchSpeciesAction, fetchSpeciesSaga);
}
