import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBar from './nav/NavBarContainer';
import MainPage from './main/MainPage';
import LoginForm from './session/LoginFormContainer';
import SignupForm from './session/SignupFormContainer';

const App = () => (
  <div>
    <NavBar />
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginForm} />
        <AuthRoute exact path="/signup" component={SignupForm} />
    </Switch>
  </div>
);

export default App;