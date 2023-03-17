import ArrowUp from "@com-icons/ArrowUp";
import EarthIcon from "@com-icons/EarthIcon";
import Link from "next/link";
import React, { useState } from "react";
import ListIcon from "@com-icons/ListIcon";
import MapIcon from "@com-icons/MapIcon";
import { useDispatch, useSelector } from "react-redux";
import { setIsShowMap } from "@redux/landingModesSlice";

function Footer() {
  const isShowMap = useSelector((state) => state.landingMode.isShowMap);

  const dispatch = useDispatch();
  //
  return (
    <div className="h-[48px] border-t relative">
      <div className="container flex h-full items-center justify-between text-sm">
        <div className="flex gap-4 text-gray-600">
          <div>© 1401 سره سرا.</div>
          {[
            { label: "قوانین", link: "#" },
            { label: "نقشه", link: "#" },
            { label: "امنیت", link: "#" },
            { label: "مقصدها", link: "#" },
          ].map((item) => (
            <div key={item.label} className="flex gap-2 items-center">
              <div className="h-0.5 w-0.5 bg-gray-500 rounded-full"></div>
              <Link href={item.link}>
                <div className="hover:underline">{item.label}</div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <button className="rounded-full hover:underline">
            <div className="flex items-center gap-1">
              <EarthIcon className="w-5 h-5" />
              <div>فارسی</div>
            </div>
          </button>
          <button className="flex items-center gap-2 hover:underline">
            <div>پشتیبانی و منابع</div>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="absolute -top-[90px] w-screen text-center z-20">
        <button
          onClick={() => dispatch(setIsShowMap(!isShowMap))}
          className=" bg-black text-white px-5 py-4 rounded-full text-sm transition ease-in hover:scale-105 duration-150"
        >
          <div className="flex gap-1">
            {!isShowMap ? (
              <>
                <MapIcon /> <div>نمایش نقشه</div>
              </>
            ) : (
              <>
                <ListIcon /> <div>نمایش لیست</div>
              </>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}

export default Footer;
