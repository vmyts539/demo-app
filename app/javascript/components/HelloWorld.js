import React from "react"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';

import App from "./App"
import Header from "./Header"

const store = createStore(rootReducer)

class HelloWorld extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Header />
        <App />
      </Provider>
    );
  }
}

export default HelloWorld
