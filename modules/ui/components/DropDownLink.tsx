import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { HeaderLinkType } from "@modules/miscellaneous/type";
import { UnionIcon } from "@modules/svgs/components/UnionIcon";
import { motion } from "framer-motion";

type Props = {
  link: HeaderLinkType;
};

export const DropDownLink: React.FC<Props> = ({ link }) => {
  return (
    <div className="group px-3 hidden lg:flex flex-col items-center">
      <div className="flex items-center space-x-2">
        <button>{link.dropDownLink?.categoryTitle}</button>
        <div className="rotate-180 group-hover:rotate-0 transition-transform">
          <UnionIcon />
        </div>
      </div>

      {/* Sub Links */}
      <motion.div
        whileHover={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        className={clsx(
          "absolute hidden group-hover:flex",
          "flex-col pt-10 items-center"
        )}
      >
        <div
          className={clsx(
            "bg-white rounded-md border border-gray-300",
            "py-2 shadow-sm flex flex-col"
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
      </motion.div>
    </div>
  );
};
