import { Outlet } from "react-router-dom";
import Footer from "../../Shred/Footer/Footer";
import Navbar from "../../Shred/Navbar/Navbar";

const MainlayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainlayOut;