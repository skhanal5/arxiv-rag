import React from "react";

interface ContainerProps {
  children?: React.ReactNode; //todo: is this the right way?
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={`flex ${className}`}>{children}</div>;
}