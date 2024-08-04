"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

interface CaseStudyProps {
  title: string;
  category: string;
  description: string;
  results: string[];
  imageUrl: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  category,
  description,
  results,
  imageUrl,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-50  rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64">
        <Image
          src="/images/ecom-demo.jpg"
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <span className="text-blue-600 font-semibold text-sm mb-2 block">
          {category}
        </span>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-blue-600 font-semibold"
        >
          {isExpanded ? "Hide Results" : "View Results"}
          <ChevronDown
            className={`ml-1 w-4 h-4 transition-transform ${
              isExpanded ? "transform rotate-180" : ""
            }`}
          />
        </button>
        {isExpanded && (
          <div className="mt-4 space-y-2">
            {results.map((result, index) => (
              <p key={index} className="flex items-center text-gray-700">
                <ArrowRight className="w-4 h-4 mr-2 text-green-500" />
                {result}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudyProps[] = [
    {
      title: "E-commerce Redesign for Fashion Brand",
      category: "Web Development",
      description:
        "Revamped the online store for a leading fashion retailer, focusing on user experience and mobile responsiveness.",
      results: [
        "50% increase in mobile conversions",
        "30% reduction in cart abandonment rate",
        "25% increase in average order value",
      ],
      imageUrl: "",
    },
    {
      title: "SEO Campaign for Tech Startup",
      category: "Digital Marketing",
      description:
        "Developed and executed a comprehensive SEO strategy for a SaaS startup in the competitive tech industry.",
      results: [
        "200% increase in organic traffic",
        "40% increase in lead generation",
        "First page rankings for 15 high-value keywords",
      ],
      imageUrl: "/api/placeholder/800/600",
    },
    {
      title: "Brand Identity for Local Restaurant Chain",
      category: "Branding",
      description:
        "Created a cohesive brand identity for a growing local restaurant chain, including logo, color scheme, and marketing materials.",
      results: [
        "35% increase in brand recognition",
        "20% increase in foot traffic across locations",
        "Successful launch of two new restaurant locations",
      ],
      imageUrl: "/api/placeholder/800/600",
    },
  ];

  return (
    <div className="bg-gray-100  mt-[-64px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Our Case Studies
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Explore how we've helped businesses achieve their digital goals and
          drive real results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to achieve similar results?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can help your business succeed in the digital
            landscape.
          </p>
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Contact Us for a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
