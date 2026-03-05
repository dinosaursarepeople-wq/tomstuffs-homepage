"use client";

import { useEffect, useMemo, useState } from "react";

type EncryptedTextProps = {
  text: string;
  encryptedClassName?: string;
  revealedClassName?: string;
  revealDelayMs?: number;
};

const GLYPHS = "!<>-_\\/[]{}-=+*^?#________";

export function EncryptedText({
  text,
  encryptedClassName = "",
  revealedClassName = "",
  revealDelayMs = 35,
}: EncryptedTextProps) {
  const [revealIndex, setRevealIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRevealIndex((prev) => {
        if (prev >= text.length) {
          window.clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, revealDelayMs);

    return () => window.clearInterval(interval);
  }, [text, revealDelayMs]);

  const encryptedTail = useMemo(() => {
    const rest = text.slice(revealIndex);
    return rest
      .split("")
      .map((char, index) => {
        if (char === " ") return " ";
        // Deterministic pseudo-random glyph selection to satisfy render purity.
        const seed = char.charCodeAt(0) * 31 + (revealIndex + index) * 17;
        const idx = Math.abs(seed) % GLYPHS.length;
        return GLYPHS[idx];
      })
      .join("");
  }, [revealIndex, text]);

  const revealedHead = text.slice(0, revealIndex);

  return (
    <span aria-label={text} role="text" className="font-mono tracking-wide">
      <span className={revealedClassName}>{revealedHead}</span>
      <span className={encryptedClassName}>{encryptedTail}</span>
    </span>
  );
}
