"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { TocItem } from "@/lib/toc-items";

type TableOfContentsProps = {
  items: TocItem[];
};

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ids = items.map((i) => i.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -65% 0px",
        threshold: [0, 0.1, 0.2, 0.5, 0.8, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const panel = drawerRef.current;
    if (!panel) return;

    const focusables = panel.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const list = Array.from(focusables).filter((el) => !el.hasAttribute("disabled"));
    queueMicrotask(() => closeBtnRef.current?.focus());

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
        return;
      }
      if (e.key !== "Tab" || list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (active === first || !panel.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const linkClass = (id: string, depth: 2 | 3) => {
    const active = activeId === id;
    const base =
      "block w-full text-left leading-snug transition-all duration-200 border-l-2 pl-3 py-1.5 rounded-r-sm";
    const depthStyles = depth === 2 
      ? "text-[0.8rem] font-serif font-bold tracking-wider uppercase" 
      : "text-[0.8rem] font-serif italic pl-5";
    const colors = active
      ? "border-gold text-st-joseph bg-gold/5 shadow-sm"
      : "border-transparent text-ink-muted hover:text-st-joseph hover:border-gold/30 hover:bg-paper-muted/50";
    return `${base} ${depthStyles} ${colors}`;
  };

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-28">
          <nav aria-label="Mục lục bài viết">
            <p className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-st-joseph/90 mb-4">
              Mục lục
            </p>
            <ul className="space-y-0.5 max-h-[calc(100vh-8rem)] overflow-y-auto pr-1">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className={linkClass(item.id, item.depth)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Mobile FAB */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={[
            "flex h-12 w-12 items-center justify-center rounded-full",
            "bg-st-joseph text-white shadow-lg shadow-st-joseph/20",
            "hover:scale-110 active:scale-95 transition-all duration-200",
            "border border-white/10",
          ].join(" ")}
          aria-label="Mở mục lục"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
          <div 
            ref={drawerRef}
            className="absolute right-0 top-0 h-full w-[280px] max-w-[85vw] bg-paper shadow-2xl animate-in slide-in-from-right duration-300"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-silver-border/40">
                <span className="font-serif text-sm font-bold uppercase tracking-widest text-st-joseph">
                  Mục lục
                </span>
                <button
                  ref={closeBtnRef}
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gold/10 rounded-full transition-colors"
                >
                  <svg
                    className="h-5 w-5 text-ink-muted"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 pt-2">
                <nav className="space-y-1">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollTo(item.id);
                        setIsOpen(false);
                      }}
                      className={[
                        "block w-full text-left py-2 px-3 rounded-md transition-colors",
                        item.depth === 2
                          ? "font-serif font-bold text-[0.9rem] text-st-joseph uppercase tracking-wide"
                          : "font-serif italic text-[0.85rem] text-ink/80 pl-6",
                        activeId === item.id ? "bg-gold/10 text-gold-hover" : "hover:bg-gold/5",
                      ].join(" ")}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
