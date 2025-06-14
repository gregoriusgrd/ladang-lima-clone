import HeroSection from "./sections/01-hero";
import AboutSection from "./sections/02-about";
import CommitmentAndTeamSection from "./sections/03-commitment-and-team";
import StatsSection from "./sections/04-stats";
import FAQSection from "./sections/05-faq";
import PartnerSection from "./sections/06-partner";
import Footer from "@/components/footer";

export default function AboutUsView() {
    return(
        <main>
            <HeroSection />
            <AboutSection />
            <CommitmentAndTeamSection />
            <StatsSection />
            <FAQSection />
            <PartnerSection />
            <Footer />
        </main>
    )
}