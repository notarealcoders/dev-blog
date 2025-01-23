import { getPaginatedPosts } from "@/lib/posts";
import Pagination from "@/app/components/Pagination";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, Tag } from "lucide-react";
import Search from "@/app/components/Search";

export default async function BlogIndex({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const {
    items: posts,
    totalPages,
    currentPage: validatedPage,
  } = getPaginatedPosts(currentPage);
  const allPosts = getSortedPostsData(); // Get all posts for search

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <Search posts={allPosts} />
      </div>
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-48">
                <Image
                  src={post.image || "/default-post-image.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <time>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime} min read</span>
                  </div>
                  {post.tags && (
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      <span>{post.tags.join(", ")}</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={validatedPage} />
    </main>
  );
}
