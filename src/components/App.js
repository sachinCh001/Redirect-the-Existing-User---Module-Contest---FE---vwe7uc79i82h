import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

function App() {
  return (
    <div id="main">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
