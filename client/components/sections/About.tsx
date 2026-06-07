"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeIn } from "@/components/animations/FadeIn";
import { Download, Calendar, Users, Briefcase } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 50, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 30, suffix: "+", label: "Happy Clients" },
  { icon: Calendar, value: 5, suffix: "+", label: "Years Experience" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span
      ref={ref}
      className="text-4xl md:text-5xl font-bold tabular-nums bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent"
    >
      {display}
      {suffix}
    </span>
  );
}

function TiltAvatar() {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [12, -12]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-12, 12]), {
    stiffness: 150,
    damping: 18,
  });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
    >
      {/* Glow halo */}
      <div className="absolute -inset-6 bg-gradient-to-r from-[#8b5cf6]/30 to-[#06b6d4]/30 rounded-full blur-[60px] animate-glow-pulse" />
      {/* Animated ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] p-[2px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full rounded-full bg-[#111118]" />
      </motion.div>
      {/* Inner content */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#1a1a24] to-[#111118] flex items-center justify-center border border-white/[0.06]">
        <span className="text-6xl md:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text">
          HK
        </span>
      </div>
      {/* Floating dots */}
      <motion.div
        className="absolute -top-2 right-4 w-4 h-4 rounded-full bg-[#8b5cf6]/60"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-4 -left-2 w-3 h-3 rounded-full bg-[#06b6d4]/60"
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#8b5cf6] text-sm font-semibold uppercase tracking-wider">
              About Me
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
              Passionate About Building
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                {" "}Digital Experiences
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Avatar / Visual */}
          <FadeIn direction="left">
            <div className="relative flex items-center justify-center">
              <TiltAvatar />
            </div>
          </FadeIn>

          {/* Bio text */}
          <FadeIn direction="right">
            <div className="space-y-6">
              <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed">
                I&apos;m a Full-Stack Developer with over 5 years of experience
                building modern web applications. I specialize in creating
                performant, scalable solutions using React, Next.js, Node.js, and
                cloud-native architectures.
              </p>
              <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed">
                My passion lies in transforming complex problems into elegant,
                user-friendly interfaces. I believe in writing clean,
                maintainable code and leveraging the latest technologies to
                deliver exceptional digital experiences.
              </p>
              <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed">
                When I&apos;m not coding, I&apos;m exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white font-medium text-sm hover:border-[#8b5cf6]/40 hover:bg-[#8b5cf6]/5 transition-all duration-300 cursor-pointer"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden text-center p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#8b5cf6]/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.12)] transition-colors duration-300"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-[#8b5cf6]" size={22} />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-[#94a3b8] text-sm">{stat.label}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
