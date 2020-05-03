import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Search from "./Search/Search"
import Header from "./Header/Header"
import UserPage from "./UserPage/UserPage"

class App extends React.Component {
  render () {
    return (
      <>
        <Router>
          <Header />

          <Switch>
            <Route exact path='/' component={Search} />
            <Route path='/users/:userId' component={UserPage} />
          </Switch>

        </Router>
      </>
    );
  }
}

export default App
