import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Category from "../Category/Category";
import Menu from "../Menu/Menu";



const Home = () => {
    return (
        <div className=" space-y-10">
            <Banner></Banner>
            <Category></Category>
            <Blog></Blog>
            <Menu></Menu>
        </div>
    );
};

export default Home;