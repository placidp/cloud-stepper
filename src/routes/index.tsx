import { FunctionComponent } from 'react'
import { Routes, Route } from 'react-router-dom'
import { RouteEndpoints } from '../shared/enums'
import Home from './Home'
import ProtectedRoutes from './ProtectedRoutes'
import Form from './Form'
import ErrorPage from './404'

const Router: FunctionComponent = () => (
    <Routes>
        <Route path={RouteEndpoints.Home} element={<Home />} />
        <Route element={<ProtectedRoutes />}>
            <Route path={RouteEndpoints.Form} element={<Form />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
    </Routes>
)

export default Router
