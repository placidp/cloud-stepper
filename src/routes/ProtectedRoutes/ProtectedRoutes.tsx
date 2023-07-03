import { FunctionComponent } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import { selectIsFormStarted } from '../../store/slices/form.slice'
import { RouteEndpoints } from '../../shared/enums'

const useAuth = () => {
    const isFormStarted = useAppSelector(selectIsFormStarted)

    return isFormStarted
}

const ProtectedRoutes: FunctionComponent = () => {
    const isAuth = useAuth()

    return isAuth ? <Outlet /> : <Navigate to={RouteEndpoints.Home} replace />
}

export default ProtectedRoutes
