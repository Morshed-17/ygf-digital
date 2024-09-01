import AboutComapany from "@/components/Home/AboutCompany/AboutCompany";
import Banner from "@/components/Home/Banner/Banner";
import Brands from "@/components/Home/Brands";
import FAQ from "@/components/Home/FAQ";


import NewsLetter from "@/components/Home/NewsLetter";
import Services from "@/components/Home/services/Services";
import { TechShowcase } from "@/components/Home/TechStack/TechShowcase";

import Testimonials from "@/components/Home/Testimonial";
import WhyChooseUs from "@/components/Home/WhyChooseUs";


export default function Home() {
  return (
    <div className="">
      <Banner />
      <Services />
      <AboutComapany/>
      <TechShowcase />
      <WhyChooseUs />
      <Testimonials />
      <Brands />
      <NewsLetter />
      <FAQ />
      {/* <MouseFollower/> */}
    </div>
  );
}
