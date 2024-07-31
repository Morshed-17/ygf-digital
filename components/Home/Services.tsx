import React from "react";
import {
  Zap,
  Globe,
  BarChart,
  PenTool,
  ShieldCheck,
  PhoneCall,
} from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group relative overflow-hidden rounded-xl bg-white/10 p-8 shadow-lg backdrop-blur-lg transition-all duration-500 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 transition-opacity duration-500 group-hover:opacity-20"></div>
    <div className="relative z-10">
      <div className="mb-6 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-3 text-white shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:scale-110">
        <Icon size={28} />
      </div>
      <h3 className="mb-3 text-2xl font-bold text-white transition-colors duration-500 group-hover:text-blue-300">
        {title}
      </h3>
      <p className="text-gray-300 transition-colors duration-500 group-hover:text-white">
        {description}
      </p>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Lightning Performance",
      description:
        "Supercharge your website with blazing fast load times and smooth interactions.",
    },
    {
      icon: Globe,
      title: "Global SEO Mastery",
      description:
        "Dominate search rankings and attract a worldwide audience to your digital doorstep.",
    },
    {
      icon: BarChart,
      title: "Intelligent Analytics",
      description:
        "Harness the power of data to make informed decisions and drive growth.",
    },
    {
      icon: PenTool,
      title: "Stunning UI/UX Design",
      description:
        "Craft visually appealing interfaces that users will fall in love with.",
    },
    {
      icon: ShieldCheck,
      title: "Fortress-level Security",
      description:
        "Protect your digital assets with state-of-the-art security measures.",
    },
    {
      icon: PhoneCall,
      title: "24/7 Concierge Support",
      description:
        "Experience peace of mind with our always-on, expert customer service.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-blue-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-extrabold text-white">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Elevate Your Digital Presence
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
