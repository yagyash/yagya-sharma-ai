import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const services = [
  {
    icon: "🤖",
    title: "AI Automation",
    desc: "Intelligent systems that run your business on autopilot.",
    subs: ["Revenue & Expense Tracker", "AI Voice Agents", "n8n Workflow Automation", "Booking Systems"],
  },
  {
    icon: "🎨",
    title: "AI Visuals",
    desc: "Stunning visuals generated and edited with AI precision.",
    subs: ["E-commerce Product Photo Editing", "YouTube Thumbnail Design", "AI Image Generation", "AI Video Generation"],
  },
  {
    icon: "🌐",
    title: "Web & Tech",
    desc: "Fast, beautiful websites built with AI-powered vibe coding.",
    subs: ["Landing Pages", "Business Websites", "One-Page Portfolios", "Vibe-Coded Custom Sites"],
  },
  {
    icon: "📊",
    title: "Business Intelligence",
    desc: "Data systems that give you clarity on every number.",
    subs: ["Revenue & Expense Tracking", "Monthly P&L Reports", "Personal Finance Tracker", "Business Performance Tracker"],
  },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader leftLabel="© SERVICES サービス" rightLabel="AI SOLUTIONS" number="02" />
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">What I Build.</h2>
        <p className="text-muted-foreground mb-12 md:mb-16 max-w-xl">End-to-end AI solutions across automation, visuals, voice, and web.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glow-card bg-card border border-border rounded-lg p-8 md:p-10">
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{s.desc}</p>
              <ul className="space-y-2">
                {s.subs.map((sub) => (
                  <li key={sub} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {sub}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
