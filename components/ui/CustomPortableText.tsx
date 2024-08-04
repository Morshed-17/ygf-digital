// components/CustomPortableText.tsx
import React from "react";
import { PortableText } from "@portabletext/react";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";

const ImageComponent = ({ value }: any) => {
  return (
    <Image
      src={urlFor(value).url()}
      alt={value.alt || " "}
      width={1000}
      height={1000}
      style={{ objectFit: "cover" }}
      className="aspect-video rounded-2xl"
    />
  );
};

const components = {
  types: {
    image: ImageComponent,
  },
  block: {
    h1: ({ children }: any) => <h1 className="prose">{children}</h1>,
    h2: ({ children }: any) => <h2 className="prose">{children}</h2>,
    h3: ({ children }: any) => <h3 className="prose">{children}</h3>,
    normal: ({ children }: any) => <p className="prose">{children}</p>,
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-blue-500 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

interface CustomPortableTextProps {
  value: any[];
}

export default function CustomPortableText({ value }: CustomPortableTextProps) {
  return <PortableText value={value} components={components} />;
}
