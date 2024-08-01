// components/FeatureItem.js
import { Mouse } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
};

const FeatureItem = ({ icon, title, description, link }: Props) => {
  return (
    <div className="max-w-md sm:mx-auto sm:text-center">
      <div className="flex items-center justify-center size-20 mb-4 rounded-full bg-orange-400 mx-auto ">
        {icon}
      </div>
      <h6 className="mb-3 text-xl font-bold leading-5 text-center text-gray-900">{title}</h6>
      <p className="mb-3 text-center">{description}</p>
      <div className="text-center">
      <Link href="#" className="text-orange- font-bold  hover:text-orange-400 transition-all">
        Learn more
      </Link>
      </div>
    </div>
  );
};

export default FeatureItem;
