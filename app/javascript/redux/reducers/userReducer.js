const initialState = {
  userId: '',
  user: {},
}

const userReducer = (state = initialState, { type, userId, user }) => {
  switch (type) {
    case 'USER/FETCH_USER': return { ...state, loading: true };
    case 'USER/SET_USER_ID': return { ...state, userId };
    case 'USER/SET_USER': return { ...state, user, loading: false };
    case 'USER/USER_FETCHING_FAILED': return { ...state, error, loaging: false };
    default: return state;
  }
}

export default userReducer;
