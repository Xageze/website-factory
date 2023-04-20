import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { CheckIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HeaderLinkType } from "@modules/miscellaneous/type";
import { UnionIcon } from "@modules/svgs/components/UnionIcon";
import { motion } from "framer-motion";

type Props = {
  link: HeaderLinkType;
  onClick?: () => void;
};

export const BurgerDropDownLink: React.FC<Props> = ({ link, onClick }) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className="flex flex-col">
      <span
        className="px-6 py-2 border-t border-gray-300 hover:cursor-pointer hover:bg-gray-200 transition-colors"
        onClick={toggle}
      >
        <div className="flex justify-between items-center">
          {link.dropDownLink?.categoryTitle}
          <div
            className={clsx(
              "transition-transform",
              opened ? "rotate-180" : "rotate-0"
            )}
          >
            <UnionIcon />
          </div>
        </div>
      </span>
      {opened && (
        <motion.div
          initial={{ height: 0, overflow: "hidden" }}
          animate={{ height: "auto" }}
          className="flex flex-col pb-4"
        >
          {link.dropDownLink?.subLinks.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                onClick={onClick}
                className="px-6 py-2 font-medium hover:cursor-pointer hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <CheckIcon width={14} height={14} /> {link.text}
              </Link>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};
