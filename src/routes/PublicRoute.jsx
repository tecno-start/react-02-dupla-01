import { Route, Redirect } from 'react-router-dom'
import { isLogged } from '../auth/auth'
import { HOME } from './routes'

export default function PublicRoute(props) {
    return (
        isLogged()
            ? <Redirect to={HOME} />
            : <Route {...props} />
    )
}