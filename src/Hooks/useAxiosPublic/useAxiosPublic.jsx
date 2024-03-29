import axios from "axios";

const publics = axios.create({
    baseURL:"http://localhost:5000"
})
const useAxiosPublic = () => {
    return publics
};

export default useAxiosPublic;