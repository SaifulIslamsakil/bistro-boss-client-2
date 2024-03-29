import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate } from "react-router-dom";

const Private = ({children}) => {
    const {user, lodding}= useContext(AuthContext)
    if(user){
        return children
    }
    if(lodding){
        return <span className="loading loading-bars loading-lg"></span>
    }
    return <Navigate to="/"></Navigate>
};

export default Private;