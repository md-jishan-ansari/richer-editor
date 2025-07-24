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


// Returns a safe JSON object from content.json, or a default doc if missing/invalid
export const getSafeContent = (content: { json?: object | string, html?: string } | undefined): object => {
  if (!content || !content.json) {
    return { type: 'doc', content: [{ type: 'paragraph' }] };
  }
  if (typeof content.json === 'object') {
    return content.json;
  }
  if (typeof content.json === 'string') {
      const parsed = JSON.parse(content.json);
      if (typeof parsed === 'object' && parsed !== null) {
        return parsed;
      }
  }
  return { type: 'doc', content: [{ type: 'paragraph' }] };
};
