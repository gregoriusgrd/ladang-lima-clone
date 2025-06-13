import HeroSection from "./sections/01-hero";
import IntroSection from "./sections/02-intro";
import KeyFeaturesSection from "./sections/03-key-features";
import VideoSection from "./sections/04-video";
import ProductSwiperSection from "./sections/05-product-swiper";

export default function HomeView() {
  return (
    <section>
      <HeroSection />
      <IntroSection />
      <KeyFeaturesSection />
      <VideoSection />
      <ProductSwiperSection />
    </section>
  );
}
