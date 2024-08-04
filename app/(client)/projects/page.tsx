import React from "react";

import Image from "next/image";
import { client } from "@/sanity/lib/client";

// Define the Project type based on your Sanity schema
interface Project {
  _id: string;
  title: string;
  imageUrl?: string;
  description: string;
  link: string;
  tags: string[];
}

async function getProjects(): Promise<Project[]> {
  const query = `*[_type== 'project'] | order(_createdAt desc){
  title,
    _id,
    link,
    description,
    tags,
    'imageUrl': image.asset->url
}`;
  const data = await client.fetch(query, {}, { next: { revalidate: 30 } });
  return data;
}

export default async function ProjectsPage() {
  const projects: Project[] = await getProjects();

  return (
    <div className=" bg-gray-50 mt-[-64px]">
      {" "}
      <div className="container pt-32 pb-12">
        <h1 className="text-4xl font-bold  text-center">Our Projects</h1>
        <p className="text-lg mt-4 text-center">Check out what projects we have created</p>
        <div className="py-12 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
          {projects?.map((item) => (
            <a
              href={item.link}
              key={item._id}
              className="group block"
              target="_blank"
            >
              <div className="aspect-[3/2] shadow-sm overflow-hidden rounded-2xl relative">
                <Image
                  src={item.imageUrl || "/images/ecom-demo.jpg"}
                  alt="Image Description"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl shadow-md"
                />
              </div>
              <div className="mt-4">
                <h2 className="font-medium text-lg hover:underline">
                  {item.title}
                </h2>
                <p className="mt-1 text-muted-foreground line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tagItem, index) => (
                    <span
                      className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-2 ring-inset ring-primary/20"
                      key={index}
                    >
                      {tagItem}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
