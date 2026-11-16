import { ImageResponse } from "next/og";
import { personal } from "@/data/personal";

export const alt = "Deepak GM — Independent Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 4,
            color: "#777777",
            textTransform: "uppercase",
          }}
        >
          Deepak GM / Independent Builder
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 128,
            fontWeight: 800,
            color: "#080808",
            lineHeight: 1,
          }}
        >
          DEEPAK GM
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#164bff", fontWeight: 600 }}>
          {personal.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
