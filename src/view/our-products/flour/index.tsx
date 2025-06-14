import { fetchProductService } from "@/service/product.service";
import HeroSection from "./sections/hero";
import ProductSection from "./sections/product";
import { IProductLadangLima } from "@/interface/product.interface";
/* 
interface BlogSectionProps {
  blogs: IBlog[];
}
*/

export default async function FlourView() {
    const products = await fetchProductService();

    return(
        <main>
            <HeroSection />
            <ProductSection products={products} />
        </main>
    )
}