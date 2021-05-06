import { combineReducers } from 'redux';

export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_SUCCESS':
      return state + 1;
    case 'DECREMENT_SUCCESS':
      return state - 1;
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  counter,
});
