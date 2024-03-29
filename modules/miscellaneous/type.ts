import type { Route } from "next";
import { UrlObject } from "url";

export type ImageType = {
  url: string;
  alt: string;
};

export type LinkType = {
  text: string;
  href: UrlObject | Route;
};

export type HeaderLinkType = {
  normalLink?: {
    text: string;
    href: UrlObject | Route;
  };
  dropDownLink?: {
    categoryTitle: string;
    subLinks: LinkType[];
  };
  buttonLink?: {
    text: string;
    href: UrlObject | Route;
  };
};

export type IconLink = {
  href: UrlObject | Route;
  icon: ImageType;
};

export type CategoryType = {
  text: string;
  color: string;
};
