"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CustomProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  className?: string;
  barClassName?: string;
}

export function CustomProgress({
  value = 0,
  max = 100,
  className,
  barClassName,
  ...props
}: CustomProgressProps) {
  // Asegurarse de que el valor esté entre 0 y max
  const percentage = (Math.min(Math.max(0, value), max) / max) * 100;

  return (
    <div
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "h-full bg-primary transition-all duration-300 ease-in-out",
          barClassName
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
