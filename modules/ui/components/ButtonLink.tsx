import React from "react";
import Link from "next/link";
import { HeaderLinkType } from "@modules/miscellaneous/type";

type Props = {
  link: HeaderLinkType;
};

export const ButtonLink: React.FC<Props> = ({ link }) => {
  return (
    <Link
      href={link.buttonLink?.href}
      className="whitespace-nowrap px-5 py-2 rounded-full bg-green-400 hover:bg-green-500 text-white"
    >
      {link.buttonLink?.text}
    </Link>
  );
};
