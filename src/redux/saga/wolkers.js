import { put, call } from 'redux-saga/effects';
import types from '../types';

export function* incrementWolker(action) {
  yield put({ type: types.INCREMENT_SUCCESS });
}

export function* decrementWolker(action) {
  yield put({ type: types.DECREMENT_SUCCESS });
}

// put({type: 'INCREMENT'}) // => { PUT: {type: 'INCREMENT'} }
// call(delay, 1000)        // => { CALL: {fn: delay, args: [1000]}}

/*
Промежуточный слой (middleware) осматривает тип каждого переданного Эффекта, затем решает как выполнить этот Эффект. 
Если тип Эффекта PUT, тогда он отправит (dispatch) действие в Хранилище (Store). Если CALL - он вызовет заданную функцию.
*/

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* asyncWolker(action) {
  yield call(delay, 5000);
  yield put({ type: types.ASYNC_SUCCESS });
}
