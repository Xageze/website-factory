"use client";
import { LinkType } from "@/modules/miscellaneous/type";
import clsx from "clsx";
import React, { useState } from "react";

type CardType = {
  plan: string;
  things: Array<string>;
  price: number;
  buttonLink: LinkType;
};

type Props = {
  cards: Array<CardType>;
};

export const Pricing: React.FC<Props> = ({ cards }) => {
  const [activeCard, setActiveCard] = useState<number>();

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {cards.map((card, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setActiveCard(index);
            }}
            className="min-w-[320px] text-center border border-gray-300 bg-white hover:cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <h1
              className={clsx(
                "text-3xl sm:text-4xl py-8 font-bold border-b-4",
                activeCard === index && "border-blue-500"
              )}
            >
              {card.plan}
            </h1>
            <ul>
              {card.things.map((thing, index) => {
                return (
                  <li key={index} className="py-4 border-b border-b-gray-300">
                    {thing}
                  </li>
                );
              })}
            </ul>
            <h2 className="pt-12 text-2xl font-bold">{card.price}€</h2>
            <button className="px-5 py-3 my-6 text-white font-semibold bg-blue-500 hover:bg-blue-700 rounded-lg">
              {card.buttonLink.text}
            </button>
          </div>
        );
      })}
    </div>
  );
};
