import { advertises } from "@constants/advertises";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function RoomImages() {
  // FAKE DATA
  const data = advertises?.[0];
  //
  return (
    <div className="flex flex-col">
      <Link href="#">
        <div className="grid grid-cols-1 rounded-xl overflow-hidden gap-2">
          <div className=" relative w-[100%] h-[400px]">
            <Image
              src={data?.images?.[0]?.src}
              alt=""
              fill
              className="object-cover opacity-95 hover:opacity-100"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {data?.images?.slice(1)?.map((img) => (
              <div key={img.src} className="relative w-[100%] h-[230px]">
                <Image
                  src={img.src}
                  alt=""
                  fill
                  className="object-cover opacity-90 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RoomImages;
