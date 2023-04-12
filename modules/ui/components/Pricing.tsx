"use client";
import { LinkType } from "@modules/miscellaneous/type";
import clsx from "clsx";
import React, { useState } from "react";
import Text from "./CustomHtml";

type CardType = {
  plan: string;
  things: Array<string>;
  price: number;
  buttonLink: LinkType;
};

type Props = {
  title: string;
  cards: Array<CardType>;
};

export const Pricing: React.FC<Props> = ({ title, cards }) => {
  const [activeCard, setActiveCard] = useState<number>();

  return (
    <div>
      <Text.H2 className="pb-20 text-4xl font-bold text-center">
        {title}
      </Text.H2>
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-8">
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setActiveCard(index);
              }}
              className={clsx(
                "text-center border border-gray-300 bg-white",
                "hover:cursor-pointer hover:scale-105 transition-all duration-300",
                "w-full max-w-xs flex flex-col justify-between"
              )}
            >
              <div>
                <Text.H4
                  className={clsx(
                    "text-3xl sm:text-4xl py-8 font-bold border-b-4",
                    activeCard === index && "border-blue-500"
                  )}
                >
                  {card.plan}
                </Text.H4>
                <ul>
                  {card.things.map((thing, index) => {
                    return (
                      <li
                        key={index}
                        className="py-4 border-b border-b-gray-300"
                      >
                        {thing}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <Text.H3 className="pt-12">{card.price}€</Text.H3>
                <Text.Button className="my-6 mx-4 w-3/4">
                  {card.buttonLink.text}
                </Text.Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
