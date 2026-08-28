import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = site.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [archivo, plexMono] = await Promise.all([
    fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/archivo@latest/latin-600-normal.ttf",
    ).then((res) => res.arrayBuffer()),
    fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-mono@latest/latin-400-normal.ttf",
    ).then((res) => res.arrayBuffer()),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#0f2a3d",
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontFamily: "IBM Plex Mono",
          fontSize: 24,
          color: "#7fa6bc",
          letterSpacing: 2,
        }}
      >
        {site.name.toUpperCase()} — {site.role.toUpperCase()}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 32,
          fontFamily: "Archivo",
          fontWeight: 600,
          fontSize: 64,
          lineHeight: 1.15,
          color: "#e8f1f5",
          maxWidth: 900,
        }}
      >
        {site.headline}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 40,
          width: 120,
          height: 4,
          backgroundColor: "#ff7a45",
        }}
      />
    </div>,
    {
      ...size,
      fonts: [
        { name: "Archivo", data: archivo, weight: 600, style: "normal" },
        {
          name: "IBM Plex Mono",
          data: plexMono,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );
}
