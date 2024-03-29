import{ useContext } from 'react';
import { AuthContext } from "../../Provider/Provider";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic"
import { useQuery } from '@tanstack/react-query';
const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const AxiosPublice = useAxiosPublic()
    const {data:admin=[], isPending}= useQuery({
        queryKey:["admin", user?.email],
        queryFn:async()=>{
           const res = await AxiosPublice.get(`/user/${user?.email}`)
           return res.data.isAdmin
        }
       })

    return {admin, isPending}
};

export default useAdmin;