import React from "react";
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { connect } from 'react-redux';

import * as actions from '../redux/actions';

import Search from "./Search/Search";
import Header from "./Header/Header";
import UserPage from "./UserPage/UserPage";

const Container = ({
  keyword,
  loading,
  userNames,
  users,
  user,
  error,
  highlightedSearchResults,

  changeKeyword,
  setAutocompletion,
  setUsers,
  setUser,
  setLoading,
  setHighlightedSearchResults,
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
          error={error}
          highlightedSearchResults={highlightedSearchResults}

          changeKeyword={changeKeyword}
          setAutocompletion={setAutocompletion}
          setUsers={setUsers}
          setLoading={setLoading}
          setHighlightedSearchResults={setHighlightedSearchResults}
        />
      </Route>

      <Route path='/users/:userId'>
        <UserPage
          setUser={setUser}
          user={user}
        />
      </Route>
    </Switch>
  </Router>
);

const mapStateToProps = state => {
  return {
    keyword:                  state.search.keyword,
    loading:                  state.search.loading,
    userNames:                state.search.userNames,
    users:                    state.search.users,
    user:                     state.search.user,
    error:                    state.search.error,
    highlightedSearchResults: state.search.highlightedSearchResults,
  }
};

const mapDispatchToProps = dispatch => ({
  changeKeyword:               keyword =>   dispatch(actions.valueChanged(keyword)),
  setAutocompletion:           userNames => dispatch(actions.autocompletionChanged(userNames)),
  setUsers:                    users =>     dispatch(actions.fetchDataSuccess(users)),
  setUser:                     user =>      dispatch(actions.setUser(user)),
  setLoading:                  bool =>      dispatch(actions.setLoading(bool)),
  setHighlightedSearchResults: results =>   dispatch(actions.highlightSearchResults(results)),
});

Container.propTypes = {
  keyword:                     PropTypes.string,
  loading:                     PropTypes.bool,
  userNames:                   PropTypes.array,
  users:                       PropTypes.array,
  user:                        PropTypes.object,
  error:                       PropTypes.string,
  highlightedSearchResults:    PropTypes.string,

  changeKeyword:               PropTypes.func,
  setAutocompletion:           PropTypes.func,
  setUsers:                    PropTypes.func,
  setUser:                     PropTypes.func,
  setLoading:                  PropTypes.func,
  setHighlightedSearchResults: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
