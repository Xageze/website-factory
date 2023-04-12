"use client";

import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { H2, H4, P } from "./CustomHtml";
import clsx from "clsx";
import { Cross } from "@/modules/svgs/components/Cross";
import { UnionIcon } from "@/modules/svgs/components/UnionIcon";

type Props = {
  title: string;
  text: string;
  faqList: Array<{
    question: string;
    answer: string;
  }>;
};

export const Faq: React.FC<Props> = ({ title, text, faqList }) => {
  return (
    <div className="flex flex-col sm:flex-row text-center sm:text-left">
      <div className="flex-[2] space-y-5 pb-12">
        <H2>{title}</H2>
        <P>{text}</P>
      </div>
      <div className="flex-[3] space-y-6">
        {faqList.map((faq, index) => {
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full flex items-center justify-between p-5">
                      <h4 className="text-left text-xl font-bold pr-4">
                        {faq.question}
                      </h4>
                      <div
                        className={clsx(
                          "h-8 w-8 aspect-square rounded-lg transition flex items-center justify-center",
                          open
                            ? "bg-blue-500 text-white rotate-180"
                            : "bg-gray-200 text-black"
                        )}
                      >
                        <UnionIcon />
                      </div>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-200 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-100 ease-out"
                      leaveFrom="transform opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="p-5 pt-0 text-left">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          );
        })}
      </div>
    </div>
  );
};
