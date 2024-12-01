"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles2.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1.2} /* ค่าเริ่มต้น */
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.2, // แสดง 2 สไลด์ในหน้าจอที่กว้างกว่า 640px
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.2, // แสดง 3 สไลด์ในหน้าจอที่กว้างกว่า 768px
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2.5, // แสดง 4 สไลด์ในหน้าจอที่กว้างกว่า 1024px
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
