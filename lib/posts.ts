import { Post, Author } from "./types";
import { paginateItems, PaginationResult } from "./utils/pagination";
import { User } from "lucide-react";

const DEFAULT_POST_IMAGE =
  "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=630&fit=crop";

const author: Author = {
  name: "John Doe",
  bio: "Senior Software Engineer passionate about web development and teaching others.",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  social: {
    twitter: "johndoe",
    github: "johndoe",
    linkedin: "johndoe",
  },
  expertise: ["Web Development", "JavaScript", "React"],
  featured: true,
};

const janeSmith: Author = {
  name: "Jane Smith",
  bio: "Full-stack developer and technical writer specializing in modern web technologies.",
  avatar:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  social: {
    twitter: "janesmith",
    github: "janesmith",
    linkedin: "janesmith",
  },
  expertise: ["Full Stack", "Technical Writing", "Node.js"],
  featured: true,
};

const sarahJohnson: Author = {
  name: "Sarah Johnson",
  bio: "DevOps engineer with a passion for automation and cloud technologies.",
  avatar:
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
  social: {
    twitter: "sarahjohnson",
    github: "sarahjohnson",
    linkedin: "sarahjohnson",
  },
  expertise: ["DevOps", "Cloud", "Automation"],
  featured: true,
};

export const posts: Post[] = [
  {
    id: "1",
    title: "Building a Modern Blog with Next.js and TypeScript",
    description:
      "A comprehensive guide to creating a full-featured blog using Next.js 13+, TypeScript, and modern web technologies.",
    slug: "building-modern-blog-nextjs-typescript",
    date: "2024-01-15T12:00:00Z",
    lastModified: "2024-01-20T15:30:00Z",
    author: author,
    // {
    //   name: "John Doe",
    //   bio: "Full-stack developer with 8+ years of experience. Passionate about React, TypeScript, and modern web development.",
    //   avatar: "/authors/john-doe.jpg",
    //   social: {
    //     twitter: "johndoe",
    //     github: "johndoe",
    //     linkedin: "johndoe",
    //     website: "https://johndoe.dev",
    //   },
    //   expertise: ["React", "TypeScript", "Next.js", "Node.js"],
    //   role: "Senior Software Engineer",
    //   company: "TechCorp",
    //   featured: true,
    // },
    tags: ["nextjs", "typescript", "react", "tailwindcss", "markdown"],
    category: "Web Development",
    readingTime: 15,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop",
    coverImageAlt:
      "Modern blog interface showing clean typography and responsive design",
    coverImageCaption: "A preview of our finished blog application",
    status: "published",
    language: "en",
    translations: [
      { lang: "es", slug: "construyendo-blog-moderno-nextjs-typescript" },
    ],
    series: {
      name: "Modern Web Development",
      order: 1,
    },
    metadata: {
      keywords: [
        "nextjs",
        "typescript",
        "blog",
        "web development",
        "react",
        "tailwindcss",
      ],
      ogImage: "/blog/modern-blog-og.jpg",
    },
    tableOfContents: true,
    difficulty: "intermediate",
    prerequisites: [
      "Basic knowledge of React",
      "Familiarity with TypeScript",
      "Understanding of web development concepts",
    ],
    resources: [
      {
        title: "Source Code",
        url: "https://github.com/example/modern-blog",
        type: "github",
      },
      {
        title: "Live Demo",
        url: "https://modern-blog-demo.vercel.app",
        type: "demo",
      },
    ],
    excerpt:
      "Learn how to build a modern, feature-rich blog using Next.js 13+, TypeScript, and TailwindCSS. We'll cover everything from setup to deployment.",
    content: `
# Building a Modern Blog with Next.js and TypeScript

In this comprehensive guide, we'll walk through building a modern blog platform using Next.js 13+ and TypeScript. We'll cover everything from initial setup to advanced features and deployment.

## Prerequisites

Before we begin, make sure you have:
- Basic knowledge of React
- Familiarity with TypeScript
- Understanding of web development concepts

## Getting Started

First, let's create a new Next.js project with TypeScript:

\`\`\`bash
npx create-next-app@latest my-blog --typescript --tailwind --eslint
\`\`\`

## Project Structure

We'll organize our project using a clean, maintainable structure:

\`\`\`
my-blog/
├── app/
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── components/
│   │   └── ui/
│   └── layout.tsx
├── lib/
│   ├── types.ts
│   └── posts.ts
└── public/
    └── blog/
\`\`\`

## Key Features

1. **Markdown Support**
   - Parse and render Markdown content
   - Syntax highlighting for code blocks
   - Custom components for rich content

2. **Performance Optimization**
   - Static site generation
   - Image optimization
   - Code splitting

3. **User Experience**
   - Dark mode support
   - Responsive design
   - Smooth transitions

## Implementation Details

Let's dive into the implementation...
    `,
  },
  {
    id: "2",
    title: "Building Scalable APIs with GraphQL",
    description:
      "Learn how to design and implement scalable GraphQL APIs that can handle complex queries and real-time updates efficiently.",
    content: `# Building Scalable APIs with GraphQL

GraphQL has revolutionized how we think about API design. This guide will help you understand how to build scalable GraphQL APIs.

## Why GraphQL?

GraphQL offers several advantages over traditional REST APIs:
- Flexible data fetching
- Strong typing system
- Real-time capabilities
- Efficient bandwidth usage

## Schema Design

A well-designed schema is crucial for a scalable GraphQL API.

\`\`\`graphql
type User {
  id: ID!
  name: String!
  posts: [Post!]!
  followers: [User!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}
\`\`\`

## Performance Optimization

Learn about DataLoader and caching strategies to prevent N+1 queries.

## Best Practices

1. Use pagination
2. Implement proper error handling
3. Consider rate limiting
4. Monitor performance

## Security Considerations

- Input validation
- Authentication
- Authorization
- Query complexity analysis`,
    slug: "building-scalable-graphql-apis",
    date: "2024-03-24",
    author: janeSmith,
    tags: ["graphql", "api", "backend"],
    category: "Backend",
    readingTime: 12,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop",
    excerpt:
      "Learn how to design and implement scalable GraphQL APIs with best practices for performance and security.",
    status: "published",
    language: "en",
    metadata: {
      keywords: ["graphql", "api", "backend", "development"],
    },
    difficulty: "intermediate",
  },
  {
    id: "3",
    title: "Mastering TypeScript: Advanced Types and Patterns",
    description:
      "Explore advanced TypeScript features and design patterns to write more maintainable and type-safe code.",
    content: `# Mastering TypeScript: Advanced Types and Patterns

TypeScript provides powerful type system features that can help you write safer and more maintainable code.

## Advanced Types

### Conditional Types
\`\`\`typescript
type IsString<T> = T extends string ? true : false;
\`\`\`

### Mapped Types
\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
\`\`\`

### Template Literal Types
\`\`\`typescript
type EventName = \`on\${Capitalize<string>}\`;
\`\`\`

## Design Patterns

1. Builder Pattern
2. Factory Pattern
3. Observer Pattern
4. Singleton Pattern

## Best Practices

- Use strict mode
- Leverage type inference
- Write reusable utility types
- Document complex types`,
    slug: "mastering-typescript-advanced-types",
    date: "2024-03-23",
    author,
    tags: ["typescript", "javascript", "programming"],
    category: "TypeScript",
    readingTime: 15,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=630&fit=crop",
    excerpt:
      "Deep dive into TypeScript's advanced type system and design patterns for building robust applications.",
    status: "published",
    language: "en",
    metadata: {
      keywords: ["typescript", "javascript", "programming", "types"],
    },
    difficulty: "advanced",
  },
  {
    id: "4",
    title: "Implementing CI/CD with GitHub Actions",
    description:
      "A comprehensive guide to setting up automated workflows for testing, building, and deploying applications using GitHub Actions.",
    content: `# Implementing CI/CD with GitHub Actions

Learn how to automate your development workflow using GitHub Actions.

## Getting Started

Create your first workflow:

\`\`\`yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run build
\`\`\`

## Advanced Features

- Matrix builds
- Environment secrets
- Caching dependencies
- Custom actions

## Best Practices

1. Keep workflows focused
2. Use reusable workflows
3. Implement proper testing
4. Monitor workflow performance`,
    slug: "implementing-cicd-github-actions",
    date: "2024-03-22",
    author: sarahJohnson,
    tags: ["devops", "github", "automation"],
    category: "DevOps",
    readingTime: 10,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&h=630&fit=crop",
    excerpt:
      "Learn how to set up and optimize CI/CD pipelines using GitHub Actions for automated testing and deployment.",
    status: "published",
    language: "en",
    metadata: {
      keywords: ["devops", "github", "automation", "cicd"],
    },
    difficulty: "intermediate",
  },
  {
    id: "5",
    title: "State Management in React: Beyond Redux",
    description:
      "Explore modern state management solutions in React, including Context API, Zustand, Jotai, and when to use each.",
    content: `# State Management in React: Beyond Redux

Modern React applications have many options for state management. Let's explore the alternatives to Redux.

## Context API + useReducer

Perfect for simple to medium complexity applications:

\`\`\`jsx
const StateContext = createContext();
const DispatchContext = createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
\`\`\`

## Zustand

Simple yet powerful state management:

\`\`\`typescript
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
\`\`\`

## Jotai

Atomic state management:

\`\`\`typescript
import { atom, useAtom } from 'jotai';

const countAtom = atom(0);
function Counter() {
  const [count, setCount] = useAtom(countAtom);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\`

## Choosing the Right Solution

Factors to consider:
1. Application size
2. Team experience
3. Performance requirements
4. Bundle size concerns`,
    slug: "state-management-react-beyond-redux",
    date: "2024-03-21",
    author: janeSmith,
    tags: ["react", "state-management", "javascript"],
    category: "React",
    readingTime: 12,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1200&h=630&fit=crop",
    excerpt:
      "Explore modern alternatives to Redux for state management in React applications, including Context API, Zustand, and Jotai.",
    status: "published",
    language: "en",
    metadata: {
      keywords: ["react", "state-management", "javascript", "redux"],
    },
    difficulty: "intermediate",
  },
  {
    id: "6",
    title: "Optimizing Next.js Applications",
    description:
      "Learn advanced techniques for optimizing Next.js applications, including image optimization, code splitting, and caching strategies.",
    content: `# Optimizing Next.js Applications

Performance optimization is crucial for modern web applications. Let's explore how to optimize Next.js apps.

## Image Optimization

Use the Image component effectively:

\`\`\`jsx
import Image from 'next/image';

function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      priority
      placeholder="blur"
    />
  );
}
\`\`\`

## Code Splitting

Implement dynamic imports:

\`\`\`jsx
const DynamicComponent = dynamic(() => import('../components/Heavy'), {
  loading: () => <p>Loading...</p>
});
\`\`\`

## Caching Strategies

1. Static Generation
2. Incremental Static Regeneration
3. On-demand Revalidation

## Performance Monitoring

- Core Web Vitals
- Lighthouse scores
- Real user monitoring`,
    slug: "optimizing-nextjs-applications",
    date: "2024-03-20",
    author,
    tags: ["nextjs", "performance", "optimization"],
    category: "Next.js",
    readingTime: 10,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
    excerpt:
      "Master advanced techniques for optimizing Next.js applications, from image optimization to caching strategies.",
    status: "published",
    language: "en",
    metadata: {
      keywords: ["nextjs", "performance", "optimization", "web"],
    },
    difficulty: "intermediate",
  },
  {
    id: "7",
    title: "Understanding Web Accessibility (A11y)",
    description:
      "A comprehensive guide to making your web applications accessible to all users.",
    content: `# Understanding Web Accessibility (A11y)

Learn how to make your web applications accessible to all users, including those with disabilities.

## Why Accessibility Matters

- Legal requirements
- Broader user reach
- Better SEO
- Improved usability for everyone

## Key Areas of Focus

### 1. Semantic HTML
\`\`\`html
<!-- Bad -->
<div class="button" onclick="submit()">Submit</div>

<!-- Good -->
<button type="submit">Submit</button>
\`\`\`

### 2. ARIA Labels
\`\`\`html
<button aria-label="Close menu" class="menu-toggle">
  <svg>...</svg>
</button>
\`\`\`

### 3. Keyboard Navigation
\`\`\`javascript
function handleKeyPress(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    activateButton();
  }
}
\`\`\`

## Testing Tools

1. WAVE
2. Lighthouse
3. axe DevTools
4. Screen readers`,
    slug: "understanding-web-accessibility",
    date: "2024-03-19",
    author: janeSmith,
    tags: ["accessibility", "web", "usability", "html"],
    category: "Web Development",
    readingTime: 12,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1200&h=630&fit=crop",
    excerpt:
      "Learn how to make your web applications accessible to all users through semantic HTML, ARIA labels, and proper keyboard navigation.",
    status: "published",
  },
  {
    id: "8",
    title: "Microservices vs Monoliths: Making the Right Choice",
    description:
      "An in-depth comparison of microservices and monolithic architectures.",
    content: `# Microservices vs Monoliths

Understanding when to choose between microservices and monolithic architectures.

## Monolithic Architecture

### Advantages
- Simpler development
- Easier deployment
- Better performance for small apps

### Disadvantages
- Scaling challenges
- Technology lock-in
- Complex maintenance as app grows

## Microservices Architecture

### Advantages
- Independent scaling
- Technology flexibility
- Easier maintenance

### Disadvantages
- Complex deployment
- Network latency
- Data consistency challenges

## Decision Framework

1. Team size and expertise
2. Application complexity
3. Scaling requirements
4. Development velocity needs`,
    slug: "microservices-vs-monoliths",
    date: "2024-03-18",
    author: sarahJohnson,
    tags: ["architecture", "microservices", "backend"],
    category: "Backend",
    readingTime: 15,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop",
    excerpt:
      "Compare microservices and monolithic architectures to make the best choice for your next project.",
    status: "published",
  },
  {
    id: "9",
    title: "Machine Learning for JavaScript Developers",
    description:
      "Introduction to machine learning concepts and implementations in JavaScript.",
    content: `# Machine Learning with JavaScript

Learn how to implement machine learning algorithms using JavaScript and TensorFlow.js.

## Getting Started

\`\`\`javascript
import * as tf from '@tensorflow/tfjs';

// Define a simple neural network
const model = tf.sequential({
  layers: [
    tf.layers.dense({ units: 1, inputShape: [1] })
  ]
});

// Compile the model
model.compile({ 
  loss: 'meanSquaredError',
  optimizer: 'sgd' 
});
\`\`\`

## Common Applications

1. Image Recognition
2. Natural Language Processing
3. Predictive Analytics
4. Recommendation Systems`,
    slug: "machine-learning-javascript",
    date: "2024-03-17",
    author: author,
    tags: ["machine-learning", "javascript", "tensorflow", "ai"],
    category: "Artificial Intelligence",
    readingTime: 20,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop",
    excerpt:
      "Discover how to implement machine learning algorithms using JavaScript and TensorFlow.js.",
    status: "published",
  },
  {
    id: "10",
    title: "Docker for Modern Web Development",
    description:
      "Learn how to use Docker to streamline your development workflow and deployment process.",
    content: `# Docker for Modern Web Development

A practical guide to using Docker in your web development workflow.

## Getting Started with Docker

\`\`\`dockerfile
# Example Dockerfile for a Node.js application
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## Key Concepts

1. Containers vs VMs
2. Images and Layers
3. Docker Compose
4. Development vs Production

## Best Practices

- Use multi-stage builds
- Optimize layer caching
- Implement health checks
- Secure your containers`,
    slug: "docker-modern-web-development",
    date: "2024-03-16",
    author: sarahJohnson,
    tags: ["docker", "devops", "containers", "deployment"],
    category: "DevOps",
    readingTime: 15,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&h=630&fit=crop",
    excerpt:
      "Master Docker containerization for modern web development workflows and deployments.",
    status: "published",
  },
  {
    id: "11",
    title: "Advanced React Performance Optimization",
    description:
      "Deep dive into React performance optimization techniques and best practices.",
    content: `# React Performance Optimization

Learn advanced techniques to optimize your React applications.

## Profiling and Measurement

\`\`\`javascript
import { Profiler } from 'react';

function onRenderCallback(
  id, // the "id" prop of the Profiler tree
  phase, // "mount" or "update"
  actualDuration, // time spent rendering
  baseDuration, // estimated time for single render
  startTime, // when React began rendering
  commitTime, // when React committed the updates
  interactions // the Set of interactions belonging to this update
) {
  // Log or send to analytics
}
\`\`\`

## Optimization Techniques

1. Memo and UseMemo
2. UseCallback
3. Virtualization
4. Code Splitting`,
    slug: "advanced-react-performance",
    date: "2024-03-15",
    author: author,
    tags: ["react", "performance", "optimization", "javascript"],
    category: "React",
    readingTime: 18,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=630&fit=crop",
    excerpt:
      "Learn advanced techniques for optimizing React applications, from profiling to code splitting.",
    status: "published",
  },
  {
    id: "12",
    title: "Building Scalable CSS Architecture",
    description:
      "A comprehensive guide to building maintainable and scalable CSS architectures.",
    content: `# Scalable CSS Architecture

Learn how to structure your CSS for large-scale applications.

## CSS Methodologies

1. BEM
2. ITCSS
3. CSS Modules
4. Utility-First

## Best Practices

\`\`\`css
/* Example using CSS custom properties */
:root {
  --color-primary: #3b82f6;
  --spacing-unit: 0.25rem;
}

.component {
  /* Use semantic names for variables */
  color: var(--color-primary);
  padding: calc(var(--spacing-unit) * 4);
}
\`\`\``,
    slug: "scalable-css-architecture",
    date: "2024-03-14",
    author: janeSmith,
    tags: ["css", "architecture", "frontend", "design-systems"],
    category: "CSS",
    readingTime: 14,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&h=630&fit=crop",
    excerpt:
      "Master the art of building maintainable and scalable CSS architectures for large applications.",
    status: "published",
  },
  {
    id: "13",
    title: "Web Security Best Practices",
    description:
      "Essential security practices for modern web applications and APIs.",
    content: `# Web Security Best Practices

Protect your web applications from common security vulnerabilities.

## Common Vulnerabilities

1. XSS Prevention
2. CSRF Protection
3. SQL Injection
4. Authentication

## Implementation Examples

\`\`\`typescript
// Example of secure password hashing
import * as bcrypt from 'bcrypt';

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
}
\`\`\``,
    slug: "web-security-best-practices",
    date: "2024-03-13",
    author: sarahJohnson,
    tags: ["security", "web", "authentication", "apis"],
    category: "Security",
    readingTime: 16,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=630&fit=crop",
    excerpt:
      "Learn essential security practices to protect your web applications from common vulnerabilities.",
    status: "published",
  },
  {
    id: "14",
    title: "Testing Strategies for Modern Applications",
    description:
      "Comprehensive guide to testing modern web applications effectively.",
    content: `# Testing Modern Applications

Learn effective testing strategies for your applications.

## Testing Pyramid

1. Unit Tests
2. Integration Tests
3. E2E Tests

## Example Tests

\`\`\`typescript
describe('UserService', () => {
  it('should authenticate valid users', async () => {
    const service = new UserService();
    const result = await service.authenticate({
      username: 'test',
      password: 'valid'
    });
    expect(result.success).toBe(true);
  });
});
\`\`\``,
    slug: "testing-strategies-modern-applications",
    date: "2024-03-12",
    author: author,
    tags: ["testing", "jest", "cypress", "tdd"],
    category: "Testing",
    readingTime: 15,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=630&fit=crop",
    excerpt:
      "Master different testing strategies and tools for building reliable applications.",
    status: "published",
  },
  {
    id: "15",
    title: "Building Progressive Web Apps",
    description:
      "Complete guide to building modern Progressive Web Applications (PWAs).",
    content: `# Progressive Web Applications

Learn how to build modern PWAs with advanced features.

## Key Features

1. Service Workers
2. Offline Support
3. Push Notifications
4. App-like Experience

## Service Worker Example

\`\`\`javascript
// service-worker.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/styles/main.css',
        '/scripts/app.js'
      ]);
    })
  );
});
\`\`\``,
    slug: "building-progressive-web-apps",
    date: "2024-03-11",
    author: janeSmith,
    tags: ["pwa", "service-workers", "offline-first", "web"],
    category: "Web Development",
    readingTime: 17,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1200&h=630&fit=crop",
    excerpt:
      "Learn how to build Progressive Web Apps with features like offline support and push notifications.",
    status: "published",
  },
  {
    id: "16",
    title: "GraphQL API Design Patterns",
    description:
      "Best practices and patterns for designing scalable GraphQL APIs.",
    content: `# GraphQL API Design

Learn how to design efficient and maintainable GraphQL APIs.

## Schema Design

\`\`\`graphql
type User {
  id: ID!
  name: String!
  posts(first: Int, after: String): PostConnection!
}

type PostConnection {
  edges: [PostEdge!]!
  pageInfo: PageInfo!
}

type PostEdge {
  node: Post!
  cursor: String!
}
\`\`\`

## Best Practices

1. Pagination
2. Error Handling
3. Authentication
4. Performance`,
    slug: "graphql-api-design-patterns",
    date: "2024-03-10",
    author: author,
    tags: ["graphql", "api-design", "backend", "nodejs"],
    category: "API Design",
    readingTime: 16,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop",
    excerpt:
      "Master GraphQL API design patterns and best practices for building scalable applications.",
    status: "published",
  },
];

