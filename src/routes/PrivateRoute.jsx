import { Route, Redirect } from 'react-router'
import { isLogged } from '../auth/auth'
import { LOGIN } from './routes'

export default function PrivateRoute(props) {
    return (
        isLogged()
        ? <Route {...props} />
        : <Redirect to={LOGIN} />
    )
}