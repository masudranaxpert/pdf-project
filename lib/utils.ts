import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format file size from bytes to human-readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
}

/**
 * Mock file processing delay (simulates processing time)
 */
export async function mockProcessing(duration: number = 2000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

/**
 * Generate a random file size for demo purposes
 */
export function generateMockFileSize(min: number = 100000, max: number = 5000000): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
