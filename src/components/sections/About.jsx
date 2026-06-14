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
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h3 className="text-2xl md:text-4xl text-brand-gray mb-4">
    Hi, I'm{" "}
    <span className="text-white font-bold">
      Ashok Palani
    </span>
  </h3>

  <motion.p
    className="text-lg text-left md:text-xl leading-relaxed text-brand-gray font-medium"
  >
    I am a{" "}
    <strong className="text-white font-black">
      Short-Form Video Editor
    </strong>{" "}
    passionate about creating content that stands out in today's fast-moving
    social media landscape. I specialize in{" "}
    <strong className="text-white font-black">
      retention-focused editing
    </strong>{" "}
    for Instagram Reels and YouTube Shorts, blending storytelling, pacing,
    captions, motion graphics, and sound design to craft videos that keep
    viewers engaged. My goal is not just to edit videos, but to help creators
    and brands produce{" "}
    <strong className="text-white font-black">
      content that captures attention and drives results
    </strong>
    .
  </motion.p>
</motion.div>

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
