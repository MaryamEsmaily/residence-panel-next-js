import StarIcon from "@com-icons/StarIcon";
import Link from "next/link";
import React from "react";

function Factor() {
  return (
    <div className="w-full border rounded-xl shadow-lg p-4 space-y-5 sticky top-0">
      <div className="text-xl">شبی ۸۹۰ تومان</div>
      <div className="flex gap-3 text-sm">
        <div className="flex items-center gap-1">
          <StarIcon className="w-[14px] h-[14px]" />
          <div className="font-light">5.0</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-0.5 w-0.5 bg-gray-500 rounded-full"></div>
          <Link href="#">
            <div className="underline">4 نظر</div>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex-grow">
          <div className="border border-gray-400 rounded-lg">
            <button className="w-full flex items-center border-b border-b-gray-400 text-start text-sm">
              <div className="flex-grow px-3 py-2 space-y-1 ">
                <div>ورود</div>
                <div className="font-light">1402/01/12</div>
              </div>
              <div className="flex-grow px-3 py-2 space-y-1  border-r border-r-gray-400">
                <div>خروج</div>
                <div className="font-light">1402/01/20</div>
              </div>
            </button>
            <button className="w-full px-3 py-2 text-start space-y-1 text-sm">
              <div>مهمان ها</div>
              <div className="font-light">۲ مهمان</div>
            </button>
          </div>
        </div>
        <div className="flex-grow space-y-2">
          <div className="flex justify-between items-center font-light">
            <div>محل اقامت</div>
            <div>890 تومان</div>
          </div>
          <div className="flex justify-between items-center font-light">
            <div>هزینه تمیز کردن</div>
            <div>30 تومان</div>
          </div>
          <div className="flex justify-between items-center font-light">
            <div>هزینه خدمات سره سرا</div>
            <div>50 تومان</div>
          </div>
          <div className="flex justify-between items-center font-light">
            <div>مالیات</div>
            <div>30 تومان</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center py-2">
        <div>مجموع</div>
        <div> 1000000 تومان </div>
      </div>
      <button className="w-full  bg-gradient-to-l from-teal to-emerald-700 text-white rounded-lg p-3">
        رزرو
      </button>
    </div>
  );
}

export default Factor;
