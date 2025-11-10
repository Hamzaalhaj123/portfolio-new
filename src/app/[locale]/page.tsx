import { About } from "@/components/about/About";
import { ContactForm } from "@/components/contactMe/ContactMe";
import { CTASection } from "@/components/CTASection/CTASection";
import Experience from "@/components/experience/Experience";
import { Footer } from "@/components/footer/Footer";
import MdNavigation from "@/components/header/MdNavigation";
import Hero from "@/components/hero/Hero";
import { Timeline } from "@/components/timeline/Timeline";

export default function Home() {
  return (
    <main>
      <Hero />

      <Experience />
      <About />
      <Timeline />
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  );
}
