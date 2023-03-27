import { ImageType, LinkType } from "@/modules/miscellaneous/type";
import { Arrow } from "@/modules/svgs/components/Arrow";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        <h2 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {title}
        </h2>
        <p className="mb-6 w-full sm:w-3/4">{text}</p>
        <Link
          href={buttonLink?.href}
          className={clsx(
            "text-white font-semibold",
            "bg-blue-500 hover:bg-blue-700 rounded-lg",
            "px-4 py-3 flex items-center"
          )}
        >
          {buttonLink?.text}
          <Arrow />
        </Link>
      </div>
    </div>
  );
};
