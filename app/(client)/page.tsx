import Banner from "@/components/Home/Banner/Banner";
import Brands from "@/components/Home/Brands";
import FAQ from "@/components/Home/FAQ";
import { Feature } from "@/components/Home/Feature/Feature";

import NewsLetter from "@/components/Home/NewsLetter";
import Services from "@/components/Home/services/Services";
import TechShowcase from "@/components/Home/TechStack/TechShowcase";
import Testimonials from "@/components/Home/Testimonial";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Services />
      <Feature />
      <TechShowcase />
      <WhyChooseUs />
      <Testimonials />
      <Brands />
      <NewsLetter />
      <FAQ />
    </div>
  );
}
