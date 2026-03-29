import { references } from "@/lib/references";

/** 
 * Chú thích dạng superscript liên kết tới mục nguồn.
 * Hiển thị xem trước nguồn khi rê chuột vào (tooltip học thuật).
 */
export function Ref({ n }: { n: number }) {
  const ref = references.find((r) => r.n === n);
  
  return (
    <sup className="ref group relative inline-block">
      <a
        href={`#ref-${n}`}
        className="tabular-nums rounded-sm px-0.5 outline-none transition-colors hover:bg-gold/20 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1 focus-visible:ring-offset-paper"
      >
        {n}
      </a>
      {ref && (
        <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-md border border-gold/30 bg-paper p-3 font-serif text-[0.85rem] font-normal leading-relaxed text-ink shadow-xl opacity-0 transition-opacity group-hover:opacity-100 sm:w-80">
          <span className="block mb-1 font-sans text-[0.65rem] font-bold uppercase tracking-wider text-st-joseph/60">
            Nguồn trích dẫn [{n}]
          </span>
          {ref.citation}
          <span className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-gold/30"></span>
          <span className="absolute left-1/2 top-full -translate-x-1/2 border-[7px] border-transparent border-t-paper"></span>
        </span>
      )}
    </sup>
  );
}
