"use client";

import React, { useState } from "react";
import CustomHtml from "@modules/ui/components/CustomHtml";
import { Header } from "@modules/ui/components/Header";
import { Categories } from "@modules/ui/components/Categories";
import { FaqCard } from "@/modules/ui/components/FaqCard";

const data = {
  pageTitle: "FAQ",
  faqs: [
    {
      question: "Comment puis-je contacter le support client?",
      answer:
        "Vous pouvez nous contacter en utilisant le formulaire de contact sur notre site Web ou en nous envoyant un e-mail à l'adresse",
      category: "Nextjs",
    },
    {
      question: "Quels sont les modes de paiement acceptés?",
      answer:
        "Nous acceptons les paiements par carte de crédit (Visa, Mastercard, American Express), ainsi que les paiements PayPal.",
      category: "Vercel",
    },
    {
      question: "Quelle est votre politique de retour?",
      answer: `Nous acceptons les retours jusqu'à 30 jours après l'achat, sous réserve que l'article soit dans son état d'origine et accompagné du reçu d'achat.`,
      category: "Edge",
    },
    {
      question: "Quelle est votre politique de confidentialité?",
      answer: `Nous ne vendons pas vos informations personnelles à des tiers.`,
      category: "Edge",
    },
    {
      question: "Quelle est votre politique de livraison?",
      answer: `Nous livrons dans le monde entier.`,
      category: undefined,
    },
  ],
};

const Page: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>();

  return (
    <div
      className="container mx-auto px-3 sm:px-6 py-12 flex flex-col items-center space-y-10"
      style={{ minHeight: `calc(100vh - ${Header.height}px)` }}
    >
      <CustomHtml.H2 className="tracking-wider font-bold text-center">
        {data.pageTitle}
      </CustomHtml.H2>

      <div className="relative max-w-xl flex flex-wrap justify-center items-center gap-1">
        <Categories
          categories={["Nextjs", "Vercel", "Edge"]}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {/* FAQs List */}
      <div className="w-full grid sm:grid-cols-2 gap-8">
        {data.faqs.map((faq, index) => (
          <FaqCard
            key={index}
            question={faq.question}
            answer={faq.answer}
            category={faq.category}
            selectedCategory={selectedCategory}
          />
        ))}
      </div>
    </div>
  );
};
export default Page;
