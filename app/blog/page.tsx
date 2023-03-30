import React from "react";
import fs from "fs";
import Link from "next/link";

const getBlogs = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
};

const page: React.FC = () => {
  const blogsMetadata = getBlogs();
  const blogsPreviews = blogsMetadata.map((slug) => (
    <div key={slug}>
      <Link href={`/blog/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  ));

  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold">Blog</h2>
      <p>Les derniers blogs</p>
      <div>{blogsPreviews}</div>
    </div>
  );
};

export default page;
