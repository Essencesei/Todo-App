import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  const image = await fetch(new URL("/todoapp.png", import.meta.url)).then(
    (res) => res.arrayBuffer()
  );
  const buffer = Buffer.from(image);
  const imageData = `data:image/png;base64,${buffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img width="256" height="256" src={imageData} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
