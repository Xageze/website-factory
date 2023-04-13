"use client";

import React from "react";
import CustomHtml from "@/modules/ui/components/CustomHtml";
import { Header } from "@/modules/ui/components/Header";
import { UnionIcon } from "@/modules/svgs/components/UnionIcon";
import { Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";

const data = {
  pageTitle: "FAQ",
  faqs: [
    {
      question: "Comment puis-je contacter le support client?",
      answer:
        "Vous pouvez nous contacter en utilisant le formulaire de contact sur notre site Web ou en nous envoyant un e-mail à l'adresse",
    },
    {
      question: "Quels sont les modes de paiement acceptés?",
      answer:
        "Nous acceptons les paiements par carte de crédit (Visa, Mastercard, American Express), ainsi que les paiements PayPal.",
    },
    {
      question: "Quelle est votre politique de retour?",
      answer: `Nous acceptons les retours jusqu'à 30 jours après l'achat, sous réserve que l'article soit dans son état d'origine et accompagné du reçu d'achat.`,
    },
  ],
};

const page: React.FC = () => {
  return (
    <div
      className="container mx-auto px-3 sm:px-6 py-12 space-y-8"
      style={{ minHeight: `calc(100vh - ${Header.height}px)` }}
    >
      <CustomHtml.H1 className="tracking-wider font-bold text-center mb-20">
        {data.pageTitle}
      </CustomHtml.H1>

      {/* FAQs List */}
      {data.faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full flex items-center justify-between p-5">
                  <CustomHtml.H4 className="text-left text-xl font-bold pr-4">
                    {faq.question}
                  </CustomHtml.H4>
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
                    <CustomHtml.P>{faq.answer}</CustomHtml.P>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
};
export default page;
