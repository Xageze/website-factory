import Image from "next/image";
import React from "react";
import CustomHtml from "./CustomHtml";
import { ImageType } from "@modules/miscellaneous/type";
import clsx from "clsx";

type Props = {
  image: ImageType & { side: "left" | "right" | "above" };
  title: string;
  text: string;
};

export const Card: React.FC<Props> = ({ image, title, text }) => {
  return (
    // <div className="border max-w-xs rounded-lg overflow-hidden shadow-sm">
    <div
      className={clsx(
        "border rounded-lg overflow-hidden shadow-sm flex itmes-center",
        image.side === "left" &&
          "max-w-xs sm:max-w-none flex-col sm:flex-row w-fit",
        image.side === "right" &&
          "max-w-xs sm:max-w-none flex-col sm:flex-row-reverse w-fit",
        image.side === "above" && "max-w-xs flex-col"
      )}
    >
      {/* Image */}
      <Image src={image.url} alt={image.alt} width={320} height={320} />
      {/* Title + Text */}
      <div className="p-4 max-w-md">
        <CustomHtml.H3 className="pb-3">{title}</CustomHtml.H3>
        <CustomHtml.P className="overflow-y-scroll max-h-28">
          {text}
        </CustomHtml.P>
        <CustomHtml.Button className="mt-6 w-full">Voir</CustomHtml.Button>
      </div>
    </div>
  );
};
