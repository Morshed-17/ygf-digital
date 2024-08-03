import { Button } from "@/components/ui/button";
import LogoutButton from "@/components/ui/LogoutButton";
import { Home } from "lucide-react";

import Link from "next/link";
import React, { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex">
      <div className="h-full bg-gray-50 w-[400px] p-5 shadow-md">
        <Link href="/">
          <Button>
            <Home></Home>
          </Button>
        </Link>
        <LogoutButton />
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};

export default layout;
