"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { projects } from "@/lib/data/projects";
import { ExternalLink, Github } from "lucide-react";

const filters = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "backend", label: "Backend" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#8b5cf6] text-sm font-semibold uppercase tracking-wider">
              My Work
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
              Featured
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                {" "}Projects
              </span>
            </h2>
            <p className="mt-4 text-[#94a3b8] max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in building modern web applications.
            </p>
          </div>
        </FadeIn>

        {/* Filter buttons */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeFilter === filter.id
                    ? "bg-[#8b5cf6]/20 text-[#8b5cf6] border border-[#8b5cf6]/40"
                    : "bg-white/[0.04] text-[#94a3b8] border border-white/[0.06] hover:text-white hover:border-white/[0.12]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden hover:border-[#8b5cf6]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]"
              >
                {/* Project image placeholder */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#1a1a24] to-[#111118]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/20 to-[#06b6d4]/20 opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-white/10">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0a0a0f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#8b5cf6]/30 transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#8b5cf6]/30 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 text-[#8b5cf6] text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 font-[family-name:var(--font-space-grotesk)]">
                    {project.title}
                  </h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[#94a3b8] text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
