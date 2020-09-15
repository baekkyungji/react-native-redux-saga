import {AppRegistry} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import createSagaMiddleware from 'redux-saga';

import configureStore from './store/configureStore';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore(sagaMiddleware);

sagaMiddleware.run(rootSaga);

const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
