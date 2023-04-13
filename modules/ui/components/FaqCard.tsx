import React from "react";
import CustomHtml from "./CustomHtml";
import clsx from "clsx";
import { UnionIcon } from "@/modules/svgs/components/UnionIcon";
import { Disclosure, Transition } from "@headlessui/react";

type Props = {
  question: string;
  answer: string;
  category: string | undefined;
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
      {(selectedCategory === undefined || selectedCategory === category) && (
        <div id={category} className="bg-gray-100 h-min rounded-xl">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full flex items-center justify-between p-5">
                  <CustomHtml.H4 className="text-left text-xl font-bold pr-4">
                    {question}
                  </CustomHtml.H4>
                  <div
                    className={clsx(
                      "h-8 w-8 aspect-square rounded-lg transition flex items-center justify-center",
                      open
                        ? "bg-blue-500 text-white rotate-180"
                        : "bg-gray-300 text-black"
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
