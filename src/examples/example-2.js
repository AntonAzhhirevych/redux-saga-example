import types from '../redux/types';
import { put, call, fork } from 'redux-saga/effects';

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// blocking and non-blocking methods

export function* blockedExamples() {
  yield call(delay, 5000);
  yield put({ type: types.ASYNC_SUCCESS });
  yield console.log('after blocked method');
}

// export function* blockedExamples() {
//   yield fork(delay,5000);
//   yield console.log('not blocked method');
// }
