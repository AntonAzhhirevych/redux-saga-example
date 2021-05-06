import { select } from 'redux-saga/effects';

export function* runExample({ type, payload }) {
  const { cart } = yield select();
}
