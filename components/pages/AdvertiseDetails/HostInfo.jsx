import FaceSmileIcon from "@com-icons/FaceSmileIcon";
import React from "react";

function HostInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <FaceSmileIcon className="w-9 h-9" />
        <div className="space-y-2">
          <div className="text-xl">به میزبانی پارسا و ترانه</div>
          <div className="font-light">عضویت از مهر ۱۳۹۹</div>
        </div>
      </div>
      <div className="flex gap-14">
        <div className="space-y-4">
          <div className="max-w-sm font-light leading-7">
            در سال 1299 ساخته شده‌است و میزبان راهبان و خانواده‌ها بوده‌.
            مشتاقانه منتظر حضور شما هستم.
          </div>
          <div>
            <div className="">در هنگام اقامت شما</div>
            <div className="font-light">
              هیج برخوردی با میزبان نخواهید داشت.
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div>امتیاز پاسخ دهی:</div>
            <div>۰٪</div>
          </div>
          <div className="flex items-center gap-2">
            <div>زمان پاسخ دهی:</div>
            <div>کمتر از یک ساعت</div>
          </div>
          <button className="border border-gray-600 px-6 py-3 rounded-lg">
            ارتباط با میزبان
          </button>
        </div>
      </div>
    </div>
  );
}

export default HostInfo;
