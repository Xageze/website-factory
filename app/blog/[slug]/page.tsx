import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const page: React.FC<Props> = ({ params }) => {
  const slug = params.slug;

  return (
    <div>
      <h1>Blog : {slug}</h1>
    </div>
  );
};
export default page;
