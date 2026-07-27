"use client";

import type { ReactNode } from "react";
import { useLenis } from "@/lib/motion/use-lenis";
import { CustomCursor } from "@/lib/motion/cursor";

export function MotionProviders({ children }: { children: ReactNode }) {
  useLenis();

  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}
