import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Shred/Footer/Footer";
import Navbar from "../../Shred/Navbar/Navbar";

const MainlayOut = () => {
    const location = useLocation()
    console.log(location)
    const noHeaderFooter = location.pathname.includes("register") || location.pathname.includes("login")
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainlayOut;