"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Container from "../shared/Container";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Example Company",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    title: "CTO, Another Company",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/150",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  return (
    <div className="py-20 bg-gray-100  relative overflow-hidden">
      <Container>
        <QuoteIcon
          className="text-gray-300 absolute top-4 left-4 transform -rotate-180 hidden lg:block"
          size={108}
        />
        <QuoteIcon
          className="text-gray-300 absolute bottom-4 right-4 hidden lg:block"
          size={108}
        />
        <h2 className="text-4xl text-center font-semibold mb-12">
          What Our Clients Say
        </h2>
        <div className="max-w-screen-sm mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            // navigation={true}
            autoplay={true}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <h4 className="text-base font-medium text-gray-600">
                      {testimonial.title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-700">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
