import React from "react";

/**
 * An ornamental divider (fleuron) used to separate major sections
 * in high-end academic/scholastic documents.
 */
export function FleuronDivider() {
  return (
    <div className="flex items-center justify-center my-20 not-prose opacity-70">
      <div className="flex flex-col items-center gap-1 group">
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-gold/30"></div>
          <span className="text-2xl text-gold-hover font-serif select-none" aria-hidden="true">
            ❦
          </span>
          <div className="h-px w-8 bg-gold/30"></div>
        </div>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      </div>
    </div>
  );
}
