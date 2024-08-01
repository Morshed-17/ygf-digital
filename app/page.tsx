import Banner from "@/components/Home/Banner";
import FAQ from "@/components/Home/FAQ";
import { Feature } from "@/components/Home/Feature";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonial";

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Services />
      <Feature />
      <Testimonials />
      <FAQ />
    </div>
  );
}
