"use client";

import React, { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const FigmaOutline: React.FC<ButtonProps> = function ({
  onClick,
  children,
}) {
  return (
    <button
      onClick={onClick}
      className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
    >
      {children}
    </button>
  );
};

export const InvertIt: React.FC<ButtonProps> = function ({
  onClick,
  children,
}) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
    >
      {children}
    </button>
  );
};
