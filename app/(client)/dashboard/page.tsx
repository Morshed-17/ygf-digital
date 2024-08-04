import React from "react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/auth/signin");
  }
  return <div>page</div>;
};

export default page;
