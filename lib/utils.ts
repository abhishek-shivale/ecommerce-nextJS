import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface cartType {
  id:number
  title: string;
  colour:string,
  image: string
  quantity:number
} 