import Image from "next/image";
import React from "react";
import Text from "./CustomHtml";
import { ImageType } from "@modules/miscellaneous/type";

type Props = {
  image: ImageType;
  title: string;
  text: string;
};

export const Card: React.FC<Props> = ({ image, title, text }) => {
  return (
    <div className="border max-w-xs rounded-lg overflow-hidden shadow-sm">
      {/* Image */}
      <Image src={image.url} alt={image.alt} height={320} width={320} />
      {/* Title + Text */}
      <div className="p-4">
        <Text.H3 className="pb-3">{title}</Text.H3>
        <Text.P>{text}</Text.P>
        <Text.Button className="mt-6">Acheter</Text.Button>
      </div>
    </div>
  );
};
