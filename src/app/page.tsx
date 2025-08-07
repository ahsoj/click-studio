import AboutSection from "@/sections/about-section";
import FAQSection from "@/sections/faqs-section";
import GetQuoteSection from "@/sections/get-quote-section";
import HeroSection from "@/sections/hero-section";
import ProcessSection from "@/sections/process-section";
import ServiceSection from "@/sections/services-section";
import WorkSection from "@/sections/smaple-works-section";
import WhoItsForSection from "@/sections/whoitsfor-section";

export default function Index() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-white">
      <HeroSection />
      <AboutSection />
      <WhoItsForSection />
      <ServiceSection />
      <ProcessSection />
      <WorkSection />
      <FAQSection />
      <GetQuoteSection />
    </div>
  );
}
