import { ARTICLE_DESCRIPTION, ARTICLE_TITLE } from "@/lib/article-meta";
import { getSiteUrl } from "@/lib/site";

/** Schema.org ScholarlyArticle cho SEO. */
export function ArticleJsonLd() {
  const url = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    inLanguage: "vi",
    isAccessibleForFree: true,
    url: `${url}/`,
    publisher: {
      "@type": "Organization",
      name: "Báo Cáo Nghiên Cứu Chuyên Sâu — Sự khiêm nhường của Thiên Chúa",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
