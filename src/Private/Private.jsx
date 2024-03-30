import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({children}) => {
    const {user, lodding}= useContext(AuthContext)
    const location = useLocation()
    if(user){
        return children
    }
    if(lodding){
        return <span className="loading loading-bars loading-lg"></span>
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default Private;