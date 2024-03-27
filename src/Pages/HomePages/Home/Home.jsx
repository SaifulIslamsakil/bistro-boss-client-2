import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Category from "../Category/Category";



const Home = () => {
    return (
        <div className=" space-y-10">
            <Banner></Banner>
            <Category></Category>
            <Blog></Blog>
        </div>
    );
};

export default Home;