import { FaHome } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { LuMenuSquare } from "react-icons/lu";
import { FaBagShopping } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";


const Dashbord = () => {
    const AxiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: "all User",
        queryFn: async () => {
            const res = await AxiosSecure.get("/user")
            return res.data
        }
    })
    const isAdmin = allUsers?.find(admin => admin?.email == user.email)
    console.log(isAdmin)
    return (
        <div>
            <div className=" flex">
                <div className=" w-72  text-center h-screen  p-5" style={{ backgroundColor: "#D1A054" }}>
                    <div>
                        <h1 className=" text-2xl font-bold">BISTRO BOSS</h1>
                        <p className=" text-xl font-bold">Restaurant</p>
                    </div>
                    <div>
                        {
                            isAdmin?.Role == "Admin" ? <>
                                <div className=" mt-5 space-y-3">

                                    <div className=" flex gap-2 items-center  text-2xl font-bold">
                                        <span className=" text-white"><FaHome /></span>
                                        <NavLink to="/dashbord/admin_home" className={({ isActive }) =>
                                            isActive ? "text-white " : "hover:text-white"
                                        }>
                                            Admin Home
                                        </NavLink>
                                    </div>

                                    <div className=" flex gap-2 items-center  text-2xl font-bold">
                                        <span className=" text-white"><FaHome /></span>
                                        <NavLink to="/dashbord/add_item" className={({ isActive }) =>
                                            isActive ? "text-white " : "hover:text-white"
                                        }>
                                            add items
                                        </NavLink>
                                    </div>

                                    <div className=" flex gap-2 items-center  text-2xl font-bold">
                                        <span className=" text-white"><FaHome /></span>
                                        <NavLink to="/dashbord/manage_items" className={({ isActive }) =>
                                            isActive ? "text-white " : "hover:text-white"
                                        }>
                                            manage items
                                        </NavLink>
                                    </div>
                                    <div className=" flex gap-2 items-center  text-2xl font-bold">
                                        <span className=" text-white"><FaHome /></span>
                                        <NavLink to={"/dashbord/manage_bookings"} className={({ isActive }) =>
                                            isActive ? "text-white " : "hover:text-white"
                                        }>
                                            Manage bookings
                                        </NavLink>
                                    </div>
                                    <div className=" flex gap-2 items-center  text-2xl font-bold">
                                        <span className=" text-white"><FaHome /></span>
                                        <NavLink to="/dashbord/all_user" className={({ isActive }) =>
                                            isActive ? "text-white " : "hover:text-white"
                                        }>
                                            all users
                                        </NavLink>
                                    </div>
                                </div>
                            </> : <> <div className=" mt-5 space-y-3">
                                <div className=" flex gap-2 items-center  text-2xl font-bold">

                                    <span className=" text-white"><FaHome /></span>
                                    <NavLink to="/dashbord/user_home" className={({ isActive }) =>
                                            isActive ? "text-white " : "hover:text-white"
                                        }>
                                        User Home
                                    </NavLink>
                                </div>

                                <div className=" flex gap-2 items-center  text-2xl font-bold">

                                    <span className=" text-white"><FaHome /></span>
                                    <NavLink to="/dashbord/reservation" className={({ isActive }) =>
                                            isActive ? "text-white " : "hover:text-white"
                                        }>
                                        reservation
                                    </NavLink>
                                </div>

                                <div className=" flex gap-2 items-center  text-2xl font-bold">

                                    <span className=" text-white"><FaHome /></span>
                                    <NavLink to="/dashbord/payment_history" className={({ isActive }) =>
                                            isActive ? "text-white " : "hover:text-white"
                                        }>
                                        payment history
                                    </NavLink>
                                </div>
                                <div className=" flex gap-2 items-center  text-2xl font-bold">

                                    <span className=" text-white"><FaHome /></span>
                                    <NavLink to="/dashbord/my_card" className={({ isActive }) =>
                                            isActive ? "text-white " : "hover:text-white"
                                        }>
                                        my card
                                    </NavLink>
                                </div>
                                <div className=" flex gap-2 items-center  text-2xl font-bold">

                                    <span className=" text-white"><FaHome /></span>
                                    <NavLink to="/dashbord/add_review" className={({ isActive }) =>
                                            isActive ? "text-white " : "hover:text-white"
                                        }>
                                        add review
                                    </NavLink>
                                </div>
                                <div className=" flex gap-2 items-center  text-2xl font-bold">
                                    <span className=" text-white"><FaHome /></span>
                                    <NavLink to="/dashbord/my_booking" className={({ isActive }) =>
                                            isActive ? "text-white " : "hover:text-white"
                                        }>
                                        my booking
                                    </NavLink>
                                </div>

                            </div></>
                        }



                    </div>

                    {/*  */}

                    <div className=" space-y-4">
                        <div className="divider "></div>
                        <Link to='/' className=" flex items-center font-bold text-2xl gap-3">
                            <span className=" text-white"><FaHome /></span>
                            <span>Home</span></Link>
                        <Link to='/our_menu' className=" flex items-center font-bold text-2xl gap-3">
                            <span className=" text-white"><LuMenuSquare /></span>
                            <span>Menu</span></Link>
                        <Link to='/our_shop/salad' className=" flex items-center font-bold text-2xl gap-3">
                            <span className=" text-white"><FaBagShopping /></span>
                            <span>Shop</span></Link>
                        <Link to='/' className=" flex items-center font-bold text-2xl gap-3">
                            <span className=" text-white"><IoIosContact /></span>
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