import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const steps = [
  { num: "01", title: "Discovery", desc: "We start with a free 15-minute call to understand your business, goals, and what you need built." },
  { num: "02", title: "Proposal", desc: "I send a clear scope of work with timeline and cost. No hidden fees, no surprises." },
  { num: "03", title: "Build", desc: "I get to work using the best AI tools available. You get progress updates throughout." },
  { num: "04", title: "Deliver & Support", desc: "Final delivery with a full walkthrough. Revisions included. Ongoing support available." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader leftLabel="© PROCESS プロセス" rightLabel="HOW IT WORKS" number="05" />
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">How It Works.</h2>
        <p className="text-muted-foreground mb-12 md:mb-16 max-w-xl">Simple, clear, and collaborative from start to finish.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-border" />
          
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="bg-card border border-border rounded-lg p-6 md:p-8 glow-card h-full">
                <span className="font-heading text-3xl md:text-4xl font-bold text-primary/30 mb-4 block">{s.num}</span>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition-opacity">
            Start with a Free Call →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
