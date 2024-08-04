import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch } from "react";

type Props = {
  navlinks: {
    name: string;
    path: string;
  }[];
  
  setIsMenuOpen: Dispatch<React.SetStateAction<boolean>>;
};
const MenuMobile = ({ navlinks ,setIsMenuOpen }: Props) => {
  const pathname = usePathname();

  return (
    <NavbarMenu className="z-50 items-center justify-center bg-transparent ">
      {navlinks.map((item, index) => (
        <NavbarMenuItem onClick={() => setIsMenuOpen(false)} key={index}>
          <Link
            href={item.path}
            className={`${
              pathname === item.path && "text-blue-600"
            } hover:text-blue-600  transition-all text-3xl`}
          >
            {item.name}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};

export default MenuMobile;
