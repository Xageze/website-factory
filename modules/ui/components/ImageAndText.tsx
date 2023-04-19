import { ImageType } from "@modules/miscellaneous/type";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import CustomHtml from "./CustomHtml";

type Props = {
  image: ImageType;
  title: string;
  text: string;
  imagePosition?: "left" | "right";
  className?: string;
};

export const ImageAndText: React.FC<Props> = ({
  image,
  title,
  text,
  imagePosition,
  className,
}) => {
  return (
    <div
      className={clsx(
        "relative flex flex-col items-center justify-center gap-6",
        imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse",
        className
      )}
    >
      {/* Title + Text */}
      <div className="flex-1">
        <CustomHtml.H2 className="">{title}</CustomHtml.H2>
        <CustomHtml.P className="pt-4 sm:pt-10">{text}</CustomHtml.P>
      </div>
      {/* Image */}
      <div className={"flex-1"}>
        <Image
          src={image.url}
          alt={image.alt}
          height={1000}
          width={1000}
          className="object-cover"
        />
      </div>
    </div>
  );
};
