"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuMobile from "./MenuMobile";

const navlinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
];
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname.includes("dashboard")) return <div className="hidden"></div>;
  if (pathname.includes("api/auth/signin"))
    return <div className="hidden"></div>;
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      shouldHideOnScroll
      className={`transition-colors duration-300 z-50 ${
        hasScrolled ? "bg-white/80" : "bg-transparent"
      }`}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image src="/images/logo.png" width={100} height={100} alt="Logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex flex-1 gap-4" justify="center">
        <NavbarBrand>
          <Image src="/images/logo.png" width={100} height={100} alt="Logo" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex flex-1 gap-4" justify="center">
        {navlinks.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={item.path}
              className={`${
                pathname === item.path && "text-blue-600"
              } hover:text-blue-600  transition-all`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuItem>
          <Link href="/contact">
            <Button variant="default" className="rounded-full">
              Contact Now
            </Button>
          </Link>
        </NavbarMenuItem>
      </NavbarContent>

      <MenuMobile navlinks={navlinks} setIsMenuOpen={setIsMenuOpen} />
    </Navbar>
  );
}
