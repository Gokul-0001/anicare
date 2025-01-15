import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const BannerSlider = ({ banners }) => {
  return (
    <Swiper
      className="banner-slider" /* Unique class name for banner slider */
      spaceBetween={10}
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1, // For screens below 480px
        },
        480: {
          slidesPerView: 2, // For screens 480px and above
        },
      }}
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <div className="banner-item">
            <img
              src={banner.image}
              alt={banner.name}
              className="banner-image"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
