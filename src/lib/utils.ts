import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * combines list of class values into a single string
 * @param inputs comma-separated class values
 * @returns string
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/**
 * formats date string to MMM-DD-YYYY
 * @param dateString date in string
 * @returns formatted date in MMM-DD-YYYY
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

/**
 * truncates the provided text by the given max length
 * @param text text to be truncated if max length is reached
 * @param maxLength max number of characters displayed
 * @returns truncated text (25characters...)
 */
export const truncateText = (text: string, maxLength: number = 25) => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + "...";
};

/**
 * accepts a string and capitalizes the first letter
 * @param text string to capitalize first letter
 * @returns text with capitalized first letter
 */
export const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * separates every occurrence of uppercase characters with space
 * @param text
 * @returns space-separated text
 */
export const separateUppercaseWithSpace = (text: string) => {
  return text.replace(/([A-Z])/g, " $1").trim();
};
