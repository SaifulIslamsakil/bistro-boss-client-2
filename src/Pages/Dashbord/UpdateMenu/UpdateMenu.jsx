import { useLoaderData, useParams } from "react-router-dom";
import SectionHading from "../../../Shred/SectionHadding/SectionHading";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import img from "../../../assets/reservation/wood-grain-pattern-gray1x.png"
const UpdateMenu = () => {
    const menuData = useLoaderData()
    const AxiosPublice = useAxiosPublic()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const updateInfo = {
            name : data.name,
            price : data.price,
            category: data.category,
            recipe : data.detiles
        }
        
        AxiosPublice.patch(`/update_menu/${menuData?._id}`, updateInfo)
        .then(res=>{
            if(res.data.modifiedCount>0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `your item hass been updated `,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  reset()
            }
        })
    }
    return (
        <div >
            <SectionHading
                subHadding='Whats new?'
                hadding='UPDATE ITEM'
            >
            </SectionHading>
            <div className="w-4/5 p-10  mx-auto" style={{ backgroundImage: `url(${img})` }}>
                <form className=" space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Recipe name*</span>
                        </label>
                        <input type="text" {...register("name")} placeholder="Recipe name here*" className="input input-bordered w-full " />
                    </div>
                    <div className=" flex gap-6">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text  text-xl font-semibold">Category*</span>
                            </label>
                            <select {...register("category")} className="select select-bordered">
                                <option disabled selected value='secect category'>secect category</option>
                                <option value="salad">salad</option>
                                <option value="pizza">pizza</option>
                                <option value='dessert'>dessert</option>
                                <option value='soup' >soup</option>
                                <option value='drinks'>drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Price*</span>
                            </label>
                            <input type="text" {...register("name")} placeholder="Price*" {...register("price")}  className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Recipe Details*</span>

                        </label>
                        <textarea className="textarea textarea-bordered h-24" {...register("detiles")} placeholder="Recipe Details"></textarea>
                    </div>
                   
                    <div className=" w-40 mx-auto ">
                        <input  type="submit" value='Update Recipe Details' className="btn px-7  text-white bg-yellow-500 hover:bg-yellow-800" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateMenu;