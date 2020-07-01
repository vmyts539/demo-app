import React from "react";
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { connect } from 'react-redux';

import * as actions from '../redux/actions';

import Search from "./Search";
import Header from "./Header";
import UserPage from "./UserPage";
import ErrorPage from './ErrorPage';

const App = ({
  keyword,
  loading,
  userNames,
  users,
  user,
  searchError,
  userFetchError,

  fetchData,
  changeKeyword,
  autocompletionChanged,

  fetchUser,
  setUserId,
  setUser,
  setAutocompletion
}) => (
  <Router>
    <Header />

    <Switch>
      <Route exact path='/'>
        <Search
          keyword={keyword}
          loading={loading}
          userNames={userNames}
          users={users}
          error={searchError}

          fetchData={fetchData}
          changeKeyword={changeKeyword}
          autocompletionChanged={autocompletionChanged}
          setAutocompletion={setAutocompletion}
        />
      </Route>

      <Route path='/users/:userId'>
        <UserPage
          fetchUser={fetchUser}
          setUserId={setUserId}
          setUser={setUser}
          user={user}
          error={userFetchError}
        />
      </Route>
      <Route component={ErrorPage} />
    </Switch>
  </Router>
);

const mapStateToProps = state => {
  return {
    keyword:     state.search.keyword,
    loading:     state.search.loading,
    userNames:   state.search.userNames,
    users:       state.search.users,
    searchError: state.search.error,

    user:           state.user.user,
    userFetchError: state.user.error,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchData:             () =>        dispatch(actions.fetchData()),
  changeKeyword:         keyword =>   dispatch(actions.valueChanged(keyword)),
  autocompletionChanged: () =>        dispatch(actions.autocompletionChanged()),
  setAutocompletion:     userNames => dispatch(actions.setAutocompletion(userNames)),

  fetchUser: () =>     dispatch(actions.fetchUser()),
  setUserId: userId => dispatch(actions.setUserId(userId)),
  setUser:   user =>   dispatch(actions.setUser(user)),
});

App.propTypes = {
  keyword:     PropTypes.string,
  loading:     PropTypes.bool,
  userNames:   PropTypes.array,
  users:       PropTypes.array,
  searchError: PropTypes.string,

  userId:         PropTypes.string,
  user:           PropTypes.object,
  userFetchError: PropTypes.string,

  fetchData:             PropTypes.func,
  changeKeyword:         PropTypes.func,
  autocompletionChanged: PropTypes.func,
  setAutocompletion:     PropTypes.func,

  fetchUser: PropTypes.func,
  setUser:   PropTypes.func,
  setUserId: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
