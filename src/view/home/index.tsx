import HeroSection from "./sections/01-hero";
import IntroSection from "./sections/02-intro";
import KeyFeaturesSection from "./sections/03-key-features";

export default function HomeView() {
  return (
    <section>
      <HeroSection />
      <IntroSection />
      <KeyFeaturesSection />
    </section>
  );
}
