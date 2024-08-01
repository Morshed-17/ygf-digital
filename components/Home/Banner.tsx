import React from "react";
import { Button } from "../ui/button";
import Container from "../shared/Container";
import { BackgroundBeams } from "../ui/background-beams";
import MessyGradientBanner from "../ui/MessyGradientBanner";
import { ContainerScroll } from "../ui/container-scroll";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="mt-[-64px] ">
      <MessyGradientBanner>
        <div className="flex items-center  justify-center py-24 relative z-40">
          <ContainerScroll
            titleComponent={
              <div className=" text-center ">
                <h3 className="text-lg text-blue-500 ">
                  THE BEST DIGITAL AGENCY
                </h3>
                <h2 className=" text-4xl md:text-6xl lg:text-7xl leading-[1.2em] font-semibold mt-8">
                  One stop solution for{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-indigo-500  to-blue-700">
                    Online Business
                  </span>
                </h2>
                <p className="text-lg text-gray-500 mt-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  placeat enim aperiam ex nulla? Iusto delectus quod debitis ad
                  eius libero perspiciatis ullam provident .
                </p>
                <Button className="md:text-xl font-light rounded-full mt-8 cursor-pointer md:px-5 md:py-6 mb-24">
                  Request a quote
                </Button>
              </div>
            }
          >
            <Image
              src={`/images/banner-image.jpg`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
        <BackgroundBeams />
      </MessyGradientBanner>
    </div>
  );
};

export default Banner;
