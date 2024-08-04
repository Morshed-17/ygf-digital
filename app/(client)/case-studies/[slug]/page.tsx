// app/case-studies/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { client, urlFor } from "@/sanity/lib/client";
import CustomPortableText from "@/components/ui/CustomPortableText";
import { CaseStudy } from "@/sanity/schemas/caseStudies";

async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  return client.fetch(
    `
    *[_type == "caseStudy" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      body
    }
  `,
    { slug }
  );
}

export async function generateStaticParams() {
  const slugs = await client.fetch(`
    *[_type == "caseStudy" && defined(slug.current)][].slug.current
  `);

  return slugs.map((slug: string) => ({ slug }));
}

interface CaseStudyPageProps {
  params: { slug: string };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = await getCaseStudy(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <article className="max-w-screen-md mx-auto px-4 py-8">
      {caseStudy.mainImage && (
        <Image
          src={urlFor(caseStudy.mainImage).url()}
          alt={caseStudy.title}
          width={1000}
          height={1000}
          className="aspect-video rounded-2xl shadow-md mb-8"
        />
      )}
      <h2 className="text-5xl font-bold">{caseStudy.title}</h2>
      <p className="text-lg mt-4">{caseStudy.publishedAt}</p>
      <div className="prose max-w-none">
        <CustomPortableText value={caseStudy.body} />
      </div>
    </article>
  );
}
