import AboutComapany from "@/components/Home/AboutCompany/AboutCompany";
import Banner from "@/components/Home/Banner/Banner";
import FAQ from "@/components/Home/FAQ";
import Brands from "@/components/Home/Brands/Brands";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import NewsLetter from "@/components/Home/NewsLetter";
import Services from "@/components/Home/services/Services";
import { TechShowcase } from "@/components/Home/TechStack/TechShowcase";

import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Services />
      <AboutComapany />
      <TechShowcase />
      <WhyChooseUs />
      <Brands />
      <Testimonials/>
      <FAQ />
    </div>
  );
}
