import React from 'react'

// styles
import './styles/App.css';

//components
import Header from './components/Header'
import LogInScreen from './components/LoginScreen';

const App = () => {
  const [authToken, setAuthToken] = React.useState(localStorage.getItem('JWT'));
  const [route, setRoute] = React.useState(authToken ? '/tasks' : '/login');

  const context = {
    authToken,
    setAuthToken,
    route,
    setRoute
  };

  return (
    <div>
      <Header context={context}/>
      {route === '/login' ? <LogInScreen context={context} /> : null}  
    </div>
  )
}

export default App