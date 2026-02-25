const FloatingCTA = () => {
  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-full shadow-lg hover:opacity-90 transition-opacity"
    >
      <span className="w-2 h-2 rounded-full bg-success animate-blink" />
      Book a Call
    </a>
  );
};

export default FloatingCTA;
