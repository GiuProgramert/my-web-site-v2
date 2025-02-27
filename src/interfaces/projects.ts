export type ProjectTag =
  | "React.js"
  | "Tailwind CSS"
  | "Astro"
  | "Zustand"
  | "Node.js"
  | "Express.js"
  | "Python"
  | "Web scraping"
  | "Next.js"
  | "TypeScript"
  | "Django REST Framework"
  | "Django";

export interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  url: string;
  sourceUrl?: string;
  img?: ImageMetadata;
  imgClassName?: string;
  imgLoading?: "eager" | "lazy";
}
