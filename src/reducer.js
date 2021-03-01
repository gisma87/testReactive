const initialState = {
  loading: 0,
  users: null,
  userInfo: null,
  userActiveId: null,
  postsUserActive: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: (state.loading > 0) ? (state.loading - 1) : 0,
      }

      case 'GET_USER_POSTS':
      return {
        ...state,
        postsUserActive: action.payload,
        loading: (state.loading > 0) ? (state.loading - 1) : 0,
      }

    case 'ACTIVE_USER_ID':
      return {
        ...state,
        userActiveId: action.payload
      }

    case 'LOADING' :
      return {
        ...state,
        loading: state.loading + 1
      };

    default:
      return state;
  }
}

export default reducer