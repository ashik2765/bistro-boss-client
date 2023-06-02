import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import {Rating} from "@smastrom/react-rating"
import '@smastrom/react-rating/style.css';



const Testimonials = () => {

    const [review,setReview] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <section className="my-20">
            <SectionTitle
                heading={"Testimonials"}
                subHeading={"What Our Client Say"}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
               {
                review.map(item => <SwiperSlide
                key={item._id}
                >
                    <div className=" flex flex-col justify-center items-center m-16">
                        <Rating 
                        style={{maxWidth:180}}
                        value={item.rating}
                        readOnly
                        ></Rating>
                        <p className="py-5">{item.details}</p>
                        <h3 className="text-2xl text-orange-400">{item.name}</h3>
                    </div>
                </SwiperSlide> )
               }
            </Swiper>
        </section>
    );
};

export default Testimonials;