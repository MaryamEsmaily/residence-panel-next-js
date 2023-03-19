import ArrowUp from "@com-icons/ArrowUp";
import EarthIcon from "@com-icons/EarthIcon";
import InstagramIcon from "@com-icons/InstagramIcon";
import TwitterIcon from "@com-icons/TwitterIcon";
import Link from "next/link";
import React from "react";

function Footer() {
  //
  return (
    <div className="bg-[#f7f7f7] border-t">
      <div className="container px-12">
        <div className="flex justify-between py-12">
          <div className="space-y-4 font-thin">
            <div className="font-medium">پشتیبانی</div>
            <div> مرکز کمک رسانی</div>
            <div>حمایت از افراد دارای معلولیت</div>
            <div>گزینه های لغو</div>
          </div>
          <div className="space-y-4 font-thin">
            <div className="font-medium">پشتیبانی</div>
            <div> مرکز کمک رسانی</div>
            <div>حمایت از افراد دارای معلولیت</div>
            <div>گزینه های لغو</div>
          </div>
          <div className="space-y-4 font-thin">
            <div className="font-medium"> میزبانی</div>
            <div> سره سرای خانه شما</div>
            <div>از انجمن های ما دیدن کنید</div>
            <div>آپارتمان های سازگار به سره سرا</div>
          </div>
          <div className="space-y-4 font-thin">
            <div className="font-medium">سره سرا</div>
            <div>با ویژگی های جدید آشنا شوید</div>
            <div>نامه ای از بنیانگذاران ما</div>
            <div>سرمایه گذاران</div>
            <div>کارت هدیه</div>
          </div>
        </div>
        <div className="border-t">
          <div className="flex py-6 h-full items-center justify-between text-sm">
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
              <button>
                <TwitterIcon />
              </button>
              <button>
                <InstagramIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
