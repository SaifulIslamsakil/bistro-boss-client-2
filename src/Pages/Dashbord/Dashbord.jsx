import { FaHome } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { LuMenuSquare } from "react-icons/lu";
import { FaBagShopping } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";

const Dashbord = () => {
    return (
        <div>
            <div className=" flex">
                <div className=" w-72  text-center  p-5" style={{ backgroundColor: "#D1A054" }}>
                    <div>
                        <h1 className=" text-2xl font-bold">BISTRO BOSS</h1>
                        <p className=" text-xl font-bold">Restaurant</p>
                    </div>
                    <div>
                        <div className=" mt-5 space-y-3">
                            <div className=" flex gap-2 items-center  text-2xl font-bold">
                                <span><FaHome /></span>
                                <NavLink>
                                    Admin Home
                                </NavLink>
                            </div>

                            <div className=" flex gap-2 items-center  text-2xl font-bold">
                                <span><FaHome /></span>
                                <NavLink to="/dashbord/add_item">
                                    add items
                                </NavLink>
                            </div>

                            <div className=" flex gap-2 items-center  text-2xl font-bold">
                                <span><FaHome /></span>
                                <NavLink to="/Dashboard/ManageItems">
                                    manage items
                                </NavLink>
                            </div>
                            <div className=" flex gap-2 items-center  text-2xl font-bold">
                                <span><FaHome /></span>
                                <NavLink >
                                    Manage bookings
                                </NavLink>
                            </div>
                            <div className=" flex gap-2 items-center  text-2xl font-bold">
                                <span><FaHome /></span>
                                <NavLink to="/Dashboard/AllUser">
                                    all users
                                </NavLink>
                            </div>
                        </div>
                        <div className=" mt-5 space-y-3">
                            <div className=" flex gap-2 items-center  text-2xl font-bold">

                                <span><FaHome /></span>
                                <NavLink>
                                    User Home
                                </NavLink>
                            </div>

                            <div className=" flex gap-2 items-center  text-2xl font-bold">

                                <span><FaHome /></span>
                                <NavLink to="/Dashboard/reservation">
                                    reservation
                                </NavLink>
                            </div>

                            <div className=" flex gap-2 items-center  text-2xl font-bold">

                                <span><FaHome /></span>
                                <NavLink>
                                    payment history
                                </NavLink>
                            </div>
                            <div className=" flex gap-2 items-center  text-2xl font-bold">

                                <span><FaHome /></span>
                                <NavLink to="/dashbord/my_card">
                                    my card
                                </NavLink>
                            </div>
                            <div className=" flex gap-2 items-center  text-2xl font-bold">

                                <span><FaHome /></span>
                                <NavLink>
                                    add review
                                </NavLink>
                            </div>
                            <div className=" flex gap-2 items-center  text-2xl font-bold">
                            <span><FaHome /></span>
                                <NavLink>
                                    my booking
                                </NavLink>
                            </div>

                        </div>

                    </div>

                    {/*  */}

                    <div className=" space-y-4">
                        <div className="divider "></div>
                        <Link to='/' className=" flex items-center font-bold text-2xl gap-3">
                            <span><FaHome /></span>
                            <span>Home</span></Link>
                        <Link to='/our_menu' className=" flex items-center font-bold text-2xl gap-3">
                            <span><LuMenuSquare /></span>
                            <span>Menu</span></Link>
                        <Link to='/our_shop/salad' className=" flex items-center font-bold text-2xl gap-3">
                            <span><FaBagShopping /></span>
                            <span>Shop</span></Link>
                        <Link to='/' className=" flex items-center font-bold text-2xl gap-3">
                            <span><IoIosContact /></span>
                            <span>Contact</span></Link>
                    </div>
                </div>
                <div className=" flex-1">

                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;