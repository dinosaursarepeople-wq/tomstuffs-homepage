"use client";

import { EncryptedText } from "@/components/ui/encrypted-text";

export function EncryptedTextDemoSecond() {
  return (
    <p className="mx-auto max-w-lg py-10 text-left text-lg leading-relaxed">
      <EncryptedText
        text="Signal locked: next drop incoming."
        encryptedClassName="text-blue/60"
        revealedClassName="text-gold"
        revealDelayMs={50}
      />
    </p>
  );
}
