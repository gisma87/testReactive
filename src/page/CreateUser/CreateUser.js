import React, {useState} from "react";
import './CreateUser.scss'
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {addUser} from "../../actions";

const inputsArr = [
  {name: 'name', label: 'Имя'},
  {name: 'username', label: 'Логин'},
  {name: 'email', label: 'Email'},
  {name: 'city', label: 'Город'},
  {name: 'street', label: 'Улица'},
  {name: 'suite', label: 'Дом №'},
  {name: 'zipcode', label: 'Почтовый индекс'},
  {name: 'phone', label: 'Телефон'},
  {name: 'website', label: 'Сайт'}
]

const CreateUser = props => {

  const [valueForm, setValueForm] = useState({
    id: Math.floor(Math.random() * 100000),
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

  function submit(e) {
    e.preventDefault()
    props.addUser(valueForm)
  }

  function onChangeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValueForm({...valueForm, [name]: value})
  }

  return (
    <main className='CreateUser'>
      <div className="CreateUser__container">
        <form onSubmit={submit} id="new-user-form" className="CreateUser__form" name='new-user-form' noValidate>
          <div className="CreateUser__content">
            <h1 className="CreateUser__title">Добавить пользователя</h1>
            {
              inputsArr.map((input, index) => {
                return (
                  <label key={index} className="CreateUser__element">
                    <input id={input.name}
                           name={input.name}
                           value={valueForm[input.name]}
                           onChange={onChangeHandler}
                           type='text'
                           className="CreateUser__input"
                           required/>
                    <p className="CreateUser__label">{input.label}</p>
                    <span className="CreateUser__errorMessage">поле не верно заполнено</span>
                  </label>
                )
              })
            }
          </div>

          <div className="CreateUser__buttons">
            <button onClick={submit} className="CreateUser__button">Создать</button>
            <Link to='/' className="CreateUser__link">Назад к списку пользователей</Link>
          </div>
        </form>
      </div>
    </main>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(CreateUser))