"use client";

import { useState, useEffect, useCallback } from "react";
import { Share2, Copy, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function QuoteSharer() {
  const [menuPos, setMenuPos] = useState<{ x: number; y: number } | null>(null);
  const [selectedText, setSelectedText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSelection = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setMenuPos(null);
      return;
    }

    const text = selection.toString().trim();
    if (text.length < 10) {
      setMenuPos(null);
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    setSelectedText(text);
    setMenuPos({
      x: rect.left + rect.width / 2 + window.scrollX,
      y: rect.top + window.scrollY - 10,
    });
  }, []);

  useEffect(() => {
    document.addEventListener("mouseup", handleSelection);
    return () => document.removeEventListener("mouseup", handleSelection);
  }, [handleSelection]);

  const handleCopy = () => {
    const citation = "\n\n— Nguồn: Sự Khiêm Nhường Của Thiên Chúa (thienchuakhiemnhuong.com)";
    navigator.clipboard.writeText(`"${selectedText}"${citation}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setMenuPos(null);
      window.getSelection()?.removeAllRanges();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {menuPos && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          style={{ 
            left: menuPos.x, 
            top: menuPos.y, 
            transform: "translateX(-50%)" 
          }}
          className="fixed z-[120] -translate-x-1/2 -translate-y-full"
        >
          <div className="flex items-center gap-1 rounded-full border border-gold/40 bg-st-joseph p-1 shadow-xl shadow-gold/10 backdrop-blur-md">
            <button
              onClick={handleCopy}
              className="flex h-10 items-center gap-2 rounded-full px-4 text-xs font-bold uppercase tracking-wider text-paper hover:bg-white/10 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-green-400" />
                  <span>Đã sao chép</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Trích dẫn</span>
                </>
              )}
            </button>
            <div className="h-4 w-px bg-white/20"></div>
            <button
              onClick={() => {
                const url = window.location.href;
                navigator.share?.({
                  title: "Sự Khiêm Nhường Của Thiên Chúa",
                  text: `"${selectedText}"`,
                  url,
                });
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full text-paper hover:bg-white/10 transition-colors"
              aria-label="Chia sẻ"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
          
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -ml-2 h-2 w-4 overflow-hidden">
            <div className="h-4 w-4 origin-top-left rotate-45 bg-st-joseph"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
