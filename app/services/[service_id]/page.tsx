import React from "react";

const page = ({ params }: { params: { service_id: string } }) => {
  return <div>{params.service_id}</div>;
};

export default page;
