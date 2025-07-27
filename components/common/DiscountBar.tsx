"use client";
import Image from "next/image";
import React from "react";
import RocketIcon from "@/public/png/🚀.png";

const DiscountBar = () => {
  return (
    <div className="w-full font-figTree bg-gradient-to-r from-red to-blue text-white text-center px-5 py-5 lg:py-2">
      <div className="text-[14px] sm:text-[20px] font-medium leading-tight sm:flex-nowrap text-white px-5">
        <Image
          src={RocketIcon}
          alt="rocket"
          width={20}
          height={20}
          className="object-contain inline"
        />
        <span className="text-blue01 font-bold pl-1 uppercase">
          FRESH BEGINNINGS SALE:
        </span>{" "}
        Extra 25% OFF, Limited Spots – start your journey today!
      </div>
    </div>
  );
};

export default DiscountBar;
