import { notFound } from "next/navigation";
import { fetchBlogBySlug } from "@/service/blog.service";

export default async function BlogDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const blog = await fetchBlogBySlug(slug);
  if (!blog) return notFound();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{blog.fields.blogTitle}</h1>
      {blog.fields.blogImage?.fields?.file?.url && (
        <img
          src={blog.fields.blogImage.fields.file.url}
          alt="Blog Image"
          className="mb-4 max-w-full"
        />
      )}
      <p>{blog.fields.blogDescription}</p>
    </div>
  );
}
