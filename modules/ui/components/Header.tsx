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
          <motion.div
            initial={{ translateX: "100%" }}
            animate={{ translateX: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            exit={{ translateX: "100%" }}
            className="absolute bg-gray-100 h-screen w-72 top-0 right-0 flex flex-col"
          >
            <button onClick={toggle} className="p-3">
              <Cross />
            </button>
            <div className="font-bold pt-10 flex flex-col">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

Header.height = 80;
