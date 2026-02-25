import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import ServicesSection from "@/components/ServicesSection";
import FeaturedWork from "@/components/FeaturedWork";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <MarqueeTicker />
      <ServicesSection />
      <MarqueeTicker />
      <FeaturedWork />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
