import { ImageType, LinkType } from "@modules/miscellaneous/type";
import { Arrow } from "@modules/svgs/components/Arrow";
import Image from "next/image";
import React from "react";
import CustomHtml from "./CustomHtml";
import clsx from "clsx";

type Props = {
  title: string;
  text: string;
  icon?: ImageType;
  buttonLink?: LinkType;
  className?: string;
};

export const Headings: React.FC<Props> = ({
  title,
  text,
  icon,
  buttonLink,
  className,
}) => {
  return (
    <div className={clsx("flex justify-center", className)}>
      <div className="text-center flex flex-col items-center">
        {icon && (
          <Image
            src={icon.url}
            alt={icon.alt}
            width={64}
            height={64}
            className="object-cover"
          />
        )}
        <CustomHtml.H3 className="my-6 tracking-tight">{title}</CustomHtml.H3>
        <CustomHtml.P className="mb-6 w-full sm:w-3/4">{text}</CustomHtml.P>
        {buttonLink && (
          <CustomHtml.CustomLink
            hrefLink={buttonLink?.href}
            className="rounded-lg"
          >
            {buttonLink?.text}
          </CustomHtml.CustomLink>
        )}
      </div>
    </div>
  );
};
