const initialState = {
  keyword: '',
  loading: false,
  userNames: [],
  users: [],
  error: '',
}

const searchReducer = (state = initialState, { type, keyword, userNames, users, error, bool }) => {
  switch (type) {
    case 'SET_LOADING': return { ...state, loading: bool };
    case 'USERS/SEARCHING_VALUE_CHANGED': return { ...state, keyword };

    case 'USERS/AUTOCOMPLETE_VALUE_CHANGED': return { ...state, loading: true };
    case 'USERS/SET_AUTOCOMPLETION': return { ...state, userNames, loading: false };

    case 'USERS/FETCH_DATA': return { ...state, loading: true };
    case 'USERS/DATA_FETCHING_SUCCEDED': return { ...state, users, loading: false };
    case 'USERS/DATA_FETCHING_FAILED': return { ...state, error, loading: false };

    default: return state;
  }
}

export default searchReducer;
