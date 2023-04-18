import React from "react";
import Link from "next/link";
import { HeaderLinkType } from "@modules/miscellaneous/type";

type Props = {
  link: HeaderLinkType;
  onClick?: () => void;
};

export const BurgerButtonLink: React.FC<Props> = ({ link, onClick }) => {
  return (
    <Link
      key={link.buttonLink?.text + link.buttonLink?.href}
      href={link.buttonLink?.href}
      onClick={onClick}
      className="flex sm:hidden px-6 py-2 border-b border-gray-300 hover:bg-gray-200 transition-colors"
    >
      {link.buttonLink?.text}
    </Link>
  );
};
