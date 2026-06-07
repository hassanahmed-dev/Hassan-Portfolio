"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { contactSchema, ContactFormData } from "@/lib/validations/contact";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/hassanahmed-dev", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/hassanahmed-dev", label: "LinkedIn" },
];

export function Contact() {
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitState("success");
      reset();
      setTimeout(() => setSubmitState("idle"), 5000);
    } catch {
      setSubmitState("error");
      setTimeout(() => setSubmitState("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#8b5cf6]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#8b5cf6] text-sm font-semibold uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
              Let&apos;s Work
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                {" "}Together
              </span>
            </h2>
            <p className="mt-4 text-[#94a3b8] max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it. Send me a message
              and let&apos;s create something amazing.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              <div className="group flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-white/[0.06] hover:bg-white/[0.02] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-[#8b5cf6]" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-[#94a3b8] text-sm">technicalhassankhan.1@gmail.com</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-white/[0.06] hover:bg-white/[0.02] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-[#8b5cf6]" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-[#94a3b8] text-sm">Available Worldwide (Remote)</p>
                </div>
              </div>

              <div className="mt-2 px-4 pt-6 border-t border-white/[0.06]">
                <h4 className="text-white font-medium mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 transition-all duration-300"
                    >
                      <link.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact form */}
          <FadeIn direction="right" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative space-y-5 p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm"
            >
              <div className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/50 to-transparent" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    {...register("name")}
                    placeholder="Your Name"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-[#94a3b8]/60 text-sm focus:outline-none focus:border-[#8b5cf6]/50 focus:ring-1 focus:ring-[#8b5cf6]/30 transition-all duration-300"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-red-400 text-xs">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("email")}
                    placeholder="Your Email"
                    type="email"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-[#94a3b8]/60 text-sm focus:outline-none focus:border-[#8b5cf6]/50 focus:ring-1 focus:ring-[#8b5cf6]/30 transition-all duration-300"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-red-400 text-xs">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  {...register("subject")}
                  placeholder="Subject"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-[#94a3b8]/60 text-sm focus:outline-none focus:border-[#8b5cf6]/50 focus:ring-1 focus:ring-[#8b5cf6]/30 transition-all duration-300"
                />
                {errors.subject && (
                  <p className="mt-1.5 text-red-400 text-xs">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-[#94a3b8]/60 text-sm focus:outline-none focus:border-[#8b5cf6]/50 focus:ring-1 focus:ring-[#8b5cf6]/30 transition-all duration-300 resize-none"
                />
                {errors.message && (
                  <p className="mt-1.5 text-red-400 text-xs">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={submitState === "loading"}
                whileHover={{ scale: submitState === "loading" ? 1 : 1.015 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white font-semibold text-sm shadow-[0_8px_30px_rgba(139,92,246,0.25)] hover:shadow-[0_0_45px_rgba(139,92,246,0.45)] transition-shadow duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {submitState === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status messages */}
              <AnimatePresence>
                {submitState === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                  >
                    <CheckCircle2 size={16} />
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {submitState === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try again later.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
