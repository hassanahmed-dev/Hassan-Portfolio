"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeIn } from "@/components/animations/FadeIn";
import { skills, skillCategories } from "@/lib/data/skills";

function SkillBar({ name, proficiency, delay }: { name: string; proficiency: number; delay: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-[#f8fafc] group-hover:text-[#8b5cf6] transition-colors">
          {name}
        </span>
        <span className="text-xs text-[#94a3b8]">{proficiency}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]"
          initial={{ width: 0 }}
          animate={inView ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");

  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-[#0d0d14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#8b5cf6] text-sm font-semibold uppercase tracking-wider">
              My Skills
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
              Technical
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                {" "}Proficiency
              </span>
            </h2>
            <p className="mt-4 text-[#94a3b8] max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies I use to build
              exceptional digital products.
            </p>
          </div>
        </FadeIn>

        {/* Category tabs */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#8b5cf6]/20 text-[#8b5cf6] border border-[#8b5cf6]/40"
                    : "bg-white/[0.04] text-[#94a3b8] border border-white/[0.06] hover:text-white hover:border-white/[0.12]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Skill bars */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredSkills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                proficiency={skill.proficiency}
                delay={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Supabase highlight */}
        {activeCategory === "database" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 max-w-3xl mx-auto p-4 rounded-xl bg-gradient-to-r from-[#8b5cf6]/5 to-[#06b6d4]/5 border border-[#8b5cf6]/20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#3ECF8E]/10 flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M13.5 21.5c-.2.7-1.2.7-1.4 0L3 5.5c-.2-.7.4-1.5 1.1-1.3l8.4 2.4c.2.1.4.1.6 0L21.5 4.2c.7-.2 1.3.6 1.1 1.3L13.5 21.5z" fill="#3ECF8E"/>
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">Supabase Expert</p>
                <p className="text-[#94a3b8] text-xs">
                  Auth, Realtime subscriptions, Row Level Security, Edge Functions, Storage
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
