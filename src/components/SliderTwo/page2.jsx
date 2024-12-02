"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";
import Image from "next/image";
import Item from '@/app/assets/img/F1.png'
import Controller from '@/app/assets/img/F2.png'
import Webfolio from '@/app/assets/img/F3.png'
import Photo from '@/app/assets/img/F4.png'
import Green from '@/app/assets/img/F5.png'
import { Swiper, SwiperSlide } from "swiper/react";
import Cursor from "@/components/Cursor/cursor_core/page";
import { AnimatePresence, motion } from "framer-motion";
import Drag from '@/app/assets/svg/Drag.svg'
import "swiper/css";
import "swiper/css/pagination";

import "./styles2.css";

import { FreeMode, Pagination } from "swiper/modules";

export default function App() {
  const targetRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false); 

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePositionChange = (x, y) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setIsHovering(isInside);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div ref={targetRef} className="flex h-full w-full items-center justify-center">
        <Cursor
          attachToParent
          variants={{
            initial: { scale: 0.3, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.3, opacity: 0 },
          }}
          springConfig={{
            bounce: 0.001,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.15,
          }}
          onPositionChange={handlePositionChange}
        >
          <motion.div
            animate={{
              width: isHovering ? 80 : 16,
              height: isHovering ? 32 : 16,
            }}
            className="flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40"
          >
            <AnimatePresence>
              {isHovering && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className=""
                >
                  <div className="items-center text-white dark:text-black">
                    <span>
                    <Image src={Drag} fill priority alt="Drag"></Image>
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Cursor>

        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={Controller} fill priority alt="img"/>
          </SwiperSlide>
          <SwiperSlide><Image src={Item} fill priority alt="img" /></SwiperSlide>
          <SwiperSlide><Image src={Webfolio} fill priority alt="img"/></SwiperSlide>
          <SwiperSlide><Image src={Photo} fill priority alt="img"/></SwiperSlide>
          <SwiperSlide><Image src={Green} fill priority alt="img"/></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
