import React, { useState } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div id="main">
      <Router>
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? <Redirect to="/dashboard" /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
          </Route>
          <Route path="/dashboard">
            {!isLoggedIn ? <Redirect to="/" /> : <Dashboard setIsLoggedIn={setIsLoggedIn} />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
