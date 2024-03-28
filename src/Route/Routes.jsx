import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../Layout/MainlayOut/MainlayOut";
import Home from "../Pages/HomePages/Home/Home";
import OurMenu from "../Pages/OurMenuPages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShopPages/OurShop/OurShop";
import Register from "../Pages/Register/Register";

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
                path:"our_shop",
                element:<OurShop></OurShop>
            },
            {
                path:"register",
                element:<Register></Register>
            },
        ]
    }
])

export default Route