import React,{ useContext } from 'react'
import "./Portfolio.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { themeContext } from "../../Context";


function Portfolio() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

   
    
  return (
    <div className="portfolio" id='Portfolio'>
        {/* heading */}
        <span  style={{
            color: darkMode ? "white" : "",
          }}>Recent Project</span>
        <span>Portfolio</span>
        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        >
            <SwiperSlide>
                <img src="img/sidebar.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/ecommerce.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/musicapp.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/hoc.png" alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio