import React from "react"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';

import App from "../components/App"

const store = createStore(rootReducer)

class HelloWorld extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default HelloWorld
