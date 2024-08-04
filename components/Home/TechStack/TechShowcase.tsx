"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Tech {
  name: string;
  icon: string;
  description: string;
}

interface Category {
  name: string;
  technologies: Tech[];
}

const TechIcon: React.FC<Tech> = ({ name, icon, description }) => (
  <motion.div
    className="flex flex-col items-center text-center p-4"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <div className="text-4xl mb-2">{icon}</div>
    <h3 className="font-semibold mb-1">{name}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </motion.div>
);

const TechGrid: React.FC<{ technologies: Tech[] }> = ({ technologies }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {technologies.map((tech, index) => (
      <TechIcon key={index} {...tech} />
    ))}
  </div>
);

const techCategories: Category[] = [
  {
    name: "Backend",
    technologies: [
      { name: "Node.js", icon: "🟢", description: "Server-side JavaScript" },
      {
        name: "Python",
        icon: "🐍",
        description: "Versatile programming language",
      },
      {
        name: "Ruby",
        icon: "💎",
        description: "Dynamic, object-oriented scripting",
      },
      {
        name: "Java",
        icon: "☕",
        description: "Enterprise-grade applications",
      },
    ],
  },
  {
    name: "Frontend",
    technologies: [
      {
        name: "React",
        icon: "⚛️",
        description: "UI library for web and native",
      },
      {
        name: "Vue.js",
        icon: "🖖",
        description: "Progressive JavaScript framework",
      },
      {
        name: "Angular",
        icon: "🅰️",
        description: "Platform for web applications",
      },
      {
        name: "Svelte",
        icon: "🔥",
        description: "Compiled frontend framework",
      },
    ],
  },
  {
    name: "Server",
    technologies: [
      { name: "AWS", icon: "☁️", description: "Cloud computing services" },
      { name: "Docker", icon: "🐳", description: "Containerization platform" },
      {
        name: "Kubernetes",
        icon: "☸️",
        description: "Container orchestration",
      },
      {
        name: "Nginx",
        icon: "🟩",
        description: "Web server and reverse proxy",
      },
    ],
  },
  {
    name: "Mobile",
    technologies: [
      {
        name: "React Native",
        icon: "📱",
        description: "Cross-platform mobile apps",
      },
      {
        name: "Flutter",
        icon: "🦋",
        description: "UI toolkit for mobile, web, and desktop",
      },
      { name: "Swift", icon: "🍎", description: "iOS app development" },
      { name: "Kotlin", icon: "🤖", description: "Android app development" },
    ],
  },
  {
    name: "Marketing",
    technologies: [
      {
        name: "Google Analytics",
        icon: "📊",
        description: "Web analytics service",
      },
      {
        name: "Mailchimp",
        icon: "📧",
        description: "Email marketing platform",
      },
      {
        name: "HubSpot",
        icon: "🧲",
        description: "Inbound marketing and sales",
      },
      { name: "SEMrush", icon: "🔍", description: "SEO and content marketing" },
    ],
  },
  {
    name: "Design",
    technologies: [
      { name: "Photoshop", icon: "🎨", description: "Raster graphics editor" },
      {
        name: "Illustrator",
        icon: "✒️",
        description: "Vector graphics editor",
      },
      {
        name: "Figma",
        icon: "🖌️",
        description: "Collaborative interface design",
      },
      { name: "Sketch", icon: "💎", description: "Digital design for Mac" },
    ],
  },
];

const TechShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(techCategories[0].name);

  return (
    <div className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-2 text-center">
          Technologies We Use
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Empowering digital experiences with cutting-edge tools
        </p>

        <Tabs
          defaultValue={activeTab}
          onValueChange={setActiveTab}
          className="w-full "
        >
          <div className="relative mb-8 overflow-hidden">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative">
              <TabsList className="flex justify-start md:justify-center space-x-1 py-2 overflow-x-auto scrollbar-hide">
                {techCategories.map((category, index) => (
                  <TabsTrigger
                    key={index}
                    value={category.name}
                    className="px-3 py-2 text-sm font-medium rounded-full whitespace-nowrap flex-shrink-0"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {techCategories.map((category, index) => (
                  <TabsContent key={index} value={category.name}>
                    <Card>
                      <CardContent className="pt-6">
                        <TechGrid technologies={category.technologies} />
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </Tabs>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Our Tech Stack is Ever-Evolving
          </h3>
          <p className="text-gray-600 mb-6">
            We're always on the lookout for the latest and greatest in tech.
            Here's what we're excited about right now:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "AI & Machine Learning",
              "Blockchain",
              "IoT",
              "AR/VR",
              "Edge Computing",
            ].map((tech, index) => (
              <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechShowcase;
