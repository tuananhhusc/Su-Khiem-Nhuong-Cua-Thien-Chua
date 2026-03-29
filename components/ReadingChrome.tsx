"use client";

import { ChevronUp, Eye, EyeOff, Minus, Plus, Printer } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type FontScale = "sm" | "md" | "lg";

const STORAGE_KEY = "article-font-scale";

function readScale(): FontScale {
  if (typeof window === "undefined") return "md";
  const v = localStorage.getItem(STORAGE_KEY);
  if (v === "sm" || v === "md" || v === "lg") return v;
  return "md";
}

/** Skip link, thanh tiến độ đọc, nút lên đầu, cỡ chữ, gán id chú thích đầu tiên cho liên kết ↩. */
export function ReadingChrome() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [fontScale, setFontScale] = useState<FontScale>("md");
  const [focusMode, setFocusMode] = useState(false);

  // 1. Đồng bộ từ LocalStorage khi mount (Chỉ chạy 1 lần)
  useEffect(() => {
    const saved = readScale();
    if (saved !== "md") {
      const timer = setTimeout(() => {
        setFontScale(saved);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.fontScale = fontScale;
    try {
      localStorage.setItem(STORAGE_KEY, fontScale);
    } catch {
      /* ignore */
    }
  }, [fontScale]);

  useEffect(() => {
    document.documentElement.dataset.readingFocus = focusMode.toString();
  }, [focusMode]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const h = doc.scrollHeight - doc.clientHeight;
      const p = h > 0 ? (doc.scrollTop / h) * 100 : 0;
      setProgress(p);
      setShowTop(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section Focus tracking
  useEffect(() => {
    if (!focusMode) {
      document.querySelectorAll("section.focused").forEach((s) => s.classList.remove("focused"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("focused");
          } else {
            entry.target.classList.remove("focused");
          }
        });
      },
      { rootMargin: "-120px 0px -65% 0px", threshold: 0 }
    );

    document.querySelectorAll("article section").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [focusMode]);

  useEffect(() => {
    const article = document.querySelector("article.prose-article");
    if (!article) return;
    const seen = new Set<number>();
    article.querySelectorAll('sup.ref a[href^="#ref-"]').forEach((node) => {
      const a = node as HTMLAnchorElement;
      const m = a.getAttribute("href")?.match(/ref-(\d+)/);
      if (!m) return;
      const n = Number.parseInt(m[1], 10);
      if (seen.has(n)) return;
      seen.add(n);
      a.id = `first-ref-${n}`;
    });
  }, []);

  const bumpScale = useCallback((dir: -1 | 1) => {
    setFontScale((prev) => {
      const order: FontScale[] = ["sm", "md", "lg"];
      const i = order.indexOf(prev);
      const next = Math.min(2, Math.max(0, i + dir));
      return order[next];
    });
  }, []);

  return (
    <>
      <a
        href="#noi-dung-chinh"
        className="skip-link fixed left-4 top-4 z-[100] -translate-y-[200%] rounded-md bg-st-joseph px-4 py-2.5 font-sans text-sm font-semibold text-paper shadow-lg outline-none transition-transform focus:translate-y-0 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
      >
        Bỏ qua điều hướng, tới nội dung chính
      </a>

      <div
        className="pointer-events-none fixed left-0 right-0 top-0 z-40 h-1 bg-silver-border/60"
        aria-hidden
      >
        <div
          className="h-full bg-gold origin-left transition-[transform] duration-150 ease-out"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>

      <div
        className="fixed bottom-24 left-4 z-30 hidden lg:flex flex-col gap-1 rounded-lg border border-silver-border bg-paper/95 p-1 shadow-md backdrop-blur-sm"
        role="group"
        aria-label="Cỡ chữ bài đọc"
      >
        <button
          type="button"
          onClick={() => bumpScale(-1)}
          disabled={fontScale === "sm"}
          className="rounded-md p-2 text-st-joseph hover:bg-paper-muted disabled:opacity-35 disabled:hover:bg-transparent"
          aria-label="Giảm cỡ chữ"
        >
          <Minus className="h-4 w-4" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => bumpScale(1)}
          disabled={fontScale === "lg"}
          className="rounded-md p-2 text-st-joseph hover:bg-paper-muted disabled:opacity-35 disabled:hover:bg-transparent"
          aria-label="Tăng cỡ chữ"
        >
          <Plus className="h-4 w-4" aria-hidden />
        </button>
        <div className="h-px bg-silver-border/40 mx-1"></div>
        <button
          type="button"
          onClick={() => setFocusMode(!focusMode)}
          className={`rounded-md p-2 transition-colors ${focusMode ? 'bg-gold text-paper' : 'text-st-joseph hover:bg-paper-muted'}`}
          aria-label={focusMode ? "Tắt chế độ tập trung" : "Bật chế độ tập trung"}
          title="Chế độ tập trung"
        >
          {focusMode ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-md p-2 text-st-joseph hover:bg-paper-muted"
          aria-label="In bản nghiên cứu"
          title="In tài liệu"
        >
          <Printer className="h-4 w-4" />
        </button>
      </div>

      {showTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-30 hidden lg:flex h-11 w-11 items-center justify-center rounded-full border border-silver-border bg-paper/95 text-st-joseph shadow-md backdrop-blur-sm transition-colors hover:bg-paper-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Lên đầu trang"
        >
          <ChevronUp className="h-5 w-5" aria-hidden />
        </button>
      ) : null}
    </>
  );
}
