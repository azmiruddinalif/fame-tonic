import React from "react";
import clsx from "clsx";
import { ContainerProps } from "@/types/container-type";

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx("max-w-[1200px] w-full mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
