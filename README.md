# Sự Khiêm Nhường Của Thiên Chúa - Báo Cáo Nghiên Cứu Chuyên Sâu

Một nền tảng web học thuật cao cấp được thiết kế riêng để trình bày và đọc các bài nghiên cứu thần học chuyên sâu. Dự án này tập trung vào việc tạo ra một không gian đọc "chiêm niệm" (contemplative), kết hợp tính thẩm mỹ chuẩn mực của Công giáo (Catholic aesthetic) với các công cụ tương tác hiện đại dành cho giới học giả.

![Sự Khiêm Nhường Của Thiên Chúa - Preview](public/icon.svg) *(Biểu tượng tượng trưng)*

## 🌟 Chức năng nổi bật (Scholarly Features)

Nền tảng được trang bị các công cụ hỗ trợ đọc và nghiên cứu độc quyền:

*   **Hệ thống Chú thích Lề (Sidebar Marginalia):** Các chú thích học thuật tự động di chuyển và neo (sticky) bên lề bài viết tương ứng với đoạn văn đang đọc, không che khuất nội dung chính (tối ưu hóa cho màn hình lớn `2xl`).
*   **Giải nghĩa Thuật ngữ (Glossary Tooltips):** Giải thích tức thì các thuật ngữ thần học phức tạp (như *Kenosis, Agape, Ex Nihilo*) thông qua tooltip tương tác mượt mà khi hover hoặc click, không làm gián đoạn mạch đọc.
*   **Trích xuất & Chia sẻ Ý tưởng (Quote Sharer):** Công cụ pop-up xuất hiện khi người dùng bôi đen văn bản, cho phép sao chép nhanh đoạn trích kèm thông tin nguồn (citation) chuẩn học thuật.
*   **Chế độ Đọc Chiêm niệm (Deep Focus Mode):** Làm mờ các vùng văn bản xung quanh đoạn đang đọc, giúp duy trì sự tập trung tối đa vào nội dung cốt lõi.
*   **Mục lục thông minh (Sticky TOC & Scroll-Spy):** Đồng bộ hóa hoàn hảo (synchronized) giữa vị trí cuộn chuột, thanh Mục lục (TOC), và Thanh Tiêu đề động (Running Head).
*   **Hiệu ứng xuất hiện mượt mà (Scroll Reveal):** Chuyển tiếp các phần bài đọc với hiệu ứng mờ dần nhẹ nhàng sử dụng Framer Motion, mang lại cảm giác trang trọng.
*   **Tối ưu in ấn (Print-ready):** Áp dụng chế độ CSS dành riêng cho máy in, tự động loại bỏ các yếu tố UI dư thừa (nút bấm, thanh cuộn) và định dạng chuẩn A4.

## 🎨 Nghệ thuật Thiết kế (Design Philosophy)

Giao diện (UI) và Trải nghiệm (UX) được quy chuẩn theo định hướng **"Catholic & Academic"**:
*   Bảng màu: Sử dụng các gam màu Giấy da (Parchment, `#fdfaf3`), Mực in (Ink, `#1a1a1a`), và Vàng hoàng gia (Gold, `#c5a059`) để tạo cảm giác cổ điển, quyền uy.
*   Nghệ thuật chữ (Typography): 
    *   **EB Garamond:** Phông chữ có chân (Serif) kinh điển chuyên biệt cho nội dung thần học dài.
    *   **Inter:** Phông chữ không chân (Sans-serif) để cân bằng với các thẻ UI hiện đại.
    *   Hỗ trợ hoàn toàn CSS Text-Wrapping (`balance`, `pretty`), chuẩn hóa ký tự tiếng Việt, tự động kerning và ligatures cao cấp.

