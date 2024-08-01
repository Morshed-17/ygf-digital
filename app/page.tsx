import Banner from "@/components/Home/Banner";
import Brands from "@/components/Home/Brands";
import FAQ from "@/components/Home/FAQ";
import { Feature } from "@/components/Home/Feature";
import NewsLetter from "@/components/Home/NewsLetter";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonial";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Services />
      <Feature />
      <WhyChooseUs />
      <Testimonials />
      <Brands/>
      <NewsLetter />
      <FAQ />
    </div>
  );
}
