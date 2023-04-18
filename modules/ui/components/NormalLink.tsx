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
      className="hover:underline"
    >
      {link.normalLink?.text}
    </Link>
  );
};
