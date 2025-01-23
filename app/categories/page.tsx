import { Post } from '@/lib/types';
import { posts } from '@/lib/posts';
import Link from 'next/link';
import { Tag } from 'lucide-react';

export default function CategoriesPage() {
  // Get unique categories and count posts in each
  const categories = posts.reduce((acc, post) => {
    const category = post.category;
    if (!acc[category]) {
      acc[category] = {
        name: category,
        slug: category.toLowerCase().replace(/\s+/g, '-'),
        count: 0,
        posts: [],
      };
    }
    acc[category].count++;
    acc[category].posts.push(post);
    return acc;
  }, {} as Record<string, { name: string; slug: string; count: number; posts: Post[] }>);

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Categories</h1>
          <p className="text-muted-foreground">
            Browse articles by topic to find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {Object.values(categories).map((category) => (
            <div
              key={category.slug}
              className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">{category.name}</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                {category.count} {category.count === 1 ? 'post' : 'posts'}
              </p>
              <ul className="space-y-2 mb-6">
                {category.posts.slice(0, 3).map((post) => (
                  <li key={post.id}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors line-clamp-1"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={`/categories/${category.slug}`}
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                View all posts →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}