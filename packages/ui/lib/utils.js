import { clsx } from "clsx"
import { twMerge } from "tailwind-merge/dist"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
