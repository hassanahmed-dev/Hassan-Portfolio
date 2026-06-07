"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { testimonials, type Testimonial } from "@/lib/data/testimonials";
import { Star, Quote } from "lucide-react";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group flex-shrink-0 w-[340px] md:w-[400px] p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#8b5cf6]/30 hover:bg-white/[0.04] transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <Quote className="text-[#8b5cf6]/40 group-hover:text-[#8b5cf6]/70 transition-colors" size={26} />
        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, si) => (
            <Star key={si} size={13} className="text-yellow-500 fill-yellow-500" />
          ))}
        </div>
      </div>
      <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
        &ldquo;{testimonial.content}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="p-[1.5px] rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4]">
          <div className="w-10 h-10 rounded-full bg-[#111118] flex items-center justify-center text-white text-sm font-bold">
            {testimonial.name.charAt(0)}
          </div>
        </div>
        <div>
          <p className="text-white text-sm font-medium">{testimonial.name}</p>
          <p className="text-[#94a3b8] text-xs">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 36,
}: {
  items: Testimonial[];
  reverse?: boolean;
  duration?: number;
}) {
  const animation = reverse
    ? `marqueeReverse ${duration}s linear infinite`
    : `marquee ${duration}s linear infinite`;

  return (
    <div className="group/row relative overflow-hidden">
      <div
        className="flex w-max gap-6 group-hover/row:[animation-play-state:paused]"
        style={{ animation }}
      >
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const firstRow = testimonials;
  const secondRow = [...testimonials].reverse();

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-[#0d0d14] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#8b5cf6]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#8b5cf6] text-sm font-semibold uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
              What Clients
              <span className="gradient-text"> Say</span>
            </h2>
          </div>
        </FadeIn>
      </div>

      {/* Dual-row marquee with edge fades */}
      <div className="relative space-y-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0d0d14] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0d0d14] to-transparent pointer-events-none" />

        <MarqueeRow items={firstRow} duration={38} />
        <MarqueeRow items={secondRow} reverse duration={44} />
      </div>
    </section>
  );
}
