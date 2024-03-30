import { Link } from "react-router-dom";
import SectionHading from "../../../Shred/SectionHadding/SectionHading";
import { MdDelete } from "react-icons/md";
import useCard from "../../../Hooks/useCard/useCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const DasCard = () => {
    const { data, refetch } = useCard()
    const AxiosPublic = useAxiosSecure()
    const totalPrices = data?.reduce((sum, itms) => sum + itms?.ProductPrice, 0)
    console.log(totalPrices, data)
    const handelDelete = (id) => {
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
                AxiosPublic.delete(`/card/${id}`)
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

    return (
        <div className=" p-10">
            <SectionHading
                subHadding={"My Card"}
                hadding={"WANNA ADD MORE?"}
            >
            </SectionHading>
            <div className=" flex justify-evenly items-center rounded-lg my-5 font-bold text-2xl ">
                <p>Total orders: {data?.length}</p>
                <p>Total price: ${totalPrices}</p>
                <Link to="/dashbord/payment">
                    <button className="  btn-secondary btn">pay </button>
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-white text-xl font-semibold " style={{ backgroundColor: "#D1A054" }}>
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
                            data?.map((card, ids) => <tr key={card._id} className=" h-24">
                                <th>
                                    <label className="text-2xl font-bold">
                                        {ids + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={card.ProductImg} />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <div className=" text-xl font-bold">
                                        {card.ProductName}
                                    </div>
                                </td>
                                <td className=" font-bold">$ {card.ProductPrice}</td>
                                <th>
                                    <button onClick={() => handelDelete(card._id)} className="btn hover:bg-red-700 bg-red-500 btn-ghost text-white text-2xl">
                                        <span><MdDelete /></span>
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default DasCard;