"use client";

import React from "react";
import Container from "../common/Container";
import GridRow from "../common/GridRow";
import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";

const Banner = () => {
  return (
    <section className="relative bg-black text-white pt-0 lg:mt-20 pb-5 z-[1]">
      <Container>
        <div className="block lg:hidden mb-10">
          <div className="relative w-full h-[400px] mx-auto">
            <BannerImage />
          </div>
        </div>

        <div className="relative">
          <GridRow className="relative z-10">
            <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-2 lg:mt-[20px] ">
              <BannerContent />
            </div>
          </GridRow>
        </div>
      </Container>

      <div className="hidden lg:block absolute -top-[24%] lg:-right-3 xl:-right-4.5 z-0 w-[666px] h-[700px]">
        <BannerImage />
      </div>
    </section>
  );
};

export default Banner;
