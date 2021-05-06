import { takeEvery, take } from 'redux-saga/effects';
import { incrementWolker, decrementWolker, asyncWolker } from './wolkers';
import { blockedExamples } from '../../examples/example-2';
import types from '../types';

export function* watchIncrement() {
  //запускаем задачу
  yield takeEvery(types.INCREMENT_START, incrementWolker);
}

export function* watchDecrement() {
  yield takeEvery(types.DECREMENT_START, decrementWolker);
}

// blockedExamples
export function* watchAsync() {
  yield takeEvery(types.ASYNC_START, asyncWolker);
}
