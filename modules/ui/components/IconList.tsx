"use client";
import { ImageType } from "@/modules/miscellaneous/type";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  icon: Array<ImageType>;
  duration?: number;
  className?: string;
};

export const IconList: React.FC<Props> = ({
  icon,
  duration = 20,
  className,
}) => {
  return (
    <div className={className}>
      <div className="flex overflow-hidden">
        <motion.div
          animate={{
            x: "-50%",
            transition: {
              duration,
              ease: "linear",
              repeat: Infinity,
            },
          }}
          className="flex"
        >
          {/* List 1 */}
          <div className="w-[100vh] sm:w-screen flex justify-around">
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

          {/* List 2 */}
          <div className="w-[100vh] sm:w-screen flex justify-around">
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
        </motion.div>
      </div>
    </div>
  );
};
