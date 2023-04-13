import { ImageType, LinkType } from "@/modules/miscellaneous/type";
import { Arrow } from "@/modules/svgs/components/Arrow";
import Image from "next/image";
import React from "react";
import CustomHtml from "./CustomHtml";

type Props = {
  title: string;
  text: string;
  icon?: ImageType;
  buttonLink?: LinkType;
};

export const Headings: React.FC<Props> = ({
  title,
  text,
  icon,
  buttonLink,
}) => {
  return (
    <div className="flex justify-center">
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
        <CustomHtml.H2 className="mb-4 tracking-tight">{title}</CustomHtml.H2>
        <CustomHtml.P className="mb-6 w-full sm:w-3/4">{text}</CustomHtml.P>
        <CustomHtml.CustomLink hrefLink={buttonLink?.href}>
          {buttonLink?.text}
        </CustomHtml.CustomLink>
      </div>
    </div>
  );
};
