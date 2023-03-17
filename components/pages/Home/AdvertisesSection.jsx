import { advertises } from "@constants/advertises";
import React from "react";
import StarIcon from "@com-icons/StarIcon";
import HeartIcon from "@com-icons/HeartIcon";
import ImageSlider from "@com-shared/ImageSlider";

function AdvertisesSection() {
  return (
    <div className="grid grid-cols-4 gap-x-6 gap-y-10 container my-4">
      {advertises?.map((item) => (
        <div key={item.id} className="relative">
          <ImageSlider images={item.images} />
          <div className="mt-2 space-y-1">
            <div className="flex justify-between items-center">
              <div>{item.location}</div>
              <div className="flex items-center gap-1">
                <div className="font-light">{item.rate}</div>
                <StarIcon />
              </div>
            </div>
            <div className="font-thin"> به میزبانی {item.hostedBy}</div>
            <div> شبی {item.pricePerNight} تومان </div>
          </div>
          <div className="absolute top-3 left-4 z-10">
            <button>
              <HeartIcon className="text-gray-500 opacity-80" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdvertisesSection;
