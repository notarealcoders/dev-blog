import { Container } from "@/app/components/Container";
import PostsGrid from "@/app/components/PostsGrid";
import {
  getPaginatedPostsByCategory,
  getSortedPostsData,
  posts,
} from "@/lib/posts";
import { notFound } from "next/navigation";
import Search from "@/app/components/Search";
import Pagination from "@/app/components/Pagination";

interface CategoryPageProps {
  params: {
    category: string;
  };
  searchParams: {
    page?: string;
  };
}

// Helper function to ensure consistent slug generation
function createCategorySlug(category: string) {
  return encodeURIComponent(category.toLowerCase().trim());
}

// Generate static paths for all categories
export function generateStaticParams() {
  // Get unique categories and their slugs
  const uniqueCategories = new Set<string>();

  posts.forEach((post) => {
    if (post.category) {
      uniqueCategories.add(post.category);
    }
  });

  return Array.from(uniqueCategories).map((category) => ({
    category: createCategorySlug(category),
  }));
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const decodedCategory = decodeURIComponent(params.category);

  const {
    items: posts,
    totalPages,
    currentPage: validatedPage,
    total,
  } = getPaginatedPostsByCategory(decodedCategory, currentPage);

  if (total === 0) {
    notFound();
  }

  const allPosts = getSortedPostsData();

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto mb-12">
        <Search posts={allPosts} />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">
          {decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1)}
        </h1>
        <p className="text-muted-foreground">
          {total} {total === 1 ? "post" : "posts"} found
        </p>
      </div>

      <PostsGrid posts={posts} />

      {totalPages > 1 && (
        <div className="mt-12">
          <Pagination totalPages={totalPages} currentPage={validatedPage} />
        </div>
      )}
    </main>
  );
}
