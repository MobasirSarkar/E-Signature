import React, { ReactNode } from "react";

export function TypographyH1({ children }: { children: ReactNode }) {
  return (
    <h1 className="scroll-m-20 font-extrabold tracking-tight logo text-cyan-500">
      {children}
    </h1>
  );
}

export function TypographyH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="scroll-m-20 font-semibold tracking-tight footertext">
      {children}
    </h3>
  );
}

export function TypographyH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}
