import { fetchBlogService } from "@/service/blog.service";
import BlogSection from "./sections/blog";
import { IBlog } from "@/interface/blog.interface";
import Footer from "@/components/footer";
import HeroSection from "./sections/hero";

export default async function BlogListView() {
  const blogs: IBlog[] = await fetchBlogService();

  return (
    <main>
      <HeroSection />
      <BlogSection blogs={blogs} />
      <Footer />
    </main>
  );
}
