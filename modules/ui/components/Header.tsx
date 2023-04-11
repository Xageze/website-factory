"use client";

import Image from "next/image";
import Link from "next/link";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "../../../app/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { Cross } from "@/modules/svgs/components/Cross";
import { ImageType, LinkType } from "@/modules/miscellaneous/type";

type Props = {
  logo: ImageType;
  logoTitle: string;
  links: Array<LinkType>;
  backgroundColor?: string;
};

export const Header: React.FC<Props> & { height: number } = ({
  logo,
  logoTitle,
  links,
  backgroundColor = "white",
}) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header
      className="sticky top-0 text-lg font-medium shadow-lg flex items-center bg-white z-10"
      style={{ height: Header.height, backgroundColor: backgroundColor }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between space-x-8">
        <div className="flex items-center space-x-8">
          <Image
            src={logo.url}
            alt={logo.alt}
            height={60}
            width={60}
            className="object-contain object-left"
          />
          <div className="text-xl font-bold">{logoTitle}</div>
        </div>

        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.text + link.href}
              href={link.href}
              className="hover:underline min-w-fit"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <Burger opened={opened} onClick={toggle} className="md:hidden" />
      </div>

      {/* MENU BURGER */}
      <AnimatePresence>
        {opened && (
          <>
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: 288,
                transition: { duration: 0.6 },
              }}
              exit={{ width: 0, transition: { delay: 0.6, duration: 0.6 } }}
              className="absolute right-0 bg-gray-100 shadow-2xl flex flex-col"
              style={{
                height: `calc(100vh - ${Header.height}px)`,
                top: Header.height,
              }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.6, duration: 0.6 },
              }}
              exit={{
                opacity: 0,
                transition: { delay: 0, duration: 0.6 },
              }}
              className="absolute w-72 right-0 font-bold flex flex-col"
              style={{
                height: `calc(100vh - ${Header.height}px)`,
                top: Header.height,
              }}
            >
              {links.map((link) => (
                <Link
                  key={link.text + link.href}
                  href={link.href}
                  onClick={toggle}
                  className="px-6 py-2 hover:bg-gray-300"
                >
                  {link.text}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

Header.height = 80;
