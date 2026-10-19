import { Fragment } from 'react';

/** Renders `==phrase==` spans in study text as highlighted, bold text. */
export function Highlighted({ text }: { text: string }) {
  const parts = text.split(/==(.+?)==/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark
            key={i}
            className="rounded bg-yellow-300/40 px-0.5 font-semibold text-foreground dark:bg-yellow-400/25"
          >
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
