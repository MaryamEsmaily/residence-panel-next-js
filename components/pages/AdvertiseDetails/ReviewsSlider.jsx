import React, { useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowRightIcon from "@com-icons/ArrowRightIcon";
import ArrowLeftIcon from "@com-icons/ArrowLeftIcon";

function ReviewsSlider({ reviews }) {
  const swiperRef = useRef(null);
  return (
    <div className="h-full flex items-center gap-2">
      <button
        className="rounded-full border p-2 h-fit"
        onClick={() => swiperRef.current.swiper.slidePrev()}
      >
        <ArrowRightIcon />
      </button>

      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
      >
        {reviews?.map((item) => (
          <SwiperSlide key={item.author}>
            <div className="w-full h-[250px] p-6 border rounded-xl space-y-4">
              <div className="font-bold">{item.author}</div>
              <div className="text-sm">{item.date}</div>
              <div className="font-light text-justify line-clamp-3">
                {item.desc}
              </div>
              <button className="flex items-center mt-2">
                <div className="text-sm"> نمایش بیشتر</div>
                <ArrowLeftIcon />
              </button>
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
  );
}

export default React.memo(ReviewsSlider);
