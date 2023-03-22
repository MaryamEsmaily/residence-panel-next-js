import ArrowLeftIcon from "@com-icons/ArrowLeftIcon";
import BalconyIcon from "@com-icons/BalconyIcon";
import BedIcon from "@com-icons/BedIcon";
import DeskIcon from "@com-icons/DeskIcon";
import KitchenIcon from "@com-icons/KitchenIcon";
import ParkingIcon from "@com-icons/ParkingIcon";
import PoolIcon from "@com-icons/PoolIcon";
import TvIcon from "@com-icons/TvIcon";
import WashingMachineIcon from "@com-icons/WashinMachineIcon";
import WifiIcon from "@com-icons/WifiIcon";
import React from "react";

function GeneralInfo() {
  //
  return (
    <div>
      <div className="flex gap-3">
        {["۱۶+ مهمان", "۱۰ تا اتاق خواب", "۱۱ تا تخت", "۱۳ تا حمام"].map(
          (item) => (
            <div key={item} className="flex gap-1 items-center">
              <div className="h-0.5 w-0.5 bg-gray-500 rounded-full"></div>
              <div>{item}</div>
            </div>
          )
        )}
      </div>
      <div className="mt-8 space-y-6">
        <div className="flex items-center gap-3">
          <DeskIcon />
          <div className="space-y-1">
            <div>فضای کاری اختصاصی</div>
            <div className="font-thin">
              یک اتاق خصوصی با وای فای که برای کار مناسب است.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <WifiIcon />
          <div className="space-y-1">
            <div> امکانات رفاهی برای زندگی روزمره</div>
            <div className="font-thin">
              میزبان این مکان را برای اقامت های طولانی مجهز کرده است - شامل
              آشپزخانه، وای فای، ماشین لباسشویی و خشک کن.
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <div className="text-justify font-light leading-7">
        خانه پارسا و ترانه با 20 اتاق خواب و مکانی ایده آل برای لذت بردن از
        زندگی است. پیاده‌روی، دهکده‌های کوهستانی و پیست‌های اسکی در کلاس جهانی ،
        کاوش کنید. از مناظر تماشایی کوه های البرز و درخشش رنگین کمانی غروب
        خورشید لذت ببرید و در تراس یا استخر از نوشیدنی های شیرین لذت ببرید.
        سرگرمی بی پایان در تمام طول سال در انتظار شماست. حداقل یک هفته اقامت
        بدون عروسی و حیوانات خانگی.
        <br />
        <button className="flex items-center mt-2">
          <div className="underline underline-offset-4"> نمایش بیشتر</div>
          <ArrowLeftIcon />
        </button>
      </div>
      <hr className="my-6" />
      <div className="my-4 text-2xl">اتاق ها</div>
      <div className="flex items-center gap-3 w-full overflow-x-scroll scrollbar-hide cursor-move">
        {[
          { label: "اتاق خواب 1", beds: ["دو نفره", "یک نفره"] },
          { label: "اتاق خواب 2", beds: ["یک نفره"] },
          { label: "اتاق خواب 3", beds: ["دو نفره"] },
          { label: "اتاق خواب 4", beds: ["یک نفره"] },
        ].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[200px] h-[150px] px-6 space-y-2 border rounded-xl flex flex-col justify-center"
          >
            <BedIcon />
            <div>{item.label}</div>
            <div className="font-thin flex flex-wrap items-center">
              {item.beds.map((bed, index) => (
                <div key={index}>
                  {bed}
                  {index < item.beds.length - 1 ? " , " : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <hr className="my-6" />
      <div className="my-4 text-2xl">امکانات</div>
      <div className="grid grid-cols-4 gap-6">
        {[
          { label: "آشپزخانه", icon: KitchenIcon },
          { label: "وای فای", icon: WifiIcon },
          { label: "پارکینگ", icon: ParkingIcon },
          { label: "استخر", icon: PoolIcon },
          { label: "لباسشویی", icon: WashingMachineIcon },
          { label: "تلویزیون", icon: TvIcon },
          { label: "تراس", icon: BalconyIcon },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-3">
              {Icon ? <Icon className="w-[20px] h-[20px]" /> : null}
              <div>{item.label}</div>
            </div>
          );
        })}
        <button className="border border-gray-600 p-2 rounded-lg">
          نمایش همه
        </button>
      </div>
    </div>
  );
}

export default GeneralInfo;
