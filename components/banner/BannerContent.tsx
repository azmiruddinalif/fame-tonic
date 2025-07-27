import Image from "next/image";
import React from "react";
import starIcon from "@/public/png/✨.png";
import { featuresList } from "@/app/constans/feature";
import Button from "../common/Button";
import { IoChevronForward } from "react-icons/io5";
// import Button from "../shared/Button";

const BannerContent = () => {
  return (
    <div className="-mt-15">
      <h2 className="text-[25px] xl:text-[35px] font-bold leading-tight lg:mb-4 font-urbanist text-center lg:text-left">
        Want to Turn Social Media Into a
        <span className="text-accent"> Profitable Career?</span>
      </h2>
      <p className="text-[25px] xl:text-[35px] text-blue01 font-bold mb-3 lg:mb-3 font-urbanist text-drop-shadow text-center lg:text-left">
        Discover your way to success <br /> with Fametonic:
      </p>

      <ul className="text-sm xl:text-base space-y-3 mb-8 lg:pr-13">
        {featuresList.map((text, index) => (
          <li
            key={index}
            className="flex items-center gap-x-2.5 font-urbanist text-base font-semibold"
          >
            <Image src={starIcon} alt="star" width={25} height={25} />
            {text}
          </li>
        ))}
      </ul>

      <div className="flex flex-col">
        <div className="w-full lg:w-fit text-center order-1 lg:order-0 mt-8 lg:mt-0">
          <Button text="GET STARTED" icon={<IoChevronForward size={20} />} />
          <p className="text-xs text-white mt-2 font-figTree font-normal">
            1-minute quiz for personalized insights
          </p>
        </div>
        <p className="text-xs text-ash01 mt-4 font-figTree font-medium lg:pr-12 text-center lg:text-left">
          By clicking “Get Started”, you agree with our Terms and Conditions,
          Privacy Policy, Subscription Terms.
        </p>
        <span className="text-xs text-ash01 font-figTree font-medium mt-3 text-center lg:text-left">
          Fametonic {new Date().getFullYear()} &copy;All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default BannerContent;
