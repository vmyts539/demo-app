import axios from 'axios';
import { put, takeLatest, select, all } from 'redux-saga/effects'

import * as actions from '../actions';

function* fetchUsers() {
  const keyword = yield select(state => state.search.keyword);

  try {
    const response = yield axios({
      url: `/search?search=` + keyword,
      method: 'get',
      data_type: "json",
      content_type: 'application/json',
      headers: { 'Accept': 'application/json'},
    })
    yield put(actions.fetchDataSuccess(response.data.data.users))
  } catch (e) {
    yield put(actions.fetchDataFailure(e.message));
  }
}

function* fetchAutocompletion() {
  const keyword = yield select(state => state.search.keyword);

  try {
    const response = yield axios({
      url: `/autocomplete?search=` + keyword,
      method: 'get',
      data_type: "json",
      content_type: 'application/json',
      headers: { 'Accept': 'application/json'},
    })
    yield put(actions.setAutocompletion(response.data));
  } catch (e) {
    yield put(actions.fetchDataFailure(e.message));
  }
}

function* fetchUser() {
  const userId = yield select(state => state.user.userId)

  try {
    const response = yield axios({
      url: `/api/users/` + userId,
      method: 'get',
      data_type: "json",
      content_type: 'application/json',
      headers: { 'Accept': 'application/json'},
    })
    yield put(actions.setUser(response.data.data));
  } catch (e) {
    yield put(actions.fetchUserFailure(e.message));
  }
}

function* watchFetchUsers() {
  yield takeLatest('USERS/FETCH_DATA', fetchUsers);
}

function* watchFetchAutocompletion() {
  yield takeLatest('USERS/AUTOCOMPLETE_VALUE_CHANGED', fetchAutocompletion);
}

function* watchFetchUser() {
  yield takeLatest('USER/FETCH_USER', fetchUser);
}

export default function* sagaMiddleware() {
  yield all([
    watchFetchUsers(),
    watchFetchAutocompletion(),
    watchFetchUser(),
  ])
};

