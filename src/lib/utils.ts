import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function getTime(time: any) : string {
  const milliseconds = time * 1000;
  const date = new Date(milliseconds);
  return date.toLocaleTimeString();
}

export function getDate(time : any) :string {
  const milliseconds = time * 1000;
  const date = new Date(milliseconds);
  return date.toLocaleDateString();
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}