import { useState, useEffect } from "react";

export function useCountUp(end, duration = 100, startAnimating = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimating) return;

    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;

      // easeOutExpo easing function
      const easeProgress =
        progress === duration
          ? 1
          : 1 - Math.pow(2, (-10 * progress) / duration);

      const currentCount = Math.min(Math.floor(easeProgress * end), end);
      setCount(currentCount);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startAnimating]);

  return count;
}
