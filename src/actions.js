const loadingOn = () => {
  return {
    type: 'LOADING'
  }
}

const getUser = () => async (dispatch, getState, apiService) => {
  try {
    dispatch(loadingOn)
    const result = await apiService.getUsers();
    dispatch({type: 'GET_USERS', payload: result})
  } catch (error) {
    throw new Error(error)
  }
}

const getUserPosts = (userId) => async (dispatch, getState, apiService) => {
  try {
    dispatch(loadingOn)
    const result = await apiService.getUserPosts(userId);
    dispatch({type: 'GET_USER_POSTS', payload: result})
  } catch (error) {
    throw new Error(error)
  }
}

const activeUserId = (userId) => {
  return {
    type: 'ACTIVE_USER_ID',
    payload: userId
  }
}

export {
  getUser,
  activeUserId,
  getUserPosts
}