import HeroSection from "./sections/hero";
import Footer from "@/components/footer";
import SendMessageSection from "./sections/send-message";
/* 
interface BlogSectionProps {
  blogs: IBlog[];
}
*/

export default async function ContactUsView() {
    return(
        <main>
            <HeroSection />
            <SendMessageSection />
            <Footer />
        </main>
    )
}