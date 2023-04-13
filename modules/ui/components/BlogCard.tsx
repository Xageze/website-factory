import Link from "next/link";
import React from "react";
import CustomHtml from "./CustomHtml";
import clsx from "clsx";

type Props = {
  title: string;
  description: string;
  categorie: string;
  date: string;
  selectedCategory?: string | null;
};

export const BlogCard: React.FC<Props> = ({
  title,
  description,
  date,
  categorie,
  selectedCategory,
}) => {
  const slug = title.replaceAll(" ", "-");

  return (
    <>
      {(selectedCategory === undefined || selectedCategory === categorie) && (
        <Link
          className={clsx(
            "p-6 max-w-xl bg-gray-100 rounded-lg",
            "hover:-translate-y-2 transition"
          )}
          id={categorie}
          href={`/blog/${[slug]}`}
        >
          <CustomHtml.H3 className="mb-6 text-3xl font-bold">
            {title}
          </CustomHtml.H3>
          <CustomHtml.P>{description}</CustomHtml.P>
          <div className="mt-10 w-full flex justify-between items-center">
            <span>{date}</span>
            {categorie && (
              <span className="ml-5 p-2 bg-green-200 font-medium rounded-md">
                {categorie}
              </span>
            )}
          </div>
        </Link>
      )}
    </>
  );
};
