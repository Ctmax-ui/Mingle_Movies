import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BigScreenSwiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BigScreenMediaCard from "./BigScreenMediaCard";

const BigScreenSwiper = ({ fetchedData }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  // console.log(fetchedData);
  return (
    <>
      <Swiper
        spaceBetween={6}
        centeredSlides={true}
        loop={true}
        
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable: true,
        }}

        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {fetchedData &&
          fetchedData.map((value, key) => (
            <SwiperSlide className=" bg-inherit" key={key} >
              <BigScreenMediaCard value={value}  />
            </SwiperSlide>
          ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default BigScreenSwiper;
