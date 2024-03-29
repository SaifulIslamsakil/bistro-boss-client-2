import { useContext } from "react";
import useMenuData from "../../../Hooks/useManuData/useManuData"
import { AuthContext } from "../../../Provider/Provider"
// import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
const FoodCard = ({ menuCategory }) => {
    const [menuData] = useMenuData()
    const categorys = menuData.filter(menu => menu.category === menuCategory)
    const { user } = useContext(AuthContext)
    const AxiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const location = useLocation()
    const handelAddTocard = (item) => {
      
        if(user && user?.email){
            const cardInfo = {
                userEmail: user.email,
                ProductName: item.name,
                ProductImg: item.image,
                ProductPrice: item.price
            }
            console.log(cardInfo)
            AxiosPublic.post("/card", cardInfo)
            .then(res=>{
                if(res.data.acknowledged){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `your product ${item.name}`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
            
        }
        else{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: location.pathname })
                }
            });
        }
    }
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
                        <button onClick={() => handelAddTocard(category)} className=" py-2 px-4 rounded-lg text-yellow-600 bg-gray-200 border-b-4 border-yellow-600 hover:bg-black">Add To Card</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default FoodCard;