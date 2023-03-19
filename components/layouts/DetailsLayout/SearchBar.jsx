import SearchIcon from "@com-icons/SearchIcon";
import React from "react";

function SearchBar() {
  return (
    <div className="flex items-center justify-between gap-4 border rounded-full p-2 shadow-sm hover:shadow-md w-[300px]">
      <div className="px-5 text-sm">شروع جستجو</div>
      <button className="rounded-full bg-teal p-2">
        <SearchIcon className="text-white" />
      </button>
    </div>
  );
}

export default SearchBar;
