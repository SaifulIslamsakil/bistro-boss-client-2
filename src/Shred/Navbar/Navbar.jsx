import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
const Navbar = () => {
    const { user, userLogout } = useContext(AuthContext)
    console.log(user)
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
            pathName: "/our_shop/salad",
            name: "our shop"
        }

    ]
    const hanelLogout = () => {
        userLogout()
            .then(res => {
                Swal.fire({
                    title: "Good job!",
                    text: "You Accout suecssfully Logout!",
                    icon: "success"
                });
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            })
    }
    const menus =
        menuItms.map(menu => <li key={menu}><NavLink
            to={menu.pathName}
            className={({ isActive }) =>
                isActive ? "bg-yellow-500 " : "hover:bg-yellow-500"
            }
        >
            {menu.name}
        </NavLink></li>)
    const conditonalMenu = <>
        {
            !user ? <>
                <li><NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? "bg-yellow-500 " : "hover:bg-yellow-500"
                    }
                >login
                </NavLink></li>
                <li><NavLink
                    to="/register"
                    className={({ isActive }) =>
                        isActive ? "bg-yellow-500 " : "hover:bg-yellow-500"
                    }
                >register
                </NavLink></li>
            </> : <>
                <button onClick={hanelLogout} className=" btn outline">Logout</button>
            </>
        }
    </>

    return (
        <div className="navbar  fixed z-40 bg-black w-[1280px] text-white bg-opacity-60 py-5 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {menus}
                        {conditonalMenu}
                    </ul>
                </div>
                <div>
                    <h2 className=" text-2xl font-semibold">BISTRO BOSS</h2>
                    <p className=" text-xl ">Restaurant</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 space-x-2  uppercase ">
                    {menus}
                    {conditonalMenu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;