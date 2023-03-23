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
    <div className="border max-w-xs rounded-lg overflow-hidden shadow-md">
      {/* Image */}
      <Image src={image.url} alt={image.alt} height={320} width={320} />
      {/* Title + Text */}
      <div className="p-3">
        <h4 className="text-2xl font-bold pb-3">{title}</h4>
        <p>{text}</p>
        <button className="px-4 py-3 rounded-lg text-white bg-purple-600 mt-4">
          Voir / Acheter / jsp
        </button>
      </div>
    </div>
  );
};
