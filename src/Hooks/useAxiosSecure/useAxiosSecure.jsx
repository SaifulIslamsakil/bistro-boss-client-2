import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: "https://bistro-boss-server-2-gamma.vercel.app"
})
const useAxiosSecure = () => {
    const { userLogout } = useContext(AuthContext)
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('Acces_Token')
        // console.log('request stopped by interceptors', token)
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    axiosSecure.interceptors.response.use((confiq) => {
        return confiq
    }, async (error) => {
        const statuss = error.response.status
        console.log(statuss)
        if (statuss === 401 || statuss === 403) {
            await userLogout()
            navigate("/login")

        }
        return Promise.reject(error)
    })

    return axiosSecure
};

export default useAxiosSecure;