import { fetchProductService } from "@/service/product.service";
import HeroSection from "./sections/hero";
import ProductSection from "./sections/product";
import Footer from "@/components/footer";
import IntroSection from "./sections/intro";
/* 
interface BlogSectionProps {
  blogs: IBlog[];
}
*/

export default async function PastaView() {
    const allProducts = await fetchProductService();

    const pastaProducts = allProducts.filter(
        (product) => product.fields.category === "pasta"
    )

    return(
        <main>
            <HeroSection />
            <IntroSection />
            <ProductSection products={pastaProducts} />
            <Footer />
        </main>
    )
}