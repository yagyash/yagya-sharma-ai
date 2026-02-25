const SectionHeader = ({ leftLabel, rightLabel, number }: { leftLabel: string; rightLabel: string; number: string }) => {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
      <div className="section-divider" />
      <div className="mt-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">({number})</div>
    </div>
  );
};

export default SectionHeader;
