export interface Post {
  id: string;
  title: string;
  description?: string;
  slug: string;
  date: string;
  lastModified?: string;
  author: Author;
  tags?: string[];
  category?: string;
  readingTime?: number;
  featured?: boolean;
  image?: string;
  coverImageAlt?: string;
  coverImageCaption?: string;
  status?: string;
  language?: string;
  translations?: { lang: string; slug: string }[];
  series?: {
    name: string;
    order: number;
  };
  metadata?: {
    keywords: string[];
    ogImage?: string;
  };
  tableOfContents?: boolean;
  difficulty?: string;
  prerequisites?: string[];
  resources?: {
    title: string;
    url: string;
    type: string;
  }[];
  excerpt?: string;
  content: string;
}

export interface Author {
  name: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
    youtube?: string;
    medium?: string;
  };
  expertise: string[];
  location?: string;
  company?: string;
  role?: string;
  availableForHire?: boolean;
  featured: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  count: number;
  featured: boolean;
  icon?: string;
  parent?: string;
  children?: string[];
}

export interface Series {
  name: string;
  slug: string;
  description: string;
  posts: string[];
  totalPosts: number;
  image?: string;
  status: "ongoing" | "completed";
  difficulty: "beginner" | "intermediate" | "advanced";
}
