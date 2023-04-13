"use client";

import React, { useState } from "react";
import { BlogCard } from "@modules/ui/components/BlogCard";
import CustomHtml from "@modules/ui/components/CustomHtml";
import { Categories } from "@/modules/ui/components/Categories";

const Page: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>();

  return (
    <div className="container mx-auto px-4 flex flex-col items-center space-y-10">
      <CustomHtml.H2 className="pt-12">Blog</CustomHtml.H2>
      <CustomHtml.P className="text-center">
        Articles and tutorials from Upstash and community.
      </CustomHtml.P>
      <div className="relative max-w-xl flex flex-wrap justify-center items-center gap-1">
        <Categories
          categories={["Nextjs", "Vercel", "Edge"]}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="w-full border border-gray-200" />
      <div className="flex flex-wrap justify-center gap-10">
        <BlogCard
          title={"Adding a View Counter to your Next.js Blog"}
          description={
            "Description de ma carte blog, si on clique dessus ça nous renvoie sur une page et tout"
          }
          date={new Date().toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
          categorie={"Nextjs"}
          selectedCategory={selectedCategory}
        />
        <BlogCard
          title={"Adding a View Counter to your Next.js Blog"}
          description={
            "Description de ma carte blog, si on clique dessus ça nous renvoie sur une page et tout"
          }
          date={new Date().toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
          categorie={"Vercel"}
          selectedCategory={selectedCategory}
        />
        <BlogCard
          title={
            "AI Powered Text Generator using Next.js, Replicate and Redis®"
          }
          description={
            "Description de ma carte blog, si on clique dessus ça nous renvoie sur une page et tout"
          }
          date={new Date().toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
          categorie={"Edge"}
          selectedCategory={selectedCategory}
        />
        <BlogCard
          title={"Serverless Event Sourcing and CQRS with Next.js and Upstash"}
          description={
            "Description de ma carte blog, si on clique dessus ça nous renvoie sur une page et tout"
          }
          date={new Date().toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
          categorie={"Edge"}
          selectedCategory={selectedCategory}
        />
        <BlogCard
          title={"Realtime analytics with Vercel Edge, Kafka and MongoDB Atlas"}
          description={
            "Description de ma carte blog, si on clique dessus ça nous renvoie sur une page et tout"
          }
          date={new Date().toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
          categorie={""}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
};

export default Page;
