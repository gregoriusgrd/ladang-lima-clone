"use client";

import { IProductLadangLima } from "@/interface/product.interface";
import Image from "next/image";

interface ProductCardProps {
  product: IProductLadangLima;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { productName, productDescription, productImage, features } = product.fields;

  console.log("Features dari produk:", features);

  return (
    <article className="flex flex-col gap-8 lg:flex-row items-start border-b pb-10 mb-10">
      {/* Left */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{productName}</h2>
        <p className="text-gray-700 mb-6">{productDescription}</p>

        <div className="flex flex-wrap gap-6">
          {features?.map((feature) => (
            <div key={feature.sys.id} className="flex flex-col items-center w-24">
              {feature.fields.featureImage?.fields?.file?.url && (
                <Image
                  src={`https:${feature.fields.featureImage.fields.file.url}`}
                  alt={feature.fields.featureName}
                  width={40}
                  height={40}
                  className="mb-2"
                />
              )}
              <p className="text-sm text-center font-medium text-gray-800">
                {feature.fields.featureName}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/3 flex justify-center">
        {productImage?.fields?.file?.url && (
          <Image
            src={`https:${productImage.fields.file.url}`}
            alt={productName}
            width={300}
            height={300}
            className="object-contain"
          />
        )}
      </div>
    </article>
  );
}
