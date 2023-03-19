import AccountIcon from "@com-icons/AccountIcon";
import EarthIcon from "@com-icons/EarthIcon";
import MenuIcon from "@com-icons/MenuIcon";
import React from "react";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="h-[80px] border-b">
      <div className="container px-[80px] flex justify-between items-center h-full">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border rounded-3xl p-1 hover:shadow-lg">
            <AccountIcon className="w-8 h-8 text-gray-500" />
            <MenuIcon className="pe-1" />
          </div>
          <button className="p-3 rounded-full hover:bg-gray-100">
            <EarthIcon className="w-5 h-5" />
          </button>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="font-extrabold text-teal text-lg">سِــره سرا</div>
      </div>
    </div>
  );
}

export default Header;
