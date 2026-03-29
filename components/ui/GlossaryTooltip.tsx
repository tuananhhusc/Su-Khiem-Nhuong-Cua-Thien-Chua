"use client";

import { useState, useRef } from "react";
import { glossaryData } from "@/lib/glossary-data";
import { AnimatePresence, motion } from "framer-motion";

type GlossaryTooltipProps = {
  term: string;
  children: React.ReactNode;
};

export function GlossaryTooltip({ term, children }: GlossaryTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const data = glossaryData.find((g) => g.term.toLowerCase() === term.toLowerCase());
  const timer = useRef<NodeJS.Timeout | null>(null);

  if (!data) return <>{children}</>;

  const handleMouseEnter = () => {
    if (timer.current) clearTimeout(timer.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timer.current = setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <span 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="cursor-help border-b border-dotted border-gold-hover/60 hover:border-gold-hover transition-colors">
        {children}
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute bottom-full left-1/2 z-[110] mb-3 w-64 -translate-x-1/2 rounded-lg border border-gold/30 bg-paper p-4 shadow-xl backdrop-blur-md"
          >
            <div className="flex flex-col gap-1.5">
              <div className="flex items-baseline justify-between gap-2 border-b border-silver-border/40 pb-1.5">
                <span className="font-serif font-bold text-st-joseph italic">{data.term}</span>
                {data.phonetic && (
                  <span className="font-sans text-[0.65rem] text-ink-muted/80">{data.phonetic}</span>
                )}
              </div>
              <p className="font-serif text-[0.85rem] leading-[1.6] text-ink/90">
                {data.definition}
              </p>
            </div>
            
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -ml-2 h-2 w-4 overflow-hidden">
              <div className="h-4 w-4 origin-top-left rotate-45 border border-gold/30 bg-paper"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