export interface PostMetadata {
  slug: string;
  title: string;
  excerpt?: string;
  date: string;
  author: Author;
  tags?: string[];
  readingTime?: number;
  content: string;
  image?: string;
  featured?: boolean;
  category?: string;
  description?: string;
  status?: string;
}

export function getSortedPostsData(): PostMetadata[] {
  // Return the static posts array sorted by date
  return posts
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      author: post.author,
      tags: post.tags,
      readingTime: post.readingTime,
      content: post.content,
      image: post.image,
      featured: post.featured,
      category: post.category,
      description: post.description,
      status: post.status,
    }))
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
}

export function getPostData(slug: string): PostMetadata {
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    author: post.author,
    tags: post.tags,
    readingTime: post.readingTime,
    content: post.content,
    image: post.image,
    featured: post.featured,
    category: post.category,
    description: post.description,
    status: post.status,
  };
}

export function getRelatedPosts(
  currentSlug: string,
  tags: string[] = []
): PostMetadata[] {
  return posts
    .filter(
      (post) =>
        post.slug !== currentSlug &&
        post.tags?.some((tag) => tags.includes(tag))
    )
    .slice(0, 3)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      author: post.author,
      tags: post.tags,
      readingTime: post.readingTime,
      content: post.content,
      image: post.image,
      featured: post.featured,
      category: post.category,
      description: post.description,
      status: post.status,
    }));
}

export function getPaginatedPosts(
  page: number = 1,
  itemsPerPage: number = 6
): PaginationResult<PostMetadata> {
  const sortedPosts = getSortedPostsData();
  return paginateItems(sortedPosts, page, itemsPerPage);
}

export function getPaginatedPostsByTag(
  tag: string,
  page: number = 1,
  itemsPerPage: number = 6
): PaginationResult<PostMetadata> & { total: number } {
  const allPosts = getSortedPostsData();
  const filteredPosts = allPosts.filter((post) =>
    post.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
  );

  const paginatedResult = paginateItems(filteredPosts, page, itemsPerPage);

  return {
    ...paginatedResult,
    total: filteredPosts.length,
  };
}

export function getPaginatedPostsByCategory(
  category: string,
  page: number = 1,
  itemsPerPage: number = 6
): PaginationResult<PostMetadata> & { total: number } {
  const allPosts = getSortedPostsData();
  const filteredPosts = allPosts.filter(
    (post) => post.category?.toLowerCase() === category.toLowerCase()
  );

  const paginatedResult = paginateItems(filteredPosts, page, itemsPerPage);

  return {
    ...paginatedResult,
    total: filteredPosts.length,
  };
}
