import types from '../redux/types';
import { put, delay } from 'redux-saga/effects';

export function* exampleSaga() {
  try {
    yield delay(5000);
    yield put({ type: types.ASYNC_SUCCESS });
  } catch (error) {
    yield put({ type: types.ASYNC_ERROR });
  }
}
