import { Parallax } from "react-parallax";

const Cover = ({ bgImg, Title, des }) => {
    return (
        <Parallax
            blur={{ min: -20, max: 20 }}
            bgImage={bgImg}
            bgImageAlt="the mau"
            strength={-200}
        >
            <div className="hero h-[500px] text-white ">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:w-[800px] bg-black bg-opacity-50 p-10">
                        <h1 className="mb-5 text-6xl font-bold">{Title}</h1>
                        <p className="mb-5  ">{des}</p>

                    </div>
                </div>

            </div>
        </Parallax>
    );
};

export default Cover;