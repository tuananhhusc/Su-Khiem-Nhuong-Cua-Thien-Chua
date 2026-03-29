"use client";

import { useEffect, useState } from "react";
import { tocItems } from "@/lib/toc-items";

/**
 * A Running Head component for the sticky header.
 * Displays the current section name as the user scrolls.
 */
export function RunningHead() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first entry that is intersecting
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Find the TOC item with this ID
          const item = tocItems.find((i) => i.id === visible[0].target.id);
          if (item) {
            setCurrentSection(item.label);
          }
        }
      },
      { rootMargin: "-120px 0px -65% 0px", threshold: 0 }
    );

    // Observe all sections mentioned in TOC
    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (!currentSection) return null;

  return (
    <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right duration-500">
      <span className="hidden leading-none text-gold/60 sm:inline" aria-hidden="true">—</span>
      <p className="font-serif italic text-xs lg:text-sm text-ink-muted line-clamp-1">
        {currentSection}
      </p>
    </div>
  );
}
