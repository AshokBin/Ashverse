import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import StatCounter from "../ui/StatCounter";

export default function About() {
  return (
    <section className="py-32 px-6 max-w-full bg-brand-dark mx-auto" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        {/* Left Column - Intro */}
        <div className="lg:col-span-4 flex items-start">
          <div className="flex items-center gap-4">
            <div className="w-1 h-16 bg-brand-orange rounded-full" />
            <h2 className="text-xl font-bold tracking-widest uppercase text-white">
              About Me
            </h2>
          </div>
        </div>

        {/* Right Column - Bio & Stats */}
        <div className="lg:col-span-8 flex flex-col gap-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl leading-relaxed text-brand-gray font-medium"
          >
            I create content that{" "}
            <strong className="text-white font-black">
              connects, engages, and performs
            </strong>
            . By blending video editing, visual storytelling, design, and
            AI-powered workflows, I transform ideas into{" "}
            <strong className="text-white font-black">
              impactful digital experiences
            </strong>
            .
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profile.stats.map((stat, i) => (
              <StatCounter key={i} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
