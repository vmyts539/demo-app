export const setLoading = bool => ({ type: 'SET_LOADING', bool });
export const valueChanged           = keyword => ({ type: 'USERS/SEARCHING_VALUE_CHANGED', keyword });

export const autocompletionChanged  = () => ({ type: 'USERS/AUTOCOMPLETE_VALUE_CHANGED' });
export const setAutocompletion = userNames => ({ type: 'USERS/SET_AUTOCOMPLETION', userNames });

export const fetchData        = () => ({ type: 'USERS/FETCH_DATA' });
export const fetchDataSuccess = users => ({ type: 'USERS/DATA_FETCHING_SUCCEDED', users });
export const fetchDataFailure = error => ({ type: 'USERS/DATA_FETCHING_FAILED', error });

export const fetchUser        = () => ({ type: 'USER/FETCH_USER' });
export const setUserId        = userId => ({ type: 'USER/SET_USER_ID', userId });
export const setUser          = user => ({ type: 'USER/SET_USER', user });
export const fetchUserFailure = error => ({ type: 'USERS/DATA_FETCHING_FAILED', error });
