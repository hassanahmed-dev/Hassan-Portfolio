"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ChevronDown, ArrowUpRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/animations/MagneticButton";

const techBadges = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Supabase",
  "GraphQL",
  "PostgreSQL",
  "NestJS",
];

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 1.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

export function Hero() {
  // Cursor-tracked spotlight for the hero backdrop
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}% ${my}%, rgba(139,92,246,0.12), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated aurora background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#8b5cf6]/20 rounded-full blur-[120px] animate-aurora" />
        <div className="absolute bottom-1/4 -right-1/4 w-[520px] h-[520px] bg-[#06b6d4]/15 rounded-full blur-[120px] animate-aurora [animation-delay:-6s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8b5cf6]/5 rounded-full blur-[160px] animate-glow-pulse" />
      </div>

      {/* Grid pattern overlay with radial mask so it fades at the edges */}
      <div
        className="absolute inset-0 bg-grid opacity-60"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, black, transparent)",
        }}
      />

      {/* Cursor spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlight }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.025] bg-noise" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center"
      >
        {/* Availability pill */}
        {/* <motion.div variants={item} className="flex justify-center">
          <div className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm text-[#94a3b8]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
            <Sparkles size={13} className="text-[#8b5cf6]" />
          </div>
        </motion.div> */}

        <motion.h1
          variants={item}
          className="mt-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight tracking-tight"
        >
          <span className="text-[#f8fafc]">Hi, I&apos;m </span>
          <span className="gradient-text text-glow">Hassan Khan</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-3 text-lg sm:text-xl md:text-3xl text-[#94a3b8] font-medium font-[family-name:var(--font-space-grotesk)]"
        >
          Full-Stack Developer
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-5 text-sm sm:text-base md:text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed px-2"
        >
          Crafting scalable web experiences with modern technologies. I build
          performant, accessible, and visually stunning applications that make an
          impact.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white font-semibold text-sm shadow-[0_8px_30px_rgba(139,92,246,0.25)] hover:shadow-[0_0_45px_rgba(139,92,246,0.45)] transition-shadow duration-300 cursor-pointer"
            >
              View My Work
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border border-white/[0.12] text-white font-semibold text-sm hover:bg-white/[0.04] hover:border-[#8b5cf6]/40 transition-all duration-300 cursor-pointer"
            >
              Get In Touch
            </a>
          </MagneticButton>
        </motion.div>

        {/* Tech badges marquee with edge fade */}
        <motion.div
          variants={item}
          className="relative mt-10 sm:mt-16 overflow-hidden max-w-full sm:max-w-3xl mx-auto"
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#0a0a0f] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#0a0a0f] to-transparent pointer-events-none" />
          <div className="flex w-max animate-[marquee_22s_linear_infinite] gap-4">
            {[...techBadges, ...techBadges].map((tech, i) => (
              <span
                key={i}
                className="flex-shrink-0 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[#94a3b8] text-sm whitespace-nowrap transition-colors hover:text-white hover:border-[#8b5cf6]/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94a3b8] hover:text-white transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.6 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} />
        </motion.span>
      </motion.a>
    </section>
  );
}
