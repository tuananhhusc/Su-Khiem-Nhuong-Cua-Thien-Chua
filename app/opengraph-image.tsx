import { ImageResponse } from "next/og";

export const alt = "Sự khiêm nhường của Thiên Chúa — Báo Cáo Nghiên Cứu Chuyên Sâu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(165deg, #f7f2e8 0%, #efe8dc 45%, #e5e1e6 100%)",
          padding: 56,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 980,
            borderLeft: "8px solid #d1bd71",
            paddingLeft: 40,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <p
              style={{
                fontSize: 24,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#d1bd71",
                margin: 0,
                fontWeight: 800,
              }}
            >
              Báo Cáo Nghiên Cứu Chuyên Sâu
            </p>
            <div style={{ height: "2px", width: "120px", background: "#d1bd7140" }}></div>
          </div>
          
          <p
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              color: "#002855",
              margin: 0,
              fontWeight: 800,
              // Giả lập Serif nếu không load được font ngoại
              fontFamily: "serif",
              fontStyle: "italic",
            }}
          >
            Sự khiêm nhường của Thiên Chúa
          </p>
          
          <p style={{ fontSize: 28, color: "#3d2914", margin: 0, lineHeight: 1.45, fontWeight: 500 }}>
            Kenosis · Thần học kinh viện · Kinh Thánh · Huấn quyền
          </p>
          
          <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontSize: 32, color: "#d1bd71" }}>❧</div>
            <p style={{ fontSize: 20, color: "#5c4a38", margin: 0, letterSpacing: "0.1em" }}>
              RESEARCH REPORRT 2026
            </p>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
