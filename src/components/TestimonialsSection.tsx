import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const testimonials = [
  { quote: "Yagya built our revenue tracker and it completely changed how we manage finances. Delivered fast and explained everything clearly.", name: "Rahul M.", role: "Small Business Owner" },
  { quote: "The product photo edits were incredible. Our conversion rate improved noticeably after switching to AI-edited images.", name: "Priya K.", role: "E-commerce Store Owner" },
  { quote: "Professional, responsive, and the AI voice agent demo blew us away. Highly recommend.", name: "Arjun S.", role: "Resort Manager" },
  { quote: "Got our website built in 2 days. Looks stunning and works perfectly on mobile.", name: "Neha T.", role: "Content Creator" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader leftLabel="© TESTIMONIALS レビュー" rightLabel="REAL FEEDBACK" number="06" />

        <div className="overflow-hidden mb-6">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground whitespace-nowrap">Testimonials© —</h2>
        </div>
        <p className="text-muted-foreground mb-12 md:mb-16">What clients and collaborators say.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`bg-card border border-border rounded-lg p-8 md:p-10 glow-card ${i % 2 === 1 ? "md:mt-8" : ""}`}
            >
              <p className="text-foreground text-sm md:text-base leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-heading font-bold text-sm text-muted-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
