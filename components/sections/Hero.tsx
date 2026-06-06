"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
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

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#8b5cf6]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[#06b6d4]/15 rounded-full blur-[120px] animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8b5cf6]/5 rounded-full blur-[160px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center">

        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.2 }}
        >
          <span className="text-[#f8fafc]">Hi, I&apos;m </span>
          <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
            Hassan Khan
          </span>
        </motion.h1>

        <motion.h2
          className="mt-3 text-lg sm:text-xl md:text-3xl text-[#94a3b8] font-medium font-[family-name:var(--font-space-grotesk)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.4 }}
        >
          Full-Stack Developer
        </motion.h2>

        <motion.p
          className="mt-5 text-sm sm:text-base md:text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.6 }}
        >
          Crafting scalable web experiences with modern technologies. I build
          performant, accessible, and visually stunning applications that make an
          impact.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.8 }}
        >
          <MagneticButton>
            <a
              href="#projects"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white font-semibold text-sm hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-shadow duration-300 cursor-pointer"
            >
              View My Work
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

        {/* Tech badges marquee */}
        <motion.div
          className="mt-10 sm:mt-16 overflow-hidden max-w-full sm:max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.2 }}
        >
          <div className="flex w-max animate-[marquee_20s_linear_infinite] gap-4">
            {[...techBadges, ...techBadges].map((tech, i) => (
              <span
                key={i}
                className="flex-shrink-0 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[#94a3b8] text-sm whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 3.5, duration: 0.5 },
          y: { delay: 3.5, duration: 2, repeat: Infinity },
        }}
      >
        <ChevronDown className="text-[#94a3b8]" size={24} />
      </motion.div>
    </section>
  );
}
