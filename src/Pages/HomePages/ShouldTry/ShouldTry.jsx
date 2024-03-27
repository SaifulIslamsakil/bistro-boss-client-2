import SectionHading from "../../../Shred/SectionHadding/SectionHading";
import img from "../../../assets/menu/salad-bg.jpg"
const ShouldTry = () => {
    return (
        <div className="my-10 space-y-10">
          <SectionHading
          subHadding={"ShouldTry"}
          hadding={"chef recommends"}
          >
          </SectionHading>

            <div className="w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="card  bg-base-100 p-4 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body text-center space-y-3  ">
                        <h5 className="text-xl font-bold">Caeser Salad</h5>
                        <h3>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</h3>

                        <div>
                            <button className=" py-2 px-4 rounded-lg text-yellow-600 border-b-4 border-yellow-600 hover:bg-black">Add To Card</button>
                        </div>

                    </div>
                </div>
                <div className="card  bg-base-100 p-4 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body text-center space-y-3   ">
                        <h5 className="text-xl font-bold">Caeser Salad</h5>
                        <h3>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</h3>

                        <div>
                            <button className=" py-2 px-4 rounded-lg text-yellow-600 border-b-4 border-yellow-600 bg-black hover:bg-white bg-opacity-80">Add To Card</button>
                        </div>

                    </div>
                </div>
                <div className="card  bg-base-100 p-4 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body text-center space-y-3   ">
                        <h5 className="text-xl font-bold">Caeser Salad</h5>
                        <h3>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</h3>

                        <div>
                            <button className=" py-2 px-4 rounded-lg text-yellow-600 border-b-4 border-yellow-600 hover:bg-black">Add To Card</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShouldTry;