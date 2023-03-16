import SearchIcon from "@com-icons/SearchIcon";
import React from "react";

function SearchBar() {
  return (
    <div className="flex items-center gap-4 border rounded-full p-2 shadow-sm hover:shadow-md">
      <div className="flex items-center gap-5 px-5 text-sm">
        <div>هرجا</div>
        <div className="h-5 border-r border-gray-300"></div>
        <div>هروقت</div>
        <div className="h-5 border-r border-gray-300"></div>
        <div className="text-gray-500 font-thin">تعداد مهمان</div>
      </div>

      <button className="rounded-full bg-teal p-2">
        <SearchIcon className="text-white" />
      </button>
    </div>
  );
}

export default SearchBar;
