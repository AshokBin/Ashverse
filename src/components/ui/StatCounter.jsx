import { useInView } from "react-intersection-observer";
import { useCountUp } from "../../hooks/useCountUp";

export default function StatCounter({ label, value }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const count = useCountUp(value, 500, inView);

  return (
    <div
      ref={ref}
      className="relative py-8 flex flex-col items-center justify-center"
    >
      <span className="text-7xl md:text-8xl font-black text-white/[0.03] absolute z-0 select-none">
        {count}+
      </span>
      <span className="text-4xl md:text-5xl font-bold text-white z-10">
        {count}+
      </span>
      <span className="text-brand-gray text-sm md:text-base tracking-widest uppercase mt-2 z-10 font-medium">
        {label}
      </span>
    </div>
  );
}
