import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Welcome.css";
import { Pagination } from "swiper"; // import required modules
import group7 from '../../assets/group7.png'

export default function Welcome() {

    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(clickCount + 1);
    };
    return (
        <>
            <div className="container">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

                    <SwiperSlide>
                        <div className="" >
                            <img alt="group7" src={group7} />
                        </div>
                        <div className="" >
                            <p>Nos encanta verte por</p>
                            <img alt="group7" src={group7} />
                        </div>
                        <div className="" >
                            <p>Atrae y enamora a los mejores candidatos</p>
                        </div>
                        <div>
                            <button onClick={handleClick}>Haz clic aquí</button>
                            <p>Has hecho clic {clickCount} veces.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}