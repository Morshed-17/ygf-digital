"use client";
import React from "react";
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
  { name: "Case Studies", path: "/case-studies" },
];
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  if (pathname.includes("dashboard")) return <div className="hidden"></div>;
  if (pathname.includes("api/auth/signin"))
    return <div className="hidden"></div>;
  return (
    <Navbar
      position="static"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      className="border-none bg-transparent relative z-50"
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
