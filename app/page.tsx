import Banner from "@/components/Home/Banner";
import FAQ from "@/components/Home/FAQ";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonial";


import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Services />
      <Testimonials/>
      <FAQ/>
    </div>
  );
}
