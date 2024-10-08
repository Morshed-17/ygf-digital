import React from "react";

const SectionTitle = ({title}: {title:string}) => {
  return (
    <h2 className="text-4xl text-center font-semibold">
      {title}
    </h2>
  );
};

export default SectionTitle;
