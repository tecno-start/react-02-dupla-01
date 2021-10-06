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

import {
  LOGIN, 
  HOME, 
  CADASTRO, 
  BUSCAR_SALA, 
  CRIAR_SALA, 
  POLITICA_PRIVACIDADE, 
  MEUS_PONTOS, 
  REDEFINIR_SENHA
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
        <Route path={POLITICA_PRIVACIDADE}>
          <PrivacyPolicies/>
        </Route>
        <Route path={MEUS_PONTOS}>
          <MyPoints/>
        </Route>
        <Route path={REDEFINIR_SENHA}>
          <RedefinePassword/>
        </Route>
        {/* <Route path={HOME} render={(_) => !isLoggedFlag ? <AuthPage /> : <HomePage />}>
        </Route>
        <Route path='/' render={(_) => !isLoggedFlag ? <AuthPage /> : <Redirect to={HOME} />}>
        </Route> */}
        {/* <Route path={LOGIN} render={(_) => !isLoggedFlag ? <AuthPage /> : <HomePage />}>
        </Route> */}
        {/*<PublicRoute exact path={LOGIN} />
        <PrivateRoute exact path={HOME} />*/}

      </Switch>
    </Router>
  );
}

export default App;
