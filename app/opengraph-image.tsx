import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "JugueteSTEM.es — Juguetes educativos y STEM para niños";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div style={{ background: "#7c3aed", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px" }}>
      <div style={{ color: "#ffffff", fontSize: 72, fontWeight: 800, letterSpacing: "-2px", marginBottom: 24, textAlign: "center" }}>JugueteSTEM.es</div>
      <div style={{ color: "#ddd6fe", fontSize: 32, fontWeight: 400, textAlign: "center", maxWidth: 800 }}>Juguetes educativos y STEM para niños</div>
      <div style={{ position: "absolute", bottom: 48, right: 60, color: "#a78bfa", fontSize: 22, fontWeight: 600 }}>juguetestem.es</div>
    </div>,
    { ...size }
  );
}
