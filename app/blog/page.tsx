"use client";

import React, { useState } from "react";
import CustomHtml from "@modules/ui/components/CustomHtml";
import { BlogCard } from "@modules/ui/components/BlogCard";
import { Categories } from "@modules/ui/components/Categories";
import {
  categoryList,
  categoryListArray,
} from "@modules/miscellaneous/categoriesList";

const data = [
  {
    blogTitle: "Blog",
    blogDescription: "Articles and tutorials from Upstash and community.",
    blogDate: new Date().toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    blogCategory: categoryList.CSS,
  },
  {
    blogTitle: "Blog",
    blogDescription: "Articles and tutorials from Upstash and community.",
    blogDate: new Date().toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    blogCategory: categoryList.CSS,
  },
  {
    blogTitle: "Blog",
    blogDescription: "Articles and tutorials from Upstash and community.",
    blogDate: new Date().toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    blogCategory: categoryList.JavaScript,
  },
  {
    blogTitle: "Blog",
    blogDescription: "Articles and tutorials from Upstash and community.",
    blogDate: new Date().toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    blogCategory: categoryList.NextJS,
  },
  {
    blogTitle: "Blog",
    blogDescription: "Articles and tutorials from Upstash and community.",
    blogDate: new Date().toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    blogCategory: categoryList.React,
  },
  {
    blogTitle: "Blog",
    blogDescription: "Articles and tutorials from Upstash and community.",
    blogDate: new Date().toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    blogCategory: categoryList.React,
  },
  {
    blogTitle: "Blog",
    blogDescription: "Articles and tutorials from Upstash and community.",
    blogDate: new Date().toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    blogCategory: categoryList.React,
  },
  {
    blogTitle: "Blog",
    blogDescription: "Articles and tutorials from Upstash and community.",
    blogDate: new Date().toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    blogCategory: categoryList.TypeScript,
  },
  {
    blogTitle: "Blog",
    blogDescription: "Articles and tutorials from Upstash and community.",
    blogDate: new Date().toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    blogCategory: categoryList.TypeScript,
  },
  {
    blogTitle: "Blog",
    blogDescription: "Articles and tutorials from Upstash and community.",
    blogDate: new Date().toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    blogCategory: categoryList.None,
  },
  {
    blogTitle: "Blog",
    blogDescription: "Articles and tutorials from Upstash and community.",
    blogDate: new Date().toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    blogCategory: categoryList.None,
  },
];

const Page: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tout");

  return (
    <div className="container mx-auto px-4 flex flex-col items-center space-y-10">
      <CustomHtml.H2 className="pt-12">Blog</CustomHtml.H2>
      <CustomHtml.P className="text-center">
        Articles and tutorials from Upstash and community.
      </CustomHtml.P>
      <div className="relative max-w-xl flex flex-wrap justify-center items-center gap-1">
        <Categories
          categories={categoryListArray}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="w-full border border-gray-200" />
      {/* Blog List */}
      <div className="flex flex-wrap justify-center gap-10">
        {data.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.blogTitle}
              description={blog.blogDescription}
              date={blog.blogDate}
              category={blog.blogCategory}
              selectedCategory={selectedCategory}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
