import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-brand-black/80 backdrop-blur-md border-white/5 py-4"
          : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-black tracking-[0.2em] text-white">
          ASHVERS<span className="text-brand-orange uppercase">E</span>
        </a>

        <button
          onClick={scrollToContact}
          className="px-6 py-2 rounded-full bg-white text-black font-bold text-sm uppercase tracking-wide hover:bg-brand-orange hover:text-black transition-all duration-300"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
