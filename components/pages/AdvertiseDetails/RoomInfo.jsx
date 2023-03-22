import React from "react";
import BorderedHeartIcon from "@com-icons/BorderedHeartIcon";
import ShareIcon from "@com-icons/ShareIcon";
import StarIcon from "@com-icons/StarIcon";
import Link from "next/link";
import GeneralInfo from "@com-pages/AdvertiseDetails/GeneralInfo";
import RoomImages from "@com-pages/AdvertiseDetails/RoomImages";
//
function RoomInfo() {
  return (
    <div>
      <div className="space-y-4 mt-6">
        <div className="text-2xl">خانه به میزبانی پارسا و ترانه</div>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <StarIcon className="w-[14px] h-[14px]" />
              <div className="font-light">5.0</div>
            </div>
            {[
              { label: "4 نظر", link: "#" },
              { label: "مازندران، ایران", link: "#" },
            ].map((item) => (
              <div key={item.label} className="flex gap-2 items-center">
                <div className="h-0.5 w-0.5 bg-gray-500 rounded-full"></div>
                <Link href={item.link}>
                  <div className="underline">{item.label}</div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <button className="hover:bg-gray-100 p-3 rounded-full">
              <ShareIcon className="w-[20px] h-[20px]" />
            </button>
            <button className="hover:bg-gray-100 p-3 rounded-full">
              <BorderedHeartIcon className="w-[20px] h-[20px]" />
            </button>
          </div>
        </div>
      </div>
      <hr className="my-1 border-dashed" />
      <div className="grid grid-cols-2 gap-8 pt-6">
        <GeneralInfo />
        <RoomImages />
      </div>
    </div>
  );
}

export default RoomInfo;
