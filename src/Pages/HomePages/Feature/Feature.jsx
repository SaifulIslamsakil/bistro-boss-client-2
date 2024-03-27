import SectionHading from "../../../Shred/SectionHadding/SectionHading";

const Feature = () => {
    return (
        <div className="lg:h-[80vh] bg-fixed my-10 text-white pt-5" style={{ backgroundImage: "url(https://i.ibb.co/v3SXdRs/featured.jpg)" }}>
            <div className="mt-10 bg-black bg-opacity-20  p-5">
                <SectionHading
                    subHadding={"Check it ou"}
                    hadding={"form our menu"}
                ></SectionHading>
                <div className="lg:flex w-2/3 mt-6 mx-auto gap-5">
                    <img src="https://i.ibb.co/v3SXdRs/featured.jpg" className="w-96" alt="" />
                    <div >
                        <h6>March 20, 2023</h6>
                        <h4>WHERE CAN I GET SOME?</h4>
                        <p className="lg:w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quos impedit dolorum dicta praesentium accusantium quod minima accusamus in officia dolore quia, aspernatur fuga animi, recusandae atque a minus perferendis soluta necessitatibus. Voluptas aut fugiat nisi ipsum unde rerum quae amet dolore soluta! Vel iure totam incidunt impedit esse dolores.</p>

                        <button className=" py-2 px-4 font-bold  rounded-lg text- border-b-4 hover:bg-black">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;