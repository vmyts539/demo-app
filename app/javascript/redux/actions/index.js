export const valueChanged = keyword => ({ type: 'USERS/SEARCHING_VALUE_CHANGED', keyword });
export const fetchData = () => ({ type: 'USERS/FETCH_DATA' });
export const fetchDataSuccess = results => ({ type: 'USERS/DATA_FETCHING_SUCCEDED', results });
export const fetchDataFailure = error => ({ type: 'USERS/DATA_FETCHING_FAILED', error })
