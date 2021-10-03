import React from "react";
import {Link, useHistory} from "react-router-dom";
import InfoTooltip from './InfoTooltip';

function Register(props) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const history = useHistory()

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }
  function handleChangePassword(evt) {
    setPassword(evt.target.value)
  }

  function handleOkClose() {
    props.onPopupClose()
    history.push('/signin')
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    props.onSubmit(email, setEmail, password, setPassword)
  }


  return (
    <>
    <section className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__input-set">
          <input onChange={handleChangeEmail} className="auth__input" type="email" placeholder="Email" required value={email} />
          <input onChange={handleChangePassword} className="auth__input" type="password" placeholder="Пороль" required value={password} />
        </div>
        <button className="auth__button">Зарегистрироваться</button>
      </form>
      <Link className="auth__link" to="/signin">Уже зарегистрированы? Войти</Link>
    </section>

    <InfoTooltip
      status={props.status}
      okStatus='Вы успешно зарегистрировались!'
      isOpen={props.isPopupOpen} 
      onClose={props.status ? handleOkClose : props.onPopupClose}
    />
    </>
  )
}

export default Register;