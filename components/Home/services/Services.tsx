
import React, { useState } from "react";
import { LucideIcon, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";
import Container from "@/components/shared/Container";

const Services = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-blue-900 py-20 ">
      <Container>
        <h2 className="mb-16 text-center text-4xl font-extrabold text-white">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Elevate Your Digital Presence
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
