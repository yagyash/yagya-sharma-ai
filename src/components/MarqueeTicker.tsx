const items = "AI AUTOMATION · VOICE AGENTS · IMAGE GENERATION · VIBE CODING · AI VISUALS · REVENUE TRACKING · ";

const MarqueeTicker = () => {
  const repeated = items.repeat(4);
  return (
    <div className="overflow-hidden py-6 border-y border-border">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="font-heading text-sm md:text-base tracking-[0.3em] text-muted-foreground uppercase">{repeated}</span>
        <span className="font-heading text-sm md:text-base tracking-[0.3em] text-muted-foreground uppercase">{repeated}</span>
      </div>
    </div>
  );
};

export default MarqueeTicker;
