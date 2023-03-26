import StarIcon from "@com-icons/StarIcon";
import React from "react";
import ReviewsSlider from "./ReviewsSlider";

function RoomReviews() {
  return (
    <div>
      <div className="flex gap-3 text-xl">
        <div className="flex gap-1">
          <StarIcon className="w-[20px] h-[20px]" />
          <div>5</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
          <div>4 نظر</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-16 my-10">
        <div className="col-span-2">
          <ReviewsSlider
            reviews={[
              {
                author: "آرمان",
                desc: "اقامت ما فوق العاده بود. صبحانه هر روز فوق العاده بود. امکانات رفاهی درجه یک و محیط بسیار عالی بود امکانات رفاهی درجه یک و محیط بسیار عالی بود امکانات رفاهی درجه یک و محیط بسیار عالی بود امکانات رفاهی درجه یک و محیط بسیار عالی بود امکانات رفاهی درجه یک و محیط بسیار عالی بود امکانات رفاهی درجه یک و محیط بسیار عالی بود",
                date: "اسفند ۱۴۰۱",
              },
              {
                author: "تبسم",
                desc: "اقامت ما فوق العاده بود. صبحانه هر روز فوق العاده بود. امکانات رفاهی درجه یک و محیط بسیار عالی بود امکانات رفاهی درجه یک و محیط بسیار عالی بود امکانات رفاهی درجه یک و محیط بسیار عالی بود امکانات رفاهی درجه یک و محیط بسیار عالی بود امکانات رفاهی درجه یک و محیط بسیار عالی بود امکانات رفاهی درجه یک و محیط بسیار عالی بود",
                date: "اسفند ۱۴۰۱",
              },
              {
                author: "آرام",
                desc: "اقامت ما فوق العاده بود. صبحانه هر روز فوق العاده بود. امکانات رفاهی درجه یک و محیط بسیار عالی بود امکانات رفاهی درجه یک و محیط بسیار عالی بود امکانات رفاهی درجه یک و محیط بسیار عالی بود امکانات رفاهی درجه یک و محیط بسیار عالی بود امکانات رفاهی درجه یک و محیط بسیار عالی بود امکانات رفاهی درجه یک و محیط بسیار عالی بود",
                date: "اسفند ۱۴۰۱",
              },
            ]}
          />
        </div>
        <div className="leading-10">
          {[
            { label: "نظافت", rate: "5.0" },
            { label: "مسیر و دسترسی", rate: "5.0" },
            { label: "تطابق با آگهی", rate: "5.0" },
            { label: "همسایگی", rate: "5.0" },
            { label: "ارزش نسبت به قیمت", rate: "5.0" },
            { label: "کیفیت میزبانی", rate: "5.0" },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>{item.label}</div>
              <div className="flex items-center gap-1">
                <input type="range" value={item.rate} max={5} readOnly />
                <div>{item.rate}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomReviews;
