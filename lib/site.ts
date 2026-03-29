/** URL gốc site — đặt NEXT_PUBLIC_SITE_URL khi deploy (vd https://tenmien.com). */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://tuananhhusc.github.io/Su-Khiem-Nhuong-Cua-Thien-Chua";
  return raw.replace(/\/$/, "");
}
