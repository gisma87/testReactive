import React, {useEffect, useState} from "react";
import './UserInfo.scss';
import {getUser} from "../../actions";
import {connect} from "react-redux";
import PostsListDropdown from "../PostsListDropdown/PostsListDropdown";
import SvgAngleUpSolid from "../icons/SvgAngleUpSolid";

const UserInfo = props => {

  const [userInfo, setUserInfo] = useState(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const [showDescription, setShowDescription] = useState(false)

  useEffect(() => {
    if (props.users) {
      const info = props.users.find(item => item.id === props.userActiveId)
      setUserInfo(info)
    }
  }, [props.users, props.userActiveId])

  return (
    <div className='UserInfo'>
      {
        userInfo
          ? <ul>
            <li className="UserInfo__item">
              <span className="UserInfo__itemTitle">Имя</span>
              <input type="text" className="UserInfo__itemDescription" placeholder={userInfo.name} readOnly/>
            </li>
            <li className="UserInfo__item">
              <span className="UserInfo__itemTitle">Логин</span>
              <input type="text" className="UserInfo__itemDescription" placeholder={userInfo.username} readOnly/>
            </li>
            <li className="UserInfo__item">
              <span className="UserInfo__itemTitle">Емайл</span>
              <input type="text" className="UserInfo__itemDescription" placeholder={userInfo.email} readOnly/>
            </li>
            <li className="UserInfo__item UserInfo__address">
              <div className="UserInfo__itemBlock">
                <span className="UserInfo__itemTitle">Адрес</span>
                <input type="text" className="UserInfo__itemDescription UserInfo__itemAddress"
                       placeholder={`г. ${userInfo.address.city}`} readOnly/>
              </div>
              <input type="text" className="UserInfo__itemDescription UserInfo__itemAddress"
                     placeholder={`ул.${userInfo.address.street}`} readOnly/>
              <input type="text" className="UserInfo__itemDescription UserInfo__itemAddress"
                     placeholder={`дом ${userInfo.address.suite}`} readOnly/>
              <input type="text" className="UserInfo__itemDescription UserInfo__itemAddress"
                     placeholder={`zipcode: ${userInfo.address.zipcode}`} readOnly/>
            </li>
            <li className="UserInfo__item">
              <span className="UserInfo__itemTitle">Телефон</span>
              <input type="text" className="UserInfo__itemDescription" placeholder={userInfo.phone} readOnly/>
            </li>
            <li className="UserInfo__item">
              <span className="UserInfo__itemTitle">Сайт</span>
              <input type="text" className="UserInfo__itemDescription" placeholder={userInfo.website} readOnly/>
            </li>

            <div className='UserInfo__dropdownBtn' onClick={() => {
              setShowDropdown(!showDropdown)
              setShowDescription(!showDescription)
            }}>
              <span>Посмотреть посты</span>
              <div className={'UserInfo__iconContainer' + (showDescription ? ' UserInfo__rotate' : '')}>
                <SvgAngleUpSolid className='UserInfo__arrowIcon'/>
              </div>
            </div>
          </ul>
          : <p>Выберите пользователя в списке слева</p>
      }
      <PostsListDropdown active={showDropdown}/>
    </div>
  )
}

const mapStateToProps = ({userActiveId, users}) => {
  return {userActiveId, users}
}

const mapDispatchToProps = (dispatch) => {
  return {getUser: () => dispatch(getUser())}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);