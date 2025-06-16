"use client";

import { IBlog } from "@/interface/blog.interface";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  blog: IBlog;
}

export default function BlogCard({ blog }: BlogCardProps) {

      console.log("Blog data:", blog);
  const {
    blogTitle,
    blogDate,
    blogCategory,
    blogAuthor,
    blogSummary,
    blogImage,
    slug,
  } = blog.fields;

  return (
    <article className="p-4 border rounded shadow-sm bg-white flex flex-col h-full">
      {blogImage?.fields?.file?.url && (
        <Image
          src={`https:${blogImage.fields.file.url}`}
          alt={blogTitle}
          width={400}
          height={200}
          className="w-full h-40 object-cover mb-4 rounded"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{blogTitle}</h3>
      <p className="text-sm text-gray-500">{blogDate} · {blogCategory}</p>
<p className="text-sm text-gray-700 my-2">{blogSummary}</p>
      <p className="text-sm font-medium text-gray-800 mb-4">By {blogAuthor}</p>
      <Link href={`/blog-detail/${slug}`} className="mt-auto text-blue-600 font-medium hover:underline">
        Read more →
      </Link>
    </article>
  );
}
