import { Post } from '@/lib/types';
import { posts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Tag } from 'lucide-react';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const categories = new Set(posts.map(post => post.category.toLowerCase().replace(/\s+/g, '-')));
  return Array.from(categories).map(slug => ({ slug }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = posts.find(
    post => post.category.toLowerCase().replace(/\s+/g, '-') === params.slug
  )?.category;

  if (!categoryName) {
    notFound();
  }

  const categoryPosts = posts.filter(post => post.category === categoryName);

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">{categoryName}</h1>
          <p className="text-muted-foreground">
            {categoryPosts.length} {categoryPosts.length === 1 ? 'post' : 'posts'} in this category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {categoryPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <time>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readingTime} min read
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground line-clamp-2 mb-4">
                  {post.description}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-sm text-muted-foreground">
                      {post.author.name}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}