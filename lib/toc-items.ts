/** Mục lục — id khớp với section / heading trong bài (ScrollSpy). */
export type TocItem = {
  id: string;
  label: string;
  depth: 2 | 3;
};

export const tocItems: TocItem[] = [
  { id: "dan-nhap", label: "I. Dẫn nhập", depth: 2 },
  { id: "ban-the-luan", label: "II. Bản thể luận (Kinh viện)", depth: 2 },
  { id: "thanh-toma", label: "Thánh Tôma về Ngôi Lời Nhập Thể", depth: 3 },
  { id: "khiem-nhuong-cao-thuong", label: "Khiêm nhường & cao thượng", depth: 3 },
  { id: "kenosis", label: "III. Mầu nhiệm Kenosis (Pl 2:5–11)", depth: 2 },
  { id: "hanh-trinh-kenosis", label: "Hành trình tự hủy của Ngôi Lời", depth: 3 },
  { id: "dao-nguoc-quyen-luc", label: "Đảo ngược cấu trúc quyền lực", depth: 3 },
  { id: "kenosis-lanh-dao", label: "Kenosis trong lãnh đạo đương đại", depth: 3 },
  { id: "dinh-cao", label: "IV. Thập Giá, Ba Ngôi & rửa chân", depth: 2 },
  { id: "balthasar", label: "Hans Urs von Balthasar", depth: 3 },
  { id: "rua-chan", label: "Hình ảnh rửa chân", depth: 3 },
  { id: "thap-gia-khon-ngoan", label: "Thập Giá & khôn ngoan thần linh", depth: 3 },
  { id: "huan-quyen", label: "V. Giáo huấn Huấn quyền đương đại", depth: 2 },
  { id: "benedict-xvi", label: "Đức Bênêđictô XVI & Agape", depth: 3 },
  { id: "phanxico", label: "Đức Phanxicô & tinh thần thế gian", depth: 3 },
  { id: "kieu-ngao", label: "VI. Kiêu ngạo & quyền năng", depth: 2 },
  { id: "cau-truc-kieu-ngao", label: "Cấu trúc bệnh lý của kiêu ngạo", depth: 3 },
  { id: "giai-doc", label: "Giải độc kiêu ngạo", depth: 3 },
  { id: "thanh-hoa", label: "VII. Các cấp độ khiêm nhường", depth: 2 },
  { id: "anselm", label: "Bảy bậc — Thánh Anselmô", depth: 3 },
  { id: "benedict-12", label: "Mười hai bậc — Thánh Bênêđictô", depth: 3 },
  { id: "inhaxio", label: "Ba bậc — Thánh Inhaxiô Lôyôla", depth: 3 },
  { id: "thuc-hanh", label: "VIII. Kinh nghiệm các thánh", depth: 2 },
  { id: "cac-thanh", label: "Lời các vị thánh", depth: 3 },
  { id: "cong-doan", label: "Khiêm nhường trong cộng đoàn", depth: 3 },
  { id: "kinh-khiem-nhuong", label: "Kinh Cầu Khiêm Nhường", depth: 3 },
  { id: "ket-luan", label: "IX. Kết luận", depth: 2 },
  { id: "nguon-trich-dan", label: "Nguồn trích dẫn", depth: 2 },
];
