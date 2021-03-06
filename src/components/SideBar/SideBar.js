import React from 'react'
import './SideBar.scss'
import {activeUserId, getUserPosts} from "../../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const SideBar = props => {

  function selectItem(id) {
    props.activeUserId(id)
    props.getUserPosts(id)
  }

  return (
    <>
      <ul className='SideBar'>
        {
          props.users &&
          props.users.map(user => <li onClick={() => selectItem(user.id)}
                                      className='SideBar__item'
                                      key={user.id}>{user.name}</li>)
        }
        <li className='SideBar__addUser'>
          <Link to='/create-user/' className='SideBar__btn'>Добавить пользователя</Link>
        </li>
      </ul>

    </>
  )
}

const mapStateToProps = ({users}) => {
  return {users}
}

const mapDispatchToProps = (dispatch) => {
  return {
    activeUserId: (id) => dispatch(activeUserId(id)),
    getUserPosts: (userId) => dispatch(getUserPosts(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);