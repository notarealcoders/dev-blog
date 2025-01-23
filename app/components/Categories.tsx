import Link from "next/link";
import { Code, Layout, Server, Cpu } from "lucide-react";

const categories = [
  {
    name: "Web Development",
    description: "Frontend frameworks, responsive design, and modern web APIs",
    icon: Code,
    color: "text-blue-500",
  },
  {
    name: "UI/UX Design",
    description: "User interface design, accessibility, and user experience",
    icon: Layout,
    color: "text-purple-500",
  },
  {
    name: "Backend",
    description: "Server-side programming, APIs, and databases",
    icon: Server,
    color: "text-green-500",
  },
  {
    name: "DevOps",
    description: "Deployment, CI/CD, and cloud infrastructure",
    icon: Cpu,
    color: "text-orange-500",
  },
];

export default function Categories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={`/blog/category/${category.name.toLowerCase()}`}
                className="group p-6 bg-background rounded-lg border hover:border-primary transition-colors"
              >
                <Icon
                  className={`w-8 h-8 mb-4 ${category.color} group-hover:scale-110 transition-transform`}
                />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
