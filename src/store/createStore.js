import { createStore, applyMiddleware } from 'redux';
import RootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run();

export default store;


