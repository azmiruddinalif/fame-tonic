import React from "react";
import clsx from "clsx";
import { ContainerProps } from "@/types/container-type";

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={clsx("w-full max-w-[1200px] mx-auto px-3 xl:px-0", className)}
    >
      {children}
    </div>
  );
};

export default Container;
