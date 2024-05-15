import React from "react";
import Image from "next/image";
import { ArrowDown } from "../svg/ArrowDown.svg";
import { Search } from "../svg/Search.svg";
import { Cart } from "../svg/Cart.svg";
import { Hand } from "../svg/Hand.svg";
import { Hamburger } from "../svg/Hamburger.svg";

const navbar = () => {
  return (
    <div className="px-4">
    <div className=" flex py-[16px] items-center justify-between">
      <div className="flex items-center justify-between gap-2">
        <div className="md:hidden cursor-pointer">
          <Hamburger />
        </div>
        <div>
          <Image alt="logo" width={80} height={47} src="/images/logo.png" />
        </div>
      </div>
      <div className="hidden md:block">
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
      <div className="hidden md:block">
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
      <div className="flex items-center justify-between">
        <div>
          <ul className="flex items-center gap-[14px] md:gap-0">
            <li className="text-[#393A44] text-[14px]  md:px-[24px] flex gap-[8px] cursor-pointer">
              <Cart />
              <span className="hidden md:block">cart</span>
            </li>
            <li className="text-[#393A44] text-[14px]  md:px-[24px] md:border-l flex gap-[8px] cursor-pointer">
              <Hand />
              <span className="hidden md:block">Become Seller</span>
            </li>
          </ul>
        </div>
        <div className="ml-[14px] md:ml-0">
          <div className="relative">
            <div className="w-10 h-10 overflow-hidden bg-gray-100 rounded-full cursor-pointer">
              <Image
                alt="ventor"
                width={80}
                height={47}
                src="/images/vector.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
     <div className=" md:hidden">
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
