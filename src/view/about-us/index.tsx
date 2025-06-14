import HeroSection from "./sections/01-hero";
import AboutSection from "./sections/02-about";
import CommitmentAndTeamSection from "./sections/03-commitment-and-team";
import StatsSection from "./sections/04-stats";

export default function AboutUsView() {
    return(
        <main>
            <HeroSection />
            <AboutSection />
            <CommitmentAndTeamSection />
            <StatsSection />
        </main>
    )
}