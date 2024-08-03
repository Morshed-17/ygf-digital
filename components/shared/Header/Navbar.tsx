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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  if (pathname.includes("dashboard")) return <div className="hidden"></div>;
  if (pathname.includes("api/auth/signin")) return <div className="hidden"></div>;
  return (
    <Navbar
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
        <NavbarItem>
          <Link
            href="/"
            className={`${
              pathname === "/" && "text-blue-600"
            } hover:text-blue-600  transition-all`}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/about"
            className={`${
              pathname === "/about" && "text-blue-600"
            } hover:text-blue-600  transition-all`}
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/case-studies"
            className={`${
              pathname === "/case-studies" && "text-blue-600"
            } hover:text-blue-600  transition-all`}
          >
            Case Studies
          </Link>
        </NavbarItem>
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

      <NavbarMenu className="z-50 items-center justify-center bg-transparent ">
        <NavbarMenuItem>
          <Link
            href="/"
            className={`${
              pathname === "/" && "text-blue-600"
            } hover:text-blue-600  transition-all text-3xl`}
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/about"
            className={`${
              pathname === "/about" && "text-blue-600"
            } hover:text-blue-600  transition-all text-3xl`}
          >
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/case-studies"
            className={`${
              pathname === "/case-studies" && "text-blue-600"
            } hover:text-blue-600  transition-all text-3xl`}
          >
            Case Studies
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
