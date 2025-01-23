import { Post } from "@/lib/types";
import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Clock,
  Calendar,
  Tag,
  User,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ClientSyntaxHighlighter from "@/app/components/ClientSyntaxHighlighter";
import TableOfContents from "@/app/components/TableOfContents";
import ShareButtons from "@/app/components/ShareButtons";
import ReadingProgress from "@/app/components/ReadingProgress";
import BlogInteractions from "@/app/components/BlogInteractions";
import Link from "next/link";
import { Metadata } from "next";
import { getPostData, getRelatedPosts } from "@/lib/posts";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all blog posts
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Update the CodeBlock props interface
interface CodeBlockProps {
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

// Move CodeBlock to a separate client component
const CodeBlock = ({
  inline,
  className,
  children,
  ...props
}: CodeBlockProps) => {
  if (inline) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  const match = /language-(\w+)/.exec(className || "");
  const lang = match ? match[1] : "";
  const meta = props["data-meta"] || "";
  const fileName = meta.match(/file=([^\s]+)/)?.[1];

  // Ensure content is properly stringified
  const content = Array.isArray(children)
    ? children.join("")
    : String(children || "").trim();

  return (
    <div className="not-prose my-4">
      <ClientSyntaxHighlighter language={lang} fileName={fileName}>
        {content}
      </ClientSyntaxHighlighter>
    </div>
  );
};

// Add metadata generation
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${params.slug}`;

  return {
    title: `${post.title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
    },
    alternates: {
      canonical: url,
    },
    keywords: [post.category, "blog", "article", ...(post.tags || [])],
    category: post.category,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostData(params.slug);
  const relatedPosts = getRelatedPosts(params.slug, post.tags || []);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const fullUrl = `${baseUrl}/blog/${params.slug}`;

  return (
    <>
      <ReadingProgress />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
            <aside className="hidden lg:block sticky top-8 h-fit space-y-8">
              <TableOfContents content={post.content} />
              <div className="border-t pt-8">
                <h3 className="font-semibold mb-4">Share this article</h3>
                <ShareButtons title={post.title} url={fullUrl} />
              </div>
            </aside>

            <article className="prose dark:prose-invert prose-pre:p-0 max-w-none lg:max-w-3xl">
              <div className="mb-8">
                <BlogInteractions slug={params.slug} title={post.title} />
              </div>

              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime} min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span>{post.category}</span>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src={post.image || "/images/placeholder.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="markdown">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({
                      node,
                      inline,
                      className,
                      children,
                      ...props
                    }: {
                      node?: any;
                      inline?: boolean;
                      className?: string;
                      children: React.ReactNode;
                      [key: string]: any;
                    } & React.HTMLAttributes<HTMLElement>) {
                      if (inline) {
                        return (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      }
                      return (
                        <CodeBlock
                          inline={inline}
                          className={className}
                          {...props}
                        >
                          {children}
                        </CodeBlock>
                      );
                    },
                    // Properly handle pre tags
                    pre({ children }) {
                      return children;
                    },
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              <div className="mt-12 pt-8 border-t">
                <h2 className="text-2xl font-bold mb-4">About the Author</h2>
                <div className="flex items-start gap-4">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold mb-2">{post.author.name}</h3>
                    <p className="text-muted-foreground">{post.author.bio}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t pt-8 grid grid-cols-2 gap-4">
                {relatedPosts.length > 0 && (
                  <div className="related-posts mt-12">
                    <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="p-4 border rounded-lg hover:shadow-lg transition-shadow"
                        >
                          <h3 className="font-semibold">{relatedPost.title}</h3>
                          <p className="text-gray-600">{relatedPost.excerpt}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
