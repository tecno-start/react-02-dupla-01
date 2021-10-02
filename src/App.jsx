import React from 'react';
import './styles/reduction.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import AuthRegistPage from './pages/AuthRegistPage';

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
      </Switch>
    </Router>
  );
}

export default App;
