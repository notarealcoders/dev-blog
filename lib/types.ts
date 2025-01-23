export interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  date: string;
  author: Author;
  tags: string[];
  category: string;
  readingTime: number;
  featured: boolean;
  image: string;
  excerpt: string;
  lastModified?: string;
  series?: {
    name: string;
    order: number;
  };
  coverImageAlt?: string;
  coverImageCaption?: string;
  status: "draft" | "published";
  language: string;
  translations?: {
    lang: string;
    slug: string;
  }[];
  metadata: {
    keywords: string[];
    canonical?: string;
    ogImage?: string;
  };
  tableOfContents?: boolean;
  difficulty: "beginner" | "intermediate" | "advanced";
  prerequisites?: string[];
  relatedPosts?: string[];
  resources?: {
    title: string;
    url: string;
    type: "github" | "demo" | "docs" | "video" | "article";
  }[];
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
