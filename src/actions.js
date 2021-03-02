const loadingOn = () => {
  return {
    type: 'LOADING'
  }
}

const getUser = () => async (dispatch, getState, apiService) => {
  try {
    dispatch(loadingOn)
    const result = await apiService.getUsers();
    const users = []
    result.forEach(item => {
      const info = {
        id: item.id,
        name: item.name,
        username: item.username,
        email: item.email,
        city: item.address.city,
        street: item.address.street,
        suite: item.address.suite,
        zipcode: item.address.zipcode,
        phone: item.phone,
        website: item.website,
        companyName: item.company.name,
        catchPhrase: item.company.catchPhrase,
        bs: item.company.bs
      }
      users.push(info)
    })
    dispatch({type: 'GET_USERS', payload: users})
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

const addUser = (user) => {
  return {
    type: 'ADD_USER',
    payload: user
  }
}

const changeUser = (user) => {
  return {
    type: 'CHANGE_USER',
    payload: user
  }
}

export {
  getUser,
  activeUserId,
  getUserPosts,
  addUser,
  changeUser
}