import BorderedHeartIcon from "@com-icons/BorderedHeartIcon";
import ShareIcon from "@com-icons/ShareIcon";
import StarIcon from "@com-icons/StarIcon";
import { advertises } from "@constants/advertises";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function RoomImages() {
  // FAKE DATA
  const data = advertises?.[0];
  //
  return (
    <div className="pt-6 space-y-4">
      <div className="text-3xl">پارسا و ترانه</div>
      <div className="flex justify-between items-center">
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
        <div className="flex items-center gap-2 text-sm">
          <button className="hover:bg-gray-100 p-1 rounded-lg flex items-center gap-1">
            <ShareIcon className="w-[16px] h-[16px]" />
            <div className="font-light">اشتراک گذاری</div>
          </button>{" "}
          <button className="hover:bg-gray-100 p-1 rounded-lg flex items-center gap-1">
            <BorderedHeartIcon className="w-[16px] h-[16px]" />
            <div className="font-light">ذخیره</div>
          </button>
        </div>
      </div>
      <div>
        <Link href="#">
          <div className="grid grid-cols-2 rounded-xl overflow-hidden gap-2">
            <div className="relative w-[100%] h-[100%]">
              <Image
                src={data?.images?.[0]?.src}
                alt=""
                fill
                className="object-cover opacity-95 hover:opacity-100"
              />
            </div>
            <div>
              <div className="grid grid-cols-2 gap-2">
                {data?.images?.slice(1)?.map((img) => (
                  <div key={img.src} className="relative w-[100%] h-[200px]">
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      className="object-cover opacity-95 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default RoomImages;
