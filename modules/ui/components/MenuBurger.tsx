import React from "react";
import { Burger } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { useDisclosure } from "@mantine/hooks";
import { Header } from "./Header";
import { HeaderLinkType } from "@modules/miscellaneous/type";
import { ButtonLink } from "./ButtonLink";
import { BurgerNormalLink } from "./BurgerNormalLink";
import { BurgerDropDownLink } from "./BurgerDropDownLink";
import { BurgerButtonLink } from "./BurgerButtonLink";

type Props = {
  links: Array<HeaderLinkType>;
};

export const MenuBurger: React.FC<Props> = ({ links }) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <nav className="lg:hidden">
      <Burger opened={opened} onClick={toggle} className="mr-4" />

      {/* MENU BURGER */}
      <AnimatePresence>
        {opened && (
          <>
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: "100%",
                transition: { duration: 0.3 },
              }}
              exit={{ width: 0, transition: { delay: 0.3, duration: 0.3 } }}
              className="absolute right-0 bg-white flex flex-col"
              style={{
                height: `calc(100vh - ${Header.height}px)`,
                top: Header.height,
              }}
            />
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { delay: 0.4, duration: 0.4 },
              }}
              exit={{
                opacity: 0,
                translateY: 20,
                transition: { delay: 0, duration: 0.4 },
              }}
              className="absolute w-full right-0 font-medium flex flex-col"
              style={{
                height: `calc(100vh - ${Header.height}px)`,
                top: Header.height,
              }}
            >
              {/* Links */}
              {links.map(
                (link, index) =>
                  (link.normalLink && (
                    <BurgerNormalLink
                      key={index}
                      onClick={toggle}
                      link={link}
                    />
                  )) ||
                  (link.dropDownLink && (
                    <BurgerDropDownLink
                      key={index}
                      link={link}
                      onClick={toggle}
                    />
                  )) ||
                  (link.buttonLink && (
                    <BurgerButtonLink
                      key={index}
                      onClick={toggle}
                      link={link}
                    />
                  ))
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
