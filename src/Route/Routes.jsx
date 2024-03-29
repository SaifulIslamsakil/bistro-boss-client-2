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
        element:<Dashbord></Dashbord>,
        children:[
            {
                path:"/dashbord",
                element:<DasHome></DasHome>
            },
            {
                path:"/dashbord/my_card",
                element:<DasCard></DasCard>
            },
            {
                path:"/dashbord/add_item",
                element:<AddItem></AddItem>
            },
            {
                path:"/dashbord/reservation",
                element:<Reservation></Reservation>
            },
            {
                path:"/dashbord/manage_items",
                element:<ManageItems></ManageItems>
            },
            {
                path:"/dashbord/update_menu/:id",
                element:<Private><UpdateMenu></UpdateMenu></Private>,
                loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path:"/dashbord/all_user",
                element:<AllUser></AllUser>,
               
            },
        ]
    }
])

export default Route