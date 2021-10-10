import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { isLogged } from '../auth/auth'
import { LOGIN } from './routes'


export default function PrivateRoute({ Component }, ...rest) {
    return (
        <Route {...rest} render={props => (
            isLogged() ?
                <Component {...props} />
                : <Redirect to={LOGIN} />
        )} />
    )
}