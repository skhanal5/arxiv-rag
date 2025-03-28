import React from "react";

interface ColumnProps {
  children?: React.ReactNode; //todo: is this the right way?
  className?: string;
}

export default function Column({ children, className }: ColumnProps) {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
}