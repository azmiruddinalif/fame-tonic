"use client";

import React from "react";

type DiscountBarProps = {
  message?: string;
};

const DiscountBar = ({
  message = "Extra 25% OFF, Limited Spots – start your journey today!",
}: DiscountBarProps) => {
  return (
    <div className="w-full font-figTree bg-gradient-to-r from-red to-blue text-[22px] text-white text-center py-2.5 font-semibold flex items-center justify-center gap-2">
      🚀
      <span className="text-blue01">FRESH BEGINNINGS SALE:</span>{" "}
      <span>{message}</span>
    </div>
  );
};

export default DiscountBar;
