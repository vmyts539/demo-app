import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../redux/reducers';
import sagaMiddleware from '../redux/saga';
import App from './App';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
  applyMiddleware(saga),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({trace: true})
));

saga.run(sagaMiddleware);

const Container = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Container;
