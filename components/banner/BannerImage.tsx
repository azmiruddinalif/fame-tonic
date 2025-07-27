"use client";
import React from "react";
import Image from "next/image";
import phoneImage from "@/public/images/banner.webp";

const BannerImage = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={phoneImage}
        alt="Fametonic App Preview"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};

export default BannerImage;
