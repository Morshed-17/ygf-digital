import React from 'react';
import Image from 'next/image';
import { Briefcase, Users, ChartBar, MessageCircle } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">About Our Agency</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with innovative digital solutions since 2010.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              At [Your Agency Name], we are committed to delivering exceptional digital solutions that drive growth and success for our clients. Our mission is to combine innovative technology with strategic thinking to create impactful digital experiences.
            </p>
            <ul className="space-y-4">
              {[
                { icon: <Briefcase className="w-6 h-6 text-blue-600" />, text: "Tailored solutions for each client" },
                { icon: <Users className="w-6 h-6 text-blue-600" />, text: "Collaborative approach" },
                { icon: <ChartBar className="w-6 h-6 text-blue-600" />, text: "Data-driven strategies" },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/ecom-demo.jpg" 
              alt="Team collaboration" 
              layout="fill" 
              objectFit="cover"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Web Design & Development", icon: "🌐" },
              { title: "Digital Marketing & SEO", icon: "📈" },
              { title: "Brand Strategy", icon: "🎨" },
              { title: "E-commerce Solutions", icon: "🛒" },
              { title: "Mobile App Development", icon: "📱" },
              { title: "Cloud Services", icon: "☁️" },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">Innovative solutions tailored to your needs.</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-900 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Client-Centric Focus</h3>
              <p className="text-lg leading-relaxed">
                We prioritize understanding your unique business needs and goals. Our approach involves close collaboration, ensuring that every solution is tailored to your specific requirements and market challenges.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Agile Methodology</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Our team employs agile methodologies to ensure flexibility, rapid iteration, and continuous improvement throughout the project lifecycle. This approach allows us to adapt quickly to changing needs and deliver results efficiently.
              </p>
            </div>
          </div>
        </div>

      
      </div>
      
      <div className="bg-indigo-900 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to elevate your digital presence?</h2>
          <p className="text-xl mb-8 text-gray-400">Let's discuss how we can help your business thrive in the digital landscape.</p>
          <button className="bg-white text-blue-600 py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;