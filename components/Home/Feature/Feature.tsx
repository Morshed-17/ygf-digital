// components/Feature.js
import React from "react";
import FeatureItem from "./FeatureItem";
import { CuboidIcon, FastForward, Handshake, Rocket } from "lucide-react";
import SectionTitle from "@/components/ui/sectionTitle";

const features = [
  {
    icon: <FastForward className="size-8 " />,
    title: "When has justice",
    description:
      "Rough pomfret lemon shark plownose chimaera southern sandfish kokanee northern sea robin Antarctic cod. Yellow-and-black triplefin gulper South American Lungfish mahi-mahi, butterflyfish glass catfish soapfish ling gray mullet!",
    link: "/",
  },
  {
    icon: <Rocket className="size-8 " />,
    title: "When has justice",
    description:
      "Rough pomfret lemon shark plownose chimaera southern sandfish kokanee northern sea robin Antarctic cod. Yellow-and-black triplefin gulper South American Lungfish mahi-mahi, butterflyfish glass catfish soapfish ling gray mullet!",
    link: "/",
  },
  {
    icon: <Handshake className="size-8 " />,
    title: "When has justice",
    description:
      "Rough pomfret lemon shark plownose chimaera southern sandfish kokanee northern sea robin Antarctic cod. Yellow-and-black triplefin gulper South American Lungfish mahi-mahi, butterflyfish glass catfish soapfish ling gray mullet!",
    link: "/",
  },
  {
    icon: <CuboidIcon className="size-8 " />,
    title: "When has justice",
    description:
      "Rough pomfret lemon shark plownose chimaera southern sandfish kokanee northern sea robin Antarctic cod. Yellow-and-black triplefin gulper South American Lungfish mahi-mahi, butterflyfish glass catfish soapfish ling gray mullet!",
    link: "/",
  },
];

export const Feature = () => {
  return (
    <div className="bg-gray-100">
      <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl">
          <SectionTitle title="Our Features" />

          <p className="text-base text-gray-700 md:text-lg text-center mt-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 ">
          {features.map((feature, index) => (
            <div className="border p-5">
              <FeatureItem
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
