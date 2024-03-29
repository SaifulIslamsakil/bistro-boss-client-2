import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic"
import SectionHadding from "../../../Shred/SectionHadding/SectionHading"
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const ManageItems = () => {
    const AxiosPublic = useAxiosPublic()
    const { data: manuItems = [], refetch } = useQuery({
        queryKey: "manu",
        queryFn: async () => {
            const res = await AxiosPublic.get("/menus")
            return res.data
        },

    })
    const handelManuDelete = (id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                AxiosPublic.delete(`/manu_item_delete/${id}`)
                .then(res=>{
                    if(res.data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                     refetch()
                 })
           
            }
          });
    
    }
    return (
        <div>
            <SectionHadding
                subHadding="Hurry Up!"
                hadding="MANAGE ALL ITEMS"
            >
            </SectionHadding>
            
            <div className=" w-3/4 mx-auto my-5">
                <div className="my-5 font-bold text-2xl ">
                    <p>Total items: {manuItems.length}</p>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-white text-xl font-semibold" style={{ backgroundColor: "#D1A054" }}>
                            <tr>
                                <th>No</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                                
                          
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}


                            {
                                manuItems?.map((manuItem, ids) => <tr key={manuItem._id} className=" h-24">
                                    <th>
                                        <label className="text-2xl font-bold">
                                            {ids + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img src={manuItem.image} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <div className=" text-xl font-bold">
                                            {manuItem.name}
                                        </div>
                                    </td>
                                    <td className=" text-lg font-bold">$ {manuItem.price}</td>
                                    <th className=" flex gap-3 mt-4 ">
                                        <Link to={`/Dashboard/updateItems/${manuItem._id}`}>
                                            <button className="btn bg-yellow-500 hover:bg-yellow-700 btn-ghost text-white">
                                               <span className="text-xl"> <FaRegEdit /></span>
                                            </button>
                                        </Link>
                                        <button onClick={() => handelManuDelete(manuItem._id)} className="btn bg-red-500 hover:bg-red-700 btn-ghost text-white">
                                            <span className="text-xl"><MdDelete /></span>
                                        </button>
                                    </th>
                                   
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageItems;