export type GlossaryTerm = {
  term: string;
  definition: string;
  phonetic?: string;
};

export const glossaryData: GlossaryTerm[] = [
  {
    term: "Kenosis",
    phonetic: "/kɪˈnoʊsɪs/",
    definition: "Khái niệm 'tự hủy' hay 'làm cho trống rỗng'. Trong thần học Kitô giáo, đây là hành động Ngôi Lời tự nguyện trút bỏ vinh quang thần linh để mặc lấy thân phận con người và chịu khổ hình.",
  },
  {
    term: "Agape",
    phonetic: "/ɑːˈɡɑːpeɪ/",
    definition: "Tình yêu hy hiến, vô vị lợi và không điều kiện. Khác với Eros (tình yêu khao khát), Agape là bản chất của tình yêu Thiên Chúa dành cho nhân loại, luôn tìm kiếm lợi ích cho người được yêu.",
  },
  {
    term: "Hypostatic Union",
    phonetic: "/ˌhaɪpəˈstætɪk/",
    definition: "Sự hiệp nhất ngôi vị: Tín điều khẳng định trong một Ngôi Vị duy nhất của Chúa Kitô có hai bản tính (Thiên tính và Nhân tính) hiệp nhất không lẫn lộn, không thay đổi, không chia cắt.",
  },
  {
    term: "Scholasticism",
    definition: "Triết học/Thần học Kinh viện: Phương pháp tư duy tri thức thống trị các đại học châu Âu thời Trung cổ, sử dụng lý trí và logic để giải thích đức tin (tiêu biểu là Thánh Tôma Aquinô).",
  },
  {
    term: "Ex nihilo",
    definition: "Sáng tạo từ hư vô: Tín điều khẳng định Thiên Chúa tạo dựng vũ trụ không từ bất kỳ chất liệu có sẵn nào, mà bằng quyền năng tuyệt đối từ hư không.",
  },
  {
    term: "Huấn quyền",
    definition: "Magisterium: Quyền giảng dạy chính thức của Giáo hội Công giáo (Giáo hoàng và các Giám mục) để giải thích Lời Chúa và gìn giữ kho tàng đức tin.",
  },
];
