"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer";
import { services } from "@/lib/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b5cf6]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#8b5cf6] text-sm font-semibold uppercase tracking-wider">
              What I Do
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
              Services &
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                {" "}Expertise
              </span>
            </h2>
            <p className="mt-4 text-[#94a3b8] max-w-2xl mx-auto">
              I offer comprehensive full-stack development services, from
              crafting pixel-perfect UIs to architecting scalable backend systems.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm hover:border-[#8b5cf6]/40 hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-[#8b5cf6]" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 font-[family-name:var(--font-space-grotesk)]">
                {service.title}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[#94a3b8] text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
