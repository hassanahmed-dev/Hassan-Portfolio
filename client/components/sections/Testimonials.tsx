"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { testimonials } from "@/lib/data/testimonials";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-[#0d0d14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#8b5cf6] text-sm font-semibold uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
              What Clients
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                {" "}Say
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Marquee / scrolling testimonials */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#0d0d14] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#0d0d14] to-transparent pointer-events-none" />

          <div className="flex w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] gap-6">
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <div
                key={`${testimonial.id}-${i}`}
                className="flex-shrink-0 w-[350px] md:w-[400px] p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#8b5cf6]/30 transition-all duration-300"
              >
                <Quote className="text-[#8b5cf6]/30 mb-4" size={24} />
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] flex items-center justify-center text-white text-sm font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">
                      {testimonial.name}
                    </p>
                    <p className="text-[#94a3b8] text-xs">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, si) => (
                      <Star
                        key={si}
                        size={12}
                        className="text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
