import { useForm } from "react-hook-form";
import SectionHadding from "../../../Shred/SectionHadding/SectionHading"
import img from "../../../assets/reservation/wood-grain-pattern-gray1x.png"
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
const Imgbb_key = "8e63e023b6716f56295b0c1df1b0048a"
const createImgbbUrl = `https://api.imgbb.com/1/upload?key=${Imgbb_key}`
const AddItem = () => {
    const AxiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data)=>{
       console.log(data)
       const imgFile = {image : data.file[0]}
        const res = await AxiosPublic.post(createImgbbUrl,imgFile,{
            headers:{
                'content-Type' : 'multipart/form-data'
            }
        })
        if(res.data.success){
            const menuInfo = {
                name :data?.name,
                image:res.data?.data?.display_url,
                category:data?.category,
                price:parseFloat(data.price),
                recipe : data?.detiles
              }
              AxiosPublic.post("/add_item", menuInfo )
              .then(res=>{
                if(res.data.acknowledged){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `your ${data.name} has been added `,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      reset()
                }
              })
        }
    }
    
    return (
        <div >
             <SectionHadding
             subHadding='Whats new?'
             hadding='ADD AN ITEMS'
             >
             </SectionHadding>
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
                            <select defaultValue='select category' {...register("category")} className="select select-bordered">
                                <option disabled value='select category'>secect category</option>
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
                            <input type="text" {...register("name")} placeholder="Price*" {...register("price")} className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Recipe Details*</span>

                        </label>
                        <textarea className="textarea textarea-bordered h-24" {...register("detiles")} placeholder="Recipe Details"></textarea>
                    </div>
                    <div>
                        <input type="file" {...register("file")} className="file-input w-full max-w-xs" />
                    </div>
                    <div className=" ">
                        <input type="submit" value='submit' className="btn px-7  text-white bg-yellow-500 hover:bg-yellow-800" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;