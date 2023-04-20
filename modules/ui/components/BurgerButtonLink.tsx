import React from "react";
import Link from "next/link";
import { HeaderLinkType } from "@modules/miscellaneous/type";
import clsx from "clsx";

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
      className={clsx(
        "mx-6 my-2 px-6 py-2 text-white",
        "bg-green-400 hover:bg-green-500 rounded-lg",
        "flex justify-center text-center sm:hidden"
      )}
    >
      {link.buttonLink?.text}
    </Link>
  );
};
