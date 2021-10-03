import logo from '../images/Vector-2.svg';
import {Link, useHistory, useLocation} from 'react-router-dom';
import React from 'react';
import closeIcon from '../images/closeIcon.svg';
import burgerIcon from '../images/burger.svg';

function Header({loggedIn, ...props}) {
  const [isDropdownOpen, toggleDropdown] = React.useState(false)
  const history = useHistory()
  const location = useLocation()

  function handlerDropdownClick() {
    toggleDropdown(!isDropdownOpen)
  }

  function signOut() {
    props.onSignOut(false)
    localStorage.removeItem('jwt')
    history.push('signin')
  }

  return (
    <header className="header">
      <img className="header__image" src={logo} alt="Логотип 'mesto'" />
      <div className={`header__profile ${isDropdownOpen && "header__profile_open"}`}>
        {loggedIn && <p className="header__email">{props.data.email && props.data.email}</p>}
        {!loggedIn &&  location.pathname !== '/signup' && <Link className="header__link" to="/signup">Регистрация</Link>}
        {loggedIn ? <p onClick={signOut} className="header__quit">Выйти</p> : (location.pathname !== '/signin' && <Link className="header__link" to="/signin">Войти</Link>)}
      </div>
      <button
        onClick={handlerDropdownClick}
        style={{backgroundImage: 'url('+(isDropdownOpen ? closeIcon : burgerIcon) + ')'}}
        className="header__dropdownButton button-animation button-animation_blackout-level_medium">
      </button>
    </header>
  )
}

export default Header;

