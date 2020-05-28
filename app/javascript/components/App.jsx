import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {createStore, compose} from 'redux';
import {Provider} from 'react-redux'

import Search from "./Search/Search";
import Header from "./Header/Header";
import UserPage from "./UserPage/UserPage";
import rootReducer from "../redux/reducers/rootReducer";

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

class App extends React.Component {
  render () {
    return (
      <>
        <Router>
          <Provider store={store}>
            <Header />

            <Switch>
              <Route exact path='/' component={Search} />
              <Route path='/users/:userId' component={UserPage} />
            </Switch>
          </Provider>
        </Router>
      </>
    );
  }
}

export default App
