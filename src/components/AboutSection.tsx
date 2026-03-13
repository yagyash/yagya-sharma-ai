import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import profilePhoto from "@/assets/profile-photo.png";

const tools = ["n8n", "Claude AI", "ChatGPT", "Google Gemini", "Midjourney", "RunwayML", "Higgsfield AI", "Kling AI", "Bolt.new", "Make.com", "ElevenLabs", "Cursor", "Framer", "Canva"];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader leftLabel="© PERSONAL PROFILE プロフィール" rightLabel="VISUAL THINKER" number="04" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={profilePhoto} alt="Yagya Sharma" className="w-full rounded-lg aspect-[4/5] object-cover" loading="lazy" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              AI Builder.<br />Operator.<br />Problem Solver.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
              I'm Yagya Sharma, an AI solutions provider helping businesses and creators leverage artificial intelligence to automate operations, create stunning visuals, and build modern digital experiences. I combine technical tools with creative thinking to deliver results that actually move the needle.
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed">
              From building revenue tracking systems and AI voice agents to editing product photos and vibe-coding websites — I handle the full spectrum of AI-powered services so you don't have to figure it out alone.
            </p>

            <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Tools I Use</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="px-3 py-1.5 text-xs border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
