const initialState = {
  keyword: '',
  results: { data: [] },
  error: ''
}

const searchReducer = (
  state = initialState,
  { type, keyword, results, error }
) => {
  switch (type) {
    case 'SEARCHING_VALUE_CHANGED': return { ...state, keyword };
    case 'FETCH_DATA': return { ...state };
    case 'DATA_FETCHING_SUCCEDED': return { ...state, results };
    case 'DATA_FETCHING_FAILED': return { ...state, error };
    default: return state;
  }
}

export default searchReducer;
