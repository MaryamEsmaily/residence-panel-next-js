import ArrowLeftIcon from "@com-icons/ArrowLeftIcon";
import React from "react";

function RoomMoreInfo() {
  return (
    <div className="space-y-8 mb-8">
      <div className="text-2xl">مواردی که باید بدانید</div>
      <div className="flex justify-between gap-10">
        <div className="space-y-4 font-light">
          <div className="font-medium">قوانین خانه</div>
          <div className="flex items-center gap-2 ">
            <div>ورود:</div>
            <div>15:00 - 18:00</div>
          </div>
          <div className="flex items-center gap-2">
            <div>خروج</div>
            <div>قبل از 11:00</div>
          </div>
          <div>بدون حیوان خانگی</div>
          <button className="flex items-center mt-2">
            <div className="underline underline-offset-4 font-medium">
              {" "}
              نمایش بیشتر
            </div>
            <ArrowLeftIcon />
          </button>
        </div>
        <div className="space-y-4 font-light">
          <div className="font-medium">ایمنی و اموال</div>
          {[
            "استخر / جکوزی بدون درب یا قفل",
            "دریاچه نزدیک، رودخانه",
            "هشدار مونوکسید کربن",
          ].map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <button className="flex items-center mt-2">
            <div className="underline underline-offset-4 font-medium">
              {" "}
              نمایش بیشتر
            </div>
            <ArrowLeftIcon />
          </button>
        </div>
        <div className="space-y-4 font-light">
          <div className="font-medium">قوانین کنسلی</div>
          <div>برای بازپرداخت جزئی، قبل از ۱ آوریل لغو کنید.</div>
          <div className="max-w-sm leading-7">
            قوانین لغو میزبان را مرور کنید، حتی اگر برای بیماری یا اختلالات ناشی
            از کووید-19 لغو کنید.
          </div>
          <button className="flex items-center mt-2">
            <div className="underline underline-offset-4 font-medium">
              {" "}
              نمایش بیشتر
            </div>
            <ArrowLeftIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomMoreInfo;
