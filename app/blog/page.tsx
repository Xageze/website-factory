import React from "react";
import { BlogCard } from "@/modules/ui/components/BlogCard";

const page: React.FC = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center space-y-10">
      <h2 className="pt-12 text-3xl sm:text-4xl font-bold">Blog</h2>
      <p>Les derniers blogs</p>
      <div className="w-full border border-gray-200" />
      <div className="flex flex-wrap justify-center gap-10">
        <BlogCard
          title={"Titre 1"}
          description={
            "Description de ma carte blog, si on clique dessus ça nous renvoie sur une page et tout"
          }
          date={new Date().toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        />
        <BlogCard
          title={"Titre 2"}
          description={
            "Description de ma carte blog, si on clique dessus ça nous renvoie sur une page et tout"
          }
          date={new Date().toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        />
        <BlogCard
          title={"Titre 3"}
          description={
            "Description de ma carte blog, si on clique dessus ça nous renvoie sur une page et tout"
          }
          date={new Date().toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        />
        <BlogCard
          title={"Titre 4 Hehe"}
          description={
            "Description de ma carte blog, si on clique dessus ça nous renvoie sur une page et tout"
          }
          date={new Date().toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        />
        <BlogCard
          title={"Titre 5"}
          description={
            "Description de ma carte blog, si on clique dessus ça nous renvoie sur une page et tout"
          }
          date={new Date().toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        />
      </div>
    </div>
  );
};

export default page;
