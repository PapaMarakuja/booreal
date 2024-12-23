import { ClassValue, clsx } from "clsx";
import { MotionValue, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export const variantsScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const variantsY = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};