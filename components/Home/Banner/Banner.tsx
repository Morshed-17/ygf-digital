import React from "react";

import Image from "next/image";
import MessyGradientBanner from "@/components/ui/MessyGradientBanner";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="mt-[-64px] ">
      <MessyGradientBanner>
        <div className="flex items-center container px-4 h-screen justify-center py-24 relative z-40">
          <div className="max-w-[750px] text-center ">
            <h3 className="text-lg text-blue-500 ">THE BEST DIGITAL AGENCY</h3>
            <h2 className=" text-4xl md:text-6xl lg:text-7xl leading-[1.2em] font-semibold mt-8">
              One stop solution for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-indigo-500  to-blue-700">
                Online Business
              </span>
            </h2>
            <p className="text-lg text-gray-500 mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              placeat enim aperiam ex nulla? Iusto delectus quod debitis ad eius
              libero perspiciatis ullam provident .
            </p>
            <Button className="md:text-xl font-light rounded-full mt-8 cursor-pointer md:px-5 md:py-6">
              Request a quote
            </Button>
          </div>
        </div>
        <BackgroundBeams />
      </MessyGradientBanner>
    </div>
  );
};

export default Banner;
