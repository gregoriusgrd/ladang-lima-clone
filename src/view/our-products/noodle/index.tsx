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

export default async function NoodleView() {
    const allProducts = await fetchProductService();

    const noodleProducts = allProducts.filter(
        (product) => product.fields.category === "noodle"
    )

    return(
        <main>
            <HeroSection />
            <IntroSection />
            <ProductSection products={noodleProducts} />
            <Footer />
        </main>
    )
}