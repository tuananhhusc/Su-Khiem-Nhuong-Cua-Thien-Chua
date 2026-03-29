import { RevealSection } from "@/components/ui/RevealSection";
import { references } from "@/lib/references";
import { ArticleMain } from "./ArticleMain";
import { SidebarMarginalia } from "./SidebarMarginalia";
import { QuoteSharer } from "@/components/ui/QuoteSharer";

/**
 * Khung prose + typography; nội dung chính trong ArticleMain; nguồn cuối bài.
 */
export function ArticleBody() {
  return (
    <article
      className={[
        "prose-article relative overflow-visible",
        "prose prose-lg lg:prose-xl",
        "max-w-prose lg:max-w-[44rem] mx-auto w-full",
        "font-serif",
        "text-[1.1rem] lg:text-[1.15rem]",
        "text-ink/95 leading-[1.8]",
        "prose-headings:text-st-joseph",
        "prose-headings:font-bold",
        "prose-p:text-ink/90 mb-[1.5em]",
        "prose-strong:text-st-joseph prose-strong:font-bold",
        "prose-a:text-[var(--gold-hover)] prose-a:font-semibold",
        "prose-a:underline-offset-[4px]",
        "hover:prose-a:text-st-joseph transition-colors",
        "prose-li:marker:text-gold prose-li:leading-[1.8]",
        "prose-blockquote:font-serif",
        "sm:border-x border-silver-border/40 px-5 sm:px-10 lg:px-16 pb-12",
      ].join(" ")}
    >
      <SidebarMarginalia />
      <QuoteSharer />
      <header className="mb-24 not-prose text-center max-w-3xl mx-auto space-y-8 pt-12 relative">
        <div className="flex flex-col items-center gap-3">
          <p className="font-serif text-[0.7rem] sm:text-xs uppercase tracking-[0.35em] text-gold-hover font-bold inline-block border-y border-gold/30 py-1.5 px-4">
            Báo Cáo Nghiên Cứu Chuyên Sâu
          </p>
        </div>
        
        <h1 className="font-serif italic text-[1.75rem] sm:text-3xl lg:text-4xl leading-[1.2] text-st-joseph font-bold tracking-tight">
          Sự Khiêm Nhường Của Thiên Chúa
        </h1>
        
        <div className="flex flex-col items-center space-y-4">
          <p className="font-serif text-[0.8rem] uppercase tracking-wider text-ink-muted/80 font-semibold px-4">
            Thần học kinh viện · Kinh Thánh · Huấn quyền
          </p>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
          <div className="text-2xl text-gold/30 select-none">❧</div>
        </div>
      </header>

      <ArticleMain />

      <RevealSection>
        <section
          id="nguon-trich-dan"
          className="scroll-mt-24 not-prose mt-20 pt-12 border-t border-silver-border"
        >
          <h2 className="font-serif text-xl sm:text-2xl text-st-joseph font-bold mb-6 tracking-tight border-b border-silver-border pb-2 uppercase">
            Nguồn trích dẫn
          </h2>
          <ol className="list-decimal list-outside pl-5 sm:pl-6 space-y-3.5 text-[0.9375rem] leading-[1.75] text-ink font-serif text-start">
            {references.map((r) => (
              <li key={r.n} id={`ref-${r.n}`} className="scroll-mt-28 pl-1">
                <a
                  href={`#first-ref-${r.n}`}
                  className="mr-2 inline-flex min-h-[1.5rem] min-w-[1.5rem] items-center justify-center rounded text-st-joseph no-underline opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                  aria-label={`Quay lại chú thích [${r.n}] trong bài`}
                  title="Quay lại vị trí chú thích trong bài"
                >
                  ↩
                </a>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gold-hover)] underline underline-offset-2 hover:text-st-joseph transition-colors"
                >
                  {r.citation}
                </a>
              </li>
            ))}
          </ol>
        </section>
      </RevealSection>
    </article>
  );
}
