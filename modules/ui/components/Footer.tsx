"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageType } from "@/modules/miscellaneous/type";
import { useBreakpoint } from "../hooks/useBreakpoint";

type TextLink = {
  href: string;
  text: string;
};
type IconLink = {
  href: string;
  icon: ImageType;
};

type LinkCategory = {
  title: string;
  links: Array<TextLink>;
};

type Props = {
  logo: ImageType;
  logoTitle: string;
  linkCategory: Array<LinkCategory>;
  allRightResevered: string;
  socialMedia?: Array<IconLink>;
};

export const Footer: React.FC<Props> = ({
  logo,
  logoTitle,
  linkCategory,
  allRightResevered,
  socialMedia = [],
}) => {
  const smBreakpoint = useBreakpoint("sm");

  return (
    <footer className="bg-gray-100 mt-10">
      <div
        className="container mx-auto p-4 grid gap-4"
        style={
          smBreakpoint
            ? { gridTemplateColumns: `repeat(${linkCategory.length + 1}, 1fr)` }
            : { gridTemplateColumns: `repeat(${1}, 1fr)` }
        }
      >
        {/* Logo */}
        <div className="hidden sm:flex items-center space-x-4">
          <Image src={logo.url} alt={logo.alt} height={60} width={60} />
          <div className="text-xl font-bold">{logoTitle}</div>
        </div>
        {/* Category with Links */}
        {linkCategory.map((category) => {
          return (
            <div key={category.title}>
              <p className="font-bold pt-4 pb-3">{category.title}</p>
              {/* Links */}
              <div className="flex flex-col space-y-2">
                {category.links.map((link) => {
                  return (
                    <Link key={link.text} href={link.href}>
                      {link.text}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="container mx-auto border border-gray-300" />
      {/* CopyRights + Social Media */}
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div>{allRightResevered}</div>
        <div className="flex space-x-10">
          {socialMedia.map((socialMedia) => {
            return (
              <Link key={socialMedia.icon.url} href={socialMedia.href}>
                <Image
                  src={socialMedia.icon.url}
                  alt={socialMedia.icon.alt}
                  height={30}
                  width={30}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
