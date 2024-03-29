import { Link } from "react-router-dom";
import SectionHading from "../../../Shred/SectionHadding/SectionHading";
import { MdDelete } from "react-icons/md";

const DasCard = () => {
    const handelDelete = (id)=>[
        console.log(id)
    ]
    return (
        <div className=" p-10">
            <SectionHading
                subHadding={"My Card"}
                hadding={"WANNA ADD MORE?"}
            >
            </SectionHading>
            <div className=" flex justify-evenly items-center rounded-lg my-5 font-bold text-2xl ">
                <p>Total orders: {"cards?.length"}</p>
                <p>total price: ${"totalPrices"}</p>
                <Link to="/Dashboard/reservation">
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


                         <tr className=" h-24">
                                <th>
                                    <label className="text-2xl font-bold">
                                        {"ids + 1"}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={"card.ProductImg"} />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <div className=" text-xl font-bold">
                                        {"card.ProductName"}
                                    </div>
                                </td>
                                <td className=" font-bold">$ {"card.ProductPrice"}</td>
                                <th>
                                    <button onClick={() => handelDelete("card._id")} className="btn bg-red-500 btn-ghost text-white">
                                       <span><MdDelete /></span>
                                    </button>
                                </th>
                            </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default DasCard;