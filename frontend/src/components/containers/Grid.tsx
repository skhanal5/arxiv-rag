import React from "react";

interface GridProps {
  children?: React.ReactNode; //todo: is this the right way?
  className?: string;
}

export default function Grid({ children, className }: GridProps) {
  return <div className={`grid ${className}`}>{children}</div>;
}