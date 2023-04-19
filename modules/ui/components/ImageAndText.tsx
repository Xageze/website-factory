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
        "relative flex flex-col lg:flex-row items-center justify-center",
        className
      )}
    >
      {/* Title + Text */}
      <div
        className={
          imagePosition === "right" ? "mr-0 lg:mr-[53%]" : "ml-0 lg:ml-[53%]"
        }
      >
        <CustomHtml.H2 className="">{title}</CustomHtml.H2>
        <CustomHtml.P className="pt-4 sm:pt-10">{text}</CustomHtml.P>
      </div>
      {/* Image */}
      <div
        className={clsx(
          "static lg:absolute pt-8",
          imagePosition === "right" ? "left-1/2" : "right-1/2"
        )}
      >
        <Image
          src={image.url}
          alt={image.alt}
          height={400}
          width={1000}
          className="max-h-[400px] object-contain"
        />
      </div>
    </div>
  );
};
