import HeroSection from "./sections/01-hero";
import IntroSection from "./sections/02-intro";
import KeyFeaturesSection from "./sections/03-key-features";
import VideoSection from "./sections/04-video";

export default function HomeView() {
  return (
    <section>
      <HeroSection />
      <IntroSection />
      <KeyFeaturesSection />
      <VideoSection />
    </section>
  );
}
