const initialState = {
  user: {},
}

const userReducer = (state = initialState, { type, user }) => {
  switch (type) {
    case 'USER/SET_USER': return { ...state, user };
    default: return state;
  }
}

export default userReducer;
