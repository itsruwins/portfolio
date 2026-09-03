import { brandPaths, evenOddMarks, outlineMarks } from "../lib/brand-icons";

/**
 * Chip mark: the tool's real logo where one exists, otherwise the neutral ⊙.
 * That is the reference's own pattern — it carries brand marks for the tools
 * that have them and falls back to ⊙ for the rest.
 *
 * Drawn in currentColor rather than brand colours, so the row reads as one
 * material and both themes work without a second set of assets.
 *
 * `size` follows the chip it sits in: 12px on the stack page's 28px chips,
 * 13px on the home page's slightly larger ones.
 */
export function BrandMark({ label, size = 12 }: { label: string; size?: number }) {
  const outline = outlineMarks[label];

  if (outline) {
    return (
      <svg
        width={size}
        height={size}
        viewBox={outline.viewBox}
        fill="none"
        stroke="currentColor"
        strokeWidth={outline.width}
        strokeLinecap="round"
        aria-hidden
        className="shrink-0"
      >
        {outline.paths.map((d) => (
          <path key={d} d={d} />
        ))}
      </svg>
    );
  }

  const path = brandPaths[label];

  if (path) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        className="shrink-0"
      >
        <path
          d={path}
          fillRule={evenOddMarks.has(label) ? "evenodd" : undefined}
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <circle
        cx="6"
        cy="6"
        r="4.6"
        stroke="currentColor"
        strokeWidth="1.1"
        opacity="0.75"
      />
      <circle cx="6" cy="6" r="1.35" fill="currentColor" />
    </svg>
  );
}
