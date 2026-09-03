import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { profile, siteUrl } from "./lib/data";

export const alt = `${profile.name} — Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The card link previews unfurl to — Discord, Slack, iMessage, X. Without one
 * a share is title and description only; this is the same hero the site opens
 * with, so the preview and the page read as one thing.
 *
 * Generated at build time (no request-time APIs here), so it costs nothing per
 * share. Satori draws it, which means flex only — no grid — and fonts have to
 * be handed over as buffers, hence the two Geist files in /assets.
 */
export default async function Image() {
  const [geist400, geist600, headshot] = await Promise.all([
    readFile(join(process.cwd(), "assets/geist-400.ttf")),
    readFile(join(process.cwd(), "assets/geist-600.ttf")),
    readFile(join(process.cwd(), "app/headshot-halftone.png")),
  ]);

  const portrait = `data:image/png;base64,${headshot.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 80px",
          // The site's light palette, verbatim: --bg over --fg.
          background: "#f5f5f5",
          color: "#131313",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              fontSize: 21,
              fontWeight: 600,
              letterSpacing: 3.4,
              color: "#6f6f6f",
            }}
          >
            PORTFOLIO
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 76,
              fontWeight: 600,
              letterSpacing: -2.6,
              lineHeight: 1.05,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 27,
              lineHeight: 1.45,
              color: "#4a4a4a",
            }}
          >
            Full-stack developer building modern web apps with a focus on
            UI/UX and AI integration.
          </div>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 22,
              color: "#6f6f6f",
            }}
          >
            {/* Globe: the plainest "this is a website" mark, and it keeps the
                domain line from being mistaken for another stack chip. */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6f6f6f"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="9.25" />
              <ellipse cx="12" cy="12" rx="4.1" ry="9.25" />
              <path d="M2.75 12h18.5" />
            </svg>
            {siteUrl.replace("https://", "")}
          </div>
        </div>
        {/* Same treatment as the hero portrait: 182/221, rounded, hairline. */}
        <img
          src={portrait}
          alt=""
          width={364}
          height={442}
          style={{
            borderRadius: 20,
            border: "1px solid #e5e5e5",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geist400, style: "normal", weight: 400 },
        { name: "Geist", data: geist600, style: "normal", weight: 600 },
      ],
    },
  );
}
