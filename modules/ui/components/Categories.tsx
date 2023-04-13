import React from "react";

type Props = {
  categories: Array<string>;
};

export const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="px-4 py-2 font-semibold bg-green-200 rounded-md group"
          >
            {category}
            <span className="group-hover:opacity-100 opacity-0 absolute bg-black text-white text-sm rounded-md py-1 px-4 transform top-20 transition-opacity">
              Filtrer par {category}
            </span>
          </button>
        );
      })}
    </>
  );
};
