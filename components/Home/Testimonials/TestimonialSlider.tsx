"use client";
import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center rounded-lg p-4 bg-white shadow-lg h-full">
            <Image
              width={400}
              height={400}
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <div className="text-center flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <h4 className="text-base font-medium text-gray-600">
                {testimonial.title}
              </h4>
              <p className="mt-2 text-sm text-gray-700">{testimonial.quote}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
