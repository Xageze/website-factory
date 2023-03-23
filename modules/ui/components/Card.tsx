import { ImageType } from "@/modules/miscellaneous/type";
import Image from "next/image";
import React from "react";

type Props = {
  image: ImageType;
  title: string;
  text: string;
};

export const Card: React.FC<Props> = ({ image, title, text }) => {
  return (
    <div className="border max-w-xs rounded-lg">
      {/* Image */}
      <Image
        src={image.url}
        alt={image.alt}
        height={613}
        width={920}
        className="rounded-t-lg"
      />
      {/* Title + Text */}
      <div className="p-3">
        <h4 className="text-2xl font-bold pb-3">{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};
