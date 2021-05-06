import { all } from 'redux-saga/effects';
import { watchIncrement, watchDecrement, watchAsync } from './watchers';

export function* helloSaga() {
  yield console.log('Hello Sagas!');
}

export default function* rootSaga() {
  try {
    yield all([helloSaga(), watchIncrement(), watchDecrement(), watchAsync()]);
  } catch (error) {
    console.log(error);
  }
}
