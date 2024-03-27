import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
// import { Rating } from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'
import SectionHading from '../../../Shred/SectionHadding/SectionHading';

const TestiMonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("Reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="my-10">
            <SectionHading
                subHadding={"What Our Clients Say"}
                hadding={"TESTIMONIALS"}
            >
            </SectionHading>

            <div >
                <Swiper>
                    {
                        reviews.map((review, ids) => <SwiperSlide
                            key={ids}
                        >
                            <div className="lg:w-[600px] mx-auto text-center space-y-4">
                                <div className="flex justify-center mt-3">
                                    <div className="rating rating-sm">
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                                <p >{review.details}</p>
                                <h3 className="text-2xl text-yellow-600 ">{review.name}</h3>
                            </div>

                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div >
    );
};

export default TestiMonials;