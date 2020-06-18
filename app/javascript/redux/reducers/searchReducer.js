const initialState = {
  keyword: '',
  loading: false,
  userNames: [],
  users: [],
  user: {},
  error: '',
  highlightedSearchResults: '',
}

const searchReducer = (state = initialState, { type, keyword, userNames, users, error, results, bool, user }) => {
  switch (type) {
    case 'USERS/SEARCHING_VALUE_CHANGED': return { ...state, keyword };
    case 'USERS/AUTOCOMPLETE_VALUE_CHANGED': return { ...state, userNames };
    case 'USERS/FETCH_DATA': return { ...state, loading: true };
    case 'USERS/DATA_FETCHING_SUCCEDED': return { ...state, users, loading: false };
    case 'USERS/DATA_FETCHING_FAILED': return { ...state, error, loading: false };
    case 'SET_LOADING': return { ...state, loading: bool };
    case 'USER/SET_USER': return { ...state, user };
    case 'HIGHLIGHT_SEARCH_RESULTS': return { ...state, results }
    default: return state;
  }
}

export default searchReducer;
