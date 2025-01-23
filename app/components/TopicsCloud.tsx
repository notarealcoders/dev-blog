import Link from "next/link";
import { PostMetadata } from "@/lib/posts";

interface TopicCount {
  name: string;
  count: number;
}

function getTopics(posts: PostMetadata[]): TopicCount[] {
  const topicsMap = new Map<string, number>();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      topicsMap.set(tag, (topicsMap.get(tag) || 0) + 1);
    });
  });

  return Array.from(topicsMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export default function TopicsCloud({ posts }: { posts: PostMetadata[] }) {
  const topics = getTopics(posts);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Popular Topics</h2>
        <div className="flex flex-wrap gap-3">
          {topics.map((topic) => (
            <Link
              key={topic.name}
              href={`/blog/tag/${topic.name}`}
              className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {topic.name}
              <span className="ml-2 text-muted-foreground">
                ({topic.count})
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
