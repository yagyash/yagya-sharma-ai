import { motion } from "framer-motion";
import heroVisual from "@/assets/hero-visual.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-foreground mb-6">
              I Build AI-Powered Systems, Visuals & Automation for Modern Businesses.
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-8 tracking-wide">
              Voice Agents · Revenue Automation · AI Visuals · Vibe-Coded Websites
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#work" className="px-6 py-3 border border-foreground text-foreground text-sm font-medium tracking-wide hover:bg-foreground hover:text-background transition-colors">
                See My Work
              </a>
              <a href="#contact" className="px-6 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition-opacity">
                Book a Free Call
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-success animate-blink" />
                Available for Projects
              </div>
              <p className="text-xs text-muted-foreground">Based in India 🇮🇳 · Working Globally</p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex justify-center md:justify-end">
            <img src={heroVisual} alt="AI automation dashboard mockup" className="w-full max-w-lg rounded-lg" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
