import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  ArrowRight,
  Code,
  Palette,
  Rocket,
  Search,
  ShoppingCart,
  Smartphone,
  Target,
  Eye,
} from "lucide-react";
import SectionTitle from "@/components/ui/sectionTitle";

export default function AboutUs() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 space-y-24">
        <SectionTitle title="About Us" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <Image
              src="/images/about.jpg"
              alt="Our team collaborating in a modern office"
              width={600}
              height={400}
              className="relative rounded-lg shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
            <p className="text-lg text-gray-600">
              We are a team of passionate digital innovators, committed to
              transforming businesses through cutting-edge technology and
              creative solutions. With a blend of expertise in various digital
              domains, we craft tailored strategies that drive growth and
              success in the ever-evolving digital landscape.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-none">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-semibold text-gray-800">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600">
                To empower businesses with innovative digital solutions that
                drive growth, enhance user experiences, and create lasting value
                in the digital ecosystem. We strive to be at the forefront of
                technological advancements, ensuring our clients stay ahead in
                their respective industries.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-none">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-purple-600 mr-4" />
                <h2 className="text-3xl font-semibold text-gray-800">
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-600">
                To be the catalyst for digital transformation across industries,
                recognized globally for our innovative solutions, unparalleled
                expertise, and commitment to client success. We envision a world
                where businesses of all sizes can harness the full potential of
                digital technologies to achieve their goals and make a positive
                impact.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                icon: <Code className="h-8 w-8 mb-4 text-blue-600" />,
                description:
                  "Creating responsive, user-friendly websites that drive engagement and conversions.",
              },
              {
                title: "Digital Marketing & SEO",
                icon: <Search className="h-8 w-8 mb-4 text-purple-600" />,
                description:
                  "Boosting online visibility and driving targeted traffic to maximize ROI.",
              },
              {
                title: "Mobile App Development",
                icon: <Smartphone className="h-8 w-8 mb-4 text-blue-600" />,
                description:
                  "Developing intuitive, high-performance mobile applications for iOS and Android.",
              },
              {
                title: "E-commerce Solutions",
                icon: <ShoppingCart className="h-8 w-8 mb-4 text-purple-600" />,
                description:
                  "Building secure, scalable online stores that enhance the shopping experience.",
              },
              {
                title: "UI/UX Design",
                icon: <Palette className="h-8 w-8 mb-4 text-blue-600" />,
                description:
                  "Crafting visually stunning, user-centric designs that elevate brand identity.",
              },
              {
                title: "Custom Software Development",
                icon: <Rocket className="h-8 w-8 mb-4 text-purple-600" />,
                description:
                  "Delivering tailored software solutions to address unique business challenges.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-none"
              >
                <CardContent className="p-6 text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Our Impact
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "5+", label: "Years of Experience" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-64"
              >
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Understand",
                description:
                  "We begin by deeply understanding your business, goals, and challenges.",
              },
              {
                title: "Innovate",
                description:
                  "Our team crafts innovative solutions tailored to your specific needs.",
              },
              {
                title: "Deliver",
                description:
                  "We implement and deliver high-quality solutions that drive tangible results.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-lg shadow-2xl">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Let's collaborate to bring your vision to life and drive your
            business forward in the digital realm.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
