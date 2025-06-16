import { IBlog } from "@/interface/blog.interface";

export default function BlogContent({ blog }: { blog: IBlog }) {
  return (
    <article>
      <p>Title: {blog.fields.blogTitle}</p>
    </article>
  );
}