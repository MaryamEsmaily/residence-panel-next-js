import ArrowLeftIcon from "@com-icons/ArrowLeftIcon";
import ArrowRightIcon from "@com-icons/ArrowRightIcon";
import Image from "next/image";
import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

function ImageSlider({ images }) {
  const swiperRef = useRef();
  return (
    <div className="relative [&_button]:hover:opacity-100">
      <button
        className="transition duration-300 ease-out hover:ease-in opacity-0 absolute bg-white z-10 -translate-y-1/2 right-2 top-1/2 rounded-full border p-2 h-fit"
        onClick={() => swiperRef.current.swiper.slidePrev()}
      >
        <ArrowRightIcon />
      </button>
      <Swiper
        initialSlide={2}
        ref={swiperRef}
        simulateTouch={false}
        loop={true}
        style={{ width: "100%" }}
        modules={[Navigation, Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
        centeredSlides={true}
      >
        {images?.map((img) => (
          <SwiperSlide key={img.src}>
            <div className="w-[100%] h-[284px] relative rounded-2xl overflow-hidden">
              <Image
                src={img.src}
                fill
                alt={img.alt}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="absolute transition duration-300 ease-out hover:ease-in opacity-0 bg-white z-10 -translate-y-1/2 left-2 top-1/2 rounded-full border p-2 h-fit"
        onClick={() => swiperRef.current.swiper.slideNext()}
      >
        <ArrowLeftIcon />
      </button>
    </div>
  );
}

export default ImageSlider;
