import { fetchBlogService } from "@/service/blog.service";
import BlogSection from "./sections/blog";
import { IBlog } from "@/interface/blog.interface";

export default async function BlogListView() {
  const blogs: IBlog[] = await fetchBlogService();

  return (
    <main>
      <BlogSection blogs={blogs} />
    </main>
  );
}
