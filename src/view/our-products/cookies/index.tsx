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

export default async function CookiesView() {
    const allProducts = await fetchProductService();

    const cookiesProducts = allProducts.filter(
        (product) => product.fields.category === "cookies"
    )

    return(
        <main>
            <HeroSection />
            <IntroSection />
            <ProductSection products={cookiesProducts} />
            <Footer />
        </main>
    )
}