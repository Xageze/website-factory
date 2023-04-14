import Link from "next/link";
import React from "react";
import CustomHtml from "./CustomHtml";
import clsx from "clsx";
import { CategoryType } from "@modules/miscellaneous/type";

type Props = {
  title: string;
  description: string;
  date: string;
  category: CategoryType;
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
      {(selectedCategory === "Tout" || selectedCategory === category.text) && (
        <Link
          className={clsx(
            "p-6 max-w-2xl bg-gray-100 rounded-lg",
            "hover:-translate-y-2 transition"
          )}
          id={category.text}
          href={`/blog/${[slug]}`}
        >
          <CustomHtml.H3 className="mb-6 text-3xl font-bold">
            {title}
          </CustomHtml.H3>
          <CustomHtml.P>{description}</CustomHtml.P>
          <div className="mt-10 w-full flex justify-between items-center">
            <span>{date}</span>
            {category && (
              <span
                className={clsx(
                  "px-4 py-2 font-medium rounded-lg",
                  category.color
                )}
              >
                {category.text !== "None" && category.text}
              </span>
            )}
          </div>
        </Link>
      )}
    </>
  );
};
