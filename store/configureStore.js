import {applyMiddleware, combineReducers, createStore} from 'redux';
import countReducer from '../reducers/countReducer';
import { logger } from 'redux-logger';

const rootReducer = combineReducers(
  {countState: countReducer},
);

const configureStore = (sagaMiddleware) => {
  return createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger));
};

export default configureStore;
