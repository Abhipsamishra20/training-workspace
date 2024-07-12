
import { getCurrentUser } from "../services/auth.service"
import { Navigate } from "react-router-dom"
const PrivateRoute = ({children}:any) => {

    const user = getCurrentUser()

    if(user) return children 

    return <Navigate to="/login"/>
}

export default PrivateRoute