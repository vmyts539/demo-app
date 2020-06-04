import React from 'react';
import { Provider } from 'react-redux';
import {createStore, compose} from 'redux';

import rootReducer from '../redux/reducers';
import Container from './Container';

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const Wrapper = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

export default Wrapper;
