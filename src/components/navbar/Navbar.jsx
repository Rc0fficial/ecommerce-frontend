import React from "react";
import Image from "next/image";
import { ArrowDown } from "../svg/ArrowDown.svg";
import { Search } from "../svg/Search.svg";

const navbar = () => {
  return (
    <div className="flex py-[16px] items-center justify-between">
      <div>
        <Image width={80} height={47} src="/images/logo.png" />
      </div>
      <div>
        <ul className="flex ">
          <li className="text-[#393A44] text-[14px] px-[24px] border-r cursor-pointer">
            home
          </li>
          <li className="text-[#393A44] text-[14px] px-[24px] cursor-pointer">
            offers
          </li>
          <li className="text-[#393A44] text-[14px] px-[24px] border-l flex gap-[8px] cursor-pointer">
            categories <ArrowDown />
          </li>
        </ul>
      </div>
      <div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full  border-gray-300   border-[1px] rounded-full text-[#909198] text-[14px] pl-12 pr-4 py-2 focus:outline-none focus:border-[#909198]"
          />

          <div className="absolute left-[9px] top-[5px] h-5 w-5 text-gray-500">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
