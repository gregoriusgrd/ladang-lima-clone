import HeroSection from "./sections/01-hero";
import IntroSection from "./sections/02-intro";
import KeyFeaturesSection from "./sections/03-key-features";
import VideoSection from "./sections/04-video";
import ProductSwiperSection from "./sections/05-product-swiper";
import ProductBenefitsSection from "./sections/06-product-benefits";
import FactorySection from "./sections/07-factory-banner";
import StatsSection from "./sections/08-stats";
import Footer from "@/components/footer";

export default function HomeView() {
  return (
    <section>
      <HeroSection />
      <IntroSection />
      <KeyFeaturesSection />
      <VideoSection />
      <ProductSwiperSection />
      <ProductBenefitsSection />
      <FactorySection />
      <StatsSection />
      <Footer />
    </section>
  );
}
