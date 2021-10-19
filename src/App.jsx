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
import PrivacyPolicies from './pages/PrivacyPolicies'
import MyPoints from './pages/MyPoints';
import RedefinePassword from './pages/RedefinePassword';
import PrivateRoute from './routes/PrivateRoute';
import {
  LOGIN, 
  HOME, 
  CADASTRO, 
  BUSCAR_SALA, 
  CRIAR_SALA, 
  POLITICA_PRIVACIDADE, 
  MEUS_PONTOS, 
  REDEFINIR_SENHA,
  SALA_JOGO
} from './routes/routes.js'



function App() {
  return (
    <Router>
      <Switch>
        {/* public routes */}
        <Route path={CADASTRO}>
          <AuthRegistPage />
        </Route>
        <Route path={LOGIN}>
          <AuthPage />
        </Route>
        <Route path={POLITICA_PRIVACIDADE}>
          <PrivacyPolicies/>
        </Route>
        <Route path={REDEFINIR_SENHA}>
          <RedefinePassword/>
        </Route>
        
        {/* private routes */}
        <PrivateRoute Component={HomePage} path={HOME} exact />
        <PrivateRoute Component={SearchRoom} path={BUSCAR_SALA} exact />
        <PrivateRoute Component={CreateRoom} path={CRIAR_SALA} exact />
        <PrivateRoute Component={MyPoints} path={MEUS_PONTOS} exact />
        <PrivateRoute Component={HomePage} path={SALA_JOGO} exact />
      </Switch>
    </Router>
  );
}

export default App;
