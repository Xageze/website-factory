"use client";
import { LinkType } from "@modules/miscellaneous/type";
import clsx from "clsx";
import React, { useState } from "react";
import CustomHtml from "./CustomHtml";

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
  return (
    <div>
      <CustomHtml.H2 className="pb-20 text-4xl font-bold text-center">
        {title}
      </CustomHtml.H2>
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-8">
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "text-center bg-white rounded-lg shadow-sm",
                "hover:cursor-pointer hover:scale-105 transition-all duration-300",
                "w-full max-w-xs flex flex-col justify-between"
              )}
            >
              <div>
                <CustomHtml.H4
                  className={clsx(
                    "text-3xl sm:text-4xl py-8 font-bold border-b-4"
                  )}
                >
                  {card.plan}
                </CustomHtml.H4>
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
                <CustomHtml.H3 className="pt-12">{card.price}€</CustomHtml.H3>
                <CustomHtml.Button className="my-6 mx-4 w-3/4">
                  {card.buttonLink.text}
                </CustomHtml.Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
