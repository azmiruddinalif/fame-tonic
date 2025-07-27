"use client";

import React from "react";
import clsx from "clsx";
import { ButtonProps } from "@/types/button-types";

const Button = ({
  text,
  onClick,
  icon,
  type = "button",
  className,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "bg-red text-white font-bold py-2 rounded-lg cursor-pointer",
        "w-full lg:w-[313px]",
        "shadow-[2px_2px_10px_#00E7F9] z-10 flex items-center justify-center gap-2",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
