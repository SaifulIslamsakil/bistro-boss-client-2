import useMenuData from "../../../Hooks/useManuData/useManuData"
const FoodCard = ({ menuCategory }) => {
    const [menuData] = useMenuData()
    const categorys = menuData.filter(menu => menu.category === menuCategory)
    return (
        <div className=" w-11/12 mx-auto grid p-3 lg:px-10  grid-cols-1 md:grid-cols-2 gap-5 mt-5 lg:grid-cols-3">
            {
                categorys.map(category => <div key={category._id} className="card relative  bg-base-100 p-4 shadow-xl">
                    <figure><img src={category.image} alt="Shoes" />
                        <h3 className=" font-bold text-xl top-6 right-5 bg-opacity-80 bg-yellow-600 text-white p-2 rounded-lg absolute">${category.price}</h3>
                    </figure>
                    <div className="card-body text-center ">
                        <h5 className="text-xl uppercase font-bold">{category.name}</h5>
                        <h3>{category.recipe}</h3>
                    </div>
                    <div className=" flex justify-center items-center mb-3">
                        <button className=" py-2 px-4 rounded-lg text-yellow-600 bg-gray-200 border-b-4 border-yellow-600 hover:bg-black">Add To Card</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default FoodCard;