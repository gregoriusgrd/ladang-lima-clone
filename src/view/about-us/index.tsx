import HeroSection from "./sections/01-hero";
import AboutSection from "./sections/02-about";
import CommitmentAndTeamSection from "./sections/03-commitment-and-team";

export default function AboutUsView() {
    return(
        <main>
            <HeroSection />
            <AboutSection />
            <CommitmentAndTeamSection />
        </main>
    )
}