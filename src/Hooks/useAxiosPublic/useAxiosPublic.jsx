import axios from "axios";

const publics = axios.create({
    baseURL:"https://bistro-boss-server-2-gamma.vercel.app"
})
const useAxiosPublic = () => {
    return publics
};

export default useAxiosPublic;