import Content from './Content';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import React from 'react';
import ProtectedRoute from './hocs/ProtectedRoute';
import {Route, Switch, Redirect, useHistory} from 'react-router-dom';
import * as mestoAuth from '../utils/mestoAuth.js';
function App() {

  const [loggedIn, toggleLogin] = React.useState(false)
  const [isInfoPopupOpen, toggleInfoPopup] = React.useState(false)
  const [popupStatus, togglePopupStatus] = React.useState(false)
  const [accountData, setAccountData] = React.useState({})
  const history = useHistory()

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      mestoAuth.checkToken(localStorage.getItem('jwt'))
      .then(res => {
        toggleLogin(true)
        history.push('/')
        setAccountData(res.data)
      })
      .catch(err => {
        console.error(err)
        history.push('/signin')
      })
    }
  }, [loggedIn])

  function handleInfoPopupWithStatus(status=false) {
    toggleInfoPopup(true)
    togglePopupStatus(status)
  }

  function handlePopupClose() {
    toggleInfoPopup(false)
  }

  function handleLoginSubmit(email, setEmail, password, setPassword) {
    mestoAuth.login(email, password)
    .then(data => {
      toggleLogin(true)
      handleInfoPopupWithStatus(true)
      setEmail('')
      setPassword('')
      localStorage.setItem('jwt', data.token)
    })
    .catch(err => {
      console.error(err)
      handleInfoPopupWithStatus(false)
      setPassword('')
    })
  }

  function handleRegisterSubmit(email, setEmail, password, setPassword){
    mestoAuth.register(email, password)
      .then(data => {
        handleInfoPopupWithStatus(true)
        setEmail('');
        setPassword('')

      })
      .catch(err => {
        console.error(err);
        handleInfoPopupWithStatus(false)
        setPassword('')
      })
  }

  return (
    <div className="common" >
      <div className="page">
        <Header loggedIn={loggedIn} onSignOut={toggleLogin} data={accountData} />
        <Switch>

          <Route path="/signin">
            <Login  
              onSubmit={handleLoginSubmit}
              status={popupStatus}
              isPopupOpen={isInfoPopupOpen}
              onPopupClose={handlePopupClose} />
          </Route>
          
          <Route path="/signup">
            <Register
              onSubmit={handleRegisterSubmit}
              status={popupStatus}
              isPopupOpen={isInfoPopupOpen}
              onPopupClose={handlePopupClose} />
          </Route>

          <ProtectedRoute
            component={Content}
            path="/"
            loggedIn={loggedIn}
          />
    
          <Route path='/'>
            {loggedIn ? <Redirect to='/' /> : <Redirect to="/signin" />}
          </Route>

        </Switch>
        
      </div>
   </div>
  );
}

export default App;
