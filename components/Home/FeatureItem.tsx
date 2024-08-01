// components/FeatureItem.js
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
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
        {icon}
      </div>
      <h6 className="mb-3 text-xl font-bold leading-5">{title}</h6>
      <p className="mb-3 text-sm text-gray-900">{description}</p>
      <a
        href={link}
        aria-label=""
        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
      >
        Learn more
      </a>
    </div>
  );
};

export default FeatureItem;
