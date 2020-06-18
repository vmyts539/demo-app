export const valueChanged           = keyword => ({ type: 'USERS/SEARCHING_VALUE_CHANGED', keyword });
export const autocompletionChanged  = userNames => ({ type: 'USERS/AUTOCOMPLETE_VALUE_CHANGED', userNames });

export const fetchData        = () => ({ type: 'USERS/FETCH_DATA' });
export const fetchDataSuccess = users => ({ type: 'USERS/DATA_FETCHING_SUCCEDED', users });
export const fetchDataFailure = error => ({ type: 'USERS/DATA_FETCHING_FAILED', error });

export const setUser    = user => ({ type: 'USER/SET_USER', user });
export const setLoading = bool => ({ type: 'SET_LOADING', bool })

export const highlightSearchResults = results => ({ type: 'HIGHLIGHT_SEARCH_RESULTS', results });
