import { ImageResponse } from "next/og";
import { products, getProductBySlug, categories } from "@/data/products";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return products.map((p) => ({ categoria: p.categorySlug, producto: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ categoria: string; producto: string }> }) {
  const { categoria, producto } = await params;
  const product = getProductBySlug(producto);
  const cat = categories.find((c) => c.slug === categoria);
  const name = product?.name ?? "Juguete";
  const description = product?.shortDescription ?? "";
  const icon = cat?.icon ?? "🧸";
  const badge = product?.badge;

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
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
          <div style={{ fontSize: 56 }}>{icon}</div>
          {badge && (
            <div
              style={{
                background: "rgba(255,255,255,0.20)",
                borderRadius: 999,
                padding: "8px 22px",
                fontSize: 18,
                color: "white",
                fontWeight: 700,
              }}
            >
              {badge}
            </div>
          )}
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 52,
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: 20,
            maxWidth: 900,
            letterSpacing: "-1px",
          }}
        >
          {name}
        </div>
        {description && (
          <div
            style={{
              color: "#ddd6fe",
              fontSize: 24,
              maxWidth: 850,
              lineHeight: 1.4,
              marginBottom: 36,
            }}
          >
            {description.length > 130 ? description.slice(0, 127) + "…" : description}
          </div>
        )}
        <div style={{ color: "#a78bfa", fontSize: 22, fontWeight: 600 }}>
          juguetestem.es
        </div>
      </div>
    ),
    { ...size }
  );
}
