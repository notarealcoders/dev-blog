import { getPaginatedPosts, getSortedPostsData } from "@/lib/posts";
import Pagination from "@/app/components/Pagination";
import Search from "@/app/components/Search";
import PostsGrid from "@/app/components/PostsGrid";

export default async function BlogPage({
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
  const allPosts = getSortedPostsData();

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto mb-12">
        <Search posts={allPosts} />
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center">Blog Posts</h1>

      <PostsGrid posts={posts} />

      {totalPages > 1 && (
        <div className="mt-12">
          <Pagination totalPages={totalPages} currentPage={validatedPage} />
        </div>
      )}
    </main>
  );
}
