import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useCard = () => {
    const { user } = useContext(AuthContext)
    const AxiosPublic = useAxiosPublic()
    const { data, refetch } = useQuery({
        queryKey: ["card", user?.email],
        queryFn: async () => {
            const res = await AxiosPublic.get(`/card?email=${user.email}`)
            return res.data
        }
    })
    return { data, refetch }
};

export default useCard;