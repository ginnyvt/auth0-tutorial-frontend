import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import 'bootswatch/dist/sandstone/bootstrap.min.css';

import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import ProtectedRoute from './auth-config/protected-route';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div id='app' className='d-flex flex-column h-100'>
      <Header />
      <div className='container flex-grow-1'>
        <Switch>
          <Route exact path='/' component={Home} />
          <ProtectedRoute path='/profile' component={Profile} />
        </Switch>
      </div>
    </div>
  );
};
export default App;
