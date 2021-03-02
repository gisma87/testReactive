import React, {useEffect, useState} from "react";
import './UserInfo.scss';
import {connect} from "react-redux";
import PostsListDropdown from "../PostsListDropdown/PostsListDropdown";
import SvgAngleUpSolid from "../icons/SvgAngleUpSolid";
import {addUser, changeUser} from "../../actions";

const UserInfo = props => {

  const [userInfo, setUserInfo] = useState(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const [showDescription, setShowDescription] = useState(false)
  const [valueForm, setValueForm] = useState({
    name: '',
    username: '',
    email: '',
    city: '',
    street: '',
    suite: '',
    zipcode: '',
    phone: '',
    website: ''
  })
  const [readOnlyForm, setReadOnlyForm] = useState(true)


  useEffect(() => {
    if (props.users && props.userActiveId) {
      const info = props.users.find(item => item.id === props.userActiveId)
      setValueForm(info)
      setUserInfo(info)
    }
  }, [props.users, props.userActiveId])

  function onChangeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValueForm({...valueForm, [name]: value})
  }

  function submit(event) {
    event.preventDefault()
    let isValid = true;

    Object.keys(valueForm).forEach(key => {
      if (valueForm[key] === '') {
        isValid = false
      }
    })
    if (isValid) {
      console.log('valueForm: ', valueForm)
      props.changeUser(valueForm)
      setReadOnlyForm(true)
    } else {
      console.log('не все поля заполнены')
    }
  }

  return (
    <div className='UserInfo'>
      {
        userInfo
          ? <form onSubmit={submit}>
            <ul>
              <li className="UserInfo__item">
                <span className="UserInfo__itemTitle">Имя</span>
                <input type="text"
                       name='name'
                       value={valueForm.name}
                       onChange={onChangeHandler}
                       className="UserInfo__itemDescription"
                       placeholder={userInfo.name}
                       readOnly={readOnlyForm}/>
              </li>
              <li className="UserInfo__item">
                <span className="UserInfo__itemTitle">Логин</span>
                <input type="text"
                       name='username'
                       onChange={onChangeHandler}
                       value={valueForm.username}
                       className="UserInfo__itemDescription"
                       placeholder={userInfo.username}
                       readOnly={readOnlyForm}/>
              </li>
              <li className="UserInfo__item">
                <span className="UserInfo__itemTitle">Емайл</span>
                <input type="email"
                       name='email'
                       value={valueForm.email}
                       onChange={onChangeHandler}
                       className="UserInfo__itemDescription"
                       placeholder={userInfo.email}
                       readOnly={readOnlyForm}/>
              </li>
              <li className="UserInfo__item UserInfo__address">
                <div className="UserInfo__itemBlock">
                  <span className="UserInfo__itemTitle">Адрес</span>
                  <input type="text"
                         name='city'
                         value={valueForm.city}
                         onChange={onChangeHandler}
                         className="UserInfo__itemDescription UserInfo__itemAddress"
                         placeholder={`г. ${userInfo.city}`}
                         readOnly={readOnlyForm}/>
                </div>
                <input type="text"
                       name='street'
                       value={valueForm.street}
                       onChange={onChangeHandler}
                       className="UserInfo__itemDescription UserInfo__itemAddress"
                       placeholder={`ул.${userInfo.street}`}
                       readOnly={readOnlyForm}/>
                <input type="text"
                       name='suite'
                       value={valueForm.suite}
                       onChange={onChangeHandler}
                       className="UserInfo__itemDescription UserInfo__itemAddress"
                       placeholder={`дом ${userInfo.suite}`}
                       readOnly={readOnlyForm}/>
                <input type="text"
                       name='zipcode'
                       value={valueForm.zipcode}
                       onChange={onChangeHandler}
                       className="UserInfo__itemDescription UserInfo__itemAddress"
                       placeholder={`zipcode: ${userInfo.zipcode}`}
                       readOnly={readOnlyForm}/>
              </li>
              <li className="UserInfo__item">
                <span className="UserInfo__itemTitle">Телефон</span>
                <input type="tel"
                       value={valueForm.phone}
                       name='phone'
                       onChange={onChangeHandler}
                       className="UserInfo__itemDescription"
                       placeholder={userInfo.phone}
                       readOnly={readOnlyForm}/>
              </li>
              <li className="UserInfo__item">
                <span className="UserInfo__itemTitle">Сайт</span>
                <input type="text" name='website' onChange={onChangeHandler} className="UserInfo__itemDescription"
                       placeholder={userInfo.website}
                       value={valueForm.website}
                       readOnly={readOnlyForm}/>
              </li>
              {
                readOnlyForm
                  ? <button type='button' className='UserInfo__btn'
                            onClick={() => setReadOnlyForm(false)}>Редактировать</button>
                  : <button type='button' className='UserInfo__btn' onClick={submit}>Сохранить</button>
              }
              <div className='UserInfo__dropdownBtn' onClick={() => {
                setShowDropdown(!showDropdown)
                setShowDescription(!showDescription)
              }}>
                {(props.postsUserActive?.length > 0) ? <span>Посмотреть посты</span> : <span>постов ещё нет</span>}
                <div className={'UserInfo__iconContainer' + (showDescription ? ' UserInfo__rotate' : '')}>
                  <SvgAngleUpSolid className='UserInfo__arrowIcon'/>
                </div>
              </div>
            </ul>
          </form>
          : <p>Выберите пользователя в списке слева</p>
      }
      <PostsListDropdown active={showDropdown}/>
    </div>
  )
}

const mapStateToProps = ({userActiveId, users, postsUserActive}) => {
  return {userActiveId, users, postsUserActive}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user)),
    changeUser: (user) => dispatch(changeUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);