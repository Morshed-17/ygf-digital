import Container from "@/components/shared/Container";

import { ClientToUs } from "./ClientToUs";
import Image from "next/image";

const AboutComapany = () => {
  return (
    <div className="bg-gray-100 py-24">
      <Container>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side Content */}
            <div className="bg-white p-6 rounded-xl h-full flex flex-col  shadow-sm order-2 lg:order-1">
              <h2 className="text-blue-600 font-semibold">About Our Company</h2>
              <h1 className="text-3xl lg:text-6xl font-semibold mt-3">
                Our Dream is <br /> Global Learning Transformation
              </h1>
              {/* Wrapper div to take up the remaining space */}
              <ClientToUs />
              <div className="flex-grow">
                <p className="text-gray-600">
                  Kawruh was founded by Robert Anderson, a passionate lifelong
                  learner, and Maria Sanchez, a visionary educator. Their shared
                  dream was to create a digital haven of knowledge accessible to
                  all. United by their belief in the transformational power of
                  education, they embarked on a journey to build 'Kawruh.' With
                  relentless dedication, they gathered a team of experts and
                  launched this innovative platform, creating a global community
                  of eager learners, all connected by the desire to explore,
                  learn, and grow.
                </p>
              </div>
            </div>

            {/* Right Side Image and Stats */}
            <div className="grid grid-cols-1 gap-4 order-1 lg:order-2">
              {/* Image */}

              <Image
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About Comapany"
                width={1000}
                height={1000}
                className="rounded-xl max-h-96 w-full object-cover  shadow-sm"
              />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-gray-50 text-left rounded-xl p-4 ">
                  <h3 className="text-3xl font-bold">3.5</h3>
                  <p className="text-gray-500">Years Experience</p>
                </div>
                <div className="bg-gray-50 text-left rounded-lg p-4 ">
                  <h3 className="text-3xl font-bold">23</h3>
                  <p className="text-gray-500">Project Challenge</p>
                </div>
                <div className="bg-gray-50 text-left rounded-lg p-4 ">
                  <h3 className="text-3xl font-bold">830+</h3>
                  <p className="text-gray-500">Positive Reviews</p>
                </div>
                <div className="bg-gray-50 text-left rounded-lg p-4 ">
                  <h3 className="text-3xl font-bold">100K</h3>
                  <p className="text-gray-500">Trusted Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutComapany;
