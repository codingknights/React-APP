import React from 'react'
import Hero from './Hero'
import LayoutRoute from './LayoutRoute';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import LayoutRoute2 from './LayoutRoute2';
import LandingPage from './LandingPage';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';


function App() {
  return (
    <div>
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <LayoutRoute path="/" exact={true} component={Hero} />
            <LayoutRoute path="/about" exact={true} component={AboutUs} />
            <LayoutRoute2 path="/signup" exact={true} component={RegistrationForm}/>
            <LayoutRoute2 path="/login" exact={true} component={LoginForm}/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;