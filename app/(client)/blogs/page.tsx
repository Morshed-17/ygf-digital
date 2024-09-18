// app/case-studies/page.tsx
import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { CaseStudy } from "@/sanity/schemas/caseStudies";
import CaseStudiesGrid from "@/components/case-studies/caseStudiesGrid";

async function getCaseStudies(): Promise<CaseStudy[]> {
  return client.fetch(
    `
    *[_type == "caseStudy"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage
    }
  `,
    {},
    { next: { revalidate: 30 } }
  );
}

export default async function CaseStudies() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center">Our Blogs</h1>
      <CaseStudiesGrid caseStudies={caseStudies} />
    </div>
  );
}
