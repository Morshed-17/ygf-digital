import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1600px] mx-auto px-5 md:px-8 lg:px-20">
      {children}
    </div>
  );
};

export default Container;
