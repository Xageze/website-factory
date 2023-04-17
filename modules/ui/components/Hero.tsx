"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { ImageType } from "@modules/miscellaneous/type";
import { motion } from "framer-motion";
import { Header } from "./Header";
import CustomHtml from "./CustomHtml";

type Props = {
  title: string;
  text: string;
  sideImage?: ImageType;
  backgroundImage?: ImageType;
  bgOpacity?: "black" | "white";
};

export const Hero: React.FC<Props> = ({
  title,
  text,
  sideImage,
  backgroundImage,
  bgOpacity,
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
        className="container mx-auto px-8 flex flex-col lg:flex-row items-center space-x-0 lg:space-x-10 space-y-10 z-0"
      >
        {/* TEXT */}
        <div className="text-center lg:text-start space-y-4">
          <CustomHtml.H1 className="text-white">{title}</CustomHtml.H1>
          <CustomHtml.H4 className="text-white/75">{text}</CustomHtml.H4>
        </div>

        {/* SIDE IMAGE */}
        {sideImage && (
          <div className="relative h-60 sm:h-80 lg:h-[450px] w-60 sm:w-80 lg:w-[450px] aspect-square">
            <Image
              src={sideImage?.url}
              alt={sideImage?.alt}
              fill
              className="object-cover"
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};
