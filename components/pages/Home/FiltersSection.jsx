import FilterIcon from "@com-icons/FilterIcon";
import React, { useRef } from "react";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ArrowRightIcon from "@com-icons/ArrowRightIcon";
import ArrowLeftIcon from "@com-icons/ArrowLeftIcon";

function FiltersSection() {
  const swiperRef = useRef(null);
  return (
    <div className="shadow-sm p-4">
      <div className="grid grid-cols-12 gap-8 container">
        <div className="col-span-11 flex items-center">
          <button
            className="rounded-full border p-2 h-fit"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <ArrowRightIcon />
          </button>

          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={1}
            loop
            slidesPerView={12}
          >
            {[
              { lable: "کنار برکه", src: "/images/lake-front.jpg" },
              { lable: "کلبه سوییسی", src: "/images/a-house.jpg" },
              { lable: "منظر زیبا", src: "/images/amazing-view.jpg" },
              { lable: "ط", src: "/images/barns.jpg" },
              { lable: "کنار دریا", src: "/images/beach-front.jpg" },
              { lable: "کابین", src: "/images/cabins.jpg" },
              { lable: "کمپ", src: "/images/camp.jpg" },
              { lable: "قصر", src: "/images/castle.jpg" },
              { lable: "جزیره", src: "/images/island.jpg" },
              { lable: "خانه درختی", src: "/images/tree-house.jpg" },
              { lable: "لوکس", src: "/images/luxe-house.jpg" },
              { lable: "پارک ملی", src: "/images/national-park.jpg" },
              { lable: "کلبه", src: "/images/tiny-house.jpg" },
            ].map((item) => (
              <SwiperSlide key={item.src}>
                <div className="flex flex-col items-center justify-center gap-1">
                  <Image src={item.src} width="24" height="24" alt="" />
                  <div className="text-sm">{item.lable}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="rounded-full border p-2 h-fit"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <ArrowLeftIcon />
          </button>
        </div>
        <div className="col-span-1">
          <button className="flex items-center gap-1 border p-3 rounded-lg">
            <FilterIcon />
            <div className="text-sm">فیلتر</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(FiltersSection);
