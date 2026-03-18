import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import workDashboard from "@/assets/work-dashboard.png";
import workEcomEdit from "@/assets/work-ecom-edit.png";
import workExpenses from "@/assets/work-expenses.png";
import workLandingPage from "@/assets/work-landing-page.png";
import workThumbnailYt from "@/assets/work-thumbnail-yt.jpg";

const projects = [
  { name: "Business Revenue Dashboard", cat: "AI Automation", num: "01", img: workDashboard },
  { name: "E-com Product Photo Edit", cat: "AI Visuals", num: "02", img: workEcomEdit },
  { name: "AI Video Generation", cat: "AI Video", num: "03", videoUrl: "https://youtu.be/aLTnEKfp_7c", ytId: "aLTnEKfp_7c" },
  { name: "YouTube Thumbnail Pack", cat: "AI Visuals", num: "04", img: workThumbnailYt },
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
          {projects.map((p, i) => {
            const imgSrc = p.ytId
              ? `https://img.youtube.com/vi/${p.ytId}/maxresdefault.jpg`
              : p.img;

            const card = (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glow-card bg-card border border-border rounded-lg overflow-hidden group"
              >
                <div className={`bg-secondary relative overflow-hidden ${i === 0 || i === 5 ? "aspect-[21/9]" : "aspect-video"}`}>
                  <img src={imgSrc} alt={p.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/60" />
                  {p.ytId && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="text-xs text-primary tracking-widest uppercase">{p.cat}</span>
                      <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mt-1">{p.name}</h3>
                    </div>
                    <span className="font-heading text-2xl font-bold text-muted-foreground/30">({p.num})</span>
                  </div>
                </div>
              </motion.div>
            );

            return p.videoUrl ? (
              <a key={p.num} href={p.videoUrl} target="_blank" rel="noopener noreferrer" className={i === 0 || i === 5 ? "md:col-span-2" : ""}>
                {card}
              </a>
            ) : (
              <div key={p.num} className={i === 0 || i === 5 ? "md:col-span-2" : ""}>
                {card}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://drive.google.com/drive/folders/1a-n7qF06vxtHq5OK8mN_iA-04h2AiOVN?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 border border-foreground text-foreground text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors">
              See All Work →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
