"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, Tag as TagIcon } from "lucide-react";
import type { PostMetadata } from "@/lib/posts";

interface PostsGridProps {
  posts: PostMetadata[];
}

export default function PostsGrid({ posts }: PostsGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {posts.map((post) => (
        <motion.article
          key={post.slug}
          variants={item}
          className="border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <Link href={`/blog/${post.slug}`} className="block h-full">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || "/default-post-image.jpg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-auto">
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
                {post.tags && post.tags.length > 0 && (
                  <div className="flex items-center gap-1">
                    <TagIcon className="w-4 h-4" />
                    <span className="line-clamp-1">{post.tags.join(", ")}</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );
}
