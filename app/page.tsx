import HeroSection from "@/components/HeroSection/HeroSection";
import FullWidthLine from "@/components/FullWidthLine/FullWidthLine";
import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FullWidthLine />
      <AboutSection />
      <FullWidthLine />
      <ContactSection />
    </main>
  );
}
