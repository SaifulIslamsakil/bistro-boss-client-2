import { Link } from "react-router-dom";
import useManuData from "../../../Hooks/useManuData/useManuData";

const ManuItem = ({menuCategory}) => {
    const [menuData]= useManuData()
    const categorys = menuData.filter(menu=> menu.category === menuCategory)
    console.log(categorys)

    return (
        <div className="my-10">
            <div className="grid p-3 lg:px-10  grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                {categorys.map(category => <div
                    key={category._id}
                    className="flex items-center gap-5"
                >

                    <img src={category.image} alt="" style={{ borderRadius: "0px 200px 200px 200px" }} className="w-28" />
                    <div>
                        <h5 className="text-xl font-semibold">{category.name} --------------</h5>
                        <p>{category.recipe}</p>
                        <p>{category.category}</p>
                    </div>
                    <h4 className="text-2xl font-bold text-yellow-600">${category.price}</h4>
                </div>)}
            </div>
            <div className="flex justify-center">
                <Link to={`/ourshop/${menuCategory}`}>
                    <button className=" rounded-lg  text-xl font-bold text-yellow-600 border-yellow-600 border-b-4 py-3 px-5 hover:bg-black hover:text-white">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default ManuItem;