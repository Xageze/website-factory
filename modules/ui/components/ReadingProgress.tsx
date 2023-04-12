"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { Header } from "./Header";

/**
 * Display the reading progress depending on the scroll of the page.
 */
export const ReadingProgress: React.FC = React.memo(function ReadingProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={"fixed bg-black h-1 right-0 left-0 origin-left z-50"}
      style={{ scaleX: scrollYProgress, top: Header.height }}
    />
  );
});
