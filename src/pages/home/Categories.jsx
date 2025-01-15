import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const CategoriesSlider = ({ categories }) => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 3, // For screens below 480px
        },
        480: {
          slidesPerView: 6, // For screens 480px and above
        },
      }}
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <div className="category-item">
            <img
              src={category.image}
              alt={category.name}
              className="category-image"
            />
            <p className="category-name">{category.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategoriesSlider;
