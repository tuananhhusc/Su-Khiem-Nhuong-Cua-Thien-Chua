import React from "react";

interface DropCapProps {
  children: string;
}

/**
 * An elegant drop cap for the first character of a paragraph.
 * Designed for academic/scholarly aesthetics.
 */
export function DropCap({ children }: DropCapProps) {
  if (!children || typeof children !== "string") return <>{children}</>;

  const firstChar = children.charAt(0);
  const rest = children.slice(1);

  return (
    <div className="relative overflow-visible pb-1">
      <span className="float-left mr-4 mt-1 flex h-[4rem] w-[4rem] items-center justify-center rounded-sm bg-paper-muted font-serif text-[3.8rem] font-bold leading-none text-st-joseph border-l-4 border-gold/40 shadow-sm select-none">
        {firstChar}
      </span>
      <span className="inline pt-1">{rest}</span>
    </div>
  );
}
