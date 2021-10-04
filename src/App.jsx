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
import SearchRoom from './pages/SearchRoom';
import CreateRoom from './pages/CreateRoom'

import {
  LOGIN, HOME, CADASTRO, BUSCAR_SALA, CRIAR_SALA
} from './routes/routes.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path={CADASTRO}>
          <AuthRegistPage />
        </Route>
        <Route path={HOME}>
          <HomePage />
        </Route>
        <Route path={LOGIN}>
          <AuthPage />
        </Route>
        <Route path={BUSCAR_SALA}>
          <SearchRoom />
        </Route>
        <Route path={CRIAR_SALA}>
          <CreateRoom />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
