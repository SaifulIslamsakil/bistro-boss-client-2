import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminPrivate = ({ children }) => {
    const { user, lodding } = useContext(AuthContext)
    const location = useLocation()
    const AxiosSecure = useAxiosSecure()
    const { data: allUsers = [] } = useQuery({
        queryKey: "all User",
        queryFn: async () => {
            const res = await AxiosSecure.get("/user")
            return res.data
        }
    })
    const isAdmin = allUsers.find(admin => admin?.email === user.email)
    if (lodding) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user && isAdmin?.Role) {
        return children
    }
    return <Navigate to="/" state={location.pathname}></Navigate>
};

export default AdminPrivate;