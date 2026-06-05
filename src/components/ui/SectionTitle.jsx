import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function SectionTitle({ title, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("text-center mb-16", className)}
    >
      <h2 className="text-4xl md:text-6xl font-black text-brand-orange uppercase tracking-wider">
        {title}
      </h2>
    </motion.div>
  );
}
