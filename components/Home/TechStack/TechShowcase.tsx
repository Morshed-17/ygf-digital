import IconCloud from "@/components/magicui/icon-cloud";
import Container from "@/components/shared/Container";
import TechTabs from "./TechTabs";
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function TechShowcase() {
  return (
    <div className="lg:py-24 ">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 ">
          <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg   lg:px-20  pt-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
          <div>
           <TechTabs/>
          </div>
        </div>
      </Container>
    </div>
  );
}
