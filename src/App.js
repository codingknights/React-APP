import React from 'react'
import Hero from './Hero'
import LayoutRoute from './LayoutRoute';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './About';
import LayoutRoute2 from './LayoutRoute2';
import LandingPage from './LandingPage';

function App() {
  return (
    <div>
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <LayoutRoute path="/" exact={true} component={Hero} />
            <LayoutRoute path="/about" exact={true} component={About} />
            <LayoutRoute2 path="/land" exact={true} component={LandingPage}/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;