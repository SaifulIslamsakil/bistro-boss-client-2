import { Link } from "react-router-dom";

const Navbar = () => {
    const menuItms = [
        {
            pathName: "/",
            name: "home"
        },
        {
            pathName: "/contact us",
            name: "contact us"
        },
        {
            pathName: "/dashbord",
            name: "dashbord"
        },
        {
            pathName: "/my card",
            name: "my card"
        },
        {
            pathName: "/our_menu",
            name: "our menu"
        },
        {
            pathName: "/our shop",
            name: "our shop"
        },
        {
            pathName: "/login",
            name: "login"
        },
        {
            pathName: "/register",
            name: "Register"
        },
    ]
    return (
        <div className="navbar  fixed z-40 bg-black w-[1280px] text-white bg-opacity-60 py-5 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItms.map(menu => <li key={menu}><Link to={menu.pathName}>{menu.name}</Link></li>)
                        }

                    </ul>
                </div>
                <div>
                    <h2 className=" text-2xl font-semibold">BISTRO BOSS</h2>
                    <p className=" text-xl ">Restaurant</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 space-x-3  uppercase ">
                    {
                        menuItms.map(menu => <li key={menu}><Link to={menu.pathName}>{menu.name}</Link></li>)
                    }

                </ul>
            </div>
        </div>
    );
};

export default Navbar;