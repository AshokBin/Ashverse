import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { socialLinks } from "../../data/social";
import SocialLink from "../ui/SocialLink";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid-pattern pt-20 overflow-hidden">
      {/* Radial Gradient Glow Effect */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-5xl mx-auto px-6 w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-sm md:text-base font-bold tracking-[0.3em] text-brand-gray uppercase mb-8"
          >
            {profile.tagline}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-16 rounded-[2.5rem] shadow-2xl mb-12 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white">
              {profile.heroHeadline.split("one-stop").map((part, i, arr) =>
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <span className="text-brand-orange">results</span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                ),
              )}
            </h2>
          </motion.div>

          {/* <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full md:w-auto"
          >
            {socialLinks.map((link) => (
              <SocialLink key={link.platform} {...link} />
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
