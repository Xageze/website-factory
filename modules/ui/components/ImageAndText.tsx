import { ImageType } from "@/modules/miscellaneous/type";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { H2, P } from "./CustomHtml";

type Props = {
  image: ImageType;
  title: string;
  text: string;
  imagePosition?: "left" | "right";
};

export const ImageAndText: React.FC<Props> = ({
  image,
  title,
  text,
  imagePosition,
}) => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center">
      {/* Title + Text */}
      <div
        className={
          imagePosition === "right" ? "mr-0 lg:mr-[53%]" : "ml-0 lg:ml-[53%]"
        }
      >
        <H2 className="">{title}</H2>
        <P className="pt-4 sm:pt-10">{text}</P>
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
