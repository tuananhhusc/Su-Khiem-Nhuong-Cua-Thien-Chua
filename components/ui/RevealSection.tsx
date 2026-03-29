"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type RevealSectionProps = {
  children: React.ReactNode;
  delay?: number;
};

export function RevealSection({ children, delay = 0.1 }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
