"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1500;
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutCubic for a natural fill that decelerates near 100
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setIsLoading(false), 200);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f]"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ambient glow behind the logo */}
          <div className="absolute w-[300px] h-[300px] bg-[#8b5cf6]/20 rounded-full blur-[120px] animate-glow-pulse" />

          <div className="relative flex flex-col items-center gap-7">
            <motion.div
              className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)]"
              initial={{ opacity: 0, scale: 0.85, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="gradient-text">HK</span>
            </motion.div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-52 h-[3px] bg-white/[0.08] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs font-medium text-[#94a3b8] tabular-nums tracking-widest">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
