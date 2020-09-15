import {applyMiddleware, combineReducers, createStore} from 'redux';
import countReducer from '../reducers/countReducer';

const rootReducer = combineReducers(
  {countState: countReducer},
);

const configureStore = (sagaMiddleware) => {
  return createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware));
};

export default configureStore;
