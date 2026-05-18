import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0f0f11",
          backgroundImage:
            "linear-gradient(to right,rgba(244,244,246,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(244,244,246,0.04) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          padding: "64px 72px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: 28 }}>
          <div
            style={{
              width: 52,
              height: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#0f0f11",
              border: "1.5px solid rgba(16,185,129,0.55)",
              borderRadius: 26,
              fontSize: 18,
              fontWeight: 700,
              color: "#10b981",
              letterSpacing: "-0.5px",
              marginRight: 20,
            }}
          >
            HA
          </div>
          <span
            style={{
              fontSize: 15,
              color: "rgba(16,185,129,0.7)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            harelasher.com
          </span>
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#f4f4f6",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            marginBottom: 16,
          }}
        >
          Harel Asher
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#10b981",
            fontWeight: 500,
            marginBottom: 40,
          }}
        >
          Software Developer
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {["GenAI", "Full-Stack", "RAG / Embeddings", "TypeScript", "Python"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 16px",
                  border: "1px solid rgba(16,185,129,0.3)",
                  borderRadius: 4,
                  fontSize: 14,
                  color: "rgba(244,244,246,0.65)",
                  letterSpacing: "0.04em",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
