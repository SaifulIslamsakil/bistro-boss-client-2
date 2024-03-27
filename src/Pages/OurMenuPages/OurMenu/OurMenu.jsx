import { Helmet } from "react-helmet-async";
import Cover from "../../../Shred/Cover/Cover";
import SectionHadding from "../../../Shred/SectionHadding/SectionHading"
import ManuItem from "../ManuItem/ManuItem"
const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS || Manu</title>
            </Helmet>
            <div>
                <div>
                    <Cover
                        bgImg={"https://i.ibb.co/QfSfBGR/banner3.jpg"}
                        Title={"OUR MENU"}
                        des={"Would you like to try a dish?"}
                    ></Cover>
                    <SectionHadding
                        subHadding={"Don't miss"}
                        hadding={"TODAY'S OFFER"}
                    ></SectionHadding>
                    <ManuItem
                        menuCategory={"offered"}

                    ></ManuItem>
                </div>
                <div>
                    <Cover
                        bgImg={"https://i.ibb.co/xYmpRGB/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-1024x683.webp"}
                        Title={"dessert"}
                        des={"Would you like to try a dish?"}
                    ></Cover>
                    <ManuItem
                        menuCategory={"dessert"}

                    ></ManuItem>
                </div>
                <div>
                    <Cover
                        bgImg={"https://i.ibb.co/0tQCcc2/images-5.jpg"}
                        Title={"drinks"}
                        des={"Would you like to try a dish?"}
                    ></Cover>
                    <ManuItem
                        menuCategory={"drinks"}

                    ></ManuItem>
                </div>
                <div>
                    <Cover
                        bgImg={"https://i.ibb.co/LkWfBqv/1664468260-pizza-5179939-960-720.jpg"}
                        Title={"pizza"}
                        des={"Would you like to try a dish?"}
                    ></Cover>
                    <ManuItem
                        menuCategory={"pizza"}

                    ></ManuItem>
                </div>
                <div>
                    <Cover
                        bgImg={"https://i.ibb.co/hsTyLMZ/easy-chicken-noodle-soup-23912-1.webp"}
                        Title={"salad"}
                        des={"Would you like to try a dish?"}
                    ></Cover>
                    <ManuItem
                        menuCategory={"salad"}

                    ></ManuItem>
                </div>
                <div>
                    <Cover
                        bgImg={"https://i.ibb.co/hsTyLMZ/easy-chicken-noodle-soup-23912-1.webp"}
                        Title={"soup"}
                        des={"Would you like to try a dish?"}
                    ></Cover>
                    <ManuItem
                        menuCategory={"soup"}

                    ></ManuItem>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;