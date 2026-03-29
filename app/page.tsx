import { ArticleBody } from "@/components/article/ArticleBody";
import { ReadingChrome } from "@/components/ReadingChrome";
import { TableOfContents } from "@/components/TableOfContents";
import { RunningHead } from "@/components/RunningHead";
import { tocItems } from "@/lib/toc-items";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col">
      <ReadingChrome />
      <header className="sticky top-0 z-30 border-b border-silver-border/80 bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex shrink-0 flex-col">
            <p className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.25em] text-gold-hover">
              Báo Cáo Nghiên Cứu Chuyên Sâu
            </p>
            <p className="font-sans text-sm font-bold text-st-joseph">
              Sự Khiêm Nhường Của Thiên Chúa
            </p>
          </div>
          <RunningHead />
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-10 px-0 py-8 sm:px-6 lg:gap-14 lg:px-8 lg:py-14">
        <TableOfContents items={tocItems} />
        
        <main 
          id="noi-dung-chinh" 
          className="min-w-0 flex-1 pb-24 scroll-mt-24 bg-paper/30 lg:shadow-[0_0_40px_-10px_rgba(0,0,0,0.05)] rounded-sm lg:border-x border-silver-border/30"
          tabIndex={-1}
        >
          <ArticleBody />
        </main>
      </div>
    </div>
  );
}
