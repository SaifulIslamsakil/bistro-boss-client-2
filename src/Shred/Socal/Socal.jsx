import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Socal = () => {
    return (
        <div className=" flex justify-center gap-10">
            <div>
                <p className=" bg-black p-3 text-2xl text-white rounded-full"><FaGoogle /></p>
            </div>
            <div>
                <p className=" bg-black p-3 text-2xl text-white rounded-full"><FaGithub /></p>
            </div>
            <div>
                <p className=" bg-black p-3 text-2xl text-white rounded-full"><FaFacebook /></p>
            </div>
        </div>
    );
};

export default Socal;