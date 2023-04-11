import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  description: string;
  date: string;
};

export const BlogCard: React.FC<Props> = ({ title, description, date }) => {
  const slug = title.replaceAll(" ", "-");

  return (
    <Link
      className="p-6 max-w-xl bg-gray-100 rounded-lg"
      href={`/blog/${[slug]}`}
    >
      <h1 className="mb-6 text-3xl font-bold">{title}</h1>
      <p>{description}</p>
      <div className="mt-10">{date}</div>
    </Link>
  );
};
