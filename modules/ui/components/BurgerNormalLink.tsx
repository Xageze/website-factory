import { HeaderLinkType } from "@modules/miscellaneous/type";
import Link from "next/link";
import React from "react";

type Props = {
  link: HeaderLinkType;
  onClick?: () => void;
};

export const BurgerNormalLink: React.FC<Props> = ({ link, onClick }) => {
  return (
    <Link
      key={link.normalLink?.text + link.normalLink?.href}
      href={link.normalLink?.href}
      onClick={onClick}
      className="px-6 py-2 border-b border-gray-300 hover:bg-gray-200 transition-colors"
    >
      {link.normalLink?.text}
    </Link>
  );
};
