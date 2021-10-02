import React from 'react';
import './styles/reduction.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import AuthRegistPage from './pages/AuthRegistPage';
import HomePage from './pages/HomePage';
import PrivacyPolicies from './pages/PrivacyPolicies';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <AuthPage />
        </Route>
        <Route path='/cadastro'>
          <AuthRegistPage />
        </Route>
        <Route path='/home'>
          <HomePage/>
        </Route>
        <Route path='/politicas-de-privacidade'>
          <PrivacyPolicies/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
