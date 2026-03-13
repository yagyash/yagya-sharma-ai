import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import workDashboard from "@/assets/work-dashboard.png";
import workEcomEdit from "@/assets/work-ecom-edit.png";
import workBookings from "@/assets/work-bookings.png";
import workExpenses from "@/assets/work-expenses.png";
import workLandingPage from "@/assets/work-landing-page.png";

const projects = [
  { name: "Business Revenue Dashboard", cat: "AI Automation", num: "01", img: workDashboard },
  { name: "E-com Product Photo Edit", cat: "AI Visuals", num: "02", img: workEcomEdit },
  { name: "AI Voice Booking Agent", cat: "Voice Agents", num: "03", img: workBookings },
  { name: "YouTube Thumbnail Pack", cat: "AI Visuals", num: "04", img: workEcomEdit },
  { name: "Personal Expense Tracker", cat: "Business Intelligence", num: "05", img: workExpenses },
  { name: "Vibe-Coded Landing Page", cat: "Web & Tech", num: "06", img: workLandingPage },
];

const FeaturedWork = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader leftLabel="© FEATURED WORK プロジェクト" rightLabel="CREATIVE DEVELOPMENT" number="03" />
        
        <div className="overflow-hidden mb-6">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground whitespace-nowrap">Featured Works©</h2>
        </div>
        <p className="text-muted-foreground mb-12 md:mb-16">Demo projects, sample builds, and real results.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`glow-card bg-card border border-border rounded-lg overflow-hidden group ${i === 0 || i === 5 ? "md:col-span-2" : ""}`}
            >
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/60" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-xs text-primary tracking-widest uppercase">{p.cat}</span>
                    <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mt-1">{p.name}</h3>
                  </div>
                  <span className="font-heading text-2xl font-bold text-muted-foreground/30">({p.num})</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-foreground text-foreground text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors">
            See All Work →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
