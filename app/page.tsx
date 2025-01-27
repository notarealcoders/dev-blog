import { getSortedPostsData } from "@/lib/posts";
import FeaturedPosts from "@/app/components/FeaturedPosts";
import Categories from "@/app/components/Categories";
import Newsletter from "@/app/components/Newsletter";
import FeaturedAuthors from "@/app/components/FeaturedAuthors";
import TopicsCloud from "@/app/components/TopicsCloud";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "@/components/ui/pagination";
import PostsGrid from "./components/PostsGrid";

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const posts = getSortedPostsData();
  const featuredPosts = posts
    .filter((post) => post.featured === true)
    .slice(0, 3);

  const featuredAuthors = posts
    .map((post) => post.author)
    .filter((author) => author.featured)
    .filter(
      (author, index, self) =>
        index === self.findIndex((a) => a.name === author.name)
    )
    .slice(0, 3);

  const totalPages = Math.ceil(posts.length / 10);
  const validatedPage = searchParams.page ? parseInt(searchParams.page) : 1;

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to <span className="text-primary">Dev Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover insightful articles, tutorials, and best practices in web
            development, design, and technology.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/blog">Browse Articles</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#categories">Explore Categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || "/images/default-post-image.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && <FeaturedPosts posts={featuredPosts} />}

      {/* Featured Authors */}
      {featuredAuthors.length > 0 && (
        <FeaturedAuthors authors={featuredAuthors} />
      )}

      {/* Categories */}
      <div id="categories">
        <Categories />
      </div>

      {/* Topics Cloud */}
      <TopicsCloud posts={posts} />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}
