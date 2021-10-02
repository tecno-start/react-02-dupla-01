import React from 'react';
import './styles/reduction.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <AuthPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
