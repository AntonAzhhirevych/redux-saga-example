import { createStore, applyMiddleware, compose } from 'redux';
import rootSaga from './saga/rootSaga';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
