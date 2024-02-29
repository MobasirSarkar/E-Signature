import { ReactNode } from "react";

interface CleanButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export function CleanButton({ children, onClick }: CleanButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-12 py-2.5 relative rounded-3xl group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
    >
      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
      <span className="relative group-hover:text-white">{children}</span>
    </button>
  );
}
