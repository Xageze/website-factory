import Link from "next/link";
import React from "react";
import { H2, H3 } from "./CustomHtml";
import clsx from "clsx";

type Props = {
  title: string;
  description: string;
  date: string;
};

export const BlogCard: React.FC<Props> = ({ title, description, date }) => {
  const slug = title.replaceAll(" ", "-");

  return (
    <Link
      className={clsx(
        "p-6 max-w-xl bg-gray-100 rounded-lg",
        "hover:-translate-y-2 transition"
      )}
      href={`/blog/${[slug]}`}
    >
      <H3 className="mb-6 text-3xl font-bold">{title}</H3>
      <p>{description}</p>
      <div className="mt-10">{date}</div>
    </Link>
  );
};
