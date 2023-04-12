import { ImageType } from "@/modules/miscellaneous/type";
import Image from "next/image";
import React from "react";
import { Button, H3, P } from "./CustomHtml";

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
        <H3 className="pb-3">{title}</H3>
        <P>{text}</P>
        <Button>Acheter</Button>
      </div>
    </div>
  );
};
