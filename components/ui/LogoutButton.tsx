"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "./button";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <Button variant={"secondary"} onClick={handleLogout}>
      Log out
    </Button>
  );
}
