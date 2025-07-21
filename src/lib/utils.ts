import { clsx, type ClassValue } from "clsx"

/**
 * Merges class names using clsx.
 * @param {...ClassValue[]} inputs - Class names, arrays, or objects to merge
 * @returns {string} The merged class string
 */
export function cn(...inputs: ClassValue[]): string {
  // Use clsx to merge class names
  return clsx(...inputs)
}
