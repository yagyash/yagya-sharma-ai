import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader leftLabel="© CONTACT コンタクト" rightLabel="LET'S TALK" number="08" />

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <h2 className="font-heading text-4xl md:text-6xl lg:text-8xl font-bold text-foreground mb-4">Let's Build Something.</h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">Book a free 15-minute discovery call or send a message directly.</p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="#" className="px-8 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition-opacity">
              Book a Call →
            </a>
            <a href="#" className="px-8 py-3 border border-foreground text-foreground text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors">
              Send a Message
            </a>
          </div>

          <p className="text-sm text-muted-foreground mb-4">hello@yagyasharma.com</p>
          <div className="flex justify-center gap-6">
            {["LinkedIn", "Instagram", "Twitter"].map((s) => (
              <a key={s} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">
                {s}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
