import Link from "next/link";
import React from "react";
import CustomHtml from "./CustomHtml";
import clsx from "clsx";

type Props = {
  title: string;
  description: string;
  date: string;
  category: string;
  selectedCategory?: string | null;
};

export const BlogCard: React.FC<Props> = ({
  title,
  description,
  date,
  category,
  selectedCategory,
}) => {
  const slug = title.replaceAll(" ", "-");

  return (
    <>
      {(selectedCategory === undefined || selectedCategory === category) && (
        <Link
          className={clsx(
            "p-6 max-w-xl bg-gray-100 rounded-lg",
            "hover:-translate-y-2 transition"
          )}
          id={category}
          href={`/blog/${[slug]}`}
        >
          <CustomHtml.H3 className="mb-6 text-3xl font-bold">
            {title}
          </CustomHtml.H3>
          <CustomHtml.P>{description}</CustomHtml.P>
          <div className="mt-10 w-full flex justify-between items-center">
            <span>{date}</span>
            {category && (
              <span className="ml-5 p-2 bg-green-200 font-medium rounded-md">
                {category}
              </span>
            )}
          </div>
        </Link>
      )}
    </>
  );
};
