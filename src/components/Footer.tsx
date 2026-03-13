const links = ["Home", "Services", "Work", "About", "Process", "Contact"];
const socials = [
  { name: "LinkedIn", url: "https://linkedin.com/in/yagya-sharma-a860798a" },
  { name: "Instagram", url: "https://instagram.com/yagyasharma" },
];

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Quick Links</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((l) => (
                <button key={l} onClick={() => scrollTo(l)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div className="md:text-right">
            <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Social</h3>
            <div className="flex md:justify-end gap-6">
              {socials.map((s) => (
                <a key={s} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-muted-foreground/10">©2025</p>
        </div>

        <div className="flex justify-end mt-8">
          <span className="text-xs text-muted-foreground">Built with AI ⚡</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