## 🛠 Công nghệ Sử dụng (Tech Stack)

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
*   **React:** React 19 (Server Components & Client Components)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animation:** [Framer Motion](https://www.framer.com/motion/)
*   **Iconography:** [Lucide React](https://lucide.dev/)
*   **Ngôn ngữ:** TypeScript

## 📂 Kiến trúc Dự án (Project Structure)

```text
📦 thienchuakhiemnhuong
 ┣ 📂 app                  # Cấu trúc routing Next.js (App Router)
 ┃ ┣ 📜 layout.tsx         # Root layout (Font, CSS, Metadata SEO)
 ┃ ┣ 📜 page.tsx           # Trang chủ chứa toàn bộ khung giao diện
 ┃ ┗ 📜 globals.css        # Khai báo CSS cốt lõi & Tailwind v4 Theme
 ┣ 📂 components           # Chứa các component độc lập tái sử dụng
 ┃ ┣ 📂 article            # Core: ArticleBody, ArticleMain, SidebarMarginalia
 ┃ ┣ 📂 ui                 # UI components: DropCap, GlossaryTooltip, QuoteSharer, RevealSection
 ┃ ┣ 📜 ReadingChrome.tsx  # Cụm thanh công cụ đọc (Cỡ chữ, In, Tập trung)
 ┃ ┣ 📜 RunningHead.tsx    # Thanh tiêu đề trôi (Sticky Topbar) scroll theo vị trí
 ┃ ┣ 📜 TableOfContents.tsx# Mục lục động (Desktop & Mobile Drawer)
 ┃ ┗ ...
 ┣ 📂 lib                  # Dữ liệu nội dung nghiên cứu (Cố định/Tĩnh)
 ┃ ┣ 📜 article-meta.ts    # Tiêu đề, meta description chuẩn SEO
 ┃ ┣ 📜 glossary-data.ts   # Từ điển giải nghĩa thuật ngữ (Glossary)
 ┃ ┣ 📜 references.ts      # Hệ thống các trích dẫn (Footnotes/Marginalia)
 ┃ ┗ 📜 toc-items.ts       # Cấu trúc của Mục Lục
 ┣ 📂 public               # Hình ảnh, font tĩnh, icons...
 ┗ 📜 package.json         # Danh sách thư viện và scripts
```

## 🚀 Hướng dẫn Cài đặt & Khởi chạy

### Yêu cầu hệ thống
*   Node.js phiên bản 18.x trở lên
*   NPM / Yarn / PNPM / Bun

### Các bước cài đặt
1. **Clone mã nguồn (nếu có Git repo):**
   ```bash
   git clone <repository_url>
   cd thienchuakhiemnhuong
   ```

2. **Cài đặt các gói phụ thuộc (Dependencies):**
   ```bash
   npm install
   # hoặc
   yarn install
   # hoặc
   pnpm install
   ```

3. **Chạy máy chủ phát triển (Development Server):**
   ```bash
   npm run dev
   ```
   *Trang web sẽ khả dụng tại `http://localhost:3000`*

4. **Xây dựng bản xuất bản (Production Build):**
   ```bash
   npm run build
   npm start
   ```

## ✏️ Hướng dẫn Tùy chỉnh Nội dung

Dự án được cố tình phân tách "Nội dung" (Data) ra khỏi "Giao diện" (UI) qua thư mục `lib/` để mọi nhà nghiên cứu dễ dàng thay đổi bài viết mới:

1.  **Nội dung bài học:** Được đặt tại `components/article/ArticleMain.tsx`. Bạn có thể thay đổi các đoạn văn bản (paragraph) và chèn các Component `<DropCap>`, `<GlossaryTooltip pattern="Từ khóa">` hoặc gọi thẻ `<sup className="ref">`.
2.  **Cập nhật trích dẫn lề:** Chỉnh sửa file `lib/references.ts` bằng cách bổ sung ID thứ tự `n` và nội dung citation.
3.  **Cập nhật Mục lục:** Thay đổi mảng trong `lib/toc-items.ts` để gán cho các Navigation tương ứng (lưu ý đảm bảo `id` phải trùng khớp với ID trong `ArticleMain`).
4.  **Cập nhật Meta SEO & OpenGraph:** Chỉ cần thay đổi tại file `lib/article-meta.ts` và hệ thống sẽ tự sinh các thẻ Metadata cần thiết.

---

*Coded with intention for scholarly and theological reading excellence.*
