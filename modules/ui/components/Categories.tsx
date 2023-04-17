import { CategoryType } from "@modules/miscellaneous/type";
import clsx from "clsx";
import React from "react";

type Props = {
  categories: CategoryType[];
  setSelectedCategory: (category: string) => void;
};

export const Categories: React.FC<Props> = ({
  categories,
  setSelectedCategory,
}) => {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <div className="group flex flex-col items-center" key={index}>
            <button
              onClick={() => setSelectedCategory(category.text)}
              className={clsx(
                "px-4 py-2 font-semibold rounded-md",
                category.color
              )}
            >
              {category.text}
            </button>
            <span
              className={clsx(
                "absolute hidden group-hover:block",
                "w-max bg-black text-white font-medium rounded-md",
                "px-4 py-1 mt-11 z-10"
              )}
            >
              Filtrer par {category.text}
            </span>
          </div>
        );
      })}
    </>
  );
};
