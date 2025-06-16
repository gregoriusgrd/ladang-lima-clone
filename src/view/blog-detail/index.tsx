import { IBlog } from "@/interface/blog.interface";
import BlogContent from "./sections/content";

interface BlogDetailViewProps {
  blog: IBlog;
}

export default function BlogDetailView({ blog }: BlogDetailViewProps) {
  return (
    <main className="px-6 py-20 max-w-3xl mx-auto">
      <BlogContent blog={blog} />
    </main>
  );
}
