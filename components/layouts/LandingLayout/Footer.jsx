import ArrowUp from "@com-icons/ArrowUp";
import EarthIcon from "@com-icons/EarthIcon";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="h-[48px] border-t">
      <div className="container flex h-full items-center justify-between text-sm">
        <div className="flex gap-4 text-gray-600">
          <div>© 1401 سره سرا.</div>
          {[
            { label: "قوانین", link: "#" },
            { label: "نقشه", link: "#" },
            { label: "امنیت", link: "#" },
            { label: "مقصدها", link: "#" },
          ].map((item) => (
            <div key={item.link} className="flex gap-2 items-center">
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
    </div>
  );
}

export default Footer;
