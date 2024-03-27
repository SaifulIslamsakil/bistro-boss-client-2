import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../Layout/MainlayOut/MainlayOut";
import Home from "../Pages/HomePages/Home/Home";
import OurMenu from "../Pages/OurMenuPages/OurMenu/OurMenu";

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
        ]
    }
])

export default Route