"use client";

import "../../../app/globals.css";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { HeaderLinkType, ImageType } from "@modules/miscellaneous/type";
import { MenuBurger } from "./MenuBurger";
import { DropDownLink } from "./DropDownLink";
import { NormalLink } from "./NormalLink";
import { ButtonLink } from "./ButtonLink";
import Headroom from "react-headroom";

type Props = {
  logo: ImageType;
  logoTitle: string;
  links: Array<HeaderLinkType>;
  backgroundColor?: string;
};

export const Header: React.FC<Props> & { height: number } = ({
  logo,
  logoTitle,
  links,
  backgroundColor = "white",
}) => {
  return (
    <Headroom>
      <header
        className="sticky top-0 text-lg font-medium shadow-down-sm flex items-center bg-white z-10"
        style={{ height: Header.height, backgroundColor }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between space-x-8">
          <Link
            className={clsx(
              "flex items-center space-x-8",
              "hover:cursor-pointer hover:scale-105",
              "transition-all ease-in-out"
            )}
            href={"/"}
          >
            <Image
              src={logo.url}
              alt={logo.alt}
              height={52}
              width={52}
              className="object-contain object-left"
            />
            <div className="text-xl font-bold">{logoTitle}</div>
          </Link>

          <div className="hidden sm:flex space-x-4 items-center">
            {links.map(
              (link, index) =>
                (link.normalLink && <NormalLink key={index} link={link} />) ||
                (link.dropDownLink && (
                  <DropDownLink key={index} link={link} />
                )) ||
                (link.buttonLink && <ButtonLink key={index} link={link} />)
            )}
          </div>
        </div>

        <MenuBurger links={links} />
      </header>
    </Headroom>
  );
};

Header.height = 80;
