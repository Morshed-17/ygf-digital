"use client";
import Lottie from "lottie-react";
import React from "react";
import animationData from "../../public/lotties/faq-animation.json";
const FAQLottie = () => {
  return (
    <Lottie
      animationData={animationData}
      loop={true} // Set to true to loop the animation
      autoplay={true} // Set to true to play the animation automatically
      className="max-w-[500px] max-h-[500px] " // Customize the size of the animation
    />
  );
};

export default FAQLottie;
