import { HeaderLinkType, LinkType } from "@modules/miscellaneous/type";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
  link: HeaderLinkType;
};

export const DropDownLink: React.FC<Props> = ({ link }) => {
  return (
    <div className="group flex flex-col items-center">
      <button>{link.dropDownLink?.categoryTitle}</button>
      <div
        className={clsx(
          "absolute hidden group-hover:flex",
          "w-max bg-white font-medium border border-gray-300 rounded-md",
          "mt-7 flex-col"
        )}
      >
        {/* Sub Links */}
        {link.dropDownLink?.subLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="hover:bg-gray-300 pl-6 pr-20 py-2 border-b border-gray-300"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};
