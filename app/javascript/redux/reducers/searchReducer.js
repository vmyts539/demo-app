const initialState = {
  keyword: '',
  loading: false,
  userNames: [],
  users: { data: [] },
  error: ''
}

const searchReducer = (state = initialState, { action, keyword, userNames, users, error }) => {
  switch (action) {
    case 'USERS/SEARCHING_VALUE_CHANGED': return { ...state, keyword };
    case 'USERS/AUTOCOMPLETE_VALUE_CHANGED': return { ...state, userNames };
    case 'USERS/FETCH_DATA': return { ...state, loading: true };
    case 'USERS/DATA_FETCHING_SUCCEDED': return { ...state, users, loading: false };
    case 'USERS/DATA_FETCHING_FAILED': return { ...state, error, loading: false };
    default: return state;
  }
}

export default searchReducer;
