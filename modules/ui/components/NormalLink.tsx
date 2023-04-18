import { HeaderLinkType } from "@modules/miscellaneous/type";
import Link from "next/link";
import React from "react";

type Props = {
  link: HeaderLinkType;
};

export const NormalLink: React.FC<Props> = ({ link }) => {
  return (
    <Link
      key={link.normalLink?.text + link.normalLink?.href}
      href={link.normalLink?.href}
      className="pr-6 hover:underline whitespace-nowrap hidden lg:flex"
    >
      {link.normalLink?.text}
    </Link>
  );
};
