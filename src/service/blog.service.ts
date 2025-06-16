import axios from "axios";
import { IBlog } from "@/interface/blog.interface";

export async function fetchBlogService(): Promise<IBlog[]> {
  try {
    const url = `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}/entries`;

    const { data } = await axios.get(url, {
      params: {
        access_token: process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY,
        content_type: "blogLadangLima",
        include: 1,
      },
    });

    const assetsMap: Record<string, any> = {};
    data.includes?.Asset?.forEach((asset: any) => {
      assetsMap[asset.sys.id] = asset;
    });

    const blogsWithImages = data.items.map((item: any) => {
      const thumbnailRef = item.fields.blogImage;
      if (thumbnailRef?.sys?.id && assetsMap[thumbnailRef.sys.id]) {
        item.fields.blogImage = assetsMap[thumbnailRef.sys.id];
      }

      return item;
    });

    return blogsWithImages;
  } catch (err) {
    console.error("Failed to fetch blog posts:", err);
    return [];
  }
}

export async function fetchBlogBySlug(slug: string): Promise<IBlog | null> {
  try {
    const url = `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}/entries`;

    const { data } = await axios.get(url, {
      params: {
        access_token: process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY,
        content_type: "blogLadangLima",
        "fields.slug": slug,
        include: 1,
      },
    });

     console.log("Blog data result:", data);

    const item = data.items[0];
    if (!item) return null;

    const assetsMap: Record<string, any> = {};
    data.includes?.Asset?.forEach((asset: any) => {
      assetsMap[asset.sys.id] = asset;
    });

    const imageRef = item.fields.blogImage;
    if (imageRef?.sys?.id && assetsMap[imageRef.sys.id]) {
      item.fields.blogImage = assetsMap[imageRef.sys.id];
    }

    return item;
  } catch (err) {
    console.error("Failed to fetch blog by slug", err);
    return null;
  }
}

