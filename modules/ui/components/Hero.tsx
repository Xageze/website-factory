"use client";
import { ImageType } from "@/modules/miscellaneous/type";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Header } from "./Header";

type Props = {
  title: string;
  text: string;
  sideImage?: ImageType;
  backgroundImage?: ImageType;
};

export const Hero: React.FC<Props> = ({
  title,
  text,
  sideImage,
  backgroundImage,
}) => {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ minHeight: `calc(100vh - ${Header.height}px)` }}
    >
      {/* BACKGROUND IMAGE */}
      {backgroundImage && (
        <Image
          src={backgroundImage?.url}
          alt={backgroundImage?.alt}
          fill
          className="object-cover -z-10"
        />
      )}

      {/* TEXT + SIDE IMAGE */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, stiffness: 150 }}
        className="container mx-auto px-8 flex flex-col lg:flex-row items-center space-x-0 lg:space-x-10 space-y-10"
      >
        {/* TEXT */}
        <div className="text-center lg:text-start space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
            {title}
          </h1>
          <h2 className="text-lg sm:text-xl text-white/75 font-semibold">
            {text}
          </h2>
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
