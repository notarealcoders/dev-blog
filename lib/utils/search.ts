import { PostMetadata } from "@/lib/posts";

export function searchPosts(
  posts: PostMetadata[],
  query: string
): PostMetadata[] {
  const searchTerm = query.toLowerCase().trim();

  if (!searchTerm) return [];

  return posts.filter((post) => {
    const searchableContent = [
      post.title,
      post.excerpt,
      post.content,
      post.author.name,
      ...(post.tags || []),
      post.category,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableContent.includes(searchTerm);
  });
}
