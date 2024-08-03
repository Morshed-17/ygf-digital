"use client";
import {
  IconBrandDribbble,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  if (pathname.includes("dashboard")) return <div className="hidden"></div>;
  if (pathname.includes("api/auth/signin")) return <div className="hidden"></div>;
  return (
    <footer className="bg-gradient-to-r from-blue-100 via-indigo-100 to-orange-100">
      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Image src="/images/logo.png" width={100} height={100} alt="Logo" />
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              accusantium.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              <a
                className="hover:opacity-75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>
                <IconBrandFacebook />
              </a>
              <a
                className="hover:opacity-75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>
                <IconBrandInstagram />
              </a>
              <a
                className="hover:opacity-75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>
                <IconBrandLinkedin />
              </a>
              <a
                className="hover:opacity-75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> GitHub </span>
                <IconBrandGithub />
              </a>
              <a
                className="hover:opacity-75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Dribbble </span>
                <IconBrandDribbble />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="">
                  {" "}
                  About{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Meet the Team{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  History{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Careers{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="">
                  {" "}
                  1on1 Coaching{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Company Review{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Accounts Review{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  HR Consulting{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  SEO Optimisation{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="">
                  {" "}
                  Contact{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  FAQs{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Live Chat{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="">
                  {" "}
                  Privacy Policy{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Terms &amp; Conditions{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Returns Policy{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Accessibility{" "}
                </a>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-800">© 2022 YGF Digital</p>
      </div>
    </footer>
  );
};

export default Footer;
