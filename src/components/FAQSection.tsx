import SectionHeader from "./SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What services do you offer?", a: "I offer AI automation, AI visual generation and editing, vibe-coded website development, voice agent building, and business intelligence solutions like revenue tracking and P&L reporting." },
  { q: "How long does a typical project take?", a: "Most projects are delivered within 3–7 days depending on complexity. Simple builds like a landing page can be done in 1–2 days, while full automation systems may take a week or more." },
  { q: "Do you work with international clients?", a: "Absolutely. I'm based in India and work with clients globally. Communication is handled via email, WhatsApp, or video calls in your timezone." },
  { q: "Can I start with a small budget project?", a: "Yes! I offer flexible pricing and can start with a small scope project to build trust. Let's discuss your needs and find a solution that fits." },
  { q: "What AI tools and platforms do you use?", a: "I work with n8n, Claude AI, ChatGPT, Midjourney, RunwayML, ElevenLabs, Bolt.new, Make.com, Cursor, Framer, and more depending on the project requirements." },
  { q: "How do I book a call or get started?", a: "Simply click the 'Book a Call' button anywhere on this page, or send me a message through the contact section. I'll respond within 24 hours." },
];

const FAQSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader leftLabel="© HELP CENTER ヘルプ" rightLabel="CLARIFICATIONS" number="07" />
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 md:mb-16">
          Clarifying Deliverables<br />Before They Begin.
        </h2>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-sm md:text-base font-medium text-foreground hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
