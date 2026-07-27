import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #06070a 0%, #0c3d2b 60%, #06070a 100%)",
          color: "#f6f4ec",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 32, fontWeight: 600 }}>
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              background: "linear-gradient(135deg, #34d399 0%, #22c58f 45%, #2dd4bf 100%)",
              color: "#06120d",
            }}
          >
            D
          </div>
          {site.name}
        </div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 64, fontWeight: 600, lineHeight: 1.1, maxWidth: 900 }}>
          {site.tagline}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 28, color: "#a8b2ac", maxWidth: 800 }}>
          {site.mission}
        </div>
      </div>
    ),
    { ...size }
  );
}
