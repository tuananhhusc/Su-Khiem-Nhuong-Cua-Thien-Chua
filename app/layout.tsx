import type { Metadata } from "next";
import { Lato, Merriweather } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const siteTitle =
  "Sự Khiêm Nhường Của Thiên Chúa | Báo cáo thần học — Kenosis & thánh hóa";
const siteDescription =
  "Bài đọc dài về thần học khiêm nhường của Thiên Chúa: mầu nhiệm Kenosis, thần học kinh viện, Thập Giá, giáo huấn Huấn quyền và lộ trình thánh hóa nhân loại.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://localhost"),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${lato.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
