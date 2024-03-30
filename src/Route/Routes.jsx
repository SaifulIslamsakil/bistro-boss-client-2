import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../Layout/MainlayOut/MainlayOut";
import Home from "../Pages/HomePages/Home/Home";
import OurMenu from "../Pages/OurMenuPages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShopPages/OurShop/OurShop";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashbord from "../Pages/Dashbord/Dashbord";
import DasHome from "../Pages/Dashbord/DasHome/DasHome";
import DasCard from "../Pages/Dashbord/DasCard/DasCard";
import AddItem from "../Pages/Dashbord/AddItem/AddItem";
import ManageItems from "../Pages/Dashbord/ManageItems/ManageItems";
import UpdateMenu from "../Pages/Dashbord/UpdateMenu/UpdateMenu";
import Private from "../Private/Private";
import Reservation from "../Pages/Dashbord/Reservation/Reservation";
import AllUser from "../Pages/Dashbord/AllUser/AllUser";
import AdminHome from "../Pages/Dashbord/AdminHome/AdminHome";
import ManageBookings from "../Pages/Dashbord/Manage_bookings/ManageBookings"
import UserHome from "../Pages/Dashbord/UserHome/UserHome"
import PaymentHistory from "../Pages/Dashbord/Payment_History/PaymentHistory"
import AddReview from "../Pages/Dashbord/add review/AddReview"
import MyBooking from "../Pages/Dashbord/my_booking/MyBooking"
import AdminPrivate from "../Provider/AdminPrivate/AdminPrivate";
import ManuItem from "../Pages/OurMenuPages/ManuItem/ManuItem";
import Payment from "../Pages/Dashbord/Payment/Payment";

const Route = createBrowserRouter([
    {
        path:"/",
        element:<MainlayOut></MainlayOut>,
        errorElement:"",
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"our_menu",
                element:<OurMenu></OurMenu>
            },
            {
                path:"our_shop/:category",
                element:<OurShop></OurShop>
            },
            {
                path:"register",
                element:<Register></Register>
            },
            {
                path:"login",
                element:<Login></Login>
            },
        ]
    },
    {
        path:"/dashbord",
        element:<Private><Dashbord></Dashbord></Private>,
        children:[
            {
                path:"/dashbord",
                element:<Private><DasHome></DasHome></Private>
            },
            {
                path:"/dashbord/admin_home",
                element:<Private><AdminPrivate><AdminHome></AdminHome></AdminPrivate></Private>
            },
            {
                path:"/dashbord/my_card",
                element:<Private><DasCard></DasCard></Private>
            },
            {
                path:"/dashbord/add_item",
                element:<Private><AdminPrivate><AddItem></AddItem></AdminPrivate></Private>
            },
            {
                path:"/dashbord/payment",
                element:<Private><Payment></Payment></Private>
            },
            {
                path:"/dashbord/manage_items",
                element:<Private><AdminPrivate><ManageItems></ManageItems></AdminPrivate></Private>
            },
            {
                path:"/dashbord/update_menu/:id",
                element:<Private><AdminPrivate><UpdateMenu></UpdateMenu></AdminPrivate></Private>,
                loader: ({params})=> fetch(`https://bistro-boss-server-2-gamma.vercel.app/menu/${params.id}`)
            },
            {
                path:"/dashbord/all_user",
                element:<Private><AdminPrivate><AllUser></AllUser></AdminPrivate></Private>,
               
            },
            {
                path:"/dashbord/manage_bookings",
                element:<Private><AdminPrivate></AdminPrivate></Private>,
               
            },
            {
                path:"/dashbord/user_home",
                element:<Private><UserHome></UserHome></Private>,
               
            },
            {
                path:"/dashbord/payment_history",
                element:<Private><PaymentHistory></PaymentHistory></Private>,
               
            },
            {
                path:"/dashbord/my_booking",
                element:<Private><MyBooking></MyBooking></Private>,
               
            },
            {
                path:"/dashbord/add_review",
                element:<Private><AddReview></AddReview></Private>,
               
            },
        ]
    }
])

export default Route