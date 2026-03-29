"use client";

import { useEffect, useState } from "react";
import { references } from "@/lib/references";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Sidebar Marginalia (v2.1): Định vị tuyệt đối theo khung bài viết (sticky-side)
 * Thay vì dùngfixed theo viewport, ta dùngabsolute vàsticky để đảm bảo 
 * chú thích luôn nằm bên ngoài lề văn bản, không bao giờ đè lên nội dung chính.
 */
export function SidebarMarginalia() {
  const [activeRef, setActiveRef] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sups = document.querySelectorAll("sup.ref");
      let closest: number | null = null;
      let minDistance = Infinity;

      sups.forEach((sup) => {
        const rect = sup.getBoundingClientRect();
        // Điểm lấy nét là khoảng 30% từ trên cùng của màn hình
        const distance = Math.abs(rect.top - 250);
        if (distance < minDistance && distance < 400) {
          minDistance = distance;
          const a = sup.querySelector("a");
          const m = a?.getAttribute("href")?.match(/ref-(\d+)/);
          if (m) closest = Number.parseInt(m[1], 10);
        }
      });

      setActiveRef(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const refData = activeRef ? references.find((r) => r.n === activeRef) : null;

  return (
    <aside className="hidden 2xl:block absolute left-[calc(100%+3rem)] top-0 h-full w-64 pointer-events-none select-none">
      <div className="sticky top-[35vh] h-fit pr-4">
        <AnimatePresence mode="wait">
          {refData && (
            <motion.div
              key={refData.n}
              initial={{ opacity: 0, x: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -8, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="group/note"
            >
              <div className="flex flex-col gap-1.5 border-l border-gold/40 pl-5 py-3 bg-paper/20 backdrop-blur-[1px] transition-colors group-hover/note:bg-paper/40">
                <div className="flex items-center gap-2">
                  <span className="font-sans text-[0.65rem] font-bold text-gold-hover uppercase tracking-[0.2em]">
                    Chú thích {refData.n}
                  </span>
                  <div className="h-px w-4 bg-gold/20" />
                </div>
                <p className="font-serif text-[0.875rem] leading-relaxed text-ink/80 italic font-medium">
                  {refData.citation}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
}
