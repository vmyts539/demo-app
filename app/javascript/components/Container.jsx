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
  error,
  highlightedSearchResults,

  changeKeyword,
  setAutocompletion,
  setUsers,
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
          setHighlightedSearchResults={setHighlightedSearchResults}
        />
      </Route>

      <Route path='/users/:userId' component={UserPage} />
    </Switch>
  </Router>
);

const mapStateToProps = state => {
  return {
    keyword:                  state.search.keyword,
    loading:                  state.search.loading,
    userNames:                state.search.userNames,
    users:                    state.search.users,
    error:                    state.search.error,
    highlightedSearchResults: state.search.highlightedSearchResults,
  }
};

const mapDispatchToProps = dispatch => ({
  changeKeyword: keyword => dispatch(actions.valueChanged(keyword)),
  setAutocompletion: userNames => dispatch(actions.autocompletionChanged(userNames)),
  setUsers: users => dispatch(actions.fetchDataSuccess(users)),
  setHighlightedSearchResults: results => dispatch(actions.highlightSearchResults(results)),
});

Container.propTypes = {
  keyword:                     PropTypes.string,
  loading:                     PropTypes.bool,
  userNames:                   PropTypes.array,
  users:                       PropTypes.array,
  error:                       PropTypes.string,
  highlightedSearchResults:    PropTypes.string,

  changeKeyword:               PropTypes.func,
  setAutocompletion:           PropTypes.func,
  setUsers:                    PropTypes.func,
  setHighlightedSearchResults: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
