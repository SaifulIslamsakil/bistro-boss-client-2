import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Category from "../Category/Category";
import Feature from "../Feature/Feature";
import Menu from "../Menu/Menu";
import ShouldTry from "../ShouldTry/ShouldTry";
import TestiMonials from "../TestiMonials/TestiMonials";



const Home = () => {
    return (
        <div className=" space-y-10 mb-10 ">
            <Helmet>
                <title>BISTRO BOSS || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Blog></Blog>
            <Menu></Menu>
            <div className=" bg-black lg:w-2/3 mx-auto  p-6 lg:p-20 mt-20">
                <h2 className=" text-center text-white font-bold text-2xl">Call Us: +88 0192345678910</h2>
            </div>
            <ShouldTry></ShouldTry>
            <Feature></Feature>
            <TestiMonials></TestiMonials>
        </div>
    );
};

export default Home;