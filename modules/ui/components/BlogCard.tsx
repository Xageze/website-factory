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
      className="p-4 max-w-xl border border-gray-300 rounded-lg"
      href={`/blog/${[slug]}`}
    >
      <h1 className="mb-4 text-3xl font-bold">{title}</h1>
      <p>{description}</p>
      <div className="mt-10">{date}</div>
    </Link>
  );
};
