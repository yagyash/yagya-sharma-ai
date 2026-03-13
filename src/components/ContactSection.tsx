import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader leftLabel="© CONTACT コンタクト" rightLabel="LET'S TALK" number="08" />

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <h2 className="font-heading text-4xl md:text-6xl lg:text-8xl font-bold text-foreground mb-4">Let's Build Something.</h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">Reach out directly — no gatekeepers, no agencies. Just Yagya.</p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="tel:+918553071171" className="px-8 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition-opacity">
              Book a Call →
            </a>
            <a href="mailto:yagya.sharma14@gmail.com" className="px-8 py-3 border border-foreground text-foreground text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors">
              Send a Message
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 mb-4">
            <a href="mailto:yagya.sharma14@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">yagya.sharma14@gmail.com</a>
            <a href="tel:+918553071171" className="text-sm text-muted-foreground hover:text-foreground transition-colors">+91 85530 71171</a>
          </div>
          <div className="flex justify-center gap-6">
            {[
              { name: "LinkedIn", url: "https://linkedin.com/in/yagya-sharma-a860798a" },
              { name: "Instagram", url: "https://instagram.com/yagyasharma" },
            ].map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">
                {s.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
