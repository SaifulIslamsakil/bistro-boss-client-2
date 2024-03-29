import { useQuery } from "@tanstack/react-query";
import SectionHading from "../../../Shred/SectionHadding/SectionHading";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const AllUser = () => {
    const AxiosPublic = useAxiosPublic()
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: "all User",
        queryFn: async () => {
            const res = await AxiosPublic.get("/user")
            return res.data
        }
    })
    const handelDeleteUser = (id) => {
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
                AxiosPublic.delete(`/user/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
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
    const handelUpdateUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, got it!"
        }).then((result) => {
            if (result.isConfirmed) {
                AxiosPublic.patch(`/user/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "update!",
                                text: "Your user has been admin .",
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
        <SectionHading
            subHadding={"How many??"}
            hadding={"MANAGE ALL USERS"}
        >
        </SectionHading>
        <div className=" w-3/4 mx-auto ">
            <h2 className=" text-2xl mb-5 font-bold">Total users: {allUsers?.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-white text-xl font-semibold " style={{ backgroundColor: "#D1A054" }}>
                        <tr>
                            <th>No</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allUsers?.map((allUser, ids) => <tr key={allUser._id} className=" h-24">
                                <th>
                                    <label className="text-2xl font-bold">
                                        {ids + 1}
                                    </label>
                                </th>
                                <td>
                                    <h2 className=" text-xl font-semibold">{allUser.Name}</h2>
                                </td>
                                <td>
                                    <div className=" text-xl font-semibold">
                                        <h2>{allUser.email}</h2>
                                    </div>
                                </td>
                                <td >
                                    {allUser?.Role? <span className=" text-xl font-semibold bg-green-600 text-white p-2 rounded-lg ">{allUser.Role}</span> :<button onClick={() => handelUpdateUser(allUser._id)} >
                                       <span className=" text-xl btn bg-yellow-500 hover:bg-yellow-700 btn-ghost text-white"><FaRegEdit/></span>
                                    </button>}
                                </td>
                                <th>
                                    <td>
                                        <button onClick={() => handelDeleteUser(allUser._id)} className="btn text-xl bg-red-500 btn-ghost hover:bg-red-700 text-white">
                                            <MdDelete />
                                        </button>
                                    </td>
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

export default AllUser;