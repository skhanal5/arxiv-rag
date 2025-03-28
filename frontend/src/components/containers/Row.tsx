import React from "react";

interface FlexProps {
  children?: React.ReactNode; //todo: is this the right way?
  className?: string;
}

export default function Flex({ children, className }: FlexProps) {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
}