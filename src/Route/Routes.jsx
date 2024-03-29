import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../Layout/MainlayOut/MainlayOut";
import Home from "../Pages/HomePages/Home/Home";
import OurMenu from "../Pages/OurMenuPages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShopPages/OurShop/OurShop";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashbord from "../Pages/Dashbord/Dashbord";

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
        // children:[
        //     {
        //         path:"/Dashbord"
        //     }
        // ]
    }
])

export default Route