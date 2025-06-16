"use client";

import { useState } from "react";
import { IBlog } from "@/interface/blog.interface";
import BlogCard from "./blog-card";

interface BlogSectionProps {
  blogs: IBlog[];
}

export default function BlogSection({ blogs }: BlogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const rawCategories = blogs.map((b) => b.fields.blogCategory).filter(Boolean);
const uniqueCategories = Array.from(new Set(rawCategories));
const categories = ["All", ...uniqueCategories];

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((b) => b.fields.blogCategory === selectedCategory);

  return (
    <section className="bg-white px-6 py-20">
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 border rounded-full transition cursor-pointer ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-white text-black border-black"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.sys.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
