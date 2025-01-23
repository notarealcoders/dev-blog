"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { PostMetadata } from "@/lib/posts";
import { searchPosts } from "@/lib/utils/search";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { useDebounce } from "@/lib/hooks/useDebounce";

interface SearchProps {
  posts: PostMetadata[];
}

export default function Search({ posts }: SearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PostMetadata[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      setIsSearching(true);
      const searchResults = searchPosts(posts, debouncedQuery);
      setResults(searchResults);
      setIsSearching(false);
    } else {
      setResults([]);
    }
  }, [debouncedQuery, posts]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Input
        type="search"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full"
      />

      {query && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-background border rounded-lg shadow-lg max-h-[70vh] overflow-auto">
          {isSearching ? (
            <div className="p-4 text-center text-muted-foreground">
              Searching...
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y">
              {results.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block p-4 hover:bg-muted transition-colors"
                >
                  <div className="flex gap-4">
                    {post.image && (
                      <div className="relative w-24 h-16 flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold truncate">{post.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        {post.readingTime && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readingTime} min read
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-muted-foreground">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
