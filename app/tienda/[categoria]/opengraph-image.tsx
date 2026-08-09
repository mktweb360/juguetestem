import { ImageResponse } from "next/og";
import { categories } from "@/data/products";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return categories.map((c) => ({ categoria: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params;
  const cat = categories.find((c) => c.slug === categoria);
  const name = cat?.name ?? "Juguetes";
  const icon = cat?.icon ?? "🧸";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#7c3aed",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "70px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 28 }}>{icon}</div>
        <div
          style={{
            color: "#ddd6fe",
            fontSize: 26,
            fontWeight: 600,
            marginBottom: 16,
            textTransform: "uppercase",
            letterSpacing: "3px",
          }}
        >
          Guía de compra
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 60,
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: 1.1,
            marginBottom: 32,
            maxWidth: 900,
          }}
        >
          {name}
        </div>
        <div style={{ color: "#a78bfa", fontSize: 24, fontWeight: 600 }}>
          juguetestem.es
        </div>
      </div>
    ),
    { ...size }
  );
}
