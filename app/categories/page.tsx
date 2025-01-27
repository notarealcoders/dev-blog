import { Container } from "@/app/components/Container";
import { posts } from "@/lib/posts";
import Link from "next/link";
import { getCategoryIcon, createCategorySlug } from "@/lib/utils";

// Helper function to get category color class
function getCategoryColorClass(category: string): string {
  const colorMap: Record<string, string> = {
    "web development": "text-category-web",
    typescript: "text-category-typescript",
    javascript: "text-category-javascript",
    react: "text-category-react",
    "next.js": "dark:text-category-nextjs-dark text-category-nextjs-light",
    css: "text-category-css",
    backend: "text-category-backend",
    database: "text-category-database",
    "api design": "text-category-api",
    cloud: "text-category-cloud",
    "software architecture": "text-category-architecture",
    "development tools": "text-category-tools",
    "frontend development": "text-category-frontend",
    programming: "text-category-programming",
    "best practices": "text-category-practices",
    devops: "text-category-devops",
    security: "text-category-security",
    testing: "text-category-testing",
    networking: "text-category-networking",
    cybersecurity: "text-category-cybersecurity",
    "ui/ux design": "text-category-design",
    "mobile development": "text-category-mobile",
    "artificial intelligence": "text-category-ai",
    "machine learning": "text-category-ml",
    "data science": "text-category-data",
  };

  return colorMap[category.toLowerCase()] || "text-muted-foreground";
}

export default function CategoriesPage() {
  // Get unique categories and count posts for each
  const categories = posts.reduce((acc, post) => {
    if (post.category) {
      const category = post.category;
      if (!acc[category]) {
        acc[category] = {
          name: category,
          count: 0,
          description: getDescriptionForCategory(category),
          slug: createCategorySlug(category),
        };
      }
      acc[category].count++;
    }
    return acc;
  }, {} as Record<string, { name: string; count: number; description: string; slug: string }>);

  // Convert to array and sort by count
  const sortedCategories = Object.values(categories).sort(
    (a, b) => b.count - a.count
  );

  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Browse by Category
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCategories.map((category) => {
            const { icon: Icon } = getCategoryIcon(category.name);
            const colorClass = getCategoryColorClass(category.name);

            return (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className={`group p-6 bg-background rounded-lg border hover:border-primary transition-colors`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon
                    className={`w-8 h-8 ${colorClass} group-hover:scale-110 transition-transform`}
                  />
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {category.name}
                  </h2>
                </div>
                <p className="text-muted-foreground mb-3 line-clamp-2">
                  {category.description}
                </p>
                <p className="text-sm text-muted-foreground">
                  {category.count} {category.count === 1 ? "post" : "posts"}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

function getDescriptionForCategory(category: string): string {
  const descriptions: Record<string, string> = {
    "Web Development":
      "Frontend frameworks, responsive design, and modern web APIs",
    "UI/UX Design": "User interface design, accessibility, and user experience",
    Backend: "Server-side programming, APIs, and databases",
    DevOps: "Deployment, CI/CD, and cloud infrastructure",
    Frontend:
      "Client-side development, JavaScript frameworks, and UI libraries",
    Database: "Database design, optimization, and management",
    Cloud: "Cloud services, serverless architecture, and scalability",
    Programming: "Programming languages, algorithms, and best practices",
    Architecture: "System design, patterns, and software architecture",
    Tools: "Development tools, productivity, and workflow optimization",
    // Add more categories and descriptions as needed
  };

  return (
    descriptions[category] || `Explore articles about ${category.toLowerCase()}`
  );
}

// Add static configuration
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour
