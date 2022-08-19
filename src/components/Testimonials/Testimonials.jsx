import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
function Testimonials() {
  const clients = [
    {
      img: "img/profile1.jpg",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quaerat voluptatum dicta esse asperiores, ad quos officia eos hic totam.",
    },
    {
      img: "img/profile2.jpg",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quaerat voluptatum dicta esse asperiores, ad quos officia eos hic totam.",
    },
    {
      img: "img/profile3.jpg",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quaerat voluptatum dicta esse asperiores, ad quos officia eos hic totam.",
    },
    {
      img: "img/profile4.jpg",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quaerat voluptatum dicta esse asperiores, ad quos officia eos hic totam.",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptinal Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className="blur t-blur2"
          style={{ background: "skyblue" }}
        ></div>
      </div>
      {/* slider */}

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((clients, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={clients.img} alt="" />
                <span>{clients.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonials;
