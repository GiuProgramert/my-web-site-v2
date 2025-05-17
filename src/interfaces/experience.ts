import type { ImageMetadata } from "astro";

export interface Experience {
  urlImg: ImageMetadata;
  title: string;
  description: string | string[];
  company: string;
  fromDate: Date;
  toDate: Date | null;
  imgLoading?: "eager" | "lazy";
}
