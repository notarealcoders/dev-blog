import Link from "next/link";

export default function TagNotFound() {
  return (
    <main className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Tag Not Found</h1>
      <p className="text-muted-foreground mb-8">
        Sorry, we couldn't find any posts with that tag.
      </p>
      <Link
        href="/blog"
        className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
      >
        Back to Blog
      </Link>
    </main>
  );
}
