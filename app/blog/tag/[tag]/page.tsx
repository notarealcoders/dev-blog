import { getPaginatedPostsByTag, getSortedPostsData } from "@/lib/posts";
import Pagination from "@/app/components/Pagination";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, Tag as TagIcon } from "lucide-react";
import Search from "@/app/components/Search";
import PostsGrid from "@/app/components/PostsGrid";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";

interface TagPageProps {
  params: {
    tag: string;
  };
  searchParams: {
    page?: string;
  };
}

export default async function TagPage({ params, searchParams }: TagPageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const tag = decodeURIComponent(params.tag);

  const {
    items: posts,
    totalPages,
    currentPage: validatedPage,
    total,
  } = getPaginatedPostsByTag(tag, currentPage);

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
          Posts tagged with &ldquo;{tag}&rdquo;
        </h1>
        <p className="text-muted-foreground">
          {total} {total === 1 ? "post" : "posts"} found
        </p>
      </div>

      <PostsGrid posts={posts} />

      <div className="mt-12">
        <Pagination totalPages={totalPages} currentPage={validatedPage} />
      </div>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { tag: string };
}) {
  const tag = decodeURIComponent(params.tag);
  const { total } = getPaginatedPostsByTag(tag);

  if (total === 0) {
    return {
      title: "Tag Not Found",
    };
  }

  return {
    title: `Posts tagged with "${tag}"`,
    description: `Browse all blog posts tagged with "${tag}". Find ${total} posts in this category.`,
  };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  const uniqueTags = new Set<string>();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      uniqueTags.add(tag.toLowerCase());
    });
  });

  return Array.from(uniqueTags).map((tag) => ({
    tag: encodeURIComponent(tag),
  }));
}
