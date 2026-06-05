import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Marquee from "./components/sections/Marquee";
import About from "./components/sections/About";
import ShortForm from "./components/sections/ShortForm";
import LongForm from "./components/sections/LongForm";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Scroll Progress Bar */}
      {/* <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-orange transform origin-left z-[100]"
        style={{ scaleX }}
      /> */}

      <Navbar />

      <>
        <Hero />
        <Marquee />
        <About />
        <hr className="w-full max-w-full mx-auto border-t border-white/10" />
        <ShortForm />
        <hr className="w-full max-w-full mx-auto border-t border-white/10" />
        <LongForm />
        <hr className="w-full max-w-full mx-auto border-t border-white/10" />
        <Contact />
      </>

      <Footer />

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0,
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full shadow-lg flex items-center justify-center hover:bg-brand-orange hover:text-black transition-colors z-50 pointer-events-auto"
        style={{ pointerEvents: showBackToTop ? "auto" : "none" }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
  );
}

export default App;
