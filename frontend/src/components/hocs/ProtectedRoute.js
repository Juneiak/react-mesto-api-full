import {Route, Redirect} from 'react-router-dom';

function ProtectedRoute({component: Component, path, loggedIn, ...props}) {
  return (
    <Route path={path}>
      {() => 
      loggedIn ? <Component {...props} /> : <Redirect to='/signin' />
      }
    </Route>
  )
}

export default ProtectedRoute;