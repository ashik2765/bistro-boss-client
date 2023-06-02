import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import "swiper/css";
import "swiper/css/pagination";

import IMG1 from '../../../assets/home/slide1.jpg'
import IMG2 from '../../../assets/home/slide2.jpg'
import IMG3 from '../../../assets/home/slide3.jpg'
import IMG4 from '../../../assets/home/slide4.jpg'
import IMG5 from '../../../assets/home/slide5.jpg'
const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"From 11.00am to 10.00pm"}
                heading={"Order Online"}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={IMG1} alt="" />
                    <h3 className="text-2xl text-center text-white uppercase -mt-20">salad</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={IMG2} alt="" />
                    <h3 className="text-2xl text-center text-white uppercase -mt-20">pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={IMG3} alt="" />
                    <h3 className="text-2xl text-center text-white uppercase -mt-20">soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={IMG4} alt="" />
                    <h3 className="text-2xl text-center text-white uppercase -mt-20">desert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={IMG5} alt="" />
                    <h3 className="text-2xl text-center text-white uppercase -mt-20">salad</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;