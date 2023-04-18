import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { HeaderLinkType } from "@modules/miscellaneous/type";
import { UnionIcon } from "@modules/svgs/components/UnionIcon";

type Props = {
  link: HeaderLinkType;
};

export const DropDownLink: React.FC<Props> = ({ link }) => {
  return (
    <div className="group pr-6 hidden lg:flex flex-col items-center">
      <div className="flex items-center space-x-2">
        <button>{link.dropDownLink?.categoryTitle}</button>
        <div className="rotate-180 group-hover:rotate-0 transition-transform">
          <UnionIcon />
        </div>
      </div>

      {/* Sub Links */}
      <div
        className={clsx(
          "absolute hidden group-hover:flex",
          "bg-white rounded-md border border-gray-300",
          "py-2 mt-7 flex-col"
        )}
      >
        {link.dropDownLink?.subLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="px-6 py-2 text-gray-500 hover:text-black"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};
