import { fetchProductService } from "@/service/product.service";
import HeroSection from "./sections/hero";
import ProductSection from "./sections/product";
import { IProductLadangLima } from "@/interface/product.interface";
import Footer from "@/components/footer";
import IntroSection from "./sections/intro";
/* 
interface BlogSectionProps {
  blogs: IBlog[];
}
*/

export default async function FlourView() {
    const allProducts = await fetchProductService();

    const flourProducts = allProducts.filter(
        (product) => product.fields.category === "flour"
    )

    return(
        <main>
            <HeroSection />
            <IntroSection />
            <ProductSection products={flourProducts} />
            <Footer />
        </main>
    )
}