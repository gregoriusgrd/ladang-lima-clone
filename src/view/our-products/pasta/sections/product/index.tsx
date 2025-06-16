import { IProductLadangLima } from "@/interface/product.interface";
import ProductCard from "./product-card";


interface ProductSectionProps {
  products: IProductLadangLima[];
}

export default function ProductSection({ products }: ProductSectionProps) {
  return (
    <section className="bg-white px-6 py-20">
      {products.map((product) => (
        <ProductCard key={product.sys.id} product={product} />
      ))}
    </section>
  );
}
