import Container from "@/components/shared/Container";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className=" container mx-auto bg-gradient-to-br py-12">
      <div className="mb-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 rounded-full bg-white px-4 py-2 shadow-md">
            <SearchIcon className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-500">DISCOVER</span>
          </div>
        </div>
      </div>

      <div>
        <h1 className="mb-6 text-4xl md:text-5xl lg:text-7xl font-medium leading-loose">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Independent experts
          </span>{" "}
          that <br /> help ambitious companies <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            scale without limits.
          </span>
        </h1>

        <p className="mb-12 lg:text-xl text-gray-600">
          YGF Digital talent network has worked with the world's most innovative
          brands and companies:
        </p>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8">
          {[
            "/images/brands/bookbin.jpg",
            "/images/brands/kidlon.jpg",
            "/images/brands/kodomo.jpg",
            "/images/brands/paikari.webp",
            "/images/brands/pentagon.webp",
          ].map((company, index) => (
            <Image
              key={index}
              height={150}
              width={150}
              src={company}
              alt="Brand"
              className="text-xl font-semibold text-gray-800"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
