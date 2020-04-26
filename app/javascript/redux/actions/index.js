export const valueChanged = keyword => ({ type: 'SEARCHING_VALUE_CHANGED', keyword });

export const fetchData = () => ({ type: 'FETCH_DATA' });

export const fetchDataSuccess = results => ({ type: 'DATA_FETCHING_SUCCEDED', results });

export const fetchDataFailure = error => ({ type: 'DATA_FETCHING_FAILED', error })
