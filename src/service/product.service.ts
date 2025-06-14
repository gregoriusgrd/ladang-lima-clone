import axios from "axios";
import { IProductLadangLima } from "@/interface/product.interface";

export async function fetchProductService(): Promise<IProductLadangLima[]> {
  try {
    const url = `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}/entries`;

    const { data } = await axios.get(url, {
      params: {
        access_token: process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY,
        content_type: "productLadangLima", // Contentful content type ID 
        include: 2, // 2 untuk features & feature image
      },
    });

    const assetsMap: Record<string, any> = {};
    data.includes?.Asset?.forEach((asset: any) => {
      assetsMap[asset.sys.id] = asset;
    });

    const entriesMap: Record<string, any> = {};
    data.includes?.Entry?.forEach((entry: any) => {
      entriesMap[entry.sys.id] = entry;
    });

    const products = data.items.map((item: any) => {
      // Map productImage
      const productImageRef = item.fields.productImage;
      if (productImageRef?.sys?.id && assetsMap[productImageRef.sys.id]) {
        item.fields.productImage = assetsMap[productImageRef.sys.id];
      }

      // Map features & feature image
      
      const featureRefs = item.fields.features || [];
      item.fields.features = featureRefs.map((ref: any) => {
        const feature = entriesMap[ref.sys.id];
        if (feature?.fields?.featureImage?.sys?.id && assetsMap[feature.fields.featureImage.sys.id]) {
          feature.fields.featureImage = assetsMap[feature.fields.featureImage.sys.id];
        }
        return feature;
      });

      return item;
    });

    return products;
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return [];
  }
}
