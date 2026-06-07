"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from "framer-motion";
import { useRef, ReactNode } from "react";

interface SpotlightCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees. Set to 0 to disable the 3D tilt. */
  tilt?: number;
  /** Radius of the cursor spotlight in px. */
  spotlightSize?: number;
  /** Spotlight color (rgba/hex). */
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  tilt = 6,
  spotlightSize = 380,
  spotlightColor = "rgba(139, 92, 246, 0.14)",
  ...rest
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Raw pointer position within the card (0..1)
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  // Smooth springs for the tilt so it feels fluid, not jittery
  const rotateX = useSpring(useTransform(py, [0, 1], [tilt, -tilt]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-tilt, tilt]), {
    stiffness: 150,
    damping: 18,
  });

  // Spotlight position in px (followed directly for responsiveness)
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const spotOpacity = useSpring(0, { stiffness: 200, damping: 25 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    px.set(x / rect.width);
    py.set(y / rect.height);
    spotX.set(x);
    spotY.set(y);
  };

  const handleEnter = () => spotOpacity.set(1);

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
    spotOpacity.set(0);
  };

  const background = useTransform(
    [spotX, spotY],
    ([x, y]) =>
      `radial-gradient(${spotlightSize}px circle at ${x}px ${y}px, ${spotlightColor}, transparent 65%)`
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        rotateX: tilt ? rotateX : undefined,
        rotateY: tilt ? rotateY : undefined,
        transformPerspective: 1000,
      }}
      className={`relative ${className}`}
      {...rest}
    >
      {/* Cursor-following spotlight overlay */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
        style={{ background, opacity: spotOpacity }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
