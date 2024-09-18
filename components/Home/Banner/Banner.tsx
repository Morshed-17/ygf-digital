import React from "react";

import { Button } from "@/components/ui/button";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";


const Banner = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className=" z-40">
        <div className="flex items-center container px-4 justify-center ">
          <div className="max-w-[750px] text-center flex flex-col items-center">
           <HoverBorderGradient className="">Wellcome to YGF DIGITAL</HoverBorderGradient>
            <h2 className=" text-4xl md:text-6xl lg:text-7xl leading-[1.2em] font-semibold mt-8">
              One stop solution for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-indigo-500  to-blue-700">
                Online Business
              </span>
            </h2>
            <p className="text-lg text-gray-500 mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              placeat enim aperiam ex nulla? Iusto delectus quod debitis ad eius
            </p>
            <Button className="md:text-xl font-light rounded-full mt-8 cursor-pointer md:px-5 md:py-6">
              Request a quote
            </Button>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Banner;
