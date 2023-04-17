import React from "react";
import CustomHtml from "./CustomHtml";
import clsx from "clsx";
import { UnionIcon } from "@modules/svgs/components/UnionIcon";
import { Disclosure, Transition } from "@headlessui/react";
import { CategoryType } from "@modules/miscellaneous/type";

type Props = {
  question: string;
  answer: string;
  category: CategoryType;
  selectedCategory?: string | null;
};

export const FaqCard: React.FC<Props> = ({
  answer,
  question,
  category,
  selectedCategory,
}) => {
  return (
    <>
      {(selectedCategory === "Tout" || selectedCategory === category.text) && (
        <div id={category.text} className="bg-gray-100 h-min rounded-xl">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full p-5 flex flex-col-reverse lg:flex-row">
                  <CustomHtml.H4 className="w-full text-left text-xl font-bold pr-4">
                    {question}
                  </CustomHtml.H4>
                  <div className="w-full lg:w-auto mb-5 lg:mb-0 flex items-center justify-between lg:justify-end space-x-4">
                    {category.text !== "None" ? (
                      <span
                        className={clsx(
                          "px-5 py-1 font-semibold rounded-lg",
                          category.color
                        )}
                      >
                        {category.text}
                      </span>
                    ) : (
                      <div />
                    )}
                    <div
                      className={clsx(
                        "h-8 w-8 aspect-square rounded-lg transition flex items-center justify-center",
                        open
                          ? "bg-gray-500 text-white rotate-180"
                          : "bg-gray-300 text-black"
                      )}
                    >
                      <UnionIcon />
                    </div>
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
                    <CustomHtml.P>{answer}</CustomHtml.P>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      )}
    </>
  );
};
