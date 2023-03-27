"use client";
import { ImageType } from "@/modules/miscellaneous/type";
import Image from "next/image";
import React from "react";

type Props = {
  icon: Array<ImageType>;
};

export const IconList: React.FC<Props> = ({ icon }) => {
  return (
    <div className="flex items-center justify-center bg-red-200">
      <div className="relative flex w-[1000px] h-24 bg-orange-300 overflow-hidden">
        <div className="flex h-24 items-center ">
          {icon.map((item, index) => {
            return (
              <div key={index} className="relative items-center h-20 w-40">
                <Image
                  src={item.url}
                  alt={item.alt}
                  fill
                  className="object-contain"
                />
              </div>
            );
          })}
        </div>

        <div>
          {icon.map((item, index) => {
            return (
              <div key={index} className="relative items-center h-20 w-40">
                <Image
                  src={item.url}
                  alt={item.alt}
                  fill
                  className="object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
