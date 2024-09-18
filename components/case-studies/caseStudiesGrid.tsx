import React from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { CaseStudy } from "@/sanity/schemas/caseStudies";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const CaseStudiesGrid = ({ caseStudies }: { caseStudies: CaseStudy[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {caseStudies.map((study) => (
        <div key={study._id} className="transform transition-transform ">
          <Link href={`/blogs/${study.slug.current}`} className="block">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
              {study.mainImage && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={urlFor(study.mainImage).url()}
                    alt={study.title}
                    fill
                    className="w-full h-full object-cover object-center transform  transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">
                      Read More
                    </span>
                  </div>
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors duration-200">
                  {study.title}
                </h2>
                <p className="text-md text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {study.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>{study.publishedAt || "No date"}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 flex justify-end">
                <span className="inline-flex items-center text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                  Read Blog
                  <ArrowRight size={16} className="ml-2" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CaseStudiesGrid;
