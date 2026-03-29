import type { Metadata, Viewport } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { ARTICLE_DESCRIPTION, ARTICLE_SHORT_TITLE } from "@/lib/article-meta";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

/**
 * EB Garamond: Phông chữ học thuật kinh điển, đặc biệt cho thần học.
 * Inter: Phông chữ không chân hiện đại, sắc nét cho giao diện.
 */
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteTitle = `${ARTICLE_SHORT_TITLE} | Báo Cáo Nghiên Cứu Chuyên Sâu`;
const siteDescription = ARTICLE_DESCRIPTION;

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Sự khiêm nhường Thiên Chúa",
    "Kenosis",
    "Thần học Kitô giáo",
    "Thomas Aquinas",
    "Tôma Aquinô",
    "Bản thể luận",
    "Thập giá",
    "Huấn quyền",
    "Thánh hóa",
    "Nghiên cứu thần học",
  ],
  authors: [{ name: "Sự Khiêm Nhường Của Thiên Chúa — Nhóm Nghiên Cứu" }],
  creator: "Thiên Chúa Khiêm Nhường",
  publisher: "Thần Học Kinh Viện - Academy",
  metadataBase: new URL(getSiteUrl()),
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "Sự Khiêm Nhường Của Thiên Chúa",
    locale: "vi_VN",
    type: "article",
    url: "/",
    authors: ["Nhóm Nghiên Cứu Thần Học"],
    section: "Thần học kinh viện",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
  category: "theology",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#002855",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      data-font-scale="md"
      className={`${inter.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <ArticleJsonLd />
        {children}
      </body>
    </html>
  );
}
