import { Navigate } from "react-router-dom"

Navigate
const ProtectedRout = ({children}) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/login"/>

}
  

export default ProtectedRout