import { take } from 'redux-saga';
import types from '../redux/types';

export function* runExample() {
  while (true) {
    yield take(types.ASYNC_START);
    //next code
  }
}
