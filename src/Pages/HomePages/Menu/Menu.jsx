import { useEffect, useState } from "react";
import SectionHading from "../../../Shred/SectionHadding/SectionHading";

const Menu = () => {
    const [menus, setMenus] = useState([])

    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])

    return (
        <div>
            <SectionHading
                subHadding={"Check it out"}
                hadding={"from our menu"}
            >
            </SectionHading>
            <div className="grid p-3 lg:px-10  grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                {menus.slice(0, 6).map(menu => <div
                    key={menu._id}
                    className="flex items-center gap-5"
                >

                    <img src={menu.image} alt="" style={{ borderRadius: "0px 200px 200px 200px" }} className="w-28" />
                    <div>
                        <h5 className="text-xl font-semibold">{menu.name} --------------</h5>
                        <p>{menu.recipe}</p>
                        <p>{menu.category}</p>
                    </div>
                    <h4 className="text-2xl font-bold text-yellow-600">${menu.price}</h4>
                </div>)
                }
            </div>
            <div className="flex justify-center">
                <button className=" rounded-lg  text-2xl font-bold text-yellow-600 border-yellow-600 border-b-4 py-3 px-5 hover:bg-black hover:text-white">View Detlies</button>
            </div>
        </div>
    );
};

export default Menu;