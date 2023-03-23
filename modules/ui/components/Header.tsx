"use client";

import Image from "next/image";
import Link from "next/link";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "../../../app/globals.css";
import { motion } from "framer-motion";
import { Cross } from "@/modules/svgs/components/cross";

type Link = {
  text: string;
  href: string;
};

type Props = {
  logo: string;
  logoTitle: string;
  links: Array<Link>;
  backgroundColor?: string;
};

export const Header: React.FC<Props> & { height: number } = ({
  logo,
  logoTitle,
  links,
}) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header
      className="sticky top-0 text-lg font-medium shadow-lg flex items-center bg-white z-10"
      style={{ height: Header.height }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between space-x-8">
        <div className="flex items-center space-x-8">
          <div className="relative h-14 aspect-square">
            <Image
              src={logo}
              alt={"Logo de la page d'accueil"}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-bold">{logoTitle}</h3>
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
      {opened && (
        <motion.div
          transition={{ duration: 0.6 }}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          className="absolute bg-[#373A47] h-screen w-72 top-0 right-0 flex flex-col items-center transition-opacity opacity-100"
        >
          <button onClick={toggle} className="p-2 self-start">
            <Cross />
          </button>
          <div className="flex flex-col text-gray-300 font-bold pt-10 space-y-4 underline">
            {links.map((link) => (
              <Link
                key={link.text + link.href}
                href={link.href}
                className="hover:text-gray-400"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

Header.height = 80;
