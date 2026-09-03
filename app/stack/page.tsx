import type { Metadata } from "next";

import { PageShell } from "../components/page-shell";
import { BrandMark } from "../components/brand-mark";
import { profile, stackGroups } from "../lib/data";

export const metadata: Metadata = {
  title: `Stack — ${profile.name}`,
  description: "The technical stack, organised by the role each tool plays.",
};

/**
 * Metrics read off the reference: 28px tall, and padded asymmetrically —
 * 7.2px on the icon side against 10.4px on the text side, so the glyph does
 * not look adrift from the edge.
 */
function Chip({ label }: { label: string }) {
  return (
    <li className="inline-flex h-7 items-center gap-[5.6px] rounded-full border border-line bg-surface pl-[7.2px] pr-[10.4px] text-[11px] font-medium text-muted transition-colors hover:border-line-strong hover:text-fg">
      <BrandMark label={label} />
      {label}
    </li>
  );
}

export default function StackPage() {
  return (
    <PageShell
      eyebrow="Stack directory"
      title="Tools I build with."
      intro="My technical stack, organised by the role each tool plays — from interface design through to deployment."
    >
      <div className="mt-9">
        {stackGroups.map((group, index) => (
          <section
            key={group.label}
            // py-6 puts the label-to-label pitch at the reference's 113px;
            // py-7 overshot it by 8.
            className={`grid grid-cols-1 gap-4 py-6 sm:grid-cols-[150px_1fr] sm:gap-6 ${
              index > 0 ? "border-t border-rule" : ""
            }`}
          >
            {/* The row's anchor, so it carries the weight: the reference sets these
                at 11px/500, and the chips beside them recede to muted. */}
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] sm:pt-1.5">
              {group.label}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item} label={item} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
