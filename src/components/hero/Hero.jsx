import Image from "next/image";
import React from "react";
import { Credit } from "../svg/Credit.svg";
import { HeroSlider } from "./HeroSlider";

export const Hero = () => {
  return (
    <div className=" mt-[30px]">
      <div className="relative  rounded-[12px] md:rounded-none gradient-bg flex items-center justify-between py-[15px] px-[10px]">
        <div className="absolute top-0 z-10 left-[10%] bottom-0 ">
          <Image
            alt="circle"
            //   layout="responsive"
            className=""
            width={200}
            height={200}
            src="/images/circle1.png"
          />
        </div>

        <div className="flex items-center gap-[8px]">
          <div className="w-[22px] h-[22px] md:w-[30px] md:h-[30px]">
            <Credit w={"100%"} h={"100%"} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[11px] md:text-[18px] text-white font-[600]">
              Credit Limit
            </h3>
            <p className="text-[7px] md:text-[14px] text-white font-[400]">
              get credit upto 10 lacs
            </p>
          </div>
        </div>
        <div>
          <button className="text-[8px] md:text-[16px] text-center font-[600] text-[#F70000] bg-white px-[30px] md:px-[55px] py-[7px] rounded-[42px] cursor-pointer">
            Get Now
          </button>
        </div>
      </div>
      <div className="mt-4 ">
        <HeroSlider />
      </div>
    </div>
  );
};
