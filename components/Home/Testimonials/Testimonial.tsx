
import React from "react";

import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="py-20 bg-gray-100 relative overflow-hidden">
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
      <div className="mx-auto container px-4">
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonial;
