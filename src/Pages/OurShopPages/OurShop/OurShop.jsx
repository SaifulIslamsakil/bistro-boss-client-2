import { Helmet } from "react-helmet-async";
import Cover from "../../../Shred/Cover/Cover"
import img from "../../../assets/shop/banner2.jpg"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import FoodCard from "../FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import { useState } from "react";

const OurShop = () => {
    const menu = ["salad", "pizza", "soup", "dessert", "drinks"]
    const {category} = useParams()
    const index = menu.indexOf(category)
    const [tabsIndex, setTabsIndex] = useState(index)
    return (
        <div className=" space-y-6">
            <Helmet>
                <title>BISTRO BOSS || Shop </title>
            </Helmet>
            <Cover
                bgImg={img}
                Title={"OUR SHOP"}
                des={"Would you like to try a dish?"}
            ></Cover>
            <div >
                <Tabs defaultIndex={tabsIndex} onSelect={(index) => setTabsIndex(index)}>
                    <div className=' md:w-[500px] mx-auto font-bold text-xl text-yellow-600'>
                        <TabList>
                            <Tab>Salad</Tab>
                            <Tab>pizza</Tab>
                            <Tab>soups</Tab>
                            <Tab>desserts</Tab>
                            <Tab>drinks</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <FoodCard
                            menuCategory={"salad"}>
                        </FoodCard>
                    </TabPanel>
                    <TabPanel>
                        <FoodCard
                            menuCategory={"pizza"}>
                        </FoodCard>
                    </TabPanel>
                    <TabPanel>
                        <FoodCard
                            menuCategory={"soup"}>
                        </FoodCard>
                    </TabPanel>
                    <TabPanel>
                        <FoodCard
                            menuCategory={"dessert"}>
                        </FoodCard>
                    </TabPanel>
                    <TabPanel>
                        <FoodCard
                            menuCategory={"drinks"}>
                        </FoodCard>
                    </TabPanel>
                    
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;