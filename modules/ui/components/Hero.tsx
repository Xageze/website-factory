"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { ImageType, LinkType } from "@modules/miscellaneous/type";
import { motion } from "framer-motion";
import { Header } from "./Header";
import CustomHtml from "./CustomHtml";

type Props = {
  title: string;
  text: string;
  sideImage?: ImageType;
  backgroundImage?: ImageType;
  bgOpacity?: "black" | "white";
  buttons?: Array<LinkType>;
};

export const Hero: React.FC<Props> = ({
  title,
  text,
  sideImage,
  backgroundImage,
  bgOpacity,
  buttons,
}) => {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ minHeight: `calc(100vh - ${Header.height}px)` }}
    >
      {/* BACKGROUND IMAGE */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage?.url}
            alt={backgroundImage?.alt}
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 85vw,
            75vw"
            className="object-cover"
          />
          <div
            className={clsx(
              "absolute h-full w-full opacity-10",
              bgOpacity === "black" ? "bg-black" : null,
              bgOpacity === "white" ? "bg-white" : null
            )}
          />
        </>
      )}

      {/* TEXT + SIDE IMAGE */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, stiffness: 150 }}
        className="container mx-auto px-6 sm:px-8 flex flex-col lg:flex-row items-center space-x-0 lg:space-x-10 space-y-10 z-0"
      >
        {/* TEXT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start gap-4">
          <CustomHtml.H1 className="text-white">{title}</CustomHtml.H1>
          <CustomHtml.H4 className="text-white/75">{text}</CustomHtml.H4>
          {buttons && (
            <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start gap-4 sm:gap-8">
              {buttons.map((button, index) => {
                return (
                  <CustomHtml.CustomLink
                    key={index}
                    hrefLink={button?.href}
                    className={clsx(
                      "px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4",
                      "w-fit sm:text-lg lg:text-xl rounded-lg"
                    )}
                  >
                    {button?.text}
                  </CustomHtml.CustomLink>
                );
              })}
            </div>
          )}
        </div>

        {/* SIDE IMAGE */}
        {sideImage && (
          <div className="relative h-60 sm:h-80 lg:h-[450px] w-60 sm:w-80 lg:w-[450px] aspect-square">
            <Image
              src={sideImage?.url}
              alt={sideImage?.alt}
              fill
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
              className="object-cover"
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};
